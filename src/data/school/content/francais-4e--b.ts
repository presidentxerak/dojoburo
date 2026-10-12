import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-4e',
  chapters: [
    /* ================================================================== */
    /* LE VERBE : TEMPS, MODES ET VOIX                                      */
    /* ================================================================== */
    {
      id: 'verbe-temps-modes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'valeurs-temps-recit',
          title: 'Les valeurs des temps du récit',
          minutes: 30,
          objectives: [
            "Identifier les temps d'un récit au passé : passé simple, imparfait, plus-que-parfait et passé antérieur.",
            "Distinguer le premier plan et l'arrière-plan d'un récit grâce aux temps des verbes.",
            "Expliquer la valeur d'un temps dans un texte : action ponctuelle, description, habitude, antériorité, présent de narration.",
            "Rédiger un court récit au passé en employant les temps de façon cohérente.",
          ],
          course: [
            {
              heading: "Deux façons de parler du passé : le récit et le discours",
              paragraphs: [
                "Pour parler d'événements passés, le français dispose de deux grands systèmes de temps. Le premier est celui du discours : on parle de sa propre situation, en lien avec le moment où l'on s'exprime. On emploie alors le présent, le passé composé et le futur : « Hier, j'ai raté le bus, alors je suis arrivé en retard. »",
                "Le second est celui du récit : l'histoire est racontée comme coupée du moment présent, souvent à la troisième personne. Ses deux temps de base sont le passé simple et l'imparfait : « Ce matin-là, Jeanne rata le bus et arriva en retard. » C'est le système des romans, des contes et des nouvelles que vous lisez en classe.",
                "Dans un même livre, les deux systèmes se côtoient : le narrateur raconte au passé simple, mais les personnages, dans les dialogues, parlent au présent et au passé composé. Repérer le système employé est la première étape pour comprendre la valeur d'un temps.",
              ],
              box: { label: "Repère", text: "Système du discours : présent, passé composé, futur (lien avec le moment où l'on parle). Système du récit : passé simple et imparfait comme temps de base, plus-que-parfait et passé antérieur pour l'antériorité." },
            },
            {
              heading: "Passé simple et imparfait : le premier plan et l'arrière-plan",
              paragraphs: [
                "Le passé simple sert au premier plan du récit. Il présente des actions principales, limitées dans le temps, vues comme achevées. Ces actions se suivent et font avancer l'histoire : « Il ouvrit la porte, entra et posa son sac. » Chaque passé simple est une nouvelle étape.",
                "L'imparfait sert à l'arrière-plan. Il présente des faits vus en cours de déroulement, sans début ni fin précis. Il a trois grandes valeurs : la description (« La pluie tombait, les rues étaient désertes »), l'habitude ou la répétition (« Chaque soir, il lisait près du feu ») et l'action en cours, interrompue par une action de premier plan (« Elle dormait quand le téléphone sonna »).",
                "Une image aide à retenir cette différence. Imaginez une scène de théâtre : l'imparfait peint le décor et la lumière, qui restent en place ; le passé simple fait entrer et bouger les acteurs, l'un après l'autre. Un récit bien construit alterne les deux.",
              ],
              box: { label: "Règle", text: "Passé simple : actions de premier plan, ponctuelles, achevées, successives, qui font avancer l'histoire. Imparfait : arrière-plan, description, habitude, action en cours de déroulement (souvent interrompue par un passé simple)." },
            },
            {
              heading: "Le plus-que-parfait et le passé antérieur : revenir en arrière",
              paragraphs: [
                "Le plus-que-parfait est un temps composé : l'auxiliaire « avoir » ou « être » à l'imparfait, suivi du participe passé (« il avait mangé », « elle était partie »). Il exprime une action antérieure à un moment du passé, c'est-à-dire qui s'est produite avant. Dans « Quand Paul arriva, le train était parti », le départ du train a lieu avant l'arrivée de Paul. Il permet aussi les retours en arrière : « Elle se souvint de l'été où elle avait appris à nager. »",
                "Le passé antérieur se forme avec l'auxiliaire au passé simple et le participe passé (« il eut mangé », « elle fut partie »). Il exprime une action achevée juste avant une autre action au passé simple. On le trouve surtout après « quand », « lorsque », « dès que », « après que » ou « aussitôt que » : « Dès qu'il eut fermé la porte, il alluma la lampe. » Il appartient surtout à la langue écrite.",
              ],
              box: { label: "Formule", text: "Plus-que-parfait : auxiliaire à l'imparfait + participe passé (il avait fini, elle était venue). Passé antérieur : auxiliaire au passé simple + participe passé (il eut fini, elle fut venue). Les deux expriment l'antériorité dans le passé." },
            },
            {
              heading: "Le présent de narration et le futur vu depuis le passé",
              paragraphs: [
                "Un récit au passé peut basculer soudain au présent : « Il marchait tranquillement dans la forêt. Tout à coup, un loup se dresse devant lui et grogne. » Ce présent de narration rend la scène plus vivante, comme si le lecteur la voyait se dérouler sous ses yeux. Les écrivains l'utilisent souvent pour un moment de tension. Ce n'est pas une faute : c'est un effet voulu.",
                "Enfin, pour parler de ce qui arrivera plus tard, vu depuis le passé du récit, on emploie le conditionnel présent : « Il ne savait pas encore qu'il deviendrait médecin. » C'est le futur dans le passé, que vous étudierez en détail dans la leçon sur le conditionnel.",
              ],
              box: { label: "À retenir", text: "Présent de narration : un présent dans un récit au passé, pour rendre une scène vivante et dramatique. Conditionnel présent dans un récit : un futur vu depuis le passé (il deviendrait)." },
            },
          ],
          keyPoints: [
            "Le récit au passé repose sur deux temps de base : le passé simple et l'imparfait.",
            "Passé simple : premier plan, actions ponctuelles et successives qui font avancer l'histoire.",
            "Imparfait : arrière-plan, description, habitude, action en cours interrompue.",
            "Plus-que-parfait (avait fini) : action antérieure à un moment du passé, retour en arrière.",
            "Passé antérieur (eut fini) : action achevée juste avant un passé simple, souvent après « quand » ou « dès que ».",
            "Présent de narration : un présent qui rend vivante une scène passée.",
          ],
          example: {
            statement: "Lisez ce passage, écrit pour l'exercice : « Le village dormait encore. Une brume épaisse couvrait les champs. Marius, qui avait travaillé toute la nuit, sortit de la grange. Il fit quelques pas, puis il s'arrêta net. » Donnez le temps de chaque verbe conjugué et expliquez sa valeur.",
            solution: [
              "Relever les verbes conjugués : dormait, couvrait, avait travaillé, sortit, fit, s'arrêta.",
              "« dormait » et « couvrait » sont à l'imparfait. Ils décrivent le décor (le village endormi, la brume) : c'est l'arrière-plan du récit.",
              "« avait travaillé » est au plus-que-parfait (auxiliaire « avoir » à l'imparfait + participe passé). Le travail de nuit a eu lieu avant la sortie de Marius : ce temps marque l'antériorité.",
              "« sortit », « fit » et « s'arrêta » sont au passé simple. Ce sont des actions brèves, achevées, qui se suivent (« puis ») et font avancer l'histoire : c'est le premier plan.",
              "Réponse : l'imparfait installe le décor, le plus-que-parfait rappelle ce qui s'est passé avant, et le passé simple raconte les actions principales.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez chaque verbe entre parenthèses à l'imparfait ou au passé simple, puis justifiez votre choix en quelques mots : « Il (faire) nuit. Les étoiles (briller) au-dessus du lac. Soudain, un cri (déchirer) le silence. Tom (se lever) d'un bond et (courir) vers la rive. »",
              hint: "Demandez-vous pour chaque verbe : est-ce un élément du décor (arrière-plan) ou une action brève qui fait avancer l'histoire (premier plan) ? Le mot « Soudain » annonce souvent un passé simple.",
              solution: [
                "« Il faisait nuit » : imparfait, car c'est une description du décor, sans début ni fin précis.",
                "« Les étoiles brillaient » : imparfait, car c'est encore le décor (arrière-plan).",
                "« un cri déchira le silence » : passé simple, car c'est une action soudaine et brève, annoncée par « Soudain ».",
                "« Tom se leva » et « courut » : passé simple, car ce sont deux actions successives de premier plan qui font avancer l'histoire.",
                "Résultat : faisait, brillaient, déchira, se leva, courut.",
              ],
            },
            {
              level: 2,
              statement: "Dans ce texte écrit pour l'exercice, donnez le temps et la valeur de chaque verbe conjugué : « Chaque matin, Lucie promenait son chien le long du canal. Ce jour-là, elle avait oublié sa montre. Quand elle eut traversé le pont, elle aperçut une barque vide. Elle s'approche, se penche : une lettre flotte sur l'eau. »",
              hint: "Repérez d'abord les temps composés (deux mots) et le temps de leur auxiliaire. Remarquez ensuite que la fin du texte passe au présent alors que l'histoire est passée.",
              solution: [
                "« promenait » : imparfait d'habitude, annoncé par « Chaque matin » (action répétée).",
                "« avait oublié » : plus-que-parfait (auxiliaire à l'imparfait + participe passé). L'oubli a eu lieu avant la promenade : antériorité.",
                "« eut traversé » : passé antérieur (auxiliaire au passé simple + participe passé), après « Quand ». L'action est achevée juste avant « aperçut ».",
                "« aperçut » : passé simple, action ponctuelle de premier plan, l'élément nouveau du récit.",
                "« s'approche », « se penche », « flotte » : présent de narration. Le récit bascule au présent pour rendre la découverte plus vivante ; « flotte » décrit ce qu'elle voit.",
                "Résultat : une habitude (imparfait), deux antériorités (plus-que-parfait, passé antérieur), une action de premier plan (passé simple) et un présent de narration.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Réécrivez ce passage au passé, en employant le passé simple, l'imparfait et le plus-que-parfait, puis justifiez le temps de chaque verbe : « Il est minuit. La maison est silencieuse. Paul, qui a entendu un bruit, descend l'escalier. Il allume la lampe et regarde autour de lui : la fenêtre de la cuisine est ouverte. Quelqu'un est entré. »",
              hint: "Classez d'abord chaque verbe : décor, action de premier plan, ou action qui a eu lieu avant les autres. Les passés composés du texte au présent (a entendu, est entré) deviennent des plus-que-parfaits.",
              solution: [
                "« Il était minuit. La maison était silencieuse. » : imparfait, car ces phrases décrivent le cadre (arrière-plan).",
                "« Paul, qui avait entendu un bruit, » : plus-que-parfait, car le bruit a été entendu avant qu'il descende.",
                "« descendit l'escalier. Il alluma la lampe et regarda autour de lui » : passé simple, car ce sont trois actions successives de premier plan.",
                "« la fenêtre de la cuisine était ouverte » : imparfait, car c'est un état, une description de ce que Paul découvre.",
                "« Quelqu'un était entré. » : plus-que-parfait, car l'entrée de l'intrus a eu lieu avant la découverte de Paul.",
                "Texte réécrit : « Il était minuit. La maison était silencieuse. Paul, qui avait entendu un bruit, descendit l'escalier. Il alluma la lampe et regarda autour de lui : la fenêtre de la cuisine était ouverte. Quelqu'un était entré. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque temps à sa valeur principale dans un récit au passé.",
            pairs: [
              { left: "Passé simple", right: "Action brève et achevée, qui fait avancer l'histoire" },
              { left: "Imparfait", right: "Décor, description ou habitude à l'arrière-plan" },
              { left: "Plus-que-parfait", right: "Action antérieure à un moment du passé" },
              { left: "Passé antérieur", right: "Action achevée juste avant un passé simple" },
              { left: "Présent de narration", right: "Rendre une scène passée plus vivante" },
              { left: "Conditionnel présent", right: "Un futur vu depuis le passé du récit" },
            ],
          },
          quiz: [
            { q: "Quel temps raconte surtout les actions principales d'un récit au passé ?", options: ["L'imparfait", "Le passé simple", "Le plus-que-parfait", "Le présent de l'indicatif"], answer: 1, why: "Le passé simple présente les actions de premier plan, brèves et successives, qui font avancer l'histoire." },
            { q: "Dans « Chaque dimanche, il allait voir sa grand-mère », quelle est la valeur de l'imparfait ?", options: ["Une action unique et soudaine", "Une action future", "Une action antérieure", "Une habitude"], answer: 3, why: "« Chaque dimanche » indique une action répétée : c'est l'imparfait d'habitude." },
            { q: "Comment se forme le plus-que-parfait ?", options: ["Auxiliaire à l'imparfait + participe passé", "Auxiliaire au présent + participe passé", "Auxiliaire au passé simple + participe passé"], answer: 0, why: "« Il avait fini », « elle était partie » : l'auxiliaire est à l'imparfait. Avec l'auxiliaire au passé simple, on obtient le passé antérieur." },
            { q: "Dans « Dès qu'il eut fermé la porte, il alluma la lampe », à quel temps est « eut fermé » ?", options: ["Plus-que-parfait", "Passé composé", "Passé antérieur", "Passé simple"], answer: 2, why: "L'auxiliaire « avoir » est au passé simple (eut) : c'est un passé antérieur, qui marque une action achevée juste avant « alluma »." },
            { q: "« Il marchait. Tout à coup, un loup se dresse devant lui. » Pourquoi le récit passe-t-il au présent ?", options: ["C'est une faute de concordance des temps", "Pour rendre la scène vivante", "Pour exprimer une habitude", "Pour parler de l'avenir"], answer: 1, why: "C'est un présent de narration : il donne au lecteur l'impression de voir la scène se dérouler sous ses yeux." },
          ],
          trap: "Employer l'imparfait pour une action brève de premier plan (« Soudain, il ouvrait la porte ») ou confondre le plus-que-parfait (il avait fini) et le passé antérieur (il eut fini) : seul le temps de l'auxiliaire les distingue.",
          method: "Avant de choisir un temps, posez-vous une seule question : ce verbe peint-il le décor (imparfait) ou fait-il avancer l'histoire d'un pas (passé simple) ? Si l'action a eu lieu avant le moment raconté, passez à un temps composé (plus-que-parfait ou passé antérieur).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subjonctif-present',
          title: 'Le subjonctif présent : formes et emplois',
          minutes: 30,
          objectives: [
            "Conjuguer les verbes au subjonctif présent, y compris les verbes irréguliers les plus fréquents.",
            "Identifier les emplois du subjonctif dans la proposition subordonnée et dans la phrase indépendante.",
            "Choisir entre l'indicatif et le subjonctif après un verbe ou une conjonction.",
          ],
          course: [
            {
              heading: "Le subjonctif, le mode de l'action envisagée",
              paragraphs: [
                "Un mode est une manière de présenter l'action exprimée par le verbe. L'indicatif présente l'action comme un fait réel, situé dans le temps : « Je sais que Léa vient ce soir. » Le subjonctif présente l'action comme envisagée, souhaitée, redoutée ou mise en doute, sans affirmer qu'elle a lieu : « Je veux que Léa vienne ce soir. » Dans la seconde phrase, rien ne dit que Léa viendra vraiment.",
                "Le subjonctif s'emploie le plus souvent dans une proposition subordonnée introduite par « que ». C'est pourquoi on le conjugue avec « que » devant le pronom : que je chante, qu'il finisse. Vous l'avez découvert en 5e ; cette leçon vous apprend à maîtriser les formes difficiles et à savoir quand l'employer.",
              ],
              box: { label: "Définition", text: "Le subjonctif est un mode qui présente l'action comme envisagée par la pensée (souhait, ordre, crainte, doute, sentiment) et non comme un fait certain. Il apparaît surtout dans une proposition introduite par « que »." },
            },
            {
              heading: "Former le subjonctif présent",
              paragraphs: [
                "Pour la plupart des verbes, on part de la troisième personne du pluriel du présent de l'indicatif, on enlève « -ent » et on ajoute les terminaisons -e, -es, -e, -ions, -iez, -ent. Ces terminaisons sont les mêmes pour tous les verbes, sauf « être » et « avoir ». Exemples : ils chantent → que je chante ; ils finissent → que je finisse ; ils partent → que je parte ; ils écrivent → que j'écrive.",
                "Certains verbes ont deux radicaux : l'un pour je, tu, il et ils, l'autre pour nous et vous, identique à celui de l'imparfait. Ils viennent → que je vienne, mais nous venions → que nous venions. De même : que je prenne, que nous prenions ; que je boive, que nous buvions ; que je doive, que nous devions.",
                "Attention aux verbes en -ier et en -yer : la terminaison -ions s'ajoute au radical, ce qui donne deux i ou un y suivi d'un i. On écrit « que nous criions », « que vous étudiiez », « que nous voyions », « que vous croyiez ». À l'oral, ces formes ressemblent au présent de l'indicatif, mais elles ne s'écrivent pas de la même façon.",
              ],
              box: { label: "Formule", text: "Radical de « ils » au présent de l'indicatif + -e, -es, -e, -ions, -iez, -ent. Pour nous et vous, beaucoup de verbes reprennent le radical de l'imparfait : que nous venions, que vous preniez." },
            },
            {
              heading: "Les verbes irréguliers à connaître par cœur",
              paragraphs: [
                "« Être » et « avoir » ont des formes à part. Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient. Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient. Notez qu'il n'y a pas de i après le y : on écrit « que nous ayons » et « que nous soyons ».",
                "Cinq autres verbes très fréquents ont un radical particulier. Aller : que j'aille, que nous allions, qu'ils aillent. Faire : que je fasse, que nous fassions. Pouvoir : que je puisse, que nous puissions. Savoir : que je sache, que nous sachions. Vouloir : que je veuille, que nous voulions, qu'ils veuillent.",
                "Ne confondez pas « que j'aie » (subjonctif du verbe avoir, avec un e) et « j'ai » (indicatif présent). Pour vérifier, remplacez par « nous » : « Il faut que nous ayons » confirme le subjonctif.",
              ],
              box: { label: "À retenir", text: "Être : que je sois, que nous soyons. Avoir : que j'aie, qu'il ait, que nous ayons. Aller : que j'aille. Faire : que je fasse. Pouvoir : que je puisse. Savoir : que je sache. Vouloir : que je veuille, que nous voulions." },
            },
            {
              heading: "Quand employer le subjonctif ?",
              paragraphs: [
                "Dans une subordonnée introduite par « que », on emploie le subjonctif après un verbe qui exprime la volonté ou l'obligation (vouloir que, exiger que, souhaiter que, il faut que), un sentiment (être content que, regretter que, avoir peur que) ou un doute, une possibilité (douter que, il est possible que). Exemple : « Il faut que vous lisiez ce livre. »",
                "On l'emploie aussi après certaines conjonctions : pour que, afin que, avant que, jusqu'à ce que, bien que, quoique, sans que, à condition que. « Je t'explique pour que tu comprennes. » « Rentrons avant qu'il pleuve. »",
                "Dans une phrase indépendante, le subjonctif introduit par « que » exprime un ordre ou un souhait adressé à une troisième personne : « Qu'il entre ! », « Que la fête commence ! » Il existe aussi quelques formules figées sans « que » : « Vive les vacances ! », « Ainsi soit-il. »",
                "Attention : certains verbes sont suivis de l'indicatif parce qu'ils présentent le fait comme probable ou certain. C'est le cas d'« espérer que » (« J'espère qu'il viendra »), de « penser que » et « croire que » à la forme affirmative (« Je pense qu'il a raison »), et de la conjonction « après que » (« après qu'il est parti »). À la forme négative, « penser » et « croire » prennent souvent le subjonctif : « Je ne pense pas qu'il ait raison. »",
              ],
              box: { label: "Règle", text: "Subjonctif après : volonté, obligation (il faut que), sentiment, doute ; pour que, avant que, bien que, jusqu'à ce que, sans que. Indicatif après : savoir que, espérer que, penser que (affirmatif), après que." },
            },
          ],
          keyPoints: [
            "Le subjonctif présente une action envisagée (souhait, ordre, crainte, doute), non un fait certain.",
            "Formation : radical de « ils » au présent + -e, -es, -e, -ions, -iez, -ent.",
            "Être : que je sois ; avoir : que j'aie, que nous ayons (sans i après le y).",
            "Aller, faire, pouvoir, savoir, vouloir : que j'aille, que je fasse, que je puisse, que je sache, que je veuille.",
            "Subjonctif après « il faut que », « vouloir que », « pour que », « avant que », « bien que ».",
            "Indicatif après « espérer que », « penser que » (affirmatif) et « après que ».",
          ],
          example: {
            statement: "Conjuguez le verbe entre parenthèses au mode qui convient, puis justifiez : a) Il faut que vous (faire) vos exercices. b) Je pense qu'il (venir) demain. c) Je doute qu'elle (pouvoir) venir.",
            solution: [
              "a) « Il faut que » exprime une obligation : il commande le subjonctif. Le verbe « faire » est irrégulier : que vous fassiez. Réponse : « Il faut que vous fassiez vos exercices. »",
              "b) « Je pense que » à la forme affirmative présente le fait comme probable : on emploie l'indicatif. Comme il s'agit de demain, on choisit le futur : « Je pense qu'il viendra demain. »",
              "c) « Je doute que » exprime un doute : il commande le subjonctif. « Pouvoir » est irrégulier : qu'elle puisse. Réponse : « Je doute qu'elle puisse venir. »",
              "Bilan : on se demande toujours si le verbe principal présente le fait comme réel (indicatif) ou comme seulement envisagé (subjonctif).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez chaque verbe au subjonctif présent : a) que je (finir) ; b) que nous (prendre) ; c) qu'ils (venir) ; d) que tu (être) ; e) que vous (avoir) ; f) qu'elle (aller) ; g) que je (faire) ; h) que nous (voir).",
              hint: "Partez de la forme « ils » du présent de l'indicatif (ils finissent, ils prennent). Pour nous et vous, pensez au radical de l'imparfait. Être, avoir, aller et faire sont irréguliers.",
              solution: [
                "a) ils finissent → que je finisse.",
                "b) nous prenions (radical de l'imparfait) → que nous prenions.",
                "c) ils viennent → qu'ils viennent.",
                "d) être est irrégulier → que tu sois.",
                "e) avoir est irrégulier → que vous ayez (sans i après le y).",
                "f) aller est irrégulier → qu'elle aille.",
                "g) faire est irrégulier → que je fasse.",
                "h) nous voyions (radical de l'imparfait) → que nous voyions, avec un y suivi d'un i.",
              ],
            },
            {
              level: 2,
              statement: "Indicatif ou subjonctif ? Conjuguez le verbe entre parenthèses et justifiez : a) Mes parents veulent que je (ranger) ma chambre. b) J'espère que vous (aller) bien. c) Bien qu'il (être) malade, Hugo est venu au match. d) Je sais que nous (avoir) raison. e) Le professeur répète la consigne pour que tout le monde la (comprendre). f) Je suis content que vous (venir) ce soir. g) Il est certain qu'il (pleuvoir) demain.",
              hint: "Demandez-vous si le fait est présenté comme réel ou certain (indicatif) ou comme voulu, ressenti, possible (subjonctif). « Espérer que » est un piège : il est suivi de l'indicatif.",
              solution: [
                "a) « vouloir que » exprime la volonté : subjonctif. « que je range ».",
                "b) « espérer que » est suivi de l'indicatif : « que vous allez bien ».",
                "c) « bien que » est toujours suivi du subjonctif : « Bien qu'il soit malade ».",
                "d) « savoir que » présente un fait certain : indicatif. « que nous avons raison ».",
                "e) « pour que » exprime le but : subjonctif. « pour que tout le monde la comprenne ».",
                "f) « être content que » exprime un sentiment : subjonctif. « que vous veniez ».",
                "g) « il est certain que » exprime une certitude : indicatif, au futur car il s'agit de demain. « qu'il pleuvra demain ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Transformez chaque phrase en la faisant commencer par l'expression donnée : a) Vous faites attention. (Il faut que...) b) Nous allons au musée. (Mes parents souhaitent que...) c) Vous savez la réponse. (Je doute que...) d) Ils sont en retard ; ils restent calmes. (Bien que..., ...) e) Elle peut venir. (Je ne pense pas que...) 2) Rédigez ensuite trois règles pour la vie de la classe, chacune avec un déclencheur différent du subjonctif.",
              hint: "Repérez le verbe de la phrase de départ, trouvez son infinitif, puis conjuguez-le au subjonctif. Les cinq verbes sont irréguliers : faire, aller, savoir, être et pouvoir.",
              solution: [
                "a) Il faut que vous fassiez attention (faire → que vous fassiez).",
                "b) Mes parents souhaitent que nous allions au musée (aller → que nous allions).",
                "c) Je doute que vous sachiez la réponse (savoir → que vous sachiez).",
                "d) Bien qu'ils soient en retard, ils restent calmes (être → qu'ils soient).",
                "e) Je ne pense pas qu'elle puisse venir (« penser » à la forme négative exprime le doute ; pouvoir → qu'elle puisse).",
                "2) Exemple de réponse : « Il faut que chacun lève la main avant de parler. » « Le professeur souhaite que nous rendions nos devoirs à l'heure. » « Rangeons le matériel pour que la salle soit propre. » Trois déclencheurs différents : il faut que, souhaiter que, pour que.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos réflexes sur le subjonctif.",
            statements: [
              { text: "Après « espérer que », on emploie le subjonctif.", true: false, why: "« Espérer que » est suivi de l'indicatif : « J'espère qu'il viendra »." },
              { text: "« Que j'aie » est le subjonctif présent du verbe avoir.", true: true, why: "Au subjonctif, avoir donne que j'aie, que tu aies, qu'il ait, avec un e ou un t final." },
              { text: "« Après que » est suivi de l'indicatif.", true: true, why: "L'action est présentée comme réelle et déjà accomplie : « après qu'il est parti »." },
              { text: "On écrit « que nous voyons » au subjonctif présent.", true: false, why: "Au subjonctif, on écrit « que nous voyions » : un y suivi de la terminaison -ions." },
              { text: "Dans « Vive les vacances ! », « vive » est au subjonctif.", true: true, why: "C'est une formule figée de souhait, au subjonctif du verbe vivre." },
              { text: "Le subjonctif présente toujours un fait comme certain.", true: false, why: "C'est le contraire : il présente l'action comme envisagée, souhaitée ou mise en doute." },
              { text: "« Bien que » est suivi du subjonctif.", true: true, why: "« Bien qu'il soit fatigué, il continue » : la conjonction de concession commande le subjonctif." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte ?", options: ["Il faut que tu fais attention.", "Il faut que tu fasses attention.", "Il faut que tu ferais attention."], answer: 1, why: "« Il faut que » exprime une obligation et commande le subjonctif ; « faire » donne « que tu fasses »." },
            { q: "Quel verbe introducteur est suivi de l'indicatif ?", options: ["Je souhaite que", "Il est possible que", "J'espère que", "Je regrette que"], answer: 2, why: "« Espérer que » présente le fait comme probable : il est suivi de l'indicatif. Les autres expriment un souhait, une possibilité ou un sentiment." },
            { q: "Quel est le subjonctif présent de « vouloir » à la première personne du singulier ?", options: ["que je veuille", "que je voulais", "que je veux", "que je voudrais"], answer: 0, why: "Le radical du subjonctif de vouloir est « veuill- » pour je, tu, il et ils : que je veuille." },
            { q: "Comment écrit-on le subjonctif présent de « avoir » avec « nous » ?", options: ["que nous ayions", "que nous avions", "que nous ayons"], answer: 2, why: "Il n'y a jamais de i après le y : que nous ayons, que vous ayez." },
            { q: "Dans « Qu'il sorte immédiatement ! », qu'exprime le subjonctif ?", options: ["Un fait certain", "Un ordre", "Une action passée", "Une comparaison"], answer: 1, why: "Dans une phrase indépendante, « que » suivi du subjonctif exprime un ordre ou un souhait à la troisième personne." },
          ],
          trap: "Mettre le subjonctif après « espérer que » ou « après que », alors qu'ils sont suivis de l'indicatif, ou écrire « que nous ayions » avec un i en trop.",
          method: "Pour vérifier qu'une forme est au subjonctif, remplacez le verbe par « faire » ou « prendre » : si vous devez dire « que je fasse » ou « que je prenne », le subjonctif est bien attendu. Apprenez être, avoir, aller, faire, pouvoir, savoir et vouloir comme une petite liste à réciter.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conditionnel',
          title: 'Le conditionnel : futur dans le passé et hypothèse',
          minutes: 30,
          objectives: [
            "Conjuguer un verbe au conditionnel présent et au conditionnel passé.",
            "Distinguer le futur et le conditionnel à la première personne du singulier (-rai, -rais).",
            "Identifier les valeurs du conditionnel : futur dans le passé, hypothèse, politesse, souhait, information non confirmée.",
            "Construire correctement une phrase hypothétique introduite par « si ».",
          ],
          course: [
            {
              heading: "Former le conditionnel présent et le conditionnel passé",
              paragraphs: [
                "Le conditionnel présent se forme avec le radical du futur suivi des terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Chanter : je chanterais, nous chanterions. Finir : tu finirais. Les verbes qui ont un futur irrégulier gardent ce radical : être → je serais, avoir → j'aurais, aller → j'irais, faire → je ferais, pouvoir → je pourrais, voir → je verrais, venir → je viendrais, vouloir → je voudrais.",
                "Le conditionnel passé est un temps composé : l'auxiliaire « avoir » ou « être » au conditionnel présent, suivi du participe passé. « J'aurais aimé », « elle serait venue », « nous aurions su ». Le participe passé s'accorde selon les mêmes règles qu'au passé composé.",
                "Les grammaires anciennes faisaient du conditionnel un mode à part. La terminologie grammaticale publiée par le ministère de l'Éducation nationale en 2020 le classe parmi les temps de l'indicatif, à côté du futur, dont il est très proche. Ce qui compte pour vous, c'est de connaître ses formes et ses valeurs.",
              ],
              box: { label: "Formule", text: "Conditionnel présent : radical du futur + -ais, -ais, -ait, -ions, -iez, -aient (je viendrais). Conditionnel passé : auxiliaire au conditionnel présent + participe passé (je serais venu, j'aurais pris)." },
            },
            {
              heading: "Le futur dans le passé",
              paragraphs: [
                "Quand on rapporte au passé des paroles ou des pensées tournées vers l'avenir, le futur devient un conditionnel. Comparez : « Léa dit qu'elle viendra » (verbe principal au présent, futur) et « Léa a dit qu'elle viendrait » (verbe principal au passé, conditionnel). L'action de venir reste à venir, mais elle est vue depuis un moment passé.",
                "Dans un récit, ce futur dans le passé annonce ce qui arrivera plus tard aux personnages : « Ce jour-là, il ne savait pas encore qu'il deviendrait un grand peintre. » Le conditionnel passé joue le même rôle pour une action qui sera achevée : « Il promit qu'il aurait fini avant midi. »",
              ],
              box: { label: "Règle", text: "Verbe principal au passé + action à venir = conditionnel. « Il annonce qu'il partira » devient « Il annonça qu'il partirait ». Le conditionnel passé remplace le futur antérieur : « qu'il aurait fini »." },
            },
            {
              heading: "L'hypothèse avec « si »",
              paragraphs: [
                "Pour exprimer une condition, on emploie une subordonnée introduite par « si ». Trois constructions sont à connaître. Si le fait est possible dans l'avenir : si + présent, futur dans la principale. « S'il fait beau demain, nous irons à la plage. »",
                "Si le fait est imaginé dans le présent, peu probable ou contraire à la réalité : si + imparfait, conditionnel présent dans la principale. « Si j'avais des ailes, je volerais jusqu'à vous. » (Je n'ai pas d'ailes : c'est irréel.)",
                "Si le fait n'a pas eu lieu dans le passé : si + plus-que-parfait, conditionnel passé dans la principale. « Si tu étais parti plus tôt, tu n'aurais pas raté le train. » (Tu n'es pas parti plus tôt : c'est un regret.) Dans les trois cas, le verbe placé juste après « si » n'est jamais au conditionnel ni au futur.",
              ],
              box: { label: "Règle", text: "Si + présent → futur. Si + imparfait → conditionnel présent. Si + plus-que-parfait → conditionnel passé. Jamais de conditionnel juste après « si » : on dit « si j'avais su », jamais « si j'aurais su »." },
            },
            {
              heading: "Politesse, souhait, information non confirmée",
              paragraphs: [
                "Le conditionnel adoucit une demande ou un conseil : « Pourriez-vous m'aider ? » est plus poli que « Pouvez-vous m'aider ? ». « Vous devriez vous reposer » donne un conseil avec délicatesse. Il exprime aussi un souhait ou un regret : « J'aimerais visiter l'Islande », « J'aurais voulu vous voir ».",
                "Dans la presse, il signale une information qui n'est pas encore vérifiée : « Selon un témoin, le voleur serait passé par la fenêtre. » Le journaliste rapporte le fait sans l'affirmer. Ce conditionnel est précieux pour lire l'information de façon critique.",
                "Enfin, ne confondez pas le futur et le conditionnel à la première personne : « je viendrai » (futur) et « je viendrais » (conditionnel) se prononcent presque de la même façon. Remplacez « je » par « il » : « il viendra » révèle le futur, « il viendrait » révèle le conditionnel.",
              ],
              box: { label: "Repère", text: "Futur ou conditionnel ? Remplacez « je » par « il » ou « nous ». Je partirai → il partira (futur). Je partirais → il partirait (conditionnel)." },
            },
          ],
          keyPoints: [
            "Conditionnel présent : radical du futur + terminaisons de l'imparfait (je ferais, nous serions).",
            "Conditionnel passé : auxiliaire au conditionnel présent + participe passé (j'aurais pris, elle serait venue).",
            "Futur dans le passé : « Il a dit qu'il viendrait ».",
            "Si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé.",
            "Jamais de conditionnel juste après « si ».",
            "Autres valeurs : politesse, conseil, souhait, information non confirmée.",
            "Futur ou conditionnel en -rai/-rais ? Remplacez « je » par « il ».",
          ],
          example: {
            statement: "Donnez le temps et la valeur du verbe indiqué dans chaque phrase : a) Elle affirma qu'elle reviendrait. b) Si nous avions le temps, nous visiterions le château. c) Voudriez-vous fermer la fenêtre ? d) D'après la radio, l'incendie aurait détruit trois hectares. Verbes à analyser : reviendrait, visiterions, voudriez, aurait détruit.",
            solution: [
              "a) « reviendrait » : conditionnel présent. Le verbe principal « affirma » est au passé et le retour est à venir : c'est le futur dans le passé.",
              "b) « visiterions » : conditionnel présent, dans la principale d'un système « si + imparfait ». Il exprime une hypothèse, un fait imaginé (nous n'avons pas le temps).",
              "c) « voudriez » : conditionnel présent de politesse. Il adoucit la demande.",
              "d) « aurait détruit » : conditionnel passé (« aurait » + participe passé). Il signale une information non confirmée, rapportée par la radio.",
              "Réponse : un même temps peut avoir plusieurs valeurs ; c'est le contexte (verbe principal, « si », source citée) qui permet de trancher.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Conjuguez au conditionnel présent : je (aimer), tu (pouvoir), il (être), nous (faire), vous (venir), elles (avoir). 2) Futur ou conditionnel ? Complétez par -rai ou -rais : a) Demain, je partir... tôt. b) Si j'avais le temps, je lir... davantage. c) Je ser... ravi de vous aider, si vous le permettiez.",
              hint: "Trouvez d'abord le radical du futur (pourr-, ser-, fer-, viendr-, aur-), puis ajoutez les terminaisons de l'imparfait. Pour -rai ou -rais, remplacez « je » par « il ».",
              solution: [
                "1) j'aimerais ; tu pourrais ; il serait ; nous ferions ; vous viendriez ; elles auraient.",
                "2a) « Demain, il partira tôt » : c'est un futur, donc « je partirai ».",
                "2b) « S'il avait le temps, il lirait » : c'est un conditionnel après « si + imparfait », donc « je lirais ».",
                "2c) « Il serait ravi... si vous le permettiez » : c'est un conditionnel, donc « je serais ravi ».",
              ],
            },
            {
              level: 2,
              statement: "Rapportez ces paroles au discours indirect en commençant par le verbe donné au passé, puis nommez la valeur du conditionnel obtenu : a) Léa dit : « Je viendrai. » (Léa a dit que...) b) Mon frère promet : « Je rangerai ma chambre. » (Mon frère a promis que...) c) Le guide annonce : « Nous partirons à l'aube. » (Le guide annonça que...) d) Les ouvriers assurent : « Nous aurons fini avant l'hiver. » (Les ouvriers ont assuré que...)",
              hint: "Changez les pronoms (je devient elle ou il, nous devient ils) et remplacez le futur par le conditionnel présent. Le futur antérieur (aurons fini) devient un conditionnel passé.",
              solution: [
                "a) Léa a dit qu'elle viendrait.",
                "b) Mon frère a promis qu'il rangerait sa chambre (le possessif « ma » devient « sa »).",
                "c) Le guide annonça qu'ils partiraient à l'aube.",
                "d) Les ouvriers ont assuré qu'ils auraient fini avant l'hiver (futur antérieur → conditionnel passé).",
                "Valeur : dans les quatre phrases, le conditionnel est un futur dans le passé, car l'action est à venir par rapport à un verbe principal au passé.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Corrigez les phrases fautives et justifiez ; recopiez telles quelles les phrases correctes : a) Si j'aurais su, je serais venu. b) Si tu viens demain, nous jouerions aux échecs. c) Si nous avions un chien, nous le promènerions chaque jour. d) Si elle avait couru, elle aurait attrapé le bus. e) Je serais content si tu viendrais. 2) Écrivez trois phrases qui commencent par « Si j'étais invisible pendant une journée ».",
              hint: "Vérifiez le couple de temps dans chaque phrase : si + présent → futur ; si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé. Le verbe qui suit « si » n'est jamais au conditionnel.",
              solution: [
                "a) Fautive : « si j'aurais » est impossible. Le regret porte sur le passé : « Si j'avais su, je serais venu » (plus-que-parfait → conditionnel passé).",
                "b) Fautive : les temps ne vont pas ensemble. Deux corrections possibles : « Si tu viens demain, nous jouerons aux échecs » (fait possible) ou « Si tu venais demain, nous jouerions aux échecs » (fait moins probable).",
                "c) Correcte : si + imparfait (avions) → conditionnel présent (promènerions).",
                "d) Correcte : si + plus-que-parfait (avait couru) → conditionnel passé (aurait attrapé).",
                "e) Fautive : pas de conditionnel après « si ». « Je serais content si tu venais. »",
                "2) Exemple : « Si j'étais invisible pendant une journée, je visiterais les coulisses d'un théâtre. Je m'assiérais au premier rang sans billet. Je reviendrais le soir et je ne dirais rien à personne. » Chaque verbe de la principale est au conditionnel présent, car « si » est suivi de l'imparfait.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase à la valeur de son conditionnel.",
            pairs: [
              { left: "Elle a promis qu'elle reviendrait.", right: "Futur dans le passé" },
              { left: "Si j'étais riche, j'achèterais un voilier.", right: "Hypothèse sur le présent" },
              { left: "Si tu m'avais prévenu, je serais venu.", right: "Hypothèse sur le passé, regret" },
              { left: "Pourriez-vous parler plus fort ?", right: "Politesse" },
              { left: "Le ministre démissionnerait ce soir.", right: "Information non confirmée" },
              { left: "J'aimerais tant revoir la mer.", right: "Souhait" },
            ],
          },
          quiz: [
            { q: "Comment se forme le conditionnel présent ?", options: ["Radical du futur + terminaisons de l'imparfait", "Radical du présent + terminaisons du futur simple", "Auxiliaire + participe passé", "Radical de l'imparfait + -rai"], answer: 0, why: "On prend le radical du futur (viendr-) et on ajoute -ais, -ait, -ions... : je viendrais." },
            { q: "Quelle phrase est correcte ?", options: ["Si j'aurais le temps, je viendrais.", "Si j'avais le temps, je viendrais.", "Si j'avais le temps, je viendrai."], answer: 1, why: "Si + imparfait entraîne le conditionnel présent dans la principale, et on ne met jamais de conditionnel juste après « si »." },
            { q: "Dans « Il annonça qu'il partirait », quelle est la valeur du conditionnel ?", options: ["La politesse", "Un souhait", "Une information douteuse", "Le futur dans le passé"], answer: 3, why: "Le verbe principal est au passé et le départ est à venir : le conditionnel joue le rôle d'un futur vu depuis le passé." },
            { q: "Quelle forme complète « Si tu avais écouté, tu ... la réponse » ?", options: ["saurais", "aurais su", "sauras", "aurait su"], answer: 1, why: "Si + plus-que-parfait entraîne le conditionnel passé : « tu aurais su »." },
            { q: "« Je finirai demain » : comment vérifier que « finirai » est au futur ?", options: ["En le mettant au pluriel", "En remplaçant « je » par « il »", "En cherchant un « si » dans la phrase", "En le mettant au passé"], answer: 1, why: "« Il finira » montre que c'est un futur ; au conditionnel, on aurait « il finirait »." },
          ],
          trap: "Mettre un conditionnel juste après « si » (« si j'aurais su ») ou confondre « je serai » (futur) et « je serais » (conditionnel), qui se prononcent presque pareil.",
          method: "Pour une phrase avec « si », soulignez le verbe qui suit « si » et vérifiez qu'il est au présent, à l'imparfait ou au plus-que-parfait ; choisissez ensuite le temps de la principale grâce au tableau des trois couples. Pour -rai ou -rais, remplacez toujours « je » par « il ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'voix-passive',
          title: 'La voix active et la voix passive',
          minutes: 30,
          objectives: [
            "Distinguer la voix active et la voix passive d'un verbe.",
            "Transformer une phrase active en phrase passive à tous les temps, et inversement.",
            "Identifier le complément d'agent et accorder le participe passé à la voix passive.",
            "Analyser l'effet produit par le choix de la voix passive dans un texte.",
          ],
          course: [
            {
              heading: "Qui fait l'action ? Voix active et voix passive",
              paragraphs: [
                "À la voix active, le sujet fait l'action : « Le chat attrape la souris. » Le chat agit, la souris subit. À la voix passive, le sujet subit l'action : « La souris est attrapée par le chat. » La souris est toujours celle qui subit, mais elle est devenue le sujet du verbe.",
                "Les deux phrases racontent le même événement. Ce qui change, c'est le point de départ : la phrase active met en avant celui qui agit, la phrase passive met en avant celui qui subit. Vous avez découvert cette transformation en 5e ; en 4e, vous apprenez à l'effectuer à tous les temps et à en analyser les effets.",
              ],
              box: { label: "Définition", text: "Voix active : le sujet fait l'action. Voix passive : le sujet subit l'action ; celui qui la fait, s'il est nommé, est le complément d'agent, introduit par « par » ou « de »." },
            },
            {
              heading: "Passer de l'actif au passif",
              paragraphs: [
                "Seul un verbe qui a un complément d'objet direct (COD) peut passer au passif. Le COD de la phrase active devient le sujet de la phrase passive ; le sujet de la phrase active devient le complément d'agent. Le verbe se construit avec l'auxiliaire « être », suivi du participe passé du verbe : « Les élèves préparent le spectacle » → « Le spectacle est préparé par les élèves. »",
                "Le temps est porté par l'auxiliaire « être » : on le conjugue au temps du verbe actif. Présent : la lettre est écrite. Imparfait : la lettre était écrite. Passé simple : la lettre fut écrite. Futur : la lettre sera écrite. Passé composé : la lettre a été écrite. Plus-que-parfait : la lettre avait été écrite. Le participe passé du verbe s'accorde toujours avec le sujet : « Les fenêtres ont été repeintes. »",
                "Le complément d'agent est le plus souvent introduit par « par ». Avec certains verbes de sentiment ou de description, on emploie « de » : « Ce professeur est aimé de ses élèves », « Le sommet était couvert de neige ». Il peut aussi être absent : « Le musée a été rénové. » On ne sait pas, ou on ne juge pas utile de dire, qui a fait l'action.",
              ],
              box: { label: "Règle", text: "Actif → passif : 1) le COD devient sujet ; 2) « être » se conjugue au temps du verbe actif ; 3) le participe passé s'accorde avec le sujet ; 4) l'ancien sujet devient complément d'agent (par, de). Si l'ancien sujet est « on », le complément d'agent disparaît." },
            },
            {
              heading: "Ne pas confondre le passif avec un temps composé",
              paragraphs: [
                "« Il est parti » et « Il est puni » se ressemblent : « être » suivi d'un participe passé. Pourtant, la première phrase est un passé composé à la voix active (il a fait l'action de partir), la seconde un présent à la voix passive (il subit la punition).",
                "Pour les distinguer, cherchez si l'on peut ajouter un complément d'agent : « Il est puni par ses parents » fonctionne, « il est parti par quelqu'un » est impossible. Vous pouvez aussi essayer de remettre la phrase à l'actif : « Ses parents le punissent » existe ; il n'y a pas de phrase active correspondant à « Il est parti ».",
                "Pensez aussi au temps : dans une phrase passive, c'est l'auxiliaire « être » qui donne le temps. « La porte est fermée par le gardien » est au présent passif ; « La porte a été fermée par le gardien » est au passé composé passif.",
              ],
              box: { label: "Repère", text: "Test du passif : ajoutez « par quelqu'un » ou retournez la phrase à l'actif. Si c'est possible, la phrase est passive. « Elle est arrivée » (passé composé actif) ; « Elle est accueillie par ses amis » (présent passif)." },
            },
            {
              heading: "Pourquoi choisir la voix passive ?",
              paragraphs: [
                "Le passif permet de mettre en valeur celui qui subit l'action, en le plaçant en tête de phrase : « Le record du monde a été battu ! » insiste sur l'exploit plutôt que sur l'athlète. Il est fréquent dans les titres de presse et les faits divers.",
                "Il permet aussi de taire l'auteur de l'action, parce qu'on l'ignore ou qu'on préfère ne pas le nommer : « Des erreurs ont été commises. » Un lecteur attentif se demande alors qui les a commises. Dans un récit, une suite de verbes passifs peut montrer qu'un personnage subit les événements sans pouvoir agir : « Il fut arrêté, jugé, puis enfermé. »",
              ],
              box: { label: "À retenir", text: "Effets du passif : mettre en avant celui qui subit, cacher ou ignorer l'auteur de l'action, montrer un personnage qui subit les événements." },
            },
          ],
          keyPoints: [
            "Actif : le sujet fait l'action. Passif : le sujet subit l'action.",
            "Seul un verbe avec un COD peut passer au passif ; le COD devient sujet.",
            "Passif = « être » au temps du verbe actif + participe passé accordé avec le sujet.",
            "Le complément d'agent est introduit par « par » ou « de » ; il peut être absent.",
            "« Il est parti » est un passé composé actif ; « il est puni » est un présent passif.",
            "Le passif met en valeur celui qui subit ou cache l'auteur de l'action.",
          ],
          example: {
            statement: "Mettez la phrase « Les pompiers ont sauvé deux enfants » à la voix passive, puis précisez le temps du verbe dans les deux phrases.",
            solution: [
              "Repérer le verbe et son COD : le verbe est « ont sauvé », son COD est « deux enfants ».",
              "Le COD devient le sujet de la phrase passive : « Deux enfants ».",
              "Le verbe actif est au passé composé : on conjugue « être » au passé composé, « ont été », puis on ajoute le participe passé « sauvés », accordé au masculin pluriel avec « deux enfants ».",
              "L'ancien sujet devient complément d'agent : « par les pompiers ».",
              "Réponse : « Deux enfants ont été sauvés par les pompiers. » Les deux verbes sont au passé composé, l'un à la voix active, l'autre à la voix passive.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dites si elle est à la voix active ou à la voix passive, et relevez le complément d'agent s'il y en a un : a) Le jardinier taille les rosiers. b) Les rosiers sont taillés par le jardinier. c) Lina est partie en vacances. d) Cette chanson est connue de tous. e) Le pont sera reconstruit l'an prochain.",
              hint: "Demandez-vous si le sujet fait l'action ou la subit. Pour « est partie », essayez d'ajouter « par quelqu'un ».",
              solution: [
                "a) Voix active : le jardinier fait l'action. Pas de complément d'agent.",
                "b) Voix passive : les rosiers subissent l'action. Complément d'agent : « par le jardinier ».",
                "c) Voix active : « est partie » est le passé composé du verbe partir ; Lina fait l'action. On ne peut pas dire « partie par quelqu'un ».",
                "d) Voix passive : la chanson est connue. Complément d'agent introduit par « de » : « de tous ».",
                "e) Voix passive au futur : le pont subit l'action. Pas de complément d'agent, on ne dit pas qui reconstruira le pont.",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases à la voix passive en gardant le même temps : a) Le vent emporte les feuilles. b) Un orage détruisit la récolte. c) Les élèves décoreront la salle. d) Le maire a inauguré la piscine. e) On avait annulé le concert.",
              hint: "Repérez le temps du verbe actif et conjuguez « être » à ce temps. N'oubliez pas d'accorder le participe passé avec le nouveau sujet. Avec « on », il n'y a pas de complément d'agent.",
              solution: [
                "a) Présent : « Les feuilles sont emportées par le vent. » (accord au féminin pluriel).",
                "b) Passé simple : « La récolte fut détruite par un orage. »",
                "c) Futur : « La salle sera décorée par les élèves. »",
                "d) Passé composé : « La piscine a été inaugurée par le maire. »",
                "e) Plus-que-parfait : « Le concert avait été annulé. » Le sujet « on » ne devient pas complément d'agent : on l'efface.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un texte écrit pour l'exercice, à la manière d'un fait divers : « Hier soir, un tableau a été volé au musée de la ville. La vitrine avait été brisée et l'alarme était coupée. Le voleur n'a pas encore été identifié. Une enquête sera ouverte. » 1) Relevez les verbes à la voix passive et donnez leur temps. 2) Pourquoi l'auteur emploie-t-il autant le passif ? 3) Réécrivez les deux premières phrases à la voix active, en choisissant un sujet adapté.",
              hint: "Attention : « était coupée » peut se lire comme un passif ou comme un verbe d'état suivi d'un adjectif. Pour la réécriture, comme l'auteur n'est pas connu, le pronom « on » ou le nom « un voleur » conviennent.",
              solution: [
                "1) « a été volé » : passé composé passif. « avait été brisée » : plus-que-parfait passif. « n'a pas été identifié » : passé composé passif, à la forme négative. « sera ouverte » : futur passif.",
                "1) Suite : « était coupée » peut se lire comme un imparfait passif (quelqu'un avait agi sur l'alarme) ou décrire un simple état (l'alarme ne fonctionnait pas) ; l'essentiel est de le justifier.",
                "2) Le passif met en avant ce qui a subi les faits (le tableau, la vitrine) et permet de ne pas nommer l'auteur, que personne ne connaît encore. C'est un procédé typique des faits divers.",
                "3) Exemple de réécriture : « Hier soir, on a volé un tableau au musée de la ville. On avait brisé la vitrine et quelqu'un avait coupé l'alarme. » Le pronom « on » permet de garder l'auteur inconnu.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour mettre une phrase à la voix passive.",
            items: [
              "Repérer le verbe et son complément d'objet direct dans la phrase active",
              "Faire du COD le sujet de la nouvelle phrase",
              "Conjuguer « être » au temps du verbe actif",
              "Ajouter le participe passé et l'accorder avec le nouveau sujet",
              "Transformer l'ancien sujet en complément d'agent introduit par « par »",
            ],
          },
          quiz: [
            { q: "Quelle phrase est à la voix passive ?", options: ["Le facteur distribue le courrier.", "Le courrier est distribué par le facteur.", "Le facteur est passé très tôt dans notre rue.", "Le courrier arrive tôt."], answer: 1, why: "Le sujet « le courrier » subit l'action, et le complément d'agent « par le facteur » dit qui la fait." },
            { q: "Quel est le temps de « La maison a été vendue » ?", options: ["Passé composé passif", "Présent passif", "Imparfait passif", "Plus-que-parfait actif"], answer: 0, why: "L'auxiliaire « être » est au passé composé (a été) : c'est un passé composé à la voix passive." },
            { q: "Dans « Elle est arrivée à midi », le verbe est...", options: ["au présent passif", "au plus-que-parfait passif", "au passé composé actif", "à l'imparfait passif"], answer: 2, why: "« Arriver » se conjugue avec « être » au passé composé ; on ne peut pas ajouter de complément d'agent." },
            { q: "Quel verbe ne peut pas se mettre à la voix passive ?", options: ["Manger un gâteau", "Dormir", "Construire une maison"], answer: 1, why: "« Dormir » n'a pas de COD : il n'y a rien qui puisse devenir le sujet d'une phrase passive." },
            { q: "« On a repeint la classe » devient au passif :", options: ["La classe a été repeinte par on.", "La classe était repeinte.", "La classe a été repeinte."], answer: 2, why: "« On » ne devient pas complément d'agent : il disparaît. Le temps reste le passé composé et le participe s'accorde au féminin." },
          ],
          trap: "Confondre un passé composé construit avec « être » (« elle est venue ») et un présent passif (« elle est invitée »), ou oublier d'accorder le participe passé avec le nouveau sujet (« les portes ont été fermé »).",
          method: "Pour reconnaître le temps d'un verbe passif, cachez le participe passé et regardez seulement l'auxiliaire « être » : « a été » est un passé composé, « était » un imparfait, « sera » un futur. Pour vérifier qu'une phrase est passive, ajoutez mentalement « par quelqu'un ».",
        },
      ],
    },
    /* ================================================================== */
    /* INDIVIDU ET SOCIÉTÉ : CONFRONTATIONS DE VALEURS ?                    */
    /* ================================================================== */
    {
      id: 'individu-et-societe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'lire-texte-theatral',
          title: 'Lire un texte théâtral : répliques, didascalies, monologue',
          minutes: 25,
          objectives: [
            "Identifier les caractéristiques d'un texte théâtral : liste des personnages, actes, scènes, répliques et didascalies.",
            "Distinguer les formes de la parole au théâtre : réplique, tirade, monologue, aparté, stichomythie.",
            "Expliquer la double énonciation et le rôle des didascalies pour la mise en scène.",
          ],
          course: [
            {
              heading: "Un texte écrit pour être joué",
              paragraphs: [
                "Un texte théâtral n'est pas fait d'abord pour être lu en silence : il est écrit pour être joué par des comédiens, devant un public. Il n'y a pas de narrateur pour raconter l'histoire. Les personnages s'expriment directement, et c'est par leurs paroles et leurs actions que le spectateur comprend l'intrigue.",
                "Une pièce commence en général par la liste des personnages, parfois accompagnée de leur rôle (« le père de Chimène », « valet de Cléonte »). Elle est ensuite découpée en actes, les grandes parties de la pièce (cinq dans la tragédie et la grande comédie classiques, parfois trois ou un seul), puis en scènes. Dans le théâtre classique, on change de scène chaque fois qu'un personnage entre ou sort.",
                "Chaque prise de parole d'un personnage s'appelle une réplique. Le nom du personnage qui parle est écrit avant sa réplique, souvent en majuscules. Pour citer un passage, on indique l'acte et la scène : « acte II, scène 3 ».",
              ],
              box: { label: "Repère", text: "Pièce de théâtre : liste des personnages, puis actes (grandes parties) découpés en scènes. Dans le théâtre classique, une nouvelle scène commence quand un personnage entre ou sort. Réplique : chaque prise de parole d'un personnage." },
            },
            {
              heading: "Les didascalies : tout ce qui n'est pas dit",
              paragraphs: [
                "Les didascalies sont les indications écrites par l'auteur qui ne sont pas prononcées sur scène. Elles sont souvent en italique ou entre parenthèses. Elles précisent le lieu et le décor (« Un salon bourgeois, le soir »), les entrées et sorties, les gestes et les déplacements (« il s'assoit », « elle sort en claquant la porte »), le ton ou les sentiments (« furieux », « en riant »). Le nom du personnage placé avant chaque réplique est lui aussi une didascalie.",
                "On distingue la didascalie initiale, placée au début de la pièce ou d'un acte pour décrire le lieu, et les didascalies de jeu, placées dans le dialogue. Les auteurs du XVIIe siècle, comme Molière, en écrivent peu : les indications se trouvent souvent dans les répliques elles-mêmes (« Approchez », « Que vois-je ? »). Les auteurs du XXe siècle, au contraire, en écrivent parfois beaucoup.",
                "Les didascalies sont une aide précieuse pour le metteur en scène, qui décide comment jouer la pièce, et pour vous, lecteurs : elles vous permettent d'imaginer la scène comme si vous étiez au théâtre.",
              ],
              box: { label: "Définition", text: "Didascalie : indication de l'auteur, non prononcée par les comédiens, qui précise le lieu, le décor, les gestes, les déplacements, le ton ou le nom du personnage qui parle." },
            },
            {
              heading: "Les formes de la parole au théâtre",
              paragraphs: [
                "Une tirade est une longue réplique, dans laquelle un personnage développe un récit, une colère ou un raisonnement devant d'autres personnages. Une stichomythie est, au contraire, un échange de répliques très courtes, souvent d'un vers chacune, qui se répondent vite : elle crée un rythme rapide et souligne un affrontement.",
                "Un monologue est prononcé par un personnage seul sur scène, qui se parle à lui-même. Il permet au spectateur de connaître ses pensées secrètes, ses hésitations, ses décisions. C'est souvent dans un monologue qu'un héros exprime un choix difficile.",
                "Un aparté est une réplique prononcée « à part » : le personnage parle pour lui-même ou pour le public, et les autres personnages présents sur scène sont censés ne pas l'entendre. La didascalie « à part » le signale. L'aparté crée une complicité entre le personnage et les spectateurs.",
              ],
              box: { label: "À retenir", text: "Tirade : longue réplique devant d'autres personnages. Monologue : personnage seul en scène. Aparté : réplique que les autres personnages n'entendent pas. Stichomythie : échange rapide de répliques très courtes." },
            },
            {
              heading: "La double énonciation",
              paragraphs: [
                "Au théâtre, la parole a toujours deux destinataires. Un personnage parle à un autre personnage : c'est le premier niveau. Mais à travers lui, l'auteur s'adresse aussi au public, qui écoute tout : c'est le second niveau. On appelle ce phénomène la double énonciation.",
                "Grâce à elle, le spectateur en sait souvent plus que certains personnages : il a entendu un aparté, un monologue, ou il a vu un personnage se cacher. Cette avance du public peut faire rire, dans une comédie (on voit le piège se refermer), ou faire peur, dans une tragédie (on sait que le héros court à sa perte).",
              ],
              box: { label: "Définition", text: "Double énonciation : au théâtre, les paroles s'adressent à la fois aux personnages présents sur scène et, à travers eux, aux spectateurs." },
            },
          ],
          keyPoints: [
            "Le texte théâtral est écrit pour être joué : pas de narrateur, des personnages qui parlent directement.",
            "Une pièce se découpe en actes et en scènes ; on cite « acte II, scène 3 ».",
            "Les didascalies, non prononcées, indiquent lieu, décor, gestes, ton et nom du personnage.",
            "Tirade : longue réplique. Monologue : personnage seul. Aparté : réplique que les autres n'entendent pas.",
            "Stichomythie : échange rapide de répliques très courtes, souvent dans un conflit.",
            "Double énonciation : on parle aux personnages et, à travers eux, au public.",
          ],
          example: {
            statement: "Voici une courte scène, écrite pour l'exercice : « Un salon. LÉO entre sur la pointe des pieds, son bulletin à la main. MADAME DURAND, sans lever les yeux de son journal : Tu rentres tard. LÉO, à part : Pourvu qu'elle ne parle pas du bulletin... (Haut.) Il y avait du monde dans le bus. MADAME DURAND : Et ton bulletin, il est arrivé ? » Relevez les didascalies, nommez la forme de la réplique de Léo et expliquez ce que sait le spectateur.",
            solution: [
              "Relever les didascalies : « Un salon » (lieu), « entre sur la pointe des pieds, son bulletin à la main » (entrée et geste), « sans lever les yeux de son journal » (attitude), « à part » et « (Haut.) » (manière de dire), ainsi que les noms LÉO et MADAME DURAND placés avant les répliques.",
              "Nommer la forme : la première partie de la réplique de Léo est un aparté, signalé par « à part ». Madame Durand n'est pas censée l'entendre. Avec « (Haut.) », Léo s'adresse de nouveau à sa mère.",
              "Expliquer la double énonciation : Madame Durand entend seulement l'excuse du bus, mais le spectateur entend aussi l'aparté. Il sait que Léo redoute la question du bulletin.",
              "Effet : quand la mère pose justement cette question, le public, qui connaît la crainte de Léo, rit de voir son plan échouer.",
              "Réponse : cinq didascalies au moins, un aparté, et un spectateur qui en sait plus que la mère grâce à la double énonciation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez l'élément du texte théâtral qui correspond à chaque définition : a) Une longue réplique dans laquelle un personnage expose son point de vue devant d'autres personnages. b) Une réplique que les autres personnages présents sont censés ne pas entendre. c) Un passage où un personnage seul sur scène exprime ses pensées. d) Une indication, souvent en italique, qui précise un geste ou un décor. e) Une partie de la pièce qui change, dans le théâtre classique, chaque fois qu'un personnage entre ou sort.",
              hint: "Relisez l'encadré « À retenir » sur les formes de la parole. Attention à bien distinguer le personnage seul en scène et le personnage qui parle longuement devant les autres.",
              solution: [
                "a) Une tirade : la réplique est longue et d'autres personnages l'écoutent.",
                "b) Un aparté : il est souvent signalé par la didascalie « à part ».",
                "c) Un monologue : le personnage est seul sur scène et se parle à lui-même.",
                "d) Une didascalie : elle n'est pas prononcée par les comédiens.",
                "e) Une scène : elle s'inscrit à l'intérieur d'un acte.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cette scène écrite pour l'exercice : « Une cuisine, le soir. Une table, deux chaises. CLARA, posant brusquement sa tasse : Tu as encore pris mon vélo ! MAX : Je l'ai emprunté. CLARA : Sans demander ! MAX : Tu dormais ! CLARA : Il fallait attendre ! MAX, haussant les épaules : J'étais pressé. (Il sort en claquant la porte.) » 1) Relevez les didascalies et classez-les : lieu et décor, gestes et déplacements, manière d'agir. 2) Comment appelle-t-on l'échange des répliques courtes ? Quel est son effet ? 3) Que se passe-t-il, dans le théâtre classique, après la dernière didascalie ?",
              hint: "Les noms des personnages sont aussi des didascalies. Pour la question 3, souvenez-vous de ce qui provoque un changement de scène.",
              solution: [
                "1) Lieu et décor : « Une cuisine, le soir. Une table, deux chaises. » (didascalie initiale). Gestes et déplacements : « posant brusquement sa tasse », « haussant les épaules », « Il sort en claquant la porte ». Manière d'agir : « brusquement » montre la colère de Clara, « haussant les épaules » l'indifférence de Max. Les noms CLARA et MAX sont aussi des didascalies.",
                "2) C'est une stichomythie : les répliques sont très courtes et se répondent du tac au tac. Le rythme rapide fait monter la dispute et montre que chacun refuse de céder.",
                "3) Max sort : dans le théâtre classique, la sortie d'un personnage marque la fin de la scène. Une nouvelle scène commence, avec Clara seule, qui pourrait alors prononcer un monologue.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez une courte scène de théâtre (huit à dix répliques) entre deux personnages, sur ce sujet : un élève hésite à prendre la défense d'un camarade dont toute la classe se moque. Votre scène doit contenir une didascalie initiale, au moins deux didascalies de jeu, un aparté et une réplique plus longue qui pourrait être une petite tirade. Vérifiez ensuite votre texte à l'aide de cette liste.",
              hint: "Commencez par la didascalie initiale (lieu, moment, personnages présents). Placez l'aparté au moment où l'élève hésite : c'est là que le public doit connaître ses pensées.",
              solution: [
                "Didascalie initiale, par exemple : « La cour du collège, à la récréation. INÈS est adossée au mur. KARIM s'approche, les mains dans les poches. »",
                "Début du dialogue : « KARIM : Tu as vu ce qu'ils ont écrit sur le tableau, à propos de Noé ? INÈS : Oui. Tout le monde a ri. KARIM : Toi aussi ? INÈS, baissant les yeux : Un peu. »",
                "Aparté au moment de l'hésitation : « INÈS, à part : Si je le défends, ils vont se moquer de moi aussi... Mais si je me tais, je suis comme eux. »",
                "Petite tirade : « INÈS, relevant la tête : Non, Karim, ce n'est pas drôle. Noé n'a rien fait. Il est arrivé en septembre, il ne connaît personne, et nous l'avons choisi parce qu'il est seul. Demain, ce pourrait être toi ou moi. J'irai effacer le tableau. »",
                "Fin : « KARIM, après un silence : Je viens avec toi. (Ils sortent ensemble.) »",
                "Vérification : didascalie initiale (lieu et personnages) ; didascalies de jeu (« baissant les yeux », « relevant la tête », « Ils sortent ensemble ») ; un aparté (« à part ») ; une réplique longue, devant Karim, qui fonctionne comme une tirade. Le dilemme entre la peur du groupe et le sens de la justice relie la scène au thème « individu et société ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du théâtre à sa définition.",
            pairs: [
              { left: "Réplique", right: "Chaque prise de parole d'un personnage" },
              { left: "Tirade", right: "Longue réplique devant d'autres personnages" },
              { left: "Monologue", right: "Paroles d'un personnage seul sur scène" },
              { left: "Aparté", right: "Réplique que les autres personnages n'entendent pas" },
              { left: "Didascalie", right: "Indication de l'auteur, non prononcée" },
              { left: "Stichomythie", right: "Échange rapide de répliques très courtes" },
            ],
          },
          quiz: [
            { q: "Qu'est-ce qu'une didascalie ?", options: ["Une longue réplique", "Un échange très rapide de répliques courtes", "Un personnage secondaire", "Une indication de jeu ou de décor"], answer: 3, why: "La didascalie est une indication de l'auteur, non prononcée, qui précise le lieu, les gestes ou le ton." },
            { q: "Un personnage seul sur scène qui se parle à lui-même prononce...", options: ["un monologue", "un aparté", "une stichomythie", "une didascalie"], answer: 0, why: "Le monologue est prononcé par un personnage seul : il révèle ses pensées au public." },
            { q: "Qu'appelle-t-on la double énonciation ?", options: ["Un personnage répète deux fois la même réplique sur scène", "Deux acteurs se partagent le même rôle", "La parole vise à la fois les personnages et le public"], answer: 2, why: "Les personnages se parlent entre eux, mais l'auteur s'adresse aussi, à travers eux, aux spectateurs." },
            { q: "Dans le théâtre classique, quand change-t-on de scène ?", options: ["Quand le décor change", "À chaque nouvelle réplique", "À la fin de chaque journée de l'histoire", "Quand un personnage entre ou sort"], answer: 3, why: "Une nouvelle scène commence dès qu'un personnage entre ou quitte la scène." },
            { q: "Dans « LUCAS, à part : Elle ne se doute de rien », la réplique est...", options: ["un aparté", "un monologue", "une tirade", "une sortie de scène"], answer: 0, why: "La didascalie « à part » signale un aparté : les autres personnages présents ne l'entendent pas." },
          ],
          trap: "Confondre le monologue (un personnage seul sur scène) et la tirade (une longue réplique prononcée devant d'autres personnages), ou oublier que les noms des personnages et les indications en italique sont des didascalies, jamais prononcées.",
          method: "Avant de lire une scène, repérez qui est sur scène et lisez d'abord toutes les didascalies : elles vous donnent le décor, les gestes et le ton. Lisez ensuite les répliques à voix haute en changeant de voix pour chaque personnage : vous entendrez mieux les conflits.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tragedie-dilemme',
          title: 'La tragédie classique et le dilemme',
          minutes: 35,
          objectives: [
            "Identifier les caractéristiques de la tragédie classique : personnages, forme, règles et dénouement.",
            "Définir le dilemme et l'analyser dans une scène ou un monologue.",
            "Situer Corneille et Racine dans le XVIIe siècle et citer quelques-unes de leurs tragédies.",
            "Rédiger un paragraphe argumenté sur le choix d'un personnage tragique.",
          ],
          course: [
            {
              heading: "La tragédie classique, un genre noble",
              paragraphs: [
                "La tragédie classique se développe en France au XVIIe siècle, sous les règnes de Louis XIII et de Louis XIV. Ses personnages sont de haut rang : rois, reines, princes, héros, souvent empruntés à l'Antiquité grecque et romaine ou à l'histoire. Elle est écrite en vers, le plus souvent en alexandrins (vers de douze syllabes), dans un langage soutenu, et compte en général cinq actes.",
                "Le héros tragique est pris dans une situation dont il ne peut sortir sans perte. Il est déchiré entre ses sentiments et ses devoirs, ou dominé par une passion qui le dépasse. Le dénouement est souvent malheureux, avec la mort d'un ou de plusieurs personnages, mais pas toujours : ce qui fait la tragédie, c'est d'abord ce conflit grave.",
                "Le philosophe grec Aristote, dans sa Poétique (IVe siècle avant J.-C.), expliquait que la tragédie doit inspirer au spectateur de la crainte et de la pitié pour l'en purifier. Les auteurs classiques reprennent cette idée, que l'on appelle la catharsis : en voyant des héros souffrir de leurs passions, le public apprend à se méfier des siennes.",
              ],
              box: { label: "Définition", text: "Tragédie classique : pièce en cinq actes et en alexandrins, au registre soutenu, qui met en scène des personnages de haut rang pris dans un conflit grave, souvent mortel, afin de susciter la crainte et la pitié du spectateur." },
            },
            {
              heading: "Les règles du théâtre classique",
              paragraphs: [
                "Au XVIIe siècle, les auteurs suivent des règles inspirées d'Aristote. La règle des trois unités en est le cœur : unité d'action (une seule intrigue principale), unité de temps (l'action tient en une journée, vingt-quatre heures au plus) et unité de lieu (un seul lieu, par exemple une salle du palais). Le poète Nicolas Boileau les résume en deux vers célèbres de son Art poétique (1674).",
                "Deux autres règles complètent les unités. La vraisemblance demande que l'histoire paraisse crédible au spectateur. La bienséance interdit de choquer le public : on ne montre ni violence ni mort sur scène. Les combats et les morts sont donc racontés par un personnage, dans un récit. Dans Phèdre de Racine, par exemple, la mort d'Hippolyte est racontée par son gouverneur, Théramène.",
              ],
              box: { label: "Règle", text: "Les trois unités : une seule action, en un seul jour, en un seul lieu. La vraisemblance : une histoire crédible. La bienséance : ne rien montrer qui choque, ni violence ni mort sur scène." },
            },
            {
              heading: "Le dilemme : Rodrigue dans Le Cid de Corneille",
              paragraphs: [
                "Un dilemme est une situation où un personnage doit choisir entre deux possibilités qui le font souffrir toutes les deux : quoi qu'il décide, il perd quelque chose d'essentiel. Le dilemme oppose souvent la passion, c'est-à-dire l'amour, au devoir : l'honneur de la famille, la loyauté envers le roi, l'intérêt de l'État.",
                "L'exemple le plus célèbre se trouve dans Le Cid de Pierre Corneille (1606-1684), pièce créée en 1637, d'abord présentée comme une tragi-comédie puis rangée parmi les tragédies. Rodrigue aime Chimène et en est aimé. Mais le père de Chimène, le Comte, humilie le vieux Don Diègue, père de Rodrigue, en lui donnant un soufflet. Trop âgé pour se battre, Don Diègue demande à son fils de le venger.",
                "Rodrigue doit donc choisir : venger son père en affrontant le père de celle qu'il aime, ou renoncer à l'honneur de sa famille. Seul en scène, à la fin de l'acte I, il exprime son déchirement dans des stances, un monologue en strophes. Il comprend qu'en renonçant à l'honneur il deviendrait indigne de Chimène elle-même, et il choisit de se battre. Chimène vit ensuite le même déchirement : elle aime Rodrigue, mais elle doit demander sa punition au roi.",
              ],
              box: { label: "Définition", text: "Dilemme : choix entre deux possibilités qui entraînent chacune une perte. On parle de dilemme cornélien quand le héros doit choisir entre son amour et son devoir (l'honneur, la famille, l'État)." },
            },
            {
              heading: "Racine : la passion plus forte que la raison",
              paragraphs: [
                "Jean Racine (1639-1699) écrit, une génération après Corneille, des tragédies comme Andromaque (1667) et Phèdre (1677). Ses héros sont dominés par des passions, surtout l'amour et la jalousie, qu'ils ne parviennent pas à maîtriser. Le moraliste La Bruyère écrivait déjà que Corneille peint les hommes comme ils devraient être, et Racine tels qu'ils sont.",
                "Dans Andromaque, l'héroïne, veuve du héros troyen Hector, est prisonnière du roi Pyrrhus. Pyrrhus veut l'épouser et la menace : si elle refuse, il livrera aux Grecs son fils Astyanax. Andromaque est prise dans un dilemme terrible : sauver son fils en épousant l'un des Grecs qui ont détruit Troie, sa ville, ou rester fidèle à la mémoire de son mari. Dans ces pièces, l'individu affronte les exigences de la société : la famille, le rang, la loi, la guerre.",
              ],
              box: { label: "À retenir", text: "Corneille (Le Cid, 1637 ; Horace, 1640) : des héros qui choisissent l'honneur et le devoir. Racine (Andromaque, 1667 ; Phèdre, 1677) : des héros emportés par leurs passions." },
            },
          ],
          keyPoints: [
            "Tragédie classique : XVIIe siècle, cinq actes, alexandrins, personnages de haut rang, conflit grave.",
            "Elle doit inspirer la crainte et la pitié (Aristote) ; dénouement souvent malheureux.",
            "Règles : trois unités (action, temps, lieu), vraisemblance, bienséance (pas de mort sur scène).",
            "Dilemme : choix entre deux options qui entraînent chacune une perte, souvent l'amour contre le devoir.",
            "Le Cid (Corneille, 1637) : Rodrigue doit venger son père en affrontant le père de Chimène.",
            "Racine (Andromaque, Phèdre) : des héros dominés par leurs passions.",
          ],
          example: {
            statement: "Expliquez en quoi consiste le dilemme de Rodrigue dans Le Cid de Corneille, et pourquoi on parle à son sujet de « dilemme cornélien ».",
            solution: [
              "Rappeler la situation : le Comte, père de Chimène, a humilié Don Diègue, père de Rodrigue, en lui donnant un soufflet. Don Diègue, trop âgé, demande à Rodrigue de le venger.",
              "Présenter la première option : venger son père. Rodrigue sauve l'honneur de sa famille, mais il doit affronter, et peut-être tuer, le père de la femme qu'il aime : il risque de perdre Chimène.",
              "Présenter la seconde option : refuser le combat. Rodrigue garde une chance auprès de Chimène, mais il déshonore son père et sa famille, et devient indigne de l'estime de Chimène elle-même.",
              "Conclure sur le dilemme : les deux choix entraînent une perte ; c'est un conflit entre l'amour (la passion) et l'honneur (le devoir).",
              "Réponse : on parle de « dilemme cornélien » parce que Corneille a rendu célèbre ce type de choix entre amour et devoir, que Rodrigue résout en choisissant l'honneur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez avec précision : a) En combien d'actes une tragédie classique est-elle le plus souvent écrite ? b) Quel vers emploie-t-elle le plus souvent, et combien de syllabes compte-t-il ? c) Quelles sont les trois unités ? d) Pourquoi la mort d'un personnage est-elle racontée plutôt que montrée ? e) Quels sentiments la tragédie doit-elle inspirer au spectateur, selon Aristote ?",
              hint: "Toutes les réponses se trouvent dans les deux premières parties du cours. Pour la question d, pensez à la règle qui interdit de choquer le public.",
              solution: [
                "a) Cinq actes.",
                "b) L'alexandrin, qui compte douze syllabes.",
                "c) L'unité d'action (une seule intrigue), l'unité de temps (une journée) et l'unité de lieu (un seul lieu).",
                "d) À cause de la règle de bienséance, qui interdit de montrer la violence et la mort sur scène : un personnage les raconte dans un récit.",
                "e) La crainte et la pitié, qui doivent purifier le spectateur de ses passions (la catharsis).",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce monologue en prose, écrit pour l'exercice : « ÉLISE, seule : Mon père est roi, et il m'a ordonné de lui livrer le nom du chef des révoltés. Ce nom, je le connais : c'est celui de l'homme que j'aime. Si je parle, je le perds pour toujours. Si je me tais, je trahis mon père et mon pays. Que faire ? Faut-il choisir entre mon cœur et mon devoir ? Ah ! je ne peux ni parler ni me taire... Pourtant, demain, il faudra répondre. » 1) Quelles sont les deux possibilités qui s'offrent à Élise ? 2) Quelles valeurs s'opposent ? 3) Relevez trois procédés qui expriment son hésitation. 4) Pourquoi l'auteur a-t-il choisi la forme du monologue ?",
              hint: "Cherchez les deux phrases construites en parallèle avec « Si ». Pour l'hésitation, pensez à la ponctuation (questions, exclamations, points de suspension) et aux mots d'opposition.",
              solution: [
                "1) Les deux possibilités : parler, c'est-à-dire livrer le nom de l'homme qu'elle aime, ou se taire et désobéir à son père.",
                "2) Les valeurs : d'un côté l'amour (« mon cœur »), de l'autre le devoir envers son père, le roi, et envers son pays (« mon devoir »). C'est un conflit entre l'individu et la société.",
                "3) Procédés : les deux phrases parallèles en « Si je parle... Si je me tais... », qui montrent que chaque choix entraîne une perte ; les questions (« Que faire ? ») ; l'interjection « Ah ! » et les points de suspension ; la négation « ni... ni... » ; le connecteur « Pourtant », qui rappelle qu'il faudra décider.",
                "4) Élise est seule : le monologue permet au spectateur de connaître ses pensées secrètes, qu'elle ne pourrait dire devant personne. C'est la forme typique de l'expression d'un dilemme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe argumenté de huit à dix lignes pour répondre à la question : « Rodrigue a-t-il raison de choisir l'honneur plutôt que l'amour ? » Votre paragraphe doit contenir une réponse claire, deux arguments, un exemple tiré de l'histoire du Cid et une phrase de conclusion. Vous pouvez soutenir l'avis de votre choix.",
              hint: "Commencez par votre réponse à la question. Pour chaque argument, utilisez un connecteur (d'abord, de plus, enfin). Appuyez-vous sur ce que vous savez de l'histoire : le soufflet, la demande de Don Diègue, la réaction de Chimène.",
              solution: [
                "Phrase de réponse : « Je pense que Rodrigue a raison de choisir l'honneur, même si ce choix le fait souffrir. »",
                "Premier argument : « D'abord, s'il refusait de venger son père, il trahirait sa famille, et Don Diègue, trop âgé pour se battre, resterait humilié à jamais. »",
                "Deuxième argument : « De plus, Rodrigue comprend que Chimène elle-même ne pourrait pas aimer un homme sans honneur : en renonçant au combat, il la perdrait aussi. »",
                "Exemple : « Dans la pièce, Chimène, qui doit pourtant réclamer sa punition au roi, continue de l'aimer, ce qui montre qu'elle respecte son choix. »",
                "Conclusion : « Ainsi, le choix de Rodrigue est douloureux, mais il est le seul qui lui permette de rester digne de son père et de Chimène. »",
                "Vérification : une réponse claire, deux arguments reliés par « D'abord » et « De plus », un exemple tiré de l'œuvre, une conclusion introduite par « Ainsi ». Un élève qui soutient l'avis contraire peut obtenir tous les points s'il respecte la même structure.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'histoire du Cid de Corneille.",
            items: [
              "Le Comte, père de Chimène, donne un soufflet à Don Diègue, père de Rodrigue",
              "Don Diègue, trop âgé pour se battre, demande à Rodrigue de le venger",
              "Seul en scène, Rodrigue hésite entre son amour et son honneur, puis décide de se battre",
              "Rodrigue tue le Comte en duel",
              "Chimène demande au roi de punir Rodrigue",
              "Rodrigue repousse une attaque des Maures et reçoit le surnom de « Cid »",
              "Le roi annonce que Chimène épousera Rodrigue, après un délai",
            ],
          },
          quiz: [
            { q: "En combien d'actes une tragédie classique est-elle le plus souvent écrite ?", options: ["Cinq", "Trois", "Deux", "Un seul"], answer: 0, why: "La tragédie classique compte en général cinq actes, comme la grande comédie de la même époque." },
            { q: "Qu'est-ce qu'un dilemme ?", options: ["Un long discours devant le roi", "Une dispute entre deux personnages", "Une règle du théâtre classique", "Un choix sans issue heureuse"], answer: 3, why: "Un dilemme oblige à choisir entre deux possibilités qui entraînent chacune une perte." },
            { q: "Que dit la règle de l'unité de temps ?", options: ["L'action dure plusieurs années", "L'action tient en une journée", "La pièce dure une heure", "Les actes ont la même durée"], answer: 1, why: "L'action doit se dérouler en vingt-quatre heures au plus." },
            { q: "Dans la tragédie classique, comment le spectateur apprend-il une mort violente ?", options: ["On la montre sur scène avec beaucoup de détails", "On la supprime de l'histoire", "On la mime en silence", "Un personnage la raconte"], answer: 3, why: "La bienséance interdit de montrer la mort sur scène : elle est racontée dans un récit." },
            { q: "Qui est l'auteur de Phèdre (1677) ?", options: ["Molière", "Corneille", "Racine", "Marivaux"], answer: 2, why: "Phèdre est une tragédie de Jean Racine, comme Andromaque (1667)." },
          ],
          trap: "Croire qu'une tragédie se reconnaît seulement à la mort finale du héros : Le Cid ne se termine pas par la mort de Rodrigue. C'est le conflit grave entre des valeurs, le rang des personnages et le registre soutenu qui font la tragédie.",
          method: "Pour analyser un dilemme, tracez un tableau à deux colonnes. Dans chacune, notez une possibilité, la valeur qu'elle défend (amour, honneur, famille, État) et ce que le personnage perd s'il la choisit. Relevez ensuite dans le texte les marques d'hésitation : questions, exclamations, « mais », « pourtant ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'comedie-critique',
          title: 'La comédie : faire rire pour critiquer la société',
          minutes: 30,
          objectives: [
            "Identifier les formes du comique : comique de mots, de gestes, de situation, de caractère et de mœurs.",
            "Expliquer comment une comédie critique les défauts d'un individu ou d'une société.",
            "Situer Molière, Marivaux et Beaumarchais et citer quelques-unes de leurs comédies.",
            "Analyser une scène de comédie en reliant les procédés comiques à leur cible.",
          ],
          course: [
            {
              heading: "La comédie classique : plaire et corriger",
              paragraphs: [
                "Au XVIIe siècle, la comédie met en scène des personnages de condition moyenne : des bourgeois, leurs enfants, leurs domestiques. L'intrigue est souvent la même : deux jeunes gens s'aiment, mais un obstacle, en général un père autoritaire, s'oppose à leur mariage. Aidés par des valets rusés, ils finissent par l'emporter. La pièce se termine bien, souvent par un mariage.",
                "Le plus célèbre auteur de comédies est Molière (1622-1673), de son vrai nom Jean-Baptiste Poquelin. Comédien, chef de troupe et auteur, il fut soutenu par le roi Louis XIV. Pour lui, la comédie ne sert pas seulement à divertir : dans une lettre au roi, il explique que son rôle est de corriger les hommes en les amusant. En riant d'un personnage ridicule, le spectateur reconnaît des défauts qui sont aussi les siens.",
              ],
              box: { label: "Définition", text: "Comédie : pièce de théâtre qui cherche à faire rire, met en scène des personnages ordinaires et se termine bien. La comédie classique veut plaire et instruire : corriger les défauts en les rendant ridicules." },
            },
            {
              heading: "Les cinq formes du comique",
              paragraphs: [
                "Le comique de mots naît du langage : jeux de mots, répétitions, déformations, jargon incompréhensible. Dans L'Avare (1668), Harpagon répète sans cesse « sans dot », comme si ces deux mots réglaient tout. Le comique de gestes naît des mouvements : coups de bâton, chutes, poursuites, grimaces. Molière l'emprunte en partie à la farce et à la commedia dell'arte italienne.",
                "Le comique de situation naît de l'intrigue : un personnage caché qui entend tout, un quiproquo (un malentendu où l'on prend une personne ou une chose pour une autre), un arroseur arrosé. Le comique de caractère naît d'un défaut exagéré qui domine un personnage : l'avarice d'Harpagon, la naïveté de Monsieur Jourdain. Le comique de mœurs se moque des habitudes d'un groupe social : les médecins pédants, les précieuses, les bourgeois qui imitent les nobles.",
              ],
              box: { label: "Repère", text: "Mots : le langage. Gestes : les mouvements du corps. Situation : l'intrigue (quiproquo, personnage caché). Caractère : un défaut exagéré. Mœurs : les habitudes d'un groupe social." },
            },
            {
              heading: "Molière : rire d'un personnage pour critiquer la société",
              paragraphs: [
                "Dans Le Bourgeois gentilhomme (1670), Monsieur Jourdain, un riche bourgeois, rêve de devenir noble. Il prend des leçons de danse, de musique et de philosophie, porte des habits ridicules et se laisse duper par Dorante, un comte sans scrupules qui lui emprunte de l'argent sans jamais le rendre. Molière se moque de sa vanité, mais aussi des nobles qui profitent de lui.",
                "Dans Le Tartuffe, un faux dévot, Tartuffe, trompe un père de famille, Orgon, en jouant la piété pour s'emparer de ses biens. La pièce dénonce l'hypocrisie ; elle choqua une partie des dévots et fut interdite après sa première représentation en 1664, avant d'être autorisée en 1669. Dans Le Malade imaginaire (1673), Molière ridiculise des médecins qui cachent leur ignorance derrière un latin savant.",
                "Dans ces pièces, un individu obsédé par son défaut (l'avarice, la vanité, la peur de la maladie) met en danger sa famille, souvent en voulant marier sa fille contre son gré. La comédie montre ainsi le conflit entre un individu et les règles de la vie en société.",
              ],
              box: { label: "À retenir", text: "Molière : L'Avare (1668), avarice ; Le Bourgeois gentilhomme (1670), vanité ; Le Tartuffe (interdit en 1664, autorisé en 1669), hypocrisie ; Le Malade imaginaire (1673), médecins." },
            },
            {
              heading: "Maîtres et valets : renverser l'ordre de la société",
              paragraphs: [
                "Au XVIIIe siècle, la comédie interroge l'ordre social lui-même. Dans L'Île des esclaves (1725) de Marivaux, des maîtres athéniens et leurs esclaves font naufrage sur une île gouvernée par d'anciens esclaves. La loi de l'île oblige maîtres et serviteurs à échanger leurs rôles : les maîtres découvrent ce qu'ils faisaient subir aux autres, et apprennent à se corriger.",
                "Dans Le Mariage de Figaro (1784) de Beaumarchais, le valet Figaro défend sa fiancée Suzanne contre son maître, le comte Almaviva. Dans un long monologue, à l'acte V, il reproche au noble de ne devoir sa fortune et son rang qu'à sa naissance, sans aucun mérite. Cette critique des privilèges, jouée cinq ans avant la Révolution française, eut un grand retentissement.",
              ],
              box: { label: "Repère", text: "Marivaux, L'Île des esclaves (1725) : maîtres et esclaves échangent leurs rôles. Beaumarchais, Le Mariage de Figaro (1784) : un valet plus habile que son maître critique les privilèges de la noblesse." },
            },
          ],
          keyPoints: [
            "La comédie fait rire, met en scène des personnages ordinaires et se termine bien, souvent par un mariage.",
            "Pour Molière, la comédie doit corriger les hommes en les divertissant.",
            "Cinq formes du comique : mots, gestes, situation, caractère, mœurs.",
            "Molière critique l'avarice (L'Avare), la vanité (Le Bourgeois gentilhomme), l'hypocrisie (Le Tartuffe).",
            "Marivaux (L'Île des esclaves) et Beaumarchais (Le Mariage de Figaro) interrogent les rapports entre maîtres et valets.",
            "Analyser une scène : de quoi rit-on, de qui rit-on, et qu'est-ce qui est critiqué ?",
          ],
          example: {
            statement: "Voici une courte scène, écrite pour l'exercice : « M. PINGRE, comptant ses pièces : Une, deux, trois... Picard ! Qui a allumé une deuxième bougie ? PICARD : C'est moi, Monsieur, on ne voyait plus rien. M. PINGRE : Plus rien ! On voit très bien avec une bougie. Avec une demi-bougie, même. (Il souffle la bougie et se cogne contre la table.) Aïe ! PICARD, à part : Il économise la lumière et dépense ses genoux. » Quelles formes du comique reconnaissez-vous, et quel défaut est critiqué ?",
            solution: [
              "Comique de caractère : M. Pingre est dominé par l'avarice, qu'il pousse jusqu'à l'absurde (« une demi-bougie »). Son nom même, « Pingre », signifie avare.",
              "Comique de gestes : il souffle la bougie et se cogne contre la table, ce que précise la didascalie.",
              "Comique de situation : son économie se retourne contre lui ; c'est l'arroseur arrosé.",
              "Comique de mots : l'aparté de Picard joue sur l'opposition « économise » et « dépense », et crée une complicité avec le public grâce à la double énonciation.",
              "Réponse : la scène combine quatre formes du comique pour ridiculiser l'avarice, un défaut qui rend le personnage absurde et fait souffrir son entourage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez la forme du comique principale dans chaque situation : a) Un valet reçoit des coups de bâton et pousse des cris exagérés. b) Deux personnages parlent chacun d'une chose différente sans s'en rendre compte. c) Un personnage répète sans cesse la même formule. d) Un vieil homme est si avare qu'il compte les grains de sel de la cuisine. e) Des médecins parlent un latin incompréhensible pour impressionner leurs patients.",
              hint: "Demandez-vous d'où vient le rire : du corps (gestes), du langage (mots), de l'intrigue (situation), d'un défaut d'un personnage (caractère) ou des habitudes d'un groupe (mœurs).",
              solution: [
                "a) Comique de gestes : le rire vient des coups et des mouvements.",
                "b) Comique de situation : c'est un quiproquo, un malentendu entre les personnages.",
                "c) Comique de mots : la répétition d'une formule fait rire.",
                "d) Comique de caractère : un défaut, l'avarice, est exagéré jusqu'à l'absurde.",
                "e) Comique de mœurs : on se moque des habitudes d'un groupe social, les médecins. On peut aussi parler de comique de mots, car le jargon latin est ridicule.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cette scène, écrite pour l'exercice à la manière de Marivaux : « Sur une île. ARTHUR, l'ancien maître, porte un tablier ; JULES, l'ancien valet, est assis dans un fauteuil. JULES : Arthur, mon ami, apportez-moi mon chapeau. Non, pas celui-ci : l'autre. Non, finalement, le premier. ARTHUR, les dents serrées : Voici, Monsieur. JULES : “Monsieur” ! Comme c'est joli. Vous le disiez souvent, autrefois ? ARTHUR : Jamais. JULES : C'est bien ce que je pensais. Moi, je le disais quarante fois par jour. (Il laisse tomber son mouchoir.) Ramassez, je vous prie. » 1) Quelle est la situation comique ? 2) Relevez un comique de gestes et un comique de mots. 3) Que critique cette scène ?",
              hint: "Observez les didascalies initiales : qui porte le tablier ? Pour la question 3, demandez-vous ce que l'ancien maître découvre en servant à son tour.",
              solution: [
                "1) La situation comique est un renversement des rôles : l'ancien maître sert, l'ancien valet commande. Le spectateur rit de voir le maître humilié à son tour.",
                "2) Comique de gestes : Jules laisse tomber son mouchoir pour obliger Arthur à le ramasser ; Arthur parle « les dents serrées ». Comique de mots : les ordres contradictoires (« pas celui-ci : l'autre. Non, finalement, le premier ») et la répétition ironique de « Monsieur ».",
                "3) La scène critique le mépris des maîtres pour leurs serviteurs et l'injustice d'une société où le rang dépend de la naissance. En vivant la situation de son valet, Arthur comprend ce qu'il lui faisait subir : la comédie veut le corriger.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe argumenté de huit à dix lignes pour répondre à la question : « Peut-on critiquer la société en faisant rire ? » Appuyez-vous sur deux comédies étudiées dans cette leçon, et employez au moins trois connecteurs logiques.",
              hint: "Donnez d'abord votre réponse. Un argument peut porter sur l'effet du rire sur le spectateur, un autre sur la liberté qu'il donne à l'auteur. Choisissez deux exemples précis : une pièce de Molière et une pièce du XVIIIe siècle.",
              solution: [
                "Réponse : « Oui, le rire peut être une arme efficace pour critiquer la société. »",
                "Premier argument et exemple : « D'abord, en exagérant un défaut, la comédie le rend visible. Dans Le Bourgeois gentilhomme, Molière grossit la vanité de Monsieur Jourdain, et le spectateur, en riant de lui, se moque aussi de ceux qui veulent paraître plus qu'ils ne sont. »",
                "Deuxième argument et exemple : « De plus, le rire permet de dire des choses graves sans ennuyer le public. Dans L'Île des esclaves, Marivaux fait rire en inversant les rôles des maîtres et des esclaves, mais il pose une vraie question : est-il juste de commander aux autres seulement parce qu'on est né maître ? »",
                "Nuance et conclusion : « Cependant, le rire dérange parfois : Le Tartuffe fut interdit pendant plusieurs années. C'est donc bien la preuve que la comédie peut critiquer la société avec force. »",
                "Vérification : une réponse claire, deux arguments appuyés sur deux comédies, quatre connecteurs (D'abord, De plus, Cependant, donc) et une conclusion.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la comédie.",
            statements: [
              { text: "Une comédie se termine en général de façon heureuse, souvent par un mariage.", true: true, why: "Les obstacles sont surmontés et les jeunes amoureux peuvent s'unir." },
              { text: "Le comique de caractère repose sur les chutes et les coups de bâton.", true: false, why: "Les chutes et les coups relèvent du comique de gestes. Le comique de caractère repose sur un défaut exagéré." },
              { text: "Pour Molière, la comédie sert seulement à faire rire, sans rien critiquer.", true: false, why: "Molière voulait corriger les hommes en les divertissant : le rire sert à critiquer." },
              { text: "Un quiproquo est un malentendu où l'on prend une personne ou une chose pour une autre.", true: true, why: "C'est une source fréquente de comique de situation." },
              { text: "Dans L'Île des esclaves, maîtres et esclaves échangent leurs rôles.", true: true, why: "La loi de l'île oblige les maîtres à servir pour qu'ils prennent conscience de leurs défauts." },
              { text: "Le Tartuffe fut joué librement dès sa première version, sans aucune difficulté.", true: false, why: "La pièce fut interdite après sa première représentation en 1664 et autorisée seulement en 1669." },
              { text: "Le comique de mœurs se moque des habitudes d'un groupe social.", true: true, why: "Molière ridiculise par exemple les médecins ou les bourgeois qui imitent les nobles." },
            ],
          },
          quiz: [
            { q: "Quel est le vrai nom de Molière ?", options: ["Pierre Corneille", "Jean Racine", "Pierre Carlet de Marivaux", "Jean-Baptiste Poquelin"], answer: 3, why: "Molière est le nom de théâtre de Jean-Baptiste Poquelin (1622-1673)." },
            { q: "Un malentendu où un personnage est pris pour un autre s'appelle...", options: ["un quiproquo", "un aparté", "une tirade", "une stichomythie"], answer: 0, why: "Le quiproquo est un malentendu ; il produit un comique de situation." },
            { q: "Quel défaut Harpagon, dans L'Avare, incarne-t-il ?", options: ["L'hypocrisie", "La vanité", "La crédulité", "L'avarice"], answer: 3, why: "Harpagon est obsédé par son argent : c'est un comique de caractère fondé sur l'avarice." },
            { q: "Quelle comédie de Marivaux inverse les rôles des maîtres et des esclaves ?", options: ["Le Bourgeois gentilhomme", "L'Île des esclaves", "Le Mariage de Figaro", "Le Malade imaginaire"], answer: 1, why: "Dans L'Île des esclaves (1725), la loi de l'île oblige maîtres et esclaves à échanger leurs rôles." },
            { q: "Selon Molière, quel est le rôle de la comédie ?", options: ["Corriger les hommes en les divertissant", "Faire pleurer le public sur le malheur des héros", "Raconter fidèlement l'histoire des rois de France", "Imiter la tragédie"], answer: 0, why: "Molière défendait une comédie qui fait rire des défauts pour aider les spectateurs à s'en corriger." },
          ],
          trap: "Confondre le comique de caractère (le défaut exagéré d'un personnage) et le comique de mœurs (les habitudes d'un groupe social), ou croire qu'une comédie sert seulement à divertir, sans chercher ce qu'elle critique.",
          method: "Pour analyser une scène comique, posez trois questions dans l'ordre : de quoi rit-on (mots, gestes, situation, caractère, mœurs) ? de qui rit-on (le personnage ridiculisé) ? qu'est-ce qui est critiqué à travers lui (un défaut, un groupe, une injustice) ? Votre réponse à la troisième question est le cœur de l'analyse.",
        },
      ],
    },
    /* ================================================================== */
    /* LES SUBORDONNÉES CIRCONSTANCIELLES                                   */
    /* ================================================================== */
    {
      id: 'circonstancielles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'temps-et-cause',
          title: 'Exprimer le temps et la cause',
          minutes: 30,
          objectives: [
            "Identifier une proposition subordonnée conjonctive circonstancielle et donner sa fonction dans la phrase.",
            "Distinguer les rapports de temps : simultanéité, antériorité et postériorité.",
            "Exprimer la cause par une subordonnée et par d'autres moyens : préposition, coordination, juxtaposition.",
            "Choisir le mode qui convient après les conjonctions de temps et de cause.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une subordonnée circonstancielle ?",
              paragraphs: [
                "Une proposition subordonnée conjonctive circonstancielle est introduite par une conjonction de subordination (quand, parce que, pour que, bien que...). Elle joue dans la phrase le même rôle qu'un complément circonstanciel : elle précise une circonstance de l'action de la principale. Comparez « Nous sortirons après le dîner » et « Nous sortirons quand nous aurons dîné » : le groupe nominal et la subordonnée sont tous deux compléments circonstanciels de temps du verbe « sortirons ».",
                "Comme un complément circonstanciel, la subordonnée est le plus souvent déplaçable et supprimable : « Quand la cloche sonne, les élèves sortent » ou « Les élèves sortent quand la cloche sonne ». Si on la supprime, la phrase reste correcte, mais elle perd une information.",
                "Ces subordonnées expriment des rapports logiques variés : le temps, la cause, le but, la conséquence, l'opposition, la concession, mais aussi la condition (« si ») et la comparaison (« comme »). Ce chapitre étudie les six premiers. Pour analyser une subordonnée, on donne toujours trois éléments : sa nature, son mot introducteur et sa fonction.",
              ],
              box: { label: "Définition", text: "Subordonnée conjonctive circonstancielle : proposition introduite par une conjonction de subordination, qui est complément circonstanciel du verbe de la principale. Elle est en général déplaçable et supprimable. Analyse : nature, mot introducteur, fonction (complément circonstanciel de temps, de cause...)." },
            },
            {
              heading: "Exprimer le temps : avant, pendant, après",
              paragraphs: [
                "La subordonnée de temps situe l'action de la principale par rapport à une autre action. Trois rapports sont possibles. La simultanéité : les deux actions ont lieu en même temps. Conjonctions : quand, lorsque, pendant que, tandis que, comme, au moment où, chaque fois que, à mesure que. « Pendant que je lisais, mon frère jouait. »",
                "L'antériorité : l'action de la subordonnée a lieu avant celle de la principale. Conjonctions : après que, dès que, aussitôt que, depuis que, une fois que. « Dès que la pluie cessa, nous sortîmes. » La postériorité : l'action de la subordonnée a lieu après celle de la principale. Conjonctions : avant que, jusqu'à ce que, en attendant que. « Rangez vos affaires avant que la cloche sonne. »",
                "Le mode dépend du rapport. Quand l'action de la subordonnée est réelle au moment de la principale (simultanéité, antériorité), on emploie l'indicatif : « après qu'il est arrivé », jamais « après qu'il soit arrivé ». Quand l'action n'a pas encore eu lieu (postériorité), on emploie le subjonctif : « avant qu'il parte », « jusqu'à ce qu'il revienne ». Après « avant que », on peut ajouter un « ne » qui n'a aucun sens négatif, appelé « ne » explétif : « avant qu'il ne parte ».",
              ],
              box: { label: "Règle", text: "Simultanéité (quand, lorsque, pendant que, tandis que, au moment où) et antériorité (après que, dès que, depuis que, une fois que) : indicatif. Postériorité (avant que, jusqu'à ce que, en attendant que) : subjonctif." },
            },
            {
              heading: "Exprimer la cause",
              paragraphs: [
                "La subordonnée de cause donne la raison de l'action principale. Elle répond à la question « pourquoi ? ». Les conjonctions les plus fréquentes sont parce que, puisque, comme, étant donné que, vu que, sous prétexte que. Elles sont suivies de l'indicatif, car la cause est présentée comme un fait réel : « Le match est annulé parce que le terrain est inondé. »",
                "Ces conjonctions n'ont pas toutes la même nuance. « Parce que » apporte une cause que l'interlocuteur ne connaît pas encore : c'est la réponse à « pourquoi ? ». « Puisque » présente une cause déjà connue ou évidente : « Puisque vous êtes là, aidez-moi. » « Comme » se place en tête de phrase : « Comme il pleuvait, nous sommes restés à l'intérieur. » « Sous prétexte que » rapporte une cause donnée par quelqu'un, mais que l'on juge fausse : « Il n'a pas fait ses devoirs sous prétexte qu'il avait mal à la tête. »",
              ],
              box: { label: "Repère", text: "Parce que : cause nouvelle, réponse à « pourquoi ? ». Puisque : cause connue ou évidente. Comme : cause placée en tête de phrase. Sous prétexte que : cause contestée. Toutes ces conjonctions sont suivies de l'indicatif." },
            },
            {
              heading: "D'autres façons d'exprimer le temps et la cause",
              paragraphs: [
                "La subordonnée n'est pas le seul moyen. Pour le temps, on peut employer un groupe nominal (« à son arrivée », « pendant les vacances »), une préposition suivie d'un infinitif (« avant de partir », « après avoir mangé ») ou un gérondif (« En arrivant, il salua tout le monde »).",
                "Pour la cause, on peut employer une préposition suivie d'un nom : « à cause de la pluie », « grâce à votre aide » (grâce à présente une cause heureuse), « en raison des travaux ». On peut aussi employer la conjonction de coordination « car » ou l'adverbe « en effet » : « Je rentre, car il est tard. » Enfin, la juxtaposition laisse le lecteur deviner la cause : « Il est tard : je rentre. » Varier ces moyens rend votre écriture plus précise et moins répétitive.",
              ],
              box: { label: "À retenir", text: "Temps : groupe nominal (à son arrivée), avant de + infinitif, après + infinitif passé, gérondif (en arrivant). Cause : à cause de, grâce à, en raison de + nom ; car, en effet ; juxtaposition avec deux-points." },
            },
          ],
          keyPoints: [
            "Une subordonnée circonstancielle, introduite par une conjonction de subordination, est complément circonstanciel du verbe de la principale.",
            "Elle est le plus souvent déplaçable et supprimable.",
            "Temps : simultanéité (quand, lorsque, pendant que), antériorité (après que, dès que), postériorité (avant que, jusqu'à ce que).",
            "Après que, dès que + indicatif ; avant que, jusqu'à ce que + subjonctif.",
            "Cause : parce que, puisque, comme, vu que, sous prétexte que, toujours suivis de l'indicatif.",
            "« Car » est une conjonction de coordination ; « parce que » est une conjonction de subordination.",
          ],
          example: {
            statement: "Analysez les subordonnées de cette phrase : « Comme le bus était en retard, Inès courut jusqu'au collège ; elle arriva en classe avant que le professeur fasse l'appel. »",
            solution: [
              "Relever les verbes conjugués : était, courut, arriva, fasse. La phrase contient donc quatre propositions.",
              "« Comme le bus était en retard » : subordonnée conjonctive circonstancielle introduite par « comme ». Elle donne la raison de la course d'Inès (on peut dire « parce que le bus était en retard ») : elle est complément circonstanciel de cause de « courut ». Son verbe est à l'indicatif.",
              "« Inès courut jusqu'au collège » : proposition principale, dont dépend la subordonnée de cause.",
              "« elle arriva en classe » : proposition juxtaposée à la précédente par le point-virgule ; elle est aussi la principale de la seconde subordonnée.",
              "« avant que le professeur fasse l'appel » : subordonnée conjonctive circonstancielle introduite par « avant que », complément circonstanciel de temps de « arriva ». L'appel a lieu après l'arrivée d'Inès (postériorité) : le verbe est au subjonctif, « fasse ».",
              "Réponse : deux subordonnées circonstancielles, l'une de cause (indicatif), l'autre de temps exprimant la postériorité (subjonctif).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez la subordonnée circonstancielle de chaque phrase, donnez sa conjonction et dites si elle exprime le temps ou la cause : a) Lorsque le rideau se leva, la salle se tut. b) Nous resterons à l'intérieur puisqu'il neige. c) Le chien aboie chaque fois que le facteur passe. d) Comme il avait oublié son maillot, Yanis n'a pas pu nager. e) Restez assis jusqu'à ce que le bus soit arrêté. f) Le concert est reporté parce que la chanteuse est malade.",
              hint: "Cherchez le mot qui introduit la subordonnée, puis posez la question « quand ? » ou « pourquoi ? ». Pour « comme », essayez de le remplacer par « parce que ».",
              solution: [
                "a) « Lorsque le rideau se leva » : conjonction « lorsque », temps (simultanéité).",
                "b) « puisqu'il neige » : conjonction « puisque », cause (une cause évidente pour tous).",
                "c) « chaque fois que le facteur passe » : locution « chaque fois que », temps (une action répétée, simultanée).",
                "d) « Comme il avait oublié son maillot » : conjonction « comme », cause, car on peut dire « parce qu'il avait oublié son maillot ».",
                "e) « jusqu'à ce que le bus soit arrêté » : locution « jusqu'à ce que », temps (postériorité, d'où le subjonctif « soit »).",
                "f) « parce que la chanteuse est malade » : locution « parce que », cause.",
              ],
            },
            {
              level: 2,
              statement: "Complétez chaque phrase par une conjonction de temps ou de cause qui convient, en suivant l'indication entre crochets, et conjuguez le verbe entre parenthèses au mode correct : a) [cause évidente] ... vous (être) prêts, nous pouvons commencer. b) [postériorité] Le gardien attendra ... le dernier visiteur (sortir). c) [antériorité, récit au passé simple] ... il (finir) ses devoirs, Malo alluma la console. d) [postériorité] Ne traversez pas ... le feu (passer) au vert. e) [cause contestée] Elle refuse de venir ... elle (avoir) trop de travail, mais personne ne la croit.",
              hint: "Choisissez d'abord la conjonction, puis le mode : avec « avant que » et « jusqu'à ce que », le subjonctif ; avec les conjonctions de cause et « dès que », l'indicatif. Pour c), pensez au passé antérieur.",
              solution: [
                "a) « Puisque vous êtes prêts, nous pouvons commencer. » La cause est connue de tous ; indicatif présent.",
                "b) « Le gardien attendra jusqu'à ce que le dernier visiteur sorte. » La sortie aura lieu après le début de l'attente : subjonctif présent.",
                "c) « Dès qu'il eut fini ses devoirs, Malo alluma la console. » (on accepte aussi « Après qu'il eut fini » ou « Une fois qu'il eut fini »). L'action est achevée juste avant un passé simple : passé antérieur, à l'indicatif.",
                "d) « Ne traversez pas avant que le feu passe au vert » (ou « avant que le feu ne passe »). Subjonctif présent ; le « ne » explétif est facultatif.",
                "e) « Elle refuse de venir sous prétexte qu'elle a trop de travail. » La cause est présentée comme un prétexte ; indicatif présent.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Réécrivez chaque phrase en remplaçant le groupe entre crochets par une subordonnée de même sens, au mode qui convient : a) [À l'arrivée du train], les voyageurs se précipitèrent. b) Le match a été annulé [à cause de la tempête]. c) [Avant le départ de ses cousins], Léna leur offre un dessin. d) [Grâce à votre aide], nous avons fini à temps. 2) Rédigez un court paragraphe de cinq à six phrases qui raconte un retard au collège, avec au moins deux subordonnées de temps et deux subordonnées de cause, construites avec des conjonctions différentes.",
              hint: "Transformez le nom en verbe conjugué (arrivée → arriver, départ → partir) et trouvez-lui un sujet. Vérifiez ensuite le mode : « avant que » demande le subjonctif.",
              solution: [
                "a) « Quand le train arriva, les voyageurs se précipitèrent. » (ou « Lorsque... », « Dès que... ») : indicatif, au passé simple comme la principale.",
                "b) « Le match a été annulé parce qu'il y a eu une tempête. » (ou « parce que la tempête soufflait trop fort ») : indicatif.",
                "c) « Avant que ses cousins partent, Léna leur offre un dessin. » (ou « avant que ses cousins ne partent ») : subjonctif, car le départ n'a pas encore eu lieu.",
                "d) « Comme vous nous avez aidés, nous avons fini à temps. » (ou « Parce que vous nous avez aidés... ») : indicatif. La cause reste la même ; c'est le sens de la phrase (finir à temps) qui montre qu'elle est heureuse, comme le disait « grâce à ».",
                "2) Exemple de paragraphe : « Ce matin, mon réveil n'a pas sonné parce que sa pile était vide. Quand j'ai ouvert les yeux, il était déjà huit heures. Comme je n'avais pas le temps de déjeuner, j'ai pris une pomme. J'ai couru jusqu'à l'arrêt, mais le bus était parti avant que j'arrive. Je suis entré en classe pendant que le professeur faisait l'appel. »",
                "Vérification : temps avec « quand », « avant que » (subjonctif) et « pendant que » ; cause avec « parce que » et « comme ». Toutes les conjonctions sont différentes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Lisez ce récit : « Après qu'il eut déjeuné, Hugo partit pour la gare. Il attendit sur le quai jusqu'à ce que le train arrive. Dès qu'il fut monté, il s'endormit, et il ne se réveilla qu'au moment où le train entra en gare de Lyon. » Remettez les événements dans l'ordre chronologique.",
            items: [
              "Hugo déjeune",
              "Hugo part pour la gare",
              "Hugo attend sur le quai",
              "Le train arrive",
              "Hugo monte dans le train",
              "Hugo s'endort",
              "Hugo se réveille à l'arrivée en gare de Lyon",
            ],
          },
          quiz: [
            { q: "Dans « Nous partirons dès que la pluie cessera », quelle est la fonction de la subordonnée ?", options: ["COD de « partirons »", "Sujet de « partirons »", "Complément circonstanciel de temps", "Complément d'objet indirect de « partirons »"], answer: 2, why: "La subordonnée, introduite par « dès que », situe dans le temps l'action de partir : elle est complément circonstanciel de temps." },
            { q: "Quelle phrase est correcte ?", options: ["Après qu'il est parti, nous avons rangé.", "Après qu'il soit parti, nous avons rangé.", "Après qu'il parte, nous avons rangé."], answer: 0, why: "« Après que » présente une action réelle, déjà accomplie : il est suivi de l'indicatif." },
            { q: "Quelle conjonction présente une cause déjà connue de l'interlocuteur ?", options: ["lorsque", "afin que", "bien que", "puisque"], answer: 3, why: "« Puisque » introduit une cause connue ou évidente : « Puisque vous êtes là, aidez-moi. »" },
            { q: "Dans « Attendez ici jusqu'à ce que je revienne », le verbe « revienne » est...", options: ["à l'indicatif présent", "au subjonctif présent", "au conditionnel présent", "à l'impératif présent"], answer: 1, why: "« Jusqu'à ce que » exprime la postériorité : le retour n'a pas encore eu lieu, d'où le subjonctif." },
            { q: "Quel mot n'est pas une conjonction de subordination ?", options: ["parce que", "comme", "car", "puisque"], answer: 2, why: "« Car » est une conjonction de coordination : il relie deux propositions indépendantes et ne peut pas ouvrir une phrase." },
          ],
          trap: "Mettre le subjonctif après « après que » (« après qu'il soit parti ») par imitation de « avant que », ou confondre « car » (coordination) et « parce que » (subordination) : on peut dire « Parce qu'il pleut, je reste », jamais « Car il pleut, je reste ».",
          method: "Pour trouver le sens d'une subordonnée, remplacez sa conjonction par une conjonction sûre : si « parce que » fonctionne, c'est une cause ; si « au moment où » fonctionne, c'est le temps. Ce test est précieux avec « comme », qui peut exprimer le temps (« Comme il sortait, il tomba ») ou la cause (« Comme il pleuvait, il resta »).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'but-et-consequence',
          title: 'Exprimer le but et la conséquence',
          minutes: 30,
          objectives: [
            "Identifier les subordonnées circonstancielles de but et de conséquence et donner leur fonction.",
            "Distinguer le but (un résultat visé) de la conséquence (un résultat obtenu) grâce au sens et au mode.",
            "Employer une préposition suivie de l'infinitif à la place d'une subordonnée de but quand les deux sujets sont identiques.",
            "Varier les moyens d'exprimer le but et la conséquence dans un écrit.",
          ],
          course: [
            {
              heading: "Le but : un résultat recherché",
              paragraphs: [
                "La subordonnée de but indique l'objectif visé par l'action principale, ce que l'on cherche à obtenir. Elle répond à la question « dans quel but ? » ou « pour quoi faire ? ». Elle est introduite par pour que, afin que, de sorte que, de façon que, de manière que, et, pour un résultat que l'on veut éviter, par de peur que et de crainte que. « Le professeur articule afin que tous les élèves l'entendent. »",
                "Le verbe de la subordonnée de but est toujours au subjonctif. C'est logique : au moment de l'action principale, le but n'est pas encore atteint, il est seulement envisagé. Après « de peur que » et « de crainte que », on ajoute souvent un « ne » explétif, qui n'a pas de sens négatif : « Il a pris un parapluie de peur qu'il ne pleuve. » Cela signifie qu'il craint la pluie, pas qu'il souhaite qu'elle tombe.",
              ],
              box: { label: "Règle", text: "But : pour que, afin que, de sorte que, de façon que, de manière que, de peur que, de crainte que + subjonctif. Le but est un résultat visé, pas encore réalisé." },
            },
            {
              heading: "Le but : infinitif ou subordonnée ?",
              paragraphs: [
                "Quand l'action principale et le but ont le même sujet, on n'emploie pas de subordonnée, mais une préposition suivie d'un infinitif : pour, afin de, de peur de, de crainte de. On dit « Je travaille pour réussir », et non « Je travaille pour que je réussisse ». La subordonnée est réservée au cas où les deux sujets sont différents : « Je travaille pour que mes parents soient fiers de moi. »",
                "Le but peut aussi s'exprimer par un groupe nominal introduit par « pour » ou « en vue de » : « Ils s'entraînent en vue du tournoi. » Ce complément circonstanciel de but ne contient pas de verbe conjugué, mais il répond à la même question : dans quel but ?",
              ],
              box: { label: "Repère", text: "Même sujet : pour, afin de, de peur de + infinitif (« Je me dépêche pour arriver à l'heure »). Sujets différents : pour que, afin que + subjonctif (« Je me dépêche pour que mon ami ne m'attende pas »)." },
            },
            {
              heading: "La conséquence : un résultat obtenu",
              paragraphs: [
                "La subordonnée de conséquence indique le résultat, l'effet produit par l'action principale. Ce résultat est présenté comme réel : il s'est produit, se produit ou se produira. Elle est introduite par si bien que, de sorte que, de façon que, au point que, à tel point que. « Il a neigé toute la nuit, si bien que les routes sont bloquées. »",
                "La conséquence peut aussi dépendre d'un mot d'intensité placé dans la principale : « si » ou « tellement » devant un adjectif ou un adverbe, « tant » ou « tellement » après un verbe, « tel » devant un nom ; la subordonnée commence alors par « que ». « Le film était si drôle que toute la salle riait. » « Il a tant couru qu'il est épuisé. » « Il faisait un tel bruit que personne ne s'entendait. »",
                "Comme le résultat est réel, le verbe de la subordonnée de conséquence est à l'indicatif. La conséquence s'exprime aussi sans subordonnée, par la coordination ou par un adverbe : donc, alors, c'est pourquoi, par conséquent. « Il pleuvait, c'est pourquoi nous sommes restés. » La juxtaposition avec deux-points peut aussi la suggérer : « Il pleuvait : nous sommes restés. »",
              ],
              box: { label: "Règle", text: "Conséquence : si bien que, au point que, à tel point que ; si, tellement, tant, tel... que + indicatif. Sans subordonnée : donc, alors, c'est pourquoi, par conséquent, ou les deux-points." },
            },
            {
              heading: "But ou conséquence ? Le test du sens et du mode",
              paragraphs: [
                "Trois locutions servent aux deux rapports : de sorte que, de façon que et de manière que. C'est alors le mode qui fait la différence. Avec le subjonctif, le résultat est visé : c'est un but. « Il parle fort de sorte que tout le monde l'entende » (il veut être entendu). Avec l'indicatif, le résultat est constaté : c'est une conséquence. « Il parle fort, de sorte que tout le monde l'entend » (et, en effet, on l'entend).",
                "Dans les autres cas, posez-vous une question simple : le résultat est-il voulu par quelqu'un avant l'action (but), ou simplement constaté après (conséquence) ? « Elle a révisé pour avoir une bonne note » : la note est visée. « Elle a révisé, si bien qu'elle a eu une bonne note » : la note est obtenue. Une conséquence n'est d'ailleurs pas toujours voulue : « Il a crié si fort qu'il a réveillé le bébé. »",
              ],
              box: { label: "À retenir", text: "But : résultat visé, subjonctif. Conséquence : résultat réel, indicatif. Avec de sorte que, de façon que, de manière que : subjonctif → but ; indicatif → conséquence." },
            },
          ],
          keyPoints: [
            "But : un résultat visé ; pour que, afin que, de peur que + subjonctif.",
            "Même sujet : pour, afin de, de peur de + infinitif (« Je travaille pour réussir »).",
            "Conséquence : un résultat réel ; si bien que, au point que + indicatif.",
            "Si, tellement, tant, tel... que : une intensité dans la principale entraîne la conséquence.",
            "De sorte que + subjonctif = but ; de sorte que + indicatif = conséquence.",
            "Sans subordonnée : donc, alors, c'est pourquoi, par conséquent expriment la conséquence.",
          ],
          example: {
            statement: "Dites si chaque subordonnée exprime le but ou la conséquence, en justifiant par le sens et par le mode : a) Le maître-nageur siffle afin que les enfants sortent de l'eau. b) La mer était si agitée que la baignade fut interdite. c) Rangez votre chambre de sorte qu'on puisse y entrer. d) Lina a rangé sa chambre, de sorte qu'on peut enfin y entrer.",
            solution: [
              "a) « afin que les enfants sortent de l'eau » : le maître-nageur veut que les enfants sortent ; le résultat est visé. « Sortent » a la même forme à l'indicatif et au subjonctif : remplacez par « faire », on dirait « afin que les enfants fassent », donc c'est un subjonctif. C'est un but.",
              "b) « que la baignade fut interdite » : la subordonnée dépend de « si agitée ». L'interdiction a réellement eu lieu, et le verbe est à l'indicatif (passé simple passif). C'est une conséquence.",
              "c) « de sorte qu'on puisse y entrer » : « puisse » est au subjonctif et le résultat est souhaité, la chambre n'est pas encore rangée. C'est un but.",
              "d) « de sorte qu'on peut enfin y entrer » : « peut » est à l'indicatif et le résultat est constaté, la chambre est rangée. C'est une conséquence.",
              "Réponse : a) et c) expriment le but ; b) et d) expriment la conséquence. Avec « de sorte que », seul le mode permet de trancher.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque subordonnée exprime le but ou la conséquence, et relevez son mot introducteur : a) Je vous prête mon livre pour que vous puissiez réviser. b) Il a tellement mangé qu'il a mal au ventre. c) Nous parlons bas de peur que le bébé ne se réveille. d) La route était glissante, si bien que le car a ralenti. e) Le guide marche lentement afin que le groupe le suive. f) Elle chantait si bien que le public l'applaudit longuement.",
              hint: "Demandez-vous si le résultat est seulement souhaité ou s'il s'est vraiment produit. Repérez aussi les mots d'intensité « si », « tellement », « tant » dans la principale.",
              solution: [
                "a) But : « pour que » ; le verbe « puissiez » est au subjonctif.",
                "b) Conséquence : « tellement... que » ; le mal de ventre est réel (indicatif « a »).",
                "c) But : « de peur que » ; on veut éviter que le bébé se réveille. Le « ne » est explétif, il n'est pas négatif.",
                "d) Conséquence : « si bien que » ; le car a réellement ralenti.",
                "e) But : « afin que » ; le guide veut que le groupe le suive (subjonctif « suive »).",
                "f) Conséquence : « si... que » ; les applaudissements ont vraiment eu lieu (indicatif « applaudit »).",
              ],
            },
            {
              level: 2,
              statement: "1) Remplacez la subordonnée par « pour » ou « afin de » suivi de l'infinitif quand c'est possible ; sinon, expliquez pourquoi : a) Je me lève tôt pour que je sois à l'heure. b) Mes parents économisent afin que nous partions en vacances. c) Elle prend des notes afin qu'elle se souvienne du cours. 2) Reliez les deux phrases par une subordonnée de conséquence avec « si... que », « tant... que » ou « tellement... que » : d) Le livre était passionnant. Je l'ai lu en une nuit. e) Il a beaucoup plu. La rivière a débordé.",
              hint: "Pour la partie 1, comparez le sujet de la principale et celui de la subordonnée. Pour la partie 2, rappelez-vous que « si » se place devant un adjectif, et « tant » ou « tellement » après un verbe.",
              solution: [
                "a) Le sujet est le même (« je ») : « Je me lève tôt pour être à l'heure. »",
                "b) Impossible : les sujets sont différents (« mes parents » et « nous »). La subordonnée est nécessaire : « Mes parents économisent afin que nous partions en vacances. »",
                "c) Le sujet est le même (« elle ») : « Elle prend des notes afin de se souvenir du cours. »",
                "d) « Le livre était si passionnant que je l'ai lu en une nuit. » (« si » devant l'adjectif « passionnant »).",
                "e) « Il a tellement plu que la rivière a débordé. » ou « Il a tant plu que la rivière a débordé. » On ne peut pas dire « si plu » : « si » se place devant un adjectif ou un adverbe, et « tant » ou « tellement » après un verbe.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Complétez avec « de sorte que » et le verbe « pouvoir » au mode qui convient, selon le sens indiqué : a) [but] La mairie va installer des lampadaires ... les piétons ... marcher en sécurité. b) [conséquence] La mairie a installé des lampadaires, ... les piétons ... désormais marcher en sécurité. 2) Dans ce texte écrit pour l'exercice, relevez chaque expression du but ou de la conséquence et donnez sa nature : « Pour protéger les tortues marines, des bénévoles surveillent la plage la nuit. Ils éteignent les lampes afin que les petites tortues trouvent la mer. La lumière les attire tellement qu'elles se dirigent parfois vers la route. Grâce à ces efforts, plus de tortues atteignent l'eau ; c'est pourquoi l'association cherche de nouveaux bénévoles. » 3) Rédigez deux phrases sur un projet de votre classe : l'une exprimant un but, l'autre une conséquence.",
              hint: "Pour la partie 1, le but demande le subjonctif (que je puisse) et la conséquence l'indicatif. Pour la partie 2, attention : une des expressions du texte exprime la cause, et non le but ou la conséquence.",
              solution: [
                "1a) « La mairie va installer des lampadaires de sorte que les piétons puissent marcher en sécurité. » Subjonctif : le résultat est visé.",
                "1b) « La mairie a installé des lampadaires, de sorte que les piétons peuvent désormais marcher en sécurité. » Indicatif : le résultat est constaté.",
                "2) « Pour protéger les tortues marines » : but, préposition « pour » + infinitif (même sujet, les bénévoles).",
                "2) Suite : « afin que les petites tortues trouvent la mer » : subordonnée de but, au subjonctif (on dirait « afin qu'elles fassent »). « qu'elles se dirigent parfois vers la route » : subordonnée de conséquence, liée à l'adverbe d'intensité « tellement » placé dans la principale, à l'indicatif. « c'est pourquoi l'association cherche de nouveaux bénévoles » : conséquence exprimée par une locution adverbiale, sans subordonnée.",
                "2) Piège : « Grâce à ces efforts » n'exprime ni le but ni la conséquence, mais la cause (préposition « grâce à » + nom).",
                "3) Exemple : but : « Nous préparons une exposition pour que nos parents découvrent nos travaux. » Conséquence : « Nous avons tant travaillé que l'exposition est prête une semaine en avance. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase à l'analyse qui lui correspond.",
            pairs: [
              { left: "Je me dépêche pour ne pas rater le bus.", right: "But : préposition + infinitif" },
              { left: "Je me dépêche pour que mon frère ne m'attende pas.", right: "But : subordonnée au subjonctif" },
              { left: "Elle parle bas de peur que le bébé ne se réveille.", right: "But : un résultat que l'on veut éviter" },
              { left: "Il a tant marché qu'il a des ampoules.", right: "Conséquence liée à une intensité" },
              { left: "Il pleut, donc nous restons à la maison.", right: "Conséquence par coordination" },
              { left: "Il a crié, de sorte que tout le monde s'est retourné.", right: "Conséquence : de sorte que + indicatif" },
            ],
          },
          quiz: [
            { q: "À quel mode est le verbe d'une subordonnée de but ?", options: ["Indicatif", "Subjonctif", "Conditionnel", "Impératif"], answer: 1, why: "Le but n'est pas encore atteint, il est seulement visé : le verbe est au subjonctif (pour qu'il puisse, afin qu'il vienne)." },
            { q: "Quelle phrase est correcte ?", options: ["Je révise pour que je réussisse.", "Je révise afin que je réussisse.", "Je révise pour que je réussis.", "Je révise pour réussir."], answer: 3, why: "Quand la principale et le but ont le même sujet, on emploie « pour » + infinitif, et non une subordonnée." },
            { q: "Dans « Il faisait si froid que le lac a gelé », la subordonnée exprime...", options: ["la conséquence", "le but recherché", "la cause du froid", "une opposition"], answer: 0, why: "Le gel du lac est le résultat réel du froid intense (« si... que », indicatif) : c'est une conséquence." },
            { q: "« Il parle fort de sorte que tout le monde l'entende. » Pourquoi est-ce un but ?", options: ["Parce que « de sorte que » exprime toujours le but", "Parce que le verbe principal est au présent", "Parce que le verbe « entende » est au subjonctif", "Parce que la subordonnée est placée après la principale"], answer: 2, why: "Avec « de sorte que », le subjonctif indique un résultat visé (but), l'indicatif un résultat constaté (conséquence)." },
            { q: "Quel mot exprime la conséquence par coordination ?", options: ["afin que", "donc", "car", "pour"], answer: 1, why: "« Donc » introduit une conséquence ; « car » introduit une cause, « afin que » et « pour » un but." },
          ],
          trap: "Employer l'indicatif après « pour que » ou « afin que » (« pour qu'il vient »), ou construire une subordonnée de but qui a le même sujet que la principale (« Je travaille pour que je réussisse ») au lieu de l'infinitif (« Je travaille pour réussir »).",
          method: "Pour distinguer but et conséquence, ajoutez mentalement « et c'est bien ce qui s'est passé » : si cela s'accorde avec la phrase, le résultat est réel, c'est une conséquence ; si le résultat est seulement souhaité, c'est un but. En cas de doute sur le mode, remplacez le verbe par « faire » : « qu'il fasse » révèle le subjonctif, donc le but.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'opposition-concession',
          title: 'Exprimer l\'opposition et la concession',
          minutes: 30,
          objectives: [
            "Distinguer l'opposition (deux faits mis en contraste) et la concession (un fait qui n'a pas la conséquence attendue).",
            "Identifier les subordonnées d'opposition et de concession, leur mot introducteur et le mode de leur verbe.",
            "Orthographier correctement « quoique » et « quoi que ».",
            "Employer les connecteurs d'opposition et de concession pour nuancer une argumentation.",
          ],
          course: [
            {
              heading: "Opposition et concession : deux rapports voisins",
              paragraphs: [
                "L'opposition met en contraste deux faits, sans que l'un empêche l'autre : on les rapproche pour souligner leur différence. « Mon frère adore la mer, alors que je préfère la montagne. » Les deux faits sont vrais en même temps, et chacun pourrait exister sans l'autre.",
                "La concession est plus subtile. On reconnaît un fait qui devrait logiquement entraîner une certaine conséquence, mais cette conséquence ne se produit pas. « Bien qu'il pleuve, le match a lieu. » Normalement, la pluie devrait faire annuler le match ; or le match a lieu malgré tout. La concession exprime donc une cause qui n'a pas produit l'effet attendu.",
                "Un test simple permet de les distinguer : dans une concession, on peut ajouter « quand même » dans la principale (« Bien qu'il pleuve, le match a quand même lieu »). Dans une opposition, cet ajout n'a pas de sens : on compare seulement deux faits.",
              ],
              box: { label: "Définition", text: "Opposition : deux faits indépendants mis en contraste (alors que, tandis que). Concession : un fait qui aurait dû empêcher l'autre ne l'empêche pas (bien que, quoique, même si) ; on peut ajouter « quand même » dans la principale." },
            },
            {
              heading: "Les subordonnées d'opposition",
              paragraphs: [
                "Les subordonnées d'opposition sont introduites surtout par « alors que » et « tandis que ». Leur verbe est à l'indicatif, car les deux faits sont réels : « Léo range sa chambre, tandis que sa sœur regarde la télévision. » La subordonnée est complément circonstanciel d'opposition du verbe de la principale.",
                "Attention : « alors que » et « tandis que » peuvent aussi exprimer le temps, c'est-à-dire la simultanéité. « Tandis que je lisais, le téléphone sonna » : les deux actions se déroulent en même temps, c'est une subordonnée de temps. « Paul est bavard, tandis que son frère est timide » : on compare deux caractères, c'est une opposition. C'est le sens de la phrase qui permet de trancher.",
              ],
              box: { label: "Règle", text: "Opposition : alors que, tandis que + indicatif. Ces conjonctions peuvent aussi exprimer le temps : demandez-vous si la phrase présente deux actions simultanées (temps) ou deux faits contrastés (opposition)." },
            },
            {
              heading: "Les subordonnées de concession",
              paragraphs: [
                "Les subordonnées de concession sont introduites surtout par « bien que » et « quoique », toujours suivis du subjonctif : « Bien qu'elle soit fatiguée, elle termine sa course. » « Quoiqu'il fasse froid, les enfants jouent dehors. »",
                "« Même si », au contraire, est suivi de l'indicatif : « Même s'il pleut, nous irons au marché. » Ne mélangez pas les deux constructions : on écrit « bien qu'il pleuve », mais « même s'il pleut ». Évitez aussi « malgré que », que la langue soignée rejette : dites « bien que », ou employez la préposition « malgré » suivie d'un nom (« malgré la pluie »).",
                "Attention à l'orthographe. « Quoique » en un mot signifie « bien que » : « Quoiqu'il soit tard, je continue. » « Quoi que » en deux mots signifie « quelle que soit la chose que » : « Quoi que vous disiez, je ne changerai pas d'avis. » Pour vérifier, remplacez par « bien que » : si la phrase garde son sens, écrivez « quoique » en un mot.",
              ],
              box: { label: "Règle", text: "Concession : bien que, quoique + subjonctif (bien qu'il soit) ; même si + indicatif (même s'il est). « Quoique » (= bien que) s'écrit en un mot ; « quoi que » (= quelle que soit la chose que) s'écrit en deux mots." },
            },
            {
              heading: "Exprimer l'opposition et la concession autrement",
              paragraphs: [
                "Sans subordonnée, on peut employer une préposition suivie d'un nom ou d'un infinitif : « malgré » et « en dépit de » (« Malgré la pluie, le match a lieu »), « au lieu de » (« Au lieu de réviser, il joue »). La locution « avoir beau » suivie d'un infinitif exprime aussi la concession : « J'ai beau crier, personne ne m'entend. »",
                "On peut enfin relier deux propositions indépendantes par la conjonction de coordination « mais » ou par un adverbe : pourtant, cependant, toutefois, néanmoins pour la concession ; en revanche, au contraire pour l'opposition. « Il a beaucoup révisé ; pourtant, il a raté son contrôle. »",
                "Dans un texte argumentatif, la concession est une stratégie efficace : on reconnaît d'abord qu'un argument adverse a une part de vérité, pour mieux affirmer ensuite son propre avis. On emploie souvent le couple « certes..., mais... » : « Certes, les écrans sont pratiques, mais ils fatiguent les yeux. » Vous montrez ainsi que vous avez pesé les deux points de vue.",
              ],
              box: { label: "À retenir", text: "Malgré, en dépit de + nom ; au lieu de + infinitif ; avoir beau + infinitif. Mais, pourtant, cependant, toutefois, néanmoins (concession) ; en revanche, au contraire (opposition). Pour argumenter : « Certes..., mais... »." },
            },
          ],
          keyPoints: [
            "Opposition : deux faits mis en contraste (alors que, tandis que + indicatif).",
            "Concession : un fait qui n'empêche pas l'autre ; on peut ajouter « quand même » dans la principale.",
            "Bien que, quoique + subjonctif ; même si + indicatif.",
            "« Quoique » (= bien que) en un mot ; « quoi que » (= quelle que soit la chose que) en deux mots.",
            "« Malgré que » est à éviter : employez « bien que » ou « malgré » + nom.",
            "Autres moyens : malgré, avoir beau, mais, pourtant, cependant, toutefois, « certes..., mais... ».",
          ],
          example: {
            statement: "Analysez la subordonnée de chaque phrase et dites si elle exprime l'opposition ou la concession : a) Bien qu'il soit blessé, le joueur termine le match. b) Ma sœur se lève tôt, alors que je fais la grasse matinée. Réécrivez ensuite la phrase a) avec « même si », puis avec « malgré ».",
            solution: [
              "a) « Bien qu'il soit blessé » : subordonnée conjonctive circonstancielle introduite par « bien que », verbe au subjonctif (« soit »).",
              "Sens de a) : une blessure devrait empêcher de jouer, mais le joueur termine le match. Le test fonctionne : « le joueur termine quand même le match ». C'est une concession ; la subordonnée est complément circonstanciel de concession de « termine ».",
              "b) « alors que je fais la grasse matinée » : subordonnée introduite par « alors que », verbe à l'indicatif (« fais »). Les deux habitudes sont mises en contraste, et aucune n'empêche l'autre : c'est une opposition. La subordonnée est complément circonstanciel d'opposition de « se lève ».",
              "Réécriture avec « même si » : « Même s'il est blessé, le joueur termine le match. » Le verbe passe à l'indicatif.",
              "Réécriture avec « malgré » : « Malgré sa blessure, le joueur termine le match. » La préposition est suivie d'un nom, il n'y a plus de subordonnée.",
              "Réponse : a) concession, b) opposition.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Opposition ou concession ? Pour chaque phrase, relevez la subordonnée, son mot introducteur et le mode de son verbe : a) Bien que la route soit longue, les randonneurs gardent le sourire. b) Mon père aime le café, tandis que ma mère ne boit que du thé. c) Même si vous courez, vous raterez le bus. d) Quoiqu'il ait peu d'expérience, Samir a remporté le concours. e) Cette année, l'hiver a été rude, alors que l'hiver dernier avait été très doux. f) Le gâteau a brûlé, bien que nous l'ayons surveillé.",
              hint: "Essayez d'ajouter « quand même » dans la principale : si la phrase garde son sens, c'est une concession. Pour le mode, rappelez-vous que « bien que » et « quoique » demandent le subjonctif.",
              solution: [
                "a) « Bien que la route soit longue » : concession, « bien que », subjonctif (les randonneurs gardent quand même le sourire).",
                "b) « tandis que ma mère ne boit que du thé » : opposition, « tandis que », indicatif. On compare deux goûts.",
                "c) « Même si vous courez » : concession, « même si », indicatif (vous raterez quand même le bus).",
                "d) « Quoiqu'il ait peu d'expérience » : concession, « quoique » (élidé en « quoiqu' »), subjonctif.",
                "e) « alors que l'hiver dernier avait été très doux » : opposition, « alors que », indicatif (plus-que-parfait). On compare deux hivers.",
                "f) « bien que nous l'ayons surveillé » : concession, « bien que », subjonctif passé (auxiliaire « avoir » au subjonctif + participe passé).",
              ],
            },
            {
              level: 2,
              statement: "1) Complétez par « quoique » ou « quoi que » (attention à l'élision devant « il » et « elle ») : a) ... il fasse, il réussit tout. b) ... elle soit timide, elle a pris la parole. c) ... vous pensiez, je reste votre ami. 2) Conjuguez le verbe entre parenthèses au mode qui convient : d) Bien qu'il (avoir) faim, il a attendu le dîner. e) Même si nous (être) en retard, nous entrerons. f) Elle a continué à jouer, alors qu'il (être) l'heure de dormir. g) Quoique ce film (faire) peur, je l'ai adoré.",
              hint: "Pour la partie 1, remplacez par « bien que » : si cela a du sens, écrivez « quoique » en un mot. Pour la partie 2, seuls « bien que » et « quoique » entraînent le subjonctif.",
              solution: [
                "a) « Quoi qu'il fasse, il réussit tout » : on ne peut pas dire « bien qu'il fasse, il réussit tout » ; le sens est « quelle que soit la chose qu'il fait ». En deux mots.",
                "b) « Quoiqu'elle soit timide, elle a pris la parole » : on peut dire « bien qu'elle soit timide ». En un mot.",
                "c) « Quoi que vous pensiez, je reste votre ami » : le sens est « quelle que soit la chose que vous pensez ». En deux mots.",
                "d) « Bien qu'il ait faim » : subjonctif présent.",
                "e) « Même si nous sommes en retard » : indicatif présent.",
                "f) « alors qu'il était l'heure de dormir » : indicatif imparfait ; c'est une opposition.",
                "g) « Quoique ce film fasse peur » : subjonctif présent.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Reliez les deux phrases « Le vent souffle fort. Les marins sortent en mer. » de quatre façons différentes pour exprimer la concession, en utilisant successivement : bien que ; même si ; malgré ; avoir beau. 2) Rédigez un paragraphe argumenté de cinq à sept lignes pour répondre à la question « Faut-il donner des devoirs à faire à la maison ? ». Votre paragraphe doit contenir une concession introduite par « certes..., mais... » et au moins une subordonnée de concession.",
              hint: "Avec « malgré », transformez la première phrase en groupe nominal (le vent fort, la force du vent). Avec « avoir beau », le sujet de « avoir » est celui de la première phrase : « Le vent a beau... ».",
              solution: [
                "1) Bien que : « Bien que le vent souffle fort, les marins sortent en mer. » (subjonctif ; « souffle » a la même forme qu'à l'indicatif, mais avec le verbe « être » on dirait « bien que le vent soit fort »).",
                "1) Même si : « Même si le vent souffle fort, les marins sortent en mer. » (indicatif).",
                "1) Malgré : « Malgré la force du vent, les marins sortent en mer. » (préposition + nom).",
                "1) Avoir beau : « Le vent a beau souffler fort, les marins sortent en mer. » (avoir beau + infinitif).",
                "2) Exemple de paragraphe : « Certes, les devoirs à la maison prennent du temps, et certains élèves n'ont personne pour les aider, mais ils restent utiles. En effet, bien que la leçon ait été comprise en classe, on l'oublie vite si on ne la revoit pas seul. De plus, faire ses devoirs apprend à s'organiser. Il faut donc des devoirs, à condition qu'ils soient courts. »",
                "Vérification : la concession « Certes..., mais... » reconnaît l'argument adverse ; la subordonnée « bien que la leçon ait été comprise en classe » est une concession au subjonctif ; l'avis est clairement affirmé à la fin.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur l'opposition et la concession.",
            statements: [
              { text: "« Bien que » est suivi du subjonctif.", true: true, why: "On écrit « bien qu'il soit », « bien qu'elle ait »." },
              { text: "« Même si » est suivi du subjonctif.", true: false, why: "« Même si » est suivi de l'indicatif : « même s'il pleut »." },
              { text: "« Malgré que » est la forme recommandée dans un écrit soigné.", true: false, why: "La langue soignée l'évite : on emploie « bien que » ou « malgré » suivi d'un nom." },
              { text: "Dans « Tandis que je dormais, l'orage éclata », « tandis que » exprime l'opposition.", true: false, why: "Les deux actions ont lieu en même temps : ici, « tandis que » exprime le temps (simultanéité)." },
              { text: "« Quoique » en un mot peut être remplacé par « bien que ».", true: true, why: "C'est le test d'orthographe : « quoique » signifie « bien que », « quoi que » signifie « quelle que soit la chose que »." },
              { text: "« J'ai beau chercher, je ne trouve pas mes clés » exprime une concession.", true: true, why: "La locution « avoir beau » + infinitif exprime un effort qui ne produit pas le résultat attendu." },
              { text: "Une opposition se reconnaît à ce qu'on peut ajouter « quand même » dans la principale.", true: false, why: "C'est le test de la concession. L'opposition compare seulement deux faits." },
            ],
          },
          quiz: [
            { q: "Quelle conjonction introduit une subordonnée de concession ?", options: ["alors que", "parce que", "bien que", "afin que"], answer: 2, why: "« Bien que » introduit une concession ; « alors que » exprime l'opposition, « parce que » la cause, « afin que » le but." },
            { q: "Quelle phrase est correcte ?", options: ["Même s'il pleut, nous sortirons.", "Même s'il pleuve, nous sortirons.", "Malgré qu'il pleuve, nous sortirons."], answer: 0, why: "« Même si » est suivi de l'indicatif, et « malgré que » est à éviter dans la langue soignée." },
            { q: "Dans « Ma sœur est sportive, alors que je préfère lire », la subordonnée exprime...", options: ["la cause", "la concession", "le temps", "l'opposition"], answer: 3, why: "On compare deux goûts, sans que l'un empêche l'autre : c'est une opposition." },
            { q: "Quelle phrase doit commencer par « Quoi que » en deux mots ?", options: ["... il soit malade, il est venu.", "... vous fassiez, faites-le bien.", "... elle soit fatiguée, elle sourit."], answer: 1, why: "Le sens est « quelle que soit la chose que vous faites » ; dans les deux autres phrases, on peut dire « bien que »." },
            { q: "Dans « Il a beau s'entraîner, il perd toujours », quel rapport est exprimé ?", options: ["La concession", "La conséquence", "Le but", "La cause"], answer: 0, why: "« Avoir beau » + infinitif exprime un fait qui ne produit pas le résultat attendu : c'est une concession." },
          ],
          trap: "Mettre le subjonctif après « même si » (« même s'il pleuve ») ou l'indicatif après « bien que » (« bien qu'il est malade »), et confondre « quoique » (= bien que) avec « quoi que » (= quelle que soit la chose que).",
          method: "Pour reconnaître une concession, ajoutez « quand même » dans la principale : « Bien qu'il soit malade, il vient quand même. » Si l'ajout a du sens, c'est une concession ; sinon, cherchez une simple opposition entre deux faits. Pour l'orthographe, remplacez « quoique » par « bien que » : si cela fonctionne, écrivez-le en un mot.",
        },
      ],
    },
  ],
}
