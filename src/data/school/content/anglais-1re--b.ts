import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-1re',
  chapters: [
    /* ==================================================================== */
    /* NUANCER ET ARGUMENTER                                                */
    /* ==================================================================== */
    {
      id: 'nuancer-argumenter',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'modaux',
          title: 'Les modaux : obligation, possibilité, probabilité',
          minutes: 30,
          objectives: [
            "Identifier les deux grandes valeurs des modaux : la valeur radicale (obligation, permission, capacité, conseil) et la valeur épistémique (degré de probabilité).",
            "Choisir le modal adapté pour exprimer une obligation, une interdiction, une absence d'obligation ou un conseil.",
            "Exprimer un degré de certitude sur le présent et sur le passé avec modal + be + -ing ou modal + have + participe passé.",
            "Employer les modaux pour nuancer une argumentation écrite ou orale.",
          ],
          course: [
            {
              heading: "Ce qu'est un modal et comment il se construit",
              paragraphs: [
                "Les auxiliaires modaux de l'anglais sont can, could, may, might, must, shall, should, will, would, auxquels on ajoute ought to et, dans certains emplois, need. Ils permettent à l'énonciateur de donner son point de vue sur ce qu'il dit : il ne présente plus un fait brut (He is at home), mais une obligation, une possibilité ou une probabilité (He must be at home, He might be at home).",
                "Leur grammaire est particulière. Ils ne prennent jamais de -s à la troisième personne (she can, jamais she cans), ils sont suivis de la base verbale sans to (you must leave, et non you must to leave ; seul ought to garde to), et ils forment eux-mêmes la négation et la question, sans do : She can't swim. Should we wait? Enfin, ils n'ont ni infinitif ni participe : on ne peut pas dire will can ou to must. On emploie alors des équivalents : be able to (capacité), have to (obligation), be allowed to (permission). Exemple : I will be able to come tomorrow.",
                "Chaque modal a deux grandes valeurs. La valeur radicale porte sur le sujet et ses actions : obligation, permission, capacité, conseil (You must wear a helmet). La valeur épistémique porte sur la vérité de l'énoncé : l'énonciateur évalue ses chances d'être vrai (That must be the postman). Le même modal peut donc avoir deux sens ; c'est le contexte qui tranche.",
              ],
              box: { label: "Règle", text: "Modal + base verbale sans to (sauf ought to). Pas de -s, pas de do. Équivalents quand le modal est impossible : be able to (can), have to (must), be allowed to (may, can). Exemple : She will have to leave early." },
            },
            {
              heading: "Obligation, interdiction, absence d'obligation, conseil",
              paragraphs: [
                "Must exprime une obligation que l'énonciateur impose ou juge nécessaire (I must finish this essay tonight ; You must be home by ten). Have to exprime plutôt une obligation extérieure, liée à une règle ou aux circonstances (At my school, we have to wear a uniform). Au passé, must n'existe pas avec cette valeur : on emploie had to (Yesterday I had to take the bus). Au futur : will have to.",
                "Attention à la négation, car elle change complètement le sens. Mustn't exprime une interdiction (You mustn't use your phone during the test : c'est interdit). Don't have to et needn't expriment une absence d'obligation (You don't have to come, you needn't come : ce n'est pas nécessaire, vous êtes libre). Le français « il ne faut pas » correspond à mustn't, et « ce n'est pas la peine de » à don't have to.",
                "Should et ought to expriment le conseil ou ce qui serait souhaitable selon l'énonciateur (You should get more sleep ; Governments ought to invest in public transport). Had better exprime une mise en garde plus pressante, souvent avec une menace implicite (You'd better hurry, or you'll miss the train). Shall, avec I ou we, sert à proposer ou suggérer : Shall I open the window? Shall we start?",
              ],
              box: { label: "À retenir", text: "Mustn't = interdiction (il ne faut pas). Don't have to / needn't = absence d'obligation (ce n'est pas la peine). Should / ought to = conseil. Had better = mise en garde. Passé de must (obligation) : had to." },
            },
            {
              heading: "Capacité, permission et possibilité",
              paragraphs: [
                "Can exprime la capacité (She can speak three languages) et la permission familière (Can I borrow your pen?). May exprime la permission dans un registre plus soutenu (May I come in?). Be allowed to s'emploie pour une permission accordée par une règle, à tous les temps : Students are not allowed to leave before 5 pm ; When I was a child, I was allowed to stay up late on Saturdays.",
                "Au passé, could exprime une capacité générale (When she was six, she could already read). Pour une réussite ponctuelle, à la forme affirmative, on emploie was able to ou managed to : The firefighters were able to rescue everyone (et non could rescue). À la forme négative, couldn't convient dans les deux cas : I couldn't find my keys.",
              ],
              box: { label: "Repère", text: "Could = capacité générale dans le passé (I could swim at five). Was able to / managed to = réussite ponctuelle (He managed to escape). Couldn't convient pour les deux à la forme négative." },
            },
            {
              heading: "La probabilité : une échelle de certitude",
              paragraphs: [
                "Avec leur valeur épistémique, les modaux se rangent sur une échelle. Will exprime la certitude ou la prédiction (That will be Tom at the door : je n'en doute pas). Must exprime une quasi-certitude déduite d'indices (The lights are on: they must be at home). Should exprime une probabilité attendue, logique (The parcel should arrive tomorrow). May exprime une possibilité réelle (It may rain later), might et could une possibilité plus faible (He might be right, but I doubt it). Can't exprime la quasi-certitude négative (He can't be serious!). Attention : le contraire de must (déduction) est can't, jamais mustn't.",
                "Pour une déduction ou une hypothèse sur le présent en cours, on emploie modal + be + -ing : She isn't answering, she must be driving. Pour le passé, on emploie modal + have + participe passé : She must have missed the bus (quasi-certitude), He can't have seen us (impossibilité), They might have got lost (possibilité). La même construction exprime aussi le reproche ou le regret avec should have (You should have told me : vous ne l'avez pas fait) et une possibilité non réalisée avec could have (You could have been hurt).",
                "Ces nuances sont essentielles pour argumenter : un bon essai ne présente pas tout comme certain. Comparez « Social media destroys democracy » (affirmation brutale) et « Social media may weaken public debate, and it could even threaten democracy if nothing is done » (affirmation nuancée et plus convaincante).",
              ],
              box: { label: "Formule", text: "Du plus certain au moins certain : will, must, should, may, might / could ; certitude négative : can't. Passé : modal + have + participe passé (must have left, can't have known, might have forgotten). Reproche : should have + participe passé." },
            },
          ],
          keyPoints: [
            "Modal + base verbale sans to, sans -s, sans do ; équivalents : be able to, have to, be allowed to.",
            "Mustn't = interdiction ; don't have to / needn't = absence d'obligation.",
            "Should / ought to = conseil ; had better = mise en garde ; passé de l'obligation : had to.",
            "Could = capacité générale passée ; was able to / managed to = réussite ponctuelle.",
            "Échelle de probabilité : will, must, should, may, might / could ; contraire de must (déduction) : can't.",
            "Passé : modal + have + participe passé (She must have left) ; reproche : should have done.",
          ],
          example: {
            statement: "Reformulez chaque phrase avec un modal, sans en changer le sens : a) It is forbidden to smoke in the building. b) It isn't necessary to bring any food. c) I advise you to see a doctor. d) I'm almost sure he is lying. e) Perhaps they will come, but I'm not sure. f) I'm sure she didn't get my message.",
            solution: [
              "a) Il s'agit d'une interdiction : « You mustn't smoke in the building. »",
              "b) Absence d'obligation, et non interdiction : « You don't have to bring any food. » (ou « You needn't bring any food. »)",
              "c) Un conseil : « You should see a doctor. » (ou « You ought to see a doctor. »)",
              "d) Quasi-certitude sur le présent, action en cours : « He must be lying. »",
              "e) Possibilité incertaine : « They may come. » ou, si l'on doute davantage, « They might come. »",
              "f) Quasi-certitude négative sur le passé, donc can't + have + participe passé : « She can't have got my message. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec mustn't ou don't / doesn't have to : a) You ___ cheat during the exam. b) It's Sunday tomorrow: I ___ get up early. c) Visitors ___ feed the animals: it's dangerous for them. d) She ___ pay for the museum, she's under eighteen. e) We ___ forget Mum's birthday again! f) You ___ shout, I can hear you perfectly well.",
              hint: "Demandez-vous à chaque fois : est-ce interdit (il ne faut pas) ou simplement pas nécessaire (ce n'est pas la peine) ?",
              solution: [
                "a) mustn't : tricher est interdit.",
                "b) don't have to : se lever tôt n'est pas nécessaire le dimanche.",
                "c) mustn't : nourrir les animaux est interdit.",
                "d) doesn't have to : la gratuité supprime l'obligation de payer (troisième personne : doesn't).",
                "e) mustn't : l'énonciateur se donne une interdiction forte (« il ne faut surtout pas oublier »).",
                "f) don't have to : crier n'est pas nécessaire puisque l'interlocuteur entend bien.",
              ],
            },
            {
              level: 2,
              statement: "Faites une déduction sur le passé avec must have, can't have ou might have + participe passé, à partir des indices : a) The streets are wet this morning. (rain during the night) b) Tom has got a sunburn. (spend too much time in the sun) c) Lisa was in Paris all day yesterday. (she / see you in London yesterday) d) I can't find my wallet. (perhaps / leave it at the café) e) The house was empty when we arrived. (they / go out) f) He got 4/20 in the test. (he / revise much)",
              hint: "Must have = j'en suis presque sûr ; can't have = c'est impossible ; might have = c'est possible, sans plus. Attention aux participes irréguliers (see → seen, leave → left, go → gone, spend → spent).",
              solution: [
                "a) « It must have rained during the night. » (indice fort : quasi-certitude)",
                "b) « He must have spent too much time in the sun. »",
                "c) « She can't have seen you in London yesterday. » (elle était à Paris : impossibilité)",
                "d) « I might have left it at the café. » (simple possibilité ; may have convient aussi)",
                "e) « They must have gone out. »",
                "f) « He can't have revised much. » (un résultat si faible rend la révision très improbable)",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Should smartphones be banned in high schools? » Rédigez un paragraphe argumenté de 120 à 150 mots, dans lequel vous emploierez au moins cinq modaux différents, avec au moins une valeur radicale (obligation, conseil, permission) et une valeur épistémique (probabilité), dont une sur le passé.",
              hint: "Prévoyez un plan simple : un argument pour, une concession, votre position nuancée. Placez les modaux là où vous voulez nuancer.",
              solution: [
                "Étape 1, le plan : 1) le téléphone distrait et peut nuire au climat scolaire ; 2) il peut aussi servir d'outil et rassurer les familles ; 3) position : encadrer plutôt qu'interdire totalement.",
                "Étape 2, une proposition rédigée : « Smartphones may seem harmless, but they can seriously damage concentration in class. A pupil who checks notifications every five minutes cannot follow a demanding lesson, for instance during a maths test. Some schools that banned phones say the atmosphere improved, although the rule might not have been the only reason. However, a total ban could be counterproductive. Phones can be useful for research, and parents may want to reach their children in an emergency. In my opinion, schools should not ban smartphones completely; instead, pupils ought to switch them off during lessons and must accept sanctions if they break the rule. Teachers would then be allowed to use them for specific activities, such as quizzes or quick searches, which would teach pupils to use them responsibly. »",
                "Étape 3, les modaux employés : may (possibilité), can / cannot (capacité et possibilité), might not have been (probabilité sur le passé), could (possibilité), should not (conseil), ought to (conseil), must (obligation), would (hypothèse), soit plus de cinq modaux différents.",
                "Étape 4, vérification : le paragraphe compte environ 125 mots, dans la fourchette demandée. Tous les modaux sont suivis de la base verbale sans to, sauf ought to.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque forme à la valeur qu'elle exprime.",
            pairs: [
              { left: "mustn't", right: "une interdiction" },
              { left: "don't have to", right: "une absence d'obligation" },
              { left: "should", right: "un conseil" },
              { left: "can't have + participe passé", right: "une impossibilité dans le passé" },
              { left: "might", right: "une faible probabilité" },
              { left: "be able to", right: "la capacité, quand can est impossible" },
            ],
          },
          quiz: [
            { q: "Uniforms are optional at my school: you ___ wear one.", options: ["mustn't", "don't have to", "aren't allowed to", "can't"], answer: 1, why: "Il s'agit d'une absence d'obligation ; mustn't et aren't allowed to exprimeraient une interdiction." },
            { q: "The lights are off and nobody answers. They ___ be out.", options: ["must", "mustn't", "needn't", "had to"], answer: 0, why: "Must exprime ici une quasi-certitude déduite d'indices (valeur épistémique)." },
            { q: "He ___ have stolen the money: he was with me all evening.", options: ["must", "should", "can't", "may"], answer: 2, why: "Can't have + participe passé exprime une impossibilité dans le passé, le contraire de must have." },
            { q: "Which sentence is correct?", options: ["She musts leave now.", "She must to leave now.", "She must leave now.", "She does must leave now."], answer: 2, why: "Un modal ne prend pas de -s, n'emploie pas do et se construit avec la base verbale sans to." },
            { q: "« You should have called me » expresses...", options: ["a future obligation", "a permission", "a strong deduction about the present", "a reproach about the past"], answer: 3, why: "Should have + participe passé exprime un reproche ou un regret : l'action n'a pas été faite." },
          ],
          trap: "Confondre mustn't (interdiction) et don't have to (absence d'obligation), et employer mustn't comme contraire de must dans une déduction alors qu'il faut can't (He can't be serious).",
          method: "Pour chaque modal rencontré, posez deux questions : porte-t-il sur le sujet (obligation, capacité, permission) ou sur la vérité de la phrase (probabilité) ? Et s'agit-il du présent ou du passé (modal + have + participe passé) ? Ce double repérage évite la plupart des contresens.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conditionnel-hypotheses',
          title: 'Hypothèses et conditionnels : « if » et ses structures',
          minutes: 30,
          objectives: [
            "Construire les quatre principales structures en if : vérité générale, condition réalisable, hypothèse irréelle dans le présent, irréel du passé.",
            "Choisir le temps adapté dans la subordonnée et dans la principale selon le degré de réalité de l'hypothèse.",
            "Employer unless, provided that, as long as, in case, I wish et if only.",
            "Formuler des hypothèses pour nuancer une argumentation.",
          ],
          course: [
            {
              heading: "Vérités générales et conditions réalisables",
              paragraphs: [
                "Une phrase conditionnelle comporte une subordonnée introduite par if (la condition) et une principale (la conséquence). L'ordre des deux propositions est libre ; quand la subordonnée vient en premier, on la sépare par une virgule : If it rains, we'll stay at home = We'll stay at home if it rains.",
                "Pour une vérité générale ou une conséquence automatique, on emploie le présent simple dans les deux propositions (on parle de zero conditional) : If you heat ice, it melts. If I drink coffee at night, I can't sleep. If a souvent ici le sens de when ou whenever.",
                "Pour une condition réelle et réalisable dans le futur (first conditional), on emploie if + présent simple, puis will + base verbale (ou un autre modal, ou un impératif) : If we leave now, we will catch the train. If you see Anna, tell her to call me. Règle capitale : on ne met pas will après if pour exprimer une condition. On dit If it rains, jamais If it will rain. Cette règle vaut aussi après when, as soon as, until, before, after et unless : I'll call you when I arrive.",
              ],
              box: { label: "Règle", text: "Zero conditional : if + présent, présent (If you heat ice, it melts). First conditional : if + présent, will + base verbale (If it rains, we will stay). Jamais de will dans la subordonnée de condition ou de temps." },
            },
            {
              heading: "L'hypothèse irréelle dans le présent : if + prétérit",
              paragraphs: [
                "Pour imaginer une situation contraire à la réalité présente, ou peu probable dans l'avenir (second conditional), on emploie if + prétérit, puis would + base verbale : If I had more time, I would learn Japanese (je n'ai pas le temps). If I won the lottery, I would travel around the world (c'est peu probable). Le prétérit n'exprime pas ici le passé, mais la distance par rapport au réel : c'est un prétérit modal.",
                "Avec be, la langue soignée emploie were à toutes les personnes : If I were you, I would apply for that job (formule figée pour donner un conseil). If she were here, she would know what to do. À l'oral familier, on entend aussi If I was, mais were est attendu à l'écrit. Dans la principale, would peut être remplacé par could (possibilité) ou might (éventualité) : If we used public transport more, we could reduce pollution.",
                "Comparez : If you study, you will pass (vous en avez réellement la possibilité) et If you studied, you would pass (vous ne travaillez pas, l'hypothèse est présentée comme irréelle). Le choix du temps révèle donc le point de vue de l'énonciateur sur la réalité de l'hypothèse.",
              ],
              box: { label: "Formule", text: "If + prétérit, would / could / might + base verbale. Be → were à toutes les personnes dans la langue soignée : If I were you, I would... Jamais de would dans la subordonnée en if." },
            },
            {
              heading: "L'irréel du passé et les hypothèses mixtes",
              paragraphs: [
                "Pour imaginer un passé différent de ce qui s'est réellement produit (third conditional), on emploie if + past perfect (had + participe passé), puis would have + participe passé : If she had studied harder, she would have passed her exam (elle n'a pas assez travaillé et elle a échoué). If they hadn't missed the bus, they wouldn't have been late. Cette structure exprime souvent le regret ou le reproche.",
                "Les hypothèses mixtes croisent les deux époques. Une condition passée peut avoir une conséquence présente : If I had accepted that job, I would be rich now (if + past perfect, would + base verbale). Une caractéristique présente peut expliquer un passé différent : If I were braver, I would have said something (if + prétérit, would have + participe passé).",
              ],
              box: { label: "Formule", text: "If + had + participe passé, would have + participe passé : If he had listened, he would have understood. Mixte : If I had taken the job, I would be rich now." },
            },
            {
              heading: "Les autres façons d'exprimer la condition et le regret",
              paragraphs: [
                "Unless signifie if... not, « à moins que, sauf si » : We'll go to the beach unless it rains = if it doesn't rain. Comme unless est déjà négatif, on ne le fait pas suivre d'une négation. Provided (that) et as long as signifient « à condition que » : You can borrow my bike as long as you bring it back tonight. In case exprime une précaution, et non une condition : Take an umbrella in case it rains (au cas où il pleuvrait, prenez-le de toute façon).",
                "Pour exprimer un souhait ou un regret, I wish et if only suivent la même logique que les conditionnels. Regret sur le présent : I wish / If only + prétérit (I wish I had more free time ; If only I were taller). Regret sur le passé : I wish / If only + past perfect (I wish I had listened to you). Pour se plaindre du comportement de quelqu'un : I wish + would (I wish you would stop interrupting me).",
                "Dans un registre soutenu, notamment à l'écrit, on peut supprimer if et inverser le sujet et l'auxiliaire : Had I known (= If I had known), I would have come earlier. Should you need any help (= If you need), please contact us. Were it not for her courage (= If it were not for), the project would have failed.",
              ],
              box: { label: "À retenir", text: "Unless = if not. As long as / provided that = à condition que. In case = au cas où (précaution). I wish + prétérit : regret présent ; I wish + past perfect : regret passé. Had I known = If I had known." },
            },
          ],
          keyPoints: [
            "If + présent, présent : vérité générale ; if + présent, will : condition réalisable.",
            "Jamais de will ni de would dans la subordonnée en if (ni après when, as soon as, unless).",
            "If + prétérit, would + base verbale : hypothèse irréelle ou peu probable ; If I were you...",
            "If + had + participe passé, would have + participe passé : irréel du passé, regret ou reproche.",
            "Unless = if not ; as long as / provided that = à condition que ; in case = au cas où.",
            "I wish / If only + prétérit (regret présent) ou + past perfect (regret passé).",
          ],
          example: {
            statement: "Mettez les verbes entre parenthèses à la forme correcte et nommez la structure : a) If you (mix) blue and yellow, you get green. b) If it (be) sunny tomorrow, we (go) hiking. c) If I (have) a car, I (drive) to school. d) If they (leave) earlier, they (not miss) the plane. e) I wish I (can) speak Spanish.",
            solution: [
              "a) « If you mix blue and yellow, you get green. » Vérité générale : présent simple dans les deux propositions.",
              "b) « If it is sunny tomorrow, we will go hiking. » Condition réalisable : présent après if, will dans la principale (et non if it will be).",
              "c) « If I had a car, I would drive to school. » Hypothèse irréelle dans le présent : je n'ai pas de voiture.",
              "d) « If they had left earlier, they wouldn't have missed the plane. » Irréel du passé : ils sont partis tard et ont manqué l'avion.",
              "e) « I wish I could speak Spanish. » Regret sur le présent : I wish + prétérit (can → could).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez la forme correcte : a) If you (will heat / heat) water to 100 °C, it boils. b) If I (see / will see) him, I'll give him your message. c) If I (were / would be) the president, I would ban plastic bags. d) We'll miss the bus (if / unless) we hurry. e) Take your phone (in case / if) you get lost. f) If she (studied / had studied), she would have passed.",
              hint: "Repérez le temps de la principale : il indique la structure, donc le temps de la subordonnée.",
              solution: [
                "a) heat : vérité générale, présent simple après if.",
                "b) see : pas de will après if (first conditional).",
                "c) were : hypothèse irréelle, prétérit modal, were à toutes les personnes.",
                "d) unless : « sauf si nous nous dépêchons » = if we don't hurry.",
                "e) in case : il s'agit d'une précaution (au cas où).",
                "f) had studied : la principale est would have passed, donc irréel du passé, if + past perfect.",
              ],
            },
            {
              level: 2,
              statement: "Voici une suite de faits réels (données fictives). Réécrivez chacun sous la forme d'une phrase à l'irréel du passé, puis ajoutez une phrase avec I wish. Faits : a) Jake didn't set his alarm, so he overslept. b) He overslept, so he missed the first lesson. c) He missed the lesson, so he didn't understand the homework. d) He didn't ask for help, so he got a bad mark.",
              hint: "Inversez le sens de chaque proposition : un fait affirmatif devient négatif dans l'hypothèse, et inversement.",
              solution: [
                "a) « If Jake had set his alarm, he wouldn't have overslept. »",
                "b) « If he hadn't overslept, he wouldn't have missed the first lesson. »",
                "c) « If he hadn't missed the lesson, he would have understood the homework. »",
                "d) « If he had asked for help, he wouldn't have got a bad mark. »",
                "Regret : « Jake wishes he had set his alarm. » (I wish + past perfect pour un regret portant sur le passé ; à la troisième personne : he wishes)",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Imagine that social media disappeared tomorrow. Would the world be a better place? » Rédigez une réponse argumentée de 120 à 150 mots, en employant au moins une phrase de chaque type : condition réalisable, hypothèse irréelle dans le présent, irréel du passé ; ajoutez une structure avec unless ou as long as.",
              hint: "Le sujet est une hypothèse irréelle : la structure if + prétérit, would dominera. Gardez le first conditional pour ce qui peut vraiment se produire.",
              solution: [
                "Étape 1, le plan : 1) avantages imaginés (moins de distraction, moins de cyberharcèlement) ; 2) pertes (liens, information, mobilisation) ; 3) position nuancée.",
                "Étape 2, une proposition rédigée : « If social media disappeared tomorrow, many teenagers would probably sleep better and spend more time with their friends face to face. Cyberbullying would also become less common. However, we would lose a powerful tool. Without these platforms, we would have to find other ways of sharing news quickly. If social networks had not existed in the last decade, many protest movements would never have spread so quickly, and countless people would have felt more isolated during the pandemic. In my view, the problem is not the tool itself but the way we use it. If we teach young people to check their sources and limit their screen time, social media will remain useful. It will become dangerous unless we learn to control it, rather than letting it control us. »",
                "Étape 3, les structures repérées : second conditional (If social media disappeared..., would sleep), third conditional (If social networks had not existed..., would never have spread), first conditional (If we teach..., will remain), unless (it will become dangerous unless we learn).",
                "Étape 4, vérification : environ 130 mots ; aucune forme en will ou would après if ; were ou prétérit dans les hypothèses irréelles.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur les conditionnels.",
            statements: [
              { text: "« If it will rain tomorrow, we'll stay home » est correct.", true: false, why: "On ne met pas will après if pour exprimer une condition : If it rains tomorrow, we'll stay home." },
              { text: "« If I were you, I would apologise » est correct dans la langue soignée.", true: true, why: "Were s'emploie à toutes les personnes dans l'hypothèse irréelle ; la formule sert à donner un conseil." },
              { text: "Unless signifie « if... not ».", true: true, why: "We'll go unless it rains = we'll go if it doesn't rain." },
              { text: "In case et if sont toujours interchangeables.", true: false, why: "In case exprime une précaution : Take a coat in case it gets cold (prenez-le de toute façon)." },
              { text: "« I wish I had more time » exprime un regret sur le présent.", true: true, why: "I wish + prétérit porte sur le présent : je n'ai pas assez de temps maintenant." },
              { text: "Dans « If she had come, she would have enjoyed it », il s'agit d'une hypothèse sur l'avenir.", true: false, why: "If + past perfect, would have + participe passé : c'est l'irréel du passé, elle n'est pas venue." },
              { text: "« Had I known » est une forme soutenue de « If I had known ».", true: true, why: "L'inversion de l'auxiliaire remplace if dans un registre soutenu." },
            ],
          },
          quiz: [
            { q: "If you ___ ice, it melts.", options: ["heat", "will heat", "would heat", "heated"], answer: 0, why: "Vérité générale : présent simple dans les deux propositions (zero conditional)." },
            { q: "If I ___ rich, I would buy a house by the sea.", options: ["am", "will be", "would be", "were"], answer: 3, why: "Hypothèse irréelle dans le présent : if + prétérit modal, were à toutes les personnes." },
            { q: "If they had taken a map, they ___ lost.", options: ["won't get", "would have not got", "don't get", "wouldn't have got"], answer: 3, why: "Irréel du passé : if + past perfect, would have + participe passé." },
            { q: "Take some water ___ you get thirsty during the hike.", options: ["unless", "in case", "provided"], answer: 1, why: "In case exprime la précaution : on prend l'eau de toute façon, au cas où." },
            { q: "Which sentence expresses a regret about the past?", options: ["I wish I knew her.", "I wish I would know her better.", "I wish I know her.", "I wish I had known her."], answer: 3, why: "I wish + past perfect porte sur le passé ; I wish + prétérit porte sur le présent." },
          ],
          trap: "Mettre will ou would dans la subordonnée en if (If it will rain, If I would have money), sur le modèle du français « si j'aurais », qui est lui aussi incorrect.",
          method: "Pour choisir la structure, posez-vous une seule question : l'hypothèse est-elle réalisable (présent, will), imaginaire dans le présent (prétérit, would) ou impossible parce que passée (past perfect, would have) ? Écrivez le temps de la subordonnée d'abord, puis celui de la principale.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'passif-discours-rapporte',
          title: 'La voix passive et le discours rapporté',
          minutes: 35,
          objectives: [
            "Construire la voix passive à tous les temps et avec les modaux (be + participe passé).",
            "Employer les structures passives propres à l'anglais : passif à deux compléments, It is said that, He is said to, have something done.",
            "Rapporter des paroles, des questions et des ordres en appliquant la concordance des temps.",
            "Choisir des verbes introducteurs variés et précis (admit, deny, warn, suggest).",
          ],
          course: [
            {
              heading: "Former la voix passive",
              paragraphs: [
                "À la voix passive, le complément d'objet de la phrase active devient sujet, et le verbe se construit avec be conjugué au temps de la phrase active, suivi du participe passé du verbe : Shakespeare wrote Hamlet → Hamlet was written by Shakespeare. Le temps est porté uniquement par be ; le participe passé ne change jamais.",
                "Voici les principales formes avec le verbe build : présent simple, The bridge is built ; be + -ing, The bridge is being built ; prétérit, The bridge was built ; present perfect, The bridge has been built ; past perfect, The bridge had been built ; futur, The bridge will be built ; avec un modal, The bridge must be built, could have been built.",
                "On emploie le passif quand l'agent (celui qui fait l'action) est inconnu, évident ou sans importance (My bike has been stolen), ou quand on veut mettre en valeur ce qui subit l'action : c'est fréquent dans la presse et dans les textes scientifiques (Three people were injured in the accident ; The samples were analysed). L'agent n'est exprimé avec by que s'il apporte une information : The vaccine was developed by a team of Oxford researchers.",
              ],
              box: { label: "Règle", text: "Passif = be (au temps de la phrase active) + participe passé. They are repairing the road → The road is being repaired. They have cancelled the match → The match has been cancelled. Agent : by, seulement s'il est utile." },
            },
            {
              heading: "Des structures passives propres à l'anglais",
              paragraphs: [
                "Avec les verbes à deux compléments (give, offer, send, show, teach, tell, promise), l'anglais préfère prendre la personne comme sujet du passif : They gave her a prize → She was given a prize (« on lui a donné un prix »). Les verbes prépositionnels gardent leur préposition après le participe : Someone is looking after the children → The children are being looked after. Le passif traduit ainsi très souvent le « on » français : English is spoken here (on parle anglais ici).",
                "Pour rapporter une opinion répandue, la presse emploie deux tournures avec say, believe, think, report, expect : It is said that he is very rich ou He is said to be very rich (on dit qu'il est très riche). Pour un fait antérieur, on emploie l'infinitif passé : The thieves are believed to have left the country (on pense que les voleurs ont quitté le pays). Ces tournures permettent de rapporter une information sans la prendre à son compte.",
                "La structure causative have something done (ou get something done, plus familier) indique que l'on fait faire une action par quelqu'un d'autre : I had my hair cut yesterday (je me suis fait couper les cheveux) ; We are having our kitchen repainted. Comparez avec I cut my hair, qui signifie que je l'ai fait moi-même.",
              ],
              box: { label: "Repère", text: "She was given a prize (on lui a donné un prix). He is said to be rich = It is said that he is rich. They are believed to have fled (on pense qu'ils ont fui). I had my car repaired (j'ai fait réparer ma voiture)." },
            },
            {
              heading: "Rapporter des paroles : la concordance des temps",
              paragraphs: [
                "Say et tell n'ont pas la même construction : on dit say something (She said that she was tired) mais tell someone something (She told me that she was tired). Tell est toujours suivi de la personne à qui l'on parle. That peut être omis à l'oral : She said she was tired.",
                "Quand le verbe introducteur est au passé, les temps reculent d'un cran (backshift) : le présent devient prétérit (« I am tired » → She said she was tired), le prétérit et le present perfect deviennent past perfect (« I have finished » → He said he had finished), will devient would, can devient could, may devient might, must devient had to ou reste must. Les repères de temps et de lieu changent aussi : now → then, today → that day, tomorrow → the next day, yesterday → the day before, last week → the week before, ago → before, here → there, this → that.",
                "La concordance n'est pas obligatoire si le verbe introducteur est au présent (He says he is tired) ou si le fait rapporté est toujours vrai au moment où l'on parle (She told me she lives in Leeds, si elle y vit encore).",
              ],
              box: { label: "Formule", text: "Présent → prétérit ; prétérit, present perfect → past perfect ; will → would ; can → could ; may → might. Now → then ; today → that day ; tomorrow → the next day ; yesterday → the day before ; here → there." },
            },
            {
              heading: "Rapporter des questions et des ordres, varier les verbes",
              paragraphs: [
                "Une question rapportée prend l'ordre de la phrase affirmative (sujet puis verbe), sans auxiliaire do et sans point d'interrogation. Question ouverte : « Where do you live? » → He asked me where I lived. Question fermée : on introduit la question par if ou whether, « Are you ready? » → She asked if (whether) I was ready.",
                "Un ordre ou une demande se rapporte avec tell, ask, order + personne + to + base verbale ; à la forme négative, not to : « Sit down! » → The teacher told us to sit down. « Please don't be late » → She asked me not to be late.",
                "Pour éviter de répéter say, choisissez un verbe introducteur qui traduit l'intention du locuteur, en respectant sa construction : admit + -ing ou that (He admitted lying), deny + -ing (She denied stealing the money), suggest + -ing ou that (He suggested taking a taxi, jamais suggested to take), advise et warn + personne + to (She warned us not to swim there), promise to, refuse to, apologise for + -ing (He apologised for being late).",
              ],
              box: { label: "À retenir", text: "Question rapportée : ordre sujet + verbe, sans do (She asked where I lived). Yes / no : if ou whether. Ordre : told me to / not to. Suggest + -ing ; deny + -ing ; warn sb not to ; apologise for + -ing." },
            },
          ],
          keyPoints: [
            "Passif : be au temps de l'actif + participe passé ; by + agent seulement s'il est utile.",
            "She was given a prize ; English is spoken here : le passif traduit souvent le « on » français.",
            "He is said to be rich / It is said that he is rich ; He is believed to have left.",
            "Have something done : faire faire (I had my bike repaired).",
            "Say something, tell someone something ; backshift si le verbe introducteur est au passé.",
            "Question rapportée : ordre affirmatif, sans do, if / whether ; ordre : told sb (not) to.",
          ],
          example: {
            statement: "Article fictif à réécrire en style journalistique : « Police arrested two men last night. A witness said: “I saw them near the bank yesterday.” The police asked the witness: “Can you describe them?” People think the men have stolen several cars. » Réécrivez en mettant au passif la première et la dernière phrase, et en rapportant les paroles au discours indirect.",
            solution: [
              "Phrase 1 : l'agent (the police) est évident, on le supprime : « Two men were arrested last night. »",
              "Phrase 2 : said est au passé, donc backshift ; saw → had seen, yesterday → the day before : « A witness said that she had seen them near the bank the day before. »",
              "Phrase 3 : question fermée, introduite par if, ordre affirmatif, can → could : « The police asked the witness if she could describe them. »",
              "Phrase 4 : tournure de presse avec think à l'infinitif passé, puisque le vol est antérieur : « The men are thought to have stolen several cars. » (ou « It is thought that the men have stolen several cars. »)",
              "Texte final : « Two men were arrested last night. A witness said that she had seen them near the bank the day before. The police asked her if she could describe them. The men are thought to have stolen several cars. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez ces phrases à la voix passive, en n'exprimant l'agent que s'il est utile : a) Someone stole my bike last week. b) They are building a new hospital in our town. c) J. K. Rowling wrote the Harry Potter books. d) They will announce the results tomorrow. e) You must hand in your homework on Monday. f) They have cancelled the concert.",
              hint: "Repérez d'abord le temps du verbe actif, puis conjuguez be à ce temps avant d'ajouter le participe passé.",
              solution: [
                "a) « My bike was stolen last week. » (prétérit ; someone n'apporte rien)",
                "b) « A new hospital is being built in our town. » (be + -ing → is being built)",
                "c) « The Harry Potter books were written by J. K. Rowling. » (l'agent est une information essentielle)",
                "d) « The results will be announced tomorrow. »",
                "e) « Your homework must be handed in on Monday. » (modal + be + participe passé)",
                "f) « The concert has been cancelled. » (present perfect → has been + participe passé)",
              ],
            },
            {
              level: 2,
              statement: "Rapportez ces paroles prononcées hier par Emma, en commençant par « Emma... » et en choisissant un verbe introducteur précis parmi said, told me, asked me, suggested, warned me, admitted : a) « I'm moving to Canada next month. » b) « Have you ever been to Toronto? » c) « Why don't we have a farewell party? » d) « Don't forget to write to me! » e) « OK, I didn't tell my parents first. » f) « Be careful, the roads will be icy tonight. »",
              hint: "Pensez au recul des temps (am → was, will → would) et aux repères de temps (next month → the following month, tonight → that night).",
              solution: [
                "a) « Emma said (that) she was moving to Canada the following month. »",
                "b) « Emma asked me if I had ever been to Toronto. » (question fermée : if, ordre affirmatif, present perfect → past perfect)",
                "c) « Emma suggested having a farewell party. » (suggest + -ing ; ou suggested that we should have a farewell party)",
                "d) « Emma told me not to forget to write to her. » (ordre négatif : not to ; me → her)",
                "e) « Emma admitted that she hadn't told her parents first. » (ou admitted not telling her parents first)",
                "f) « Emma warned me to be careful because the roads would be icy that night. » (will → would, tonight → that night)",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Voici les notes d'un journaliste (données fictives) : « Yesterday, firefighters rescued 12 hikers in the Lake District. Fog had trapped them. The rescue team leader: “The hikers were not prepared. Always check the weather forecast before you leave!” A hiker: “We are very grateful. We will never go up without a map again.” » Rédigez un court article de presse de 80 à 100 mots, avec un titre, en employant au moins trois formes passives et en rapportant les deux témoignages au discours indirect.",
              hint: "Un titre de presse anglais omet souvent l'auxiliaire du passif (12 hikers rescued...). Variez les verbes introducteurs (explained, warned, promised).",
              solution: [
                "Étape 1, le titre : « Twelve hikers rescued in Lake District fog » (passif de titre, sans auxiliaire).",
                "Étape 2, les faits au passif : were rescued, had been trapped, were taken (ou were found).",
                "Étape 3, une proposition rédigée : « Twelve hikers were rescued by firefighters in the Lake District yesterday after they had been trapped by thick fog. They were taken to a nearby village, where they were given hot drinks. None of them was seriously injured. The leader of the rescue team explained that the group had not been prepared, and he advised walkers to always check the weather forecast before leaving. One of the hikers said that they were very grateful. She promised that they would never go up without a map again. »",
                "Étape 4, vérification : environ 85 mots ; formes passives : were rescued, had been trapped, were taken, were given, was injured ; discours indirect avec backshift (were not prepared → had not been prepared ; will → would) et verbes introducteurs variés (explained, advised, said, promised).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase au discours direct à sa version rapportée (verbe introducteur au passé).",
            pairs: [
              { left: "« I am tired. »", right: "She said she was tired." },
              { left: "« I have finished. »", right: "He said he had finished." },
              { left: "« I will call you. »", right: "She told me she would call me." },
              { left: "« Where do you live? »", right: "He asked me where I lived." },
              { left: "« Are you ready? »", right: "She asked if I was ready." },
              { left: "« Don't move! »", right: "He told us not to move." },
            ],
          },
          quiz: [
            { q: "Choose the correct passive form: « They are repairing the road. »", options: ["The road is being repaired.", "The road is being repairing.", "The road has repaired.", "The road was repairing."], answer: 0, why: "Be + -ing au passif donne is being + participe passé." },
            { q: "« On dit qu'il est très riche » is best translated as...", options: ["It is saying that he is very rich.", "He is said to be very rich.", "He says himself to be very rich."], answer: 1, why: "La tournure be said to + base verbale est la traduction naturelle de « on dit que », fréquente dans la presse." },
            { q: "She ___ me that she was moving to Leeds.", options: ["said", "told", "spoke", "asked"], answer: 1, why: "Tell est suivi de la personne à qui l'on parle : tell someone something ; say n'a pas de complément de personne direct." },
            { q: "« Where are you going? » He asked me...", options: ["where was I going.", "where I was going.", "where am I going.", "where did I go."], answer: 1, why: "Une question rapportée suit l'ordre affirmatif sujet + verbe, avec le recul des temps." },
            { q: "« Let's take a taxi », he said. → He suggested...", options: ["to take a taxi.", "us take a taxi.", "taking a taxi.", "that we took to a taxi."], answer: 2, why: "Suggest se construit avec -ing (ou avec that + should), jamais avec to." },
          ],
          trap: "Conjuguer le participe passé au lieu de be (The road has repaired au lieu de has been repaired), et garder l'ordre interrogatif dans une question rapportée (He asked me where did I live).",
          method: "Pour passer au passif, procédez toujours dans le même ordre : repérez le complément d'objet, faites-en le sujet, identifiez le temps de l'actif, conjuguez be à ce temps, ajoutez le participe passé, puis demandez-vous si l'agent mérite d'être gardé.",
        },
      ],
    },
    /* ==================================================================== */
    /* INNOVATIONS SCIENTIFIQUES ET RESPONSABILITÉ                          */
    /* ==================================================================== */
    {
      id: 'innovations-responsabilite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'intelligence-artificielle',
          title: 'Intelligence artificielle : promesses et dangers',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique de l'intelligence artificielle (algorithm, training data, bias, chatbot, deepfake, automation).",
            "Situer quelques repères historiques et culturels du monde anglophone sur les machines pensantes, de Mary Shelley à Alan Turing.",
            "Exposer les promesses et les dangers de l'IA en exprimant différents degrés de probabilité.",
            "Rédiger une prise de position nuancée sur la responsabilité humaine face à l'IA.",
          ],
          course: [
            {
              heading: "Comprendre ce qu'est l'IA : le vocabulaire de base",
              paragraphs: [
                "L'intelligence artificielle (artificial intelligence, AI) désigne des systèmes informatiques capables d'accomplir des tâches que l'on associe à l'intelligence humaine : reconnaître une image ou une voix, traduire, résumer, prédire, jouer, converser. La plupart des systèmes actuels reposent sur l'apprentissage automatique (machine learning) : au lieu d'être programmés règle par règle, ils apprennent des régularités à partir d'immenses quantités d'exemples, les données d'entraînement (training data).",
                "Un algorithme (an algorithm) est une suite d'instructions permettant de résoudre un problème. Les réseaux de neurones artificiels (artificial neural networks) s'inspirent de façon très simplifiée du cerveau. L'IA générative (generative AI) produit des textes, des images ou des sons nouveaux : c'est le cas des grands modèles de langage (large language models) qui font fonctionner les agents conversationnels (chatbots). Un deepfake est une vidéo ou un enregistrement truqué de façon réaliste grâce à l'IA.",
                "Quelques verbes utiles : to train a model (entraîner un modèle), to automate a task (automatiser une tâche), to replace workers (remplacer des travailleurs), to make decisions (prendre des décisions), to collect data (collecter des données), to regulate (réguler, encadrer par la loi). Et des noms : automation, surveillance, privacy (la vie privée), accountability (le fait de devoir rendre des comptes).",
              ],
              box: { label: "Vocabulaire", text: "Machine learning (apprentissage automatique) ; training data (données d'entraînement) ; bias (biais) ; chatbot (agent conversationnel) ; deepfake (hypertrucage) ; automation (automatisation) ; accountability (responsabilité, obligation de rendre des comptes)." },
            },
            {
              heading: "Des machines pensantes : repères historiques et culturels",
              paragraphs: [
                "L'inquiétude face à la créature qui échappe à son créateur est ancienne dans la culture anglophone. En 1818, la romancière anglaise Mary Shelley publie Frankenstein; or, The Modern Prometheus : le savant Victor Frankenstein donne vie à une créature, puis l'abandonne, avec des conséquences tragiques. Le roman pose déjà la question de la responsabilité du scientifique. En 1942, l'écrivain américain Isaac Asimov formule, dans la nouvelle Runaround, ses trois lois de la robotique, qui imaginent des règles pour qu'un robot ne puisse pas nuire aux humains.",
                "En 1950, le mathématicien britannique Alan Turing publie l'article Computing Machinery and Intelligence, dans lequel il se demande si une machine peut penser et propose un test, le jeu de l'imitation (the imitation game) : une machine réussit si un interlocuteur humain ne parvient pas à la distinguer d'un humain dans une conversation écrite. L'expression artificial intelligence apparaît dans le projet d'un atelier de recherche organisé à Dartmouth College, aux États-Unis, à l'été 1956, à l'initiative notamment de John McCarthy.",
                "Le cinéma a ensuite nourri l'imaginaire : l'ordinateur HAL 9000 de 2001: A Space Odyssey (Stanley Kubrick, 1968), les machines de The Terminator (1984), l'assistant vocal dont s'éprend le héros de Her (Spike Jonze, 2013). Dans Klara and the Sun (2021), Kazuo Ishiguro, prix Nobel de littérature 2017, fait raconter l'histoire par une « amie artificielle » chargée de tenir compagnie à une adolescente. La sortie publique de ChatGPT par l'entreprise américaine OpenAI, en novembre 2022, a fait entrer l'IA générative dans la vie quotidienne.",
              ],
              box: { label: "Repère", text: "1818 : Frankenstein (Mary Shelley). 1942 : les trois lois de la robotique (Isaac Asimov). 1950 : Alan Turing et le jeu de l'imitation. 1956 : atelier de Dartmouth, l'expression artificial intelligence s'impose. 2022 : ChatGPT. 2024 : AI Act européen." },
            },
            {
              heading: "Les promesses de l'IA",
              paragraphs: [
                "Les partisans de l'IA mettent en avant ses apports dans de nombreux domaines. En médecine, des systèmes aident à repérer des anomalies sur des images médicales. En science, le programme AlphaFold, développé par DeepMind, laboratoire fondé à Londres et devenu filiale de Google, prédit la forme des protéines : ses concepteurs Demis Hassabis et John Jumper ont partagé le prix Nobel de chimie 2024 avec le biochimiste américain David Baker. La même année, le prix Nobel de physique a récompensé John Hopfield et Geoffrey Hinton pour des travaux fondateurs sur les réseaux de neurones artificiels.",
                "L'IA peut aussi rendre des services plus quotidiens : traduction instantanée, sous-titrage automatique, outils d'accessibilité pour les personnes malvoyantes ou malentendantes, aide à l'apprentissage, automatisation de tâches répétitives qui libère du temps. Pour exprimer ces espoirs, on emploie des formules comme AI could help doctors..., it is likely to improve..., it may well transform..., it has the potential to...",
              ],
              box: { label: "Formule", text: "Exprimer un espoir ou une probabilité : AI could / may well + base verbale ; AI is likely to (probable) / unlikely to (peu probable) / bound to (certain) + base verbale ; AI has the potential to + base verbale." },
            },
            {
              heading: "Les dangers et la question de la responsabilité",
              paragraphs: [
                "Les critiques soulignent plusieurs risques. Les biais (bias) : un système entraîné sur des données déséquilibrées reproduit, voire amplifie, les discriminations qu'elles contiennent, par exemple dans un logiciel de recrutement. La désinformation : les deepfakes et les textes générés en masse peuvent tromper le public. L'emploi : l'automatisation pourrait faire disparaître ou transformer certains métiers. La vie privée et la surveillance : la reconnaissance faciale permet de suivre des individus. Il faut ajouter la consommation d'énergie des centres de données et les questions de droit d'auteur.",
                "Se pose enfin la question de la responsabilité (accountability) : qui est responsable lorsqu'une décision prise par une machine cause un tort, le concepteur, l'entreprise, l'utilisateur ? Beaucoup de systèmes fonctionnent comme des boîtes noires (black boxes), dont on ne peut pas expliquer simplement les décisions. Pour encadrer ces usages, l'Union européenne a adopté en 2024 l'AI Act, qui classe les systèmes selon leur niveau de risque et interdit certains usages jugés inacceptables. Pour exprimer une crainte : There is a risk that..., I fear that..., it might lead to..., it could threaten...",
              ],
              box: { label: "À retenir", text: "Dangers : bias, disinformation (deepfakes), job losses, surveillance, privacy, energy use. Question clé : accountability (qui est responsable ?). Réponse politique européenne : l'AI Act (2024), fondé sur le niveau de risque." },
            },
          ],
          keyPoints: [
            "AI apprend à partir de training data (machine learning) ; generative AI produit textes et images ; deepfake = trucage réaliste.",
            "Frankenstein (1818) : la responsabilité du créateur ; Asimov (1942) : les lois de la robotique.",
            "Turing (1950) : le jeu de l'imitation ; Dartmouth (1956) : l'expression artificial intelligence.",
            "Promesses : santé, science (AlphaFold, Nobel 2024), traduction, accessibilité.",
            "Dangers : biais, désinformation, emploi, surveillance ; question de l'accountability ; AI Act européen (2024).",
            "Nuancer : is likely to, is bound to, may well, there is a risk that, it might lead to.",
          ],
          example: {
            statement: "Texte d'entraînement inventé : « Last month, a hospital in Manchester started using an AI tool to analyse X-rays. Doctors say it spots some fractures faster than they do. Yet the tool was trained mostly on data from adult patients, and some experts fear it may be less reliable for children. “The machine is a second pair of eyes, not a doctor,” one radiologist insists. » Relevez la promesse, le danger et la position finale, puis résumez le texte en deux phrases anglaises nuancées.",
            solution: [
              "La promesse : l'outil repère certaines fractures plus vite que les médecins (« spots some fractures faster than they do »).",
              "Le danger : un biais lié aux données d'entraînement, surtout adultes ; l'outil pourrait être moins fiable pour les enfants (« may be less reliable »). Le connecteur « Yet » marque l'opposition.",
              "La position finale : le radiologue rappelle que la machine assiste le médecin sans le remplacer ; la responsabilité reste humaine.",
              "Résumé : « An AI tool used in a Manchester hospital may help doctors detect fractures more quickly. However, because it was trained mainly on adult data, it could be less reliable for children, so doctors must remain responsible for the final diagnosis. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : a) les données d'entraînement ; b) un biais ; c) un agent conversationnel ; d) automatiser une tâche ; e) la vie privée ; f) réguler l'intelligence artificielle.",
              hint: "Tous ces mots figurent dans l'encadré de vocabulaire et dans la première partie du cours.",
              solution: [
                "a) training data (data est souvent traité comme un indénombrable : the data is...)",
                "b) a bias (pluriel : biases)",
                "c) a chatbot",
                "d) to automate a task",
                "e) privacy",
                "f) to regulate artificial intelligence (sans article : il s'agit de la notion en général)",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez chaque phrase avec la structure indiquée, sans changer le sens : a) AI will certainly change the job market. (bound to) b) It is probable that AI will improve medical diagnosis. (likely to) c) It is not probable that robots will replace teachers soon. (unlikely to) d) Perhaps deepfakes will influence elections. (might) e) I'm afraid that facial recognition will threaten our privacy. (There is a risk that)",
              hint: "Be likely / unlikely / bound to se construisent avec le sujet de l'action : AI is likely to..., et non It is likely to that...",
              solution: [
                "a) « AI is bound to change the job market. »",
                "b) « AI is likely to improve medical diagnosis. »",
                "c) « Robots are unlikely to replace teachers soon. »",
                "d) « Deepfakes might influence elections. »",
                "e) « There is a risk that facial recognition will threaten our privacy. » (ou « could threaten »)",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Will artificial intelligence do more good than harm? » Rédigez un essai de 150 à 180 mots, avec une introduction, deux paragraphes (promesses, dangers) et une conclusion nuancée. Appuyez-vous sur au moins deux références du cours.",
              hint: "Introduisez le sujet par un fait marquant (ChatGPT en 2022), annoncez la question, puis équilibrez : chaque paragraphe contient une idée, un exemple et un connecteur.",
              solution: [
                "Étape 1, le plan : introduction (l'IA dans la vie quotidienne depuis 2022) ; 1) les promesses (médecine, AlphaFold) ; 2) les dangers (biais, deepfakes, emploi) ; conclusion (tout dépend de la régulation et de la responsabilité humaine).",
                "Étape 2, une proposition rédigée : « Since ChatGPT was released in 2022, artificial intelligence has become part of our daily lives. But will it do more good than harm? On the one hand, AI has enormous potential. It can help doctors detect diseases earlier, and in science, AlphaFold has transformed the study of proteins, earning its creators a Nobel Prize in 2024. It can also make translation and learning more accessible. On the other hand, the risks are real. Systems trained on biased data may discriminate against some people, and deepfakes are likely to make disinformation harder to detect. Moreover, automation could threaten many jobs. As Mary Shelley already suggested in Frankenstein, the problem is not the creature itself but the responsibility of its creator. In conclusion, AI is neither good nor bad in itself: it will do more good than harm only if it is strictly regulated, as the European AI Act attempts to do, and if humans remain accountable for its decisions. »",
                "Étape 3, vérification : environ 160 mots ; références du cours : ChatGPT (2022), AlphaFold et le Nobel 2024, Frankenstein, l'AI Act ; connecteurs : On the one hand, On the other hand, Moreover, In conclusion ; nuance : may, are likely to, could, only if.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces repères dans l'ordre chronologique.",
            items: [
              "Mary Shelley publie Frankenstein; or, The Modern Prometheus",
              "Isaac Asimov formule les trois lois de la robotique",
              "Alan Turing propose le jeu de l'imitation",
              "L'atelier de Dartmouth impose l'expression artificial intelligence",
              "HAL 9000 apparaît au cinéma dans 2001: A Space Odyssey",
              "OpenAI rend ChatGPT accessible au public",
              "L'Union européenne adopte l'AI Act",
            ],
          },
          quiz: [
            { q: "A « deepfake » is...", options: ["a type of extremely deep neural network", "a realistic fake video made with AI", "an error hidden in a training database", "a computer virus"], answer: 1, why: "Un deepfake est un contenu truqué de façon réaliste (vidéo, voix) grâce à l'IA." },
            { q: "Algorithmic bias usually comes from...", options: ["the training data", "the colour of the screen", "the speed of the internet connection"], answer: 0, why: "Un système apprend à partir de ses données d'entraînement : si elles sont déséquilibrées, il reproduit ce déséquilibre." },
            { q: "« AI is bound to change the job market » means that AI will...", options: ["probably not change it", "be forbidden to change it", "certainly change it", "maybe change it"], answer: 2, why: "Be bound to exprime une très forte probabilité, presque une certitude." },
            { q: "Who proposed the « imitation game » in 1950?", options: ["Isaac Asimov", "Mary Shelley", "John McCarthy", "Alan Turing"], answer: 3, why: "Alan Turing le décrit dans l'article Computing Machinery and Intelligence (1950)." },
            { q: "The European AI Act, adopted in 2024, classifies AI systems according to...", options: ["their price", "their level of risk", "their country of origin", "their programming language"], answer: 1, why: "L'AI Act repose sur une approche par les risques : plus un usage est risqué, plus il est encadré, et certains sont interdits." },
          ],
          trap: "Présenter l'IA de façon caricaturale (tout bon ou tout mauvais) avec des affirmations au présent simple, au lieu de nuancer avec les modaux et les expressions de probabilité, et confondre la science-fiction (Terminator) avec les risques réels (biais, désinformation, surveillance).",
          method: "Préparez une fiche en deux colonnes, promises et dangers, avec pour chaque idée un exemple précis (AlphaFold, un logiciel de recrutement biaisé, un deepfake) et une formule de probabilité. Vous disposerez ainsi d'arguments prêts pour un essai comme pour un débat oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'progres-medical-ethique',
          title: 'Progrès médical et questions éthiques',
          minutes: 30,
          objectives: [
            "Situer les grandes avancées médicales et scientifiques liées au monde anglophone, de la vaccination à l'édition du génome.",
            "Identifier les principaux enjeux éthiques : consentement, génie génétique, don d'organes, fin de vie, accès aux soins.",
            "Analyser la manière dont la fiction anglophone interroge le progrès scientifique.",
            "Argumenter sur une question éthique avec le passif modal et les expressions de jugement.",
          ],
          course: [
            {
              heading: "Des avancées qui ont transformé la médecine",
              paragraphs: [
                "En 1796, le médecin anglais Edward Jenner inocule à un enfant la vaccine (cowpox), une maladie bénigne de la vache, et montre qu'elle protège de la variole (smallpox) : c'est le point de départ de la vaccination. Grâce à des campagnes mondiales, l'Organisation mondiale de la santé déclare la variole éradiquée en 1980. En 1928, à Londres, le bactériologiste écossais Alexander Fleming découvre la pénicilline, premier antibiotique, qui sera produit en masse pendant la Seconde Guerre mondiale.",
                "En 1978 naît en Angleterre Louise Brown, premier bébé conçu par fécondation in vitro (in vitro fertilisation, IVF), grâce aux travaux de Robert Edwards et Patrick Steptoe. En 1996, en Écosse, l'Institut Roslin obtient Dolly, la brebis, premier mammifère cloné à partir d'une cellule adulte. Le séquençage du génome humain (Human Genome Project), projet international, est achevé en 2003.",
                "Depuis 2012, la technique CRISPR-Cas9, mise au point par l'Américaine Jennifer Doudna et la Française Emmanuelle Charpentier, permet de modifier l'ADN de façon précise, comme avec des « ciseaux génétiques » ; elle leur a valu le prix Nobel de chimie 2020. Enfin, les vaccins à ARN messager (mRNA vaccines), utilisés contre la Covid-19, reposent sur les travaux de Katalin Karikó et Drew Weissman, prix Nobel de médecine 2023.",
              ],
              box: { label: "Repère", text: "1796 : Jenner, premier vaccin (variole). 1928 : Fleming, pénicilline. 1978 : Louise Brown, premier bébé FIV. 1996 : Dolly, premier mammifère cloné à partir d'une cellule adulte. 2003 : génome humain séquencé. 2012 : CRISPR-Cas9 (Nobel 2020)." },
            },
            {
              heading: "Les grandes questions éthiques",
              paragraphs: [
                "Le consentement éclairé (informed consent) est un principe fondamental : un patient doit accepter un traitement ou une recherche après avoir été clairement informé. L'histoire d'Henrietta Lacks le montre a contrario : en 1951, aux États-Unis, des cellules prélevées sur cette patiente afro-américaine, sans qu'elle le sache, ont donné la lignée HeLa, utilisée dans d'innombrables recherches. La journaliste Rebecca Skloot a raconté son histoire dans The Immortal Life of Henrietta Lacks (2010).",
                "Le génie génétique (genetic engineering) soulève la crainte des « bébés sur mesure » (designer babies) : modifier des embryons pour éviter une maladie, mais aussi, peut-être, pour choisir des caractéristiques. En 2018, le chercheur chinois He Jiankui a annoncé la naissance de jumelles dont il avait modifié le génome ; la communauté scientifique l'a condamné et il a été emprisonné en Chine. D'autres débats portent sur le don d'organes (organ donation : faut-il un consentement présumé ?), sur la fin de vie (assisted dying, autorisé sous conditions dans plusieurs États américains, dont l'Oregon depuis 1997) et sur l'accès aux soins, car les traitements innovants coûtent très cher.",
              ],
              box: { label: "Vocabulaire", text: "Informed consent (consentement éclairé) ; genetic engineering (génie génétique) ; gene editing (édition du génome) ; designer babies (bébés sur mesure) ; organ donation (don d'organes) ; assisted dying (aide à mourir) ; clinical trial (essai clinique)." },
            },
            {
              heading: "La fiction, un laboratoire des dilemmes éthiques",
              paragraphs: [
                "La littérature et le cinéma anglophones imaginent les dérives possibles du progrès. Frankenstein (Mary Shelley, 1818) a donné naissance à la figure du savant qui joue à Dieu. Dans Brave New World (1932), Aldous Huxley décrit une société où les êtres humains sont produits en laboratoire et conditionnés selon leur caste. Le film Gattaca (Andrew Niccol, 1997) montre un monde où l'on est jugé sur son ADN : le héros, conçu naturellement, est considéré comme inférieur.",
                "Dans Never Let Me Go (2005), Kazuo Ishiguro suit des jeunes gens élevés dans le pensionnat de Hailsham, en Angleterre, avant de découvrir qu'ils sont des clones destinés à donner leurs organes. Le roman, raconté par l'une d'eux, Kathy, pose avec retenue la question de la dignité humaine. Ces œuvres ne condamnent pas la science en tant que telle : elles interrogent les limites que la société doit se donner.",
              ],
              box: { label: "À retenir", text: "Frankenstein (1818) : le savant qui « joue à Dieu ». Brave New World (1932) : humains produits en laboratoire. Gattaca (1997) : discrimination génétique. Never Let Me Go (2005) : clones donneurs d'organes." },
            },
            {
              heading: "Argumenter sur une question éthique",
              paragraphs: [
                "Pour poser une question éthique, on emploie souvent le passif avec un modal (modal + be + participe passé) : Should gene editing be allowed? Human cloning must be banned. Organ donation could be made automatic. Pour juger : It is (un)ethical to..., It is morally wrong / acceptable to..., Scientists have no right to..., We have a duty to...",
                "Quelques arguments types, en anglais : playing God (jouer à Dieu, dépasser les limites humaines) ; the slippery slope argument (l'argument de la pente glissante : une première autorisation mènerait à des dérives) ; the end does not justify the means (la fin ne justifie pas les moyens) ; saving lives (sauver des vies) ; the right to choose (le droit de choisir). Une argumentation nuancée reconnaît la valeur du progrès tout en posant des limites : Gene editing could cure serious diseases, provided that it is strictly regulated.",
              ],
              box: { label: "Formule", text: "Passif modal : modal + be + participe passé (Should cloning be banned? It must be regulated). Juger : It is (un)ethical / morally wrong to + base verbale. Nuancer : provided that, as long as, only if." },
            },
          ],
          keyPoints: [
            "Jenner (1796) vaccin ; Fleming (1928) pénicilline ; Louise Brown (1978) FIV ; Dolly (1996) clonage ; CRISPR (2012, Nobel 2020).",
            "Informed consent : un principe bafoué dans le cas d'Henrietta Lacks (1951).",
            "Débats : designer babies, gene editing, organ donation, assisted dying, accès aux soins.",
            "Fiction : Frankenstein, Brave New World, Gattaca, Never Let Me Go.",
            "Passif modal : Should gene editing be allowed? It must be regulated.",
            "Arguments : playing God, slippery slope, saving lives, the right to choose.",
          ],
          example: {
            statement: "Question de débat : « Should parents be allowed to edit their baby's genes? » Proposez un argument pour, un argument contre et une position nuancée, chacun en une phrase anglaise, en employant au moins un passif modal.",
            solution: [
              "Repérer la forme de la question : un passif modal (Should + sujet + be + participe passé), à reprendre dans la réponse.",
              "Argument pour : « Gene editing could be used to prevent serious hereditary diseases, which would save lives and reduce suffering. »",
              "Argument contre : « If parents were allowed to choose their baby's eye colour or intelligence, we would be playing God, and this could lead to a society divided by genetics, as in Gattaca. »",
              "Position nuancée : « Gene editing should be allowed only to treat serious diseases, and it must be strictly regulated by independent ethics committees. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'avancée correspondante : 1796, 1928, 1978, 1996, 2003. Avancées : a) le séquençage complet du génome humain ; b) la naissance de Dolly ; c) le premier vaccin ; d) la découverte de la pénicilline ; e) la naissance du premier bébé FIV.",
              hint: "Rangez d'abord les avancées dans l'ordre logique : on vaccine avant de connaître les antibiotiques, et l'on clone un animal avant de séquencer entièrement le génome humain.",
              solution: [
                "1796 : c) le premier vaccin, par Edward Jenner, contre la variole.",
                "1928 : d) la découverte de la pénicilline par Alexander Fleming.",
                "1978 : e) la naissance de Louise Brown, premier bébé FIV.",
                "1996 : b) la naissance de Dolly, premier mammifère cloné à partir d'une cellule adulte.",
                "2003 : a) l'achèvement du séquençage du génome humain.",
              ],
            },
            {
              level: 2,
              statement: "Transformez ces opinions en phrases au passif modal : a) Governments should ban human cloning. b) Doctors must inform patients before any operation. c) We could make organ donation automatic. d) Scientists ought to test new treatments carefully. e) Should we allow assisted dying?",
              hint: "Le complément d'objet devient sujet ; gardez le modal, ajoutez be et le participe passé.",
              solution: [
                "a) « Human cloning should be banned (by governments). »",
                "b) « Patients must be informed before any operation. »",
                "c) « Organ donation could be made automatic. »",
                "d) « New treatments ought to be tested carefully. »",
                "e) « Should assisted dying be allowed? » (question : le modal passe devant le sujet)",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Medical progress: should science have limits? » Rédigez un essai de 150 à 180 mots, en vous appuyant sur au moins un exemple historique et une œuvre de fiction étudiés, et en employant au moins deux passifs modaux.",
              hint: "Évitez la réponse catégorique : reconnaissez les bienfaits, puis montrez pourquoi des limites sont nécessaires, et précisez lesquelles.",
              solution: [
                "Étape 1, le plan : introduction (progrès spectaculaires, questions nouvelles) ; 1) les bienfaits (vaccins, pénicilline, CRISPR) ; 2) les dérives possibles (Henrietta Lacks, He Jiankui, Never Let Me Go) ; conclusion (des limites fondées sur le consentement et la dignité).",
                "Étape 2, une proposition rédigée : « From Edward Jenner's first vaccine in 1796 to gene editing today, medical progress has saved millions of lives. Yet each new discovery raises difficult questions. Should scientists be free to do everything that technology makes possible? On the one hand, limiting research could be dangerous. Without penicillin or vaccines, many diseases would still kill millions, and CRISPR may one day cure serious genetic disorders. On the other hand, history shows what happens when science ignores ethics. In 1951, Henrietta Lacks's cells were taken without her consent, and in 2018 a Chinese scientist edited the genes of twin babies, provoking worldwide condemnation. Fiction warns us too: in Never Let Me Go, Kazuo Ishiguro imagines clones raised only to donate their organs. In my opinion, science should not be stopped, but it must be guided by clear principles. Patients must always be informed, and human dignity should never be sacrificed in the name of progress. »",
                "Étape 3, vérification : environ 155 mots ; exemples historiques (Jenner, Henrietta Lacks, 2018) et fiction (Never Let Me Go) ; passifs modaux : should not be stopped, must be guided, must be informed, should never be sacrificed.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque nom à l'avancée ou à l'affaire qui l'a rendu célèbre.",
            pairs: [
              { left: "Edward Jenner (1796)", right: "le premier vaccin, contre la variole" },
              { left: "Alexander Fleming (1928)", right: "la découverte de la pénicilline" },
              { left: "Louise Brown (1978)", right: "le premier bébé né d'une fécondation in vitro" },
              { left: "Dolly (1996)", right: "le premier mammifère cloné à partir d'une cellule adulte" },
              { left: "Doudna et Charpentier", right: "les ciseaux génétiques CRISPR-Cas9" },
              { left: "Henrietta Lacks (1951)", right: "des cellules prélevées sans consentement" },
            ],
          },
          quiz: [
            { q: "« Informed consent » means that a patient...", options: ["has paid for the treatment in advance", "agrees after being clearly informed", "refuses all treatment", "signs a form without reading it carefully"], answer: 1, why: "Le consentement éclairé suppose une information claire avant tout accord du patient." },
            { q: "Dolly the sheep, born in 1996, was famous because she was...", options: ["the first animal sent into space", "cloned from an adult cell", "resistant to every known disease"], answer: 1, why: "Dolly est le premier mammifère cloné à partir d'une cellule adulte, à l'Institut Roslin, en Écosse." },
            { q: "Which modal passive is correct?", options: ["Should gene editing be allowed?", "Should gene editing allowed?", "Should gene editing being allowed?", "Should be gene editing allowed?"], answer: 0, why: "Passif modal à la forme interrogative : modal + sujet + be + participe passé." },
            { q: "In Kazuo Ishiguro's Never Let Me Go, the students of Hailsham...", options: ["are medical students in a London hospital", "are robots built to replace human workers", "are refugees hiding from a civil war", "are clones raised to donate their organs"], answer: 3, why: "Kathy et ses camarades découvrent qu'ils sont des clones destinés au don d'organes." },
            { q: "The « slippery slope » argument says that...", options: ["science always progresses slowly", "ethics committees are too strict about research", "one first step will lead to worse ones"], answer: 2, why: "L'argument de la pente glissante affirme qu'une première autorisation entraînera des dérives de plus en plus graves." },
          ],
          trap: "Oublier be dans le passif modal (Should gene editing allowed?) et, sur le fond, attribuer à la fiction la valeur de faits : Gattaca ou Never Let Me Go servent d'exemples pour réfléchir, pas de preuves.",
          method: "Pour chaque débat éthique, préparez trois éléments : un fait réel daté (Dolly, 1996), une œuvre de fiction qui l'éclaire (Never Let Me Go) et une formule de position nuancée (should be allowed only if...). Cette combinaison donne de la profondeur à un essai comme à une prise de parole.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vie-numerique',
          title: 'Réseaux sociaux et vie numérique',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique des réseaux sociaux et de la vie numérique (feed, to scroll, to go viral, filter bubble, misinformation).",
            "Présenter les opportunités et les risques des réseaux sociaux, en s'appuyant sur des exemples du monde anglophone.",
            "Distinguer et employer used to, be used to et get used to.",
            "Débattre de la régulation des réseaux sociaux de façon argumentée.",
          ],
          course: [
            {
              heading: "Le vocabulaire de la vie connectée",
              paragraphs: [
                "Les réseaux sociaux (social media, social networks) sont des plateformes (platforms) où l'on publie (to post), partage (to share), aime (to like) et commente des contenus. On suit des comptes (to follow an account) et l'on a des abonnés (followers). Le fil d'actualité (the feed) que l'on fait défiler (to scroll) est organisé par un algorithme qui recommande des contenus. Un contenu qui se diffuse très rapidement devient viral (to go viral). Les influenceurs (influencers) vivent parfois de partenariats avec des marques.",
                "Quelques repères : Facebook est créé en 2004 par Mark Zuckerberg, alors étudiant à Harvard ; Instagram est lancé en 2010 ; YouTube en 2005. Le temps d'écran (screen time), les notifications et la déconnexion volontaire (digital detox) sont au cœur des débats. Pour parler de soi : I spend too much time online ; I check my phone first thing in the morning ; I've turned off my notifications.",
              ],
              box: { label: "Vocabulaire", text: "To post, to share, to like, to follow, to scroll ; the feed (le fil) ; followers (abonnés) ; to go viral ; screen time (temps d'écran) ; digital detox (déconnexion) ; online / offline (en ligne / hors ligne)." },
            },
            {
              heading: "Les risques : santé mentale, désinformation, vie privée",
              paragraphs: [
                "Le cyberharcèlement (cyberbullying) poursuit les victimes jusque chez elles. La comparaison permanente avec des images retouchées peut nuire à l'estime de soi, et la peur de rater quelque chose (FOMO, fear of missing out) pousse à rester connecté. Dans The Anxious Generation (2024), le psychologue américain Jonathan Haidt attribue la dégradation de la santé mentale des adolescents à une enfance passée sur smartphone ; sa thèse est discutée par d'autres chercheurs, qui jugent le lien de cause à effet moins établi.",
                "La désinformation est un autre danger. L'anglais distingue misinformation (une information fausse partagée sans intention de tromper) et disinformation (une information fausse diffusée délibérément pour tromper). Les fake news circulent d'autant mieux que les algorithmes nous enferment dans une bulle de filtres (filter bubble, expression popularisée par Eli Pariser en 2011) ou une chambre d'écho (echo chamber), où l'on ne rencontre que des opinions semblables aux siennes.",
                "Enfin, nos données personnelles (personal data) ont une valeur commerciale. En 2018, le scandale Cambridge Analytica a révélé que les données de millions d'utilisateurs de Facebook avaient été récupérées à leur insu à des fins de ciblage politique. La protection de la vie privée (privacy) est devenue un enjeu démocratique.",
              ],
              box: { label: "Définition", text: "Misinformation : information fausse partagée sans intention de tromper. Disinformation : information fausse diffusée délibérément. Filter bubble : bulle créée par des algorithmes qui ne montrent que des contenus proches de nos goûts." },
            },
            {
              heading: "Les opportunités et les réponses politiques",
              paragraphs: [
                "Les réseaux sociaux ont aussi des atouts : garder le lien avec des proches éloignés, apprendre (tutoriels, vulgarisation), créer et se faire connaître, se mobiliser. Des mouvements comme Black Lives Matter (né en 2013) ou #MeToo (devenu viral en 2017, à partir d'une expression employée dès 2006 par la militante Tarana Burke) ont montré la force d'un mot-dièse (hashtag) pour rendre visibles des injustices.",
                "Plusieurs pays anglophones légifèrent. Au Royaume-Uni, l'Online Safety Act (2023) impose aux plateformes de protéger les utilisateurs, en particulier les enfants, contre les contenus illégaux ou dangereux. En Australie, une loi adoptée fin 2024 fixe à 16 ans l'âge minimum pour avoir un compte sur les principaux réseaux sociaux ; elle s'applique depuis décembre 2025. Ces mesures posent une question de fond : protéger les jeunes ou respecter leur liberté et leur responsabilité ?",
              ],
              box: { label: "Repère", text: "2004 : Facebook. 2011 : Eli Pariser popularise la filter bubble. 2017 : #MeToo devient viral. 2018 : scandale Cambridge Analytica. 2023 : Online Safety Act au Royaume-Uni. Fin 2024 : l'Australie fixe à 16 ans l'âge minimum, en vigueur depuis décembre 2025." },
            },
            {
              heading: "Parler des habitudes : used to, be used to, get used to",
              paragraphs: [
                "Used to + base verbale exprime une habitude ou un état passé qui n'existe plus : My parents used to phone their friends on a landline (ce n'est plus le cas). Négation : didn't use to ; question : Did you use to...? Pour une action répétée dans le passé, would est aussi possible (When I was ten, I would spend hours playing outside), mais pas pour un état (on dit I used to have long hair, et non I would have long hair).",
                "Be used to + nom ou verbe en -ing signifie « être habitué à » : Teenagers today are used to texting rather than calling. Get used to + nom ou -ing signifie « s'habituer à » (le processus) : It took me weeks to get used to living without my phone. Le to est ici une préposition, d'où la forme en -ing : on dit I'm used to getting up early, jamais I'm used to get up early.",
              ],
              box: { label: "Règle", text: "Used to + base verbale : habitude passée révolue (I used to play). Be used to + -ing : être habitué (I'm used to working online). Get used to + -ing : s'habituer (I'm getting used to living offline)." },
            },
          ],
          keyPoints: [
            "Feed, to scroll, to post, to go viral, followers, influencers, screen time, digital detox.",
            "Risques : cyberbullying, FOMO, santé mentale (thèse de Jonathan Haidt, discutée), données personnelles.",
            "Misinformation (sans intention) ≠ disinformation (délibérée) ; filter bubble, echo chamber.",
            "Cambridge Analytica (2018) ; Online Safety Act britannique (2023) ; âge minimum de 16 ans en Australie.",
            "Atouts : lien, apprentissage, création, mobilisation (Black Lives Matter, #MeToo).",
            "Used to + base verbale (habitude révolue) ; be / get used to + -ing (être habitué, s'habituer).",
          ],
          example: {
            statement: "Complétez avec used to, be used to ou get used to à la forme correcte : a) When I was a child, I ___ watch cartoons every Saturday. b) My grandmother ___ (not) using a smartphone, so she asks me for help. c) After the digital detox week, it was hard to ___ checking my phone less. d) ___ you ___ write letters before the internet? e) Now I ___ studying with online tools.",
            solution: [
              "a) « used to watch » : habitude passée révolue, base verbale.",
              "b) « isn't used to using » : elle n'est pas habituée ; be used to + -ing.",
              "c) « get used to checking » : le processus d'adaptation ; get used to + -ing.",
              "d) « Did you use to write » : à la forme interrogative, did + use to, sans -d.",
              "e) « am used to studying » : habitude actuelle acquise ; be used to + -ing.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : a) faire défiler son fil d'actualité ; b) devenir viral ; c) le cyberharcèlement ; d) le temps d'écran ; e) une bulle de filtres ; f) les données personnelles.",
              hint: "Ces expressions figurent dans les deux premières parties du cours et dans les encadrés.",
              solution: [
                "a) to scroll through one's feed",
                "b) to go viral",
                "c) cyberbullying",
                "d) screen time",
                "e) a filter bubble",
                "f) personal data",
              ],
            },
            {
              level: 2,
              statement: "Classez ces exemples (données fictives) en misinformation ou disinformation, et justifiez : a) A teenager shares a fake photo of a shark on a flooded motorway, believing it is real. b) A fake account invents a story about a candidate to make him lose an election. c) A grandfather forwards a false health tip he sincerely thinks is useful. d) A company pays people to post fake negative reviews about a competitor.",
              hint: "Le critère n'est pas la fausseté (toutes ces informations sont fausses) mais l'intention de tromper.",
              solution: [
                "a) Misinformation : l'adolescent croit l'image vraie, il n'a pas l'intention de tromper.",
                "b) Disinformation : l'histoire est inventée délibérément pour manipuler les électeurs.",
                "c) Misinformation : le grand-père est sincère.",
                "d) Disinformation : les faux avis sont payés pour nuire volontairement à un concurrent.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Should social media be banned for under-16s, as in Australia? » Rédigez un article de 150 à 180 mots pour le site de votre lycée, avec un titre, en présentant les deux points de vue avant de donner le vôtre. Employez au moins une fois used to ou be used to.",
              hint: "Un article de blog a un titre accrocheur et s'adresse aux lecteurs ; présentez la mesure australienne avec exactitude (loi de fin 2024, en vigueur depuis décembre 2025).",
              solution: [
                "Étape 1, le plan : titre ; présentation de la mesure ; arguments pour (santé mentale, cyberharcèlement, sommeil) ; arguments contre (liberté, contournement, rôle de l'éducation) ; opinion nuancée.",
                "Étape 2, une proposition rédigée : « Too young to scroll? Since December 2025, Australians under 16 have not been allowed to have accounts on the main social media platforms. Could such a ban work here? Supporters of the law argue that young teenagers are not ready for the pressure of social networks. They point to cyberbullying, lack of sleep and constant comparison with others, which may damage mental health. Before smartphones, teenagers used to meet their friends outside rather than online, and many parents would like to see that again. However, critics say that a ban is easy to get around: a fake date of birth is enough. Besides, young people today are used to learning, creating and campaigning online, and a ban could cut them off from useful communities. In my opinion, banning is less effective than educating. Schools should teach pupils how algorithms work and how to protect their privacy, so that they become responsible users rather than passive scrollers. »",
                "Étape 3, vérification : environ 155 mots ; titre ; les deux points de vue reliés par However ; used to (habitude révolue) et are used to learning (be used to + -ing) ; le fait australien est exact.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vie numérique et grammaire de l'habitude.",
            statements: [
              { text: "Misinformation et disinformation sont des synonymes parfaits.", true: false, why: "La disinformation est délibérée ; la misinformation est partagée sans intention de tromper." },
              { text: "« I used to play video games every day » signifie que je joue encore tous les jours.", true: false, why: "Used to exprime une habitude passée qui n'existe plus." },
              { text: "« I'm used to getting up early » signifie « j'ai l'habitude de me lever tôt ».", true: true, why: "Be used to + -ing signifie être habitué à." },
              { text: "« I'm used to get up early » est correct.", true: false, why: "Dans be used to, to est une préposition : il faut le verbe en -ing (getting)." },
              { text: "Une filter bubble est produite par des algorithmes qui montrent des contenus proches de nos goûts.", true: true, why: "C'est l'idée popularisée par Eli Pariser en 2011." },
              { text: "Le scandale Cambridge Analytica (2018) concernait les données personnelles d'utilisateurs de Facebook.", true: true, why: "Des données de millions d'utilisateurs avaient été récupérées à leur insu à des fins de ciblage politique." },
              { text: "To go viral signifie être infecté par un virus informatique.", true: false, why: "To go viral signifie se diffuser très rapidement sur internet." },
            ],
          },
          quiz: [
            { q: "When I was a child, I ___ play outside every evening.", options: ["used to", "am used to", "was used to", "get used to"], answer: 0, why: "Used to + base verbale exprime une habitude passée révolue." },
            { q: "She has lived in London for years: she ___ the noise now.", options: ["used to", "is used to", "got used", "was using to"], answer: 1, why: "Be used to + nom signifie être habitué à : c'est un état actuel." },
            { q: "Someone who deliberately spreads false information to deceive people is spreading...", options: ["misinformation", "disinformation", "information overload"], answer: 1, why: "Disinformation implique une intention de tromper, contrairement à misinformation." },
            { q: "« FOMO » stands for...", options: ["Friends Online, Messages Offline", "Follow Only My Opinions", "Free Online Media Office", "Fear Of Missing Out"], answer: 3, why: "FOMO, fear of missing out, est la peur de rater quelque chose, qui pousse à rester connecté." },
            { q: "Which country set a minimum age of 16 for the main social media platforms, in force since December 2025?", options: ["the United Kingdom", "the United States", "Australia", "Canada"], answer: 2, why: "L'Australie a adopté cette loi fin 2024 ; elle s'applique depuis décembre 2025." },
          ],
          trap: "Confondre used to + base verbale (habitude révolue) et be used to + -ing (être habitué), en écrivant I'm used to get up early, et employer misinformation et disinformation comme des synonymes.",
          method: "Pour choisir entre les trois structures, demandez-vous : s'agit-il d'un passé terminé (used to + base verbale), d'un état d'habitude (be used to + -ing) ou d'une adaptation en cours (get used to + -ing) ? Puis vérifiez la forme : après be ou get used to, toujours un nom ou un verbe en -ing.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ÊTRE HUMAIN ET LA NATURE                                           */
    /* ==================================================================== */
    {
      id: 'humain-nature',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'climat-engagement',
          title: 'Le changement climatique et l’engagement des jeunes',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique du changement climatique (greenhouse gases, fossil fuels, carbon footprint, sea-level rise, renewable energy).",
            "Présenter des formes d'engagement des jeunes dans le monde anglophone et au-delà, de la grève scolaire au recours en justice.",
            "Exprimer l'urgence et la nécessité d'agir avec It's (high) time, had better, need to.",
            "Rédiger un discours ou un article engagé, argumenté et nuancé.",
          ],
          course: [
            {
              heading: "Comprendre le changement climatique : le vocabulaire",
              paragraphs: [
                "L'effet de serre (the greenhouse effect) est un phénomène naturel : certains gaz de l'atmosphère retiennent une partie de la chaleur du Soleil. Depuis la révolution industrielle, la combustion des énergies fossiles (fossil fuels : coal, oil and gas) a fortement augmenté la concentration de gaz à effet de serre (greenhouse gases), surtout le dioxyde de carbone (CO₂) et le méthane. Il en résulte un réchauffement climatique (global warming) qui dérègle le climat (climate change).",
                "Les conséquences sont multiples : vagues de chaleur (heatwaves), sécheresses (droughts), inondations (floods), incendies de forêt (wildfires), fonte des glaces (melting ice), élévation du niveau de la mer (sea-level rise) et perte de biodiversité (biodiversity loss). Pour agir, on parle de réduire les émissions (to cut emissions), de passer aux énergies renouvelables (renewable energy : solar, wind), de réduire son empreinte carbone (carbon footprint).",
                "Deux repères institutionnels. Le GIEC (en anglais IPCC, Intergovernmental Panel on Climate Change), créé en 1988, synthétise l'état des connaissances scientifiques. L'accord de Paris, adopté en 2015 lors de la COP21, vise à contenir le réchauffement nettement en dessous de 2 °C par rapport à l'ère préindustrielle, et à poursuivre les efforts pour le limiter à 1,5 °C.",
              ],
              box: { label: "Vocabulaire", text: "Greenhouse gases (gaz à effet de serre) ; fossil fuels (énergies fossiles) ; carbon footprint (empreinte carbone) ; to cut emissions (réduire les émissions) ; renewable energy (énergies renouvelables) ; sea-level rise (élévation du niveau de la mer)." },
            },
            {
              heading: "Une génération qui s'engage",
              paragraphs: [
                "En août 2018, la jeune Suédoise Greta Thunberg, alors âgée de 15 ans, s'assoit seule devant le Parlement de Stockholm avec une pancarte annonçant une grève de l'école pour le climat. Son geste lance le mouvement Fridays for Future : des élèves du monde entier manquent les cours le vendredi pour exiger des mesures. En septembre 2019, des grèves mondiales pour le climat rassemblent des millions de personnes. La même année, devant le sommet de l'ONU sur le climat, elle accuse les dirigeants de trahir les jeunes, avec une formule restée célèbre : « How dare you? »",
                "Le mouvement est aussi porté par des voix du Sud. L'Ougandaise Vanessa Nakate, qui commence à manifester en 2019, rappelle que l'Afrique émet peu mais subit durement les conséquences du réchauffement. En janvier 2020, elle est coupée d'une photo de presse prise au forum de Davos où elle figurait avec d'autres militantes blanches : l'incident relance le débat sur l'invisibilité des militants africains.",
                "Les formes d'engagement sont variées : manifestations et grèves, pétitions, choix de consommation (moins de viande, moins d'avion), désobéissance civile non violente, comme celle du mouvement Extinction Rebellion, lancé au Royaume-Uni en 2018. Il existe aussi des recours en justice : en 2023, dans l'affaire Held v. Montana, un tribunal américain a donné raison à seize jeunes plaignants qui invoquaient le droit à un environnement sain inscrit dans la Constitution de cet État.",
              ],
              box: { label: "Repère", text: "1988 : création du GIEC (IPCC). 2015 : accord de Paris (COP21). 2018 : grève scolaire de Greta Thunberg ; naissance d'Extinction Rebellion. 2019 : grèves mondiales pour le climat. 2023 : Held v. Montana, victoire de jeunes plaignants." },
            },
            {
              heading: "Les débats : responsabilité, justice, efficacité",
              paragraphs: [
                "Qui doit agir ? Certains insistent sur la responsabilité individuelle (individual responsibility : trier, consommer moins, éviter l'avion), d'autres sur la responsabilité collective des États et des entreprises (collective responsibility), en rappelant que les gestes individuels ne suffisent pas sans changement des systèmes de production. Le greenwashing (écoblanchiment) désigne les pratiques d'entreprises qui se donnent une image plus écologique qu'elles ne le sont.",
                "La justice climatique (climate justice) souligne que les pays et les personnes qui ont le moins contribué aux émissions sont souvent les plus exposés, et que les jeunes générations hériteront des conséquences. Enfin, les méthodes des militants font débat : bloquer une route ou interrompre un événement attire l'attention, mais peut aussi agacer le public. L'écoanxiété (eco-anxiety), cette inquiétude face à l'avenir de la planète, touche de nombreux jeunes.",
              ],
              box: { label: "Définition", text: "Climate justice : idée selon laquelle les efforts et les aides doivent tenir compte des inégalités face au changement climatique. Greenwashing : communication qui donne une image écologique trompeuse. Eco-anxiety : anxiété liée à l'avenir de la planète." },
            },
            {
              heading: "Exprimer l'urgence : It's (high) time, had better, need to",
              paragraphs: [
                "It's time to + base verbale exprime qu'il est temps d'agir : It's time to act. Pour insister sur le retard, on emploie It's (high) time + sujet + prétérit : It's high time governments listened to scientists (il est grand temps que les gouvernements écoutent). Le prétérit n'exprime pas ici le passé, mais l'écart entre ce qui devrait être et ce qui est, comme dans If only ou I wish.",
                "Had better (souvent contracté en 'd better) + base verbale exprime un conseil pressant, avec l'idée d'un risque : We'd better act now, or it will be too late. Négation : had better not (You'd better not ignore the warnings). Need to exprime la nécessité (We need to cut emissions). On peut aussi combiner urgence et conditionnel : If we don't act now, our children will pay the price ; Unless we change our habits, sea levels will keep rising.",
              ],
              box: { label: "Règle", text: "It's time to + base verbale. It's (high) time + sujet + prétérit (It's high time we acted). Had better (not) + base verbale (We'd better hurry). Need to + base verbale (We need to change)." },
            },
          ],
          keyPoints: [
            "Greenhouse gases, fossil fuels, global warming, carbon footprint, sea-level rise, renewable energy.",
            "GIEC / IPCC (1988) ; accord de Paris (2015) : nettement moins de 2 °C, effort vers 1,5 °C.",
            "Greta Thunberg (2018), Fridays for Future ; Vanessa Nakate et les voix du Sud ; Extinction Rebellion (2018).",
            "Débats : responsabilité individuelle ou collective, greenwashing, climate justice, eco-anxiety.",
            "It's (high) time + sujet + prétérit ; had better + base verbale ; need to.",
          ],
          example: {
            statement: "Transformez ces phrases pour exprimer davantage l'urgence, avec la structure indiquée : a) Governments must take climate change seriously. (It's high time) b) We should leave the car at home. (had better) c) Our school must install solar panels. (It's time) d) If we continue like this, the planet will suffer. (Unless)",
            solution: [
              "a) It's high time + sujet + prétérit : « It's high time governments took climate change seriously. »",
              "b) Had better + base verbale : « We'd better leave the car at home. »",
              "c) It's time + for + complément + to + base verbale, ou It's time + sujet + prétérit : « It's time for our school to install solar panels. » ou « It's time our school installed solar panels. »",
              "d) Unless = if not : il faut inverser le sens de la condition : « Unless we change our habits, the planet will suffer. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : a) les énergies fossiles ; b) une vague de chaleur ; c) réduire les émissions ; d) l'empreinte carbone ; e) les énergies renouvelables ; f) l'élévation du niveau de la mer.",
              hint: "Attention : energy est le plus souvent indénombrable en anglais (renewable energy), alors que le français emploie le pluriel.",
              solution: [
                "a) fossil fuels",
                "b) a heatwave",
                "c) to cut (ou to reduce) emissions",
                "d) carbon footprint",
                "e) renewable energy (indénombrable, sans -s)",
                "f) sea-level rise",
              ],
            },
            {
              level: 2,
              statement: "Mettez le verbe entre parenthèses à la forme correcte : a) It's high time world leaders (stop) making promises they don't keep. b) You'd better (not / fly) to Spain for the weekend. c) It's time (act). d) We need (rethink) the way we eat. e) Unless we (reduce) emissions, temperatures will keep rising. f) It's high time we (be) more responsible.",
              hint: "Après It's high time + sujet, le verbe est au prétérit ; après had better, la base verbale ; après need et It's time, to + base verbale ; après unless, le présent.",
              solution: [
                "a) stopped : It's high time + sujet + prétérit.",
                "b) not fly : had better not + base verbale.",
                "c) to act : It's time + to + base verbale.",
                "d) to rethink : need + to + base verbale.",
                "e) reduce : présent après unless, comme après if.",
                "f) were : prétérit de be, were s'emploie dans cette structure comme dans l'hypothèse irréelle (was est aussi entendu à l'oral).",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Vous prenez la parole devant les élèves de votre lycée avant une marche pour le climat. Rédigez votre discours (130 à 160 mots) : interpellez votre public, appuyez-vous sur au moins une référence du cours, exprimez l'urgence et proposez des actions concrètes, sans caricaturer ceux qui ne partagent pas votre avis.",
              hint: "Un discours s'adresse directement au public (Friends, fellow students), emploie we, des questions oratoires et une conclusion mobilisatrice.",
              solution: [
                "Étape 1, la structure : adresse au public ; constat (faits) ; référence (Greta Thunberg, accord de Paris) ; actions concrètes ; réponse à une objection ; appel final.",
                "Étape 2, une proposition rédigée : « Fellow students, thank you for being here. Heatwaves, floods and wildfires are no longer distant threats: they are part of our lives. In 2015, almost every country signed the Paris Agreement and promised to keep warming well below 2 °C. Yet emissions are still too high. It's high time our leaders kept their promises! In 2018, a fifteen-year-old girl sat alone outside the Swedish parliament. Today, millions of young people follow her example. Some say marches change nothing. I understand their doubts, but history shows that public pressure can change laws. And we can act here too: our school could install solar panels, offer more vegetarian meals and create safe bike shelters. We'd better start now, because every degree matters. So let's march today, peacefully and proudly, for the planet we will inherit! »",
                "Étape 3, vérification : environ 135 mots ; adresse au public, références exactes (accord de Paris, 2015 ; Greta Thunberg, 2018), urgence (It's high time + prétérit, We'd better), actions concrètes, objection reconnue (Some say...), appel final.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression anglaise à sa traduction.",
            pairs: [
              { left: "greenhouse gases", right: "gaz à effet de serre" },
              { left: "fossil fuels", right: "énergies fossiles" },
              { left: "carbon footprint", right: "empreinte carbone" },
              { left: "sea-level rise", right: "élévation du niveau de la mer" },
              { left: "renewable energy", right: "énergies renouvelables" },
              { left: "greenwashing", right: "écoblanchiment" },
            ],
          },
          quiz: [
            { q: "It's high time we ___ action.", options: ["take", "took", "will take", "taking"], answer: 1, why: "Après It's high time + sujet, on emploie le prétérit, qui exprime l'écart avec la situation souhaitée." },
            { q: "Greta Thunberg's school strike began in 2018 outside...", options: ["the UN headquarters in New York", "the White House", "the Swedish parliament", "Buckingham Palace"], answer: 2, why: "Elle s'est assise devant le Parlement suédois, à Stockholm, en août 2018." },
            { q: "The Paris Agreement (2015) aims to keep global warming...", options: ["well below 2 °C", "below 4 °C, then 3 °C", "exactly at 3 °C", "under 0.5 °C"], answer: 0, why: "L'accord vise nettement moins de 2 °C par rapport à l'ère préindustrielle, avec un effort pour limiter le réchauffement à 1,5 °C." },
            { q: "« Greenwashing » means...", options: ["planting trees along every city street", "cleaning rivers with green chemical products", "painting buildings green to save energy", "pretending to be eco-friendly"], answer: 3, why: "Le greenwashing consiste à se donner une image écologique trompeuse." },
            { q: "You ___ take the train: it pollutes far less than flying.", options: ["had better", "would better", "had better to", "better had"], answer: 0, why: "Had better se construit avec la base verbale, sans to." },
          ],
          trap: "Écrire It's high time we act (ou we will act) au lieu du prétérit (we acted), et ajouter to après had better (You had better to go).",
          method: "Constituez une fiche « engagement » avec trois colonnes : faits datés (1988, 2015, 2018), acteurs (Greta Thunberg, Vanessa Nakate, Extinction Rebellion) et formules d'urgence (It's high time..., We'd better..., Unless we...). Réutilisez-la pour tout sujet sur l'environnement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nature-wilderness',
          title: 'La nature sauvage : « wilderness » et parcs nationaux',
          minutes: 30,
          objectives: [
            "Définir la notion de wilderness et retracer son évolution dans la culture américaine.",
            "Situer les grandes étapes de la création des parcs nationaux aux États-Unis et au Canada.",
            "Analyser les débats contemporains sur la nature protégée (peuples autochtones, surfréquentation, climat).",
            "Décrire un paysage avec des adjectifs composés et les structures so et such.",
          ],
          course: [
            {
              heading: "La wilderness : de la terre hostile à la nature à protéger",
              paragraphs: [
                "Le mot wilderness désigne une nature sauvage, non cultivée et peu transformée par l'être humain. Pour les colons puritains du XVIIe siècle, en Nouvelle-Angleterre, cette nature était d'abord hostile et inquiétante : un désert moral et physique qu'il fallait défricher et soumettre. La conquête de l'Ouest au XIXe siècle prolonge cette vision, avec l'idée d'une frontière (the frontier) qui recule à mesure que la « civilisation » avance.",
                "Au XIXe siècle, les transcendantalistes renversent ce regard. Dans l'essai Nature (1836), Ralph Waldo Emerson voit dans la nature une source de vérité spirituelle. Henry David Thoreau vit un peu plus de deux ans dans une cabane près de l'étang de Walden, dans le Massachusetts, de 1845 à 1847, et en tire Walden (1854), éloge d'une vie simple au contact de la nature. Dans sa conférence Walking, il affirme que la préservation du monde réside dans l'état sauvage (« in Wildness is the preservation of the World »).",
              ],
              box: { label: "Définition", text: "Wilderness : nature sauvage, peu transformée par l'être humain. Dans la culture américaine, elle passe d'un espace hostile à conquérir (puritains, frontière) à un patrimoine à préserver (Emerson, Thoreau, Muir)." },
            },
            {
              heading: "La naissance des parcs nationaux",
              paragraphs: [
                "En 1864, en pleine guerre de Sécession, le président Abraham Lincoln confie la vallée de Yosemite à l'État de Californie pour qu'elle soit protégée. En 1872, le président Ulysses S. Grant crée Yellowstone, considéré comme le premier parc national du monde. Le Canada suit avec Banff, dans les Rocheuses, en 1885.",
                "L'Écossais John Muir, émigré aux États-Unis, consacre sa vie à défendre la Sierra Nevada ; il contribue à la création du parc national de Yosemite (1890) et cofonde en 1892 le Sierra Club, l'une des premières associations de protection de la nature. En 1903, il campe à Yosemite avec le président Theodore Roosevelt, grand défenseur de la conservation. Le National Park Service, l'agence fédérale qui gère les parcs, est créé en 1916.",
                "En 1964, le Wilderness Act protège de vastes territoires fédéraux : la loi définit la wilderness comme un espace où la nature n'est pas entravée par l'être humain, qui n'y est qu'un visiteur de passage. On distingue alors deux approches : la préservation (preservation, protéger la nature pour elle-même, défendue par Muir) et la conservation (conservation, gérer les ressources de façon durable pour les générations futures, défendue notamment par Gifford Pinchot).",
              ],
              box: { label: "Repère", text: "1854 : Walden (Thoreau). 1864 : Yosemite protégé par Lincoln. 1872 : Yellowstone, premier parc national du monde. 1885 : Banff (Canada). 1892 : Sierra Club (John Muir). 1916 : National Park Service. 1964 : Wilderness Act." },
            },
            {
              heading: "Une nature vierge ? Les débats d'aujourd'hui",
              paragraphs: [
                "L'idée d'une nature « vierge » (pristine wilderness) est aujourd'hui critiquée. Ces terres n'étaient pas vides : des peuples autochtones y vivaient, chassaient et entretenaient les paysages. Leur expulsion a souvent accompagné la création des parcs, à Yosemite comme à Yellowstone. Dans l'essai The Trouble with Wilderness (1995), l'historien William Cronon montre que la wilderness est aussi une construction culturelle, qui sépare artificiellement l'être humain de la nature.",
                "D'autres débats portent sur la surfréquentation (overtourism) : embouteillages, déchets, dégradation des sentiers, selfies dangereux ; on dit parfois que les visiteurs aiment les parcs à en mourir. Certains parcs instaurent des réservations. Le changement climatique menace aussi ces espaces : les glaciers du parc national de Glacier, dans le Montana, reculent nettement. Enfin, la nature sauvage fascine toujours : dans Into the Wild (1996), Jon Krakauer retrace le parcours de Christopher McCandless, mort en Alaska en 1992 après avoir voulu vivre seul dans la nature ; Sean Penn en a tiré un film en 2007.",
              ],
              box: { label: "À retenir", text: "Critiques : la pristine wilderness oublie les peuples autochtones expulsés (William Cronon, 1995). Menaces : overtourism, changement climatique. Fascination durable : Into the Wild (Krakauer, 1996)." },
            },
            {
              heading: "Décrire un paysage : adjectifs composés, so et such",
              paragraphs: [
                "L'anglais forme facilement des adjectifs composés, très utiles pour décrire : nom + participe passé (snow-capped mountains, des montagnes aux sommets enneigés ; a tree-lined path ; man-made lakes), nom + participe présent (breathtaking views, à couper le souffle ; awe-inspiring cliffs ; a mouth-watering smell), adjectif + nom + -ed (a long-haired dog ; a narrow-minded person). D'autres adjectifs utiles : vast, remote (isolé), untouched (préservé), rugged (accidenté), lush (luxuriant), majestic.",
                "Pour exprimer l'intensité et la conséquence, on emploie so + adjectif ou adverbe (The view was so beautiful that we stopped the car), mais such + (a / an) + adjectif + nom (It was such a beautiful view that we stopped the car ; They are such friendly people). Avec un nom indénombrable ou pluriel, pas d'article : such fresh air, such tall trees. Enfin, les verbes de perception aident à faire ressentir : you can hear the wind, smell the pine trees, feel the silence.",
              ],
              box: { label: "Règle", text: "So + adjectif (so beautiful that...). Such + a / an + adjectif + nom singulier (such a beautiful view). Such + adjectif + nom pluriel ou indénombrable (such tall trees, such fresh air). Adjectifs composés : snow-capped, breathtaking, man-made." },
            },
          ],
          keyPoints: [
            "Wilderness : d'abord terre hostile (puritains, frontière), puis nature à préserver (Emerson, Thoreau).",
            "Yellowstone (1872) : premier parc national du monde ; Banff (1885) au Canada.",
            "John Muir : Sierra Club (1892) ; National Park Service (1916) ; Wilderness Act (1964).",
            "Preservation (Muir) ≠ conservation (gestion durable, Pinchot).",
            "Débats : peuples autochtones expulsés (Cronon), overtourism, glaciers qui reculent.",
            "So + adjectif ; such (a) + adjectif + nom ; adjectifs composés : snow-capped, breathtaking.",
          ],
          example: {
            statement: "Décrivez ce paysage en trois phrases anglaises, avec au moins deux adjectifs composés, une structure en so et une en such : « des montagnes aux sommets enneigés, un lac d'un bleu très pur, des forêts de pins, aucune trace humaine, un silence impressionnant ».",
            solution: [
              "Choisir des adjectifs composés : snow-capped (aux sommets enneigés), breathtaking (à couper le souffle), et l'adjectif untouched (préservé).",
              "Phrase 1, description d'ensemble : « Snow-capped mountains surround a crystal-clear lake, bordered by dark pine forests. »",
              "Phrase 2, avec so : « The landscape is so untouched that you cannot see a single road or house. »",
              "Phrase 3, avec such : « There is such a breathtaking silence that you can almost hear your own heartbeat. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec so, such ou such a / an : a) The trail was ___ steep that we had to stop every ten minutes. b) It was ___ amazing experience! c) The park rangers were ___ helpful people. d) We saw ___ huge bear that we froze. e) The air was ___ clean that I could breathe deeply. f) There was ___ fresh air in the mountains.",
              hint: "Regardez ce qui suit : un adjectif seul (so), un adjectif + nom singulier dénombrable (such a / an), un adjectif + nom pluriel ou indénombrable (such).",
              solution: [
                "a) so : so + adjectif seul (steep).",
                "b) such an : nom singulier dénombrable, et amazing commence par une voyelle.",
                "c) such : nom pluriel (people), pas d'article.",
                "d) such a : nom singulier dénombrable (bear).",
                "e) so : adjectif seul (clean).",
                "f) such : nom indénombrable (air), pas d'article.",
              ],
            },
            {
              level: 2,
              statement: "Formez un adjectif composé à partir des éléments donnés, puis employez-le dans une phrase sur la nature : a) snow / cap ; b) breath / take ; c) man / make ; d) tree / line ; e) awe / inspire.",
              hint: "Selon le sens, le second élément est un participe passé (sens passif : recouvert, fait par) ou un participe présent (sens actif : qui coupe le souffle).",
              solution: [
                "a) snow-capped (aux sommets enneigés) : « We could see the snow-capped peaks of the Rockies. »",
                "b) breathtaking (à couper le souffle) : « The view from Glacier Point is breathtaking. »",
                "c) man-made (artificiel, fait par l'homme) : « The lake is actually man-made. »",
                "d) tree-lined (bordé d'arbres) : « We walked along a tree-lined path. »",
                "e) awe-inspiring (impressionnant, qui inspire une crainte respectueuse) : « Yellowstone's geysers are awe-inspiring. »",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Should access to national parks be limited to protect them? » Rédigez un essai de 150 à 180 mots, en vous appuyant sur au moins deux références du cours et en employant au moins une structure en so ou such.",
              hint: "Opposez le droit d'accès de tous à la nature et la nécessité de la protéger ; pensez aux solutions intermédiaires (réservations, navettes, quotas saisonniers).",
              solution: [
                "Étape 1, le plan : introduction (l'idée des parcs nationaux depuis 1872) ; 1) arguments pour limiter (overtourism, dégradations, climat) ; 2) arguments contre (la nature appartient à tous, enjeu éducatif, revenus locaux) ; conclusion (limiter intelligemment).",
                "Étape 2, une proposition rédigée : « When Yellowstone became the world's first national park in 1872, the idea was to protect nature for the benefit and enjoyment of the people. Today, however, some parks are so crowded that this ideal seems threatened. On the one hand, limiting access appears necessary. Traffic jams, litter and eroded trails damage fragile ecosystems, and climate change is already weakening them, as the shrinking glaciers of Glacier National Park show. Overcrowded parks are no longer the peaceful places their founders imagined. On the other hand, national parks belong to everyone. John Muir believed that contact with wild nature made people want to protect it, and banning visitors could turn parks into places reserved for the lucky few. In my opinion, the solution is not to close parks but to manage them better: online reservations, shuttle buses and seasonal quotas can reduce pressure while keeping parks open. Visiting such breathtaking places should remain possible, provided that visitors respect them. »",
                "Étape 3, vérification : environ 155 mots ; références : Yellowstone (1872), Glacier National Park, John Muir ; structures so crowded that et such breathtaking places ; plan équilibré et conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la protection de la nature en Amérique du Nord.",
            items: [
              "Ralph Waldo Emerson publie l'essai Nature",
              "Henry David Thoreau publie Walden",
              "Abraham Lincoln confie la vallée de Yosemite à la Californie pour la protéger",
              "Yellowstone devient le premier parc national du monde",
              "John Muir cofonde le Sierra Club",
              "Création du National Park Service",
              "Adoption du Wilderness Act",
            ],
          },
          quiz: [
            { q: "The first national park in the world, created in 1872, is...", options: ["Yosemite", "Banff", "the Grand Canyon", "Yellowstone"], answer: 3, why: "Yellowstone a été créé en 1872 par le président Ulysses S. Grant." },
            { q: "It was ___ beautiful view that we stopped the car.", options: ["such a", "so", "a so", "such an"], answer: 0, why: "Such a + adjectif + nom singulier dénombrable ; an ne convient pas devant beautiful, qui commence par une consonne." },
            { q: "John Muir is famous for...", options: ["writing Walden in a cabin near Concord", "signing the Wilderness Act in 1964", "co-founding the Sierra Club"], answer: 2, why: "John Muir a cofondé le Sierra Club en 1892 et défendu Yosemite ; Walden est de Thoreau." },
            { q: "Which compound adjective describes mountains with snow on their tops?", options: ["snowed-under", "snow-capped", "snow-white", "snowbound"], answer: 1, why: "Snow-capped signifie « aux sommets enneigés »." },
            { q: "Historian William Cronon criticised the idea of « pristine wilderness » because...", options: ["it ignores the Native peoples who lived there", "national parks cost taxpayers far too much money", "wild animals are dangerous for tourists and hikers"], answer: 0, why: "Pour Cronon, l'idée de nature vierge efface les peuples autochtones qui habitaient et façonnaient ces terres." },
          ],
          trap: "Confondre so et such (It was so a beautiful view) et présenter les parcs nationaux comme des terres vides, en oubliant les peuples autochtones qui y vivaient avant leur création.",
          method: "Pour décrire une image ou un paysage à l'oral, suivez un parcours fixe : vue d'ensemble, premier plan, arrière-plan, sensations (sons, odeurs), puis impression personnelle avec so ou such. Ce plan simple évite de chercher ses mots et montre un lexique précis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'villes-durables',
          title: 'Habiter autrement : villes et modes de vie durables',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique de la ville et du développement durable (urban sprawl, public transport, cycle lanes, green spaces, car-free zones).",
            "Présenter des exemples d'aménagements urbains durables dans le monde anglophone et leurs limites.",
            "Comparer des situations avec les comparatifs, les superlatifs, the more... the more et fewer / less.",
            "Proposer et défendre des solutions pour une ville plus durable.",
          ],
          course: [
            {
              heading: "Les défis de la ville",
              paragraphs: [
                "Selon l'ONU, plus de la moitié de l'humanité vit en ville depuis la fin des années 2000, et cette part continue d'augmenter. Les villes concentrent les emplois, les services et la culture, mais aussi les problèmes : embouteillages (traffic congestion), pollution de l'air (air pollution), bruit, crise du logement (housing crisis), îlots de chaleur urbains (urban heat islands), où le béton et l'asphalte retiennent la chaleur.",
                "L'étalement urbain (urban sprawl) est un défi majeur, en particulier en Amérique du Nord : les banlieues pavillonnaires (suburbs) s'étendent sur les terres agricoles et rendent la voiture indispensable. Pour le limiter, la ville de Portland, dans l'Oregon, a fixé dès la fin des années 1970 une limite de croissance urbaine (urban growth boundary) au-delà de laquelle on ne peut pas construire librement.",
              ],
              box: { label: "Vocabulaire", text: "Urban sprawl (étalement urbain) ; suburbs (banlieues résidentielles) ; traffic congestion (embouteillages) ; urban heat island (îlot de chaleur) ; housing crisis (crise du logement) ; commuters (personnes qui font la navette domicile-travail)." },
            },
            {
              heading: "Des solutions urbaines : exemples anglophones",
              paragraphs: [
                "Pour réduire la place de la voiture, Londres a instauré en 2003 un péage urbain (congestion charge) dans son centre, puis en 2019 une zone à très faibles émissions (Ultra Low Emission Zone, ULEZ), étendue en 2023 à tout le Grand Londres : les conducteurs des véhicules les plus polluants doivent payer une redevance quotidienne. Les pistes cyclables (cycle lanes), les transports en commun (public transport) et les zones sans voitures (car-free zones) progressent dans de nombreuses villes.",
                "La nature revient en ville : toits végétalisés (green roofs), jardins partagés (community gardens), agriculture urbaine (urban farming). À New York, la High Line, ouverte en 2009, est un parc aménagé sur une ancienne voie ferrée aérienne de Manhattan. À Londres, le quartier BedZED, achevé en 2002, a été conçu comme un écoquartier à très faible consommation d'énergie. Le concept de « ville du quart d'heure » (15-minute city), proposé par l'urbaniste Carlos Moreno, vise à ce que chacun trouve l'essentiel à moins de quinze minutes à pied ou à vélo.",
              ],
              box: { label: "Repère", text: "2002 : écoquartier BedZED (Londres). 2003 : congestion charge à Londres. 2009 : ouverture de la High Line (New York). 2019 : ULEZ à Londres, étendue en 2023 à tout le Grand Londres. 15-minute city : concept de Carlos Moreno." },
            },
            {
              heading: "Changer de mode de vie, et ses limites",
              paragraphs: [
                "Habiter autrement, c'est aussi changer ses habitudes : habitat partagé (co-housing), mini-maisons (tiny houses), économie du partage (sharing economy : covoiturage, location entre particuliers), achats d'occasion (second-hand), réparation plutôt que remplacement (repair cafés), démarche zéro déchet (zero waste) résumée par la formule reduce, reuse, recycle.",
                "Ces solutions ont des limites et suscitent des débats. La gentrification : la High Line a fait grimper les loyers du quartier, au point que des habitants modestes ont dû partir. Le coût social : la ULEZ a été contestée par des automobilistes qui n'avaient pas les moyens de changer de véhicule. La liberté individuelle : certains voient dans la limitation de la voiture une contrainte excessive. Une ville durable doit donc être aussi une ville juste et accessible à tous.",
              ],
              box: { label: "À retenir", text: "Modes de vie : co-housing, tiny houses, sharing economy, second-hand, zero waste (reduce, reuse, recycle). Limites : gentrification (High Line), coût social (ULEZ), liberté individuelle." },
            },
            {
              heading: "Comparer : comparatifs, superlatifs, the more... the more",
              paragraphs: [
                "Les adjectifs courts (une syllabe, ou deux syllabes terminées par -y) prennent -er et -est : cheap, cheaper, the cheapest ; busy, busier, the busiest. Les adjectifs longs prennent more et the most : expensive, more expensive, the most expensive. Irréguliers : good, better, the best ; bad, worse, the worst ; far, further, the furthest. Égalité : as... as (The bus is as fast as the car) ; infériorité : less... than ou not as... as.",
                "Pour exprimer une évolution parallèle, on emploie the + comparatif..., the + comparatif : The more cars there are, the more polluted the air becomes ; The fewer cars there are, the quieter the streets are. Pour une progression : more and more (de plus en plus), less and less, ou un comparatif répété (Cities are getting bigger and bigger). Enfin, on emploie fewer devant un nom dénombrable pluriel (fewer cars) et less devant un indénombrable (less pollution, less traffic).",
              ],
              box: { label: "Règle", text: "Court : -er / the -est (cheaper, the cheapest). Long : more / the most (more sustainable). The more..., the more... (évolution parallèle). Fewer + dénombrable pluriel (fewer cars) ; less + indénombrable (less noise)." },
            },
          ],
          keyPoints: [
            "Urban sprawl, traffic congestion, heat islands, housing crisis : les défis urbains.",
            "Londres : congestion charge (2003), ULEZ (2019, étendue en 2023) ; New York : High Line (2009).",
            "15-minute city (Carlos Moreno), green roofs, community gardens, car-free zones.",
            "Modes de vie : co-housing, sharing economy, zero waste ; limites : gentrification, coût social.",
            "Comparatifs : -er / more ; superlatifs : the -est / the most ; the more..., the more...",
            "Fewer + dénombrable pluriel ; less + indénombrable.",
          ],
          example: {
            statement: "Comparez deux villes (données fictives) en quatre phrases anglaises, avec un comparatif, un superlatif, une structure the more... the more et fewer ou less. Greenville : 120 km de pistes cyclables, 25 % des trajets à vélo, 30 jours de pollution par an. Motorton : 10 km de pistes cyclables, 3 % des trajets à vélo, 90 jours de pollution par an. Riverside : 60 km de pistes cyclables, 12 % des trajets à vélo, 55 jours de pollution par an.",
            solution: [
              "Comparatif : « Greenville has more cycle lanes than Motorton: 120 km against only 10 km. »",
              "Superlatif : « Greenville is the most bike-friendly of the three cities, with 25 % of trips made by bike. »",
              "Fewer / less : « Greenville has fewer days of pollution than Riverside (30 against 55). » (days est dénombrable, donc fewer)",
              "The more... the more : « The more cycle lanes a city builds, the fewer polluted days it seems to have. » (ou the less polluted its air seems to be)",
              "Remarque de prudence : avec trois villes fictives, on observe une corrélation, pas une preuve de cause à effet, d'où « seems to ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le comparatif et le superlatif de ces adjectifs : a) green ; b) busy ; c) sustainable ; d) good ; e) bad ; f) far.",
              hint: "Comptez les syllabes, repérez la terminaison en -y et pensez aux irréguliers.",
              solution: [
                "a) greener, the greenest (une syllabe)",
                "b) busier, the busiest (deux syllabes terminées par -y : le y devient i)",
                "c) more sustainable, the most sustainable (adjectif long)",
                "d) better, the best (irrégulier)",
                "e) worse, the worst (irrégulier)",
                "f) further (ou farther), the furthest (ou the farthest) (irrégulier)",
              ],
            },
            {
              level: 2,
              statement: "Complétez : a) There are ___ (fewer / less) cars in the city centre since the congestion charge. b) There is ___ (fewer / less) noise at night. c) ___ (the more / more) people cycle, ___ (the more / more) cycle lanes the city needs. d) Rents are getting ___ (high) and ___ (high) near the new park. e) Is the tram ___ (fast) ___ the bus? f) This is ___ (good) eco-district I have ever visited.",
              hint: "Fewer pour ce qui se compte, less pour ce qui ne se compte pas ; dans une évolution parallèle, n'oubliez pas the deux fois.",
              solution: [
                "a) fewer : cars est dénombrable pluriel.",
                "b) less : noise est indénombrable.",
                "c) The more people cycle, the more cycle lanes the city needs.",
                "d) higher and higher : progression exprimée par un comparatif répété.",
                "e) faster than : comparatif de supériorité d'un adjectif court.",
                "f) the best : superlatif irrégulier de good, souvent suivi de I have ever + participe passé.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Le maire de votre ville envisage d'interdire les voitures dans le centre-ville. Rédigez une lettre ouverte (150 à 180 mots) publiée dans le journal local, dans laquelle vous donnez votre avis argumenté, en vous appuyant sur au moins un exemple du cours et en employant au moins trois structures de comparaison différentes.",
              hint: "Une lettre ouverte commence par une formule d'adresse (Dear Mayor,) et se termine par une formule de politesse (Yours sincerely,). Pensez à l'objection sociale (ceux qui dépendent de leur voiture).",
              solution: [
                "Étape 1, le plan : adresse ; position (favorable sous conditions) ; arguments (air, bruit, sécurité, exemple de Londres) ; objection (commerçants, personnes âgées, habitants des banlieues) ; propositions ; formule finale.",
                "Étape 2, une proposition rédigée : « Dear Mayor, I am writing to support your plan to make our town centre car-free, provided that it is fair to everyone. Today, our main streets are noisier and more dangerous than ever, and children breathe polluted air on their way to school. The fewer cars there are, the safer and healthier our streets will be. London has shown that it is possible: since the congestion charge was introduced in 2003, the centre has seen less traffic. However, a ban must not punish people who depend on their cars, such as elderly residents, disabled people or workers who live in the suburbs. That is why I suggest building more park-and-ride car parks, running buses more often and making them as cheap as possible. A greener town centre would also be more pleasant for shoppers, which could help local businesses. I hope you will take these proposals into account. Yours sincerely, Léa Martin »",
                "Étape 3, vérification : environ 155 mots ; comparaisons : noisier and more dangerous than ever, The fewer..., the safer..., less traffic, more park-and-ride car parks, as cheap as possible, greener, more pleasant ; exemple du cours (congestion charge, 2003) ; formules de la lettre.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Villes durables et comparaisons.",
            statements: [
              { text: "« Fewer cars » est correct, car cars est un nom dénombrable.", true: true, why: "Fewer s'emploie devant un nom dénombrable pluriel." },
              { text: "« Less people » est la forme attendue à l'écrit soigné.", true: false, why: "People est dénombrable : on écrit fewer people." },
              { text: "« The more we drive, the more polluted the air is » est une construction correcte.", true: true, why: "The + comparatif..., the + comparatif exprime une évolution parallèle." },
              { text: "Le comparatif de cheap est « more cheap ».", true: false, why: "Cheap est un adjectif court : cheaper, the cheapest." },
              { text: "Le péage urbain de Londres (congestion charge) date de 2003.", true: true, why: "Il a été introduit en 2003 dans le centre de Londres." },
              { text: "La High Line de New York est une autoroute urbaine inaugurée en 2009.", true: false, why: "C'est un parc aménagé sur une ancienne voie ferrée aérienne, ouvert en 2009." },
              { text: "Urban sprawl désigne la densification des centres-villes.", true: false, why: "Urban sprawl désigne l'étalement urbain, l'extension des villes sur les campagnes." },
              { text: "Le superlatif de good est the best.", true: true, why: "Good est irrégulier : better, the best." },
            ],
          },
          quiz: [
            { q: "The ___ we wait, the harder it will be.", options: ["more long", "long", "longest", "longer"], answer: 3, why: "The + comparatif..., the + comparatif : long est court, son comparatif est longer." },
            { q: "There are ___ cars in the city centre since the new charge.", options: ["less", "least", "fewer", "lesser"], answer: 2, why: "Cars est dénombrable pluriel : fewer ; less s'emploie devant un indénombrable." },
            { q: "« Urban sprawl » refers to...", options: ["the spread of cities into the countryside", "a garden built on the roof of a tall building", "a long traffic jam during the morning rush hour"], answer: 0, why: "L'urban sprawl est l'étalement urbain, qui consomme des terres et rend la voiture indispensable." },
            { q: "London's Ultra Low Emission Zone (ULEZ) charges drivers of...", options: ["every electric car and scooter", "bikes parked on pavements", "tourist coaches from abroad only", "the most polluting vehicles"], answer: 3, why: "La ULEZ fait payer une redevance quotidienne aux véhicules les plus polluants." },
            { q: "Which sentence is correct?", options: ["Cycling is more healthy than driving.", "Cycling is healthier than driving.", "Cycling is more healthier than driving.", "Cycling is healthiest than driving."], answer: 1, why: "Healthy (deux syllabes en -y) donne healthier ; on ne cumule jamais more et -er." },
          ],
          trap: "Cumuler les deux formes du comparatif (more healthier), oublier le second the dans the more..., the more..., et employer less devant un nom dénombrable (less cars).",
          method: "Pour chaque exemple de ville durable, retenez trois éléments : le lieu et la date (Londres, 2003), ce qui a changé (moins de voitures dans le centre), et une limite ou une critique (coût social). Vous pourrez ainsi argumenter de façon équilibrée, à l'écrit comme à l'oral.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES AIRES ANGLOPHONES AMÉRICAINES                                    */
    /* ==================================================================== */
    {
      id: 'aires-americaines',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reve-americain',
          title: 'Le rêve américain en question',
          minutes: 30,
          objectives: [
            "Définir le rêve américain et en situer les origines et les valeurs (opportunity, self-made man, pursuit of happiness).",
            "Analyser la manière dont la littérature américaine du XXe siècle met en scène le rêve et ses désillusions.",
            "Discuter de la réalité du rêve américain aujourd'hui en s'appuyant sur des faits.",
            "Exprimer la concession et l'opposition avec although, even though, despite, however, whereas.",
          ],
          course: [
            {
              heading: "Aux origines du rêve : une terre de possibles",
              paragraphs: [
                "La Déclaration d'indépendance des États-Unis, adoptée le 4 juillet 1776, affirme que tous les hommes ont des droits inaliénables, parmi lesquels « Life, Liberty and the pursuit of Happiness » (la vie, la liberté et la recherche du bonheur). Cette promesse fonde l'image d'une terre des possibles (the land of opportunity), où chacun peut réussir par son travail, quelle que soit son origine.",
                "Des millions d'immigrants viennent tenter leur chance. La statue de la Liberté, offerte par la France et inaugurée en 1886 à l'entrée du port de New York, devient leur symbole ; un poème d'Emma Lazarus, The New Colossus (1883), inscrit sur une plaque placée dans son socle, la présente comme une mère accueillant les pauvres et les opprimés du monde. De 1892 à 1954, la station d'Ellis Island accueille et contrôle les immigrants arrivant à New York.",
                "L'expression American Dream est popularisée en 1931 par l'historien James Truslow Adams dans The Epic of America : il y décrit le rêve d'un pays où la vie serait meilleure et plus riche pour chacun, avec des chances offertes selon les capacités et les mérites de chacun, et non selon la naissance. Le rêve promet donc l'égalité des chances (equality of opportunity), pas l'égalité des résultats.",
              ],
              box: { label: "Repère", text: "1776 : Déclaration d'indépendance (« the pursuit of Happiness »). 1886 : statue de la Liberté. 1892 à 1954 : Ellis Island. 1931 : James Truslow Adams popularise l'expression American Dream." },
            },
            {
              heading: "Les valeurs du rêve : travail, mérite, réussite",
              paragraphs: [
                "Le rêve américain repose sur des valeurs : le travail (hard work), l'individualisme, le mérite et la confiance en l'avenir. Il a ses figures : le self-made man, qui s'est fait tout seul, comme Benjamin Franklin, fils d'artisan devenu savant et diplomate, ou Andrew Carnegie, immigré écossais pauvre devenu l'un des hommes les plus riches du monde grâce à l'acier. Au XIXe siècle, les romans de Horatio Alger popularisent le schéma « from rags to riches » (de la misère à la richesse).",
                "Au XXe siècle, le rêve prend une forme plus matérielle : posséder sa maison dans une banlieue paisible, une voiture, offrir des études à ses enfants. Il nourrit aussi les combats pour l'égalité : le 28 août 1963, lors de la marche sur Washington, Martin Luther King prononce le discours « I Have a Dream », dans lequel il présente son rêve d'égalité raciale comme profondément enraciné dans le rêve américain.",
              ],
              box: { label: "Vocabulaire", text: "The land of opportunity (la terre des possibles) ; a self-made man / woman ; from rags to riches (de la misère à la richesse) ; upward social mobility (ascension sociale) ; hard work ; to make it (réussir) ; to climb the social ladder." },
            },
            {
              heading: "Rêves et désillusions dans la littérature",
              paragraphs: [
                "Dans The Great Gatsby (1925), F. Scott Fitzgerald raconte, à travers le regard du narrateur Nick Carraway, l'histoire de Jay Gatsby, né pauvre sous le nom de James Gatz, devenu immensément riche par des moyens douteux pour reconquérir Daisy, qui appartient à la vieille aristocratie. La lumière verte au bout du ponton de Daisy symbolise son espoir inaccessible. Le roman montre un rêve corrompu par l'argent et les barrières sociales.",
                "La Grande Dépression des années 1930 brise bien des rêves. Dans Of Mice and Men (1937), John Steinbeck suit George et Lennie, deux ouvriers agricoles itinérants qui rêvent de posséder leur propre ferme, rêve qui ne se réalisera jamais. Dans The Grapes of Wrath (1939), la famille Joad fuit l'Oklahoma ravagé par le Dust Bowl pour la Californie, où l'attendent l'exploitation et la misère.",
                "Dans la pièce Death of a Salesman (1949), Arthur Miller montre Willy Loman, représentant de commerce vieillissant, qui a cru que le succès venait à ceux qui étaient appréciés, et qui s'effondre. Le poète Langston Hughes, figure de la Harlem Renaissance, se demande dans le poème Harlem (1951) ce qu'il advient d'un rêve différé (« a dream deferred ») : il évoque le rêve sans cesse repoussé des Afro-Américains.",
              ],
              box: { label: "À retenir", text: "The Great Gatsby (Fitzgerald, 1925) : rêve corrompu. Of Mice and Men (1937) et The Grapes of Wrath (1939), Steinbeck : la Dépression. Death of a Salesman (Miller, 1949) : l'échec. Harlem (Hughes, 1951) : le rêve différé." },
            },
            {
              heading: "Le rêve aujourd'hui, et la langue de la concession",
              paragraphs: [
                "Le rêve américain reste puissant : les États-Unis attirent toujours des immigrants et des entrepreneurs, et des réussites spectaculaires entretiennent le mythe. Pourtant, les inégalités se sont creusées. Les travaux de l'économiste Raj Chetty montrent que la part des enfants qui gagnent plus que leurs parents a fortement baissé : elle concernait la grande majorité des enfants nés en 1940, mais seulement environ un sur deux pour ceux nés dans les années 1980. Le coût des études supérieures (student debt), de la santé et du logement freine l'ascension sociale, et les écarts selon l'origine restent importants.",
                "Pour présenter ces nuances, il faut maîtriser la concession et l'opposition. Although, though et even though (bien que, même si) sont suivis d'une proposition : Although he worked hard, he remained poor. Despite et in spite of (malgré) sont suivis d'un nom ou d'un verbe en -ing : Despite his efforts, he remained poor ; Despite working hard, he remained poor. However et nevertheless (cependant) sont des adverbes, souvent en tête de phrase suivis d'une virgule. Whereas et while opposent deux faits : Some see America as a land of opportunity, whereas others see it as a land of inequality. Yet (pourtant) introduit un contraste inattendu.",
              ],
              box: { label: "Règle", text: "Although / even though + proposition (Although it was hard, ...). Despite / in spite of + nom ou -ing (Despite the crisis ; Despite working hard). However, + phrase. Whereas / while : opposition entre deux faits. Jamais « despite of » ni « despite it was »." },
            },
          ],
          keyPoints: [
            "1776 : « the pursuit of Happiness » ; 1931 : James Truslow Adams popularise l'expression American Dream.",
            "Valeurs : land of opportunity, hard work, self-made man, from rags to riches ; égalité des chances, pas des résultats.",
            "Littérature : Gatsby (1925), Of Mice and Men (1937), The Grapes of Wrath (1939), Death of a Salesman (1949).",
            "Martin Luther King (1963) inscrit son rêve d'égalité dans le rêve américain ; Langston Hughes : le rêve différé.",
            "Aujourd'hui : mobilité sociale en baisse (Raj Chetty), dette étudiante, inégalités ; mais attrait intact.",
            "Although + proposition ; despite + nom ou -ing ; however, + phrase ; whereas : opposition.",
          ],
          example: {
            statement: "Reliez chaque paire de phrases avec le connecteur indiqué, en modifiant la construction si nécessaire : a) Gatsby became very rich. He never won Daisy back. (although) b) The Joads worked hard. They remained poor. (despite) c) Some Americans believe in the dream. Others think it is a myth. (whereas) d) The USA is a rich country. Many families cannot afford healthcare. (however)",
            solution: [
              "a) Although + proposition complète : « Although Gatsby became very rich, he never won Daisy back. »",
              "b) Despite + nom ou -ing, pas de proposition : « Despite working hard, the Joads remained poor. » (ou « Despite their hard work, ... »)",
              "c) Whereas oppose deux faits de même nature : « Some Americans believe in the dream, whereas others think it is a myth. »",
              "d) However est un adverbe : il commence la seconde phrase, suivi d'une virgule : « The USA is a rich country. However, many families cannot afford healthcare. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec although, despite, however ou whereas (chacun une fois au moins) : a) ___ the Great Depression, Steinbeck's characters keep dreaming. b) ___ Willy Loman works hard, he is fired. c) Gatsby is new money, ___ Tom Buchanan comes from an old wealthy family. d) Many immigrants arrived full of hope. ___, life in New York was often hard. e) ___ being a poor immigrant, Andrew Carnegie became extremely rich.",
              hint: "Regardez ce qui suit le blanc : une proposition (sujet + verbe), un nom, un verbe en -ing, ou une phrase nouvelle.",
              solution: [
                "a) Despite : suivi d'un nom (the Great Depression).",
                "b) Although : suivi d'une proposition (Willy Loman works hard).",
                "c) whereas : opposition entre deux personnages.",
                "d) However : adverbe en tête de phrase, suivi d'une virgule.",
                "e) Despite : suivi d'un verbe en -ing (being).",
              ],
            },
            {
              level: 2,
              statement: "Texte d'entraînement inventé : « When Ana's parents left Mexico in 1998, they had only two suitcases. Her father cleaned offices at night while her mother cooked in a restaurant. They never complained. Today, Ana is a nurse in Chicago, the first in her family to go to college. Yet she still owes $40,000 in student loans, and she wonders whether her own children will do better than her. » 1) Résumez le parcours de la famille en une phrase anglaise. 2) Quelles valeurs du rêve américain le texte illustre-t-il ? 3) Quelle limite du rêve apparaît, et quel mot l'annonce ? 4) Reformulez la dernière phrase avec although.",
              hint: "Repérez le connecteur qui fait basculer le texte, puis reliez le cas d'Ana aux idées du cours (mobilité sociale, dette étudiante).",
              solution: [
                "1) « Ana's parents, who arrived from Mexico with almost nothing, worked hard so that their daughter could go to college and become a nurse. »",
                "2) Le travail acharné (deux emplois peu qualifiés), la persévérance (« They never complained ») et l'ascension sociale d'une génération à l'autre : de l'immigration pauvre au diplôme.",
                "3) La limite est la dette étudiante et l'incertitude sur la génération suivante ; elle est annoncée par « Yet ». Le texte rejoint le constat d'une mobilité sociale moins assurée.",
                "4) « Although Ana has succeeded, she still owes $40,000 in student loans and wonders whether her children will do better than her. »",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Is the American Dream still alive? » Rédigez un essai de 150 à 180 mots, en vous appuyant sur au moins une œuvre littéraire et un fait contemporain étudiés, et en employant au moins trois connecteurs de concession ou d'opposition différents.",
              hint: "Le sujet appelle une réponse nuancée : le rêve existe encore comme idéal et comme moteur, mais sa réalisation est devenue plus difficile.",
              solution: [
                "Étape 1, le plan : introduction (définition, Adams 1931) ; 1) un idéal toujours vivant (immigrants, entrepreneurs, MLK) ; 2) une réalité plus difficile (mobilité en baisse, dette, littérature de la désillusion) ; conclusion nuancée.",
                "Étape 2, une proposition rédigée : « In 1931, James Truslow Adams described the American Dream as the hope of a better life for everyone, whatever their origins. Almost a century later, is this dream still alive? On the one hand, it remains a powerful ideal. Millions of immigrants still come to the United States, and stories of entrepreneurs who started with nothing keep inspiring people. Martin Luther King himself rooted his dream of equality in the American Dream. However, the reality is more complex. Although many Americans work hard, fewer children now earn more than their parents, as the economist Raj Chetty has shown. Moreover, despite their efforts, many graduates start their working lives with heavy student debt. Literature warned us long ago: Gatsby's wealth never brought him happiness, and Willy Loman's faith in success destroyed him. In conclusion, the American Dream is still alive as an ideal, whereas its promise of equal opportunity seems harder to achieve than ever. »",
                "Étape 3, vérification : environ 155 mots ; références : Adams (1931), Martin Luther King, Raj Chetty, The Great Gatsby, Death of a Salesman ; connecteurs : However, Although, despite, whereas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le rêve américain, ses œuvres et sa langue.",
            statements: [
              { text: "L'expression « American Dream » figure dans la Déclaration d'indépendance de 1776.", true: false, why: "La Déclaration parle de « the pursuit of Happiness » ; l'expression American Dream est popularisée en 1931 par James Truslow Adams." },
              { text: "Le rêve américain promet l'égalité des chances plutôt que l'égalité des résultats.", true: true, why: "Chacun doit pouvoir réussir selon ses capacités et ses efforts, sans garantie de résultat." },
              { text: "Dans The Great Gatsby, Jay Gatsby est né dans une riche famille de la côte Est.", true: false, why: "Né pauvre sous le nom de James Gatz, il s'est enrichi par des moyens douteux." },
              { text: "Of Mice and Men se déroule pendant la Grande Dépression.", true: true, why: "George et Lennie sont des ouvriers agricoles itinérants des années 1930." },
              { text: "« Despite it was difficult, they succeeded » est correct.", true: false, why: "Despite est suivi d'un nom ou d'un -ing : Despite the difficulties ; avec une proposition, il faut although." },
              { text: "« Although he worked hard, he stayed poor » est correct.", true: true, why: "Although est suivi d'une proposition complète." },
              { text: "Martin Luther King a prononcé « I Have a Dream » en 1963, lors de la marche sur Washington.", true: true, why: "Le discours date du 28 août 1963." },
            ],
          },
          quiz: [
            { q: "Who popularised the phrase « the American Dream » in 1931?", options: ["James Truslow Adams", "F. Scott Fitzgerald", "Martin Luther King", "Benjamin Franklin"], answer: 0, why: "L'historien James Truslow Adams l'emploie dans The Epic of America (1931)." },
            { q: "___ he worked very hard, Willy Loman never became successful.", options: ["Despite", "However", "Although", "In spite of"], answer: 2, why: "Although est suivi d'une proposition ; despite et in spite of exigent un nom ou un -ing." },
            { q: "In The Great Gatsby, the green light symbolises...", options: ["the traffic lights of 1920s New York City", "Gatsby's hope of winning Daisy back", "the money Gatsby owes to his business partners"], answer: 1, why: "La lumière verte, au bout du ponton de Daisy, représente le rêve inaccessible de Gatsby." },
            { q: "___ the economic crisis, many immigrants still came to America.", options: ["Although", "Even though", "Whereas", "Despite"], answer: 3, why: "Despite est suivi d'un nom (the economic crisis) ; although et even though exigent une proposition." },
            { q: "In The Grapes of Wrath, the Joad family travel from Oklahoma to...", options: ["New York City", "the Canadian border", "California", "Florida"], answer: 2, why: "Chassés par le Dust Bowl, les Joad partent pour la Californie, où ils découvrent la misère des travailleurs migrants." },
          ],
          trap: "Construire despite avec une proposition (Despite he was poor) ou écrire « despite of », et confondre l'égalité des chances promise par le rêve avec une égalité des résultats.",
          method: "Pour un sujet sur le rêve américain, préparez une frise à deux étages : en haut, l'idéal (1776, 1886, 1931, 1963) ; en bas, les désillusions (1925, 1937, 1939, 1949, aujourd'hui). Chaque argument de votre essai pourra ainsi associer une date, une œuvre et une idée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'canada-anglophone',
          title: 'Le Canada anglophone et ses identités',
          minutes: 30,
          objectives: [
            "Situer les grands repères historiques et institutionnels du Canada (Confédération, monarchie constitutionnelle, bilinguisme).",
            "Présenter les peuples autochtones du Canada et le processus de réconciliation.",
            "Expliquer le modèle canadien du multiculturalisme et la construction d'une identité distincte des États-Unis.",
            "Comparer deux pays ou deux modèles avec whereas, unlike, both... and, neither... nor.",
          ],
          course: [
            {
              heading: "Repères historiques et institutionnels",
              paragraphs: [
                "Le Canada naît comme État fédéral le 1er juillet 1867, avec la Confédération (Confederation) : l'Acte de l'Amérique du Nord britannique (British North America Act) réunit alors quatre provinces, l'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick. Le 1er juillet est devenu la fête nationale (Canada Day). Le pays compte aujourd'hui dix provinces et trois territoires ; sa capitale est Ottawa.",
                "Le Canada est une monarchie constitutionnelle et une démocratie parlementaire : le chef de l'État est le souverain britannique, aujourd'hui le roi Charles III, représenté par un gouverneur général, mais le pouvoir est exercé par le Premier ministre et le Parlement. En 1982, la Loi constitutionnelle (Constitution Act) rapatrie la Constitution, qui ne peut désormais plus être modifiée par le Parlement britannique, et y inscrit la Charte canadienne des droits et libertés. Le drapeau à la feuille d'érable (the maple leaf) date de 1965.",
              ],
              box: { label: "Repère", text: "1er juillet 1867 : Confédération. 1965 : drapeau à la feuille d'érable. 1969 : loi sur les langues officielles. 1971 : politique du multiculturalisme. 1982 : Loi constitutionnelle et Charte des droits et libertés. 1999 : création du Nunavut." },
            },
            {
              heading: "Un pays officiellement bilingue",
              paragraphs: [
                "Depuis la loi sur les langues officielles de 1969 (Official Languages Act), l'anglais et le français sont les deux langues officielles du gouvernement fédéral. La majorité des Canadiens est anglophone, mais le Québec est majoritairement francophone ; il a organisé deux référendums sur sa souveraineté, en 1980 et en 1995, remportés tous deux par le « non », de justesse en 1995. Le Nouveau-Brunswick est la seule province officiellement bilingue.",
                "L'anglais canadien a ses particularités : il mêle l'orthographe britannique (colour, centre) et un vocabulaire souvent proche de l'américain (truck, apartment), avec quelques mots propres, et l'interjection « eh? », très associée aux Canadiens dans l'imaginaire anglophone.",
              ],
              box: { label: "À retenir", text: "Deux langues officielles depuis 1969 : l'anglais et le français. Québec majoritairement francophone (référendums de 1980 et 1995, victoires du « non »). Nouveau-Brunswick : seule province officiellement bilingue." },
            },
            {
              heading: "Les peuples autochtones et la réconciliation",
              paragraphs: [
                "La Loi constitutionnelle de 1982 reconnaît trois groupes de peuples autochtones (Indigenous peoples) : les Premières Nations (First Nations), les Inuit, qui vivent surtout dans l'Arctique, et les Métis, peuple issu du métissage entre Premières Nations et Européens, dont la culture s'est formée notamment dans les Prairies. En 1999, le territoire du Nunavut, à majorité inuit, est créé dans le nord du pays.",
                "De la fin du XIXe siècle jusqu'en 1996, date de fermeture du dernier établissement, plus de 150 000 enfants autochtones ont été placés dans des pensionnats (residential schools), souvent gérés par des Églises, où l'on cherchait à les assimiler en leur interdisant leur langue et leur culture ; beaucoup y ont subi des violences, et des milliers y sont morts. En 2015, la Commission de vérité et réconciliation (Truth and Reconciliation Commission) a qualifié ce système de génocide culturel. Depuis 2021, le 30 septembre est la Journée nationale de la vérité et de la réconciliation.",
              ],
              box: { label: "Vocabulaire", text: "Indigenous peoples (peuples autochtones) ; First Nations, Inuit, Métis ; residential schools (pensionnats autochtones) ; to assimilate (assimiler) ; reconciliation ; a treaty (un traité) ; land rights (droits territoriaux)." },
            },
            {
              heading: "Une mosaïque culturelle, et comment comparer",
              paragraphs: [
                "En 1971, le Canada devient le premier pays à adopter une politique officielle de multiculturalisme, confirmée par une loi en 1988 (Canadian Multiculturalism Act). On oppose souvent la mosaïque culturelle canadienne (the cultural mosaic), où chaque groupe conserve son identité tout en participant à la société, au creuset américain (the melting pot), où les immigrants sont censés se fondre dans une identité commune. L'identité canadienne se construit aussi en contraste avec le puissant voisin américain : dans Survival (1972), la romancière Margaret Atwood soutient que la survie face à une nature hostile est un thème central de la littérature canadienne.",
                "Pour comparer, on emploie whereas ou while (Canada has a king as head of state, whereas the USA has a president), unlike + nom (Unlike the USA, Canada has two official languages), both... and (Both Canada and the USA are federal states), neither... nor, avec un verbe affirmatif (Neither Canada nor the USA is a small country), similar to, different from, the same as.",
              ],
              box: { label: "Règle", text: "Whereas / while + proposition : opposition. Unlike + nom : contrairement à. Both A and B : à la fois A et B (verbe au pluriel). Neither A nor B : ni A ni B (verbe affirmatif). Different from ; similar to ; the same as." },
            },
          ],
          keyPoints: [
            "Confédération le 1er juillet 1867 ; dix provinces, trois territoires ; capitale Ottawa.",
            "Monarchie constitutionnelle (Charles III, gouverneur général) ; Constitution rapatriée en 1982.",
            "Deux langues officielles depuis 1969 ; Québec francophone ; référendums de 1980 et 1995.",
            "Premières Nations, Inuit, Métis ; pensionnats autochtones ; Commission de vérité et réconciliation (2015).",
            "Multiculturalisme officiel dès 1971 : la mosaïque canadienne face au melting pot américain.",
            "Comparer : whereas, unlike + nom, both... and, neither... nor (verbe affirmatif).",
          ],
          example: {
            statement: "Comparez le Canada et les États-Unis en quatre phrases anglaises, avec whereas, unlike, both... and et neither... nor, à partir de ces informations : chef de l'État (un roi au Canada, un président aux États-Unis) ; langues officielles au niveau fédéral (deux au Canada, aucune langue officielle fixée par la Constitution américaine) ; régime fédéral (les deux) ; petit pays (aucun des deux).",
            solution: [
              "Whereas : « Canada's head of state is a king, whereas the United States has an elected president. »",
              "Unlike + nom : « Unlike the United States, Canada has two official languages at the federal level, English and French. »",
              "Both... and, verbe au pluriel : « Both Canada and the United States are federal states. »",
              "Neither... nor, verbe affirmatif : « Neither Canada nor the United States is a small country: they are among the largest countries in the world. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le texte avec : Confederation, Ottawa, bilingual, Inuit, mosaic, 1982. « Canada was born with ___ in 1867. Its capital is ___. New Brunswick is the only officially ___ province. Nunavut, created in 1999, has an ___ majority. In ___, the Constitution was brought home from Britain. Canadians often describe their society as a cultural ___. »",
              hint: "Relisez les encadrés « Repère » et « À retenir » : chaque mot y apparaît.",
              solution: [
                "1) Confederation : la naissance du Canada moderne en 1867.",
                "2) Ottawa : la capitale fédérale (et non Toronto, la plus grande ville).",
                "3) bilingual : le Nouveau-Brunswick est la seule province officiellement bilingue.",
                "4) Inuit : le Nunavut est à majorité inuit.",
                "5) 1982 : la Loi constitutionnelle rapatrie la Constitution.",
                "6) mosaic : l'image de la mosaïque culturelle, opposée au melting pot américain.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez chaque phrase avec la structure indiquée : a) The USA is often called a melting pot. Canada is described as a mosaic. (whereas) b) Canada has two official languages. The USA doesn't. (unlike) c) English is spoken in Canada. French is spoken in Canada. (both... and) d) Quebec didn't vote for independence in 1980. It didn't vote for independence in 1995. (neither... nor) e) Canadian spelling is close to British spelling. (similar to)",
              hint: "Après unlike, un nom ; après neither... nor, un verbe affirmatif ; both... and relie deux éléments de même nature.",
              solution: [
                "a) « The USA is often called a melting pot, whereas Canada is described as a mosaic. »",
                "b) « Unlike the USA, Canada has two official languages. »",
                "c) « Both English and French are spoken in Canada. »",
                "d) « Quebec voted for independence neither in 1980 nor in 1995. » (ou, plus naturel : « In neither 1980 nor 1995 did Quebec vote for independence. »)",
                "e) « Canadian spelling is similar to British spelling. »",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « Is Canada a model of diversity? » Rédigez un essai de 150 à 180 mots, en vous appuyant sur au moins deux faits précis du cours et en employant au moins deux structures de comparaison.",
              hint: "Ne présentez pas seulement l'image positive : le multiculturalisme officiel coexiste avec l'héritage douloureux des pensionnats autochtones.",
              solution: [
                "Étape 1, le plan : introduction (image d'un pays ouvert) ; 1) arguments pour (multiculturalisme dès 1971, bilinguisme, mosaïque) ; 2) limites (pensionnats, réconciliation inachevée, tensions linguistiques) ; conclusion nuancée.",
                "Étape 2, une proposition rédigée : « Canada is often seen as one of the most open countries in the world. But is it really a model of diversity? On the one hand, Canada was the first country to adopt an official multiculturalism policy, in 1971. Unlike the American melting pot, the Canadian mosaic allows each community to keep its identity. Moreover, both English and French have been official languages since 1969, which shows a real effort to respect minorities. On the other hand, this image hides a painful history. For more than a century, Indigenous children were sent to residential schools, where they were forbidden to speak their languages. In 2015, the Truth and Reconciliation Commission called this a cultural genocide, and reconciliation is still in progress. In conclusion, Canada is not a perfect model, but it is certainly an interesting example: it has learned to recognise its past mistakes, which is perhaps the first step towards true diversity. »",
                "Étape 3, vérification : environ 155 mots ; faits : 1971, 1969, pensionnats, Commission de 2015 ; comparaisons : Unlike the American melting pot, both English and French ; conclusion nuancée, introduite par In conclusion et articulée par but.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Confederation (1867)", right: "la naissance de l'État fédéral canadien, le 1er juillet" },
              { left: "First Nations", right: "les peuples autochtones qui ne sont ni inuit ni métis" },
              { left: "Inuit", right: "peuple autochtone de l'Arctique" },
              { left: "Métis", right: "peuple issu du métissage entre Premières Nations et Européens" },
              { left: "Nunavut (1999)", right: "territoire du Nord à majorité inuit" },
              { left: "the cultural mosaic", right: "l'image d'une société où chaque groupe garde son identité" },
            ],
          },
          quiz: [
            { q: "Canada became a federal state (Confederation) in...", options: ["1776", "1867", "1931", "1982"], answer: 1, why: "La Confédération date du 1er juillet 1867, aujourd'hui Canada Day." },
            { q: "Canada's two official languages are...", options: ["English and French", "English and Inuktitut", "French and Spanish"], answer: 0, why: "La loi sur les langues officielles de 1969 fait de l'anglais et du français les langues officielles fédérales." },
            { q: "Unlike the American « melting pot », Canada describes itself as...", options: ["a single nation", "a closed border country", "a European colony", "a cultural mosaic"], answer: 3, why: "La mosaïque culturelle désigne une société où chaque groupe conserve son identité." },
            { q: "Which territory was created in 1999 with an Inuit majority?", options: ["Yukon", "Quebec", "Nunavut", "Ontario"], answer: 2, why: "Le Nunavut, créé en 1999 dans le nord du Canada, est à majorité inuit." },
            { q: "___ the USA, Canada has a king as its head of state.", options: ["Unlike", "Whereas", "Both", "Neither"], answer: 0, why: "Unlike est suivi d'un nom ; whereas introduirait une proposition complète." },
          ],
          trap: "Croire que le Canada est une république présidée par son Premier ministre, ou que tout le pays est bilingue, alors que le chef de l'État est le souverain britannique et que le bilinguisme est d'abord fédéral (seul le Nouveau-Brunswick est officiellement bilingue).",
          method: "Pour retenir les identités canadiennes, classez vos repères en trois cercles : les peuples autochtones (Premières Nations, Inuit, Métis), les deux peuples fondateurs européens (anglophones et francophones), puis les immigrants de toutes origines (mosaïque). Chaque cercle a ses dates clés.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'caraibes-anglophones',
          title: 'Les Caraïbes anglophones : histoire et cultures',
          minutes: 30,
          objectives: [
            "Situer les Caraïbes anglophones et les grandes étapes de leur histoire, de la colonisation aux indépendances.",
            "Expliquer l'héritage de l'esclavage et le rôle de la diaspora caribéenne au Royaume-Uni (génération Windrush).",
            "Présenter quelques expressions culturelles majeures : langues créoles, musiques, littérature.",
            "Organiser un récit historique avec les connecteurs de temps (after, until, by the time, as soon as).",
          ],
          course: [
            {
              heading: "Un espace façonné par la colonisation et l'esclavage",
              paragraphs: [
                "Les Caraïbes anglophones (the English-speaking Caribbean) regroupent des îles comme la Jamaïque, Trinité-et-Tobago, la Barbade, les Bahamas, Sainte-Lucie, la Grenade ou Antigua-et-Barbuda, mais aussi deux pays du continent, le Guyana et le Belize. Après l'arrivée de Christophe Colomb en 1492, les peuples autochtones, comme les Taïnos et les Kalinagos, sont décimés par la violence, le travail forcé et les maladies.",
                "Les Anglais s'installent à la Barbade à partir de 1627 et s'emparent de la Jamaïque, jusque-là espagnole, en 1655. Les colonies deviennent des économies de plantation, surtout de canne à sucre, qui reposent sur la traite transatlantique (the transatlantic slave trade) : des millions d'Africains réduits en esclavage sont déportés à travers l'Atlantique dans des conditions effroyables. Dans le commerce triangulaire, les navires partaient d'Europe vers l'Afrique, puis gagnaient les Amériques avec les captifs, avant de rentrer chargés de sucre et d'autres produits.",
              ],
              box: { label: "Vocabulaire", text: "Enslaved people (personnes réduites en esclavage) ; the slave trade (la traite) ; a plantation ; sugar cane (canne à sucre) ; the triangular trade (le commerce triangulaire) ; abolition ; emancipation ; indentured labourers (travailleurs engagés sous contrat)." },
            },
            {
              heading: "Résistances, abolition et indépendances",
              paragraphs: [
                "Les personnes réduites en esclavage résistent : fuites, sabotages et révoltes, comme celle de Tacky en Jamaïque en 1760, ou la grande révolte de 1831 à 1832, menée par le prédicateur Samuel Sharpe. Le Royaume-Uni abolit la traite en 1807, puis l'esclavage par une loi de 1833 (Slavery Abolition Act), entrée en vigueur en 1834. Les anciens esclaves doivent cependant travailler encore comme « apprentis » jusqu'en 1838, alors que les propriétaires reçoivent une compensation financière et les victimes, aucune.",
                "Pour remplacer la main-d'œuvre, les planteurs font venir des travailleurs engagés sous contrat (indentured labourers), en particulier d'Inde : c'est l'origine d'importantes communautés indo-caribéennes, notamment à Trinité-et-Tobago et au Guyana. Au XXe siècle viennent les indépendances : la Jamaïque et Trinité-et-Tobago en 1962, la Barbade en 1966. Ces pays restent membres du Commonwealth. En 2021, la Barbade devient une république et cesse d'avoir le souverain britannique pour chef d'État. Aujourd'hui, les pays caribéens, réunis dans la CARICOM, demandent des réparations au titre de l'esclavage.",
              ],
              box: { label: "Repère", text: "1655 : prise de la Jamaïque par l'Angleterre. 1807 : abolition de la traite. 1834 : entrée en vigueur de l'abolition de l'esclavage (apprentissage jusqu'en 1838). 1962 : indépendance de la Jamaïque et de Trinité-et-Tobago. 1966 : Barbade. 2021 : Barbade république." },
            },
            {
              heading: "La génération Windrush et la diaspora",
              paragraphs: [
                "Le 22 juin 1948, le navire Empire Windrush accoste à Tilbury, près de Londres, avec à son bord plusieurs centaines de passagers venus des Caraïbes, en particulier de Jamaïque. Le British Nationality Act de 1948 permet alors aux habitants des colonies de s'installer au Royaume-Uni, qui manque de main-d'œuvre pour sa reconstruction. On appelle génération Windrush (the Windrush generation) les migrants caribéens arrivés entre 1948 et le début des années 1970 ; ils travaillent notamment dans les transports et le service de santé, le NHS, et affrontent souvent le racisme.",
                "En 2018 éclate le scandale Windrush : des personnes arrivées légalement enfants, faute de documents, sont considérées à tort comme des immigrés illégaux, privées d'emploi ou de soins, détenues, et certaines expulsées. La ministre de l'Intérieur Amber Rudd démissionne. Depuis 2018, le 22 juin est le Windrush Day. La culture caribéenne marque aussi Londres : le carnaval de Notting Hill, né d'un carnaval caribéen organisé en salle en 1959 par la militante Claudia Jones, se déroule dans la rue depuis 1966.",
              ],
              box: { label: "À retenir", text: "22 juin 1948 : arrivée de l'Empire Windrush à Tilbury. Génération Windrush : migrants caribéens de 1948 au début des années 1970. 2018 : scandale Windrush. Carnaval de Notting Hill : en salle en 1959 (Claudia Jones), dans la rue depuis 1966." },
            },
            {
              heading: "Cultures caribéennes, et comment raconter l'histoire",
              paragraphs: [
                "L'anglais côtoie des langues créoles, comme le créole jamaïcain (Jamaican Patois), nées du contact entre l'anglais et les langues africaines. La musique est un emblème : calypso et soca à Trinité, ska puis reggae en Jamaïque dans les années 1960, popularisé dans le monde par Bob Marley, lié au mouvement rastafari. La littérature est riche : Derek Walcott, de Sainte-Lucie, prix Nobel 1992, auteur du poème épique Omeros (1990) ; V. S. Naipaul, né à Trinité, prix Nobel 2001 ; Sam Selvon, The Lonely Londoners (1956), sur les premiers migrants à Londres ; Andrea Levy, née à Londres de parents jamaïcains, Small Island (2004).",
                "Pour raconter l'histoire, les connecteurs de temps sont indispensables. When et as soon as introduisent un moment (As soon as the ship arrived, journalists interviewed the passengers). After et before sont suivis d'une proposition, d'un nom ou d'un -ing (After arriving in London, many found work in the NHS). Until (jusqu'à ce que) marque une limite (Freed people had to work as apprentices until 1838). By the time + prétérit s'accompagne souvent d'un past perfect dans la principale (By the time slavery was abolished, millions of Africans had been deported). During + nom (during the war), for + durée (for three centuries), while + proposition (while they were working).",
              ],
              box: { label: "Règle", text: "When / as soon as + proposition. After / before + -ing ou nom. Until : jusqu'à ce que. By the time + prétérit, past perfect (By the time it ended, ... had ...). During + nom ; for + durée ; while + proposition. Since + point de départ, avec le present perfect." },
            },
          ],
          keyPoints: [
            "Caraïbes anglophones : Jamaïque, Trinité-et-Tobago, Barbade, Bahamas... et, sur le continent, Guyana et Belize.",
            "Plantations sucrières et traite transatlantique ; résistances (Tacky, 1760 ; Samuel Sharpe, 1831).",
            "Traite abolie en 1807, esclavage en 1834 (apprentissage jusqu'en 1838) ; travailleurs engagés venus d'Inde.",
            "Indépendances : Jamaïque et Trinité-et-Tobago (1962), Barbade (1966, république en 2021).",
            "Windrush (1948), scandale Windrush (2018), carnaval de Notting Hill ; reggae, Walcott, Naipaul.",
            "Raconter : when, as soon as, after + -ing, until, by the time + past perfect, during / for / while.",
          ],
          example: {
            statement: "Reliez chaque paire de phrases avec le connecteur indiqué : a) The Windrush docked at Tilbury. Journalists came to interview the passengers. (as soon as) b) They arrived in Britain. Many of them found jobs in the NHS. (after + -ing) c) Freed people worked as apprentices. Full emancipation came in 1838. (until) d) Barbados became independent. Britain had ruled the island for more than three centuries. (by the time)",
            solution: [
              "a) As soon as + proposition : « As soon as the Windrush docked at Tilbury, journalists came to interview the passengers. »",
              "b) After + -ing, avec le même sujet dans les deux propositions : « After arriving in Britain, many of them found jobs in the NHS. »",
              "c) Until marque la limite dans le temps : « Freed people had to work as apprentices until full emancipation came in 1838. »",
              "d) By the time + prétérit, past perfect dans la principale : « By the time Barbados became independent in 1966, Britain had ruled the island for more than three centuries. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec during, for ou while : a) Britain ruled Jamaica ___ about three centuries. b) Many Caribbean men served in the British forces ___ the Second World War. c) ___ they were working on London buses, many migrants faced racism. d) The Windrush sailed ___ several weeks before reaching Britain. e) Bob Marley became famous ___ the 1970s.",
              hint: "During + nom (une période) ; for + durée chiffrée (combien de temps) ; while + proposition (sujet + verbe).",
              solution: [
                "a) for : durée (about three centuries).",
                "b) during : période désignée par un nom (the Second World War).",
                "c) While : suivi d'une proposition (they were working).",
                "d) for : durée (several weeks).",
                "e) during : période désignée par un nom (the 1970s).",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes entre parenthèses au temps qui convient : a) By the time the slave trade (be) abolished in 1807, millions of Africans (be) deported. b) As soon as Jamaica (become) independent in 1962, it (join) the Commonwealth. c) After the scandal (break) in 2018, the Home Secretary (resign). d) Since 1966, the Notting Hill Carnival (take) place in the streets of London.",
              hint: "By the time + prétérit, puis past perfect pour l'action antérieure ; since + date appelle le present perfect.",
              solution: [
                "a) was abolished ; had been deported : by the time + prétérit, et past perfect passif pour l'action antérieure.",
                "b) became ; joined : deux actions passées successives, au prétérit.",
                "c) broke ; resigned : prétérit (after suffit à marquer l'ordre des actions ; had broken est aussi possible).",
                "d) has taken place : since + point de départ, action qui dure jusqu'à aujourd'hui, donc present perfect.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Pour une exposition au CDI, rédigez en anglais un panneau de 120 à 150 mots intitulé « The Windrush generation: from hope to scandal », qui raconte les faits de 1948 à aujourd'hui dans l'ordre chronologique, avec au moins quatre connecteurs de temps différents.",
              hint: "Suivez la chronologie : arrivée (1948), contexte (loi de 1948, reconstruction), installation et difficultés, scandale (2018), mémoire (Windrush Day).",
              solution: [
                "Étape 1, la chronologie : 1948 (arrivée, British Nationality Act) ; années 1950 à 1970 (travail, racisme) ; 2018 (scandale, démission) ; depuis 2018 (Windrush Day).",
                "Étape 2, une proposition rédigée : « The Windrush generation: from hope to scandal. On 22 June 1948, the Empire Windrush docked at Tilbury with several hundred passengers from the Caribbean. At that time, Britain needed workers to rebuild the country after the war, and a new law allowed people from the colonies to settle there. After arriving, many found jobs in hospitals, factories and public transport. While they were helping to rebuild Britain, they often faced racism and discrimination. Thousands of Caribbean migrants followed until the early 1970s. Decades later, in 2018, a scandal broke out: people who had arrived legally as children were wrongly treated as illegal immigrants because they had no documents. Some lost their jobs, and some were even deported. A few weeks after the scandal made headlines, the Home Secretary resigned. Since 2018, Windrush Day has been celebrated every year on 22 June. »",
                "Étape 3, vérification : environ 140 mots ; connecteurs de temps : At that time, after the war, After arriving, While, until, Decades later, A few weeks after, Since ; temps adaptés (past perfect pour had arrived, present perfect avec since).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de l'histoire des Caraïbes anglophones dans l'ordre chronologique.",
            items: [
              "L'Angleterre s'empare de la Jamaïque, jusque-là espagnole",
              "Le Royaume-Uni abolit la traite des esclaves",
              "L'abolition de l'esclavage entre en vigueur dans les colonies britanniques",
              "L'Empire Windrush accoste à Tilbury avec des passagers caribéens",
              "La Jamaïque et Trinité-et-Tobago deviennent indépendantes",
              "Le scandale Windrush éclate au Royaume-Uni",
              "La Barbade devient une république",
            ],
          },
          quiz: [
            { q: "The Empire Windrush docked at Tilbury in...", options: ["1834", "1948", "1962", "2018"], answer: 1, why: "Le navire arrive le 22 juin 1948 ; cette date est devenue le Windrush Day." },
            { q: "Barbados became a republic in...", options: ["1966", "1992", "2021", "1807"], answer: 2, why: "Indépendante depuis 1966, la Barbade est devenue une république en 2021." },
            { q: "Which artist made reggae famous worldwide?", options: ["Bob Marley", "Derek Walcott", "Sam Selvon", "Claudia Jones"], answer: 0, why: "Bob Marley a fait connaître le reggae jamaïcain dans le monde entier ; Walcott et Selvon sont des écrivains, Claudia Jones une militante." },
            { q: "___ the abolition of slavery in 1834, freed people still had to work as « apprentices » until 1838.", options: ["During", "After", "Since", "While"], answer: 1, why: "After + nom situe ce qui suit l'abolition ; while exigerait une proposition, since un present perfect." },
            { q: "By the time slavery was abolished, millions of Africans ___ to the Caribbean.", options: ["were deported", "have been deported", "deport", "had been deported"], answer: 3, why: "By the time + prétérit appelle un past perfect pour l'action antérieure, ici au passif." },
          ],
          trap: "Croire que l'abolition de 1807 a mis fin à l'esclavage (elle n'abolit que la traite ; l'esclavage est aboli en 1834, avec un apprentissage jusqu'en 1838), et employer during devant une durée chiffrée (during three centuries au lieu de for three centuries).",
          method: "Construisez une frise en trois couleurs : la colonisation et l'esclavage (1492 à 1838), les indépendances (1962 à 2021) et la diaspora (1948 à aujourd'hui). Racontez-la ensuite à voix haute en anglais avec un connecteur de temps différent pour chaque date.",
        },
      ],
    },
    /* ==================================================================== */
    /* COMPRENDRE ET S'EXPRIMER : LES MÉTHODES                              */
    /* ==================================================================== */
    {
      id: 'methodes-anglais',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprehension-orale',
          title: 'Comprendre un document audio ou vidéo',
          minutes: 30,
          objectives: [
            "Anticiper le contenu d'un document audio ou vidéo à partir de son titre, de sa source et de ses images.",
            "Repérer les informations essentielles, les chiffres, les dates et les marques du point de vue des locuteurs.",
            "Prendre des notes efficaces en anglais au fil des écoutes.",
            "Rendre compte en français d'un document oral de façon fidèle et organisée.",
          ],
          course: [
            {
              heading: "Ce qui est attendu en première",
              paragraphs: [
                "En première, l'anglais compte au baccalauréat par le contrôle continu : vos moyennes annuelles de Première et de Terminale sont prises en compte. Le cycle terminal vise le niveau B2 du Cadre européen commun de référence pour les langues (CECRL) en fin de terminale pour la langue vivante A. En première, vous progressez du niveau B1, où l'on comprend les points essentiels d'un message clair sur un sujet familier, vers le niveau B2, où l'on suit une argumentation plus complexe et où l'on perçoit le point de vue des locuteurs.",
                "Les documents sont authentiques ou proches de l'authentique : extrait de journal télévisé ou radiophonique, interview, podcast, discours, bande-annonce, vidéo d'un créateur de contenu, reportage. Ils durent souvent une à deux minutes et sont généralement écoutés plusieurs fois, avec un temps de prise de notes entre les écoutes. On vous demande le plus souvent d'en rendre compte en français : il ne s'agit pas de traduire, mais de montrer ce que vous avez compris.",
              ],
              box: { label: "Repère", text: "B1 : comprendre les points essentiels d'un message clair sur un sujet familier. B2 (visé en fin de terminale en LVA) : comprendre l'essentiel d'un discours long et complexe, suivre une argumentation, percevoir le point de vue." },
            },
            {
              heading: "Avant l'écoute : anticiper",
              paragraphs: [
                "Le titre, la source (BBC, CNN, un podcast, une chaîne YouTube), la date et les images d'une vidéo sont des indices précieux. Formulez des hypothèses : de quoi va-t-on parler, qui va parler, quel peut être le point de vue ? Mobilisez le vocabulaire attendu : pour un document intitulé « Teens and the four-day school week », pensez à timetable, tired, workload, parents, childcare, results, pros and cons.",
                "Préparez votre feuille de notes avant d'écouter : une zone pour les « 5 W » (Who? What? Where? When? Why?), une zone pour les arguments ou les étapes, une zone pour les chiffres et les noms propres. Vous gagnerez du temps pendant l'écoute.",
              ],
              box: { label: "Méthode", text: "1. Lire le titre, la source et la date. 2. Observer les images. 3. Formuler deux ou trois hypothèses. 4. Lister le vocabulaire attendu. 5. Préparer une feuille de notes en zones (5 W, idées, chiffres)." },
            },
            {
              heading: "Pendant l'écoute : repérer l'essentiel",
              paragraphs: [
                "Ne cherchez pas à tout comprendre. Les mots accentués (noms, verbes, adjectifs, négations) portent le sens, alors que les mots grammaticaux sont réduits. Écoutez d'abord globalement (nature du document, nombre de locuteurs, thème), puis affinez à chaque écoute. Les connecteurs révèlent la structure : but, however, on the other hand (opposition) ; so, that's why (conséquence) ; first, then, finally (étapes).",
                "Les chiffres posent des pièges classiques. L'accent distingue thirTEEN (13) de THIRty (30), fifTEEN de FIFty. Les années se lisent par paires : 1998 se dit nineteen ninety-eight ; 2015 se dit twenty fifteen ou two thousand and fifteen. Les décimales se lisent avec point (3.5 = three point five) et les grands nombres avec million, billion (un milliard). Attention aussi à can, prononcé faiblement /kən/ à la forme affirmative, alors que can't garde une voyelle pleine et accentuée.",
                "Notez en anglais, avec des mots-clés, des abréviations et des symboles (↑ hausse, ↓ baisse, → conséquence, ≠ opposition). Repérez aussi le ton : enthousiasme, inquiétude, ironie, colère se perçoivent dans l'intonation, le débit et le choix des adjectifs (amazing, worrying, ridiculous).",
              ],
              box: { label: "À retenir", text: "Thirteen (accent sur -teen) ≠ thirty (accent sur thir-). 1998 = nineteen ninety-eight. 3.5 = three point five. A billion = un milliard. Can réduit /kən/ ≠ can't accentué." },
            },
            {
              heading: "Après l'écoute : rendre compte en français",
              paragraphs: [
                "Relisez vos notes et reliez-les : c'est souvent à ce moment que le sens global apparaît. Organisez ensuite votre compte rendu en trois temps : présentez le document (nature, source, thème, locuteurs) ; restituez les idées principales dans un ordre logique, avec quelques détails précis (un chiffre, un exemple) ; dégagez le point de vue ou le ton des locuteurs.",
                "Le compte rendu doit être fidèle : n'inventez rien et ne comblez pas les passages non compris par des suppositions présentées comme certaines. Mieux vaut un compte rendu plus court mais exact qu'un texte long et approximatif. Rédigez des phrases complètes et reliées par des connecteurs (d'abord, ensuite, cependant, enfin).",
              ],
              box: { label: "Méthode", text: "Compte rendu : 1) présentation du document ; 2) idées principales dans un ordre logique ; 3) détails précis (chiffres, exemples) ; 4) point de vue et ton des locuteurs. Fidèle, organisé, sans invention." },
            },
          ],
          keyPoints: [
            "Anticiper : titre, source, date, images, hypothèses, vocabulaire attendu.",
            "Écoute globale d'abord (5 W), puis détails, connecteurs et ton aux écoutes suivantes.",
            "Pièges des chiffres : thirteen / thirty, années lues par paires, point décimal, billion = milliard.",
            "Can affirmatif réduit /kən/, can't accentué : écoutez la voyelle.",
            "Notes en anglais, mots-clés et symboles ; compte rendu en français, fidèle et organisé.",
          ],
          example: {
            statement: "Transcription d'un court reportage (document inventé pour l'entraînement) : « In 2019, the small Welsh town of Llanbryn introduced a four-day school week. Five years later, the head teacher, Mrs Owen, says attendance has risen from 89 to 94 per cent. Pupils seem less tired. However, some parents can't find childcare on Fridays and say the reform has made their lives harder. » Relevez les informations essentielles, puis rédigez un compte rendu de trois phrases en français.",
            solution: [
              "Nature et thème : un reportage sur la semaine de quatre jours dans une petite ville galloise (fictive), Llanbryn, depuis 2019.",
              "Chiffres : l'assiduité est passée de 89 % à 94 % en cinq ans (attention : eighty-nine et ninety-four).",
              "Points de vue : la directrice, Mrs Owen, est satisfaite ; « However » introduit les critiques de parents qui ne trouvent pas de mode de garde le vendredi (« can't », forme négative accentuée).",
              "Compte rendu : « Ce reportage présente la semaine de quatre jours adoptée en 2019 par une petite ville du pays de Galles. Selon la directrice, l'assiduité est passée de 89 % à 94 % et les élèves semblent moins fatigués. Cependant, certains parents, faute de mode de garde le vendredi, estiment que la réforme leur complique la vie. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez en chiffres ce que vous entendez : a) thirteen ; b) thirty ; c) nineteen eighty-four ; d) two thousand and twelve ; e) three point five per cent ; f) two billion ; g) seventeen seventy-six.",
              hint: "Les années se lisent par paires de chiffres ; billion correspond à un milliard en français.",
              solution: [
                "a) 13 (accent sur -teen)",
                "b) 30 (accent sur thir-)",
                "c) 1984",
                "d) 2012",
                "e) 3,5 % (en anglais on écrit 3.5 %, avec un point)",
                "f) 2 000 000 000, soit deux milliards",
                "g) 1776",
              ],
            },
            {
              level: 2,
              statement: "Transcription d'un extrait de podcast (document inventé pour l'entraînement) : « Host: Jake, you're nineteen and you've already started your own business. Jake: Yeah, I repair old phones and sell them online. I started in my bedroom three years ago. Host: Was it easy? Jake: Not at all! The first year, I lost money. But now I've got two employees, and last year we sold about fifteen hundred phones. Host: Any advice for young listeners? Jake: Don't wait for the perfect idea. Start small, and learn from your mistakes. » 1) Qui parle et de quoi ? 2) Quelle est l'activité de Jake et depuis quand ? 3) Relevez deux chiffres et ce qu'ils indiquent. 4) Quel connecteur marque un changement, et lequel ? 5) Quel conseil donne-t-il ?",
              hint: "Attention à « fifteen hundred » : c'est une façon courante de dire 1 500.",
              solution: [
                "1) Un animateur de podcast interroge Jake, un jeune entrepreneur de 19 ans.",
                "2) Il répare de vieux téléphones et les revend en ligne ; il a commencé dans sa chambre il y a trois ans (vers 16 ans).",
                "3) Deux employés aujourd'hui ; environ 1 500 téléphones vendus l'an dernier (« fifteen hundred » = 1 500). On peut aussi citer ses 19 ans.",
                "4) « But » marque le passage des difficultés (il a perdu de l'argent la première année) à la réussite actuelle.",
                "5) Ne pas attendre l'idée parfaite, commencer petit et apprendre de ses erreurs.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Transcription d'un extrait de journal radiophonique (document inventé pour l'entraînement) : « Good evening. Scientists in Canada have warned that the number of polar bears in western Hudson Bay has fallen sharply over the past forty years. According to a new report, the main cause is the shorter ice season: bears need sea ice to hunt seals, and the ice now melts earlier in spring. Some local guides, however, say they see more bears near the town of Churchill, but researchers explain that hungry bears simply come closer to people in search of food. » Rendez compte de ce document en français, en 60 à 80 mots.",
              hint: "Distinguez bien l'information principale (la baisse), sa cause (la banquise), l'objection (les guides) et la réponse des chercheurs.",
              solution: [
                "Structure repérée : constat (forte baisse du nombre d'ours sur quarante ans) ; cause (saison de glace plus courte, chasse aux phoques impossible) ; objection introduite par « however » (les guides voient plus d'ours) ; explication des chercheurs (des ours affamés se rapprochent des humains).",
                "Proposition : « Ce journal radiophonique annonce que, selon un rapport de scientifiques canadiens, le nombre d'ours polaires de l'ouest de la baie d'Hudson a fortement diminué en quarante ans. La cause principale est le raccourcissement de la saison des glaces : la banquise, indispensable pour chasser le phoque, fond plus tôt au printemps. Certains guides disent pourtant voir davantage d'ours près de Churchill, mais les chercheurs expliquent que ces animaux affamés s'approchent des habitations pour se nourrir. »",
                "Vérification : environ 75 mots, aucune information ajoutée, le connecteur d'opposition (« pourtant », « mais ») reflète « however » et « but ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les réflexes de la compréhension de l'oral.",
            statements: [
              { text: "Il faut comprendre chaque mot pour comprendre un document.", true: false, why: "Les mots accentués, les connecteurs et le contexte suffisent souvent à reconstruire le sens." },
              { text: "Fifteen est accentué sur la seconde syllabe, fifty sur la première.", true: true, why: "FifTEEN et FIFty : l'accent permet de distinguer 15 de 50." },
              { text: "Can affirmatif est souvent réduit à /kən/, alors que can't garde une voyelle pleine.", true: true, why: "C'est l'indice le plus sûr pour distinguer l'affirmation de la négation." },
              { text: "L'année 1998 se lit généralement « one thousand nine hundred ninety-eight ».", true: false, why: "Les années se lisent par paires : nineteen ninety-eight." },
              { text: "Un compte rendu doit reproduire l'ordre exact des phrases entendues.", true: false, why: "Il restitue les idées principales dans un ordre logique, en les hiérarchisant." },
              { text: "Le titre et la source d'un document aident à anticiper son contenu.", true: true, why: "Ils permettent de formuler des hypothèses et de mobiliser le vocabulaire utile." },
              { text: "However et on the other hand signalent souvent un changement de point de vue.", true: true, why: "Ce sont des connecteurs d'opposition, qui structurent le propos." },
            ],
          },
          quiz: [
            { q: "In « fourteen », the stress falls on...", options: ["the first syllable", "the second syllable", "both syllables equally strongly"], answer: 1, why: "FourTEEN est accentué sur -teen, contrairement à FORty." },
            { q: "How is the year 2015 usually said?", options: ["twenty fifteen", "two zero one five", "twenty hundred fifteen", "two thousand fifteen hundred"], answer: 0, why: "On dit twenty fifteen ou two thousand and fifteen." },
            { q: "Which word introduces a contrast?", options: ["moreover", "therefore", "however", "for instance"], answer: 2, why: "However marque une opposition ; moreover ajoute, therefore introduit une conséquence, for instance un exemple." },
            { q: "During the first listening, the priority is to identify...", options: ["every date, number and name mentioned", "the spelling of all the difficult words", "the exact words used by each speaker", "the document type and the topic"], answer: 3, why: "La première écoute est globale : nature du document, locuteurs, thème. Les détails viennent ensuite." },
            { q: "« The number of members has tripled » means it has been multiplied by...", options: ["two", "three", "thirty", "thirteen"], answer: 1, why: "To triple signifie tripler, multiplier par trois ; to double, multiplier par deux." },
          ],
          trap: "Confondre les nombres en -teen et en -ty (thirteen et thirty), et remplir les passages non compris par des inventions au lieu de s'en tenir à ce qui a réellement été entendu.",
          method: "Entraînez-vous avec des documents courts dont la transcription est disponible : écoutez une première fois sans rien noter, une deuxième fois en prenant des notes, résumez à voix haute en français, puis vérifiez avec la transcription en notant les mots qui vous ont échappé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'comprehension-ecrite',
          title: 'Comprendre un texte écrit et en rendre compte',
          minutes: 30,
          objectives: [
            "Identifier la nature, la source et le contexte d'un texte écrit à partir de son paratexte.",
            "Inférer le sens des mots inconnus grâce au contexte, à la formation des mots et aux mots transparents, en évitant les faux amis.",
            "Répondre à des questions de compréhension en justifiant par de courtes citations.",
            "Rendre compte d'un texte de façon fidèle, organisée et reformulée.",
          ],
          course: [
            {
              heading: "Identifier le document avant de lire",
              paragraphs: [
                "Le paratexte est tout ce qui entoure le texte : titre, sous-titre, chapeau, nom de l'auteur, source, date, illustration. Il permet d'identifier la nature du document : article de presse (news article), éditorial (editorial), tribune (op-ed), extrait de roman (novel extract), nouvelle (short story), discours (speech), billet de blog (blog post), publicité (advertisement). On ne lit pas de la même façon un fait divers, qui informe, et une tribune, qui défend une opinion.",
                "Avant de lire, posez les questions « 5 W » à partir du paratexte et formulez des hypothèses. Un article d'un quotidien britannique intitulé « Why young Britons are giving up their cars » (exemple inventé) laisse attendre un phénomène de société, des causes (coût, écologie, transports), des témoignages et peut-être des chiffres.",
              ],
              box: { label: "Méthode", text: "Paratexte (titre, source, date, auteur) → nature du document → hypothèses (5 W) → première lecture globale → seconde lecture détaillée, crayon en main → réponses justifiées." },
            },
            {
              heading: "Lire efficacement et deviner le sens des mots",
              paragraphs: [
                "Faites une première lecture globale, sans dictionnaire et sans vous arrêter aux mots inconnus, pour saisir le thème et le ton. Lors d'une seconde lecture, soulignez les idées clés et entourez les connecteurs (however, moreover, therefore, although), qui dessinent le plan du texte. Dans un article, la première phrase de chaque paragraphe (topic sentence) annonce souvent son idée principale.",
                "Pour un mot inconnu, utilisez le contexte (la phrase est-elle positive ou négative ?), les mots transparents (environment, government, society) et la formation des mots. Préfixes : un-, in-, dis- (contraire), mis- (erreur), over- (excès), under- (insuffisance), re- (répétition). Suffixes : -ness, -ment, -ship (noms), -ful (avec), -less (sans), -able (possible). Ainsi, unaffordable signifie « inabordable » et homelessness « le sans-abrisme ».",
                "Méfiez-vous des faux amis : actually (en fait), eventually (finalement), currently (actuellement), library (bibliothèque), sensible (raisonnable), to attend (assister à), to pretend (faire semblant), a journey (un voyage, un trajet), a novel (un roman).",
              ],
              box: { label: "Règle", text: "Préfixes : un-, in-, dis- (contraire) ; mis- (erreur) ; over- (excès) ; under- (manque) ; re- (de nouveau). Suffixes : -ness, -ment, -ship (noms) ; -ful (plein de) ; -less (sans) ; -able (qui peut être)." },
            },
            {
              heading: "Répondre aux questions et justifier",
              paragraphs: [
                "Les questions de compréhension prennent plusieurs formes : vrai ou faux à justifier, questions ouvertes, recherche de synonymes ou d'équivalents, identification des points de vue. Pour un vrai ou faux, la justification est une courte citation entre guillemets, suivie du numéro de ligne : « nearly half of them » (l. 12). Une citation de quelques mots, bien choisie, vaut mieux qu'un paragraphe recopié.",
                "Pour une question ouverte en anglais, répondez avec vos propres mots, en reformulant le texte plutôt qu'en le recopiant, puis appuyez-vous si nécessaire sur une citation. Pour un texte de fiction, repérez le narrateur (première ou troisième personne), le cadre (setting), les personnages, leurs relations et leurs sentiments, en vous appuyant sur les verbes, les adjectifs et les dialogues. Pour un texte d'opinion, distinguez les faits (vérifiables) des jugements (adjectifs évaluatifs, modaux, questions rhétoriques).",
              ],
              box: { label: "À retenir", text: "Vrai ou faux : réponse + citation courte entre guillemets + ligne. Question ouverte : reformuler avec ses mots. Fiction : narrateur, cadre, personnages, sentiments. Opinion : faits ou jugements." },
            },
            {
              heading: "Rendre compte d'un texte",
              paragraphs: [
                "Le compte rendu, en français ou en anglais selon la consigne, présente d'abord le document (nature, auteur, source, date, thème), puis restitue les idées principales dans un ordre logique, et dégage enfin l'intention de l'auteur ou le ton. Il est fidèle (aucune information ajoutée), reformulé (aucune phrase recopiée) et hiérarchisé (l'essentiel d'abord, quelques détails significatifs ensuite).",
                "N'y introduisez pas votre opinion si la consigne ne la demande pas, et respectez la longueur indiquée. En anglais, les verbes de compte rendu vous aident à varier : the author explains, argues, points out, criticises, suggests, concludes ; the text deals with, focuses on.",
              ],
              box: { label: "Vocabulaire", text: "The text deals with / focuses on... ; the author argues / claims / points out / criticises / suggests / concludes that... ; the tone is ironic / critical / nostalgic / humorous / neutral." },
            },
          ],
          keyPoints: [
            "Paratexte d'abord : titre, source, date, auteur, nature du document.",
            "Première lecture globale, seconde lecture détaillée ; repérer topic sentences et connecteurs.",
            "Deviner le sens : contexte, mots transparents, préfixes et suffixes ; se méfier des faux amis.",
            "Justifier par une citation courte entre guillemets, avec la ligne.",
            "Compte rendu fidèle, reformulé, hiérarchisé ; pas d'opinion sauf consigne contraire.",
          ],
          example: {
            statement: "Texte d'entraînement inventé : « (1) For decades, owning a car was a rite of passage for British teenagers. (2) Today, however, fewer young people are taking their driving test. (3) Many say lessons and insurance are simply unaffordable. (4) Others, especially in big cities, insist that public transport and bikes are enough. (5) Eventually, some may change their minds when they start a family. » Dites si les affirmations sont vraies ou fausses, en justifiant : a) Young people are more interested in driving than before. b) The cost of driving is one reason. c) All young people will never drive.",
            solution: [
              "a) Faux : « fewer young people are taking their driving test » (l. 2). Le connecteur « however » oppose le passé et le présent.",
              "b) Vrai : « lessons and insurance are simply unaffordable » (l. 3). Unaffordable = un + afford + able, « trop cher ».",
              "c) Faux : « Eventually, some may change their minds » (l. 5). Eventually est un faux ami : il signifie « finalement, à terme », et may exprime une possibilité.",
              "Bilan : chaque justification est courte, entre guillemets, avec le numéro de ligne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez ces mots, puis donnez leur sens : a) unaffordable ; b) homelessness ; c) overcrowded ; d) misunderstanding ; e) powerless ; f) to rebuild.",
              hint: "Repérez la racine, puis le sens du préfixe et du suffixe.",
              solution: [
                "a) un + afford (avoir les moyens) + able : inabordable, trop cher.",
                "b) home + less (sans) + ness (nom) : le sans-abrisme, le fait d'être sans domicile.",
                "c) over (excès) + crowded (bondé) : surpeuplé, surchargé.",
                "d) mis (erreur) + understanding (compréhension) : un malentendu.",
                "e) power + less (sans) : impuissant.",
                "f) re (de nouveau) + build (construire) : reconstruire.",
              ],
            },
            {
              level: 2,
              statement: "Texte d'entraînement inventé : « (1) When the town library closed last year, nobody seemed to care. (2) Actually, it had been almost empty for months. (3) But a group of teenagers decided to reopen it themselves. (4) They collected donations, repainted the walls and organised reading clubs. (5) Today, the place is busier than ever. » 1) Trouvez dans le texte un mot qui signifie « en fait ». 2) Trouvez un mot qui signifie « bibliothèque ». 3) Vrai ou faux, en justifiant : a) The library was very popular before it closed. b) Adults reopened the library. c) The library is now successful. 4) Quel connecteur marque le tournant du texte ?",
              hint: "Deux faux amis sont cachés dans le texte : ne vous fiez pas à leur ressemblance avec le français.",
              solution: [
                "1) Actually (l. 2) : faux ami, il signifie « en fait » et non « actuellement ».",
                "2) library (l. 1) : faux ami, il signifie « bibliothèque » et non « librairie » (a bookshop).",
                "3a) Faux : « it had been almost empty for months » (l. 2).",
                "3b) Faux : « a group of teenagers decided to reopen it » (l. 3).",
                "3c) Vrai : « the place is busier than ever » (l. 5).",
                "4) « But » (l. 3) marque le passage de l'indifférence à l'initiative des adolescents.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Extrait de récit inventé pour l'entraînement : « My grandfather arrived in Bristol in 1957 with a cardboard suitcase and a letter of recommendation that nobody ever read. He used to tell us that the rain surprised him less than the silence of the people on the bus. For years, he drove those same buses, whistling calypso songs that his passengers pretended not to hear. When he retired, the whole depot came to his party. “I came for five years,” he laughed. “I stayed for fifty.” » 1) Identifiez le narrateur et le personnage principal. 2) Relevez deux difficultés rencontrées à l'arrivée. 3) Comment la relation avec les autres évolue-t-elle ? Justifiez. 4) Rendez compte de l'extrait en français en 50 à 70 mots.",
              hint: "Comparez le début (silence, lettre jamais lue) et la fin (fête de départ) : le contraste montre une évolution.",
              solution: [
                "1) Un récit à la première personne : le narrateur est le petit-fils (« My grandfather »), qui raconte la vie de son grand-père, personnage principal.",
                "2) L'indifférence des autres : sa lettre de recommandation n'est jamais lue ; le silence des passagers dans le bus le surprend plus que la pluie.",
                "3) Elle passe de l'indifférence (« pretended not to hear ») à l'affection : « the whole depot came to his party ». La phrase finale, « I came for five years. I stayed for fifty », montre qu'il a fait sa vie en Angleterre.",
                "4) Proposition : « Le narrateur raconte l'arrivée de son grand-père à Bristol en 1957, avec une simple valise en carton. Accueilli avec indifférence, il est surtout frappé par le silence des passagers des bus, qu'il conduira pendant des années en sifflant des airs de calypso. À sa retraite, tous ses collègues fêtent son départ : venu pour cinq ans, il est resté cinquante ans. » (environ 60 mots)",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Attention aux faux amis : associez chaque mot anglais à son vrai sens.",
            pairs: [
              { left: "actually", right: "en fait" },
              { left: "eventually", right: "finalement, à terme" },
              { left: "library", right: "bibliothèque" },
              { left: "sensible", right: "raisonnable" },
              { left: "to attend", right: "assister à" },
              { left: "currently", right: "actuellement" },
            ],
          },
          quiz: [
            { q: "« Eventually » means...", options: ["éventuellement", "finalement", "évidemment", "actuellement"], answer: 1, why: "Eventually est un faux ami : il signifie « finalement, à terme » ; « éventuellement » se dit possibly." },
            { q: "A « topic sentence » is...", options: ["the main sentence of a paragraph", "the title printed above the article", "a quotation taken from another newspaper"], answer: 0, why: "La topic sentence, souvent en début de paragraphe, en annonce l'idée principale." },
            { q: "« Unaffordable » means...", options: ["very cheap", "not available", "easy to find", "too expensive"], answer: 3, why: "Un (contraire) + afford (avoir les moyens) + able (possible) : que l'on ne peut pas se payer." },
            { q: "To justify a true or false answer, you should...", options: ["copy the whole paragraph that contains the answer", "explain your personal opinion in detail", "quote a few words and give the line"], answer: 2, why: "Une justification efficace est une citation courte entre guillemets, avec le numéro de ligne." },
            { q: "Which connector expresses a consequence?", options: ["although", "therefore", "nevertheless", "besides"], answer: 1, why: "Therefore signifie « par conséquent » ; although et nevertheless expriment la concession, besides l'addition." },
          ],
          trap: "Se laisser piéger par les faux amis (actually lu comme « actuellement », library comme « librairie ») et recopier de longs passages au lieu de citer quelques mots et de reformuler.",
          method: "Constituez au fil de l'année une liste personnelle de faux amis et de mots construits (préfixe, racine, suffixe) rencontrés dans vos textes, et relisez-la avant chaque devoir : ce sont souvent les mêmes pièges qui reviennent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expression-ecrite',
          title: 'Rédiger un essai ou un article argumenté',
          minutes: 35,
          objectives: [
            "Analyser une consigne d'expression écrite : forme demandée, question posée, longueur attendue.",
            "Construire un essai argumenté : introduction, paragraphes organisés, conclusion.",
            "Respecter les codes de différentes formes : essai, article, lettre, discours, billet de blog.",
            "Rédiger dans un registre adapté et relire sa production avec méthode.",
          ],
          course: [
            {
              heading: "Analyser la consigne",
              paragraphs: [
                "Lisez la consigne deux fois et soulignez trois éléments. La forme demandée (essay, article, letter, email, speech, blog post, review, dialogue) : chacune a ses codes. La question précise : « Should... ? », « To what extent... ? », « Discuss » n'appellent pas la même réponse ; « To what extent » demande une réponse nuancée, du « pas du tout » au « tout à fait ». La longueur attendue : respectez-la, car une copie trop courte ne montre pas assez vos capacités et une copie trop longue multiplie les erreurs.",
                "Identifiez aussi le destinataire et le registre : un essai ou une lettre au maire exigent un registre soutenu ; un billet de blog pour des camarades admet un ton plus personnel. Enfin, cherchez dans votre mémoire les références étudiées en classe (axes du programme, œuvres, faits datés) qui pourront nourrir vos arguments.",
              ],
              box: { label: "Méthode", text: "Souligner : la forme (essay, article, letter...), la question (Should...? To what extent...?), la longueur, le destinataire. Puis lister ses idées et ses exemples au brouillon." },
            },
            {
              heading: "Construire un essai argumenté",
              paragraphs: [
                "L'introduction capte l'attention par une accroche (un fait, une question, une situation), situe le sujet, pose clairement la question et annonce la démarche. Les paragraphes du développement suivent souvent la méthode PEEL : Point (l'idée, énoncée dans une topic sentence), Evidence (un exemple précis, un fait daté, une référence), Explanation (ce que l'exemple montre), Link (le lien avec la question ou la transition vers le paragraphe suivant).",
                "Deux plans sont fréquents. Le plan dialectique : arguments pour, arguments contre, position personnelle nuancée. Le plan problème, causes, solutions, adapté aux sujets de société. La conclusion répond clairement à la question, sans introduire d'argument nouveau, et peut s'ouvrir sur une perspective. Une idée par paragraphe, un exemple par idée, un connecteur à chaque transition : c'est la base de la cohérence.",
              ],
              box: { label: "Formule", text: "PEEL : Point (l'idée) ; Evidence (l'exemple, le fait) ; Explanation (ce qu'il prouve) ; Link (retour à la question, transition). Introduction : accroche, contexte, question, annonce. Conclusion : réponse claire, ouverture." },
            },
            {
              heading: "Les codes des autres formes",
              paragraphs: [
                "Un article de presse a un titre (headline) accrocheur, souvent un chapeau (standfirst) qui résume l'enjeu, puis des paragraphes courts ; il peut citer des témoignages (inventés et présentés comme tels dans un exercice). Un discours s'adresse directement au public (Ladies and gentlemen, Fellow students), emploie we, des questions oratoires, des répétitions et un appel final. Un billet de blog a un titre, un ton plus personnel et interpelle les lecteurs.",
                "La lettre formelle obéit à des conventions britanniques précises : si vous ne connaissez pas le nom du destinataire, vous commencez par Dear Sir or Madam et terminez par Yours faithfully ; si vous le connaissez (Dear Mr Smith, Dear Ms Patel), vous terminez par Yours sincerely. La lettre ou l'email informel commence par Dear Tom ou Hi Tom et se termine par Best wishes, Love ou See you soon.",
              ],
              box: { label: "Repère", text: "Dear Sir or Madam → Yours faithfully. Dear Mr / Ms + nom → Yours sincerely. Informel : Hi Tom → Best wishes, See you soon. Article : headline + standfirst. Discours : adresse au public, we, appel final." },
            },
            {
              heading: "Soigner la langue et relire",
              paragraphs: [
                "Dans un essai ou une lettre formelle, évitez les contractions (do not plutôt que don't), les mots vagues (thing, stuff, a lot of, very good) et préférez un lexique précis (numerous, considerable, essential, an issue, a challenge). Variez les connecteurs : addition (moreover, furthermore), opposition (however, whereas), concession (although, despite), conséquence (therefore, as a result), exemple (for instance, such as), conclusion (to sum up, all in all).",
                "Relisez avec une liste des erreurs fréquentes : le -s de la troisième personne du singulier (she thinks) ; les verbes irréguliers (taught, chose, brought) ; people suivi d'un verbe au pluriel (people are) ; information, advice et news, indénombrables (some advice, sans -s) ; l'adjectif invariable (young people, jamais youngs) ; pas d'article devant une notion générale (Nature is fragile, Young people are worried) ; for et since avec le present perfect. Vérifiez enfin la longueur en comptant les mots d'une ligne type et en multipliant par le nombre de lignes.",
              ],
              box: { label: "À retenir", text: "Registre soutenu : pas de contractions, pas de mots vagues. Pièges : she thinks ; people are ; advice et information indénombrables ; young people (adjectif invariable) ; Nature is (pas d'article pour une notion générale)." },
            },
          ],
          keyPoints: [
            "Souligner dans la consigne : forme, question, longueur, destinataire.",
            "Introduction : accroche, contexte, question, annonce ; conclusion : réponse claire et ouverture.",
            "Paragraphes PEEL : Point, Evidence, Explanation, Link ; une idée et un exemple par paragraphe.",
            "Codes : headline pour un article ; Dear Sir or Madam → Yours faithfully ; adresse au public pour un discours.",
            "Registre soutenu sans contractions ; connecteurs variés ; relecture avec une liste d'erreurs fréquentes.",
          ],
          example: {
            statement: "Sujet : « To what extent can individuals fight climate change? » (essai de 150 à 180 mots). Analysez la consigne, proposez un plan, puis rédigez l'introduction.",
            solution: [
              "Forme : un essai, donc registre soutenu, sans contractions. Question : « To what extent » appelle une réponse nuancée. Longueur : 150 à 180 mots, soit une introduction, deux paragraphes et une conclusion.",
              "Plan : 1) ce que les individus peuvent faire (transports, alimentation, mobilisation, exemple de Greta Thunberg) ; 2) les limites (poids des États et des entreprises, accord de Paris) ; conclusion : les individus comptent, surtout lorsqu'ils agissent ensemble et font pression sur les décideurs.",
              "Introduction : « In 2018, a fifteen-year-old Swedish girl began a school strike that inspired millions of young people around the world. Her example raises an important question: to what extent can individuals fight climate change on their own? »",
              "Vérification : l'accroche est un fait daté exact, la question est reformulée, le registre est soutenu (aucune contraction).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez les erreurs de ces phrases extraites de copies : a) The young are worried about the nature. b) Peoples thinks that it's a good thing. c) She give me many advices. d) I live in Lyon since 2019. e) It's a very very important problem.",
              hint: "Pensez aux articles devant les notions générales, aux noms indénombrables, au -s de la troisième personne, au present perfect avec since et au registre.",
              solution: [
                "a) « Young people are worried about nature. » (pas d'article devant une notion générale ; young people est plus naturel que the young)",
                "b) « People think that it is a positive development. » (people est déjà pluriel, verbe sans -s ; pas de contraction et pas de mot vague comme thing)",
                "c) « She gave me a lot of advice. » ou, plus soutenu, « She gave me some useful advice. » (advice est indénombrable ; le prétérit de give est gave)",
                "d) « I have lived in Lyon since 2019. » (since + point de départ : present perfect)",
                "e) « It is a crucial issue. » (registre soutenu : un adjectif précis plutôt que very very)",
              ],
            },
            {
              level: 2,
              statement: "Rédigez un paragraphe argumenté selon la méthode PEEL (60 à 80 mots), qui défend l'idée suivante : « Social media can help young people get involved in politics. » Puis identifiez chaque étape (P, E, E, L).",
              hint: "Choisissez un exemple précis et vérifiable étudié dans le cours (un mouvement né ou amplifié sur les réseaux sociaux).",
              solution: [
                "Point : « Social media can encourage young people to take part in political life. »",
                "Evidence : « In 2018, Greta Thunberg's solitary school strike spread around the world thanks to social networks, and by 2019 millions of students were joining climate strikes. »",
                "Explanation : « This shows that online platforms allow young people to share information quickly and to organise collective action without traditional organisations. »",
                "Link : « Therefore, social media can be a powerful gateway to political engagement, even if it is not enough on its own. »",
                "Vérification : environ 75 mots ; une seule idée, un exemple daté et exact, une explication, un lien avec la question.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Sujet : « With instant translation apps, is learning English still useful? » Rédigez un article de 150 à 180 mots pour le journal de votre lycée, avec un titre, en présentant les deux points de vue avant de donner le vôtre.",
              hint: "Un article a un titre accrocheur et interpelle les lecteurs ; n'oubliez pas les limites des outils de traduction (nuances, culture, relations humaines).",
              solution: [
                "Étape 1, le plan : titre ; accroche (les applications de traduction dans la poche) ; 1) arguments pour l'inutilité (rapidité, gratuité, qualité croissante) ; 2) arguments contre (nuances, humour, culture, confiance, emploi) ; position.",
                "Étape 2, une proposition rédigée : « Lost in translation? Why English still matters. Today, anyone with a smartphone can order a meal in Tokyo or read a newspaper from Chicago in seconds. So, why spend years learning English? Some students argue that translation apps are fast, free and increasingly accurate. For tourists or simple exchanges, they are certainly useful. However, a language is much more than a code. Apps often miss humour, irony or cultural references, and a machine cannot build trust in a job interview or a friendship. Moreover, English remains the main language of international science, business and the internet: understanding it directly gives access to information without filters. Finally, learning a language trains our memory and opens our minds to other ways of thinking. In my opinion, translation apps are excellent assistants, but they will not replace the pleasure and the power of speaking for yourself. So, keep learning: your phone cannot travel the world for you! »",
                "Étape 3, vérification : environ 155 mots ; titre ; les deux points de vue (Some students argue... / However...) ; connecteurs variés (However, Moreover, Finally, In my opinion) ; adresse finale aux lecteurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la rédaction d'un essai.",
            items: [
              "Analyser la consigne : forme, question, longueur",
              "Chercher des idées et des exemples au brouillon",
              "Construire le plan : introduction, paragraphes, conclusion",
              "Rédiger l'introduction, qui pose la question",
              "Rédiger les paragraphes, une idée et un exemple chacun",
              "Rédiger la conclusion, qui répond clairement à la question",
              "Relire : sens, verbes, orthographe, nombre de mots",
            ],
          },
          quiz: [
            { q: "Which ending matches a letter beginning « Dear Sir or Madam »?", options: ["Yours faithfully", "Love", "Best wishes from all of us", "Cheers"], answer: 0, why: "Quand on ne connaît pas le nom du destinataire, la lettre formelle se termine par Yours faithfully." },
            { q: "Which sentence is correct?", options: ["Young people is worried.", "The young people are worried about the nature.", "Young people are worried about nature.", "Young peoples are worried about nature."], answer: 2, why: "People est pluriel (verbe are) et invariable, et une notion générale comme nature ne prend pas d'article." },
            { q: "In a formal essay, you should avoid...", options: ["linking words between your paragraphs", "contractions like « don't »", "precise examples from the news", "a clear conclusion"], answer: 1, why: "Le registre soutenu évite les contractions : do not, it is, cannot." },
            { q: "In the PEEL method, the first « E » stands for...", options: ["Ending", "Essay", "Exercise", "Evidence"], answer: 3, why: "Point, Evidence, Explanation, Link : l'Evidence est l'exemple ou le fait qui appuie l'idée." },
            { q: "Which noun is uncountable in English?", options: ["idea", "suggestion", "advice", "opinion"], answer: 2, why: "Advice est indénombrable : some advice, a piece of advice, jamais advices." },
          ],
          trap: "Commencer à rédiger sans plan et sans avoir identifié la forme demandée, puis produire une suite d'idées sans exemples précis, dans un registre familier (contractions, thing, a lot of).",
          method: "Gardez toujours cinq minutes pour une relecture en trois passages : le sens et la structure, puis les verbes (temps, accords, -s), enfin l'orthographe, les articles et les indénombrables. Une relecture ciblée corrige bien plus d'erreurs qu'une relecture générale.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expression-orale',
          title: 'Prendre la parole et interagir à l’oral',
          minutes: 30,
          objectives: [
            "Présenter un document ou un point de vue en continu, de façon structurée, à partir de notes.",
            "Interagir dans un échange : donner son avis, réagir, nuancer, demander des précisions.",
            "Mettre en œuvre des stratégies de compensation quand un mot manque.",
            "Améliorer sa prononciation : accent de mot, terminaisons en -ed, intonation.",
          ],
          course: [
            {
              heading: "Prendre la parole en continu",
              paragraphs: [
                "L'oral en continu consiste à parler seul, quelques minutes : présenter un document, exposer un point de vue, raconter une expérience. Au niveau visé, vous devez pouvoir développer une argumentation claire, en mettant en évidence les points importants et en donnant des exemples. Ne rédigez pas votre texte en entier : lire un texte écrit rend la voix monotone et vous coupe de l'auditoire. Notez seulement des mots-clés et le plan.",
                "Structurez votre propos et annoncez-le : Today I'm going to talk about... First, I'll present the document, then I'll explain..., and finally I'll give my opinion. Pour présenter un document : sa nature et sa source (This is a photo / an article / a cartoon published in...), son thème (It deals with...), sa description, son interprétation (It suggests that... It may symbolise...), le lien avec un axe du programme et votre avis.",
              ],
              box: { label: "Méthode", text: "Présenter un document : nature et source → thème → description → interprétation → lien avec un axe du programme → avis personnel. Notes en mots-clés, jamais un texte rédigé." },
            },
            {
              heading: "Décrire une image",
              paragraphs: [
                "Pour décrire une photo, un dessin de presse ou une affiche, allez du général au particulier. Situez les éléments : in the foreground (au premier plan), in the background (à l'arrière-plan), in the middle, on the left, on the right, at the top, at the bottom. Décrivez au présent en be + -ing pour les actions représentées : A young woman is holding a placard.",
                "Puis interprétez avec prudence, grâce aux modaux et aux verbes d'apparence : It seems that..., She looks worried, The picture might represent..., The artist probably wants to denounce... Terminez par le message du document et votre réaction.",
              ],
              box: { label: "Vocabulaire", text: "In the foreground / background ; in the middle ; on the left / right ; at the top / bottom. It seems that... ; he looks + adjectif ; it might / may represent... ; the message is that..." },
            },
            {
              heading: "Interagir : réagir, nuancer, relancer",
              paragraphs: [
                "En interaction (débat, échange avec le professeur ou un camarade), il faut écouter et réagir. Donner son avis : In my opinion..., As far as I'm concerned..., I strongly believe that... Être d'accord : I totally agree, That's a good point, Exactly. Nuancer ou contredire poliment : I see your point, but..., I'm not sure I agree, That may be true, but... Ajouter un argument : What's more..., Not to mention...",
                "Demander une précision : Could you say that again, please? What do you mean by...? Do you mean that...? Gagner du temps : Well..., Let me think..., That's an interesting question. Si un mot manque, contournez l'obstacle par la paraphrase : It's a kind of..., It's something you use to..., It's the opposite of..., It's a person who... C'est une compétence évaluée : savoir se faire comprendre malgré un trou de vocabulaire.",
              ],
              box: { label: "À retenir", text: "Avis : In my opinion, I strongly believe. Accord : I totally agree. Désaccord poli : I see your point, but... Précision : What do you mean by...? Paraphrase : It's a kind of... / It's something you use to..." },
            },
            {
              heading: "Prononciation et intonation",
              paragraphs: [
                "L'accent de mot est essentiel : un mot mal accentué peut devenir incompréhensible. Il se déplace parfois dans une même famille : PHOtograph, phoTOgraphy, photoGRAPHic ; ECOnomy, ecoNOmic. La terminaison -ed du prétérit se prononce /t/ après une consonne sourde (worked, stopped, laughed), /d/ après un son sonore (played, lived, cleaned) et /ɪd/, avec une syllabe en plus, seulement après t ou d (wanted, needed, visited).",
                "Le h est généralement aspiré en anglais : hate se distingue de ate, hear de ear. Les sons th (/θ/ dans think, /ð/ dans this) se prononcent la langue entre les dents. L'intonation est le plus souvent descendante dans les phrases affirmatives et les questions ouvertes (Where do you live?), montante dans les questions fermées (Do you live here?). Enfin, la fluidité compte autant que la correction : mieux vaut parler de façon continue avec quelques erreurs que s'arrêter à chaque mot.",
              ],
              box: { label: "Règle", text: "-ed : /t/ après une consonne sourde (worked) ; /d/ après un son sonore (played) ; /ɪd/ après t ou d (wanted). Intonation descendante : affirmation, question ouverte ; montante : question fermée (yes / no)." },
            },
          ],
          keyPoints: [
            "Oral en continu : plan annoncé, notes en mots-clés, jamais de texte lu.",
            "Présenter un document : nature, thème, description, interprétation, lien avec un axe, avis.",
            "Décrire une image : foreground, background, on the left ; interpréter avec seem, look, might.",
            "Interagir : I see your point, but... ; What do you mean by...? ; paraphraser si un mot manque.",
            "Prononciation : accent de mot, -ed en /t/, /d/ ou /ɪd/, h aspiré, intonation montante des questions fermées.",
          ],
          example: {
            statement: "Vous devez présenter en une minute une photo (décrite ici en français) : au premier plan, une adolescente tient une pancarte « There is no planet B » ; à l'arrière-plan, une foule de jeunes manifestants devant un bâtiment officiel ; le ciel est gris. Proposez vos notes en mots-clés, puis le début de votre présentation.",
            solution: [
              "Notes : photo, climate march ; foreground : teenage girl, placard « no planet B » ; background : crowd, official building ; grey sky ; message : urgency, youth ; axe 5, humain et nature ; opinion.",
              "Présentation du document : « This photo shows a climate march, probably organised by young people in front of a government building. »",
              "Description : « In the foreground, a teenage girl is holding a placard that says “There is no planet B”. In the background, we can see a large crowd of young demonstrators. »",
              "Interprétation : « The grey sky might symbolise the threat hanging over our future. The message seems clear: young people want leaders to act now, because we cannot replace our planet. »",
              "Lien et avis : « This document illustrates the link between human beings and nature. In my opinion, such marches are useful because they put pressure on decision-makers. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces verbes selon la prononciation de -ed (/t/, /d/ ou /ɪd/) : worked, played, wanted, needed, laughed, lived, visited, stopped, cleaned.",
              hint: "Prononcez la base verbale et écoutez son dernier son : t ou d, son sourd, ou son sonore.",
              solution: [
                "/t/ (après une consonne sourde) : worked, laughed (le son final de laugh est /f/), stopped.",
                "/d/ (après un son sonore) : played, lived, cleaned.",
                "/ɪd/ (après t ou d, une syllabe en plus) : wanted, needed, visited.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce débat avec les expressions qui conviennent : I see your point, but ; What do you mean by ; I totally agree ; Let me think ; In my opinion. « A : ___, school uniforms should be compulsory: they reduce inequalities. B : ___ they also limit our freedom of expression. A : ___ “freedom of expression”? B : Well, ___... Clothes are a way of showing who you are. C : ___ with B. Our style is part of our identity. »",
              hint: "Repérez la fonction de chaque réplique : donner son avis, nuancer, demander une précision, gagner du temps, approuver.",
              solution: [
                "1) In my opinion : A donne son avis au début du débat.",
                "2) I see your point, but : B reconnaît l'argument de A avant de le nuancer.",
                "3) What do you mean by : A demande une précision sur une expression.",
                "4) Let me think : B gagne du temps pour formuler sa réponse.",
                "5) I totally agree : C approuve B.",
              ],
            },
            {
              level: 3,
              statement: "Type devoir de contrôle continu. Préparez une prise de parole de deux minutes sur la question : « Should English be the only language of international communication? » Rédigez vos notes en mots-clés, puis le texte de votre introduction et de votre conclusion, et indiquez deux expressions que vous utiliserez si votre interlocuteur vous contredit.",
              hint: "Les notes doivent tenir en quelques lignes ; l'introduction annonce le plan, la conclusion répond à la question. Pensez aux arguments culturels et pratiques.",
              solution: [
                "Notes : Global English, science, business, internet, travel → practical ; BUT cultural diversity, endangered languages, translation apps, inequality (native speakers favoured) ; opinion : lingua franca yes, only language no.",
                "Introduction : « Today, English is spoken all over the world, in science, business and on the internet. But should it be the only language of international communication? First, I'll explain why English is so useful; then, I'll show the limits of a single global language; finally, I'll give my opinion. »",
                "Conclusion : « To sum up, English is a wonderful tool for communicating across borders, but it should remain a shared language, not the only one. Learning other languages is a way of respecting other cultures, and that is something no single language can replace. »",
                "Expressions pour réagir à une contradiction : « I see your point, but... » et « That may be true, but don't you think that...? » ; pour demander une précision : « What do you mean by...? »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les clés de l'oral en anglais.",
            statements: [
              { text: "Pour une présentation orale, il vaut mieux rédiger tout son texte et le lire.", true: false, why: "Un texte lu rend la voix monotone ; on parle à partir de notes en mots-clés." },
              { text: "Wanted se prononce avec une syllabe supplémentaire, /ɪd/.", true: true, why: "Après t ou d, la terminaison -ed se prononce /ɪd/." },
              { text: "Worked se termine par le son /ɪd/.", true: false, why: "Après une consonne sourde comme /k/, -ed se prononce /t/ : worked." },
              { text: "« Could you say that again, please? » permet de demander de répéter.", true: true, why: "C'est une formule polie et naturelle pour faire répéter." },
              { text: "En anglais, le h de hate est muet.", true: false, why: "Le h est aspiré : hate se distingue ainsi de ate." },
              { text: "« I see your point, but... » permet d'exprimer un désaccord poli.", true: true, why: "On reconnaît l'argument de l'autre avant de le nuancer." },
              { text: "Les questions fermées (réponse yes ou no) ont souvent une intonation montante.", true: true, why: "Do you live here? monte en fin de phrase ; Where do you live? descend." },
            ],
          },
          quiz: [
            { q: "Which past form ends with the sound /ɪd/?", options: ["worked", "played", "wanted", "laughed"], answer: 2, why: "Want se termine par t : wanted se prononce avec /ɪd/." },
            { q: "To ask someone to repeat, you can say...", options: ["Pardon?", "Repeat you that, please?", "Can you to repeat it for me, please?"], answer: 0, why: "Pardon? est une façon polie et naturelle de faire répéter ; les deux autres phrases sont incorrectes." },
            { q: "« I see your point, but... » is used to...", options: ["agree completely", "change the subject", "end the conversation", "disagree politely"], answer: 3, why: "On reconnaît l'argument de l'interlocuteur avant d'exprimer une nuance ou un désaccord." },
            { q: "In « photography », the stress falls on...", options: ["pho", "to", "gra", "phy"], answer: 1, why: "PhoTOgraphy est accentué sur la deuxième syllabe, alors que PHOtograph l'est sur la première." },
            { q: "When describing a picture, « in the background » refers to...", options: ["the part nearest to the viewer", "the left-hand side of the picture", "the frame around the picture", "the part furthest away"], answer: 3, why: "The background est l'arrière-plan ; le premier plan se dit the foreground." },
          ],
          trap: "Lire un texte entièrement rédigé, d'une voix monotone, et se bloquer dès qu'un mot manque au lieu de le contourner par une paraphrase (It's a kind of..., It's something you use to...).",
          method: "Entraînez-vous à voix haute avec un minuteur : présentez un document en deux minutes à partir de cinq mots-clés seulement, enregistrez-vous, puis réécoutez pour repérer deux points à améliorer (un mot mal accentué, une hésitation, un connecteur répété).",
        },
      ],
    },
  ],
}
