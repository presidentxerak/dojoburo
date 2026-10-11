import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-2nde',
  chapters: [
    /* ==================================================================== */
    /* LES OUTILS DE LA LANGUE : GRAMMAIRE                                  */
    /* ==================================================================== */
    {
      id: 'grammaire-anglais',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'present-simple-be-ing',
          title: "Présent simple et présent en « be + -ing »",
          minutes: 30,
          objectives: [
            "Conjuguer un verbe au présent simple et au présent en be + -ing, aux formes affirmative, négative et interrogative.",
            "Choisir entre le présent simple et be + -ing selon le sens : habitude, vérité générale, action en cours, situation temporaire.",
            "Identifier les verbes d'état qui ne se construisent normalement pas avec be + -ing.",
          ],
          course: [
            {
              heading: "Le présent simple : la forme",
              paragraphs: [
                "Le présent simple se forme avec la base verbale (le verbe sans to) : I work, you work, we work, they work. À la troisième personne du singulier (he, she, it, ou un nom singulier), on ajoute -s : she works, my brother plays, the shop opens. C'est la seule terminaison du présent simple, et c'est aussi la plus souvent oubliée.",
                "L'orthographe du -s suit quelques règles. Après -s, -sh, -ch, -x et -o, on ajoute -es : she watches, he goes, it fixes. Après une consonne suivie de -y, le y devient -ies : study → studies, cry → cries ; mais après une voyelle, on garde le y : play → plays. Deux verbes sont irréguliers : have → has, be → I am, you are, he is. Le -s se prononce /s/ après un son sourd (works, stops), /z/ après un son sonore (plays, lives) et /ɪz/ après un son sifflant (watches, washes).",
                "À la forme négative et interrogative, on emploie l'auxiliaire do, ou does à la troisième personne du singulier, suivi de la base verbale sans -s : She doesn't like coffee. Does he live here? Do you speak Spanish? Le -s passe sur l'auxiliaire : on ne dit jamais « Does she likes ». Le verbe be fait exception : il n'emploie pas do (Is she French? I'm not tired).",
              ],
              box: { label: "Règle", text: "Affirmatif : he / she / it + base verbale + -s (she works). Négatif : don't / doesn't + base verbale (she doesn't work). Question : Do / Does + sujet + base verbale (Does she work?). Le -s n'apparaît qu'une fois : sur le verbe ou sur does." },
            },
            {
              heading: "Le présent simple : les emplois",
              paragraphs: [
                "Le présent simple présente un fait comme stable, général ou habituel. Il exprime d'abord l'habitude et la répétition, souvent avec un adverbe de fréquence ou un complément de temps : I usually get up at seven. She goes swimming every Saturday. We never eat meat.",
                "Il exprime aussi les vérités générales et les faits permanents : Water boils at 100 °C. The Thames flows through London. Cats hate water. Enfin, il sert à décrire des goûts, des opinions et des états : I like rap music. He believes in ghosts. This bag belongs to me.",
                "Les adverbes de fréquence (always, usually, often, sometimes, rarely, never) se placent avant le verbe conjugué : She often reads in bed. Mais ils se placent après le verbe be : He is always late. Les compléments plus longs (every day, twice a week, on Mondays) se placent en général en fin de phrase.",
              ],
              box: { label: "À retenir", text: "Présent simple = habitude (every day, usually, often, never), vérité générale (Water boils at 100 °C), état ou goût (I like, I know). Adverbe de fréquence : avant le verbe (she often reads), mais après be (he is always late)." },
            },
            {
              heading: "Le présent en be + -ing : forme et emplois",
              paragraphs: [
                "Le présent en be + -ing (on dit aussi présent progressif ou présent continu) se forme avec be conjugué au présent suivi du verbe en -ing : I am reading, you are reading, she is reading. Négatif : I'm not reading, she isn't reading. Question : Are you reading? What is she doing?",
                "L'orthographe de -ing demande de l'attention. Un -e muet final tombe : write → writing, make → making. Une consonne finale précédée d'une seule voyelle accentuée se double : swim → swimming, stop → stopping, begin → beginning. Les verbes en -ie font -ying : lie → lying, die → dying.",
                "Be + -ing présente une action en déroulement, vue de l'intérieur. Il exprime l'action en cours au moment où l'on parle (Look! It's snowing. Listen, someone is knocking), une situation temporaire (I'm living with my aunt this term), une évolution en cours (The climate is getting warmer) et, avec always, un commentaire souvent agacé du locuteur (He's always complaining!). Il peut enfin exprimer un projet futur déjà organisé (I'm meeting Sarah tonight), que l'on retrouvera dans la leçon sur le futur.",
              ],
              box: { label: "Règle", text: "Be (am / is / are) + verbe en -ing. Orthographe : write → writing ; swim → swimming ; lie → lying. Emplois : action en cours (now, at the moment, look!, listen!), situation temporaire (this week, these days), évolution (getting warmer), agacement (always + -ing)." },
            },
            {
              heading: "Choisir entre les deux présents",
              paragraphs: [
                "Le français n'a qu'un présent là où l'anglais en a deux : « je mange » se traduit par I eat s'il s'agit d'une habitude (I eat at the canteen every day) et par I'm eating s'il s'agit d'une action en cours (Sorry, I can't talk, I'm eating). Comparez aussi I live in Lyon (c'est ma situation stable) et I'm living in Lyon this year (c'est provisoire).",
                "Les verbes d'état décrivent une situation, une pensée ou une perception, pas une activité : know, understand, believe, mean, like, love, hate, prefer, want, need, belong, own, seem. Ils s'emploient normalement au présent simple, même pour parler de maintenant : I know the answer (et non « I am knowing »). Certains changent de sens : I think it's true (opinion, présent simple) mais I'm thinking about my holidays (réflexion en cours) ; I have a dog (possession) mais I'm having lunch (activité).",
              ],
              box: { label: "Méthode", text: "Posez-vous deux questions. 1) S'agit-il d'une habitude, d'une vérité ou d'un état ? Présent simple. 2) S'agit-il d'une action en train de se dérouler ou d'une situation provisoire ? Be + -ing. Puis vérifiez que le verbe n'est pas un verbe d'état." },
            },
          ],
          keyPoints: [
            "Présent simple : base verbale, avec -s à la 3e personne du singulier ; négation et question avec do / does + base verbale.",
            "Présent simple pour les habitudes, les vérités générales, les goûts et les états.",
            "Be + -ing (am / is / are + V-ing) pour l'action en cours, la situation temporaire et l'évolution.",
            "Orthographe : studies, watches, goes ; writing, swimming, lying.",
            "Verbes d'état (know, like, want, believe, belong) : présent simple, même pour maintenant.",
            "Marqueurs : every day, usually, never pour le présent simple ; now, at the moment, look!, this week pour be + -ing.",
          ],
          example: {
            statement: "Mettez le verbe au présent simple ou au présent en be + -ing, puis justifiez. 1) Listen! Someone (knock) at the door. 2) My brother (play) the guitar every evening. 3) I (not / understand) this word. 4) Water (freeze) at 0 °C. 5) Look, it (rain) again!",
            solution: [
              "1) Someone is knocking at the door : « Listen! » signale une action en train de se dérouler au moment où l'on parle.",
              "2) My brother plays the guitar every evening : habitude, marquée par every evening ; sujet à la 3e personne du singulier, donc -s.",
              "3) I don't understand this word : understand est un verbe d'état, il reste au présent simple ; négation avec do not (don't) + base verbale.",
              "4) Water freezes at 0 °C : vérité générale ; freeze + -s à la 3e personne du singulier.",
              "5) It is raining again : « Look » introduit une action visible en cours.",
              "Réponse : is knocking, plays, don't understand, freezes, is raining.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque verbe, écrivez la forme de la 3e personne du singulier au présent simple (he / she / it) puis la forme en -ing : watch, study, play, go, have, swim, make, lie.",
              hint: "Repérez la fin de chaque verbe : -ch, consonne + y, voyelle + y, -o, -e muet, consonne doublée, -ie.",
              solution: [
                "watch → watches (après -ch, on ajoute -es) ; watching.",
                "study → studies (consonne + y devient -ies) ; studying (le y reste devant -ing).",
                "play → plays (voyelle + y : on garde le y) ; playing.",
                "go → goes (après -o, on ajoute -es) ; going. have → has (irrégulier) ; having (le -e tombe).",
                "swim → swims ; swimming (une voyelle + une consonne finale : la consonne double). make → makes ; making (le -e tombe). lie → lies ; lying (-ie devient -y).",
                "Résultat : watches / watching, studies / studying, plays / playing, goes / going, has / having, swims / swimming, makes / making, lies / lying.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce texte avec le présent simple ou be + -ing : « Sarah is a nurse. She usually (work) at night, but this week she (work) during the day because a colleague is ill. Right now, she (talk) to a patient. She (love) her job, although she often (feel) tired. Her husband (not / like) her night shifts. »",
              hint: "Cherchez pour chaque verbe un marqueur (usually, this week, right now, often) et vérifiez s'il s'agit d'un verbe d'état.",
              solution: [
                "She usually works at night : habitude, marquée par usually.",
                "This week she is working during the day : situation temporaire, marquée par this week et opposée à l'habitude.",
                "Right now, she is talking to a patient : action en cours, marquée par right now.",
                "She loves her job : love est un verbe d'état. She often feels tired : habitude, marquée par often.",
                "Her husband doesn't like her night shifts : like est un verbe d'état ; négation avec doesn't + base verbale (sans -s).",
                "Résultat : works, is working, is talking, loves, feels, doesn't like.",
              ],
            },
            {
              level: 3,
              statement: "Traduisez en anglais en justifiant le choix du présent : 1) D'habitude je vais au lycée à pied, mais en ce moment je prends le bus. 2) Ma sœur ne mange jamais de viande. 3) Qu'est-ce que vous faites ? Je révise mon contrôle d'anglais. 4) Je crois qu'il a raison. 5) Les loyers augmentent de plus en plus dans les grandes villes. 6) Il oublie toujours ses clés ! (le locuteur est agacé)",
              hint: "Ne traduisez pas mot à mot : pour chaque phrase, demandez-vous s'il s'agit d'une habitude, d'une action en cours, d'un état, d'une évolution ou d'un agacement.",
              solution: [
                "1) I usually walk to school, but at the moment I'm taking the bus. Habitude (présent simple) opposée à une situation temporaire (be + -ing).",
                "2) My sister never eats meat. Habitude ; never se place avant le verbe, qui prend -s.",
                "3) What are you doing? I'm revising for my English test. Action en cours au moment où l'on parle.",
                "4) I think he's right. Think exprime ici une opinion : verbe d'état, présent simple ; « avoir raison » se dit be right.",
                "5) Rents are getting higher and higher in big cities. Évolution en cours : be + -ing, avec le comparatif répété higher and higher.",
                "6) He's always forgetting his keys! Always + be + -ing exprime l'agacement du locuteur.",
                "Résultat : six phrases où le choix du présent dépend du sens, et non de la forme du verbe français.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos réflexes sur les deux présents.",
            statements: [
              { text: "« I am knowing the answer » est une phrase correcte.", true: false, why: "Know est un verbe d'état : on dit I know the answer." },
              { text: "Au présent simple, on ajoute -s au verbe après he, she et it.", true: true, why: "C'est la seule terminaison du présent simple : she works, it rains." },
              { text: "« Does she likes music? » est correct.", true: false, why: "Après does, le verbe est à la base verbale : Does she like music?" },
              { text: "Be + -ing peut exprimer une situation temporaire.", true: true, why: "I'm living with my aunt this term : la situation est provisoire." },
              { text: "« She always is late » : l'adverbe est bien placé.", true: false, why: "Avec be, l'adverbe de fréquence se place après le verbe : She is always late." },
              { text: "« Water boils at 100 °C » exprime une vérité générale.", true: true, why: "Les vérités générales s'expriment au présent simple." },
              { text: "Le verbe think ne s'emploie jamais avec be + -ing.", true: false, why: "I'm thinking about my holidays est correct : think signifie alors réfléchir, c'est une activité." },
            ],
          },
          quiz: [
            { q: "Choose the correct sentence.", options: ["She don't like coffee.", "She doesn't like coffee.", "She doesn't likes coffee.", "She not likes coffee."], answer: 1, why: "Négation à la 3e personne du singulier : doesn't + base verbale, sans -s sur le verbe." },
            { q: "« What ___ you ___ right now? » « I'm cooking dinner. »", options: ["do / do", "does / do", "are / doing", "have / done"], answer: 2, why: "Right now indique une action en cours : be + -ing, donc What are you doing?" },
            { q: "Which verb is NOT normally used with be + -ing?", options: ["to belong", "to run", "to listen", "to travel"], answer: 0, why: "Belong est un verbe d'état (appartenir) : This bag belongs to me." },
            { q: "« My cousin ___ in London this year, but he usually lives in Leeds. »", options: ["lives", "is living", "live", "has living"], answer: 1, why: "This year, opposé à usually, signale une situation temporaire : be + -ing." },
            { q: "Where does the adverb go? « He ___ late for school. »", options: ["is never", "never is", "does never be"], answer: 0, why: "Avec le verbe be, l'adverbe de fréquence se place après : He is never late." },
          ],
          trap: "Traduire mécaniquement le présent français par le présent simple : « je mange » peut être I eat (habitude) ou I'm eating (en ce moment). Autre erreur fréquente : oublier le -s de la 3e personne, ou le garder après does.",
          method: "Avant de conjuguer, cherchez les marqueurs : every day, usually, often, never appellent le présent simple ; now, at the moment, look!, listen!, this week appellent be + -ing. Vérifiez ensuite que le verbe n'est pas un verbe d'état.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'preterit-present-perfect',
          title: "Prétérit et « present perfect »",
          minutes: 35,
          objectives: [
            "Conjuguer un verbe régulier ou irrégulier au prétérit et au present perfect.",
            "Choisir entre le prétérit (passé daté, coupé du présent) et le present perfect (lien avec le présent).",
            "Traduire « depuis » et « il y a » avec for, since et ago.",
          ],
          course: [
            {
              heading: "Le prétérit : la forme",
              paragraphs: [
                "Les verbes réguliers forment leur prétérit en ajoutant -ed à la base verbale : work → worked, play → played. Orthographe : un -e final ne reçoit que -d (live → lived) ; consonne + y devient -ied (study → studied) ; la consonne finale se double après une voyelle accentuée unique (stop → stopped, plan → planned). Le -ed se prononce /t/ après un son sourd (worked, watched), /d/ après un son sonore (played, lived) et /ɪd/, avec une syllabe en plus, après t ou d (wanted, needed).",
                "Les verbes irréguliers ont un prétérit propre, à apprendre par cœur avec leur participe passé : go, went, gone ; see, saw, seen ; take, took, taken ; buy, bought, bought ; write, wrote, written ; begin, began, begun. Be a deux formes au prétérit : I / he / she / it was, you / we / they were.",
                "À la forme négative et interrogative, on emploie l'auxiliaire did suivi de la base verbale, quel que soit le sujet : I didn't go. Did you see the match? Where did they live? La marque du passé passe sur did : on ne dit jamais « Did you saw » ni « I didn't went ».",
              ],
              box: { label: "Règle", text: "Affirmatif : verbe + -ed (worked) ou forme irrégulière (went). Négatif : didn't + base verbale (I didn't go). Question : Did + sujet + base verbale (Did you go?). Be : was / were, sans did (Were you there?)." },
            },
            {
              heading: "Le prétérit : un passé daté, coupé du présent",
              paragraphs: [
                "Le prétérit exprime une action ou une situation terminée, située à un moment précis du passé et coupée du présent. Il s'emploie avec les marqueurs du passé révolu : yesterday, last week, last year, in 1969, two days ago, when I was a child. Exemple : Neil Armstrong walked on the Moon in 1969. I lost my phone yesterday.",
                "C'est le temps du récit : une suite d'actions passées s'enchaîne au prétérit (He opened the door, looked around and left). Les questions qui portent sur le moment (When? What time? How long ago?) appellent le prétérit : When did you arrive?",
                "Pour décrire une action en cours à un moment du passé, l'arrière-plan d'un récit, on emploie le prétérit en be + -ing (was / were + V-ing) : I was reading when the phone rang. L'action longue (was reading) est interrompue par une action courte au prétérit simple (rang).",
              ],
              box: { label: "À retenir", text: "Marqueurs du prétérit : yesterday, last (week, month, year), ago, in + date, when I was young, then. « Il y a deux jours » = two days ago (avec le prétérit)." },
            },
            {
              heading: "Le present perfect : un bilan au présent",
              paragraphs: [
                "Le present perfect se forme avec have (has à la 3e personne du singulier) suivi du participe passé : I have finished, she has seen. Contractions : I've, you've, she's, they've ; négatif : haven't, hasn't ; question : Have you ever...? Has she arrived?",
                "Malgré sa ressemblance avec le passé composé français, le present perfect est un temps du présent : il exprime le lien entre une action passée et la situation actuelle. Il sert d'abord à faire un bilan, à constater un résultat : I've lost my keys (je ne peux pas rentrer maintenant). Il exprime ensuite l'expérience, sans dater : Have you ever been to London? I've never seen snow.",
                "Il s'emploie avec just (venir de : She has just left), already (déjà : I've already done it), yet en question et en négation (Have you finished yet? I haven't finished yet), et avec une période qui n'est pas terminée (this week, today, so far) : I've drunk three coffees today.",
              ],
              box: { label: "Règle", text: "Have / has + participe passé. Emplois : résultat présent (I've lost my keys), expérience (Have you ever...? I've never...), just, already, yet, période non terminée (today, this week). Jamais avec une date ou un marqueur du passé révolu." },
            },
            {
              heading: "Traduire « depuis » : for et since",
              paragraphs: [
                "Quand une action commencée dans le passé dure encore au moment où l'on parle, le français emploie le présent avec « depuis », l'anglais le present perfect : J'habite ici depuis deux ans = I have lived here for two years. Si l'on insiste sur l'activité qui se poursuit, on emploie le present perfect en be + -ing : I've been waiting for an hour (j'attends depuis une heure).",
                "For introduit une durée (for two years, for ten minutes, for ages) ; since introduit le point de départ (since 2020, since Monday, since I was ten). La question correspondante est How long...? : How long have you known her? Comparez enfin I lived in Spain for two years (c'est terminé, prétérit) et I have lived in Lyon for two years (j'y habite encore, present perfect).",
              ],
              box: { label: "Repère", text: "Depuis + durée = for (for three years). Depuis + point de départ = since (since 2019). Depuis combien de temps ? = How long have you...? Le verbe est au present perfect, jamais au présent simple." },
            },
          ],
          keyPoints: [
            "Prétérit : -ed ou forme irrégulière ; négation et question avec did + base verbale.",
            "Prétérit pour un passé daté et terminé : yesterday, last year, ago, in 1990.",
            "Present perfect : have / has + participe passé, pour un lien avec le présent (résultat, expérience).",
            "Avec le present perfect : ever, never, just, already, yet, today, this week.",
            "Depuis : present perfect + for (durée) ou since (point de départ) ; How long have you...?",
            "Il y a : ago avec le prétérit (two days ago).",
          ],
          example: {
            statement: "Mettez le verbe au prétérit ou au present perfect, puis justifiez. 1) I (see) this film last week. 2) She (never / be) to Scotland. 3) We (live) here since 2019. 4) Shakespeare (write) Hamlet around 1600. 5) (you / finish) your homework yet?",
            solution: [
              "1) I saw this film last week : last week date l'action dans un passé terminé, donc prétérit (see, saw, seen).",
              "2) She has never been to Scotland : expérience de toute une vie, sans date, avec never : present perfect. Be to = être allé à.",
              "3) We have lived here since 2019 : l'action a commencé en 2019 et dure encore, avec since : present perfect.",
              "4) Shakespeare wrote Hamlet around 1600 : fait daté, et l'auteur est mort : prétérit (write, wrote, written).",
              "5) Have you finished your homework yet? : yet en question, bilan au moment présent : present perfect.",
              "Réponse : saw, has never been, have lived, wrote, Have you finished.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le prétérit et le participe passé de ces verbes irréguliers : go, see, buy, take, write, be, have, begin.",
              hint: "Récitez la série base, prétérit, participe passé à voix haute : la mémoire auditive aide beaucoup.",
              solution: [
                "go, went, gone ; see, saw, seen.",
                "buy, bought, bought ; take, took, taken.",
                "write, wrote, written ; be, was / were, been.",
                "have, had, had ; begin, began, begun.",
                "Résultat : went / gone, saw / seen, bought / bought, took / taken, wrote / written, was-were / been, had / had, began / begun.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec for, since, ago ou le verbe au bon temps. 1) I have known Tom ___ we were six. 2) They have been married ___ twenty years. 3) She ___ (work) in this shop since January. 4) He ___ (move) to Canada three years ago. 5) How long ___ you ___ (have) your dog? 6) We ___ (not / see) Paul since last summer.",
              hint: "Since précède un point de départ, for une durée ; ago appelle toujours le prétérit.",
              solution: [
                "1) since : « we were six » est le point de départ.",
                "2) for : « twenty years » est une durée.",
                "3) has worked (ou has been working) : l'action dure depuis janvier, avec since.",
                "4) moved : ago date l'action dans le passé, donc prétérit.",
                "5) have ... had : How long have you had your dog? La possession dure encore ; have est ici un verbe d'état, d'où la forme simple.",
                "6) haven't seen : bilan négatif sur une période qui va jusqu'à maintenant, avec since.",
                "Résultat : since, for, has worked, moved, have ... had, haven't seen.",
              ],
            },
            {
              level: 3,
              statement: "Traduisez en anglais : 1) J'habite à Marseille depuis cinq ans. 2) Elle est partie il y a dix minutes. 3) Êtes-vous déjà allé à Londres ? 4) Hier, nous avons regardé un documentaire sur la Seconde Guerre mondiale. 5) Je n'ai pas encore lu ce roman. 6) Depuis combien de temps apprenez-vous l'anglais ?",
              hint: "Le passé composé français se traduit par le prétérit quand l'action est datée, et par le present perfect quand elle ne l'est pas ; « depuis » appelle le present perfect.",
              solution: [
                "1) I have lived (ou I have been living) in Marseille for five years. Action qui dure encore : present perfect + for.",
                "2) She left ten minutes ago. Ago : prétérit.",
                "3) Have you ever been to London? Expérience sans date : present perfect avec ever ; « être allé à » = have been to.",
                "4) Yesterday, we watched a documentary about the Second World War. Yesterday : prétérit.",
                "5) I haven't read this novel yet. Bilan au présent, yet en fin de phrase négative.",
                "6) How long have you been learning English? Activité qui se poursuit : present perfect en be + -ing.",
                "Résultat : le passé composé français n'a pas de traduction unique, c'est le lien avec le présent qui décide.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque verbe irrégulier à son prétérit et à son participe passé.",
            pairs: [
              { left: "go", right: "went / gone" },
              { left: "see", right: "saw / seen" },
              { left: "take", right: "took / taken" },
              { left: "buy", right: "bought / bought" },
              { left: "write", right: "wrote / written" },
              { left: "begin", right: "began / begun" },
            ],
          },
          quiz: [
            { q: "« I ___ him two days ago. »", options: ["have seen", "saw", "seen", "had see"], answer: 1, why: "Ago date l'action dans un passé terminé : prétérit." },
            { q: "« She has lived in Leeds ___ 2018. »", options: ["for", "ago", "during", "since"], answer: 3, why: "2018 est un point de départ : since." },
            { q: "Which sentence is correct?", options: ["I have visited Rome in 2015.", "I visited Rome in 2015.", "I have visit Rome in 2015.", "I did visited Rome in 2015."], answer: 1, why: "Une date (in 2015) impose le prétérit ; le present perfect ne se date jamais." },
            { q: "« Have you ___ been to Ireland? »", options: ["ever", "yet", "ago", "since"], answer: 0, why: "Ever (déjà, une fois dans sa vie) accompagne le present perfect d'expérience." },
            { q: "How is the -ed of « wanted » pronounced?", options: ["/ɪd/", "/t/", "/d/", "it is silent"], answer: 0, why: "Après t ou d, -ed se prononce /ɪd/ et forme une syllabe de plus : want-ed." },
          ],
          trap: "Employer le present perfect avec une date ou un marqueur du passé révolu (« I have seen him yesterday ») : dès que le moment est daté et terminé, le prétérit s'impose. Inversement, « depuis » ne se traduit pas par le présent simple : I have lived here for two years, et non « I live here since two years ».",
          method: "Demandez-vous si l'action est datée et coupée du présent (prétérit) ou si elle a un lien avec maintenant : résultat, expérience, durée qui continue (present perfect). Apprenez les verbes irréguliers par familles de sons (sing, sang, sung ; ring, rang, rung ; drink, drank, drunk).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modaux',
          title: "Les modaux : « can », « must », « should », « may »",
          minutes: 30,
          objectives: [
            "Construire correctement une phrase avec un modal (base verbale, absence de -s et de do).",
            "Exprimer la capacité, la permission, l'obligation, l'interdiction et le conseil.",
            "Exprimer différents degrés de certitude avec must, should, may, might et can't.",
          ],
          course: [
            {
              heading: "Ce qu'est un modal",
              paragraphs: [
                "Les modaux (can, could, may, might, must, should, will, would) sont des auxiliaires qui expriment le point de vue du locuteur sur l'action : est-elle possible, permise, obligatoire, conseillée, probable ? Ils ont une grammaire particulière, la même pour tous.",
                "Un modal est invariable : pas de -s à la 3e personne (she can, he must). Il est suivi de la base verbale sans to (You must go, et non « must to go »). Il forme seul sa négation avec not (cannot ou can't, must not ou mustn't, should not ou shouldn't, may not) et sa question par inversion (Can I help you? Should we leave?), sans do.",
                "Un modal n'a ni infinitif, ni participe, ni forme en -ing. Pour l'employer au futur ou au present perfect, on utilise un substitut : be able to pour can (I will be able to come), have to pour must (I have had to leave), be allowed to pour la permission (We're not allowed to use our phones).",
              ],
              box: { label: "Règle", text: "Sujet + modal + base verbale. Pas de -s (she can), pas de to (you must go), pas de do (Can you swim? I can't swim). Substituts : be able to (capacité), have to (obligation), be allowed to (permission)." },
            },
            {
              heading: "Can et may : capacité, permission, possibilité",
              paragraphs: [
                "Can exprime d'abord la capacité : I can swim. She can speak three languages. Au passé, on emploie could (When I was five, I could already read) ou was able to pour une réussite ponctuelle ; au futur, will be able to.",
                "Can et may expriment aussi la permission. Can est courant (Can I open the window?) ; may est plus poli et plus formel (May I come in?). Could est une demande polie : Could you help me, please? Pour refuser une permission : You can't park here.",
                "May et might expriment la possibilité, une probabilité moyenne : It may rain this afternoon (il se peut qu'il pleuve). Might indique en général une possibilité un peu plus faible : She might come, but I doubt it. Can't exprime au contraire une impossibilité logique : That can't be true!",
              ],
              box: { label: "À retenir", text: "Can : capacité (I can swim), permission (Can I go?). May : permission polie (May I...?), possibilité (It may rain). Might : possibilité plus faible. Can't : impossibilité (It can't be true)." },
            },
            {
              heading: "Must, have to, should : obligation et conseil",
              paragraphs: [
                "Must exprime une obligation forte, souvent posée par le locuteur ou par une règle : You must wear a seatbelt. I must call my grandmother. Have to exprime une contrainte extérieure, imposée par les circonstances : I have to wear a uniform at school. Au passé, on emploie had to (We had to wait for an hour) ; must n'a pas de passé.",
                "Attention aux formes négatives, qui ne sont pas symétriques. Mustn't exprime l'interdiction : You mustn't smoke here (il est interdit de fumer). Don't have to exprime l'absence d'obligation : You don't have to come (vous n'êtes pas obligé de venir, mais vous pouvez).",
                "Should exprime le conseil ou la recommandation : You should see a doctor. You shouldn't eat so much sugar. Ought to a un sens proche, dans un registre plus soutenu. Au passé, should have + participe passé exprime un regret ou un reproche : You should have told me (vous auriez dû me le dire).",
              ],
              box: { label: "Règle", text: "Must : obligation (You must stop). Have to : contrainte extérieure ; passé had to. Mustn't : interdiction. Don't have to : absence d'obligation. Should : conseil (You should rest) ; should have + participe passé : reproche." },
            },
            {
              heading: "Les degrés de certitude",
              paragraphs: [
                "Les modaux permettent aussi d'évaluer la probabilité d'un fait. Must exprime une quasi-certitude, une déduction : He must be tired, he worked all night. Should exprime une forte probabilité : The parcel should arrive tomorrow. May et might expriment une simple possibilité. Can't exprime la certitude que le fait est impossible : It can't be Tom, he's in Spain.",
                "Pour faire une déduction sur le passé, on emploie modal + have + participe passé : She must have missed the bus (elle a dû rater le bus). They can't have finished already (ils ne peuvent pas avoir déjà fini). Cette construction est très utile pour commenter un document ou formuler des hypothèses sur une image.",
              ],
              box: { label: "Repère", text: "Du plus certain au moins certain : It is true (fait) → It must be true (quasi-certitude) → It should be true (forte probabilité) → It may be true (possibilité) → It can't be true (impossibilité)." },
            },
          ],
          keyPoints: [
            "Modal + base verbale, sans -s, sans to, sans do.",
            "Can : capacité et permission ; could : passé ou demande polie ; be able to au futur.",
            "Must et have to : obligation ; had to au passé.",
            "Mustn't = interdiction ; don't have to = absence d'obligation.",
            "Should : conseil ; should have + participe passé : reproche ou regret.",
            "Certitude : must > should > may / might > can't.",
          ],
          example: {
            statement: "Complétez avec le modal qui convient (can, mustn't, should, may, don't have to) et justifiez. 1) You ___ smoke in the hospital: it's forbidden. 2) I ___ speak three languages. 3) You look ill: you ___ see a doctor. 4) Take an umbrella, it ___ rain this afternoon. 5) Tomorrow is Sunday, so we ___ get up early.",
            solution: [
              "1) mustn't : « it's forbidden » indique une interdiction.",
              "2) can : il s'agit d'une capacité.",
              "3) should : on donne un conseil à quelqu'un qui a l'air malade.",
              "4) may : la pluie est possible, mais pas certaine.",
              "5) don't have to : le dimanche, il n'y a pas d'obligation de se lever tôt ; mustn't serait faux, car ce n'est pas interdit.",
              "Réponse : mustn't, can, should, may, don't have to.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez l'erreur de chaque phrase : 1) She cans swim very well. 2) You must to wear a helmet. 3) Do you can help me? 4) He shoulds study more. 5) I will can come tomorrow. 6) We don't must be late.",
              hint: "Rappelez-vous les trois règles des modaux (pas de -s, pas de to, pas de do) et pensez aux substituts.",
              solution: [
                "1) She can swim very well : pas de -s à un modal.",
                "2) You must wear a helmet : pas de to après un modal.",
                "3) Can you help me? : la question se forme par inversion, sans do.",
                "4) He should study more : pas de -s.",
                "5) I will be able to come tomorrow : deux modaux ne se suivent pas ; au futur, can est remplacé par be able to.",
                "6) We mustn't be late : la négation se forme avec not, sans do.",
                "Résultat : can swim, must wear, Can you help, should study, will be able to come, mustn't be.",
              ],
            },
            {
              level: 2,
              statement: "Reformulez chaque phrase avec un modal : 1) It is possible that she is at home. 2) It is forbidden to use your phone during the test. 3) I advise you to read this book. 4) It isn't necessary to bring food. 5) I'm sure she's tired: she ran ten kilometres. 6) I'm sure it isn't Tom: he's in Spain.",
              hint: "Identifiez d'abord l'idée exprimée : possibilité, interdiction, conseil, absence d'obligation, quasi-certitude, impossibilité.",
              solution: [
                "1) She may (ou might) be at home : possibilité.",
                "2) You mustn't use your phone during the test : interdiction.",
                "3) You should read this book : conseil.",
                "4) You don't have to bring food : absence d'obligation.",
                "5) She must be tired : déduction quasi certaine.",
                "6) It can't be Tom : impossibilité logique.",
                "Résultat : may, mustn't, should, don't have to, must, can't.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (100 à 120 mots). Your English penfriend, Jamie, is going to spend a term in your lycée. Write him an email to explain the rules of your school and give him some advice. Use at least six different modals or substitutes (must, mustn't, have to, don't have to, should, can, may).",
              hint: "Organisez le message en trois parties : salutation, règles (obligations et interdictions), conseils pratiques, puis formule de fin ; soulignez chaque modal au brouillon.",
              solution: [
                "Plan : formule d'accueil ; règles du lycée (must, have to, mustn't, don't have to) ; conseils (should, can, may) ; formule de fin.",
                "Exemple de production : « Hi Jamie, I'm so happy you're coming to my school! Here are a few things you should know. First, you have to arrive before 8 o'clock, and you must show your student card at the entrance. You mustn't use your phone in class, or the teacher may take it until the end of the day. Good news: you don't have to wear a uniform, so you can wear your own clothes. Lunch at the canteen is quite good, but you should book your meals in advance. If you get lost, you can ask me or any student: people are friendly here. I can't wait to see you! Best wishes, Léa » (environ 115 mots)",
                "Vérification : should, have to, must, mustn't, may, don't have to, can, can't : huit formes modales ou substituts, toutes suivies de la base verbale.",
                "Résultat : un courriel structuré qui distingue obligation, interdiction, absence d'obligation, conseil et possibilité.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces phrases de la plus certaine à la moins probable : le fait est-il vrai ?",
            items: [
              "It is true.",
              "It must be true.",
              "It should be true.",
              "It may be true.",
              "It can't be true.",
            ],
          },
          quiz: [
            { q: "« You ___ wear a uniform in this school: it's the rule. »", options: ["have to", "don't have to", "shouldn't", "may not"], answer: 0, why: "Une règle imposée par l'établissement est une contrainte extérieure : have to." },
            { q: "What does « You mustn't touch it » mean?", options: ["Vous n'êtes pas obligé d'y toucher.", "Il est interdit d'y toucher.", "Vous devriez y toucher.", "Vous pouvez y toucher si vous voulez."], answer: 1, why: "Mustn't exprime l'interdiction ; l'absence d'obligation se dit don't have to." },
            { q: "Which sentence is correct?", options: ["He can to drive.", "He cans drive.", "He can drive.", "He can drives."], answer: 2, why: "Un modal est invariable et suivi de la base verbale sans to." },
            { q: "« She's not answering her phone. She ___ be asleep. » (c'est possible)", options: ["has to", "might", "mustn't", "should not"], answer: 1, why: "Might exprime une possibilité : elle dort peut-être." },
            { q: "« You ___ have told me! I waited for an hour. » (reproche)", options: ["can", "may", "would rather", "should"], answer: 3, why: "Should have + participe passé exprime un reproche : vous auriez dû me le dire." },
          ],
          trap: "Confondre mustn't (interdiction) et don't have to (absence d'obligation), ou ajouter to, -s ou do à un modal (« he cans », « you must to go », « do you can »).",
          method: "Pour chaque phrase, identifiez l'intention : capacité, permission, obligation, interdiction, conseil ou degré de certitude. Choisissez le modal, puis vérifiez les trois règles : pas de -s, pas de to, pas de do.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'futur-hypothese',
          title: "Exprimer le futur et l'hypothèse",
          minutes: 35,
          objectives: [
            "Exprimer le futur avec will, be going to, be + -ing et le présent simple, selon le sens.",
            "Employer le présent après when, as soon as, until et if dans une proposition subordonnée.",
            "Formuler une hypothèse réelle (if + présent, will) et une hypothèse irréelle (if + prétérit, would).",
          ],
          course: [
            {
              heading: "Will et be going to",
              paragraphs: [
                "L'anglais n'a pas de temps futur au sens strict : il dispose de plusieurs formes, qui expriment chacune un rapport différent à l'avenir. Will + base verbale exprime une prédiction (It will be sunny tomorrow. I think she'll win), une décision prise au moment où l'on parle (The phone's ringing: I'll get it!), une promesse ou une offre (I'll help you, I promise). Contraction : I'll, she'll ; négation : won't (will not).",
                "Be going to + base verbale exprime une intention déjà formée avant le moment où l'on parle (I'm going to study medicine. We're going to visit Scotland this summer) ou une prédiction fondée sur un indice présent, visible : Look at those clouds! It's going to rain. Be careful, you're going to fall!",
                "Comparez : « I'll buy some bread » (je viens de décider) et « I'm going to buy some bread » (c'était prévu). La différence ne tient pas à la distance dans le temps, mais au moment de la décision et à la présence d'un indice.",
              ],
              box: { label: "À retenir", text: "Will : prédiction, décision soudaine, promesse, offre (I'll help you). Be going to : intention déjà prise (I'm going to study law), prédiction fondée sur un indice présent (It's going to rain)." },
            },
            {
              heading: "Les autres façons de parler de l'avenir",
              paragraphs: [
                "Le présent en be + -ing exprime un projet déjà organisé, souvent avec une heure ou une date : I'm meeting Sarah at six. We're flying to Dublin on Friday. Le présent simple exprime un événement fixé par un horaire ou un calendrier : The train leaves at 7.15. The film starts at eight.",
                "Dans une proposition subordonnée de temps introduite par when, as soon as, before, after ou until, l'anglais emploie le présent, et non will, même si l'action est future : When I am eighteen, I will learn to drive. I'll call you as soon as I arrive. Le français, lui, emploie le futur (« quand j'aurai dix-huit ans »), d'où une erreur très fréquente.",
              ],
              box: { label: "Règle", text: "When / as soon as / before / after / until + présent : I'll call you when I arrive (et non « when I will arrive »). Be + -ing : projet organisé (I'm meeting her tonight). Présent simple : horaire (The bus leaves at 8)." },
            },
            {
              heading: "L'hypothèse réelle : if + présent",
              paragraphs: [
                "Pour une condition qui peut se réaliser, on emploie if + présent dans la subordonnée et will + base verbale dans la principale : If it rains, we'll stay at home. If you work hard, you will pass. L'ordre des propositions peut s'inverser : We'll stay at home if it rains (pas de virgule dans ce cas).",
                "Pour une vérité générale ou une conséquence automatique, on emploie le présent dans les deux propositions : If you heat ice, it melts. If I drink coffee at night, I can't sleep. Unless signifie « à moins que », « sauf si » (if... not) : You won't succeed unless you practise (si vous ne vous entraînez pas).",
              ],
              box: { label: "Formule", text: "If + présent, will + base verbale : If it rains, we will stay home. Vérité générale : If + présent, présent : If you heat ice, it melts. Unless = if... not." },
            },
            {
              heading: "L'hypothèse irréelle : if + prétérit, would",
              paragraphs: [
                "Pour une situation imaginaire, peu probable ou contraire à la réalité présente, on emploie if + prétérit dans la subordonnée et would + base verbale dans la principale : If I had more time, I would travel more (mais je n'ai pas le temps). If I won the lottery, I'd buy a house by the sea. Le prétérit n'exprime pas ici le passé, mais l'irréel.",
                "Avec be, l'anglais soigné emploie were à toutes les personnes : If I were you, I would apologise (si j'étais vous, je m'excuserais). La forme « if I was » se rencontre à l'oral familier, mais were est attendu à l'écrit. Pour un irréel du passé (ce qui aurait pu se produire), on emploie if + past perfect, would have + participe passé : If I had known, I would have come.",
              ],
              box: { label: "Formule", text: "Irréel du présent : If + prétérit, would + base verbale (If I had money, I would travel). If I were you, I would... Irréel du passé : If + had + participe passé, would have + participe passé. Jamais would après if." },
            },
          ],
          keyPoints: [
            "Will : prédiction, décision soudaine, promesse ; be going to : intention, prédiction fondée sur un indice.",
            "Be + -ing : projet organisé ; présent simple : horaire.",
            "When, as soon as, until, before, after + présent, jamais will.",
            "Hypothèse réelle : if + présent, will + base verbale.",
            "Hypothèse irréelle : if + prétérit, would + base verbale ; If I were you.",
            "Jamais will ni would dans la proposition introduite par if.",
          ],
          example: {
            statement: "Mettez le verbe à la forme qui convient et justifiez. 1) Look at the sky! It (rain). 2) If you study, you (pass) the test. 3) If I (be) rich, I would buy a house by the sea. 4) When she (arrive), I'll call you. 5) « I'm thirsty. » « Wait, I (get) you a glass of water. »",
            solution: [
              "1) It is going to rain : prédiction fondée sur un indice visible (« Look at the sky! »).",
              "2) You will pass : hypothèse réelle, if + présent dans la subordonnée, will dans la principale.",
              "3) If I were rich : hypothèse irréelle (je ne suis pas riche), if + prétérit, were à toutes les personnes.",
              "4) When she arrives : subordonnée de temps, présent et non will.",
              "5) I'll get you a glass of water : décision prise au moment où l'on parle, will.",
              "Réponse : is going to rain, will pass, were, arrives, 'll get.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez will ou be going to. 1) I've decided: I ___ learn Spanish next year. 2) « I'm cold. » « I ___ close the window. » 3) Be careful! You ___ fall! 4) I promise I ___ be on time. 5) In 2100, people ___ probably live longer. 6) We've bought the tickets: we ___ visit Edinburgh in July.",
              hint: "Demandez-vous si la décision est déjà prise ou si elle vient d'être prise, et s'il existe un indice présent.",
              solution: [
                "1) am going to : la décision est déjà prise (« I've decided »).",
                "2) will ('ll) : décision prise au moment où l'on parle.",
                "3) are going to : prédiction fondée sur un indice visible (la personne perd l'équilibre).",
                "4) will : promesse.",
                "5) will : prédiction lointaine, sans indice présent, avec probably.",
                "6) are going to : projet décidé (les billets sont achetés) ; we're visiting serait aussi possible.",
                "Résultat : am going to, 'll, are going to, will, will, are going to.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez les verbes entre parenthèses. 1) If it (be) sunny tomorrow, we (go) to the beach. 2) If I (have) wings, I (fly) to Australia. 3) She (not / pass) unless she works harder. 4) If you (heat) water to 100 °C, it (boil). 5) What (you / do) if you (find) a wallet in the street? 6) If I (be) you, I (apologise).",
              hint: "Repérez si la condition est réalisable (if + présent, will), automatique (présent, présent) ou imaginaire (if + prétérit, would).",
              solution: [
                "1) is / will go : condition réalisable, hypothèse réelle.",
                "2) had / would fly : situation impossible, hypothèse irréelle.",
                "3) won't pass : unless + présent dans la subordonnée, will dans la principale.",
                "4) heat / boils : vérité générale, présent dans les deux propositions.",
                "5) would you do / found : situation imaginaire, if + prétérit, would.",
                "6) were / would apologise : conseil avec If I were you.",
                "Résultat : is, will go ; had, would fly ; won't pass ; heat, boils ; would you do, found ; were, would apologise.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (100 à 120 mots). « If you were the mayor of your town, what would you change? And what are you going to do yourself to make it a better place? » Employez au moins trois hypothèses irréelles et deux formes du futur.",
              hint: "Construisez deux paragraphes : ce que vous feriez si vous étiez maire (if + prétérit, would), puis ce que vous allez faire vous-même (be going to, will).",
              solution: [
                "Plan : 1) les changements imaginés, à l'irréel (If I were the mayor, I would...) ; 2) les engagements personnels, au futur (I'm going to..., I will...).",
                "Exemple de production : « If I were the mayor of my town, I would change many things. First, I would create more cycle lanes, because if people felt safe on their bikes, they would leave their cars at home. I would also open a youth centre where teenagers could meet, play music and do their homework. If we had more trees in the streets, the town would be cooler in summer, so I would plant hundreds of them. But I don't need to be the mayor to act. Next month, I'm going to join the volunteers who clean the river banks, and I will cycle to school every day. When more people do the same, our town will change. » (environ 120 mots)",
                "Vérification : quatre hypothèses irréelles (If I were, if people felt, If we had, et would dans chaque principale), deux futurs (I'm going to join, I will cycle) et une subordonnée de temps au présent (When more people do).",
                "Résultat : un texte qui distingue clairement l'imaginaire (would) et les projets réels (going to, will).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Futur et hypothèse.",
            statements: [
              { text: "« When I will be 18, I will vote » est correct.", true: false, why: "Après when, on emploie le présent : When I am 18, I will vote." },
              { text: "« If I were you » est correct en anglais soigné, même avec I.", true: true, why: "Dans l'hypothèse irréelle, were s'emploie à toutes les personnes." },
              { text: "Be going to peut exprimer une intention déjà prise.", true: true, why: "I'm going to study law : la décision est antérieure au moment où l'on parle." },
              { text: "« If it will rain, we will stay home » est correct.", true: false, why: "Pas de will après if : If it rains, we will stay home." },
              { text: "Le présent simple peut exprimer un horaire futur : The train leaves at 8.", true: true, why: "Les événements fixés par un horaire ou un calendrier s'expriment au présent simple." },
              { text: "Dans « If I had money, I would travel », la situation se situe dans le passé.", true: false, why: "Le prétérit exprime ici l'irréel du présent : je n'ai pas d'argent maintenant." },
            ],
          },
          quiz: [
            { q: "Which sentence expresses a prediction based on present evidence?", options: ["Look at the clouds! It's going to rain.", "I think it will rain next month, maybe.", "If it rains, we will stay at home.", "It rains a lot in Scotland in winter."], answer: 0, why: "Be going to s'appuie sur un indice présent (les nuages)." },
            { q: "« If I ___ rich, I would travel around the world. »", options: ["am", "were", "will be", "would be"], answer: 1, why: "Hypothèse irréelle : if + prétérit, were à toutes les personnes." },
            { q: "« I'll call you when I ___ home. »", options: ["will get", "would get", "get", "am going to get"], answer: 2, why: "Après when, l'anglais emploie le présent, même pour une action future." },
            { q: "« If you heat ice, it ___. »", options: ["would melt", "melted", "will have melted", "melts"], answer: 3, why: "Conséquence automatique, vérité générale : présent dans les deux propositions." },
            { q: "« We ___ our grandparents next Sunday: it's all arranged. »", options: ["visit always", "would visit", "are visiting", "visited"], answer: 2, why: "Un projet organisé s'exprime avec le présent en be + -ing." },
          ],
          trap: "Mettre will ou would après if ou when (« If it will rain », « When I will be 18 ») : dans ces subordonnées, l'anglais emploie le présent (condition réelle, futur) ou le prétérit (hypothèse irréelle).",
          method: "Identifiez d'abord la situation : projet décidé, prédiction, décision soudaine, condition réalisable ou imaginaire. Appliquez ensuite la formule : if + présent → will ; if + prétérit → would. Relisez enfin chaque proposition en if pour y traquer will et would.",
        },
      ],
    },
    /* ==================================================================== */
    /* AXE 3 · LE PASSÉ DANS LE PRÉSENT                                     */
    /* ==================================================================== */
    {
      id: 'passe-present',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'lieux-memoire',
          title: "Lieux de mémoire et monuments",
          minutes: 30,
          objectives: [
            "Décrire en anglais un monument ou un lieu de mémoire : localisation, date, auteur, fonction et symbolique.",
            "Situer quelques grands lieux de mémoire du monde anglophone et expliquer ce qu'ils commémorent.",
            "Employer la voix passive pour présenter un monument (It was built in..., It was designed by...).",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un lieu de mémoire ?",
              paragraphs: [
                "L'axe 3 du programme, « Le passé dans le présent », invite à étudier la manière dont une société se souvient de son histoire. L'historien français Pierre Nora a dirigé un vaste ouvrage collectif, Les Lieux de mémoire (1984-1992), où il désigne ainsi tout ce qui cristallise la mémoire d'une communauté : un monument, mais aussi une cérémonie, une date, un hymne, un objet.",
                "Un monument commémoratif ne se contente pas de rappeler le passé : il dit ce qu'une société choisit d'honorer, et il évolue avec elle. Chaque année, des cérémonies le font revivre ; chaque génération lui donne un sens nouveau. Étudier un lieu de mémoire, c'est donc se demander ce qu'il commémore, qui l'a voulu, et ce qu'il signifie aujourd'hui.",
                "Vocabulaire essentiel : a memorial (un monument commémoratif), a monument, a landmark (un monument emblématique, un repère), heritage (le patrimoine), a World Heritage Site (un site du patrimoine mondial de l'UNESCO), to commemorate (commémorer), to remember (se souvenir), to pay tribute to (rendre hommage à), a wreath (une couronne de fleurs), a plaque, the fallen (les morts au combat), a veteran (un ancien combattant).",
              ],
              box: { label: "Vocabulaire", text: "a memorial, a monument, a landmark, heritage ; to commemorate, to remember, to honour, to pay tribute to ; a wreath, a plaque, a statue, a ceremony ; the fallen, a veteran. Attention : memory = la mémoire, le souvenir ; memorial = le monument." },
            },
            {
              heading: "Se souvenir des guerres au Royaume-Uni",
              paragraphs: [
                "À Londres, dans l'avenue de Whitehall, le Cenotaph (« tombeau vide » en grec) honore les soldats britanniques et du Commonwealth morts à la guerre. Conçu par l'architecte Edwin Lutyens, d'abord construit de manière provisoire en 1919, il est inauguré dans sa version en pierre le 11 novembre 1920. Le même jour, un soldat inconnu, the Unknown Warrior, est inhumé à l'abbaye de Westminster.",
                "Le 11 novembre, Remembrance Day, rappelle l'armistice de 1918 : à 11 heures, on observe deux minutes de silence. Le dimanche le plus proche, Remembrance Sunday, une cérémonie nationale a lieu au Cenotaph, où le souverain dépose une couronne. Dans les semaines qui précèdent, beaucoup de Britanniques portent un coquelicot rouge, the poppy, vendu au profit des anciens combattants depuis 1921.",
                "Ce symbole vient d'un poème, In Flanders Fields, écrit en 1915 par le médecin militaire canadien John McCrae : il y évoque les coquelicots qui poussent entre les croix des soldats tombés en Flandre. Le coquelicot est porté aussi au Canada, en Australie et en Nouvelle-Zélande, où l'on commémore le 25 avril, Anzac Day, le débarquement de Gallipoli (1915).",
              ],
              box: { label: "Repère", text: "11 novembre 1918 : armistice. 11 novembre 1920 : inauguration du Cenotaph et inhumation du Soldat inconnu à Westminster. Remembrance Day (11 novembre) et Remembrance Sunday : deux minutes de silence, couronnes, coquelicots (poppies)." },
            },
            {
              heading: "Mémoire et identité aux États-Unis",
              paragraphs: [
                "La statue de la Liberté, offerte par la France, est l'œuvre du sculpteur Frédéric Auguste Bartholdi ; sa structure intérieure a été conçue par Gustave Eiffel. Inaugurée le 28 octobre 1886 à l'entrée du port de New York, elle est devenue le symbole de la liberté et de l'accueil des immigrants. Tout près, l'île d'Ellis Island a servi de centre d'accueil des immigrants de 1892 à 1954 : plus de 12 millions de personnes y sont passées. C'est aujourd'hui un musée de l'immigration.",
                "À Washington, le Lincoln Memorial (1922) honore le président qui a conduit le pays pendant la guerre de Sécession et engagé l'abolition de l'esclavage ; c'est sur ses marches que Martin Luther King a prononcé « I Have a Dream » en 1963. Non loin, le Vietnam Veterans Memorial (1982), conçu par Maya Lin, alors étudiante en architecture, est un long mur de granit noir où sont gravés les noms de plus de 58 000 soldats morts ou disparus, dans l'ordre chronologique.",
                "À New York, le National September 11 Memorial, inauguré pour le dixième anniversaire des attentats, en 2011, occupe l'emplacement des tours jumelles du World Trade Center : deux bassins carrés entourés des noms des près de 3 000 victimes. Ces mémoriaux récents privilégient la sobriété, les noms et le recueillement plutôt que la statue d'un héros.",
              ],
              box: { label: "Repère", text: "1886 : statue de la Liberté ; 1892-1954 : Ellis Island ; 1922 : Lincoln Memorial ; 1982 : Vietnam Veterans Memorial (Maya Lin) ; 2011 : National September 11 Memorial." },
            },
            {
              heading: "Présenter un monument en anglais : la voix passive",
              paragraphs: [
                "Pour présenter un monument, on s'intéresse souvent à ce qui a été fait plutôt qu'à la personne qui l'a fait : on emploie alors la voix passive, be conjugué + participe passé. L'agent, s'il est utile, est introduit par by : The Statue of Liberty was designed by Bartholdi. The Cenotaph was unveiled in 1920. Wreaths are laid every November. A new memorial will be built.",
                "Suivez la grille What? Where? When? Who? Why?, puis terminez par la signification actuelle. Expressions utiles : It stands in / on... (il se dresse), It was erected / unveiled / built in..., It commemorates..., It pays tribute to..., It is a symbol of..., It reminds us of..., It has become a place where... Exemple : « The Vietnam Veterans Memorial stands in Washington. It was designed by Maya Lin and unveiled in 1982. It pays tribute to the American soldiers who died in Vietnam. »",
              ],
              box: { label: "Règle", text: "Voix passive : sujet + be (au temps voulu) + participe passé (+ by + agent). Présent : Wreaths are laid. Prétérit : It was built in 1920. Futur : It will be restored. Le participe passé des verbes irréguliers : built, laid, seen, written." },
            },
          ],
          keyPoints: [
            "Un lieu de mémoire (Pierre Nora) cristallise la mémoire d'une communauté : monument, date, cérémonie.",
            "Cenotaph (Londres, 1920), Remembrance Day le 11 novembre, poppies inspirés du poème In Flanders Fields (1915).",
            "Statue de la Liberté (1886), Ellis Island (1892-1954), Lincoln Memorial (1922).",
            "Vietnam Veterans Memorial (1982, Maya Lin) et National September 11 Memorial (2011) : la mémoire par les noms.",
            "Voix passive : be + participe passé (It was designed by Maya Lin).",
            "Grille de présentation : What? Where? When? Who? Why? et Why does it still matter?",
          ],
          example: {
            statement: "Présentez le Cenotaph de Londres en anglais, en quatre ou cinq phrases, en employant au moins deux fois la voix passive.",
            solution: [
              "What and where : un monument aux morts, dans l'avenue de Whitehall, à Londres.",
              "When and who : construit d'abord de façon provisoire en 1919, inauguré en pierre le 11 novembre 1920, conçu par Edwin Lutyens.",
              "Why : il honore les soldats morts à la guerre ; une cérémonie nationale s'y tient chaque année.",
              "Signification aujourd'hui : un lieu de recueillement national, qui relie les générations.",
              "Réponse : « The Cenotaph is a war memorial which stands in Whitehall, in central London. It was designed by the architect Edwin Lutyens and it was unveiled on 11 November 1920. It pays tribute to the British and Commonwealth soldiers who died in war. Every year, on Remembrance Sunday, wreaths of poppies are laid at its foot during a national ceremony. Today, it reminds the British that the past is still part of their present. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez ces mots en français : 1) to commemorate 2) a wreath 3) heritage 4) to unveil 5) the fallen 6) a landmark.",
              hint: "Pensez aux cérémonies du 11 novembre et au vocabulaire du patrimoine.",
              solution: [
                "1) to commemorate : commémorer.",
                "2) a wreath : une couronne (de fleurs).",
                "3) heritage : le patrimoine.",
                "4) to unveil : inaugurer, dévoiler (un monument, une plaque).",
                "5) the fallen : les morts au combat ; 6) a landmark : un monument emblématique, un lieu repère.",
                "Résultat : commémorer, une couronne, le patrimoine, inaugurer, les morts au combat, un monument emblématique.",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases à la voix passive : 1) Bartholdi designed the Statue of Liberty. 2) Edwin Lutyens designed the Cenotaph. 3) People lay wreaths at the Cenotaph every November. 4) Maya Lin designed the Vietnam Veterans Memorial. 5) Officials inspected immigrants at Ellis Island. 6) The town will build a new memorial next year (données fictives).",
              hint: "Le complément d'objet devient sujet ; be se met au temps du verbe d'origine ; ajoutez by + agent seulement s'il apporte une information.",
              solution: [
                "1) The Statue of Liberty was designed by Bartholdi.",
                "2) The Cenotaph was designed by Edwin Lutyens.",
                "3) Wreaths are laid at the Cenotaph every November. L'agent « people » est inutile.",
                "4) The Vietnam Veterans Memorial was designed by Maya Lin.",
                "5) Immigrants were inspected at Ellis Island. L'agent peut être omis.",
                "6) A new memorial will be built next year. Futur passif : will be + participe passé.",
                "Résultat : six phrases au passif, au prétérit (was / were designed, inspected), au présent (are laid) et au futur (will be built).",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (120 à 150 mots). You are a guide in Washington. Present the Vietnam Veterans Memorial to a group of English-speaking teenagers: describe it, explain what it commemorates and why it still matters today.",
              hint: "Suivez la grille What, Where, When, Who, Why, employez la voix passive et terminez par le sens du monument aujourd'hui.",
              solution: [
                "Plan : accueil du groupe ; description (mur de granit noir, noms gravés) ; contexte (guerre du Vietnam, Maya Lin, 1982) ; pratiques des visiteurs ; signification actuelle.",
                "Exemple de production : « Welcome, everyone! In front of you is the Vietnam Veterans Memorial. It was unveiled in 1982, and it was designed by Maya Lin, who was only a young architecture student when her project was chosen. As you can see, it is not a statue of a hero: it is a long black granite wall, cut into the ground. More than 58,000 names are engraved on it: the names of the American soldiers who died or went missing in the Vietnam War, in the order in which they were lost. Look closely: the stone is so polished that you can see your own face among the names. Families often leave letters, flags or photos here, and some visitors make paper copies of a name. This memorial reminds us that every war is made of individual lives, and that the past is never really over. » (environ 150 mots)",
                "Vérification : voix passive (was unveiled, was designed, was chosen, are engraved), grille complète, conclusion sur le présent.",
                "Résultat : une présentation vivante et exacte, qui relie le monument à l'axe « Le passé dans le présent ».",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces lieux de mémoire dans l'ordre chronologique de leur inauguration ou de leur création.",
            items: [
              "1886 : la statue de la Liberté est inaugurée à New York.",
              "1892 : le centre d'immigration d'Ellis Island ouvre ses portes.",
              "1915 : John McCrae écrit le poème In Flanders Fields.",
              "1920 : le Cenotaph en pierre est inauguré à Londres.",
              "1922 : le Lincoln Memorial est inauguré à Washington.",
              "1982 : le Vietnam Veterans Memorial est inauguré.",
              "2011 : le National September 11 Memorial est inauguré à New York.",
            ],
          },
          quiz: [
            { q: "What does the Cenotaph in London commemorate?", options: ["The Great Fire of London", "Britain's war dead", "A royal coronation", "The first Olympic Games"], answer: 1, why: "Le Cenotaph honore les soldats britanniques et du Commonwealth morts à la guerre." },
            { q: "Why do many British people wear a red poppy in November?", options: ["To celebrate the start of autumn", "To support the national football team", "To mark the end of the school term", "To remember those who died in wars"], answer: 3, why: "Le coquelicot, inspiré du poème In Flanders Fields, rend hommage aux morts des guerres." },
            { q: "Who designed the Vietnam Veterans Memorial in Washington?", options: ["Gustave Eiffel", "Edwin Lutyens", "Maya Lin", "Frédéric Bartholdi"], answer: 2, why: "Maya Lin, alors étudiante en architecture, a conçu ce mur de granit noir inauguré en 1982." },
            { q: "Choose the correct passive sentence.", options: ["The memorial is unveil in 1920.", "The memorial was unveiled in 1920.", "The memorial was unveiling in 1920.", "The memorial has been unveil in 1920."], answer: 1, why: "Passif au prétérit : was + participe passé (unveiled)." },
            { q: "What is a « landmark »?", options: ["A well-known, easily recognised place", "A field owned by a farmer", "A mark left on the ground by a vehicle", "A line between two countries"], answer: 0, why: "A landmark est un lieu ou un monument emblématique, facile à reconnaître." },
          ],
          trap: "Confondre memorial (le monument commémoratif) et memory (la mémoire, le souvenir), ou oublier le participe passé dans la voix passive (« it was build » au lieu de it was built).",
          method: "Pour présenter un monument, suivez la grille What? Where? When? Who? Why? et terminez toujours par sa signification aujourd'hui (Why does it still matter?) : c'est ce lien entre passé et présent qu'attend l'axe 3.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'histoire-ecran',
          title: "Raconter l'histoire : récits, films et séries historiques",
          minutes: 30,
          objectives: [
            "Identifier les genres qui racontent le passé (historical novel, period drama, biopic, docudrama) et leurs codes.",
            "Raconter au passé en anglais en combinant prétérit simple, prétérit en be + -ing et past perfect.",
            "Discuter de la fidélité historique d'une fiction (accuracy, dramatic licence, anachronism).",
          ],
          course: [
            {
              heading: "Les genres du récit historique",
              paragraphs: [
                "Le passé se raconte dans de nombreux genres. Le roman historique (a historical novel) mêle personnages réels et inventés dans un cadre historique documenté : Hilary Mantel a ainsi raconté l'ascension de Thomas Cromwell à la cour d'Henri VIII dans Wolf Hall (2009). Au cinéma et à la télévision, on distingue le film ou la série d'époque (a period drama, a costume drama), le film biographique (a biopic, de biographical picture), le film de guerre (a war film) et le docudrama, qui reconstitue des faits réels avec des acteurs.",
                "Vocabulaire du récit : to be set in (se dérouler à, à telle époque), to be based on a true story (être tiré d'une histoire vraie), to be inspired by real events, to portray ou to depict (représenter), a character (un personnage), the plot (l'intrigue), the cast (la distribution), a screenplay (un scénario), the director (le réalisateur), a scene, a flashback.",
              ],
              box: { label: "Vocabulaire", text: "a historical novel, a period drama, a biopic, a war film, a docudrama ; to be set in, to be based on a true story, to portray, to depict ; a character, the plot, the cast, the director, a flashback." },
            },
            {
              heading: "Quelques œuvres à connaître",
              paragraphs: [
                "12 Years a Slave (Steve McQueen, 2013) adapte les mémoires de Solomon Northup, publiés en 1853 : cet homme noir libre de l'État de New York est enlevé en 1841 et vendu comme esclave en Louisiane, où il reste douze ans. Le film a reçu l'Oscar du meilleur film. Selma (Ava DuVernay, 2014) raconte les marches de 1965 entre Selma et Montgomery, en Alabama, menées notamment par Martin Luther King pour le droit de vote des Afro-Américains.",
                "Hidden Figures (Theodore Melfi, 2016) révèle le rôle de trois mathématiciennes afro-américaines de la NASA, Katherine Johnson, Dorothy Vaughan et Mary Jackson, pendant la course à l'espace du début des années 1960. Dunkirk (Christopher Nolan, 2017) reconstitue l'évacuation des soldats alliés encerclés à Dunkerque en mai et juin 1940. Enfin, la série The Crown (Netflix, 2016-2023), créée par Peter Morgan, retrace le règne d'Élisabeth II.",
              ],
              box: { label: "Repère", text: "12 Years a Slave (2013) : l'esclavage aux États-Unis. Selma (2014) : les droits civiques, 1965. Hidden Figures (2016) : la NASA et la course à l'espace. Dunkirk (2017) : 1940. The Crown (2016-2023) : le règne d'Élisabeth II." },
            },
            {
              heading: "Vérité historique et liberté de création",
              paragraphs: [
                "Une fiction historique n'est pas un cours d'histoire. Pour construire un récit captivant, les scénaristes inventent des dialogues, resserrent la chronologie, fusionnent plusieurs personnes réelles en un seul personnage (a composite character) ou ajoutent des scènes. Dans Hidden Figures, par exemple, le chef de service joué par Kevin Costner est un personnage composite. On parle de dramatic licence (la liberté que prend l'auteur avec les faits).",
                "Ces libertés font débat. The Crown a été critiquée pour certaines scènes inventées, et Netflix a fini par la présenter explicitement comme une fiction inspirée de faits réels. À l'inverse, ces œuvres ont un grand mérite : elles font connaître au public des histoires oubliées. Avant Hidden Figures, peu de spectateurs connaissaient le nom de Katherine Johnson. Le spectateur avisé reste donc critique : il vérifie, compare, distingue l'histoire et la fiction.",
                "Expressions utiles : historically accurate (historiquement exact), to be faithful to history, to take liberties with the facts, an anachronism (un détail qui n'appartient pas à l'époque représentée), to fictionalise, to shed light on (mettre en lumière), to raise awareness of (sensibiliser à).",
              ],
              box: { label: "À retenir", text: "Accuracy (l'exactitude) s'oppose à dramatic licence (la liberté de l'auteur). Une fiction historique peut inventer des dialogues, fusionner des personnages, déplacer des événements : elle éclaire le passé sans le remplacer." },
            },
            {
              heading: "Raconter au passé",
              paragraphs: [
                "Un récit au passé combine trois formes. Le prétérit simple fait avancer l'action principale : The soldiers reached the beach and waited. Le prétérit en be + -ing (was / were + V-ing) installe le décor ou une action en cours : The sun was setting and the wind was blowing. Le past perfect (had + participe passé) exprime une action antérieure à un autre moment du passé : When the boats arrived, the soldiers had waited for days.",
                "Les connecteurs structurent le récit : first, then, after that, meanwhile (pendant ce temps), while (pendant que), as soon as (dès que), eventually ou in the end (finalement). Pour présenter une œuvre, en revanche, on emploie le présent : The film tells the story of..., It shows..., The main character is...",
              ],
              box: { label: "Règle", text: "Action principale : prétérit simple (he left). Décor, action en cours : was / were + V-ing (it was raining). Action antérieure : had + participe passé (he had already left). Présenter une œuvre : présent (The film tells the story of...)." },
            },
          ],
          keyPoints: [
            "Genres : historical novel, period drama, biopic, war film, docudrama.",
            "To be set in, to be based on a true story, to portray, the plot, the cast.",
            "12 Years a Slave (2013), Selma (2014), Hidden Figures (2016), Dunkirk (2017), The Crown (2016-2023).",
            "Accuracy contre dramatic licence : la fiction invente, fusionne, resserre ; le spectateur vérifie.",
            "Récit : prétérit simple (action), was / were + V-ing (décor), had + participe passé (antériorité).",
            "Présenter une œuvre au présent : The film tells the story of...",
          ],
          example: {
            statement: "Racontez en anglais, en quatre ou cinq phrases au passé, l'histoire de Solomon Northup telle que la présente 12 Years a Slave. Employez le prétérit simple, le prétérit en be + -ing et le past perfect.",
            solution: [
              "Repérer les faits : homme libre, violoniste, vivant dans l'État de New York avec sa famille ; enlevé en 1841 après une offre de travail ; vendu comme esclave en Louisiane ; libéré en 1853 grâce à un charpentier canadien qui écrit à ses amis du Nord.",
              "Choisir les temps : prétérit simple pour les étapes (was kidnapped, was sold), be + -ing pour la situation en cours (was working), past perfect pour l'antériorité (had always lived).",
              "Relier les phrases avec des connecteurs : one day, while, eventually.",
              "Réponse : « Solomon Northup was a free Black man who lived in the state of New York with his wife and children. He had always lived as a free man and earned money as a violinist. One day in 1841, two men offered him a job, took him to Washington, and he was kidnapped and sold into slavery in Louisiana. While he was working on a plantation, he met a Canadian carpenter who agreed to send letters to his friends in the North. Eventually, in 1853, after twelve years as a slave, he was freed and went back to his family. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec set, based, biopic, cast, plot, portrays : 1) Dunkirk is ___ in 1940. 2) Hidden Figures is ___ on a true story. 3) A film about the life of a real person is a ___. 4) The ___ of the film includes many famous actors. 5) The ___ is the series of events in a story. 6) In the first seasons of The Crown, Claire Foy ___ the young Queen Elizabeth II.",
              hint: "Lisez chaque phrase en entier : la préposition qui suit (in, on) aide à trouver le mot.",
              solution: [
                "1) set : to be set in = se dérouler à une époque, dans un lieu.",
                "2) based : to be based on a true story.",
                "3) biopic : un film biographique.",
                "4) cast : la distribution, l'ensemble des acteurs.",
                "5) plot : l'intrigue. 6) portrays : interprète, représente.",
                "Résultat : set, based, biopic, cast, plot, portrays.",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes au prétérit simple, au prétérit en be + -ing ou au past perfect : « In late May 1940, thousands of British and French soldiers (wait) on the beaches of Dunkirk, because the German army (cut) them off a few days earlier. While the soldiers (wait), hundreds of small civilian boats (cross) the Channel to help the Royal Navy. By 4 June, more than 330,000 men (be) rescued. »",
              hint: "Distinguez le décor (action en cours), l'action antérieure (a few days earlier, by 4 June) et l'événement principal.",
              solution: [
                "were waiting : action en cours, décor de la scène.",
                "had cut : l'encerclement est antérieur à l'attente (« a few days earlier »).",
                "were waiting : while introduit une action en cours.",
                "crossed : action principale du récit, au prétérit simple.",
                "had been : « by 4 June » (à la date du 4 juin) fait le bilan d'actions antérieures : past perfect passif (had been rescued).",
                "Résultat : were waiting, had cut, were waiting, crossed, had been rescued.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (120 à 150 mots). « Should historical films and series always be faithful to history? » Give arguments for and against, with examples, before giving your own opinion.",
              hint: "Prévoyez un paragraphe pour l'exactitude historique, un pour la liberté de création, puis une conclusion nuancée ; citez au moins une œuvre étudiée.",
              solution: [
                "Arguments pour l'exactitude : beaucoup de spectateurs apprennent l'histoire par les écrans ; une scène inventée peut déformer l'image d'une personne réelle (débats autour de The Crown).",
                "Arguments pour la liberté : une fiction n'est pas un documentaire ; les inventions rendent le récit vivant et permettent de faire connaître des histoires oubliées (Hidden Figures).",
                "Exemple de production : « Today, many people learn about the past by watching films and series rather than by reading history books. That is why some critics think that historical fiction should always be accurate. When The Crown showed scenes that never happened, some viewers believed they were real, which can damage the reputation of real people. However, a film is not a history lesson. Directors need to create emotions, so they invent dialogues or combine several people into one character. Thanks to these choices, Hidden Figures was a great success and made millions of viewers discover Katherine Johnson and her colleagues, who had been forgotten for decades. In my opinion, historical fiction may take some liberties, but it should never change the main facts, and it should be honest about what is invented. As viewers, we should also check the facts. » (environ 150 mots)",
                "Résultat : un texte argumenté, illustré par deux œuvres, qui conclut de façon nuancée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "a biopic", right: "un film sur la vie d'une personne réelle" },
              { left: "a period drama", right: "une fiction qui se déroule à une époque passée" },
              { left: "a historical novel", right: "un roman qui mêle fiction et cadre historique" },
              { left: "an anachronism", right: "un détail qui n'appartient pas à l'époque représentée" },
              { left: "dramatic licence", right: "la liberté que l'auteur prend avec les faits" },
              { left: "a composite character", right: "un personnage créé à partir de plusieurs personnes réelles" },
            ],
          },
          quiz: [
            { q: "What is a « biopic »?", options: ["A documentary about animals and plants", "A film about a real person's life", "A very short film made with a smartphone", "A comedy set in a secondary school"], answer: 1, why: "Biopic vient de biographical picture : un film consacré à la vie d'une personne réelle." },
            { q: "« The film is ___ in London during the Second World War. »", options: ["put", "made", "set", "placed"], answer: 2, why: "To be set in : se dérouler dans un lieu ou à une époque." },
            { q: "Which film tells the story of three Black women mathematicians at NASA?", options: ["Hidden Figures", "12 Years a Slave", "Dunkirk", "Selma"], answer: 0, why: "Hidden Figures (2016) raconte le rôle de Katherine Johnson, Dorothy Vaughan et Mary Jackson." },
            { q: "« When we arrived at the cinema, the film ___ already ___. »", options: ["has / started", "had / started", "was / starting", "did / start"], answer: 1, why: "Le film a commencé avant notre arrivée : past perfect, had started." },
            { q: "What is an « anachronism » in a historical film?", options: ["A scene that was filmed in black and white", "An actor who plays two different characters", "An object or detail from the wrong period", "A spelling mistake in the film's subtitles"], answer: 2, why: "Un anachronisme est un élément qui n'appartient pas à l'époque représentée, comme une montre moderne dans un film sur le Moyen Âge." },
          ],
          trap: "Employer le prétérit simple là où il faut le past perfect pour une action antérieure : « When we arrived, the film started » signifie qu'il commence à notre arrivée, « the film had started », qu'il avait déjà commencé. Attention aussi à ne pas raconter le scénario d'une œuvre au passé : on la présente au présent.",
          method: "Pour raconter, tracez une frise rapide : les actions principales au prétérit simple, le décor au prétérit en be + -ing, les retours en arrière au past perfect. Reliez ensuite les phrases avec des connecteurs (then, while, eventually).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'memoires-contestees',
          title: "Un héritage débattu : statues et mémoires contestées",
          minutes: 30,
          objectives: [
            "Présenter en anglais une controverse mémorielle (Bristol, Le Cap, les monuments confédérés aux États-Unis).",
            "Exprimer une opinion, l'accord, le désaccord et la concession (although, whereas, however).",
            "Argumenter sur le sort des statues contestées : retirer, contextualiser, exposer au musée.",
          ],
          course: [
            {
              heading: "Pourquoi les statues font débat",
              paragraphs: [
                "Une statue n'est pas un simple objet du passé : elle honore une personne que la société a choisi de célébrer à une époque donnée. Or les valeurs changent. Certains personnages statufiés au XIXe ou au début du XXe siècle ont participé à la traite des esclaves, à la colonisation ou à la ségrégation. Faut-il continuer à les honorer dans l'espace public ?",
                "Deux positions s'affrontent. Pour les uns, retirer ces statues reviendrait à effacer l'histoire (to erase history) : mieux vaut les garder et les expliquer. Pour les autres, une statue ne raconte pas l'histoire, elle glorifie une personne (to glorify) : laisser sur un piédestal un marchand d'esclaves blesse les descendants de ses victimes. Ce débat est au cœur de l'axe « Le passé dans le présent ».",
                "Vocabulaire : a statue, a plinth ou a pedestal (un socle), to honour, to glorify, legacy (l'héritage qu'une personne laisse, son bilan), a slave trader (un marchand d'esclaves), the slave trade (la traite), to topple ou to tear down (renverser, abattre), to remove (retirer), to rename (rebaptiser), controversial (controversé), to contextualise (remettre en contexte).",
              ],
              box: { label: "Vocabulaire", text: "a plinth, to honour, to glorify, legacy, a slave trader, the slave trade ; to topple, to tear down, to remove, to rename, to contextualise ; controversial. Legacy = l'héritage d'une personne ; heritage = le patrimoine." },
            },
            {
              heading: "Bristol, 2020 : la statue d'Edward Colston",
              paragraphs: [
                "Edward Colston (1636-1721) était un marchand de Bristol et un dirigeant de la Royal African Company, qui transportait des Africains réduits en esclavage vers les Amériques. Il a aussi financé des écoles et des œuvres de charité dans sa ville, qui lui a élevé une statue de bronze en 1895. Depuis des années, des habitants demandaient son retrait.",
                "Le 7 juin 2020, lors des manifestations Black Lives Matter qui ont suivi la mort de George Floyd, tué par un policier à Minneapolis le 25 mai, des manifestants ont renversé la statue et l'ont jetée dans le port. La ville l'a repêchée quelques jours plus tard ; elle est exposée depuis 2021 au musée M Shed, couchée, avec des pancartes de la manifestation. En janvier 2022, quatre personnes poursuivies pour dégradation ont été acquittées par un jury.",
                "Le débat a dépassé la statue : la salle de concert Colston Hall a été rebaptisée Bristol Beacon, et des écoles ont changé de nom. En juillet 2020, l'artiste Marc Quinn a installé sur le socle vide une statue d'une manifestante, Jen Reid, le poing levé ; la ville l'a retirée dès le lendemain.",
              ],
              box: { label: "Repère", text: "1895 : statue de Colston à Bristol. 25 mai 2020 : mort de George Floyd. 7 juin 2020 : la statue est renversée et jetée dans le port. 2021 : exposée au musée M Shed. Janvier 2022 : acquittement des quatre prévenus." },
            },
            {
              heading: "De l'Afrique du Sud aux États-Unis",
              paragraphs: [
                "En mars 2015, à l'université du Cap, en Afrique du Sud, des étudiants lancent le mouvement Rhodes Must Fall contre la statue de Cecil Rhodes (1853-1902), homme d'affaires et Premier ministre de la colonie du Cap, symbole de l'impérialisme britannique. La statue est retirée le 9 avril 2015. Le mouvement gagne Oxford, où le collège d'Oriel décide pourtant en 2021 de conserver sa statue de Rhodes.",
                "Aux États-Unis, le débat porte sur les monuments confédérés, qui honorent les chefs des États du Sud esclavagistes pendant la guerre de Sécession (1861-1865). Beaucoup ont été élevés des décennies après la guerre, notamment au début du XXe siècle, à l'époque de la ségrégation. En août 2017, à Charlottesville, en Virginie, un rassemblement d'extrême droite contre le retrait d'une statue du général Robert E. Lee se termine par la mort d'une contre-manifestante, Heather Heyer. Les statues de Lee de Charlottesville et de Richmond sont retirées en 2021.",
              ],
              box: { label: "Repère", text: "2015 : Rhodes Must Fall, retrait de la statue de Rhodes au Cap. 2017 : Charlottesville. 2020 : Bristol. 2021 : retrait des statues de Lee à Charlottesville et à Richmond ; Oriel College (Oxford) garde sa statue de Rhodes." },
            },
            {
              heading: "Que faire des statues contestées ? Argumenter",
              paragraphs: [
                "Plusieurs solutions existent : laisser la statue telle quelle ; la retirer et la détruire ; la déplacer dans un musée, où elle devient un objet d'histoire ; la laisser en place en ajoutant une plaque explicative (to contextualise) ; élever à côté de nouveaux monuments qui honorent d'autres figures, par exemple les victimes ou ceux qui ont combattu l'injustice.",
                "Pour argumenter en anglais, variez les expressions d'opinion (In my opinion, I believe that, As far as I'm concerned, I strongly disagree with) et de concession, qui montrent que vous prenez en compte l'autre position : Although it is part of history, the statue glorifies a slave trader. It is true that..., but... Some want to keep the statues, whereas others want them removed. However, nevertheless (pourtant), on the one hand... on the other hand...",
              ],
              box: { label: "Règle", text: "Although / even though + proposition (Although the statue is old, ...). Whereas : oppose deux faits (Some..., whereas others...). However et nevertheless : en tête de phrase, suivis d'une virgule. Despite + nom ou V-ing (Despite the protests, ...)." },
            },
          ],
          keyPoints: [
            "Une statue honore et glorifie : quand les valeurs changent, elle devient controversée.",
            "Bristol, 7 juin 2020 : la statue du marchand d'esclaves Edward Colston est jetée dans le port, puis exposée au musée M Shed.",
            "Rhodes Must Fall : statue retirée au Cap en 2015 ; Oriel College (Oxford) garde la sienne en 2021.",
            "États-Unis : monuments confédérés, Charlottesville 2017, statues de Lee retirées en 2021.",
            "Solutions : retirer, déplacer au musée, contextualiser par une plaque, ajouter d'autres monuments.",
            "Concession : although, even though, whereas, however, despite.",
          ],
          example: {
            statement: "Rédigez en anglais un paragraphe de quatre phrases qui présente les deux positions dans le débat sur la statue d'Edward Colston, en employant although et whereas.",
            solution: [
              "Présenter le fait : la statue d'un marchand d'esclaves, renversée en 2020 à Bristol.",
              "Présenter la première position avec although : il a financé des écoles, mais il était impliqué dans la traite.",
              "Opposer les deux camps avec whereas : effacer l'histoire, ou cesser d'honorer un marchand d'esclaves.",
              "Proposer une issue : le musée, qui permet d'expliquer.",
              "Réponse : « In June 2020, protesters in Bristol pulled down the statue of Edward Colston, a merchant involved in the slave trade. Although Colston gave money to schools and charities, his fortune was partly linked to the trade in enslaved Africans. Some people think that removing his statue erases history, whereas others believe that a city should not honour a slave trader. Today the statue is displayed in a museum, where its story can be explained. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec legacy, toppled, plinth, slave trader, removed, honour : « Edward Colston was a ___ from Bristol. In 1895, the city decided to ___ him with a statue. In 2020, protesters ___ it and threw it into the harbour, leaving an empty ___. Some people wanted the statue to be ___ much earlier. Today, the debate is about Colston's ___. »",
              hint: "Cherchez d'abord la nature du mot attendu : un nom, un verbe à la base verbale, un participe passé.",
              solution: [
                "a slave trader : un nom de personne, après « a ».",
                "to honour : verbe à la base verbale après « decided to ».",
                "toppled : prétérit, action de 2020.",
                "plinth : le socle vide, après « an empty ».",
                "removed : participe passé, passif « to be removed ». legacy : l'héritage, le bilan de Colston.",
                "Résultat : slave trader, honour, toppled, plinth, removed, legacy.",
              ],
            },
            {
              level: 2,
              statement: "Reliez les deux phrases avec le mot indiqué : 1) Colston gave money to schools. He was involved in the slave trade. (although) 2) Some people want to remove the statues. Others want to keep them. (whereas) 3) Statues are part of our history. They should be explained to visitors. (however) 4) The statue was thrown into the harbour. It is now displayed in a museum. (although) 5) There were protests. Oriel College kept its statue of Rhodes. (despite)",
              hint: "Although et whereas relient deux propositions ; however commence une nouvelle phrase et prend une virgule ; despite est suivi d'un nom.",
              solution: [
                "1) Although Colston gave money to schools, he was involved in the slave trade.",
                "2) Some people want to remove the statues, whereas others want to keep them.",
                "3) Statues are part of our history. However, they should be explained to visitors.",
                "4) Although the statue was thrown into the harbour, it is now displayed in a museum.",
                "5) Despite the protests, Oriel College kept its statue of Rhodes.",
                "Résultat : cinq phrases complexes qui expriment la concession et l'opposition.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (150 mots environ). « Should statues of controversial historical figures be removed from public places? » Present both sides of the debate, using at least one precise example, and give your opinion.",
              hint: "Introduisez le débat par un exemple (Bristol 2020), consacrez un paragraphe à chaque position, puis concluez par une solution argumentée en employant les connecteurs de concession.",
              solution: [
                "Plan : introduction (l'exemple de Bristol, la question) ; garder les statues (patrimoine, mémoire, ne pas effacer l'histoire) ; les retirer (une statue honore, blessure pour les descendants) ; conclusion nuancée (le musée et la contextualisation).",
                "Exemple de production : « In June 2020, the statue of the slave trader Edward Colston was thrown into Bristol harbour. This event raised a difficult question: should statues of controversial figures be removed? On the one hand, statues are part of our heritage. Some people fear that removing them would erase history, and they believe that we should learn from the past instead of hiding it. On the other hand, a statue is not a history book: it is a way of honouring someone. Although Colston gave money to his city, keeping him on a plinth means celebrating a man who made money from human suffering, which is deeply hurtful for the descendants of enslaved people. In my opinion, the best solution is to move such statues to museums, where they can be explained, and to build new monuments to people who fought injustice. Thus, we can remember history without glorifying it. » (environ 155 mots)",
                "Vérification : exemple précis et daté, deux positions présentées honnêtement, connecteurs (On the one hand, On the other hand, Although, In my opinion, Thus), conclusion personnelle.",
                "Résultat : un essai équilibré qui propose une solution argumentée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Statues et mémoires contestées.",
            statements: [
              { text: "The statue of Edward Colston was thrown into Bristol harbour in 2020.", true: true, why: "Le 7 juin 2020, lors d'une manifestation Black Lives Matter." },
              { text: "Colston's statue was destroyed and has disappeared for good.", true: false, why: "Elle a été repêchée et elle est exposée au musée M Shed de Bristol depuis 2021." },
              { text: "The statue of Cecil Rhodes at the University of Cape Town was removed in 2015.", true: true, why: "Elle a été retirée le 9 avril 2015, après les manifestations du mouvement Rhodes Must Fall." },
              { text: "All Confederate monuments were built immediately after the Civil War.", true: false, why: "Beaucoup ont été élevés des décennies plus tard, notamment au début du XXe siècle, à l'époque de la ségrégation." },
              { text: "To topple a statue means to clean and restore it.", true: false, why: "To topple signifie renverser, faire tomber." },
              { text: "Adding an explanatory plaque is one way of contextualising a statue.", true: true, why: "La plaque explique qui était la personne et pourquoi elle est contestée." },
              { text: "Oriel College in Oxford removed its statue of Rhodes in 2021.", true: false, why: "Le collège a décidé en 2021 de conserver la statue." },
            ],
          },
          quiz: [
            { q: "In which city was Edward Colston's statue pulled down in June 2020?", options: ["Liverpool", "Bristol", "Manchester", "Cape Town"], answer: 1, why: "La statue se dressait à Bristol depuis 1895 ; elle a été jetée dans le port de la ville." },
            { q: "Why is Edward Colston a controversial figure?", options: ["He was involved in the slave trade.", "He refused to give money to schools.", "He led a violent revolt against the king.", "He destroyed the old city harbour."], answer: 0, why: "Colston était un dirigeant de la Royal African Company, qui pratiquait la traite des esclaves." },
            { q: "Which movement began at the University of Cape Town in 2015?", options: ["Black Lives Matter", "Fridays for Future", "Rhodes Must Fall", "Me Too"], answer: 2, why: "Rhodes Must Fall réclamait le retrait de la statue de Cecil Rhodes, obtenu en avril 2015." },
            { q: "Which sentence expresses a concession?", options: ["It is old, so it should stay in place.", "It is old and it is made of bronze.", "Because it is old, it is very famous.", "Although it is old, it must go."], answer: 3, why: "Although introduit une concession : on reconnaît un fait avant d'affirmer le contraire." },
            { q: "What does « to tear down a statue » mean?", options: ["Nettoyer une statue", "Abattre une statue", "Restaurer une statue", "Inaugurer une statue"], answer: 1, why: "To tear down signifie abattre, démolir." },
          ],
          trap: "Présenter le débat de façon caricaturale, sans exemple précis ni position adverse, ou confondre legacy (l'héritage moral, le bilan d'une personne) et heritage (le patrimoine).",
          method: "Pour argumenter sur une question mémorielle, appuyez chaque idée sur un exemple daté (Le Cap 2015, Charlottesville 2017, Bristol 2020), présentez honnêtement la position que vous ne partagez pas, puis concluez par une solution nuancée.",
        },
      ],
    },
    /* ==================================================================== */
    /* AXE 4 · DÉFIS ET TRANSITIONS                                          */
    /* ==================================================================== */
    {
      id: 'defis-transitions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'defi-climatique',
          title: "Le défi climatique : « Saving the planet »",
          minutes: 30,
          objectives: [
            "Comprendre et employer le vocabulaire du changement climatique (global warming, greenhouse gases, carbon footprint).",
            "Expliquer les causes et les conséquences du réchauffement avec les connecteurs adaptés (because of, due to, as a result, therefore).",
            "Présenter des solutions individuelles et collectives en employant les modaux de conseil et d'obligation.",
          ],
          course: [
            {
              heading: "Comprendre le phénomène",
              paragraphs: [
                "L'effet de serre (the greenhouse effect) est d'abord un phénomène naturel et indispensable à la vie : certains gaz de l'atmosphère, comme le dioxyde de carbone (carbon dioxide, CO2) et le méthane (methane), retiennent une partie de la chaleur du Soleil. Mais depuis la révolution industrielle, les activités humaines augmentent fortement la concentration de ces gaz à effet de serre (greenhouse gases) : combustion des énergies fossiles (fossil fuels : coal, oil, gas), déforestation (deforestation), élevage et agriculture intensifs.",
                "Il en résulte un réchauffement climatique (global warming) et un dérèglement du climat (climate change). Le GIEC (en anglais IPCC, Intergovernmental Panel on Climate Change), créé en 1988, rassemble les travaux des scientifiques du monde entier. Dans son rapport de 2021, il affirme que l'influence humaine sur le réchauffement est « sans équivoque » (unequivocal) et estime que la planète s'est réchauffée d'environ 1,1 °C sur la décennie 2011-2020 par rapport à l'ère préindustrielle.",
                "Attention à ne pas confondre weather (le temps qu'il fait, un jour donné) et climate (le climat, les conditions moyennes sur une longue période). Un hiver froid ne contredit pas le réchauffement du climat.",
              ],
              box: { label: "Vocabulaire", text: "the greenhouse effect, greenhouse gases, carbon dioxide (CO2), methane ; fossil fuels (coal, oil, gas) ; deforestation ; global warming, climate change ; weather (le temps) ≠ climate (le climat)." },
            },
            {
              heading: "Les conséquences",
              paragraphs: [
                "Le réchauffement multiplie les événements extrêmes (extreme weather events) : vagues de chaleur (heatwaves), sécheresses (droughts), incendies de forêt (wildfires, bushfires en Australie), inondations (floods), tempêtes plus violentes. La fonte des glaciers et des calottes glaciaires (melting glaciers and ice sheets) et la dilatation des océans provoquent la montée du niveau des mers (rising sea levels).",
                "Le monde anglophone en offre des exemples frappants. En Australie, les gigantesques incendies de l'été 2019-2020, surnommé Black Summer, ont ravagé des millions d'hectares. La Grande Barrière de corail subit des épisodes répétés de blanchissement (coral bleaching) liés à la chaleur de l'eau. Dans le Pacifique, de petits États insulaires comme Tuvalu ou Kiribati sont menacés par la montée des eaux.",
                "Le réchauffement menace aussi la biodiversité (biodiversity) : des espèces disparaissent (species are becoming extinct, endangered species). Il pousse enfin des populations à quitter leur région : on parle de climate refugees ou de climate migrants.",
              ],
              box: { label: "À retenir", text: "heatwaves, droughts, wildfires, floods, storms ; melting glaciers, rising sea levels ; coral bleaching ; endangered species, biodiversity loss ; climate refugees. Exemples : Black Summer en Australie (2019-2020), Tuvalu et Kiribati." },
            },
            {
              heading: "Agir : des accords internationaux aux gestes quotidiens",
              paragraphs: [
                "L'accord de Paris (the Paris Agreement), adopté en décembre 2015 lors de la COP21, engage les pays signataires à contenir le réchauffement nettement en dessous de 2 °C par rapport à l'ère préindustrielle et à poursuivre leurs efforts pour le limiter à 1,5 °C. Les COP (Conferences of the Parties) se réunissent chaque année. Les solutions collectives passent par les énergies renouvelables (renewable energy : solar, wind power), l'isolation des bâtiments, les transports en commun, la taxation du carbone.",
                "La jeunesse s'est mobilisée : en août 2018, la Suédoise Greta Thunberg, alors âgée de quinze ans, commence une grève de l'école devant le Parlement de son pays ; le mouvement Fridays for Future se répand dans le monde entier. Chacun peut aussi réduire son empreinte carbone (carbon footprint) : manger moins de viande, préférer le vélo ou le train, économiser l'énergie, réparer et réutiliser (reduce, reuse, recycle), éviter la mode jetable (fast fashion).",
                "Le débat porte sur la répartition des efforts : les gestes individuels suffisent-ils, ou la responsabilité revient-elle d'abord aux États et aux entreprises ? Méfiez-vous aussi du greenwashing (l'écoblanchiment), quand une entreprise se donne une image écologique trompeuse.",
              ],
              box: { label: "Repère", text: "1988 : création du GIEC (IPCC). Décembre 2015 : accord de Paris (COP21), nettement sous 2 °C, si possible 1,5 °C. Août 2018 : première grève scolaire de Greta Thunberg, naissance de Fridays for Future." },
            },
            {
              heading: "Exprimer la cause, la conséquence et la solution",
              paragraphs: [
                "Cause : because ou as + proposition (because the ice is melting) ; because of ou due to + nom (because of global warming, due to human activities) ; to be caused by. Conséquence : so (donc, dans la phrase), therefore, as a result, consequently (en tête de phrase, avec une virgule), which leads to, that's why. Exemple : Fossil fuels release CO2. As a result, temperatures are rising.",
                "Pour proposer des solutions, employez les modaux : we should (conseil), we must ou we have to (obligation), we could (suggestion). D'autres tournures sont utiles : It is essential to act now. It's high time we changed our habits (il est grand temps que nous changions, avec le prétérit après it's high time). If we don't act now, it will be too late.",
              ],
              box: { label: "Règle", text: "because / as + proposition ; because of / due to + nom. so, therefore, as a result, consequently, that's why. Solutions : should, must, have to, could ; It's high time we + prétérit (It's high time we acted)." },
            },
          ],
          keyPoints: [
            "Effet de serre naturel, renforcé par les énergies fossiles et la déforestation : global warming, climate change.",
            "GIEC (IPCC, 1988) : influence humaine « sans équivoque » ; environ 1,1 °C de réchauffement en 2011-2020.",
            "Conséquences : heatwaves, droughts, wildfires, floods, rising sea levels, coral bleaching, climate refugees.",
            "Accord de Paris (2015) : nettement sous 2 °C, si possible 1,5 °C. Greta Thunberg et Fridays for Future (2018).",
            "Because + proposition, because of / due to + nom ; therefore, as a result, that's why.",
            "Weather (le temps qu'il fait) ≠ climate (le climat).",
          ],
          example: {
            statement: "Expliquez en anglais, en quatre phrases, la chaîne de causes et de conséquences du réchauffement climatique, en employant au moins trois connecteurs différents.",
            solution: [
              "Identifier la cause première : la combustion des énergies fossiles et la déforestation.",
              "Enchaîner les conséquences : plus de gaz à effet de serre, hausse des températures, fonte des glaces, montée des eaux.",
              "Choisir les connecteurs : because of + nom, as a result + proposition, which leads to, that's why.",
              "Réponse : « Because of human activities such as burning coal, oil and gas, there are more and more greenhouse gases in the atmosphere. As a result, the atmosphere traps more heat and global temperatures are rising. Glaciers and ice sheets are melting, which leads to rising sea levels. That's why small island nations like Tuvalu are threatened by the ocean. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : 1) les combustibles fossiles 2) les gaz à effet de serre 3) l'empreinte carbone 4) les énergies renouvelables 5) la sécheresse 6) la montée du niveau des mers.",
              hint: "Plusieurs de ces expressions se trouvent dans les encadrés du cours ; attention à l'ordre des mots en anglais (le nom principal en dernier).",
              solution: [
                "1) fossil fuels.",
                "2) greenhouse gases.",
                "3) a carbon footprint.",
                "4) renewable energy (ou renewable energies, renewables).",
                "5) (a) drought ; 6) rising sea levels.",
                "Résultat : fossil fuels, greenhouse gases, carbon footprint, renewable energy, drought, rising sea levels.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec because, because of, so, therefore, as a result, due to (chacun une fois) : 1) Glaciers are melting ___ global warming. 2) Sea levels are rising ___ ice sheets are melting. 3) Burning coal releases CO2. ___, it contributes to global warming. 4) It hasn't rained for months, ___ farmers are worried. 5) The fires were ___ extreme heat and drought. 6) Many coral reefs have bleached. ___, many fish species are threatened.",
              hint: "Regardez ce qui suit le blanc : une proposition (sujet + verbe) ou un nom ; et sa place : en tête de phrase ou au milieu.",
              solution: [
                "1) because of : suivi d'un nom (global warming).",
                "2) because : suivi d'une proposition (ice sheets are melting).",
                "3) Therefore : en tête de phrase, avec une virgule, introduit une conséquence.",
                "4) so : au milieu de la phrase, après une virgule, introduit une conséquence.",
                "5) due to : après be, suivi de noms (were due to extreme heat and drought).",
                "6) As a result : en tête de phrase, introduit une conséquence. Therefore et As a result sont interchangeables en 3 et 6.",
                "Résultat : because of, because, Therefore, so, due to, As a result.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (150 mots environ). Your school is organising a « Climate Week ». Write an article for the school website: explain the causes and consequences of climate change, then suggest what students can do, both individually and collectively.",
              hint: "Donnez un titre accrocheur, puis trois paragraphes : causes, conséquences, solutions ; employez des connecteurs de cause et de conséquence et des modaux.",
              solution: [
                "Plan : titre ; causes (énergies fossiles, déforestation) ; conséquences (événements extrêmes, montée des eaux, biodiversité) ; solutions (gestes individuels, actions collectives au lycée) ; appel final.",
                "Exemple de production : « Climate Week: it's high time we acted! Our planet is getting warmer, and scientists agree that humans are responsible. Because we burn coal, oil and gas and cut down forests, greenhouse gases are trapping more and more heat in the atmosphere. As a result, heatwaves, droughts and floods are becoming more frequent, and rising sea levels threaten millions of people. Many animal species are also in danger. So what can we do? First, we should change our daily habits: we could walk or cycle to school, eat less meat at the canteen and stop buying clothes we don't need. But individual actions are not enough. Together, we must ask our school to install solar panels, to sort its waste and to plant trees in the playground. If every student does a little, our school will make a big difference. Join us! » (environ 150 mots)",
                "Vérification : connecteurs (Because, As a result, So, But), modaux (should, could, must), it's high time + prétérit, first conditional final.",
                "Résultat : un article structuré, informatif et mobilisateur.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la chaîne de causes et de conséquences.",
            items: [
              "Humans burn fossil fuels and cut down forests.",
              "More greenhouse gases are released into the atmosphere.",
              "The greenhouse effect becomes stronger.",
              "Global temperatures rise.",
              "Glaciers and ice sheets melt.",
              "Sea levels rise.",
              "Low-lying islands and coasts are flooded.",
            ],
          },
          quiz: [
            { q: "What was the main goal of the Paris Agreement (2015)?", options: ["To ban all cars in cities by the year 2020", "To keep warming well below 2 °C", "To stop all international flights", "To plant one billion trees in Europe"], answer: 1, why: "L'accord vise à contenir le réchauffement nettement en dessous de 2 °C, et si possible à 1,5 °C." },
            { q: "Which of these is a fossil fuel?", options: ["solar power", "wind", "hydropower", "coal"], answer: 3, why: "Le charbon, comme le pétrole et le gaz, est une énergie fossile ; les trois autres sont renouvelables." },
            { q: "« Sea levels are rising ___ melting ice. »", options: ["because", "due to", "so", "therefore"], answer: 1, why: "Due to (comme because of) est suivi d'un nom ; because est suivi d'une proposition." },
            { q: "What is a « carbon footprint »?", options: ["The mark a coal miner's boot leaves", "A tax paid by companies that pollute a lot", "The greenhouse gases our activities produce", "A path made of recycled materials in a park"], answer: 2, why: "L'empreinte carbone mesure la quantité de gaz à effet de serre émise par une personne, un produit ou une activité." },
            { q: "Who started a school strike for the climate in August 2018?", options: ["Greta Thunberg", "Malala Yousafzai", "Jane Goodall", "David Attenborough"], answer: 0, why: "Greta Thunberg a commencé sa grève devant le Parlement suédois, à l'origine de Fridays for Future." },
          ],
          trap: "Confondre because (suivi d'une proposition : because the ice is melting) et because of (suivi d'un nom : because of global warming), ou confondre weather (le temps qu'il fait) et climate (le climat).",
          method: "Construisez une carte mentale en trois branches, causes, consequences, solutions, avec pour chacune cinq mots et un connecteur : vous aurez la matière d'un exposé de deux minutes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'transition-numerique',
          title: "Innovations et transition numérique",
          minutes: 30,
          objectives: [
            "Décrire en anglais les innovations numériques et leurs usages (smartphones, réseaux sociaux, intelligence artificielle).",
            "Comparer et peser les avantages et les inconvénients d'une innovation avec les comparatifs et les connecteurs d'opposition.",
            "Prendre position dans un débat sur la place du numérique dans la vie des adolescents.",
          ],
          course: [
            {
              heading: "Une révolution en quelques décennies",
              paragraphs: [
                "En 1989, au CERN, près de Genève, le chercheur britannique Tim Berners-Lee invente le World Wide Web, qui rend Internet accessible à tous par des pages reliées entre elles. En 2007, l'iPhone ouvre l'ère du smartphone. Les réseaux sociaux se multiplient : Facebook naît en 2004, Instagram en 2010. En novembre 2022, le lancement de ChatGPT fait découvrir au grand public les agents conversationnels fondés sur l'intelligence artificielle.",
                "Vocabulaire : a device (un appareil), an app, to download (télécharger), to upload (mettre en ligne), to post, to share, to scroll (faire défiler), a feed (un fil d'actualité), a social network, an algorithm, artificial intelligence (AI), a chatbot, data (les données), online / offline, screen time (le temps d'écran), to be addicted to (être accro à).",
              ],
              box: { label: "Repère", text: "1989 : Tim Berners-Lee invente le World Wide Web au CERN. 2004 : Facebook. 2007 : premier iPhone. 2010 : Instagram. Novembre 2022 : ChatGPT met l'IA générative à la portée du grand public." },
            },
            {
              heading: "Les promesses du numérique",
              paragraphs: [
                "Le numérique a transformé l'accès au savoir : une encyclopédie, des cours en ligne (online courses), des tutoriels sont accessibles depuis un téléphone. Il rapproche les personnes éloignées : on appelle sa famille à l'autre bout du monde en vidéo. Pendant la pandémie de Covid-19, en 2020, le télétravail (remote working, working from home) et les cours à distance ont permis de continuer à travailler et à étudier.",
                "L'innovation touche aussi la santé, où l'intelligence artificielle aide par exemple à analyser des images médicales, les transports, l'agriculture et la lutte contre le gaspillage d'énergie. La Silicon Valley, en Californie, est devenue le symbole de cette économie de l'innovation, où de jeunes entreprises (start-ups) peuvent devenir des géants en quelques années.",
              ],
              box: { label: "À retenir", text: "Advantages : access to knowledge, communication, remote working, online learning, medical progress, innovation. Expressions : it makes life easier, it saves time, it gives access to, it connects people." },
            },
            {
              heading: "Les risques et les débats",
              paragraphs: [
                "Le numérique soulève de nombreuses inquiétudes : la dépendance aux écrans et le temps d'écran excessif, le cyberharcèlement (cyberbullying), la protection de la vie privée et des données personnelles (privacy, personal data), la désinformation, les hypertrucages (deepfakes). La fracture numérique (the digital divide) sépare ceux qui ont accès aux outils et savent les utiliser de ceux qui en sont privés.",
                "Le numérique a aussi un coût environnemental : les centres de données (data centres) consomment beaucoup d'électricité et d'eau, et les déchets électroniques (e-waste) s'accumulent. L'automatisation (automation) et l'IA transforment le travail : certains métiers disparaissent, d'autres apparaissent.",
                "Les pouvoirs publics légifèrent : l'Union européenne applique depuis 2018 le règlement général sur la protection des données (GDPR en anglais) ; le Royaume-Uni a adopté l'Online Safety Act en 2023 ; l'Australie interdit les réseaux sociaux aux moins de 16 ans depuis décembre 2025. Ces mesures alimentent le débat entre protection des jeunes et liberté.",
              ],
              box: { label: "Vocabulaire", text: "Drawbacks : addiction, screen time, cyberbullying, privacy, personal data, fake news, deepfakes, the digital divide, e-waste, automation. Information est indénombrable : a piece of information, jamais « informations »." },
            },
            {
              heading: "Comparer et nuancer",
              paragraphs: [
                "Pour comparer, les adjectifs courts (une syllabe, ou deux syllabes terminées par -y) prennent -er than : fast → faster than, cheap → cheaper than, easy → easier than, big → bigger than. Les adjectifs longs prennent more ... than : more convenient than, more dangerous than. Quelques formes sont irrégulières : good → better → the best, bad → worse → the worst, far → further. Égalité : as fast as ; infériorité : less expensive than ou not as expensive as.",
                "Le superlatif se forme avec the + -est ou the most : the fastest, the most popular. Pour exprimer une évolution, on répète le comparatif : more and more addicted, cheaper and cheaper. Pour opposer avantages et inconvénients, employez whereas, while, however, on the one hand... on the other hand, although.",
              ],
              box: { label: "Règle", text: "Adjectif court : -er than (faster than), the -est (the fastest). Adjectif long : more ... than, the most. Irréguliers : good, better, the best ; bad, worse, the worst. Jamais « more faster »." },
            },
          ],
          keyPoints: [
            "Repères : Web (1989, Tim Berners-Lee), Facebook (2004), iPhone (2007), Instagram (2010), ChatGPT (2022).",
            "Avantages : accès au savoir, communication, télétravail, progrès médical.",
            "Risques : addiction, cyberbullying, privacy, fake news, digital divide, coût environnemental.",
            "Comparatif : -er than ou more ... than ; superlatif : the -est ou the most ; better, worse.",
            "Évolution : more and more, cheaper and cheaper ; opposition : whereas, however, on the other hand.",
            "Information est indénombrable : a piece of information.",
          ],
          example: {
            statement: "Comparez en anglais, en quatre phrases, les cours en présentiel (face-to-face lessons) et les cours en ligne (online lessons), en employant trois comparatifs et un connecteur d'opposition.",
            solution: [
              "Lister les critères : la souplesse, le prix, la motivation, le contact avec le professeur.",
              "Choisir les comparatifs : more flexible (adjectif long), cheaper (adjectif court), easier (consonne + y → -ier), better (irrégulier).",
              "Opposer les deux formules avec whereas ou however.",
              "Réponse : « Online lessons are more flexible than face-to-face lessons, because you can follow them wherever you are. They are often cheaper too. However, it is easier to stay motivated in a real classroom, with classmates around you. In my opinion, face-to-face lessons are better for asking questions, whereas online lessons are useful for revising at your own pace. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le comparatif de supériorité de ces adjectifs : fast, cheap, easy, convenient, good, bad, big, expensive.",
              hint: "Comptez les syllabes, regardez la dernière lettre, et méfiez-vous des irréguliers.",
              solution: [
                "fast → faster ; cheap → cheaper : adjectifs courts, -er.",
                "easy → easier : -y devient -ier.",
                "convenient → more convenient ; expensive → more expensive : adjectifs longs.",
                "good → better ; bad → worse : irréguliers. big → bigger : consonne doublée après une voyelle unique.",
                "Résultat : faster, cheaper, easier, more convenient, better, worse, bigger, more expensive.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec la forme correcte de l'adjectif entre parenthèses : 1) Smartphones are ___ (small) than computers. 2) Online shopping is often ___ (convenient) than going to the shops. 3) For many teenagers, their phone is ___ (important) object they own. 4) Cyberbullying can be ___ (bad) than bullying at school, because it never stops. 5) Teenagers are becoming ___ (dependent) on their phones. 6) A tablet is not ___ (heavy) a laptop.",
              hint: "Repérez le type de comparaison attendu : supériorité (than), superlatif (the), évolution (de plus en plus), égalité (as ... as).",
              solution: [
                "1) smaller : adjectif court, -er than.",
                "2) more convenient : adjectif long.",
                "3) the most important : superlatif d'un adjectif long.",
                "4) worse : comparatif irrégulier de bad.",
                "5) more and more dependent : évolution, comparatif répété.",
                "6) as heavy as : comparatif d'égalité à la forme négative (not as ... as).",
                "Résultat : smaller, more convenient, the most important, worse, more and more dependent, as heavy as.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (150 mots environ). « Since December 2025, teenagers under 16 in Australia have not been allowed to have social media accounts. Should other countries do the same? » Give arguments for and against before stating your opinion.",
              hint: "Construisez un plan dialectique : arguments pour l'interdiction, arguments contre, conclusion nuancée ; employez des comparatifs et des connecteurs d'opposition.",
              solution: [
                "Arguments pour : protéger la santé mentale et le sommeil, limiter le cyberharcèlement et l'exposition à des contenus dangereux, réduire la dépendance aux algorithmes.",
                "Arguments contre : difficile à contrôler (vérification de l'âge, contournements), atteinte à la liberté et à la vie privée, perte d'un moyen d'expression et de lien social, l'éducation est plus efficace que l'interdiction.",
                "Exemple de production : « Australia has decided to ban social media for teenagers under 16. Should other countries follow its example? On the one hand, this law could protect young people. Social networks are designed to keep us scrolling, and many teenagers spend more and more time online, which can harm their sleep and their concentration. Cyberbullying is also worse online than at school, because it never stops. On the other hand, a ban may be difficult to enforce: teenagers are often better at technology than adults and will find ways to get around it. Besides, social media is not only dangerous: it helps young people stay in touch with friends, express themselves and learn. In my opinion, banning is not the best solution. Teaching teenagers how to use social media safely, and forcing platforms to change their algorithms, would be more effective than a ban. » (environ 150 mots)",
                "Résultat : un essai équilibré, avec des comparatifs (more and more, worse, better, more effective) et des connecteurs (On the one hand, On the other hand, Besides).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Numérique et comparatifs.",
            statements: [
              { text: "The World Wide Web was invented by Tim Berners-Lee.", true: true, why: "Il l'a inventé en 1989, au CERN, près de Genève." },
              { text: "The first iPhone was released in 1997.", true: false, why: "Le premier iPhone est sorti en 2007." },
              { text: "« More easy » is the correct comparative of « easy ».", true: false, why: "Easy est un adjectif court en -y : easier." },
              { text: "« Better » is the comparative of « good ».", true: true, why: "Good, better, the best : c'est un comparatif irrégulier." },
              { text: "The digital divide is the gap between people who have access to digital tools and people who don't.", true: true, why: "La fracture numérique concerne l'accès aux outils et la maîtrise de leurs usages." },
              { text: "Data centres have no impact on the environment.", true: false, why: "Ils consomment beaucoup d'électricité et d'eau pour fonctionner et se refroidir." },
              { text: "In English, you can say « I found many useful informations ».", true: false, why: "Information est indénombrable : a lot of useful information, a piece of information." },
            ],
          },
          quiz: [
            { q: "Who invented the World Wide Web in 1989?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], answer: 2, why: "Le chercheur britannique Tim Berners-Lee a inventé le Web au CERN en 1989." },
            { q: "« Online lessons are ___ than face-to-face lessons for some students. »", options: ["more easy", "easier", "most easy", "easiest"], answer: 1, why: "Easy est un adjectif court terminé par -y : easier than." },
            { q: "What is « cyberbullying »?", options: ["Selling stolen phones on the internet", "Playing violent video games", "Spending too much time online", "Harassing someone online"], answer: 3, why: "Le cyberharcèlement consiste à harceler quelqu'un en ligne : messages, moqueries, menaces, rumeurs." },
            { q: "What does « the digital divide » mean?", options: ["Unequal access to digital tools", "A new app that splits the screen", "The division of a file into parts", "A conflict between two tech firms"], answer: 0, why: "La fracture numérique désigne les inégalités d'accès aux outils numériques et de maîtrise de leurs usages." },
            { q: "« This phone is ___ than the old one. » (bad)", options: ["badder", "more bad", "worse", "worst"], answer: 2, why: "Bad a un comparatif irrégulier : worse ; worst est le superlatif (the worst)." },
          ],
          trap: "Cumuler les deux formes du comparatif (« more faster », « more easier ») ou oublier than ; écrire aussi « informations » au pluriel, alors qu'information est indénombrable (a piece of information).",
          method: "Pour peser une innovation, faites un tableau à deux colonnes, advantages et drawbacks, avec un exemple concret par ligne ; dans votre texte, reliez les deux colonnes par whereas, however ou on the other hand.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'villes-transition',
          title: "Villes et modes de vie en transition",
          minutes: 30,
          objectives: [
            "Décrire en anglais une ville et ses transformations : transports, logement, environnement.",
            "Opposer le passé et le présent avec used to et le present perfect.",
            "Présenter et discuter des projets urbains durables (péage urbain, ville du quart d'heure, espaces verts).",
          ],
          course: [
            {
              heading: "Un monde de plus en plus urbain",
              paragraphs: [
                "Selon les Nations unies, plus de la moitié de la population mondiale vit en ville depuis 2007, et cette part pourrait atteindre près de 70 % en 2050. Les villes concentrent les emplois, les services et la vie culturelle, mais aussi des difficultés : embouteillages, pollution de l'air, bruit, crise du logement, étalement urbain, îlots de chaleur en été.",
                "Vocabulaire : urban (urbain), the city centre (en anglais américain downtown), the suburbs (les quartiers résidentiels de la périphérie), a neighbourhood (un quartier), urban sprawl (l'étalement urbain), a traffic jam (un embouteillage), rush hour (les heures de pointe), a commuter (une personne qui fait chaque jour le trajet domicile-travail), to commute, public transport, rent (le loyer), the housing crisis.",
                "Le mot gentrification désigne l'arrivée de populations plus aisées dans un quartier populaire : les logements sont rénovés, mais les loyers augmentent et les habitants modestes doivent souvent partir.",
              ],
              box: { label: "Vocabulaire", text: "urban, the city centre (downtown), the suburbs, a neighbourhood ; urban sprawl, a traffic jam, rush hour ; a commuter, to commute ; public transport ; rent, the housing crisis ; gentrification." },
            },
            {
              heading: "Londres et New York : des villes qui changent",
              paragraphs: [
                "En février 2003, Londres instaure un péage urbain, the congestion charge : les automobilistes paient une somme chaque jour pour circuler dans le centre. En avril 2019, la ville crée une zone à très faibles émissions, the Ultra Low Emission Zone (ULEZ), où les véhicules les plus polluants doivent payer ; elle est étendue à l'ensemble du Grand Londres en août 2023, une décision très débattue.",
                "À New York, la High Line, ouverte en 2009, est un parc suspendu aménagé sur une ancienne voie ferrée aérienne abandonnée. Elle est devenue un modèle de reconversion urbaine, imité dans d'autres villes. On lui reproche aussi d'avoir accéléré la hausse des prix de l'immobilier dans les quartiers voisins : un exemple des effets de la gentrification.",
              ],
              box: { label: "Repère", text: "2003 : congestion charge à Londres. 2009 : ouverture de la High Line à New York. 2019 : ULEZ à Londres, étendue au Grand Londres en 2023." },
            },
            {
              heading: "Repenser la ville et les modes de vie",
              paragraphs: [
                "L'urbaniste Carlos Moreno a popularisé à partir de 2016 l'idée de la « ville du quart d'heure » (the 15-minute city) : chacun devrait trouver à quinze minutes à pied ou à vélo de chez soi l'essentiel de ce dont il a besoin, travail, écoles, commerces, soins, loisirs. Melbourne, en Australie, a fait des 20-minute neighbourhoods un principe de son plan d'urbanisme.",
                "D'autres pistes se développent : les pistes cyclables (cycle lanes), les rues piétonnes (pedestrian streets), les zones sans voiture (car-free zones), les toits végétalisés (green roofs), les jardins partagés (community gardens) et l'agriculture urbaine (urban farming). Depuis 2020, le télétravail a aussi changé les habitudes : moins de trajets quotidiens, et certains citadins ont choisi de quitter les grandes villes.",
              ],
              box: { label: "À retenir", text: "sustainable (durable), eco-friendly, a cycle lane, a pedestrian street, car-free, green spaces, a green roof, a community garden, urban farming, the 15-minute city, remote working." },
            },
            {
              heading: "Comparer hier et aujourd'hui : used to",
              paragraphs: [
                "Used to + base verbale exprime une habitude ou un état passé qui n'existe plus : This area used to be an industrial zone. People used to drive everywhere. À la forme négative et interrogative, on emploie did + use to (sans -d) : People didn't use to recycle. Did you use to live in the city centre?",
                "Ne confondez pas used to + base verbale et be used to + nom ou V-ing, qui signifie « être habitué à » : I'm used to cycling in heavy traffic (j'ai l'habitude de faire du vélo dans la circulation). Pour faire le bilan d'un changement, employez le present perfect : The city has changed a lot. They have built new cycle lanes. Air pollution has decreased.",
              ],
              box: { label: "Règle", text: "Used to + base verbale : habitude ou état passé révolu (There used to be a factory here). Négatif : didn't use to. Be used to + V-ing : être habitué à (I'm used to walking). Bilan d'un changement : present perfect (The town has changed)." },
            },
          ],
          keyPoints: [
            "Plus de la moitié de l'humanité vit en ville depuis 2007 (Nations unies).",
            "Problèmes urbains : traffic jams, pollution, housing crisis, urban sprawl, gentrification.",
            "Londres : congestion charge (2003), ULEZ (2019). New York : la High Line (2009).",
            "Ville durable : cycle lanes, car-free zones, green roofs, urban farming, the 15-minute city (Carlos Moreno).",
            "Used to + base verbale (habitude passée) ; be used to + V-ing (être habitué à).",
            "Bilan d'un changement : present perfect (The city has changed).",
          ],
          example: {
            statement: "Décrivez en anglais, en quatre phrases, la transformation d'un quartier, en employant used to et le present perfect (données fictives : une ancienne zone d'usines du centre-ville, devenue un écoquartier avec un parc, des logements et des pistes cyclables).",
            solution: [
              "Décrire le passé avec used to : les usines, la pollution, les camions.",
              "Faire le bilan avec le present perfect : ce qui a été construit, ce qui a changé.",
              "Ajouter une appréciation nuancée : un point positif, une limite (la hausse des loyers).",
              "Réponse : « This neighbourhood used to be an industrial area: there used to be factories, and lorries used to fill the streets with noise and smoke. The factories have closed, and the town has turned the area into an eco-district. They have built new flats, a large park and safe cycle lanes, and the air has become much cleaner. However, rents have risen, so some families who used to live here have had to move out. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : 1) les heures de pointe 2) un embouteillage 3) une piste cyclable 4) la banlieue résidentielle 5) les transports en commun 6) un quartier.",
              hint: "Plusieurs de ces mots figurent dans le premier encadré du cours ; attention, « public transport » est indénombrable en anglais britannique.",
              solution: [
                "1) rush hour.",
                "2) a traffic jam.",
                "3) a cycle lane (ou a bike lane).",
                "4) the suburbs.",
                "5) public transport ; 6) a neighbourhood (anglais américain : neighborhood).",
                "Résultat : rush hour, a traffic jam, a cycle lane, the suburbs, public transport, a neighbourhood.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ou complétez chaque phrase avec used to, didn't use to, use to ou be used to : 1) When my grandfather was young, he went to work by bus every day. 2) There was a factory here, but now it's a park. 3) In the past, people didn't recycle much. 4) Did your parents live in the city centre when they were students? 5) I find cycling in London difficult because I'm not ___ the traffic. 6) This street was full of cars, but now it is a pedestrian street.",
              hint: "Used to + base verbale pour une habitude passée qui n'existe plus ; did + use to (sans -d) à la forme négative et interrogative ; be used to + nom ou V-ing pour l'habitude acquise.",
              solution: [
                "1) When my grandfather was young, he used to go to work by bus.",
                "2) There used to be a factory here, but now it's a park.",
                "3) People didn't use to recycle much.",
                "4) Did your parents use to live in the city centre when they were students?",
                "5) I'm not used to the traffic : être habitué à (be used to + nom).",
                "6) This street used to be full of cars, but now it is a pedestrian street.",
                "Résultat : used to go, used to be, didn't use to recycle, Did ... use to live, used to (the traffic), used to be.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (150 mots environ). Your town council is asking teenagers for ideas. Write a letter to the mayor: describe how your town has changed in recent years, then suggest two or three projects to make it greener and more pleasant to live in.",
              hint: "Adoptez les codes de la lettre formelle (Dear Mayor, Yours sincerely), comparez passé et présent (used to, present perfect), puis proposez avec should, could et une hypothèse en if.",
              solution: [
                "Plan : formule d'appel ; présentation et objet de la lettre ; évolution de la ville (used to, present perfect) ; propositions (should, could, if) ; formule de politesse.",
                "Exemple de production : « Dear Mayor, I am a sixteen-year-old student and I would like to share some ideas about our town. When my parents were young, the town centre used to be full of small shops, and children used to play in the streets. Things have changed: many shops have closed, traffic has increased and there are fewer green spaces. However, the new tram line has made life easier for commuters. To make our town greener, you could turn the car park near the station into a park with a community garden. You should also create safe cycle lanes between the suburbs and the schools: if teenagers felt safe on their bikes, fewer parents would drive them to school. Finally, a car-free Sunday once a month would bring people together. Thank you for listening to young people. Yours sincerely, Inès Martin » (environ 150 mots)",
                "Vérification : used to (deux fois), present perfect (have closed, has increased, has made), modaux (could, should, would), hypothèse irréelle (if teenagers felt..., fewer parents would...).",
                "Résultat : une lettre formelle, argumentée, qui relie le passé, le présent et des propositions concrètes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot de la ville à sa traduction ou à sa définition.",
            pairs: [
              { left: "a commuter", right: "une personne qui fait chaque jour le trajet domicile-travail" },
              { left: "rush hour", right: "les heures de pointe" },
              { left: "urban sprawl", right: "l'étalement urbain" },
              { left: "the congestion charge", right: "le péage urbain de Londres" },
              { left: "gentrification", right: "l'arrivée de populations aisées dans un quartier populaire" },
              { left: "a cycle lane", right: "une piste cyclable" },
            ],
          },
          quiz: [
            { q: "What is a « commuter »?", options: ["A person who travels daily to work", "A computer used in an office", "Someone who lives in the countryside", "A bus driver in a big city"], answer: 0, why: "A commuter fait chaque jour le trajet entre son domicile et son lieu de travail ou d'études." },
            { q: "« There ___ be a factory here, but now it's a park. »", options: ["use to", "used to", "is used to", "was used"], answer: 1, why: "Used to + base verbale exprime un état passé qui n'existe plus." },
            { q: "In 2003, London introduced a ___ to reduce traffic in the city centre.", options: ["free bus service for everyone", "ban on all bicycles", "congestion charge", "new airport runway"], answer: 2, why: "Le péage urbain (congestion charge) fait payer les automobilistes qui entrent dans le centre de Londres." },
            { q: "What is the « 15-minute city »?", options: ["A city that can be crossed by car in 15 minutes", "A city where daily needs are close to home", "A city where buses run every 15 minutes", "A city where shops close after 15 minutes"], answer: 1, why: "Dans la ville du quart d'heure, l'essentiel des besoins quotidiens se trouve à quinze minutes à pied ou à vélo." },
            { q: "« I've lived in London for years, so I'm ___ the noise. »", options: ["use to", "using to", "usual to", "used to"], answer: 3, why: "Be used to + nom signifie être habitué à : I'm used to the noise." },
          ],
          trap: "Confondre used to + base verbale (habitude passée révolue : I used to walk) et be used to + V-ing (être habitué à : I'm used to walking), ou écrire « didn't used to » : après did, on emploie use, sans -d.",
          method: "Pour décrire une transformation, structurez votre propos en trois temps : avant (used to), aujourd'hui (present perfect : has changed, have built), demain (will, should, if). Ce plan simple convient aussi à l'oral.",
        },
      ],
    },
    /* ==================================================================== */
    /* AXE 5 · CRÉER ET RECRÉER                                              */
    /* ==================================================================== */
    {
      id: 'creer-recreer',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'creation-artistique',
          title: "La création artistique : musique, peinture, street art",
          minutes: 30,
          objectives: [
            "Décrire et analyser en anglais une image : tableau, photographie, œuvre de street art.",
            "Situer quelques artistes et mouvements majeurs du monde anglophone (pop art, hip-hop, street art).",
            "Exprimer ses goûts et formuler une appréciation argumentée sur une œuvre.",
          ],
          course: [
            {
              heading: "Décrire une œuvre en anglais",
              paragraphs: [
                "Commencez par présenter le document : sa nature (a painting, a photograph, a mural, a poster, a cartoon), son auteur et sa date. « This document is a painting by Edward Hopper, painted in 1942. » Décrivez ensuite l'image plan par plan : in the foreground (au premier plan), in the background (à l'arrière-plan), in the middle ou in the centre, on the left, on the right, at the top, at the bottom, in the top left-hand corner (en haut à gauche).",
                "Pour décrire ce que font les personnages, employez le présent en be + -ing : A man is sitting on a bench. Two children are playing. Pour formuler des hypothèses, employez les modaux et les verbes d'apparence : It seems to be winter. It looks like a factory. She might be waiting for someone. He must be cold. Pour interpréter, enfin : The artist wants to show, to denounce, to criticise... The picture conveys a feeling of loneliness (transmet un sentiment de solitude).",
              ],
              box: { label: "Méthode", text: "1) Nature, auteur, date. 2) Description : in the foreground / background, on the left / right, at the top / bottom ; actions en be + -ing. 3) Hypothèses : it seems, it looks like, might, must. 4) Interprétation : the artist wants to show... 5) Votre avis." },
            },
            {
              heading: "Peinture : du réalisme américain au pop art",
              paragraphs: [
                "Edward Hopper (1882-1967) a peint la solitude de la ville américaine. Dans Nighthawks (1942), trois clients et un serveur se tiennent derrière la grande vitre d'un bar de nuit éclairé, au coin d'une rue déserte : personne ne se parle. Dans les années 1960, Andy Warhol (1928-1987) devient la figure du pop art : il reproduit en série, par sérigraphie, des objets de consommation et des célébrités, comme dans Campbell's Soup Cans (1962) ou ses portraits de Marilyn Monroe.",
                "Le Britannique David Hockney (né en 1937) a peint la lumière de la Californie et ses piscines, comme dans A Bigger Splash (1967). Jean-Michel Basquiat (1960-1988) a commencé par des graffitis dans les rues de New York, signés SAMO, avant de devenir l'un des peintres les plus célèbres de sa génération : sa trajectoire montre les liens entre la rue et le musée.",
              ],
              box: { label: "Repère", text: "Edward Hopper, Nighthawks (1942) ; Andy Warhol, Campbell's Soup Cans (1962), pop art ; David Hockney, A Bigger Splash (1967) ; Jean-Michel Basquiat, du graffiti new-yorkais à la peinture (années 1980)." },
            },
            {
              heading: "Musique : des Beatles au hip-hop",
              paragraphs: [
                "Les Beatles, groupe de Liverpool, conquièrent les États-Unis en 1964 : c'est le début de la « British Invasion » des groupes britanniques. Au même moment, Bob Dylan écrit des chansons engagées, comme Blowin' in the Wind (1963), associées au mouvement des droits civiques. La musique accompagne souvent les combats d'une époque.",
                "Le hip-hop naît dans le Bronx, à New York, dans les années 1970, lors de fêtes de quartier (block parties) où des DJ comme Kool Herc font tourner les passages instrumentaux des disques. Il réunit quatre pratiques : le DJing, le rap (MCing), le breakdance et le graffiti. Devenu un genre mondial, il a gagné une reconnaissance institutionnelle : en 2018, le rappeur Kendrick Lamar reçoit le prix Pulitzer de musique pour son album DAMN., une première pour un artiste qui ne relève ni du classique ni du jazz.",
                "Vocabulaire : a band (un groupe), a singer, a songwriter, the lyrics (les paroles), a tune (un air), a beat (un rythme), to release an album (sortir un album), a hit (un tube), a gig (un concert).",
              ],
              box: { label: "Vocabulaire", text: "a band, a singer, a songwriter, the lyrics, a tune, a beat, a hit, a gig, to release an album. 1964 : British Invasion des Beatles. Années 1970 : naissance du hip-hop dans le Bronx. 2018 : prix Pulitzer pour Kendrick Lamar." },
            },
            {
              heading: "Le street art : de l'illégalité au musée",
              paragraphs: [
                "Dans les années 1970 et 1980, les graffitis couvrent les rames du métro de New York : pour les uns, c'est du vandalisme (vandalism) ; pour les autres, un art nouveau. Le street art a depuis gagné les galeries, les festivals et les fresques commandées par les villes (commissioned murals). L'artiste britannique anonyme Banksy, lié à la ville de Bristol, en est la figure la plus célèbre : ses pochoirs (stencils) satiriques critiquent la guerre, la surveillance ou la société de consommation.",
                "En octobre 2018, chez Sotheby's à Londres, son œuvre Girl with Balloon se déchire en partie, grâce à un mécanisme caché dans le cadre, juste après avoir été vendue pour plus d'un million de livres. Rebaptisée Love is in the Bin, elle est revendue en 2021 pour plus de 18 millions de livres. Pour exprimer votre avis : I'm fond of, I'm keen on, it appeals to me, I find it striking, moving, thought-provoking ; it leaves me cold, I can't stand it.",
              ],
              box: { label: "À retenir", text: "a mural, a stencil, a spray can, graffiti, to tag, vandalism. Banksy : artiste anonyme, pochoirs satiriques ; Girl with Balloon s'autodétruit en partie en 2018. Avis : it appeals to me, striking, thought-provoking ≠ it leaves me cold, I can't stand it." },
            },
          ],
          keyPoints: [
            "Décrire : nature, auteur, date ; in the foreground / background, on the left / right ; actions en be + -ing.",
            "Hypothèses : it seems, it looks like, might, must ; interprétation : the artist wants to show...",
            "Hopper, Nighthawks (1942) ; Warhol et le pop art (années 1960) ; Hockney ; Basquiat.",
            "Les Beatles et la British Invasion (1964) ; le hip-hop né dans le Bronx dans les années 1970.",
            "Banksy, street art satirique ; Girl with Balloon, déchiquetée en partie en 2018.",
            "Avis : it appeals to me, striking, moving ≠ it leaves me cold, I can't stand it.",
          ],
          example: {
            statement: "Décrivez en anglais, en cinq phrases, cette fresque murale imaginée pour l'exercice : au premier plan, une petite fille arrose une fleur qui pousse dans une fissure du trottoir ; à l'arrière-plan, des immeubles gris et des cheminées d'usine qui fument ; en haut à droite, un soleil orange presque caché par la fumée.",
            solution: [
              "Présenter le document : une fresque de street art (données fictives, sans auteur connu).",
              "Décrire plan par plan, avec be + -ing pour les actions : in the foreground, in the background, in the top right-hand corner.",
              "Formuler une hypothèse avec might ou seems, puis interpréter le contraste entre la fleur et la ville polluée.",
              "Réponse : « This document is a mural painted on a city wall. In the foreground, a little girl is watering a flower which is growing in a crack in the pavement. In the background, we can see grey buildings and factory chimneys, which are releasing thick smoke. In the top right-hand corner, an orange sun is almost hidden by the pollution. The artist might want to show that nature and hope can survive even in a polluted city, which makes the picture quite moving. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais ces expressions utiles pour décrire une image : 1) au premier plan 2) à l'arrière-plan 3) au centre 4) en haut à gauche 5) à droite 6) en bas.",
              hint: "Attention aux prépositions : in, on ou at selon l'expression.",
              solution: [
                "1) in the foreground.",
                "2) in the background.",
                "3) in the centre (ou in the middle).",
                "4) in the top left-hand corner.",
                "5) on the right ; 6) at the bottom.",
                "Résultat : in the foreground, in the background, in the centre, in the top left-hand corner, on the right, at the bottom.",
              ],
            },
            {
              level: 2,
              statement: "Complétez cette description d'un tableau imaginé pour l'exercice en conjuguant les verbes : « In the foreground, an old man (sit) on a bench. He (read) a newspaper. He (must / be) quite old, because his hair is white. In the background, two children (play) football. It (might / be) a Sunday afternoon, because the shops are closed. The painter (want) to show a peaceful moment. »",
              hint: "Les actions représentées se mettent en be + -ing ; après un modal, le verbe est à la base verbale ; want est un verbe d'état.",
              solution: [
                "is sitting : action représentée sur l'image.",
                "is reading : action représentée.",
                "must be : déduction quasi certaine, modal + base verbale.",
                "are playing : action représentée, sujet pluriel.",
                "might be : simple hypothèse. wants : want est un verbe d'état, au présent simple, avec -s.",
                "Résultat : is sitting, is reading, must be, are playing, might be, wants.",
              ],
            },
            {
              level: 3,
              statement: "Expression orale ou écrite (150 mots environ). Present Edward Hopper's painting Nighthawks (1942): describe it, explain what it may express and say whether it appeals to you, and why.",
              hint: "Suivez la méthode du cours : présentation, description plan par plan avec be + -ing, hypothèses avec might ou seems, interprétation, puis avis argumenté.",
              solution: [
                "Éléments de description : un bar de nuit (a diner) au coin d'une rue déserte ; une grande vitre ; un serveur en blanc ; un couple assis au comptoir et un homme seul, de dos ; une lumière crue à l'intérieur, une rue sombre et vide.",
                "Exemple de production : « Nighthawks is a painting by the American artist Edward Hopper, painted in 1942. It shows a diner at night, on the corner of an empty street. In the centre, behind a huge window, three customers are sitting at the counter while a waiter dressed in white is working. A man and a woman are sitting side by side, but they don't seem to be talking, and another man is sitting alone with his back to us. The light inside is very bright, whereas the street outside is dark and deserted, and we cannot see any door. Hopper might want to express the loneliness of people in big cities: they are together, yet each of them seems isolated. I find this painting really striking because it is so silent. It appeals to me because it makes me wonder who these people are and what they are thinking. » (environ 155 mots)",
                "Résultat : une présentation complète, avec be + -ing, des hypothèses (might, seem) et un avis justifié.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Art, musique et street art.",
            statements: [
              { text: "Andy Warhol was a leading figure of pop art.", true: true, why: "Dans les années 1960, il reproduit en série objets de consommation et célébrités." },
              { text: "Hip-hop was born in London in the 1990s.", true: false, why: "Le hip-hop est né dans le Bronx, à New York, dans les années 1970." },
              { text: "« In the foreground » means at the back of the picture.", true: false, why: "In the foreground signifie au premier plan ; l'arrière-plan se dit in the background." },
              { text: "The Beatles came from Liverpool.", true: true, why: "Le groupe s'est formé à Liverpool, dans le nord-ouest de l'Angleterre." },
              { text: "Girl with Balloon partly shredded itself just after being sold at auction in 2018.", true: true, why: "Un mécanisme caché dans le cadre a déchiré une partie de la toile chez Sotheby's, à Londres." },
              { text: "« The lyrics » are the musical instruments of a band.", true: false, why: "The lyrics sont les paroles d'une chanson." },
              { text: "« I can't stand this painting » means that you love it.", true: false, why: "I can't stand signifie je ne supporte pas : c'est un avis très négatif." },
            ],
          },
          quiz: [
            { q: "Where was hip-hop born in the 1970s?", options: ["In Liverpool, England", "In the Bronx, New York", "In Los Angeles, California", "In Kingston, Jamaica"], answer: 1, why: "Le hip-hop est né lors de fêtes de quartier dans le Bronx, à New York." },
            { q: "Which artist painted Campbell's Soup Cans in 1962?", options: ["Andy Warhol", "David Hockney", "Banksy", "Edward Hopper"], answer: 0, why: "Cette série de boîtes de soupe est une œuvre emblématique du pop art d'Andy Warhol." },
            { q: "« In the ___, we can see mountains far away. »", options: ["foreground", "front", "background", "bottom"], answer: 2, why: "Ce qui est loin se trouve à l'arrière-plan : in the background." },
            { q: "What happened to Banksy's Girl with Balloon at Sotheby's in 2018?", options: ["It was stolen during the sale", "It partly shredded itself", "It was painted over by another artist", "It was bought by the British Museum"], answer: 1, why: "Juste après la vente, un mécanisme caché dans le cadre a déchiqueté une partie de l'œuvre." },
            { q: "Which phrase expresses a negative opinion?", options: ["It appeals to me.", "I'm really fond of it.", "It leaves me cold.", "I find it moving."], answer: 2, why: "It leaves me cold signifie que l'œuvre vous laisse indifférent." },
          ],
          trap: "Décrire les actions représentées au présent simple au lieu de be + -ing (« a man sits » au lieu de a man is sitting), ou confondre in the foreground (au premier plan) et in the background (à l'arrière-plan).",
          method: "Décrivez toujours du général au particulier : nature de l'œuvre, auteur et date, puis plan par plan, puis interprétation (The artist wants to...) et enfin votre avis argumenté. Préparez une liste de cinq adjectifs d'appréciation à réutiliser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'adapter-reecrire',
          title: "Adapter et réécrire : du livre à l'écran",
          minutes: 30,
          objectives: [
            "Employer le vocabulaire de l'adaptation et de la réécriture (adaptation, remake, sequel, retelling, faithful).",
            "Comparer en anglais une œuvre et son adaptation avec les comparatifs, as ... as et whereas.",
            "Rédiger une critique argumentée (a review) d'une adaptation.",
          ],
          course: [
            {
              heading: "Adapter, réécrire, reprendre",
              paragraphs: [
                "Adapter (to adapt), c'est faire passer une œuvre d'un support à un autre : un roman devient un film, une série, une bande dessinée ou un jeu vidéo. Une adaptation peut être fidèle (a faithful adaptation) ou libre (a loose adaptation). Réécrire (to rewrite), c'est raconter de nouveau une histoire connue en changeant l'époque, le lieu ou le point de vue : on parle de a retelling.",
                "Le vocabulaire des suites et des reprises est précis : a remake est une nouvelle version d'un film ; a sequel raconte la suite d'une histoire ; a prequel raconte ce qui s'est passé avant ; a spin-off développe un personnage secondaire dans une nouvelle œuvre ; a parody imite une œuvre pour s'en moquer ; la fan fiction est écrite par des admirateurs qui prolongent l'univers d'un auteur.",
              ],
              box: { label: "Définition", text: "an adaptation (faithful ou loose), a remake, a sequel (une suite), a prequel (ce qui précède), a spin-off (une œuvre dérivée), a retelling (une réécriture), a parody, fan fiction. To be based on, to be adapted from." },
            },
            {
              heading: "Des classiques sans cesse réécrits",
              paragraphs: [
                "Romeo and Juliet, la tragédie de Shakespeare écrite vers 1595, raconte l'amour impossible de deux jeunes gens issus de familles ennemies de Vérone, les Montaigu et les Capulet. West Side Story (comédie musicale créée à Broadway en 1957, film en 1961, nouvelle version de Steven Spielberg en 2021) transpose l'histoire dans le New York des années 1950 : deux bandes rivales, les Jets et les Sharks, remplacent les familles. Baz Luhrmann, dans Romeo + Juliet (1996), garde la langue de Shakespeare mais remplace les épées par des pistolets.",
                "Pride and Prejudice (1813), le roman de Jane Austen, a été adapté à la télévision par la BBC (1995) et au cinéma par Joe Wright (2005). Le roman de Helen Fielding Bridget Jones's Diary (1996) en propose une réécriture libre dans le Londres contemporain, avec un Mr Darcy moderne. Frankenstein (1818), de Mary Shelley, a inspiré d'innombrables films.",
              ],
              box: { label: "Repère", text: "Shakespeare, Romeo and Juliet (vers 1595) → West Side Story (1957, 1961, 2021), Romeo + Juliet (1996). Jane Austen, Pride and Prejudice (1813) → BBC (1995), Joe Wright (2005), Bridget Jones's Diary (1996)." },
            },
            {
              heading: "Les grandes sagas, du livre à l'écran",
              paragraphs: [
                "The Lord of the Rings, de J. R. R. Tolkien (1954-1955), a été adapté par Peter Jackson en une trilogie (2001-2003) ; le dernier film, The Return of the King, a reçu onze Oscars. Les sept romans de Harry Potter, de J. K. Rowling (1997-2007), ont donné huit films (2001-2011). The Hunger Games, de Suzanne Collins (2008), a été porté à l'écran à partir de 2012, et un prequel, The Ballad of Songbirds and Snakes, est sorti en livre en 2020 puis en film en 2023.",
                "Adapter impose des choix. Il faut couper des épisodes et des personnages, car un roman de plusieurs centaines de pages tient difficilement en deux heures. Il faut traduire en images ce que le livre dit avec des mots : les pensées d'un narrateur (on peut utiliser une voix off, a voice-over), les descriptions, l'ironie. Le casting impose aussi un visage là où chaque lecteur avait imaginé le sien, d'où le célèbre débat : « the book is always better than the film ».",
              ],
              box: { label: "À retenir", text: "Adapter, c'est choisir : couper (to cut), condenser, ajouter des scènes, traduire les pensées en images (voice-over, gros plans, musique). Le film n'est pas une copie du livre : c'est une nouvelle œuvre, avec ses propres moyens." },
            },
            {
              heading: "Comparer une œuvre et son adaptation",
              paragraphs: [
                "Pour comparer, employez les comparatifs (The film is more spectacular than the novel. The book is longer and more detailed), l'égalité (The film is as moving as the book ; it is not as funny as the book), et les connecteurs d'opposition : whereas, while, unlike (Unlike the novel, the film...), on the contrary. La voix passive est utile pour présenter l'adaptation : The novel was adapted for the screen in 2012. The film is based on a best-seller.",
                "Une critique (a review) présente l'œuvre, la compare, évalue et recommande. Vocabulaire : the director, the cast, the main character, the plot, the soundtrack (la bande originale), the special effects, the pace (le rythme), faithful to the book, a plot twist (un rebondissement). Pour conclure : It is worth watching (cela vaut la peine d'être vu). I would recommend it to... I give it four stars out of five.",
              ],
              box: { label: "Règle", text: "Comparer : more ... than, -er than, as ... as, not as ... as. Opposer : whereas, while, unlike + nom. Présenter : was adapted from, is based on. Conclure : It is worth + V-ing (It is worth reading)." },
            },
          ],
          keyPoints: [
            "Adaptation (faithful ou loose), remake, sequel, prequel, spin-off, retelling, parody, fan fiction.",
            "Romeo and Juliet → West Side Story (1957, 1961, 2021) ; Pride and Prejudice (1813) → Bridget Jones's Diary (1996).",
            "Tolkien → Peter Jackson (2001-2003) ; Harry Potter : 7 romans, 8 films ; The Hunger Games et son prequel (2020, 2023).",
            "Adapter, c'est choisir : couper, condenser, traduire les pensées en images.",
            "Comparer : more ... than, as ... as, whereas, unlike ; présenter : is based on, was adapted from.",
            "Critique : présenter, comparer, évaluer, recommander (It is worth watching).",
          ],
          example: {
            statement: "Comparez en anglais, en quatre phrases, la pièce Romeo and Juliet de Shakespeare et la comédie musicale West Side Story.",
            solution: [
              "Repérer les points communs : deux jeunes gens amoureux issus de camps ennemis, une haine qui mène à la mort.",
              "Repérer les différences : Vérone et deux familles nobles chez Shakespeare ; New York dans les années 1950 et deux bandes rivales dans West Side Story ; une pièce en vers, une comédie musicale ; à la fin, Juliette meurt, alors que Maria survit à Tony.",
              "Employer la voix passive, whereas, unlike et un comparatif.",
              "Réponse : « West Side Story is a retelling of Shakespeare's Romeo and Juliet. In both works, two young people fall in love although they belong to enemy groups, and hatred leads to tragedy. However, Shakespeare's play is set in Verona and opposes two noble families, whereas West Side Story takes place in 1950s New York and opposes two street gangs, the Jets and the Sharks. Unlike Juliet, Maria does not die at the end, which makes the ending perhaps even more painful, as she has to live with her grief. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec remake, sequel, prequel, faithful, retelling, adaptation : 1) A new version of an old film is a ___. 2) A story that continues an earlier one is a ___. 3) A story that tells what happened before an earlier one is a ___. 4) An adaptation that closely respects the original is ___. 5) West Side Story is a ___ of Romeo and Juliet set in New York. 6) The film is an ___ of a best-selling novel.",
              hint: "Remarquez l'article : « an » appelle un mot qui commence par une voyelle ; « is ___ » sans article appelle un adjectif.",
              solution: [
                "1) remake : nouvelle version d'un film.",
                "2) sequel : la suite.",
                "3) prequel : ce qui précède.",
                "4) faithful : fidèle (adjectif, d'où l'absence d'article).",
                "5) retelling : une réécriture qui change l'époque et le lieu. 6) adaptation : « an » devant une voyelle.",
                "Résultat : remake, sequel, prequel, faithful, retelling, adaptation.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez une phrase comparative avec les éléments donnés (données fictives sur un roman et son adaptation) : 1) the novel / long / the film. 2) the film / spectacular / the novel. 3) the characters in the film / not as / interesting / the characters in the book. 4) the ending of the film / good / the ending of the book. 5) the novel describes the hero's thoughts / the film shows his actions (whereas). 6) this / bad / adaptation I have ever seen (superlatif).",
              hint: "Adjectif court : -er than ; adjectif long : more ... than ; good et bad sont irréguliers ; le superlatif se construit avec the.",
              solution: [
                "1) The novel is longer than the film.",
                "2) The film is more spectacular than the novel.",
                "3) The characters in the film are not as interesting as the characters in the book.",
                "4) The ending of the film is better than the ending of the book.",
                "5) The novel describes the hero's thoughts, whereas the film shows his actions.",
                "6) This is the worst adaptation I have ever seen.",
                "Résultat : longer than, more spectacular than, not as interesting as, better than, whereas, the worst.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (150 mots environ). Write a review of the film The Hunger Games (2012) for an English-speaking website for teenagers. Present the novel and the film, compare them, and say whether you would recommend the film.",
              hint: "Suivez le plan d'une critique : présentation (auteur, réalisateur, histoire), comparaison (points forts et limites de l'adaptation), évaluation et recommandation.",
              solution: [
                "Repères : roman de Suzanne Collins (2008), raconté à la première personne par l'héroïne, Katniss Everdeen ; film de Gary Ross (2012), avec Jennifer Lawrence. Dans le pays imaginaire de Panem, le Capitole oblige chaque district à envoyer deux adolescents s'affronter à mort dans un jeu télévisé ; Katniss se porte volontaire pour sauver sa petite sœur, Prim.",
                "Exemple de production : « The Hunger Games is based on the best-selling novel by Suzanne Collins, published in 2008. The film was directed by Gary Ross and released in 2012. In the country of Panem, the Capitol forces each district to send two teenagers to fight to the death in a televised show. When her little sister Prim is chosen, Katniss Everdeen volunteers to take her place. The film is quite faithful to the book, and Jennifer Lawrence is excellent as Katniss. However, the novel is told by Katniss herself, so readers know all her thoughts and fears, whereas the film can only show her face. On the other hand, the film adds scenes in the control room, where we see how the games are manipulated, which the book could not show. Overall, the film is as gripping as the novel. It is definitely worth watching, but read the book first! » (environ 155 mots)",
                "Résultat : une critique structurée qui compare précisément le livre et le film et se termine par une recommandation.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "an adaptation", right: "une œuvre transposée d'un support à un autre" },
              { left: "a remake", right: "une nouvelle version d'un film déjà tourné" },
              { left: "a sequel", right: "une œuvre qui raconte la suite d'une histoire" },
              { left: "a prequel", right: "une œuvre qui raconte ce qui s'est passé avant" },
              { left: "a spin-off", right: "une œuvre dérivée centrée sur un personnage secondaire" },
              { left: "a retelling", right: "une histoire connue racontée autrement" },
            ],
          },
          quiz: [
            { q: "What is a « sequel »?", options: ["A story that continues an earlier one", "A new version of an old film", "A story that happens before another one", "A film without any dialogue"], answer: 0, why: "A sequel raconte la suite d'une histoire ; ce qui se passe avant est un prequel." },
            { q: "Which work is a retelling of Romeo and Juliet set in New York?", options: ["Pride and Prejudice", "West Side Story", "The Lord of the Rings", "Frankenstein"], answer: 1, why: "West Side Story transpose l'histoire de Roméo et Juliette dans le New York des années 1950." },
            { q: "« The film is not ___ the book. »", options: ["more good than", "as better as", "as good as", "gooder than"], answer: 2, why: "Comparatif d'égalité à la forme négative : not as good as." },
            { q: "Who wrote the novel Pride and Prejudice (1813)?", options: ["Mary Shelley", "Charlotte Brontë", "J. K. Rowling", "Jane Austen"], answer: 3, why: "Pride and Prejudice est un roman de Jane Austen, publié en 1813." },
            { q: "« The novel ___ for the screen in 2001. »", options: ["adapted", "was adapted", "has adapting", "is adapt"], answer: 1, why: "Voix passive au prétérit : was + participe passé." },
          ],
          trap: "Juger une adaptation sur sa seule fidélité (« the book is better ») sans tenir compte des moyens propres au cinéma : image, musique, montage, jeu des acteurs. Attention aussi au faux ami « roman » : un roman se dit a novel.",
          method: "Pour comparer un livre et son adaptation, faites un tableau en trois lignes, story, characters, form (narration, images, musique), et notez pour chaque ligne une ressemblance et une différence : votre comparaison sera précise et équilibrée.",
        },
      ],
    },
    /* ==================================================================== */
    /* AXE 6 · LES PAYS DU COMMONWEALTH                                      */
    /* ==================================================================== */
    {
      id: 'commonwealth',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'empire-commonwealth',
          title: "De l'Empire britannique au Commonwealth",
          minutes: 35,
          objectives: [
            "Situer les grandes étapes de l'Empire britannique, de sa formation à la décolonisation.",
            "Expliquer en anglais le passage de l'Empire au Commonwealth : dominions, déclaration de Londres de 1949.",
            "Employer le prétérit et la voix passive pour raconter des faits historiques, et lire les dates en anglais.",
          ],
          course: [
            {
              heading: "La formation d'un empire mondial (XVIIe-XIXe siècle)",
              paragraphs: [
                "L'expansion anglaise outre-mer commence vers 1600. Cette année-là, la reine Élisabeth Ire accorde une charte à l'East India Company, une compagnie de commerce qui prend peu à peu le contrôle de l'Inde, notamment après la bataille de Plassey (1757). En 1607, Jamestown, en Virginie, devient la première colonie anglaise permanente en Amérique du Nord. Au XVIIIe siècle, la richesse de l'empire repose aussi sur les plantations sucrières des Antilles (the West Indies) et sur la traite des esclaves africains, abolie par le Parlement en 1807 ; l'esclavage lui-même est aboli dans l'empire par une loi de 1833.",
                "La perte des treize colonies américaines, qui proclament leur indépendance le 4 juillet 1776 (reconnue en 1783), ne met pas fin à l'expansion. En 1788, la First Fleet débarque des forçats à Sydney : l'Australie commence comme colonie pénitentiaire. Après la grande révolte indienne de 1857, la Couronne gouverne directement l'Inde (le British Raj, à partir de 1858), et la reine Victoria prend le titre d'impératrice des Indes en 1876. Vers 1920, l'empire couvre environ un quart des terres émergées et regroupe environ un quart de l'humanité : on dit alors que c'est « the empire on which the sun never sets ».",
              ],
              box: { label: "Repère", text: "1600 : charte de l'East India Company. 1607 : Jamestown. 1776 : indépendance américaine. 1788 : arrivée de la First Fleet en Australie. 1807 : abolition de la traite ; 1833 : abolition de l'esclavage. 1858 : début du British Raj. Vers 1920 : apogée de l'empire." },
            },
            {
              heading: "Des dominions au Commonwealth",
              paragraphs: [
                "Les colonies de peuplement britannique obtiennent progressivement leur autonomie et deviennent des dominions : le Canada en 1867, l'Australie en 1901, la Nouvelle-Zélande en 1907, l'Union sud-africaine en 1910. Elles se gouvernent elles-mêmes mais restent liées à la Couronne. La déclaration Balfour de 1926 les définit comme des communautés autonomes, « equal in status » avec le Royaume-Uni, librement associées au sein du British Commonwealth of Nations. Le statut de Westminster (1931) leur donne la pleine indépendance législative.",
                "Le tournant a lieu en 1949. L'Inde, indépendante depuis 1947, veut devenir une république sans quitter l'association. Par la déclaration de Londres (avril 1949), les membres acceptent qu'un pays reste membre même s'il n'a pas le roi pour chef d'État : il lui suffit de reconnaître le souverain britannique comme « Head of the Commonwealth », symbole de leur libre association. Le mot British disparaît : on parle désormais du Commonwealth of Nations, ou simplement du Commonwealth. À l'origine, le mot commonwealth désigne une communauté politique fondée sur le bien commun (common wealth, au sens ancien de bien-être commun).",
              ],
              box: { label: "Définition", text: "A dominion : une colonie de peuplement devenue autonome (Canada, Australie, Nouvelle-Zélande, Afrique du Sud). The Commonwealth of Nations : une association libre et volontaire d'États indépendants et égaux, pour la plupart d'anciens territoires de l'Empire britannique, née sous sa forme moderne en 1949." },
            },
            {
              heading: "La décolonisation (1947-1997)",
              paragraphs: [
                "Après la Seconde Guerre mondiale, le Royaume-Uni affaibli ne peut plus tenir son empire. L'Inde obtient son indépendance le 15 août 1947, au terme d'une longue lutte menée notamment par Gandhi et sa stratégie de désobéissance civile non violente ; le pays est partagé (the Partition) entre l'Inde et le Pakistan, dans des violences qui jettent des millions de personnes sur les routes. En Afrique, la Gold Coast devient le Ghana en 1957 : c'est la première colonie d'Afrique subsaharienne à accéder à l'indépendance, sous la conduite de Kwame Nkrumah. Suivent notamment le Nigeria (1960), la Jamaïque (1962) et le Kenya (1963), après la révolte des Mau Mau, durement réprimée.",
                "En février 1960, au Cap, le Premier ministre Harold Macmillan reconnaît devant le Parlement sud-africain qu'un « wind of change » (un vent de changement) souffle sur l'Afrique. La plupart des nouveaux États choisissent de rejoindre le Commonwealth. La rétrocession de Hong Kong à la Chine, le 1er juillet 1997, est souvent présentée comme la fin symbolique de l'empire. Il reste aujourd'hui au Royaume-Uni quelques territoires d'outre-mer (British Overseas Territories), comme Gibraltar, les Bermudes ou les îles Falkland.",
              ],
              box: { label: "À retenir", text: "1947 : indépendance et partition de l'Inde et du Pakistan. 1957 : Ghana. 1960 : discours du « wind of change » ; indépendance du Nigeria. 1962 : Jamaïque. 1963 : Kenya. 1997 : Hong Kong rendu à la Chine." },
            },
            {
              heading: "Héritages, et les outils pour raconter l'histoire",
              paragraphs: [
                "L'empire a laissé des héritages durables et débattus : la langue anglaise, parlée sur tous les continents, le droit (the common law), le parlementarisme, le cricket ou le rugby, mais aussi des frontières tracées sans tenir compte des peuples, des inégalités et des mémoires douloureuses. Les migrations en sont un autre héritage : le 22 juin 1948, le navire Empire Windrush arrive à Tilbury, près de Londres, avec des centaines de passagers venus des Caraïbes, invités à aider à reconstruire le pays. En 2018, le scandale Windrush révèle que certains d'entre eux, installés depuis des décennies, ont été privés de leurs droits, voire expulsés, faute de papiers.",
                "Pour raconter l'histoire, employez le prétérit (Britain ruled India for almost a century) et la voix passive, be conjugué suivi du participe passé, quand le sujet subit l'action : India was ruled by Britain. Ghana was granted independence in 1957. Independence was proclaimed in 1776. Les années se lisent par paires de chiffres : 1947 se dit nineteen forty-seven, 1607 sixteen oh seven, 1600 sixteen hundred. On dit in 1947 ou in August, mais on the 15th of August 1947 (ou on August 15th, 1947).",
              ],
              box: { label: "Règle", text: "Voix passive : be (au temps voulu) + participe passé ; l'agent est introduit par by. India was ruled by Britain. Dates : in + année ou mois, on + jour précis. 1947 : nineteen forty-seven ; 1607 : sixteen oh seven ; 2010 : twenty ten ou two thousand and ten." },
            },
          ],
          keyPoints: [
            "1600 : East India Company ; 1607 : Jamestown ; 1788 : First Fleet ; 1858 : British Raj ; vers 1920, l'empire couvre un quart des terres émergées.",
            "Dominions autonomes : Canada (1867), Australie (1901), Nouvelle-Zélande (1907), Afrique du Sud (1910) ; statut de Westminster (1931).",
            "1949, déclaration de Londres : naissance du Commonwealth moderne, ouvert aux républiques ; le roi en est le Head of the Commonwealth.",
            "Décolonisation : Inde et Pakistan (1947), Ghana (1957), Nigeria (1960), Jamaïque (1962), Kenya (1963), Hong Kong (1997).",
            "Héritages : langue anglaise, common law, sports, migrations (Windrush, 1948), mais aussi frontières, inégalités et mémoires douloureuses.",
            "Voix passive : India was ruled by Britain. Dates : in 1947 (nineteen forty-seven), on the 15th of August.",
          ],
          example: {
            statement: "Réécrivez ces trois phrases à la voix passive, puis indiquez comment se lisent les dates en anglais : 1) The East India Company conquered Bengal in 1757. 2) Britain granted Ghana independence in 1957. 3) Commonwealth leaders adopted the London Declaration in 1949.",
            solution: [
              "Méthode : le complément d'objet devient sujet ; on conjugue be au temps du verbe actif (ici le prétérit : was ou were), suivi du participe passé ; l'ancien sujet devient l'agent, introduit par by, ou disparaît s'il n'apporte rien.",
              "1) Bengal was conquered by the East India Company in 1757 (seventeen fifty-seven).",
              "2) Ghana was granted independence by Britain in 1957 (nineteen fifty-seven). Avec un verbe à deux compléments comme grant, l'anglais prend de préférence la personne ou le pays bénéficiaire comme sujet du passif.",
              "3) The London Declaration was adopted in 1949 (nineteen forty-nine) : l'agent, évident, peut être omis.",
              "Réponse : Bengal was conquered by the East India Company in 1757 ; Ghana was granted independence in 1957 ; the London Declaration was adopted in 1949.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant, puis écrivez la phrase complète en indiquant comment se lit la date : dates : 1607, 1788, 1867, 1947, 1957. Événements : a) Ghana became independent. b) The First Fleet arrived in Australia. c) Jamestown was founded. d) India became independent. e) Canada became a dominion.",
              hint: "Suivez l'ordre de l'histoire : la colonisation de l'Amérique, puis celle de l'Australie, l'autonomie des dominions, enfin la décolonisation, d'abord en Asie, puis en Afrique.",
              solution: [
                "1607 → c) Jamestown was founded in 1607 (sixteen oh seven).",
                "1788 → b) The First Fleet arrived in Australia in 1788 (seventeen eighty-eight).",
                "1867 → e) Canada became a dominion in 1867 (eighteen sixty-seven).",
                "1947 → d) India became independent in 1947 (nineteen forty-seven).",
                "1957 → a) Ghana became independent in 1957 (nineteen fifty-seven).",
                "Résultat : 1607-c, 1788-b, 1867-e, 1947-d, 1957-a.",
              ],
            },
            {
              level: 2,
              statement: "Mettez chaque verbe entre parenthèses au prétérit, à la voix active ou passive selon le sens : « In 1858, after a great rebellion, India (place) under the direct rule of the British Crown. Queen Victoria (take) the title of Empress of India in 1876. In the 20th century, the independence movement (lead) by Gandhi, who (encourage) non-violent protest. India finally (become) independent on 15 August 1947, but the country (divide) into two states, India and Pakistan. »",
              hint: "Demandez-vous si le sujet fait l'action ou la subit. S'il la subit, employez was ou were suivi du participe passé ; take et become sont irréguliers.",
              solution: [
                "India was placed : l'Inde subit l'action, passif au prétérit.",
                "Queen Victoria took : la reine fait l'action ; take, took, taken.",
                "the independence movement was led by Gandhi : passif avec agent ; lead, led, led.",
                "who encouraged : Gandhi fait l'action, prétérit régulier.",
                "India finally became : actif ; become, became, become. The country was divided : passif.",
                "Résultat : was placed, took, was led, encouraged, became, was divided.",
              ],
            },
            {
              level: 3,
              statement: "Compréhension de l'écrit. Lisez ce texte écrit pour l'exercice, puis répondez en anglais : « In 1949, the British Commonwealth faced a difficult question. India, which had become independent two years earlier, wanted to become a republic. Under the old rules, every member had to recognise the British king as head of state, so India would have had to leave. The leaders found a compromise in London: India could stay as a republic if it accepted the king as a symbol of the free association of its members, with the title of Head of the Commonwealth. The word “British” was dropped. Many historians see this moment as the birth of the modern Commonwealth: an organisation that no longer depended on the Crown, and that newly independent nations could freely choose to join. » Questions : 1) What did India want in 1949? 2) Why would India have had to leave under the old rules? 3) What title was given to the king? 4) Find a verb in the passive voice. 5) In your own words (about 30 words), explain why 1949 is seen as a turning point.",
              hint: "Repérez les mots clés de chaque question dans le texte (wanted, old rules, title, birth) ; pour la question 5, reformulez avec vos propres mots au lieu de recopier.",
              solution: [
                "1) India wanted to become a republic while remaining a member of the Commonwealth.",
                "2) Because every member had to recognise the British king as head of state, and a republic does not have a king as head of state.",
                "3) The king was given the title of Head of the Commonwealth, as a symbol of the free association of its members.",
                "4) « The word “British” was dropped » : was + participe passé, voix passive au prétérit.",
                "5) Exemple : « 1949 is a turning point because the Commonwealth stopped being a club of the king's dominions. Republics could now join it, so it became a free association of equal and independent countries. » (environ 30 mots)",
                "Résultat : l'Inde voulait devenir une république ; le compromis de Londres fait du roi un simple symbole, ce qui ouvre le Commonwealth aux nouveaux États indépendants.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "The East India Company receives its royal charter.",
              "The thirteen American colonies declare their independence.",
              "The First Fleet lands in Australia.",
              "Canada becomes a dominion.",
              "India and Pakistan become independent.",
              "The London Declaration creates the modern Commonwealth.",
              "Ghana becomes independent.",
            ],
          },
          quiz: [
            { q: "Which country was the first in sub-Saharan Africa to gain independence from Britain, in 1957?", options: ["Nigeria", "Kenya", "Uganda", "Ghana"], answer: 3, why: "La Gold Coast devient indépendante en 1957 sous le nom de Ghana, avec Kwame Nkrumah ; le Nigeria suit en 1960, l'Ouganda en 1962, le Kenya en 1963." },
            { q: "« India ___ by the British Crown from 1858 to 1947. »", options: ["was ruled", "ruled", "has ruled", "is ruling"], answer: 0, why: "L'Inde subit l'action, dans une période passée et terminée : passif au prétérit, was ruled." },
            { q: "What did the London Declaration of 1949 allow?", options: ["India to leave the Commonwealth", "The end of the British monarchy", "Republics to remain members", "Britain to keep India as a colony"], answer: 2, why: "La déclaration de Londres permet à l'Inde, et ensuite à d'autres républiques, de rester membres en reconnaissant le roi comme Head of the Commonwealth." },
            { q: "How do you usually read the year 1607?", options: ["one thousand six hundred seven", "sixteen seventy", "one six zero seven", "sixteen oh seven"], answer: 3, why: "Les années se lisent par paires de chiffres ; le zéro se dit oh : sixteen oh seven." },
            { q: "What was a « dominion »?", options: ["A colony governed directly by the army", "A self-governing settler colony", "A trading post of the East India Company", "An independent republic outside the empire"], answer: 1, why: "Les dominions (Canada, Australie, Nouvelle-Zélande, Afrique du Sud) étaient des colonies de peuplement qui se gouvernaient elles-mêmes." },
          ],
          trap: "Confondre l'Empire britannique et le Commonwealth : le Commonwealth n'est pas un empire mais une association libre d'États indépendants et égaux, dont la plupart sont des républiques. Autre erreur fréquente : oublier be dans la voix passive (« India ruled by Britain » au lieu de India was ruled by Britain).",
          method: "Construisez une frise chronologique en anglais avec cinq dates repères (1600, 1788, 1867, 1947, 1949), lisez chaque date à voix haute (sixteen hundred, seventeen eighty-eight...) et formulez pour chacune une phrase au prétérit, actif ou passif.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'commonwealth-aujourdhui',
          title: "Le Commonwealth aujourd'hui : institutions et pays membres",
          minutes: 30,
          objectives: [
            "Présenter en anglais le Commonwealth actuel : ses membres, ses institutions et ses valeurs.",
            "Distinguer le Commonwealth, les royaumes du Commonwealth (Commonwealth realms) et les républiques membres.",
            "Employer le present perfect avec since et for, et lire les grands nombres en anglais.",
          ],
          course: [
            {
              heading: "Une association libre de 56 pays",
              paragraphs: [
                "Le Commonwealth of Nations réunit aujourd'hui 56 États indépendants, répartis sur tous les continents : l'Afrique forme le groupe le plus nombreux, suivie des Caraïbes et des Amériques, du Pacifique, de l'Asie et de l'Europe (Royaume-Uni, Malte, Chypre). Ensemble, ils comptent plus de 2,5 milliards d'habitants, soit près d'un tiers de l'humanité, avec une population très jeune. On y trouve des géants comme l'Inde, des pays riches comme le Canada ou l'Australie, et de nombreux petits États insulaires, comme Tuvalu ou les Samoa.",
                "Tous les membres sont égaux, quelle que soit leur taille, et l'adhésion est volontaire : un pays peut quitter l'association, ou en être suspendu s'il ne respecte pas ses valeurs. L'Afrique du Sud l'a quittée en 1961, sous la pression des critiques contre l'apartheid, avant de la rejoindre en 1994 ; le Zimbabwe l'a quittée en 2003, après une suspension. Des pays qui n'ont jamais été des colonies britanniques ont aussi choisi d'adhérer : le Mozambique (1995), le Rwanda (2009), puis le Gabon et le Togo en 2022.",
              ],
              box: { label: "Repère", text: "56 États membres, plus de 2,5 milliards d'habitants. Adhésion libre et égalité entre les membres. Membres sans passé colonial britannique : Mozambique (1995), Rwanda (2009), Gabon et Togo (2022)." },
            },
            {
              heading: "Les institutions",
              paragraphs: [
                "Le chef du Commonwealth (Head of the Commonwealth) a un rôle symbolique : il incarne la libre association des membres, mais ne gouverne aucun d'entre eux à ce titre. La reine Élisabeth II a exercé ce rôle de 1952 à sa mort, en 2022 ; le roi Charles III lui a succédé, comme les chefs de gouvernement l'avaient décidé en 2018, car la fonction n'est pas héréditaire en droit. Le Secrétariat du Commonwealth, installé à Marlborough House, à Londres, organise le travail commun ; il est dirigé par un secrétaire général, la Ghanéenne Shirley Botchwey depuis 2024.",
                "Les chefs de gouvernement se réunissent en principe tous les deux ans lors du CHOGM (Commonwealth Heads of Government Meeting), organisé à tour de rôle dans un pays membre : celui de 2024 s'est tenu à Apia, aux Samoa, pour la première fois dans un petit État insulaire du Pacifique. Le Commonwealth fonctionne par consensus et par coopération : bourses d'études, aide aux petits États, observation des élections, échanges entre parlements, entre universités et entre écoles.",
              ],
              box: { label: "Définition", text: "Head of the Commonwealth : le chef symbolique (Charles III depuis 2022). The Commonwealth Secretariat : l'administration commune, à Londres, dirigée par un Secretary-General. CHOGM : la réunion des chefs de gouvernement, en principe tous les deux ans." },
            },
            {
              heading: "Royaumes et républiques",
              paragraphs: [
                "Il ne faut pas confondre les membres du Commonwealth et les royaumes du Commonwealth (Commonwealth realms). Dans une quinzaine de pays, dont le Royaume-Uni, le Canada, l'Australie, la Nouvelle-Zélande ou la Jamaïque, le roi Charles III est aussi le chef de l'État ; hors du Royaume-Uni, il y est représenté par un gouverneur général (a Governor-General). Mais la grande majorité des membres sont des républiques, comme l'Inde, le Nigeria ou l'Afrique du Sud, et cinq ont leur propre monarque, comme le Lesotho, les Tonga ou la Malaisie.",
                "Le débat sur la monarchie reste vif dans plusieurs royaumes. La Barbade est devenue une république le 30 novembre 2021, tout en restant membre du Commonwealth. En Australie, un projet de république a été rejeté par référendum en 1999. Devenir une république ne signifie donc pas quitter le Commonwealth : c'est précisément ce qu'a permis la déclaration de Londres en 1949.",
              ],
              box: { label: "À retenir", text: "Membre du Commonwealth ≠ royaume du Commonwealth. Un royaume (realm) : le roi y est chef de l'État, représenté par un gouverneur général (une quinzaine de pays). Une république membre : le roi n'y est que Head of the Commonwealth (la majorité des membres)." },
            },
            {
              heading: "Des valeurs, des liens et des mots pour en parler",
              paragraphs: [
                "La Charte du Commonwealth, adoptée en 2013, rassemble ses valeurs : la démocratie, les droits humains, l'état de droit (the rule of law), la liberté d'expression, l'égalité entre les femmes et les hommes, le développement durable, la tolérance et le respect. Les liens sont aussi culturels : l'anglais sert de langue commune, et les Jeux du Commonwealth (the Commonwealth Games), créés en 1930 à Hamilton, au Canada, sous le nom de British Empire Games, ont lieu tous les quatre ans ; ceux de 2022 se sont déroulés à Birmingham, ceux de 2026 à Glasgow. Le Commonwealth Day est célébré le deuxième lundi de mars.",
                "Pour présenter une situation qui dure encore, employez le present perfect avec since (point de départ) ou for (durée) : The modern Commonwealth has existed since 1949. Rwanda has been a member since 2009. Charles III has been Head of the Commonwealth for several years. Pour lire les grands nombres : 56 se dit fifty-six ; 2.5 billion se dit two point five billion (a billion = un milliard). En anglais, la virgule décimale est un point (2.5) et les milliers sont séparés par des virgules (2,500,000).",
              ],
              box: { label: "Règle", text: "Present perfect + since + point de départ : since 1949, since 2022. Present perfect + for + durée : for 75 years. A billion = un milliard ; pas de -s après un nombre : two point five billion, fifty-six million." },
            },
          ],
          keyPoints: [
            "Le Commonwealth : 56 États libres et égaux, plus de 2,5 milliards d'habitants ; l'Afrique est le groupe le plus nombreux.",
            "Head of the Commonwealth : rôle symbolique, Charles III depuis 2022 ; Secrétariat à Londres ; CHOGM en principe tous les deux ans.",
            "Commonwealth realms (une quinzaine, le roi y est chef de l'État) ≠ républiques membres (la majorité).",
            "Charte de 2013 : démocratie, droits humains, état de droit, égalité, développement durable.",
            "On peut quitter le Commonwealth ou en être suspendu ; des pays sans passé britannique ont adhéré (Mozambique, Rwanda, Gabon, Togo).",
            "Has been a member since 2009 / for years ; a billion = un milliard (2.5 billion).",
          ],
          example: {
            statement: "Présentez en anglais, en quatre phrases, le Rwanda et son lien avec le Commonwealth, à partir de ces informations : ancienne colonie allemande, puis placée sous administration belge ; membre du Commonwealth depuis 2009 ; quatre langues officielles (kinyarwanda, français, anglais, swahili) ; a accueilli le CHOGM à Kigali en 2022.",
            solution: [
              "Présenter le passé colonial au prétérit, avec un passif : Rwanda was a German colony, then it was ruled by Belgium.",
              "Exprimer une situation qui dure jusqu'à aujourd'hui avec le present perfect et since : has been a member since 2009.",
              "Souligner l'originalité (un membre sans passé britannique) avec however, puis ajouter le CHOGM de 2022 au prétérit, car la date est passée et révolue.",
              "Réponse : « Rwanda was never a British colony: it was first a German colony, then it was ruled by Belgium. However, it has been a member of the Commonwealth since 2009. English is one of its four official languages, along with Kinyarwanda, French and Swahili. In 2022, it hosted the Commonwealth Heads of Government Meeting in Kigali. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec since ou for : 1) The modern Commonwealth has existed ___ 1949. 2) Barbados has been a republic ___ 2021. 3) Gabon has been a member ___ a few years. 4) The Commonwealth Games have taken place ___ almost a century. 5) Charles III has been Head of the Commonwealth ___ September 2022.",
              hint: "Since introduit un point de départ (une date, un moment) ; for introduit une durée (un nombre d'années, a few years, a long time).",
              solution: [
                "1) since 1949 : une date, point de départ.",
                "2) since 2021 : une date.",
                "3) for a few years : une durée.",
                "4) for almost a century : une durée (les premiers Jeux datent de 1930).",
                "5) since September 2022 : un moment précis.",
                "Résultat : since, since, for, for, since.",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en anglais : 1) Le Commonwealth compte 56 pays membres. 2) La reine Élisabeth II a été chef du Commonwealth de 1952 à 2022. 3) La Barbade est une république depuis 2021. 4) Plus de 2,5 milliards de personnes vivent dans le Commonwealth. 5) Les chefs de gouvernement se réunissent tous les deux ans.",
              hint: "Une période terminée (de 1952 à 2022) appelle le prétérit ; une situation qui dure encore (depuis 2021) appelle le present perfect ; attention au point décimal et au faux ami milliard.",
              solution: [
                "1) The Commonwealth has 56 member countries (ou : is made up of 56 member states).",
                "2) Queen Elizabeth II was Head of the Commonwealth from 1952 to 2022 : prétérit, car la période est terminée.",
                "3) Barbados has been a republic since 2021 : present perfect, car la situation dure encore ; « depuis » ne se traduit jamais par un présent simple.",
                "4) More than 2.5 billion people live in the Commonwealth : 2.5 avec un point, billion sans -s.",
                "5) Heads of government meet every two years.",
                "Résultat : has 56 member countries ; was Head of the Commonwealth from 1952 to 2022 ; has been a republic since 2021 ; more than 2.5 billion people ; every two years.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (130 à 150 mots). Your English-speaking pen friend writes: « My teacher talked about the Commonwealth today, but I don't really understand what it is. Is it still useful? » Write an email to answer: explain what the Commonwealth is, how it works, and give your opinion with at least one argument for and one argument against.",
              hint: "Organisez votre courriel : formule d'appel, définition (members, Head of the Commonwealth), fonctionnement (CHOGM, Charter, Games), avis nuancé (on the one hand, on the other hand), formule de fin. Employez au moins une fois since ou for avec le present perfect.",
              solution: [
                "Plan : 1) définition et membres ; 2) institutions et valeurs ; 3) argument pour (coopération, aide aux petits États, liens culturels) ; 4) argument contre (rôle surtout symbolique, héritage colonial) ; 5) conclusion personnelle.",
                "Exemple de production : « Hi Sam, The Commonwealth is a free association of 56 independent countries, most of which were once part of the British Empire. It has existed in its modern form since 1949. Its symbolic head is King Charles III, but he does not rule the member states. Leaders meet every two years, and the members have signed a Charter based on values such as democracy and human rights. There are also the Commonwealth Games, every four years. On the one hand, I think it is useful, because small island states can make their voices heard and get help, for example to fight climate change. On the other hand, some people say it has little real power and reminds them of colonisation. Personally, I believe it is worth keeping, because it brings very different countries together. Best wishes, Léa » (environ 145 mots)",
                "Résultat : un courriel structuré, qui définit le Commonwealth, explique son fonctionnement et donne un avis nuancé, avec le present perfect (has existed since 1949).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Head of the Commonwealth", right: "le chef symbolique de l'association, Charles III depuis 2022" },
              { left: "a Commonwealth realm", right: "un pays membre dont le roi est le chef de l'État" },
              { left: "CHOGM", right: "la réunion des chefs de gouvernement, en principe tous les deux ans" },
              { left: "the Secretariat", right: "l'administration commune, installée à Londres" },
              { left: "the Commonwealth Charter", right: "le texte de 2013 qui rassemble les valeurs communes" },
              { left: "a Governor-General", right: "le représentant du roi dans un royaume du Commonwealth" },
            ],
          },
          quiz: [
            { q: "How many member states does the Commonwealth have today?", options: ["56", "27", "193", "14"], answer: 0, why: "Le Commonwealth compte 56 États membres depuis l'adhésion du Gabon et du Togo en 2022 ; 27 est le nombre de membres de l'Union européenne, 193 celui de l'ONU." },
            { q: "Who is the current Head of the Commonwealth?", options: ["The British Prime Minister", "The Secretary-General", "The President of India", "King Charles III"], answer: 3, why: "Charles III a succédé à Élisabeth II en 2022 ; le secrétaire général dirige l'administration, mais n'est pas le chef de l'association." },
            { q: "« Rwanda has been a member ___ 2009. »", options: ["for", "during", "since", "from"], answer: 2, why: "Avec le present perfect, since introduit le point de départ d'une situation qui dure encore." },
            { q: "What is a « Commonwealth realm »?", options: ["Any republic that belongs to the Commonwealth", "A member where the King is head of state", "A former colony that left the Commonwealth", "A British overseas territory"], answer: 1, why: "Dans les royaumes du Commonwealth, comme le Canada ou l'Australie, Charles III est le chef de l'État, représenté par un gouverneur général." },
            { q: "Which country became a republic in 2021 but remained in the Commonwealth?", options: ["Australia", "Jamaica", "Canada", "Barbados"], answer: 3, why: "La Barbade est devenue une république le 30 novembre 2021 ; l'Australie a rejeté la république par référendum en 1999." },
          ],
          trap: "Croire que tous les pays du Commonwealth ont Charles III pour chef d'État : il ne l'est que dans une quinzaine de royaumes (realms) ; ailleurs, il est seulement Head of the Commonwealth, un titre symbolique. Attention aussi au faux ami billion, qui signifie milliard.",
          method: "Préparez une fiche en trois questions, who? (Head of the Commonwealth, Secretary-General), when? (CHOGM tous les deux ans, Jeux tous les quatre ans), what? (la Charte de 2013 et ses valeurs), puis présentez-la à l'oral en une minute en employant au moins deux fois since ou for.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'inde-afrique-sud-nigeria',
          title: "Regards sur l'Inde, l'Afrique du Sud et le Nigeria",
          minutes: 35,
          objectives: [
            "Situer l'Inde, l'Afrique du Sud et le Nigeria : indépendance, grandes figures, langues et diversité.",
            "Expliquer en anglais ce qu'était l'apartheid et ce que désigne la « Rainbow Nation ».",
            "Présenter un auteur ou une œuvre de ces pays (Achebe, Soyinka, Adichie, Bollywood, Nollywood).",
            "Nuancer un propos avec les connecteurs de concession et d'opposition (although, despite, however, whereas) et les relatives.",
          ],
          course: [
            {
              heading: "L'Inde, la plus grande démocratie du monde",
              paragraphs: [
                "L'Inde obtient son indépendance le 15 août 1947, au terme d'une longue lutte menée par le Congrès national indien. Gandhi y a développé la désobéissance civile non violente : en 1930, la marche du sel (the Salt March) défie le monopole britannique sur le sel. L'indépendance s'accompagne de la partition entre l'Inde, à majorité hindoue, et le Pakistan, à majorité musulmane : des violences massives et des millions de réfugiés marquent durablement les mémoires. Gandhi est assassiné le 30 janvier 1948. Jawaharlal Nehru devient le premier Premier ministre, et la Constitution, entrée en vigueur le 26 janvier 1950 (Republic Day), fait de l'Inde une république.",
                "Depuis 2023, selon les estimations de l'ONU, l'Inde est le pays le plus peuplé du monde, devant la Chine ; c'est aussi la plus grande démocratie du monde. Le hindi et l'anglais sont les langues officielles de l'Union, et la Constitution reconnaît 22 langues : l'anglais sert de langue de communication entre les régions, dans les affaires et à l'université. Le cinéma de Mumbai (Bollywood) est connu dans le monde entier, Bangalore (Bengaluru) est un grand centre de l'informatique, et le cricket est une passion nationale. L'anglais a d'ailleurs emprunté de nombreux mots aux langues de l'Inde : bungalow, shampoo, pyjamas, jungle, loot.",
              ],
              box: { label: "Repère", text: "1930 : marche du sel de Gandhi. 15 août 1947 : indépendance et partition (Inde, Pakistan). 30 janvier 1948 : assassinat de Gandhi. 26 janvier 1950 : l'Inde devient une république. 2023 : pays le plus peuplé du monde." },
            },
            {
              heading: "L'Afrique du Sud, de l'apartheid à la « Rainbow Nation »",
              paragraphs: [
                "Colonie néerlandaise au Cap à partir de 1652, puis britannique au début du XIXe siècle, l'Afrique du Sud devient un dominion en 1910. À partir de 1948, le Parti national impose l'apartheid (un mot afrikaans qui signifie séparation) : la population est classée selon la race, les mariages mixtes sont interdits, les quartiers, les écoles, les transports et les plages sont séparés, et la majorité noire est privée du droit de vote. En 1960, la police tire sur des manifestants à Sharpeville ; en 1976, les élèves de Soweto se soulèvent contre l'enseignement imposé en afrikaans. En 1961, l'Afrique du Sud quitte le Commonwealth.",
                "Nelson Mandela, dirigeant de l'ANC (African National Congress), est condamné à la prison à vie en 1964 ; il passe vingt-sept ans en prison, dont dix-huit sur l'île de Robben Island. Libéré le 11 février 1990, il négocie la fin de l'apartheid avec le président F. W. de Klerk ; tous deux reçoivent le prix Nobel de la paix en 1993. Le 27 avril 1994, les premières élections ouvertes à tous donnent la victoire à l'ANC : Mandela devient le premier président noir du pays, et l'Afrique du Sud revient dans le Commonwealth.",
                "L'archevêque Desmond Tutu, qui préside ensuite la Commission vérité et réconciliation, popularise l'expression « Rainbow Nation » (la nation arc-en-ciel) pour dire l'unité d'un pays très divers. L'Afrique du Sud compte onze langues officielles, dont l'anglais, l'afrikaans, le zoulou et le xhosa, auxquelles s'est ajoutée la langue des signes sud-africaine en 2023. Les inégalités héritées de l'apartheid restent pourtant fortes.",
              ],
              box: { label: "À retenir", text: "Apartheid (à partir de 1948) : ségrégation raciale imposée par la loi. Sharpeville (1960), Soweto (1976). Mandela : 27 ans de prison, libéré en 1990, président en 1994. Nobel de la paix 1993 (Mandela et de Klerk). Rainbow Nation : l'expression de Desmond Tutu." },
            },
            {
              heading: "Le Nigeria, géant de l'Afrique",
              paragraphs: [
                "Le Nigeria naît de la réunion, en 1914, des protectorats britanniques du Nord et du Sud par le gouverneur Frederick Lugard. Indépendant le 1er octobre 1960, il est aujourd'hui le pays le plus peuplé d'Afrique, avec plus de 200 millions d'habitants. Plus de 250 groupes ethniques y vivent ; les principaux sont les Haoussa et les Peuls au nord, les Yoruba au sud-ouest et les Igbo au sud-est. L'anglais, langue officielle, et le pidgin nigérian permettent de se comprendre. De 1967 à 1970, la guerre du Biafra, née de la sécession du sud-est, fait de très nombreuses victimes. Abuja est la capitale depuis 1991, mais Lagos reste la plus grande ville.",
                "La littérature nigériane est l'une des plus riches du monde anglophone. Dans Things Fall Apart (1958), Chinua Achebe raconte la vie d'Okonkwo, un homme respecté d'un village igbo, et la destruction de son monde par l'arrivée des missionnaires et de l'administration coloniale. En 1986, Wole Soyinka devient le premier écrivain africain à recevoir le prix Nobel de littérature. Chimamanda Ngozi Adichie, autrice de Half of a Yellow Sun (2006), sur la guerre du Biafra, met en garde dans sa conférence The Danger of a Single Story (2009) contre l'histoire unique, celle qui réduit un peuple à un cliché. Nollywood, l'industrie du cinéma nigérian, est l'une des plus productives du monde, et l'afrobeats (Burna Boy, Wizkid) s'écoute sur tous les continents.",
              ],
              box: { label: "Repère", text: "1914 : unification du Nigeria. 1er octobre 1960 : indépendance. 1967-1970 : guerre du Biafra. Achebe, Things Fall Apart (1958) ; Soyinka, prix Nobel de littérature 1986 ; Adichie, The Danger of a Single Story (2009). Nollywood, afrobeats." },
            },
            {
              heading: "Nuancer : concession, opposition et relatives",
              paragraphs: [
                "Pour parler de ces pays sans clichés, il faut nuancer. Although (bien que) et even though (même si) sont suivis d'une proposition complète, avec un sujet et un verbe : Although English is not the mother tongue of most Indians, it is widely used at university. Despite et in spite of (malgré) sont suivis d'un nom ou d'un verbe en -ing : Despite apartheid, many South Africans fought for equality. However (cependant) ouvre en général une nouvelle phrase et est suivi d'une virgule. Whereas et while opposent deux faits : Hindi is mainly spoken in the north, whereas Tamil is mainly spoken in the south.",
                "Employez aussi les relatives pour présenter une personne ou une œuvre : who pour une personne (Mandela, who spent 27 years in prison, became president), which pour une chose (Things Fall Apart, which was published in 1958, is a classic), whose pour la possession (Adichie, whose novels are read all over the world, lives between Nigeria and the United States). Entre virgules, la relative apporte une précision ; on ne peut alors pas remplacer who ou which par that.",
              ],
              box: { label: "Règle", text: "Although / even though + sujet + verbe. Despite / in spite of + nom ou V-ing (jamais « despite of »). However, + nouvelle phrase. Whereas / while : opposition de deux faits. Relatives : who (personne), which (chose), whose (possession)." },
            },
          ],
          keyPoints: [
            "Inde : marche du sel (1930), indépendance et partition (15 août 1947), république (1950), pays le plus peuplé du monde depuis 2023.",
            "Afrique du Sud : apartheid à partir de 1948 ; Mandela, 27 ans de prison, libéré en 1990, président en 1994 ; Rainbow Nation (Desmond Tutu).",
            "Nigeria : unifié en 1914, indépendant en 1960, pays le plus peuplé d'Afrique, plus de 250 groupes ethniques, guerre du Biafra (1967-1970).",
            "Auteurs : Achebe (Things Fall Apart, 1958), Soyinka (Nobel 1986), Adichie (The Danger of a Single Story, 2009).",
            "Although + sujet + verbe ; despite + nom ou V-ing ; However, en début de phrase ; whereas pour opposer deux faits.",
            "Relatives : who (personne), which (chose), whose (possession).",
          ],
          example: {
            statement: "Reliez chaque paire de phrases avec le mot indiqué : 1) Apartheid was very harsh. Many South Africans resisted it. (although) 2) Nigeria has hundreds of languages. Nigerians can communicate in English or Pidgin. (despite) 3) Mandela spent 27 years in prison. He became president in 1994. (who)",
            solution: [
              "Repérer la construction de chaque mot : although est suivi d'une proposition (sujet + verbe), despite d'un nom ou d'un V-ing, who reprend une personne.",
              "1) Although apartheid was very harsh, many South Africans resisted it.",
              "2) Despite the hundreds of languages spoken in their country, Nigerians can communicate in English or Pidgin : despite est suivi d'un groupe nominal.",
              "3) Mandela, who spent 27 years in prison, became president in 1994 : la relative, entre virgules, apporte une précision sur la personne.",
              "Réponse : Although apartheid was very harsh, many South Africans resisted it. Despite the hundreds of languages spoken in their country, Nigerians can communicate in English or Pidgin. Mandela, who spent 27 years in prison, became president in 1994.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec although, despite, however ou whereas (l'un d'eux sert deux fois) : 1) ___ he spent 27 years in prison, Mandela did not seek revenge. 2) ___ the violence of Partition, India built a stable democracy. 3) Lagos is the largest city in Nigeria. ___, the capital is Abuja. 4) Hindi is mainly spoken in the north, ___ Tamil is mainly spoken in the south. 5) ___ Things Fall Apart was published in 1958, it is still read in schools today.",
              hint: "Regardez ce qui suit le blanc : un sujet et un verbe (although), un nom (despite), une virgule en début de phrase (however), ou un second fait opposé au premier (whereas).",
              solution: [
                "1) Although : suivi d'un sujet et d'un verbe (he spent).",
                "2) Despite : suivi d'un groupe nominal (the violence of Partition).",
                "3) However : en début de phrase, suivi d'une virgule.",
                "4) whereas : oppose deux faits mis en parallèle.",
                "5) Although : suivi d'un sujet et d'un verbe (Things Fall Apart was published).",
                "Résultat : Although, Despite, However, whereas, Although.",
              ],
            },
            {
              level: 2,
              statement: "Présentez chaque personne ou œuvre en une seule phrase contenant une relative (who, which ou whose), à partir des notes : 1) Gandhi / led the Salt March in 1930 / is called the Father of the Nation in India. 2) Things Fall Apart / was written by Chinua Achebe / tells the story of Okonkwo. 3) Desmond Tutu / chaired the Truth and Reconciliation Commission / popularised the phrase « Rainbow Nation ». 4) Chimamanda Ngozi Adichie / her talk on the danger of a single story is famous all over the world / is a Nigerian writer.",
              hint: "Placez l'information secondaire dans la relative, entre virgules, juste après le nom qu'elle complète ; whose remplace un possessif (her, his, its).",
              solution: [
                "1) Gandhi, who led the Salt March in 1930, is called the Father of the Nation in India.",
                "2) Things Fall Apart, which was written by Chinua Achebe, tells the story of Okonkwo : which pour une chose.",
                "3) Desmond Tutu, who chaired the Truth and Reconciliation Commission, popularised the phrase « Rainbow Nation ».",
                "4) Chimamanda Ngozi Adichie, whose talk on the danger of a single story is famous all over the world, is a Nigerian writer : whose remplace her.",
                "Résultat : who, which, who, whose, chaque relative étant placée entre virgules après le nom qu'elle précise.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (150 mots environ). Inspired by Chimamanda Ngozi Adichie's warning against « the single story », choose India, South Africa or Nigeria and write an article for your school magazine showing that this country cannot be reduced to one cliché. Use at least three connectors of concession or contrast and two relative clauses.",
              hint: "Commencez par le cliché, puis nuancez-le avec des faits précis du cours (histoire, langues, culture, grandes figures) ; terminez par une conclusion qui reconnaît les difficultés sans s'y limiter.",
              solution: [
                "Plan : 1) le cliché ; 2) la diversité du pays (population, langues, peuples) ; 3) l'histoire et les grandes figures ; 4) la création contemporaine ; 5) une conclusion nuancée.",
                "Exemple de production (Nigeria) : « When people think of Nigeria, they often imagine only poverty or corruption. However, this single story is far from the truth. Nigeria, which became independent in 1960, is the most populous country in Africa, and it is incredibly diverse: more than 250 ethnic groups live there. Although they speak hundreds of languages, Nigerians can communicate in English or Pidgin. Despite a painful past, including the Biafran War, the country has produced great writers, such as Chinua Achebe, whose novel Things Fall Apart is read all over the world, and Wole Soyinka, who won the Nobel Prize in Literature in 1986. Nigeria is also a creative giant: Nollywood makes a huge number of films, and afrobeats artists such as Burna Boy perform all over the world. Of course, the country faces real challenges, but reducing it to them would mean telling only half of the story. » (environ 150 mots)",
                "Résultat : un article nuancé qui emploie however, although et despite, ainsi que les relatives which, whose et who.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Inde, Afrique du Sud, Nigeria.",
            statements: [
              { text: "India became independent on 15 August 1947.", true: true, why: "L'indépendance s'accompagne de la partition entre l'Inde et le Pakistan." },
              { text: "Apartheid was a system of racial segregation imposed by law in South Africa.", true: true, why: "À partir de 1948, des lois séparent les populations selon la race et privent la majorité noire du droit de vote." },
              { text: "Nelson Mandela was released from prison in 1994.", true: false, why: "Il est libéré le 11 février 1990 ; 1994 est l'année de son élection à la présidence." },
              { text: "Abuja is the largest city in Nigeria.", true: false, why: "Abuja est la capitale depuis 1991, mais Lagos est la plus grande ville du pays." },
              { text: "Things Fall Apart was written by Wole Soyinka.", true: false, why: "Things Fall Apart (1958) est de Chinua Achebe ; Wole Soyinka a reçu le prix Nobel de littérature en 1986." },
              { text: "« Despite » is followed by a noun or a verb in -ing.", true: true, why: "Despite apartheid ; despite being... Jamais de sujet et de verbe directement après despite." },
              { text: "Hindi is the only official language of India.", true: false, why: "Le hindi et l'anglais sont les langues officielles de l'Union, et la Constitution reconnaît 22 langues." },
              { text: "Since 2023, India has been the most populous country in the world.", true: true, why: "Selon les estimations de l'ONU, l'Inde a dépassé la Chine en 2023." },
            ],
          },
          quiz: [
            { q: "Who coined the phrase « Rainbow Nation » to describe South Africa?", options: ["Chinua Achebe", "Jawaharlal Nehru", "Desmond Tutu", "Kwame Nkrumah"], answer: 2, why: "L'archevêque Desmond Tutu a forgé cette expression pour dire l'unité d'un pays très divers après l'apartheid." },
            { q: "« ___ apartheid, many people fought for equality. »", options: ["Despite", "Although", "However", "Whereas"], answer: 0, why: "Le blanc est suivi d'un nom seul (apartheid), sans verbe : seul despite convient." },
            { q: "When did India become independent?", options: ["On 26 January 1950", "On 1 October 1960", "On 30 January 1948", "On 15 August 1947"], answer: 3, why: "L'Inde devient indépendante le 15 août 1947 ; le 26 janvier 1950, elle devient une république." },
            { q: "Which novel by Chinua Achebe tells the story of Okonkwo?", options: ["Half of a Yellow Sun", "Things Fall Apart", "Purple Hibiscus", "Cry, the Beloved Country"], answer: 1, why: "Things Fall Apart (1958) raconte la vie d'Okonkwo ; Half of a Yellow Sun et Purple Hibiscus sont des romans d'Adichie." },
            { q: "Which is the most populous country in Africa?", options: ["Nigeria", "South Africa", "Kenya", "Ghana"], answer: 0, why: "Avec plus de 200 millions d'habitants, le Nigeria est le pays le plus peuplé d'Afrique." },
          ],
          trap: "Faire suivre although d'un simple nom (« although apartheid ») ou écrire « despite of » : although est suivi d'un sujet et d'un verbe, despite directement d'un nom ou d'un V-ing. Autre erreur : réduire un pays à un seul cliché, ce que dénonce précisément Adichie.",
          method: "Pour chaque pays, préparez une carte d'identité en anglais en cinq lignes, independence, key figure, languages, culture, challenges, puis entraînez-vous à la présenter oralement en reliant les idées avec although, despite et whereas.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'canada-australie-nz',
          title: "Regards sur le Canada, l'Australie et la Nouvelle-Zélande",
          minutes: 35,
          objectives: [
            "Situer le Canada, l'Australie et la Nouvelle-Zélande : formation, institutions, langues et symboles.",
            "Expliquer en anglais la place des peuples autochtones (First Nations, Aboriginal peoples, Māori) et le chemin vers la réconciliation.",
            "Exprimer le regret et rapporter des excuses officielles : apologise for + V-ing, should have + participe passé, I wish + past perfect.",
          ],
          course: [
            {
              heading: "Le Canada, un pays bilingue et multiculturel",
              paragraphs: [
                "Le Canada naît le 1er juillet 1867 (aujourd'hui Canada Day) de la confédération de quatre provinces : l'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick. D'abord dominion, il devient un État pleinement souverain ; en 1982, la Constitution est rapatriée de Londres et complétée par la Charte canadienne des droits et libertés. Le roi Charles III reste le chef de l'État, représenté par un gouverneur général, mais le pouvoir appartient au Premier ministre et au Parlement, à Ottawa.",
                "Le Canada est officiellement bilingue depuis la loi sur les langues officielles de 1969 : l'anglais et le français y ont un statut égal. Le Québec, majoritairement francophone, a organisé deux référendums sur sa souveraineté, en 1980 et en 1995 ; le non l'a emporté les deux fois, de justesse en 1995. En 1971, le Canada adopte une politique officielle de multiculturalisme : les immigrés sont encouragés à garder leur culture, et l'image de la mosaïque (a cultural mosaic) s'oppose à celle du creuset américain (the melting pot).",
              ],
              box: { label: "Repère", text: "1er juillet 1867 : Confédération (Canada Day). 1969 : bilinguisme officiel (anglais, français). 1971 : politique de multiculturalisme. 1980 et 1995 : référendums au Québec (victoire du non). 1982 : Constitution rapatriée et Charte des droits et libertés." },
            },
            {
              heading: "L'Australie, d'une colonie pénitentiaire à une nation",
              paragraphs: [
                "Les peuples aborigènes et ceux des îles du détroit de Torres vivent en Australie depuis au moins 50 000 ans : leurs cultures comptent parmi les plus anciennes cultures vivantes du monde. Le 26 janvier 1788, la First Fleet du capitaine Arthur Phillip s'installe à Sydney Cove avec des forçats : c'est le début de la colonisation, justifiée par la doctrine de la terra nullius (une terre qui n'appartiendrait à personne). Le 1er janvier 1901, six colonies se fédèrent et forment le Commonwealth of Australia ; Canberra devient ensuite la capitale.",
                "Pendant des décennies, la politique de l'Australie blanche (the White Australia policy) limite l'immigration non européenne ; elle est abandonnée dans les années 1960 et 1970, et le pays devient très multiculturel. Le 26 janvier, Australia Day, est aujourd'hui contesté : pour beaucoup d'Aborigènes, c'est un jour de deuil, parfois appelé Invasion Day. Le site d'Uluru, sacré pour le peuple anangu, a été rendu à ses propriétaires traditionnels en 1985.",
              ],
              box: { label: "À retenir", text: "Au moins 50 000 ans de présence aborigène. 26 janvier 1788 : arrivée de la First Fleet à Sydney Cove. Terra nullius : la terre de personne, une fiction juridique. 1er janvier 1901 : fédération. Australia Day (26 janvier), contesté sous le nom d'Invasion Day." },
            },
            {
              heading: "La Nouvelle-Zélande, Aotearoa",
              paragraphs: [
                "Les Māori, venus de Polynésie, s'installent en Nouvelle-Zélande vers le XIIIe siècle et la nomment Aotearoa. Le 6 février 1840, des représentants de la Couronne britannique et des chefs māori signent le traité de Waitangi, texte fondateur du pays, que plus de cinq cents chefs signent au total. Mais les versions anglaise et māori ne disent pas la même chose : la première parle de cession de la souveraineté, la seconde d'un droit de gouverner qui laisse aux chefs leur autorité. Ce malentendu alimente des conflits fonciers et des guerres au XIXe siècle. Depuis 1975, le tribunal de Waitangi examine les plaintes des Māori, et le 6 février, Waitangi Day, est la fête nationale.",
                "En 1893, la Nouvelle-Zélande est le premier pays autonome au monde à accorder aux femmes le droit de vote aux élections nationales, grâce à la mobilisation menée notamment par Kate Sheppard. Le te reo māori, la langue māori, est une langue officielle depuis 1987, comme la langue des signes néo-zélandaise depuis 2006. Le haka, danse rituelle māori que les All Blacks exécutent avant leurs matchs de rugby, est connu dans le monde entier.",
              ],
              box: { label: "Repère", text: "Vers le XIIIe siècle : installation des Māori (Aotearoa). 6 février 1840 : traité de Waitangi (Waitangi Day). 1893 : droit de vote des femmes. 1987 : le te reo māori devient langue officielle." },
            },
            {
              heading: "Peuples autochtones : mémoire, excuses et réconciliation",
              paragraphs: [
                "Dans les trois pays, la colonisation a dépossédé les peuples autochtones de leurs terres et menacé leurs langues. Au Canada, environ 150 000 enfants des Premières Nations, inuit et métis ont été placés dans des pensionnats (residential schools), où leur langue était interdite ; le dernier a fermé en 1996. En Australie, des milliers d'enfants aborigènes ont été retirés à leur famille pendant une grande partie du XXe siècle : ce sont les Stolen Generations. En 2008, les deux gouvernements présentent des excuses officielles devant leur Parlement : Kevin Rudd en Australie le 13 février, Stephen Harper au Canada le 11 juin.",
                "Le chemin vers la réconciliation reste ouvert. En Australie, l'arrêt Mabo de la Haute Cour (1992) rejette la doctrine de la terra nullius et reconnaît des droits fonciers autochtones ; mais en 2023, un référendum visant à créer une instance consultative autochtone, The Voice, est rejeté. Au Canada, le territoire inuit du Nunavut est créé en 1999, la Commission de vérité et réconciliation publie son rapport en 2015, et le 30 septembre est, depuis 2021, la Journée nationale de la vérité et de la réconciliation.",
                "Pour rapporter des excuses et exprimer le regret : apologise for + nom ou V-ing (The government apologised for taking children away from their families) ; should have + participe passé, pour un reproche sur le passé (They should have respected Indigenous cultures) ; shouldn't have + participe passé (They shouldn't have banned Indigenous languages) ; I wish + past perfect, pour un regret (Many people wish it had never happened). Vocabulaire : Indigenous peoples, First Nations, to dispossess, land rights, to acknowledge (reconnaître), reconciliation.",
              ],
              box: { label: "Règle", text: "Apologise for + nom ou V-ing : they apologised for removing children. Reproche sur le passé : should have / shouldn't have + participe passé. Regret : I wish + past perfect (I wish it had never happened). Indigenous prend une majuscule quand il désigne les peuples autochtones." },
            },
          ],
          keyPoints: [
            "Canada : Confédération le 1er juillet 1867 ; bilingue (1969) ; multiculturalisme (1971) ; référendums au Québec (1980, 1995).",
            "Australie : présence aborigène depuis au moins 50 000 ans ; First Fleet (1788) ; fédération (1901) ; Australia Day contesté.",
            "Nouvelle-Zélande : traité de Waitangi (6 février 1840) ; vote des femmes (1893) ; te reo māori langue officielle (1987).",
            "Pensionnats au Canada, Stolen Generations en Australie ; excuses officielles en 2008 (Kevin Rudd, Stephen Harper).",
            "Mabo (1992) rejette la terra nullius ; Nunavut (1999) ; référendum sur The Voice rejeté (2023).",
            "Apologise for + V-ing ; should have + participe passé ; I wish + past perfect.",
          ],
          example: {
            statement: "Expliquez en anglais, en trois phrases, ce qui s'est passé le 13 février 2008 en Australie et ce que reconnaissent ces excuses, en employant apologise for + V-ing et shouldn't have + participe passé.",
            solution: [
              "Situer l'événement au prétérit : qui (le Premier ministre Kevin Rudd), quand (le 13 février 2008), où (au Parlement australien).",
              "Rapporter l'objet des excuses avec apologise for + V-ing : après la préposition for, le verbe prend la forme -ing.",
              "Formuler le jugement porté aujourd'hui sur le passé avec shouldn't have + participe passé.",
              "Réponse : « On 13 February 2008, Prime Minister Kevin Rudd made a formal apology to Aboriginal and Torres Strait Islander peoples in the Australian Parliament. On behalf of the nation, the government apologised for taking thousands of children away from their families, the Stolen Generations. This apology acknowledged that the authorities shouldn't have separated these families. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites à quel pays (Canada, Australia ou New Zealand) se rattache chaque élément, puis expliquez-le en anglais en une phrase : 1) the Treaty of Waitangi 2) residential schools 3) the Stolen Generations 4) Nunavut 5) the haka 6) the Mabo decision.",
              hint: "Relisez les repères du cours : un traité de 1840, des pensionnats, des enfants retirés à leur famille, un territoire inuit, une danse rituelle, un arrêt de 1992.",
              solution: [
                "1) New Zealand : the Treaty of Waitangi was signed in 1840 by the British Crown and Māori chiefs.",
                "2) Canada : residential schools were boarding schools where Indigenous children were forbidden to speak their language.",
                "3) Australia : the Stolen Generations were Aboriginal children who were taken away from their families.",
                "4) Canada : Nunavut is an Inuit territory which was created in 1999.",
                "5) New Zealand : the haka is a Māori ritual dance, performed by the All Blacks before their rugby matches. 6) Australia : the Mabo decision (1992) rejected the idea of terra nullius.",
                "Résultat : New Zealand (1, 5), Canada (2, 4), Australia (3, 6).",
              ],
            },
            {
              level: 2,
              statement: "Transformez chaque phrase selon la consigne : 1) The authorities banned Indigenous languages in schools. (reproche : shouldn't have) 2) The colonists ignored Aboriginal land rights. (reproche : shouldn't have) 3) The government took children away from their families. (The government apologised...) 4) Nobody listened to the Māori chiefs. (Many people wish...) 5) The Crown did not respect the Māori version of the treaty. (reproche : should have)",
              hint: "Should have et shouldn't have sont suivis du participe passé ; apologise for est suivi d'un V-ing ; wish exprime le regret d'un fait passé avec le past perfect (had + participe passé).",
              solution: [
                "1) The authorities shouldn't have banned Indigenous languages in schools.",
                "2) The colonists shouldn't have ignored Aboriginal land rights.",
                "3) The government apologised for taking children away from their families.",
                "4) Many people wish somebody had listened to the Māori chiefs : le fait passé « nobody listened » devient un regret au past perfect.",
                "5) The Crown should have respected the Māori version of the treaty : un fait négatif au passé devient un reproche à la forme affirmative.",
                "Résultat : shouldn't have banned, shouldn't have ignored, apologised for taking, wish somebody had listened, should have respected.",
              ],
            },
            {
              level: 3,
              statement: "Compréhension de l'écrit et expression. Lisez ce témoignage écrit pour l'exercice (personnage fictif), puis répondez en anglais : « My name is Emily and I live in Winnipeg, in Canada. Every year on 30 September, I wear an orange shirt to school. My grandmother, who is Cree, was sent to a residential school when she was seven. She was not allowed to speak her language, and she only saw her parents in the summer. For years, she never talked about it. Then, in 2008, she watched the Prime Minister's apology on television, and she cried. “It came too late,” she told me, “but at least somebody said it.” Today, she is teaching me a few words of Cree. » Questions : 1) Where does Emily live? 2) Why does she wear an orange shirt on 30 September? 3) Give two facts showing that the residential school was hard for her grandmother. 4) How did the grandmother react to the apology, and what did she mean? 5) In about 50 words, say whether you think official apologies are useful.",
              hint: "Pour la question 2, servez-vous du cours : le 30 septembre est la Journée nationale de la vérité et de la réconciliation. Pour la question 4, expliquez les deux idées de la grand-mère : le retard et la reconnaissance.",
              solution: [
                "1) She lives in Winnipeg, in Canada.",
                "2) Because 30 September is the National Day for Truth and Reconciliation: wearing an orange shirt honours the children who were sent to residential schools, like her grandmother.",
                "3) She was not allowed to speak her language, and she only saw her parents in the summer (she was also very young, only seven).",
                "4) She cried. She meant that the apology could not change the past, because it came too late, but that it was important for the government to acknowledge what had happened.",
                "5) Exemple : « I think official apologies are useful, although they cannot repair the past. They show that a country acknowledges its mistakes, and they help victims to be heard. However, words are not enough: governments should also protect Indigenous languages and land rights. » (environ 50 mots)",
                "Résultat : des réponses justifiées par le texte, puis un avis nuancé (although, however) qui rappelle que les excuses doivent s'accompagner d'actes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Māori settle in Aotearoa (New Zealand).",
              "The First Fleet arrives at Sydney Cove.",
              "The Treaty of Waitangi is signed.",
              "Canada is created by Confederation.",
              "New Zealand women win the right to vote.",
              "Six Australian colonies form a federation.",
              "Australia and Canada make official apologies to Indigenous peoples.",
            ],
          },
          quiz: [
            { q: "When was the Treaty of Waitangi signed?", options: ["In 1788", "In 1867", "In 1901", "In 1840"], answer: 3, why: "Le traité de Waitangi est signé le 6 février 1840 entre la Couronne britannique et des chefs māori." },
            { q: "« The government apologised for ___ children from their families. »", options: ["remove", "to remove", "removing", "removed"], answer: 2, why: "Après la préposition for, le verbe prend la forme -ing : apologise for removing." },
            { q: "Which two languages are official in Canada?", options: ["English and French", "English and Inuktitut", "French and Cree", "English and Spanish"], answer: 0, why: "Depuis la loi de 1969, l'anglais et le français sont les deux langues officielles du Canada." },
            { q: "Who were the « Stolen Generations »?", options: ["Convicts sent to Australia in 1788", "Settlers whose farms were destroyed", "Young soldiers who died at Gallipoli", "Aboriginal children taken from home"], answer: 3, why: "Ce sont les enfants aborigènes retirés à leur famille par les autorités pendant une grande partie du XXe siècle." },
            { q: "« They ___ Indigenous languages. » (un reproche sur le passé)", options: ["shouldn't ban", "shouldn't have banned", "should not to have banned", "shouldn't had banned"], answer: 1, why: "Un reproche sur le passé se construit avec shouldn't have suivi du participe passé." },
          ],
          trap: "Écrire « apologise for remove » ou « apologise to remove » : après for, le verbe est toujours en -ing. Autre erreur : dire que les Européens ont « découvert » l'Australie ou la Nouvelle-Zélande, alors que les Aborigènes et les Māori y vivaient depuis des siècles, voire des dizaines de millénaires.",
          method: "Comparez les trois pays dans un tableau en anglais à quatre colonnes, foundation, Indigenous peoples, languages, reconciliation : en révision, une ligne par pays suffit à retrouver les dates et les mots clés, que vous réemploierez à l'oral.",
        },
      ],
    },
  ],
}
