import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-3e',
  chapters: [
    /* ==================================================================== */
    /* RENCONTRES AVEC D'AUTRES CULTURES : THE ENGLISH-SPEAKING WORLD         */
    /* ==================================================================== */
    {
      id: 'english-speaking-world',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'english-speaking-countries',
          title: "Les pays anglophones dans le monde",
          minutes: 30,
          objectives: [
            "Situer les principaux pays anglophones sur les cinq continents et nommer leur capitale.",
            "Nommer en anglais les pays, les nationalités et les langues, avec la majuscule et l'article corrects.",
            "Expliquer en anglais pourquoi l'anglais est parlé dans tant de pays (Empire britannique, Commonwealth, influence des États-Unis).",
          ],
          course: [
            {
              heading: "Une langue parlée sur tous les continents",
              paragraphs: [
                "L'anglais est aujourd'hui l'une des langues les plus parlées au monde. On distingue les locuteurs natifs (native speakers), pour qui c'est la langue maternelle (mother tongue), et les personnes qui l'ont apprise comme deuxième langue ou comme langue étrangère. Au total, plus d'un milliard de personnes peuvent communiquer en anglais : c'est la grande langue internationale des sciences, du commerce, d'Internet et des voyages.",
                "On le parle sur tous les continents. En Europe : the United Kingdom (le Royaume-Uni) et Ireland (l'Irlande). En Amérique du Nord : the United States et Canada. En Océanie : Australia et New Zealand. En Afrique : South Africa, Nigeria, Kenya ou Ghana, par exemple. En Asie : India, Singapore ou the Philippines. Dans les Caraïbes : Jamaica, the Bahamas ou Barbados.",
                "Attention : le Royaume-Uni (the United Kingdom, the UK) réunit quatre nations : England, Scotland, Wales et Northern Ireland. La Grande-Bretagne (Great Britain) est l'île qui regroupe seulement England, Scotland et Wales. Un Écossais est donc British, mais il n'est pas English !",
              ],
              box: { label: "Repère", text: "Capitales : London (the UK), Dublin (Ireland), Washington, D.C. (the USA), Ottawa (Canada), Canberra (Australia), Wellington (New Zealand), Pretoria (capitale administrative de South Africa), New Delhi (India)." },
            },
            {
              heading: "Pourquoi l'anglais s'est-il répandu ?",
              paragraphs: [
                "À partir du XVIIe siècle, l'Angleterre puis le Royaume-Uni fondent des colonies sur plusieurs continents : en Amérique du Nord (les treize colonies, qui deviennent les États-Unis après la déclaration d'indépendance de 1776), en Australie (arrivée des premiers colons britanniques en 1788), en Inde, en Afrique. Au XIXe siècle, l'Empire britannique est le plus vaste du monde : on disait que le soleil ne s'y couchait jamais.",
                "Après les indépendances, beaucoup d'anciennes colonies ont gardé l'anglais, souvent à côté d'autres langues. En Inde, l'anglais est langue officielle associée, avec le hindi. Au Canada, l'anglais et le français sont les deux langues officielles. En Irlande, l'irlandais (Irish) est la première langue officielle et l'anglais la seconde. En Afrique du Sud, l'anglais n'est qu'une des nombreuses langues officielles. Au XXe siècle, la puissance économique et culturelle des États-Unis (cinéma, musique, technologies) a encore renforcé la place de l'anglais.",
                "Aujourd'hui, le Commonwealth of Nations réunit 56 pays, pour la plupart d'anciens territoires de l'Empire britannique. Ses membres coopèrent librement, et le roi Charles III en est le chef (Head of the Commonwealth) depuis 2022.",
              ],
              box: { label: "À retenir", text: "L'anglais s'est répandu avec la colonisation britannique (du XVIIe au XXe siècle), puis grâce à l'influence des États-Unis. Dans beaucoup de pays, il partage le statut de langue officielle avec d'autres langues." },
            },
            {
              heading: "Pays, nationalités et langues : la grammaire",
              paragraphs: [
                "En anglais, les noms de pays, de nationalités et de langues prennent toujours une majuscule, même quand ce sont des adjectifs : « She is Canadian », « I speak English », « an Irish song ». C'est une grande différence avec le français, où l'on écrit « une chanson irlandaise ».",
                "La plupart des noms de pays s'emploient sans article : « I live in France », « She comes from Australia ». Mais on met « the » devant les pays dont le nom contient un mot comme United, Kingdom ou Republic, ou dont le nom est au pluriel : the United States, the United Kingdom, the Republic of Ireland, the Philippines, the Bahamas, the Netherlands.",
                "Retenez quelques nationalités : British, English, Scottish, Welsh, Irish, American, Canadian, Australian, New Zealander (on dit aussi familièrement a Kiwi), South African, Indian, Nigerian, Jamaican. Pour parler d'un peuple entier, on dit « the British », « the Irish », « the Americans », « the Australians ».",
                "Pour présenter un pays, réutilisez ces structures : « Canada is located in North America. », « Its capital is Ottawa. », « English and French are spoken there. », « It is a member of the Commonwealth. »",
              ],
              box: { label: "Règle", text: "Majuscule obligatoire pour les pays, les nationalités et les langues (English, Irish). Article « the » devant les noms de pays formés avec United, Kingdom, Republic ou au pluriel (the USA, the UK, the Philippines)." },
            },
          ],
          keyPoints: [
            "L'anglais est parlé sur les cinq continents, par des locuteurs natifs et par plus d'un milliard de personnes au total.",
            "The UK = England, Scotland, Wales, Northern Ireland ; Great Britain = England, Scotland, Wales.",
            "Capitales : London, Dublin, Washington, D.C., Ottawa, Canberra, Wellington, New Delhi.",
            "L'anglais s'est diffusé avec l'Empire britannique, puis avec l'influence des États-Unis au XXe siècle.",
            "Le Commonwealth réunit 56 pays ; Charles III en est le chef depuis 2022.",
            "Majuscule pour les nationalités et les langues ; « the » devant the USA, the UK, the Philippines.",
          ],
          example: {
            statement: "Présentez l'Australie en anglais en quatre phrases : situation, capitale, langue, lien historique avec le Royaume-Uni.",
            solution: [
              "Étape 1, situer le pays avec « is located in » : « Australia is located in Oceania, in the southern hemisphere. »",
              "Étape 2, donner la capitale (attention, ce n'est pas Sydney) : « Its capital is Canberra. »",
              "Étape 3, la langue, avec une tournure passive très fréquente : « English is the main language spoken there. »",
              "Étape 4, le lien historique : « It was a British colony: the first British settlers arrived in 1788, and today Australia is a member of the Commonwealth. »",
              "Réponse : Australia is located in Oceania, in the southern hemisphere. Its capital is Canberra. English is the main language spoken there. It was a British colony: the first British settlers arrived in 1788, and today Australia is a member of the Commonwealth.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la nationalité en anglais (attention à la majuscule) : a) People from Canada are ... b) A person from Wales is ... c) A person from New Zealand is a ... d) People from Ireland are ... e) A person from India is ...",
              hint: "Les nationalités s'écrivent toujours avec une majuscule en anglais. Pensez aux terminaisons -ian, -ish et -er.",
              solution: [
                "a) People from Canada are Canadian.",
                "b) A person from Wales is Welsh.",
                "c) A person from New Zealand is a New Zealander (familièrement, a Kiwi).",
                "d) People from Ireland are Irish.",
                "e) A person from India is Indian.",
                "Réponse : Canadian, Welsh, New Zealander, Irish, Indian, toujours avec une majuscule.",
              ],
            },
            {
              level: 2,
              statement: "Corrigez les erreurs (une ou deux par phrase) : a) I live in the France but my cousin lives in United States. b) She speaks english and french. c) Edinburgh is the capital of England. d) Sydney is the capital of australia.",
              hint: "Vérifiez trois choses : l'article the devant les pays, les majuscules, et les capitales (Edinburgh se trouve en Écosse).",
              solution: [
                "a) Pas d'article devant France, mais the devant United States : « I live in France but my cousin lives in the United States. »",
                "b) Les langues prennent une majuscule : « She speaks English and French. »",
                "c) Edinburgh est la capitale de l'Écosse ; celle de l'Angleterre est London : « Edinburgh is the capital of Scotland. »",
                "d) Sydney est une très grande ville, mais la capitale de l'Australie est Canberra, et Australia prend une majuscule : « Canberra is the capital of Australia. »",
                "Réponse : I live in France but my cousin lives in the United States. She speaks English and French. Edinburgh is the capital of Scotland. Canberra is the capital of Australia.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 60 à 80 mots). Votre collège prépare un échange avec un établissement d'un pays anglophone de votre choix. Rédigez en anglais un paragraphe pour présenter ce pays à votre classe : situation, capitale, langue(s), un fait historique et la raison pour laquelle vous aimeriez le visiter.",
              hint: "Écrivez une phrase par information demandée, puis reliez-les avec and, but, because. Vérifiez les majuscules et l'article the.",
              solution: [
                "Étape 1, le plan en cinq points : situation (is located in), capitale (Its capital is), langues (are spoken / are official), histoire (au past simple), motivation (I would like to... because...).",
                "Étape 2, la rédaction, par exemple sur l'Irlande : « I would like to present Ireland. It is an island located in the west of Europe, next to Great Britain. Its capital is Dublin. Two languages are official: Irish and English, but most people speak English in everyday life. Most of Ireland became independent from the United Kingdom in 1922. I would love to visit it because I like Irish music and its green landscapes. »",
                "Étape 3, la vérification : environ 75 mots ; majuscules à Ireland, Irish, English, Dublin, Great Britain ; article the devant the United Kingdom ; past simple pour le fait historique (became).",
                "Réponse : un paragraphe de 60 à 80 mots qui donne les cinq informations demandées, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque pays anglophone à sa capitale.",
            pairs: [
              { left: "The United States", right: "Washington, D.C." },
              { left: "Canada", right: "Ottawa" },
              { left: "Australia", right: "Canberra" },
              { left: "New Zealand", right: "Wellington" },
              { left: "Ireland", right: "Dublin" },
              { left: "India", right: "New Delhi" },
            ],
          },
          quiz: [
            { q: "Which nation is NOT part of the United Kingdom?", options: ["Wales", "The Republic of Ireland", "Scotland", "Northern Ireland"], answer: 1, why: "La république d'Irlande est un État indépendant ; seule l'Irlande du Nord (Northern Ireland) fait partie du Royaume-Uni." },
            { q: "What is the capital of Canada?", options: ["Toronto", "Montreal", "Vancouver", "Ottawa"], answer: 3, why: "Toronto et Montréal sont les plus grandes villes du Canada, mais la capitale est Ottawa." },
            { q: "Choose the correct sentence.", options: ["My best friend is Scottish.", "My best friend is scottish.", "My best friend is a scottish.", "My best friend is the Scottish."], answer: 0, why: "Les nationalités prennent une majuscule en anglais et s'emploient comme adjectifs, sans article." },
            { q: "Complete: 'I went to ... last summer.' Which country needs 'the'?", options: ["Philippines", "Australia", "New Zealand", "South Africa"], answer: 0, why: "On dit the Philippines, car le nom du pays est au pluriel ; les autres pays s'emploient sans article." },
            { q: "Who has been the Head of the Commonwealth since 2022?", options: ["Queen Elizabeth II", "King Charles III", "The British Prime Minister", "The President of India"], answer: 1, why: "À la mort d'Elizabeth II en 2022, son fils Charles III est devenu roi et chef du Commonwealth." },
          ],
          trap: "Confondre England et the United Kingdom (dire qu'un Écossais est « English ») et oublier la majuscule des nationalités : on écrit « She is Irish », jamais « she is irish ».",
          method: "Apprenez les pays avec des fiches à trois colonnes (pays, capitale, nationalité) et récitez-les à voix haute devant une carte du monde : la mémoire visuelle de la carte aide à retenir les capitales.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'stereotypes',
          title: "Clichés et stéréotypes : dépasser les idées reçues",
          minutes: 25,
          objectives: [
            "Identifier un stéréotype et expliquer en anglais pourquoi il s'agit d'une généralisation.",
            "Nuancer une affirmation avec les quantifieurs all, most, many, some, few et no.",
            "Réagir à une idée reçue et exprimer son point de vue avec « In fact », « Actually » et « I used to think... ».",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un stéréotype ?",
              paragraphs: [
                "Un stéréotype (a stereotype) est une idée toute faite, simplifiée et souvent exagérée, que l'on applique à tout un groupe de personnes : un peuple, une région, un âge, un sexe. Un cliché (a cliché) est une image banale, répétée sans cesse. Le préjugé (a prejudice) va plus loin : c'est un jugement, souvent négatif, porté avant même de connaître les personnes.",
                "Les stéréotypes ne viennent pas de nulle part : ils partent parfois d'un fait réel (beaucoup de Britanniques boivent du thé), mais ils le généralisent à tout le monde (« All British people drink tea at five o'clock »). Les films, les publicités et les blagues les entretiennent. Le danger est de réduire une personne à son groupe, au lieu de la voir comme un individu.",
              ],
              box: { label: "Définition", text: "A stereotype is a fixed and oversimplified idea about a group of people. To generalise = généraliser. To be open-minded = avoir l'esprit ouvert ; to be narrow-minded = avoir l'esprit étroit." },
            },
            {
              heading: "Quelques clichés sur le monde anglophone (et sur nous)",
              paragraphs: [
                "Les Britanniques seraient tous polis, feraient sagement la queue (to queue), boiraient du thé et parleraient sans cesse de la pluie. Les Américains mangeraient uniquement des hamburgers et rouleraient dans d'énormes voitures. Les Australiens passeraient leurs journées à surfer au milieu des kangourous. Ces images contiennent parfois un grain de vérité, mais aucune ne décrit des pays de plusieurs millions d'habitants, tous différents les uns des autres.",
                "Les Français ont aussi leurs clichés vus de l'étranger : le béret, la baguette sous le bras, le fromage, des gens qui râlent et qui sont toujours en grève. Les Britanniques surnomment parfois les Français « Frogs », un surnom moqueur qui vient des cuisses de grenouille. Se rendre compte que l'on est soi-même l'objet de stéréotypes aide à comprendre ce qu'ils ont d'injuste.",
                "La réalité est plus riche : les États-Unis comptent des habitants venus du monde entier, et l'espagnol y est parlé dans de nombreuses familles ; à Londres, on entend un très grand nombre de langues ; en Australie, les peuples aborigènes vivent sur le continent depuis des dizaines de milliers d'années. Dépasser les idées reçues, c'est s'informer, voyager et échanger avec des personnes réelles.",
              ],
            },
            {
              heading: "Nuancer : les quantifieurs",
              paragraphs: [
                "Pour éviter de généraliser, on remplace « all » (tous) par un mot plus juste. Du plus large au plus restreint : all (tous), most (la plupart), many (beaucoup), some (certains), few (peu), no (aucun). Exemple : « Not all British people drink tea. Some of them prefer coffee. »",
                "Attention à la construction : on dit « most people », « most British people » (sans of ni article), mais « most of the people in my class », « most of them » (avec of quand suit un déterminant ou un pronom). On ne dit jamais « most of people ». De même, « people » est un pluriel : « People are friendly », jamais « people is ».",
              ],
              box: { label: "Règle", text: "all / most / many / some / few / no + nom pluriel : « Most teenagers use a phone. » Devant un déterminant ou un pronom, on ajoute of : « most of my friends », « some of them ». Jamais « most of people »." },
            },
            {
              heading: "Réagir à une idée reçue",
              paragraphs: [
                "Pour contredire poliment une idée reçue, utilisez : « That's a cliché. », « It's not true that... », « In fact, ... », « Actually, ... ». Attention, « actually » est un faux ami : il signifie « en fait », et non « actuellement » (qui se dit « currently » ou « nowadays »).",
                "Pour montrer que votre regard a changé, employez « used to » : « I used to think that British food was bad, but when I went to London I discovered lots of delicious dishes. » Pour conclure : « We shouldn't judge people by their nationality. », « Everyone is different. »",
              ],
              box: { label: "À retenir", text: "That's a stereotype / a cliché. Not all... In fact... Actually (= en fait)... I used to think... but now I know... We shouldn't judge people by their nationality." },
            },
          ],
          keyPoints: [
            "Stereotype : idée simplifiée appliquée à tout un groupe ; prejudice : jugement porté avant de connaître.",
            "Un stéréotype part souvent d'un petit fait réel, généralisé à tous.",
            "Nuancer : all, most, many, some, few, no (du plus large au plus restreint).",
            "Most people, most British people, mais most of the people, most of them ; jamais most of people.",
            "Actually = en fait (faux ami) ; actuellement = currently, nowadays.",
            "Exprimer un changement d'avis : I used to think... but now I know...",
          ],
          example: {
            statement: "Nuancez et commentez ce cliché en anglais, en deux ou trois phrases : « All Americans eat fast food every day. »",
            solution: [
              "Étape 1, nommer le cliché : « That's a stereotype. »",
              "Étape 2, nier la généralisation et remplacer all par un quantifieur plus juste : « Not all Americans eat fast food every day: some of them do, but others prefer home-made meals. »",
              "Étape 3, élargir avec un connecteur : « In fact, American food is very varied: there are Mexican, Italian, Chinese or Cajun dishes, for example. »",
              "Réponse : That's a stereotype. Not all Americans eat fast food every day: some of them do, but others prefer home-made meals. In fact, American food is very varied.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez la bonne réponse : a) (All / Some) British people drink tea; others prefer coffee. b) (Few / Many) tourists visit London every year: it is one of the most visited cities in the world. c) (No / Every) country is made of only one type of person. d) (Most / Most of) my friends like American films. e) (Most / Most of) teenagers have a mobile phone.",
              hint: "Lisez toute la phrase : la fin donne souvent un indice. Devant un déterminant comme my, the ou un pronom, il faut of.",
              solution: [
                "a) Some : la suite (others prefer coffee) montre que ce n'est pas le cas de tous.",
                "b) Many : une des villes les plus visitées accueille beaucoup de touristes.",
                "c) No : aucun pays n'est fait d'un seul type de personne.",
                "d) Most of : on ajoute of devant le déterminant my.",
                "e) Most : pas de déterminant devant teenagers, donc pas de of.",
                "Réponse : Some, Many, No, Most of, Most.",
              ],
            },
            {
              level: 2,
              statement: "Transformez ces stéréotypes en phrases nuancées, avec un quantifieur et un connecteur (In fact, Actually, but) : a) All Australians surf. b) British food is always bad. c) All French people wear a beret.",
              hint: "Commencez par Not all... ou par un quantifieur (some, few), puis ajoutez une information qui corrige le cliché.",
              solution: [
                "a) « Not all Australians surf. Some of them do, but many Australians live far from the sea, in the countryside or in the desert. »",
                "b) « British food isn't always bad. In fact, there are lots of delicious dishes, and in big cities you can eat food from all over the world. »",
                "c) « Actually, very few French people wear a beret nowadays: it is mostly a cliché from old films. »",
                "Réponse : chaque phrase remplace la généralisation (all, always) par une nuance (not all, isn't always, very few) et ajoute une information introduite par but, In fact ou Actually.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 60 à 80 mots). Sur un forum, un adolescent écrit : « I'm going to spend a week in London. I'm sure it will rain every day, people will be cold and unfriendly, and the food will be horrible! » Répondez-lui en anglais : nuancez au moins deux clichés, utilisez « used to » et donnez-lui un conseil.",
              hint: "Prévoyez quatre parties : une réaction (Don't worry, these are clichés), votre expérience avec used to, une nuance avec un quantifieur, un conseil avec should ou un impératif.",
              solution: [
                "Étape 1, repérer les trois clichés du message : la pluie, des gens froids, une nourriture horrible.",
                "Étape 2, rédiger, par exemple : « Hi! Don't worry, these are just clichés. I used to think that London was always grey, but when I went there last spring, it was sunny most of the time. Of course it sometimes rains, so take an umbrella! In fact, most people I met were friendly and helpful. And the food isn't horrible at all: you can eat dishes from all over the world. My advice: go with an open mind and enjoy your trip! »",
                "Étape 3, vérifier la consigne : used to (I used to think), deux clichés nuancés au moins (la pluie, les gens, la nourriture), un quantifieur (most), un conseil (take an umbrella, go with an open mind), environ 80 mots.",
                "Réponse : une réponse d'environ 80 mots qui nuance les clichés et respecte les trois contraintes, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les stéréotypes et sur la langue pour les nuancer.",
            statements: [
              { text: "A stereotype describes every member of a group accurately.", true: false, why: "Un stéréotype simplifie et généralise : il ne décrit jamais correctement chaque individu." },
              { text: "A stereotype often starts from a small real fact that is generalised.", true: true, why: "Par exemple, beaucoup de Britanniques boivent du thé, mais pas tous." },
              { text: "« Actually » means « actuellement ».", true: false, why: "C'est un faux ami : actually signifie « en fait » ; actuellement se dit currently ou nowadays." },
              { text: "« Most of people » is correct English.", true: false, why: "On dit most people ; on n'emploie of que devant un déterminant ou un pronom (most of the people, most of them)." },
              { text: "« Not all British people drink tea » nuances a cliché.", true: true, why: "Not all remplace la généralisation par une idée plus juste." },
              { text: "« People » is a plural noun: we say « people are ».", true: true, why: "People est toujours pluriel en anglais, même sans s." },
              { text: "Being narrow-minded means being open to other cultures.", true: false, why: "Narrow-minded signifie « à l'esprit étroit » ; l'esprit ouvert se dit open-minded." },
            ],
          },
          quiz: [
            { q: "What is a stereotype?", options: ["A true fact that applies to every single person", "A simplified idea about a whole group", "A type of British newspaper", "A polite way to disagree"], answer: 1, why: "Un stéréotype est une idée simplifiée et généralisée appliquée à tout un groupe." },
            { q: "Choose the correct sentence.", options: ["Most of people like music.", "Most people like music.", "The most people likes music.", "Most of people likes music."], answer: 1, why: "Sans déterminant, on dit most people, et people est pluriel (like, sans s)." },
            { q: "'Actually, I love British food.' What does 'actually' mean here?", options: ["actuellement", "autrefois", "en fait", "heureusement"], answer: 2, why: "Actually est un faux ami : il signifie « en fait », et sert souvent à corriger une idée reçue." },
            { q: "Which word refers to the smallest number of people?", options: ["many", "some", "most", "few"], answer: 3, why: "Few signifie « peu » : c'est le plus restreint des quatre (après lui, il ne reste que no)." },
            { q: "Complete: 'I ... think that all Americans were rich, but now I know it's not true.'", options: ["am used to", "use to", "was use to", "used to"], answer: 3, why: "Used to + base verbale exprime une habitude ou un état passé qui n'existe plus." },
          ],
          trap: "Écrire « most of people » ou « the most people » au lieu de « most people », et traduire « actuellement » par « actually », qui veut dire « en fait ».",
          method: "Pour nuancer à l'écrit, relisez chaque phrase en cherchant les mots all, every, always et never : demandez-vous s'ils sont vraiment vrais pour tout le monde, et remplacez-les si besoin par most, many, some, often ou sometimes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'relative-clauses',
          title: "Les propositions relatives : « who », « which », « that »",
          minutes: 30,
          objectives: [
            "Choisir le bon pronom relatif : who pour une personne, which pour une chose ou un animal, that pour les deux.",
            "Employer whose et where pour exprimer la possession et le lieu.",
            "Distinguer relative déterminative et relative non déterminative (entre virgules) et savoir quand omettre le pronom.",
            "Enrichir une description ou une définition en reliant deux phrases par une relative.",
          ],
          course: [
            {
              heading: "À quoi sert une proposition relative ?",
              paragraphs: [
                "Une proposition relative apporte une information sur un nom, appelé antécédent. Elle permet de relier deux phrases simples en une seule, plus riche. Au lieu de « I have a friend. She lives in Dublin. », on dit : « I have a friend who lives in Dublin. » Le pronom relatif (who) remplace le mot repris (She).",
                "En français, on choisit « qui » ou « que » selon la fonction du pronom (sujet ou complément). En anglais, on choisit d'abord selon la nature de l'antécédent : une personne, une chose, un lieu. C'est la principale différence à retenir.",
              ],
            },
            {
              heading: "Who, which, that",
              paragraphs: [
                "WHO s'emploie pour une personne : « The woman who runs the shop is from Jamaica. » WHICH s'emploie pour une chose ou un animal : « The film which I saw yesterday was set in Canada. » THAT peut remplacer who ou which dans les relatives déterminatives, c'est-à-dire sans virgule : « The book that I'm reading is about India. », « the man that I met ».",
                "Ces pronoms peuvent être sujets ou compléments. Sujet : « the boy who plays the guitar » (c'est lui qui joue). Complément : « the boy (who) I met in London » (j'ai rencontré le garçon). Quand le pronom est complément dans une relative déterminative, on peut l'omettre : « The book I'm reading is great. » C'est très fréquent à l'oral. On ne peut jamais omettre un pronom sujet. Dans un registre soutenu, on trouve aussi whom pour une personne complément : « the man whom I met ».",
              ],
              box: { label: "Règle", text: "who = personne ; which = chose ou animal ; that = personne ou chose (seulement sans virgules). Pronom complément dans une relative déterminative : omission possible (the film I saw). Pronom sujet : jamais d'omission." },
            },
            {
              heading: "Whose et where",
              paragraphs: [
                "WHOSE exprime la possession (« dont le, dont la, dont les ») et il est suivi directement d'un nom, sans article : « Malala is a young woman whose courage inspired the world. » (son courage) ; « I have a friend whose father is Australian. » (son père).",
                "WHERE reprend un lieu (« où ») : « Dublin is the city where my cousin lives. », « This is the school where I studied. » Attention : pour un moment, on emploie when : « 1776 is the year when the American colonies declared their independence. »",
              ],
            },
            {
              heading: "Relatives déterminatives et non déterminatives",
              paragraphs: [
                "Une relative déterminative (defining clause) est indispensable : elle précise de qui ou de quoi l'on parle. « The students who live near the school walk to class. » (seulement ceux qui habitent près du collège). Elle n'a pas de virgules, et that y est possible.",
                "Une relative non déterminative (non-defining clause) ajoute une information supplémentaire, que l'on pourrait supprimer sans changer le sens principal. Elle est encadrée par des virgules, et l'on n'y emploie jamais that ni l'omission du pronom : « Canberra, which is the capital of Australia, is smaller than Sydney. », « My uncle, who lives in Toronto, is a teacher. »",
              ],
              box: { label: "À retenir", text: "Avec virgules : who ou which, jamais that, jamais d'omission. Sans virgules : who, which ou that, et omission possible du pronom complément." },
            },
          ],
          keyPoints: [
            "who : personne ; which : chose ou animal ; that : les deux, sans virgules.",
            "whose + nom sans article = possession : a singer whose songs are famous.",
            "where = lieu ; when = moment.",
            "Pronom complément d'une relative déterminative : omission possible (the film I saw).",
            "Relative non déterminative entre virgules : jamais that, jamais d'omission.",
          ],
          example: {
            statement: "Reliez les deux phrases par un pronom relatif : « Nelson Mandela was a South African leader. He spent 27 years in prison. »",
            solution: [
              "Étape 1, repérer l'antécédent : « a South African leader », une personne.",
              "Étape 2, repérer le mot repris dans la deuxième phrase : « He », sujet du verbe spent.",
              "Étape 3, choisir le pronom : une personne en fonction sujet, donc who (ou that, puisqu'il n'y a pas de virgule). Le pronom est sujet : on ne peut pas l'omettre.",
              "Étape 4, remplacer « He » par le pronom et placer la relative juste après l'antécédent.",
              "Réponse : Nelson Mandela was a South African leader who spent 27 years in prison.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec who, which, whose ou where : a) A koala is an animal ... lives in Australia. b) The teacher ... gave us this homework is Irish. c) This is the town ... I was born. d) He is the singer ... songs are on the radio all the time. e) The book ... you lent me was fascinating.",
              hint: "Demandez-vous à chaque fois : l'antécédent est-il une personne, une chose ou un animal, un lieu ? Y a-t-il une idée de possession (son, sa, ses) ?",
              solution: [
                "a) which (ou that) : un animal.",
                "b) who (ou that) : une personne.",
                "c) where : un lieu.",
                "d) whose : ses chansons, donc possession ; whose est suivi directement du nom songs.",
                "e) which (ou that) : une chose ; le pronom est complément (you lent the book), on pourrait aussi l'omettre.",
                "Réponse : which, who, where, whose, which.",
              ],
            },
            {
              level: 2,
              statement: "Reliez chaque paire de phrases par une relative, puis dites si le pronom peut être omis : a) This is the photo. I took it in New York. b) Bob Dylan is an American singer. He won the Nobel Prize in Literature in 2016. c) Edinburgh is a beautiful city. My sister studies there. d) I met a girl. Her brother plays in a famous band.",
              hint: "Repérez le mot repris (it, He, there, Her) : il indique le pronom à choisir et sa fonction.",
              solution: [
                "a) « This is the photo (which / that) I took in New York. » Le pronom est complément (I took it) : on peut l'omettre.",
                "b) « Bob Dylan is an American singer who won the Nobel Prize in Literature in 2016. » Le pronom est sujet : omission impossible.",
                "c) « Edinburgh is a beautiful city where my sister studies. » There reprend un lieu : where.",
                "d) « I met a girl whose brother plays in a famous band. » Her brother exprime la possession : whose, suivi directement du nom.",
                "Réponse : seul le pronom de la phrase a) peut être omis.",
              ],
            },
            {
              level: 3,
              statement: "Lisez ce texte et répondez. « London, ___ (1) is the capital of the UK, is a city ___ (2) people from all over the world live. The Underground, ___ (3) opened in 1863, is the oldest underground railway in the world. Many people ___ (4) visit the city take a ride on the London Eye, a big wheel ___ (5) offers a great view of the Thames. » a) Complétez les cinq blancs. b) Relevez les deux relatives non déterminatives et justifiez leur ponctuation. c) Dans quels blancs pourrait-on aussi écrire that ?",
              hint: "Regardez les virgules autour des blancs : elles signalent une information supplémentaire, où that est interdit.",
              solution: [
                "a) (1) which : London est une chose (une ville), et la relative est entre virgules. (2) where : on reprend un lieu (people live in the city). (3) which : une chose, entre virgules. (4) who : une personne. (5) which : une chose (a big wheel).",
                "b) Les relatives (1) « which is the capital of the UK » et (3) « which opened in 1863 » sont non déterminatives : elles ajoutent une information que l'on pourrait supprimer, d'où les virgules.",
                "c) That est possible seulement dans les relatives déterminatives, sans virgules, avec un pronom sujet ou complément : blancs (4) et (5). Il est impossible en (1) et (3) à cause des virgules, et en (2), où il faut where.",
                "Réponse : which, where, which, who, which ; non déterminatives : (1) et (3) ; that possible en (4) et (5).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase au pronom relatif qui la complète.",
            pairs: [
              { left: "The girl ___ won the race is my cousin.", right: "who" },
              { left: "The koala is an animal ___ sleeps a lot.", right: "which" },
              { left: "He's the actor ___ films I love.", right: "whose" },
              { left: "Bath is the town ___ Jane Austen lived.", right: "where" },
              { left: "1776 is the year ___ the colonies declared their independence.", right: "when" },
              { left: "Everything ___ he said was true.", right: "that" },
            ],
          },
          quiz: [
            { q: "Choose the right pronoun: 'The man ___ lives next door is Canadian.'", options: ["which", "who", "where", "whose"], answer: 1, why: "L'antécédent est une personne (the man) et le pronom est sujet : who." },
            { q: "'I have a friend ___ mother is a pilot.'", options: ["who", "that", "which", "whose"], answer: 3, why: "Sa mère : idée de possession, donc whose, suivi directement du nom mother." },
            { q: "Which sentence is correct?", options: ["My brother, that lives in Leeds, is a doctor.", "My brother, who lives in Leeds, is a doctor.", "My brother, lives in Leeds, is a doctor."], answer: 1, why: "Entre virgules, that est interdit et le pronom ne peut pas être omis : on emploie who pour une personne." },
            { q: "In which sentence can the relative pronoun be left out?", options: ["The film that I watched was funny.", "The girl who sings is my sister.", "Paris, which I love, is beautiful.", "The dog which barks is mine."], answer: 0, why: "That y est complément (I watched the film) dans une relative sans virgules : on peut dire The film I watched was funny." },
            { q: "'This is the restaurant ___ we had dinner.'", options: ["which", "who", "where"], answer: 2, why: "On reprend un lieu (we had dinner in the restaurant) : where." },
          ],
          trap: "Employer which pour une personne (« the boy which ») ou that après une virgule (« Mandela, that... ») : avec une personne, on dit who, et entre virgules seuls who et which sont possibles.",
          method: "Avant de choisir le pronom, posez deux questions : l'antécédent est-il une personne, une chose ou un lieu ? L'information peut-elle être supprimée ? Si oui, mettez des virgules et oubliez that.",
        },
      ],
    },
    /* ==================================================================== */
    /* RENCONTRES AVEC D'AUTRES CULTURES : HEROES AND LEGENDS                 */
    /* ==================================================================== */
    {
      id: 'heroes-legends',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'real-heroes',
          title: "Héros réels et héros de fiction",
          minutes: 30,
          objectives: [
            "Distinguer en anglais un héros réel, un héros de légende et un héros de fiction.",
            "Décrire les qualités d'un héros avec des adjectifs de personnalité et des relatives (« someone who... »).",
            "Présenter la vie d'une personnalité admirée au past simple et justifier son admiration.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un héros ?",
              paragraphs: [
                "Le mot hero (pluriel heroes, avec -es) désigne une personne admirée pour son courage ou pour ses actions exceptionnelles. Au féminin, on dit heroine (attention à l'orthographe, avec un e final). Un héros peut être une personne réelle (a real-life hero), un personnage de légende (a legendary hero) ou un personnage de fiction (a fictional hero), inventé par un auteur dans un roman, une bande dessinée ou un film.",
                "On parle aussi de role model : une personne dont on suit l'exemple, que l'on prend pour modèle. Un role model n'a pas forcément sauvé des vies : ce peut être une sportive qui s'entraîne dur, un scientifique, un parent, un professeur. L'expression anglaise « Not all heroes wear capes » (tous les héros ne portent pas de cape) rappelle que les héros du quotidien (everyday heroes) existent : les soignants, les pompiers (firefighters), les bénévoles (volunteers).",
              ],
              box: { label: "Définition", text: "A hero / a heroine: a person who is admired for their courage or their achievements. A role model: a person you admire and try to imitate. A legend: a very old story, maybe partly true, passed down from generation to generation." },
            },
            {
              heading: "Des héros réels du monde anglophone",
              paragraphs: [
                "Rosa Parks (1913-2005) est une couturière afro-américaine qui, le 1er décembre 1955 à Montgomery (Alabama), refuse de céder sa place à un passager blanc dans un bus. Son arrestation déclenche le boycott des bus de Montgomery, une étape clé du mouvement des droits civiques. Nelson Mandela (1918-2013) lutte contre l'apartheid en Afrique du Sud : il passe 27 ans en prison, est libéré en 1990, reçoit le prix Nobel de la paix en 1993 et devient le premier président noir du pays en 1994.",
                "Malala Yousafzai, née en 1997 au Pakistan, défend le droit des filles à aller à l'école. En 2012, elle est grièvement blessée par un taliban. Elle survit, poursuit son combat depuis le Royaume-Uni et reçoit en 2014, à 17 ans, le prix Nobel de la paix : c'est la plus jeune lauréate de l'histoire. Florence Nightingale (1820-1910), infirmière britannique, soigne les soldats pendant la guerre de Crimée et réforme les hôpitaux : on la surnomme « The Lady with the Lamp ».",
              ],
            },
            {
              heading: "Héros de légende et héros de fiction",
              paragraphs: [
                "Robin Hood est un héros de légende anglaise : un hors-la-loi (an outlaw) qui vit dans la forêt de Sherwood, près de Nottingham, et qui vole les riches pour donner aux pauvres (he steals from the rich to give to the poor). Le roi Arthur (King Arthur), autre légende, tire l'épée Excalibur et réunit les chevaliers de la Table ronde (the Knights of the Round Table), conseillé par l'enchanteur Merlin. On ne sait pas si ces personnages ont vraiment existé.",
                "Les super-héros (superheroes) sont des héros de fiction nés dans les comics américains : Superman (1938), Wonder Woman (1941), Spider-Man (1962). Ils ont souvent des superpouvoirs (superpowers), une identité secrète (a secret identity), un costume et un ennemi (a villain). Harry Potter, le jeune sorcier imaginé par la romancière britannique J. K. Rowling (premier tome en 1997), est un héros de fiction sans superpouvoirs de comics, mais avec du courage et des amis fidèles.",
              ],
            },
            {
              heading: "Décrire un héros : la langue",
              paragraphs: [
                "Adjectifs utiles : brave et courageous (courageux), determined (déterminé), selfless (altruiste, qui ne pense pas à lui), generous, strong-willed (volontaire), inspiring (inspirant), fearless (qui n'a peur de rien), honest. Verbes : to fight for (se battre pour), to stand up for (défendre), to save (sauver), to risk one's life (risquer sa vie), to inspire, to achieve (accomplir).",
                "Pour définir, utilisez une relative : « A hero is someone who risks their life for others. » Pour raconter une vie, employez le past simple : « She was born in 1913. She refused to give up her seat. » Pour justifier votre admiration : « I admire her because... », « What I admire most about him is his courage. », « She is my role model because she never gave up. »",
              ],
              box: { label: "À retenir", text: "A hero is someone who... I admire him / her because... What I admire most is his / her courage. He fought for... She stood up for... Past simple pour la biographie : was born, became, died, won." },
            },
          ],
          keyPoints: [
            "Hero, pluriel heroes ; heroine au féminin ; role model = modèle que l'on veut imiter.",
            "Héros réels : Rosa Parks (1955), Nelson Mandela (27 ans de prison, président en 1994), Malala Yousafzai (Nobel 2014).",
            "Héros de légende : Robin Hood (Sherwood, steals from the rich to give to the poor), King Arthur (Excalibur).",
            "Héros de fiction : superheroes (Superman, Spider-Man), Harry Potter (J. K. Rowling).",
            "Adjectifs : brave, courageous, determined, selfless, inspiring, fearless.",
            "Définir : someone who... ; raconter une vie : past simple ; justifier : I admire her because...",
          ],
          example: {
            statement: "Présentez Nelson Mandela en anglais en quatre phrases : qui il était, ce qu'il a fait, ce qu'il a obtenu, et pourquoi vous l'admirez.",
            solution: [
              "Étape 1, l'identité avec une relative : « Nelson Mandela was a South African leader who fought against apartheid. »",
              "Étape 2, l'épreuve, au past simple : « He spent 27 years in prison, but he never gave up. »",
              "Étape 3, les résultats, avec des dates : « He was released in 1990, he won the Nobel Peace Prize in 1993 and he became the first Black president of South Africa in 1994. »",
              "Étape 4, la justification : « I admire him because he was determined and he chose peace instead of revenge. »",
              "Réponse : Nelson Mandela was a South African leader who fought against apartheid. He spent 27 years in prison, but he never gave up. He was released in 1990, won the Nobel Peace Prize in 1993 and became the first Black president of South Africa in 1994. I admire him because he was determined and chose peace instead of revenge.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces héros en trois colonnes, real-life hero, legendary hero ou fictional hero : Robin Hood, Malala Yousafzai, Spider-Man, Rosa Parks, King Arthur, Harry Potter, Florence Nightingale, Wonder Woman.",
              hint: "Un héros réel a une date de naissance et des actions vérifiables ; une légende est une très vieille histoire dont on ne sait pas si elle est vraie ; un héros de fiction a été inventé par un auteur.",
              solution: [
                "Real-life heroes : Malala Yousafzai, Rosa Parks, Florence Nightingale (des personnes ayant réellement vécu, avec des dates et des actions connues).",
                "Legendary heroes : Robin Hood, King Arthur (des histoires très anciennes, transmises de génération en génération, dont l'existence n'est pas prouvée).",
                "Fictional heroes : Spider-Man, Harry Potter, Wonder Woman (des personnages inventés par des auteurs de comics ou de romans).",
                "Réponse : 3 héros réels, 2 héros de légende, 3 héros de fiction.",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes entre parenthèses au past simple pour compléter cette biographie : « Rosa Parks (be) born in 1913 in Alabama. On 1 December 1955, she (take) the bus in Montgomery. The driver (tell) her to give up her seat to a white passenger, but she (refuse). The police (arrest) her. After that, many Black people (stop) using the buses for more than a year. »",
              hint: "Attention aux verbes irréguliers : be, take et tell. Les verbes réguliers prennent -ed, et stop double sa consonne finale.",
              solution: [
                "be → was : « Rosa Parks was born in 1913 in Alabama. »",
                "take → took (irrégulier) : « she took the bus in Montgomery. »",
                "tell → told (irrégulier) : « The driver told her to give up her seat ».",
                "refuse → refused, arrest → arrested (réguliers) : « but she refused. The police arrested her. »",
                "stop → stopped (doublement du p) : « many Black people stopped using the buses for more than a year. »",
                "Réponse : was, took, told, refused, arrested, stopped.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 70 à 90 mots). Un magazine en ligne pour adolescents lance le concours « My Hero ». Présentez en anglais une personne réelle que vous admirez (célèbre ou non) : qui elle est, ce qu'elle a fait, ses qualités, et pourquoi elle est pour vous un modèle.",
              hint: "Quatre paragraphes courts : une présentation avec who, deux ou trois actions au past simple, deux adjectifs de qualité justifiés, une conclusion avec I admire... because ou She is my role model because.",
              solution: [
                "Étape 1, le plan : présentation (relative), actions (past simple), qualités (adjectifs), justification (because).",
                "Étape 2, la rédaction, par exemple : « My hero is my grandmother, who was a nurse for forty years. When she was young, she worked in a hospital in Africa, where she helped hundreds of children. Later, she trained young nurses in France. She is generous and determined: she never complained, even when she was exhausted. Not all heroes wear capes! She is my role model because she taught me that helping others is the most important thing in life. »",
                "Étape 3, la vérification : environ 85 mots ; relatives (who, where), past simple (was, worked, helped, trained, complained), adjectifs (generous, determined), justification (because).",
                "Réponse : un texte de 70 à 90 mots qui présente, raconte au passé, décrit et justifie, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque héros à ce qui l'a rendu célèbre.",
            pairs: [
              { left: "Rosa Parks", right: "refused to give up her seat on a bus in 1955" },
              { left: "Nelson Mandela", right: "spent 27 years in prison and became president of South Africa" },
              { left: "Malala Yousafzai", right: "fights for girls' right to go to school" },
              { left: "Florence Nightingale", right: "nursed soldiers during the Crimean War" },
              { left: "Robin Hood", right: "stole from the rich to give to the poor" },
              { left: "King Arthur", right: "pulled out the sword Excalibur" },
            ],
          },
          quiz: [
            { q: "What is the plural of 'hero'?", options: ["heroes", "heros", "heroies", "hero's"], answer: 0, why: "Hero prend -es au pluriel, comme potato (potatoes) et tomato (tomatoes)." },
            { q: "Which of these heroes is fictional?", options: ["Rosa Parks", "Malala Yousafzai", "Spider-Man", "Nelson Mandela"], answer: 2, why: "Spider-Man est un super-héros de comics, créé en 1962 ; les autres sont des personnes réelles." },
            { q: "'A role model' is...", options: ["a fashion model", "a person you admire and try to imitate", "an actor who plays a hero", "a villain in a film"], answer: 1, why: "Un role model est un modèle de vie, une personne dont on suit l'exemple." },
            { q: "Complete: 'A hero is someone ... risks their life for others.'", options: ["which", "who", "whose", "where"], answer: 1, why: "Someone désigne une personne, et le pronom est sujet : who." },
            { q: "In 2014, Malala Yousafzai...", options: ["became Prime Minister of Pakistan", "won the Nobel Peace Prize", "wrote Harry Potter", "won an Olympic medal"], answer: 1, why: "Elle a reçu le prix Nobel de la paix en 2014, à 17 ans, pour son combat pour l'éducation des filles." },
          ],
          trap: "Écrire « heros » au pluriel ou « heroin » au féminin (heroin signifie « l'héroïne », la drogue) : on écrit heroes et heroine.",
          method: "Pour présenter un héros, préparez une fiche en trois lignes (qui, quoi, pourquoi je l'admire) avec deux dates et deux adjectifs : c'est le squelette de tout exposé ou paragraphe biographique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modals',
          title: "Les modaux : capacité, obligation, possibilité",
          minutes: 35,
          objectives: [
            "Employer les modaux avec la bonne construction : modal + base verbale, sans -s ni to.",
            "Exprimer la capacité (can, could, be able to), l'obligation (must, have to), l'interdiction (mustn't) et l'absence d'obligation (don't have to).",
            "Exprimer le conseil (should) et la possibilité ou la probabilité (may, might, could, must, can't).",
          ],
          course: [
            {
              heading: "Les modaux : une grammaire à part",
              paragraphs: [
                "Les modaux (modal verbs) sont can, could, may, might, must, should, will, would et shall. Ils ne disent pas l'action elle-même, mais le regard de celui qui parle sur cette action : est-elle possible, obligatoire, conseillée, probable ?",
                "Leur construction est toujours la même : modal + base verbale (l'infinitif sans to). Ils ne prennent jamais de -s à la 3e personne : « She can swim », jamais « she cans swim » ni « she can swims ». La négation se fait avec not (cannot ou can't, mustn't, shouldn't), et la question par inversion : « Can you help me? », « Should I call him? ». On n'utilise jamais do ou does avec un modal.",
              ],
              box: { label: "Règle", text: "Sujet + modal + base verbale : He must leave. Négation : He mustn't leave. Question : Must he leave? Jamais de -s, jamais de to après le modal, jamais de do / does." },
            },
            {
              heading: "La capacité et la permission : can, could, be able to",
              paragraphs: [
                "CAN exprime la capacité au présent : « Superman can fly. », « I can't swim. » COULD exprime une capacité générale dans le passé : « When she was five, she could read. » Pour une réussite ponctuelle dans le passé ou pour les autres temps, on utilise be able to : « He was able to escape. », « One day, you will be able to drive. », « I'd like to be able to speak Chinese. »",
                "Can sert aussi à demander ou donner une permission : « Can I go out? », « You can use my phone. » Plus poli : « Could I borrow your pen? », « May I come in? » (très poli, registre soutenu).",
              ],
            },
            {
              heading: "L'obligation, l'interdiction, le conseil",
              paragraphs: [
                "MUST exprime une obligation qui vient de celui qui parle ou une règle écrite : « I must finish my homework. », « Passengers must wear a seat belt. » HAVE TO exprime une obligation extérieure, imposée par les circonstances : « I have to wear a uniform at school. » Have to se conjugue comme un verbe ordinaire et remplace must aux autres temps : « She had to leave early. » (passé), « You will have to work hard. » (futur).",
                "Attention au piège majeur : MUSTN'T exprime l'interdiction (« You mustn't use your phone during the test. » = c'est interdit), alors que DON'T HAVE TO exprime l'absence d'obligation (« You don't have to come. » = vous n'êtes pas obligé, mais vous pouvez). SHOULD donne un conseil : « You should see a doctor. », « You shouldn't stay up so late. »",
              ],
              box: { label: "À retenir", text: "must / have to = obligation ; mustn't = interdiction (c'est défendu) ; don't have to = pas d'obligation (ce n'est pas nécessaire) ; should / shouldn't = conseil. Passé de must : had to." },
            },
            {
              heading: "La possibilité et la probabilité",
              paragraphs: [
                "Les modaux servent aussi à dire si l'on est sûr ou non. MAY et MIGHT expriment une possibilité (peut-être) : « It may rain tomorrow. », « She might be at home. » (might est un peu moins sûr). COULD exprime aussi une possibilité : « This story could be true. »",
                "MUST exprime une quasi-certitude, une déduction logique : « He has been running for an hour: he must be tired. » (il doit être fatigué, c'est sûrement le cas). CAN'T exprime l'impossibilité logique : « That can't be true! » (ce n'est sûrement pas vrai). Du moins sûr au plus sûr : might, puis may ou could, puis must ; et à l'opposé, can't.",
              ],
              box: { label: "Repère", text: "Degré de certitude : can't (impossible) < might < may / could (possible) < must (quasi certain). Ex. : It might be Tom. It must be Tom (I recognise his voice). It can't be Tom (he's in London)." },
            },
          ],
          keyPoints: [
            "Modal + base verbale, sans -s, sans to, sans do : She can swim. Can she swim?",
            "Capacité : can (présent), could (passé général), be able to (autres temps, réussite ponctuelle).",
            "Obligation : must (règle, volonté), have to (contrainte extérieure) ; passé : had to.",
            "mustn't = interdiction ; don't have to = absence d'obligation.",
            "Conseil : should / shouldn't.",
            "Possibilité : may, might, could ; quasi-certitude : must ; impossibilité : can't.",
          ],
          example: {
            statement: "Traduisez en anglais : « Vous n'êtes pas obligés de venir samedi, mais vous ne devez pas oublier votre carte lundi. »",
            solution: [
              "Étape 1, identifier les deux idées : « ne pas être obligé » est une absence d'obligation ; « ne pas devoir oublier » est une interdiction.",
              "Étape 2, choisir les modaux : absence d'obligation → don't have to ; interdiction → mustn't.",
              "Étape 3, construire avec la base verbale : don't have to come, mustn't forget.",
              "Étape 4, vérifier : pas de to après mustn't, pas de -s.",
              "Réponse : You don't have to come on Saturday, but you mustn't forget your card on Monday.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez l'erreur dans chaque phrase : a) She cans speak three languages. b) You must to wear a helmet. c) Do you can help me? d) He should goes to bed earlier. e) I can swim when I was six.",
              hint: "Rappelez-vous les quatre règles : pas de -s, pas de to, pas de do, et le bon temps (could pour le passé).",
              solution: [
                "a) Pas de -s au modal : « She can speak three languages. »",
                "b) Pas de to après must : « You must wear a helmet. »",
                "c) Pas de do avec un modal, la question se fait par inversion : « Can you help me? »",
                "d) Base verbale après should : « He should go to bed earlier. »",
                "e) Capacité passée : « I could swim when I was six. »",
                "Réponse : can speak, must wear, Can you help, should go, could swim.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec must, mustn't, don't have to ou should : a) It's a secret: you ... tell anyone! b) Tomorrow is Sunday, so we ... get up early. c) You look tired: you ... take a break. d) All visitors ... show their passport at the border. e) You ... bring food: there's a restaurant on site.",
              hint: "Demandez-vous à chaque fois : est-ce interdit, obligatoire, conseillé, ou simplement pas nécessaire ?",
              solution: [
                "a) mustn't : dire le secret est interdit.",
                "b) don't have to : se lever tôt n'est pas nécessaire le dimanche.",
                "c) should : c'est un conseil.",
                "d) must : c'est une règle officielle.",
                "e) don't have to : apporter à manger n'est pas nécessaire, mais ce n'est pas interdit.",
                "Réponse : mustn't, don't have to, should, must, don't have to.",
              ],
            },
            {
              level: 3,
              statement: "Lisez ce court dialogue, puis répondez. Amy: « Look, someone is knocking at the door. Who is it? » Ben: « It (1) ... be Grandma: she's on holiday in Australia. » Amy: « It (2) ... be the postman, he often comes at ten. » Ben: « Listen to that loud voice! It (3) ... be Uncle Joe, I'm sure! » a) Complétez (1), (2) et (3) avec can't, might ou must, et justifiez. b) Réécrivez au passé : « Ben can't open the door because he must finish his homework. » c) Réécrivez au futur : « We have to leave early and we can see the sunrise. »",
              hint: "a) Classez les trois répliques selon le degré de certitude : impossible, possible, quasi sûr. b) et c) Must et can n'ont ni passé en -ed ni futur : utilisez had to, couldn't, will have to, will be able to.",
              solution: [
                "a) (1) can't : Grandma est en Australie, c'est logiquement impossible. (2) might : le facteur passe souvent à cette heure, c'est possible sans être sûr. (3) must : Ben est sûr de lui (I'm sure), c'est une déduction quasi certaine.",
                "b) Au passé, can → could et must → had to : « Ben couldn't open the door because he had to finish his homework. »",
                "c) Au futur, have to → will have to et can → will be able to : « We will have to leave early and we will be able to see the sunrise. »",
                "Réponse : can't, might, must ; Ben couldn't open the door because he had to finish his homework ; We will have to leave early and we will be able to see the sunrise.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez que vous maîtrisez les modaux.",
            statements: [
              { text: "« He cans run fast » is correct.", true: false, why: "Un modal ne prend jamais de -s : He can run fast." },
              { text: "« You mustn't come » means « Vous n'êtes pas obligé de venir ».", true: false, why: "Mustn't exprime l'interdiction ; l'absence d'obligation se dit You don't have to come." },
              { text: "The past of « must » (obligation) is « had to ».", true: true, why: "Must n'a pas de forme passée : on emploie had to." },
              { text: "« Should » is used to give advice.", true: true, why: "You should rest : c'est un conseil." },
              { text: "« It might rain » means you are absolutely sure it will rain.", true: false, why: "Might exprime une simple possibilité, pas une certitude." },
              { text: "« That can't be true » means you think it is impossible.", true: true, why: "Can't exprime une impossibilité logique." },
              { text: "« Do you can swim? » is a correct question.", true: false, why: "On ne met jamais do avec un modal : Can you swim?" },
            ],
          },
          quiz: [
            { q: "Choose the correct sentence.", options: ["She must to go.", "She musts go.", "She must go.", "She must going."], answer: 2, why: "Modal + base verbale, sans to ni -s ni -ing." },
            { q: "'You ... pay: the museum is free on Sundays.'", options: ["mustn't", "don't have to", "can't", "shouldn't"], answer: 1, why: "Payer n'est pas nécessaire, ce n'est pas interdit : don't have to." },
            { q: "Which modal expresses advice?", options: ["should", "can", "might", "must"], answer: 0, why: "Should sert à donner un conseil : You should read this book." },
            { q: "'When I was a child, I ... climb trees very fast.'", options: ["can", "could", "must", "should"], answer: 1, why: "Capacité générale dans le passé : could." },
            { q: "'He has worked all night. He ... be exhausted.'", options: ["can't", "mustn't", "doesn't have to", "must"], answer: 3, why: "Déduction logique quasi certaine : must be." },
          ],
          trap: "Confondre mustn't et don't have to : « You mustn't come » interdit de venir, tandis que « You don't have to come » dit seulement que ce n'est pas obligatoire.",
          method: "Devant un modal à choisir, posez-vous la question en français : est-ce que je peux, je dois, je ne dois pas, je ne suis pas obligé, je devrais, peut-être ? Chaque réponse correspond à un modal précis ; puis vérifiez que le verbe qui suit est bien à la base verbale.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'passive-voice',
          title: "La voix passive",
          minutes: 30,
          objectives: [
            "Former la voix passive avec be au temps voulu + participe passé.",
            "Transformer une phrase active en phrase passive, avec ou sans complément d'agent introduit par by.",
            "Employer le passif pour mettre en valeur ce qui subit l'action, notamment pour traduire le « on » français.",
          ],
          course: [
            {
              heading: "Actif et passif : changer de point de vue",
              paragraphs: [
                "À la voix active, le sujet fait l'action : « Leonardo da Vinci painted the Mona Lisa. » À la voix passive, le sujet subit l'action : « The Mona Lisa was painted by Leonardo da Vinci. » Le sens est le même, mais l'information mise en valeur change : à la voix passive, on s'intéresse d'abord au tableau, et non au peintre.",
                "On emploie le passif quand celui qui fait l'action (l'agent) est inconnu (« My bike was stolen. »), évident (« He was arrested. », par la police), sans importance (« English is spoken in many countries. »), ou quand on veut le placer à la fin de la phrase pour le souligner (« Harry Potter was written by J. K. Rowling. »).",
              ],
            },
            {
              heading: "La construction",
              paragraphs: [
                "Le passif se forme avec l'auxiliaire be, conjugué au temps de la phrase active, suivi du participe passé du verbe : -ed pour les verbes réguliers (painted, invented), la troisième colonne pour les irréguliers (built, written, made, sung, stolen, known, given, found, taken, seen).",
                "C'est be qui porte le temps, le participe passé ne change jamais. Présent simple : « Tea is grown in India. » Prétérit : « The Eiffel Tower was built in 1889. » Present perfect : « The castle has been restored. » Futur : « The new bridge will be opened next year. » Présent en be + -ing : « The road is being repaired. » Avec un modal : « Phones must be switched off. »",
              ],
              box: { label: "Formule", text: "Sujet + be (au temps voulu) + participe passé (+ by + agent). The film was directed by Steven Spielberg. Le temps est porté par be ; le participe passé reste invariable." },
            },
            {
              heading: "Passer de l'actif au passif",
              paragraphs: [
                "Quatre étapes : 1) le complément d'objet de la phrase active devient le sujet ; 2) on repère le temps du verbe actif ; 3) on conjugue be à ce temps, accordé avec le nouveau sujet, et on ajoute le participe passé ; 4) l'ancien sujet devient complément d'agent introduit par by, ou disparaît s'il est inutile. Exemple : « Millions of people visit the Tower of London. » → « The Tower of London is visited by millions of people. »",
                "On supprime l'agent quand c'est people, someone, they ou une évidence : « Someone has stolen my wallet. » → « My wallet has been stolen. » Attention aux pronoms : le pronom complément devient sujet (« They invited us. » → « We were invited. »).",
              ],
            },
            {
              heading: "Le passif pour traduire « on » et quelques tournures fréquentes",
              paragraphs: [
                "L'anglais n'a pas d'équivalent exact du pronom « on ». Le passif est souvent la meilleure traduction : « On parle anglais ici. » → « English is spoken here. » ; « On a construit ce pont en 1894. » → « This bridge was built in 1894. » On peut aussi employer people, you ou we selon le contexte (« People say that... »).",
                "Certaines tournures très courantes sont passives : « I was born in 2011. » (je suis né), « It is made of wood. » (c'est en bois), « It is called... » (cela s'appelle), « The match was cancelled. » Retenez aussi : « Tower Bridge was opened in 1894. », « The telephone was invented by Alexander Graham Bell. »",
              ],
              box: { label: "À retenir", text: "On parle anglais ici = English is spoken here. Je suis né = I was born (jamais « I am born »). C'est fait en bois = It is made of wood." },
            },
          ],
          keyPoints: [
            "Passif = be au temps voulu + participe passé ; c'est be qui porte le temps.",
            "L'agent est introduit par by ; on l'omet s'il est inconnu, évident ou sans intérêt.",
            "Actif → passif : le complément devient sujet, be prend le temps du verbe actif.",
            "Présent : is made ; prétérit : was built ; present perfect : has been sold ; futur : will be opened ; modal : must be done.",
            "« On » se traduit souvent par un passif : English is spoken here.",
            "I was born in... est un passif au prétérit.",
          ],
          example: {
            statement: "Mettez à la voix passive : « Steven Spielberg directed the film E.T. in 1982. »",
            solution: [
              "Étape 1, le complément d'objet « the film E.T. » devient le sujet.",
              "Étape 2, le verbe directed est au prétérit : be se met au prétérit, was (sujet singulier).",
              "Étape 3, on ajoute le participe passé de direct : directed.",
              "Étape 4, l'ancien sujet devient complément d'agent avec by, ici important car on veut savoir qui a réalisé le film ; le complément de temps se place à la fin.",
              "Réponse : The film E.T. was directed by Steven Spielberg in 1982.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec be au bon temps et le participe passé du verbe entre parenthèses : a) English (speak) in Australia. (présent) b) The Statue of Liberty (give) to the USA by France in 1886. (prétérit) c) Rice (grow) in many Asian countries. (présent) d) Romeo and Juliet (write) by Shakespeare. (prétérit) e) The results (publish) next week. (futur)",
              hint: "Choisissez is / are au présent, was / were au prétérit, will be au futur, puis ajoutez le participe passé (attention aux irréguliers speak, give, grow, write).",
              solution: [
                "a) is spoken (speak, spoke, spoken).",
                "b) was given (give, gave, given).",
                "c) is grown (grow, grew, grown).",
                "d) was written (write, wrote, written).",
                "e) will be published (régulier).",
                "Réponse : is spoken, was given, is grown, was written, will be published.",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases à la voix passive, en supprimant l'agent quand il est inutile : a) Someone broke the window last night. b) J. K. Rowling wrote the Harry Potter books. c) They will build a new stadium. d) People have found a dinosaur skeleton in Scotland. e) You must switch off your phone.",
              hint: "Supprimez by someone, by them, by people, by you : ils n'apportent aucune information. Gardez l'agent quand c'est une personne précise.",
              solution: [
                "a) Prétérit, agent inconnu : « The window was broken last night. »",
                "b) Prétérit, agent important : « The Harry Potter books were written by J. K. Rowling. » (sujet pluriel : were).",
                "c) Futur : « A new stadium will be built. »",
                "d) Present perfect : « A dinosaur skeleton has been found in Scotland. »",
                "e) Modal : « Your phone must be switched off. »",
                "Réponse : was broken, were written by J. K. Rowling, will be built, has been found, must be switched off.",
              ],
            },
            {
              level: 3,
              statement: "Lisez ce court texte et répondez. « The London Underground, which is also called the Tube, was opened in 1863. Today, it is used by millions of passengers. New trains have been ordered and some stations are being modernised. » a) Relevez les cinq formes verbales au passif et donnez leur temps. b) Récrivez la 2e phrase à la voix active. c) Traduisez en anglais : « On a ouvert le métro de Londres en 1863 et on l'appelle le Tube. »",
              hint: "Cherchez be suivi d'un participe passé. Pour la voix active, l'agent (by...) devient le sujet. Pour la traduction, « on » appelle un passif.",
              solution: [
                "a) is called (présent simple), was opened (prétérit), is used (présent simple), have been ordered (present perfect), are being modernised (présent en be + -ing, avec being).",
                "b) L'agent « millions of passengers » devient sujet, et le verbe se met au présent simple, accordé au pluriel : « Today, millions of passengers use it. »",
                "c) « On » se traduit par le passif : « The London Underground was opened in 1863 and it is called the Tube. »",
                "Réponse : is called, was opened, is used, have been ordered, are being modernised ; Millions of passengers use it ; The London Underground was opened in 1863 and it is called the Tube.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour passer de l'actif au passif.",
            items: [
              "Repérer le complément d'objet de la phrase active.",
              "En faire le sujet de la phrase passive.",
              "Repérer le temps du verbe actif.",
              "Conjuguer be à ce temps, accordé avec le nouveau sujet.",
              "Ajouter le participe passé du verbe.",
              "Ajouter by + l'agent, ou le supprimer s'il est inutile.",
            ],
          },
          quiz: [
            { q: "Choose the passive form: 'They make cars in this factory.'", options: ["Cars are made in this factory.", "Cars made in this factory.", "Cars are make in this factory.", "Cars were making in this factory."], answer: 0, why: "Présent simple passif : are (sujet pluriel) + participe passé made." },
            { q: "'The Eiffel Tower ... in 1889.'", options: ["built", "is built", "was built", "has built"], answer: 2, why: "Action passée datée, au passif : was + built." },
            { q: "How do you say 'Je suis né en 2011'?", options: ["I am born in 2011.", "I have born in 2011.", "I born in 2011.", "I was born in 2011."], answer: 3, why: "Be born est un passif : au passé, I was born." },
            { q: "'The thief ... by the police yesterday.'", options: ["was arrested", "arrested", "has arrested", "is arresting"], answer: 0, why: "Le voleur subit l'action, au passé : was arrested." },
            { q: "Which is the best translation of 'On parle anglais ici'?", options: ["One speak English here.", "English is spoken here.", "English speaks here.", "On speaks English here."], answer: 1, why: "Le « on » français se traduit très souvent par un passif." },
          ],
          trap: "Oublier be (« The castle built in 1200 ») ou mettre le participe passé au mauvais temps (« was build ») : le passif exige toujours be conjugué et le participe passé (built, written, made).",
          method: "Révisez la troisième colonne des verbes irréguliers les plus fréquents (built, written, made, sold, stolen, known, taken, given) : sans elle, impossible de former un passif. Pour vérifier une phrase passive, cherchez toujours la paire be + participe passé.",
        },
      ],
    },
    /* ==================================================================== */
    /* LANGAGES : MEDIA AND COMMUNICATION                                     */
    /* ==================================================================== */
    {
      id: 'media-communication',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'media-news',
          title: "Les médias et l'information : lire un article de presse",
          minutes: 30,
          objectives: [
            "Nommer en anglais les différents médias et les éléments d'un article de presse (headline, caption, byline...).",
            "Comprendre un titre de presse anglais et le reformuler en phrase complète.",
            "Repérer les informations essentielles d'un article grâce aux questions Who, What, Where, When, Why, How.",
            "Vérifier la fiabilité d'une information et distinguer un fait d'une opinion.",
          ],
          course: [
            {
              heading: "Les médias dans le monde anglophone",
              paragraphs: [
                "Les médias (the media) regroupent la presse écrite (the press, the print media : newspapers, magazines), l'audiovisuel (broadcast media : television, radio) et les médias en ligne (online media : news websites, podcasts, social media). Un journal quotidien est a daily newspaper, un hebdomadaire a weekly.",
                "Au Royaume-Uni, on distingue traditionnellement les tabloids, journaux populaires aux gros titres chocs, riches en photos et en faits divers (The Sun, the Daily Mirror), et les quality papers, plus sérieux, autrefois appelés broadsheets à cause de leur grand format (The Times, The Guardian). La BBC, fondée en 1922, est le grand service public de radio et de télévision britannique. Aux États-Unis, The New York Times et The Washington Post sont des quotidiens de référence.",
              ],
              box: { label: "Repère", text: "newspaper (journal), magazine, news (les informations, toujours au singulier : the news is), journalist / reporter, editor (rédacteur en chef), front page (la une), article, headline (gros titre), the press." },
            },
            {
              heading: "Les éléments d'un article",
              paragraphs: [
                "Un article de presse se compose d'un headline (le titre), parfois d'un subheading (le sous-titre), d'une byline (la signature du journaliste, souvent « By ... »), d'une photo accompagnée de sa caption (la légende), puis du corps de l'article. Le premier paragraphe, appelé lead (ou lede), résume l'essentiel.",
                "Les articles d'information suivent souvent le principe de la pyramide inversée (the inverted pyramid) : les informations les plus importantes d'abord, les détails ensuite. Le lead répond aux questions des 5 W + H : Who? (qui), What? (quoi), Where? (où), When? (quand), Why? (pourquoi), How? (comment). Pour comprendre un article, cherchez d'abord ces six réponses dans les premières lignes.",
              ],
              box: { label: "Méthode", text: "Lire un article : 1) le titre, la photo et sa légende pour anticiper ; 2) le premier paragraphe pour les 5 W + H ; 3) le reste pour les détails, les chiffres et les témoignages entre guillemets." },
            },
            {
              heading: "Comprendre les titres de presse",
              paragraphs: [
                "Les titres anglais (le « headlinese ») sont très courts et obéissent à des règles particulières. On supprime les articles (a, the) et souvent le verbe be : « Teen Hero Saves Dog From River » = A teenage hero has saved a dog from a river. Le présent simple sert à raconter un événement passé récent : « Storm Hits Coast » = A storm has hit the coast.",
                "L'infinitif en to annonce un événement futur : « Prime Minister To Visit India » = The Prime Minister is going to visit India. Le participe passé seul indique un passif : « Three Injured In Bus Crash » = Three people were injured in a bus crash. Les titres préfèrent aussi des mots courts et frappants : bid (tentative), row (dispute), vow (promesse), probe (enquête), quit (démissionner).",
              ],
              box: { label: "Règle", text: "Présent simple = événement passé récent. To + base verbale = futur. Participe passé seul = passif (was / were + participe). Articles et be souvent supprimés." },
            },
            {
              heading: "Vérifier l'information",
              paragraphs: [
                "Une fausse information diffusée volontairement pour tromper est appelée disinformation ou fake news ; une erreur partagée de bonne foi est de la misinformation. Avant de croire ou de partager une information, vérifiez la source (Who wrote it? Is it a reliable website?), la date (Is it recent?), comparez avec d'autres médias et méfiez-vous des titres trop sensationnels (clickbait) et des photos sorties de leur contexte.",
                "Distinguez aussi un fait (a fact), que l'on peut vérifier (« The bridge was opened in 1894. »), d'une opinion (an opinion), qui exprime un avis (« It's the most beautiful bridge in the world. »). Dans un article sérieux, les opinions sont signalées : « according to », « experts say », ou des citations entre guillemets.",
              ],
            },
          ],
          keyPoints: [
            "Les médias : the press (newspapers, magazines), broadcast media (TV, radio), online media.",
            "Tabloids (populaires, sensationnels) et quality papers (sérieux) ; la BBC, service public créé en 1922.",
            "Article : headline, byline, caption, lead ; le lead répond aux 5 W + H.",
            "Titres : présent simple = passé récent ; to + verbe = futur ; participe seul = passif.",
            "Fact (vérifiable) ≠ opinion (avis) ; vérifier la source, la date et croiser les médias.",
            "The news est singulier : the news is good.",
          ],
          example: {
            statement: "Reformulez ce titre en phrase complète, puis dites ce que l'on apprend : « Local Students To Meet Astronaut ».",
            solution: [
              "Étape 1, repérer la structure : to + base verbale (To Meet) indique un événement futur.",
              "Étape 2, rétablir les mots supprimés : l'article (some, the) et le verbe be going to.",
              "Étape 3, rédiger la phrase complète : « Some local students are going to meet an astronaut. »",
              "Étape 4, ce que l'on sait (Who et What) et ce que l'on ne sait pas encore (Where, When, Why, How), qui sera dans le lead de l'article.",
              "Réponse : Some local students are going to meet an astronaut. On apprend qui (des élèves de la région) et quoi (une rencontre future avec un astronaute).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque mot à sa définition : 1) headline, 2) caption, 3) byline, 4) front page, 5) reporter. a) the first page of a newspaper ; b) the name of the journalist who wrote the article ; c) the title of an article, in big letters ; d) a person who collects and writes news ; e) a short text that explains a photo.",
              hint: "Pensez à la place de chaque élément dans le journal : en haut de l'article, sous la photo, après le titre, à la une.",
              solution: [
                "1) headline → c) le titre de l'article, en gros caractères.",
                "2) caption → e) la légende de la photo.",
                "3) byline → b) la signature du journaliste.",
                "4) front page → a) la une, la première page.",
                "5) reporter → d) le journaliste qui recueille et écrit les informations.",
                "Réponse : 1c, 2e, 3b, 4a, 5d.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ces titres en phrases complètes : a) Fire Destroys School Library. b) Two Climbers Rescued In Scotland. c) Mayor To Open New Swimming Pool. d) Record Crowds At Music Festival.",
              hint: "Présent simple → present perfect ou prétérit ; participe passé seul → passif ; to + verbe → be going to. Rétablissez les articles et le verbe be.",
              solution: [
                "a) Présent simple pour un événement passé récent : « A fire has destroyed the school library. »",
                "b) Participe passé seul = passif : « Two climbers have been rescued in Scotland. » (ou were rescued).",
                "c) To + verbe = futur : « The mayor is going to open a new swimming pool. »",
                "d) Verbe be supprimé : « There were record crowds at the music festival. »",
                "Réponse : A fire has destroyed the school library. Two climbers have been rescued in Scotland. The mayor is going to open a new swimming pool. There were record crowds at the music festival.",
              ],
            },
            {
              level: 3,
              statement: "Lisez cet article (inventé pour l'exercice) et répondez en français. « TEEN INVENTOR WINS NATIONAL PRIZE. By Sarah Lane. A 14-year-old girl from Leeds won the National Young Inventors Prize in London on Tuesday. Emma Clarke created a bin that sorts plastic and paper automatically. 'I wanted to help my town recycle more,' she explained. According to the judges, her invention is 'simple and brilliant'. It will be tested in three schools next year. » a) Répondez aux 5 W + H. b) Relevez un fait et une opinion. c) Qui a écrit l'article ?",
              hint: "Les 5 W + H se trouvent presque tous dans les deux premières phrases. Une opinion est signalée par according to ou par des guillemets.",
              solution: [
                "a) Who : Emma Clarke, une adolescente de 14 ans de Leeds. What : elle a gagné le prix national des jeunes inventeurs. Where : à Londres. When : mardi. Why : elle voulait aider sa ville à mieux recycler. How : en créant une poubelle qui trie automatiquement le plastique et le papier.",
                "b) Un fait : « It will be tested in three schools next year » (vérifiable). Une opinion : « simple and brilliant », l'avis des juges, signalé par according to et les guillemets.",
                "c) La byline indique l'auteur : Sarah Lane.",
                "Réponse : les 5 W + H ci-dessus ; un fait (le test dans trois écoles) et une opinion (simple and brilliant) ; l'article est signé Sarah Lane.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque titre de presse à sa phrase complète.",
            pairs: [
              { left: "Storm Hits Coast", right: "A storm has hit the coast." },
              { left: "Queen's Letter Found", right: "A letter written by the Queen has been found." },
              { left: "President To Visit Japan", right: "The President is going to visit Japan." },
              { left: "Teen Saves Dog From River", right: "A teenager has saved a dog from a river." },
              { left: "Five Injured In Crash", right: "Five people were injured in a crash." },
            ],
          },
          quiz: [
            { q: "In a newspaper, what is a 'caption'?", options: ["The text under a photo", "The name of the journalist", "The first page", "The main title"], answer: 0, why: "La caption est la légende qui accompagne une photo." },
            { q: "The headline 'Minister To Resign' means...", options: ["The minister has resigned.", "The minister resigned last year.", "The minister is going to resign.", "The minister refuses to resign."], answer: 2, why: "Dans un titre, to + base verbale annonce un événement futur." },
            { q: "Which sentence is an opinion?", options: ["The museum opened in 1990.", "The museum has three floors.", "The museum is in Glasgow.", "The museum is the best in Britain."], answer: 3, why: "« The best » exprime un jugement, qu'on ne peut pas vérifier : c'est une opinion." },
            { q: "Choose the correct sentence.", options: ["The news is good today.", "The news are good today.", "The new is good today."], answer: 0, why: "News est un nom indénombrable singulier, malgré son -s : the news is." },
            { q: "Which question is NOT one of the 5 W + H?", options: ["Who?", "When?", "Which colour?", "Why?"], answer: 2, why: "Les 5 W + H sont Who, What, Where, When, Why et How." },
          ],
          trap: "Lire le présent simple d'un titre (« Storm Hits Coast ») comme une habitude ou un événement à venir : dans un titre, il raconte un fait passé récent ; c'est to + verbe qui annonce le futur.",
          method: "Avant de lire un article en détail, notez sur votre brouillon les six questions Who, What, Where, When, Why, How et remplissez-les en lisant le titre et le premier paragraphe : vous avez l'essentiel en deux minutes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'social-networks',
          title: "Les réseaux sociaux et la communication en ligne",
          minutes: 25,
          objectives: [
            "Employer le vocabulaire anglais des réseaux sociaux (to post, to share, a follower, a feed...).",
            "Présenter les avantages et les inconvénients des réseaux sociaux avec des connecteurs d'opposition.",
            "Donner des conseils pour un usage responsable d'Internet avec should, shouldn't et l'impératif.",
          ],
          course: [
            {
              heading: "Le vocabulaire des réseaux sociaux",
              paragraphs: [
                "Les réseaux sociaux se disent social media ou social networks. On y crée un profil (a profile, an account), on publie (to post a photo, a video, a message), on partage (to share), on aime (to like), on commente (to comment on a post), on s'abonne à un compte (to follow someone) et on a des abonnés (followers). On fait défiler son fil d'actualité (to scroll through one's feed), on envoie des messages privés (to send a direct message, a DM).",
                "Autres mots utiles : a hashtag, a selfie, a story, a notification, an influencer (une personne suivie par beaucoup d'abonnés, souvent payée par des marques), to go viral (devenir viral), screen time (le temps d'écran), to be online / offline (être en ligne / hors ligne), to log in / to log out (se connecter / se déconnecter), a password (mot de passe).",
              ],
              box: { label: "Repère", text: "to post, to share, to like, to follow, to comment, to scroll, to go viral ; a profile, a feed, a follower, a hashtag, a password ; screen time." },
            },
            {
              heading: "Avantages et inconvénients",
              paragraphs: [
                "Les avantages (advantages, pros) : rester en contact avec ses amis et sa famille même très loin (to stay in touch), s'informer, découvrir d'autres cultures, partager ses passions et ses créations, défendre une cause, apprendre (tutorials).",
                "Les inconvénients (disadvantages, cons) : l'addiction et le temps perdu, le manque de sommeil, la comparaison permanente avec des images retouchées, les fausses informations (fake news), le cyberharcèlement (cyberbullying), les problèmes de vie privée (privacy) et l'empreinte numérique (digital footprint) : ce que l'on publie peut rester en ligne très longtemps. La plupart des grands réseaux sociaux exigent d'ailleurs, dans leurs conditions d'utilisation, d'avoir au moins 13 ans.",
              ],
            },
            {
              heading: "Nuancer : les connecteurs d'opposition",
              paragraphs: [
                "Pour présenter les deux côtés d'un sujet, employez : « On the one hand, ... On the other hand, ... » (d'un côté, de l'autre), « However, ... » (cependant, en début de phrase suivi d'une virgule), « but », « whereas » (tandis que), « Although + sujet + verbe » (bien que) : « Although social media can be useful, it can also be dangerous. »",
                "Pour conclure : « All in all, ... » ou « To sum up, ... » (en résumé), « In my opinion, ... », « I think that... ». Exemple : « On the one hand, social media helps us stay in touch with friends. On the other hand, it can be addictive. All in all, I think we should use it wisely. »",
              ],
              box: { label: "À retenir", text: "On the one hand... On the other hand... ; However, ... ; Although + sujet + verbe ; whereas ; All in all / To sum up." },
            },
            {
              heading: "Bien se comporter en ligne",
              paragraphs: [
                "Pour donner des conseils, employez should / shouldn't ou l'impératif : « You should set your account to private. », « Never share your password. », « Think before you post. », « Don't accept friend requests from strangers. », « If you are a victim of cyberbullying, talk to an adult you trust. »",
                "Sur les plateformes, on peut bloquer (to block) et signaler (to report) un compte ou un contenu. En France, le numéro national gratuit 3018 aide les jeunes victimes de cyberharcèlement. Retenez la règle de base de la nétiquette (netiquette) : on ne dit pas en ligne ce que l'on n'oserait pas dire en face.",
              ],
            },
          ],
          keyPoints: [
            "Verbes : to post, to share, to like, to follow, to comment, to scroll, to go viral.",
            "Noms : a profile, a feed, a follower, an influencer, a password, screen time, privacy.",
            "Pros : stay in touch, get information, share passions ; cons : addiction, cyberbullying, fake news, privacy.",
            "Connecteurs : On the one hand... On the other hand ; However ; Although ; whereas.",
            "Conseils : You should... / You shouldn't... / Never... / Think before you post.",
            "Bloquer = to block ; signaler = to report.",
          ],
          example: {
            statement: "Rédigez en anglais trois phrases équilibrées sur le sujet « Social media: good or bad for teenagers? », avec un avantage, un inconvénient et une conclusion.",
            solution: [
              "Étape 1, un avantage introduit par On the one hand : « On the one hand, social media helps teenagers stay in touch with their friends. »",
              "Étape 2, un inconvénient introduit par On the other hand : « On the other hand, some teenagers spend too much time on their phones and don't sleep enough. »",
              "Étape 3, une conclusion personnelle avec should : « All in all, I think social media is not bad in itself, but we should limit our screen time. »",
              "Réponse : On the one hand, social media helps teenagers stay in touch with their friends. On the other hand, some teenagers spend too much time on their phones and don't sleep enough. All in all, I think social media is not bad in itself, but we should limit our screen time.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le bon verbe (follow, post, share, scroll, block) : a) I ... a photo of my dog every day. b) Do you ... any famous singers? c) Someone was rude to me, so I decided to ... him. d) She can ... through her feed for hours. e) Don't ... fake news!",
              hint: "Traduisez la phrase en français dans votre tête : publier, suivre, bloquer, faire défiler, partager.",
              solution: [
                "a) post : je publie une photo.",
                "b) follow : suivre des chanteurs.",
                "c) block : bloquer la personne impolie.",
                "d) scroll : faire défiler son fil d'actualité.",
                "e) share : ne partagez pas de fausses informations.",
                "Réponse : post, follow, block, scroll, share.",
              ],
            },
            {
              level: 2,
              statement: "Reliez chaque paire de phrases avec le connecteur indiqué : a) Social media is fun. It can be addictive. (However) b) My brother posts every day. I never post anything. (whereas) c) Influencers seem perfect. Their photos are often edited. (Although) d) You can stay in touch with friends. You can see fake news. (On the one hand... On the other hand...)",
              hint: "However commence une nouvelle phrase et est suivi d'une virgule ; whereas et although relient deux propositions dans une même phrase.",
              solution: [
                "a) « Social media is fun. However, it can be addictive. »",
                "b) « My brother posts every day, whereas I never post anything. »",
                "c) « Although influencers seem perfect, their photos are often edited. »",
                "d) « On the one hand, you can stay in touch with friends. On the other hand, you can see fake news. »",
                "Réponse : les quatre phrases ci-dessus, avec la ponctuation propre à chaque connecteur.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 70 à 90 mots). Votre correspondant anglais, Jack, 13 ans, vous écrit : « My parents have just allowed me to open an account on a social network. Any advice? » Répondez-lui : présentez un avantage et un inconvénient, puis donnez-lui au moins trois conseils.",
              hint: "Format d'un message amical : Hi Jack, ... See you soon, ... Utilisez On the one hand / On the other hand, puis should, shouldn't et l'impératif.",
              solution: [
                "Étape 1, le plan : salutation, réaction, un avantage, un inconvénient, trois conseils, formule finale.",
                "Étape 2, la rédaction, par exemple : « Hi Jack, Great news! On the one hand, it's a fun way to share your photos and to stay in touch with your friends. On the other hand, you must be careful because some people are not who they say they are. My advice: you should make your account private, and you shouldn't accept requests from strangers. Never share your password, and think before you post! If someone is mean to you, block them and talk to your parents. See you soon, Léa »",
                "Étape 3, la vérification : environ 90 mots, un avantage, un inconvénient, plus de trois conseils (should, shouldn't, Never, think, block and talk), formules d'ouverture et de fin.",
                "Réponse : un message de 70 à 90 mots qui respecte les trois consignes, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Langue et bons réflexes en ligne.",
            statements: [
              { text: "« To follow someone » means « s'abonner au compte de quelqu'un ».", true: true, why: "On suit (follow) un compte et l'on devient l'un de ses followers." },
              { text: "Cyberbullying means « cybersécurité ».", true: false, why: "Cyberbullying signifie cyberharcèlement ; la cybersécurité se dit cybersecurity." },
              { text: "« However » is usually followed by a comma at the beginning of a sentence.", true: true, why: "However, ... : le connecteur est détaché par une virgule." },
              { text: "Your digital footprint disappears when you delete a post.", true: false, why: "Une publication a pu être copiée ou capturée : l'empreinte numérique peut durer longtemps." },
              { text: "« To report » a post means to tell the platform it is a problem.", true: true, why: "To report = signaler un contenu ou un compte." },
              { text: "« Although » is followed by a noun only: « Although the danger, ... ».", true: false, why: "Although est suivi d'un sujet et d'un verbe : Although it is dangerous, ..." },
            ],
          },
          quiz: [
            { q: "What does 'to go viral' mean?", options: ["to be shared very quickly by many people", "to catch a virus", "to delete an account", "to stop using the Internet"], answer: 0, why: "Un contenu qui « devient viral » est partagé très vite par un très grand nombre de personnes." },
            { q: "'... social media is useful, it can be dangerous.'", options: ["However", "Whereas", "Although", "On the other hand"], answer: 2, why: "Although + sujet + verbe introduit une concession en début de phrase." },
            { q: "Which piece of advice is correct?", options: ["You should share your password with your friends.", "You shouldn't accept requests from strangers.", "You should post your address online.", "You shouldn't tell an adult about cyberbullying."], answer: 1, why: "C'est le seul bon conseil de sécurité : on n'accepte pas les demandes d'inconnus." },
            { q: "'A person who follows your account' is...", options: ["a feed", "a profile", "a hashtag", "a follower"], answer: 3, why: "A follower est un abonné." },
            { q: "How do you say 'se déconnecter'?", options: ["to log out", "to log in", "to sign up", "to scroll"], answer: 0, why: "To log out = se déconnecter ; to log in = se connecter ; to sign up = s'inscrire." },
          ],
          trap: "Employer although comme despite, suivi d'un simple nom (« Although the rain »), ou oublier la virgule après However : on écrit « Although it was raining » et « However, ... ».",
          method: "Pour tout sujet de débat, préparez un tableau à deux colonnes (pros / cons) avec trois idées par colonne avant d'écrire, puis reliez-les avec On the one hand... On the other hand... et terminez toujours par votre avis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reported-speech',
          title: "Rapporter des paroles : le discours indirect",
          minutes: 35,
          objectives: [
            "Passer du discours direct au discours indirect avec say et tell, en adaptant les pronoms.",
            "Appliquer la concordance des temps quand le verbe introducteur est au passé.",
            "Rapporter une question (ask if, ask where...) et un ordre (tell someone to do).",
            "Adapter les repères de temps et de lieu (now → then, tomorrow → the next day).",
          ],
          course: [
            {
              heading: "Discours direct et discours indirect",
              paragraphs: [
                "Au discours direct (direct speech), on cite les paroles exactes entre guillemets : Tom said, « I am tired. » Au discours indirect (reported speech), on rapporte ces paroles sans guillemets, dans une proposition introduite par un verbe comme say ou tell : Tom said (that) he was tired. La conjonction that est souvent omise à l'oral.",
                "Say et tell n'ont pas la même construction. Say s'emploie sans complément de personne : « She said that she was happy. » (ou « said to me »). Tell est toujours suivi de la personne à qui l'on parle : « She told me that she was happy. », jamais « She told that... » ni « She said me... ».",
              ],
              box: { label: "Règle", text: "say (that) + phrase : He said (that) he was late. tell + personne + (that) + phrase : He told us (that) he was late. Jamais « said me », jamais « told that » sans personne." },
            },
            {
              heading: "La concordance des temps",
              paragraphs: [
                "Quand le verbe introducteur est au passé (said, told, asked), le verbe rapporté recule d'un temps dans le passé (backshift). Présent simple → prétérit : « I like pizza » → He said he liked pizza. Présent en be + -ing → be + -ing au passé : « I am working » → She said she was working. Present perfect → past perfect : « I have finished » → He said he had finished. Prétérit → past perfect : « I saw him » → She said she had seen him.",
                "Les modaux changent aussi : will → would (« I will come » → He said he would come), can → could, may → might, must → had to (ou must). Si le verbe introducteur est au présent (He says...), il n'y a pas de changement de temps : « He says he is tired. » On peut aussi garder le temps pour une vérité générale : « The teacher said that water boils at 100 °C. »",
              ],
              box: { label: "À retenir", text: "present → past ; present continuous → past continuous ; present perfect / past simple → past perfect ; will → would ; can → could ; may → might ; must → had to." },
            },
            {
              heading: "Pronoms, temps et lieux",
              paragraphs: [
                "On adapte les pronoms et les possessifs au point de vue de celui qui rapporte : Emma said, « I love my dog. » → Emma said she loved her dog. On adapte aussi les repères de temps et de lieu, car on ne parle plus au même moment ni au même endroit.",
                "now → then ; today → that day ; tonight → that night ; tomorrow → the next day (ou the following day) ; yesterday → the day before (ou the previous day) ; next week → the following week ; last week → the week before ; ago → before ; here → there ; this → that ; these → those. Exemple : « I'll see you here tomorrow » → He said he would see me there the next day.",
              ],
            },
            {
              heading: "Rapporter une question ou un ordre",
              paragraphs: [
                "Pour une question fermée (réponse yes / no), on emploie ask + if (ou whether) : « Do you like jazz? » → She asked me if I liked jazz. Pour une question ouverte, on garde le mot interrogatif : « Where do you live? » → He asked me where I lived. Attention, dans la question rapportée, l'ordre des mots est celui d'une affirmation (sujet + verbe), sans do / does / did ni point d'interrogation : jamais « He asked me where did I live? ».",
                "Pour un ordre ou une demande, on emploie tell ou ask + personne + to + base verbale : « Sit down! » → The teacher told us to sit down. « Please help me. » → She asked me to help her. À la forme négative, not se place devant to : « Don't touch it! » → He told me not to touch it.",
              ],
              box: { label: "Formule", text: "Question fermée : asked + personne + if + sujet + verbe. Question ouverte : asked + personne + where / why / when... + sujet + verbe. Ordre : told + personne + (not) to + base verbale." },
            },
          ],
          keyPoints: [
            "say (that)... ; tell + personne + (that)...",
            "Après un verbe introducteur au passé, les temps reculent : is → was, has done → had done, did → had done, will → would, can → could.",
            "Pronoms et possessifs suivent le point de vue de celui qui rapporte.",
            "now → then ; today → that day ; tomorrow → the next day ; yesterday → the day before ; here → there.",
            "Question : asked if / asked where + sujet + verbe, sans do ni point d'interrogation.",
            "Ordre : told / asked + personne + (not) to + base verbale.",
          ],
          example: {
            statement: "Rapportez au discours indirect : Lucy said to Sam, « I will call you tomorrow. »",
            solution: [
              "Étape 1, le verbe introducteur : Lucy parle à Sam, on peut donc employer tell + personne : Lucy told Sam (that)...",
              "Étape 2, les pronoms : I (Lucy) → she ; you (Sam) → him.",
              "Étape 3, la concordance des temps : will → would.",
              "Étape 4, le repère de temps : tomorrow → the next day.",
              "Réponse : Lucy told Sam (that) she would call him the next day.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec said ou told : a) She ... me that she was hungry. b) He ... that he lived in Bristol. c) My parents ... us to be home by ten. d) The guide ... the tourists that the castle was closed. e) Tom ... he had lost his keys.",
              hint: "Y a-t-il une personne (me, us, the tourists) juste après le verbe ? Si oui, c'est told ; sinon, c'est said.",
              solution: [
                "a) told : suivi de la personne me.",
                "b) said : pas de complément de personne.",
                "c) told : suivi de us, puis to + verbe (un ordre).",
                "d) told : suivi de the tourists.",
                "e) said : pas de complément de personne.",
                "Réponse : told, said, told, told, said.",
              ],
            },
            {
              level: 2,
              statement: "Rapportez ces paroles au discours indirect, avec He said ou She said : a) « I am watching a film. » b) « I have visited New York. » c) « I can't swim. » d) « I bought this jacket yesterday. » e) « We will be here tomorrow. »",
              hint: "Faites reculer chaque temps d'un cran, puis vérifiez les pronoms et les repères de temps et de lieu (this, yesterday, here, tomorrow).",
              solution: [
                "a) am watching → was watching : « She said she was watching a film. »",
                "b) have visited → had visited : « He said he had visited New York. »",
                "c) can't → couldn't : « She said she couldn't swim. »",
                "d) bought → had bought, this → that, yesterday → the day before : « He said he had bought that jacket the day before. »",
                "e) will → would, here → there, tomorrow → the next day, we → they : « She said they would be there the next day. »",
                "Réponse : was watching, had visited, couldn't swim, had bought that jacket the day before, would be there the next day.",
              ],
            },
            {
              level: 3,
              statement: "Voici un court dialogue entre un journaliste et une jeune athlète. Journalist: « How old are you? » Athlete: « I am fifteen. » Journalist: « Do you train every day? » Athlete: « Yes, and I will run in London next month. » Journalist (à son assistant) : « Don't forget the photos! » Rédigez le compte rendu au discours indirect, au passé, en cinq phrases.",
              hint: "Utilisez asked + her + how old pour la question ouverte, asked + if pour la question fermée, told + personne + not to pour l'ordre négatif. N'oubliez pas next month → the following month.",
              solution: [
                "Phrase 1, question ouverte : « The journalist asked the athlete how old she was. » (ordre sujet + verbe, sans point d'interrogation)",
                "Phrase 2, réponse : « She said she was fifteen. »",
                "Phrase 3, question fermée : « He asked her if she trained every day. »",
                "Phrase 4, réponse avec will → would et next month → the following month : « She said that she did, and that she would run in London the following month. »",
                "Phrase 5, ordre négatif : « Finally, the journalist told his assistant not to forget the photos. »",
                "Réponse : The journalist asked the athlete how old she was. She said she was fifteen. He asked her if she trained every day. She said that she did, and that she would run in London the following month. Finally, he told his assistant not to forget the photos.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour rapporter une phrase au discours indirect.",
            items: [
              "Identifier le type de phrase : affirmation, question ou ordre.",
              "Choisir le verbe introducteur : said, told + personne, ou asked.",
              "Adapter les pronoms et les possessifs (I → he, my → his).",
              "Faire reculer le temps du verbe si le verbe introducteur est au passé.",
              "Adapter les repères de temps et de lieu (tomorrow → the next day, here → there).",
              "Relire : ordre sujet + verbe, sans guillemets ni point d'interrogation.",
            ],
          },
          quiz: [
            { q: "'I am hungry,' she said. → She said she ... hungry.", options: ["was", "is", "has been", "were"], answer: 0, why: "Après said, le présent recule au prétérit : am → was." },
            { q: "Choose the correct sentence.", options: ["He said me he was busy.", "He told that he was busy.", "He told me he was busy.", "He said to me that he is busy yesterday."], answer: 2, why: "Tell est suivi de la personne : He told me (that) he was busy." },
            { q: "'Where do you live?' → She asked me...", options: ["where do I live.", "where did I live?", "where I live?", "where I lived."], answer: 3, why: "Dans une question rapportée : ordre sujet + verbe, recul du temps, pas de do ni de point d'interrogation." },
            { q: "'Don't be late!' → The teacher told us...", options: ["to not be late.", "not to be late.", "don't be late.", "not being late."], answer: 1, why: "Ordre négatif : told + personne + not to + base verbale." },
            { q: "In reported speech, 'tomorrow' often becomes...", options: ["the next day", "yesterday", "the day before", "today"], answer: 0, why: "On ne parle plus le même jour : tomorrow devient the next day (ou the following day)." },
          ],
          trap: "Garder l'ordre interrogatif dans une question rapportée (« He asked me where did I live ») et confondre say et tell (« She said me ») : on écrit « He asked me where I lived » et « She told me ».",
          method: "Pour réussir la concordance des temps, apprenez les correspondances par paires en les récitant (is → was, has → had, will → would, can → could), puis relisez chaque phrase rapportée en vérifiant trois choses : le temps, les pronoms, les repères de temps et de lieu.",
        },
      ],
    },
    /* ==================================================================== */
    /* LANGAGES : ART AND EXPRESSION                                          */
    /* ==================================================================== */
    {
      id: 'art-expression',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'protest-songs',
          title: "Musique et chansons engagées",
          minutes: 30,
          objectives: [
            "Définir une chanson engagée (protest song) et citer quelques exemples du monde anglophone, avec leur contexte.",
            "Analyser une chanson en anglais : thème, message, ton, éléments musicaux.",
            "Exprimer le but d'une chanson avec to, in order to et so that.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une chanson engagée ?",
              paragraphs: [
                "Une chanson engagée (a protest song) dénonce une injustice ou défend une cause : la paix, l'égalité, la liberté, la lutte contre le racisme ou la pauvreté, la protection de la planète. Elle cherche à faire réfléchir, à sensibiliser le public (to raise awareness) et parfois à rassembler les gens autour d'un combat : elle devient alors un hymne (an anthem).",
                "La musique est un moyen d'expression très puissant : une mélodie facile à retenir (a catchy tune) et un refrain (a chorus) que tout le monde peut chanter permettent à un message de circuler très vite, à la radio, dans les manifestations (demonstrations, marches) et aujourd'hui sur Internet.",
              ],
              box: { label: "Repère", text: "lyrics (les paroles), a verse (un couplet), the chorus (le refrain), the tune / the melody, the rhythm, a singer-songwriter (auteur-compositeur-interprète), a band (un groupe), an anthem (un hymne), to denounce (dénoncer), to protest against, to stand up for." },
            },
            {
              heading: "Des chansons engagées aux États-Unis",
              paragraphs: [
                "En 1939, Billie Holiday enregistre « Strange Fruit », écrite par Abel Meeropol : la chanson dénonce les lynchages de personnes noires dans le sud des États-Unis. Dans les années 1940, le chanteur folk Woody Guthrie écrit « This Land Is Your Land », qui affirme que le pays appartient à tous, y compris aux plus pauvres.",
                "Dans les années 1960, les chansons accompagnent le mouvement des droits civiques et l'opposition à la guerre du Vietnam : « We Shall Overcome », un ancien chant religieux, devient l'hymne du mouvement ; Bob Dylan pose des questions sur la guerre et la liberté dans « Blowin' in the Wind » (1963) ; Sam Cooke chante l'espoir d'un changement dans « A Change Is Gonna Come » (1964) ; Marvin Gaye s'interroge sur la violence et la guerre dans « What's Going On » (1971). Plus récemment, « Alright » de Kendrick Lamar (2015) a été reprise dans les manifestations du mouvement Black Lives Matter.",
              ],
            },
            {
              heading: "Ailleurs dans le monde anglophone",
              paragraphs: [
                "Au Royaume-Uni et en Irlande : en 1971, John Lennon imagine un monde sans guerres ni frontières dans « Imagine » ; en 1983, le groupe irlandais U2 évoque dans « Sunday Bloody Sunday » le Bloody Sunday du 30 janvier 1972 à Derry, en Irlande du Nord, où des soldats britanniques ont tiré sur des manifestants. En 1984, « Free Nelson Mandela » (The Special AKA) réclame la libération de Mandela.",
                "En 1984, Bob Geldof et Midge Ure réunissent de nombreux artistes sous le nom de Band Aid pour enregistrer « Do They Know It's Christmas? » au profit des victimes de la famine en Éthiopie ; en juillet 1985, les concerts Live Aid, à Londres et à Philadelphie, prolongent cette mobilisation. En Jamaïque, Bob Marley chante avec les Wailers « Get Up, Stand Up » (1973), un appel à défendre ses droits.",
              ],
            },
            {
              heading: "Analyser une chanson et exprimer le but",
              paragraphs: [
                "Pour analyser une chanson, répondez à ces questions : Who is the singer? When was the song released? What is the context? What is the song about (le thème)? What does the singer denounce or defend (le message)? What is the tone: angry, sad, hopeful, ironic? Comment la musique (rythme lent ou rapide, refrain répété, instruments) renforce-t-elle le message ?",
                "Pour exprimer le but, employez to ou in order to + base verbale : « Bob Geldof organised Band Aid to help the victims of the famine. », « The singer wrote this song in order to denounce racism. » Avec so that + sujet + modal (can, could, would) : « He sings so that people can hear the message. » N'employez jamais « for » + base verbale pour exprimer le but : on ne dit pas « for help ».",
              ],
              box: { label: "À retenir", text: "The song is about... / The singer denounces... / The message is... / The tone is hopeful. But : to / in order to + base verbale ; so that + sujet + can / could. Jamais « for + base verbale »." },
            },
          ],
          keyPoints: [
            "A protest song dénonce une injustice ou défend une cause ; elle peut devenir an anthem.",
            "États-Unis : Strange Fruit (Billie Holiday, 1939), Blowin' in the Wind (Bob Dylan, 1963), A Change Is Gonna Come (Sam Cooke, 1964).",
            "Royaume-Uni et Irlande : Imagine (John Lennon, 1971), Sunday Bloody Sunday (U2, 1983), Band Aid (1984).",
            "Vocabulaire : lyrics, verse, chorus, tune, anthem, to denounce, to raise awareness.",
            "Analyser : singer, date, context, theme, message, tone, music.",
            "But : to / in order to + base verbale ; so that + sujet + can ; jamais for + verbe.",
          ],
          example: {
            statement: "Présentez en anglais, en quatre phrases, la chanson « Do They Know It's Christmas? » : qui, quand, pourquoi, avec quel résultat.",
            solution: [
              "Étape 1, l'identité et la date : « Do They Know It's Christmas? is a song recorded in 1984 by Band Aid, a group of famous British and Irish artists. »",
              "Étape 2, le contexte : « At that time, there was a terrible famine in Ethiopia. »",
              "Étape 3, le but, avec to ou in order to : « Bob Geldof and Midge Ure organised the project in order to raise money for the victims. »",
              "Étape 4, la suite : « The song was a huge success, and in 1985 they organised the Live Aid concerts to continue the campaign. »",
              "Réponse : Do They Know It's Christmas? is a song recorded in 1984 by Band Aid, a group of famous British and Irish artists. At that time, there was a terrible famine in Ethiopia. Bob Geldof and Midge Ure organised the project in order to raise money for the victims. The song was a huge success, and in 1985 they organised the Live Aid concerts to continue the campaign.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque mot à sa traduction : 1) lyrics, 2) chorus, 3) verse, 4) anthem, 5) to denounce, 6) to raise awareness. a) un hymne ; b) les paroles ; c) sensibiliser ; d) le refrain ; e) dénoncer ; f) un couplet.",
              hint: "Attention : lyrics ne veut pas dire « lyrique », et verse ne veut pas dire « vers » au sens de ligne de poème, mais couplet.",
              solution: [
                "1) lyrics → b) les paroles.",
                "2) chorus → d) le refrain.",
                "3) verse → f) un couplet.",
                "4) anthem → a) un hymne.",
                "5) to denounce → e) dénoncer.",
                "6) to raise awareness → c) sensibiliser.",
                "Réponse : 1b, 2d, 3f, 4a, 5e, 6c.",
              ],
            },
            {
              level: 2,
              statement: "Reliez les deux phrases en exprimant le but avec le mot indiqué : a) Many artists sang together. They wanted to help Ethiopia. (to) b) The band played a free concert. They wanted to support refugees. (in order to) c) The singer wrote simple lyrics. Everybody could sing them. (so that) d) Corrigez : « She wrote this song for denounce racism. »",
              hint: "To et in order to sont suivis de la base verbale ; so that est suivi d'un sujet et d'un modal. Le but ne s'exprime jamais avec for + verbe.",
              solution: [
                "a) « Many artists sang together to help Ethiopia. »",
                "b) « The band played a free concert in order to support refugees. »",
                "c) « The singer wrote simple lyrics so that everybody could sing them. »",
                "d) For + verbe est impossible pour exprimer le but : « She wrote this song to denounce racism. »",
                "Réponse : to help, in order to support, so that everybody could sing them, to denounce.",
              ],
            },
            {
              level: 3,
              statement: "Lisez ce couplet d'une chanson inventée pour l'exercice, puis répondez en anglais. « They cut the trees, they fill the sea / With plastic bags and greed, / But we are young and we can see / The future that we need. / Stand up, stand up, it's not too late! » a) What is the song about? b) What does the singer denounce? c) What is the tone at the end: sad, hopeful or ironic? Justify. d) What is the purpose of the last line?",
              hint: "Repérez les deux parties du couplet : ce qui est dénoncé (They...), puis la réaction des jeunes (But we...). Le dernier vers est à l'impératif.",
              solution: [
                "a) « The song is about the environment and the destruction of nature. »",
                "b) « The singer denounces deforestation, plastic pollution in the sea and greed (the desire to have more and more). »",
                "c) « The tone is hopeful at the end, because the singer says that young people can see the future they need and that it is not too late. » Le connecteur But marque le passage de la dénonciation à l'espoir.",
                "d) « The last line is an order (imperative): the singer wants to encourage young people to act and to fight for the planet. » La répétition de « stand up » fonctionne comme un slogan.",
                "Réponse : environment ; deforestation, plastic pollution and greed ; hopeful (But we are young..., it's not too late) ; to encourage people to act.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque chanson engagée à la cause qu'elle défend.",
            pairs: [
              { left: "Strange Fruit (Billie Holiday, 1939)", right: "denounces lynchings in the South of the USA" },
              { left: "Blowin' in the Wind (Bob Dylan, 1963)", right: "asks questions about war and freedom" },
              { left: "Imagine (John Lennon, 1971)", right: "dreams of a world without wars or borders" },
              { left: "Sunday Bloody Sunday (U2, 1983)", right: "remembers a violent day in Northern Ireland in 1972" },
              { left: "Do They Know It's Christmas? (Band Aid, 1984)", right: "raises money for famine victims in Ethiopia" },
            ],
          },
          quiz: [
            { q: "What is 'a protest song'?", options: ["a song for a party", "a song that denounces an injustice", "a song for children", "a song with no lyrics"], answer: 1, why: "Une protest song dénonce une injustice ou défend une cause." },
            { q: "Choose the correct sentence.", options: ["He sang for help the victims.", "He sang for helping the victims.", "He sang in order help the victims.", "He sang to help the victims."], answer: 3, why: "Le but s'exprime avec to (ou in order to) + base verbale, jamais avec for + verbe." },
            { q: "What does 'the chorus' mean?", options: ["le refrain", "la chorale de l'école", "le couplet", "le chanteur"], answer: 0, why: "The chorus est la partie répétée d'une chanson, le refrain ; le couplet se dit a verse." },
            { q: "Which song became an anthem of the civil rights movement?", options: ["Imagine", "Do They Know It's Christmas?", "We Shall Overcome", "Sunday Bloody Sunday"], answer: 2, why: "We Shall Overcome, un ancien chant religieux, est devenu l'hymne du mouvement des droits civiques." },
            { q: "'He wrote simple lyrics so that everyone ... sing them.'", options: ["can", "could", "to", "for"], answer: 1, why: "So that + sujet + modal ; au passé (wrote), on emploie could." },
          ],
          trap: "Exprimer le but avec for + verbe (« for denounce », « for help ») au lieu de to ou in order to + base verbale, et confondre lyrics (les paroles) avec « lyrique ».",
          method: "Pour présenter une chanson, retenez le trio date, contexte, message : situez-la toujours dans son époque (une guerre, une injustice, une catastrophe), puis dites ce qu'elle dénonce et ce qu'elle espère.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'english-accents',
          title: "Les accents et les variétés de l'anglais",
          minutes: 25,
          objectives: [
            "Identifier les principales variétés de l'anglais (britannique, américain, australien, écossais, irlandais...) et quelques traits de prononciation.",
            "Reconnaître les différences de vocabulaire et d'orthographe entre anglais britannique et anglais américain.",
            "Expliquer en anglais qu'il n'existe pas un seul « bon » anglais.",
          ],
          course: [
            {
              heading: "Une langue, des anglais",
              paragraphs: [
                "Parce qu'il est parlé dans le monde entier, l'anglais existe sous de nombreuses formes, appelées variétés (varieties). Chaque variété a son accent (la prononciation), mais aussi parfois son vocabulaire, son orthographe et quelques tournures grammaticales. On parle aussi de dialecte (a dialect) quand le vocabulaire et la grammaire diffèrent beaucoup.",
                "Les deux grandes références enseignées sont l'anglais britannique (British English) et l'anglais américain (American English). Mais l'anglais d'Australie, de Nouvelle-Zélande, d'Afrique du Sud, d'Inde, du Nigeria ou de Jamaïque est tout aussi correct : il n'y a pas un anglais meilleur que les autres. Tout le monde a un accent, y compris les locuteurs natifs.",
              ],
            },
            {
              heading: "Des accents du Royaume-Uni et d'Irlande",
              paragraphs: [
                "La Received Pronunciation (RP), parfois appelée « BBC English » ou « the King's English », est l'accent britannique traditionnellement donné en modèle, associé au sud de l'Angleterre et aux milieux favorisés ; en réalité, peu de Britanniques le parlent. Le cockney, accent populaire de l'est de Londres, ne prononce souvent pas le h (« 'ouse » pour house), remplace le t entre deux voyelles par un coup de glotte (« wa'er » pour water) et utilise un argot rimé (rhyming slang) : « apples and pears » pour stairs.",
                "Chaque région a son accent : le Scouse de Liverpool (la ville des Beatles), le Geordie de Newcastle, le Brummie de Birmingham. En Écosse, on roule souvent le r et l'on emploie des mots écossais comme wee (petit), aye (oui) ou loch (lac). En Irlande, « grand » signifie souvent « très bien » : « I'm grand, thanks ».",
              ],
              box: { label: "Repère", text: "RP : accent britannique « de référence ». Cockney : est de Londres (h muet, coup de glotte, rhyming slang). Scouse : Liverpool. Geordie : Newcastle. Brummie : Birmingham." },
            },
            {
              heading: "Anglais britannique et anglais américain",
              paragraphs: [
                "Prononciation : en anglais américain, on prononce le r après une voyelle (car, hard, water), alors qu'en RP il est muet ; le t entre deux voyelles ressemble à un d rapide (water, better, city) ; certains mots changent de voyelle : tomato se dit « to-MAH-to » en RP et « to-MAY-to » en américain ; la lettre z se dit « zed » au Royaume-Uni et « zee » aux États-Unis.",
                "Vocabulaire : flat / apartment, lift / elevator, biscuit / cookie, chips / French fries, crisps / chips, autumn / fall, holiday / vacation, the underground (the Tube à Londres) / the subway, pavement / sidewalk, trousers / pants, rubbish / garbage, queue / line, mobile phone / cell phone, petrol / gas, football / soccer (le mot britannique est en premier).",
                "Orthographe : le dictionnaire de Noah Webster (1828) a popularisé aux États-Unis des formes simplifiées : colour / color, centre / center, theatre / theater, travelled / traveled, programme / program. Grammaire : un Britannique dit plutôt « Have you finished? » et « I've got a dog », un Américain « Did you finish? » et « I have a dog ». Enfin, la date 04/07 se lit 4 July au Royaume-Uni mais April 7 aux États-Unis, où le mois vient en premier.",
              ],
              box: { label: "À retenir", text: "UK / US : flat / apartment, holiday / vacation, autumn / fall, underground / subway, chips / French fries, colour / color, centre / center. Aux États-Unis, la date s'écrit mois / jour." },
            },
            {
              heading: "L'anglais dans le reste du monde",
              paragraphs: [
                "L'anglais australien est connu pour ses abréviations familières : « G'day, mate! » (bonjour, l'ami), « arvo » (afternoon), « brekkie » (breakfast). En Inde, l'anglais est une langue commune entre des régions qui parlent des langues différentes, et il a ses propres expressions. Au Nigeria et en Jamaïque, l'anglais coexiste avec des langues créoles ou pidgins.",
                "Comprendre plusieurs accents est une vraie compétence : dans les documents audio, vous entendrez des locuteurs de tous les pays. Ne cherchez pas à imiter parfaitement un accent ; cherchez surtout à être compris (clear) et cohérent : si vous choisissez une orthographe britannique ou américaine dans un texte, gardez-la jusqu'au bout.",
              ],
            },
          ],
          keyPoints: [
            "Il existe de nombreuses variétés d'anglais, toutes correctes ; tout le monde a un accent.",
            "RP : accent britannique de référence ; cockney (est de Londres), Scouse (Liverpool), Geordie (Newcastle).",
            "Américain : r prononcé (car), t qui sonne comme un d (water), « zee » pour z.",
            "UK / US : flat / apartment, holiday / vacation, autumn / fall, lift / elevator, queue / line.",
            "Orthographe : colour / color, centre / center, travelled / traveled ; Webster (1828).",
            "Dans un même texte, gardez une seule orthographe, britannique ou américaine.",
          ],
          example: {
            statement: "Récrivez ce message d'un adolescent britannique en anglais américain : « I'm going on holiday in autumn. We'll stay in a flat near the underground station, and I'll eat lots of chips! »",
            solution: [
              "Étape 1, repérer les mots britanniques : holiday, autumn, flat, underground, chips.",
              "Étape 2, les remplacer par leurs équivalents américains : vacation, fall, apartment, subway, French fries.",
              "Étape 3, vérifier les articles : « an apartment » (voyelle), « on vacation », « in the fall » (en américain, on dit souvent the fall).",
              "Réponse : I'm going on vacation in the fall. We'll stay in an apartment near the subway station, and I'll eat lots of French fries!",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'équivalent américain de ces mots britanniques : a) lift b) biscuit c) trousers d) mobile phone e) rubbish f) petrol.",
              hint: "Pensez aux films et séries américains : où montent les personnages dans un immeuble ? Que mangent-ils avec du lait ?",
              solution: [
                "a) lift → elevator.",
                "b) biscuit → cookie.",
                "c) trousers → pants.",
                "d) mobile phone → cell phone.",
                "e) rubbish → garbage (ou trash).",
                "f) petrol → gas (gasoline).",
                "Réponse : elevator, cookie, pants, cell phone, garbage, gas.",
              ],
            },
            {
              level: 2,
              statement: "Dites si chaque phrase est écrite en orthographe britannique (UK) ou américaine (US), puis récrivez-la dans l'autre orthographe : a) My favourite colour is blue. b) We met at the theater downtown. c) She travelled to the city centre. d) The TV program starts at eight.",
              hint: "Cherchez les terminaisons -our / -or, -re / -er, et le doublement du l (travelled / traveled).",
              solution: [
                "a) UK (favourite, colour) → US : « My favorite color is blue. »",
                "b) US (theater, downtown) → UK : « We met at the theatre in the town centre. » (downtown est un mot surtout américain).",
                "c) UK (travelled, centre) → US : « She traveled to the city center. »",
                "d) US (program pour une émission) → UK : « The TV programme starts at eight. »",
                "Réponse : UK, US, UK, US, avec les réécritures ci-dessus.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 60 à 80 mots). Un camarade affirme : « British English is the only real English. American and Australian people speak bad English. » Répondez-lui en anglais : montrez qu'il se trompe avec au moins deux exemples précis de différences, et donnez votre opinion.",
              hint: "Commencez par le contredire poliment (I don't agree, In fact...), donnez des exemples de vocabulaire ou de prononciation, puis concluez avec In my opinion.",
              solution: [
                "Étape 1, réagir : « I don't agree with you. In fact, there isn't only one real English. »",
                "Étape 2, donner des exemples : « English is spoken all over the world, so it has many varieties. Americans say apartment and fall, whereas the British say flat and autumn, but both are correct. Australians say arvo for afternoon. Even in Britain, people from Liverpool and London don't have the same accent. »",
                "Étape 3, conclure : « In my opinion, every variety is real English. What matters is to be understood. »",
                "Réponse : un texte d'environ 75 mots qui contredit, illustre avec deux exemples ou plus et conclut sur une opinion, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les variétés de l'anglais.",
            statements: [
              { text: "Native speakers of English have no accent.", true: false, why: "Tout le monde a un accent : un Écossais, un Texan et un Londonien n'ont pas le même." },
              { text: "In American English, the date 03/05 means 5 March.", true: false, why: "Aux États-Unis, le mois vient en premier : 03/05 signifie March 5." },
              { text: "« Flat » is British English and « apartment » is American English.", true: true, why: "Les deux désignent un appartement." },
              { text: "Cockney is a traditional accent from East London.", true: true, why: "C'est l'accent populaire de l'est de Londres, connu pour son rhyming slang." },
              { text: "« Color » is the British spelling.", true: false, why: "Color est l'orthographe américaine ; les Britanniques écrivent colour." },
              { text: "Americans usually pronounce the r in « car ».", true: true, why: "L'anglais américain prononce le r après une voyelle, contrairement à la RP." },
              { text: "Australian English is a mistake that should be corrected.", true: false, why: "C'est une variété d'anglais à part entière, aussi correcte que les autres." },
            ],
          },
          quiz: [
            { q: "What is the American word for 'holiday' (les vacances)?", options: ["fall", "subway", "sidewalk", "vacation"], answer: 3, why: "Holiday (UK) = vacation (US)." },
            { q: "Which city is the Scouse accent from?", options: ["Liverpool", "Newcastle", "Birmingham", "London"], answer: 0, why: "Le Scouse est l'accent de Liverpool ; Geordie correspond à Newcastle et Brummie à Birmingham." },
            { q: "Which spelling is British?", options: ["center", "theater", "centre", "color"], answer: 2, why: "Les Britanniques écrivent centre et theatre, les Américains center et theater." },
            { q: "How do Americans say the letter 'z'?", options: ["zed", "zee", "zay"], answer: 1, why: "Zee aux États-Unis, zed au Royaume-Uni." },
            { q: "In Scotland, 'a wee house' is...", options: ["a big house", "an old house", "a small house", "a white house"], answer: 2, why: "Wee est un mot écossais qui signifie « petit »." },
          ],
          trap: "Mélanger les deux orthographes dans un même texte (colour puis color) ou croire qu'un accent est une faute : les variétés sont toutes correctes, mais il faut rester cohérent.",
          method: "Habituez votre oreille aux accents en écoutant chaque semaine quelques minutes d'un média différent (britannique, américain, australien, irlandais), avec les sous-titres en anglais au début, puis sans.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'describe-picture',
          title: "Décrire et commenter une image",
          minutes: 30,
          objectives: [
            "Présenter un document iconographique : sa nature, son auteur, sa date, sa source.",
            "Décrire une image en situant les éléments (in the foreground, on the left...) avec there is / there are et le présent en be + -ing.",
            "Formuler des hypothèses (may, might, must, it looks like) et interpréter le message de l'image.",
            "Donner son opinion et justifier sa réaction personnelle.",
          ],
          course: [
            {
              heading: "Présenter le document",
              paragraphs: [
                "Commencez toujours par dire de quel type de document il s'agit : a photo (a photograph), a painting (un tableau), a drawing (un dessin), a poster (une affiche), a cartoon (un dessin de presse ou humoristique), a comic strip (une bande dessinée), an advertisement (une publicité), a book cover (une couverture).",
                "Donnez ensuite les informations disponibles : the title, the artist ou the photographer, the date, the source (a newspaper, a website, a museum). Phrase type : « This is a painting by Norman Rockwell. It is called The Problem We All Live With and it was painted in 1964. » Si une information manque, dites-le : « We don't know who took this photo. »",
              ],
              box: { label: "Repère", text: "This document is a photo / a painting / a poster / a cartoon / an advertisement. It was taken / painted / drawn by... in... It was published in..." },
            },
            {
              heading: "Décrire : situer les éléments",
              paragraphs: [
                "Décrivez d'abord l'ensemble (« It shows a street in a big city. ») puis les détails, en situant chaque élément : in the foreground (au premier plan), in the background (à l'arrière-plan), in the middle / in the centre (au centre), on the left / on the right (à gauche / à droite), at the top / at the bottom (en haut / en bas), in the top left-hand corner (dans le coin supérieur gauche).",
                "Utilisez there is + singulier, there are + pluriel (« There are four men around a little girl. »), et le présent en be + -ing pour décrire ce que font les personnages au moment représenté : « A woman is holding a sign. », « The children are laughing. » Ajoutez des adjectifs de couleur, de taille et d'attitude : « a tall man », « a worried face », « bright colours ».",
              ],
              box: { label: "Règle", text: "Situer : in the foreground, in the background, in the middle, on the left / right, at the top / bottom. Décrire une action en cours : be + V-ing (She is walking). There is + singulier ; there are + pluriel." },
            },
            {
              heading: "Faire des hypothèses et interpréter",
              paragraphs: [
                "On ne sait pas tout en regardant une image : on formule donc des hypothèses. Avec les modaux : « She may be going to school. », « They might be soldiers. », « He must be cold: it's snowing. » (quasi-certitude). Avec des verbes et adverbes : « It looks like a demonstration. », « He seems to be angry. », « Maybe / Perhaps it's winter. », « She is probably a student. »",
                "Interprétez ensuite le message : « The artist wants to show / denounce / criticise... », « This picture is about racism / war / pollution... », « The photographer wants us to think about... ». Repérez les choix de l'artiste : les couleurs, la lumière, le cadrage, le contraste entre deux éléments, un détail placé au centre.",
              ],
            },
            {
              heading: "Réagir : l'opinion personnelle",
              paragraphs: [
                "Terminez par votre réaction, en la justifiant : « I like this picture because... », « It makes me feel sad / angry / hopeful. » (make + personne + adjectif), « What strikes me is... » (ce qui me frappe, c'est...), « I think the message is still important today because... ».",
                "Exemple : la toile de Norman Rockwell The Problem We All Live With (1964) représente Ruby Bridges, une fillette afro-américaine de six ans, escortée par quatre marshals fédéraux pour entrer dans une école jusque-là réservée aux élèves blancs, à La Nouvelle-Orléans en 1960. On voit sa petite silhouette en robe blanche au centre, les marshals dont on ne voit pas le visage, et sur le mur une insulte raciste et une tomate écrasée. Le contraste entre le calme de l'enfant et la haine du décor fait passer le message.",
              ],
              box: { label: "À retenir", text: "Plan en quatre temps : présenter (what, who, when) ; décrire (where, what is happening) ; interpréter (may, might, must, the artist wants to...) ; réagir (It makes me feel..., What strikes me is...)." },
            },
          ],
          keyPoints: [
            "Présenter : nature du document (photo, painting, poster, cartoon), auteur, date, source.",
            "Situer : in the foreground, in the background, in the middle, on the left / right, at the top / bottom.",
            "Décrire l'action : présent en be + -ing ; there is / there are.",
            "Hypothèses : may, might, must, It looks like, He seems to be, probably.",
            "Interpréter : The artist wants to show / denounce... ; repérer couleurs, contrastes, cadrage.",
            "Réagir : It makes me feel..., What strikes me is...",
          ],
          example: {
            statement: "Décrivez en anglais, en cinq phrases, le tableau de Norman Rockwell The Problem We All Live With (1964), qui montre Ruby Bridges escortée par quatre marshals.",
            solution: [
              "Étape 1, présenter : « This is a painting by the American artist Norman Rockwell. It was painted in 1964 and it is called The Problem We All Live With. »",
              "Étape 2, décrire l'ensemble : « It shows a little Black girl in a white dress who is walking to school. »",
              "Étape 3, situer les détails : « She is in the middle of the picture, between four men. We can't see their faces, but they must be marshals because of their armbands. In the background, on the wall, there is a racist insult and a smashed tomato. »",
              "Étape 4, interpréter : « The girl is Ruby Bridges. The artist wants to denounce racism and segregation in the schools of the South. »",
              "Étape 5, réagir : « What strikes me is the contrast between the calm little girl and the hatred on the wall. »",
              "Réponse : un commentaire en cinq phrases qui présente, décrit, situe, interprète et réagit, comme ci-dessus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais les expressions de lieu : a) au premier plan b) à l'arrière-plan c) au centre d) à droite e) en haut f) dans le coin inférieur gauche.",
              hint: "Attention aux prépositions : in pour foreground, background et middle, on pour left et right, at pour top et bottom.",
              solution: [
                "a) in the foreground.",
                "b) in the background.",
                "c) in the middle (ou in the centre).",
                "d) on the right.",
                "e) at the top.",
                "f) in the bottom left-hand corner.",
                "Réponse : in the foreground, in the background, in the middle, on the right, at the top, in the bottom left-hand corner.",
              ],
            },
            {
              level: 2,
              statement: "Voici la description en français d'une photo (inventée pour l'exercice) : au premier plan, deux adolescents tiennent une pancarte « Save our planet » ; à l'arrière-plan, il y a beaucoup de gens et des immeubles ; à droite, un policier regarde la foule. Rédigez la description en anglais en trois phrases, avec there is / there are et le présent en be + -ing, puis ajoutez une hypothèse.",
              hint: "Une phrase par plan de l'image. Pour l'hypothèse, demandez-vous de quel événement il s'agit et employez It looks like ou must.",
              solution: [
                "Phrase 1, le premier plan : « In the foreground, two teenagers are holding a sign that says Save our planet. »",
                "Phrase 2, l'arrière-plan : « In the background, there are a lot of people and there are some buildings. »",
                "Phrase 3, la droite : « On the right, there is a police officer who is watching the crowd. »",
                "Hypothèse : « It looks like a demonstration for the climate. They must be in a big city. »",
                "Réponse : les trois phrases de description et l'hypothèse ci-dessus.",
              ],
            },
            {
              level: 3,
              statement: "Expression orale ou écrite (niveau A2, 80 à 100 mots). Imaginez une affiche contre le harcèlement scolaire : au centre, un élève seul assis sur un banc ; à gauche, un groupe de trois élèves qui rient en le montrant du doigt ; en bas, en gros caractères : « Don't just watch. Act. » Présentez, décrivez, interprétez et réagissez, en anglais, en suivant le plan en quatre temps.",
              hint: "Utilisez les quatre étapes : This is a poster... ; In the middle..., On the left... ; The message is... ; It makes me feel...",
              solution: [
                "Étape 1, présenter : « This document is a poster against bullying at school. »",
                "Étape 2, décrire : « In the middle, a boy is sitting alone on a bench. He looks sad and lonely. On the left, there are three students who are laughing and pointing at him. At the bottom, we can read the slogan Don't just watch. Act. »",
                "Étape 3, interpréter : « The poster wants to denounce bullying. It speaks to the witnesses: people who see bullying must not stay silent, they should help the victim or tell an adult. »",
                "Étape 4, réagir : « It makes me feel angry and sad, but I think it's a good poster because the slogan is short and powerful. »",
                "Réponse : un commentaire d'environ 100 mots qui suit les quatre étapes, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour commenter une image.",
            items: [
              "Dire la nature du document : photo, painting, poster, cartoon...",
              "Donner l'auteur, la date et la source.",
              "Décrire l'ensemble de la scène.",
              "Situer les détails : foreground, background, left, right.",
              "Formuler des hypothèses avec may, might, must, It looks like.",
              "Interpréter le message : The artist wants to denounce...",
              "Donner sa réaction : It makes me feel...",
            ],
          },
          quiz: [
            { q: "How do you say 'à l'arrière-plan'?", options: ["in the background", "in the foreground", "at the back side", "behind the plan"], answer: 0, why: "Background = arrière-plan ; foreground = premier plan." },
            { q: "Choose the best sentence to describe an action in a photo.", options: ["A man holds an umbrella every day.", "A man held an umbrella.", "A man has held an umbrella.", "A man is holding an umbrella."], answer: 3, why: "On décrit ce qui se passe sur l'image avec le présent en be + -ing." },
            { q: "'He is wearing a coat and a scarf. It ... be winter.'", options: ["can't", "mustn't", "must", "doesn't"], answer: 2, why: "Must exprime ici une déduction quasi certaine à partir d'indices de l'image." },
            { q: "Which word means 'un dessin de presse humoristique'?", options: ["a poster", "a cartoon", "a painting", "a caption"], answer: 1, why: "A cartoon est un dessin humoristique ou satirique, souvent publié dans la presse." },
            { q: "'There ... three children on the left.'", options: ["is", "are", "has", "have"], answer: 1, why: "There are + nom pluriel (three children)." },
          ],
          trap: "Décrire une image au présent simple (« A girl walks ») ou se contenter d'une liste sans interpréter : on décrit l'action en cours avec be + -ing, puis on explique le message.",
          method: "Préparez un commentaire d'image comme un zoom : du général (le type de document, la scène) au particulier (les détails situés), puis remontez vers le sens (le message, votre réaction). Gardez les quatre mots clés sur votre brouillon : present, describe, interpret, react.",
        },
      ],
    },
    /* ==================================================================== */
    /* MÉTHODES : COMPRENDRE ET S'EXPRIMER                                    */
    /* ==================================================================== */
    {
      id: 'communication-skills',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'listening-strategies',
          title: "Comprendre un document audio ou vidéo",
          minutes: 25,
          objectives: [
            "Anticiper le contenu d'un document audio ou vidéo à partir de son titre, de son type et des images.",
            "Repérer les informations essentielles (qui, quoi, où, quand, pourquoi) puis les détails, en s'appuyant sur les mots accentués.",
            "Prendre des notes efficaces et rendre compte en français de ce que l'on a compris.",
          ],
          course: [
            {
              heading: "Avant l'écoute : anticiper",
              paragraphs: [
                "Comprendre un document oral ne commence pas à la première seconde d'écoute. Lisez d'abord la consigne et le titre, observez les images s'il s'agit d'une vidéo, et identifiez le type de document : a conversation, an interview, a news report (un reportage), an advertisement, a podcast, a film trailer (une bande-annonce), a speech (un discours). Chaque type a ses codes : un bulletin d'information donne des faits, une publicité cherche à convaincre.",
                "Faites ensuite des hypothèses : de quoi va-t-on parler ? Qui parle ? Notez rapidement les mots anglais que vous connaissez sur ce thème : votre cerveau les reconnaîtra plus facilement à l'écoute. Par exemple, pour un document intitulé « A day at Notting Hill Carnival », attendez-vous à des mots comme music, costumes, dance, parade, crowd, August, London.",
              ],
              box: { label: "Méthode", text: "Avant d'écouter : lire la consigne et le titre, observer les images, identifier le type de document, faire des hypothèses, lister le vocabulaire attendu." },
            },
            {
              heading: "Pendant l'écoute : du général au détail",
              paragraphs: [
                "À la première écoute, ne cherchez pas à tout comprendre : visez la compréhension globale. How many speakers are there? Who are they? Where are they? What is the topic? What is the mood (l'ambiance) ? Les indices non verbaux aident beaucoup : le ton de la voix (angry, excited, worried), les bruits de fond (background noise : une gare, une classe, un stade), la musique, les images.",
                "Aux écoutes suivantes, cherchez les détails. En anglais, les mots qui portent le sens (noms, verbes, adjectifs, chiffres, négations) sont accentués, prononcés plus fort et plus lentement ; les petits mots grammaticaux (to, a, the, of, and) sont réduits. Concentrez-vous donc sur les mots accentués. Si un mot vous échappe, ne vous bloquez pas : continuez à écouter, le contexte vous aidera souvent à le deviner.",
              ],
            },
            {
              heading: "Les pièges de l'oral",
              paragraphs: [
                "Les nombres : thirteen est accentué sur la fin (thir-TEEN), thirty sur le début (THIR-ty) ; même chose pour fourteen / forty, fifteen / fifty. Les années se lisent par paires : 1963 se dit nineteen sixty-three ; 2025 se dit twenty twenty-five ou two thousand and twenty-five. Les dates : « the fourth of July » ou « July the fourth ».",
                "Les contractions et formes réduites : « I'd » peut vouloir dire I would ou I had ; « he's » peut vouloir dire he is ou he has (« He's been to Canada » = he has been). À l'oral familier américain, « gonna » = going to, « wanna » = want to, « gotta » = got to. Enfin, la négation est souvent contractée et peu audible : écoutez bien la différence entre can (court) et can't (plus long et accentué).",
              ],
              box: { label: "À retenir", text: "Mots accentués = mots de sens. thir-TEEN ≠ THIR-ty. 1963 = nineteen sixty-three. he's = he is ou he has ; I'd = I would ou I had. gonna = going to, wanna = want to." },
            },
            {
              heading: "Prendre des notes et rendre compte",
              paragraphs: [
                "Notez des mots clés, pas des phrases : noms propres, chiffres, dates, lieux, verbes importants. Utilisez des symboles pour aller vite : + (et, plus), = (c'est), ≠ (différent, contraire), → (conduit à, donc), ? (doute), et des abréviations (ppl pour people, govt pour government). Organisez votre feuille en colonnes : Who / What / Where / When / Why.",
                "Après l'écoute, reconstruisez le sens : reliez vos notes, vérifiez qu'elles forment une histoire cohérente. Pour un compte rendu en français, restez fidèle au document : n'inventez rien, citez les chiffres et les noms exacts, et distinguez ce qui est certain de ce que vous avez cru entendre. Une réponse partielle mais juste vaut mieux qu'une invention.",
              ],
            },
          ],
          keyPoints: [
            "Avant : consigne, titre, images, type de document, hypothèses, vocabulaire attendu.",
            "1re écoute : le général (who, what, where, mood) ; écoutes suivantes : les détails.",
            "Se concentrer sur les mots accentués ; ne pas se bloquer sur un mot inconnu.",
            "Nombres : thir-TEEN ≠ THIR-ty ; années lues par paires (nineteen sixty-three).",
            "Contractions : he's = is ou has ; I'd = would ou had ; gonna = going to.",
            "Notes : mots clés, symboles, colonnes 5 W ; compte rendu fidèle, sans invention.",
          ],
          example: {
            statement: "Vous allez écouter un document intitulé « Teens and phones: a new rule in a British school ». On voit une cour d'école et une journaliste avec un micro. Que faites-vous avant l'écoute ?",
            solution: [
              "Étape 1, identifier le type de document : une journaliste avec un micro, c'est sans doute un reportage (a news report) avec des interviews.",
              "Étape 2, faire des hypothèses sur le sujet : une école britannique a pris une nouvelle règle sur les téléphones, sans doute une interdiction ou une limitation.",
              "Étape 3, imaginer qui va parler : la journaliste, peut-être un chef d'établissement (a head teacher), des élèves, des parents.",
              "Étape 4, lister le vocabulaire attendu : mobile phone, ban, rule, allowed, forbidden, pupils, head teacher, break time, social media, screen time.",
              "Réponse : on anticipe un reportage sur une école britannique qui limite ou interdit les téléphones, avec des avis d'adultes et d'élèves, et l'on prépare le vocabulaire de la règle et de l'école.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez en chiffres ce que vous entendriez : a) nineteen sixty-three b) fifteen c) fifty d) the fourth of July e) two thousand and eight f) eleven forty-five (une heure).",
              hint: "Les années se lisent par paires de chiffres (sauf 2000 à 2009, souvent lues two thousand and...). Une heure peut se dire en deux nombres.",
              solution: [
                "a) 1963.",
                "b) 15 (accent sur la fin : fif-TEEN).",
                "c) 50 (accent sur le début : FIF-ty).",
                "d) le 4 juillet (4 July).",
                "e) 2008.",
                "f) 11 h 45.",
                "Réponse : 1963, 15, 50, 4 juillet, 2008, 11 h 45.",
              ],
            },
            {
              level: 2,
              statement: "Dans ces phrases entendues, dites ce que représente la contraction ('s ou 'd) : a) « He's from Dublin. » b) « She's lived here for ten years. » c) « I'd like a sandwich, please. » d) « When I arrived, the film had started. I'd missed the beginning. » e) « It's been a long day. »",
              hint: "Regardez ce qui suit : un participe passé (lived, missed, been) après 's ou 'd signale has ou had ; une base verbale après 'd signale would.",
              solution: [
                "a) He's = He is (suivi d'un groupe prépositionnel, from Dublin).",
                "b) She's = She has (suivi du participe passé lived : present perfect).",
                "c) I'd = I would (suivi de la base verbale like).",
                "d) I'd = I had (suivi du participe passé missed : past perfect).",
                "e) It's = It has (suivi de been : present perfect).",
                "Réponse : is, has, would, had, has.",
              ],
            },
            {
              level: 3,
              statement: "Voici la transcription d'un message radio (inventé pour l'exercice). « Good morning, this is Radio Brighton. Because of the storm, all trains between Brighton and London are cancelled this morning. Buses will replace them from nine thirty. The Pier will stay closed until Thursday. And good news for music fans: the beach concert planned for Saturday isn't cancelled, it's just been moved to Sunday, at six p.m. » Rendez compte en français, en quatre informations précises.",
              hint: "Prenez des notes en colonnes (quoi, où, quand, pourquoi), puis vérifiez les heures, les jours et les négations (isn't cancelled).",
              solution: [
                "Information 1, la cause et le problème : à cause de la tempête, tous les trains entre Brighton et Londres sont supprimés ce matin.",
                "Information 2, la solution : des bus remplacent les trains à partir de 9 h 30.",
                "Information 3 : la jetée (the Pier) reste fermée jusqu'à jeudi.",
                "Information 4, attention à la négation : le concert sur la plage prévu samedi n'est pas annulé, il est seulement déplacé à dimanche, 18 h (six p.m.) ; « it's just been moved » = it has just been moved.",
                "Réponse : trains Brighton-Londres supprimés ce matin à cause de la tempête ; bus de remplacement dès 9 h 30 ; jetée fermée jusqu'à jeudi ; concert déplacé de samedi à dimanche 18 h.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour comprendre un document audio.",
            items: [
              "Lire la consigne et le titre.",
              "Observer les images et identifier le type de document.",
              "Faire des hypothèses et lister le vocabulaire attendu.",
              "Première écoute : la situation générale (qui, où, de quoi, quel ton).",
              "Écoutes suivantes : les détails, en notant les mots accentués et les chiffres.",
              "Relier ses notes et rédiger le compte rendu sans rien inventer.",
            ],
          },
          quiz: [
            { q: "During the first listening, you should...", options: ["write down every word", "translate each sentence", "stop at every unknown word", "understand the general situation"], answer: 3, why: "La première écoute sert à la compréhension globale : qui, où, de quoi l'on parle." },
            { q: "Which number is stressed on the last syllable?", options: ["forty", "fourteen", "fifty", "sixty"], answer: 1, why: "Les nombres en -teen sont accentués à la fin (four-TEEN), ceux en -ty au début." },
            { q: "'She's finished her homework.' Here, 'she's' means...", options: ["she has", "she is", "she was", "she does"], answer: 0, why: "'s est suivi du participe passé finished : c'est has (present perfect)." },
            { q: "How do you say 1984?", options: ["one thousand nine eighty-four", "nineteen eighty-four", "nineteen hundred eighty-four", "one nine eight four"], answer: 1, why: "Les années se lisent par paires de chiffres : nineteen / eighty-four." },
            { q: "'gonna' means...", options: ["going", "gone", "going to", "got to"], answer: 2, why: "Gonna est la forme orale familière de going to : I'm gonna call you = I'm going to call you." },
          ],
          trap: "Vouloir comprendre chaque mot dès la première écoute et décrocher au premier mot inconnu, au lieu de saisir d'abord la situation générale ; et confondre thirteen et thirty.",
          method: "Préparez une grille vide avant chaque écoute (Who / What / Where / When / Why / Numbers) : à chaque écoute, remplissez une nouvelle ligne, puis relisez la grille pour rédiger votre compte rendu.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'oral-presentation',
          title: "Prendre la parole en continu : présenter un projet",
          minutes: 30,
          objectives: [
            "Structurer une présentation orale : introduction, annonce du plan, développement, conclusion.",
            "Enchaîner ses idées avec des connecteurs (first of all, then, moreover, however, to conclude).",
            "Présenter un projet au futur (will, be going to) et exprimer le but.",
            "Gérer sa prise de parole : notes, regard, voix, et stratégies quand un mot manque.",
          ],
          course: [
            {
              heading: "Une présentation bien construite",
              paragraphs: [
                "Prendre la parole en continu, c'est parler seul pendant une à quelques minutes devant un public, sans être interrompu. Pour que l'auditoire vous suive, votre présentation doit avoir un plan clair en trois parties : une introduction, un développement en deux ou trois points, une conclusion.",
                "L'introduction salue, présente le sujet et annonce le plan : « Good morning everyone. Today, I'm going to talk about our project: a school trip to Edinburgh. First, I'll explain why we chose this city. Then, I'll present our programme. Finally, I'll tell you how we are going to finance it. » La conclusion résume et remercie : « To sum up, ... Thank you for listening. Do you have any questions? »",
              ],
              box: { label: "À retenir", text: "Introduction : Good morning everyone. Today, I'm going to talk about... First, I'll... Then, I'll... Finally, I'll... Conclusion : To sum up / To conclude, ... Thank you for listening. Do you have any questions?" },
            },
            {
              heading: "Enchaîner ses idées : les connecteurs",
              paragraphs: [
                "Les connecteurs sont les panneaux indicateurs de votre discours. Pour ordonner : first of all, first, secondly, then, next, finally. Pour ajouter : moreover, what's more, besides, also. Pour opposer : but, however, on the other hand. Pour illustrer : for example, for instance, such as. Pour expliquer la cause et la conséquence : because, since, so, that's why, as a result.",
                "Pour passer d'une partie à l'autre, annoncez-le : « Now, let's move on to the programme. », « Let me now explain how... ». Pour revenir sur un point important : « As I said before, ... ». Ces phrases donnent à votre public le temps de suivre, et à vous le temps de respirer.",
              ],
            },
            {
              heading: "Parler d'un projet : futur et but",
              paragraphs: [
                "Un projet se présente au futur. Be going to exprime une intention déjà décidée : « We are going to visit Edinburgh Castle. » Will exprime une prévision ou une décision : « It will be a great experience. », « The trip will cost 350 euros. » Pour un programme fixé, on peut employer le présent en be + -ing : « We are leaving on 12 May. »",
                "Pour justifier le projet, exprimez le but avec to ou in order to + base verbale : « We want to go to Scotland to improve our English and to discover Scottish culture. » Exprimez aussi les conditions avec if : « If we sell enough cakes, we will be able to pay for the coach. »",
              ],
              box: { label: "Règle", text: "Intention : be going to + base verbale. Prévision : will + base verbale. But : to / in order to + base verbale. Condition : If + présent, will + base verbale." },
            },
            {
              heading: "Gérer sa prise de parole",
              paragraphs: [
                "Ne lisez pas un texte rédigé : préparez des notes avec des mots clés et votre plan, sur une fiche ou sur un diaporama sobre. Répétez plusieurs fois à voix haute en vous chronométrant. Le jour venu, regardez votre public (eye contact), parlez assez fort et lentement, marquez des pauses entre les parties, et soignez l'accent de mot sur les termes importants.",
                "Si un mot vous manque, ne restez pas bloqué : gagnez du temps (« Let me think... », « How can I put it? ») ou contournez la difficulté avec une périphrase : « It's a kind of... », « It's something you use to... », « It's the opposite of... ». Par exemple, sans le mot « coach » : « It's a big bus you take for long journeys. » Ces stratégies sont valorisées : l'important est de communiquer.",
              ],
            },
          ],
          keyPoints: [
            "Plan : introduction (sujet + annonce du plan), développement en 2 ou 3 points, conclusion.",
            "Annonce : First, I'll... Then, I'll... Finally, I'll... ; fin : To sum up... Thank you for listening.",
            "Connecteurs : first of all, then, moreover, however, for example, that's why.",
            "Projet : be going to (intention), will (prévision), to / in order to (but), if (condition).",
            "Notes en mots clés, regard vers le public, voix posée, pauses.",
            "Mot manquant : Let me think... ; It's a kind of... ; It's something you use to...",
          ],
          example: {
            statement: "Rédigez en anglais l'introduction d'une présentation de deux minutes sur ce projet : votre classe veut organiser une vente de gâteaux (a bake sale) pour une association qui protège les animaux.",
            solution: [
              "Étape 1, saluer : « Hello everyone. »",
              "Étape 2, présenter le sujet au futur proche : « Today, I'm going to present our class project: we are going to organise a bake sale for an animal charity. »",
              "Étape 3, annoncer le plan en trois points : « First, I'll explain why we chose this charity. Then, I'll tell you how the bake sale will work. Finally, I'll explain how you can help us. »",
              "Réponse : Hello everyone. Today, I'm going to present our class project: we are going to organise a bake sale for an animal charity. First, I'll explain why we chose this charity. Then, I'll tell you how the bake sale will work. Finally, I'll explain how you can help us.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces connecteurs selon leur fonction (ordonner, ajouter, opposer, illustrer, conclure) : however, first of all, moreover, for instance, to sum up, then, on the other hand, what's more, for example, finally.",
              hint: "Traduisez chaque connecteur : cependant, tout d'abord, de plus, par exemple, pour résumer, ensuite, d'un autre côté, en outre, par exemple, enfin.",
              solution: [
                "Ordonner : first of all, then, finally.",
                "Ajouter : moreover, what's more.",
                "Opposer : however, on the other hand.",
                "Illustrer : for instance, for example.",
                "Conclure : to sum up.",
                "Réponse : 3 connecteurs d'ordre, 2 d'ajout, 2 d'opposition, 2 d'illustration, 1 de conclusion.",
              ],
            },
            {
              level: 2,
              statement: "Vous ne connaissez pas ces mots en anglais. Expliquez-les avec une périphrase : a) un parapluie b) un boulanger c) un aéroport d) une clé.",
              hint: "Utilisez It's something you use to..., It's a person who..., It's a place where...",
              solution: [
                "a) « It's something you use when it's raining, to stay dry. » (an umbrella)",
                "b) « It's a person who makes bread. » (a baker)",
                "c) « It's a place where you take a plane. » (an airport)",
                "d) « It's a small object you use to open a door. » (a key)",
                "Réponse : quatre périphrases construites avec something you use, a person who, a place where et an object you use, qui permettent de se faire comprendre sans le mot exact.",
              ],
            },
            {
              level: 3,
              statement: "Prise de parole en continu (environ 2 minutes, soit 150 à 200 mots). Votre classe propose de créer un jardin potager au collège. Rédigez le texte de votre présentation pour le conseil d'administration, en anglais : introduction avec annonce du plan, raisons du projet, organisation (au futur), conclusion. Utilisez au moins quatre connecteurs différents, be going to, will, et une expression du but.",
              hint: "Suivez le plan annoncé dans l'introduction. Pour les raisons, pensez à l'environnement, à la cantine et à l'apprentissage ; pour l'organisation, au lieu, aux personnes, au calendrier.",
              solution: [
                "Étape 1, l'introduction : « Good afternoon everyone. Today, I'm going to present our project: a vegetable garden at school. First, I'll explain why it's a good idea. Then, I'll tell you how we are going to organise it. »",
                "Étape 2, les raisons : « First of all, a garden is good for the environment: it will attract bees and birds. Moreover, we could use our vegetables in the canteen. What's more, it's a great way to learn science in a practical way. »",
                "Étape 3, l'organisation au futur : « We are going to use the empty space behind the gym. Students from each class will look after the garden twice a week, with our science teacher. However, we will need some money to buy tools and seeds, so we are going to organise a bake sale in order to raise 200 euros. »",
                "Étape 4, la conclusion : « To sum up, this project is useful, cheap and educational. We hope you will support it. Thank you for listening. Do you have any questions? »",
                "Réponse : un texte d'environ 170 mots, avec un plan annoncé et respecté, des connecteurs variés (first of all, moreover, what's more, however, to sum up), be going to, will et le but (in order to).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase à sa fonction dans une présentation.",
            pairs: [
              { left: "Today, I'm going to talk about...", right: "annoncer le sujet" },
              { left: "First, I'll... Then, I'll... Finally, I'll...", right: "annoncer le plan" },
              { left: "Now, let's move on to...", right: "passer à la partie suivante" },
              { left: "It's a kind of...", right: "contourner un mot qui manque" },
              { left: "To sum up, ...", right: "conclure" },
              { left: "Do you have any questions?", right: "inviter le public à réagir" },
            ],
          },
          quiz: [
            { q: "Which sentence announces the plan of a presentation?", options: ["Thank you for listening.", "Let me think...", "Do you have any questions?", "First, I'll present the city. Then, I'll explain our programme."], answer: 3, why: "L'annonce du plan énumère les parties avec First, Then, Finally." },
            { q: "'We ... visit the castle on Monday: it's already booked.'", options: ["are going to", "will to", "going to", "are go to"], answer: 0, why: "Intention décidée à l'avance : be going to + base verbale." },
            { q: "You can't remember the word 'scissors'. What do you say?", options: ["Sorry, I stop.", "It's a thing you use to cut paper.", "Scissors is a French word.", "I don't speak."], answer: 1, why: "La périphrase (something you use to...) permet de se faire comprendre sans le mot exact." },
            { q: "Which connector adds an idea?", options: ["however", "moreover", "finally", "on the other hand"], answer: 1, why: "Moreover signifie « de plus » : il ajoute une idée ; however et on the other hand opposent." },
            { q: "A good oral presentation is...", options: ["read word for word from a long text", "said as fast as possible", "prepared with key-word notes and rehearsed aloud", "improvised without any plan"], answer: 2, why: "On prépare des notes en mots clés et l'on répète à voix haute, sans lire un texte." },
          ],
          trap: "Lire mot à mot un texte entièrement rédigé, les yeux sur la feuille : le public décroche et l'on perd toute intonation. Préparez des mots clés et regardez votre auditoire.",
          method: "Répétez votre présentation trois fois à voix haute en vous chronométrant, la dernière fois en vous enregistrant : réécoutez-vous pour repérer les hésitations, les mots mal accentués et les passages trop rapides.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'writing-story',
          title: "Écrire un récit ou un courriel structuré",
          minutes: 35,
          objectives: [
            "Rédiger un récit au passé structuré (situation initiale, événement, péripéties, dénouement) avec des connecteurs temporels.",
            "Employer le prétérit, le past continuous et le past perfect dans un récit.",
            "Rédiger un courriel formel ou informel avec les formules d'ouverture et de clôture adaptées.",
          ],
          course: [
            {
              heading: "Construire un récit",
              paragraphs: [
                "Un récit (a story, a narrative) suit en général cinq étapes : la situation de départ (who, where, when), un élément déclencheur (something unexpected happens), des péripéties (events), un moment de tension (the climax), et le dénouement (the ending), parfois suivi d'une leçon ou d'un sentiment final. Écrivez un paragraphe par grande étape.",
                "Un bon récit fait vivre la scène : des adjectifs précis (a dark, narrow street ; a terrified scream), des adverbes (suddenly, slowly, quietly), des verbes expressifs (whisper, rush, shout au lieu de say et go), un peu de dialogue, et les sentiments des personnages (I was scared, she felt relieved).",
              ],
              box: { label: "Repère", text: "Beginning (who, where, when) → problem (suddenly...) → events → climax → ending (in the end, finally). Un paragraphe par étape." },
            },
            {
              heading: "Les temps et les connecteurs du récit",
              paragraphs: [
                "Le prétérit (past simple) raconte les actions principales, dans l'ordre : « I opened the door and I saw a dog. » Le past continuous (was / were + -ing) décrit le décor et l'action en cours, interrompue par un événement : « It was raining and I was walking home when I heard a strange noise. » Le past perfect (had + participe passé) exprime ce qui s'était passé avant : « When I arrived, the train had left. »",
                "Les connecteurs temporels donnent le rythme : first, at first (au début), then, after that, next, later, meanwhile (pendant ce temps), while (pendant que, + past continuous), as soon as (dès que), suddenly, all of a sudden, finally, in the end. Attention au faux ami : eventually signifie « finalement, à la fin », et non « éventuellement » (qui se dit possibly).",
              ],
              box: { label: "À retenir", text: "Past simple : actions principales. Past continuous : décor, action en cours (while, when). Past perfect : antériorité. Eventually = finalement (faux ami) ; éventuellement = possibly." },
            },
            {
              heading: "Le courriel informel",
              paragraphs: [
                "À un ami ou à un correspondant, le ton est familier. On commence par « Hi Tom, » ou « Dear Tom, », puis on prend des nouvelles ou l'on remercie : « How are you? Thanks for your email. » On donne ensuite les informations, un paragraphe par sujet, et on termine par une phrase d'ouverture : « Write back soon! », « I can't wait to see you. »",
                "Formules finales : « Love, » (proches), « Best wishes, », « See you soon, », « Take care, », puis le prénom. Les contractions (I'm, don't, can't) et les points d'exclamation sont naturels dans ce registre ; évitez cependant les abréviations de SMS (u, pls, lol) dans un exercice écrit.",
              ],
            },
            {
              heading: "Le courriel formel",
              paragraphs: [
                "Pour écrire à une institution, à un hôtel ou à une personne inconnue, le registre est soutenu. Ouverture : « Dear Sir or Madam, » si l'on ne connaît pas le nom, « Dear Mr Brown, » ou « Dear Ms Brown, » si on le connaît. Premier paragraphe : le but du courriel (« I am writing to ask for information about... », « I am writing to apply for... »). Ensuite, les détails ou les questions, avec des formules polies : « Could you tell me...? », « I would like to know... ».",
                "Clôture : « I look forward to hearing from you. » (attention : look forward to + -ing). Puis, en anglais britannique, « Yours faithfully, » après Dear Sir or Madam, et « Yours sincerely, » après Dear Mr / Ms + nom ; « Best regards » ou « Kind regards » conviennent dans la plupart des courriels. Signez avec votre prénom et votre nom. Pas de contractions dans un courriel formel : I am, I would, do not.",
              ],
              box: { label: "Règle", text: "Dear Sir or Madam → Yours faithfully. Dear Mr / Ms Smith → Yours sincerely. I am writing to... I would like to know... I look forward to hearing from you. Pas de contractions." },
            },
          ],
          keyPoints: [
            "Récit : beginning, problem, events, climax, ending ; un paragraphe par étape.",
            "Past simple (actions), past continuous (décor, action en cours), past perfect (antériorité).",
            "Connecteurs : at first, then, after that, while, as soon as, suddenly, in the end.",
            "Eventually = finalement ; éventuellement = possibly.",
            "Informel : Hi / Dear Tom ; contractions ; Love, Best wishes, See you soon.",
            "Formel : Dear Sir or Madam / Yours faithfully ; Dear Mr Smith / Yours sincerely ; I look forward to hearing from you.",
          ],
          example: {
            statement: "Complétez ce début de récit avec le bon temps (past simple, past continuous ou past perfect) : « It (be) a cold night. I (walk) home when I (hear) a strange noise. I (turn) around, but the man who (follow) me (disappear). »",
            solution: [
              "Étape 1, le décor : un état passé, au past simple pour be : « It was a cold night. »",
              "Étape 2, l'action en cours interrompue : « I was walking home » (past continuous) « when I heard a strange noise » (past simple, l'événement soudain).",
              "Étape 3, l'action principale suivante : « I turned around » (past simple).",
              "Étape 4, ce qui était en cours avant et ce qui s'était déjà produit : « the man who was following me » (past continuous) « had disappeared » (past perfect : il avait disparu avant que je me retourne).",
              "Réponse : It was a cold night. I was walking home when I heard a strange noise. I turned around, but the man who was following me had disappeared.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez le bon connecteur : a) (While / Suddenly) I was reading, the lights went out. b) (At first / Eventually) I was scared, but then I relaxed. c) We waited for hours, and (eventually / possibly) the bus arrived. d) (As soon as / Meanwhile) she saw the dog, she ran to it. e) (In the end / First), everybody was safe.",
              hint: "While est suivi d'une action en cours ; eventually signifie « finalement » ; in the end annonce le dénouement.",
              solution: [
                "a) While : « While I was reading » (action en cours, past continuous).",
                "b) At first : « au début », opposé à then.",
                "c) eventually : « finalement », après une longue attente (possibly signifierait « peut-être »).",
                "d) As soon as : « dès qu'elle a vu le chien ».",
                "e) In the end : c'est le dénouement.",
                "Réponse : While, At first, eventually, As soon as, In the end.",
              ],
            },
            {
              level: 2,
              statement: "Ce courriel formel contient cinq erreurs de registre ou de formule. Repérez-les et corrigez-les : « Hi Sir or Madam, I'm writing to ask for information about your summer camp in Cornwall. Could you tell me how much does it cost? I look forward to hear from you. Love, Lucas Martin »",
              hint: "Vérifiez l'ouverture, les contractions, l'ordre des mots dans la question indirecte (Could you tell me...), la construction de look forward to, et la formule finale qui correspond à Dear Sir or Madam.",
              solution: [
                "Erreur 1 : « Hi » est familier → « Dear Sir or Madam, ».",
                "Erreur 2 : la contraction « I'm » → « I am writing to ask for information... ».",
                "Erreur 3 : après Could you tell me, la question est indirecte et garde l'ordre sujet + verbe, sans does → « Could you tell me how much it costs? »",
                "Erreur 4 : « look forward to hear » → « I look forward to hearing from you. » (to est ici une préposition, suivie de -ing).",
                "Erreur 5 : « Love, » est réservé aux proches → « Yours faithfully, » puisque le destinataire n'est pas nommé.",
                "Réponse : Dear Sir or Madam, I am writing to ask for information about your summer camp in Cornwall. Could you tell me how much it costs? I look forward to hearing from you. Yours faithfully, Lucas Martin",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2 vers B1, 100 à 120 mots). Écrivez la suite de ce récit en anglais, au passé : « Last summer, I was spending a week with my cousins in a small village in Wales. One evening, while we were exploring an old house, we found a locked box... » Votre récit doit comporter un élément de tension, un dénouement, au moins trois connecteurs temporels et les trois temps du passé.",
              hint: "Prévoyez trois paragraphes : ce que vous faites de la boîte, le moment de tension, le dénouement. Vérifiez à la fin que vous avez un past continuous, un past perfect et des past simple.",
              solution: [
                "Étape 1, le plan : ouvrir la boîte (événement), un bruit qui fait peur (tension), une explication rassurante (dénouement).",
                "Étape 2, la rédaction, par exemple : « At first, we didn't know how to open it. Then my cousin Rhys found a rusty key under a loose floorboard. Inside the box, there were old letters and a photo of a young soldier. While we were reading the first letter, we suddenly heard footsteps upstairs. We were terrified! The door opened slowly... It was the old neighbour, Mrs Jones. She smiled and explained that the soldier was her grandfather. He had written these letters to his wife during the war, and she had looked for them for years. In the end, we gave her the box, and she invited us for tea. »",
                "Étape 3, la vérification : environ 115 mots ; past continuous (were reading), past perfect (had written, had looked), past simple (found, heard, opened, smiled...) ; connecteurs (at first, then, while, suddenly, in the end) ; tension (footsteps, terrified) et dénouement.",
                "Réponse : un récit de 100 à 120 mots qui respecte les contraintes, comme le modèle ci-dessus.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Récit et courriel en anglais.",
            statements: [
              { text: "« Eventually » means « éventuellement ».", true: false, why: "Faux ami : eventually signifie « finalement » ; éventuellement se dit possibly." },
              { text: "The past continuous is used to describe the background of a story.", true: true, why: "It was raining, people were walking... : le past continuous plante le décor." },
              { text: "« I look forward to hear from you » is correct.", true: false, why: "To est une préposition dans look forward to : on dit hearing." },
              { text: "After « Dear Sir or Madam », a British writer ends with « Yours faithfully ».", true: true, why: "Yours faithfully quand on ne connaît pas le nom ; Yours sincerely quand on le connaît." },
              { text: "Contractions like « I'm » and « don't » are fine in an email to a friend.", true: true, why: "Elles sont naturelles dans le registre informel, mais à éviter dans un courriel formel." },
              { text: "« Love, » is a good way to end an email to a hotel manager.", true: false, why: "Love est réservé aux proches ; à un inconnu, on écrit Yours faithfully ou Kind regards." },
              { text: "The past perfect shows that an action happened before another past action.", true: true, why: "When I arrived, the train had left : le départ du train est antérieur à mon arrivée." },
            ],
          },
          quiz: [
            { q: "'I ... TV when the phone rang.'", options: ["was watching", "watched", "had watched", "am watching"], answer: 0, why: "Action en cours (past continuous) interrompue par un événement soudain (past simple)." },
            { q: "How do you start a formal email when you don't know the name?", options: ["Hi there,", "Dear friend,", "Dear Sir or Madam,", "Hello you,"], answer: 2, why: "Dear Sir or Madam est la formule formelle quand on ne connaît pas le nom du destinataire." },
            { q: "Which word means 'finalement'?", options: ["possibly", "actually", "suddenly", "eventually"], answer: 3, why: "Eventually signifie « finalement » ; possibly = éventuellement, actually = en fait." },
            { q: "'When we got to the cinema, the film ... .'", options: ["has started", "had started", "starts", "is starting"], answer: 1, why: "Le film avait commencé avant notre arrivée : past perfect." },
            { q: "Which ending suits an email to your best friend?", options: ["Yours faithfully,", "Yours sincerely,", "See you soon,", "I remain, Sir, your servant,"], answer: 2, why: "See you soon est une formule informelle et chaleureuse ; les autres sont formelles." },
          ],
          trap: "Traduire « éventuellement » par eventually et écrire « I look forward to hear from you » : eventually veut dire « finalement », et look forward to est suivi de -ing.",
          method: "Avant d'écrire, faites un plan en cinq lignes (une par étape du récit) et choisissez vos connecteurs ; après avoir écrit, relisez trois fois : une fois pour les temps, une fois pour les connecteurs, une fois pour l'orthographe et le registre.",
        },
      ],
    },
  ],
}
