import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-5e',
  chapters: [
    {
      id: 'portrait-autoportrait',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'se-presenter',
          title: 'Se présenter : « be » et « have got »',
          minutes: 30,
          objectives: [
            "Conjuguer le verbe be au présent aux formes affirmative, négative et interrogative.",
            "Employer have got pour parler de sa famille, de ses animaux et de ce que l'on possède.",
            "Se présenter à l'oral et à l'écrit : nom, âge, origine, famille, animaux.",
            "Éviter les calques du français : « I'm 12 », et non « I have 12 years ».",
          ],
          course: [
            {
              heading: "Le verbe be : être",
              paragraphs: [
                "Le verbe be (être) est le verbe le plus utilisé de l'anglais. Au présent, il a trois formes : am avec I, is avec he, she et it, are avec you, we et they. À l'oral et dans les messages, on le contracte presque toujours : I'm, you're, he's, she's, it's, we're, they're.",
                "On l'utilise pour dire son nom (I'm Léa, my name's Léa), son origine (I'm from Lyon, I'm French), son caractère ou son humeur (I'm happy, she's tired). On l'utilise aussi pour l'âge : « I'm twelve » ou « I'm twelve years old ». En anglais, on est son âge, on ne l'a pas.",
                "Plusieurs expressions françaises avec « avoir » se disent avec be en anglais : I'm hungry (j'ai faim), I'm thirsty (j'ai soif), I'm cold (j'ai froid), I'm hot (j'ai chaud), I'm scared of spiders (j'ai peur des araignées). Retenez-les comme des blocs.",
              ],
              box: { label: "Formule", text: "I am (I'm) ; you are (you're) ; he / she / it is (he's, she's, it's) ; we are (we're) ; they are (they're). Âge, faim, soif, froid, chaud, peur : be. I'm 12. I'm hungry." },
            },
            {
              heading: "Be à la forme négative et interrogative",
              paragraphs: [
                "À la forme négative, on ajoute not après be : I'm not, he isn't (is not), we aren't (are not). Exemple : « I'm not from Paris, I'm from Marseille. » « My brother isn't tall. »",
                "Pour poser une question, on inverse be et le sujet : « Are you French? » « Is she your sister? » La réponse courte reprend be, sans contraction quand elle est positive : « Yes, I am. » (et non « Yes, I'm »), « No, I'm not. », « Yes, she is. », « No, she isn't. »",
                "Les questions les plus utiles pour faire connaissance commencent par un mot interrogatif : What's your name? (Comment vous appelez-vous ?), How old are you? (Quel âge avez-vous ?), Where are you from? (D'où venez-vous ?). Notez bien : on demande l'âge avec How old, mot à mot « à quel point vieux ».",
              ],
              box: { label: "À retenir", text: "Are you English? Yes, I am. / No, I'm not. Is he 13? Yes, he is. / No, he isn't. How old are you? I'm 12." },
            },
            {
              heading: "Have got : avoir, posséder",
              paragraphs: [
                "Have got signifie « avoir » au sens de posséder. On l'emploie pour la famille (I've got two brothers), les animaux (She's got a cat), les objets (We've got a car) et l'apparence (He's got blue eyes). La forme est have got avec I, you, we, they et has got avec he, she, it. Contractions : I've got, she's got.",
                "À la forme négative : I haven't got a dog, he hasn't got a sister. À la forme interrogative, on inverse have et le sujet, et got reste à sa place : « Have you got a pet? » « Has she got a phone? » Réponses courtes : « Yes, I have. », « No, I haven't. », « Yes, she has. », « No, she hasn't. » On ne répète pas got dans la réponse courte.",
                "Have got est surtout britannique. Les Américains disent plutôt « I have a dog » et « Do you have a pet? ». Les deux sont corrects ; à votre niveau, choisissez une forme et restez-y dans le même texte.",
              ],
              box: { label: "Formule", text: "I / you / we / they have got ('ve got) ; he / she / it has got ('s got). Négation : haven't got, hasn't got. Question : Have you got...? Has he got...? Yes, I have. / No, he hasn't." },
            },
            {
              heading: "Be ou have got ? Le piège du 's",
              paragraphs: [
                "La contraction 's peut cacher deux verbes. Dans « He's tall », 's = is (il est grand). Dans « He's got a bike », 's = has (il a un vélo) : got vous le signale. Pour ne pas vous tromper, regardez le mot qui suit : got indique have got ; un adjectif, un âge ou une origine indiquent be.",
                "Une présentation complète enchaîne les deux verbes : « Hi! I'm Noah. I'm twelve and I'm from Bordeaux. I've got a sister, Emma, and a dog called Biscuit. I haven't got a brother. » Le nom, l'âge, l'origine : be. La famille et l'animal : have got.",
              ],
            },
          ],
          keyPoints: [
            "Be au présent : I am, he / she / it is, you / we / they are ; contractions I'm, he's, they're.",
            "L'âge, la faim, la soif, le froid et la peur se disent avec be : I'm 12, I'm hungry, I'm cold.",
            "Questions avec be : on inverse (Are you French?) ; réponse courte : Yes, I am (sans contraction).",
            "Have got / has got = posséder : famille, animaux, objets, apparence.",
            "Question avec have got : Have you got a pet? Yes, I have. / No, I haven't.",
            "'s = is devant un adjectif (he's tall) ; 's = has devant got (he's got a bike).",
          ],
          example: {
            statement: "Voici la fiche d'un élève irlandais (personnage inventé) : Name: Liam Walsh. Age: 12. From: Dublin, Ireland. Family: two sisters, no brother. Pet: a rabbit. Rédigez sa présentation en anglais, à la première personne, en quatre phrases.",
            solution: [
              "Le nom, l'âge et l'origine se disent avec be : « My name's Liam Walsh. I'm twelve and I'm from Dublin, in Ireland. »",
              "La famille se dit avec have got, à la première personne : I've got. « I've got two sisters. »",
              "L'absence de frère se dit à la forme négative : « I haven't got a brother. »",
              "L'animal se dit aussi avec have got : « I've got a rabbit. »",
              "Réponse : « My name's Liam Walsh. I'm twelve and I'm from Dublin, in Ireland. I've got two sisters, but I haven't got a brother. I've got a rabbit. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la bonne forme de be (am, is, are) ou de have got (have got, has got). a) My name ___ Chloe. b) I ___ twelve. c) My brother ___ a new bike. d) We ___ from Nantes. e) My parents ___ two cats. f) ___ you French?",
              hint: "Demandez-vous si la phrase parle d'un état (nom, âge, origine : be) ou d'une possession (have got), puis regardez le sujet.",
              solution: [
                "a) My name is Chloe. (le nom : be ; my name = it, donc is)",
                "b) I am twelve. (l'âge : be)",
                "c) My brother has got a new bike. (possession ; my brother = he, donc has got)",
                "d) We are from Nantes. (l'origine : be)",
                "e) My parents have got two cats. (possession ; my parents = they, donc have got)",
                "f) Are you French? (la nationalité : be, avec inversion pour la question)",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en anglais. a) J'ai 13 ans. b) Ma sœur a peur des chiens. c) Avez-vous un animal ? Non. d) Nous avons faim. e) Il n'a pas de frère.",
              hint: "Attention aux phrases où le français dit « avoir » et l'anglais dit be : l'âge, la peur, la faim. Pour la réponse courte, reprenez l'auxiliaire.",
              solution: [
                "a) L'âge se dit avec be : « I'm thirteen. » (ou « I'm thirteen years old »).",
                "b) La peur se dit avec be : « My sister is scared of dogs. » (ou « afraid of dogs »).",
                "c) Il s'agit de posséder : « Have you got a pet? No, I haven't. »",
                "d) La faim se dit avec be : « We're hungry. »",
                "e) Possession à la forme négative, avec has car he : « He hasn't got a brother. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le texte suivant contient six erreurs. Recopiez-le corrigé, puis ajoutez deux phrases sur vous (une avec be, une avec have got). « Hello! My name are Sam. I have 12 years. I'm from Leeds, in England. I has got a sister. She have got long hair. We are a dog. It's called Rex. Are you got a pet? »",
              hint: "Vérifiez chaque verbe : le sujet est-il I, he, she, we ? Le sens est-il un état (be) ou une possession (have got) ?",
              solution: [
                "1) « My name are Sam » : my name = it, donc « My name is Sam ».",
                "2) « I have 12 years » : l'âge se dit avec be, donc « I'm 12 ».",
                "3) « I has got » : avec I, on dit have, donc « I've got a sister ».",
                "4) « She have got » : avec she, on dit has, donc « She has got long hair ».",
                "5) « We are a dog » : on possède un chien, donc « We've got a dog ».",
                "6) « Are you got a pet? » : la question de have got commence par have, donc « Have you got a pet? ».",
                "Texte corrigé : « Hello! My name is Sam. I'm 12. I'm from Leeds, in England. I've got a sister. She has got long hair. We've got a dog. It's called Rex. Have you got a pet? »",
                "Deux phrases possibles sur vous : « I'm from Toulouse. I've got a brother and a hamster. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos réflexes avec be et have got.",
            statements: [
              { text: "« I have 12 years » is correct English.", true: false, why: "L'âge se dit avec be : I'm 12 ou I'm 12 years old." },
              { text: "« He's got a sister » means « Il a une sœur ».", true: true, why: "Devant got, 's = has : he has got a sister." },
              { text: "In « She's tall », 's means has.", true: false, why: "Devant un adjectif, 's = is : she is tall." },
              { text: "The short answer is « Yes, I am », not « Yes, I'm ».", true: true, why: "La réponse courte positive ne se contracte jamais." },
              { text: "« I'm hungry » means « J'ai faim ».", true: true, why: "La faim se dit avec be, comme la soif, le froid ou la peur." },
              { text: "« Has she got a dog? » « Yes, she's got. » is a correct exchange.", true: false, why: "La réponse courte reprend has sans got : Yes, she has." },
              { text: "« Where are you from? » asks where you come from.", true: true, why: "C'est la question de l'origine ; on répond I'm from..." },
            ],
          },
          quiz: [
            { q: "Complete: My sister ___ eleven.", options: ["has", "is", "have", "are"], answer: 1, why: "L'âge se dit avec be ; avec my sister (she), on emploie is." },
            { q: "Choose the correct question.", options: ["How many years have you?", "How old have you got?", "How years are you?", "How old are you?"], answer: 3, why: "On demande l'âge avec How old et le verbe be : How old are you?" },
            { q: "Complete: ___ you got a brother?", options: ["Have", "Are", "Has", "Does"], answer: 0, why: "La question de have got commence par have ; avec you, c'est Have you got...?" },
            { q: "« Ils ont froid » in English is...", options: ["They have cold.", "They've got cold.", "They're cold.", "They are colds."], answer: 2, why: "Le froid se dit avec be, et l'adjectif cold ne prend jamais de -s." },
            { q: "In « Tom's got a bike », 's means...", options: ["is", "has", "his"], answer: 1, why: "Devant got, 's est la contraction de has : Tom has got a bike." },
          ],
          trap: "Calquer le français avec have : « I have 12 years », « I have hungry ». En anglais, l'âge, la faim, la soif, le froid et la peur s'expriment avec be : I'm 12, I'm hungry, I'm cold.",
          method: "Rédigez votre carte d'identité en anglais (name, age, from, family, pets), puis transformez chaque ligne en phrase complète à voix haute en vous demandant chaque fois : est-ce un état (be) ou une possession (have got) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'decrire-quelquun',
          title: 'Décrire le physique et le caractère',
          minutes: 30,
          objectives: [
            "Décrire l'apparence physique d'une personne avec be et have got.",
            "Décrire le caractère d'une personne avec des adjectifs variés, nuancés par very, quite ou a bit.",
            "Placer correctement l'adjectif anglais, invariable et devant le nom.",
            "Distinguer les questions « What does he look like? » et « What is he like? ».",
          ],
          course: [
            {
              heading: "L'adjectif anglais : invariable et devant le nom",
              paragraphs: [
                "En anglais, l'adjectif ne s'accorde jamais : il ne prend ni -s au pluriel, ni marque du féminin. On dit a tall boy, a tall girl, two tall boys. Écrire « talls » est toujours une erreur.",
                "L'adjectif se place devant le nom, à l'inverse du français : a black cat (un chat noir), a funny story (une histoire drôle). Après be, il se place comme en français : « The cat is black. »",
                "Quand il y a plusieurs adjectifs, la taille ou la longueur vient avant la couleur : a big black dog (un gros chien noir), long brown hair (des cheveux longs et bruns). On ne met pas « and » entre deux adjectifs placés devant le nom.",
              ],
              box: { label: "Règle", text: "Adjectif invariable et placé devant le nom : a tall boy, two tall boys. Taille avant couleur : long brown hair, a big black dog." },
            },
            {
              heading: "Le physique : be et have got",
              paragraphs: [
                "Pour la taille et la silhouette, on utilise be : She's tall (grande), he's short (petit), she's of average height (de taille moyenne), he's slim (mince), she's strong (costaud). Pour l'âge : he's young, she's old, ou mieux, l'âge précis.",
                "Pour les cheveux, les yeux et les détails, on utilise have got : « She's got long curly hair. » (cheveux longs et bouclés), « He's got short straight hair. » (cheveux courts et raides), « I've got green eyes. », « He's got a beard. » (une barbe), « She's got freckles. » (des taches de rousseur). Pour les lunettes : « He wears glasses. »",
                "Attention : hair (les cheveux) est indénombrable et toujours singulier. On dit « Her hair is long » et jamais « hairs ». Les couleurs utiles : blond ou fair (blond), brown (brun, châtain), black (noir), red (roux), grey (gris). Eyes, en revanche, est bien un pluriel : blue eyes.",
              ],
              box: { label: "À retenir", text: "Taille et silhouette : be (He's tall and slim). Cheveux, yeux, barbe : have got (She's got long red hair and blue eyes). Hair est singulier : her hair is long." },
            },
            {
              heading: "Le caractère et les nuances",
              paragraphs: [
                "Pour le caractère, on utilise be et un adjectif. Apprenez-les par paires de contraires : kind (gentil) et unkind, friendly (sympathique) et unfriendly, funny (drôle) et serious (sérieux), shy (timide) et chatty (bavard), hard-working (travailleur) et lazy (paresseux), generous (généreux) et selfish (égoïste), polite (poli) et rude (impoli). Ajoutez-y brave (courageux) et clever (intelligent).",
                "On nuance avec un adverbe placé devant l'adjectif : very (très), really (vraiment), quite (assez), a bit (un peu). A bit s'emploie surtout pour les défauts : « He's a bit lazy. » Pour être convaincant, justifiez par un fait : « She's generous: she always shares her sweets. »",
              ],
            },
            {
              heading: "Deux questions à ne pas confondre",
              paragraphs: [
                "« What does he look like? » demande le physique (à quoi ressemble-t-il ?) : on répond « He's tall and he's got short black hair. » « What is he like? » demande le caractère (comment est-il ?) : on répond « He's friendly and very funny. » Le mot like est ici une préposition qui signifie « comme », pas le verbe « aimer ».",
                "Pour rédiger un portrait, suivez un ordre simple : présentez la personne (nom, âge, lien avec vous), décrivez son physique, puis son caractère, et terminez par un exemple concret. Reliez vos idées avec and, but et because pour éviter une simple liste.",
              ],
              box: { label: "À retenir", text: "What does she look like? → le physique. What is she like? → le caractère. Ordre d'un portrait : qui, physique, caractère, exemple." },
            },
          ],
          keyPoints: [
            "L'adjectif est invariable et se place devant le nom : two tall boys.",
            "Taille et silhouette avec be (she's tall) ; cheveux, yeux, barbe avec have got (he's got blue eyes).",
            "Hair est indénombrable : long hair, jamais « long hairs ».",
            "Taille ou longueur avant la couleur : long brown hair.",
            "Nuances : very, really, quite, a bit (a bit pour un défaut).",
            "What does he look like? = physique ; What is he like? = caractère.",
          ],
          example: {
            statement: "Décrivez en anglais ce personnage inventé, en trois phrases, physique puis caractère : Lucy, 13 ans, grande et mince, cheveux roux, longs et bouclés, yeux verts, lunettes ; elle est drôle mais un peu timide.",
            solution: [
              "Présenter et donner l'âge avec be : « Lucy is thirteen. »",
              "Taille et silhouette avec be : « She's tall and slim. »",
              "Cheveux et yeux avec have got, longueur puis forme puis couleur, hair au singulier : « She's got long curly red hair and green eyes, and she wears glasses. »",
              "Caractère avec be et une nuance pour le défaut : « She's funny but a bit shy. »",
              "Réponse : « Lucy is thirteen. She's tall and slim. She's got long curly red hair and green eyes, and she wears glasses. She's funny but a bit shy. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettez les mots dans l'ordre pour former des phrases correctes. a) hair / has / she / got / long / blond. b) a / boy / he / is / tall / very. c) eyes / blue / got / I've. d) dog / big / a / black / they've / got.",
              hint: "Sujet, puis verbe (is ou has got), puis les adjectifs devant le nom, la taille avant la couleur.",
              solution: [
                "a) She has got long blond hair.",
                "b) He is a very tall boy. (very se place devant l'adjectif)",
                "c) I've got blue eyes.",
                "d) They've got a big black dog. (la taille avant la couleur)",
              ],
            },
            {
              level: 2,
              statement: "Complétez chaque phrase avec le contraire de l'adjectif, choisi dans la liste : short, lazy, generous, shy, rude. a) Tom isn't tall, he's ___. b) My sister isn't hard-working, she's ___. c) Our neighbour isn't selfish, he's ___. d) Emma isn't chatty in class, she's ___. e) That boy isn't polite, he's ___.",
              hint: "Relisez les paires de contraires du cours : tall et short, hard-working et lazy...",
              solution: [
                "a) Tom isn't tall, he's short.",
                "b) My sister isn't hard-working, she's lazy.",
                "c) Our neighbour isn't selfish, he's generous.",
                "d) Emma isn't chatty in class, she's shy.",
                "e) That boy isn't polite, he's rude.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Votre correspondant anglais vous écrit : « What does your best friend look like? What is he or she like? » Répondez en 60 à 80 mots, avec au moins trois éléments de physique, trois traits de caractère, une nuance (very, quite ou a bit) et une justification avec because.",
              hint: "Suivez l'ordre du cours : présentation, physique (be puis have got), caractère, exemple. Vérifiez qu'aucun adjectif ne porte de -s.",
              solution: [
                "Organiser : une phrase de présentation, deux phrases de physique, deux phrases de caractère avec une justification.",
                "Exemple de production : « My best friend is called Inès. She's twelve and she's in my class. She's quite short and slim. She's got long straight black hair and brown eyes, and she wears glasses. She's very friendly and funny, but she's a bit chatty in class. She's also generous because she always helps me with my maths homework. I really like her! »",
                "Vérifier : physique (short, slim, long straight black hair, brown eyes, glasses), caractère (friendly, funny, chatty, generous), nuances (quite, very, a bit), justification avec because.",
                "Résultat : un portrait d'environ 65 mots qui répond aux deux questions.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque adjectif de caractère à sa traduction.",
            pairs: [
              { left: "shy", right: "timide" },
              { left: "kind", right: "gentil" },
              { left: "lazy", right: "paresseux" },
              { left: "hard-working", right: "travailleur" },
              { left: "funny", right: "drôle" },
              { left: "selfish", right: "égoïste" },
            ],
          },
          quiz: [
            { q: "« Elle a les cheveux longs » in English is...", options: ["She's got long hairs.", "She is long hair.", "She's got long hair.", "She's got hair long."], answer: 2, why: "Hair est indénombrable (pas de -s) et l'adjectif se place devant le nom." },
            { q: "What is he like? He's...", options: ["kind", "tall", "blond"], answer: 0, why: "What is he like? demande le caractère : kind est un trait de caractère, tall et blond décrivent le physique." },
            { q: "Choose the correct sentence.", options: ["They are talls boys.", "They are boys talls.", "They are boys tall.", "They are tall boys."], answer: 3, why: "L'adjectif reste invariable et se place devant le nom." },
            { q: "Which question asks about physical appearance?", options: ["What is she like?", "What does she look like?", "What does she like doing?", "How is she today?"], answer: 1, why: "Look like porte sur l'apparence ; What is she like? porte sur le caractère." },
            { q: "Complete: He's ___ lazy: he never helps at home.", options: ["a bit", "a lot", "much"], answer: 0, why: "A bit (un peu) se place devant un adjectif, surtout pour un défaut." },
          ],
          trap: "Écrire « hairs » pour les cheveux ou accorder l'adjectif (« talls boys ») : en anglais, hair est indénombrable et singulier, et l'adjectif ne prend jamais de -s.",
          method: "Apprenez les adjectifs de caractère par paires de contraires (kind et unkind, lazy et hard-working, shy et chatty) et associez chacun à une personne que vous connaissez : un mot se retient mieux quand il évoque un visage.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'famille-genitif',
          title: 'Présenter sa famille : le génitif « \'s »',
          minutes: 30,
          objectives: [
            "Nommer les membres de sa famille en anglais.",
            "Exprimer l'appartenance avec le génitif « 's » (Tom's sister, my parents' car).",
            "Choisir le bon adjectif possessif (his, her, its, their) selon le possesseur.",
            "Présenter sa famille à l'oral ou à l'écrit.",
          ],
          course: [
            {
              heading: "Le vocabulaire de la famille",
              paragraphs: [
                "Les proches : mother (mum) et father (dad), qui forment les parents ; brother et sister ; son (fils) et daughter (fille) ; grandmother (grandma, granny) et grandfather (grandpa, grandad), qui forment les grandparents ; uncle (oncle) et aunt (tante) ; cousin, le même mot pour un garçon ou une fille ; nephew (neveu) et niece (nièce).",
                "Pour les familles recomposées : stepmother (belle-mère, la femme du père) et stepfather (beau-père), half-brother et half-sister (demi-frère, demi-sœur). Autres mots utiles : husband (mari), wife (épouse), twins (des jumeaux), an only child (un enfant unique).",
                "Attention au faux ami : en anglais, parents désigne seulement le père et la mère. Pour parler de toute la famille au sens large (oncles, cousins, grands-parents), on dit relatives.",
              ],
              box: { label: "Attention", text: "Parents = le père et la mère uniquement. La famille élargie = relatives. Cousin est le même mot au masculin et au féminin." },
            },
            {
              heading: "Le génitif 's : la sœur de Tom = Tom's sister",
              paragraphs: [
                "Pour dire « la sœur de Tom », l'anglais met d'abord le possesseur, puis 's, puis ce qui est possédé : Tom's sister. L'ordre est donc inversé par rapport au français. Autres exemples : my mother's car (la voiture de ma mère), Emma's dog (le chien d'Emma), my uncle's house (la maison de mon oncle).",
                "On ne met pas d'article devant le nom possédé : on dit Tom's sister, et non « the Tom's sister » ni « the sister of Tom ». Le génitif s'emploie surtout quand le possesseur est une personne ou un animal. Pour un objet, on dit plutôt the door of the house (la porte de la maison).",
                "Pour demander à qui appartient quelque chose, on utilise Whose : « Whose bag is this? It's Lily's. » (À qui est ce sac ? C'est celui de Lily.) Le génitif peut s'employer seul quand le nom possédé est évident.",
              ],
              box: { label: "Règle", text: "Possesseur + 's + nom possédé, sans article : Tom's sister (la sœur de Tom), my dad's car (la voiture de mon père). Whose is it? It's Tom's." },
            },
            {
              heading: "Les cas particuliers du génitif",
              paragraphs: [
                "Quand le possesseur est un pluriel en -s, on ajoute seulement l'apostrophe : my parents' house (la maison de mes parents), the girls' bedroom (la chambre des filles). La prononciation ne change pas. Comparez : my sister's room (la chambre de ma sœur, une seule) et my sisters' room (la chambre de mes sœurs, plusieurs).",
                "Quand le pluriel est irrégulier, sans -s, on ajoute 's : the children's toys (les jouets des enfants), the women's team (l'équipe des femmes). Pour un prénom qui se termine par s, les deux écritures existent : James's dog ou James' dog.",
                "Ne confondez pas le génitif avec la contraction de is ou de has : « Tom's tall » (Tom is tall), « Tom's got a dog » (Tom has got a dog), « Tom's dog » (le chien de Tom). C'est le mot qui suit qui vous permet de trancher : un nom après 's indique le génitif.",
              ],
            },
            {
              heading: "Les adjectifs possessifs",
              paragraphs: [
                "Les adjectifs possessifs sont : my (mon, ma, mes), your (ton, votre, vos), his (son, sa, ses, pour un possesseur masculin), her (pour un possesseur féminin), its (pour une chose ou un animal), our (notre, nos), their (leur, leurs). Ils ne s'accordent jamais avec l'objet possédé.",
                "C'est la grande différence avec le français. En français, « sa mère » s'accorde avec mère. En anglais, on regarde le possesseur : « Tom and his mother », « Emma and her mother ». Si le possesseur est un garçon, his ; une fille, her ; plusieurs personnes, their : « My grandparents love their garden. »",
              ],
              box: { label: "À retenir", text: "On choisit his ou her selon le possesseur, jamais selon l'objet : Paul and his sister ; Julie and her brother ; the children and their dog." },
            },
          ],
          keyPoints: [
            "Parents = père et mère ; la famille élargie = relatives.",
            "Génitif : possesseur + 's + nom, sans article : Tom's sister.",
            "Pluriel en -s : seulement l'apostrophe (my parents' house) ; pluriel irrégulier : 's (the children's toys).",
            "Whose...? demande le possesseur : Whose bag is it? It's Lily's.",
            "His ou her dépend du possesseur : Emma and her father, Tom and his mother.",
            "Un nom après 's indique le génitif ; un adjectif indique is, got indique has.",
          ],
          example: {
            statement: "Voici une famille inventée : Peter et Helen sont les parents de Kate et de Ben. Kate a une fille, Lily. Rédigez trois phrases avec le génitif pour présenter les liens de Lily avec les autres membres de la famille.",
            solution: [
              "Repérer les liens : Kate est la mère de Lily, Ben est le frère de Kate, donc l'oncle de Lily ; Peter et Helen sont les parents de Kate, donc les grands-parents de Lily.",
              "Phrase 1, possesseur Kate : « Lily is Kate's daughter. »",
              "Phrase 2, possesseur Lily : « Ben is Lily's uncle. » (on peut aussi dire « Lily is Ben's niece »)",
              "Phrase 3, avec deux personnes : « Peter and Helen are Lily's grandparents. »",
              "Réponse : « Lily is Kate's daughter. Ben is Lily's uncle. Peter and Helen are Lily's grandparents. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez avec le génitif. a) le vélo de Max. b) la chambre de mes sœurs (j'ai deux sœurs). c) les jouets des enfants. d) la voiture de mon oncle. e) le chien de James.",
              hint: "Mettez d'abord le possesseur. Pluriel en -s : apostrophe seule ; pluriel irrégulier ou singulier : 's.",
              solution: [
                "a) Max's bike.",
                "b) My sisters' bedroom. (pluriel en -s : apostrophe seule)",
                "c) The children's toys. (children est un pluriel irrégulier : 's)",
                "d) My uncle's car.",
                "e) James's dog (ou James' dog).",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec his, her, its ou their. a) Sophie loves ___ grandmother. b) Mr Brown washes ___ car every Sunday. c) The children are in ___ bedroom. d) The cat is in ___ basket. e) Paul and ___ sister are twins. f) My grandparents live in Bath. ___ house is old.",
              hint: "Regardez uniquement le possesseur : un garçon ou un homme (his), une fille ou une femme (her), un animal ou une chose (its), plusieurs (their).",
              solution: [
                "a) Sophie loves her grandmother. (possesseur féminin)",
                "b) Mr Brown washes his car every Sunday. (possesseur masculin)",
                "c) The children are in their bedroom. (plusieurs possesseurs)",
                "d) The cat is in its basket. (un animal)",
                "e) Paul and his sister are twins. (possesseur masculin, même si sister est féminin)",
                "f) My grandparents live in Bath. Their house is old.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez la présentation de cette famille inventée, puis répondez en anglais par des phrases complètes avec le génitif. « Anna is Mark's wife. They've got two children, Jack and Ruby. Ruby's husband is Tom. Ruby and Tom have got a son, Leo. » a) Who is Leo's grandmother? b) What is Jack to Leo? c) Whose wife is Ruby? d) What is Leo to Jack? e) What is Anna to Ruby?",
              hint: "Dessinez l'arbre : Mark et Anna en haut, leurs enfants Jack et Ruby en dessous, puis Leo sous Ruby et Tom.",
              solution: [
                "Construire l'arbre : Mark + Anna → Jack et Ruby ; Ruby + Tom → Leo.",
                "a) Anna est la mère de Ruby, donc la grand-mère de Leo : « Anna is Leo's grandmother. »",
                "b) Jack est le frère de Ruby, la mère de Leo : « Jack is Leo's uncle. »",
                "c) « Ruby is Tom's wife. »",
                "d) Leo est le fils de la sœur de Jack : « Leo is Jack's nephew. »",
                "e) « Anna is Ruby's mother. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les mots dans l'ordre pour former une phrase correcte.",
            items: ["My", "grandparents'", "house", "has", "got", "a", "garden."],
          },
          quiz: [
            { q: "« La chambre de ma sœur » in English is...", options: ["the bedroom of my sister's", "my sister bedroom", "the sister's my bedroom", "my sister's bedroom"], answer: 3, why: "Le possesseur vient d'abord, suivi de 's, puis le nom possédé, sans article." },
            { q: "Your mother's brother is your...", options: ["cousin", "uncle", "nephew", "grandfather"], answer: 1, why: "Le frère de votre mère (ou de votre père) est votre oncle, uncle." },
            { q: "« La maison de mes parents » (two parents) is...", options: ["my parent's house", "my parents's house", "my parents' house"], answer: 2, why: "Parents est un pluriel en -s : on ajoute seulement l'apostrophe." },
            { q: "Complete: Emma loves ___ brother.", options: ["her", "his", "its", "their"], answer: 0, why: "Le possesseur est Emma, une fille : her, même si brother est masculin." },
            { q: "In English, « parents » means...", options: ["all your relatives", "your cousins only", "your mother and father", "your uncles, aunts and cousins"], answer: 2, why: "Parents désigne seulement le père et la mère ; la famille élargie se dit relatives." },
          ],
          trap: "Garder l'ordre français (« the sister of Tom », « the Tom's sister ») ou choisir his ou her selon l'objet possédé : on dit Tom's sister, et Emma parle de her father, car c'est Emma qui possède.",
          method: "Dessinez votre arbre généalogique (ou celui d'une famille inventée) et écrivez sous chaque personne une phrase avec le génitif, en partant de vous : « Paul is my father. Paul's sister is my aunt. »",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gouts',
          title: 'Dire ce que l\'on aime : « like », « love », « hate »',
          minutes: 25,
          objectives: [
            "Exprimer ses goûts et ses aversions avec love, like, don't mind, don't like et hate.",
            "Construire ces verbes avec un nom ou un verbe en -ing.",
            "Poser des questions sur les goûts et y répondre (Do you like...? Does she like...?).",
            "Justifier ses goûts avec because et réagir à ceux des autres.",
          ],
          course: [
            {
              heading: "Une échelle de goûts",
              paragraphs: [
                "Pour exprimer ses goûts, l'anglais dispose de toute une échelle, du plus positif au plus négatif : I love (j'adore), I really like (j'aime beaucoup), I like (j'aime bien), I don't mind (ça ne me dérange pas, ça m'est égal), I don't like (je n'aime pas), I hate (je déteste), I can't stand (je ne supporte pas).",
                "Deux verbes complètent cette liste : enjoy (prendre plaisir à, apprécier) et prefer (préférer). « I enjoy reading. » « I prefer tea to coffee. » Ne confondez pas I like (j'aime) avec I'd like, la contraction de I would like, qui signifie « je voudrais » : « I'd like a sandwich, please. »",
              ],
              box: { label: "Repère", text: "love > really like > like > don't mind > don't like > hate > can't stand. I'd like = je voudrais (une demande polie, pas un goût)." },
            },
            {
              heading: "Aimer quelque chose, aimer faire quelque chose",
              paragraphs: [
                "Ces verbes peuvent être suivis d'un nom : I love pizza, I hate spiders, I like football. Pour parler d'une chose en général, l'anglais n'utilise pas d'article : « I like dogs » (j'aime les chiens), « She loves music » (elle adore la musique). « I like the dogs » voudrait dire « j'aime ces chiens-là ».",
                "Ils peuvent aussi être suivis d'une activité. Le verbe se met alors le plus souvent en -ing : I like reading, I love swimming, I hate getting up early, I don't mind walking. Après enjoy, can't stand et don't mind, le -ing est obligatoire. Après like, love et hate, on rencontre aussi to + verbe (I like to read), mais retenez d'abord la forme en -ing.",
              ],
              box: { label: "Règle", text: "Love, like, hate, enjoy, don't mind + nom sans article (I like cats) ou + verbe en -ing (I love dancing). Jamais « I like swim »." },
            },
            {
              heading: "Questions, réponses et troisième personne",
              paragraphs: [
                "Ces verbes se conjuguent au présent simple. Avec he, she, it, on ajoute un -s : she likes, he loves, my dad hates. À la forme négative, on utilise don't ou doesn't, et le verbe perd son -s : « He doesn't like fish. »",
                "Pour poser une question : « Do you like football? » « Does your sister like horses? » On répond avec do ou does : « Yes, I do. », « No, I don't. », « Yes, she does. », « No, she doesn't. » Pour faire parler quelqu'un : « What do you like doing at the weekend? » « What's your favourite sport? »",
              ],
            },
            {
              heading: "Justifier et réagir",
              paragraphs: [
                "Un goût est plus intéressant quand il est justifié. Utilisez because et un adjectif : fun (amusant), exciting (passionnant), relaxing (reposant), interesting, boring (ennuyeux), tiring (fatigant), disgusting (dégoûtant). « I love drawing because it's relaxing. » « I hate jogging because it's tiring. »",
                "Pour réagir à ce que dit quelqu'un : « Me too! » (moi aussi) répond à une phrase positive, « Me neither. » (moi non plus) répond à une phrase négative. Exemple : « I don't like rap. » « Me neither. » Pour marquer un désaccord : « Really? I love it! »",
              ],
              box: { label: "À retenir", text: "I love it because it's fun. « I like pizza. » « Me too! » « I don't like rap. » « Me neither. »" },
            },
          ],
          keyPoints: [
            "Échelle : love, really like, like, don't mind, don't like, hate, can't stand.",
            "Pas d'article pour une généralité : I like dogs, she loves music.",
            "Une activité se met en -ing : I like reading, I hate getting up early.",
            "3e personne : she likes ; négation : he doesn't like ; question : Does she like...? Yes, she does.",
            "I'd like = je voudrais, ce n'est pas un goût.",
            "Me too répond à une phrase positive, me neither à une phrase négative.",
          ],
          example: {
            statement: "Traduisez en anglais : « Mon frère adore les jeux vidéo mais il déteste lire. Et vous, aimez-vous lire ? »",
            solution: [
              "Le sujet est my brother (he) : le verbe prend un -s, loves.",
              "Les jeux vidéo en général : pas d'article, video games.",
              "Détester une activité : hates + verbe en -ing, hates reading.",
              "La question au présent simple avec you : Do you like reading?",
              "Réponse : « My brother loves video games, but he hates reading. What about you? Do you like reading? »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez le verbe entre parenthèses à la bonne forme. a) I ___ (love) animals. b) My sister ___ (hate) spiders. c) We ___ (not like) rap music. d) ___ your father ___ (like) cooking? e) Tom ___ (not like) getting up early.",
              hint: "Avec he, she ou un nom singulier : -s au verbe, ou does et doesn't. Le verbe qui suit do, does ou doesn't ne prend jamais de -s.",
              solution: [
                "a) I love animals.",
                "b) My sister hates spiders. (my sister = she : -s)",
                "c) We don't like rap music.",
                "d) Does your father like cooking? (does porte la marque de la 3e personne)",
                "e) Tom doesn't like getting up early. (pas de -s après doesn't)",
              ],
            },
            {
              level: 2,
              statement: "Rédigez une phrase par indication, en mettant l'activité en -ing quand il le faut. a) Julie / adorer / dance. b) I / détester / do the washing-up. c) My friends / aimer / play basketball. d) Ben / ça lui est égal / walk to school. e) We / ne pas aimer / horror films.",
              hint: "Choisissez le verbe de l'échelle, accordez-le avec le sujet, puis vérifiez si ce qui suit est un nom ou une activité.",
              solution: [
                "a) Julie loves dancing. (dance perd son e : dancing)",
                "b) I hate doing the washing-up.",
                "c) My friends like playing basketball.",
                "d) Ben doesn't mind walking to school.",
                "e) We don't like horror films. (un nom : pas de -ing)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un message de 60 à 80 mots à votre correspondant anglais pour parler de vos goûts. Vous devez employer au moins quatre verbes différents de l'échelle, parler des goûts d'un membre de votre famille à la 3e personne, justifier au moins deux goûts avec because et poser deux questions.",
              hint: "Préparez une liste : deux choses que vous adorez, une qui vous est égale, une que vous détestez, puis un goût d'un parent ou d'un frère. Vérifiez les -ing et les -s.",
              solution: [
                "Choisir les verbes : love, really like, don't mind, hate, et likes pour un membre de la famille.",
                "Exemple de production : « Hi Oliver! I love playing the guitar because it's relaxing, and I really like comics. I don't mind doing my homework, but I hate getting up early on Mondays because I'm always tired! My sister Jade loves horses, but she doesn't like dogs. What about you? What do you like doing at the weekend? Do you like music? Bye, Hugo »",
                "Vérifier : quatre verbes de l'échelle (love, really like, don't mind, hate), la 3e personne (loves, doesn't like), deux because, deux questions, les -ing après love, don't mind et hate.",
                "Résultat : un message d'environ 70 mots qui respecte toutes les consignes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur les goûts.",
            statements: [
              { text: "« I like dogs » means « J'aime les chiens ».", true: true, why: "Pour une généralité, l'anglais n'utilise pas d'article." },
              { text: "« I like swim » is correct.", true: false, why: "Une activité après like se met en -ing : I like swimming." },
              { text: "« She don't like tea » is correct.", true: false, why: "Avec she, on emploie doesn't : she doesn't like tea." },
              { text: "« I don't mind » means « Ça ne me dérange pas ».", true: true, why: "C'est le milieu de l'échelle : ni j'aime, ni je n'aime pas." },
              { text: "« I'd like a pizza » means « J'aime la pizza ».", true: false, why: "I'd like = I would like, « je voudrais » : c'est une demande." },
              { text: "« I don't like spiders. » « Me neither. » is a correct exchange.", true: true, why: "Me neither (moi non plus) répond à une phrase négative." },
              { text: "« Hate » is stronger than « don't like ».", true: true, why: "Hate signifie détester ; don't like, ne pas aimer." },
            ],
          },
          quiz: [
            { q: "Complete: My dad ___ cooking.", options: ["loves", "love", "loving", "is love"], answer: 0, why: "Avec my dad (he), le verbe au présent simple prend un -s : loves." },
            { q: "Choose the correct sentence.", options: ["I like the cats.", "I like cat.", "I like cats.", "I like a cats."], answer: 2, why: "Pour une généralité : le pluriel, sans article." },
            { q: "« Do you like football? » Choose the correct short answer.", options: ["Yes, I like.", "Yes, I do.", "Yes, I am.", "Yes, I love."], answer: 1, why: "La réponse courte reprend l'auxiliaire de la question : do." },
            { q: "Which verb means « ne pas supporter »?", options: ["enjoy", "don't mind", "would like to", "can't stand"], answer: 3, why: "Can't stand est le bas de l'échelle : je ne supporte pas." },
            { q: "Complete: Lisa doesn't like ___ up early.", options: ["gets", "getting", "is getting"], answer: 1, why: "Après like, une activité se met en -ing : getting up." },
          ],
          trap: "Oublier le -ing après love, like, hate ou enjoy (« I like swim ») ou garder l'article des généralités françaises (« I like the dogs ») : on dit I like swimming et I like dogs.",
          method: "Écrivez cinq phrases sur vous, une par niveau de l'échelle (love, like, don't mind, don't like, hate), puis réécrivez-les pour un ami à la 3e personne : le -s de likes et le doesn't deviendront des réflexes.",
        },
      ],
    },
    {
      id: 'ecole-et-loisirs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'school-life',
          title: 'La vie à l\'école : matières et emploi du temps',
          minutes: 25,
          objectives: [
            "Nommer les matières scolaires et les mots de la vie au collège en anglais.",
            "Présenter un emploi du temps avec les jours, les heures et les prépositions on, at et in.",
            "Exprimer ses préférences et son niveau : my favourite subject, I'm good at...",
            "Comparer la journée d'un élève français et celle d'un élève britannique.",
          ],
          course: [
            {
              heading: "Les matières",
              paragraphs: [
                "Voici les matières (subjects) les plus courantes : maths (math en anglais américain), English, French, Spanish, German, history, geography, science, biology, physics (physique), chemistry (chimie), art, music, technology, IT ou computing (informatique) et PE (Physical Education, l'éducation physique et sportive). Dans les écoles anglaises, on trouve aussi RE (Religious Education).",
                "Les langues s'écrivent toujours avec une majuscule, comme les nationalités : English, French, Spanish. Les autres matières s'écrivent en minuscules dans une phrase : history, maths, music. Maths se termine par un s mais reste singulier : « Maths is my favourite subject. »",
                "On ne met pas d'article devant une matière : « I like history », « We have maths on Monday ». Écrire « I like the history » est une erreur fréquente des élèves français.",
              ],
              box: { label: "À retenir", text: "Pas d'article devant une matière : I love art. Majuscule pour les langues : English, Spanish. Maths est singulier : Maths is easy." },
            },
            {
              heading: "L'emploi du temps : jours, heures et prépositions",
              paragraphs: [
                "L'emploi du temps se dit timetable (schedule en anglais américain). Les jours de la semaine prennent toujours une majuscule : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Les mots utiles : a lesson (un cours), break (la récréation), lunch break (la pause du midi), homework (les devoirs).",
                "Trois prépositions situent dans le temps. On s'emploie avec un jour : on Monday, on Friday afternoon. At s'emploie avec une heure ou un moment précis : at nine o'clock, at lunchtime, at break. In s'emploie avec une partie de la journée : in the morning, in the afternoon. Exemple : « On Tuesday, we have English at ten o'clock and PE in the afternoon. »",
                "Pour présenter son emploi du temps, on emploie have ou have got : « We have maths on Monday » ou « We've got maths on Monday ». Pour poser la question : « What do you have on Thursday? » ou « What have you got on Thursday? »",
              ],
              box: { label: "Règle", text: "On + jour (on Monday). At + heure ou moment précis (at 9 o'clock, at lunchtime). In + partie de la journée (in the morning, in the afternoon)." },
            },
            {
              heading: "Parler de ses matières",
              paragraphs: [
                "Pour donner sa matière préférée : « My favourite subject is art because it's fun. » Favourite s'écrit favorite en anglais américain. Pour justifier, utilisez des adjectifs : interesting, boring, easy, difficult (ou hard), useful (utile), fun.",
                "Pour parler de son niveau, on dit be good at (être bon en) et be bad at (être mauvais en) : « I'm good at maths, but I'm bad at geography. » Pour nuancer : « I'm not very good at music. » Attention : on dit good at, jamais « good in ».",
                "Dans les écoles britanniques, les élèves appellent souvent leurs professeurs Sir pour un homme et Miss pour une femme. Pour parler d'un professeur, on emploie son nom de famille avec Mr (monsieur) ou Mrs, Ms ou Miss (madame, mademoiselle) : « Our English teacher is Mrs Clark. »",
              ],
            },
            {
              heading: "Une journée dans une école britannique",
              paragraphs: [
                "En Angleterre, la 5e correspond à Year 8. Dans la plupart des écoles, les élèves portent un uniforme (a school uniform). La journée commence en général vers 8 h 30 ou 9 h par un moment avec le professeur principal (form time ou registration), où l'on fait l'appel.",
                "Les cours durent souvent environ une heure. Il y a une récréation le matin et une pause déjeuner, pendant laquelle les élèves prennent un school dinner à la cantine ou apportent un packed lunch (un repas préparé à la maison). La journée se termine souvent vers 15 h ou 15 h 30, puis beaucoup d'élèves restent pour des clubs (after-school clubs) : sport, théâtre, musique.",
                "Il n'y a pas cours le samedi, et le mercredi après-midi est un après-midi de cours comme les autres. Les horaires exacts varient d'une école à l'autre : chaque établissement fixe les siens.",
              ],
              box: { label: "Repère", text: "6e = Year 7 ; 5e = Year 8 ; 4e = Year 9 ; 3e = Year 10. Uniforme, form time le matin, school dinner ou packed lunch, after-school clubs." },
            },
          ],
          keyPoints: [
            "Matières sans article : I like history ; maths est singulier.",
            "Majuscule pour les langues (English) et les jours (Monday).",
            "On + jour, at + heure, in + partie de la journée.",
            "My favourite subject is... because it's... ; I'm good at, I'm bad at.",
            "Homework est indénombrable : a lot of homework, jamais « homeworks ».",
            "La 5e correspond à Year 8 en Angleterre.",
          ],
          example: {
            statement: "Voici le lundi de Harry, élève de Year 8 dans une école anglaise (données fictives) : 9 h maths ; 10 h English ; 11 h break ; 11 h 20 science ; 12 h 20 lunch ; 13 h 20 PE ; 14 h 20 history. Présentez sa journée en anglais, à la troisième personne, en trois ou quatre phrases.",
            solution: [
              "Situer le jour avec on : « On Monday, Harry has maths at nine o'clock and English at ten. »",
              "Placer la récréation et le cours suivant, avec at : « He has break at eleven, then science. »",
              "Situer le déjeuner, puis la partie de la journée avec in : « He has lunch at twenty past twelve. In the afternoon, he has PE and history. »",
              "Vérifier : pas d'article devant les matières, majuscule à English et Monday, has avec he.",
              "Réponse : « On Monday, Harry has maths at nine o'clock and English at ten. He has break at eleven, then science. He has lunch at twenty past twelve. In the afternoon, he has PE and history. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec on, at ou in. a) I have art ___ Friday. b) The first lesson starts ___ half past eight. c) We have PE ___ the afternoon. d) There's no school ___ Sunday. e) We have lunch ___ twelve o'clock.",
              hint: "Un jour : on. Une heure précise : at. Une partie de la journée : in.",
              solution: [
                "a) on Friday (un jour)",
                "b) at half past eight (une heure)",
                "c) in the afternoon (une partie de la journée)",
                "d) on Sunday (un jour)",
                "e) at twelve o'clock (une heure)",
              ],
            },
            {
              level: 2,
              statement: "Chaque phrase contient une erreur. Corrigez-la et expliquez-la. a) My favourite subject is the history. b) I'm good in maths. c) We have english on monday. d) I have a lot of homeworks. e) Maths are difficult.",
              hint: "Pensez aux articles, aux prépositions, aux majuscules, aux noms indénombrables et au singulier de maths.",
              solution: [
                "a) My favourite subject is history. (pas d'article devant une matière)",
                "b) I'm good at maths. (on dit good at)",
                "c) We have English on Monday. (majuscule aux langues et aux jours)",
                "d) I have a lot of homework. (homework est indénombrable)",
                "e) Maths is difficult. (maths est singulier)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Harry vous demande comment se passe une journée dans votre collège. Écrivez-lui 70 à 90 mots : décrivez votre mercredi ou un autre jour (au moins trois matières avec l'heure), donnez votre matière préférée et celle où vous êtes moins bon, avec une justification, et signalez deux différences entre votre collège et son école.",
              hint: "Utilisez on, at et in, has ou have selon le sujet, good at et bad at, because, et pensez aux différences du cours : uniforme, horaires, mercredi après-midi.",
              solution: [
                "Organiser : une phrase d'accroche, l'emploi du temps d'un jour, les préférences justifiées, deux différences, une question.",
                "Exemple de production : « Hi Harry! On Tuesday, I have French at eight o'clock, then maths at nine. At eleven, we have Spanish. In the afternoon, I have PE and history. My favourite subject is history because it's interesting, but I'm bad at maths. My school is different from yours: we don't wear a uniform, and we often finish at five o'clock. Do you have lessons on Wednesday afternoon? We don't! Bye, Clara »",
                "Vérifier : on, at et in bien employés, pas d'article devant les matières, majuscules à French, Spanish, Tuesday, deux différences, une question.",
                "Résultat : un message d'environ 80 mots qui répond à toutes les consignes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot anglais à sa traduction.",
            pairs: [
              { left: "timetable", right: "l'emploi du temps" },
              { left: "break", right: "la récréation" },
              { left: "homework", right: "les devoirs" },
              { left: "PE", right: "l'éducation physique et sportive" },
              { left: "headteacher", right: "le chef d'établissement" },
              { left: "subject", right: "une matière" },
            ],
          },
          quiz: [
            { q: "« J'ai sport le mardi » in English is...", options: ["I have PE in Tuesday.", "I have PE at Tuesday.", "I have PE on Tuesday.", "I have the PE on Tuesday."], answer: 2, why: "On s'emploie avec un jour, et on ne met pas d'article devant une matière." },
            { q: "Which subject needs a capital letter in English?", options: ["history", "maths", "science", "spanish"], answer: 3, why: "Les langues prennent une majuscule : Spanish, comme English et French." },
            { q: "Complete: I'm very good ___ English.", options: ["at", "in", "on", "for"], answer: 0, why: "Être bon en se dit be good at." },
            { q: "In a British school, « break » is...", options: ["la cantine", "la récréation", "l'emploi du temps", "les devoirs"], answer: 1, why: "Break est la pause entre les cours ; on dit recess en anglais américain." },
            { q: "Choose the correct sentence.", options: ["I have a lot of homework.", "I have a lot of homeworks.", "I have many homeworks."], answer: 0, why: "Homework est indénombrable : pas de -s, et a lot of plutôt que many." },
          ],
          trap: "Mettre un article devant une matière (« I like the maths ») ou écrire les langues et les jours sans majuscule : on écrit I like maths, on Monday, English.",
          method: "Recopiez votre propre emploi du temps en anglais et lisez-le à voix haute chaque matin (« On Monday, I have French at eight... ») : en une semaine, matières, jours et prépositions seront acquis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'present-simple-frequence',
          title: 'Le présent simple et les adverbes de fréquence',
          minutes: 35,
          objectives: [
            "Conjuguer le présent simple à toutes les personnes, aux formes affirmative, négative et interrogative.",
            "Appliquer les règles d'orthographe et de prononciation du -s de la troisième personne.",
            "Exprimer la fréquence avec always, usually, often, sometimes, rarely, never et des expressions comme once a week.",
            "Placer correctement l'adverbe de fréquence dans la phrase.",
          ],
          course: [
            {
              heading: "À quoi sert le présent simple ?",
              paragraphs: [
                "Le présent simple sert à parler de ce qui est habituel ou toujours vrai : les habitudes et les routines (I walk to school every day), les goûts (She likes music), les vérités générales (Water boils at 100 °C) et les horaires fixes (The bus leaves at 7.50).",
                "Sa formation est très simple : on prend la base verbale, c'est-à-dire le verbe sans to (to play → play), et on la garde telle quelle avec I, you, we, they. Seule la troisième personne du singulier change : avec he, she, it ou un nom singulier, on ajoute un -s. I play, you play, he plays, we play, they play.",
              ],
              box: { label: "Formule", text: "Sujet + base verbale ; he / she / it + base verbale + -s. I live in Lille. My sister lives in Paris. The Earth goes around the Sun." },
            },
            {
              heading: "Le -s de la troisième personne : orthographe et prononciation",
              paragraphs: [
                "En général, on ajoute -s : play → plays, read → reads, work → works. Après s, ss, sh, ch, x et o, on ajoute -es : miss → misses, wash → washes, watch → watches, fix → fixes, go → goes, do → does. Après une consonne suivie de y, le y devient -ies : study → studies, cry → cries. Mais après une voyelle suivie de y, on ajoute simplement -s : play → plays, buy → buys. Enfin, have devient has.",
                "Le -s se prononce de trois façons. [s] après les sons [p], [t], [k], [f] : works, eats, stops. [z] après une voyelle et la plupart des autres sons : plays, goes, reads. [iz], une syllabe en plus, après les sons [s], [z], [ch], [sh], [j] : watches, washes, dances, misses. Faites entendre ce -s : c'est lui qui montre que le sujet est à la 3e personne.",
              ],
              box: { label: "À retenir", text: "-es après s, ss, sh, ch, x, o (watches, goes). Consonne + y → -ies (studies). Voyelle + y → -s (plays). Have → has. Prononciation : [s], [z] ou [iz]." },
            },
            {
              heading: "La négation et la question : l'auxiliaire do",
              paragraphs: [
                "Pour la forme négative, on utilise l'auxiliaire do, suivi de not et de la base verbale : I don't (do not) like, he doesn't (does not) like. Le -s passe sur l'auxiliaire : on écrit « She doesn't play », jamais « She doesn't plays ».",
                "Pour la question, on place do ou does devant le sujet : « Do you play tennis? » « Does he live here? » Réponses courtes : « Yes, I do. », « No, he doesn't. » Avec un mot interrogatif : « Where do you live? » « What time does the film start? »",
                "Le verbe be fait exception : il n'utilise jamais do. On dit « Is he late? » et « She isn't late », comme vous l'avez vu dans la leçon sur be.",
              ],
              box: { label: "Règle", text: "Négation : don't / doesn't + base verbale. Question : Do / Does + sujet + base verbale ? Le -s ne se met qu'une fois : sur le verbe (she plays) ou sur does (does she play?)." },
            },
            {
              heading: "Les adverbes de fréquence",
              paragraphs: [
                "Les adverbes de fréquence disent combien de fois une action a lieu. Du plus fréquent au moins fréquent : always (toujours), usually (d'habitude), often (souvent), sometimes (parfois), rarely (rarement), never (jamais).",
                "Ils se placent avant le verbe principal : « I often play football. » « She never eats meat. » Mais ils se placent après le verbe be : « He is always late. » « We are never bored. » Sometimes peut aussi se placer en début de phrase : « Sometimes I walk to school. »",
                "Never a déjà un sens négatif : le verbe reste à la forme affirmative. On dit « I never drink coffee » et jamais « I don't never drink coffee ». Pour une fréquence précise, on utilise une expression en fin de phrase : every day, every Saturday, once a week (une fois par semaine), twice a month (deux fois par mois), three times a year. La question correspondante est : « How often do you...? »",
              ],
              box: { label: "Règle", text: "Adverbe avant le verbe (I often read), mais après be (I'm often late). Never + verbe affirmatif. How often...? → once a week, twice a month, every day." },
            },
          ],
          keyPoints: [
            "Présent simple = habitudes, vérités générales, horaires fixes.",
            "He / she / it : -s ou -es (plays, watches, goes, studies) ; have → has.",
            "Don't / doesn't + base verbale ; Do / Does + sujet + base verbale ?",
            "Le -s ne se met qu'une fois : she plays, she doesn't play, does she play?",
            "Always, usually, often, sometimes, rarely, never : avant le verbe, après be.",
            "Never + verbe affirmatif ; How often...? → once a week, twice a month.",
          ],
          example: {
            statement: "Remettez les mots dans l'ordre et conjuguez le verbe au présent simple. a) my brother / play / always / video games / after school. b) we / be / late / never. c) she / not / watch / TV / usually.",
            solution: [
              "a) Le sujet my brother = he : plays. L'adverbe se place avant le verbe : « My brother always plays video games after school. »",
              "b) Le verbe est be, conjugué are avec we. L'adverbe se place après be : « We are never late. »",
              "c) Forme négative avec she : doesn't + base verbale. L'adverbe se place entre doesn't et le verbe : « She doesn't usually watch TV. »",
              "Réponses : My brother always plays video games after school. We are never late. She doesn't usually watch TV.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez la forme de la troisième personne du singulier (he, she, it) de ces verbes : play, watch, go, study, have, fix, do, miss, read, cry.",
              hint: "Repérez la fin du verbe : s, ss, sh, ch, x, o donnent -es ; consonne + y donne -ies ; have est irrégulier.",
              solution: [
                "play → plays (voyelle + y : -s) ; watch → watches ; go → goes ; study → studies (consonne + y : -ies) ; have → has.",
                "fix → fixes ; do → does ; miss → misses ; read → reads ; cry → cries.",
              ],
            },
            {
              level: 2,
              statement: "Mettez chaque phrase à la forme négative, puis à la forme interrogative. a) She speaks Spanish. b) They live in Bristol. c) He goes to school by bus. d) Your cat sleeps on your bed.",
              hint: "Utilisez does avec she, he et your cat, do avec they. Le verbe revient à la base verbale, sans -s.",
              solution: [
                "a) She doesn't speak Spanish. Does she speak Spanish?",
                "b) They don't live in Bristol. Do they live in Bristol?",
                "c) He doesn't go to school by bus. Does he go to school by bus?",
                "d) Your cat doesn't sleep on your bed. Does your cat sleep on your bed?",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici une semaine ordinaire de Maya (données fictives), avec le nombre de jours sur sept : walk to school (7) ; have cereals for breakfast (5) ; do her homework in the kitchen (6) ; play the piano (3) ; watch TV (2) ; be late for school (0). Avec la clé suivante : 7 jours = always ; 5 ou 6 = usually ; 3 ou 4 = often ; 1 ou 2 = sometimes ; 0 = never, écrivez une phrase par activité. Puis traduisez : « À quelle fréquence Maya joue-t-elle du piano ? Trois fois par semaine. »",
              hint: "Choisissez l'adverbe grâce à la clé, placez-le avant le verbe (après be pour la dernière phrase), et n'oubliez pas le -s de la 3e personne.",
              solution: [
                "Walk to school, 7 jours : « Maya always walks to school. »",
                "Have cereals, 5 jours : « She usually has cereals for breakfast. » (have → has)",
                "Do her homework, 6 jours : « She usually does her homework in the kitchen. » (do → does)",
                "Play the piano, 3 jours : « She often plays the piano. »",
                "Watch TV, 2 jours : « She sometimes watches TV. » (watch → watches)",
                "Be late, 0 jour : « She is never late for school. » (never après be)",
                "Traduction : « How often does Maya play the piano? She plays the piano three times a week. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez les adverbes de fréquence du plus fréquent au moins fréquent.",
            items: ["always", "usually", "often", "sometimes", "rarely", "never"],
          },
          quiz: [
            { q: "Complete: My mum ___ to work by train.", options: ["go", "goes", "gos", "going"], answer: 1, why: "Avec my mum (she), go devient goes : -es après o." },
            { q: "Choose the correct negative sentence.", options: ["He doesn't like fish.", "He doesn't likes fish.", "He don't like fish.", "He not likes fish."], answer: 0, why: "Doesn't porte la marque de la 3e personne : le verbe reste à la base verbale." },
            { q: "Choose the correct sentence.", options: ["Always she is late.", "She always is late.", "She is always late.", "She is late always."], answer: 2, why: "Avec le verbe be, l'adverbe de fréquence se place après be." },
            { q: "How is the -s of « watches » pronounced?", options: ["[s]", "[z]", "it is not pronounced", "[iz]"], answer: 3, why: "Après le son [ch], la terminaison -es ajoute une syllabe : [iz]." },
            { q: "« Je ne mange jamais de viande » in English is...", options: ["I don't never eat meat.", "I eat never meat.", "I never eat meat.", "I don't eat never meat."], answer: 2, why: "Never se place avant le verbe, qui reste à la forme affirmative." },
          ],
          trap: "Oublier le -s de la troisième personne (« she play ») ou le garder après doesn't (« he doesn't plays ») : le -s ne se met qu'une fois, sur le verbe ou sur does.",
          method: "Pour vérifier une phrase au présent simple, posez-vous deux questions : le sujet est-il he, she, it ou un nom singulier ? Y a-t-il do ou does dans la phrase ? Le -s va soit sur le verbe, soit sur does, jamais sur les deux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'can-must',
          title: 'Capacités et règles : « can » et « must »',
          minutes: 30,
          objectives: [
            "Exprimer la capacité et la permission avec can et can't.",
            "Exprimer l'obligation avec must et l'interdiction avec mustn't.",
            "Construire correctement une phrase avec un modal : même forme à toutes les personnes, base verbale sans to.",
            "Rédiger le règlement d'une classe, d'un club ou d'un lieu public.",
          ],
          course: [
            {
              heading: "Les modaux : une famille à part",
              paragraphs: [
                "Can et must sont des modaux, des auxiliaires qui ajoutent une nuance au verbe : la capacité, la permission, l'obligation. Ils obéissent à des règles très régulières, qui ne ressemblent pas à celles des autres verbes.",
                "Un modal a la même forme à toutes les personnes : il ne prend jamais de -s (she can, he must). Il est toujours suivi de la base verbale, sans to (I can swim, you must listen). Pour la négation, on ajoute not directement (can't, mustn't), et pour la question, on place le modal devant le sujet (Can you swim?). On n'utilise jamais do avec un modal.",
              ],
              box: { label: "Règle", text: "Modal + base verbale, sans -s, sans to, sans do. She can dance (et non « she cans », « she can to dance »). Can you dance? (et non « Do you can dance? »)." },
            },
            {
              heading: "Can : savoir, pouvoir, avoir le droit",
              paragraphs: [
                "Can exprime d'abord la capacité, ce que l'on sait ou peut faire : « I can swim. » « My little brother can count to a hundred. » À la forme négative, on écrit can't ou cannot, en un seul mot : « I can't ski. » Question et réponses courtes : « Can you play the guitar? Yes, I can. / No, I can't. »",
                "Can exprime aussi la permission : « Can I go to the toilet, please? » « You can use a dictionary. » À l'inverse, can't peut exprimer un refus ou une interdiction : « You can't use your phone in class. »",
                "À l'oral, can est souvent prononcé faiblement, presque [kən], alors que can't se prononce avec un a long et bien marqué en anglais britannique : c'est souvent ce son qui permet d'entendre la différence entre « I can » et « I can't ».",
              ],
            },
            {
              heading: "Must et mustn't : l'obligation et l'interdiction",
              paragraphs: [
                "Must exprime une obligation, une règle à respecter : « You must wear a uniform. » « Pupils must arrive on time. » Il peut aussi exprimer une obligation que l'on s'impose soi-même : « I must call my grandmother tonight. »",
                "Mustn't (must not) exprime l'interdiction : « You mustn't run in the corridors. » (Il est interdit de courir dans les couloirs.) Le premier t de mustn't ne se prononce pas : on entend [masnt].",
                "Attention au contresens : mustn't ne veut pas dire « ne pas être obligé de ». « You mustn't eat in class » signifie « Vous n'avez pas le droit de manger en classe », et non « Vous n'êtes pas obligé de manger en classe ».",
              ],
              box: { label: "Attention", text: "You must = vous devez (obligation). You mustn't = vous n'avez pas le droit (interdiction). You can = vous pouvez (permission)." },
            },
            {
              heading: "Rédiger un règlement",
              paragraphs: [
                "Un règlement (rules) combine les trois idées : ce qui est obligatoire (must), ce qui est interdit (mustn't ou can't) et ce qui est permis (can). Exemple de règlement de classe : « You must listen to the teacher. You must bring your book. You mustn't eat in class. You can ask questions at any time. »",
                "Sur les panneaux, on trouve aussi l'impératif, plus direct : « Don't run! » « Keep quiet. » Pour une demande polie, utilisez Can I...? suivi de please : « Can I open the window, please? »",
              ],
            },
          ],
          keyPoints: [
            "Can et must : même forme à toutes les personnes, suivis de la base verbale sans to.",
            "Pas de do avec un modal : Can you swim? Yes, I can. / No, I can't.",
            "Can = capacité (I can swim) ou permission (You can go).",
            "Cannot s'écrit en un seul mot ; can't est sa contraction.",
            "Must = obligation (You must wear a uniform).",
            "Mustn't = interdiction, et non absence d'obligation.",
          ],
          example: {
            statement: "Transformez ces règles d'une piscine en phrases anglaises avec must, mustn't ou can. 1) Douche obligatoire avant la baignade. 2) Interdiction de courir. 3) Les enfants ont le droit d'utiliser des brassards. 4) Interdiction de manger au bord du bassin.",
            solution: [
              "1) Une obligation : must + base verbale. « You must have a shower before swimming. »",
              "2) Une interdiction : mustn't. « You mustn't run. »",
              "3) Une permission : can. « Children can use armbands. »",
              "4) Une interdiction : mustn't. « You mustn't eat by the pool. »",
              "Vérifier : aucun -s, aucun to après must et can.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez l'erreur dans chaque phrase. a) She cans dance. b) Do you can swim? c) We must to wear a uniform. d) He can plays the piano. e) They don't must shout.",
              hint: "Cherchez l'intrus autour du modal : un -s, un to ou un do.",
              solution: [
                "a) She can dance. (pas de -s au modal)",
                "b) Can you swim? (pas de do : on inverse le modal et le sujet)",
                "c) We must wear a uniform. (pas de to après must)",
                "d) He can play the piano. (base verbale après can, sans -s)",
                "e) They mustn't shout. (on ajoute not au modal, sans do)",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec must, mustn't, can ou can't. a) In the library, you ___ talk loudly. b) In our cycling club, you ___ wear a helmet. c) My little brother is two: he ___ read yet. d) At our library, you ___ borrow three books at a time. e) Pupils ___ eat sweets in class. f) ___ I open the window, please?",
              hint: "Demandez-vous chaque fois : est-ce une obligation, une interdiction, une permission ou une capacité ?",
              solution: [
                "a) mustn't (une interdiction : on ne parle pas fort à la bibliothèque)",
                "b) must (une obligation, une règle du club)",
                "c) can't (une capacité qu'il n'a pas encore)",
                "d) can (une permission)",
                "e) mustn't (une interdiction)",
                "f) Can (une demande de permission)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Vous créez un club au collège (sport, lecture, jeux vidéo, cuisine...). Rédigez son règlement en anglais, en 50 à 70 mots : au moins deux obligations avec must, deux interdictions avec mustn't, deux permissions avec can, puis une phrase sur ce que les membres savent faire avec can.",
              hint: "Commencez par le nom du club et le jour de la réunion, puis rédigez une règle par ligne. Relisez en cherchant les -s, les to et les do interdits.",
              solution: [
                "Choisir un club et classer les idées : obligations, interdictions, permissions, capacités.",
                "Exemple de production : « Welcome to the Cooking Club! We meet on Thursdays at five. Rules: You must wash your hands. You must wear an apron. You mustn't touch the knives without the teacher. You mustn't eat during the lesson. You can take your cake home. You can invite a friend once a month. After ten lessons, our members can make pancakes and cookies on their own! »",
                "Vérifier : deux must, deux mustn't, deux can de permission, un can de capacité, aucun -s, aucun to après les modaux.",
                "Résultat : un règlement d'environ 65 mots, clair et correct.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les modaux can et must n'auront plus de secret pour vous.",
            statements: [
              { text: "« She can swims » is correct.", true: false, why: "Un modal est suivi de la base verbale, sans -s : she can swim." },
              { text: "« Can you ski? » « Yes, I can. » is a correct exchange.", true: true, why: "La réponse courte reprend le modal : Yes, I can." },
              { text: "« You mustn't run » means « Vous n'êtes pas obligé de courir ».", true: false, why: "Mustn't exprime une interdiction : vous n'avez pas le droit de courir." },
              { text: "« Cannot » is written as one word.", true: true, why: "Cannot s'écrit en un seul mot ; sa contraction est can't." },
              { text: "« We must to go » is correct.", true: false, why: "Pas de to après un modal : we must go." },
              { text: "« Can I go to the toilet, please? » asks for permission.", true: true, why: "Can I...? sert à demander la permission." },
              { text: "« Do you can play chess? » is correct.", true: false, why: "On n'utilise jamais do avec un modal : Can you play chess?" },
            ],
          },
          quiz: [
            { q: "Complete: My grandmother ___ use a computer.", options: ["cans", "can to", "is can", "can"], answer: 3, why: "Can garde la même forme à toutes les personnes et se construit avec la base verbale." },
            { q: "« Il est interdit de fumer ici » in English is...", options: ["You don't must smoke here.", "You can smoke here.", "You mustn't smoke here."], answer: 2, why: "L'interdiction s'exprime avec mustn't, sans do." },
            { q: "Choose the correct question.", options: ["Do you can dance?", "Can you dance?", "Can you to dance?", "Are you can dance?"], answer: 1, why: "Pour la question, on place can devant le sujet, sans do et sans to." },
            { q: "« Can I borrow your pen? » Here, can expresses...", options: ["permission", "ability", "obligation", "the future"], answer: 0, why: "Can I...? est une demande de permission." },
            { q: "Complete: In many British schools, pupils ___ wear a uniform.", options: ["can", "must", "mustn't"], answer: 1, why: "Porter l'uniforme est une obligation : must." },
          ],
          trap: "Traiter can et must comme des verbes ordinaires : ajouter un -s (« she cans »), un to (« must to ») ou do (« Do you can...? »). Et croire que mustn't veut dire « ne pas être obligé », alors qu'il exprime une interdiction.",
          method: "Retenez la formule « modal + base verbale, rien d'autre » et relisez chaque phrase en cherchant trois intrus autour de can ou de must : un -s, un to, un do. S'il y en a un, supprimez-le.",
        },
      ],
    },
    {
      id: 'quotidien',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'daily-routine',
          title: 'Raconter sa journée et dire l\'heure',
          minutes: 30,
          objectives: [
            "Demander et dire l'heure en anglais avec o'clock, past, to, quarter et half.",
            "Raconter sa journée au présent simple avec les verbes de la routine.",
            "Organiser son récit avec des mots de liaison : first, then, after that, finally.",
            "Situer une action dans la journée avec at, in the morning, in the evening.",
          ],
          course: [
            {
              heading: "Demander et dire l'heure",
              paragraphs: [
                "Pour demander l'heure, on dit : « What time is it? » ou « What's the time? » On répond toujours avec it's. Pour une heure pile, on ajoute o'clock : « It's ten o'clock. »",
                "De 1 à 30 minutes après l'heure, on compte depuis l'heure passée avec past : « It's ten past four » (4 h 10), « It's twenty-five past four » (4 h 25). De 31 à 59 minutes, on compte les minutes qui manquent jusqu'à l'heure suivante avec to : « It's twenty to five » (4 h 40), « It's five to five » (4 h 55).",
                "Trois moments ont un nom : a quarter past (et quart), half past (et demie), a quarter to (moins le quart). « It's a quarter past seven » (7 h 15), « It's half past seven » (7 h 30), « It's a quarter to eight » (7 h 45). Pour les minutes qui ne sont pas des multiples de cinq, on ajoute le mot minutes : « It's eight minutes past ten. »",
              ],
              box: { label: "Repère", text: "3 h 00 = three o'clock ; 3 h 15 = a quarter past three ; 3 h 30 = half past three ; 3 h 40 = twenty to four ; 3 h 45 = a quarter to four." },
            },
            {
              heading: "L'heure digitale et le système de douze heures",
              paragraphs: [
                "On peut aussi lire l'heure comme sur un écran, en disant les chiffres : 7 h 45 = seven forty-five ; 8 h 05 = eight oh five. C'est la façon de faire la plus simple, très courante aux États-Unis.",
                "Dans la conversation, l'anglais compte les heures de 1 à 12. Pour préciser, on ajoute a.m. pour les heures du matin, avant midi, et p.m. pour celles de l'après-midi et du soir : 9 a.m. (9 h), 3 p.m. (15 h), 8 p.m. (20 h). On dit aussi in the morning, in the afternoon, in the evening : « at three in the afternoon ». Midi se dit midday ou noon, minuit midnight.",
                "Le système de 24 heures existe, mais il est réservé aux horaires officiels : trains, avions, emplois du temps. Dire « fourteen o'clock » n'a pas de sens en anglais : on dit two o'clock, ou two p.m.",
              ],
              box: { label: "À retenir", text: "a.m. = le matin (de minuit à midi) ; p.m. = l'après-midi et le soir (de midi à minuit). 15 h = three p.m. ou three in the afternoon, jamais « fifteen o'clock »." },
            },
            {
              heading: "Les verbes de la routine",
              paragraphs: [
                "Les verbes de la journée : wake up (se réveiller), get up (se lever), have a shower (prendre une douche), get dressed (s'habiller), brush my teeth (me brosser les dents), have breakfast (prendre le petit déjeuner), go to school (aller à l'école), have lunch (déjeuner), get home (arriver à la maison), do my homework (faire mes devoirs), have dinner (dîner), go to bed (aller se coucher).",
                "Le verbe have est très utilisé pour les repas et la toilette : have breakfast, have lunch, have dinner, have a shower. Deux expressions s'emploient sans article : go home (rentrer à la maison, sans to) et go to bed (sans the). On dit « I go home at five », jamais « I go to home ».",
                "Pour situer une action, on emploie at avec l'heure : « I get up at seven. » La question est : « What time do you get up? » (À quelle heure vous levez-vous ?) Avec he ou she, n'oubliez pas le -s : « She gets up at seven. » « He has a shower. »",
              ],
            },
            {
              heading: "Raconter sa journée",
              paragraphs: [
                "Pour que le récit soit clair, reliez les étapes avec des mots de liaison : first (d'abord), then (puis), after that (après cela), next (ensuite), finally (enfin). Situez les moments de la journée : in the morning, in the afternoon, in the evening, at night (la nuit), on weekdays (en semaine), at the weekend (le week-end).",
                "Exemple : « On weekdays, I wake up at half past six. First, I have a shower, then I have breakfast. After that, I go to school by bus. In the evening, I do my homework. Finally, I go to bed at a quarter to ten. » Le présent simple convient, car il s'agit d'une habitude.",
              ],
              box: { label: "À retenir", text: "First, then, after that, next, finally. In the morning, in the afternoon, in the evening, at night. Go home et go to bed, sans article." },
            },
          ],
          keyPoints: [
            "What time is it? It's... ; o'clock pour une heure pile.",
            "Past de 1 à 30 minutes, to de 31 à 59 minutes : twenty to five = 4 h 40.",
            "A quarter past (et quart), half past (et demie), a quarter to (moins le quart).",
            "a.m. le matin, p.m. l'après-midi et le soir ; jamais « fourteen o'clock ».",
            "At + heure : I get up at seven. Go home et go to bed, sans article.",
            "First, then, after that, finally pour organiser le récit.",
          ],
          example: {
            statement: "Écrivez en toutes lettres, en anglais, les heures suivantes : 6 h 50 ; 8 h 15 ; 12 h 30 ; 17 h 40.",
            solution: [
              "6 h 50 : il manque 10 minutes pour 7 h, on compte avec to. « ten to seven » (in the morning).",
              "8 h 15 : un quart d'heure après 8 h. « a quarter past eight ».",
              "12 h 30 : la demie. « half past twelve ».",
              "17 h 40 : c'est 5 h de l'après-midi, et il manque 20 minutes pour 6 h. « twenty to six » (p.m., in the afternoon).",
              "Réponses : ten to seven ; a quarter past eight ; half past twelve ; twenty to six.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez ces heures en toutes lettres, avec past, to, quarter, half ou o'clock : a) 9 h 05 ; b) 10 h 20 ; c) 11 h 45 ; d) 2 h 35 ; e) 4 h 30 ; f) 7 h 00.",
              hint: "Jusqu'à la demie, comptez les minutes après l'heure (past) ; après la demie, comptez les minutes qui manquent jusqu'à l'heure suivante (to).",
              solution: [
                "a) five past nine",
                "b) twenty past ten",
                "c) a quarter to twelve (il manque 15 minutes pour midi)",
                "d) twenty-five to three (il manque 25 minutes pour 3 h)",
                "e) half past four",
                "f) seven o'clock",
              ],
            },
            {
              level: 2,
              statement: "Complétez la journée de Ben en conjuguant les verbes au présent simple. « Ben (wake up) at a quarter to seven. He (have) a shower and he (get) dressed. He (brush) his teeth after breakfast. He (go) to school by bike. In the evening, he (do) his homework and he (watch) TV. He (go) to bed at half past nine. »",
              hint: "Ben = he : chaque verbe prend un -s. Attention aux verbes en -es (brush, go, do, watch) et à have.",
              solution: [
                "wakes up ; has (have → has) ; gets ; brushes (-es après sh) ; goes (-es après o) ; does (-es après o) ; watches (-es après ch) ; goes.",
                "Texte complété : « Ben wakes up at a quarter to seven. He has a shower and he gets dressed. He brushes his teeth after breakfast. He goes to school by bike. In the evening, he does his homework and he watches TV. He goes to bed at half past nine. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez le texte (personnage inventé) et répondez en anglais. « Hi, I'm Grace. On weekdays, my alarm rings at a quarter to seven, but I get up ten minutes later. I have a shower, then I have breakfast with my dad at half past seven. The school bus comes at ten past eight. Lessons start at nine and finish at twenty past three. After school, I go to the drama club on Tuesdays. I have dinner at six and I go to bed at half past nine. » a) What time does Grace get up? b) How long is her school day, from the start to the end of lessons? c) What does she do on Tuesdays after school? d) Write her bedtime in figures, with the 24-hour clock.",
              hint: "Pour a), ajoutez dix minutes à 6 h 45. Pour b), calculez la durée de 9 h à 15 h 20. Répondez par des phrases complètes, avec le -s de la 3e personne.",
              solution: [
                "a) Le réveil sonne à 6 h 45 ; dix minutes plus tard, il est 6 h 55. « She gets up at five to seven. »",
                "b) De 9 h à 15 h, il y a 6 heures ; de 15 h à 15 h 20, 20 minutes. « Her school day lasts six hours and twenty minutes. »",
                "c) « She goes to the drama club. » (le club de théâtre)",
                "d) Half past nine, le soir, c'est 9.30 p.m. : « Her bedtime is 21:30. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces heures dans l'ordre chronologique, de la plus tôt à la plus tard.",
            items: ["seven o'clock", "five past seven", "a quarter past seven", "half past seven", "twenty-five to eight", "a quarter to eight"],
          },
          quiz: [
            { q: "8:30 is...", options: ["half past eight", "half past seven", "half to nine", "eight and a half"], answer: 0, why: "La demie se dit half past + l'heure passée : half past eight." },
            { q: "10:40 is...", options: ["forty past ten", "twenty past ten", "a quarter to eleven", "twenty to eleven"], answer: 3, why: "Après la demie, on compte les minutes qui manquent : il manque 20 minutes pour 11 h." },
            { q: "Complete: I go to bed ___ ten o'clock.", options: ["on", "in", "at", "to"], answer: 2, why: "On emploie at devant une heure précise." },
            { q: "« Je rentre à la maison » in English is...", options: ["I go to home.", "I go home.", "I go at home.", "I go to the home."], answer: 1, why: "Go home s'emploie sans préposition et sans article." },
            { q: "2 p.m. is...", options: ["two o'clock at night", "two in the morning", "fourteen o'clock", "two in the afternoon"], answer: 3, why: "P.m. désigne les heures après midi : 2 p.m. = 14 h, two in the afternoon." },
          ],
          trap: "Traduire mot à mot « sept heures et demie » par « seven and half » ou dire « fourteen o'clock » : on dit half past seven, et dans la conversation on compte de 1 à 12, avec a.m. et p.m.",
          method: "Dessinez une horloge coupée en deux moitiés : à droite (de 0 à 30 minutes), on dit past et on compte depuis l'heure passée ; à gauche (de 31 à 59 minutes), on dit to et on compte ce qui manque jusqu'à l'heure suivante.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'maison-et-ville',
          title: 'Décrire sa maison et sa ville : « there is », « there are »',
          minutes: 30,
          objectives: [
            "Décrire un lieu avec there is et there are, aux formes affirmative, négative et interrogative.",
            "Employer some et any avec there is et there are.",
            "Nommer les pièces de la maison et les lieux de la ville.",
            "Situer un lieu avec next to, opposite, between, behind, in front of et near.",
          ],
          course: [
            {
              heading: "There is, there are : dire ce qu'il y a",
              paragraphs: [
                "Pour dire « il y a », l'anglais utilise there is devant un nom singulier et there are devant un nom pluriel. « There is a park near my house. » « There are two bedrooms upstairs. » À l'oral, there is se contracte en there's ; there are ne se contracte pas à l'écrit.",
                "Devant un nom indénombrable (que l'on ne peut pas compter, comme milk, water, bread ou furniture), on emploie there is : « There is some milk in the fridge. » Pour demander combien il y en a, on dit : « How many shops are there? »",
              ],
              box: { label: "Règle", text: "There is (there's) + nom singulier ou indénombrable : There's a cinema. There are + nom pluriel : There are three parks. How many ... are there?" },
            },
            {
              heading: "Négation, question, some et any",
              paragraphs: [
                "À la forme négative : there isn't (is not) et there aren't (are not). Pour la question, on inverse : « Is there a garden? » « Are there any shops? » Réponses courtes : « Yes, there is. », « No, there isn't. », « Yes, there are. », « No, there aren't. »",
                "Avec un pluriel ou un indénombrable, on emploie some dans les phrases affirmatives (des, du, quelques) et any dans les phrases négatives et les questions. « There are some trees in the garden. » « There aren't any trees in the street. » « Are there any museums in your town? »",
                "Attention : « il y a » suivi d'une durée ne se traduit pas par there is. « Il y a deux ans » se dit « two years ago » : vous verrez cette expression avec le prétérit.",
              ],
              box: { label: "À retenir", text: "Some à la forme affirmative : There are some shops. Any à la forme négative et dans les questions : There aren't any shops. Are there any shops?" },
            },
            {
              heading: "La maison",
              paragraphs: [
                "Une maison se dit a house, un appartement a flat en anglais britannique et an apartment en anglais américain. Les pièces : the kitchen (la cuisine), the living room (le salon), the dining room (la salle à manger), the bedroom (la chambre), the bathroom (la salle de bains), the toilet (les toilettes), the garden (le jardin), the garage. Upstairs signifie « en haut, à l'étage » et downstairs « en bas ».",
                "Attention aux étages : en anglais britannique, le rez-de-chaussée se dit the ground floor, et the first floor est le premier étage, comme en français. En anglais américain, en revanche, the first floor désigne le rez-de-chaussée. Quelques meubles : a bed, a desk (un bureau), a wardrobe (une armoire), a sofa, a table, a chair.",
              ],
            },
            {
              heading: "La ville et les prépositions de lieu",
              paragraphs: [
                "Les lieux de la ville : a library (une bibliothèque), a bookshop (une librairie), a bakery (une boulangerie), a supermarket, a post office (une poste), a town hall (une mairie), a train station (une gare), a swimming pool (une piscine), a sports centre, a museum, a cinema, a hospital, a park, a church (une église).",
                "Pour situer un lieu : next to (à côté de), opposite (en face de, de l'autre côté de la rue), between (entre), behind (derrière), in front of (devant), near (près de). « The bakery is next to the post office. » « The school is opposite the park. » « The café is between the bank and the library. »",
              ],
              box: { label: "Attention", text: "Library = bibliothèque (on y emprunte des livres) ; bookshop = librairie (on y achète des livres). In front of = devant ; opposite = en face, de l'autre côté." },
            },
          ],
          keyPoints: [
            "There is + singulier ou indénombrable ; there are + pluriel.",
            "Négation : there isn't, there aren't ; question : Is there...? Are there...?",
            "Some à la forme affirmative, any dans les négations et les questions.",
            "Royaume-Uni : ground floor = rez-de-chaussée ; first floor = premier étage.",
            "Library = bibliothèque ; bookshop = librairie.",
            "Next to, opposite, between, behind, in front of, near.",
          ],
          example: {
            statement: "Voici les informations sur une petite ville (données fictives) : une gare, deux supermarchés, trois parcs, pas de cinéma, pas de musée. Décrivez la ville en anglais, puis demandez s'il y a une piscine.",
            solution: [
              "Une gare, un nom singulier : « There is a train station. »",
              "Deux supermarchés et trois parcs, des pluriels : « There are two supermarkets and three parks. »",
              "Pas de cinéma, singulier à la forme négative : « There isn't a cinema. »",
              "Pas de musée : on peut employer le pluriel avec any : « There aren't any museums. »",
              "La question sur un nom singulier : « Is there a swimming pool? »",
              "Réponse : « There is a train station. There are two supermarkets and three parks. There isn't a cinema and there aren't any museums. Is there a swimming pool? »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec is ou are. a) There ___ a desk in my bedroom. b) There ___ three bedrooms upstairs. c) There ___ a lot of shops in the town centre. d) There ___ some milk in the fridge. e) ___ there a garden? f) ___ there any posters on the wall?",
              hint: "Regardez le nom qui suit : singulier ou indénombrable, is ; pluriel, are.",
              solution: [
                "a) is (a desk, singulier)",
                "b) are (three bedrooms, pluriel)",
                "c) are (a lot of shops : le nom shops est pluriel)",
                "d) is (milk est indénombrable)",
                "e) Is (a garden, singulier)",
                "f) Are (posters, pluriel)",
              ],
            },
            {
              level: 2,
              statement: "Mettez chaque phrase à la forme négative, puis à la forme interrogative. a) There is a garage. b) There are some trees in the street. c) There is a swimming pool near the school.",
              hint: "Ajoutez not (isn't, aren't) pour la négation, inversez pour la question, et remplacez some par any.",
              solution: [
                "a) There isn't a garage. Is there a garage?",
                "b) There aren't any trees in the street. Are there any trees in the street? (some devient any)",
                "c) There isn't a swimming pool near the school. Is there a swimming pool near the school?",
              ],
            },
            {
              level: 3,
              statement: "Défi. Cinq bâtiments sont alignés sur le même trottoir, numérotés de 1 à 5 de gauche à droite (rue inventée). Lisez les indices et retrouvez la place de chacun : « The café is the first building on the left. The library is next to the café. The bakery is between the library and the post office. The bank is next to the post office, on the right. » Puis écrivez une phrase avec there are pour décrire la rue et une phrase avec opposite (une école se trouve en face de la boulangerie).",
              hint: "Placez d'abord ce qui est certain (le café en 1), puis avancez indice par indice, de gauche à droite.",
              solution: [
                "Le café est le premier bâtiment à gauche : 1 = café.",
                "La bibliothèque est à côté du café : 2 = library.",
                "La boulangerie est entre la bibliothèque et la poste : 3 = bakery, donc 4 = post office.",
                "La banque est à droite de la poste : 5 = bank. Vérification : tous les indices sont respectés.",
                "Phrase avec there are : « There are five buildings in the street: a café, a library, a bakery, a post office and a bank. »",
                "Phrase avec opposite : « The school is opposite the bakery. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez ce que vous savez de there is, there are et des lieux.",
            statements: [
              { text: "« There are a park near my house » is correct.", true: false, why: "A park est singulier : There is a park near my house." },
              { text: "« Library » means « librairie ».", true: false, why: "C'est un faux ami : library = bibliothèque ; librairie = bookshop." },
              { text: "In British English, the first floor is above the ground floor.", true: true, why: "Au Royaume-Uni, ground floor = rez-de-chaussée et first floor = premier étage." },
              { text: "« Are there any shops? » is correct.", true: true, why: "Shops est pluriel et any s'emploie dans les questions." },
              { text: "« There isn't some cinemas » is correct.", true: false, why: "Avec un pluriel à la forme négative : There aren't any cinemas." },
              { text: "« Il y a deux ans » is « there are two years ».", true: false, why: "Il y a + durée se dit ago : two years ago." },
              { text: "« Opposite » means « en face de ».", true: true, why: "Opposite indique ce qui se trouve de l'autre côté, face à face." },
            ],
          },
          quiz: [
            { q: "Complete: There ___ two bathrooms in our house.", options: ["is", "be", "are", "has"], answer: 2, why: "Two bathrooms est un pluriel : there are." },
            { q: "Choose the correct question.", options: ["Is there any shops?", "Are there any shops?", "Are there some shop?", "There are any shops?"], answer: 1, why: "Avec un pluriel, la question est Are there any...?" },
            { q: "« Il n'y a pas de piscine » in English is...", options: ["There isn't a swimming pool.", "There aren't a swimming pool.", "It isn't a swimming pool.", "There not is a swimming pool."], answer: 0, why: "A swimming pool est singulier : there isn't a..." },
            { q: "Where can you borrow books for free?", options: ["at the bookshop", "at the bakery", "at the post office", "at the library"], answer: 3, why: "On emprunte des livres à la library (bibliothèque) ; on les achète au bookshop." },
            { q: "« En face de la gare » in English is...", options: ["opposite the station", "next to the station", "behind the station", "in front of the station"], answer: 0, why: "Opposite = en face de ; in front of = devant." },
          ],
          trap: "Employer there are avec un nom singulier (ou there is avec un pluriel), garder some dans une négation, et confondre library (bibliothèque) avec librairie (bookshop).",
          method: "Avant d'écrire there is ou there are, soulignez le nom qui suit : singulier ou indénombrable, is ; pluriel, are. Puis, dans une négation ou une question, remplacez some par any.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'meteo-saisons',
          title: 'La météo et les saisons',
          minutes: 25,
          objectives: [
            "Demander et dire le temps qu'il fait : What's the weather like? It's sunny.",
            "Former les adjectifs de la météo à partir des noms (sun → sunny).",
            "Nommer les saisons et les mois et les situer avec in.",
            "Lire une température en degrés Celsius et en degrés Fahrenheit.",
          ],
          course: [
            {
              heading: "Quel temps fait-il ?",
              paragraphs: [
                "Pour demander le temps qu'il fait, on dit : « What's the weather like today? » (mot à mot : comment est le temps aujourd'hui ?). On répond avec it's et un adjectif : « It's sunny. » (il y a du soleil), « It's cold. » (il fait froid).",
                "En anglais, le sujet it est obligatoire, même s'il ne désigne rien de précis. En français, on dit parfois « fait froid ! » à l'oral ; en anglais, il faut toujours dire « It's cold! ». Les adjectifs de température, du plus chaud au plus froid : hot (très chaud), warm (doux, chaud), cool (frais), cold (froid), freezing (glacial).",
              ],
              box: { label: "À retenir", text: "What's the weather like? It's sunny / cloudy / windy. Températures : hot, warm, cool, cold, freezing. Toujours le sujet it." },
            },
            {
              heading: "Des noms aux adjectifs",
              paragraphs: [
                "La plupart des adjectifs de la météo se forment en ajoutant -y au nom : rain → rainy (pluvieux), cloud → cloudy (nuageux), wind → windy (venteux), snow → snowy (neigeux), storm → stormy (orageux). Pour sun et fog, la consonne finale est doublée : sun → sunny, fog → foggy (il y a du brouillard).",
                "Pour dire ce qui se passe au moment où l'on parle, on utilise aussi les verbes rain et snow au présent en be + -ing : « It's raining. » (il pleut), « It's snowing. » (il neige). Pour une habitude, on emploie le présent simple : « It rains a lot in Scotland. » « It often snows in the Alps in winter. »",
              ],
              box: { label: "Règle", text: "Nom + -y : rainy, cloudy, windy, snowy, stormy. Consonne doublée : sunny, foggy. Maintenant : It's raining. Habitude : It rains a lot." },
            },
            {
              heading: "Les saisons et les mois",
              paragraphs: [
                "Les quatre saisons : spring (le printemps), summer (l'été), autumn (l'automne, que les Américains appellent fall) et winter (l'hiver). Les saisons s'écrivent en minuscules, mais les mois prennent une majuscule : January, February, March, April, May, June, July, August, September, October, November, December.",
                "Devant une saison ou un mois, on emploie in : in summer (ou in the summer), in winter, in July, in December. « My birthday is in March. » « It's hot in August. »",
                "Les saisons sont inversées dans l'hémisphère sud : en Australie ou en Nouvelle-Zélande, l'été va de décembre à février, et Noël se fête donc en été. Au Royaume-Uni, le climat est océanique : les hivers sont plutôt doux, les étés rarement très chauds, et il peut pleuvoir en toute saison.",
              ],
            },
            {
              heading: "Les températures : Celsius et Fahrenheit",
              paragraphs: [
                "Au Royaume-Uni, comme en France, les températures sont données en degrés Celsius : « It's twenty degrees. » (20 °C). Pour une température négative, on dit minus : -5 °C se lit « minus five degrees ».",
                "Aux États-Unis, on utilise les degrés Fahrenheit (°F). Quelques repères : l'eau gèle à 0 °C, soit 32 °F, et bout à 100 °C, soit 212 °F. Une belle journée à 20 °C correspond à 68 °F. Pour convertir des Celsius en Fahrenheit, on multiplie par 1,8 et on ajoute 32. Pour convertir des Fahrenheit en Celsius, on retire 32 et on divise par 1,8.",
              ],
              box: { label: "Formule", text: "°F = °C × 1,8 + 32. °C = (°F - 32) ÷ 1,8. Repères : 0 °C = 32 °F ; 20 °C = 68 °F ; 100 °C = 212 °F." },
            },
          ],
          keyPoints: [
            "What's the weather like? It's sunny, cloudy, windy, rainy, foggy, snowy.",
            "Sun → sunny et fog → foggy : la consonne est doublée.",
            "It's raining (maintenant) ; it rains a lot (habitude).",
            "Spring, summer, autumn (fall aux États-Unis), winter ; in summer, in July.",
            "Les mois prennent une majuscule, les saisons non.",
            "°F = °C × 1,8 + 32 ; 0 °C = 32 °F.",
          ],
          example: {
            statement: "Vous lisez la météo de New York : « Today: sunny, 77 °F. » Calculez la température en degrés Celsius, puis décrivez le temps en anglais en une phrase. Faut-il un manteau ?",
            solution: [
              "On retire 32 : 77 - 32 = 45.",
              "On divise par 1,8 : 45 ÷ 1,8 = 25. Il fait donc 25 °C.",
              "Vérification dans l'autre sens : 25 × 1,8 = 45, et 45 + 32 = 77 °F.",
              "Décrire avec it's et des adjectifs : « It's sunny and warm: it's twenty-five degrees. »",
              "Réponse : il fait 25 °C et beau, aucun manteau n'est nécessaire. « It's sunny and warm: it's twenty-five degrees. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Formez l'adjectif de météo correspondant à chaque nom, puis écrivez une phrase avec It's : a) sun ; b) wind ; c) cloud ; d) fog ; e) snow ; f) rain.",
              hint: "Ajoutez -y ; deux noms doublent leur consonne finale.",
              solution: [
                "a) sun → sunny : It's sunny. (n doublé)",
                "b) wind → windy : It's windy.",
                "c) cloud → cloudy : It's cloudy.",
                "d) fog → foggy : It's foggy. (g doublé)",
                "e) snow → snowy : It's snowy.",
                "f) rain → rainy : It's rainy.",
              ],
            },
            {
              level: 2,
              statement: "Voici une carte météo du Royaume-Uni (données fictives) : London, pluie, 12 °C ; Edinburgh, neige, -2 °C ; Cardiff, vent, 8 °C ; Belfast, nuages, 10 °C. Écrivez une phrase par ville, en disant ce qui se passe maintenant et la température, puis posez la question qui correspond à la réponse sur Edinburgh.",
              hint: "Pour la pluie et la neige en ce moment, utilisez It's raining et It's snowing. Pour -2 °C, pensez à minus.",
              solution: [
                "London : « In London, it's raining and it's twelve degrees. »",
                "Edinburgh : « In Edinburgh, it's snowing and it's minus two degrees: it's freezing. »",
                "Cardiff : « In Cardiff, it's windy and it's eight degrees. »",
                "Belfast : « In Belfast, it's cloudy and it's ten degrees. »",
                "Question : « What's the weather like in Edinburgh? »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Convertissez ces températures, puis choisissez l'adjectif qui convient parmi hot, cool et freezing pour les trois premières. a) 50 °F en °C. b) 95 °F en °C. c) 14 °F en °C. d) 30 °C en °F.",
              hint: "Pour passer des °F aux °C : retirez 32, puis divisez par 1,8. Pour passer des °C aux °F : multipliez par 1,8, puis ajoutez 32. Vérifiez chaque résultat dans l'autre sens.",
              solution: [
                "a) 50 - 32 = 18 ; 18 ÷ 1,8 = 10. 50 °F = 10 °C : « It's cool. »",
                "b) 95 - 32 = 63 ; 63 ÷ 1,8 = 35. 95 °F = 35 °C : « It's hot. »",
                "c) 14 - 32 = -18 ; -18 ÷ 1,8 = -10. 14 °F = -10 °C : « It's freezing. »",
                "d) 30 × 1,8 = 54 ; 54 + 32 = 86. 30 °C = 86 °F.",
                "Vérification de c) : -10 × 1,8 = -18, et -18 + 32 = 14 °F.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase anglaise à sa traduction.",
            pairs: [
              { left: "It's sunny.", right: "Il y a du soleil." },
              { left: "It's windy.", right: "Il y a du vent." },
              { left: "It's foggy.", right: "Il y a du brouillard." },
              { left: "It's raining.", right: "Il pleut." },
              { left: "It's freezing.", right: "Il fait un froid glacial." },
              { left: "in autumn", right: "en automne" },
            ],
          },
          quiz: [
            { q: "What's the weather like? « Il y a du soleil. »", options: ["It's sun.", "It's sunny.", "It sunny.", "There is sunny."], answer: 1, why: "On emploie it's et l'adjectif sunny, formé sur sun avec un n doublé." },
            { q: "In American English, « l'automne » is...", options: ["autumn", "winter", "fall", "spring"], answer: 2, why: "Les Américains disent fall ; les Britanniques disent autumn." },
            { q: "Choose the correct sentence.", options: ["In winter, it snow often.", "It's snowing often in winter.", "In the winter, snows a lot.", "It often snows in winter."], answer: 3, why: "Une habitude se dit au présent simple, avec le sujet it, le -s et l'adverbe avant le verbe." },
            { q: "32 °F is...", options: ["0 °C", "32 °C", "10 °C", "-32 °C"], answer: 0, why: "32 °F est la température à laquelle l'eau gèle : 0 °C." },
            { q: "Complete: My birthday is ___ March.", options: ["on", "at", "in"], answer: 2, why: "On emploie in devant un mois ou une saison." },
          ],
          trap: "Oublier le sujet it (« Is cold today ») ou employer le nom à la place de l'adjectif (« It's sun ») : on dit It's cold today et It's sunny, avec l'adjectif en -y.",
          method: "Chaque matin, regardez par la fenêtre et décrivez le temps en une phrase anglaise (« It's cloudy and cool: it's eleven degrees ») : ce rituel de dix secondes fixe le vocabulaire durablement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'be-ing',
          title: 'Ce qui se passe maintenant : le présent en « be + -ing »',
          minutes: 35,
          objectives: [
            "Former le présent en be + -ing aux formes affirmative, négative et interrogative.",
            "Appliquer les règles d'orthographe de la terminaison -ing.",
            "Décrire une action en cours au moment où l'on parle ou une scène sur une image.",
            "Choisir entre le présent simple (habitude) et le présent en be + -ing (action en cours).",
          ],
          course: [
            {
              heading: "La formation : be + verbe en -ing",
              paragraphs: [
                "Le présent en be + -ing (on l'appelle aussi présent continu ou present continuous) se forme avec le verbe be conjugué au présent (am, is, are), suivi du verbe en -ing : « I'm reading. » « She's watching TV. » « They're playing football. »",
                "À la forme négative, on ajoute not à be : « I'm not sleeping. » « He isn't working. » « We aren't playing. » Pour la question, on inverse be et le sujet : « Are you listening? » « Is it raining? » Réponses courtes : « Yes, I am. », « No, it isn't. » La question la plus utile est : « What are you doing? » (Qu'est-ce que vous faites ?)",
              ],
              box: { label: "Formule", text: "Sujet + am / is / are + verbe en -ing. Négation : I'm not, he isn't, they aren't + -ing. Question : Are you...? What is she doing?" },
            },
            {
              heading: "L'orthographe de la terminaison -ing",
              paragraphs: [
                "En général, on ajoute simplement -ing : read → reading, play → playing, study → studying, watch → watching. Quand le verbe se termine par un e muet, on supprime ce e : write → writing, dance → dancing, make → making, come → coming. Mais be → being et see → seeing gardent leur e.",
                "Pour les verbes courts d'une syllabe qui se terminent par une consonne précédée d'une seule voyelle, on double la consonne finale : swim → swimming, run → running, sit → sitting, get → getting, stop → stopping. On ne double jamais w, x et y : snow → snowing, fix → fixing, play → playing.",
                "Enfin, les verbes en -ie changent ie en y : lie → lying (être allongé, mentir), die → dying, tie → tying (nouer).",
              ],
              box: { label: "Règle", text: "Cas général : + -ing. E muet supprimé : write → writing. Consonne doublée : swim → swimming, run → running. -ie → -ying : lie → lying." },
            },
            {
              heading: "Quand employer be + -ing ?",
              paragraphs: [
                "On emploie be + -ing pour une action en cours au moment où l'on parle : « Shh! The baby is sleeping. » Des mots signaux l'annoncent souvent : now (maintenant), right now, at the moment (en ce moment), Look! (Regardez !), Listen! (Écoutez !).",
                "C'est aussi le temps de la description d'une image ou d'une photo : on décrit ce que les personnages sont en train de faire. « In this picture, a girl is reading under a tree and two boys are playing football. » Il sert enfin pour une situation temporaire : « This week, I'm staying with my grandparents. »",
              ],
            },
            {
              heading: "Présent simple ou be + -ing ?",
              paragraphs: [
                "Le présent simple exprime une habitude ou une vérité générale ; be + -ing exprime une action en cours, limitée dans le temps. Comparez : « I usually walk to school, but today I'm taking the bus. » « My dad works in a bank. Right now, he's having lunch. » Les mots signaux vous guident : every day, usually, often, never appellent le présent simple ; now, at the moment, Look! appellent be + -ing.",
                "Certains verbes, qui expriment un état ou une pensée plutôt qu'une action, ne s'emploient normalement pas en be + -ing, même pour parler de maintenant : like, love, hate, want, need, know, understand, believe. On dit « I know the answer » et « I want a drink now », et non « I'm knowing » ou « I'm wanting ».",
              ],
              box: { label: "À retenir", text: "Habitude (every day, usually) : présent simple. En ce moment (now, Look!) : be + -ing. Like, love, hate, want, need, know, understand : présent simple, même maintenant." },
            },
          ],
          keyPoints: [
            "Be + -ing = am / is / are + verbe en -ing : she's reading.",
            "E muet supprimé (writing), consonne doublée (swimming), -ie → -ying (lying).",
            "Action en cours : now, at the moment, Look!, Listen!",
            "Description d'une image : In this picture, a boy is running.",
            "Habitude : présent simple ; en ce moment : be + -ing.",
            "Like, want, know, understand : pas de -ing, même maintenant.",
          ],
          example: {
            statement: "Complétez avec le présent simple ou le présent en be + -ing. 1) Shh! The baby ___ (sleep). 2) My dad usually ___ (cook) on Sundays, but today my mum ___ (cook). 3) I ___ (not understand) this exercise.",
            solution: [
              "1) Shh! montre une action en cours : be + -ing. « The baby is sleeping. »",
              "2) Usually signale une habitude : présent simple, avec le -s de la 3e personne, « my dad usually cooks ». But today signale ce qui se passe aujourd'hui, à la place de l'habitude : be + -ing, « my mum is cooking ».",
              "3) Understand est un verbe d'état : présent simple, même maintenant. « I don't understand this exercise. »",
              "Réponses : is sleeping ; cooks, is cooking ; don't understand.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez la forme en -ing de ces verbes : write, swim, play, read, run, lie, dance, sit, study, get.",
              hint: "E muet supprimé, consonne finale doublée pour les verbes courts, -ie qui devient -y : appliquez les règles une par une.",
              solution: [
                "write → writing (e supprimé) ; swim → swimming (m doublé) ; play → playing (on ne double pas y) ; read → reading ; run → running (n doublé).",
                "lie → lying (-ie → -y) ; dance → dancing (e supprimé) ; sit → sitting (t doublé) ; study → studying ; get → getting (t doublé).",
              ],
            },
            {
              level: 2,
              statement: "C'est samedi après-midi, au parc (scène inventée). Écrivez une phrase en be + -ing pour chaque indication. a) Tom / play football. b) Ella and Sam / eat ice creams. c) a dog / run after a ball. d) Mrs Lee / not read, sleep on a bench. e) Posez la question : what / the children / do?",
              hint: "Conjuguez be avec le sujet (is ou are), puis ajoutez le verbe en -ing en respectant l'orthographe.",
              solution: [
                "a) Tom is playing football.",
                "b) Ella and Sam are eating ice creams.",
                "c) A dog is running after a ball. (run → running)",
                "d) Mrs Lee isn't reading, she's sleeping on a bench.",
                "e) What are the children doing?",
              ],
            },
            {
              level: 3,
              statement: "Défi. Complétez ce message avec le présent simple ou le présent en be + -ing, puis justifiez chaque choix. « Hi Zoe! I (1. write) to you from my grandparents' house. I usually (2. spend) the holidays here. Right now, my grandad (3. make) a cake and my sister (4. help) him. It (5. rain) at the moment, so we (6. not go) out. I (7. love) this house! What (8. you / do) now? »",
              hint: "Cherchez les mots signaux : usually, right now, at the moment, now. Attention au verbe love.",
              solution: [
                "1) am writing : l'action se déroule au moment où Zoe lit qu'on lui écrit.",
                "2) spend : usually signale une habitude, présent simple.",
                "3) is making : right now, action en cours (make perd son e).",
                "4) is helping : action en cours, au même moment.",
                "5) is raining : at the moment, action en cours.",
                "6) aren't going : conséquence de la pluie, en ce moment.",
                "7) love : verbe d'état, toujours au présent simple.",
                "8) are you doing : now, question en be + -ing.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque verbe à sa forme en -ing.",
            pairs: [
              { left: "swim", right: "swimming" },
              { left: "write", right: "writing" },
              { left: "play", right: "playing" },
              { left: "lie", right: "lying" },
              { left: "run", right: "running" },
              { left: "see", right: "seeing" },
            ],
          },
          quiz: [
            { q: "Complete: Look! It ___ snowing.", options: ["are", "does", "be", "is"], answer: 3, why: "Be + -ing : avec it, be se conjugue is." },
            { q: "Choose the correct -ing form of « swim ».", options: ["swimming", "swiming", "swimeing"], answer: 0, why: "Swim est un verbe court terminé par voyelle + consonne : on double le m." },
            { q: "Which sentence describes a habit?", options: ["I'm reading a comic at the moment.", "I read a comic every evening.", "Look! I'm reading a comic."], answer: 1, why: "Every evening signale une habitude, donc le présent simple." },
            { q: "Choose the correct sentence.", options: ["I'm knowing the answer.", "I knowing the answer.", "I know the answer.", "I am know the answer."], answer: 2, why: "Know est un verbe d'état : il reste au présent simple." },
            { q: "« Qu'est-ce que vous faites ? » (en ce moment) is...", options: ["What are you doing?", "What do you do?", "What you are doing?", "What are you do?"], answer: 0, why: "Une action en cours se demande en be + -ing, avec l'inversion de be et du sujet." },
          ],
          trap: "Oublier l'auxiliaire be (« I watching TV »), employer be + -ing pour une habitude (« I'm playing tennis every Saturday ») ou avec un verbe d'état (« I'm knowing ») : on dit I'm watching TV, I play tennis every Saturday, I know.",
          method: "Avant de choisir le temps, cherchez les mots signaux : every day, usually, often appellent le présent simple ; now, at the moment, Look!, Listen! appellent be + -ing. Puis vérifiez que be est bien conjugué devant le verbe en -ing.",
        },
      ],
    },
  ],
}
