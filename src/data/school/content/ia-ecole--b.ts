import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ia-ecole',
  chapters: [
    {
      id: 'travailler',
      lessons: [
        {
          id: 'triche-ou-aide',
          title: "Aide ou triche : où passe la limite ?",
          minutes: 25,
          objectives: [
            "Distinguer une aide qui fait apprendre d'une aide qui remplace le travail personnel.",
            "Identifier ce qu'un devoir évalue pour savoir quel usage de l'IA est acceptable.",
            "Appliquer les règles de son établissement et la consigne de chaque professeur.",
            "Expliquer pourquoi présenter le travail d'une IA comme le sien est une fraude.",
          ],
          course: [
            {
              heading: "Le critère : qui fait le travail évalué ?",
              paragraphs: [
                "Un devoir n'est pas une fin en soi : il sert à vous faire travailler une compétence (rédiger, raisonner, argumenter, calculer) et à montrer au professeur où vous en êtes. La question décisive est donc simple : le travail intellectuel que le devoir doit évaluer, est-ce vous qui l'avez fait, ou l'IA ? Si l'IA vous explique une notion, vous interroge ou vous signale une erreur que vous corrigez vous-même, vous restez l'auteur du travail. Si elle produit le texte, la solution ou le raisonnement que vous rendez, ce n'est plus votre travail.",
                "Pensez à un entraînement sportif : un entraîneur peut vous montrer le geste, corriger votre posture et vous chronométrer, mais s'il court à votre place, vous ne progressez pas, et le temps affiché ne dit rien de votre niveau. L'IA peut être un bon entraîneur, jamais un remplaçant.",
              ],
              box: { label: "Règle", text: "Une aide est acceptable quand elle vous fait comprendre ou progresser et que vous produisez vous-même ce qui est évalué. C'est une triche quand l'IA produit ce qui est évalué et que vous le présentez comme votre travail." },
            },
            {
              heading: "Des exemples des deux côtés de la limite",
              paragraphs: [
                "Du côté de l'aide : demander à l'IA de réexpliquer la proportionnalité avec un autre exemple que celui du cours, lui faire poser des questions sur un chapitre d'histoire avant un contrôle, lui demander de signaler les fautes d'accord d'un texte que vous avez écrit en vous donnant la règle, ou lui faire jouer un examinateur pour préparer un oral. Dans tous ces cas, c'est votre cerveau qui fait l'effort.",
                "Du côté de la triche : faire rédiger une rédaction ou une dissertation et la recopier, même en changeant quelques mots ; photographier un exercice de mathématiques et recopier la solution obtenue ; faire traduire un texte que le professeur vous demandait de traduire vous-même ; utiliser l'IA pendant un contrôle. Reformuler ne change rien : les idées, la structure et le raisonnement restent ceux de la machine.",
                "Entre les deux existent des zones grises : demander un plan détaillé, une liste d'arguments, une correction complète de vos phrases. La réponse dépend de ce que le devoir évalue. Si l'exercice porte sur la construction d'un plan, demander le plan revient à tricher ; si le professeur a autorisé la recherche d'idées avec l'IA, c'est permis. Dans le doute, posez la question au professeur avant de commencer, et non après.",
              ],
            },
            {
              heading: "Les règles : établissement, professeur, examen",
              paragraphs: [
                "Il n'existe pas une règle unique valable pour toutes les situations. Le ministère de l'Éducation nationale a publié un cadre d'usage de l'IA en éducation, et chaque établissement précise ses propres règles, par exemple dans son règlement intérieur ou dans une charte du numérique. Chaque professeur peut ensuite fixer une consigne pour un devoir donné : IA interdite, autorisée pour certaines étapes, ou demandée pour un exercice précis. Lisez les règles de votre établissement et, pour chaque devoir, suivez la consigne du professeur.",
                "Pendant un contrôle en classe, un brevet blanc ou un bac blanc, et à plus forte raison pendant les épreuves du brevet et du bac, aucun outil non autorisé n'est permis. Utiliser une IA pendant une épreuve d'examen est une fraude, qui peut entraîner des sanctions lourdes.",
              ],
              box: { label: "À retenir", text: "La consigne du professeur pour un devoir précis s'ajoute aux règles de l'établissement. En cas de doute, on demande avant de faire, et l'on ne présente jamais comme sien un travail produit par une IA." },
            },
            {
              heading: "Pourquoi la limite compte pour vous",
              paragraphs: [
                "Tricher avec l'IA trompe le professeur, mais surtout vous prive de l'entraînement. Le jour du contrôle en classe ou de l'examen, sans IA, il faudra savoir rédiger, calculer et argumenter seul. Une note obtenue grâce à une machine donne aussi au professeur une image fausse de votre niveau : il ne pourra pas vous aider là où vous en avez besoin.",
                "L'honnêteté intellectuelle est enfin une compétence en soi : dire ce qui vient de vous et ce qui vient d'ailleurs, c'est ce que l'on attend d'un élève, d'un étudiant, d'un chercheur ou d'un journaliste. Les logiciels qui prétendent détecter un texte écrit par une IA ne sont pas fiables, mais un professeur peut toujours vous demander d'expliquer votre copie à l'oral : un travail que vous n'avez pas fait se voit vite.",
              ],
            },
          ],
          keyPoints: [
            "Le critère : qui a fait le travail que le devoir évalue, vous ou l'IA ?",
            "Aide : l'IA explique, interroge, signale une erreur, et vous produisez vous-même le travail.",
            "Triche : l'IA produit le texte, la solution ou le raisonnement rendu, même reformulé.",
            "Chaque établissement fixe ses règles ; la consigne du professeur pour un devoir précis s'applique.",
            "En contrôle et à l'examen, l'IA est interdite : l'utiliser est une fraude.",
            "Dans une zone grise, demander au professeur avant de commencer.",
          ],
          example: {
            statement: "Léa, élève de 4e, doit écrire un récit d'une page sur un souvenir de vacances. Elle hésite entre deux usages de l'IA : (a) demander à l'IA d'écrire le récit, puis le recopier en changeant quelques phrases ; (b) écrire son récit elle-même, puis demander à l'IA de lui signaler les répétitions sans les corriger. Lequel est acceptable, et pourquoi ?",
            solution: [
              "Identifier ce que le devoir évalue : la capacité de Léa à raconter, à organiser un récit et à écrire correctement.",
              "Usage (a) : l'IA produit le récit, c'est-à-dire exactement ce qui est évalué. Changer quelques phrases ne change ni les idées ni la construction : c'est une triche.",
              "Usage (b) : Léa écrit elle-même le récit ; l'IA ne fait que signaler des répétitions, et c'est Léa qui choisit comment les corriger. Elle reste l'auteure du travail.",
              "Vérifier la règle : l'usage (b) n'est permis que si le professeur n'a pas interdit l'IA pour ce devoir. Léa relit la consigne et signale l'aide reçue si on le lui demande.",
              "Réponse : l'usage (b) est une aide acceptable, sous réserve de la consigne ; l'usage (a) est une triche.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque situation en « aide » ou « triche » : (1) Hugo demande à l'IA de lui poser dix questions sur la Révolution française avant son contrôle. (2) Inès fait résoudre son devoir maison de mathématiques par l'IA et recopie les solutions. (3) Malik demande à l'IA de lui réexpliquer la photosynthèse avec une comparaison. (4) Sarah fait traduire par l'IA le texte d'anglais qu'elle devait traduire elle-même.",
              hint: "Pour chaque situation, demandez-vous qui produit ce que le professeur va évaluer.",
              solution: [
                "(1) Hugo cherche lui-même les réponses dans sa mémoire : c'est une aide (un entraînement par questions).",
                "(2) L'IA produit les solutions qui seront évaluées : c'est une triche.",
                "(3) L'IA explique une notion ; Malik doit encore la comprendre et la retenir : c'est une aide.",
                "(4) La traduction est précisément le travail demandé, et l'IA le fait à la place de Sarah : c'est une triche.",
                "Résultat : aides : situations 1 et 3 ; triches : situations 2 et 4.",
              ],
            },
            {
              level: 2,
              statement: "Nathan, en 2nde, doit rédiger un paragraphe argumenté sur les avantages et les limites des réseaux sociaux. Le professeur a précisé : « Le travail porte sur la recherche et la construction des arguments. » Nathan pense demander à l'IA une liste de trois arguments, puis rédiger lui-même. Est-ce acceptable ? Proposez un usage de l'IA qui respecterait la consigne.",
              hint: "Repérez dans la consigne la compétence évaluée, puis vérifiez si l'usage envisagé l'exerce à la place de Nathan.",
              solution: [
                "La consigne indique ce qui est évalué : trouver des arguments et les organiser.",
                "Demander une liste d'arguments à l'IA, c'est lui confier le cœur de ce qui est évalué, même si Nathan rédige ensuite : ce n'est pas acceptable sans autorisation du professeur.",
                "Usage respectueux de la consigne : Nathan cherche seul ses arguments à partir du cours, rédige son paragraphe, puis demande à l'IA de jouer le contradicteur, par exemple : « Voici mon argument. Quelle objection pourrait-on me faire ? Ne réécris pas mon texte. »",
                "Il peut aussi lui demander si chaque argument est bien illustré par un exemple, puis corriger lui-même.",
                "Résultat : la liste d'arguments fournie par l'IA n'est pas acceptable ici ; un usage de l'IA comme contradicteur après rédaction l'est, si le professeur n'a pas interdit l'IA. En cas de doute, Nathan demande au professeur.",
              ],
            },
            {
              level: 3,
              statement: "Dans un collège, la charte du numérique indique que l'IA peut servir à « comprendre et s'entraîner », mais pas à « produire un travail noté ». Pour un exposé noté de SVT sur les volcans, Emma (4e) a d'abord demandé à l'IA d'expliquer la différence entre éruption effusive et éruption explosive, puis elle a fait rédiger par l'IA les textes de ses diapositives, qu'elle a lus à l'oral. Analysez chacun des deux usages au regard de la charte, puis rédigez en trois ou quatre phrases un conseil à Emma pour son prochain exposé.",
              hint: "Pour chaque usage, cherchez s'il relève de « comprendre et s'entraîner » ou de « produire un travail noté ».",
              solution: [
                "Premier usage : se faire expliquer la différence entre éruption effusive et éruption explosive relève de « comprendre » : il est autorisé par la charte.",
                "Second usage : les textes des diapositives font partie de l'exposé noté ; ils ont été produits par l'IA : cet usage est interdit par la charte. Lire un texte à l'oral ne fait pas d'Emma son auteure.",
                "Conséquence : Emma risque aussi de ne pas savoir répondre aux questions, car elle n'a pas construit elle-même son exposé.",
                "Conseil possible : « Emma, continuez à utiliser l'IA pour comprendre les notions difficiles. Rédigez ensuite vous-même vos diapositives, avec vos mots et à partir de sources vérifiées comme votre manuel. Pour vous entraîner, demandez à l'IA de vous poser les questions que la classe pourrait poser. Enfin, dites au professeur comment vous l'avez utilisée. »",
                "Résultat : premier usage conforme, second usage contraire à la charte ; le conseil distingue comprendre et produire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : aide ou triche ?",
            statements: [
              { text: "Reformuler un texte écrit par une IA en changeant quelques mots en fait votre propre travail.", true: false, why: "Les idées, la structure et le raisonnement restent ceux de l'IA : c'est toujours une triche." },
              { text: "Demander à l'IA de vous interroger sur une leçon avant un contrôle est une aide.", true: true, why: "C'est vous qui cherchez les réponses dans votre mémoire : c'est un entraînement." },
              { text: "Si l'établissement autorise l'IA, on peut l'utiliser pour tous les devoirs.", true: false, why: "La consigne du professeur pour un devoir précis peut l'interdire ou la limiter." },
              { text: "Utiliser une IA pendant un contrôle en classe est une fraude.", true: true, why: "En contrôle comme à l'examen, seul ce qui est autorisé peut être utilisé." },
              { text: "Un plan détaillé demandé à l'IA est toujours une aide acceptable.", true: false, why: "Si le devoir évalue la construction du plan, c'est l'IA qui fait le travail évalué." },
              { text: "En cas de doute, il vaut mieux interroger le professeur avant de commencer le devoir.", true: true, why: "Demander avant évite de rendre un travail contraire à la consigne." },
              { text: "Les détecteurs d'IA permettent de savoir à coup sûr si un texte a été écrit par une machine.", true: false, why: "Ces outils se trompent souvent ; ce qui compte, c'est l'honnêteté, pas la peur d'être détecté." },
            ],
          },
          quiz: [
            {
              q: "Quel est le meilleur critère pour savoir si un usage de l'IA est une aide ou une triche ?",
              options: ["La durée passée à discuter avec l'IA", "Qui produit ce que le devoir évalue", "Le nom de l'outil d'IA utilisé pour le devoir", "Le fait que le professeur puisse s'en apercevoir"],
              answer: 1,
              why: "Ce qui compte, c'est de savoir si le travail évalué a été fait par vous ou par l'IA.",
            },
            {
              q: "Maëlle fait rédiger sa rédaction par l'IA, puis change une dizaine de mots. Qu'en est-il ?",
              options: ["C'est une aide, puisqu'elle a modifié elle-même le texte", "C'est acceptable si le texte final est bien écrit", "C'est une aide si elle relit le texte avant", "C'est une triche : le texte reste celui de l'IA"],
              answer: 3,
              why: "Changer quelques mots ne change ni les idées ni la construction : le travail évalué a été fait par l'IA.",
            },
            {
              q: "Qui fixe la règle d'usage de l'IA pour un devoir précis ?",
              options: ["Le professeur, par sa consigne", "L'élève, selon ce qui lui semble juste et utile", "L'outil d'IA, dans ses conditions d'utilisation", "Les autres élèves de la classe, ensemble"],
              answer: 0,
              why: "Le professeur fixe la consigne de chaque devoir, dans le respect des règles de l'établissement.",
            },
            {
              q: "Lequel de ces usages est une aide ?",
              options: ["Faire résoudre son devoir maison par l'IA", "Faire traduire le texte qu'on devait traduire", "Se faire réexpliquer une notion autrement", "Utiliser discrètement l'IA pendant un contrôle en classe"],
              answer: 2,
              why: "Se faire réexpliquer une notion vous aide à comprendre ; c'est ensuite vous qui faites le travail.",
            },
            {
              q: "Pourquoi tricher avec l'IA vous nuit-il, même si personne ne s'en aperçoit ?",
              options: ["Parce que l'IA envoie automatiquement la conversation au professeur", "Parce que vous ne vous entraînez pas", "Parce que la note obtenue est toujours mauvaise", "Cela ne nuit pas si personne ne s'en aperçoit"],
              answer: 1,
              why: "Le jour du contrôle ou de l'examen, sans IA, vous ne saurez pas faire ce que vous n'avez jamais fait vous-même.",
            },
          ],
          trap: "Croire qu'un texte produit par une IA devient votre travail dès que vous le reformulez ou changez quelques mots : les idées et la construction restent celles de la machine.",
          method: "Avant chaque devoir, relisez la consigne et posez-vous deux questions : quelle compétence ce devoir fait-il travailler, et l'usage de l'IA envisagé la travaille-t-il à votre place ? Si la réponse est oui, ou si vous hésitez, demandez au professeur.",
        },
        {
          id: 'ia-redaction',
          title: "Rédiger soi-même, puis se faire relire",
          minutes: 30,
          objectives: [
            "Rédiger un texte personnel en suivant les étapes : comprendre le sujet, chercher des idées, planifier, rédiger, se relire.",
            "Formuler une demande de relecture qui signale les erreurs sans réécrire le texte.",
            "Évaluer les suggestions d'une IA et décider soi-même des corrections, à l'aide des règles.",
          ],
          course: [
            {
              heading: "Écrire, c'est penser",
              paragraphs: [
                "Rédiger ne consiste pas seulement à mettre en forme des idées déjà prêtes : c'est en écrivant que l'on clarifie ce que l'on pense, que l'on trouve ses exemples et que l'on découvre les failles de son raisonnement. Un récit en 6e, un paragraphe argumenté en histoire ou un commentaire en 1re font travailler la même compétence : organiser sa pensée avec ses propres mots. Si une IA rédige à votre place, c'est elle qui fait cet entraînement, et vous n'en gardez rien.",
                "Les textes produits par une IA sont aussi souvent généraux, lisses et interchangeables. Votre professeur attend au contraire vos exemples, vos références au cours, votre façon de construire une idée. Votre style, même imparfait, est la trace de votre réflexion, et c'est lui qui progresse d'un devoir à l'autre.",
              ],
              box: { label: "À retenir", text: "L'ordre compte : d'abord vous rédigez et vous vous relisez, ensuite l'IA peut relire, si la consigne l'autorise. Jamais l'inverse." },
            },
            {
              heading: "Les étapes de la rédaction, sans IA",
              paragraphs: [
                "Commencez par comprendre le sujet : soulignez les mots-clés, reformulez la question avec vos mots. Cherchez ensuite des idées au brouillon, à partir du cours et de vos lectures, puis classez-les dans un plan : deux ou trois parties pour une argumentation, une situation initiale, des péripéties et un dénouement pour un récit. Rédigez alors un premier jet complet, sans chercher la perfection.",
                "Relisez-vous d'abord seul, en plusieurs passages : une lecture pour le sens (les idées s'enchaînent-elles ?), une pour la construction des phrases, une pour l'orthographe (accords sujet-verbe, accords dans le groupe nominal, participes passés, homophones). Cette relecture personnelle est déjà un apprentissage : chaque erreur que vous trouvez vous-même est une erreur que vous referez moins.",
              ],
            },
            {
              heading: "Se faire relire par l'IA : signaler, pas réécrire",
              paragraphs: [
                "Une fois votre texte terminé et relu, une IA peut jouer le rôle d'un relecteur, si la consigne du professeur l'autorise. Tout dépend de la demande. « Corrige mon texte » produit une version réécrite : vous n'apprenez rien et le texte n'est plus tout à fait le vôtre. Une demande précise garde le travail de votre côté : « Voici mon texte. Signale-moi les fautes d'accord en citant la phrase et la règle, mais ne corrige pas à ma place. »",
                "Vous pouvez aussi demander un retour sur le fond : « Mon deuxième argument est-il illustré par un exemple ? Dis-moi seulement où mon raisonnement est faible, sans réécrire. » Ou, pour une langue vivante : « Indique les phrases de mon texte en anglais où le temps du verbe semble faux, et explique la règle. » Ensuite, c'est à vous de corriger, avec vos mots.",
              ],
              box: { label: "Repère", text: "Une bonne demande de relecture précise trois choses : le type d'erreurs à chercher, la forme de la réponse (citer la phrase, donner la règle) et l'interdiction de réécrire." },
            },
            {
              heading: "Garder le dernier mot",
              paragraphs: [
                "Une IA peut se tromper en grammaire comme ailleurs : elle peut signaler une faute qui n'en est pas une ou proposer une correction fausse. Dans « Les lettres que j'ai écrites », le participe passé employé avec avoir s'accorde avec le complément d'objet direct « que », mis pour « les lettres », car il est placé avant le verbe : « écrites » est correct, même si une IA suggère « écrit ». Vérifiez chaque suggestion avec la règle de votre manuel ou d'une grammaire, et ne gardez que celles que vous comprenez.",
                "Ne mettez jamais d'informations personnelles dans le texte que vous soumettez (nom complet, adresse, nom de l'établissement). Et si le professeur demande de signaler l'aide reçue, indiquez ce que l'IA a relu et ce que vous avez corrigé vous-même.",
              ],
            },
          ],
          keyPoints: [
            "Écrire fait penser : si l'IA rédige, c'est elle qui s'entraîne, pas vous.",
            "Étapes : comprendre le sujet, chercher des idées, faire un plan, rédiger, se relire seul.",
            "L'IA intervient après votre propre relecture, et seulement si la consigne l'autorise.",
            "Demander de signaler les erreurs avec la règle, pas de réécrire le texte.",
            "Vérifier chaque suggestion avec une règle sûre : l'IA peut se tromper en grammaire.",
            "Corriger soi-même, avec ses mots, et garder le dernier mot.",
          ],
          example: {
            statement: "Tom, en 3e, a rédigé à la maison un sujet de réflexion pour s'entraîner à l'épreuve de français du brevet ; le professeur autorise une relecture par l'IA. Tom hésite entre deux demandes : (A) « Corrige et améliore mon texte. » (B) « Voici mon texte. Signale-moi les fautes d'orthographe en citant la phrase et la règle, sans les corriger. » Laquelle choisir, et comment l'utiliser ?",
            solution: [
              "La demande A fait réécrire le texte : Tom reçoit une version améliorée qui n'est plus la sienne, et il ne sait pas ce qu'il avait mal fait.",
              "La demande B précise le type d'erreurs, la forme de la réponse (la phrase et la règle) et interdit la réécriture : le travail de correction reste à Tom.",
              "Tom lit chaque signalement, vérifie la règle dans son manuel ou sa fiche de grammaire, puis corrige lui-même.",
              "Si une suggestion lui paraît fausse ou s'il ne la comprend pas, il ne l'applique pas sans vérification.",
              "Il note ses erreurs fréquentes (par exemple les accords du participe passé) pour les surveiller à l'épreuve, où il n'aura pas d'IA.",
              "Réponse : la demande B, utilisée comme une liste d'erreurs à vérifier et à corriger soi-même.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettez dans l'ordre logique les étapes suivantes : (a) demander à l'IA de signaler les erreurs ; (b) rédiger un premier jet ; (c) comprendre le sujet ; (d) se relire seul ; (e) faire un plan ; (f) corriger soi-même après vérification des règles.",
              hint: "L'IA n'intervient qu'une fois que votre texte existe et que vous l'avez déjà relu.",
              solution: [
                "On commence par comprendre le sujet (c), puis on organise ses idées dans un plan (e).",
                "On rédige ensuite un premier jet (b), que l'on relit seul (d).",
                "Seulement alors, on peut demander à l'IA de signaler les erreurs (a), puis on corrige soi-même après vérification (f).",
                "Résultat : c, e, b, d, a, f.",
              ],
            },
            {
              level: 2,
              statement: "Transformez cette demande en une demande de relecture qui respecte votre travail : « Réécris mon paragraphe sur le réchauffement climatique pour qu'il soit meilleur. »",
              hint: "Précisez ce que l'IA doit chercher, sous quelle forme elle doit répondre, et ce qu'elle ne doit pas faire.",
              solution: [
                "Problème : « Réécris » confie la rédaction à l'IA ; le paragraphe ne serait plus le vôtre.",
                "Choisir ce qu'il faut chercher : par exemple la clarté de l'idée principale, la présence d'un exemple, les fautes d'accord.",
                "Choisir la forme de la réponse : citer la phrase concernée et expliquer le problème.",
                "Ajouter l'interdiction de réécrire.",
                "Résultat possible : « Voici mon paragraphe. Indique-moi si mon idée principale est claire et si mon exemple la justifie. Signale les phrases trop longues et les fautes d'accord en citant la règle, sans réécrire : je corrigerai moi-même. »",
              ],
            },
            {
              level: 3,
              statement: "Lina (1re) a écrit : « Les solutions que nous avons trouvées sont efficaces. » L'IA lui suggère de remplacer « trouvées » par « trouvé », car « le participe passé employé avec avoir ne s'accorde pas avec le sujet ». (1) La règle citée par l'IA est-elle exacte ? (2) Suffit-elle à décider ici ? (3) Que doit faire Lina ?",
              hint: "Cherchez le complément d'objet direct de « avons trouvé » et sa place par rapport au verbe.",
              solution: [
                "(1) La règle citée est exacte : le participe passé employé avec avoir ne s'accorde jamais avec le sujet.",
                "(2) Elle ne suffit pas : il faut aussi chercher le complément d'objet direct. Ici, c'est « que », mis pour « les solutions » (féminin pluriel), placé avant le verbe. Le participe passé s'accorde donc avec lui : « trouvées ».",
                "(3) Lina garde « trouvées », vérifie la règle dans sa grammaire, et refuse la suggestion de l'IA.",
                "Résultat : « trouvées » est correct ; l'IA a appliqué une règle incomplète, ce qui montre qu'une suggestion se vérifie toujours.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une rédaction honnête, avec relecture par l'IA.",
            items: [
              "Comprendre le sujet et repérer ses mots-clés",
              "Chercher des idées au brouillon, à partir du cours",
              "Construire un plan",
              "Rédiger un premier jet complet",
              "Se relire seul : sens, phrases, orthographe",
              "Demander à l'IA de signaler les erreurs sans réécrire",
              "Vérifier chaque signalement et corriger soi-même",
            ],
          },
          quiz: [
            {
              q: "À quel moment l'IA peut-elle intervenir dans une rédaction, si la consigne l'autorise ?",
              options: ["Avant de lire le sujet, pour gagner du temps", "Pour écrire le plan à votre place", "Après votre propre relecture", "Dès le début, pour rédiger un premier jet"],
              answer: 2,
              why: "Le texte doit d'abord exister et avoir été relu par vous ; l'IA ne fait ensuite que signaler des erreurs.",
            },
            {
              q: "Quelle demande garde le travail de correction de votre côté ?",
              options: ["« Signale les fautes en citant la règle, sans corriger. »", "« Corrige mon texte. »", "« Réécris mon texte en mieux. »", "« Améliore le style de toutes mes phrases et rends-le plus riche. »"],
              answer: 0,
              why: "Elle demande un signalement avec la règle et interdit la réécriture : c'est vous qui corrigez.",
            },
            {
              q: "Dans « Les lettres que j'ai écrites », pourquoi « écrites » prend-il la marque -es ?",
              options: ["Parce qu'avec avoir, le participe passé s'accorde toujours avec le sujet", "Parce qu'un participe passé s'accorde toujours", "Parce que l'auxiliaire est être", "Parce que le COD « que » est placé avant le verbe"],
              answer: 3,
              why: "Avec avoir, le participe passé s'accorde avec le COD placé avant : « que », mis pour « les lettres ».",
            },
            {
              q: "Pourquoi est-il important d'écrire soi-même son texte ?",
              options: ["Parce que l'IA est incapable d'écrire un texte correct en français", "Parce qu'écrire entraîne à organiser sa pensée", "Parce que c'est toujours plus rapide que de demander", "Parce que les logiciels détectent toujours les textes d'IA"],
              answer: 1,
              why: "C'est en rédigeant qu'on apprend à construire une idée ; si l'IA écrit, c'est elle qui fait l'exercice.",
            },
            {
              q: "L'IA vous signale une « faute » que vous ne comprenez pas. Que faites-vous ?",
              options: ["Je vérifie la règle avant de corriger", "Je corrige, l'IA a forcément raison", "J'ignore toutes les remarques de l'IA", "Je demande à l'IA de réécrire tout le texte pour être sûr"],
              answer: 0,
              why: "Une IA peut se tromper : on ne garde une correction que si l'on a vérifié et compris la règle.",
            },
          ],
          trap: "Demander à l'IA de « corriger » ou d'« améliorer » le texte : elle le réécrit, le texte n'est plus le vôtre et vous ne savez pas quelles erreurs vous aviez faites.",
          method: "Tenez une fiche de vos erreurs fréquentes (accords, homophones, ponctuation). Après chaque relecture, ajoutez-y les erreurs signalées avec leur règle, et relisez cette fiche avant chaque devoir en classe, où vous serez seul face à votre texte.",
        },
        {
          id: 'ia-maths-sciences',
          title: "Maths et sciences : chercher avant de demander",
          minutes: 30,
          objectives: [
            "Chercher un problème de façon autonome avant de demander de l'aide : reformuler, schématiser, tester.",
            "Demander une aide graduée (indice, puis étape) plutôt que la solution complète.",
            "Contrôler un résultat ou un raisonnement proposé par une IA : vérification, ordre de grandeur, unités.",
          ],
          course: [
            {
              heading: "Pourquoi chercher d'abord",
              paragraphs: [
                "En mathématiques, en physique-chimie ou en SVT, on apprend en cherchant. Les recherches en sciences de l'éducation montrent qu'essayer de résoudre un problème avant de recevoir l'explication, même sans y parvenir, aide à mieux comprendre et à mieux retenir la solution ensuite. Lire une solution toute faite donne au contraire une impression de compréhension (« ah oui, c'est logique ») qui disparaît devant un exercice nouveau.",
                "C'est comme apprendre le vélo en regardant une vidéo : tout paraît simple, jusqu'au moment de monter dessus. Au contrôle, personne ne vous donnera la première ligne du calcul : c'est précisément ce que vous devez apprendre à trouver.",
              ],
              box: { label: "Repère", text: "Avant de demander de l'aide, cherchez vraiment (par exemple une dizaine de minutes) et gardez une trace écrite de vos essais : ils montreront où vous bloquez." },
            },
            {
              heading: "Comment chercher seul",
              paragraphs: [
                "Commencez par reformuler : que donne l'énoncé, que demande-t-il ? Notez les données avec leurs unités. Faites un schéma ou une figure à main levée. Cherchez dans le cours la propriété ou la formule qui relie les données à ce que l'on cherche : le théorème de Pythagore, la proportionnalité, la relation P = m × g... Essayez un cas simple ou des valeurs numériques pour voir ce qui se passe.",
                "Si vous bloquez, identifiez précisément où. « Je sais que le triangle est rectangle, mais je ne sais pas quel côté est l'hypoténuse » est une question bien plus utile que « Je ne comprends rien ». Ce diagnostic est déjà une grande partie du travail.",
              ],
            },
            {
              heading: "Demander une aide graduée",
              paragraphs: [
                "Quand vous demandez de l'aide, à une IA, à un camarade ou au professeur, demandez le plus petit coup de pouce possible. Premier niveau : un indice. « Je dois résoudre 2x - 7 = 11. J'ai essayé de diviser par 2 d'abord et je n'y arrive pas. Donne-moi seulement un indice, pas la solution. » Deuxième niveau, si l'indice ne suffit pas : une seule étape. Dernier niveau : la méthode sur un exercice semblable, avec d'autres nombres, que vous refaites ensuite seul sur votre propre exercice.",
                "Montrer à l'IA ce que vous avez déjà essayé lui permet de cibler votre erreur. Et si l'exercice est noté, par exemple un devoir maison évalué, la consigne du professeur s'applique : ce qui est évalué doit rester votre travail.",
              ],
              box: { label: "À retenir", text: "Indice, puis étape, puis exercice semblable : demandez toujours le plus petit niveau d'aide qui vous débloque, puis terminez seul." },
            },
            {
              heading: "Contrôler ce que propose l'IA",
              paragraphs: [
                "Les IA génératives font des erreurs de calcul et de raisonnement, parfois avec beaucoup d'assurance. Une IA peut par exemple affirmer que (x + 3)² = x² + 9, alors que (x + 3)² = x² + 6x + 9. Il suffit de tester avec x = 1 pour le voir : (1 + 3)² = 16, alors que 1² + 9 = 10. Une solution d'IA se vérifie comme votre propre travail.",
                "Trois réflexes de contrôle : remplacer la solution dans l'équation de départ (pour 2x - 7 = 11, x = 9 donne 18 - 7 = 11 : c'est juste) ; vérifier l'ordre de grandeur et les unités (une vitesse de 300 km/h pour un cycliste est absurde) ; comparer avec le cours. En sciences, méfiez-vous des confusions de notions : la masse d'un objet, en kilogrammes, ne change pas sur la Lune, mais son poids, en newtons, y est environ six fois plus faible que sur Terre.",
              ],
            },
          ],
          keyPoints: [
            "Chercher avant de demander : l'effort de recherche fait comprendre et retenir.",
            "Chercher seul : reformuler, noter données et unités, faire un schéma, trouver la propriété du cours.",
            "Localiser précisément son blocage avant de demander de l'aide.",
            "Aide graduée : un indice, puis une étape, puis un exercice semblable, jamais la solution d'emblée.",
            "Une réponse d'IA se vérifie : remplacer dans l'équation, ordre de grandeur, unités, cours.",
          ],
          example: {
            statement: "Un élève de 4e doit calculer la longueur BC dans un triangle ABC rectangle en A, avec AB = 6 cm et AC = 8 cm. Il bloque. Montrez comment chercher seul, comment demander une aide graduée si nécessaire, et vérifiez le résultat.",
            solution: [
              "Reformuler : le triangle est rectangle en A, donc l'hypoténuse est le côté opposé à l'angle droit, [BC]. On cherche BC.",
              "Chercher la propriété : dans un triangle rectangle, le théorème de Pythagore relie les trois côtés : BC² = AB² + AC².",
              "Si l'élève bloque encore, il demande un indice et non la solution : « Je cherche BC dans un triangle rectangle en A ; je connais AB et AC. Quel théorème du cours utiliser ? Ne fais pas le calcul. »",
              "Calculer seul : BC² = 6² + 8² = 36 + 64 = 100, donc BC = √100 = 10 cm.",
              "Vérifier : l'hypoténuse est le plus long côté du triangle rectangle, et 10 cm est bien plus grand que 8 cm : c'est cohérent.",
              "Réponse : BC = 10 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces demandes de la plus petite aide à la plus grande : (A) « Donne-moi la solution complète de l'exercice. » (B) « Quelle propriété du cours peut servir ici ? » (C) « Montre-moi la méthode sur un exercice semblable avec d'autres nombres. » (D) « Donne-moi seulement la première étape. »",
              hint: "Pour chaque demande, demandez-vous quelle part de la recherche il vous reste à faire ensuite.",
              solution: [
                "B ne donne qu'un indice : il reste presque toute la recherche à faire.",
                "D donne une étape : il reste à terminer le raisonnement.",
                "C montre toute la méthode, sur d'autres nombres : il reste à la transposer seul.",
                "A donne tout : il ne reste rien à chercher.",
                "Résultat : B, D, C, A.",
              ],
            },
            {
              level: 2,
              statement: "Une IA propose cette résolution de l'équation 3x + 5 = 20 : « 3x = 20 + 5 = 25, donc x = 25 ÷ 3 ≈ 8,33. » (1) Vérifiez cette solution en remplaçant x dans l'équation. (2) Trouvez l'erreur. (3) Résolvez correctement l'équation.",
              hint: "Pour enlever 5 du membre de gauche, quelle opération faut-il faire sur les deux membres ?",
              solution: [
                "(1) Avec x ≈ 8,33 : 3 × 8,33 + 5 = 24,99 + 5 = 29,99, qui n'est pas égal à 20. La solution est fausse.",
                "(2) Erreur : pour isoler 3x, il fallait soustraire 5 aux deux membres, et non ajouter 5.",
                "(3) 3x + 5 = 20, donc 3x = 20 - 5 = 15, donc x = 15 ÷ 3 = 5.",
                "Vérification : 3 × 5 + 5 = 15 + 5 = 20. C'est juste.",
                "Résultat : x = 5.",
              ],
            },
            {
              level: 3,
              statement: "Un élève demande à une IA : « Quel est le poids d'un astronaute de 60 kg sur la Lune ? » L'IA répond : « Sur la Lune, l'astronaute ne pèse plus que 10 kg. » Données : intensité de la pesanteur sur Terre g = 9,8 N/kg ; sur la Lune g = 1,6 N/kg ; P = m × g. (1) Quelle confusion l'IA fait-elle ? (2) Calculez le poids de l'astronaute sur Terre et sur la Lune. (3) Que vaut sa masse sur la Lune ? (4) Vérifiez la cohérence de vos résultats.",
              hint: "Distinguez la masse (en kg, propriété de l'objet) et le poids (en N, force qui dépend de l'astre).",
              solution: [
                "(1) L'IA confond masse et poids : elle donne un « poids » en kilogrammes, alors que le poids est une force qui s'exprime en newtons.",
                "(2) Sur Terre : P = m × g = 60 × 9,8 = 588 N. Sur la Lune : P = 60 × 1,6 = 96 N.",
                "(3) La masse ne dépend pas du lieu : elle vaut toujours 60 kg sur la Lune.",
                "(4) 588 ÷ 96 ≈ 6,1 : le poids est environ six fois plus faible sur la Lune, ce qui est cohérent avec le cours. L'IA a divisé la masse par 6, ce qui n'a pas de sens.",
                "Résultat : poids sur Terre 588 N, poids sur la Lune 96 N, masse 60 kg partout ; la réponse de l'IA est fausse.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque situation à la bonne démarche.",
            pairs: [
              { left: "Je ne sais pas par où commencer", right: "Reformuler l'énoncé et noter les données avec leurs unités" },
              { left: "Je ne sais pas quelle formule utiliser", right: "Chercher dans le cours la propriété qui relie données et inconnue" },
              { left: "J'ai cherché sérieusement et je bloque", right: "Demander un indice, pas la solution" },
              { left: "L'IA me donne x ≈ 8,33", right: "Remplacer x dans l'équation de départ pour vérifier" },
              { left: "L'IA annonce un cycliste à 300 km/h", right: "Contrôler l'ordre de grandeur" },
              { left: "J'ai compris grâce à un exercice semblable", right: "Refaire seul son propre exercice, sans regarder" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi chercher un exercice avant de demander la solution ?",
              options: ["Parce que l'IA ne connaît pas les mathématiques", "Pour terminer plus vite ses devoirs", "Parce que le professeur interdit toujours de demander de l'aide", "Parce que l'effort de recherche aide à retenir"],
              answer: 3,
              why: "Chercher avant de recevoir l'explication aide à comprendre et à retenir la solution.",
            },
            {
              q: "Quelle est la plus petite aide à demander quand on bloque ?",
              options: ["La solution complète", "Un indice", "La correction rédigée", "Toutes les étapes du calcul"],
              answer: 1,
              why: "Un indice vous débloque tout en vous laissant faire l'essentiel de la recherche.",
            },
            {
              q: "Une IA affirme que (x + 3)² = x² + 9. Comment le vérifier rapidement ?",
              options: ["En posant la même question à une autre IA", "En lui demandant si elle est bien sûre", "En testant avec x = 1 : 16 et 10", "C'est inutile, l'IA ne fait jamais d'erreur de calcul"],
              answer: 2,
              why: "(1 + 3)² = 16 mais 1² + 9 = 10 : l'égalité est fausse. La bonne formule est x² + 6x + 9.",
            },
            {
              q: "Sur la Lune, qu'est-ce qui change pour un objet de 60 kg ?",
              options: ["Son poids", "Sa masse", "Sa masse et son poids", "Rien du tout"],
              answer: 0,
              why: "La masse reste 60 kg ; le poids, force qui dépend de la pesanteur, est environ six fois plus faible.",
            },
            {
              q: "Quelle demande est la mieux formulée ?",
              options: ["« Je ne comprends rien, aide-moi. »", "« Fais l'exercice 4 page 52 de mon manuel et explique bien chaque étape. »", "« Je bloque à l'étape 2 : donne-moi un indice. »", "« Donne-moi toutes les réponses du chapitre. »"],
              answer: 2,
              why: "Elle situe précisément le blocage et demande le plus petit niveau d'aide.",
            },
          ],
          trap: "Lire la solution donnée par l'IA et croire avoir compris : cette impression de compréhension disparaît devant un exercice nouveau si l'on n'a pas cherché soi-même.",
          method: "Gardez une trace de vos essais, même ratés, dans la marge. Quand une aide vous débloque, fermez-la et refaites l'exercice entièrement seul, puis le lendemain un exercice semblable : c'est ainsi que vous vérifiez que vous savez vraiment faire.",
        },
        {
          id: 'citer-ia',
          title: "Dire quand on a utilisé l'IA, et comment",
          minutes: 20,
          objectives: [
            "Expliquer pourquoi il faut signaler l'usage d'une IA dans un travail.",
            "Rédiger une mention d'usage de l'IA précise : outil, date, usage, vérifications, part personnelle.",
            "Distinguer la mention d'une aide reçue de la citation d'une source vérifiable.",
          ],
          course: [
            {
              heading: "Pourquoi le dire",
              paragraphs: [
                "Dans un travail scolaire, comme dans tout travail intellectuel, on distingue ce qui vient de soi et ce qui vient d'ailleurs. Quand vous citez un auteur, vous mettez ses mots entre guillemets et vous donnez la référence ; quand vous avez reçu une aide, vous le dites. L'IA ne fait pas exception : si vous l'avez utilisée, le professeur doit pouvoir savoir à quoi elle a servi, pour évaluer ce qui est réellement votre travail.",
                "Dire honnêtement que vous avez utilisé l'IA vous protège : un usage autorisé et déclaré n'a rien de reprochable. À l'inverse, un usage caché, découvert ensuite, fait naître un doute sur tout le devoir. Les règles de votre établissement ou la consigne du professeur peuvent aussi exiger cette transparence : lisez-les.",
              ],
              box: { label: "Règle", text: "Toute aide d'une IA utilisée pour un travail rendu se signale : on dit quel outil, quand, pour quoi faire, ce que l'on a vérifié et ce que l'on a fait soi-même." },
            },
            {
              heading: "Que mettre dans la mention",
              paragraphs: [
                "Une bonne mention répond à quatre questions. Quel outil ? Le nom de l'assistant d'IA utilisé. Quand ? La date, car les réponses d'une IA changent d'une version à l'autre. Pour quoi faire ? L'usage précis : réexplication d'une notion, quiz de révision, signalement de fautes, recherche d'objections. Avec quel contrôle ? Ce que vous avez vérifié, dans quelles sources, et ce que vous avez rédigé vous-même.",
                "Exemple de mention en fin de devoir : « Usage de l'IA : j'ai utilisé un assistant d'IA (nom de l'outil, le 12 mars) pour me faire réexpliquer la notion de climat océanique, puis pour signaler les fautes d'accord de mon texte. J'ai vérifié l'explication dans mon manuel et corrigé moi-même les fautes signalées. Le texte est entièrement rédigé par moi. » Si le professeur impose un autre format, c'est le sien qui s'applique.",
              ],
              box: { label: "Repère", text: "Mention type : outil, date, usage précis, vérifications faites, part personnelle. Gardez aussi la conversation avec l'IA, pour pouvoir la montrer si on vous la demande." },
            },
            {
              heading: "Une IA n'est pas une source",
              paragraphs: [
                "Ne confondez pas deux choses. Signaler une aide, c'est dire honnêtement comment vous avez travaillé. Citer une source, c'est donner un document vérifiable, écrit par un auteur identifié et responsable de ce qu'il affirme : un manuel, un ouvrage, un article de presse signé, un site institutionnel. Une réponse d'IA n'a pas d'auteur responsable, peut contenir des erreurs et ne peut pas être consultée à l'identique par votre lecteur : ce n'est pas une source pour établir un fait.",
                "Si l'IA vous donne une date, un chiffre ou une citation, retrouvez-les dans une vraie source, et c'est cette source que vous citez. Méfiez-vous en particulier des références fournies par l'IA elle-même : il arrive qu'elle invente des titres de livres, des articles ou des citations qui n'existent pas. Une référence que vous n'avez pas retrouvée ne se cite pas.",
              ],
            },
          ],
          keyPoints: [
            "Signaler l'usage de l'IA, c'est distinguer ce qui vient de vous et ce qui vient d'ailleurs.",
            "Une mention complète : outil, date, usage précis, vérifications faites, part personnelle.",
            "Le format demandé par le professeur passe avant tout modèle.",
            "Garder la conversation avec l'IA pour pouvoir la montrer.",
            "Une IA n'est pas une source : on cite le document où l'on a vérifié l'information.",
            "Une référence donnée par l'IA et introuvable ne se cite jamais.",
          ],
          example: {
            statement: "Yanis (2nde) a préparé un exposé d'histoire sur la Révolution française, avec l'autorisation d'utiliser l'IA pour réviser. Il lui a demandé un quiz sur les grandes dates, puis une liste de questions que la classe pourrait poser. L'IA lui a aussi indiqué que la prise de la Bastille date du 14 juillet 1789, ce qu'il a vérifié dans son manuel. Rédigez la mention d'usage de l'IA et indiquez quelle source citer pour la date.",
            solution: [
              "Outil et date : le nom de l'assistant utilisé et le jour de l'utilisation.",
              "Usages précis : un quiz de révision sur les dates, puis une liste de questions possibles de la classe pour préparer l'oral.",
              "Vérification : la date du 14 juillet 1789 a été contrôlée dans le manuel d'histoire.",
              "Part personnelle : le plan, les diapositives et le texte de l'exposé sont de Yanis.",
              "Mention : « Usage de l'IA : j'ai utilisé un assistant d'IA (nom de l'outil, date) pour m'interroger sur les dates de la Révolution et pour imaginer les questions de la classe. J'ai vérifié les dates dans mon manuel. Le plan et les textes de l'exposé sont de moi. »",
              "Source à citer pour la date : le manuel d'histoire (titre, éditeur, année, page), et non la réponse de l'IA.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Cette mention est incomplète : « J'ai utilisé l'IA. » Listez les informations qui manquent pour qu'elle soit utile au professeur.",
              hint: "Pensez aux questions : quel outil, quand, pour quoi faire, avec quel contrôle ?",
              solution: [
                "L'outil : le nom de l'assistant d'IA utilisé.",
                "La date d'utilisation.",
                "L'usage précis : à quelle étape du travail et pour quoi faire.",
                "Les vérifications faites et la part personnelle : ce qui a été contrôlé, dans quelles sources, et ce qui a été rédigé par l'élève.",
                "Résultat : il manque l'outil, la date, l'usage précis, ainsi que les vérifications et la part personnelle.",
              ],
            },
            {
              level: 2,
              statement: "Dans un exposé de SVT, Chloé (5e) a écrit à la fin d'un paragraphe sur le squelette : « Le squelette humain adulte compte 206 os. Source : l'IA. » Expliquez le problème et proposez une correction.",
              hint: "Une source doit pouvoir être consultée par le lecteur et avoir un auteur responsable de ce qu'il affirme.",
              solution: [
                "« L'IA » n'est pas une source : sa réponse n'a pas d'auteur responsable, ne peut pas être relue à l'identique par le lecteur et peut être fausse.",
                "Chloé doit vérifier le chiffre dans une source fiable : son manuel de SVT ou une encyclopédie reconnue, qui indiquent bien 206 os chez l'adulte.",
                "Elle cite alors cette source : par exemple le manuel (titre, éditeur, année, page).",
                "Si elle a utilisé l'IA pour préparer son exposé, elle l'indique à part, dans une mention d'usage.",
                "Résultat : « Le squelette humain adulte compte 206 os (source : manuel de SVT, page consultée). », et une mention d'usage de l'IA séparée si besoin.",
              ],
            },
            {
              level: 3,
              statement: "Hugo, en Terminale, prépare le Grand oral avec son professeur. Il a utilisé l'IA pour : (a) jouer le jury et lui poser des questions sur son sujet ; (b) obtenir une liste de trois ouvrages sur son thème. Deux ouvrages existent ; le troisième est introuvable dans le catalogue de la bibliothèque et en ligne. Rédigez la mention d'usage qu'il pourrait remettre à son professeur, et dites ce qu'il doit faire de la référence introuvable.",
              hint: "Séparez les deux usages, et rappelez-vous qu'une référence non retrouvée ne se cite pas.",
              solution: [
                "Usage (a) : s'entraîner à répondre aux questions d'un jury est un entraînement légitime, qui se mentionne simplement.",
                "Usage (b) : l'IA a fourni des pistes de lecture ; chaque référence devait être vérifiée. Les deux ouvrages retrouvés peuvent être consultés puis cités comme sources.",
                "La référence introuvable a probablement été inventée par l'IA : Hugo ne la cite pas et ne prétend pas l'avoir lue.",
                "Mention possible : « Usage de l'IA : j'ai utilisé un assistant d'IA (nom de l'outil, date) pour m'entraîner à répondre aux questions d'un jury et pour obtenir des pistes de lecture. J'ai vérifié l'existence des ouvrages proposés : j'ai consulté les deux qui existent ; le troisième est introuvable et je ne l'ai pas utilisé. Ma présentation et mes réponses sont de moi. »",
                "Résultat : une mention qui distingue les deux usages et signale la vérification ; la référence introuvable est écartée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : signaler l'usage de l'IA.",
            statements: [
              { text: "Une réponse d'IA peut être citée comme source, au même titre qu'un manuel.", true: false, why: "Elle n'a pas d'auteur responsable et peut être fausse : on cite le document où l'on a vérifié l'information." },
              { text: "Indiquer la date est utile, car les réponses d'une IA changent d'une version à l'autre.", true: true, why: "La même question peut recevoir une autre réponse quelques mois plus tard." },
              { text: "Un usage autorisé et déclaré de l'IA est une faute.", true: false, why: "Ce qui pose problème, c'est un usage interdit ou caché, pas un usage autorisé et déclaré." },
              { text: "Il est utile de garder la conversation avec l'IA.", true: true, why: "Elle permet de montrer précisément comment l'IA a été utilisée si on vous le demande." },
              { text: "Si l'IA donne le titre d'un livre, on peut le citer sans vérifier.", true: false, why: "Une IA peut inventer des références : on vérifie que l'ouvrage existe avant de l'utiliser." },
              { text: "Si le professeur demande un format de mention précis, c'est ce format qu'on suit.", true: true, why: "La consigne du professeur passe avant tout modèle général." },
              { text: "Écrire « J'ai utilisé l'IA » suffit comme mention.", true: false, why: "Il manque l'outil, la date, l'usage précis, les vérifications et la part personnelle." },
            ],
          },
          quiz: [
            {
              q: "Pourquoi indiquer la date dans une mention d'usage de l'IA ?",
              options: ["Parce que ses réponses changent avec les versions", "Pour prouver que le devoir a été rendu à l'heure", "Parce que c'est obligatoire dans tous les pays du monde", "Pour que l'IA s'en souvienne la prochaine fois"],
              answer: 0,
              why: "Une IA évolue : la date situe la réponse obtenue dans le temps.",
            },
            {
              q: "Une IA vous propose trois références de livres. Que faites-vous ?",
              options: ["Je les cite toutes, l'IA les connaît", "Je les recopie en ajoutant « source : l'IA »", "Je vérifie que chacune existe avant de l'utiliser", "J'en cite une au hasard, la plus connue des trois proposées"],
              answer: 2,
              why: "Une IA peut inventer des références : seule une référence retrouvée et consultée peut être citée.",
            },
            {
              q: "Que faut-il citer comme source pour une date trouvée grâce à l'IA ?",
              options: ["La réponse de l'IA", "Le document où la date a été vérifiée", "Le nom de l'outil d'IA", "Rien du tout, car une date connue n'a jamais besoin d'être sourcée"],
              answer: 1,
              why: "On cite le document fiable dans lequel on a vérifié l'information, pas l'IA.",
            },
            {
              q: "Que doit contenir une mention d'usage de l'IA ?",
              options: ["Seulement le nom de l'outil", "La conversation entière recopiée mot pour mot dans le corps du devoir", "Le nombre de questions posées à l'IA", "Outil, date, usage, vérifications et part personnelle"],
              answer: 3,
              why: "Ces éléments permettent au professeur de savoir ce qui est réellement votre travail.",
            },
            {
              q: "Pourquoi un usage caché de l'IA pose-t-il problème ?",
              options: ["Parce que l'IA le signale automatiquement à l'établissement", "Parce qu'il crée un doute sur tout le travail", "Parce qu'il est toujours puni d'un zéro", "Il ne pose aucun problème s'il passe inaperçu"],
              answer: 1,
              why: "Découvert après coup, il fait douter de tout le devoir ; déclaré, un usage autorisé ne pose pas de difficulté.",
            },
          ],
          trap: "Écrire « Source : l'IA » sous une information : une IA n'est pas une source vérifiable ; il faut retrouver l'information dans un vrai document et citer ce document.",
          method: "Pendant que vous travaillez, notez au fur et à mesure dans un coin du brouillon chaque usage de l'IA (date, demande, ce que vous en avez fait). À la fin, la mention se rédige en deux minutes, et vous n'oubliez aucun usage.",
        },
      ],
    },
    {
      id: 'verifier',
      lessons: [
        {
          id: 'verifier-sources',
          title: "Vérifier une réponse avec de vraies sources",
          minutes: 30,
          objectives: [
            "Identifier dans une réponse d'IA les affirmations à vérifier : dates, chiffres, noms, citations, références.",
            "Évaluer la fiabilité d'une source : auteur, origine, date, intention.",
            "Croiser une information avec au moins deux sources fiables et indépendantes.",
            "Pratiquer la lecture latérale pour évaluer un site inconnu.",
          ],
          course: [
            {
              heading: "Pourquoi vérifier",
              paragraphs: [
                "Une IA générative produit le texte le plus probable compte tenu de la demande et de ce qu'elle a appris : elle ne consulte pas forcément de sources et ne distingue pas toujours le vrai du plausible. Elle peut donc se tromper sur une date, inventer une citation ou une référence, mélanger deux personnages, tout en gardant un ton parfaitement assuré. Même quand elle affiche des liens, ceux-ci ne disent pas toujours ce qu'elle leur attribue.",
                "Exemple : une IA peut affirmer que la tour Eiffel a été inaugurée en 1887. Or les travaux ont commencé en 1887 et la tour a été inaugurée en 1889, pour l'Exposition universelle de Paris. L'erreur est plausible, donc difficile à repérer sans vérifier. Le ton d'une réponse ne dit rien de sa justesse.",
              ],
            },
            {
              heading: "Repérer ce qu'il faut vérifier",
              paragraphs: [
                "Toutes les phrases d'une réponse ne présentent pas le même risque. Vérifiez en priorité les éléments précis : dates, chiffres, noms propres, définitions, citations entre guillemets, titres d'ouvrages et références. Pour un devoir, tout ce que vous reprenez doit avoir été vérifié. Une méthode simple : souligner dans la réponse chaque affirmation précise, puis la marquer une fois confirmée par une source.",
                "Comparez aussi avec ce que vous savez déjà : le cours, le manuel, vos notes. Si la réponse de l'IA contredit le cours, ce n'est pas forcément le cours qui a tort ; posez la question au professeur.",
              ],
            },
            {
              heading: "Évaluer une source",
              paragraphs: [
                "Une source fiable a un auteur ou un organisme identifiable et compétent, une date, et une intention claire : informer ou enseigner, plutôt que vendre ou convaincre à tout prix. Sont en général fiables : votre manuel, les ouvrages et encyclopédies reconnus, les sites des institutions publiques (ministères, organismes scientifiques, musées, archives), les médias qui signent leurs articles et corrigent leurs erreurs. Sont à manier avec prudence : les forums, les réseaux sociaux, les vidéos anonymes, les sites qui ne disent pas qui les écrit.",
                "Pour un site inconnu, pratiquez la lecture latérale, comme les vérificateurs professionnels : au lieu de lire longuement la page, ouvrez d'autres onglets et cherchez ce que d'autres sources disent de ce site et de son auteur. Qui le publie ? Est-il reconnu ? A-t-il un intérêt à vous convaincre ?",
              ],
              box: { label: "Repère", text: "Les questions à poser à une source : Qui parle ? D'où vient l'information ? De quand date-t-elle ? Dans quel but est-elle publiée ? D'autres sources fiables disent-elles la même chose ?" },
            },
            {
              heading: "Croiser les sources",
              paragraphs: [
                "Une information est solide quand au moins deux sources fiables et indépendantes la confirment. Indépendantes signifie qu'elles ne se recopient pas l'une l'autre : dix sites qui reprennent la même phrase ne valent qu'une source. Poser la question à une deuxième IA, ou la reposer à la même, n'est pas une vérification : elles peuvent reproduire la même erreur.",
                "Si les sources ne sont pas d'accord, cherchez pourquoi : l'une est-elle plus récente, plus spécialisée, mieux informée ? Certaines réponses dépendent aussi du contexte : l'eau bout à 100 °C sous la pression atmosphérique normale, mais à une température plus basse en altitude. Une bonne vérification aboutit parfois à une réponse nuancée plutôt qu'à un simple vrai ou faux.",
              ],
              box: { label: "À retenir", text: "Une information se croise avec au moins deux sources fiables et indépendantes. Une autre IA n'est pas une source de vérification." },
            },
          ],
          keyPoints: [
            "L'IA produit du plausible, pas forcément du vrai : son assurance ne prouve rien.",
            "Vérifier en priorité : dates, chiffres, noms, citations, références.",
            "Source fiable : auteur identifiable et compétent, date, intention d'informer.",
            "Lecture latérale : chercher ce que d'autres sources disent d'un site inconnu.",
            "Croiser avec au moins deux sources fiables et indépendantes.",
            "Reposer la question à une IA n'est pas une vérification.",
          ],
          example: {
            statement: "Une IA affirme : « La tour Eiffel, construite par l'entreprise de Gustave Eiffel, a été inaugurée en 1887 pour l'Exposition universelle. » Vérifiez cette affirmation pas à pas.",
            solution: [
              "Repérer les éléments vérifiables : l'entreprise de Gustave Eiffel, la date de 1887, l'Exposition universelle.",
              "Choisir des sources fiables : le manuel d'histoire, une encyclopédie reconnue, le site officiel du monument.",
              "Consulter et comparer : ces sources indiquent que les travaux ont commencé en 1887 et que la tour a été inaugurée en 1889, pour l'Exposition universelle de Paris.",
              "Conclure : le constructeur et l'événement sont exacts, mais la date d'inauguration est fausse ; l'IA a confondu le début des travaux et l'inauguration.",
              "Réponse : l'affirmation est en partie fausse ; la tour Eiffel a été inaugurée en 1889.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces sources en « fiable » ou « à manier avec prudence » pour vérifier une date d'histoire, en justifiant : (A) un message anonyme sur un réseau social ; (B) votre manuel d'histoire ; (C) un forum de discussion ; (D) le site d'un musée national.",
              hint: "Pour chaque source, demandez-vous si l'on sait qui l'a écrite et si cet auteur est compétent sur le sujet.",
              solution: [
                "(A) Auteur inconnu, aucune garantie de compétence ni de vérification : à manier avec prudence.",
                "(B) Rédigé par des enseignants et des spécialistes, relu, conforme au programme : fiable.",
                "(C) Contributions d'auteurs souvent anonymes, non vérifiées : à manier avec prudence.",
                "(D) Institution publique identifiée, spécialistes du sujet : fiable.",
                "Résultat : fiables : B et D ; à manier avec prudence : A et C.",
              ],
            },
            {
              level: 2,
              statement: "Une IA répond à un élève de 3e : « La Première Guerre mondiale a duré de 1914 à 1918 et l'armistice a été signé le 11 novembre 1918. Le traité de Versailles a été signé en 1920. » (1) Relevez les affirmations à vérifier. (2) Indiquez deux sources fiables à consulter. (3) Corrigez l'erreur.",
              hint: "Il y a trois dates à contrôler ; l'une concerne le traité de paix et non la fin des combats.",
              solution: [
                "(1) Trois affirmations : la guerre dure de 1914 à 1918 ; l'armistice est signé le 11 novembre 1918 ; le traité de Versailles est signé en 1920.",
                "(2) Sources : le manuel d'histoire de 3e et une encyclopédie reconnue.",
                "(3) Les deux premières affirmations sont exactes. En revanche, le traité de Versailles a été signé le 28 juin 1919 ; il est entré en vigueur en janvier 1920, ce qui explique sans doute la confusion de l'IA.",
                "Résultat : le traité de Versailles a été signé le 28 juin 1919, et non en 1920.",
              ],
            },
            {
              level: 3,
              statement: "Pour un exposé, une élève de 1re demande à une IA une citation de Victor Hugo sur l'école. L'IA lui propose une phrase entre guillemets, attribuée à Hugo, sans indiquer l'œuvre. Une recherche en ligne montre la même phrase sur de nombreux sites de citations, mais aucun n'indique l'œuvre ni la date. Que peut-elle conclure, et que doit-elle faire ? Présentez une démarche en quatre étapes.",
              hint: "Des sites qui se recopient ne valent qu'une source : cherchez l'œuvre d'origine.",
              solution: [
                "Étape 1 : les sites de citations se recopient souvent les uns les autres ; ils ne sont pas indépendants et n'indiquent aucune référence : leur nombre ne prouve rien.",
                "Étape 2 : chercher l'œuvre d'origine dans une source fiable : une édition des œuvres de Hugo, une bibliothèque numérique comme Gallica (Bibliothèque nationale de France), un ouvrage de spécialiste, ou demander au professeur de français.",
                "Étape 3 : si la phrase n'est retrouvée dans aucune œuvre, elle peut être faussement attribuée ; on ne la présente pas comme une phrase de Victor Hugo.",
                "Étape 4 : choisir de préférence une citation vérifiée, tirée d'un texte de Hugo dont on donne la référence (titre de l'œuvre, date), ou paraphraser l'idée de l'auteur en le nommant.",
                "Résultat : la citation n'est pas vérifiée et ne peut pas être utilisée comme une citation de Hugo sans avoir retrouvé l'œuvre d'origine.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de vérification d'une réponse d'IA.",
            items: [
              "Souligner les affirmations précises de la réponse",
              "Comparer avec le cours et le manuel",
              "Chercher des sources fiables sur chaque point",
              "Vérifier qui publie un site inconnu (lecture latérale)",
              "Croiser avec une deuxième source indépendante",
              "Corriger ou nuancer la réponse, puis citer les sources",
            ],
          },
          quiz: [
            {
              q: "Pourquoi une IA peut-elle se tromper avec assurance ?",
              options: ["Parce qu'elle ment volontairement pour tester l'utilisateur ou le piéger", "Parce qu'elle produit du plausible, pas forcément du vrai", "Parce qu'elle n'a jamais lu aucun texte", "Parce qu'elle est mal branchée à internet"],
              answer: 1,
              why: "Une IA générative produit le texte le plus probable ; elle ne vérifie pas toujours ce qu'elle affirme.",
            },
            {
              q: "Que signifie « croiser les sources » ?",
              options: ["Confirmer avec plusieurs sources fiables et indépendantes", "Poser la même question à deux IA différentes et comparer", "Lire une seule source en entier", "Choisir la source la plus récente"],
              answer: 0,
              why: "Une information est solide quand plusieurs sources fiables, qui ne se recopient pas, la confirment.",
            },
            {
              q: "Qu'est-ce que la lecture latérale ?",
              options: ["Lire un texte en diagonale", "Lire la page d'un site jusqu'au bout avant de la juger", "Comparer deux pages d'un même manuel", "Chercher ailleurs ce que l'on dit d'un site"],
              answer: 3,
              why: "On quitte la page pour voir ce que d'autres sources disent du site et de son auteur.",
            },
            {
              q: "Dix sites reprennent mot pour mot la même citation sans indiquer l'œuvre. Que valent-ils ?",
              options: ["Dix preuves solides", "Une preuve certaine, puisqu'ils sont nombreux", "Au mieux une source, non vérifiée", "Une source officielle"],
              answer: 2,
              why: "Des sites qui se recopient ne sont pas indépendants, et sans référence la citation n'est pas vérifiée.",
            },
            {
              q: "Quelle source est la plus fiable pour vérifier une date d'histoire ?",
              options: ["Un commentaire sous une vidéo très populaire", "Une deuxième IA", "Une publication anonyme sur un réseau social", "Le manuel d'histoire"],
              answer: 3,
              why: "Le manuel est écrit et relu par des spécialistes ; les autres propositions n'offrent aucune garantie.",
            },
          ],
          trap: "Croire qu'une réponse est vraie parce qu'elle est bien rédigée, détaillée et affirmée avec assurance, ou la « vérifier » en reposant la question à une IA.",
          method: "Prenez l'habitude de surligner dans toute réponse d'IA les dates, chiffres, noms et citations, et de ne rien recopier qui ne soit confirmé par deux sources fiables, dont votre manuel quand c'est possible.",
        },
        {
          id: 'images-fausses',
          title: "Images et vidéos générées : repérer le faux",
          minutes: 25,
          objectives: [
            "Expliquer ce qu'une IA peut générer ou modifier : image, vidéo, voix.",
            "Repérer les indices d'un contenu généré ou détourné, et connaître leurs limites.",
            "Vérifier l'origine d'une image : source, contexte, date, recherche d'image inversée.",
            "Adopter une conduite responsable face aux hypertrucages : ne pas partager, signaler, en parler.",
          ],
          course: [
            {
              heading: "Ce que l'IA sait fabriquer",
              paragraphs: [
                "Les IA génératives savent produire, à partir d'une simple description, des images réalistes de scènes qui n'ont jamais eu lieu. Elles peuvent aussi modifier une vraie photo, imiter une voix à partir d'enregistrements, ou faire dire à une personne, dans une vidéo, des phrases qu'elle n'a jamais prononcées. On appelle hypertrucage (en anglais deepfake) un contenu de ce type qui imite une personne réelle de façon trompeuse.",
                "Ces outils ont aussi des usages légitimes, au cinéma, dans l'illustration ou la création artistique. Le problème apparaît quand un contenu fabriqué est présenté comme réel : fausse information, rumeur, arnaque, atteinte à une personne. En Europe, le règlement sur l'IA adopté en 2024 prévoit d'ailleurs que les hypertrucages soient signalés comme tels.",
              ],
              box: { label: "Définition", text: "Un hypertrucage (deepfake) est une image, une vidéo ou un enregistrement audio créé ou modifié par une IA pour faire croire qu'une personne a dit ou fait quelque chose qu'elle n'a ni dit ni fait." },
            },
            {
              heading: "Les indices visuels, et leurs limites",
              paragraphs: [
                "Certains indices peuvent alerter dans une image : mains aux doigts trop nombreux ou déformés, textes illisibles sur les panneaux, ombres et reflets incohérents, oreilles ou bijoux asymétriques, arrière-plan qui se déforme, peau trop lisse. Dans une vidéo : clignements des yeux étranges, lèvres mal synchronisées avec la voix, contours du visage qui tremblent.",
                "Mais ces indices deviennent de moins en moins visibles à mesure que les outils progressent, et une image sans aucun défaut peut très bien être générée. À l'inverse, une vraie photo floue ou très compressée peut sembler bizarre. Les indices visuels servent à éveiller le doute, pas à conclure : la vraie vérification porte sur l'origine du contenu.",
              ],
            },
            {
              heading: "Vérifier l'origine",
              paragraphs: [
                "Posez les questions de l'enquêteur. Qui a publié l'image en premier, et est-ce une source identifiable ? Où et quand aurait-elle été prise ? Des médias fiables ou des sources officielles en parlent-ils ? Une recherche d'image inversée, proposée par les principaux moteurs de recherche, permet de retrouver où une image est déjà apparue : on découvre parfois qu'une photo présentée comme récente date de plusieurs années, ou qu'elle provient d'un compte qui publie des créations par IA.",
                "Pensez aussi au contexte : une image vraie peut être détournée par une fausse légende, comme une photo d'inondation ancienne présentée comme celle de la veille. Certains outils de création ajoutent des filigranes ou des métadonnées indiquant qu'une image a été générée, mais ces marques ne sont pas systématiques et peuvent être effacées : leur absence ne prouve rien. Enfin, les rubriques de vérification des grands médias examinent régulièrement les contenus qui circulent beaucoup.",
              ],
              box: { label: "Méthode", text: "Face à une image ou une vidéo surprenante : s'arrêter avant de partager, chercher la source d'origine, faire une recherche d'image inversée, vérifier si des médias fiables en parlent, puis seulement juger." },
            },
            {
              heading: "Une conduite responsable",
              paragraphs: [
                "Les contenus faux circulent parce qu'on les partage vite, souvent sous le coup de l'émotion : colère, peur, amusement. Une émotion forte est justement un signal pour ralentir. Si vous avez un doute, ne partagez pas, même « pour demander si c'est vrai ». Si un contenu est manifestement faux ou blessant, signalez-le à la plateforme.",
                "Créer ou diffuser un hypertrucage qui humilie ou ridiculise un camarade ou un adulte n'a rien d'une plaisanterie : c'est une atteinte grave à la personne, qui peut relever du harcèlement et être sanctionnée par l'établissement comme par la loi. Si vous en êtes victime ou témoin, parlez-en à un adulte de confiance (parent, professeur, CPE) ; en France, le 3018 est le numéro national pour les victimes de cyberharcèlement et de violences numériques.",
              ],
              box: { label: "À retenir", text: "Un doute ? On ne partage pas. Un contenu faux ou blessant ? On le signale et on en parle à un adulte." },
            },
          ],
          keyPoints: [
            "Hypertrucage (deepfake) : contenu créé ou modifié par IA pour faire croire qu'une personne a dit ou fait quelque chose.",
            "Indices visuels (mains, textes, ombres, lèvres) : ils éveillent le doute mais ne prouvent rien.",
            "La vraie vérification porte sur l'origine : qui publie, où, quand, quelles sources fiables en parlent.",
            "La recherche d'image inversée retrouve où une image est déjà apparue.",
            "Une vraie image peut tromper si on lui ajoute une fausse légende.",
            "En cas de doute, ne pas partager ; signaler, en parler à un adulte (3018 en cas de cyberharcèlement).",
          ],
          example: {
            statement: "Une vidéo circule sur un réseau social : on y voit le ministre de l'Éducation d'un pays voisin annoncer que les écoles fermeront tout le mois de juin. Le compte qui l'a publiée a été créé la semaine dernière. Comment vérifier ce contenu ?",
            solution: [
              "S'arrêter : l'annonce est surprenante et provoque une émotion ; c'est une raison de vérifier avant de partager.",
              "Examiner la source : un compte récent et anonyme n'est pas une source fiable.",
              "Chercher si des médias fiables ou le site officiel du gouvernement concerné rapportent cette annonce.",
              "Observer la vidéo : lèvres mal synchronisées, voix monotone, contours du visage qui tremblent seraient des indices, mais pas des preuves.",
              "Faire une recherche d'image inversée sur une capture de la vidéo, pour retrouver la vidéo d'origine : peut-être une ancienne intervention dont le son a été modifié.",
              "Conclusion : sans confirmation par une source fiable, la vidéo ne doit être ni tenue pour vraie ni partagée ; si elle se révèle fausse, on la signale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces observations, lesquelles peuvent faire soupçonner qu'une image a été générée par une IA ? (a) une main à six doigts ; (b) une photo prise de nuit ; (c) un panneau dont le texte est illisible et déformé ; (d) une ombre qui part dans une autre direction que les autres ; (e) une photo en noir et blanc.",
              hint: "Un indice d'image générée est une incohérence, pas un simple choix de prise de vue.",
              solution: [
                "(a) Une main à six doigts est une incohérence anatomique : indice.",
                "(b) La nuit est un simple choix de prise de vue : pas un indice.",
                "(c) Un texte déformé est un défaut fréquent des images générées : indice.",
                "(d) Des ombres dans des directions différentes sont incohérentes avec une seule source de lumière : indice.",
                "(e) Le noir et blanc est un choix de style : pas un indice.",
                "Résultat : a, c et d sont des indices, qui invitent à vérifier l'origine de l'image ; ils ne suffisent pas à prouver qu'elle est générée.",
              ],
            },
            {
              level: 2,
              statement: "Une photo d'une rue inondée est partagée avec la légende : « Notre ville ce matin après l'orage ! » Une recherche d'image inversée montre que la même photo a été publiée il y a cinq ans dans un article sur des inondations dans un autre pays. (1) L'image a-t-elle forcément été générée par une IA ? (2) Quel est le problème ? (3) Que faire ?",
              hint: "Une image peut être vraie et pourtant utilisée pour tromper.",
              solution: [
                "(1) Non : la photo existait déjà il y a cinq ans dans un article de presse ; c'est probablement une vraie photo.",
                "(2) Le problème est le détournement de contexte : la légende ment sur le lieu et la date.",
                "(3) Ne pas partager ; si l'on veut aider, indiquer à la personne l'origine réelle de la photo, et signaler la publication si elle se répand.",
                "Résultat : il s'agit d'une vraie photo détournée par une fausse légende, ce qui reste une fausse information.",
              ],
            },
            {
              level: 3,
              statement: "Rédigez un paragraphe argumenté (huit à dix lignes) répondant à la question : « Peut-on se fier à ses yeux pour repérer une image générée par une IA ? » Utilisez au moins deux arguments et un exemple.",
              hint: "Opposez ce que les indices visuels permettent (éveiller le doute) et ce qu'ils ne permettent pas (prouver), puis proposez une autre méthode.",
              solution: [
                "Thèse : les yeux peuvent alerter, mais ils ne suffisent pas.",
                "Argument 1 : certains défauts (mains déformées, textes illisibles, ombres incohérentes) peuvent révéler une image générée.",
                "Argument 2 : ces défauts disparaissent à mesure que les outils progressent, et une vraie photo floue peut paraître suspecte ; une vraie photo peut aussi tromper par une fausse légende.",
                "Méthode : la vérification repose sur l'origine (source, date, recherche d'image inversée, médias fiables).",
                "Paragraphe modèle : « On ne peut pas se fier uniquement à ses yeux pour repérer une image générée par une IA. Certes, certains défauts, comme une main à six doigts ou un panneau au texte illisible, peuvent éveiller le doute. Mais ces défauts sont de moins en moins fréquents à mesure que les outils progressent, et une image parfaite peut être entièrement fabriquée. À l'inverse, une vraie photo peut tromper : une photo d'inondation ancienne, présentée comme récente, reste une fausse information. Il faut donc remonter à l'origine de l'image : qui l'a publiée, quand, et des sources fiables la confirment-elles ? Une recherche d'image inversée permet souvent de répondre. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : images et vidéos générées.",
            statements: [
              { text: "Une image sans aucun défaut visible est forcément une vraie photo.", true: false, why: "Les images générées récentes peuvent être parfaites : seule l'origine permet de conclure." },
              { text: "Une vraie photo peut tromper si on lui ajoute une fausse légende.", true: true, why: "Le détournement de contexte est une forme très courante de fausse information." },
              { text: "La recherche d'image inversée permet de retrouver où une image est déjà apparue.", true: true, why: "Elle révèle souvent une publication plus ancienne ou une autre origine." },
              { text: "L'absence de filigrane prouve qu'une image n'a pas été générée par une IA.", true: false, why: "Les filigranes ne sont pas systématiques et peuvent être effacés." },
              { text: "Partager un contenu douteux « pour demander si c'est vrai » ne pose aucun problème.", true: false, why: "Le partage diffuse le contenu, même avec une question : on vérifie d'abord." },
              { text: "Créer un hypertrucage pour se moquer d'un camarade peut relever du harcèlement.", true: true, why: "C'est une atteinte grave à la personne, sanctionnée par l'établissement et par la loi." },
              { text: "Une main déformée prouve à coup sûr qu'une image vient d'une IA.", true: false, why: "C'est un indice qui invite à vérifier ; un flou de mouvement peut aussi déformer une main sur une vraie photo." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un hypertrucage (deepfake) ?",
              options: ["Une photo floue ou trop compressée par un réseau social", "Un virus informatique caché dans un fichier vidéo", "Un faux contenu imitant une personne réelle", "Un filtre amusant appliqué à son propre visage"],
              answer: 2,
              why: "C'est un contenu créé ou modifié par IA pour faire croire qu'une personne a dit ou fait quelque chose.",
            },
            {
              q: "Quelle est la méthode la plus sûre pour vérifier une image surprenante ?",
              options: ["Compter les doigts des personnes", "La regarder attentivement en zoomant", "Demander à ses amis s'ils y croient", "Remonter à sa source d'origine"],
              answer: 3,
              why: "Les indices visuels éveillent le doute, mais c'est l'origine du contenu qui permet de conclure.",
            },
            {
              q: "Une recherche d'image inversée sert à :",
              options: ["retrouver où une image est déjà apparue", "retourner l'image comme dans un miroir", "rendre une image plus nette", "savoir combien de personnes l'ont aimée et partagée"],
              answer: 0,
              why: "Elle cherche les autres publications de la même image, et donc son origine possible.",
            },
            {
              q: "Vous recevez une vidéo choquante dont vous doutez. Que faites-vous ?",
              options: ["Je la partage vite pour prévenir tout le monde", "Je ne la partage pas et vérifie sa source", "Je la commente pour donner mon avis", "Je la transfère à la classe pour demander si c'est vrai"],
              answer: 1,
              why: "Partager diffuse le contenu ; on vérifie d'abord, et l'on ne partage pas en cas de doute.",
            },
            {
              q: "Que prouve l'absence de filigrane « IA » sur une image ?",
              options: ["Rien", "Que c'est une vraie photo", "Qu'elle a été vérifiée par la plateforme", "Qu'elle est libre de droits"],
              answer: 0,
              why: "Les marques d'origine ne sont pas systématiques et peuvent être retirées : leur absence ne prouve rien.",
            },
          ],
          trap: "Se fier uniquement à l'œil et chercher des défauts visuels, alors que les images générées récentes peuvent être parfaites et qu'une vraie photo peut être détournée par une fausse légende.",
          method: "Retenez trois gestes avant tout partage : s'arrêter (l'émotion est un signal d'alerte), remonter à la source d'origine, chercher si des sources fiables confirment. Sans confirmation, on ne partage pas.",
        },
        {
          id: 'ia-examens',
          title: "Préparer le brevet ou le bac avec l'IA",
          minutes: 30,
          objectives: [
            "Organiser ses révisions sur plusieurs semaines en combinant rappel actif et répétition espacée.",
            "Utiliser l'IA pour s'entraîner (questions, quiz, simulation d'oral) sans lui confier le travail.",
            "S'entraîner sur des sujets d'annales en conditions réelles, sans aide.",
            "Vérifier les informations sur les épreuves auprès des sources officielles et des professeurs.",
          ],
          course: [
            {
              heading: "Ce que l'examen évalue, et ce qui y est interdit",
              paragraphs: [
                "Au brevet comme au bac, vous serez seul face à votre copie ou face au jury : aucun outil connecté n'est autorisé pendant les épreuves, et utiliser une aide non autorisée est une fraude sévèrement sanctionnée. La préparation doit donc vous rendre capable de mobiliser vos connaissances et vos méthodes sans aide, en temps limité. C'est le critère pour juger un usage de l'IA en révision : vous rend-il plus autonome, ou plus dépendant ?",
                "Les épreuves et leurs modalités évoluent d'une session à l'autre : nature des sujets, durées, coefficients. Ne demandez pas à une IA comment se déroule votre examen : ses informations peuvent être anciennes ou fausses. Consultez les pages officielles du ministère de l'Éducation nationale, les informations de votre établissement et vos professeurs.",
              ],
              box: { label: "Règle", text: "Pendant les épreuves du brevet et du bac : aucune IA, aucun outil connecté. Pour connaître les épreuves, on se fie aux textes officiels et aux professeurs, pas à une IA." },
            },
            {
              heading: "Un plan de révision qui marche",
              paragraphs: [
                "Deux principes des sciences de l'apprentissage doivent guider vos révisions. Le rappel actif : se tester (questions, fiches recto verso, exercices sans regarder le cours) fait davantage retenir que relire ou surligner. La répétition espacée : revoir une notion plusieurs fois, à intervalles qui s'allongent (le lendemain, quelques jours après, une semaine après, puis deux), fait mieux retenir qu'une longue séance la veille.",
                "Construisez un rétroplanning : partez de la date de l'examen, listez les chapitres de chaque matière et répartissez-les sur les semaines qui précèdent, en prévoyant des retours réguliers sur les chapitres déjà vus. Gardez du temps pour des sujets complets en conditions réelles, et préservez votre sommeil : c'est notamment pendant le sommeil que la mémoire consolide ce que vous avez appris.",
              ],
              box: { label: "À retenir", text: "Se tester plutôt que relire, espacer plutôt que tout concentrer, s'entraîner en conditions réelles, dormir suffisamment." },
            },
            {
              heading: "Les bons usages de l'IA en révision",
              paragraphs: [
                "L'IA peut être un partenaire d'entraînement efficace. Elle peut vous interroger : « Pose-moi dix questions sur le chapitre de SVT consacré à la génétique, une par une, et attends ma réponse avant de corriger. » Elle peut vous aider à organiser votre planning, si vous lui donnez vos dates et vos chapitres. Elle peut jouer le jury d'un oral, celui du brevet comme le Grand oral du bac, en vous posant des questions et des relances sur votre sujet.",
                "Elle peut aussi vous aider à comprendre vos erreurs après un sujet d'annales que vous avez fait seul : « Voici ma réponse à cette question et le corrigé. Explique-moi pourquoi ma démarche ne fonctionne pas. » En revanche, lui faire rédiger vos fiches de révision vous prive d'une étape d'apprentissage : c'est en faisant la fiche, en choisissant l'essentiel, que vous apprenez.",
              ],
            },
            {
              heading: "Les limites à garder en tête",
              paragraphs: [
                "Les questions et les corrigés produits par une IA peuvent contenir des erreurs ou sortir du programme de votre classe. Vérifiez-les avec votre manuel et vos cours, et privilégiez les vrais sujets d'annales, que vos professeurs peuvent vous indiquer : ils correspondent exactement aux attentes de l'examen.",
                "Ne transmettez à une IA ni copie portant votre nom, ni identifiants, ni informations personnelles. Et gardez la juste mesure : l'IA est un outil parmi d'autres, à côté du manuel, des cours, des professeurs, des révisions à plusieurs et des sujets faits à la main, en temps limité.",
              ],
            },
          ],
          keyPoints: [
            "À l'examen, aucune IA : la révision doit vous rendre autonome.",
            "Modalités des épreuves : se fier aux sources officielles et aux professeurs, pas à l'IA.",
            "Réviser par rappel actif (se tester) et répétition espacée (revoir à intervalles croissants).",
            "L'IA peut interroger, aider à planifier, jouer le jury d'un oral, expliquer une erreur après coup.",
            "Faire ses fiches soi-même et des sujets d'annales seul, en temps limité.",
            "Vérifier les questions de l'IA avec le cours ; ne jamais lui donner de données personnelles.",
          ],
          example: {
            statement: "Camille, en 3e, a six semaines avant le brevet. Elle veut utiliser l'IA pour réviser les mathématiques. Proposez-lui une démarche qui respecte les bonnes méthodes.",
            solution: [
              "Faire la liste des chapitres de mathématiques de l'année avec son cahier et son manuel, et repérer ceux qui lui posent le plus de difficultés.",
              "Construire un rétroplanning sur six semaines où chaque chapitre est revu au moins deux ou trois fois, à intervalles croissants ; elle peut demander à l'IA de l'aider à répartir les séances à partir de sa liste, puis ajuster elle-même.",
              "À chaque séance : se tester d'abord (exercices du manuel sans regarder le cours), puis demander à l'IA des questions supplémentaires sur le chapitre, en vérifiant qu'elles correspondent au cours.",
              "Chaque semaine, faire un sujet d'annales en temps limité, seule, sans IA ni cours.",
              "Après correction avec le corrigé, demander à l'IA d'expliquer les erreurs qu'elle ne comprend pas, puis refaire l'exercice seule.",
              "Réponse : rappel actif, répétition espacée, sujets en conditions réelles, et l'IA comme partenaire d'entraînement et d'explication, jamais comme solveur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque usage, dites s'il prépare bien à l'examen et pourquoi : (a) faire rédiger toutes ses fiches de révision par l'IA ; (b) se faire interroger par l'IA sur un chapitre d'histoire ; (c) relire trois fois le cours la veille de l'épreuve ; (d) faire un sujet d'annales seul, puis demander à l'IA d'expliquer une erreur.",
              hint: "Un bon usage vous fait chercher dans votre mémoire et vous rend autonome.",
              solution: [
                "(a) Non : choisir l'essentiel et rédiger la fiche est justement ce qui fait apprendre.",
                "(b) Oui : c'est du rappel actif, vous cherchez les réponses dans votre mémoire.",
                "(c) Peu efficace : la relecture est passive et concentrée sur une seule séance, sans espacement.",
                "(d) Oui : entraînement en conditions réelles, puis explication ciblée de l'erreur.",
                "Résultat : b et d préparent bien ; a et c préparent mal.",
              ],
            },
            {
              level: 2,
              statement: "Malo apprend un chapitre de physique-chimie le 1er du mois. Proposez quatre dates de révision dans le mois, à intervalles croissants, et dites ce qu'il fait à chaque séance.",
              hint: "Commencez par un intervalle court (un jour), puis allongez-le à chaque fois.",
              solution: [
                "Choisir des intervalles croissants, par exemple 1 jour, 3 jours, 7 jours, puis 14 jours.",
                "Dates : le 2 (1 + 1), le 5 (2 + 3), le 12 (5 + 7) et le 26 (12 + 14).",
                "À chaque séance, Malo se teste sans regarder le cours : questions posées par l'IA ou fiches recto verso, puis un exercice.",
                "Il corrige avec le cours, note ce qu'il a oublié, et insiste sur ces points à la séance suivante.",
                "Résultat : révisions le 2, le 5, le 12 et le 26, chacune commençant par un test de mémoire.",
              ],
            },
            {
              level: 3,
              statement: "Léo, en Terminale, prépare le Grand oral. Il envisage trois usages de l'IA : (A) faire écrire par l'IA le texte de sa présentation et l'apprendre par cœur ; (B) lui demander de jouer le jury, en lui posant des questions et des relances sur son sujet ; (C) lui demander de confirmer une statistique qu'il veut citer. Évaluez chaque usage, puis proposez une préparation complète.",
              hint: "Le Grand oral évalue votre capacité à présenter et à argumenter vous-même ; pensez aussi à la vérification des chiffres.",
              solution: [
                "(A) À rejeter : l'épreuve évalue la réflexion et l'argumentation de Léo ; un texte produit par l'IA et récité ne serait pas son travail, et il serait démuni face aux questions du jury.",
                "(B) Utile : c'est un entraînement à l'échange, qui l'oblige à mobiliser ses connaissances et à argumenter seul.",
                "(C) Insuffisant : une IA n'est pas une source ; Léo doit retrouver la statistique dans une source fiable, par exemple un organisme public de statistique, et citer cette source.",
                "Préparation complète : rédiger lui-même sa présentation à partir de sources vérifiées ; s'entraîner à voix haute en se chronométrant ; simuler le jury avec l'IA, puis avec des camarades ou un professeur ; vérifier les modalités de l'épreuve auprès de ses professeurs et des textes officiels.",
                "Résultat : B est un bon usage ; C doit être complété par une vraie source ; A est à proscrire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque besoin de révision au bon usage.",
            pairs: [
              { left: "Retenir un chapitre sur la durée", right: "Le revoir à intervalles croissants" },
              { left: "Savoir si l'on connaît vraiment son cours", right: "Se faire interroger sans regarder ses notes" },
              { left: "Se préparer aux conditions de l'épreuve", right: "Faire un sujet d'annales seul, en temps limité" },
              { left: "Comprendre une erreur dans un sujet corrigé", right: "Demander une explication, puis refaire seul" },
              { left: "Connaître la durée et le barème d'une épreuve", right: "Consulter les sources officielles et les professeurs" },
              { left: "S'entraîner pour un oral", right: "Faire jouer le jury par l'IA ou par un camarade" },
            ],
          },
          quiz: [
            {
              q: "Pendant les épreuves du brevet et du bac, l'usage d'une IA est :",
              options: ["autorisé pour les questions difficiles", "autorisé si on le signale sur la copie", "autorisé seulement pour l'orthographe", "interdit : c'est une fraude"],
              answer: 3,
              why: "Aucun outil connecté n'est permis pendant les épreuves ; utiliser une IA est une fraude.",
            },
            {
              q: "Où vérifier la durée et le déroulement d'une épreuve ?",
              options: ["Auprès d'une IA", "Auprès des professeurs et des textes officiels", "Sur un forum d'élèves", "Dans une vidéo trouvée au hasard sur un réseau social"],
              answer: 1,
              why: "Les modalités évoluent : seules les sources officielles et vos professeurs donnent l'information à jour.",
            },
            {
              q: "Quelle méthode fait le mieux retenir ?",
              options: ["Relire le cours plusieurs fois la veille", "Surligner le manuel en plusieurs couleurs", "Se tester à intervalles croissants", "Recopier des fiches écrites par l'IA"],
              answer: 2,
              why: "Le rappel actif et la répétition espacée sont les méthodes les plus efficaces pour retenir durablement.",
            },
            {
              q: "Pourquoi faire soi-même ses fiches de révision ?",
              options: ["Parce que choisir l'essentiel fait apprendre", "Parce que les fiches de l'IA sont toujours interdites par la loi", "Parce que c'est plus rapide que de les demander", "Parce que le professeur les note à l'examen"],
              answer: 0,
              why: "Trier, résumer et reformuler le cours est un travail d'apprentissage en soi.",
            },
            {
              q: "Après un sujet d'annales fait seul, quel usage de l'IA est utile ?",
              options: ["Lui faire refaire tout le sujet", "Lui demander la note exacte qu'on aurait eue le jour de l'examen", "Lui faire expliquer une erreur, puis refaire seul", "Lui confier la correction sans la lire"],
              answer: 2,
              why: "L'explication ciblée d'une erreur, suivie d'un nouvel essai seul, fait progresser.",
            },
          ],
          trap: "Croire qu'on révise parce qu'on lit des fiches ou des corrigés produits par l'IA : la relecture passive donne une impression de maîtrise, mais seul le rappel actif, sans aide, prépare à l'épreuve.",
          method: "Chaque semaine de révision, faites au moins un sujet ou un exercice d'examen en conditions réelles (temps limité, sans cours, sans IA), corrigez-le avec le corrigé, puis consignez vos erreurs dans une liste que vous revoyez à la séance suivante.",
        },
        {
          id: 'plan-travail',
          title: "Votre méthode de travail avec l'IA, en une page",
          minutes: 25,
          objectives: [
            "Construire sa méthode de travail avec l'IA en quatre temps : avant, pendant, après, toujours.",
            "Choisir un usage de l'IA adapté à une situation de travail et à sa consigne.",
            "Rédiger une charte personnelle d'usage de l'IA, concrète et vérifiable, et la faire évoluer.",
          ],
          course: [
            {
              heading: "Pourquoi une méthode écrite",
              paragraphs: [
                "Les leçons de cette unité ont posé des repères : comprendre ce qu'est une IA et pourquoi elle se trompe, protéger ses données, respecter les règles, apprendre avec l'IA sans la laisser apprendre à votre place, vérifier et citer. Ces repères ne servent que s'ils deviennent des habitudes. Une méthode écrite, qui tient sur une page, vous aide à décider vite, au moment précis où l'on est tenté de demander la réponse.",
                "Comme un sportif qui suit un plan d'entraînement, vous fixez vos règles à l'avance, pour ne pas avoir à les rediscuter à chaque devoir, surtout un soir de fatigue.",
              ],
            },
            {
              heading: "Les quatre temps de la méthode",
              paragraphs: [
                "Avant : je lis la consigne et les règles, je vérifie si l'IA est autorisée et pour quoi ; je travaille d'abord seul (je relis le cours, je cherche l'exercice, je rédige mon brouillon).",
                "Pendant : j'utilise l'IA comme un tuteur, qui me pose des questions, me donne des indices, m'interroge pour réviser ou relit mon texte en signalant les erreurs sans réécrire. Je lui montre ce que j'ai déjà fait et je demande le plus petit niveau d'aide utile.",
                "Après : je vérifie ce que l'IA m'a dit avec le cours et des sources fiables ; je corrige moi-même ; je refais seul ce que l'IA m'a aidé à comprendre ; je signale l'usage de l'IA dans le travail rendu.",
                "Toujours : je ne donne aucune donnée personnelle (nom complet, adresse, photos, identifiants, informations sur ma santé ou sur d'autres personnes) ; je garde l'esprit critique ; je n'utilise jamais l'IA pendant un contrôle ou un examen.",
              ],
              box: { label: "À retenir", text: "Avant : consigne et travail personnel. Pendant : l'IA comme tuteur. Après : vérifier, corriger, refaire seul, signaler. Toujours : vie privée, esprit critique, honnêteté." },
            },
            {
              heading: "Adapter la méthode à chaque situation",
              paragraphs: [
                "La méthode s'adapte à la tâche. Pour apprendre une leçon : se faire interroger, à plusieurs jours d'intervalle. Pour comprendre une notion : demander une autre explication ou une analogie, puis la reformuler avec ses mots. Pour un exercice : chercher, puis demander un indice. Pour une rédaction : écrire, puis faire signaler les erreurs. Pour une information : la vérifier dans deux sources fiables.",
                "Elle s'adapte aussi à votre âge. Au début du collège, on utilise surtout l'IA, quand c'est permis, pour se faire expliquer ou interroger, de préférence avec un adulte ; au lycée, on peut aussi s'en servir pour s'entraîner à l'oral ou chercher des objections à son argumentation. Beaucoup de services d'IA fixent un âge minimum dans leurs conditions d'utilisation : renseignez-vous, et parlez-en avec vos parents.",
              ],
            },
            {
              heading: "Rédiger et faire vivre sa charte",
              paragraphs: [
                "Votre charte tient en une page : quelques règles courtes, rédigées à la première personne, concrètes et vérifiables. « Je cherche au moins dix minutes avant de demander un indice » vaut mieux que « Je travaille bien ». Ajoutez deux ou trois demandes types qui vous sont utiles, et l'endroit où trouver les règles de votre établissement (règlement intérieur, charte du numérique).",
                "Relisez-la régulièrement et faites-la évoluer : si vous constatez que vous avez demandé la solution trop vite, ajoutez une règle. Vous pouvez la montrer à vos parents ou à un professeur : en parler, c'est déjà s'engager.",
              ],
              box: { label: "Repère", text: "Une bonne règle de charte est courte, écrite à la première personne, concrète et vérifiable : on peut répondre par oui ou par non à la question « l'ai-je respectée ? »." },
            },
          ],
          keyPoints: [
            "Une méthode écrite transforme les bons principes en habitudes.",
            "Avant : lire la consigne, connaître les règles, travailler seul d'abord.",
            "Pendant : l'IA comme tuteur (questions, indices, quiz, relecture sans réécriture).",
            "Après : vérifier, corriger soi-même, refaire seul, signaler l'usage.",
            "Toujours : aucune donnée personnelle, esprit critique, aucune IA en contrôle ou à l'examen.",
            "Une règle de charte est courte, concrète et vérifiable ; la charte évolue.",
          ],
          example: {
            statement: "Adam, en 5e, doit apprendre pour vendredi une leçon de géographie et rendre lundi un exercice de mathématiques noté. Le professeur de mathématiques a écrit : « IA interdite pour ce devoir. » Appliquez la méthode en quatre temps à ces deux tâches.",
            solution: [
              "Avant : Adam lit les deux consignes. Pour la géographie, aucune interdiction ; pour les mathématiques, l'IA est interdite.",
              "Géographie, pendant : après avoir appris sa leçon, il demande à l'IA de l'interroger, question par question, sans regarder son cahier.",
              "Géographie, après : il vérifie chaque réponse avec son cahier, note ce qu'il a oublié et se réinterroge le lendemain.",
              "Mathématiques : il respecte l'interdiction. S'il bloque, il relit son cours, reprend un exercice semblable corrigé en classe, ou pose la question au professeur.",
              "Toujours : il ne donne à l'IA ni son nom ni celui de son collège.",
              "Réponse : l'IA sert d'interrogateur pour la leçon de géographie ; elle n'est pas utilisée pour le devoir de mathématiques noté, conformément à la consigne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque action à un temps de la méthode (avant, pendant, après, toujours) : (a) vérifier dans le manuel une date donnée par l'IA ; (b) lire la consigne du devoir ; (c) demander un indice plutôt que la solution ; (d) ne pas donner son adresse ; (e) refaire seul un exercice expliqué par l'IA.",
              hint: "Demandez-vous à quel moment du travail chaque action a lieu ; une règle qui vaut à tout moment va dans « toujours ».",
              solution: [
                "(a) Vérifier une information donnée par l'IA : après.",
                "(b) Lire la consigne : avant.",
                "(c) Demander un indice : pendant.",
                "(d) Protéger ses données : toujours.",
                "(e) Refaire seul : après.",
                "Résultat : a après, b avant, c pendant, d toujours, e après.",
              ],
            },
            {
              level: 2,
              statement: "Ces règles de charte sont trop vagues. Réécrivez-les pour les rendre concrètes et vérifiables : (1) « J'utilise bien l'IA. » (2) « Je fais attention à mes données. » (3) « Je ne triche pas. »",
              hint: "Une règle vérifiable dit précisément quoi faire, ou quand ; on peut ensuite répondre par oui ou par non à la question : l'ai-je respectée ?",
              solution: [
                "(1) Possible : « Je cherche au moins dix minutes et je note mes essais avant de demander un indice à l'IA. »",
                "(2) Possible : « Je ne donne jamais à l'IA mon nom, mon adresse, une photo, mes identifiants ni le nom de mon établissement. »",
                "(3) Possible : « Je ne rends jamais un texte, une solution ou une traduction produits par l'IA, et je signale tout usage de l'IA dans un travail rendu. »",
                "Chaque règle dit précisément quoi faire ; on peut vérifier si on l'a respectée.",
                "Résultat : trois règles concrètes, rédigées à la première personne et vérifiables.",
              ],
            },
            {
              level: 3,
              statement: "Rédigez votre propre charte d'usage de l'IA, en une page : au moins une règle pour chacun des quatre temps, deux demandes types que vous utiliserez, et l'endroit où trouver les règles de votre établissement. Indiquez ensuite comment vous vérifierez, dans un mois, que vous l'avez respectée.",
              hint: "Appuyez-vous sur les leçons de l'unité : rappel actif, aide graduée, relecture sans réécriture, vérification, mention d'usage, vie privée.",
              solution: [
                "Avant : « Je lis la consigne et je vérifie si l'IA est autorisée ; je cherche seul au moins dix minutes avant toute demande. »",
                "Pendant : « Je demande un indice, jamais la solution ; pour un texte, je demande de signaler les erreurs sans réécrire. »",
                "Après : « Je vérifie dans le manuel chaque date ou chiffre donné par l'IA ; je refais seul l'exercice ; j'ajoute une mention d'usage aux travaux rendus. »",
                "Toujours : « Aucune donnée personnelle ; aucune IA en contrôle ou à l'examen. »",
                "Demandes types : « Pose-moi cinq questions sur ce chapitre, une par une, et attends ma réponse. » ; « Voici mon essai : donne-moi seulement un indice. » Règles de l'établissement : le règlement intérieur et la charte du numérique, sur l'espace numérique de travail ou au CDI.",
                "Suivi : dans un mois, relire chaque règle et répondre oui ou non ; chaque règle non respectée devient l'objectif du mois suivant.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un travail avec l'IA.",
            items: [
              "Lire la consigne et vérifier si l'IA est autorisée",
              "Travailler seul d'abord : cours, recherche, brouillon",
              "Demander à l'IA le plus petit niveau d'aide utile",
              "Vérifier ses réponses avec le cours et des sources fiables",
              "Corriger soi-même et refaire seul",
              "Signaler l'usage de l'IA dans le travail rendu",
            ],
          },
          quiz: [
            {
              q: "Que fait-on en premier, avant d'utiliser l'IA pour un devoir ?",
              options: ["Lire la consigne", "Copier le sujet dans l'IA", "Chercher la solution sur internet", "Demander la réponse à un camarade de classe"],
              answer: 0,
              why: "La consigne dit si l'IA est autorisée et pour quoi : tout le reste en dépend.",
            },
            {
              q: "Laquelle de ces règles de charte est vérifiable ?",
              options: ["« J'utilise bien l'IA. »", "« Je suis toujours sérieux, honnête et appliqué dans tout mon travail. »", "« Je cherche dix minutes avant de demander un indice. »", "« Je fais attention. »"],
              answer: 2,
              why: "Elle dit précisément quoi faire : on peut répondre par oui ou par non à la question « l'ai-je respectée ? ».",
            },
            {
              q: "Dans quel temps de la méthode place-t-on « vérifier avec le cours ce que l'IA a dit » ?",
              options: ["Avant", "Après", "Toujours", "Jamais, l'IA a déjà vérifié"],
              answer: 1,
              why: "On vérifie après avoir reçu la réponse de l'IA, avant de l'utiliser.",
            },
            {
              q: "Laquelle de ces informations peut-on donner à une IA ?",
              options: ["Son nom et son adresse", "Le nom de son établissement et de sa classe", "Ses identifiants de l'espace numérique de travail", "Le chapitre de cours que l'on révise"],
              answer: 3,
              why: "Le contenu du cours n'est pas une donnée personnelle ; les autres informations permettent de vous identifier.",
            },
            {
              q: "Le professeur a écrit « IA interdite » pour un devoir noté, et vous bloquez. Que faites-vous ?",
              options: ["J'utilise l'IA discrètement", "Je fais faire le devoir par un ami qui utilise l'IA", "Je demande seulement un petit indice à l'IA, ce qui ne compte pas vraiment", "Je relis le cours ou demande au professeur"],
              answer: 3,
              why: "La consigne s'applique, même pour un indice ; le cours, les exercices corrigés et le professeur restent disponibles.",
            },
          ],
          trap: "Écrire une charte de bonnes intentions vagues (« J'utilise bien l'IA ») que l'on ne relit jamais : une règle utile est concrète, vérifiable et relue régulièrement.",
          method: "Affichez votre charte près de votre bureau ou gardez-la au début de votre agenda. Une fois par mois, relisez-la et cochez les règles respectées : chaque règle oubliée devient votre objectif du mois suivant.",
        },
      ],
    },
  ],
}
