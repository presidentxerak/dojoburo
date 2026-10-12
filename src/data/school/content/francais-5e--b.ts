import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-5e',
  chapters: [
    /* ================================================================== */
    /* LA PHRASE SIMPLE ET LA PHRASE COMPLEXE                               */
    /* ================================================================== */
    {
      id: 'phrase-complexe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'phrase-simple-complexe',
          title: 'Phrase simple, phrase complexe : repérer les propositions',
          minutes: 30,
          objectives: [
            "Identifier les verbes conjugués d'une phrase pour en compter les propositions.",
            "Distinguer la phrase simple et la phrase complexe.",
            "Délimiter les propositions d'une phrase complexe à l'aide de crochets.",
            "Reconnaître une proposition indépendante, une proposition principale et une proposition subordonnée.",
          ],
          course: [
            {
              heading: "La proposition : un verbe conjugué et ce qui l'entoure",
              paragraphs: [
                "Une proposition est un groupe de mots organisé autour d'un verbe conjugué. Le verbe en est le cœur ; autour de lui se placent son sujet et ses compléments. Dans « Le boulanger prépare le pain dès l'aube », il n'y a qu'un verbe conjugué, « prépare » : la phrase contient une seule proposition.",
                "Pour compter les propositions d'une phrase, comptez donc ses verbes conjugués : un verbe conjugué, une proposition ; trois verbes conjugués, trois propositions. Pour repérer un verbe conjugué, changez la personne (je, nous, ils) ou le temps (hier, demain) : seul le verbe conjugué change de forme.",
                "Trois pièges reviennent souvent. Un infinitif n'est pas conjugué : dans « Nous espérons partir tôt », seul « espérons » compte. Un participe employé seul ne compte pas non plus : dans « Fatigué, il s'endort », seul « s'endort » est conjugué. Enfin, un temps composé forme un seul verbe, même s'il s'écrit en deux mots : « elle est arrivée », « nous avons fini ».",
              ],
              box: { label: "Définition", text: "Une proposition est un groupe de mots organisé autour d'un verbe conjugué. Nombre de verbes conjugués = nombre de propositions. Un infinitif ou un participe employé seul ne compte pas ; un temps composé (auxiliaire + participe passé) compte pour un seul verbe." },
            },
            {
              heading: "Phrase simple, phrase complexe",
              paragraphs: [
                "Une phrase simple contient un seul verbe conjugué, donc une seule proposition : « Chaque été, ma tante loue une petite maison au bord de la mer. » Elle peut être longue : ce n'est pas la longueur qui compte, c'est le nombre de verbes conjugués.",
                "Une phrase complexe contient au moins deux verbes conjugués, donc au moins deux propositions : « Ma tante loue une maison et nous la rejoignons en août. » Une phrase très courte peut être complexe : « Il pleut, je reste. » contient deux verbes conjugués, donc deux propositions.",
                "Attention au sujet commun. Dans « Lucas se lève, s'habille et part au collège », le sujet « Lucas » n'est écrit qu'une fois, mais il y a trois verbes conjugués : la phrase compte trois propositions. Le sujet est simplement sous-entendu dans les deux dernières.",
              ],
              box: { label: "À retenir", text: "Phrase simple : un seul verbe conjugué, une seule proposition. Phrase complexe : au moins deux verbes conjugués, donc au moins deux propositions. La longueur de la phrase ne permet pas de trancher." },
            },
            {
              heading: "Délimiter les propositions avec des crochets",
              paragraphs: [
                "Pour bien voir les propositions, on les encadre par des crochets. Chaque paire de crochets contient un verbe conjugué et les mots qui dépendent de lui : [Le vent souffle] et [les volets claquent]. Les mots de liaison comme « et », « mais » ou « car » se placent entre les propositions ; les mots comme « qui », « que » ou « quand » se placent au début de la proposition qu'ils introduisent.",
                "Une proposition peut se glisser à l'intérieur d'une autre. Dans « Le vélo que mon père a réparé roule très bien », la proposition « que mon père a réparé » coupe en deux la proposition « Le vélo roule très bien ». On note alors : [Le vélo [que mon père a réparé] roule très bien]. Il faut lire la phrase en entier pour retrouver chaque proposition.",
              ],
              box: { label: "Repère", text: "Méthode des crochets : 1) soulignez les verbes conjugués ; 2) pour chacun, cherchez son sujet et ses compléments ; 3) encadrez chaque ensemble ; 4) vérifiez qu'il y a autant de paires de crochets que de verbes conjugués." },
            },
            {
              heading: "Indépendante, principale, subordonnée",
              paragraphs: [
                "Une proposition indépendante ne dépend d'aucune autre et aucune autre ne dépend d'elle. Elle pourrait former une phrase toute seule. Dans « [Le soleil se couche], [les promeneurs rentrent] », les deux propositions sont indépendantes : chacune a un sens complet.",
                "Une proposition subordonnée dépend d'une autre proposition. Elle commence par un mot subordonnant (qui, que, dont, où, quand, parce que, si...) et ne peut pas former une phrase seule : « parce qu'il pleut » n'a pas de sens complet. La proposition dont elle dépend s'appelle la proposition principale.",
                "Dans « [Nous restons à la maison] [parce qu'il pleut] », « Nous restons à la maison » est la principale et « parce qu'il pleut » est la subordonnée. Une image peut aider : la principale est comme la locomotive d'un train, et la subordonnée comme un wagon accroché derrière elle, qui ne roule pas seul.",
              ],
              box: { label: "Définition", text: "Indépendante : ne dépend d'aucune proposition et n'en commande aucune. Subordonnée : dépend d'une autre proposition, est introduite par un mot subordonnant et ne peut pas former une phrase seule. Principale : la proposition dont dépend la subordonnée." },
            },
          ],
          keyPoints: [
            "Une proposition s'organise autour d'un verbe conjugué : autant de verbes conjugués, autant de propositions.",
            "Un infinitif ou un participe seul ne compte pas ; un temps composé compte pour un seul verbe.",
            "Phrase simple : une seule proposition. Phrase complexe : au moins deux propositions.",
            "On délimite les propositions par des crochets ; une proposition peut en couper une autre.",
            "Indépendante : se suffit à elle-même. Subordonnée : dépend d'une principale et commence par un mot subordonnant.",
          ],
          example: {
            statement: "Combien de propositions la phrase « Mon frère regarde un film pendant que ma sœur, qui aime la musique, joue du piano » contient-elle ? Délimitez-les et donnez leur nature.",
            solution: [
              "Repérer les verbes conjugués : « regarde », « aime » et « joue ». Il y a trois verbes conjugués, donc trois propositions : la phrase est complexe.",
              "Chercher les mots subordonnants : « pendant que » introduit « pendant que ma sœur joue du piano » ; « qui » introduit « qui aime la musique ».",
              "La proposition « qui aime la musique » est glissée à l'intérieur de « pendant que ma sœur joue du piano » : elle coupe cette proposition en deux.",
              "Avec les crochets : [Mon frère regarde un film] [pendant que ma sœur [qui aime la musique] joue du piano].",
              "Nature : « Mon frère regarde un film » ne commence par aucun mot subordonnant et les autres dépendent d'elle : c'est la principale. « pendant que ma sœur joue du piano » et « qui aime la musique » sont des subordonnées.",
              "Réponse : trois propositions, une principale et deux subordonnées.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, relevez les verbes conjugués, puis dites si la phrase est simple ou complexe. a) Le train part à huit heures. b) Nous espérons arriver avant la nuit. c) Le vent s'est levé et les volets claquent. d) Le gâteau que Marie a préparé est délicieux. e) Après avoir mangé, les randonneurs ont repris la route. f) Inès chante, danse et rit.",
              hint: "Changez la personne ou le temps pour repérer les verbes conjugués. Un infinitif (arriver, avoir mangé) ne compte pas, et un temps composé (s'est levé) compte pour un seul verbe.",
              solution: [
                "a) Un verbe conjugué : « part ». Phrase simple.",
                "b) Un verbe conjugué : « espérons ». « arriver » est un infinitif. Phrase simple.",
                "c) Deux verbes conjugués : « s'est levé » (passé composé, un seul verbe) et « claquent ». Phrase complexe.",
                "d) Deux verbes conjugués : « a préparé » et « est ». Phrase complexe.",
                "e) Un verbe conjugué : « ont repris ». « avoir mangé » est un infinitif (infinitif passé) : il ne compte pas. Phrase simple.",
                "f) Trois verbes conjugués : « chante », « danse », « rit », avec le même sujet « Inès ». Phrase complexe de trois propositions.",
              ],
            },
            {
              level: 2,
              statement: "Délimitez les propositions de chaque phrase avec des crochets, puis donnez leur nature (indépendante, principale ou subordonnée). a) Les feuilles tombent, l'automne arrive. b) J'ai fermé la fenêtre parce qu'il faisait froid. c) La maison où mes grands-parents habitent se trouve au bord d'un lac. d) Nous voulions sortir, mais il pleuvait.",
              hint: "Cherchez d'abord les mots subordonnants (parce que, où...). Une proposition qui commence par l'un d'eux est une subordonnée ; celle dont elle dépend est la principale. Pour la phrase c, une proposition est glissée dans une autre.",
              solution: [
                "a) [Les feuilles tombent], [l'automne arrive]. Deux verbes conjugués, aucun mot subordonnant : deux propositions indépendantes, séparées par une virgule.",
                "b) [J'ai fermé la fenêtre] [parce qu'il faisait froid]. « parce qu'il faisait froid » est une subordonnée introduite par « parce que » ; « J'ai fermé la fenêtre » est la principale.",
                "c) [La maison [où mes grands-parents habitent] se trouve au bord d'un lac]. La subordonnée « où mes grands-parents habitent » coupe la principale « La maison se trouve au bord d'un lac ».",
                "d) [Nous voulions sortir], mais [il pleuvait]. « sortir » est un infinitif : il n'y a que deux verbes conjugués (voulions, pleuvait). Les deux propositions sont indépendantes, reliées par « mais ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce texte, écrit pour l'exercice : « (1) Le vieux phare, que personne ne gardait plus, se dressait au bout de la jetée. (2) Chaque soir, Lina s'y rendait. (3) Elle montait les marches et elle regardait la mer pendant que le soleil disparaissait. (4) Un soir, une lumière s'alluma au sommet. » a) Combien chaque phrase compte-t-elle de propositions ? b) Quelles phrases sont simples ? c) Délimitez les propositions des phrases 1 et 3 et donnez leur nature.",
              hint: "Soulignez tous les verbes conjugués avant de répondre. Dans la phrase 3, cherchez de quelle proposition dépend « pendant que le soleil disparaissait » : le soleil disparaît pendant qu'elle regarde la mer.",
              solution: [
                "a) Phrase 1 : deux verbes conjugués (gardait, se dressait), donc deux propositions. Phrase 2 : un seul (se rendait), donc une. Phrase 3 : trois (montait, regardait, disparaissait), donc trois. Phrase 4 : un seul (s'alluma), donc une.",
                "b) Les phrases 2 et 4 sont simples : elles ne contiennent qu'une proposition, même si elles commencent par une indication de temps.",
                "c) Phrase 1 : [Le vieux phare [que personne ne gardait plus] se dressait au bout de la jetée]. La subordonnée « que personne ne gardait plus » est glissée dans la principale « Le vieux phare se dressait au bout de la jetée ».",
                "c) Phrase 3 : [Elle montait les marches] et [elle regardait la mer] [pendant que le soleil disparaissait]. « pendant que le soleil disparaissait » est une subordonnée qui dépend de « elle regardait la mer », qui est donc sa principale.",
                "c) Suite : « Elle montait les marches » ne commande aucune subordonnée et ne dépend d'aucune : c'est une proposition indépendante, coordonnée par « et » à la principale.",
                "Résultat : 2 + 1 + 3 + 1 = 7 propositions dans le texte, dont deux phrases simples (2 et 4).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la proposition.",
            statements: [
              { text: "Une phrase longue est forcément une phrase complexe.", true: false, why: "C'est le nombre de verbes conjugués qui compte. Une longue phrase avec un seul verbe conjugué reste simple." },
              { text: "Dans « Nous voulons partir », il y a deux propositions.", true: false, why: "« partir » est un infinitif : seul « voulons » est conjugué. La phrase est simple." },
              { text: "« Il est venu » contient un seul verbe conjugué.", true: true, why: "Le passé composé « est venu » s'écrit en deux mots mais forme un seul verbe conjugué." },
              { text: "Une proposition subordonnée peut former une phrase toute seule.", true: false, why: "Elle dépend d'une principale : « parce qu'il pleut » n'a pas de sens complet sans elle." },
              { text: "Une proposition peut être coupée en deux par une autre proposition.", true: true, why: "Dans « Le vélo que mon père a réparé roule bien », la subordonnée coupe la principale." },
              { text: "Dans « Lucas se lève et s'habille », il y a deux propositions.", true: true, why: "Deux verbes conjugués (se lève, s'habille) ; le sujet « Lucas » est sous-entendu dans la seconde." },
            ],
          },
          quiz: [
            { q: "Combien de propositions la phrase « Quand il neige, les enfants font un bonhomme » contient-elle ?", options: ["Une", "Deux", "Trois"], answer: 1, why: "Deux verbes conjugués (neige, font), donc deux propositions : une subordonnée et une principale." },
            { q: "Quelle phrase est simple ?", options: ["Il pleut, je reste.", "Je sors quand il fait beau.", "Il aime lire des romans d'aventure.", "Mon frère regarde un film et ma sœur lit."], answer: 2, why: "« aime » est le seul verbe conjugué ; « lire » est un infinitif. Les autres phrases ont deux verbes conjugués." },
            { q: "Dans « Je pense que Léo viendra », quelle est la proposition subordonnée ?", options: ["que Léo viendra", "Je pense", "Je pense que Léo", "Je pense que"], answer: 0, why: "Elle commence par le mot subordonnant « que », dépend de « Je pense » et ne peut pas former une phrase seule." },
            { q: "Qu'est-ce qu'une proposition principale ?", options: ["La proposition la plus longue de la phrase", "Toujours la première proposition de la phrase", "Une proposition qui ne contient aucun verbe", "La proposition dont dépend une subordonnée"], answer: 3, why: "La principale commande la subordonnée ; elle n'est pas forcément placée en premier ni la plus longue." },
            { q: "Combien de verbes conjugués compte « Fatiguée, Zoé s'est assise sous un arbre » ?", options: ["Deux", "Un", "Trois"], answer: 1, why: "« Fatiguée » est un participe employé seul ; « s'est assise » est un passé composé : un seul verbe conjugué." },
          ],
          trap: "Compter un infinitif ou un participe employé seul comme un verbe conjugué, ou compter deux verbes dans un temps composé (« est arrivé »). Seuls les verbes conjugués, auxiliaire et participe ensemble, fondent une proposition.",
          method: "Avant de délimiter quoi que ce soit, soulignez tous les verbes conjugués et comptez-les. Écrivez ce nombre en marge, puis vérifiez à la fin que vous avez tracé exactement autant de paires de crochets.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'juxtaposition-coordination',
          title: 'Juxtaposer, coordonner, subordonner',
          minutes: 30,
          objectives: [
            "Identifier les trois façons de relier des propositions : juxtaposition, coordination, subordination.",
            "Reconnaître les conjonctions de coordination et les principaux mots subordonnants.",
            "Choisir un mot de liaison selon le rapport de sens voulu (cause, conséquence, opposition, temps).",
            "Rédiger des phrases complexes variées à partir de phrases simples.",
          ],
          course: [
            {
              heading: "Trois façons de relier des propositions",
              paragraphs: [
                "Dans une phrase complexe, les propositions sont reliées entre elles. Il existe trois façons de le faire. On peut les placer côte à côte, séparées par un signe de ponctuation : c'est la juxtaposition. On peut les relier par un mot de liaison qui les met sur le même plan : c'est la coordination. On peut enfin faire dépendre l'une de l'autre : c'est la subordination.",
                "Prenons deux idées : « Il pleut » et « Nous restons à l'intérieur ». Juxtaposées : « Il pleut, nous restons à l'intérieur. » Coordonnées : « Il pleut, donc nous restons à l'intérieur. » Subordonnées : « Comme il pleut, nous restons à l'intérieur. » Le sens général est proche, mais la construction change.",
              ],
              box: { label: "Repère", text: "Juxtaposition : une ponctuation (virgule, point-virgule, deux-points). Coordination : une conjonction de coordination ou un adverbe de liaison. Subordination : un mot subordonnant qui fait dépendre une proposition d'une autre." },
            },
            {
              heading: "La juxtaposition : la ponctuation suffit",
              paragraphs: [
                "Des propositions juxtaposées sont séparées par une virgule, un point-virgule ou deux-points, sans mot de liaison. Chacune garde son indépendance : « Le rideau se lève, le public se tait, la pièce commence. »",
                "Le lien de sens n'est pas écrit : c'est au lecteur de le deviner. Une suite de virgules donne souvent une impression de rapidité, comme dans un récit d'action. Les deux-points annoncent une explication ou une conséquence : « Léa est restée au lit : elle avait de la fièvre » (cause) ; « Le pont s'est effondré : la route est coupée » (conséquence).",
              ],
            },
            {
              heading: "La coordination : un mot de liaison entre deux égales",
              paragraphs: [
                "Des propositions coordonnées sont reliées par une conjonction de coordination. Il y en a sept : mais, ou, et, donc, or, ni, car. Une phrase permet de les retenir : « Mais où est donc Ornicar ? ». Les deux propositions restent sur le même plan : chacune pourrait former une phrase seule.",
                "Chaque conjonction exprime un rapport de sens : « et » ajoute, « mais » oppose, « ou » propose un choix, « car » donne une cause, « donc » annonce une conséquence, « or » introduit un nouvel élément dans un raisonnement, « ni » relie deux négations. Exemple : « Je voulais venir, mais mon train était en retard. »",
                "Certains adverbes jouent aussi ce rôle de liaison : puis, ensuite, alors, pourtant, cependant, enfin. « Nous avons visité le château, puis nous avons pique-niqué. » Certaines grammaires récentes classent d'ailleurs « donc » parmi ces adverbes de liaison, car il peut changer de place : « Nous sommes donc restés. »",
              ],
              box: { label: "À retenir", text: "Les sept conjonctions de coordination : mais, ou, et, donc, or, ni, car. Elles relient deux propositions de même rang. Les adverbes de liaison (puis, ensuite, alors, pourtant, cependant) peuvent aussi coordonner des propositions." },
            },
            {
              heading: "La subordination : une proposition qui dépend d'une autre",
              paragraphs: [
                "Une proposition subordonnée est introduite par un mot subordonnant et dépend d'une proposition principale. Elle ne peut pas former une phrase seule : « lorsque la nuit tombe » attend une suite.",
                "Les mots subordonnants les plus fréquents sont de deux sortes. Les pronoms relatifs (qui, que, dont, où, lequel...) introduisent une subordonnée relative, que vous étudierez dans la leçon suivante. Les conjonctions de subordination introduisent les autres subordonnées : que, quand, lorsque, si, comme, puisque, parce que, pour que, afin que, bien que, avant que, pendant que, dès que.",
                "Comme la coordination, la subordination exprime un rapport de sens : la cause (parce que, puisque, comme), le temps (quand, lorsque, pendant que, dès que), le but (pour que, afin que), la condition (si). Exemple : « Nous partirons dès que le soleil se lèvera » (temps).",
              ],
              box: { label: "Définition", text: "Une conjonction de subordination (que, quand, lorsque, si, comme, puisque, parce que, pour que, bien que...) introduit une proposition subordonnée et la rattache à une proposition principale." },
            },
            {
              heading: "Choisir le bon lien",
              paragraphs: [
                "Une même idée peut s'exprimer de plusieurs façons. Pour la cause, on peut écrire : « Il est en retard : il a raté le bus » (juxtaposition), « Il est en retard, car il a raté le bus » (coordination) ou « Il est en retard parce qu'il a raté le bus » (subordination). La subordination rend le lien le plus explicite.",
                "Dans vos rédactions, variez ces liens. Un texte fait uniquement de phrases simples paraît haché ; un texte où tout est relié par « et » paraît monotone. Choisissez le mot de liaison qui dit exactement le rapport que vous voulez exprimer : « mais » pour une opposition, « donc » pour une conséquence, « parce que » pour une cause.",
              ],
            },
          ],
          keyPoints: [
            "Juxtaposition : propositions séparées par une virgule, un point-virgule ou deux-points.",
            "Coordination : mais, ou, et, donc, or, ni, car, ou un adverbe de liaison (puis, alors, pourtant...).",
            "Subordination : un mot subordonnant (pronom relatif ou conjonction de subordination) fait dépendre une proposition d'une principale.",
            "Chaque lien exprime un rapport de sens : addition, opposition, cause, conséquence, temps, but, condition.",
            "Car (coordination) et parce que (subordination) expriment tous deux la cause, mais ne construisent pas la phrase de la même façon.",
          ],
          example: {
            statement: "Reliez les deux phrases « Le magasin était fermé. Nous sommes rentrés chez nous. » de trois façons : par juxtaposition, par coordination, puis par subordination. Indiquez le rapport de sens exprimé.",
            solution: [
              "Le rapport de sens : la fermeture du magasin est la cause du retour à la maison. Le retour en est la conséquence.",
              "Juxtaposition : « Le magasin était fermé : nous sommes rentrés chez nous. » Les deux-points annoncent la conséquence, sans mot de liaison.",
              "Coordination : « Le magasin était fermé, donc nous sommes rentrés chez nous. » La conjonction « donc » exprime la conséquence. On pourrait aussi écrire « Nous sommes rentrés chez nous, car le magasin était fermé » (cause).",
              "Subordination : « Comme le magasin était fermé, nous sommes rentrés chez nous. » La conjonction « comme » introduit une subordonnée de cause ; « nous sommes rentrés chez nous » est la principale.",
              "Réponse : trois phrases complexes qui expriment le même lien de cause et de conséquence, construites de trois façons différentes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dites si les propositions sont juxtaposées, coordonnées ou subordonnées, et relevez le mot ou le signe qui les relie. a) Le soleil brille, les oiseaux chantent. b) Je voulais venir, mais j'étais malade. c) Mon voisin me prêtera son vélo si je le lui rends demain. d) Le cinéma était complet ; nous sommes repartis. e) Il n'a pas dormi, car le bruit l'en empêchait. f) Lorsque le rideau se lève, le public se tait.",
              hint: "Cherchez d'abord s'il y a un mot de liaison. S'il n'y en a pas, c'est une juxtaposition. S'il y en a un, vérifiez s'il fait partie des sept conjonctions de coordination.",
              solution: [
                "a) Juxtaposition : les deux propositions sont séparées par une virgule.",
                "b) Coordination : la conjonction de coordination « mais » (opposition).",
                "c) Subordination : la conjonction de subordination « si » (condition) introduit « si je le lui rends demain ».",
                "d) Juxtaposition : les propositions sont séparées par un point-virgule.",
                "e) Coordination : la conjonction de coordination « car » (cause).",
                "f) Subordination : la conjonction de subordination « lorsque » (temps) introduit « Lorsque le rideau se lève ».",
              ],
            },
            {
              level: 2,
              statement: "Reliez chaque paire de phrases en suivant la consigne. a) « Il fait beau. Nous irons à la plage. » : coordination exprimant la conséquence. b) « Elle s'est entraînée tous les jours. Elle a perdu la course. » : coordination exprimant l'opposition. c) « Le réveil a sonné. Paul s'est levé. » : subordination exprimant le temps. d) « Je ne suis pas sorti. Il neigeait trop. » : subordination exprimant la cause.",
              hint: "Choisissez d'abord le mot de liaison qui exprime le bon rapport : donc (conséquence), mais (opposition), dès que ou quand (temps), parce que ou comme (cause). Supprimez ensuite le point qui sépare les phrases.",
              solution: [
                "a) « Il fait beau, donc nous irons à la plage. » La conjonction « donc » exprime la conséquence.",
                "b) « Elle s'est entraînée tous les jours, mais elle a perdu la course. » La conjonction « mais » exprime l'opposition.",
                "c) « Dès que le réveil a sonné, Paul s'est levé. » (ou « Quand le réveil a sonné... »). La subordonnée de temps est introduite par « dès que ».",
                "d) « Je ne suis pas sorti parce qu'il neigeait trop. » (ou « Comme il neigeait trop, je ne suis pas sorti. »). La subordonnée de cause est introduite par « parce que » ou « comme ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce petit texte, écrit pour l'exercice, est fait uniquement de phrases simples : « Tom ouvre la porte du grenier. Il fait très sombre. Il allume sa lampe. Il découvre une vieille malle. La malle est fermée à clé. Tom ne se décourage pas. » Réécrivez-le en trois phrases complexes. Vous utiliserez au moins une juxtaposition, une coordination et une subordination, puis vous nommerez chaque lien employé.",
              hint: "Regroupez les phrases deux par deux en cherchant le rapport de sens entre elles : la nuit dans le grenier est la cause de la lampe allumée ; la malle fermée s'oppose à la ténacité de Tom.",
              solution: [
                "Repérer les rapports de sens : il fait sombre, donc Tom allume sa lampe (cause et conséquence) ; il allume sa lampe, puis il découvre la malle (succession) ; la malle est fermée, pourtant Tom ne renonce pas (opposition).",
                "Phrase 1 (juxtaposition) : « Tom ouvre la porte du grenier : il fait très sombre. » Les deux-points annoncent ce que Tom découvre en ouvrant, sans mot de liaison.",
                "Phrase 2 (coordination) : « Il allume sa lampe, puis il découvre une vieille malle. » L'adverbe de liaison « puis » marque la succession des actions (on pourrait aussi employer la conjonction « et »).",
                "Phrase 3 (subordination) : « Bien que la malle soit fermée à clé, Tom ne se décourage pas. » La conjonction de subordination « bien que » introduit une subordonnée d'opposition ; elle est suivie du subjonctif « soit ». « Tom ne se décourage pas » est la principale.",
                "Texte final proposé : « Tom ouvre la porte du grenier : il fait très sombre. Il allume sa lampe, puis il découvre une vieille malle. Bien que la malle soit fermée à clé, Tom ne se décourage pas. » D'autres réécritures sont justes si les trois liens sont présents et correctement nommés (par exemple « La malle est fermée à clé, mais Tom ne se décourage pas » pour une coordination).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot ou signe de liaison au lien qu'il crée et au sens qu'il exprime.",
            pairs: [
              { left: "car", right: "Coordination qui exprime la cause" },
              { left: "parce que", right: "Subordination qui exprime la cause" },
              { left: "donc", right: "Coordination qui exprime la conséquence" },
              { left: "mais", right: "Coordination qui exprime l'opposition" },
              { left: "lorsque", right: "Subordination qui exprime le temps" },
              { left: "le point-virgule", right: "Juxtaposition, sans mot de liaison" },
            ],
          },
          quiz: [
            { q: "Lequel de ces mots n'est pas une conjonction de coordination ?", options: ["or", "quand", "ni", "car"], answer: 1, why: "« quand » est une conjonction de subordination. Les conjonctions de coordination sont mais, ou, et, donc, or, ni, car." },
            { q: "« Le chat miaule, il a faim. » Comment les propositions sont-elles reliées ?", options: ["Par juxtaposition", "Par coordination", "Par subordination"], answer: 0, why: "Une simple virgule les sépare, sans mot de liaison : elles sont juxtaposées." },
            { q: "Quel mot introduit une subordonnée de cause ?", options: ["mais", "donc", "puisque", "pourtant"], answer: 2, why: "« puisque » est une conjonction de subordination qui exprime la cause. « mais », « donc » et « pourtant » coordonnent." },
            { q: "Quel rapport de sens exprime « Je l'ai appelé, mais il n'a pas répondu » ?", options: ["La cause", "Le but", "L'opposition", "La condition"], answer: 2, why: "La conjonction « mais » oppose deux faits : l'appel et l'absence de réponse." },
            { q: "Dans « Nous partirons si la pluie cesse », quelle est la principale ?", options: ["si la pluie cesse", "Nous partirons", "la pluie cesse"], answer: 1, why: "« si la pluie cesse » est une subordonnée introduite par « si » ; elle dépend de « Nous partirons », la principale." },
          ],
          trap: "Confondre « car » et « parce que » : les deux expriment la cause, mais « car » est une conjonction de coordination, alors que « parce que » est une conjonction de subordination qui introduit une subordonnée.",
          method: "Pour reconnaître le lien, regardez ce qu'il y a entre les deux verbes conjugués : rien qu'une ponctuation, c'est une juxtaposition ; l'un des mots de « Mais où est donc Ornicar ? », c'est une coordination ; un mot qui rend une proposition incapable de vivre seule, c'est une subordination.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subordonnee-relative',
          title: 'La proposition subordonnée relative et son antécédent',
          minutes: 35,
          objectives: [
            "Identifier une proposition subordonnée relative et son antécédent.",
            "Reconnaître les pronoms relatifs simples et composés.",
            "Choisir le pronom relatif qui convient selon sa fonction dans la relative.",
            "Relier deux phrases simples par une subordonnée relative.",
          ],
          course: [
            {
              heading: "Reconnaître une subordonnée relative",
              paragraphs: [
                "La proposition subordonnée relative est introduite par un pronom relatif. Elle complète un nom (ou un pronom) placé juste avant elle, que l'on appelle l'antécédent. Dans « J'ai lu le livre qui raconte la vie de Marie Curie », la relative est « qui raconte la vie de Marie Curie » et son antécédent est « le livre ».",
                "La relative joue le même rôle qu'un adjectif : elle apporte une précision sur le nom. « Un enfant qui rit » ressemble à « un enfant rieur ». C'est pourquoi on la classe parmi les expansions du nom. Le plus souvent, on peut la supprimer sans rendre la phrase incorrecte : « J'ai lu le livre. »",
                "Le pronom relatif reprend l'antécédent, un peu comme un relais. Dans « le livre qui raconte... », « qui » remplace « le livre » : le livre raconte la vie de Marie Curie. Ce relais permet de fusionner deux phrases en une seule.",
              ],
              box: { label: "Définition", text: "La subordonnée relative est introduite par un pronom relatif. Elle complète un nom ou un pronom, l'antécédent, placé juste avant elle. Le pronom relatif reprend cet antécédent à l'intérieur de la relative." },
            },
            {
              heading: "Les pronoms relatifs",
              paragraphs: [
                "Les pronoms relatifs simples sont : qui, que (qu' devant une voyelle), quoi, dont, où. Ce sont les plus fréquents : « la fille qui chante », « le film que nous avons vu », « l'outil dont j'ai besoin », « la ville où je suis né ».",
                "Les pronoms relatifs composés varient en genre et en nombre, selon leur antécédent : lequel, laquelle, lesquels, lesquelles. Avec les prépositions « à » et « de », ils se contractent : auquel, auxquels, auxquelles (mais à laquelle) ; duquel, desquels, desquelles (mais de laquelle). Exemple : « la table sur laquelle nous mangeons », « les amis auxquels je pense ».",
              ],
              box: { label: "À retenir", text: "Pronoms relatifs simples : qui, que, quoi, dont, où. Pronoms relatifs composés : lequel, laquelle, lesquels, lesquelles, et leurs formes contractées auquel, auxquels, auxquelles, duquel, desquels, desquelles." },
            },
            {
              heading: "Choisir le bon pronom selon sa fonction",
              paragraphs: [
                "Le choix du pronom dépend du rôle qu'il joue dans la relative. « Qui » est sujet du verbe de la relative : « le chien qui aboie » (le chien aboie). « Que » est le plus souvent complément d'objet direct : « le chien que je promène » (je promène le chien).",
                "« Dont » remplace un complément introduit par « de » : « le film dont je vous ai parlé » (je vous ai parlé de ce film), « une amie dont le père est pilote » (le père de cette amie). « Où » indique un lieu ou un moment : « la ville où j'habite », « le jour où il est arrivé ».",
                "Après une autre préposition (avec, sur, pour, chez, à...), on emploie « qui » pour une personne ou une forme de « lequel » : « l'ami avec qui je joue », « le stylo avec lequel j'écris », « la chaise sur laquelle il est assis ».",
              ],
              box: { label: "Règle", text: "Qui : sujet (le chat qui dort). Que : complément d'objet direct (le chat que je caresse). Dont : complément introduit par « de » (le chat dont je m'occupe). Où : lieu ou temps (la maison où il vit, l'heure où il part). Préposition + qui ou lequel : l'ami à qui j'écris, la boîte dans laquelle je range mes billes." },
            },
            {
              heading: "Relier deux phrases et éviter les erreurs",
              paragraphs: [
                "Pour relier deux phrases par une relative, repérez le nom répété, choisissez le pronom selon sa fonction dans la seconde phrase, puis placez la relative juste après l'antécédent. « Voici le gâteau. J'ai préparé ce gâteau. » donne « Voici le gâteau que j'ai préparé. »",
                "Le pronom relatif remplace déjà le complément : il ne faut pas le répéter. On écrit « le film dont je vous ai parlé », et non « le film dont je vous en ai parlé ». De même, « C'est de cela que je parle » est correct, alors que « C'est de cela dont je parle » répète deux fois le « de ».",
                "Après « qui », le verbe s'accorde avec l'antécédent : « les élèves qui sont venus », « C'est moi qui ai gagné », « C'est nous qui avons gagné ». Enfin, ne confondez pas le pronom relatif « que », qui a un antécédent (« le livre que je lis »), avec la conjonction « que », qui suit un verbe et n'a pas d'antécédent (« Je pense que Paul viendra »).",
              ],
            },
          ],
          keyPoints: [
            "La relative est introduite par un pronom relatif et complète un nom placé juste avant : l'antécédent.",
            "Pronoms simples : qui, que, quoi, dont, où ; composés : lequel, laquelle, lesquels, lesquelles, auquel, duquel...",
            "Qui = sujet ; que = COD ; dont = complément introduit par « de » ; où = lieu ou temps.",
            "Le pronom relatif remplace le complément : jamais « dont... en » ni « de cela dont ».",
            "Après « qui », le verbe s'accorde avec l'antécédent : « C'est moi qui ai gagné ».",
          ],
          example: {
            statement: "Dans la phrase « La chanteuse que nous écoutons chaque matin vit dans le village où je suis né », relevez les subordonnées relatives, leur pronom relatif, leur antécédent, et expliquez le choix de chaque pronom.",
            solution: [
              "Repérer les verbes conjugués : « écoutons », « vit », « suis né ». Il y a trois propositions.",
              "Première relative : « que nous écoutons chaque matin ». Pronom relatif : « que ». Antécédent : « La chanteuse ». Le pronom est « que » car il est COD : nous écoutons la chanteuse.",
              "Seconde relative : « où je suis né ». Pronom relatif : « où ». Antécédent : « le village ». Le pronom est « où » car il indique le lieu : je suis né dans ce village.",
              "La principale est ce qui reste quand on retire les relatives : « La chanteuse vit dans le village ».",
              "Réponse : deux relatives, introduites par « que » (COD, antécédent « la chanteuse ») et par « où » (lieu, antécédent « le village »).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez la subordonnée relative, son pronom relatif et son antécédent. a) J'ai retrouvé le stylo que j'avais perdu. b) Les enfants qui jouent dans le parc sont mes cousins. c) C'est une ville où il pleut souvent. d) Voici le livre dont Léo m'a parlé. e) La table sur laquelle nous mangeons est en chêne.",
              hint: "Cherchez d'abord le pronom relatif (qui, que, dont, où, lequel...). La relative va du pronom jusqu'à la fin de son verbe et de ses compléments ; l'antécédent est le nom placé juste avant le pronom (ou avant la préposition).",
              solution: [
                "a) Relative : « que j'avais perdu ». Pronom : « que ». Antécédent : « le stylo ».",
                "b) Relative : « qui jouent dans le parc ». Pronom : « qui ». Antécédent : « Les enfants ».",
                "c) Relative : « où il pleut souvent ». Pronom : « où ». Antécédent : « une ville ».",
                "d) Relative : « dont Léo m'a parlé ». Pronom : « dont ». Antécédent : « le livre ».",
                "e) Relative : « sur laquelle nous mangeons ». Pronom : « laquelle », précédé de la préposition « sur ». Antécédent : « La table ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le pronom relatif qui convient et justifiez votre choix. a) Le film ... nous avons vu était drôle. b) La maison ... j'ai grandi a été vendue. c) C'est un outil ... on a besoin pour bricoler. d) Le garçon ... court le plus vite s'appelle Malik. e) Le crayon avec ... je dessine est rouge. f) Mes amis, à ... je pense souvent, habitent loin.",
              hint: "Remettez l'antécédent dans la relative pour trouver sa fonction : « nous avons vu le film » (COD), « j'ai grandi dans la maison » (lieu), « on a besoin de cet outil » (complément avec « de »).",
              solution: [
                "a) « que » : nous avons vu le film, « le film » est COD.",
                "b) « où » : j'ai grandi dans la maison, c'est un complément de lieu.",
                "c) « dont » : on a besoin de cet outil, le complément est introduit par « de ».",
                "d) « qui » : le garçon court le plus vite, « le garçon » est sujet.",
                "e) « lequel » : le pronom suit la préposition « avec » et reprend « le crayon », masculin singulier.",
                "f) « qui » : après la préposition « à », pour des personnes. « auxquels » est aussi correct : « Mes amis, auxquels je pense souvent... ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Reliez chaque paire de phrases par une subordonnée relative, puis indiquez la fonction du pronom relatif. a) J'ai lu un roman. Ce roman raconte l'histoire d'un pirate. b) J'ai lu un roman. Mon professeur m'avait conseillé ce roman. c) Voici un roman. L'auteur de ce roman est belge. d) Je me souviens de cet été. Nous avons découvert la mer cet été-là. e) Corrigez enfin cette phrase fautive : « C'est le livre dont je vous en ai parlé. »",
              hint: "Repérez le groupe répété dans la seconde phrase et sa fonction : sujet (qui), COD (que), complément avec « de » (dont), indication de temps ou de lieu (où). Pour la phrase e, demandez-vous ce que remplace déjà « dont ».",
              solution: [
                "a) « J'ai lu un roman qui raconte l'histoire d'un pirate. » « qui » est sujet de « raconte » (ce roman raconte...).",
                "b) « J'ai lu un roman que mon professeur m'avait conseillé. » « que » est COD de « avait conseillé » (il m'avait conseillé ce roman).",
                "c) « Voici un roman dont l'auteur est belge. » « dont » est complément du nom « auteur » (l'auteur de ce roman).",
                "d) « Je me souviens de l'été où nous avons découvert la mer. » « où » est complément de temps (nous avons découvert la mer cet été-là).",
                "e) « dont » signifie déjà « de ce livre » ; le pronom « en » répète la même idée. Phrase corrigée : « C'est le livre dont je vous ai parlé. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour relier deux phrases par une subordonnée relative.",
            items: [
              "Repérer le groupe de mots répété dans les deux phrases : ce sera l'antécédent.",
              "Chercher la fonction de ce groupe dans la seconde phrase : sujet, COD, complément avec « de », lieu ou temps.",
              "Choisir le pronom relatif qui correspond à cette fonction : qui, que, dont ou où.",
              "Remplacer le groupe répété par le pronom et placer celui-ci en tête de la proposition.",
              "Placer la relative juste après son antécédent dans la première phrase.",
              "Relire pour vérifier qu'aucun complément n'est répété (pas de « dont... en »).",
            ],
          },
          quiz: [
            { q: "Dans « Le chien que Léa promène est très calme », quel est l'antécédent ?", options: ["Léa", "promène", "Le chien", "très calme"], answer: 2, why: "Le pronom « que » reprend « le chien », placé juste avant lui : Léa promène le chien." },
            { q: "Quel pronom complète « C'est la région ... je passe mes vacances » ?", options: ["où", "dont", "que", "qui"], answer: 0, why: "Il s'agit d'un lieu : je passe mes vacances dans cette région. On emploie « où »." },
            { q: "Quelle phrase est correcte ?", options: ["Voici l'ami dont je vous en ai parlé.", "Voici l'ami que je vous ai parlé.", "Voici l'ami dont je vous ai parlé.", "Voici l'ami qui je vous ai parlé."], answer: 2, why: "On parle de quelqu'un : le complément est introduit par « de », d'où « dont ». Le pronom « en » serait une répétition." },
            { q: "Dans « Je sais que vous avez raison », quelle est la nature de « que » ?", options: ["Un pronom relatif qui reprend un antécédent", "Une conjonction de subordination", "Une conjonction de coordination"], answer: 1, why: "« que » suit le verbe « sais » et n'a pas d'antécédent : c'est une conjonction de subordination, pas un pronom relatif." },
            { q: "Comment écrire correctement : « C'est moi qui ... le gâteau » (faire, passé composé) ?", options: ["ai fait", "a fait", "avons fait"], answer: 0, why: "Après « qui », le verbe s'accorde avec l'antécédent « moi » : c'est moi qui ai fait." },
          ],
          trap: "Ajouter un pronom en trop après « dont » (« le film dont je vous en ai parlé ») ou écrire « que » à la place de « dont » (« l'outil que j'ai besoin »). Le pronom relatif remplace déjà tout le complément, préposition « de » comprise.",
          method: "Pour choisir le pronom relatif, remettez l'antécédent dans la relative comme si c'était une phrase seule : « j'ai besoin de cet outil » montre un « de », donc « dont » ; « je promène le chien » montre un COD, donc « que ».",
        },
      ],
    },
    /* ================================================================== */
    /* EXPÉRIMENTER ET JOUER AU THÉÂTRE                                     */
    /* ================================================================== */
    {
      id: 'theatre-sens-dessus-dessous',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'lire-texte-theatre',
          title: 'Lire un texte de théâtre : répliques et didascalies',
          minutes: 30,
          objectives: [
            "Identifier les répliques et les didascalies d'un texte de théâtre et dire ce qu'elles apprennent.",
            "Distinguer la tirade, le monologue et l'aparté.",
            "Repérer l'organisation d'une pièce en actes et en scènes, de l'exposition au dénouement.",
            "Expliquer la double énonciation propre au théâtre.",
          ],
          course: [
            {
              heading: "Un texte écrit pour être joué",
              paragraphs: [
                "Une pièce de théâtre n'est pas faite d'abord pour être lue en silence : elle est écrite pour être jouée par des comédiens devant des spectateurs. Il n'y a pas de narrateur pour décrire les lieux ou expliquer ce que pensent les personnages. Tout passe par ce que les personnages disent et font sur scène.",
                "Au début de la pièce, une liste des personnages présente ceux qui vont parler, souvent avec leur lien entre eux : « Géronte, père de Léandre », « Scapin, valet de Léandre ». Lire du théâtre demande donc un effort d'imagination : il faut se représenter la scène, les voix, les gestes, comme si l'on était assis dans la salle.",
              ],
            },
            {
              heading: "Répliques et didascalies",
              paragraphs: [
                "Le texte de théâtre mélange deux sortes d'écrits. Les répliques sont les paroles prononcées par les personnages ; chacune est précédée du nom de celui qui parle, souvent en majuscules. L'ensemble des répliques forme le dialogue.",
                "Les didascalies sont les indications de l'auteur, qui ne sont pas prononcées sur scène. Souvent écrites en italique ou entre parenthèses, elles précisent le lieu et l'époque, les entrées et sorties, les gestes, le ton, les déplacements : « (Il frappe à la porte.) », « (à voix basse) », « (sortant en courant) ». La didascalie placée en tête de la pièce situe l'action ; Molière écrit par exemple, au début des Fourberies de Scapin, que la scène se passe à Naples.",
                "Les auteurs du XVIIe siècle écrivent peu de didascalies. Beaucoup d'indications se trouvent alors dans les répliques elles-mêmes : quand un personnage dit « Que vois-je ? Quelqu'un approche », le lecteur comprend qu'un autre personnage arrive. On parle de didascalies internes.",
              ],
              box: { label: "Définition", text: "Réplique : ce que dit un personnage, précédé de son nom. Didascalie : indication de l'auteur, non prononcée, qui renseigne sur le lieu, les gestes, le ton, les entrées et les sorties. Didascalie interne : indication de jeu contenue dans une réplique." },
            },
            {
              heading: "Les formes de la parole",
              paragraphs: [
                "Une réplique peut être très courte ou très longue. Une longue réplique, où un personnage développe une idée ou un sentiment devant d'autres personnages, s'appelle une tirade. Quand les répliques sont courtes et s'enchaînent très vite, comme une partie de ping-pong, on parle de stichomythie : le rythme s'accélère, souvent dans une dispute.",
                "Le monologue est le discours d'un personnage seul en scène, qui se parle à lui-même : il hésite, se plaint ou prépare un plan. L'aparté est une courte réplique qu'un personnage prononce « à part » : les autres personnages présents sont censés ne pas l'entendre, mais le public, lui, l'entend. C'est une convention : tout le monde accepte de faire comme si elle était naturelle.",
              ],
              box: { label: "À retenir", text: "Tirade : longue réplique devant d'autres personnages. Monologue : un personnage seul en scène se parle à lui-même. Aparté : réplique dite à part, que les autres personnages n'entendent pas, mais le public si. Stichomythie : échange rapide de répliques très courtes." },
            },
            {
              heading: "La double énonciation",
              paragraphs: [
                "Au théâtre, chaque réplique a deux destinataires. Le personnage parle à un autre personnage, mais à travers lui l'auteur s'adresse au public. C'est ce qu'on appelle la double énonciation. Quand un valet ment à son maître, le maître le croit, mais les spectateurs, eux, savent qu'il ment.",
                "Grâce à la double énonciation, le public en sait souvent plus que certains personnages. Il voit le piège se refermer, il entend les apartés, il connaît les déguisements. Cet écart entre ce que sait le spectateur et ce que croit le personnage est une source importante de rire dans la comédie.",
              ],
            },
            {
              heading: "Actes, scènes et étapes de l'action",
              paragraphs: [
                "Une pièce est découpée en actes, eux-mêmes divisés en scènes. Les comédies classiques comptent souvent trois ou cinq actes : Les Fourberies de Scapin en a trois, L'Avare en a cinq. Au théâtre classique, on change de scène chaque fois qu'un personnage entre ou sort.",
                "L'action suit en général trois étapes. L'exposition, dans les premières scènes, présente les personnages, le lieu et la situation de départ. Le nœud de l'action rassemble les obstacles et les conflits qui empêchent les personnages d'obtenir ce qu'ils veulent. Le dénouement, à la fin, règle la situation : dans une comédie, il est heureux, souvent avec un ou plusieurs mariages.",
              ],
              box: { label: "Repère", text: "Acte : grande partie de la pièce. Scène : partie d'un acte, qui change à chaque entrée ou sortie de personnage. Exposition : présentation de la situation. Nœud : obstacles et conflits. Dénouement : résolution finale." },
            },
          ],
          keyPoints: [
            "Le théâtre est écrit pour être joué : pas de narrateur, tout passe par les paroles et les gestes.",
            "Répliques : paroles des personnages. Didascalies : indications de l'auteur, non prononcées.",
            "Tirade : longue réplique ; monologue : personnage seul ; aparté : réplique que les autres personnages n'entendent pas.",
            "Double énonciation : le personnage parle à un personnage, l'auteur parle au public.",
            "Une pièce se divise en actes et en scènes ; l'action va de l'exposition au dénouement.",
          ],
          example: {
            statement: "Lisez cette courte scène, écrite pour la leçon : « GRIFFON (entrant, furieux) : Martin ! Où est mon parapluie neuf ? MARTIN (à part) : Aïe, il a vu qu'il pleut. MARTIN (haut, avec un grand sourire) : Votre parapluie, Monsieur ? Il est sorti se promener. GRIFFON : Un parapluie ne se promène pas tout seul ! » Relevez les didascalies et dites ce qu'elles apprennent, puis expliquez l'effet de l'aparté.",
            solution: [
              "Les didascalies sont les indications entre parenthèses, qui ne sont pas prononcées : « entrant, furieux », « à part », « haut, avec un grand sourire ».",
              "« entrant, furieux » indique une entrée en scène (donc une nouvelle scène dans le théâtre classique) et le ton de colère de Griffon.",
              "« à part » signale un aparté : Martin parle pour lui-même, Griffon n'est pas censé l'entendre. « haut, avec un grand sourire » indique qu'il s'adresse de nouveau à son maître, avec une expression qui contredit son inquiétude.",
              "Grâce à l'aparté, le public sait que Martin se sent coupable, alors que Griffon l'ignore : c'est la double énonciation. Le spectateur comprend que le sourire et l'excuse absurde sont des ruses.",
              "Réponse : les didascalies donnent l'entrée, les tons et le jeu ; l'aparté met le public dans la confidence et crée le comique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un extrait écrit pour l'exercice : « La cuisine d'une auberge. LOUISE (posant un plat sur la table) : Le repas est servi ! JULES : Déjà ? Je n'ai pas fini de mettre le couvert. LOUISE (riant) : Comme d'habitude. (Jules sort en courant.) » a) Combien y a-t-il de répliques ? b) Relevez les didascalies. c) Laquelle annonce un changement de scène ?",
              hint: "Une réplique commence par le nom du personnage qui parle. Tout ce qui n'est pas prononcé par un personnage est une didascalie, y compris l'indication du lieu.",
              solution: [
                "a) Il y a trois répliques : celle de Louise (« Le repas est servi ! »), celle de Jules (« Déjà ? Je n'ai pas fini de mettre le couvert. ») et la seconde de Louise (« Comme d'habitude. »).",
                "b) Les didascalies sont : « La cuisine d'une auberge » (le lieu), « posant un plat sur la table » (un geste), « riant » (le ton) et « Jules sort en courant » (une sortie).",
                "c) « Jules sort en courant » : la sortie d'un personnage marque la fin de la scène dans le théâtre classique ; une nouvelle scène commence.",
              ],
            },
            {
              level: 2,
              statement: "Transformez ce passage de récit en une courte scène de théâtre, avec des répliques et des didascalies : « Furieuse, Madame Pinson entra dans la boutique en agitant un chapeau abîmé. Elle demanda au marchand pourquoi il lui avait vendu un chapeau qui perdait ses plumes. Le marchand, gêné, se gratta la tête et répondit que c'était la nouvelle mode. »",
              hint: "Le narrateur disparaît : ce qu'il raconte devient soit une réplique (ce que disent les personnages, au discours direct), soit une didascalie (le lieu, les gestes, les sentiments visibles).",
              solution: [
                "Repérer ce qui deviendra didascalie : le lieu (la boutique), l'entrée de Madame Pinson, sa colère, le chapeau agité, la gêne du marchand et son geste.",
                "Repérer ce qui deviendra réplique : la question de Madame Pinson et la réponse du marchand, à transformer en discours direct.",
                "Proposition : « Une boutique de chapeaux. MADAME PINSON (entrant, furieuse, en agitant un chapeau abîmé) : Monsieur ! Pourquoi m'avez-vous vendu un chapeau qui perd ses plumes ? LE MARCHAND (gêné, se grattant la tête) : C'est... c'est la nouvelle mode, Madame. »",
                "Vérification : aucune phrase de narrateur ne reste ; les sentiments (furieuse, gêné) sont devenus des indications de jeu pour les comédiens.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez une scène comique de huit à dix répliques entre un maître et sa servante, qui contienne : une didascalie de lieu, au moins une entrée ou une sortie, un aparté et une indication de ton. Expliquez ensuite en deux phrases ce que l'aparté permet au public de savoir.",
              hint: "Imaginez d'abord une situation simple où la servante cache quelque chose à son maître. L'aparté servira à la servante pour avouer au public ce que son maître ignore.",
              solution: [
                "Choisir une situation : la servante, Rose, a mangé la tarte que son maître, Monsieur Lebrun, gardait pour ses invités.",
                "Scène proposée : « Une salle à manger. ROSE (essuyant sa bouche) : Voilà, plus une miette... MONSIEUR LEBRUN (entrant) : Rose ! Où est ma tarte aux pommes ? ROSE (à part) : Déjà ! Il a un nez de chien de chasse. (Haut, innocemment) Quelle tarte, Monsieur ? MONSIEUR LEBRUN : La tarte que j'ai posée là, sur la table ! ROSE : Ah, celle-là ! Le chat l'a emportée. MONSIEUR LEBRUN (soupçonneux) : Un chat qui porte une tarte entière ? ROSE : C'est un chat très fort, Monsieur. MONSIEUR LEBRUN : Et ces miettes sur votre tablier ? ROSE (vivement) : Le chat est passé tout près de moi ! »",
                "Vérification des consignes : didascalie de lieu (« Une salle à manger »), entrée (« entrant »), aparté (« à part »), indications de ton (« innocemment », « soupçonneux », « vivement ») ; la scène compte dix répliques.",
                "Explication : l'aparté révèle au public que Rose est coupable et qu'elle a peur d'être découverte. Le spectateur en sait donc plus que Monsieur Lebrun : c'est la double énonciation, et c'est elle qui rend les excuses de Rose comiques.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du théâtre à sa définition.",
            pairs: [
              { left: "Réplique", right: "Ce que dit un personnage, précédé de son nom" },
              { left: "Didascalie", right: "Indication de l'auteur, qui n'est pas prononcée" },
              { left: "Tirade", right: "Longue réplique adressée à d'autres personnages" },
              { left: "Monologue", right: "Discours d'un personnage seul en scène" },
              { left: "Aparté", right: "Réplique que les autres personnages n'entendent pas" },
              { left: "Dénouement", right: "Fin de la pièce, qui résout la situation" },
            ],
          },
          quiz: [
            { q: "Qu'est-ce qu'une didascalie ?", options: ["Une longue réplique", "Une indication de l'auteur pour le jeu", "Un personnage secondaire qui ne parle pas", "La fin d'une pièce"], answer: 1, why: "La didascalie n'est pas prononcée : elle indique le lieu, les gestes, le ton, les entrées et les sorties." },
            { q: "Quand change-t-on de scène dans le théâtre classique ?", options: ["Quand un personnage entre ou sort", "Quand le décor change", "Toutes les dix répliques"], answer: 0, why: "Une nouvelle scène commence à chaque entrée ou sortie d'un personnage." },
            { q: "Un personnage seul en scène se parle à lui-même. Comment appelle-t-on ce discours ?", options: ["Une tirade", "Un aparté", "Un dialogue", "Un monologue"], answer: 3, why: "Le monologue suppose que le personnage soit seul ; la tirade s'adresse à d'autres personnages." },
            { q: "Que désigne la double énonciation ?", options: ["Deux personnages qui parlent en même temps sur la scène", "Une réplique répétée deux fois", "Une parole adressée au personnage et au public", "Une pièce en deux actes"], answer: 2, why: "Le personnage parle à un autre personnage, mais l'auteur s'adresse aussi aux spectateurs." },
            { q: "À quoi sert l'exposition ?", options: ["À présenter personnages et situation", "À résoudre l'intrigue et marier les héros", "À décrire les costumes"], answer: 0, why: "Les premières scènes exposent la situation de départ : qui sont les personnages, où l'on est, ce qu'ils veulent." },
          ],
          trap: "Confondre le monologue et la tirade : le monologue exige que le personnage soit seul en scène, alors que la tirade est une longue réplique adressée à d'autres personnages présents.",
          method: "En lisant une scène, faites deux couleurs : surlignez les didascalies d'une couleur et notez en marge ce qu'elles apprennent (lieu, geste, ton, entrée ou sortie). Puis, pour chaque aparté, demandez-vous ce que le public sait que les autres personnages ignorent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ressorts-comiques',
          title: 'Les ressorts du comique : gestes, mots, situations',
          minutes: 35,
          objectives: [
            "Identifier les principaux procédés comiques : gestes, mots, répétition, situation, caractère.",
            "Situer la comédie de Molière dans la tradition de la farce et de la commedia dell'arte.",
            "Analyser l'effet comique d'une scène en justifiant par des éléments précis.",
            "Rédiger une courte scène qui emploie plusieurs procédés comiques.",
          ],
          course: [
            {
              heading: "D'où vient le rire au théâtre ?",
              paragraphs: [
                "Au Moyen Âge, on joue en France des farces : de courtes pièces populaires, pleines de coups, de tromperies et de grosses plaisanteries. La plus célèbre, La Farce de Maître Pathelin, date du XVe siècle : un avocat rusé y trompe un marchand, avant d'être trompé à son tour.",
                "Au XVIe siècle naît en Italie la commedia dell'arte. Des comédiens masqués improvisent à partir d'un simple canevas, c'est-à-dire un résumé de l'histoire. On y retrouve toujours les mêmes types : Arlequin, le valet agile et gourmand, Pantalon, le vieillard avare, le Docteur, savant ridicule. Ces troupes italiennes jouent souvent à Paris au XVIIe siècle.",
                "Molière (Jean-Baptiste Poquelin, 1622-1673) hérite de ces deux traditions. Ses comédies mêlent les coups de bâton de la farce, les valets rusés de la commedia dell'arte et une peinture plus fine des défauts humains. Son Scapin doit d'ailleurs son nom à Scapino, un valet de la comédie italienne.",
              ],
              box: { label: "Repère", text: "XVe siècle : La Farce de Maître Pathelin. XVIe siècle : naissance de la commedia dell'arte en Italie. XVIIe siècle : Molière (1622-1673), auteur et comédien, écrit notamment Le Médecin malgré lui (1666), L'Avare (1668), Le Bourgeois gentilhomme (1670), Les Fourberies de Scapin (1671)." },
            },
            {
              heading: "Le comique de gestes et le comique de mots",
              paragraphs: [
                "Le comique de gestes fait rire par le corps : coups de bâton, chutes, poursuites, grimaces, cachettes. Dans Les Fourberies de Scapin (acte III, scène 2), Scapin persuade le vieux Géronte de se cacher dans un sac pour échapper à de prétendus ennemis ; il imite alors leurs voix et frappe le sac à coups de bâton. Le public rit de voir le maître battu par le valet.",
                "Le comique de mots naît du langage : jeux de mots, mots déformés, jargon savant, accents, réponses absurdes, décalage entre la façon de parler et la situation. Dans Le Médecin malgré lui, Sganarelle, un simple bûcheron qui se fait passer pour médecin, impressionne ses clients avec un faux latin auquel personne ne comprend rien.",
              ],
              box: { label: "Définition", text: "Comique de gestes : le rire vient des mouvements et du corps (coups, chutes, mimiques). Comique de mots : le rire vient du langage (jeux de mots, jargon, mots déformés, réponses absurdes)." },
            },
            {
              heading: "Le comique de répétition",
              paragraphs: [
                "Une réplique ou un geste répété plusieurs fois finit par faire rire, car le spectateur attend son retour. Dans Les Fourberies de Scapin (acte II, scène 7), Scapin fait croire à Géronte que son fils est retenu prisonnier sur une galère turque. Pour ne pas payer la rançon, le vieil avare répète sans cesse la même question : « Que diable allait-il faire dans cette galère ? »",
                "Dans L'Avare (acte I, scène 5), Harpagon veut marier sa fille à un homme riche qui accepte de la prendre « sans dot », c'est-à-dire sans argent. Chaque fois qu'on lui oppose un argument, il répond par ces deux mots. La répétition souligne ici son défaut : l'argent passe avant tout.",
              ],
            },
            {
              heading: "Le comique de situation et le comique de caractère",
              paragraphs: [
                "Le comique de situation vient de l'intrigue : un personnage caché qui entend tout, un déguisement, un quiproquo (un personnage prend une chose ou une personne pour une autre), un trompeur qui finit trompé. Le public, qui en sait plus que les personnages grâce à la double énonciation, rit de les voir se tromper.",
                "Le comique de caractère vient d'un défaut grossi jusqu'au ridicule. Harpagon, dans L'Avare, est obsédé par son argent ; Monsieur Jourdain, dans Le Bourgeois gentilhomme, veut tant ressembler aux nobles qu'il se laisse duper par tous ses maîtres ; Argan, dans Le Malade imaginaire, se croit sans cesse malade. Le personnage devient une caricature.",
              ],
              box: { label: "Définition", text: "Comique de situation : le rire vient de l'intrigue (quiproquo, déguisement, personnage caché, trompeur trompé). Comique de caractère : le rire vient d'un défaut exagéré (avarice, vanité, peur d'être malade)." },
            },
            {
              heading: "Rire pour faire réfléchir",
              paragraphs: [
                "Le rire de la comédie n'est pas seulement un divertissement. Molière explique, dans un texte adressé au roi pour défendre sa pièce Tartuffe, que la comédie a pour devoir de corriger les hommes en les divertissant. En riant d'Harpagon ou de Monsieur Jourdain, le spectateur reconnaît des défauts réels : l'avarice, la vanité, la crédulité.",
                "Pour analyser une scène comique, ne vous contentez pas de dire « c'est drôle ». Nommez le procédé, citez le passage qui le montre, puis expliquez ce qui fait rire et ce que le rire révèle : le défaut d'un personnage, l'absurdité d'une situation, ou le renversement des rôles entre puissants et faibles.",
              ],
            },
          ],
          keyPoints: [
            "Cinq grands procédés comiques : gestes, mots, répétition, situation, caractère.",
            "La farce (Moyen Âge) et la commedia dell'arte (Italie, XVIe siècle) inspirent Molière (1622-1673).",
            "Le quiproquo : un personnage prend une chose ou une personne pour une autre.",
            "Le comique de caractère grossit un défaut : l'avarice d'Harpagon, la vanité de Monsieur Jourdain.",
            "Analyser le comique : nommer le procédé, citer le passage, expliquer l'effet et ce qu'il révèle.",
          ],
          example: {
            statement: "Dans la scène des Fourberies de Scapin où Géronte répète « Que diable allait-il faire dans cette galère ? », quels procédés comiques sont à l'œuvre ? Justifiez.",
            solution: [
              "Rappeler la situation : Scapin invente que Léandre, le fils de Géronte, est retenu sur une galère turque et que l'on demande une rançon. Le public sait que c'est un mensonge pour obtenir de l'argent.",
              "Comique de situation : Géronte est trompé par son propre valet, et le spectateur, qui connaît la ruse, voit le piège se refermer (double énonciation).",
              "Comique de répétition : Géronte répète plusieurs fois la même question ; le public attend son retour et rit à chaque fois.",
              "Comique de caractère : cette répétition montre que Géronte cherche à retarder le moment de payer. Son avarice, grossie, est plus forte que son inquiétude pour son fils.",
              "Réponse : la scène combine comique de situation, de répétition et de caractère ; le rire dénonce l'avarice du vieillard.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le procédé comique principal de chaque situation. a) Un valet glisse sur une peau de banane et renverse le plateau du dîner. b) Un personnage répète « Et ma valise ? » à chaque réplique. c) Un homme déclare son amour à une servante en croyant parler à sa maîtresse, car elles ont échangé leurs robes. d) Un savant invente des mots compliqués pour paraître intelligent. e) Un vieillard refuse d'allumer une bougie, car elle coûte trop cher.",
              hint: "Demandez-vous d'où vient le rire : du corps (gestes), du langage (mots), d'une chose dite plusieurs fois (répétition), de l'intrigue (situation) ou d'un défaut du personnage (caractère).",
              solution: [
                "a) Comique de gestes : la chute et le plateau renversé font rire par le corps.",
                "b) Comique de répétition : la même réplique revient sans cesse.",
                "c) Comique de situation : c'est un quiproquo, l'homme prend la servante pour la maîtresse à cause du déguisement.",
                "d) Comique de mots : le jargon inventé fait rire par le langage.",
                "e) Comique de caractère : l'avarice du vieillard est poussée jusqu'au ridicule.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet extrait écrit pour l'exercice : « MONSIEUR HUBERT (cherchant partout) : Mes lunettes ! Qui a pris mes lunettes ? LUCAS (à part) : Elles sont sur sa tête... (Haut) Je n'ai rien vu, Monsieur. MONSIEUR HUBERT (se cognant contre une chaise) : Aïe ! Sans mes lunettes, je ne vois même pas les meubles ! LUCAS : Voulez-vous que je cherche sous le tapis ? MONSIEUR HUBERT : Sous le tapis, sur l'armoire, partout ! Mes lunettes ! » Relevez trois procédés comiques différents et expliquez leur effet.",
              hint: "Regardez ce que sait le public grâce à l'aparté, ce que fait le corps de Monsieur Hubert, et les mots qui reviennent.",
              solution: [
                "Comique de situation : grâce à l'aparté, le public sait que les lunettes sont sur la tête de Monsieur Hubert, alors que lui les cherche partout. Le spectateur rit de son aveuglement.",
                "Comique de gestes : Monsieur Hubert fouille partout puis se cogne contre une chaise ; le corps maladroit fait rire.",
                "Comique de répétition : l'exclamation « Mes lunettes ! » revient au début et à la fin ; elle souligne l'agitation du personnage.",
                "On peut ajouter le comique de mots ou de situation de Lucas, qui propose absurdement de chercher sous le tapis alors qu'il connaît la réponse : le valet se moque de son maître.",
                "Conclusion : la scène fait rire en combinant au moins trois procédés, et le valet y paraît plus malin que le maître.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe d'analyse (8 à 10 lignes) qui réponde à la question : « Pourquoi la scène du sac, dans Les Fourberies de Scapin (acte III, scène 2), fait-elle rire ? » Appuyez-vous sur ce que vous savez de la scène : Scapin cache Géronte dans un sac en prétendant le protéger, imite la voix de plusieurs ennemis imaginaires et frappe le sac à coups de bâton.",
              hint: "Organisez votre paragraphe : une phrase d'introduction qui annonce l'idée, un procédé par phrase avec un élément précis de la scène, une phrase de conclusion qui dit ce que révèle le rire.",
              solution: [
                "Introduction : « La scène du sac est l'une des plus drôles des Fourberies de Scapin, car Molière y réunit plusieurs procédés comiques. »",
                "Comique de gestes : « D'abord, le rire vient du corps : Géronte, enfermé dans un sac, reçoit des coups de bâton, comme dans une farce. »",
                "Comique de mots : « Ensuite, Scapin imite la voix de plusieurs ennemis imaginaires ; ce changement d'accents et de voix amuse le public. »",
                "Comique de situation : « Surtout, le spectateur sait que ces ennemis n'existent pas et que c'est Scapin qui frappe : il rit de voir Géronte remercier celui qui le bat. Le maître est trompé par son valet. »",
                "Conclusion : « Ce renversement, où le valet bat son maître, fait rire mais montre aussi la revanche d'un serviteur sur un vieillard avare et méfiant. »",
                "Vérification : le paragraphe nomme trois procédés, s'appuie sur des éléments précis de la scène et explique l'effet du rire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les ressorts du comique.",
            statements: [
              { text: "Le quiproquo consiste à prendre une personne ou une chose pour une autre.", true: true, why: "C'est un procédé du comique de situation : le malentendu fait rire le public, qui sait la vérité." },
              { text: "Le comique de caractère repose sur des coups de bâton.", true: false, why: "Les coups relèvent du comique de gestes. Le comique de caractère vient d'un défaut exagéré." },
              { text: "La commedia dell'arte est née en Italie au XVIe siècle.", true: true, why: "Des comédiens masqués y improvisaient à partir d'un canevas, avec des types comme Arlequin." },
              { text: "Molière a vécu au XVIIIe siècle.", true: false, why: "Molière (1622-1673) a vécu au XVIIe siècle, sous Louis XIV." },
              { text: "« Sans dot ! » est une réplique répétée par Harpagon dans L'Avare.", true: true, why: "Harpagon répète ces mots pour défendre un mariage qui ne lui coûte rien : comique de répétition et de caractère." },
              { text: "Pour Molière, la comédie ne sert qu'à divertir.", true: false, why: "Molière affirme que la comédie doit corriger les hommes en les divertissant." },
            ],
          },
          quiz: [
            { q: "Un personnage tombe de sa chaise. De quel comique s'agit-il ?", options: ["De mots", "De gestes", "De caractère", "De répétition"], answer: 1, why: "La chute fait rire par le corps : c'est du comique de gestes." },
            { q: "Qu'est-ce qu'un quiproquo ?", options: ["Une longue réplique", "Une chanson", "Une erreur sur une personne ou une chose", "Une dispute rapide entre deux personnages"], answer: 2, why: "Le quiproquo est un malentendu : un personnage prend quelqu'un ou quelque chose pour un autre." },
            { q: "Quel personnage de Molière incarne le comique de caractère par son avarice ?", options: ["Harpagon", "Sganarelle", "Scapin"], answer: 0, why: "Harpagon, dans L'Avare, est obsédé par son argent : son défaut est grossi jusqu'au ridicule." },
            { q: "Quelle forme de théâtre populaire du Moyen Âge a inspiré Molière ?", options: ["La tragédie", "L'opéra", "Le drame romantique", "La farce"], answer: 3, why: "La farce, avec ses coups et ses tromperies, est l'une des sources de la comédie de Molière." },
            { q: "Dans quelle pièce Géronte demande-t-il « Que diable allait-il faire dans cette galère ? »", options: ["Le Malade imaginaire", "Les Fourberies de Scapin", "Le Bourgeois gentilhomme"], answer: 1, why: "C'est dans Les Fourberies de Scapin (1671), quand Scapin lui réclame une rançon imaginaire." },
          ],
          trap: "Se contenter de dire qu'une scène « est drôle » sans nommer le procédé, ou confondre le comique de situation (qui vient de l'intrigue) et le comique de caractère (qui vient d'un défaut du personnage).",
          method: "Pour analyser une scène comique, utilisez la grille des cinq questions : le rire vient-il du corps, des mots, d'une répétition, de l'intrigue ou d'un défaut ? Pour chaque procédé trouvé, citez un passage et expliquez ce que le public sait ou voit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'maitres-et-valets',
          title: 'Maîtres et valets : une société renversée',
          minutes: 35,
          objectives: [
            "Situer la relation entre maîtres et valets dans la société des XVIIe et XVIIIe siècles.",
            "Analyser le renversement des rôles entre maîtres et serviteurs dans une comédie.",
            "Identifier quelques œuvres et auteurs majeurs : Molière, Marivaux, Beaumarchais.",
            "Expliquer comment le rire permet de critiquer la société.",
          ],
          course: [
            {
              heading: "Une société de maîtres et de serviteurs",
              paragraphs: [
                "Aux XVIIe et XVIIIe siècles, la société française est très hiérarchisée. Chacun occupe un rang selon sa naissance : la noblesse, la bourgeoisie, le peuple. Dans les familles nobles ou riches, de nombreux domestiques (valets, servantes, cochers, cuisiniers) servent leurs maîtres, à qui ils doivent obéissance.",
                "La comédie met en scène cette relation. Normalement, le maître commande et le valet obéit. Mais au théâtre, cette hiérarchie est souvent bousculée : le valet se montre plus intelligent que son maître, la servante lui dit ses quatre vérités, et parfois les rôles s'inversent complètement. La société est alors mise sens dessus dessous.",
              ],
            },
            {
              heading: "Le valet rusé et la servante au franc-parler",
              paragraphs: [
                "Chez Molière, le valet rusé mène souvent l'intrigue. Dans Les Fourberies de Scapin (1671), Scapin aide deux jeunes gens, Octave et Léandre, à obtenir de leurs pères l'argent dont ils ont besoin. Il invente des mensonges, prend des déguisements, manipule les vieillards : les maîtres dépendent entièrement de lui.",
                "Les servantes de Molière ont la langue bien pendue. Dans Le Bourgeois gentilhomme (1670), Nicole éclate de rire devant les habits ridicules de Monsieur Jourdain. Dans Le Malade imaginaire (1673), Toinette tient tête à Argan et va jusqu'à se déguiser en médecin pour lui ouvrir les yeux. Elles représentent souvent le bon sens face à la folie de leurs maîtres.",
              ],
              box: { label: "À retenir", text: "Dans la comédie, le valet ou la servante est souvent plus lucide que le maître. Le valet rusé (Scapin) fait avancer l'intrigue ; la servante au franc-parler (Nicole, Toinette) dit tout haut ce que le maître refuse de voir." },
            },
            {
              heading: "Le monde à l'envers : Marivaux",
              paragraphs: [
                "Au XVIIIe siècle, Marivaux (1688-1763) pousse plus loin le renversement. Dans L'Île des esclaves (1725), deux maîtres athéniens, Iphicrate et Euphrosine, font naufrage avec leurs esclaves, Arlequin et Cléanthis, sur une île gouvernée par d'anciens esclaves. La loi de l'île oblige les maîtres à devenir serviteurs et les serviteurs à devenir maîtres.",
                "Ce renversement est une leçon : en vivant à la place de leurs esclaves, les maîtres comprennent la dureté avec laquelle ils les traitaient. À la fin, ils reconnaissent leurs torts, se réconcilient avec leurs serviteurs, et chacun peut rentrer à Athènes. L'ordre est rétabli, mais les maîtres ont appris à être plus humains.",
                "Dans Le Jeu de l'amour et du hasard (1730), Marivaux imagine un autre échange : une jeune fille, Silvia, prend la place de sa servante Lisette pour observer en secret le jeune homme qu'on veut lui faire épouser ; or celui-ci, Dorante, a eu la même idée avec son valet Arlequin. Les déguisements créent une suite de quiproquos.",
              ],
              box: { label: "Repère", text: "Marivaux (1688-1763) : L'Île des esclaves (1725), où maîtres et esclaves échangent leur condition ; Le Jeu de l'amour et du hasard (1730), où maîtres et serviteurs échangent leurs habits et leur rôle." },
            },
            {
              heading: "Figaro, le valet qui conteste",
              paragraphs: [
                "Beaumarchais (1732-1799) crée le personnage de Figaro, valet plein d'esprit, dans Le Barbier de Séville (1775), puis dans Le Mariage de Figaro, joué en 1784 après avoir été longtemps interdit. Figaro y défend sa fiancée, Suzanne, contre son propre maître, le comte Almaviva, qui veut la séduire.",
                "Dans un célèbre monologue (acte V, scène 3), Figaro s'en prend aux privilèges des nobles, qui doivent leur rang à leur seule naissance. Il lance à son maître absent : « Vous vous êtes donné la peine de naître, et rien de plus. » Le rire devient ici une critique directe de l'injustice sociale, quelques années avant la Révolution de 1789.",
              ],
            },
            {
              heading: "Pourquoi ce renversement fait-il rire et réfléchir ?",
              paragraphs: [
                "Le renversement fait rire parce qu'il est inattendu : voir le maître battu, trompé ou obligé de servir surprend le spectateur. Il reprend aussi une vieille tradition populaire, celle du carnaval, où l'on fêtait pour quelques jours un « monde à l'envers ».",
                "Mais il fait aussi réfléchir. En montrant un valet plus malin que son maître, la comédie suggère que la valeur d'une personne ne dépend pas de sa naissance. Souvent, le renversement reste provisoire : à la fin, chacun retrouve sa place. La critique passe par le rire, ce qui la rend plus acceptable pour le public de l'époque.",
              ],
              box: { label: "À retenir", text: "Le renversement des rôles fait rire par la surprise et fait réfléchir sur les inégalités. Chez Molière et Marivaux, il est le plus souvent provisoire ; chez Beaumarchais, il devient une critique ouverte des privilèges." },
            },
          ],
          keyPoints: [
            "Aux XVIIe et XVIIIe siècles, la société est hiérarchisée : les domestiques doivent obéissance à leurs maîtres.",
            "Dans la comédie, le valet rusé (Scapin) ou la servante lucide (Toinette, Nicole) domine souvent le maître.",
            "Marivaux, L'Île des esclaves (1725) : maîtres et esclaves échangent leur condition pour que les maîtres se corrigent.",
            "Beaumarchais, Le Mariage de Figaro (joué en 1784) : le valet critique les privilèges de la naissance.",
            "Le renversement fait rire par la surprise et invite à réfléchir sur les inégalités.",
          ],
          example: {
            statement: "Expliquez en quoi Les Fourberies de Scapin présentent une « société renversée ».",
            solution: [
              "Rappeler l'ordre normal : au XVIIe siècle, le valet doit obéir à son maître et le fils à son père.",
              "Observer qui mène l'action : c'est Scapin, un valet, qui invente les ruses, manipule les deux pères et sauve les amours des jeunes gens. Les maîtres dépendent de lui.",
              "Relever un moment fort : dans la scène du sac, Scapin bat Géronte à coups de bâton, alors que d'ordinaire c'est le maître qui peut battre son valet.",
              "Noter la fin : Scapin obtient le pardon, et l'ordre familial est rétabli au dénouement, avec les mariages des jeunes gens.",
              "Réponse : la pièce renverse les rôles, puisque le valet domine ses maîtres par l'intelligence et va jusqu'à les battre ; ce renversement fait rire, mais reste provisoire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque personnage à sa pièce et à son auteur : Scapin, Toinette, Figaro, Cléanthis, Nicole. Pièces : Le Mariage de Figaro, Le Malade imaginaire, L'Île des esclaves, Le Bourgeois gentilhomme, Les Fourberies de Scapin.",
              hint: "Deux auteurs seulement sont du XVIIIe siècle : Marivaux et Beaumarchais. Les trois autres personnages sont chez Molière.",
              solution: [
                "Scapin : Les Fourberies de Scapin, Molière (1671).",
                "Toinette : Le Malade imaginaire, Molière (1673).",
                "Nicole : Le Bourgeois gentilhomme, Molière (1670).",
                "Cléanthis : L'Île des esclaves, Marivaux (1725).",
                "Figaro : Le Mariage de Figaro, Beaumarchais (joué en 1784).",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet extrait écrit pour l'exercice : « LE COMTE : Valentin, apporte-moi mes bottes. VALENTIN : Vos bottes, Monsieur ? Pour aller où ? LE COMTE : Chez la marquise, bien sûr. VALENTIN : Avec ces bottes ? Elles sont trop vieilles, Monsieur. On se moquera de vous. Mettez plutôt vos souliers vernis, et prenez le carrosse. LE COMTE (hésitant) : Tu crois ? VALENTIN : J'en suis certain. Et laissez-moi parler à la marquise : vous, vous dites toujours des sottises. LE COMTE : C'est vrai... Fais comme tu voudras. » Montrez que les rôles du maître et du valet sont renversés.",
              hint: "Observez qui donne les ordres au début, puis à la fin de l'extrait. Relevez les verbes à l'impératif et la dernière réplique du comte.",
              solution: [
                "Au début, l'ordre est normal : le comte donne un ordre à l'impératif (« apporte-moi mes bottes ») et tutoie son valet, signe de sa supériorité.",
                "Valentin, lui, répond par des questions puis par des conseils, et emploie à son tour l'impératif (« Mettez », « prenez », « laissez-moi ») : c'est maintenant lui qui commande.",
                "Il ose critiquer son maître (« vous dites toujours des sottises »), ce qu'un valet ne doit pas faire.",
                "La didascalie « hésitant » et la dernière réplique du comte (« Fais comme tu voudras ») montrent qu'il cède : il obéit à son valet.",
                "Conclusion : les rôles sont renversés, le valet décide à la place du maître, qui paraît faible et ridicule. Le comique vient de ce renversement.",
              ],
            },
            {
              level: 3,
              statement: "Défi. En un paragraphe d'une dizaine de lignes, répondez à la question : « Le renversement des rôles entre maîtres et valets n'est-il qu'un jeu pour faire rire ? » Appuyez-vous sur deux œuvres étudiées.",
              hint: "Construisez votre réponse en deux temps : d'abord, ce qui fait rire (surprise, comique de situation) ; ensuite, ce qui fait réfléchir (critique des maîtres, des privilèges). Citez une œuvre précise dans chaque partie.",
              solution: [
                "Annoncer la réponse : « Le renversement des rôles fait d'abord rire, mais il invite aussi à réfléchir sur les inégalités. »",
                "Premier temps, le rire : « Dans Les Fourberies de Scapin de Molière, le public rit de voir le valet Scapin tromper les vieillards et même battre Géronte, enfermé dans un sac. La surprise de voir le maître dominé crée le comique. »",
                "Second temps, la réflexion : « Dans L'Île des esclaves, Marivaux oblige les maîtres à servir leurs anciens esclaves. Ce jeu leur fait découvrir leur dureté, et ils finissent par se corriger. »",
                "Élargir : « Dans Le Mariage de Figaro, Beaumarchais va plus loin : son valet critique ouvertement les privilèges des nobles, qui ne doivent leur rang qu'à leur naissance. »",
                "Conclure : « Le renversement n'est donc pas qu'un jeu : à travers le rire, la comédie fait réfléchir le spectateur sur la place de chacun dans la société. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces pièces dans l'ordre chronologique de leur création.",
            items: [
              "La Farce de Maître Pathelin (XVe siècle)",
              "Le Médecin malgré lui, de Molière (1666)",
              "Les Fourberies de Scapin, de Molière (1671)",
              "L'Île des esclaves, de Marivaux (1725)",
              "Le Jeu de l'amour et du hasard, de Marivaux (1730)",
              "Le Mariage de Figaro, de Beaumarchais (joué en 1784)",
            ],
          },
          quiz: [
            { q: "Dans L'Île des esclaves, que doivent faire les maîtres naufragés ?", options: ["Construire un bateau", "Devenir les serviteurs de leurs esclaves", "Combattre les habitants pour garder leur rang", "Quitter l'île aussitôt"], answer: 1, why: "La loi de l'île inverse les conditions : les maîtres servent, les esclaves commandent, pour que les maîtres se corrigent." },
            { q: "Qui a écrit Le Mariage de Figaro ?", options: ["Molière", "Marivaux", "Beaumarchais"], answer: 2, why: "Beaumarchais (1732-1799) a créé Figaro dans Le Barbier de Séville, puis Le Mariage de Figaro, joué en 1784." },
            { q: "Quel rôle joue souvent la servante dans les comédies de Molière ?", options: ["Elle représente le bon sens", "Elle reste toujours muette", "Elle est la méchante de la pièce", "Elle obéit sans rien dire"], answer: 0, why: "Toinette ou Nicole disent tout haut ce que leur maître refuse de voir : elles incarnent le bon sens." },
            { q: "Pourquoi parle-t-on souvent d'un renversement « provisoire » ?", options: ["Parce que la pièce est courte", "Parce que les valets sont punis et chassés à la fin", "Parce que le public quitte la salle", "Parce que l'ordre est rétabli au dénouement"], answer: 3, why: "À la fin, chacun retrouve en général sa place : le renversement a servi à faire rire et réfléchir." },
            { q: "Que reproche Figaro aux nobles dans son monologue ?", options: ["D'être trop pauvres", "De devoir leur rang à leur seule naissance", "De ne pas assez soutenir les comédiens et le théâtre"], answer: 1, why: "Il reproche à son maître de ne s'être « donné la peine » que de naître : ses privilèges ne viennent pas de son mérite." },
          ],
          trap: "Croire que le renversement des rôles est toujours une révolte définitive : chez Molière et Marivaux, l'ordre est le plus souvent rétabli au dénouement ; c'est le rire, pendant la pièce, qui porte la critique.",
          method: "Pour étudier une relation maître-valet, observez trois indices : qui donne les ordres (verbes à l'impératif), qui vouvoie ou tutoie l'autre, et qui fait avancer l'action. Comparez ces indices au début et à la fin de la scène pour voir si les rôles ont basculé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'jouer-une-scene',
          title: 'Mettre en voix et jouer une scène',
          minutes: 30,
          objectives: [
            "Préparer la mise en voix d'une scène en repérant la situation et les intentions des personnages.",
            "Utiliser sa voix (articulation, volume, rythme, intonation) et son corps (regard, gestes, déplacements) pour jouer.",
            "Employer le vocabulaire de la scène : mise en scène, côté cour, côté jardin, avant-scène, coulisses.",
            "Rédiger des notes de mise en scène pour un court extrait.",
          ],
          course: [
            {
              heading: "Comprendre la scène avant de la jouer",
              paragraphs: [
                "Avant de jouer, il faut comprendre. Lisez la scène plusieurs fois et répondez à quelques questions : qui sont les personnages et quels liens les unissent ? Où et quand sommes-nous ? Que s'est-il passé juste avant ? Que veut chaque personnage dans cette scène ? Ce que veut un personnage s'appelle son intention : convaincre, cacher un secret, se moquer, demander pardon.",
                "Relisez ensuite les didascalies : elles donnent des indications précieuses sur les gestes et le ton. Quand elles sont rares, comme chez Molière, cherchez les indices dans les répliques elles-mêmes : une question, une exclamation, une hésitation (marquée par des points de suspension) indiquent comment dire le texte.",
              ],
              box: { label: "Repère", text: "Quatre questions avant de jouer : Qui ? (les personnages et leurs liens) Où et quand ? (le lieu, le moment) Que s'est-il passé avant ? Que veut chaque personnage ? (son intention)" },
            },
            {
              heading: "Mettre le texte en voix",
              paragraphs: [
                "Au théâtre, le public doit tout entendre, même au dernier rang. Il faut d'abord articuler : prononcer nettement chaque syllabe, sans avaler la fin des mots. Il faut ensuite projeter sa voix, c'est-à-dire parler fort sans crier, en respirant par le ventre.",
                "Le rythme compte aussi. Un débit trop rapide rend le texte incompréhensible ; un débit trop lent ennuie. Les pauses, placées au bon endroit, créent un effet : un silence avant une réponse montre l'hésitation ou prépare une surprise. Enfin, l'intonation donne le sens : la voix monte pour une question, se fait forte pour la colère, plus douce pour une confidence.",
                "Pour préparer la lecture, annotez le texte : une barre oblique (/) pour une courte pause, deux (//) pour une longue pause, un soulignement pour un mot important à faire entendre, et quelques mots en marge pour le ton (moqueur, inquiet, furieux).",
              ],
              box: { label: "À retenir", text: "Les quatre outils de la voix : l'articulation (chaque syllabe nette), le volume (projeter sans crier), le rythme (débit et pauses), l'intonation (le ton qui donne le sens)." },
            },
            {
              heading: "Le corps et l'espace de la scène",
              paragraphs: [
                "Le comédien joue avec tout son corps. Sa posture montre le caractère du personnage : un maître orgueilleux se tient droit, un valet qui a peur se fait petit. Les gestes doivent être clairs et pas trop nombreux. Le regard est essentiel : on regarde son partenaire quand on lui parle, et le public lors d'un aparté.",
                "L'espace de la scène a son vocabulaire. Vu de la salle, le côté jardin est à gauche et le côté cour à droite : pour s'en souvenir, pensez aux initiales J et C de « Jésus-Christ », lues de gauche à droite. L'avant-scène est la partie la plus proche du public, le fond de scène la plus éloignée ; les coulisses sont les espaces cachés d'où l'on entre et où l'on sort. Évitez de tourner le dos au public : vous ne seriez plus entendu.",
              ],
              box: { label: "Définition", text: "Côté jardin : à gauche, vu de la salle. Côté cour : à droite, vu de la salle. Avant-scène : partie de la scène la plus proche du public. Coulisses : espaces cachés de part et d'autre de la scène." },
            },
            {
              heading: "Jouer ensemble et mettre en scène",
              paragraphs: [
                "Jouer une scène, c'est aussi écouter. Un bon comédien réagit à ce que dit son partenaire, même quand il ne parle pas : un sourire, un mouvement de surprise. Les répliques doivent s'enchaîner sans temps mort, sauf quand un silence est voulu.",
                "La mise en scène est l'ensemble des choix faits pour représenter la pièce : le décor, les costumes, les accessoires, la lumière, la musique, les déplacements des comédiens. Celui ou celle qui fait ces choix s'appelle le metteur en scène. Deux mises en scène d'une même pièce peuvent être très différentes : Les Fourberies de Scapin peuvent être jouées en costumes du XVIIe siècle ou transposées dans un décor moderne.",
                "Pour apprendre votre texte, découpez-le en petits morceaux, apprenez les répliques avec celle qui les précède (la « réplique d'appel »), et répétez en faisant les gestes : le corps aide la mémoire. Les répétitions permettent ensuite d'ajuster la voix, les déplacements et le rythme.",
              ],
            },
          ],
          keyPoints: [
            "Avant de jouer : qui, où et quand, ce qui s'est passé avant, et l'intention de chaque personnage.",
            "La voix : articuler, projeter, régler le rythme et les pauses, choisir l'intonation.",
            "Le corps : posture, gestes clairs, regard vers le partenaire, vers le public lors d'un aparté.",
            "Vu de la salle : jardin à gauche, cour à droite ; l'avant-scène est la plus proche du public.",
            "La mise en scène réunit les choix de décor, costumes, lumière, accessoires et déplacements.",
          ],
          example: {
            statement: "Préparez la mise en voix de cette réplique, écrite pour la leçon, prononcée par un valet qui a cassé le vase préféré de son maître : « Monsieur... j'ai une bonne nouvelle et une mauvaise nouvelle. La bonne : vous n'aurez plus jamais à épousseter ce vieux vase. »",
            solution: [
              "Comprendre la situation : le valet a peur d'être puni ; son intention est d'annoncer la catastrophe en douceur, et même de la faire passer pour une bonne nouvelle.",
              "Annoter les pauses : « Monsieur... / j'ai une bonne nouvelle / et une mauvaise nouvelle. // La bonne : / vous n'aurez plus jamais à épousseter / ce vieux vase. » Les points de suspension invitent à hésiter après « Monsieur ».",
              "Choisir l'intonation : voix basse et hésitante au début, puis faussement joyeuse pour « La bonne », avec un léger silence avant la chute « ce vieux vase ».",
              "Choisir les gestes : le valet cache les morceaux derrière son dos, sourit trop largement et recule d'un pas à la fin, prêt à fuir vers les coulisses.",
              "Réponse : une mise en voix qui fait entendre la peur sous la fausse gaieté, et place la chute comique à la fin, après une pause.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez aux questions. a) Vu de la salle, de quel côté se trouve le côté cour ? b) Comment s'appelle la partie de la scène la plus proche du public ? c) Comment s'appelle la personne qui choisit le décor, les costumes et les déplacements ? d) Où regarde-t-on en général pendant un aparté ? e) Que signifie « projeter sa voix » ?",
              hint: "Pensez au moyen mnémotechnique J et C, lus de gauche à droite depuis la salle.",
              solution: [
                "a) Le côté cour est à droite, vu de la salle (le côté jardin est à gauche).",
                "b) C'est l'avant-scène.",
                "c) C'est le metteur en scène.",
                "d) Vers le public : l'aparté s'adresse aux spectateurs, pas aux autres personnages.",
                "e) Projeter sa voix, c'est parler assez fort et clairement pour être entendu jusqu'au fond de la salle, sans crier.",
              ],
            },
            {
              level: 2,
              statement: "Annotez cette réplique, écrite pour l'exercice, pour la mettre en voix (pauses, mots importants, ton), puis justifiez vos choix : une servante dit à son maître qui se croit malade : « Malade ? Vous ? Vous avez mangé trois parts de gâteau, deux poulets, et vous avez dormi douze heures ! Si c'est cela, être malade, je veux bien l'être tous les jours. »",
              hint: "Repérez la ponctuation : les points d'interrogation et d'exclamation, les virgules de l'énumération. Demandez-vous quelle est l'intention de la servante : elle se moque de son maître.",
              solution: [
                "Annotation : « Malade ? / Vous ? // Vous avez mangé trois parts de gâteau, / deux poulets, / et vous avez dormi douze heures ! // Si c'est cela, être malade, / je veux bien l'être tous les jours. »",
                "Les deux questions courtes (« Malade ? Vous ? ») se disent avec une voix qui monte, et un ton moqueur et incrédule ; une pause après « Vous ? » laisse le maître sans réponse.",
                "Dans l'énumération, on souligne les quantités (« trois », « deux », « douze ») et on accélère légèrement : l'accumulation fait rire.",
                "La dernière phrase, plus lente, se dit avec une ironie appuyée, peut-être en regardant le public : c'est la chute comique.",
                "Justification : l'intention de la servante est de montrer, par le bon sens et la moquerie, que son maître n'est pas malade ; la voix doit faire entendre cette ironie.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici une courte scène écrite pour l'exercice : « Un salon. MONSIEUR DUROC (assis, lisant son journal) : Gaston, quelle heure est-il ? GASTON (entrant, essoufflé) : L'heure de partir, Monsieur ! Votre voisin arrive avec son chien. MONSIEUR DUROC (bondissant) : Son chien ! Vite, mon chapeau ! (Il sort en courant.) » Rédigez des notes de mise en scène : décor, costumes et accessoires, place et déplacements des personnages (en employant côté cour et côté jardin), ton de chaque réplique.",
              hint: "Partez des didascalies : elles imposent un fauteuil, un journal, une entrée, une sortie. Décidez ensuite d'où entre Gaston et par où sort Monsieur Duroc, puis choisissez un ton pour chaque réplique.",
              solution: [
                "Décor : un salon bourgeois, avec un grand fauteuil au centre de la scène, une petite table et un portemanteau côté jardin, où pend un chapeau.",
                "Costumes et accessoires : Monsieur Duroc en robe de chambre et pantoufles, un journal à la main ; Gaston en livrée de valet, un peu décoiffé pour montrer qu'il a couru.",
                "Déplacements : Monsieur Duroc est assis au centre. Gaston entre en courant côté cour, s'arrête à l'avant-scène pour reprendre son souffle. Monsieur Duroc bondit, se précipite côté jardin vers le portemanteau, attrape son chapeau et sort côté jardin, à l'opposé de l'arrivée du voisin.",
                "Tons : Monsieur Duroc, d'abord calme et ennuyé (sans lever les yeux du journal) ; Gaston, essoufflé puis alarmé sur « son chien » ; Monsieur Duroc, terrifié et pressé sur « Vite, mon chapeau ! ».",
                "Effet visé : le contraste entre le calme du début et la fuite soudaine crée le comique de gestes ; la peur exagérée d'un simple chien ajoute un comique de caractère.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la préparation d'une scène.",
            items: [
              "Lire la scène plusieurs fois pour la comprendre.",
              "Repérer la situation et l'intention de chaque personnage.",
              "Annoter le texte : pauses, mots importants, tons.",
              "Apprendre les répliques par petits morceaux, avec la réplique d'appel.",
              "Répéter avec les partenaires en ajoutant gestes et déplacements.",
              "Jouer la scène devant le public.",
            ],
          },
          quiz: [
            { q: "Vu de la salle, où se trouve le côté jardin ?", options: ["À droite", "À gauche", "Au fond de la scène"], answer: 1, why: "Vu de la salle, le jardin est à gauche et la cour à droite (J et C, de gauche à droite)." },
            { q: "Que signifie « articuler » ?", options: ["Parler très vite", "Faire de grands gestes avec les bras et les mains", "Prononcer nettement chaque syllabe", "Changer de voix"], answer: 2, why: "Articuler, c'est prononcer clairement chaque son, pour être compris par tout le public." },
            { q: "Qu'est-ce que l'intention d'un personnage ?", options: ["Ce qu'il veut obtenir dans la scène", "Son costume", "La place où il se tient", "Le nombre de ses répliques"], answer: 0, why: "L'intention, c'est ce que veut le personnage (convaincre, cacher, se moquer) : elle guide le jeu du comédien." },
            { q: "Qui fait les choix de décor, de costumes et de déplacements ?", options: ["Le souffleur", "Le spectateur", "Le décorateur seul", "Le metteur en scène"], answer: 3, why: "Le metteur en scène dirige l'ensemble des choix de la représentation, aidé d'une équipe." },
            { q: "Pourquoi faut-il éviter de tourner le dos au public ?", options: ["C'est interdit par le règlement de tous les théâtres", "La voix porte moins et le visage disparaît", "Cela fatigue le comédien"], answer: 1, why: "Dos au public, le comédien est moins bien entendu et ses expressions ne sont plus visibles." },
          ],
          trap: "Réciter le texte d'une voix monotone et trop rapide, sans tenir compte de l'intention du personnage ni de la ponctuation, ou confondre côté cour et côté jardin en se plaçant du point de vue du comédien au lieu de celui de la salle.",
          method: "Avant chaque passage, annotez le texte au crayon avec trois signes simples (/ pour une pause, un soulignement pour un mot important, un mot en marge pour le ton), puis enregistrez-vous et réécoutez-vous : on entend vite ce qui est trop rapide ou trop plat.",
        },
      ],
    },
    /* ================================================================== */
    /* LES FONCTIONS DANS LA PHRASE                                         */
    /* ================================================================== */
    {
      id: 'fonctions-phrase',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sujet-attribut',
          title: 'Le sujet et l\'attribut du sujet',
          minutes: 30,
          objectives: [
            "Identifier le sujet d'un verbe, même lorsqu'il est inversé ou éloigné du verbe.",
            "Accorder le verbe avec son sujet dans les cas difficiles.",
            "Identifier l'attribut du sujet et l'accorder avec le sujet.",
            "Distinguer l'attribut du sujet et le complément d'objet direct.",
          ],
          course: [
            {
              heading: "Trouver le sujet du verbe",
              paragraphs: [
                "Le sujet est le mot ou le groupe de mots dont on dit quelque chose dans la phrase. Le plus souvent, il désigne celui qui fait l'action : dans « Le chat attrape la balle », c'est le chat qui attrape. Mais avec un verbe d'état, il désigne celui dont on décrit l'état : « Le ciel paraît menaçant ».",
                "Le sujet commande l'accord du verbe : c'est lui qui donne au verbe sa personne et son nombre. Pour le trouver avec certitude, utilisez deux tests. Encadrez-le par « C'est... qui » : « C'est le chat qui attrape la balle ». Ou remplacez-le par un pronom personnel (il, elle, ils, elles) : « Il attrape la balle ».",
                "La question « Qui est-ce qui ? » posée avant le verbe peut aider, mais elle trompe parfois : mieux vaut s'appuyer sur le test de l'encadrement, plus sûr.",
              ],
              box: { label: "Définition", text: "Le sujet est le groupe dont on dit quelque chose ; il commande l'accord du verbe en personne et en nombre. Test : il peut être encadré par « C'est... qui » et remplacé par il, elle, ils ou elles." },
            },
            {
              heading: "Les formes et les places du sujet",
              paragraphs: [
                "Le sujet peut prendre plusieurs formes : un nom propre (« Inès chante »), un groupe nominal (« Les élèves de la classe chantent »), un pronom (« Elle chante », « Personne ne chante »), ou même un verbe à l'infinitif (« Chanter me rend joyeux »).",
                "Le sujet est le plus souvent placé avant le verbe, mais pas toujours. On dit qu'il est inversé quand il se trouve après le verbe : dans une question (« Où partez-vous ? »), après une parole rapportée (« Entrez, dit-elle »), ou quand la phrase commence par un complément de lieu ou de temps (« Au fond du jardin coulait une rivière »).",
                "Le sujet peut aussi être séparé du verbe par d'autres mots, appelés écrans : « Les oiseaux que le chat guette s'envolent ». Ici, le sujet de « s'envolent » n'est pas « le chat », mais « Les oiseaux ».",
              ],
            },
            {
              heading: "Accorder le verbe dans les cas difficiles",
              paragraphs: [
                "Quand le sujet est inversé, cherchez-le après le verbe : « Dans la vallée vivaient deux bergers » (sujet : deux bergers, donc pluriel). Quand plusieurs sujets sont coordonnés, le verbe se met au pluriel : « Le chien et le chat dorment ». Si les sujets sont de personnes différentes, la 1re personne l'emporte sur la 2e, et la 2e sur la 3e : « Toi et moi partirons », « Ton frère et toi viendrez ».",
                "Avec le pronom relatif « qui », le verbe s'accorde avec l'antécédent : « C'est nous qui avons gagné ». Avec un pronom placé entre le sujet et le verbe, ne vous laissez pas distraire : « Mes parents les appellent » (le sujet est « Mes parents », « les » est COD).",
              ],
              box: { label: "Règle", text: "Le verbe s'accorde toujours avec son sujet, où qu'il se trouve. Plusieurs sujets : pluriel. Personnes différentes : la 1re l'emporte sur la 2e, la 2e sur la 3e. Après « qui » : accord avec l'antécédent." },
            },
            {
              heading: "L'attribut du sujet",
              paragraphs: [
                "L'attribut du sujet exprime une caractéristique du sujet : sa qualité, son état, son identité, son métier. Il est relié au sujet par un verbe attributif : être, paraître, sembler, devenir, demeurer, rester, avoir l'air, passer pour. Dans « Ma grand-mère est infirmière », « infirmière » dit qui est la grand-mère.",
                "L'attribut est souvent un adjectif (« La soupe semble chaude »), un nom ou un groupe nominal (« Léo deviendra un grand musicien »), parfois un pronom (« Fatiguée, elle l'est »). Quelques autres verbes peuvent avoir un attribut : « Il est arrivé premier », « Elle est restée calme ».",
                "Quand l'attribut est un adjectif, il s'accorde en genre et en nombre avec le sujet : « Les rues sont désertes » (féminin pluriel, comme « rues »). C'est une source fréquente d'erreurs, surtout quand le sujet est éloigné ou inversé.",
              ],
              box: { label: "Définition", text: "L'attribut du sujet exprime une caractéristique du sujet, auquel il est relié par un verbe attributif (être, paraître, sembler, devenir, demeurer, rester, avoir l'air, passer pour). Adjectif attribut : accord en genre et en nombre avec le sujet." },
            },
            {
              heading: "Attribut du sujet ou COD ?",
              paragraphs: [
                "L'attribut et le COD se placent tous deux après le verbe, sans préposition : on les confond facilement. Mais l'attribut désigne la même réalité que le sujet, alors que le COD désigne autre chose. Dans « Mon voisin est un médecin », le voisin et le médecin sont la même personne : « un médecin » est attribut. Dans « Mon voisin appelle un médecin », ce sont deux personnes différentes : « un médecin » est COD.",
                "Deux tests confirment l'analyse. Le verbe est-il attributif (être, sembler, devenir...) ? Si oui, c'est sans doute un attribut. Ensuite, remplacez par un pronom : l'attribut devient « le », qui ne varie pas (« Elles sont fatiguées » donne « Elles le sont ») ; le COD devient le, la ou les selon son genre et son nombre (« Elle appelle ses amies » donne « Elle les appelle »).",
              ],
            },
          ],
          keyPoints: [
            "Le sujet commande l'accord du verbe ; tests : « C'est... qui » et remplacement par il, elle, ils, elles.",
            "Le sujet peut être inversé (questions, incises, phrase commençant par un complément) ou séparé du verbe.",
            "Plusieurs sujets : verbe au pluriel ; après « qui », accord avec l'antécédent.",
            "L'attribut du sujet suit un verbe attributif (être, paraître, sembler, devenir, rester...) et caractérise le sujet.",
            "Attribut = même réalité que le sujet ; COD = autre réalité. L'adjectif attribut s'accorde avec le sujet.",
          ],
          example: {
            statement: "Dans la phrase « Au sommet de la colline se dressaient deux vieux moulins, qui paraissaient abandonnés », trouvez le sujet de chaque verbe et l'attribut du sujet, puis justifiez les accords.",
            solution: [
              "Repérer les verbes conjugués : « se dressaient » et « paraissaient ».",
              "Sujet de « se dressaient » : encadrement « Ce sont deux vieux moulins qui se dressaient ». Le sujet « deux vieux moulins » est inversé, placé après le verbe, car la phrase commence par un complément de lieu. Il est au pluriel, d'où la terminaison -aient.",
              "Sujet de « paraissaient » : le pronom relatif « qui », dont l'antécédent est « deux vieux moulins ». Le verbe s'accorde avec cet antécédent : 3e personne du pluriel.",
              "Attribut : « paraître » est un verbe attributif ; « abandonnés » caractérise les moulins. C'est un adjectif attribut du sujet « qui » (les moulins).",
              "Accord de l'attribut : « moulins » est masculin pluriel, donc « abandonnés » prend -s.",
              "Réponse : sujets « deux vieux moulins » (inversé) et « qui » ; attribut « abandonnés », au masculin pluriel.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez le sujet du verbe indiqué entre parenthèses. a) Dans le grenier dormaient de vieux jouets. (dormaient) b) « Je reviens », murmura le voyageur. (murmura) c) Les fleurs que ma mère a plantées poussent vite. (poussent) d) Nager en mer demande de la prudence. (demande) e) Ma sœur et moi partageons la même chambre. (partageons)",
              hint: "Encadrez le groupe par « C'est... qui » ou « Ce sont... qui ». Attention aux sujets placés après le verbe et aux mots qui s'intercalent entre le sujet et le verbe.",
              solution: [
                "a) « de vieux jouets » : sujet inversé (« Ce sont de vieux jouets qui dormaient »).",
                "b) « le voyageur » : sujet inversé après une parole rapportée.",
                "c) « Les fleurs » : « que ma mère a plantées » est une relative glissée entre le sujet et le verbe ; « ma mère » est le sujet de « a plantées », pas de « poussent ».",
                "d) « Nager en mer » : le sujet est un verbe à l'infinitif avec son complément.",
                "e) « Ma sœur et moi » : deux sujets coordonnés, dont « moi » (1re personne), d'où « partageons » (1re personne du pluriel).",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez le verbe entre parenthèses au présent et accordez l'adjectif attribut si nécessaire. a) Sur la table (traîner) des cahiers. b) Ton cousin et toi (être) ... (prêt). c) C'est moi qui (avoir) les clés. d) Les nuits d'hiver (paraître) ... (long). e) Les enfants que la maîtresse (surveiller) (rester) ... (calme).",
              hint: "Trouvez d'abord le sujet de chaque verbe avec le test « C'est... qui ». Pour l'attribut, regardez le genre et le nombre du sujet.",
              solution: [
                "a) « Sur la table traînent des cahiers. » Le sujet inversé « des cahiers » est au pluriel.",
                "b) « Ton cousin et toi êtes prêts. » La 2e personne l'emporte sur la 3e : « vous êtes » ; l'attribut « prêts » est au masculin pluriel.",
                "c) « C'est moi qui ai les clés. » Après « qui », le verbe s'accorde avec l'antécédent « moi » : 1re personne du singulier.",
                "d) « Les nuits d'hiver paraissent longues. » Sujet « Les nuits » (féminin pluriel), d'où l'attribut « longues ».",
                "e) « Les enfants que la maîtresse surveille restent calmes. » « la maîtresse » est sujet de « surveille » (singulier) ; « Les enfants » est sujet de « restent » (pluriel) ; l'attribut « calmes » s'accorde avec « enfants ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour chaque groupe entre crochets, dites s'il est attribut du sujet ou COD, et justifiez avec deux tests. a) Mon oncle est [un excellent cuisinier]. b) Mon oncle engage [un excellent cuisinier]. c) Ces histoires semblent [vraies]. d) Clara reste [la meilleure joueuse de l'équipe]. e) Clara félicite [la meilleure joueuse de l'équipe]. Écrivez enfin une phrase où le même groupe nominal est attribut, puis une autre où il est COD.",
              hint: "Premier test : le verbe est-il attributif (être, sembler, rester...) ? Second test : le groupe désigne-t-il la même personne ou la même chose que le sujet ?",
              solution: [
                "a) Attribut du sujet : « est » est un verbe attributif, et l'oncle et le cuisinier sont la même personne. Pronom : « Il l'est ».",
                "b) COD : « engager » n'est pas un verbe attributif, et l'oncle et le cuisinier sont deux personnes différentes. Pronom : « Il l'engage » (il engage quelqu'un d'autre).",
                "c) Attribut du sujet : « sembler » est attributif, et « vraies » caractérise les histoires ; l'adjectif s'accorde au féminin pluriel avec « histoires ».",
                "d) Attribut du sujet : « rester » est attributif, et Clara est la meilleure joueuse.",
                "e) COD : « féliciter » n'est pas attributif ; Clara félicite une autre personne. Pronom : « Clara la félicite ».",
                "Exemples de phrases : « Mon père est un grand voyageur » (attribut) ; « Mon père a rencontré un grand voyageur » (COD).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le sujet et l'attribut.",
            statements: [
              { text: "Le sujet est toujours placé avant le verbe.", true: false, why: "Il peut être inversé : « Au loin brillait un phare », « Où allez-vous ? »" },
              { text: "Un verbe à l'infinitif peut être sujet.", true: true, why: "« Lire me détend » : « Lire » est le sujet de « détend »." },
              { text: "Dans « Il est devenu pompier », « pompier » est COD.", true: false, why: "« devenir » est un verbe attributif : « pompier » est attribut du sujet « Il »." },
              { text: "L'adjectif attribut s'accorde avec le sujet.", true: true, why: "« Les fenêtres restent ouvertes » : « ouvertes » est au féminin pluriel, comme « fenêtres »." },
              { text: "Dans « C'est toi qui as raison », le verbe s'accorde avec l'antécédent de « qui ».", true: true, why: "L'antécédent est « toi », 2e personne du singulier, d'où « as »." },
              { text: "Le COD désigne la même personne que le sujet.", true: false, why: "C'est l'attribut qui désigne la même réalité que le sujet ; le COD désigne autre chose." },
            ],
          },
          quiz: [
            { q: "Quel est le sujet de « vivait » dans « Dans ce château vivait une reine cruelle » ?", options: ["Dans ce château vivait", "une reine cruelle", "château"], answer: 1, why: "Le sujet est inversé : « C'est une reine cruelle qui vivait dans ce château »." },
            { q: "Dans « Mes amies semblent heureuses », quelle est la fonction de « heureuses » ?", options: ["COD", "Sujet", "Attribut du sujet", "Complément circonstanciel"], answer: 2, why: "« sembler » est un verbe attributif : « heureuses » caractérise le sujet « Mes amies »." },
            { q: "Quelle phrase est correctement accordée ?", options: ["Ma mère et moi partons demain.", "Ma mère et moi partent demain.", "Ma mère et moi part demain.", "Ma mère et moi partez demain."], answer: 0, why: "Avec « moi », la 1re personne l'emporte : « Ma mère et moi, nous partons »." },
            { q: "Lequel de ces verbes n'est pas attributif ?", options: ["Paraître", "Devenir", "Rester", "Regarder"], answer: 3, why: "« regarder » a un COD (« Il regarde la mer ») ; les trois autres relient le sujet à un attribut." },
            { q: "« Les enfants que nous gardons dorment. » Quel est le sujet de « dorment » ?", options: ["nous", "que", "Les enfants"], answer: 2, why: "« que nous gardons » est une relative intercalée ; ce sont les enfants qui dorment." },
          ],
          trap: "Accorder le verbe avec le mot le plus proche au lieu du vrai sujet (« Les oiseaux que le chat guette s'envole »), ou oublier d'accorder l'adjectif attribut avec un sujet éloigné ou inversé.",
          method: "Pour chaque verbe, encadrez toujours le sujet par « C'est... qui » avant d'écrire la terminaison, puis tracez une flèche du sujet vers le verbe. Pour un attribut, tracez une seconde flèche du sujet vers l'adjectif : il prend les mêmes marques de genre et de nombre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'complements-du-verbe',
          title: 'Les compléments du verbe : COD et COI',
          minutes: 35,
          objectives: [
            "Identifier le complément d'objet direct (COD) et le complément d'objet indirect (COI).",
            "Remplacer un COD ou un COI par le pronom personnel qui convient.",
            "Distinguer un complément du verbe d'un complément circonstanciel.",
            "Reconnaître un verbe qui se construit avec deux compléments.",
          ],
          course: [
            {
              heading: "Les compléments du verbe",
              paragraphs: [
                "Certains verbes ont besoin d'un complément pour que leur sens soit complet : « Elle ressemble... » appelle une suite (« à son père »). Ces compléments font partie du groupe verbal. Contrairement aux compléments circonstanciels, ils ne peuvent généralement pas être déplacés en tête de phrase, et souvent pas supprimés.",
                "On classe les verbes selon leur construction. Un verbe transitif direct se construit avec un COD (« regarder la mer »). Un verbe transitif indirect se construit avec un COI (« obéir à ses parents »). Un verbe intransitif n'a pas de complément d'objet (« dormir », « arriver », « éternuer »). Le dictionnaire indique cette construction par les abréviations v. tr. (transitif) et v. intr. (intransitif).",
              ],
              box: { label: "Repère", text: "Verbe transitif direct : se construit avec un COD (aimer quelque chose). Verbe transitif indirect : se construit avec un COI (penser à quelque chose). Verbe intransitif : sans complément d'objet (dormir)." },
            },
            {
              heading: "Le complément d'objet direct (COD)",
              paragraphs: [
                "Le COD complète le verbe sans préposition. On peut poser la question « qui ? » ou « quoi ? » après le verbe : « Il lit un roman » (il lit quoi ? un roman). Il se remplace par un pronom placé avant le verbe : le, la, l', les, ou « en » avec un partitif (« Je bois du lait » donne « J'en bois »).",
                "Le COD peut être un groupe nominal (« J'adopte un chaton »), un pronom (« Je la vois »), un verbe à l'infinitif (« J'aime dessiner ») ou même une proposition subordonnée (« Je sais que Léo viendra »). Quand c'est un pronom, il se place avant le verbe : il ne faut pas le confondre avec le sujet.",
              ],
              box: { label: "Définition", text: "Le COD complète le verbe directement, sans préposition. Il se remplace par le, la, l', les (ou en) : « Je cueille des fleurs » donne « J'en cueille » ; « Je cueille les fleurs » donne « Je les cueille »." },
            },
            {
              heading: "Le complément d'objet indirect (COI)",
              paragraphs: [
                "Le COI complète le verbe par l'intermédiaire d'une préposition, le plus souvent « à » ou « de », parfois « sur » ou « en » : parler à quelqu'un, se souvenir de quelque chose, compter sur un ami, croire en soi. C'est le verbe qui impose la préposition.",
                "Le COI se remplace par un pronom placé avant le verbe : lui ou leur pour une personne introduite par « à » (« Je parle à mon frère » donne « Je lui parle »), y pour une chose introduite par « à » (« Je pense à mes vacances » donne « J'y pense »), en pour une chose introduite par « de » (« Il se souvient de ce voyage » donne « Il s'en souvient »).",
                "Attention à l'orthographe : « leur » pronom, placé devant un verbe, est invariable (« Je leur parle »), alors que « leur » déterminant, placé devant un nom, prend un -s au pluriel (« leurs livres »).",
              ],
              box: { label: "Définition", text: "Le COI complète le verbe par une préposition (à, de, sur, en...). Pronoms : lui, leur (personnes) ; y (à + chose) ; en (de + chose). « Leur » pronom devant un verbe ne prend jamais de -s." },
            },
            {
              heading: "Deux compléments pour un même verbe",
              paragraphs: [
                "Certains verbes se construisent avec deux compléments : donner, offrir, envoyer, prêter, demander, dire quelque chose à quelqu'un. Dans « Lina prête son vélo à sa cousine », « son vélo » est COD et « à sa cousine » est COI. Ce second complément est souvent appelé complément d'objet second (COS).",
                "Les deux compléments peuvent être remplacés par des pronoms, dans un ordre précis : « Lina le lui prête », « Elle me le prête », « Il nous en parle ». C'est un bon test pour vérifier votre analyse.",
              ],
            },
            {
              heading: "COD, COI ou complément circonstanciel ?",
              paragraphs: [
                "Un groupe nominal sans préposition n'est pas forcément COD. Dans « Il travaille le soir », « le soir » indique le moment : on peut le déplacer (« Le soir, il travaille ») ; c'est un complément circonstanciel de temps. Dans « Il prépare le dîner », « le dîner » ne se déplace pas et se remplace par « le » : c'est un COD.",
                "De même, un groupe introduit par « à » n'est pas forcément COI. Dans « Il parle à son voisin », « à son voisin » est COI (« Il lui parle »). Dans « Il lit à la bibliothèque », « à la bibliothèque » indique le lieu et peut se déplacer (« À la bibliothèque, il lit ») : c'est un complément circonstanciel de lieu.",
              ],
              box: { label: "Règle", text: "Le test du déplacement tranche : un complément du verbe (COD, COI) ne se déplace pas en tête de phrase ; un complément circonstanciel se déplace. Le test du pronom confirme : le, la, les pour le COD ; lui, leur, y, en pour le COI." },
            },
          ],
          keyPoints: [
            "COD : sans préposition, répond à « qui ? quoi ? », remplacé par le, la, l', les (ou en).",
            "COI : avec une préposition (à, de...), remplacé par lui, leur, y ou en.",
            "Le COD et le COI font partie du groupe verbal : ils ne se déplacent pas en tête de phrase.",
            "Avec donner, prêter, dire... : un COD et un second complément (COS) : « Je le lui prête ».",
            "« Leur » pronom devant un verbe est invariable : « Je leur écris ».",
          ],
          example: {
            statement: "Analysez les compléments de la phrase « Ce matin, le facteur a remis un colis à ma voisine », puis remplacez les compléments du verbe par des pronoms.",
            solution: [
              "Le verbe est « a remis » (passé composé), son sujet est « le facteur ».",
              "« Ce matin » se déplace (« Le facteur a remis un colis à ma voisine ce matin ») et indique le moment : c'est un complément circonstanciel de temps, pas un complément du verbe.",
              "« un colis » est relié au verbe sans préposition et répond à la question « a remis quoi ? » : c'est le COD.",
              "« à ma voisine » est relié au verbe par la préposition « à » et répond à la question « à qui ? » : c'est un COI, ici second complément (COS).",
              "Remplacement : « un colis » devient « le », « à ma voisine » devient « lui » : « Ce matin, le facteur le lui a remis. »",
              "Réponse : « un colis » COD, « à ma voisine » COI (COS), « Ce matin » complément circonstanciel de temps.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez le complément du verbe et dites s'il est COD ou COI. a) Les enfants construisent une cabane. b) Nous pensons souvent à nos grands-parents. c) Elle se méfie des orages. d) J'aime marcher en forêt. e) Le professeur nous écoute. f) Vous obéissez au règlement.",
              hint: "Regardez s'il y a une préposition (à, de, des, au...) entre le verbe et le complément. Attention : « au » et « des » contiennent la préposition « à » ou « de ».",
              solution: [
                "a) « une cabane » : COD (construisent quoi ? sans préposition).",
                "b) « à nos grands-parents » : COI (penser à quelqu'un).",
                "c) « des orages » : COI, car « des » est ici la contraction de « de les » (se méfier de quelque chose).",
                "d) « marcher en forêt » : COD, un verbe à l'infinitif (j'aime quoi ? marcher).",
                "e) « nous » : COD, pronom placé avant le verbe (le professeur écoute qui ? nous).",
                "f) « au règlement » : COI, car « au » est la contraction de « à le » (obéir à quelque chose).",
              ],
            },
            {
              level: 2,
              statement: "Remplacez les groupes entre crochets par un pronom personnel et dites quelle est leur fonction. a) Je téléphone [à mes cousins]. b) Il range [ses affaires]. c) Nous parlons [de ce film]. d) Elle offre [des fleurs] [à sa mère]. e) Vous pensez [à votre exposé].",
              hint: "COD : le, la, l', les, en. COI : lui, leur (personne), y (à + chose), en (de + chose). Avec deux compléments, remplacez les deux.",
              solution: [
                "a) « Je leur téléphone. » COI (téléphoner à quelqu'un, personnes au pluriel) ; « leur » sans -s.",
                "b) « Il les range. » COD.",
                "c) « Nous en parlons. » COI (parler de quelque chose).",
                "d) « Elle lui en offre. » « des fleurs » est COD (remplacé par « en », car il est introduit par l'article indéfini « des ») et « à sa mère » est COI, second complément (remplacé par « lui »).",
                "e) « Vous y pensez. » COI (penser à quelque chose).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans ce texte écrit pour l'exercice, classez chaque groupe entre crochets : COD, COI ou complément circonstanciel. Justifiez avec un test. « Le samedi, Hugo aide [son grand-père] [dans son atelier]. Il lui tend [les outils] et il écoute [ses conseils]. Ils travaillent [toute la matinée]. À midi, ils parlent [de leurs projets] [avec enthousiasme]. »",
              hint: "Essayez de déplacer chaque groupe en tête de phrase : s'il se déplace, c'est un complément circonstanciel. Sinon, remplacez-le par un pronom pour distinguer COD et COI.",
              solution: [
                "« son grand-père » : COD (« Hugo l'aide » ; impossible de dire « Son grand-père, Hugo aide »).",
                "« dans son atelier » : complément circonstanciel de lieu (« Dans son atelier, Hugo aide son grand-père »).",
                "« les outils » : COD (« Il les lui tend ») ; « lui », placé avant le verbe, est le COI qui désigne le grand-père.",
                "« ses conseils » : COD (« il les écoute »).",
                "« toute la matinée » : complément circonstanciel de temps (durée), même sans préposition : il se déplace (« Toute la matinée, ils travaillent ») et ne se remplace pas par « la ».",
                "« de leurs projets » : COI (« ils en parlent ») ; « avec enthousiasme » : complément circonstanciel de manière (« Avec enthousiasme, ils parlent de leurs projets »).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour identifier un complément dans la phrase.",
            items: [
              "Repérer le verbe conjugué et son sujet.",
              "Isoler le groupe de mots à analyser.",
              "Essayer de le déplacer en tête de phrase : s'il se déplace, c'est un complément circonstanciel.",
              "S'il ne se déplace pas, regarder s'il est introduit par une préposition.",
              "Sans préposition : vérifier le COD en le remplaçant par le, la ou les.",
              "Avec une préposition : vérifier le COI en le remplaçant par lui, leur, y ou en.",
            ],
          },
          quiz: [
            { q: "Dans « Je pense à mon voyage », quelle est la fonction de « à mon voyage » ?", options: ["COD", "COI", "Complément circonstanciel de lieu", "Sujet"], answer: 1, why: "On pense à quelque chose : le complément est introduit par « à » et se remplace par « y » (J'y pense)." },
            { q: "Quel pronom remplace « à ses amis » dans « Il écrit à ses amis » ?", options: ["les", "leurs", "leur", "y"], answer: 2, why: "Pour des personnes introduites par « à », on emploie « leur », invariable devant le verbe : « Il leur écrit »." },
            { q: "Dans « Il dort la nuit », quelle est la fonction de « la nuit » ?", options: ["Complément circonstanciel de temps", "COD", "COI"], answer: 0, why: "« dormir » est intransitif, et « la nuit » se déplace (« La nuit, il dort ») : c'est un complément circonstanciel." },
            { q: "Quel verbe se construit avec deux compléments ?", options: ["Dormir", "Arriver", "Ressembler", "Prêter"], answer: 3, why: "On prête quelque chose (COD) à quelqu'un (COI, second complément)." },
            { q: "Dans « Elle les invite », quelle est la fonction de « les » ?", options: ["Sujet", "COI", "COD", "Déterminant"], answer: 2, why: "« les » est un pronom placé avant le verbe, sans préposition : elle invite qui ? eux, c'est le COD." },
          ],
          trap: "Prendre tout groupe nominal placé après le verbe pour un COD : « le soir », « toute la matinée » ou « une heure » sont souvent des compléments circonstanciels, qu'on peut déplacer. Autre erreur : écrire « leurs » devant un verbe (« je leurs parle »).",
          method: "Faites systématiquement deux tests : le déplacement en tête de phrase (complément circonstanciel ou non), puis le remplacement par un pronom (le, la, les pour le COD ; lui, leur, y, en pour le COI). Deux tests concordants valent mieux qu'une question « quoi ? » posée au hasard.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'complements-circonstanciels',
          title: 'Les compléments circonstanciels et les expansions du nom',
          minutes: 35,
          objectives: [
            "Identifier les compléments circonstanciels et préciser la circonstance qu'ils expriment.",
            "Reconnaître les différentes formes du complément circonstanciel.",
            "Identifier les expansions du nom : adjectif épithète, complément du nom, subordonnée relative.",
            "Distinguer un complément circonstanciel d'un complément du nom.",
          ],
          course: [
            {
              heading: "Le complément circonstanciel, un complément de phrase",
              paragraphs: [
                "Le complément circonstanciel apporte une information sur les circonstances de l'action : où, quand, comment, pourquoi... Dans « Le matin, Léo court dans le parc », « Le matin » et « dans le parc » précisent le moment et le lieu. Comme il complète toute la phrase, et non le verbe seul, la grammaire actuelle l'appelle aussi complément de phrase.",
                "Il se reconnaît à deux tests. On peut le plus souvent le supprimer sans que la phrase devienne incorrecte : « Léo court ». On peut aussi le déplacer : « Léo court dans le parc le matin », « Dans le parc, le matin, Léo court ». Une phrase peut contenir plusieurs compléments circonstanciels.",
              ],
              box: { label: "Définition", text: "Le complément circonstanciel (ou complément de phrase) précise les circonstances de l'action. Il est en général supprimable et déplaçable, contrairement aux compléments du verbe (COD, COI)." },
            },
            {
              heading: "Les principales circonstances",
              paragraphs: [
                "Chaque complément circonstanciel exprime une circonstance, que l'on trouve en posant une question. Le temps (quand ? combien de temps ?) : « Demain, nous partirons ». Le lieu (où ?) : « Il habite près de la gare ». La manière (comment ?) : « Elle parle doucement ». Le moyen (avec quoi ?) : « Il ouvre la porte avec une clé ».",
                "La cause (pourquoi ?) : « Le match est annulé à cause de la pluie ». Le but (dans quel but ?) : « Elle s'entraîne pour gagner ». L'accompagnement (avec qui ?) : « Je vais au cinéma avec mon frère ». Attention : les questions aident, mais c'est le sens de la phrase qui permet de trancher.",
              ],
              box: { label: "Repère", text: "Temps : quand ? Lieu : où ? Manière : comment ? Moyen : avec quoi ? Cause : pourquoi ? But : dans quel but ? Accompagnement : avec qui ?" },
            },
            {
              heading: "Les formes du complément circonstanciel",
              paragraphs: [
                "Le complément circonstanciel peut prendre des formes très variées : un groupe nominal (« Ce soir, je lis »), un groupe introduit par une préposition (« dans la cour », « avec soin », « malgré le froid »), un adverbe (« ici », « demain », « lentement »), un gérondif (« en chantant »), un infinitif précédé d'une préposition (« pour réussir », « avant de partir »).",
                "Il peut aussi être une proposition subordonnée introduite par une conjonction de subordination : « Quand la cloche sonne, les élèves sortent » (temps), « Il reste chez lui parce qu'il est malade » (cause). Varier ces formes enrichit vos rédactions.",
              ],
            },
            {
              heading: "Les expansions du nom",
              paragraphs: [
                "Dans un groupe nominal, le nom noyau peut être enrichi par des expansions, qui le précisent. L'adjectif épithète est placé juste avant ou juste après le nom, sans verbe entre eux : « un vieux château », « une robe rouge ». Il s'accorde avec le nom.",
                "Le complément du nom est relié au nom par une préposition (de, à, en, pour, sans...) : « le chat de la voisine », « une tasse à café », « une bague en or », « une machine à coudre ». Il peut être un nom, un groupe nominal, un infinitif ou un adverbe (« les gens d'ici »).",
                "La proposition subordonnée relative complète elle aussi un nom, son antécédent : « le château qui domine la vallée ». Les expansions du nom sont en général supprimables, mais elles ne se déplacent pas seules : elles restent attachées au nom, et un pronom remplace le groupe entier (« Le vieux château de mon oncle est vendu » donne « Il est vendu »).",
              ],
              box: { label: "À retenir", text: "Trois expansions du nom : l'adjectif épithète (une robe rouge), le complément du nom introduit par une préposition (une robe de soirée), la subordonnée relative (une robe que j'adore). Elles restent attachées au nom." },
            },
            {
              heading: "Complément circonstanciel ou complément du nom ?",
              paragraphs: [
                "Un groupe introduit par une préposition peut dépendre d'un nom ou de la phrase entière. Comparez : « Le chat de la voisine dort » et « Le chat dort chez la voisine ». Dans la première phrase, « de la voisine » précise le nom « chat » : c'est un complément du nom. Dans la seconde, « chez la voisine » indique où il dort : c'est un complément circonstanciel de lieu.",
                "Le test du déplacement permet de trancher : « Chez la voisine, le chat dort » est possible, mais « De la voisine, le chat dort » n'a pas de sens. Le test du pronom confirme : dans la première phrase, « Il dort » remplace tout le groupe « Le chat de la voisine ».",
              ],
              box: { label: "Règle", text: "Complément circonstanciel : dépend de la phrase, se déplace. Complément du nom : dépend d'un nom, reste collé à lui et disparaît avec lui quand on remplace le groupe nominal par un pronom." },
            },
          ],
          keyPoints: [
            "Le complément circonstanciel (complément de phrase) se supprime et se déplace.",
            "Circonstances principales : temps, lieu, manière, moyen, cause, but, accompagnement.",
            "Formes : groupe nominal, groupe prépositionnel, adverbe, gérondif, infinitif, subordonnée.",
            "Expansions du nom : adjectif épithète, complément du nom, subordonnée relative.",
            "CC ou complément du nom : le CC se déplace, le complément du nom reste attaché au nom.",
          ],
          example: {
            statement: "Dans la phrase « Pendant les vacances, ma cousine aux cheveux roux a visité avec ses parents un vieux château qui domine la vallée », relevez les compléments circonstanciels et les expansions du nom.",
            solution: [
              "Repérer le verbe principal « a visité », son sujet « ma cousine aux cheveux roux » et son COD « un vieux château qui domine la vallée ».",
              "« Pendant les vacances » indique quand : complément circonstanciel de temps (il peut être déplacé ou supprimé).",
              "« avec ses parents » indique avec qui : complément circonstanciel d'accompagnement (« Avec ses parents, ma cousine a visité... »).",
              "« aux cheveux roux » est relié au nom « cousine » par la préposition « à » (contractée en « aux ») : c'est un complément du nom ; il ne peut pas se déplacer seul.",
              "« vieux » est un adjectif épithète du nom « château » ; « qui domine la vallée » est une subordonnée relative, expansion du nom « château ».",
              "Réponse : deux compléments circonstanciels (temps, accompagnement) et trois expansions du nom (« aux cheveux roux », « vieux », « qui domine la vallée »).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez les compléments circonstanciels et indiquez la circonstance exprimée. a) Chaque matin, Tom promène son chien au bord du canal. b) Elle a ouvert le colis avec des ciseaux. c) Le spectacle est reporté à cause de la tempête. d) Nous avons traversé la rivière en silence. e) Lucie travaille dur pour réussir son examen.",
              hint: "Cherchez les groupes que l'on peut déplacer ou supprimer, puis posez les questions : quand ? où ? comment ? avec quoi ? pourquoi ? dans quel but ?",
              solution: [
                "a) « Chaque matin » : temps ; « au bord du canal » : lieu.",
                "b) « avec des ciseaux » : moyen (avec quoi ?).",
                "c) « à cause de la tempête » : cause.",
                "d) « en silence » : manière (comment ?).",
                "e) « dur » : manière (adverbe) ; « pour réussir son examen » : but.",
              ],
            },
            {
              level: 2,
              statement: "Dans chaque groupe nominal entre crochets, relevez les expansions du nom et donnez leur nature (adjectif épithète, complément du nom, subordonnée relative). a) J'ai acheté [un pull en laine] [très chaud]. b) [La maison où j'ai grandi] avait [un grand jardin]. c) [Le professeur de musique] nous a appris [une chanson que nous adorons]. d) Il porte [une montre sans aiguilles].",
              hint: "Trouvez d'abord le nom noyau de chaque groupe, puis regardez ce qui le complète : un adjectif collé au nom, un groupe introduit par une préposition, ou une proposition introduite par un pronom relatif.",
              solution: [
                "a) Noyau « pull » : « en laine » est un complément du nom (préposition « en ») ; « très chaud » est un adjectif épithète (avec son adverbe « très »).",
                "b) Noyau « maison » : « où j'ai grandi » est une subordonnée relative. Noyau « jardin » : « grand » est un adjectif épithète.",
                "c) Noyau « professeur » : « de musique » est un complément du nom. Noyau « chanson » : « que nous adorons » est une subordonnée relative.",
                "d) Noyau « montre » : « sans aiguilles » est un complément du nom (préposition « sans »).",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Dans chaque paire, dites si le groupe entre crochets est un complément circonstanciel ou un complément du nom, et justifiez par un test. a) La lampe [du salon] est cassée. / La lampe est tombée [dans le salon]. b) Nous mangeons [avec nos voisins]. / Le repas [avec nos voisins] était joyeux. 2) Enrichissez la phrase « Le garçon regarde le ciel » en ajoutant deux compléments circonstanciels de natures différentes et trois expansions du nom de natures différentes.",
              hint: "Essayez de déplacer le groupe en tête de phrase : s'il se déplace et que la phrase garde son sens, c'est un complément circonstanciel. Pour la question 2, utilisez un adjectif, un groupe avec préposition et une relative.",
              solution: [
                "a) « du salon » est un complément du nom « lampe » : on ne peut pas dire « Du salon, la lampe est cassée » ; « Elle est cassée » remplace tout le groupe. « dans le salon » est un complément circonstanciel de lieu : « Dans le salon, la lampe est tombée ».",
                "b) « avec nos voisins » est un complément circonstanciel d'accompagnement dans la première phrase (« Avec nos voisins, nous mangeons »). Dans la seconde, il précise le nom « repas » (« Il était joyeux » remplace « Le repas avec nos voisins ») : c'est un complément du nom.",
                "2) Phrase enrichie possible : « Chaque soir, le petit garçon aux yeux rêveurs regarde avec émerveillement le ciel qui s'étoile. »",
                "Vérification : compléments circonstanciels « Chaque soir » (groupe nominal, temps) et « avec émerveillement » (groupe prépositionnel, manière). Expansions du nom : « petit » (adjectif épithète de « garçon »), « aux yeux rêveurs » (complément du nom « garçon »), « qui s'étoile » (subordonnée relative, antécédent « ciel »).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque complément circonstanciel à la circonstance qu'il exprime.",
            pairs: [
              { left: "dès l'aube", right: "Le temps" },
              { left: "sous le pont", right: "Le lieu" },
              { left: "à toute vitesse", right: "La manière" },
              { left: "avec un tournevis", right: "Le moyen" },
              { left: "à cause du brouillard", right: "La cause" },
              { left: "pour gagner du temps", right: "Le but" },
            ],
          },
          quiz: [
            { q: "Quel test permet de reconnaître un complément circonstanciel ?", options: ["Le remplacer par « le »", "Le déplacer dans la phrase", "L'encadrer par « C'est... qui »", "Le mettre au pluriel"], answer: 1, why: "Le complément circonstanciel est en général déplaçable et supprimable, contrairement aux compléments du verbe." },
            { q: "Dans « une tasse à café », quelle est la fonction de « à café » ?", options: ["Complément circonstanciel de lieu", "COI", "Complément du nom"], answer: 2, why: "« à café » précise le nom « tasse » grâce à la préposition « à » : c'est un complément du nom." },
            { q: "Quelle circonstance exprime « en courant » dans « Il est arrivé en courant » ?", options: ["La manière", "Le lieu", "La cause", "Le but"], answer: 0, why: "Le gérondif « en courant » dit comment il est arrivé : c'est un complément circonstanciel de manière." },
            { q: "Dans « un vieux livre », quelle est la fonction de « vieux » ?", options: ["Attribut du sujet", "Complément du nom", "COD", "Épithète"], answer: 3, why: "L'adjectif est placé à côté du nom, sans verbe : c'est un adjectif épithète, expansion du nom." },
            { q: "Quel autre nom donne-t-on au complément circonstanciel ?", options: ["Complément du verbe", "Complément de phrase", "Complément d'objet second"], answer: 1, why: "Il complète toute la phrase et non le verbe seul : la grammaire actuelle l'appelle aussi complément de phrase." },
          ],
          trap: "Confondre le complément circonstanciel et le complément du nom quand tous deux sont introduits par une préposition : « la lampe du salon » (complément du nom) n'est pas « tombée dans le salon » (complément circonstanciel). Seul le déplacement permet de trancher.",
          method: "Pour chaque groupe introduit par une préposition, posez-vous une question simple : de quoi dépend-il, d'un nom ou de toute la phrase ? Vérifiez en le déplaçant en tête de phrase : s'il garde son sens, c'est un complément circonstanciel ; sinon, regardez quel nom il complète.",
        },
      ],
    },
  ],
}
