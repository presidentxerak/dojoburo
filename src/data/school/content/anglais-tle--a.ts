import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-tle',
  chapters: [
    /* ==================================================================== */
    /* LES COMPÉTENCES DU NIVEAU B2                                         */
    /* ==================================================================== */
    {
      id: 'competences-b2',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprendre-l-oral',
          title: 'Comprendre un document audio ou vidéo authentique',
          minutes: 30,
          objectives: [
            "Identifier la nature, la source et la situation d'énonciation d'un document audio ou vidéo authentique.",
            "Repérer les informations essentielles et les détails significatifs d'un discours long en langue standard.",
            "Interpréter le point de vue, le ton et l'implicite d'un locuteur.",
            "Rendre compte d'un document oral de façon organisée et fidèle.",
          ],
          course: [
            {
              heading: "Comprendre l'oral au niveau B2 : ce qui est attendu",
              paragraphs: [
                "Le Cadre européen commun de référence pour les langues (CECRL), publié par le Conseil de l'Europe, décrit six niveaux de compétence, de A1 à C2. Le programme du cycle terminal vise le niveau B2 en fin de terminale pour la langue vivante A (B1 pour la langue vivante B). Au niveau B2, vous êtes un « utilisateur indépendant » : vous comprenez l'essentiel d'un discours long et assez complexe, sur un sujet concret ou abstrait, à condition que la langue soit standard et que le thème vous soit relativement familier.",
                "Comprendre au niveau B2 ne se limite pas à relever des faits. Il s'agit de suivre une argumentation, de distinguer l'information principale des exemples, de repérer les relations logiques (cause, conséquence, opposition) et de percevoir le point de vue et l'attitude des locuteurs. C'est cette capacité d'interprétation qui distingue le niveau B2 du niveau B1, où l'on comprend surtout les points principaux d'un message clair sur un sujet familier.",
                "Un document authentique est conçu pour des anglophones, et non pour des élèves : bulletin d'information (BBC News, NPR), podcast, interview, extrait de débat, discours, bande-annonce, vidéo de vulgarisation. Le débit est naturel, les accents sont variés, il y a des hésitations, des bruits de fond, parfois des locuteurs qui se coupent la parole. Ne pas tout comprendre est normal : votre objectif est de reconstruire le sens à partir de ce que vous repérez.",
              ],
              box: { label: "Repère", text: "Niveaux du CECRL : A1 et A2 (utilisateur élémentaire), B1 et B2 (utilisateur indépendant), C1 et C2 (utilisateur expérimenté). Fin de terminale : B2 visé en LVA, B1 en LVB." },
            },
            {
              heading: "Une méthode en trois temps : anticiper, écouter globalement, affiner",
              paragraphs: [
                "Avant l'écoute, exploitez tout ce qui est donné : le titre, la source (chaîne, radio, journal, date), l'image ou la vignette d'une vidéo. Formulez des hypothèses et mobilisez le lexique attendu. Si le titre est « Should schools ban smartphones? », vous pouvez vous attendre à entendre ban, screen time, distraction, mental health, cyberbullying, teachers, parents, et à une opposition entre arguments pour et contre.",
                "La première écoute sert à la compréhension globale : nature du document (interview, reportage, débat), nombre de locuteurs et leur rôle (journaliste, expert, témoin), thème, lieu, moment et but. Pensez aux « 5 W » : Who? What? Where? When? Why? Les écoutes suivantes servent à affiner : arguments, exemples, chiffres, dates, noms propres, et surtout les connecteurs (but, however, so, because, on the other hand) qui révèlent la structure du propos.",
                "Prenez des notes en anglais, sans chercher à écrire des phrases : mots-clés, abréviations et symboles (↑ pour une hausse, ↓ pour une baisse, → pour une conséquence, ≠ pour une opposition, = pour une équivalence). Laissez de l'espace entre vos notes pour les compléter à l'écoute suivante. Après la dernière écoute, relisez vos notes et reliez-les : c'est à ce moment que le sens global se construit.",
              ],
              box: { label: "Méthode", text: "1. Anticiper (titre, source, image, lexique). 2. Première écoute : qui parle, de quoi, à qui, dans quel but ? 3. Écoutes suivantes : arguments, exemples, chiffres, connecteurs, ton. 4. Relier ses notes et reconstruire le sens." },
            },
            {
              heading: "Les difficultés de l'anglais oral : accent tonique, formes faibles, enchaînements",
              paragraphs: [
                "L'anglais est une langue accentuelle : dans une phrase, les mots porteurs de sens (noms, verbes lexicaux, adjectifs, adverbes, négations) sont accentués, alors que les mots grammaticaux (articles, prépositions, auxiliaires, pronoms) sont réduits. Dans « I WANT to SEE the NEW FILM », seuls les mots en majuscules sont nettement audibles. Bonne nouvelle : suivre les syllabes accentuées suffit souvent pour reconstruire l'essentiel du message.",
                "Les mots grammaticaux ont des formes faibles, prononcées avec la voyelle réduite /ə/ (le schwa, voyelle la plus fréquente de l'anglais) : can se prononce /kən/, to /tə/, of /əv/, and /ən/, for /fə/. Les mots s'enchaînent : « turn it off » s'entend comme un seul mot. À l'oral familier, on entend gonna (going to), wanna (want to), gotta (got to), kinda (kind of), et des contractions comme I'd, she'll ou wouldn't have, prononcé « wouldn't've ».",
                "Les accents varient : anglais britannique standard (souvent appelé Received Pronunciation), anglais américain (General American), mais aussi accents écossais, irlandais, australien, indien ou nigérian. Deux repères utiles : en américain, le r après une voyelle se prononce (car, party), alors qu'il est muet en anglais britannique standard ; et le t entre deux voyelles ressemble souvent à un d rapide (water, better, city).",
              ],
              box: { label: "À retenir", text: "Les mots grammaticaux (a, the, of, to, can, and) sont réduits et peu audibles ; les mots de sens sont accentués. Concentrez-vous sur les syllabes accentuées : elles portent le message." },
            },
            {
              heading: "Interpréter le ton et rendre compte",
              paragraphs: [
                "Le niveau B2 suppose d'aller au-delà des faits : quelle est l'attitude du locuteur ? Est-il enthousiaste, inquiet, critique, ironique, neutre ? Les indices sont l'intonation, le volume et le débit, les adjectifs évaluatifs (alarming, outstanding, ridiculous), les modaux (it might work, it must stop), les silences, les rires, la musique d'accompagnement dans un reportage. L'implicite se déduit aussi du contraste entre ce qui est dit et la manière de le dire.",
                "Un compte rendu n'est pas une liste de mots entendus. Présentez d'abord le document (nature, source, thème), puis les idées principales dans un ordre logique, illustrées par quelques détails précis (un exemple, un chiffre), et enfin le point de vue des locuteurs. Selon la consigne, il est rédigé en français ou en anglais. Utilisez des verbes de compte rendu variés : the journalist explains, the expert claims, she points out, he warns, they admit.",
              ],
              box: { label: "Vocabulaire", text: "To claim (affirmer), to argue (soutenir), to point out (faire remarquer), to warn (mettre en garde), to admit (reconnaître), to deny (nier), to question (remettre en question), to stress (souligner)." },
            },
          ],
          keyPoints: [
            "B2 en fin de terminale (LVA) : comprendre l'essentiel d'un discours long et complexe en langue standard, suivre une argumentation, percevoir le point de vue.",
            "Anticiper avant d'écouter : titre, source, date, image, lexique attendu, hypothèses.",
            "Première écoute globale (5 W), écoutes suivantes pour les détails, les connecteurs et le ton.",
            "Les mots de sens sont accentués, les mots grammaticaux réduits au schwa /ə/ : suivez les syllabes accentuées.",
            "Oral familier : gonna (going to), wanna (want to), gotta (got to), kinda (kind of).",
            "Un compte rendu est organisé : présentation du document, idées principales, détails, point de vue.",
          ],
          example: {
            statement: "Voici la transcription d'un court extrait radiophonique (document inventé pour l'entraînement) : « Good morning, this is Morning Brief. More and more British teenagers say they get their news from podcasts rather than from television. But not everyone thinks this is good news. Dr Ellen Price, a media researcher, warns that many popular shows are never fact-checked. On the other hand, podcast host Sam Okafor argues that young listeners are smarter than we think: they compare sources. » Identifiez la nature du document, le thème et les points de vue, puis rédigez un compte rendu de trois phrases en anglais.",
            solution: [
              "Nature et source : un extrait d'émission d'information radiophonique, « Morning Brief », avec un présentateur qui rapporte les propos de deux personnes.",
              "Thème : les adolescents britanniques s'informent de plus en plus par les podcasts plutôt que par la télévision.",
              "Premier point de vue : Dr Ellen Price, chercheuse spécialiste des médias, est critique et inquiète (« warns ») : beaucoup de podcasts ne vérifient pas les faits.",
              "Second point de vue : Sam Okafor, animateur de podcast, est optimiste (« argues ») : les jeunes auditeurs comparent les sources. Le connecteur « On the other hand » signale l'opposition.",
              "Réponse : « This extract from a radio news programme deals with British teenagers who increasingly get their news from podcasts instead of television. A media researcher, Dr Ellen Price, warns that many podcasts are not fact-checked. However, podcast host Sam Okafor argues that young people are able to compare sources. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ces phrases transcrivent de l'anglais oral familier. Réécrivez-les en anglais standard : a) I'm gonna call her tonight. b) We gotta leave now. c) D'you wanna come with us? d) I shoulda told you. e) Lemme see. f) He's kinda tired.",
              hint: "Prononcez chaque phrase à voix haute lentement : les formes réduites correspondent à deux mots enchaînés.",
              solution: [
                "a) gonna = going to : « I'm going to call her tonight. »",
                "b) gotta = (have) got to : « We've got to leave now. » (ou « We have to leave now. »)",
                "c) D'you wanna = Do you want to : « Do you want to come with us? »",
                "d) shoulda = should have : « I should have told you. » (reproche ou regret sur le passé)",
                "e) Lemme = Let me : « Let me see. »",
                "f) kinda = kind of : « He's kind of tired. » (= un peu, plutôt fatigué)",
              ],
            },
            {
              level: 2,
              statement: "Transcription d'un extrait de podcast (document inventé pour l'entraînement) : « Host: So, Maya, you stopped using social media for a whole year. Why? Maya: Honestly, I was exhausted. I'd spend hours scrolling and feel worse afterwards. Host: And did you miss it? Maya: At first, yes, terribly. But after a month or so, I started reading again, sleeping better. I'm not saying everyone should quit, though. Host: Really? Maya: No. It's more about using it, rather than letting it use you. » 1) Identifiez la nature du document et les locuteurs. 2) Pourquoi Maya a-t-elle arrêté les réseaux sociaux ? 3) Quels effets a-t-elle constatés ? 4) Quelle nuance apporte-t-elle à la fin et quel mot l'annonce ? 5) Quel est son ton général ?",
              hint: "Repérez les connecteurs (but, though, rather than) : ils signalent les changements de direction dans le propos.",
              solution: [
                "1) C'est une interview dans un podcast : un animateur (host) interroge Maya, qui raconte une expérience personnelle.",
                "2) Elle était épuisée (« exhausted ») : elle passait des heures à faire défiler des contenus et se sentait plus mal ensuite.",
                "3) Au début, le manque était fort (« terribly ») ; puis, au bout d'un mois environ, elle s'est remise à lire et dort mieux.",
                "4) Elle ne prétend pas que tout le monde doive arrêter : il faut utiliser les réseaux sociaux sans se laisser utiliser par eux. La nuance est annoncée par « though » en fin de phrase, puis développée avec « rather than ».",
                "5) Son ton est sincère (« Honestly ») et mesuré : elle témoigne sans faire la leçon.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle. Transcription d'un reportage (document inventé pour l'entraînement) : « In the small town of Hebden Bridge, in West Yorkshire, residents have decided to fight back against empty high streets. Over the past two years, a group of volunteers has turned three abandoned shops into a repair café, a book exchange and a co-working space. Local councillor Anna Byrne is delighted: the project has brought people back into the town centre. Yet some shopkeepers are less enthusiastic. They point out that volunteer-run spaces do not pay the same rent or taxes as ordinary businesses, which they see as unfair competition. » Rendez compte de ce document en français, en 70 à 90 mots.",
              hint: "Suivez l'ordre : présentation du document, situation de départ, initiative, réaction positive, critique annoncée par « Yet ».",
              solution: [
                "Repérer la structure : situation (des centres-villes désertés), action (trois boutiques transformées), réaction positive (la conseillère municipale), objection introduite par « Yet » (les commerçants).",
                "Relever les détails utiles : Hebden Bridge, dans le West Yorkshire ; un café de réparation, une bourse aux livres, un espace de travail partagé ; l'argument de la concurrence déloyale.",
                "Proposition : « Ce reportage présente une initiative menée à Hebden Bridge, petite ville du West Yorkshire, pour lutter contre la désertification des rues commerçantes. En deux ans, des bénévoles ont transformé trois boutiques abandonnées en café de réparation, en bourse aux livres et en espace de travail partagé. Une élue locale, Anna Byrne, s'en réjouit, car le projet ramène des habitants dans le centre. Certains commerçants sont pourtant réservés : ces lieux ne paient ni le même loyer ni les mêmes impôts, ce qu'ils jugent déloyal. »",
                "Vérifier : environ 85 mots, aucune information inventée, les deux points de vue sont présents et reliés par un connecteur d'opposition (« pourtant »).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une compréhension de l'oral réussie.",
            items: [
              "Lire le titre, la source et observer l'image",
              "Formuler des hypothèses et mobiliser le lexique attendu",
              "Première écoute : identifier la nature du document, les locuteurs et le thème",
              "Deuxième écoute : relever arguments, exemples et chiffres",
              "Dernière écoute : vérifier les détails et repérer le ton",
              "Relier ses notes et rédiger le compte rendu",
            ],
          },
          quiz: [
            { q: "In the CEFR, level B2 describes...", options: ["a basic user", "an independent user", "a highly proficient user"], answer: 1, why: "B1 et B2 correspondent à l'utilisateur indépendant ; C1 et C2 à l'utilisateur expérimenté." },
            { q: "In informal speech, « gonna » stands for...", options: ["going to", "got used to", "want to", "go on to"], answer: 0, why: "Gonna est la forme réduite de going to : « I'm gonna try » = « I'm going to try »." },
            { q: "Which of these words is usually pronounced with a weak form in a sentence?", options: ["concert", "believe", "of", "cancelled"], answer: 2, why: "Of est un mot grammatical, réduit à /əv/ ; les mots de sens restent accentués." },
            { q: "A speaker who « points out » a problem...", options: ["denies it", "apologises for it", "refuses to talk about it", "draws attention to it"], answer: 3, why: "To point out signifie faire remarquer, attirer l'attention sur quelque chose." },
            { q: "During the first listening, you should mainly...", options: ["note every single word", "find who speaks and about what", "translate each sentence into French"], answer: 1, why: "La première écoute est globale : nature du document, locuteurs, thème ; les détails viennent ensuite." },
          ],
          trap: "Vouloir tout comprendre mot à mot et se bloquer sur un passage inconnu, au lieu de s'appuyer sur les mots accentués, les connecteurs et le contexte pour reconstruire le sens global.",
          method: "Entraînez-vous chaque semaine avec un document court (2 à 3 minutes) d'une radio anglophone : écoutez-le une fois sans rien noter, une fois en prenant des notes, puis résumez-le à voix haute en trois phrases avant de vérifier avec la transcription.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lire-un-texte-long',
          title: 'Lire et analyser un texte long',
          minutes: 30,
          objectives: [
            "Identifier la nature, la source et la structure d'un texte long (article de presse, extrait de roman, essai).",
            "Inférer le sens d'un mot inconnu à partir du contexte et de sa formation.",
            "Analyser le point de vue, le ton et les procédés d'un texte en s'appuyant sur des citations précises.",
            "Rendre compte d'un texte de façon synthétique et reformulée.",
          ],
          course: [
            {
              heading: "Aborder un texte long : le paratexte et la lecture globale",
              paragraphs: [
                "Avant de lire le texte lui-même, observez le paratexte : titre, sous-titre, chapeau (en anglais, the standfirst ou the lead), nom de l'auteur, source, date, illustration. Ces éléments vous indiquent le type de texte : article d'information (news article), éditorial ou tribune (editorial, op-ed), reportage (feature), extrait de roman (novel extract), nouvelle (short story), discours (speech) ou essai (essay). Le type de texte oriente la lecture : on ne lit pas un éditorial comme un roman.",
                "Deux techniques de lecture se complètent. Le skimming consiste à parcourir rapidement le texte pour en saisir l'idée générale : on lit le premier et le dernier paragraphe, puis la première phrase de chaque paragraphe (la topic sentence, qui annonce souvent l'idée du paragraphe). Le scanning consiste à chercher une information précise (un nom, une date, un chiffre) en balayant le texte du regard.",
                "Au niveau B2, vous devez pouvoir lire des articles et des textes longs sur des questions contemporaines dans lesquels l'auteur adopte un point de vue particulier, et comprendre un texte littéraire contemporain en prose. Le but n'est pas de traduire, mais de comprendre qui parle, de quoi, comment et dans quelle intention.",
              ],
              box: { label: "Définition", text: "Skimming : lecture rapide pour saisir l'idée générale (titre, premier et dernier paragraphes, topic sentences). Scanning : recherche ciblée d'une information précise (nom, date, chiffre)." },
            },
            {
              heading: "Comprendre sans tout comprendre : inférer le sens des mots",
              paragraphs: [
                "Face à un mot inconnu, ne vous arrêtez pas. Demandez-vous d'abord s'il est indispensable. Si oui, utilisez le contexte : la phrase dit-elle quelque chose de positif ou de négatif ? Un synonyme ou une explication apparaît-il plus loin ? Beaucoup de mots sont transparents (government, environment, society), mais méfiez-vous des faux amis : actually (en fait), eventually (finalement), sensible (raisonnable), to pretend (faire semblant), library (bibliothèque), currently (actuellement).",
                "La formation des mots est une aide précieuse. Les préfixes un-, in-, im-, dis- et non- expriment le contraire (unfair, impossible, dishonest), mis- l'erreur (to misunderstand), over- l'excès (overcrowded), under- l'insuffisance (underpaid), re- la répétition (to rebuild). Les suffixes -ness, -ment, -ship et -hood forment des noms (happiness, unemployment, friendship, childhood), -ful et -less des adjectifs (hopeful, homeless), -able la possibilité (affordable).",
                "En combinant ces éléments, on devine des mots longs : unaffordable = un + afford (avoir les moyens) + able, donc « inabordable, trop cher » ; homelessness = home + less + ness, donc « le sans-abrisme » ; untrustworthy = un + trust + worthy, donc « indigne de confiance ».",
              ],
              box: { label: "Règle", text: "Préfixes : un-, in-, dis- (contraire), mis- (erreur), over- (excès), under- (manque), re- (répétition). Suffixes : -ness, -ment, -ship, -hood (noms) ; -ful (avec), -less (sans), -able (possible)." },
            },
            {
              heading: "Analyser : narrateur, point de vue, ton et procédés",
              paragraphs: [
                "Dans un texte de fiction, identifiez le narrateur : récit à la première personne (first-person narrator, souvent un personnage) ou à la troisième personne (third-person narrator), omniscient (il sait tout, y compris les pensées de chacun) ou limité au regard d'un personnage. Repérez le cadre (setting), les personnages (characters), l'intrigue (plot) et les éventuels retours en arrière (flashbacks). Le discours indirect libre (free indirect speech) mêle la voix du narrateur et les pensées du personnage.",
                "Dans un texte de presse, distinguez les faits (vérifiables) des opinions. Les opinions se repèrent aux adjectifs évaluatifs (shocking, remarkable), aux modaux (should, must), aux questions rhétoriques, à l'ironie, aux formules qui nuancent (it seems, arguably, to some extent). Le ton (tone) se qualifie avec un adjectif précis : humorous, ironic, bitter, nostalgic, critical, objective, alarmist, enthusiastic.",
                "Toute analyse s'appuie sur des preuves : citez quelques mots du texte entre guillemets, avec la ligne (« as shown in line 12 »). Une citation courte et bien choisie vaut mieux qu'un long passage recopié. Expliquez ensuite ce qu'elle montre : la citation ne parle pas d'elle-même.",
              ],
              box: { label: "À retenir", text: "Fiction : narrateur, point de vue, cadre, personnages, intrigue. Presse : faits ou opinions, arguments, ton. Toujours : une idée, une citation courte avec la ligne, une explication." },
            },
            {
              heading: "Suivre la structure et rendre compte",
              paragraphs: [
                "Les connecteurs révèlent la logique du texte. Addition : moreover, furthermore, besides. Opposition et concession : however, yet, whereas, although, even though, nevertheless. Cause : because, since, as, due to. Conséquence : therefore, thus, as a result, consequently. Illustration : for instance, such as. Conclusion : all in all, to sum up. Surligner les connecteurs lors d'une deuxième lecture permet de dessiner le plan du texte.",
                "Rendre compte d'un texte, c'est en restituer l'essentiel avec vos propres mots : présentez le document (nature, auteur, source, date, thème), puis les idées principales dans un ordre logique, et enfin le point de vue de l'auteur. Ne recopiez pas de phrases entières, hiérarchisez les informations et restez fidèle au texte : n'ajoutez ni information ni opinion personnelle si la consigne ne le demande pas.",
              ],
              box: { label: "Vocabulaire", text: "The text is an extract from... ; it was published in... ; the author deals with... ; the main idea is that... ; he argues that... ; she concludes that... ; the tone is..." },
            },
          ],
          keyPoints: [
            "Paratexte d'abord : titre, chapeau, auteur, source, date, type de texte.",
            "Skimming pour l'idée générale, scanning pour une information précise.",
            "Inférer : contexte, mots transparents, préfixes et suffixes ; se méfier des faux amis (actually, eventually, sensible).",
            "Fiction : narrateur, point de vue, cadre, personnages ; presse : faits et opinions, ton.",
            "Une idée, une citation courte avec la ligne, une explication.",
            "Les connecteurs dessinent le plan ; le compte rendu reformule sans recopier.",
          ],
          example: {
            statement: "Texte d'entraînement inventé : « When Grandma sold the farm, nobody cried, at least not in front of her. We loaded the last boxes into Dad's van in silence. I kept looking at the old barn, which had always seemed enormous to me, and which now looked small, almost embarrassed, as if it knew. Grandma did not look back once. “Places don't remember you,” she said in the car. I wasn't sure she believed it. » Identifiez le narrateur, le thème et le ton, et justifiez par des citations.",
            solution: [
              "Narrateur : un récit à la première personne (« I kept looking », « We loaded »). Le narrateur est un petit-enfant, personnage de l'histoire, qui raconte un souvenir au passé.",
              "Thème : le départ d'une ferme familiale vendue par la grand-mère, et l'attachement à un lieu.",
              "Procédé : la grange est personnifiée (« almost embarrassed, as if it knew ») : le narrateur projette sa propre tristesse sur le lieu, qui paraît rapetissé.",
              "Implicite : l'émotion est retenue (« nobody cried, at least not in front of her ») ; la grand-mère affirme que les lieux ne se souviennent pas de nous, mais le narrateur en doute (« I wasn't sure she believed it ») : elle cache probablement sa peine.",
              "Réponse : un narrateur interne, un thème de la perte et de la mémoire des lieux, un ton nostalgique et pudique, marqué par la retenue des émotions.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez chaque mot (préfixe, base, suffixe) et proposez une traduction : a) unreliable ; b) homelessness ; c) overcrowded ; d) misleading ; e) powerless ; f) to rethink.",
              hint: "Repérez d'abord la base que vous connaissez (rely, home, crowd, lead, power, think), puis le sens de chaque préfixe et suffixe.",
              solution: [
                "a) un + rely (compter sur) + able : unreliable = peu fiable.",
                "b) home + less + ness : homelessness = le sans-abrisme, le fait d'être sans domicile.",
                "c) over + crowd (foule) + ed : overcrowded = surpeuplé, bondé.",
                "d) mis + lead (mener) + ing : misleading = trompeur.",
                "e) power + less : powerless = impuissant.",
                "f) re + think : to rethink = repenser, reconsidérer.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque phrase, dites s'il s'agit d'un fait ou d'une opinion, et relevez le ou les mots qui le montrent : a) The new library opened in March 2024. b) This shocking decision should be reversed immediately. c) Arguably, the city has never been so divided. d) The council voted to close two youth centres. e) Surely nobody believes this plan will work? (phrases inventées pour l'entraînement)",
              hint: "Un fait est vérifiable ; une opinion contient un jugement, un modal, une nuance ou une question rhétorique.",
              solution: [
                "a) Fait : une date et un événement vérifiables, sans jugement.",
                "b) Opinion : l'adjectif évaluatif « shocking » et le modal « should » expriment un jugement et une recommandation.",
                "c) Opinion nuancée : « Arguably » (on peut soutenir que) signale un avis présenté avec prudence.",
                "d) Fait : un vote est un événement vérifiable.",
                "e) Opinion : c'est une question rhétorique ; « Surely » montre que l'auteur attend un accord et juge le plan voué à l'échec.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle. Extrait d'une tribune (texte d'entraînement inventé) : « Every summer, the same headlines return: tourists are ruining our cities. In Venice, Barcelona or Edinburgh, residents complain about noise, rising rents and streets turned into theme parks. Yet blaming visitors is too easy. Tourists do not set housing policies; local governments do. If short-term rentals are pushing families out, it is because they have been allowed to multiply. Mass tourism is not a natural disaster. It is a political choice, and it can be reversed. » 1) Présentez le document. 2) Quelle est la thèse de l'auteur ? 3) Relevez deux procédés argumentatifs. 4) Rendez compte du texte en anglais en 50 à 60 mots.",
              hint: "Repérez le connecteur qui fait basculer le texte (Yet) : ce qui précède est l'opinion courante, ce qui suit est la thèse de l'auteur.",
              solution: [
                "1) Il s'agit d'une tribune (op-ed) qui traite du surtourisme dans des villes européennes comme Venise, Barcelone ou Édimbourg.",
                "2) Thèse : il ne faut pas accuser les touristes ; le surtourisme résulte de choix politiques (logement, locations de courte durée) et peut donc être corrigé.",
                "3) Procédés : la concession puis le renversement (« Yet blaming visitors is too easy ») ; l'opposition « Tourists do not set housing policies; local governments do » ; la métaphore niée (« not a natural disaster ») qui insiste sur la responsabilité humaine.",
                "4) Proposition : « This op-ed deals with mass tourism in European cities such as Venice and Edinburgh. While residents complain about noise and rising rents, the author argues that tourists should not be blamed. According to him, the real cause lies in political decisions, such as allowing short-term rentals to multiply. Therefore, the situation can be changed. » (environ 55 mots)",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque faux ami anglais à sa vraie traduction.",
            pairs: [
              { left: "actually", right: "en fait" },
              { left: "eventually", right: "finalement" },
              { left: "sensible", right: "raisonnable" },
              { left: "to pretend", right: "faire semblant" },
              { left: "library", right: "bibliothèque" },
              { left: "currently", right: "actuellement" },
            ],
          },
          quiz: [
            { q: "Reading quickly to get the general idea of a text is called...", options: ["scanning", "skimming", "spelling", "summing"], answer: 1, why: "Le skimming donne l'idée générale ; le scanning cherche une information précise." },
            { q: "What does « eventually » mean?", options: ["finalement", "éventuellement", "évidemment", "exactement"], answer: 0, why: "Eventually est un faux ami : il signifie finalement, à la fin ; éventuellement se dit possibly." },
            { q: "« Unaffordable » means...", options: ["very cheap", "free of charge", "not sold anymore", "too expensive"], answer: 3, why: "Un (contraire) + afford (avoir les moyens) + able (possible) : que l'on n'a pas les moyens de s'offrir." },
            { q: "Which connector introduces a consequence?", options: ["whereas", "therefore", "although", "nevertheless"], answer: 1, why: "Therefore exprime la conséquence ; whereas, although et nevertheless l'opposition ou la concession." },
            { q: "A narrator who knows the thoughts of every character is...", options: ["omniscient", "first-person", "unreliable", "absent"], answer: 0, why: "Le narrateur omniscient sait tout, y compris les pensées de tous les personnages." },
          ],
          trap: "Traduire le texte ligne à ligne et s'arrêter à chaque mot inconnu, ou confondre résumé et paraphrase en recopiant des phrases entières du texte au lieu de reformuler.",
          method: "Lisez toujours un texte trois fois : une lecture rapide pour l'idée générale, une lecture crayon en main pour surligner les connecteurs et les mots évaluatifs, une dernière pour vérifier vos réponses ligne par ligne.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'prendre-la-parole',
          title: 'Prendre la parole en continu et en interaction',
          minutes: 30,
          objectives: [
            "Prendre la parole en continu de façon structurée et nuancée sur un sujet du programme.",
            "Interagir : réagir, relancer, reformuler, exprimer son accord ou son désaccord.",
            "Assurer une médiation : transmettre à un interlocuteur l'essentiel d'un document.",
            "Respecter l'accentuation et l'intonation pour être compris.",
          ],
          course: [
            {
              heading: "Ce que l'on attend au niveau B2 à l'oral",
              paragraphs: [
                "Le CECRL distingue la production orale en continu (parler seul, par exemple pour présenter un document ou défendre une position) et l'interaction orale (échanger avec un ou plusieurs interlocuteurs). Au niveau B2, vous devez vous exprimer de façon claire et détaillée sur une gamme étendue de sujets, développer un point de vue en exposant les avantages et les inconvénients de différentes options, et interagir avec assez d'aisance et de spontanéité pour qu'un échange avec un locuteur natif se déroule sans effort excessif de part et d'autre.",
                "L'aisance (fluency) compte autant que la correction (accuracy). Une erreur qui ne gêne pas la compréhension est tolérée, surtout si vous vous corrigez. Ce qui pénalise davantage, ce sont les longs silences, les phrases lues mot à mot et les « euh » à la française. Les mots de remplissage anglais (well, actually, I mean, you know, let me think) vous donnent le temps de réfléchir tout en restant dans la langue.",
                "Soignez la prononciation : l'accent de mot (PHOtograph, phoTOgraphy, photoGRAPHic), l'accent de phrase sur les mots porteurs de sens, et l'intonation. L'intonation descend en fin d'affirmation et de question ouverte (What do you think?), elle monte en fin de question fermée (Do you agree?). Une mauvaise place de l'accent peut rendre un mot incompréhensible, même s'il est correct à l'écrit.",
              ],
              box: { label: "À retenir", text: "B2 à l'oral : un discours clair, détaillé et argumenté, une interaction spontanée. L'aisance compte autant que la correction : mieux vaut se reprendre que se taire." },
            },
            {
              heading: "Prendre la parole en continu : structurer sa présentation",
              paragraphs: [
                "Une présentation se construit comme un texte argumenté. L'introduction capte l'attention par une accroche (hook : une question, un fait, une anecdote), présente le sujet ou le document, pose une problématique (To what extent...? How far...? Why...?) et annonce le plan. Le développement comporte deux ou trois parties, chacune avec une idée principale et un exemple précis. La conclusion résume la réponse à la problématique et propose une ouverture.",
                "Les expressions de balisage (signposting) guident l'auditeur : To begin with... ; First of all... ; Let's now turn to... ; Moving on to my second point... ; Another aspect is... ; To sum up... ; All in all... Pour nuancer : It seems to me that... ; I tend to think that... ; To some extent... ; Admittedly, ... but... Pour illustrer : For instance... ; A case in point is...",
                "Préparez des notes sous forme de mots-clés et non de phrases rédigées : vous parlerez plus naturellement et regarderez votre auditoire. Répétez à voix haute en vous chronométrant : à un débit naturel, on prononce en général de 120 à 150 mots par minute : une présentation de cinq minutes représente donc de l'ordre de 600 à 750 mots.",
              ],
              box: { label: "Expressions", text: "Today I'd like to talk about... ; The question is whether... ; First of all... ; Let's now turn to... ; A case in point is... ; To sum up... ; To conclude, I'd say that..." },
            },
            {
              heading: "Interagir : réagir, relancer, nuancer",
              paragraphs: [
                "Interagir, c'est écouter autant que parler. Pour exprimer l'accord : I totally agree ; That's a fair point ; You're absolutely right. Pour exprimer un désaccord poli, très important en anglais : I see what you mean, but... ; I'm not sure I agree ; I see things a bit differently. Pour demander une précision : What do you mean by...? ; Could you give an example? ; Could you say that again, please?",
                "Pour gagner du temps sans se taire : Well, that's an interesting question ; Let me think about that for a second. Pour reformuler et vérifier la compréhension : So, if I understand correctly, you mean that... ; In other words... Pour relancer : What about...? ; Don't you think that...? Pour reprendre la parole : Can I just add something? ; Going back to what you said...",
                "En anglais, le désaccord direct (« You're wrong ») est perçu comme agressif. On l'adoucit en reconnaissant d'abord la valeur de l'argument de l'autre, puis en introduisant le sien : « That's true to some extent, but don't you think that...? ». Cette stratégie de concession montre aussi votre capacité à nuancer, attendue au niveau B2.",
              ],
              box: { label: "Expressions", text: "Accord : That's a fair point. Désaccord poli : I see what you mean, but... Précision : What do you mean by...? Temps : Let me think. Reformulation : In other words..." },
            },
            {
              heading: "La médiation : transmettre et reformuler",
              paragraphs: [
                "La médiation est la quatrième activité langagière décrite par le CECRL (développée dans son volume complémentaire de 2018). Elle consiste à rendre un contenu accessible à quelqu'un qui ne peut pas y accéder directement : résumer un article pour un camarade, expliquer en anglais un document français à un correspondant, reformuler une consigne, faciliter un échange entre deux personnes qui ne se comprennent pas.",
                "Une bonne médiation sélectionne l'information utile pour le destinataire, simplifie sans déformer, adapte le registre (familier pour un ami, soutenu pour un responsable) et explique les références culturelles inconnues. Expliquer à un Britannique ce qu'est le « bac » demande par exemple de préciser : « the exam French students take at the end of secondary school, a bit like A levels ».",
              ],
              box: { label: "Définition", text: "Médiation : rendre un contenu compréhensible pour un tiers en le résumant, en l'expliquant ou en le reformulant dans l'autre langue, selon ses besoins et sa culture." },
            },
          ],
          keyPoints: [
            "Production en continu : accroche, problématique, plan annoncé, deux ou trois parties illustrées, conclusion avec ouverture.",
            "Signposting : First of all, Let's now turn to, To sum up ; nuance : It seems to me, To some extent.",
            "Désaccord poli : I see what you mean, but... ; jamais un « You're wrong » brutal.",
            "Mots de remplissage anglais (well, actually, let me think) plutôt que des silences ou des « euh ».",
            "Accent de mot et intonation : PHOtograph, phoTOgraphy ; intonation descendante pour les questions ouvertes.",
            "Médiation : résumer, expliquer, reformuler un contenu pour un tiers en l'adaptant à ses besoins.",
          ],
          example: {
            statement: "Vous devez présenter en deux minutes votre point de vue sur la question « Should smartphones be banned in high schools? ». Proposez un plan et rédigez l'introduction et la transition principale.",
            solution: [
              "Accroche : partir d'une situation concrète et partagée. « How many times did you check your phone this morning? »",
              "Problématique : « The question is whether banning smartphones in high schools would really help students. »",
              "Plan en deux parties : 1) les arguments en faveur de l'interdiction (concentration, harcèlement en ligne, temps d'écran) ; 2) les limites (usages pédagogiques, sécurité, apprentissage de l'autonomie).",
              "Introduction rédigée : « How many times did you check your phone this morning? Probably more than you think. Today I'd like to discuss whether smartphones should be banned in high schools. First, I'll look at the arguments in favour of a ban, then I'll explain why I think it is not the whole answer. »",
              "Transition : « So, there are good reasons to limit phones. However, let's now turn to the other side of the debate. »",
              "Réponse : un plan clair en deux parties, une accroche, une problématique, et des expressions de balisage qui guident l'auditeur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque expression selon sa fonction (accord, désaccord poli, demande de précision, gagner du temps) : a) That's a fair point. b) What exactly do you mean by that? c) I'm not sure I agree with you. d) Let me think about that for a second. e) You're absolutely right. f) I see what you mean, but... g) Could you give an example? h) Well, that's a tricky question.",
              hint: "Demandez-vous si la personne approuve, nuance son désaccord, interroge ou prend le temps de réfléchir.",
              solution: [
                "Accord : a) That's a fair point ; e) You're absolutely right.",
                "Désaccord poli : c) I'm not sure I agree with you ; f) I see what you mean, but...",
                "Demande de précision : b) What exactly do you mean by that? ; g) Could you give an example?",
                "Gagner du temps : d) Let me think about that for a second ; h) Well, that's a tricky question.",
              ],
            },
            {
              level: 2,
              statement: "Indiquez la syllabe accentuée de chaque mot : a) photograph ; b) photography ; c) economy ; d) economic ; e) develop ; f) comfortable ; g) interesting ; h) determine.",
              hint: "Les mots en -ic portent l'accent sur la syllabe juste avant -ic ; les mots en -graphy et -omy sur la syllabe qui précède ce suffixe.",
              solution: [
                "a) PHO-to-graph : accent sur la première syllabe.",
                "b) pho-TO-gra-phy : accent sur la syllabe qui précède -graphy.",
                "c) e-CO-no-my : accent sur la syllabe qui précède -omy.",
                "d) e-co-NO-mic : accent sur la syllabe juste avant -ic.",
                "e) de-VE-lop : accent sur la deuxième syllabe.",
                "f) COM-for-ta-ble : accent sur la première syllabe ; à l'oral, le mot se réduit souvent à trois syllabes (COMF-ta-ble).",
                "g) IN-te-res-ting : accent sur la première syllabe (souvent prononcé en trois syllabes, IN-tres-ting).",
                "h) de-TER-mine : accent sur la deuxième syllabe ; la dernière syllabe se prononce /mɪn/, comme au début de « minute », et non comme le mot mine.",
              ],
            },
            {
              level: 3,
              statement: "Médiation. Votre correspondante anglaise, Chloe, arrive demain dans votre lycée et ne parle pas français. Voici le message affiché par le lycée (message inventé) : « Mercredi, les cours de l'après-midi sont supprimés en raison de la journée portes ouvertes. Les élèves volontaires peuvent accueillir les familles de 13 h 30 à 16 h 30. Inscription auprès de la vie scolaire avant mardi midi. » Transmettez-lui l'essentiel à l'oral en anglais (préparez 4 à 5 phrases), en expliquant ce qu'est la « vie scolaire ».",
              hint: "Sélectionnez ce qui concerne Chloe (pas de cours l'après-midi, possibilité de participer), donnez les horaires et expliquez la référence culturelle en une phrase.",
              solution: [
                "Sélectionner : pas de cours mercredi après-midi, raison (portes ouvertes), possibilité d'accueillir les familles, horaires, inscription avant mardi midi.",
                "Expliquer la référence culturelle : la « vie scolaire » est le service qui gère les absences, la discipline et l'encadrement des élèves, avec les CPE et les surveillants ; on peut dire « the student life office ».",
                "Proposition : « Good news, Chloe: there are no lessons on Wednesday afternoon, because it's the school's open day. Students can volunteer to welcome visiting families from 1.30 to 4.30 pm. If you'd like to take part, we need to sign up at the vie scolaire before Tuesday at noon. It's the office that deals with attendance and student life, a bit like the pastoral team in a British school. Do you want to do it with me? »",
                "Vérifier : registre amical adapté, informations exactes, référence culturelle expliquée, question finale qui relance l'échange.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ce que l'on attend d'une prise de parole au niveau B2.",
            statements: [
              { text: "Au niveau B2, une erreur qui ne gêne pas la compréhension est tolérée.", true: true, why: "L'essentiel est de se faire comprendre ; se corriger soi-même est même valorisé." },
              { text: "Il vaut mieux lire un texte entièrement rédigé pour éviter les erreurs.", true: false, why: "Un texte lu est monotone et peu naturel : préparez des notes sous forme de mots-clés." },
              { text: "« You're wrong » est la façon la plus naturelle d'exprimer un désaccord en anglais.", true: false, why: "C'est perçu comme brutal ; on préfère « I see what you mean, but... » ou « I'm not sure I agree »." },
              { text: "Dans « Do you agree? », l'intonation monte en fin de question.", true: true, why: "Les questions fermées (réponse yes ou no) ont une intonation montante." },
              { text: "La médiation consiste à traduire mot à mot un document.", true: false, why: "Elle consiste à sélectionner, simplifier et expliquer selon les besoins du destinataire." },
              { text: "« Well » et « let me think » permettent de gagner du temps sans quitter l'anglais.", true: true, why: "Ces mots de remplissage remplacent avantageusement les silences et les « euh »." },
              { text: "Dans « photography », l'accent porte sur la première syllabe.", true: false, why: "On dit phoTOgraphy ; c'est photograph qui est accentué sur la première syllabe." },
            ],
          },
          quiz: [
            { q: "Which expression is the most polite way to disagree?", options: ["You're completely and totally wrong.", "That's nonsense.", "I see your point, but...", "No way."], answer: 2, why: "On reconnaît d'abord l'argument de l'autre avant d'introduire le sien : c'est la stratégie de concession." },
            { q: "Which phrase helps you move to your second point?", options: ["Let's now turn to...", "Once upon a time...", "Could you repeat that?"], answer: 0, why: "Let's now turn to est une expression de balisage qui annonce une nouvelle partie." },
            { q: "In « economic », the stress falls on...", options: ["e", "co", "mic", "no"], answer: 3, why: "Les mots en -ic sont accentués sur la syllabe qui précède -ic : e-co-NO-mic." },
            { q: "Explaining a French document in English to a British friend is an example of...", options: ["mediation", "dictation", "pronunciation", "imitation"], answer: 0, why: "La médiation rend un contenu accessible à quelqu'un qui ne peut pas y accéder directement." },
            { q: "« What do you mean by that? » is used to...", options: ["agree strongly", "end the conversation politely", "ask for clarification", "change the subject"], answer: 2, why: "On demande à l'interlocuteur de préciser sa pensée." },
          ],
          trap: "Réciter une présentation apprise par cœur sans regarder l'auditoire, puis rester muet dès que l'interlocuteur pose une question imprévue, faute d'expressions pour réagir et gagner du temps.",
          method: "Constituez une fiche de 15 expressions d'interaction (accord, désaccord, précision, reformulation, temps) et réutilisez-en au moins trois à chaque prise de parole en classe : elles deviendront des automatismes.",
        },
      ],
    },
    /* ==================================================================== */
    /* ESPACE PRIVÉ ET ESPACE PUBLIC                                        */
    /* ==================================================================== */
    {
      id: 'prive-public',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'privacy-numerique',
          title: "La vie privée à l'ère numérique : « Privacy matters »",
          minutes: 35,
          objectives: [
            "Définir la notion de vie privée (privacy) et retracer sa reconnaissance comme un droit.",
            "Mobiliser le lexique des données personnelles et de la surveillance en ligne.",
            "Employer la voix passive pour décrire ce que deviennent nos données.",
            "Argumenter sur l'équilibre entre vie privée, sécurité et services gratuits.",
          ],
          course: [
            {
              heading: "Privacy : une notion ancienne devenue un droit",
              paragraphs: [
                "Le mot privacy n'a pas d'équivalent exact en français : selon le contexte, il se traduit par vie privée, intimité ou confidentialité. Il désigne la possibilité de garder pour soi une part de son existence (son corps, son domicile, sa correspondance, ses opinions, ses relations) et de décider de ce que l'on dévoile, à qui et quand. Attention à la prononciation : /ˈprɪvəsi/ en anglais britannique, /ˈpraɪvəsi/ en anglais américain.",
                "En 1890, deux juristes américains, Samuel Warren et Louis Brandeis, publient dans la Harvard Law Review un article intitulé « The Right to Privacy ». Ils réagissent à deux nouveautés de leur époque : la photographie instantanée et la presse à scandale. Ils y défendent ce qu'ils appellent « the right to be let alone », le droit d'être laissé tranquille. La question posée par l'ère numérique est donc ancienne : une technique nouvelle rend public ce qui était privé.",
                "Après la Seconde Guerre mondiale, la vie privée devient un droit fondamental. L'article 12 de la Déclaration universelle des droits de l'homme (1948) interdit les immixtions arbitraires dans la vie privée, et l'article 8 de la Convention européenne des droits de l'homme (1950) garantit le droit au respect de la vie privée et familiale, du domicile et de la correspondance. Aux États-Unis, la Constitution ne cite pas le mot privacy, mais le Quatrième Amendement protège contre les perquisitions et saisies abusives (unreasonable searches and seizures).",
              ],
              box: { label: "Repère", text: "1890 : « The Right to Privacy » (Warren et Brandeis). 1948 : Déclaration universelle des droits de l'homme, article 12. 1950 : Convention européenne des droits de l'homme, article 8." },
            },
            {
              heading: "Nos données personnelles : ce que nous laissons en ligne",
              paragraphs: [
                "Chaque recherche, chaque like, chaque déplacement enregistré par un téléphone laisse une trace : c'est notre empreinte numérique (digital footprint). Les cookies et autres outils de suivi (trackers) permettent aux sites de reconnaître un utilisateur et de suivre sa navigation. Ces données personnelles (personal data) sont analysées par des algorithmes, parfois revendues par des courtiers en données (data brokers), et servent surtout à la publicité ciblée (targeted advertising).",
                "C'est le modèle économique de nombreuses plateformes gratuites : l'utilisateur ne paie pas en argent, mais en attention et en données. Une formule souvent citée le résume : si vous ne payez pas le produit, c'est que vous êtes le produit. Le problème est le consentement (consent) : qui lit vraiment les conditions d'utilisation (terms and conditions) avant de cliquer sur « I agree » ?",
                "L'affaire Cambridge Analytica, révélée en mars 2018 par The Observer, The Guardian et The New York Times, a montré les risques de ce modèle : les données de dizaines de millions d'utilisateurs de Facebook (jusqu'à 87 millions selon Facebook) avaient été collectées par l'intermédiaire d'une application de test de personnalité, puis exploitées par une société de conseil politique. En 2019, la Federal Trade Commission américaine a infligé à Facebook une amende de 5 milliards de dollars pour atteintes à la vie privée.",
              ],
              box: { label: "Vocabulaire", text: "Digital footprint (empreinte numérique), personal data (données personnelles), to track (pister), targeted advertising (publicité ciblée), consent (consentement), data breach (fuite de données), to opt out (refuser, se désinscrire)." },
            },
            {
              heading: "Protéger la vie privée : lois, surveillance et débats",
              paragraphs: [
                "L'Union européenne a adopté en 2016 le Règlement général sur la protection des données (RGPD, en anglais GDPR, General Data Protection Regulation), appliqué depuis le 25 mai 2018. Il impose le consentement explicite, garantit un droit d'accès à ses données et un droit à l'effacement (right to erasure, souvent appelé right to be forgotten), et prévoit des amendes pouvant atteindre 20 millions d'euros ou 4 % du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu. Après le Brexit, le Royaume-Uni a conservé ces règles sous le nom de UK GDPR, à côté du Data Protection Act 2018.",
                "Les États-Unis n'ont pas de loi fédérale générale sur les données personnelles : la protection dépend des secteurs et des États. La Californie a adopté en 2018 le California Consumer Privacy Act, entré en vigueur en 2020. La menace ne vient pas seulement des entreprises : en 2013, Edward Snowden, ancien sous-traitant de la NSA (National Security Agency), a révélé aux journaux The Guardian et The Washington Post l'existence de programmes de surveillance de masse des communications, comme PRISM, menés aussi avec le service britannique GCHQ.",
                "Le débat oppose souvent sécurité et liberté. L'argument « nothing to hide, nothing to fear » (si vous n'avez rien à cacher, vous n'avez rien à craindre) est fréquent. Snowden y a répondu en substance que se désintéresser de la vie privée parce qu'on n'a rien à cacher revient à se désintéresser de la liberté d'expression parce qu'on n'a rien à dire. La vie privée protège en effet la liberté de penser, de s'informer et de s'opposer sans être surveillé.",
              ],
              box: { label: "À retenir", text: "GDPR : adopté en 2016, appliqué depuis le 25 mai 2018 ; consentement, droit d'accès, droit à l'effacement. Snowden (2013) : surveillance de masse par la NSA et le GCHQ. Débat : sécurité contre liberté." },
            },
            {
              heading: "Langue : la voix passive pour parler des données",
              paragraphs: [
                "Quand on parle des données, on ignore souvent qui agit, ou l'on veut mettre en avant ce qui subit l'action : la voix passive est alors naturelle. Elle se forme avec be conjugué au temps voulu, suivi du participe passé : our data is collected (présent), millions of passwords were stolen (prétérit), my account has been hacked (present perfect), we are being tracked (présent en be + -ing), our messages will be stored (futur), these files can be deleted (avec un modal).",
                "Le complément d'agent est introduit par by, mais on ne l'exprime que s'il apporte une information : « The scandal was revealed by three newspapers. » Avec les verbes à deux compléments, le sujet du passif est souvent la personne : « Users were sent an email » (on a envoyé un e-mail aux utilisateurs). Le français traduit souvent le passif anglais par « on » : « Our data is sold » = « On vend nos données ».",
                "Le mot data est le pluriel du latin datum. Dans la langue courante, il est traité comme un indénombrable singulier (data is, much data), mais l'usage scientifique et soutenu garde parfois le pluriel (data are). Ne dites jamais « datas ». De même, information est indénombrable : some information, a piece of information, jamais « informations ».",
              ],
              box: { label: "Règle", text: "Passif = be (au temps voulu) + participe passé. Is collected, was stolen, has been hacked, is being tracked, will be stored, can be deleted. Agent introduit par by, seulement s'il est utile." },
            },
          ],
          keyPoints: [
            "Privacy : vie privée, intimité, confidentialité ; « the right to be let alone » (Warren et Brandeis, 1890).",
            "Droit fondamental : article 12 de la DUDH (1948), article 8 de la CEDH (1950) ; aux États-Unis, le Quatrième Amendement.",
            "Modèle des plateformes gratuites : données et publicité ciblée ; affaire Cambridge Analytica (2018).",
            "GDPR appliqué depuis le 25 mai 2018 : consentement, droit d'accès, droit à l'effacement.",
            "Snowden (2013) révèle la surveillance de masse de la NSA ; débat sécurité contre liberté.",
            "Passif : be + participe passé (our data is collected) ; data est indénombrable, jamais « datas ».",
          ],
          example: {
            statement: "Répondez en anglais à la question « Is privacy dead in the digital age? » en un paragraphe argumenté d'environ 90 mots, en employant au moins deux formes passives.",
            solution: [
              "Analyser la question : elle invite à nuancer. La vie privée est menacée, mais elle n'a pas disparu, puisqu'elle est défendue par la loi et par les citoyens.",
              "Choisir les arguments : d'un côté, la collecte massive des données et la surveillance (Cambridge Analytica, Snowden) ; de l'autre, le GDPR et les nouveaux réflexes des utilisateurs.",
              "Prévoir les formes passives : « our data is collected », « the GDPR was adopted ».",
              "Rédiger : « It is tempting to say that privacy is dead. Every day, huge amounts of our data are collected, analysed and sold, often without our real consent, and scandals like Cambridge Analytica have shown how this information can be misused. However, privacy is not dead: it is being redefined. In Europe, the GDPR was adopted to give citizens more control, and many users now refuse cookies or choose encrypted apps. In my view, privacy has become a fight rather than a given. »",
              "Vérifier : environ 90 mots, quatre formes passives (are collected, can be misused, is being redefined, was adopted), un plan concession puis réfutation annoncé par However.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez ces phrases à la voix passive en gardant le temps, et n'exprimez l'agent que s'il est utile : a) Apps collect our location data. b) Hackers stole two million passwords last year. c) Someone has hacked my account. d) The company will delete your files. e) They are tracking every click. f) You can change these settings at any time. (phrases inventées pour l'entraînement)",
              hint: "Repérez le temps du verbe actif, conjuguez be à ce temps, puis ajoutez le participe passé du verbe.",
              solution: [
                "a) Présent : « Our location data is collected by apps. » (ou « are collected » dans un registre soutenu)",
                "b) Prétérit : « Two million passwords were stolen by hackers last year. » L'agent peut être omis s'il est évident.",
                "c) Present perfect : « My account has been hacked. » L'agent (someone) est inconnu, on l'omet.",
                "d) Futur : « Your files will be deleted (by the company). »",
                "e) Présent en be + -ing : « Every click is being tracked. » L'agent (they) est vague, on l'omet.",
                "f) Modal : « These settings can be changed at any time. »",
              ],
            },
            {
              level: 2,
              statement: "Complétez le texte avec les mots suivants : consent, footprint, breach, targeted, opt out, erased. « Every time we go online, we leave a digital (1) ___ behind us. Most websites show us (2) ___ ads based on our browsing history. In Europe, companies need our (3) ___ before they place most cookies, and we can (4) ___ of marketing emails. If a company suffers a data (5) ___, it must report it. Under the GDPR, we can also ask for some of our personal data to be (6) ___. » (texte inventé)",
              hint: "Cherchez d'abord les expressions figées : digital ___, data ___, to ___ of.",
              solution: [
                "(1) footprint : a digital footprint, l'empreinte numérique.",
                "(2) targeted : targeted ads, des publicités ciblées.",
                "(3) consent : le consentement, exigé par le GDPR pour la plupart des cookies.",
                "(4) opt out : to opt out of, refuser, se désinscrire de.",
                "(5) breach : a data breach, une fuite ou violation de données.",
                "(6) erased : to be erased, être effacé, c'est le droit à l'effacement.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Many parents share photos of their children on social media, a practice known as sharenting. Should it be limited? » Rédigez un essai argumenté de 150 à 180 mots en anglais.",
              hint: "Construisez un plan en trois temps : ce qui pousse les parents à partager, les risques pour l'enfant (empreinte numérique, consentement, sécurité), puis votre position nuancée.",
              solution: [
                "Définir le sujet : sharenting (share + parenting) désigne la publication par les parents de photos et d'informations sur leurs enfants.",
                "Plan : 1) des motivations compréhensibles (fierté, lien avec la famille éloignée) ; 2) des risques réels (empreinte numérique créée sans consentement, photos réutilisées, moqueries futures, informations exploitables par des inconnus) ; 3) une position : limiter, éduquer, demander l'avis de l'enfant dès qu'il peut le donner.",
                "Proposition : « Posting a picture of a child's first steps seems harmless. Proud parents want to share happy moments, especially with relatives who live far away. However, sharenting raises serious questions. First, children are given a digital footprint before they can even speak, and they have never consented to it. Pictures that are cute today may be embarrassing or humiliating when they become teenagers. Moreover, once a photo is posted, it can be copied, stored and reused by strangers, and details such as a school uniform or a location can be exploited. Some people argue that banning sharenting would be impossible and intrusive. That is true to some extent, but limits are needed: parents could share pictures privately, avoid any identifying details and, as soon as children are old enough, ask for their permission. In my opinion, a child's privacy should be protected before it is too late to take it back. »",
                "Vérifier : environ 175 mots, un plan clair (arguments, concession, position), des connecteurs (However, First, Moreover, but), plusieurs passifs (are given, is posted, can be copied, should be protected).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression anglaise à sa traduction.",
            pairs: [
              { left: "digital footprint", right: "empreinte numérique" },
              { left: "data breach", right: "fuite de données" },
              { left: "targeted advertising", right: "publicité ciblée" },
              { left: "to opt out", right: "refuser, se désinscrire" },
              { left: "to track", right: "pister, suivre à la trace" },
              { left: "right to erasure", right: "droit à l'effacement" },
            ],
          },
          quiz: [
            { q: "Since when has the GDPR applied in the European Union?", options: ["2008", "2013", "2018", "2021"], answer: 2, why: "Adopté en 2016, le GDPR s'applique depuis le 25 mai 2018." },
            { q: "Choose the correct passive form of « Hackers stole millions of passwords. »", options: ["Millions of passwords were stolen by hackers.", "Millions of passwords have stolen hackers.", "Millions of passwords was stealing by hackers."], answer: 0, why: "Prétérit passif : were (pluriel) + participe passé stolen." },
            { q: "In 2013, Edward Snowden revealed...", options: ["a leak of bank card numbers from a store", "the piracy of Hollywood films online", "a security flaw in a dating app", "the NSA's mass surveillance"], answer: 3, why: "Snowden a révélé des programmes de surveillance de masse menés par la NSA, avec le GCHQ britannique." },
            { q: "Your « digital footprint » is...", options: ["the amount of storage on your phone", "the trace you leave online", "a type of password"], answer: 1, why: "C'est l'ensemble des traces laissées en ligne : recherches, publications, likes, localisations." },
            { q: "The « right to be forgotten » allows people to...", options: ["refuse every cookie automatically", "stay anonymous on every single website", "have some personal data erased"], answer: 2, why: "C'est le droit à l'effacement prévu par le GDPR, sous certaines conditions." },
          ],
          trap: "Écrire « datas » ou « informations » au pluriel, et oublier l'auxiliaire be au passif (« our data collected » au lieu de « our data is collected »).",
          method: "Pour vérifier un passif, cherchez toujours deux éléments : une forme de be conjuguée au bon temps et un participe passé. Si l'un manque, la phrase est fausse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'espaces-publics',
          title: "Les espaces publics : à qui appartient la ville ?",
          minutes: 30,
          objectives: [
            "Définir l'espace public et identifier les acteurs qui le façonnent et le contrôlent.",
            "Analyser des exemples de privatisation, de gentrification et d'architecture dissuasive dans des villes anglophones.",
            "Comparer et opposer des situations à l'aide des comparatifs et des connecteurs de contraste.",
            "Argumenter sur le droit de chacun à la ville.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un espace public ?",
              paragraphs: [
                "Un espace public est un lieu ouvert à tous, en principe gratuit et géré par les pouvoirs publics : rues, places, parcs, bibliothèques, gares. C'est un lieu de passage et de rencontre entre des inconnus, mais aussi un lieu politique où l'on manifeste et où l'on prend la parole. À Londres, le Speakers' Corner de Hyde Park est associé depuis le XIXe siècle à la liberté de prendre la parole en public sur n'importe quel sujet.",
                "En 1961, l'Américaine Jane Jacobs publie The Death and Life of Great American Cities. Elle y critique les grands projets de rénovation urbaine et les autoroutes urbaines défendus à New York par l'urbaniste Robert Moses, et elle défend des quartiers denses et mixtes, où les habitants et les commerçants assurent une surveillance naturelle de la rue : ce qu'elle appelle les « eyes on the street ». En 1968, le philosophe français Henri Lefebvre publie Le Droit à la ville (the right to the city), idée selon laquelle tous les habitants doivent pouvoir accéder à la ville et participer à sa transformation.",
              ],
              box: { label: "Vocabulaire", text: "Pavement (UK) / sidewalk (US) ; high street (UK) / main street (US) ; shopping centre (UK) / mall (US) ; the council (la municipalité) ; a square (une place) ; a public park ; to loiter (traîner, flâner)." },
            },
            {
              heading: "Des espaces publics de plus en plus privés",
              paragraphs: [
                "À New York, depuis une réforme de l'urbanisme de 1961, les promoteurs peuvent construire des étages supplémentaires s'ils aménagent en échange une place ou un passage ouvert au public. Ces privately owned public spaces (POPS) sont accessibles à tous, mais appartiennent à des entreprises qui en fixent les règles. Le plus célèbre est Zuccotti Park, dans le sud de Manhattan, occupé en septembre 2011 par le mouvement Occupy Wall Street, puis évacué en novembre 2011.",
                "À Londres, de vastes quartiers récents, comme les abords de la gare de King's Cross ou Canary Wharf, sont détenus et gérés par des sociétés privées. On parle de pseudo-public spaces : on peut s'y promener librement, mais des agents de sécurité privés y font respecter un règlement qui peut interdire de manifester, de faire du skateboard ou de prendre certaines photos. Aux États-Unis, les gated communities, quartiers résidentiels fermés et gardés, et les centres commerciaux (malls) ont remplacé dans certaines villes la rue comme lieu de sociabilité.",
              ],
              box: { label: "Définition", text: "POPS (privately owned public space) : espace ouvert au public mais appartenant à une entreprise privée, qui en fixe les règles d'usage. Exemple : Zuccotti Park, à New York." },
            },
            {
              heading: "Gentrification et architecture dissuasive",
              paragraphs: [
                "Le mot gentrification a été forgé en 1964 par la sociologue britannique Ruth Glass, à propos de quartiers populaires de Londres comme Islington. Des ménages plus aisés s'installent dans un quartier ouvrier, rénovent les logements, attirent des cafés et des galeries ; les prix et les loyers montent, et les habitants modestes sont progressivement contraints de partir (to be priced out, to be displaced). On cite souvent Shoreditch à Londres ou Williamsburg à Brooklyn.",
                "Même un projet admiré peut avoir cet effet. À New York, la High Line, promenade plantée aménagée sur une ancienne voie ferrée aérienne et ouverte en 2009, est devenue un symbole d'urbanisme réussi, mais elle est aussi associée à la flambée des prix immobiliers dans les quartiers voisins.",
                "L'architecture dissuasive (hostile ou defensive architecture) désigne des aménagements conçus pour empêcher certains usages : pics anti-sans-abri devant les entrées, bancs inclinés ou divisés par des accoudoirs pour empêcher de s'allonger, rebords anti-skate. Au Royaume-Uni, des dispositifs comme le Mosquito, qui émet un son aigu surtout audible par les jeunes, ont été utilisés pour disperser les adolescents. Ces choix posent une question simple : pour qui la ville est-elle conçue ?",
              ],
              box: { label: "Repère", text: "1961 : Jane Jacobs, The Death and Life of Great American Cities. 1964 : Ruth Glass invente le mot gentrification. 1968 : Henri Lefebvre, Le Droit à la ville. 2011 : Occupy Wall Street à Zuccotti Park." },
            },
            {
              heading: "Langue : comparer et opposer",
              paragraphs: [
                "Les adjectifs courts (une syllabe, ou deux syllabes terminées par -y) prennent -er au comparatif et -est au superlatif : safe, safer, the safest ; busy, busier, the busiest. Les adjectifs longs utilisent more et the most : more expensive, the most crowded. Irréguliers : good, better, the best ; bad, worse, the worst ; far, further (ou farther), the furthest. L'égalité se dit as... as, l'infériorité not as... as ou less... than.",
                "La structure « the + comparatif..., the + comparatif... » exprime une évolution parallèle : « The more expensive the neighbourhood becomes, the fewer families can afford to live there. » Attention : fewer s'emploie avec un nom dénombrable pluriel (fewer families), less avec un indénombrable (less space).",
                "Pour opposer deux situations : whereas et while (alors que), unlike (contrairement à), compared with (par rapport à), on the one hand... on the other hand... (d'un côté... de l'autre...). « Unlike a public park, a POPS is managed by a private company. » ; « Public spaces are open to all, whereas pseudo-public spaces have their own rules. »",
              ],
              box: { label: "Règle", text: "Court : -er / the -est (safer, the safest). Long : more / the most (more expensive). Irréguliers : better, worse, further. The more..., the more... Fewer + dénombrable, less + indénombrable." },
            },
          ],
          keyPoints: [
            "L'espace public : ouvert à tous, gratuit, lieu de rencontre et d'expression politique.",
            "Jane Jacobs (1961) : quartiers denses et mixtes, « eyes on the street » ; Lefebvre (1968) : le droit à la ville.",
            "POPS à New York (Zuccotti Park, Occupy Wall Street, 2011) ; pseudo-public spaces à Londres.",
            "Gentrification : mot de Ruth Glass (1964) ; hausse des loyers et départ des habitants modestes.",
            "Architecture dissuasive : pics, bancs inclinés, Mosquito ; elle exclut certains usagers.",
            "Comparer : safer, more expensive, better ; the more..., the fewer... ; whereas, unlike.",
          ],
          example: {
            statement: "Comparez en anglais, en trois ou quatre phrases, ces deux lieux (descriptions inventées) : A) Riverside Park, parc municipal, ouvert jour et nuit, gratuit, bancs, pelouses, concerts libres. B) Crown Plaza, place privée au pied d'une tour de bureaux, ouverte de 7 h à 22 h, surveillée par des agents, règlement interdisant manifestations et skateboard.",
            solution: [
              "Repérer les critères de comparaison : propriétaire, horaires, règles, usages possibles.",
              "Choisir les outils : un comparatif d'adjectif long (more restrictive), un comparatif court (longer), whereas et unlike.",
              "Rédiger la première phrase : « Unlike Riverside Park, which belongs to the city, Crown Plaza is owned by a private company. »",
              "Rédiger la suite : « Riverside Park is open day and night, whereas Crown Plaza closes at 10 pm. The rules at Crown Plaza are also more restrictive, since protests and skateboarding are banned. »",
              "Conclure par un jugement : « As a result, Riverside Park is far more welcoming than Crown Plaza for anyone who just wants to enjoy the city. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la forme correcte de l'adjectif entre parenthèses : a) London is (expensive) ___ than Manchester. b) This is the (busy) ___ street in town. c) The new square is (good) ___ than the old car park. d) Homeless people are in a (bad) ___ situation than ten years ago. e) The park is not as (big) ___ as I thought. f) The (crowded) ___ the station becomes, the (nervous) ___ people feel. (données fictives)",
              hint: "Comptez les syllabes de l'adjectif, repérez les irréguliers et vérifiez s'il s'agit d'un comparatif, d'un superlatif ou d'une égalité.",
              solution: [
                "a) more expensive : adjectif long.",
                "b) busiest : adjectif de deux syllabes en -y, le y devient i.",
                "c) better : comparatif irrégulier de good.",
                "d) worse : comparatif irrégulier de bad.",
                "e) big : avec not as... as, l'adjectif reste à la forme simple.",
                "f) more crowded / more nervous : deux adjectifs de deux syllabes qui ne se terminent pas en -y (donc more), dans la structure the + comparatif..., the + comparatif... qui exprime une évolution parallèle. « The more crowded the station becomes, the more nervous people feel. »",
              ],
            },
            {
              level: 2,
              statement: "Texte d'entraînement inventé : « Last month, Westbridge Council replaced the old wooden benches in Market Square with new metal seats. Each seat is slightly sloped and divided by armrests. The council says the design is “easier to clean and harder to vandalise”. But local charities are furious: they claim the benches were designed to stop rough sleepers from lying down. “A city that hides its poverty doesn't solve it,” said one volunteer. » 1) Qu'a fait la municipalité ? 2) Quelle justification donne-t-elle ? 3) Que lui reprochent les associations ? 4) Comment appelle-t-on ce type d'aménagement ? 5) Reformulez en français l'idée du bénévole.",
              hint: "Repérez le connecteur But qui sépare la version officielle de la critique, puis mobilisez le lexique du cours.",
              solution: [
                "1) Elle a remplacé les vieux bancs en bois de la place du marché par des sièges métalliques légèrement inclinés et séparés par des accoudoirs.",
                "2) Selon elle, ils sont plus faciles à nettoyer et plus difficiles à dégrader : deux comparatifs (easier, harder).",
                "3) Les associations affirment que ces bancs ont été conçus pour empêcher les personnes sans abri (rough sleepers) de s'allonger.",
                "4) C'est un exemple d'architecture dissuasive (hostile ou defensive architecture).",
                "5) Une ville qui cache sa pauvreté ne la fait pas disparaître : l'aménagement déplace le problème sans le résoudre.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Who should the city belong to? » Rédigez un texte argumenté de 150 à 180 mots, en vous appuyant sur au moins deux exemples du cours et en employant des outils de comparaison et d'opposition.",
              hint: "Opposez la logique de la ville comme marché (promoteurs, sécurité, rentabilité) et la ville comme bien commun (accès, mixité, expression), puis prenez position.",
              solution: [
                "Problématique : la ville appartient-elle à ceux qui la possèdent et la financent, ou à tous ceux qui y vivent ?",
                "Plan : 1) les arguments en faveur des acteurs privés (investissement, entretien, sécurité) ; 2) leurs limites (POPS, pseudo-public spaces, gentrification, architecture dissuasive) ; 3) une position : la ville comme bien commun.",
                "Proposition : « Cities have never been richer or more attractive, yet many residents feel they no longer belong there. On the one hand, private developers argue that they build cleaner and safer spaces than cash-strapped councils. In London, areas like King's Cross are well maintained and pleasant to walk through. On the other hand, these pseudo-public spaces come with private rules: protests or skateboarding may be banned, and security guards decide who is welcome. Similarly, gentrification makes neighbourhoods more fashionable but less affordable, and the poorest residents are priced out. Hostile architecture, such as sloped benches, goes even further by excluding the most vulnerable. Unlike a shopping centre, a city is not a product. As Jane Jacobs argued, it lives through the people who use its streets. In my opinion, the city should belong to all its inhabitants, whatever their income, and public authorities should guarantee that real public spaces remain free and open to everyone. »",
                "Vérifier : environ 175 mots, deux exemples précis (King's Cross, Jane Jacobs), des comparatifs (richer, cleaner and safer, less affordable) et des connecteurs (On the one hand, On the other hand, Unlike, Similarly).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La ville, l'espace public et la langue de la comparaison.",
            statements: [
              { text: "Zuccotti Park, where Occupy Wall Street began in 2011, is a privately owned public space.", true: true, why: "C'est un POPS : ouvert au public, mais appartenant à une entreprise privée." },
              { text: "The word « gentrification » was coined in New York in the 1990s.", true: false, why: "Il a été forgé en 1964 par la sociologue Ruth Glass, à propos de Londres." },
              { text: "Hostile architecture aims to make benches more comfortable for everyone.", true: false, why: "Elle vise au contraire à empêcher certains usages, comme s'allonger ou faire du skateboard." },
              { text: "A British « pavement » is an American « sidewalk ».", true: true, why: "Pavement (UK) et sidewalk (US) désignent le trottoir." },
              { text: "Jane Jacobs defended dense, mixed neighbourhoods with « eyes on the street ».", true: true, why: "Elle voyait dans la présence des habitants et des commerçants une surveillance naturelle de la rue." },
              { text: "The comparative of « bad » is « badder ».", true: false, why: "Bad est irrégulier : bad, worse, the worst." },
              { text: "We say « fewer families » but « less space ».", true: true, why: "Fewer avec un dénombrable pluriel, less avec un indénombrable." },
            ],
          },
          quiz: [
            { q: "Who coined the word « gentrification »?", options: ["Jane Jacobs", "Ruth Glass", "Henri Lefebvre", "Robert Moses"], answer: 1, why: "La sociologue britannique Ruth Glass l'a employé en 1964 à propos de quartiers de Londres." },
            { q: "Complete: « The city centre is ___ than it used to be. »", options: ["more busy", "the busiest", "most busy", "busier"], answer: 3, why: "Busy, adjectif de deux syllabes en -y, fait busier au comparatif." },
            { q: "A sloped bench designed to stop people from lying down is an example of...", options: ["hostile architecture", "community-led urban planning", "public art", "a gated community"], answer: 0, why: "L'architecture dissuasive empêche certains usages de l'espace public." },
            { q: "« Whereas » expresses...", options: ["a cause", "a consequence", "a contrast", "an addition"], answer: 2, why: "Whereas (alors que) oppose deux situations." },
            { q: "Complete: « The higher the rents, ___ local families can stay. »", options: ["the fewer", "fewer", "the most", "less than"], answer: 0, why: "Structure the + comparatif..., the + comparatif ; fewer, car families est un nom dénombrable." },
          ],
          trap: "Cumuler les deux marques du comparatif (« more cheaper ») ou employer less avec un nom dénombrable pluriel (« less families » au lieu de « fewer families »).",
          method: "Pour chaque exemple du cours (Zuccotti Park, King's Cross, la High Line), notez sur une fiche une phrase de comparaison prête à l'emploi : vous aurez des exemples précis et une langue correcte le jour de l'évaluation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'personnalites-publiques',
          title: "Personnalités publiques et vie privée",
          minutes: 30,
          objectives: [
            "Distinguer l'intérêt public (public interest) de ce qui intéresse le public.",
            "Présenter les grandes affaires et les règles qui encadrent la presse au Royaume-Uni et aux États-Unis.",
            "Nuancer un jugement à l'aide des modaux et des expressions de prudence.",
            "Débattre du droit à la vie privée des célébrités, des responsables politiques et des influenceurs.",
          ],
          course: [
            {
              heading: "Célébrité et médias : une relation ambiguë",
              paragraphs: [
                "Au Royaume-Uni, on distingue traditionnellement les tabloids, journaux populaires au petit format, friands de scandales et de célébrités (The Sun, Daily Mirror), et la presse dite de qualité, autrefois appelée broadsheets en raison de son grand format (The Times, The Guardian). Les célébrités entretiennent avec ces médias une relation ambiguë : elles ont besoin de visibilité pour exister, mais réclament le respect de leur vie privée.",
                "Le mot paparazzi vient de Paparazzo, nom d'un photographe dans le film La Dolce Vita de Federico Fellini (1960). Les paparazzi traquent les célébrités pour vendre des clichés volés. La mort de Diana, princesse de Galles, le 31 août 1997 à Paris, dans un accident de voiture alors que son véhicule était suivi par des photographes, a provoqué une vive émotion. L'enquête judiciaire britannique, conclue en 2008, a retenu la conduite gravement négligente du chauffeur et des véhicules qui la poursuivaient.",
              ],
              box: { label: "Vocabulaire", text: "A tabloid (journal populaire à sensation), the quality press, a scoop, gossip (les potins, ragots), to intrude on someone's privacy, an intrusion, a celebrity, the paparazzi (pluriel ; singulier : a paparazzo)." },
            },
            {
              heading: "Le scandale des écoutes et l'encadrement de la presse britannique",
              paragraphs: [
                "En juillet 2011, The Guardian révèle que des journalistes du News of the World, tabloïd du groupe de Rupert Murdoch, ont piraté les messageries téléphoniques de célébrités, d'hommes politiques et même, en 2002, d'une adolescente assassinée, Milly Dowler. Le scandale du phone hacking entraîne la fermeture du journal en juillet 2011, après 168 ans de parution, et la création d'une commission d'enquête publique, la Leveson Inquiry, dont le rapport est publié en novembre 2012.",
                "Au Royaume-Uni, les juges doivent concilier deux droits garantis par la Convention européenne des droits de l'homme, intégrée au droit britannique par le Human Rights Act 1998 : l'article 8 (respect de la vie privée) et l'article 10 (liberté d'expression). Le critère décisif est l'intérêt public (public interest) : révéler qu'un ministre a menti ou détourné de l'argent sert l'intérêt public ; dévoiler la santé d'un acteur ou la vie amoureuse d'une chanteuse relève seulement de la curiosité.",
                "Les procès continuent : en décembre 2023, la Haute Cour de Londres a reconnu que le prince Harry avait été victime de piratage téléphonique de la part du groupe Mirror Group Newspapers. Les membres de la famille royale, qui représentent une institution publique, posent d'ailleurs une question délicate : où s'arrête leur fonction, où commence leur vie privée ?",
              ],
              box: { label: "Définition", text: "Public interest (intérêt public) : ce que les citoyens ont besoin de savoir pour juger leurs dirigeants et leurs institutions. À ne pas confondre avec ce qui intéresse le public (what interests the public), c'est-à-dire la curiosité." },
            },
            {
              heading: "Aux États-Unis : une presse protégée par le Premier Amendement",
              paragraphs: [
                "Le Premier Amendement de la Constitution américaine, adopté en 1791 avec la Déclaration des droits (Bill of Rights), protège la liberté d'expression et la liberté de la presse. En 1964, dans l'arrêt New York Times Co. v. Sullivan, la Cour suprême décide qu'un responsable public ne peut obtenir réparation pour diffamation que s'il prouve l'« actual malice » du journal : celui-ci savait que l'information était fausse, ou l'a publiée sans se soucier de sa véracité. Cette protection a ensuite été étendue aux personnalités publiques.",
                "Il est donc plus difficile pour une célébrité américaine de gagner un procès en diffamation (libel pour l'écrit, slander pour l'oral) que pour une célébrité britannique : Londres a longtemps eu la réputation d'être une capitale du procès en diffamation, avant que le Defamation Act 2013 ne réforme la loi. Les deux pays partagent cependant une même tension entre droit d'informer et droit d'être laissé tranquille.",
              ],
              box: { label: "Repère", text: "1791 : Premier Amendement. 1964 : New York Times Co. v. Sullivan. 1997 : mort de Diana. 2011 : fermeture du News of the World. 2012 : rapport Leveson. 2013 : Defamation Act au Royaume-Uni." },
            },
            {
              heading: "Influenceurs et réseaux sociaux : tous publics ?",
              paragraphs: [
                "Les réseaux sociaux ont brouillé la frontière. Les influenceurs font de leur vie privée un contenu rémunéré : repas, voyages, relations, parfois enfants. Leurs abonnés développent avec eux ce que les sociologues Donald Horton et Richard Wohl ont appelé dès 1956 une relation parasociale (parasocial relationship) : un sentiment d'intimité à sens unique avec une personne que l'on ne connaît pas. Un anonyme peut aussi devenir célèbre en quelques heures (to go viral), sans l'avoir choisi.",
                "D'où de nouvelles questions : un influenceur qui expose sa vie peut-il ensuite réclamer le respect de sa vie privée ? Que dire du doxxing, la divulgation en ligne d'informations personnelles (adresse, téléphone) pour nuire à quelqu'un ? Une personne exposée par choix reste-t-elle protégée pour ce qu'elle n'a pas choisi de montrer ? La plupart des juristes répondent oui : être public n'est pas renoncer à toute vie privée.",
              ],
            },
            {
              heading: "Langue : nuancer avec les modaux",
              paragraphs: [
                "Les modaux permettent de nuancer un jugement. Obligation et conseil : must (obligation forte, souvent ressentie par le locuteur), have to (obligation extérieure), should et ought to (conseil, obligation morale : « Journalists should respect children's privacy »). Possibilité : may, might, could (« Publishing this photo might put her in danger »). Déduction : must (quasi-certitude), can't (impossibilité : « He can't have known »).",
                "Au passé, modal + have + participe passé : should have done exprime un reproche (« The editor should have checked his sources »), might have done une possibilité (« The paparazzi might have caused the accident »), must have done une déduction. Pour nuancer une affirmation, utilisez aussi des expressions de prudence (hedging) : It could be argued that... ; To a certain extent... ; Arguably... ; It is often claimed that..., but...",
              ],
              box: { label: "Règle", text: "Should / ought to : conseil, morale. May / might / could : possibilité. Must : obligation ou forte probabilité. Can't : impossibilité. Should have + participe passé : reproche sur le passé." },
            },
          ],
          keyPoints: [
            "Public interest (ce que les citoyens doivent savoir) ≠ what interests the public (la curiosité).",
            "Paparazzi : mot venu de La Dolce Vita (1960) ; mort de Diana à Paris le 31 août 1997.",
            "Phone hacking : fermeture du News of the World (2011), rapport Leveson (2012).",
            "Royaume-Uni : article 8 (vie privée) contre article 10 (liberté d'expression), via le Human Rights Act 1998.",
            "États-Unis : Premier Amendement ; New York Times Co. v. Sullivan (1964) et l'« actual malice ».",
            "Nuancer : should, might, could ; should have + participe passé ; it could be argued that...",
          ],
          example: {
            statement: "Transformez l'affirmation tranchée « Celebrities have no right to privacy. » en un paragraphe nuancé de 60 à 80 mots en anglais, en utilisant au moins trois modaux ou expressions de prudence.",
            solution: [
              "Repérer le problème : l'affirmation est générale et absolue (no right), sans distinction ni exemple.",
              "Introduire une concession : reconnaître la part de vérité. « It could be argued that celebrities choose to live in the public eye. »",
              "Nuancer avec un critère : l'intérêt public. « Their public actions may legitimately be scrutinised, especially if they influence millions of fans. »",
              "Poser une limite avec should et un exemple : « However, fame should not erase every boundary. Their health, their children or their homes ought to remain private. »",
              "Réponse : « It could be argued that celebrities choose to live in the public eye, so their public actions may legitimately be scrutinised, especially if they influence millions of fans. However, fame should not erase every boundary. Their health, their children or their homes ought to remain private, unless revealing them serves the public interest. As Princess Diana's tragic death showed, intrusion can have terrible consequences. » (environ 70 mots)",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le modal qui convient (should, might, must, can't, should have) : a) Journalists ___ protect their sources. b) The photographer ___ be the one who took the picture: he was in Spain that day. c) The singer looks exhausted; she ___ be under a lot of pressure. d) The newspaper ___ asked for permission before publishing the photos. e) This post ___ go viral, but nobody can be sure. (situations inventées)",
              hint: "Demandez-vous pour chaque phrase s'il s'agit d'un conseil, d'une impossibilité, d'une forte probabilité, d'un reproche sur le passé ou d'une simple possibilité.",
              solution: [
                "a) should : conseil, obligation morale.",
                "b) can't : impossibilité logique, il était en Espagne.",
                "c) must : déduction quasi certaine à partir d'un indice.",
                "d) should have : reproche sur une action passée (should have asked).",
                "e) might : simple possibilité, confirmée par « nobody can be sure ».",
              ],
            },
            {
              level: 2,
              statement: "Dites si la publication de chaque information (situations inventées) relève de l'intérêt public, et justifiez en une phrase : a) Un ministre a utilisé de l'argent public pour ses vacances. b) Une actrice a changé de coiffure. c) Le dossier médical de l'enfant d'un footballeur. d) Le PDG d'un constructeur savait qu'un modèle de voiture était dangereux et l'a caché. e) Un député qui fait campagne sur les « valeurs familiales » a une liaison secrète.",
              hint: "Demandez-vous si l'information aide les citoyens à juger une personne dans l'exercice d'une fonction publique ou à se protéger.",
              solution: [
                "a) Oui : l'usage de l'argent public par un responsable concerne directement les citoyens.",
                "b) Non : c'est de la curiosité, sans enjeu pour le public.",
                "c) Non : il s'agit de la santé d'un enfant, information parmi les plus protégées.",
                "d) Oui : la sécurité des consommateurs est en jeu.",
                "e) Cas discuté : on invoque souvent l'argument de l'hypocrisie (son comportement contredit son discours public), mais d'autres y voient une atteinte à la vie privée sans lien avec sa fonction. C'est précisément le type de cas que les juges examinent au cas par cas.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Do public figures still have a right to privacy in the age of social media? » Rédigez un essai de 180 à 200 mots en anglais, en distinguant au moins deux catégories de personnalités publiques.",
              hint: "Distinguez les responsables politiques, les célébrités et les influenceurs : leur rapport au public n'est pas le même, donc la réponse non plus.",
              solution: [
                "Problématique : la notoriété fait-elle perdre le droit à la vie privée, alors que les réseaux sociaux rendent chacun visible ?",
                "Plan : 1) les responsables politiques, dont les actes publics doivent être contrôlés (intérêt public) ; 2) les célébrités et les influenceurs, qui exposent volontairement une partie de leur vie mais pas toute ; 3) une limite commune : santé, enfants, domicile, et le critère de l'intérêt public.",
                "Proposition : « Social media has turned privacy into a rare commodity, especially for famous people. Yet being public should not mean giving up every right. Politicians are a special case. Since they hold power and spend public money, journalists must be able to investigate their decisions, and even their private lives when these contradict their public statements. Celebrities and influencers are different. Admittedly, many of them share their meals, holidays and relationships online, and it could be argued that they cannot complain about attention they have encouraged. However, choosing to show part of one's life is not the same as giving up all of it. The phone-hacking scandal in Britain showed how far the press could go, and Prince Harry's long legal battle proves that the question is far from settled. In my opinion, a simple test should be applied: does this information serve the public interest, or does it only satisfy curiosity? Health, children and homes should remain private, whoever we are. »",
                "Vérifier : environ 190 mots, deux catégories distinguées, des modaux variés (should, must, could, cannot) et des expressions de nuance (Admittedly, it could be argued, In my opinion).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la presse et de la vie privée dans l'ordre chronologique.",
            items: [
              "1890 : Warren et Brandeis publient « The Right to Privacy »",
              "1960 : La Dolce Vita de Fellini donne naissance au mot paparazzi",
              "1964 : arrêt New York Times Co. v. Sullivan de la Cour suprême",
              "1997 : mort de Diana à Paris",
              "2011 : fermeture du News of the World après le scandale des écoutes",
              "2012 : publication du rapport Leveson",
              "2023 : la Haute Cour donne raison au prince Harry contre Mirror Group Newspapers",
            ],
          },
          quiz: [
            { q: "The Leveson Inquiry was set up after...", options: ["the death of Princess Diana", "the phone-hacking scandal", "the Snowden revelations", "Brexit"], answer: 1, why: "Elle a été lancée en 2011 après le scandale des écoutes du News of the World." },
            { q: "Choose the best modal: « Journalists ___ respect the privacy of children. »", options: ["should", "might", "can't", "needn't"], answer: 0, why: "Should exprime un conseil ou une obligation morale." },
            { q: "In the United States, the First Amendment protects...", options: ["the right to bear arms", "the right to a jury trial in civil cases", "free speech and a free press"], answer: 2, why: "Le Premier Amendement (1791) garantit notamment la liberté d'expression et la liberté de la presse." },
            { q: "« The paparazzi might have caused the accident » expresses...", options: ["a certainty about the past", "a possibility about the past", "an obligation in the present", "a habit"], answer: 1, why: "Might have + participe passé exprime une possibilité concernant le passé." },
            { q: "Information that is « in the public interest » is...", options: ["whatever sells newspapers", "anything the public is curious about", "gossip about famous people", "what citizens need to know"], answer: 3, why: "L'intérêt public désigne ce que les citoyens ont besoin de savoir, et non ce qui excite leur curiosité." },
          ],
          trap: "Confondre public interest (l'intérêt public) et « what the public is interested in » (la curiosité), ou employer must pour un simple conseil là où should convient.",
          method: "Dans un essai sur ce thème, appliquez systématiquement le test de l'intérêt public à chaque exemple : il vous donne un critère clair pour nuancer et évite les réponses tout blanc ou tout noir.",
        },
      ],
    },
    /* ==================================================================== */
    /* TERRITOIRE ET MÉMOIRE                                                */
    /* ==================================================================== */
    {
      id: 'territoire-memoire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'commemorations',
          title: "Monuments et commémorations dans le monde anglophone",
          minutes: 30,
          objectives: [
            "Identifier les grandes commémorations du monde anglophone et leur signification.",
            "Analyser un monument ou un mémorial : forme, symboles, message.",
            "Employer le prétérit, le present perfect et le passif pour situer un événement et sa mémoire.",
            "Expliquer le rôle de la mémoire collective dans la construction d'une nation.",
          ],
          course: [
            {
              heading: "Mémoire collective et commémoration",
              paragraphs: [
                "Une société ne se souvient pas de tout : elle choisit ce qu'elle veut transmettre. Le sociologue français Maurice Halbwachs a montré dès 1925 (Les Cadres sociaux de la mémoire) que la mémoire est collective : nous nous souvenons à l'intérieur de groupes (famille, nation, communauté) qui donnent un sens au passé. L'historien Pierre Nora a ensuite parlé de « lieux de mémoire » (sites of memory) : monuments, dates, symboles où une nation reconnaît son histoire.",
                "Commémorer (to commemorate), c'est rappeler ensemble un événement passé pour lui donner un sens dans le présent. Une commémoration associe un lieu (un monument, un mémorial), une date (un anniversaire, un jour férié) et des rituels (minute de silence, dépôt de gerbe, lecture de noms). Elle dit autant de choses sur la société qui commémore que sur l'événement commémoré.",
              ],
              box: { label: "Vocabulaire", text: "To commemorate, to remember, to honour, to pay tribute to (rendre hommage à), a memorial, a monument, a wreath (une gerbe, une couronne), to lay a wreath, a minute's silence, a veteran (un ancien combattant), the fallen (les morts au combat)." },
            },
            {
              heading: "Le Royaume-Uni et le Commonwealth : Remembrance",
              paragraphs: [
                "Le 11 novembre commémore l'armistice du 11 novembre 1918, entré en vigueur à 11 heures. Au Royaume-Uni et dans plusieurs pays du Commonwealth, on observe ce jour-là deux minutes de silence à 11 heures (Armistice Day ou Remembrance Day). La cérémonie nationale a lieu le Remembrance Sunday, deuxième dimanche de novembre, au Cenotaph de Whitehall, à Londres : ce monument aux morts dessiné par l'architecte Edwin Lutyens a été inauguré dans sa version définitive le 11 novembre 1920, le jour où un soldat inconnu (the Unknown Warrior) était inhumé à l'abbaye de Westminster.",
                "Le symbole de cette mémoire est le coquelicot rouge (the poppy). Les coquelicots poussaient sur les champs de bataille dévastés des Flandres ; le médecin militaire canadien John McCrae les évoque en 1915 dans son poème « In Flanders Fields ». Depuis 1921, la Royal British Legion vend des coquelicots en papier au profit des anciens combattants (the Poppy Appeal). Les cérémonies reprennent souvent les mots « Lest we forget » (de peur que nous n'oubliions), tirés d'un poème de Rudyard Kipling, « Recessional » (1897).",
                "En Australie et en Nouvelle-Zélande, l'Anzac Day, le 25 avril, commémore le débarquement des soldats de l'Australian and New Zealand Army Corps à Gallipoli, dans l'Empire ottoman, en 1915. Cette bataille meurtrière est considérée comme un moment fondateur de l'identité nationale des deux pays, ce qui montre qu'une défaite militaire peut devenir un récit national.",
              ],
              box: { label: "Repère", text: "11 novembre 1918 : armistice. 1915 : « In Flanders Fields » (John McCrae). 1920 : Cenotaph définitif et tombe du Soldat inconnu à Westminster. 1921 : premier Poppy Appeal. 25 avril : Anzac Day (Gallipoli, 1915)." },
            },
            {
              heading: "Les États-Unis : mémoriaux et jours fériés",
              paragraphs: [
                "Aux États-Unis, le Memorial Day (dernier lundi de mai) honore les militaires morts au service du pays, alors que le Veterans Day (11 novembre) rend hommage à tous les anciens combattants. À Washington, le National Mall réunit les grands mémoriaux de la nation. Le Lincoln Memorial (1922) est devenu lui-même un lieu d'histoire : c'est sur ses marches que Martin Luther King a prononcé son discours « I Have a Dream », le 28 août 1963.",
                "Le Vietnam Veterans Memorial, inauguré en 1982, a été conçu par Maya Lin, alors étudiante en architecture à Yale. C'est un long mur de granit noir poli, enfoncé dans le sol en forme de V, sur lequel sont gravés les noms de plus de 58 000 Américains morts ou disparus. Critiqué au départ pour sa sobriété, sans statue héroïque, il est devenu l'un des mémoriaux les plus visités : les visiteurs y voient leur reflet parmi les noms, touchent les lettres, laissent des objets.",
                "À New York, le National September 11 Memorial, inauguré en 2011 pour le dixième anniversaire des attentats, occupe l'emplacement des tours jumelles : deux grands bassins aux cascades descendant dans le vide, bordés des noms des victimes. D'autres dates reflètent l'évolution de la mémoire nationale : le Martin Luther King Jr. Day (troisième lundi de janvier, célébré depuis 1986) et Juneteenth, jour férié fédéral depuis 2021, qui commémore le 19 juin 1865, date à laquelle les esclaves du Texas, à Galveston, ont appris qu'ils étaient libres.",
              ],
              box: { label: "À retenir", text: "Memorial Day : les morts au combat. Veterans Day : tous les anciens combattants. Vietnam Veterans Memorial (Maya Lin, 1982) : un mur de noms, sans héros. Juneteenth : jour férié fédéral depuis 2021." },
            },
            {
              heading: "Langue : situer dans le passé et parler de la mémoire",
              paragraphs: [
                "Le prétérit situe un événement daté, coupé du présent : « The war ended in 1918. » ; « The memorial was unveiled in 1982. » Il s'emploie avec ago, last, in + date, when. Le present perfect relie le passé au présent : « The poppy has been a symbol of remembrance since 1921. » ; « Millions of people have visited the Wall. » Il s'emploie avec since (point de départ), for (durée), ever, never, already. Ne dites jamais « The war has ended in 1918 ».",
                "Le passif est très fréquent pour parler des monuments, car ce qui compte est le monument lui-même : « The Cenotaph was designed by Edwin Lutyens. » ; « The names of the dead are engraved on the wall. » ; « A wreath will be laid at 11 am. » Pour analyser un mémorial, organisez votre description : situation (it is located in...), forme et matériaux (it is made of...), symboles (it symbolises..., it represents...), message et réception (it invites visitors to...).",
              ],
              box: { label: "Règle", text: "Prétérit : passé daté et coupé du présent (in 1918, ago, last year). Present perfect : lien avec le présent (since 1921, for a century, ever, never). Passif : the memorial was unveiled, names are engraved." },
            },
          ],
          keyPoints: [
            "Mémoire collective (Halbwachs) : une société choisit ce qu'elle transmet ; lieux de mémoire (Nora).",
            "11 novembre : armistice de 1918, deux minutes de silence à 11 heures ; Remembrance Sunday au Cenotaph.",
            "Le poppy : souvenir des Flandres, « In Flanders Fields » (McCrae, 1915), Poppy Appeal depuis 1921.",
            "Anzac Day, le 25 avril : Gallipoli (1915), moment fondateur pour l'Australie et la Nouvelle-Zélande.",
            "États-Unis : Memorial Day, Veterans Day, Vietnam Veterans Memorial (Maya Lin, 1982), Juneteenth (2021).",
            "Prétérit pour le daté (in 1918), present perfect pour le lien au présent (since 1921), passif pour les monuments.",
          ],
          example: {
            statement: "Présentez et analysez en anglais, en cinq ou six phrases, le Vietnam Veterans Memorial de Washington.",
            solution: [
              "Situer et dater (prétérit, passif) : « The Vietnam Veterans Memorial is located on the National Mall in Washington, D.C. It was designed by Maya Lin, a young architecture student, and unveiled in 1982. »",
              "Décrire la forme et les matériaux : « It is a long V-shaped wall of polished black granite, cut into the ground, on which the names of more than 58,000 Americans who died or went missing are engraved. »",
              "Interpréter les symboles : « Unlike traditional war memorials, it shows no heroic soldier. The wall looks like a wound in the earth, and its shiny surface reflects the faces of visitors among the names. »",
              "Évoquer la réception (present perfect) : « At first, some critics found it too sober, but it has become one of the most visited memorials in the country. »",
              "Conclure sur le message : « It does not celebrate a victory: it invites visitors to remember individuals and to reflect on the cost of war. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Prétérit ou present perfect ? Conjuguez le verbe entre parenthèses : a) The First World War (end) ___ in 1918. b) The poppy (be) ___ a symbol of remembrance since 1921. c) Maya Lin (design) ___ the memorial when she was a student. d) Millions of people (visit) ___ the 9/11 Memorial since it opened. e) Juneteenth (become) ___ a federal holiday in 2021. f) I (never / see) ___ the Cenotaph.",
              hint: "Cherchez les indices : une date ou when appellent le prétérit ; since, never ou un lien avec le présent appellent le present perfect.",
              solution: [
                "a) ended : date passée (in 1918), prétérit.",
                "b) has been : since 1921, la situation dure jusqu'à aujourd'hui.",
                "c) designed : action passée datée par la proposition « when she was a student ».",
                "d) have visited : since it opened, bilan jusqu'à aujourd'hui.",
                "e) became : date passée (in 2021).",
                "f) have never seen : expérience jusqu'à maintenant, sans date.",
              ],
            },
            {
              level: 2,
              statement: "Texte d'entraînement inventé : « In the village of Ashcombe, the war memorial had been neglected for decades. Moss covered the names, and some had become impossible to read. Last year, a group of secondary school pupils decided to research the lives of the 23 men listed on it. They found letters, photographs and even a diary in the local archives. On 11 November, each pupil read aloud the story of one soldier before the two-minute silence. “They are not just names anymore,” said Ella, 17. » 1) Dans quel état était le monument ? 2) Qu'ont fait les élèves, et avec quelles sources ? 3) Comment la cérémonie a-t-elle changé ? 4) Expliquez la phrase d'Ella. 5) Relevez un verbe au past perfect et justifiez son emploi.",
              hint: "Distinguez l'avant (le monument oublié), l'action (la recherche) et l'après (la cérémonie), puis réfléchissez à ce que signifie se souvenir d'un individu plutôt que d'un nom.",
              solution: [
                "1) Il était laissé à l'abandon depuis des décennies : la mousse couvrait les noms, dont certains étaient devenus illisibles.",
                "2) Des lycéens ont fait des recherches sur la vie des 23 hommes inscrits, à partir de lettres, de photos et d'un journal intime trouvés aux archives locales (données fictives).",
                "3) Le 11 novembre, chaque élève a lu l'histoire d'un soldat avant les deux minutes de silence : la cérémonie est devenue personnelle et vivante.",
                "4) Les soldats ne sont plus de simples noms gravés : ils sont redevenus des personnes, avec une histoire. La mémoire passe de l'abstraction au récit individuel.",
                "5) « had been neglected » (ou « had become ») : le past perfect marque une situation antérieure à l'action passée principale (la décision des élèves l'an dernier).",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « More than a century after 1918, should we still commemorate wars that no living person remembers? » Rédigez un essai de 150 à 180 mots en anglais, en vous appuyant sur des exemples précis.",
              hint: "Opposez l'argument de la distance (plus aucun témoin, risque de rituel vide) et les fonctions de la commémoration (hommage, transmission, réflexion sur la paix), puis montrez comment elle peut évoluer.",
              solution: [
                "Problématique : la commémoration a-t-elle encore un sens quand plus personne n'a vécu l'événement ?",
                "Plan : 1) l'objection : un rituel qui peut sembler vide ; 2) les fonctions qui demeurent : hommage, transmission, réflexion ; 3) une position : commémorer autrement, par les récits individuels et l'éducation.",
                "Proposition : « The last veterans of the First World War died years ago, and for many young people, 1918 seems as distant as the Middle Ages. Some argue that ceremonies such as Remembrance Sunday have become empty rituals, repeated out of habit. However, commemoration is not only about personal memories. First, it is a way of paying tribute to millions of people who died, often very young. Second, it passes on a lesson: the poppy reminds us of the human cost of war, not of its glory. Finally, commemorations can evolve. The Vietnam Veterans Memorial, which lists individual names instead of celebrating heroes, shows that remembering can mean reflecting rather than glorifying. Projects in which pupils research the soldiers of their own town also turn names into stories. In my opinion, we should keep commemorating these wars, as long as we use them to think about peace today. »",
                "Vérifier : environ 165 mots, des exemples précis (Remembrance Sunday, poppy, Vietnam Veterans Memorial), des connecteurs (However, First, Second, Finally), un prétérit et un present perfect bien employés.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de la mémoire des guerres dans l'ordre chronologique.",
            items: [
              "John McCrae écrit « In Flanders Fields »",
              "Inauguration du Cenotaph définitif et inhumation du Soldat inconnu à Westminster",
              "Premier Poppy Appeal de la Royal British Legion",
              "Inauguration du Vietnam Veterans Memorial à Washington",
              "Ouverture du National September 11 Memorial à New York",
              "Juneteenth devient un jour férié fédéral",
            ],
          },
          quiz: [
            { q: "Why do many British people wear a red poppy in November?", options: ["to celebrate the harvest season in the countryside", "to remember those who died in war", "to support farmers", "to mark the King's official birthday"], answer: 1, why: "Le coquelicot rappelle les champs de bataille des Flandres et rend hommage aux morts des guerres." },
            { q: "The Vietnam Veterans Memorial was designed by...", options: ["Edwin Lutyens", "John McCrae", "Robert Moses", "Maya Lin"], answer: 3, why: "Maya Lin, alors étudiante à Yale, a conçu ce mur de granit noir inauguré en 1982." },
            { q: "Choose the correct sentence.", options: ["The war ended in 1918.", "The war has ended in 1918.", "The war was ending in 1918."], answer: 0, why: "Avec une date passée (in 1918), on emploie le prétérit simple." },
            { q: "Anzac Day commemorates...", options: ["the end of the Second World War", "the arrival of the First Fleet in 1788", "the Gallipoli landing of 1915", "the Battle of Britain"], answer: 2, why: "Le 25 avril rappelle le débarquement des soldats australiens et néo-zélandais à Gallipoli en 1915." },
            { q: "Complete: « The poppy ___ a symbol of remembrance since 1921. »", options: ["is", "was", "has been", "will have been"], answer: 2, why: "Since 1921 indique une situation qui dure jusqu'à aujourd'hui : present perfect." },
          ],
          trap: "Employer le present perfect avec une date passée (« The memorial has been unveiled in 1982 ») ou traduire « depuis 1921 » par un présent simple (« The poppy is a symbol since 1921 »).",
          method: "Pour analyser un monument, suivez toujours la même grille en quatre questions : où et quand ? quelle forme et quels matériaux ? quels symboles ? quel message et quelle réception ? Vous ne serez jamais à court d'idées à l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'memoires-contestees',
          title: "Mémoires contestées : statues et débats",
          minutes: 35,
          objectives: [
            "Expliquer pourquoi certains monuments sont contestés dans le monde anglophone.",
            "Présenter des exemples précis : Colston à Bristol, Rhodes Must Fall, les monuments confédérés aux États-Unis.",
            "Exposer des arguments opposés et les relier par des connecteurs de concession.",
            "Prendre position de façon nuancée dans un débat de mémoire.",
          ],
          course: [
            {
              heading: "Une statue n'est pas un livre d'histoire",
              paragraphs: [
                "L'histoire cherche à comprendre le passé de façon critique, en confrontant les sources ; la mémoire, elle, est sélective, affective et souvent politique. Une statue relève de la mémoire : elle n'explique pas, elle honore. Elle dit qui une société a voulu célébrer, à quel moment et pour quelles raisons. Elle renseigne donc autant sur ceux qui l'ont érigée que sur la personne représentée.",
                "Aux États-Unis, beaucoup de monuments aux chefs de la Confédération (les États du Sud qui ont fait sécession en 1861 pour défendre l'esclavage) n'ont pas été érigés juste après la guerre de Sécession (1861-1865), mais surtout au début du XXe siècle, à l'époque des lois de ségrégation dites Jim Crow, puis pendant la lutte pour les droits civiques des années 1950 et 1960. Ils affirmaient la domination blanche autant qu'ils honoraient des soldats.",
                "Quand les valeurs d'une société changent, certains monuments deviennent contestés (contested). Le mouvement Black Lives Matter, relancé après la mort de George Floyd, tué par un policier à Minneapolis le 25 mai 2020, a fait de ces statues un enjeu mondial : elles posent la question de savoir qui l'espace public honore, et au nom de qui.",
              ],
              box: { label: "À retenir", text: "Histoire : connaissance critique du passé. Mémoire : rapport sélectif et affectif au passé. Une statue honore plus qu'elle n'explique ; elle reflète les valeurs de l'époque où elle a été érigée." },
            },
            {
              heading: "Au Royaume-Uni et en Afrique du Sud : Colston et Rhodes",
              paragraphs: [
                "Edward Colston (1636-1721), marchand de Bristol, a été membre puis vice-gouverneur de la Royal African Company, compagnie qui a déporté des dizaines de milliers d'Africains réduits en esclavage. Il a aussi consacré une partie de sa fortune à des écoles et à des œuvres charitables de la ville, qui lui a élevé une statue en 1895. Le 7 juin 2020, lors d'une manifestation Black Lives Matter, des manifestants l'ont renversée et jetée dans le port. Repêchée quelques jours plus tard, elle a été exposée au musée M Shed de Bristol, couchée et couverte des graffitis des manifestants. En janvier 2022, quatre personnes poursuivies pour dégradation ont été acquittées.",
                "En mars 2015, des étudiants de l'université du Cap, en Afrique du Sud, lancent le mouvement Rhodes Must Fall contre la statue de Cecil Rhodes, homme d'affaires et dirigeant colonial britannique de la fin du XIXe siècle, symbole de l'impérialisme. La statue est retirée dès avril 2015. Le mouvement gagne l'université d'Oxford, où l'Oriel College possède une statue de Rhodes, son bienfaiteur ; en 2021, le collège renonce pourtant à la retirer, invoquant les coûts et les obstacles réglementaires.",
                "En 2021, le gouvernement britannique défend une ligne résumée par la formule « retain and explain » : conserver les monuments contestés en les accompagnant d'explications historiques. À Bristol, l'artiste Marc Quinn installe en juillet 2020 sur le socle vide une sculpture représentant une manifestante, Jen Reid, le poing levé ; elle est retirée dès le lendemain par la municipalité.",
              ],
              box: { label: "Repère", text: "1895 : statue de Colston à Bristol. 2015 : Rhodes Must Fall, au Cap. 25 mai 2020 : mort de George Floyd. 7 juin 2020 : la statue de Colston jetée dans le port. 2021 : Oriel College garde sa statue de Rhodes." },
            },
            {
              heading: "Aux États-Unis : les monuments confédérés",
              paragraphs: [
                "En août 2017, à Charlottesville (Virginie), des groupes suprémacistes blancs organisent un rassemblement, « Unite the Right », pour protester contre le projet de retirer une statue du général confédéré Robert E. Lee. Une contre-manifestante, Heather Heyer, est tuée par une voiture lancée dans la foule. Le drame relance le débat national sur ces monuments.",
                "Après 2020, de nombreuses villes retirent leurs monuments confédérés. À Richmond, ancienne capitale de la Confédération, l'immense statue de Lee qui dominait Monument Avenue est démontée en septembre 2021 ; celle de Charlottesville l'avait été en juillet 2021. D'autres figures sont discutées, comme Christophe Colomb, dont la journée (Columbus Day) est concurrencée dans de nombreux États et villes par l'Indigenous Peoples' Day, qui rend hommage aux peuples autochtones.",
              ],
            },
            {
              heading: "Les arguments du débat",
              paragraphs: [
                "Pour le maintien : retirer une statue reviendrait à effacer l'histoire (to erase history) ; il faut juger les hommes selon les valeurs de leur temps ; où s'arrêter (the slippery slope argument) si l'on retire toutes les figures imparfaites ? ; une décision de ce type doit être prise démocratiquement, non par une foule. Pour le retrait : une statue honore et ne raconte pas l'histoire ; l'histoire s'apprend dans les livres et les musées ; il est blessant pour les descendants des victimes de voir leurs bourreaux glorifiés dans l'espace commun.",
                "Entre les deux, des solutions intermédiaires existent : ajouter des plaques explicatives (contextualisation), déplacer les statues dans des musées où elles deviennent des objets d'étude, ériger de nouveaux monuments qui racontent l'autre versant de l'histoire, ou laisser visibles les traces de la contestation. Le cas de Colston, exposé au musée avec ses graffitis, montre qu'un monument renversé peut lui-même devenir un document d'histoire.",
              ],
              box: { label: "Vocabulaire", text: "To topple, to pull down, to take down (renverser, retirer), a plinth (un socle), to erase history, to glorify, to contextualise, a plaque, the slippery slope, a counter-monument." },
            },
            {
              heading: "Langue : concéder et réfuter",
              paragraphs: [
                "Concéder, c'est reconnaître la valeur d'un argument adverse avant de le dépasser : une démarche essentielle dans un débat de mémoire. Although et even though sont suivis d'une proposition (sujet et verbe) : « Although Colston funded schools, he profited from the slave trade. » Despite et in spite of sont suivis d'un nom ou d'un verbe en -ing : « Despite his generosity... » ; « In spite of being a benefactor... ». Ne dites jamais « despite of ».",
                "D'autres outils : while (bien que, en début de phrase), admittedly et granted (certes), it is true that... but..., suivis d'un connecteur de réfutation : however, nevertheless, yet, still. Exemple : « Admittedly, removing a statue does not change the past. Nevertheless, it changes what we choose to honour today. »",
              ],
              box: { label: "Règle", text: "Although / even though + sujet + verbe. Despite / in spite of + nom ou verbe en -ing (jamais « despite of »). Admittedly, granted, it is true that... + however, nevertheless, yet." },
            },
          ],
          keyPoints: [
            "Une statue honore plus qu'elle n'explique : elle reflète les valeurs de l'époque qui l'a érigée.",
            "Colston, marchand lié à la traite, renversé à Bristol le 7 juin 2020, aujourd'hui objet de musée.",
            "Rhodes Must Fall : statue retirée au Cap en 2015 ; Oriel College (Oxford) garde la sienne en 2021.",
            "Monuments confédérés : Charlottesville (2017), retrait des statues de Lee en 2021.",
            "Arguments : effacer l'histoire, slippery slope ; honorer n'est pas expliquer, souffrance des descendants ; solutions : contextualiser, déplacer.",
            "Concession : although + proposition ; despite + nom ou -ing ; admittedly... nevertheless...",
          ],
          example: {
            statement: "Rédigez en anglais un paragraphe équilibré de 70 à 90 mots sur le renversement de la statue de Colston, en utilisant au moins trois outils de concession ou de réfutation.",
            solution: [
              "Présenter les faits : « On 7 June 2020, protesters in Bristol pulled down the statue of Edward Colston and threw it into the harbour. »",
              "Concéder l'argument du maintien : « Although Colston left money to schools and charities, ... » ; et l'argument de la légalité : « Admittedly, toppling a statue is illegal... »",
              "Réfuter avec l'argument principal : « ...his fortune was built on the slave trade » ; « Nevertheless, the statue had been criticised for decades. »",
              "Conclure par une solution : le musée.",
              "Réponse : « On 7 June 2020, protesters in Bristol pulled down the statue of Edward Colston and threw it into the harbour. Although Colston left money to schools and charities, his fortune was partly built on the slave trade. Admittedly, toppling a statue is not a democratic way of changing a city. Nevertheless, many residents had been asking for its removal for years. Despite the controversy, the statue now has a new role: displayed in a museum, it teaches history instead of glorifying a slave trader. » (environ 85 mots)",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec although, despite ou nevertheless : a) ___ the protests, the statue stayed in place for years. b) ___ he was a benefactor, he made money from slavery. c) The statue was illegal to remove. ___, many people celebrated its fall. d) ___ being criticised, the college kept the statue. e) ___ the council agreed, nothing changed for months.",
              hint: "Regardez ce qui suit le blanc : une proposition complète (sujet + verbe), un nom ou un verbe en -ing, ou un début de phrase après un point.",
              solution: [
                "a) Despite : suivi d'un nom (the protests).",
                "b) Although : suivi d'une proposition (he was a benefactor).",
                "c) Nevertheless : connecteur de réfutation en début de phrase, après un point.",
                "d) Despite : suivi d'un verbe en -ing (being criticised).",
                "e) Although : suivi d'une proposition (the council agreed).",
              ],
            },
            {
              level: 2,
              statement: "Classez chaque argument en trois catégories (pour le retrait, pour le maintien, solution intermédiaire) : a) « Statues honour people; they don't teach history. » b) « If we take this one down, where will it stop? » c) « Let's add a plaque explaining his role in the slave trade. » d) « Seeing him glorified every day is painful for descendants of enslaved people. » e) « We must not erase our history. » f) « The statue could be moved to a museum. » g) « This decision should be made by elected officials, not by a crowd. »",
              hint: "Repérez si l'argument défend la statue, l'attaque ou propose de la transformer sans la détruire.",
              solution: [
                "Pour le retrait : a) une statue honore et n'enseigne pas ; d) la souffrance des descendants des victimes.",
                "Pour le maintien : b) l'argument de la pente glissante (slippery slope) ; e) l'idée de ne pas effacer l'histoire ; g) l'exigence d'une décision démocratique (qui peut aussi aboutir au retrait, mais conteste ici la méthode).",
                "Solutions intermédiaires : c) la contextualisation par une plaque ; f) le déplacement dans un musée.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Should statues of controversial historical figures be taken down? » Rédigez un essai de 180 à 200 mots en anglais, avec au moins deux exemples précis et trois outils de concession.",
              hint: "Ne choisissez pas une réponse caricaturale : présentez les deux camps, puis défendez une position argumentée (par exemple, la contextualisation ou le musée).",
              solution: [
                "Problématique : faut-il retirer les statues de figures historiques controversées, au risque d'effacer l'histoire, ou les maintenir, au risque de continuer à les honorer ?",
                "Plan : 1) les arguments du maintien ; 2) les arguments du retrait ; 3) une position : déplacer et expliquer.",
                "Proposition : « In 2020, statues became battlegrounds. In Bristol, protesters threw Edward Colston into the harbour, while in the United States, cities removed monuments to Confederate generals. Should such statues be taken down? Admittedly, there are serious arguments for keeping them. They are part of our heritage, and some fear that removing them would erase history. Moreover, it is difficult to judge people from the past by today's values. However, a statue is not a history lesson: it is a tribute. Many Confederate monuments were built in the early twentieth century, during segregation, to celebrate white supremacy rather than to remember the past. Although these statues were once accepted, keeping them in public squares means continuing to honour men who defended slavery. In my view, the best solution is neither destruction nor indifference. Controversial statues should be moved to museums, where they can be explained, as Colston's statue has been in Bristol. History is not erased when a statue falls; it is erased when we stop teaching it. »",
                "Vérifier : environ 190 mots, deux exemples (Colston, monuments confédérés), des outils de concession et de réfutation (Admittedly, However, Although, neither... nor), une position nuancée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Statues, mémoire et langue de la concession.",
            statements: [
              { text: "Edward Colston's statue was thrown into Bristol harbour in June 2020.", true: true, why: "Elle a été renversée le 7 juin 2020 lors d'une manifestation Black Lives Matter." },
              { text: "Most Confederate monuments were built right after the Civil War, in 1865 and 1866.", true: false, why: "Beaucoup ont été érigés au début du XXe siècle et pendant la lutte pour les droits civiques." },
              { text: "The Rhodes Must Fall movement started at the University of Cape Town in 2015.", true: true, why: "La statue de Cecil Rhodes y a été retirée dès avril 2015." },
              { text: "Oriel College, Oxford, removed its statue of Cecil Rhodes in 2021.", true: false, why: "Le collège a renoncé à la retirer, en invoquant les coûts et les obstacles réglementaires." },
              { text: "« Despite » can be followed by a subject and a verb: « Despite it was old ».", true: false, why: "Despite est suivi d'un nom ou d'un verbe en -ing ; avec une proposition, on emploie although." },
              { text: "The 2017 Charlottesville rally was linked to a statue of Robert E. Lee.", true: true, why: "Les suprémacistes protestaient contre le projet de retirer la statue du général confédéré." },
              { text: "« Retain and explain » means destroying statues and replacing them.", true: false, why: "La formule signifie conserver les monuments en les accompagnant d'explications historiques." },
            ],
          },
          quiz: [
            { q: "Edward Colston made much of his fortune through...", options: ["the cotton mills of Manchester", "the slave trade", "the East India tea trade", "shipbuilding in Glasgow"], answer: 1, why: "Il a été membre puis vice-gouverneur de la Royal African Company, qui pratiquait la traite des esclaves." },
            { q: "Choose the correct sentence.", options: ["Despite the statue was very old, they removed it anyway.", "Despite of its age, they removed it.", "Although it was old, they removed it."], answer: 2, why: "Although est suivi d'une proposition ; despite (sans of) est suivi d'un nom ou d'un verbe en -ing." },
            { q: "The « Rhodes Must Fall » campaign started in...", options: ["Oxford", "Cape Town", "Johannesburg", "Bristol"], answer: 1, why: "Le mouvement est né en 2015 à l'université du Cap, avant de gagner Oxford." },
            { q: "« Retain and explain » means a statue should be...", options: ["kept, with added context", "melted down and recycled", "sold to a private collector abroad", "replaced with a modern one"], answer: 0, why: "La formule défendue par le gouvernement britannique en 2021 consiste à conserver en expliquant." },
            { q: "Which word introduces a concession?", options: ["consequently", "moreover", "because", "admittedly"], answer: 3, why: "Admittedly (certes) reconnaît un argument adverse avant de le nuancer ou de le réfuter." },
          ],
          trap: "Écrire « despite of » ou faire suivre despite d'une proposition (« despite it was illegal »), et, sur le fond, réduire le débat à « détruire ou garder » sans évoquer les solutions intermédiaires.",
          method: "Pour chaque débat de mémoire, préparez un tableau à trois colonnes (retrait, maintien, compromis) avec un exemple daté par colonne : votre essai aura naturellement une structure dialectique et des preuves précises.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sense-of-place',
          title: "Territoires et identités : « a sense of place »",
          minutes: 30,
          objectives: [
            "Définir la notion de « sense of place » et le lien entre territoire, mémoire et identité.",
            "Présenter des exemples de territoires porteurs d'identité dans le monde anglophone.",
            "Décrire un lieu et exprimer son attachement à l'aide des propositions relatives et d'un lexique précis.",
            "Analyser la manière dont la littérature exprime l'attachement à un lieu.",
          ],
          course: [
            {
              heading: "Qu'est-ce que « a sense of place » ?",
              paragraphs: [
                "L'expression a sense of place désigne l'attachement à un lieu et le sentiment qu'il possède une identité propre. Le géographe sino-américain Yi-Fu Tuan (Space and Place, 1977) distingue l'espace (space), étendue abstraite que l'on traverse, et le lieu (place), espace chargé de sens par l'expérience, les souvenirs et les relations. Une rue quelconque devient un lieu quand on y a grandi, aimé ou souffert. Il a aussi forgé le mot topophilia pour désigner le lien affectif entre les êtres humains et leur environnement.",
                "Ce sentiment est lié à l'identité : dire « I'm from Glasgow » ou « I'm a Texan », c'est se définir par un territoire. Il est souvent plus fort quand le lieu est perdu ou menacé : l'exil, l'émigration ou la transformation d'un quartier font naître la nostalgie. Le gallois possède un mot réputé intraduisible, hiraeth, qui désigne le désir mélancolique d'un foyer ou d'un pays auquel on ne peut pas revenir, ou qui n'a peut-être jamais existé.",
              ],
              box: { label: "Vocabulaire", text: "A sense of belonging (sentiment d'appartenance), roots (racines), homeland (patrie, terre natale), homesick (qui a le mal du pays), heritage (patrimoine), landscape (paysage), to settle (s'installer), to be uprooted (être déraciné)." },
            },
            {
              heading: "Terres, peuples et mémoire",
              paragraphs: [
                "Pour les peuples aborigènes et insulaires du détroit de Torres, en Australie, la terre (Country) n'est pas une propriété : elle est liée aux ancêtres, à la loi, aux récits et à l'identité de chacun. Uluru, le grand monolithe du centre du pays, a été restitué en 1985 à ses propriétaires traditionnels, les Anangu, qui le cogèrent avec l'État ; l'ascension du rocher, qu'ils demandaient depuis longtemps de ne pas faire, est interdite depuis octobre 2019.",
                "Aux États-Unis, en 2016 et 2017, la tribu sioux de Standing Rock et de nombreux soutiens se sont opposés au tracé de l'oléoduc Dakota Access, qui menaçait selon eux leur eau et des sites sacrés : un conflit où se mêlaient environnement, souveraineté et mémoire de la dépossession. Dans les îles Britanniques, la mémoire des Highland Clearances, expulsions massives de paysans des Highlands écossaises aux XVIIIe et XIXe siècles au profit de l'élevage des moutons, et celle de la Grande Famine irlandaise (1845-1852), qui a provoqué une émigration massive, nourrissent l'attachement des diasporas écossaise et irlandaise à la terre de leurs ancêtres.",
              ],
              box: { label: "Repère", text: "XVIIIe et XIXe siècles : Highland Clearances. 1845-1852 : Grande Famine irlandaise. 1985 : Uluru rendu aux Anangu. 2016-2017 : Standing Rock contre l'oléoduc Dakota Access. 2019 : ascension d'Uluru interdite." },
            },
            {
              heading: "Le lieu dans la littérature",
              paragraphs: [
                "La littérature anglophone est riche d'écrivains attachés à un territoire. Au début du XIXe siècle, William Wordsworth et les poètes romantiques font de la région des lacs (the Lake District), dans le nord-ouest de l'Angleterre, un paysage poétique ; la région est inscrite au patrimoine mondial de l'UNESCO en 2017. Thomas Hardy situe ses romans dans le Wessex, région à demi imaginaire du sud-ouest de l'Angleterre inspirée de son Dorset natal.",
                "Aux États-Unis, William Faulkner invente le comté de Yoknapatawpha, dans le Mississippi, cadre de nombreux romans sur la mémoire du Sud, et John Steinbeck fait de la vallée de Salinas, en Californie, le décor de plusieurs de ses œuvres. En Irlande du Nord, Seamus Heaney, prix Nobel de littérature en 1995, enracine sa poésie dans la campagne de son enfance : dans « Digging » (1966), il compare son stylo à la bêche avec laquelle son père et son grand-père creusaient la terre, et fait de l'écriture une autre manière de creuser ses racines.",
              ],
              box: { label: "À retenir", text: "Wordsworth et le Lake District, Hardy et le Wessex, Faulkner et Yoknapatawpha, Steinbeck et la vallée de Salinas, Heaney et la campagne d'Irlande du Nord : le lieu devient mémoire et identité." },
            },
            {
              heading: "Langue : décrire un lieu avec les propositions relatives",
              paragraphs: [
                "Les pronoms relatifs : who pour les personnes, which pour les choses, that pour les deux (seulement dans une relative déterminative), whose pour la possession, where pour le lieu, when pour le moment. « This is the village where my grandmother was born. » ; « The farmer whose land was sold left the region. » ; « I remember the summer when the factory closed. »",
                "La relative déterminative (defining) est indispensable au sens et n'a pas de virgules : « The town that I love is small. » Le pronom complément peut y être omis : « the place I grew up in ». La relative appositive (non-defining) apporte une information supplémentaire, entre virgules, et n'accepte jamais that : « Glasgow, which is Scotland's largest city, lies on the River Clyde. » En registre soutenu, la préposition se place avant le pronom : « the region from which I come ».",
                "Pour décrire un lieu avec précision, variez les adjectifs : bustling (animé), sleepy (endormi), run-down (délabré), picturesque (pittoresque), windswept (balayé par les vents), sprawling (tentaculaire) ; et les expressions : nestled in a valley (niché dans une vallée), rolling hills (collines ondulantes), on the outskirts of (à la périphérie de).",
              ],
              box: { label: "Règle", text: "Who (personnes), which (choses), that (déterminative seulement), whose (possession), where (lieu), when (temps). Appositive : virgules, jamais that. Pronom complément omissible dans une déterminative." },
            },
          ],
          keyPoints: [
            "A sense of place : attachement à un lieu et identité de ce lieu ; space (abstrait) ≠ place (vécu), selon Yi-Fu Tuan.",
            "Hiraeth (gallois) : désir mélancolique d'un foyer perdu ; homesick, roots, belonging.",
            "Australie : Country, Uluru rendu aux Anangu (1985), ascension interdite depuis 2019.",
            "Mémoire de la dépossession : Highland Clearances, Grande Famine (1845-1852), Standing Rock (2016-2017).",
            "Littérature : Wordsworth (Lake District), Hardy (Wessex), Faulkner, Steinbeck, Heaney (« Digging », 1966).",
            "Relatives : who, which, that, whose, where, when ; virgules et jamais that dans une appositive.",
          ],
          example: {
            statement: "Décrivez en anglais, en 70 à 90 mots, un lieu auquel vous êtes attaché (ici, un lieu fictif), en employant au moins trois pronoms relatifs différents et un vocabulaire précis.",
            solution: [
              "Choisir un lieu et un angle : un petit port breton où vivait une grand-mère, et le sentiment d'appartenance qu'il suscite.",
              "Prévoir les relatives : where (le lieu), whose (la possession), which (une appositive entre virgules).",
              "Prévoir le lexique : nestled, windswept, sleepy, a sense of belonging.",
              "Rédiger : « The place where I feel most at home is a small fishing port nestled in a bay in Brittany. My grandmother, whose house overlooked the harbour, used to take me to the market every Saturday. The village, which is sleepy in winter and bustling in summer, has hardly changed. When I walk along its windswept pier, I feel a sense of belonging that I have never felt anywhere else. It is not just a place: it is part of who I am. »",
              "Vérifier : environ 85 mots, quatre relatives (where, whose, which, that), dont une appositive entre virgules, un lexique précis et une conclusion sur l'identité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec who, which, whose, where ou when : a) Seamus Heaney is the poet ___ wrote « Digging ». b) The Lake District is the region ___ Wordsworth lived. c) Uluru, ___ is sacred to the Anangu, can no longer be climbed. d) The families ___ land was taken had to emigrate. e) I'll never forget the day ___ we left our hometown. f) Hardy's novels are set in Wessex, a region ___ is partly imaginary.",
              hint: "Demandez-vous si l'antécédent est une personne, une chose, un lieu, un moment, ou s'il y a une idée de possession.",
              solution: [
                "a) who : l'antécédent est une personne (the poet).",
                "b) where : l'antécédent est un lieu et la relative a déjà son sujet (Wordsworth lived there).",
                "c) which : appositive sur une chose ; that est impossible entre virgules.",
                "d) whose : possession, the families' land.",
                "e) when : l'antécédent est un moment (the day).",
                "f) which (ou that) : relative déterminative sur une chose.",
              ],
            },
            {
              level: 2,
              statement: "Reliez chaque paire de phrases par un pronom relatif, en précisant si la relative est déterminative ou appositive : a) Glasgow is Scotland's largest city. It lies on the River Clyde. b) This is the house. My grandparents lived in it. c) The poet grew up on a farm. His father was a farmer. d) Many Irish people emigrated to America. They were fleeing the famine. e) Do you remember the valley? We camped there last summer.",
              hint: "Une information connue de tous ou supplémentaire donne une appositive entre virgules ; une information qui identifie l'antécédent donne une déterminative.",
              solution: [
                "a) « Glasgow, which lies on the River Clyde, is Scotland's largest city. » Appositive : Glasgow est déjà identifiée, d'où les virgules et which.",
                "b) « This is the house (that / which) my grandparents lived in. » ou « This is the house where my grandparents lived. » Déterminative ; le pronom complément peut être omis.",
                "c) « The poet, whose father was a farmer, grew up on a farm. » Appositive de possession.",
                "d) « Many Irish people, who were fleeing the famine, emigrated to America. » Appositive ; on peut aussi écrire une déterminative sans virgules (« Many Irish people who were fleeing the famine... ») si l'on veut restreindre à ceux qui fuyaient la famine.",
                "e) « Do you remember the valley where we camped last summer? » Déterminative, avec where.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. Pour le magazine en ligne d'un lycée partenaire au Pays de Galles, rédigez un article de 150 à 180 mots intitulé « The place that made me ». Vous présenterez un lieu (réel ou imaginaire) qui fait partie de votre identité et expliquerez pourquoi, en réutilisant le lexique et les relatives du cours.",
              hint: "Un article de magazine a un titre, une accroche, un développement (description, souvenirs, signification) et une conclusion ; pensez à interpeller vos lecteurs gallois, par exemple avec le mot hiraeth.",
              solution: [
                "Organiser : accroche (une question ou une image), description du lieu, un souvenir précis, ce que le lieu dit de l'identité, ouverture vers les lecteurs.",
                "Proposition : « The place that made me. Have you ever felt homesick for a place you still visit every year? In Wales, I'm told, you have a word for it: hiraeth. For me, that place is a farm in the Auvergne, nestled between rolling hills and old volcanoes, where my great-grandparents settled a century ago. My grandfather, whose hands were always covered in earth, taught me the names of every tree there. In summer, we would walk to the top of the hill, from which you can see the whole valley. Today the farm is quieter: the cows have gone, and the barn, which once seemed enormous to me, is half empty. Yet every time I come back, I feel I belong there. It is the place that tells me where I come from, even though I live in a city. Is there a place like that for you? »",
                "Vérifier : environ 160 mots, un titre et une accroche, des relatives variées (that, where, whose, from which, which), un lexique précis (nestled, rolling hills, settled, homesick, belong) et une question finale qui s'adresse aux lecteurs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot ou expression à son sens.",
            pairs: [
              { left: "hiraeth", right: "nostalgie d'un foyer perdu (gallois)" },
              { left: "homesick", right: "qui a le mal du pays" },
              { left: "a sense of belonging", right: "sentiment d'appartenance" },
              { left: "to be uprooted", right: "être déraciné" },
              { left: "heritage", right: "patrimoine, héritage culturel" },
              { left: "nestled in a valley", right: "niché dans une vallée" },
            ],
          },
          quiz: [
            { q: "According to Yi-Fu Tuan, a « space » becomes a « place » when...", options: ["it appears on a map", "people invest it with meaning", "it is officially protected by law", "it becomes a city"], answer: 1, why: "Pour Tuan, le lieu est un espace chargé de sens par l'expérience et les souvenirs." },
            { q: "Complete: « This is the village ___ my grandparents were born. »", options: ["which", "whose", "where", "who"], answer: 2, why: "Where reprend un lieu quand la relative a déjà son sujet et son verbe." },
            { q: "The Welsh word « hiraeth » refers to...", options: ["a traditional song", "a mountain range", "a type of farmhouse", "a longing for home"], answer: 3, why: "Hiraeth désigne le désir mélancolique d'un foyer ou d'un pays auquel on ne peut pas revenir." },
            { q: "Since 2019, visitors to Uluru can no longer...", options: ["climb the rock", "take photos", "camp nearby", "visit the park"], answer: 0, why: "L'ascension, que les Anangu demandaient d'éviter, est interdite depuis octobre 2019." },
            { q: "Which sentence is incorrect?", options: ["The town that I have always loved is quite small.", "Leeds, that is in Yorkshire, is a big city.", "The house that we bought is old."], answer: 1, why: "That est impossible dans une relative appositive entre virgules : il faut « Leeds, which is in Yorkshire, ... »." },
          ],
          trap: "Employer that après une virgule (« Glasgow, that is in Scotland ») ou which pour une personne (« the poet which wrote »), et confondre where (lieu) et which (« the village which I was born »).",
          method: "Préparez une description de 80 mots d'un lieu qui compte pour vous, avec cinq relatives différentes et cinq adjectifs précis : elle se réutilise à l'oral comme à l'écrit pour tout sujet sur le territoire et l'identité.",
        },
      ],
    },
    /* ==================================================================== */
    /* FICTIONS ET RÉALITÉS                                                 */
    /* ==================================================================== */
    {
      id: 'fictions-realites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fiction-et-reel',
          title: "Quand la fiction s'inspire du réel",
          minutes: 30,
          objectives: [
            "Distinguer les genres qui mêlent fiction et réalité : roman historique, roman non fictionnel, uchronie, biopic.",
            "Analyser comment une œuvre de fiction peut révéler ou transformer la réalité.",
            "Employer les temps du récit, dont le past perfect, pour raconter et résumer une histoire.",
            "Discuter des limites éthiques de la fiction inspirée de faits réels.",
          ],
          course: [
            {
              heading: "Fiction, réalité et vraisemblance",
              paragraphs: [
                "Le mot fiction vient du latin fingere, façonner, inventer. Une fiction est un récit inventé, mais elle entretient toujours un rapport avec le réel : Aristote parlait déjà de mimèsis, l'imitation de la réalité par l'art. Ce qui compte en fiction n'est pas la vérité des faits mais la vraisemblance (verisimilitude) : une histoire inventée doit paraître possible dans le monde qu'elle construit.",
                "Le lecteur ou le spectateur accepte de croire, le temps du récit, à ce qu'il sait inventé. Le poète anglais Samuel Taylor Coleridge a nommé cette attitude en 1817, dans sa Biographia Literaria, « the willing suspension of disbelief » : la suspension volontaire de l'incrédulité. C'est ce pacte qui permet à la fiction de nous émouvoir et de nous faire réfléchir.",
                "Les mentions « based on a true story » (tiré d'une histoire vraie) et « inspired by true events » (inspiré de faits réels) ne promettent pas la même fidélité : la seconde laisse beaucoup plus de place à l'invention. Dans les deux cas, l'œuvre choisit, condense, invente des dialogues et réorganise les faits pour construire un récit.",
              ],
              box: { label: "Définition", text: "Vraisemblance (verisimilitude) : caractère de ce qui paraît vrai ou possible dans un récit. Suspension of disbelief (Coleridge, 1817) : le lecteur accepte de croire, le temps de l'œuvre, à ce qu'il sait inventé." },
            },
            {
              heading: "Des genres hybrides",
              paragraphs: [
                "Le roman historique (historical novel) place des personnages, fictifs ou réels, dans un passé reconstitué avec précision. Walter Scott en fixe le modèle avec Waverley (1814). Plus récemment, Hilary Mantel a raconté l'ascension de Thomas Cromwell, ministre d'Henri VIII, dans Wolf Hall (2009), récompensé par le Booker Prize, comme sa suite Bring Up the Bodies (2012).",
                "Le roman non fictionnel (non-fiction novel) applique les techniques du roman à des faits réels. Truman Capote revendique ce genre avec In Cold Blood (1966), récit du meurtre d'une famille de fermiers, les Clutter, à Holcomb, au Kansas, en 1959, et de ses deux assassins, fondé sur des années d'enquête. Le biopic (biographical picture) fait de même au cinéma pour la vie d'une personne réelle, et le docudrama reconstitue des événements réels avec des acteurs.",
                "L'uchronie (alternate history) imagine ce qui se serait passé si l'histoire avait pris un autre cours : dans The Plot Against America (2004), Philip Roth imagine que l'aviateur Charles Lindbergh, favorable à l'isolationnisme et soupçonné de sympathies pronazies, bat Roosevelt à l'élection présidentielle de 1940. Dans The Underground Railroad (2016, prix Pulitzer 2017), Colson Whitehead transforme le réseau clandestin qui aidait les esclaves à fuir le Sud, appelé « chemin de fer souterrain » par métaphore, en un véritable chemin de fer sous terre.",
              ],
              box: { label: "Vocabulaire", text: "Historical novel (roman historique), non-fiction novel, biopic, docudrama, alternate history (uchronie), true crime (récit criminel tiré de faits réels), a plot (une intrigue), a setting (un cadre), a narrator." },
            },
            {
              heading: "Quand la fiction agit sur le réel",
              paragraphs: [
                "Certaines fictions ont changé la réalité qui les avait inspirées. Uncle Tom's Cabin (1852), de Harriet Beecher Stowe, roman sur la souffrance des esclaves, connaît un immense succès et renforce le mouvement abolitionniste dans le Nord des États-Unis à la veille de la guerre de Sécession. Une anecdote célèbre, mais probablement légendaire, prête à Lincoln l'idée qu'elle aurait déclenché la guerre.",
                "En Angleterre, Charles Dickens dénonce dans Oliver Twist (publié en feuilleton de 1837 à 1839) le sort des pauvres dans les workhouses créées par la loi sur les pauvres de 1834. Aux États-Unis, Upton Sinclair décrit dans The Jungle (1906) les conditions de travail et d'hygiène effroyables des abattoirs de Chicago ; le scandale contribue la même année à l'adoption du Meat Inspection Act et du Pure Food and Drug Act. Sinclair, qui voulait surtout alerter sur le sort des ouvriers, a remarqué avec ironie que le public avait été touché à l'estomac plutôt qu'au cœur.",
              ],
              box: { label: "À retenir", text: "La fiction peut agir sur le réel : Uncle Tom's Cabin (1852) et l'abolitionnisme ; Oliver Twist (1837-1839) et les workhouses ; The Jungle (1906) et les lois sur la sécurité alimentaire." },
            },
            {
              heading: "Les limites : trahir le réel ?",
              paragraphs: [
                "Mettre en scène des personnes réelles pose des questions éthiques : des dialogues inventés peuvent être pris pour des faits, et les victimes ou leurs proches peuvent se sentir trahis. La série The Crown (Netflix, 2016-2023), consacrée au règne d'Élisabeth II, a ainsi été accusée de mélanger faits et inventions ; en 2022, la bande-annonce de sa cinquième saison a fini par la présenter comme une « fictional dramatisation » inspirée de faits réels. La série Dahmer (2022), sur un tueur en série américain, a été critiquée par des proches de victimes qui n'avaient pas été consultés.",
                "Pour juger une œuvre inspirée du réel, posez trois questions : que dit-elle de vrai que les faits seuls ne montrent pas ? que modifie-t-elle, et pourquoi ? qui pourrait être blessé ou trompé par ces modifications ? La fiction n'a pas l'obligation de l'exactitude, mais elle a une responsabilité envers ceux qu'elle représente.",
              ],
            },
            {
              heading: "Langue : les temps du récit",
              paragraphs: [
                "Pour raconter au passé : le prétérit simple pour la succession des actions (« She opened the door and saw him »), le past continuous (was / were + -ing) pour l'arrière-plan ou l'action en cours (« It was raining when they arrived »), le past perfect (had + participe passé) pour une action antérieure à un autre moment passé (« When the police arrived, the killers had already left »). Used to et would expriment les habitudes passées (« Every Sunday, they would go to church »).",
                "Pour résumer une intrigue (a plot summary), l'anglais emploie le présent simple, appelé présent de narration : « In the novel, Cora escapes from a plantation in Georgia and travels north. » L'antériorité s'exprime alors par le present perfect ou le prétérit : « She has lost her mother, who ran away years before. »",
              ],
              box: { label: "Règle", text: "Récit au passé : prétérit (actions successives), past continuous (arrière-plan), past perfect (antériorité : had + participe passé). Résumé d'intrigue : présent simple." },
            },
          ],
          keyPoints: [
            "Fiction et vraisemblance ; « willing suspension of disbelief » (Coleridge, 1817).",
            "Genres hybrides : roman historique (Scott, Mantel), non-fiction novel (Capote, 1966), uchronie (Roth, Whitehead), biopic.",
            "« Based on a true story » promet plus de fidélité que « inspired by true events ».",
            "La fiction agit sur le réel : Uncle Tom's Cabin, Oliver Twist, The Jungle.",
            "Limites éthiques : personnes réelles, dialogues inventés, proches de victimes (The Crown, Dahmer).",
            "Past perfect pour l'antériorité dans un récit au passé ; présent simple pour résumer une intrigue.",
          ],
          example: {
            statement: "Résumez en anglais, en quatre ou cinq phrases, l'intrigue du film imaginaire suivant, présenté comme « inspired by true events » : en 1972, dans une ville minière du pays de Galles, une institutrice découvre que l'usine locale pollue la rivière où jouent ses élèves ; malgré les menaces, elle rassemble des preuves et alerte un journaliste ; l'usine ferme deux ans plus tard. Dites ensuite ce qui relève sans doute de l'invention.",
            solution: [
              "Choisir le temps : un résumé d'intrigue se rédige au présent simple.",
              "Rédiger le début : « Set in a Welsh mining town in 1972, the film tells the story of a primary school teacher who discovers that the local factory is polluting the river where her pupils play. »",
              "Rédiger la suite : « Despite threats, she collects evidence and contacts a journalist. Two years later, the factory is forced to close. »",
              "Exprimer l'antériorité avec un present perfect : « She also learns that several children have already fallen ill. »",
              "Analyser la mention : « inspired by true events » signale que les faits de départ sont réels mais que les dialogues, certains personnages secondaires, les scènes de menace et la chronologie exacte sont probablement inventés ou condensés pour l'efficacité dramatique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au prétérit simple, au past continuous ou au past perfect : a) When the writer (arrive) ___ in Kansas, the murders (already / happen) ___. b) While he (interview) ___ the killers, he (take) ___ thousands of pages of notes. c) The book (become) ___ a bestseller in 1966. d) Before Stowe wrote her novel, she (meet) ___ people who (escape) ___ from slavery. e) Readers (cry) ___ when they (read) ___ the last chapter.",
              hint: "Repérez les mots qui indiquent l'antériorité (already, before), la durée en arrière-plan (while) et la simple succession au passé.",
              solution: [
                "a) arrived / had already happened : l'arrivée est passée, les meurtres sont antérieurs, d'où le past perfect.",
                "b) was interviewing / took : l'interview est en cours (arrière-plan, past continuous), la prise de notes est l'action principale vue dans son ensemble (prétérit simple ; was taking serait aussi possible pour insister sur la durée).",
                "c) became : action passée datée (in 1966).",
                "d) had met / had escaped : deux actions antérieures au moment passé de référence (before Stowe wrote).",
                "e) cried / read : deux actions passées successives ou simultanées, au prétérit simple.",
              ],
            },
            {
              level: 2,
              statement: "Critique de film (texte d'entraînement inventé) : « The Last Shift, which claims to be “based on a true story”, follows a group of nurses during a hospital strike in 1980s Liverpool. The performances are superb, and the film captures the solidarity of the time. But viewers should be careful: the main character, Maggie, never existed. She is a composite of several real nurses, and the dramatic confrontation with the health minister, the climax of the film, was entirely invented. Does it matter? Perhaps not, as long as the film is honest about what it is. » 1) De quoi parle le film ? 2) Quelles qualités le critique lui reconnaît-il ? 3) Quels éléments sont inventés ? 4) Que signifie « a composite » ici ? 5) Quelle est la position finale du critique ?",
              hint: "Repérez le connecteur But : il sépare l'éloge de la mise en garde ; la question finale annonce la position du critique.",
              solution: [
                "1) Le film raconte l'histoire d'infirmières pendant une grève hospitalière à Liverpool dans les années 1980 (données fictives).",
                "2) Les interprétations sont excellentes (« superb ») et le film rend bien la solidarité de l'époque.",
                "3) Le personnage principal, Maggie, n'a jamais existé, et la confrontation avec le ministre de la Santé, point culminant du film, a été entièrement inventée.",
                "4) Un personnage composite (a composite) est construit en réunissant les traits de plusieurs personnes réelles.",
                "5) Il pense que ces inventions ne sont pas forcément graves, à condition que le film soit honnête sur sa nature : la mention « based on a true story » est donc trompeuse.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Can fiction tell the truth better than facts? » Rédigez un essai de 180 à 200 mots en anglais, en vous appuyant sur au moins deux œuvres étudiées.",
              hint: "Montrez d'abord ce que la fiction apporte (émotion, point de vue, accès à l'intime), puis ses limites (déformation, confusion avec les faits), avant de conclure de façon nuancée.",
              solution: [
                "Problématique : la fiction, qui invente, peut-elle rendre compte du réel mieux que les faits bruts ?",
                "Plan : 1) la fiction donne accès à l'expérience vécue et touche le public (Stowe, Sinclair) ; 2) mais elle peut déformer ou tromper (The Crown, composites, dialogues inventés) ; 3) conclusion : elle dit une vérité humaine, pas une vérité factuelle, et doit l'assumer.",
                "Proposition : « Facts tell us what happened; fiction tells us what it felt like. This is why novels and films inspired by reality can be so powerful. In 1852, Uncle Tom's Cabin did not reveal anything new about slavery, yet by making readers care about individual characters, it strengthened the abolitionist movement. Similarly, Upton Sinclair's The Jungle shocked Americans more than any official report, and new food safety laws were passed in 1906. Fiction gives faces and voices to statistics. However, fiction can also distort reality. Invented dialogues and composite characters may be mistaken for facts, especially on screen, where everything looks real. When The Crown imagined private conversations of the royal family, many viewers took them as history. In my opinion, fiction can express a deeper human truth than facts alone, but it cannot replace historical knowledge. It should therefore be honest about what it invents, and audiences should remember that « inspired by true events » is not the same as « true ». »",
                "Vérifier : environ 190 mots, trois exemples précis et datés, des connecteurs (yet, Similarly, However, therefore), des passifs et des modaux, une conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque œuvre au genre ou à l'effet qui la caractérise.",
            pairs: [
              { left: "In Cold Blood (Capote)", right: "non-fiction novel sur un quadruple meurtre au Kansas" },
              { left: "Wolf Hall (Mantel)", right: "roman historique sur Thomas Cromwell" },
              { left: "The Plot Against America (Roth)", right: "uchronie : Lindbergh élu président en 1940" },
              { left: "Uncle Tom's Cabin (Stowe)", right: "roman qui renforce l'abolitionnisme" },
              { left: "The Jungle (Sinclair)", right: "roman qui mène aux lois alimentaires de 1906" },
              { left: "Oliver Twist (Dickens)", right: "roman qui dénonce les workhouses" },
            ],
          },
          quiz: [
            { q: "Truman Capote described In Cold Blood as a...", options: ["non-fiction novel", "fairy tale", "science-fiction novel", "historical romance"], answer: 0, why: "Capote applique les techniques du roman à un fait divers réel : c'est un « non-fiction novel »." },
            { q: "Complete: « When the police arrived, the killers ___. »", options: ["have already escaped", "already escape", "had already escaped", "were already escape"], answer: 2, why: "L'évasion est antérieure à l'arrivée de la police, elle-même passée : past perfect." },
            { q: "Which novel contributed to new food safety laws in the US in 1906?", options: ["Oliver Twist", "The Jungle", "Uncle Tom's Cabin", "Wolf Hall"], answer: 1, why: "The Jungle d'Upton Sinclair a révélé l'hygiène des abattoirs de Chicago." },
            { q: "The « willing suspension of disbelief » means that the reader...", options: ["temporarily accepts the fiction", "refuses to believe the author at all", "checks every fact in the book", "stops reading the story"], answer: 0, why: "Le lecteur accepte de croire, le temps de l'œuvre, à ce qu'il sait inventé (Coleridge, 1817)." },
            { q: "In a plot summary, which tense is normally used?", options: ["the past perfect", "the past continuous", "the future", "the simple present"], answer: 3, why: "On résume une intrigue au présent simple, dit présent de narration." },
          ],
          trap: "Résumer une intrigue au prétérit en mélangeant les temps, ou oublier le past perfect pour une action antérieure dans un récit au passé (« When I arrived, he left » au lieu de « he had left »).",
          method: "Pour chaque œuvre étudiée, notez sur une fiche : genre, date, part de réel, part d'invention, effet sur le public. Ces cinq rubriques suffisent pour mobiliser un exemple précis dans n'importe quel sujet sur l'axe Fictions et réalités.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'utopies-dystopies',
          title: "Utopies et dystopies",
          minutes: 35,
          objectives: [
            "Définir l'utopie et la dystopie et connaître les œuvres fondatrices du monde anglophone.",
            "Analyser les procédés par lesquels une dystopie critique le présent.",
            "Exprimer l'hypothèse, le souhait et le regret (if, I wish, what if).",
            "Argumenter sur la valeur d'avertissement des récits d'anticipation.",
          ],
          course: [
            {
              heading: "L'utopie : une société idéale qui n'existe nulle part",
              paragraphs: [
                "Le mot utopia a été forgé par l'humaniste anglais Thomas More, auteur en 1516 d'un livre écrit en latin, Utopia. Il décrit une île imaginaire où règne une société idéale : pas de propriété privée, travail partagé, tolérance religieuse. Le mot joue sur le grec : ou-topos, « nulle part », et eu-topos, « le lieu du bonheur ». L'utopie est donc un lieu parfait qui n'existe pas.",
                "L'utopie de More est aussi une critique de l'Angleterre de son temps : la misère des paysans chassés de leurs terres par les enclosures, l'injustice des châtiments, l'avidité des puissants. Inventer une société idéale permet de montrer, par contraste, les défauts de la société réelle. D'autres utopies suivent, comme La Nouvelle Atlantide (New Atlantis, 1627) de Francis Bacon, société gouvernée par la science.",
              ],
              box: { label: "Définition", text: "Utopie (utopia) : société idéale imaginaire, qui permet de critiquer la société réelle par contraste. Le mot vient de Thomas More (Utopia, 1516) : ou-topos (nulle part) et eu-topos (lieu du bonheur)." },
            },
            {
              heading: "La dystopie : quand le rêve devient cauchemar",
              paragraphs: [
                "Une dystopie (du grec dys, mauvais) est une société imaginaire oppressive, souvent présentée par ses dirigeants comme parfaite. Dans Brave New World (1932), Aldous Huxley décrit un monde où les êtres humains sont fabriqués en laboratoire, conditionnés et répartis en castes, et maintenus dans un bonheur artificiel par une drogue, le soma. Le titre reprend avec ironie une réplique de Miranda dans La Tempête de Shakespeare.",
                "Dans Nineteen Eighty-Four (1949), George Orwell imagine l'Océania, État totalitaire où Big Brother surveille chacun par des télécrans, où la Police de la Pensée (the Thought Police) traque les déviants, où le ministère de la Vérité réécrit sans cesse le passé, et où la novlangue (Newspeak) appauvrit la langue pour rendre la pensée critique impossible. L'adjectif Orwellian qualifie aujourd'hui toute forme de surveillance et de manipulation de ce type.",
                "Dans Fahrenheit 451 (1953), Ray Bradbury montre des pompiers chargés de brûler les livres. Dans The Handmaid's Tale (1985), Margaret Atwood décrit la République de Gilead, théocratie qui prive les femmes de leurs droits ; depuis l'adaptation en série (2017), le costume rouge des « servantes » est porté dans des manifestations pour les droits des femmes. Plus récemment, The Hunger Games (2008) de Suzanne Collins et Never Let Me Go (2005) de Kazuo Ishiguro ont prolongé le genre.",
              ],
              box: { label: "Repère", text: "1516 : Utopia (More). 1932 : Brave New World (Huxley). 1949 : Nineteen Eighty-Four (Orwell). 1953 : Fahrenheit 451 (Bradbury). 1985 : The Handmaid's Tale (Atwood). 2008 : The Hunger Games (Collins)." },
            },
            {
              heading: "Ce que les dystopies disent du présent",
              paragraphs: [
                "Une dystopie parle moins de l'avenir que du présent de son auteur : elle grossit des tendances déjà visibles. Orwell écrit après le nazisme et pendant le stalinisme ; Huxley s'inquiète de la société de consommation et du conditionnement ; Bradbury, dans l'Amérique des années 1950, de la censure et de l'abrutissement par les écrans ; Atwood a souvent expliqué n'avoir rien mis dans Gilead qui n'ait déjà existé quelque part dans l'histoire. La série britannique Black Mirror, créée par Charlie Brooker en 2011, applique ce principe aux technologies numériques : dans l'épisode « Nosedive » (2016), chacun est noté en permanence par les autres.",
                "Les dystopies partagent des procédés : un pouvoir qui contrôle les corps et les esprits, la surveillance, la propagande, la manipulation du langage et de l'histoire, un héros qui prend conscience et se révolte, et souvent une fin sombre. Ce sont des récits d'avertissement (cautionary tales) : en montrant où pourrait mener le présent, elles invitent le lecteur à agir pour que cela n'arrive pas.",
              ],
              box: { label: "À retenir", text: "Procédés de la dystopie : contrôle, surveillance, propagande, manipulation du langage et de l'histoire, héros révolté, fin souvent sombre. Fonction : un avertissement (cautionary tale) adressé au présent." },
            },
            {
              heading: "Langue : imaginer, souhaiter, regretter",
              paragraphs: [
                "L'hypothèse réalisable : if + présent, will + base verbale (« If we don't protect our data, we will lose our freedom »). L'hypothèse irréelle dans le présent : if + prétérit, would + base verbale (« If the government controlled our thoughts, we would not be free »). Avec be, on emploie were à toutes les personnes en anglais soigné : « If I were Winston, I would not trust O'Brien. » L'hypothèse irréelle dans le passé : if + past perfect, would have + participe passé (« If Winston had not trusted O'Brien, he would not have been arrested »).",
                "Le souhait et le regret : I wish + prétérit pour le présent (« I wish we lived in a fairer world »), I wish + past perfect pour le passé (« I wish I had read the book earlier »), I wish + would pour un changement souhaité chez quelqu'un d'autre (« I wish people would read more »). Pour imaginer : What if...? ; Imagine a world where... ; Suppose... ; It's high time + prétérit (« It's high time we took action »).",
              ],
              box: { label: "Règle", text: "If + présent, will (réalisable). If + prétérit, would (irréel présent ; were pour be). If + past perfect, would have + participe passé (irréel passé). Jamais would dans la subordonnée en if." },
            },
          ],
          keyPoints: [
            "Utopie : Thomas More, Utopia (1516) ; ou-topos (nulle part) et eu-topos (lieu du bonheur).",
            "Dystopie : société oppressive souvent présentée comme parfaite ; récit d'avertissement.",
            "Huxley (1932, soma, castes), Orwell (1949, Big Brother, Newspeak), Bradbury (1953), Atwood (1985, Gilead).",
            "Une dystopie grossit les tendances du présent de son auteur ; Black Mirror pour le numérique.",
            "If + prétérit, would ; if + past perfect, would have + participe passé ; If I were...",
            "I wish + prétérit (présent), + past perfect (regret passé), + would (changement souhaité).",
          ],
          example: {
            statement: "À partir d'une tendance actuelle de votre choix, imaginez en anglais le point de départ d'une dystopie (70 à 90 mots), en employant au moins deux structures hypothétiques différentes.",
            solution: [
              "Choisir une tendance réelle : la notation permanente sur les applications (chauffeurs, restaurants, vendeurs).",
              "Grossir la tendance : et si chaque citoyen recevait une note qui déciderait de son logement, de son emploi, de ses droits ?",
              "Prévoir les structures : What if...? ; if + prétérit, would ; I wish + past perfect.",
              "Rédiger : « Today, we rate drivers, restaurants and sellers with stars. What if we rated each other too? Imagine a country where every citizen had a public score from one to five. If your score fell below three, you would lose access to the best jobs, flats and schools. People would smile all the time, terrified of being marked down. Mira, the heroine, works in the Ministry of Ratings. One morning, her own score drops for no reason. She wishes she had never trusted the system. »",
              "Vérifier : environ 90 mots, une tendance réelle grossie, des structures hypothétiques variées (What if, Imagine a country where, if + fell, would lose, wishes she had never trusted) et une héroïne qui va prendre conscience.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez les verbes entre parenthèses : a) If books (be) ___ banned, people (stop) ___ thinking critically. b) If Winston (not / write) ___ in his diary, he (not / be) ___ caught. c) If we (not / act) ___ now, the situation (get) ___ worse. d) I wish I (live) ___ in a fairer society. e) I wish I (see) ___ the series before reading the reviews. f) It's high time we (take) ___ climate change seriously.",
              hint: "Identifiez le type d'hypothèse (réalisable, irréelle présente, irréelle passée) ou la structure (I wish, It's high time) avant de choisir le temps.",
              solution: [
                "a) were / would stop : hypothèse irréelle dans le présent (if + prétérit, would).",
                "b) had not written / would not have been : hypothèse irréelle dans le passé (if + past perfect, would have + participe passé).",
                "c) don't act / will get : hypothèse réalisable (if + présent, will).",
                "d) lived : I wish + prétérit pour un souhait sur le présent.",
                "e) had seen : I wish + past perfect pour un regret sur le passé.",
                "f) took : It's high time + prétérit.",
              ],
            },
            {
              level: 2,
              statement: "Extrait d'un récit d'entraînement inventé : « In the City of Harmony, nobody was ever sad. Every morning, citizens took their Joy tablet with breakfast, and the screens on every wall reminded them: “A happy citizen is a useful citizen.” Words like anger or protest had been removed from the dictionary years ago. Lena had never questioned any of it, until the day her tablet fell under the table and she forgot to take it. By noon, she noticed something strange: for the first time, she felt like crying. » 1) Quels éléments font de cette société une dystopie ? 2) À quelles œuvres du cours font penser la tablette et la suppression des mots ? 3) Quel est le rôle de l'incident de la tablette ? 4) Expliquez l'ironie du nom « City of Harmony ». 5) Relevez un past perfect et justifiez son emploi.",
              hint: "Cherchez les procédés typiques : contrôle des corps, propagande, manipulation du langage, prise de conscience du héros.",
              solution: [
                "1) Un bonheur imposé par une drogue (contrôle des corps), des écrans de propagande partout, et la suppression de mots du dictionnaire (manipulation du langage) : la société se dit parfaite mais elle est oppressive.",
                "2) La tablette Joy rappelle le soma de Brave New World (Huxley) ; la suppression des mots rappelle la novlangue (Newspeak) de Nineteen Eighty-Four (Orwell).",
                "3) C'est l'élément déclencheur : en oubliant sa tablette, Lena retrouve ses émotions et commence sa prise de conscience, comme les héros de dystopie.",
                "4) La ville s'appelle « Harmonie », mais cette harmonie est artificielle et obtenue par la contrainte : le nom relève de la propagande.",
                "5) « had been removed » (ou « had never questioned ») : le past perfect marque une action antérieure au moment du récit (la suppression des mots a eu lieu des années avant).",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Some people say that we are already living in a dystopia. Do you agree? » Rédigez un essai de 180 à 200 mots en anglais, en vous appuyant sur au moins deux œuvres et sur des exemples du monde actuel.",
              hint: "Comparez des traits précis des dystopies (surveillance, divertissement, manipulation) avec des réalités actuelles, puis montrez les différences essentielles (droits, élections, liberté de critiquer).",
              solution: [
                "Problématique : nos sociétés ressemblent-elles aux dystopies, ou cette comparaison est-elle exagérée ?",
                "Plan : 1) des ressemblances troublantes (surveillance numérique, divertissement permanent, désinformation) ; 2) des différences fondamentales (démocratie, droits, liberté d'expression) ; 3) la fonction des dystopies : nous avertir.",
                "Proposition : « When we carry phones that record where we go and what we like, it is tempting to think that Orwell's Big Brother has arrived. Some features of our world do look dystopian. Mass surveillance programmes revealed by Edward Snowden in 2013 recall the telescreens of Nineteen Eighty-Four, and endless entertainment on our screens might remind us of Huxley's Brave New World, where people are kept happy rather than free. However, saying that we already live in a dystopia goes too far. In many countries, citizens can vote, protest and criticise their leaders, which is impossible in Oceania or Gilead. If we really lived in a dystopia, this essay would probably be censored. In my opinion, the value of these novels lies precisely in their warnings. They show where certain trends could lead if nobody reacted. Rather than saying that the nightmare has come true, we should use these stories to recognise the danger early, and to defend the freedoms that their characters have lost. »",
                "Vérifier : environ 190 mots, deux œuvres et un exemple réel (Snowden), une hypothèse irréelle (If we really lived..., would be censored), une concession puis une réfutation (However), une conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Utopies, dystopies et hypothèses.",
            statements: [
              { text: "The word « utopia » was coined by Thomas More in 1516.", true: true, why: "More a forgé le mot à partir du grec ou-topos, nulle part, en jouant sur eu-topos, le lieu du bonheur." },
              { text: "Nineteen Eighty-Four was written in 1984.", true: false, why: "Le roman d'Orwell a été publié en 1949 ; 1984 est la date où se situe l'intrigue." },
              { text: "In Fahrenheit 451, firemen put out fires in libraries.", true: false, why: "C'est l'inverse : les pompiers sont chargés de brûler les livres." },
              { text: "The title Brave New World comes from Shakespeare's The Tempest.", true: true, why: "Huxley reprend avec ironie une réplique de Miranda." },
              { text: "« If I would be rich, I would travel » is correct English.", true: false, why: "On ne met jamais would dans la subordonnée en if : « If I were rich, I would travel »." },
              { text: "The Handmaid's Tale is set in the Republic of Gilead.", true: true, why: "Atwood y décrit une théocratie qui prive les femmes de leurs droits." },
              { text: "A dystopia is always set in the distant future.", true: false, why: "Beaucoup se situent dans un futur proche ou un présent alternatif, comme Never Let Me Go, dans l'Angleterre de la fin du XXe siècle." },
            ],
          },
          quiz: [
            { q: "The word « utopia » literally means...", options: ["no place", "perfect island", "happy people", "new world"], answer: 0, why: "Du grec ou-topos : le lieu qui n'existe nulle part." },
            { q: "Complete: « If people ___ more careful, Big Brother would not exist. »", options: ["are", "were", "will be", "had"], answer: 1, why: "Hypothèse irréelle dans le présent : if + prétérit (were), puis would." },
            { q: "Newspeak and the Thought Police were invented by...", options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Margaret Atwood"], answer: 2, why: "Ce sont des inventions de Nineteen Eighty-Four (1949), le roman de George Orwell." },
            { q: "« I wish I had read the book before seeing the film » expresses...", options: ["a firm plan for the near future", "a regret about the past", "an obligation", "a present habit"], answer: 1, why: "I wish + past perfect exprime un regret portant sur le passé." },
            { q: "What is the main purpose of most dystopias?", options: ["to describe a perfect society", "to predict the future precisely", "to entertain young children", "to warn us about the present"], answer: 3, why: "Les dystopies grossissent des tendances du présent pour nous mettre en garde." },
          ],
          trap: "Mettre would dans la proposition en if (« If I would be ») ou confondre utopie et dystopie, alors que la dystopie se présente souvent elle-même comme une utopie réalisée.",
          method: "Pour analyser une dystopie, cherchez systématiquement quatre éléments : la tendance du présent qui est grossie, l'outil de contrôle, ce qui a été supprimé (livres, mots, émotions, droits) et le moment où le héros prend conscience.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'series-et-societe',
          title: "Séries et cinéma : le pouvoir du récit",
          minutes: 35,
          objectives: [
            "Analyser une image ou une séquence filmique avec le vocabulaire technique adapté.",
            "Expliquer comment les séries et les films façonnent les représentations collectives.",
            "Rendre compte d'une œuvre et formuler un jugement critique argumenté.",
            "Débattre de la responsabilité des créateurs et des plateformes.",
          ],
          course: [
            {
              heading: "Le pouvoir du récit : storytelling et représentations",
              paragraphs: [
                "Les êtres humains comprennent le monde à travers des histoires. Le cinéma, puis la télévision, ont donné à ces récits une puissance inédite : ils façonnent les représentations, c'est-à-dire la manière dont une société se voit et voit les autres. The Birth of a Nation (1915), de D. W. Griffith, a révolutionné le langage du cinéma, mais il glorifiait le Ku Klux Klan et a contribué à sa renaissance la même année. Pendant des décennies, les westerns hollywoodiens ont construit le mythe de la Frontière en présentant le plus souvent les Amérindiens comme des ennemis.",
                "Le politologue américain Joseph Nye a nommé soft power (1990) la capacité d'un pays à influencer par l'attraction de sa culture plutôt que par la force : Hollywood en est l'exemple le plus cité. La question des représentations est aussi celle de la diversité : qui est montré, et comment ? Le test de Bechdel, issu d'une bande dessinée d'Alison Bechdel (1985), demande si un film comporte au moins deux femmes qui parlent entre elles d'autre chose que d'un homme ; il ne juge pas la qualité d'un film, mais révèle des tendances d'ensemble.",
              ],
              box: { label: "Vocabulaire", text: "Storytelling, representation, a stereotype, soft power, the cast (la distribution), a character, a role model, a screenwriter (un scénariste), a director (un réalisateur), a showrunner (le responsable créatif d'une série)." },
            },
            {
              heading: "L'âge d'or des séries",
              paragraphs: [
                "À la fin des années 1990, des chaînes comme HBO produisent des séries ambitieuses, souvent comparées à des romans : The Sopranos (1999-2007), sur un chef mafieux du New Jersey, ou The Wire (2002-2008), qui explore saison après saison les institutions de Baltimore (police, trafic de drogue, port, mairie, école, presse). Netflix lance son service de streaming en 2007, puis sa première grande série originale, House of Cards, en 2013 ; la mise en ligne de saisons entières d'un coup popularise le binge-watching.",
                "Les séries agissent sur le débat public. When They See Us (2019), d'Ava DuVernay, raconte l'histoire des « Central Park Five », cinq adolescents noirs et latinos condamnés à tort pour une agression commise à New York en 1989, puis innocentés en 2002 ; elle a relancé la réflexion sur le racisme dans la justice américaine. En 2025, la mini-série britannique Adolescence, dont chaque épisode est tourné en un seul plan-séquence, a suscité au Royaume-Uni un vaste débat sur l'influence des contenus misogynes en ligne sur les adolescents ; le Premier ministre Keir Starmer a soutenu sa diffusion gratuite dans les établissements secondaires.",
              ],
              box: { label: "Repère", text: "1915 : The Birth of a Nation. 1999 : The Sopranos (HBO). 2007 : Netflix lance le streaming. 2013 : House of Cards. 2019 : When They See Us. 2025 : Adolescence." },
            },
            {
              heading: "Analyser une image ou une séquence",
              paragraphs: [
                "L'échelle des plans : extreme long shot ou establishing shot (plan d'ensemble qui situe le lieu), long shot (personnage en pied), medium shot (plan taille), close-up (gros plan sur un visage), extreme close-up (très gros plan sur un détail). Les angles : high-angle shot (plongée, qui écrase ou fragilise le personnage), low-angle shot (contre-plongée, qui le grandit et le rend imposant), eye-level shot, bird's-eye view (vue du dessus).",
                "Les mouvements de caméra : pan (panoramique), tracking shot (travelling), zoom, handheld camera (caméra à l'épaule, qui donne une impression de réalisme et d'urgence), long take ou one-shot (plan-séquence). La lumière : low-key lighting (sombre, très contrastée, typique du film noir et du thriller) ou high-key lighting (claire, uniforme). Le son : diegetic sound (entendu par les personnages : dialogues, bruits) et non-diegetic sound (musique de film, voix off). Le montage (editing) : cut, cross-cutting (montage alterné), flashback.",
                "Pour analyser, associez toujours une technique à un effet : « The low-angle shot makes the politician look powerful and threatening. » ; « The handheld camera follows the boy closely, so we share his panic. » Décrire sans interpréter ne suffit pas.",
              ],
              box: { label: "Méthode", text: "1. Décrire : plan, angle, mouvement, lumière, couleurs, son. 2. Interpréter : quel effet sur le spectateur ? 3. Relier au sens : que dit la scène du personnage ou du thème ? Technique + effet + sens." },
            },
            {
              heading: "Rendre compte et critiquer",
              paragraphs: [
                "Une critique (a review) suit un ordre simple : présenter l'œuvre (titre, créateur ou réalisateur, année, genre, plateforme), résumer l'intrigue au présent simple sans en révéler la fin (no spoilers!), analyser (jeu des acteurs, mise en scène, scénario, thèmes), juger de façon nuancée, puis recommander ou non. Lexique utile : gripping (captivant), thought-provoking (qui fait réfléchir), moving, predictable, overrated (surestimé), the storyline, a cliffhanger (fin à suspense), a twist (rebondissement).",
                "La responsabilité des créateurs fait débat. La série 13 Reasons Why (2017), sur le suicide d'une lycéenne, a été critiquée par des spécialistes de la santé mentale pour la scène montrant explicitement ce suicide ; Netflix l'a retirée en 2019. Faut-il protéger le public, au risque de censurer, ou laisser aux œuvres leur liberté de montrer la violence pour la dénoncer ? Un jugement nuancé distingue ce qu'une œuvre montre et la manière dont elle le montre.",
              ],
              box: { label: "Vocabulaire", text: "A review, a spoiler, a cliffhanger, a plot twist, the storyline, gripping, thought-provoking, overrated, to binge-watch, to be released (sortir), to be streamed on (être diffusé sur)." },
            },
          ],
          keyPoints: [
            "Les récits façonnent les représentations : The Birth of a Nation (1915), les westerns, le soft power d'Hollywood (Nye, 1990).",
            "Test de Bechdel : deux femmes qui parlent entre elles d'autre chose que d'un homme.",
            "Âge d'or des séries : The Sopranos, The Wire ; streaming (Netflix, 2007) et binge-watching.",
            "Séries et débat public : When They See Us (2019), Adolescence (2025).",
            "Analyse filmique : technique (plan, angle, mouvement, lumière, son) + effet + sens.",
            "Critique : présentation, résumé au présent sans spoiler, analyse, jugement nuancé, recommandation.",
          ],
          example: {
            statement: "Analysez en anglais, en quatre ou cinq phrases, ce plan d'un film imaginaire : un adolescent, filmé en plongée, est assis seul dans le réfectoire d'un lycée ; la caméra recule lentement ; la lumière est froide et bleutée ; on n'entend que le bruit étouffé des conversations des autres élèves, puis une musique lente au piano commence.",
            solution: [
              "Décrire le plan et l'angle : « The scene opens with a high-angle shot of a teenage boy sitting alone in a school canteen. »",
              "Interpréter l'angle et le mouvement : « The high angle makes him look small and vulnerable, and as the camera slowly tracks back, he becomes smaller and smaller in the frame, as if the world were moving away from him. »",
              "Interpréter la lumière : « The cold, bluish lighting creates a sad, lonely atmosphere. »",
              "Interpréter le son : « The muffled diegetic sound of the other students' conversations suggests that he is cut off from them, and the slow non-diegetic piano music invites us to feel sympathy for him. »",
              "Conclure sur le sens : « All these techniques work together to show the boy's isolation, which is probably a key theme of the film. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez en anglais la technique décrite : a) La caméra filme le personnage d'en bas, il paraît dominant. b) Un très gros plan sur des yeux qui se remplissent de larmes. c) La scène dure six minutes sans aucune coupe. d) La musique de film que les personnages n'entendent pas. e) Un plan large qui montre la ville au début du film. f) L'image tremble, comme filmée par un témoin.",
              hint: "Relisez la partie « Analyser une image ou une séquence » : échelle des plans, angles, mouvements, son.",
              solution: [
                "a) a low-angle shot (contre-plongée) : le personnage paraît puissant.",
                "b) an extreme close-up (très gros plan) : il souligne l'émotion.",
                "c) a long take ou a one-shot (plan-séquence) : il crée une impression de temps réel.",
                "d) non-diegetic sound (son extradiégétique) : ici, la musique de film.",
                "e) an establishing shot (plan d'ensemble) : il situe le lieu de l'action.",
                "f) a handheld camera (caméra à l'épaule) : elle donne une impression de réalisme et d'urgence.",
              ],
            },
            {
              level: 2,
              statement: "Critique d'une série imaginaire (texte d'entraînement inventé) : « Northern Lights, the new eight-part drama streaming on a major platform, follows a teenage girl who starts a podcast to investigate her brother's disappearance in a small Scottish town. The first episodes are gripping, and the young lead actress is outstanding. The use of long takes and cold, natural light makes the town feel both beautiful and threatening. Unfortunately, the final episodes rely on a predictable twist, and the series seems more interested in shocking viewers than in exploring grief. Still, it is worth watching, if only for its first half. » 1) Présentez la série (format, intrigue, lieu). 2) Relevez deux qualités et deux défauts. 3) Quelles techniques de réalisation sont citées et quel est leur effet ? 4) Quel est le jugement final et quel mot l'introduit ?",
              hint: "Repérez les adjectifs évaluatifs (gripping, outstanding, predictable) et les connecteurs qui organisent le jugement (Unfortunately, Still).",
              solution: [
                "1) Une série dramatique en huit épisodes, diffusée en streaming : une adolescente lance un podcast pour enquêter sur la disparition de son frère dans une petite ville d'Écosse (données fictives).",
                "2) Qualités : des premiers épisodes captivants (« gripping ») et une jeune actrice principale remarquable (« outstanding »). Défauts : un rebondissement final prévisible (« a predictable twist ») et une volonté de choquer plus que d'explorer le deuil.",
                "3) Les plans-séquences (« long takes ») et la lumière naturelle et froide rendent la ville à la fois belle et menaçante.",
                "4) Le jugement est nuancé mais positif : la série vaut la peine d'être vue, au moins pour sa première moitié. Il est introduit par « Still » (malgré tout), qui marque la concession après les critiques.",
              ],
            },
            {
              level: 3,
              statement: "Type évaluation de fin de cycle, expression écrite. « Can TV series change society? » Rédigez un essai de 180 à 200 mots en anglais, en vous appuyant sur au moins deux exemples précis.",
              hint: "Montrez d'abord comment une série peut faire évoluer les débats et les représentations, puis ses limites (divertissement, effet passager, risque de simplification), avant de conclure de façon nuancée.",
              solution: [
                "Problématique : une série, produit de divertissement, peut-elle réellement faire évoluer la société ?",
                "Plan : 1) les séries rendent visibles des réalités et lancent des débats ; 2) leurs limites : effet passager, simplification, logique commerciale ; 3) une position nuancée : elles ne changent pas la société seules, mais elles peuvent déclencher le changement.",
                "Proposition : « Series are often seen as pure entertainment, something we binge-watch on a Sunday afternoon. Yet some of them have had a real impact on society. When They See Us, released in 2019, told millions of viewers the story of five teenagers wrongly convicted in New York in 1989, and it made many people question racial bias in the justice system. In 2025, the British series Adolescence started a national conversation about the influence of misogynistic content on teenage boys, to the point that it was offered to secondary schools. However, we should not overestimate the power of a series. Debates sparked by a hit show can disappear as quickly as they appeared, and complex problems may be simplified to keep viewers hooked. Besides, streaming platforms are businesses whose priority is to attract subscribers. In my opinion, TV series cannot change society on their own, but they can open people's eyes and push them to act. Their power lies in making us care about issues we used to ignore. »",
                "Vérifier : environ 195 mots, deux exemples précis et datés, une concession (However), des connecteurs (Yet, Besides), une conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire du cinéma et des séries dans l'ordre chronologique.",
            items: [
              "Sortie de The Birth of a Nation de D. W. Griffith",
              "The Jazz Singer, premier long métrage avec des scènes parlantes synchronisées",
              "Début de la série The Sopranos sur HBO",
              "Netflix lance son service de streaming",
              "House of Cards, première grande série originale de Netflix",
              "Diffusion de la mini-série britannique Adolescence",
            ],
          },
          quiz: [
            { q: "A camera placed below a character, looking up, creates a...", options: ["high-angle shot", "low-angle shot", "bird's-eye view", "close-up"], answer: 1, why: "La contre-plongée (low-angle shot) grandit le personnage et le rend imposant." },
            { q: "Film music that the characters cannot hear is called...", options: ["diegetic sound", "ambient background noise", "dialogue", "non-diegetic sound"], answer: 3, why: "Le son extradiégétique (musique de film, voix off) n'appartient pas au monde des personnages." },
            { q: "The Bechdel test asks whether a film has...", options: ["two women talking about something besides a man", "a female director and a female producer as well", "a female villain who is finally defeated by a man"], answer: 0, why: "Le test, issu d'une bande dessinée d'Alison Bechdel (1985), vérifie si deux femmes parlent entre elles d'autre chose que d'un homme." },
            { q: "Watching many episodes of a series in a row is called...", options: ["streaming", "cliffhanging", "binge-watching", "channel-hopping"], answer: 2, why: "Le binge-watching s'est répandu avec la mise en ligne de saisons entières sur les plateformes." },
            { q: "A « spoiler » is...", options: ["a very negative review by a critic", "a detail revealing the ending", "a famous actor in a minor role", "a film with a huge budget"], answer: 1, why: "Un spoiler révèle un élément clé de l'intrigue, souvent la fin : on l'évite dans une critique." },
          ],
          trap: "Décrire une image (« there is a boy, the light is blue ») sans jamais interpréter l'effet des choix techniques, ou confondre high-angle shot (plongée) et low-angle shot (contre-plongée).",
          method: "Pour chaque image ou séquence, construisez vos phrases sur le modèle « technique + effet + sens » : « The low-angle shot (technique) makes him look powerful (effet), which shows his control over the town (sens). »",
        },
      ],
    },
  ],
}
