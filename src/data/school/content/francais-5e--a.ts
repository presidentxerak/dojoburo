import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-5e',
  chapters: [
    {
      id: 'destins-romanesques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'heros-de-roman',
          title: "Qu'est-ce qu'un héros de roman ?",
          minutes: 25,
          objectives: [
            "Définir le roman et le héros de roman.",
            "Identifier les qualités, les faiblesses et l'évolution d'un héros ou d'une héroïne.",
            "Distinguer le héros, les personnages secondaires et l'anti-héros.",
            "Justifier l'analyse d'un personnage par des indices précis du texte.",
          ],
          course: [
            {
              heading: "Le roman, un long récit de fiction",
              paragraphs: [
                "Un roman est un récit long, écrit le plus souvent en prose, qui raconte une histoire inventée : c'est une fiction. Même quand il s'inspire de lieux réels ou d'événements historiques, ses personnages et leurs aventures sortent de l'imagination de l'auteur. Le roman se lit sur plusieurs jours, souvent en chapitres, et il suit le destin d'un ou de plusieurs personnages.",
                "Le mot a une histoire étonnante. Au Moyen Âge, le « roman » désignait d'abord la langue romane, la langue parlée par le peuple, par opposition au latin des savants. « Mettre en roman », c'était raconter une histoire dans la langue de tous. Au XIIe siècle, Chrétien de Troyes écrit ainsi des romans de chevalerie, comme Yvain ou le Chevalier au lion et Perceval ou le Conte du Graal. Ces premiers romans sont écrits en vers (des octosyllabes, vers de huit syllabes) ; la prose ne s'impose que plus tard.",
              ],
              box: { label: "Définition", text: "Le roman est un récit de fiction, long, généralement en prose, qui raconte les aventures et le destin d'un ou de plusieurs personnages." },
            },
            {
              heading: "Le héros, personnage principal",
              paragraphs: [
                "Le mot « héros » vient du grec hêrôs. Dans les récits antiques, comme les épopées d'Homère (l'Iliade et l'Odyssée), il désignait un demi-dieu ou un homme exceptionnel, comme Ulysse ou Achille. Dans un roman, le héros (ou l'héroïne) est d'abord le personnage principal : celui dont le lecteur suit l'histoire du début à la fin, et autour de qui s'organise le récit.",
                "Autour du héros gravitent les personnages secondaires. Certains l'aident (on les appelle des adjuvants), d'autres s'opposent à lui (des opposants). Dans L'Île au trésor de Robert Louis Stevenson (1883), le héros est Jim Hawkins, un jeune garçon ; le pirate Long John Silver, inquiétant et rusé, est un personnage secondaire, même s'il est très présent. Dans Le Tour du monde en quatre-vingts jours de Jules Verne (1872), le héros est Phileas Fogg, accompagné de son domestique Passepartout.",
              ],
            },
            {
              heading: "Des qualités... et des faiblesses",
              paragraphs: [
                "Un héros de roman possède souvent des qualités qui le rendent admirable : courage, loyauté, intelligence, générosité, ténacité. Mais il a aussi des faiblesses : il doute, il a peur, il se trompe, il s'emporte. Ces défauts le rendent humain et permettent au lecteur de s'identifier à lui, c'est-à-dire de se mettre à sa place.",
                "Dans Les Trois Mousquetaires d'Alexandre Dumas (1844), le jeune d'Artagnan est courageux et habile à l'épée, mais il est aussi impulsif : peu après son arrivée à Paris, il provoque en duel, le même jour, les trois mousquetaires Athos, Porthos et Aramis, qui deviendront pourtant ses meilleurs amis. Ses défauts font avancer l'histoire autant que ses qualités.",
                "Certains personnages principaux n'ont presque aucune qualité héroïque : ils sont maladroits, peureux ou très ordinaires. On parle alors d'anti-héros. Don Quichotte, le personnage de Cervantès (1605), est un pauvre gentilhomme qui se croit chevalier et charge des moulins à vent en les prenant pour des géants : il fait rire, mais il touche aussi par ses rêves.",
              ],
              box: { label: "À retenir", text: "Héros ou héroïne : personnage principal d'un récit. Personnage secondaire : personnage qui aide ou gêne le héros. Anti-héros : personnage principal qui n'a pas les qualités héroïques attendues." },
            },
            {
              heading: "Comment le roman construit-il son héros ?",
              paragraphs: [
                "Le lecteur découvre le héros de plusieurs façons : par son portrait physique (son apparence) et son portrait moral (son caractère) ; par ses actions et ses choix ; par ses paroles et ses pensées ; par le regard des autres personnages ; parfois par les commentaires du narrateur. Pour analyser un personnage, relevez ces indices et citez-les.",
                "Enfin, un héros de roman évolue. Au fil des épreuves, il apprend, change, grandit. Comparer le personnage au début et à la fin du roman permet de mesurer ce qu'il est devenu : c'est son destin romanesque.",
              ],
            },
          ],
          keyPoints: [
            "Le roman est un long récit de fiction, généralement en prose ; les premiers romans médiévaux étaient en vers.",
            "Le héros ou l'héroïne est le personnage principal, celui dont on suit l'histoire.",
            "Les personnages secondaires aident le héros (adjuvants) ou s'opposent à lui (opposants).",
            "Un héros a des qualités et des faiblesses : c'est ce qui le rend humain.",
            "L'anti-héros est un personnage principal sans qualités héroïques.",
            "On connaît le héros par son portrait, ses actions, ses paroles, le regard des autres et son évolution.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Sam avait douze ans et une peur bleue de l'eau. Pourtant, quand la barque de sa petite sœur se détacha du ponton, il ne réfléchit pas : il sauta dans le canot du voisin et rama de toutes ses forces, les dents serrées. Au retour, les pêcheurs du port le regardèrent avec respect. » Montrez que Sam est le héros de ce passage et relevez une qualité et une faiblesse, en justifiant.",
            solution: [
              "Sam est le héros : c'est le personnage principal, celui dont on suit les actions et les sentiments. La petite sœur et les pêcheurs sont des personnages secondaires.",
              "Une faiblesse : il a « une peur bleue de l'eau ». Le narrateur nous l'apprend dès la première phrase.",
              "Une qualité : le courage. Malgré sa peur, il « sauta dans le canot » et « rama de toutes ses forces » pour sauver sa sœur. Ses actions le montrent.",
              "Le regard des autres confirme cette qualité : les pêcheurs le regardent « avec respect ».",
              "Réponse : Sam est un héros courageux, et sa peur rend son acte encore plus admirable, car il la surmonte.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Texte écrit pour l'exercice : « Dans le village, tout le monde connaissait Maëlle, la fille du forgeron. Elle était petite, mais personne ne courait plus vite qu'elle. Un matin, le vieux berger Anselme vint lui demander de porter un message urgent au château. Le méchant intendant, lui, essaya de lui barrer la route. » a) Qui est l'héroïne ? b) Nommez un adjuvant et un opposant. c) Relevez un élément de portrait physique et une qualité.",
              hint: "L'héroïne est celle dont on suit l'histoire. Pour b), demandez-vous qui aide et qui gêne le personnage principal.",
              solution: [
                "a) L'héroïne est Maëlle, la fille du forgeron : le récit est centré sur elle.",
                "b) Adjuvant : le vieux berger Anselme, qui lui confie une mission. Opposant : le méchant intendant, qui « essaya de lui barrer la route ».",
                "c) Portrait physique : « Elle était petite ». Qualité : sa rapidité, car « personne ne courait plus vite qu'elle ».",
              ],
            },
            {
              level: 2,
              statement: "Texte écrit pour l'exercice : « Hugo entra dans la salle d'armes. Grand, les cheveux en bataille, il souriait toujours, même quand il perdait. ‹ Je recommencerai cent fois s'il le faut ! › lança-t-il à son maître. Le vieux maître d'armes murmura à son voisin : ‹ Ce garçon n'a pas encore de technique, mais il a du cœur. › » Classez les indices qui permettent de connaître Hugo : portrait physique, portrait moral, paroles, regard des autres.",
              hint: "Faites quatre colonnes et placez chaque indice dans l'une d'elles. Une même phrase peut contenir plusieurs indices.",
              solution: [
                "Portrait physique : « Grand, les cheveux en bataille ».",
                "Portrait moral : « il souriait toujours, même quand il perdait » montre sa bonne humeur et son caractère optimiste.",
                "Paroles : « Je recommencerai cent fois s'il le faut ! » révèle sa persévérance.",
                "Regard des autres : le maître d'armes dit qu'il « n'a pas encore de technique, mais il a du cœur » : une faiblesse (le manque de technique) et une qualité (le courage, l'enthousiasme).",
                "Bilan : Hugo est un héros persévérant et joyeux, encore inexpérimenté ; on peut deviner qu'il va progresser au fil du récit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Textes écrits pour l'exercice. Texte A : « Le chevalier Bertrand s'avança seul vers le dragon, l'épée levée, sans trembler. » Texte B : « Monsieur Plume voulut chasser la guêpe de la cuisine ; il renversa la soupière, glissa sur le carrelage et finit caché sous la table, pendant que la guêpe ressortait tranquillement par la fenêtre. » a) Lequel de ces personnages est un anti-héros ? Justifiez avec deux indices. b) Quel effet cet anti-héros produit-il sur le lecteur ? c) Rédigez trois ou quatre phrases présentant un héros de votre invention qui possède une vraie qualité et une vraie faiblesse.",
              hint: "Comparez ce que chaque personnage accomplit : réussit-il ce qu'il entreprend ? Pour c), montrez la qualité et la faiblesse par des actions, pas seulement par des adjectifs.",
              solution: [
                "a) Monsieur Plume (texte B) est un anti-héros. Indice 1 : il échoue face à un adversaire minuscule, une simple guêpe. Indice 2 : il se montre maladroit (« il renversa la soupière, glissa ») et peureux (il finit « caché sous la table »).",
                "Le chevalier Bertrand (texte A), au contraire, a les qualités du héros traditionnel : il affronte « seul » un dragon, « sans trembler ».",
                "b) L'anti-héros fait rire le lecteur : l'écart entre la petite guêpe et la catastrophe qu'elle provoque est comique. Il peut aussi le rendre sympathique, car chacun connaît ce genre de maladresse.",
                "c) Exemple de réponse : « Inès était la meilleure grimpeuse du lycée, capable d'escalader n'importe quel mur. Mais elle ne supportait pas qu'on lui donne un conseil. Le jour où elle refusa d'écouter son guide, elle se retrouva bloquée à mi-paroi, et ce fut lui qui vint la chercher. » La qualité (l'agilité) et la faiblesse (l'orgueil) sont montrées par des actions.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Roman", right: "Long récit de fiction, généralement en prose" },
              { left: "Héros", right: "Personnage principal dont on suit l'histoire" },
              { left: "Adjuvant", right: "Personnage qui aide le héros" },
              { left: "Opposant", right: "Personnage qui s'oppose au héros" },
              { left: "Anti-héros", right: "Personnage principal sans qualités héroïques" },
              { left: "Portrait moral", right: "Description du caractère d'un personnage" },
            ],
          },
          quiz: [
            { q: "Au Moyen Âge, que désignait d'abord le mot « roman » ?", options: ["Un récit écrit en latin", "La langue romane parlée par le peuple", "Un poème chanté par les troubadours", "Un livre imprimé"], answer: 1, why: "« Roman » désignait la langue du peuple, par opposition au latin ; « mettre en roman », c'était raconter dans cette langue." },
            { q: "Comment étaient écrits les romans de Chrétien de Troyes, au XIIe siècle ?", options: ["En prose", "En vers", "Sous forme de lettres"], answer: 1, why: "Les premiers romans de chevalerie étaient écrits en vers de huit syllabes, les octosyllabes." },
            { q: "Qui est le héros de L'Île au trésor de Stevenson ?", options: ["Le pirate Long John Silver", "Le capitaine Flint", "Jim Hawkins", "Un perroquet savant"], answer: 2, why: "Le récit suit Jim Hawkins ; Long John Silver est un personnage secondaire, même s'il est très présent." },
            { q: "Qu'appelle-t-on un anti-héros ?", options: ["Un personnage principal sans qualités héroïques", "Le méchant qui combat le héros jusqu'à la fin", "Un personnage secondaire qui apparaît rarement"], answer: 0, why: "L'anti-héros est le personnage principal, mais il est maladroit, peureux ou ordinaire. Le méchant est un opposant." },
            { q: "Pourquoi un héros de roman a-t-il souvent des faiblesses ?", options: ["Pour que l'histoire soit plus courte", "Parce que l'auteur ne sait pas inventer de qualités", "Pour qu'il soit le méchant de l'histoire", "Pour le rendre humain"], answer: 3, why: "Ses défauts permettent au lecteur de s'identifier à lui et font aussi avancer l'histoire." },
          ],
          trap: "Confondre le héros avec le personnage le plus courageux ou le plus fort : le héros d'un roman est d'abord le personnage principal, même s'il est faible, peureux ou maladroit.",
          method: "Pour analyser un personnage, faites un tableau à cinq lignes (portrait physique, portrait moral, actions, paroles, regard des autres) et notez dans chaque case une citation du texte. Votre analyse s'appuiera ainsi sur des preuves.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'quete-et-epreuves',
          title: 'La quête du héros : épreuves et initiation',
          minutes: 30,
          objectives: [
            "Identifier la quête du héros et l'objet qu'il recherche.",
            "Repérer les épreuves que traverse le héros, avec ses adjuvants et ses opposants.",
            "Utiliser le schéma narratif et le schéma actantiel pour analyser un récit.",
            "Comprendre la notion d'initiation : la transformation du héros par les épreuves.",
          ],
          course: [
            {
              heading: "La quête : ce que le héros recherche",
              paragraphs: [
                "Dans beaucoup de romans d'aventures, le héros part à la recherche de quelque chose : c'est la quête. L'objet de la quête peut être concret (un trésor, un objet magique, une personne disparue) ou abstrait (la liberté, la vérité, la gloire, sa place dans le monde). La quête donne une direction au récit : le lecteur se demande sans cesse si le héros atteindra son but.",
                "Quelques exemples. Dans L'Île au trésor de Stevenson (1883), Jim Hawkins part à la recherche du trésor du capitaine Flint. Dans Le Tour du monde en quatre-vingts jours de Jules Verne (1872), Phileas Fogg a parié vingt mille livres qu'il ferait le tour de la Terre en quatre-vingts jours. Dans Perceval ou le Conte du Graal de Chrétien de Troyes, le jeune Perceval veut d'abord devenir chevalier, puis il cherche le mystérieux Graal.",
              ],
              box: { label: "Définition", text: "La quête est la recherche, par le héros, d'un objet concret ou abstrait. Elle donne au récit sa direction et suscite l'attente du lecteur." },
            },
            {
              heading: "Les épreuves, les adjuvants et les opposants",
              paragraphs: [
                "Sur le chemin de la quête, le héros rencontre des épreuves : des combats, des voyages dangereux, des énigmes, des pièges, des choix difficiles. Certaines épreuves viennent de l'extérieur (un ennemi, une tempête), d'autres de l'intérieur du héros (sa peur, son orgueil, son hésitation). Plus les épreuves sont difficiles, plus la réussite du héros a de valeur.",
                "Pour représenter les forces en présence, on utilise le schéma actantiel. Le sujet (le héros) recherche un objet. Des adjuvants l'aident, des opposants le gênent. On peut ajouter le destinateur (ce qui pousse le héros à agir) et le destinataire (celui à qui profite la quête). Dans L'Île au trésor : le sujet est Jim ; l'objet est le trésor ; parmi les adjuvants figurent le docteur Livesey et Ben Gunn, un ancien pirate abandonné sur l'île ; les opposants sont Long John Silver et les pirates mutins.",
              ],
              box: { label: "Repère", text: "Schéma actantiel : un sujet (le héros) recherche un objet ; des adjuvants l'aident ; des opposants le gênent ; un destinateur le pousse à agir ; un destinataire profite de la quête." },
            },
            {
              heading: "Le schéma narratif : les étapes du récit",
              paragraphs: [
                "Vous connaissez le schéma narratif depuis l'école. Il découpe un récit en cinq étapes : la situation initiale (le héros dans son monde habituel) ; l'élément perturbateur (l'événement qui lance la quête) ; les péripéties (les épreuves successives) ; l'élément de résolution (l'événement qui permet de conclure) ; la situation finale (le nouvel équilibre). Dans un récit de quête, les épreuves se trouvent dans les péripéties.",
                "Exemple avec L'Île au trésor : Jim vit tranquillement dans l'auberge de ses parents (situation initiale) ; il découvre la carte d'un trésor dans le coffre d'un vieux pirate (élément perturbateur) ; il embarque, découvre la mutinerie préparée par Silver, affronte les pirates sur l'île (péripéties) ; avec l'aide de Ben Gunn, ses compagnons récupèrent le trésor (résolution) ; ils rentrent en Angleterre (situation finale).",
              ],
            },
            {
              heading: "L'initiation : le héros transformé",
              paragraphs: [
                "La quête ne sert pas seulement à trouver un objet. Elle transforme le héros. Au début, il est souvent jeune, naïf ou inexpérimenté ; les épreuves lui apprennent à connaître le monde, les autres et lui-même. À la fin, il n'est plus le même : il a grandi. On appelle ce parcours une initiation. Le roman qui raconte la formation d'un jeune personnage est appelé roman d'apprentissage ou roman d'initiation.",
                "Perceval en est un bel exemple. Élevé par sa mère loin du monde, dans une forêt, il ignore tout de la chevalerie et commet de nombreuses maladresses. Un sage chevalier lui apprend les armes et les usages. Pourtant, chez le Roi Pêcheur, il voit passer le Graal sans oser poser de question, et cet échec le hante. C'est en tirant les leçons de ses erreurs que le héros progresse.",
              ],
              box: { label: "À retenir", text: "Une initiation suit trois temps : le départ (le héros quitte son monde), les épreuves (il affronte des obstacles et apprend), la transformation (il revient changé, plus mûr)." },
            },
          ],
          keyPoints: [
            "La quête est la recherche d'un objet concret (trésor) ou abstrait (liberté, vérité).",
            "Les épreuves peuvent venir de l'extérieur (ennemi) ou de l'intérieur du héros (peur, orgueil).",
            "Schéma actantiel : sujet, objet, adjuvants, opposants, destinateur, destinataire.",
            "Schéma narratif : situation initiale, élément perturbateur, péripéties, résolution, situation finale.",
            "L'initiation est la transformation du héros grâce aux épreuves : départ, épreuves, retour changé.",
          ],
          example: {
            statement: "Résumé écrit pour l'exercice : « Le jeune Tarik vit dans un village de montagne. Un jour, sa grand-mère tombe gravement malade : seule une fleur bleue qui pousse au sommet du pic Noir peut la guérir. Tarik part, aidé par Nayla, une bergère qui connaît les sentiers. Il doit traverser un torrent, échapper à des loups et résister à un marchand qui veut lui voler la fleur. » Établissez le schéma actantiel de ce récit.",
            solution: [
              "Sujet (le héros) : Tarik.",
              "Objet de la quête : la fleur bleue du pic Noir.",
              "Destinateur (ce qui pousse le héros à agir) : la maladie de sa grand-mère et l'amour qu'il lui porte.",
              "Destinataire (celle à qui profite la quête) : la grand-mère.",
              "Adjuvant : Nayla, la bergère qui connaît les sentiers.",
              "Opposants : le torrent et les loups (obstacles naturels), le marchand voleur.",
              "Réponse : le schéma montre une quête au service d'un autre personnage, et des épreuves variées (nature, animaux, humain).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Histoire écrite pour l'exercice. Associez chaque phrase à une étape du schéma narratif. a) Léon retrouve le chat et le rapporte à la vieille dame, qui pleure de joie. b) Léon vit avec sa mère au-dessus d'une boulangerie. c) Il cherche dans les caves, se perd dans les égouts, échappe à un gros chien. d) Le chat de la voisine disparaît, et Léon promet de le retrouver. e) Depuis, la vieille dame lui offre un croissant chaque matin.",
              hint: "Repérez d'abord la situation initiale (avant tout problème) et l'élément perturbateur (ce qui lance l'histoire). Les péripéties sont les épreuves.",
              solution: [
                "b) Situation initiale : Léon vit avec sa mère, rien ne se passe encore.",
                "d) Élément perturbateur : la disparition du chat lance la quête.",
                "c) Péripéties : les caves, les égouts, le chien sont les épreuves.",
                "a) Élément de résolution : Léon retrouve le chat.",
                "e) Situation finale : le nouvel équilibre, avec le croissant offert chaque matin.",
                "Ordre du récit : b, d, c, a, e.",
              ],
            },
            {
              level: 2,
              statement: "Résumé écrit pour l'exercice : « Dans un royaume privé de musique par un sorcier, la jeune Elsa décide de retrouver la flûte magique volée. Son ami Pio, un corbeau bavard, la guide. Elle doit déjouer les gardes du sorcier, traverser un marais et surmonter sa propre timidité pour jouer devant toute une foule. » a) Établissez le schéma actantiel. b) Classez les épreuves en épreuves extérieures et épreuve intérieure.",
              hint: "Une épreuve intérieure se passe dans le héros lui-même : une peur, un défaut à vaincre.",
              solution: [
                "a) Sujet : Elsa. Objet : la flûte magique. Destinateur : le désir de rendre la musique au royaume. Destinataire : le royaume tout entier. Adjuvant : Pio, le corbeau. Opposants : le sorcier et ses gardes.",
                "b) Épreuves extérieures : déjouer les gardes, traverser le marais.",
                "Épreuve intérieure : surmonter sa timidité pour jouer devant la foule.",
                "Remarque : l'épreuve intérieure est souvent la plus importante, car c'est elle qui transforme vraiment l'héroïne.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux extraits écrits pour l'exercice. Début du roman : « Mathis, fils unique d'un riche marchand, n'avait jamais porté un seau d'eau. Il se plaignait de tout et ne regardait jamais les serviteurs. » Fin du roman : « Mathis posa son sac, aida le vieux passeur à tirer la barque sur la rive, puis partagea son pain avec lui sans un mot. » Entre les deux, Mathis a été ruiné, a travaillé sur un bateau et a été sauvé d'une noyade par un mousse. Rédigez un paragraphe de six à huit lignes montrant que Mathis a vécu une initiation.",
              hint: "Comparez le portrait du début et celui de la fin, puis expliquez quelles épreuves ont provoqué ce changement. Utilisez le vocabulaire de la leçon : épreuve, initiation, transformation.",
              solution: [
                "Étape 1, le portrait de départ : au début, Mathis est un garçon gâté et égoïste ; il n'a « jamais porté un seau d'eau » et « ne regardait jamais les serviteurs ».",
                "Étape 2, les épreuves : la ruine l'oblige à quitter son monde protégé ; le travail sur le bateau lui apprend l'effort ; le sauvetage par un mousse lui montre qu'il dépend des autres.",
                "Étape 3, le portrait d'arrivée : à la fin, il aide spontanément un vieux passeur et « partag[e] son pain avec lui », sans attendre de remerciement.",
                "Exemple de paragraphe : « Mathis a bien vécu une initiation. Au début du roman, c'est un fils de riche gâté, qui ne fait aucun effort et méprise les serviteurs. Ruiné, il doit travailler sur un bateau : il découvre la fatigue et la valeur du travail. Sauvé de la noyade par un simple mousse, il comprend qu'il a besoin des autres. À la fin, il aide un vieux passeur et partage son pain, sans un mot : il est devenu attentif et généreux. Les épreuves l'ont transformé. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les grandes étapes de L'Île au trésor (Stevenson, 1883).",
            items: [
              "Jim Hawkins vit dans l'auberge tenue par ses parents.",
              "Il découvre la carte d'un trésor dans le coffre d'un vieux pirate.",
              "Il embarque sur l'Hispaniola pour l'île au trésor.",
              "Il découvre que le cuisinier Long John Silver prépare une mutinerie.",
              "Sur l'île, il rencontre Ben Gunn, un ancien pirate abandonné.",
              "Le trésor est récupéré et les survivants rentrent en Angleterre.",
            ],
          },
          quiz: [
            { q: "Dans un schéma actantiel, comment appelle-t-on un personnage qui aide le héros ?", options: ["Un destinataire", "Un opposant", "Un adjuvant", "Un destinateur"], answer: 2, why: "L'adjuvant aide le sujet dans sa quête ; l'opposant le gêne." },
            { q: "Laquelle de ces quêtes a un objet abstrait ?", options: ["Retrouver la liberté", "Trouver un coffre d'or", "Rapporter une épée magique"], answer: 0, why: "La liberté ne se touche pas : c'est un objet abstrait. Le coffre et l'épée sont des objets concrets." },
            { q: "Dans quelle étape du schéma narratif se trouvent surtout les épreuves ?", options: ["Situation initiale", "Péripéties", "Situation finale", "Élément perturbateur"], answer: 1, why: "Les péripéties sont la suite des actions et des obstacles que traverse le héros." },
            { q: "Que signifie « initiation » dans un roman ?", options: ["Le début du livre, avant l'élément perturbateur", "La transformation du héros", "La liste de tous les personnages qui aident le héros"], answer: 1, why: "L'initiation est le parcours par lequel le héros apprend et grandit grâce aux épreuves." },
            { q: "Quel est l'enjeu de Phileas Fogg dans le roman de Jules Verne ?", options: ["Retrouver un trésor caché sur une île", "Venger la mort de son père", "Devenir chevalier du roi Arthur", "Gagner un pari"], answer: 3, why: "Phileas Fogg a parié qu'il ferait le tour du monde en quatre-vingts jours." },
          ],
          trap: "Croire que la quête ne concerne qu'un objet matériel et oublier les épreuves intérieures : souvent, la vraie victoire du héros est celle qu'il remporte sur lui-même (sa peur, son orgueil).",
          method: "Pour étudier un récit de quête, posez-vous quatre questions dans l'ordre : que cherche le héros ? qui l'aide ? qui ou quoi le gêne ? en quoi est-il différent à la fin ? Les deux premières construisent le schéma actantiel, la dernière montre l'initiation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'heroines-de-roman',
          title: 'Des héroïnes qui prennent leur destin en main',
          minutes: 25,
          objectives: [
            "Identifier des héroïnes de roman et les choix qui orientent leur destin.",
            "Analyser comment une héroïne s'affirme face aux obstacles et aux règles de son monde.",
            "Comparer plusieurs héroïnes et argumenter sur ce qui les rend admirables.",
          ],
          course: [
            {
              heading: "Être l'héroïne de sa propre histoire",
              paragraphs: [
                "Dans de nombreux contes anciens, les personnages féminins attendent d'être délivrés : la princesse endormie ou enfermée dans une tour compte sur un prince pour la sauver. Le roman a aussi créé des héroïnes actives, qui décident, agissent et choisissent leur chemin, parfois contre les règles de leur époque ou de leur famille.",
                "Une héroïne qui prend son destin en main n'est pas forcément une guerrière. Elle peut s'affirmer par son intelligence, sa curiosité, sa parole, sa liberté ou sa solidarité. Ce qui compte, c'est qu'elle soit actrice de son histoire, et non seulement spectatrice de ce qui lui arrive.",
              ],
            },
            {
              heading: "Des héroïnes curieuses et libres",
              paragraphs: [
                "Alice, l'héroïne d'Alice au pays des merveilles de Lewis Carroll (1865), suit un lapin blanc et tombe dans un monde absurde. Elle ne se laisse pas faire : elle pose des questions, discute avec la Reine de cœur et finit par refuser les règles injustes de ce monde. Sa curiosité est sa force.",
                "Dans Les Quatre Filles du docteur March de Louisa May Alcott (1868), Jo March grandit aux États-Unis pendant la guerre de Sécession, alors que son père est parti au front. Jo veut devenir écrivain et gagner sa vie par sa plume ; elle refuse de se comporter comme on l'attend d'une jeune fille de son temps. Elle a aussi un défaut qu'elle combat : son caractère emporté.",
                "Fifi Brindacier, imaginée par la Suédoise Astrid Lindgren (1945), est une petite fille qui vit seule dans sa grande maison, avec un cheval et un singe. Elle est la fille la plus forte du monde, ne va pas à l'école et se moque des règles absurdes des adultes. Elle est drôle, généreuse et totalement libre.",
              ],
            },
            {
              heading: "Des héroïnes face au danger",
              paragraphs: [
                "Dans Hunger Games de l'Américaine Suzanne Collins (2008), Katniss Everdeen vit dans un pays dominé par un pouvoir cruel qui oblige chaque année des adolescents à s'affronter dans un jeu télévisé. Quand sa petite sœur est tirée au sort, Katniss se porte volontaire à sa place. Habile à l'arc, elle survit grâce à son courage et à son ingéniosité, et refuse peu à peu de jouer le jeu imposé par le pouvoir.",
                "Ces héroïnes ont un point commun : à un moment décisif, elles font un choix. Jo choisit d'écrire, Katniss choisit de se sacrifier pour sa sœur, Alice choisit de dire non. C'est ce choix, souvent coûteux, qui fait d'elles des héroïnes.",
              ],
              box: { label: "À retenir", text: "Une héroïne qui prend son destin en main fait un choix décisif, affronte des obstacles extérieurs (règles, adultes, pouvoir, danger) et intérieurs (peur, colère), et agit au lieu de subir." },
            },
            {
              heading: "Analyser le parcours d'une héroïne",
              paragraphs: [
                "Pour analyser une héroïne, posez trois questions. Quelle est sa situation au départ (que lui impose-t-on, qu'attend-on d'elle) ? Quel choix fait-elle, et à quel moment ? Qu'est-ce que ce choix change pour elle et pour les autres ? Relevez les verbes d'action dont elle est le sujet : ils montrent qu'elle agit.",
                "Comparez aussi les héroïnes entre elles. Leurs qualités diffèrent (la curiosité d'Alice, la créativité de Jo, la force joyeuse de Fifi, le courage de Katniss), mais toutes refusent un destin tout tracé. Pour argumenter, appuyez chaque idée sur un exemple précis tiré de vos lectures.",
              ],
            },
          ],
          keyPoints: [
            "Une héroïne active décide et agit, au lieu d'attendre d'être sauvée.",
            "Alice (Lewis Carroll, 1865) : la curiosité et le refus des règles absurdes.",
            "Jo March (Louisa May Alcott, 1868) : le désir d'écrire et de vivre librement.",
            "Fifi Brindacier (Astrid Lindgren, 1945) : la liberté et la force joyeuse.",
            "Katniss Everdeen (Suzanne Collins, 2008) : le sacrifice pour sa sœur et la résistance au pouvoir.",
            "Pour analyser une héroïne : sa situation de départ, son choix décisif, les conséquences de ce choix.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Tout le village répétait à Aïna que la forge n'était pas un métier pour elle. Elle écoutait, hochait la tête, puis retournait chaque soir derrière l'atelier de son oncle. Elle regardait, mémorisait les gestes. Le jour où son oncle se blessa à la main, ce fut elle qui saisit le marteau. » Montrez qu'Aïna prend son destin en main.",
            solution: [
              "Situation de départ : on lui impose une limite, car tout le village répète que la forge « n'était pas un métier pour elle ».",
              "Ses actions : elle ne se révolte pas bruyamment, mais elle agit en secret ; elle « retournait chaque soir », « regardait, mémorisait ». Elle est le sujet de ces verbes d'action.",
              "Son choix décisif : quand l'oncle se blesse, « ce fut elle qui saisit le marteau ». La tournure « ce fut elle qui » met en valeur son initiative.",
              "Réponse : Aïna prend son destin en main, car elle refuse le rôle que le village lui assigne, se prépare avec patience et saisit l'occasion de prouver sa valeur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque héroïne à son roman et à son auteur. Héroïnes : Alice, Jo March, Fifi Brindacier, Katniss Everdeen. Romans et auteurs : Hunger Games (Suzanne Collins) ; Les Quatre Filles du docteur March (Louisa May Alcott) ; Alice au pays des merveilles (Lewis Carroll) ; Fifi Brindacier (Astrid Lindgren). Ajoutez, pour chacune, une qualité qui la caractérise.",
              hint: "Relisez les parties 2 et 3 du cours. Une qualité est un nom ou un adjectif : curiosité, liberté, courage...",
              solution: [
                "Alice : Alice au pays des merveilles, de Lewis Carroll ; qualité : la curiosité.",
                "Jo March : Les Quatre Filles du docteur March, de Louisa May Alcott ; qualité : l'indépendance (elle veut écrire et gagner sa vie).",
                "Fifi Brindacier : Fifi Brindacier, d'Astrid Lindgren ; qualité : la liberté, ou la force joyeuse.",
                "Katniss Everdeen : Hunger Games, de Suzanne Collins ; qualité : le courage (elle se porte volontaire à la place de sa sœur).",
              ],
            },
            {
              level: 2,
              statement: "Deux textes écrits pour l'exercice. Texte A : « La princesse attendait dans la tour. Les jours passaient. On lui apportait ses repas, on lui racontait que des chevaliers viendraient. » Texte B : « Clara déchira son drap en longues bandes, les noua solidement et attacha la corde au pied du lit. Elle vérifia trois fois les nœuds, puis enjamba la fenêtre. » a) Relevez les verbes dont chaque héroïne est le sujet. b) Laquelle prend son destin en main ? Justifiez.",
              hint: "Pour chaque verbe conjugué, demandez « qui fait l'action ? ». Si le sujet est « on », ce n'est pas l'héroïne qui agit.",
              solution: [
                "a) Texte A : un seul verbe a la princesse pour sujet, « attendait », qui exprime l'inaction. Les autres verbes ont pour sujet « les jours » ou « on ».",
                "Texte B : Clara est sujette de nombreux verbes d'action : « déchira », « noua », « attacha », « vérifia », « enjamba ».",
                "b) C'est Clara qui prend son destin en main : elle agit elle-même pour s'évader, avec méthode et prudence (« vérifia trois fois les nœuds »). La princesse du texte A subit et attend que d'autres décident pour elle.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Répondez en un paragraphe argumenté de huit à dix lignes à la question : « Qu'est-ce qui rend une héroïne de roman admirable ? » Donnez au moins deux arguments, chacun appuyé sur l'exemple d'une héroïne étudiée dans la leçon ou lue en classe.",
              hint: "Construisez chaque argument en trois temps : l'idée, l'exemple précis, l'explication qui relie l'exemple à l'idée. Reliez vos arguments par des connecteurs (d'abord, de plus, enfin).",
              solution: [
                "Étape 1, la thèse : une héroïne est admirable parce qu'elle choisit son destin au lieu de le subir.",
                "Étape 2, premier argument : son courage face au danger. Exemple : Katniss Everdeen se porte volontaire à la place de sa petite sœur, au risque de mourir.",
                "Étape 3, deuxième argument : sa liberté face aux règles de son temps. Exemple : Jo March veut devenir écrivain et gagner sa vie, alors qu'on attend d'elle un autre comportement.",
                "Exemple de paragraphe : « Une héroïne de roman est admirable d'abord par son courage. Katniss Everdeen, dans Hunger Games, se porte volontaire à la place de sa sœur : elle accepte le danger pour protéger quelqu'un qu'elle aime. De plus, une héroïne force l'admiration quand elle refuse un destin tout tracé. Jo March, dans Les Quatre Filles du docteur March, veut vivre de sa plume, alors que son époque attend autre chose d'une jeune fille. Enfin, ses défauts la rendent plus proche de nous : Jo doit lutter contre sa colère. Une héroïne est donc admirable parce qu'elle choisit et agit, sans être parfaite. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les héroïnes de roman.",
            statements: [
              { text: "Une héroïne doit forcément savoir se battre pour être une vraie héroïne.", true: false, why: "Elle peut s'affirmer par son intelligence, sa curiosité, sa parole ou sa générosité." },
              { text: "Katniss Everdeen se porte volontaire pour remplacer sa petite sœur.", true: true, why: "C'est le choix décisif qui lance son histoire dans Hunger Games." },
              { text: "Jo March rêve de devenir écrivain.", true: true, why: "Dans le roman de Louisa May Alcott, Jo écrit et veut vivre de sa plume." },
              { text: "Fifi Brindacier vit chez ses grands-parents, qui la surveillent de près.", true: false, why: "Fifi vit seule dans sa maison, avec un cheval et un singe." },
              { text: "Une héroïne admirable n'a jamais aucun défaut.", true: false, why: "Ses défauts (la colère de Jo, par exemple) la rendent humaine." },
              { text: "Relever les verbes d'action dont l'héroïne est le sujet montre si elle agit ou subit.", true: true, why: "Si elle est sujet de verbes d'action, c'est elle qui fait avancer l'histoire." },
            ],
          },
          quiz: [
            { q: "Qui a écrit Alice au pays des merveilles ?", options: ["Astrid Lindgren", "Jules Verne", "Lewis Carroll", "Suzanne Collins"], answer: 2, why: "Lewis Carroll a publié Alice au pays des merveilles en 1865." },
            { q: "Quel est le rêve de Jo March ?", options: ["Devenir écrivain", "Épouser un prince et vivre dans un château", "Partir explorer les pôles en bateau"], answer: 0, why: "Jo veut écrire et gagner sa vie par sa plume." },
            { q: "Qu'est-ce qui montre le mieux qu'une héroïne prend son destin en main ?", options: ["Sa beauté, décrite dans un long portrait", "Le nombre de personnages qui l'entourent", "Un choix décisif suivi d'actions", "Sa richesse et la puissance de sa famille"], answer: 2, why: "Une héroïne active fait un choix et agit pour le réaliser." },
            { q: "Dans Hunger Games, pourquoi Katniss participe-t-elle aux jeux ?", options: ["Pour devenir riche et célèbre", "Pour protéger sa petite sœur", "Parce qu'elle a gagné un concours de tir à l'arc"], answer: 1, why: "Sa sœur a été tirée au sort et Katniss se porte volontaire à sa place." },
            { q: "Dans une phrase comme « On lui apportait ses repas », l'héroïne...", options: ["agit avec courage", "prend une décision", "subit l'action des autres", "fait un choix difficile et courageux"], answer: 2, why: "Le sujet est « on » : ce sont les autres qui agissent, l'héroïne reçoit l'action." },
          ],
          trap: "Confondre « héroïne » et « personnage parfait » ou « guerrière » : une héroïne peut avoir des défauts et s'affirmer sans combattre, par sa curiosité, sa parole ou ses choix.",
          method: "Pour montrer qu'un personnage agit, relevez les verbes dont il est le sujet et classez-les : verbes d'action (le personnage agit) ou verbes qui le montrent passif (attendre, recevoir, être emmené). Le résultat se voit d'un coup d'œil.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'raconter-epreuve',
          title: "Écrire la suite des aventures d'un héros",
          minutes: 35,
          objectives: [
            "Rédiger la suite d'un récit en respectant sa cohérence : personnages, lieu, époque, narrateur.",
            "Raconter une épreuve au passé en employant le passé simple et l'imparfait.",
            "Insérer une description et un dialogue correctement ponctués.",
            "Améliorer son brouillon à l'aide d'une grille de relecture.",
          ],
          course: [
            {
              heading: "Lire le début pour relever les contraintes",
              paragraphs: [
                "Écrire une suite, ce n'est pas inventer une histoire libre : c'est continuer une histoire commencée par un autre. Le lecteur doit avoir l'impression que le même auteur continue. Avant d'écrire, relisez donc le début et relevez tout ce que vous devez respecter : ce sont les contraintes.",
                "Notez : qui raconte (un narrateur qui dit « je » ou un narrateur extérieur qui dit « il » ou « elle ») ; à quel temps le récit est écrit (passé simple et imparfait, ou présent) ; où et quand se passe l'histoire ; qui sont les personnages et quel est leur caractère ; quelle est la quête du héros ; quel est le ton (sérieux, inquiétant, humoristique). Si le héros est prudent dans le texte de départ, il ne peut pas devenir soudain imprudent sans raison.",
              ],
              box: { label: "Règle", text: "Une suite de texte est cohérente quand elle garde le même narrateur, les mêmes temps, le même lieu et la même époque, et des personnages fidèles à leur caractère." },
            },
            {
              heading: "Construire l'épreuve avant de rédiger",
              paragraphs: [
                "Une bonne suite raconte en général une épreuve. Préparez-la au brouillon, en quatre temps : l'obstacle apparaît (un danger, un adversaire, un problème à résoudre) ; la tension monte (le héros tente quelque chose, échoue ou hésite) ; le moment décisif arrive (le héros fait un choix ou utilise une de ses qualités) ; l'épreuve se résout (réussite, échec, ou nouvelle surprise).",
                "Pour que l'épreuve soit intéressante, le héros ne doit pas réussir trop facilement. Faites-le douter, se tromper, être aidé par un adjuvant ou gêné par un opposant. Et rendez-le acteur : c'est par son courage, son astuce ou sa générosité qu'il doit s'en sortir, non par un hasard magique tombé du ciel.",
              ],
            },
            {
              heading: "Rédiger : les temps, les liens, la description, le dialogue",
              paragraphs: [
                "Dans un récit au passé, employez le passé simple pour les actions principales qui font avancer l'histoire (« Il ouvrit la porte ») et l'imparfait pour les descriptions et l'arrière-plan (« La pièce était sombre »). Reliez les actions par des connecteurs temporels variés : d'abord, soudain, aussitôt, alors, tandis que, peu après, enfin.",
                "Glissez une courte description pour faire voir le lieu ou l'adversaire : choisissez quelques détails précis qui font appel aux sens (ce qu'on voit, entend, sent). Insérez aussi un bref dialogue. On ouvre les guillemets au début des paroles et on les ferme à la fin ; on signale qui parle par une proposition incise (« dit-il », « murmura-t-elle ») ; dans un dialogue à plusieurs répliques, chaque changement d'interlocuteur se marque par un retour à la ligne et un tiret.",
              ],
              box: { label: "Repère", text: "Passé simple : actions principales, au premier plan. Imparfait : descriptions, habitudes, arrière-plan. Verbes de parole variés : demander, répondre, s'écrier, chuchoter, murmurer, protester, ordonner." },
            },
            {
              heading: "Relire et améliorer son texte",
              paragraphs: [
                "Une fois le brouillon écrit, relisez-le plusieurs fois, avec une question différente à chaque lecture. Première lecture : la suite est-elle cohérente avec le début ? Deuxième lecture : l'épreuve est-elle claire, avec un obstacle, une tension et une résolution ? Troisième lecture : les temps sont-ils bien employés et les verbes bien conjugués ? Quatrième lecture : les accords, la ponctuation et les répétitions.",
                "Pour éviter les répétitions, remplacez le nom du héros par un pronom (il, elle) ou par un groupe nominal qui le désigne autrement (« le jeune garçon », « l'apprentie », « la voyageuse »). Supprimez les « et puis » en série, qui alourdissent le récit.",
              ],
            },
          ],
          keyPoints: [
            "Avant d'écrire, relever les contraintes : narrateur, temps, lieu, époque, personnages, quête, ton.",
            "Construire l'épreuve en quatre temps : obstacle, tension, moment décisif, résolution.",
            "Passé simple pour les actions principales, imparfait pour les descriptions et l'arrière-plan.",
            "Varier les connecteurs temporels et les verbes de parole ; ponctuer correctement le dialogue.",
            "Relire plusieurs fois, avec une question différente à chaque lecture.",
          ],
          example: {
            statement: "Début écrit pour l'exercice : « Je m'appelle Noé et j'avais onze ans quand mon grand-père me confia la vieille boussole. ‹ Elle ne montre pas le nord, me dit-il, elle montre ce que tu cherches. › Le lendemain, il avait disparu. » Relevez les contraintes à respecter, puis proposez un plan en quatre temps pour une épreuve.",
            solution: [
              "Narrateur : Noé lui-même, qui dit « je ». La suite doit rester à la première personne.",
              "Temps : récit au passé, avec le passé simple (« confia ») et l'imparfait (« avais »). La suite garde ces temps.",
              "Personnages : Noé, onze ans ; le grand-père, disparu. Quête : retrouver le grand-père. Objet magique : la boussole qui montre ce que l'on cherche.",
              "Plan, obstacle : la boussole conduit Noé jusqu'à une forêt où la nuit tombe.",
              "Plan, tension : Noé se perd, la boussole tourne sans arrêt, il a peur.",
              "Plan, moment décisif : il se calme, se concentre sur son grand-père, et l'aiguille se fixe enfin.",
              "Plan, résolution : il découvre une cabane où brille une lumière, et entend une voix familière. Réponse : la suite est cohérente avec le début et place le héros au centre de l'épreuve.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Début écrit pour l'exercice : « Le chevalier Aubin, prudent et silencieux, avançait dans le couloir du château. Une torche éclairait faiblement les murs. » Voici une suite proposée par un élève : « Je cours dans le couloir en hurlant et je casse toutes les torches. » Relevez trois incohérences entre le début et cette suite.",
              hint: "Comparez le narrateur (qui dit « je » ou « il » ?), le temps des verbes et le caractère du personnage.",
              solution: [
                "Incohérence 1, le narrateur : le début est raconté par un narrateur extérieur (« Le chevalier Aubin... avançait ») ; la suite passe à « je ».",
                "Incohérence 2, le temps : le début est au passé (imparfait « avançait », « éclairait ») ; la suite passe au présent (« cours », « casse »).",
                "Incohérence 3, le caractère : Aubin est « prudent et silencieux » ; dans la suite, il court « en hurlant » et casse tout, sans aucune raison donnée.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ce passage (écrit pour l'exercice) au passé, en employant le passé simple pour les actions principales et l'imparfait pour la description, et en remplaçant les « et puis » par des connecteurs variés : « La grotte est froide et humide. L'eau coule le long des parois. Lila allume sa lampe et puis elle avance et puis elle entend un grognement et puis elle s'arrête. »",
              hint: "Distinguez ce qui décrit le décor (imparfait) de ce que fait Lila, l'une après l'autre (passé simple). Connecteurs possibles : d'abord, puis, soudain, aussitôt.",
              solution: [
                "Description du décor, à l'imparfait : « La grotte était froide et humide. L'eau coulait le long des parois. »",
                "Actions successives de Lila, au passé simple : allumer → elle alluma ; avancer → elle avança ; entendre → elle entendit ; s'arrêter → elle s'arrêta.",
                "Texte réécrit : « La grotte était froide et humide. L'eau coulait le long des parois. Lila alluma d'abord sa lampe, puis elle avança prudemment. Soudain, elle entendit un grognement. Aussitôt, elle s'arrêta. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Début écrit pour l'exercice : « Depuis trois jours, Yanis et son chien Pirate suivaient la côte pour rejoindre le phare où vivait son oncle. Le ciel, ce soir-là, devint noir d'un coup, et le vent se mit à hurler. » Rédigez la suite (quinze à vingt lignes) en racontant une épreuve. Votre texte doit : garder le narrateur et les temps du début ; comporter une courte description ; contenir au moins deux répliques de dialogue ; montrer une qualité de Yanis.",
              hint: "Faites d'abord le plan en quatre temps (obstacle, tension, moment décisif, résolution). Le dialogue peut avoir lieu entre Yanis et quelqu'un qu'il rencontre, ou être adressé à son chien.",
              solution: [
                "Étape 1, les contraintes : narrateur extérieur (« Yanis », « il ») ; passé simple et imparfait ; lieu : la côte, la nuit, la tempête ; quête : rejoindre le phare de l'oncle ; adjuvant : le chien Pirate.",
                "Étape 2, le plan : obstacle, la tempête et la marée qui monte ; tension, le chemin est coupé et Pirate s'enfuit ; moment décisif, Yanis retrouve son calme et suit le chien ; résolution, ils découvrent un abri et voient la lumière du phare.",
                "Étape 3, exemple de suite : « Les vagues frappaient les rochers avec un bruit de tonnerre, et une écume blanche volait jusqu'au sentier. Yanis remonta son col et serra la laisse. Soudain, une lame énorme recouvrit le chemin devant eux. Pirate aboya, tira d'un coup sec et disparut dans l'obscurité. ‹ Pirate ! Reviens ! › cria Yanis. Seul le vent lui répondit. Il sentit la panique monter, puis il se força à respirer lentement. ‹ Il connaît la côte mieux que moi, se dit-il. Il faut le suivre. › Il repéra des traces de pattes dans le sable mouillé et les suivit, pas à pas, le long de la falaise. Peu après, il entendit un aboiement joyeux : Pirate l'attendait à l'entrée d'une petite grotte, à l'abri des vagues. Yanis s'y glissa, trempé mais soulagé. Là-bas, au bout de la pointe, la lumière du phare tournait dans la nuit. »",
                "Étape 4, la vérification : même narrateur, mêmes temps ; une description (les vagues, l'écume) ; deux répliques entre guillemets ; une qualité montrée par une action : Yanis garde son sang-froid et réfléchit au lieu de paniquer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la méthode pour écrire une suite de récit.",
            items: [
              "Relire attentivement le début du récit.",
              "Relever les contraintes : narrateur, temps, lieu, personnages, quête.",
              "Faire au brouillon le plan de l'épreuve en quatre temps.",
              "Rédiger la suite avec description et dialogue.",
              "Relire pour vérifier la cohérence avec le début.",
              "Corriger la conjugaison, les accords et la ponctuation.",
            ],
          },
          quiz: [
            { q: "Le début d'un récit est raconté à la troisième personne, au passé simple. Que doit faire la suite ?", options: ["Passer au « je » pour être plus vivante", "Passer au présent pour aller plus vite", "Garder le narrateur et les temps du début"], answer: 2, why: "La cohérence exige de garder le même narrateur et les mêmes temps." },
            { q: "Quel temps emploie-t-on pour décrire le décor dans un récit au passé ?", options: ["L'imparfait", "Le passé simple", "Le futur", "Le présent"], answer: 0, why: "L'imparfait sert aux descriptions et à l'arrière-plan ; le passé simple, aux actions principales." },
            { q: "Comment s'appelle une proposition comme « murmura-t-elle », glissée dans un dialogue ?", options: ["Une didascalie", "Une incise", "Une réplique", "Un connecteur"], answer: 1, why: "L'incise indique qui parle et comment ; elle se place à l'intérieur ou après les paroles." },
            { q: "Quel connecteur marque une action brusque et inattendue ?", options: ["D'abord", "Enfin", "Pendant ce temps", "Soudain"], answer: 3, why: "« Soudain » signale un événement brusque ; « d'abord » et « enfin » ordonnent les actions." },
            { q: "Comment le héros doit-il, de préférence, surmonter l'épreuve ?", options: ["Par sa propre qualité", "Grâce à un hasard magique imprévu", "En abandonnant sa quête"], answer: 0, why: "Une épreuve réussie met en valeur les qualités du héros, qui reste acteur de son histoire." },
          ],
          trap: "Oublier de relire le début : beaucoup de suites changent de narrateur (du « il » au « je ») ou de temps (du passé au présent) en cours de route, ce qui rend le texte incohérent.",
          method: "Avant de rédiger, écrivez en haut de votre brouillon une fiche de contraintes en cinq lignes (narrateur, temps, lieu, personnages, quête). Gardez-la sous les yeux pendant l'écriture et cochez chaque ligne à la relecture.",
        },
      ],
    },
    {
      id: 'temps-du-recit',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'passe-simple',
          title: 'Conjuguer le passé simple',
          minutes: 30,
          objectives: [
            "Identifier le passé simple et son emploi dans le récit écrit.",
            "Conjuguer au passé simple, à toutes les personnes, les verbes des trois groupes.",
            "Mémoriser les formes des verbes irréguliers les plus fréquents : être, avoir, faire, venir, voir, prendre.",
            "Distinguer le passé simple des formes proches de l'imparfait et du présent.",
          ],
          course: [
            {
              heading: "Un temps du récit écrit",
              paragraphs: [
                "Le passé simple est le temps des récits écrits au passé : romans, contes, nouvelles, récits historiques. On ne l'emploie presque plus à l'oral, où il est remplacé par le passé composé. On dira « Hier, j'ai couru », mais un roman écrira « Ce jour-là, il courut jusqu'au port ».",
                "En 6e, vous avez surtout appris le passé simple à la troisième personne (il, elle, ils, elles), la plus fréquente dans les récits. En 5e, vous apprenez à le conjuguer à toutes les personnes : c'est indispensable pour écrire un récit à la première personne (« je partis », « nous arrivâmes »).",
              ],
            },
            {
              heading: "Les verbes du 1er groupe et le verbe aller",
              paragraphs: [
                "Les verbes du 1er groupe (infinitif en -er) et le verbe aller prennent les terminaisons : -ai, -as, -a, -âmes, -âtes, -èrent. Exemple avec chanter : je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent. Avec aller : j'allai, tu allas, il alla, nous allâmes, vous allâtes, ils allèrent.",
                "Attention à deux familles de verbes. Les verbes en -cer prennent une cédille devant a : je commençai, il commença, nous commençâmes, mais ils commencèrent (pas de cédille devant e). Les verbes en -ger gardent un e devant a : je mangeai, il mangea, nous mangeâmes, mais ils mangèrent. Ces petites lettres gardent le son [s] et le son [ʒ] du verbe.",
              ],
              box: { label: "Règle", text: "1er groupe et aller : -ai, -as, -a, -âmes, -âtes, -èrent. Accent circonflexe aux deux premières personnes du pluriel (nous chantâmes, vous chantâtes), jamais à la troisième (ils chantèrent)." },
            },
            {
              heading: "Les verbes du 2e et du 3e groupe",
              paragraphs: [
                "Les verbes du 2e groupe (en -ir, avec -issons au présent : finir, choisir, grandir) prennent : -is, -is, -it, -îmes, -îtes, -irent. Je finis, tu finis, il finit, nous finîmes, vous finîtes, ils finirent.",
                "Les verbes du 3e groupe se répartissent en trois familles, selon la voyelle de la terminaison. En -i- : prendre (je pris), faire (je fis), dire (je dis), mettre (je mis), voir (je vis), partir (je partis), écrire (j'écrivis), répondre (je répondis). En -u- : être (je fus), avoir (j'eus), pouvoir (je pus), vouloir (je voulus), savoir (je sus), lire (je lus), courir (je courus), devoir (je dus), croire (je crus), connaître (je connus), vivre (je vécus). En -in- : venir (je vins) et tenir (je tins), ainsi que leurs composés (revenir, devenir, retenir, obtenir).",
                "Les terminaisons suivent toujours le même modèle : -s, -s, -t au singulier, puis -mes, -tes, -rent au pluriel, avec un accent circonflexe sur la voyelle qui précède aux deux premières personnes du pluriel (-îmes, -îtes ou -ûmes, -ûtes). Prendre : je pris, tu pris, il prit, nous prîmes, vous prîtes, ils prirent. Être : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent. Venir : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent. Retenez aussi naître (il naquit) et mourir (il mourut).",
              ],
              box: { label: "À retenir", text: "Avoir : j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent (le « eu » se prononce [y]). Faire : je fis, nous fîmes, ils firent. Voir : je vis, nous vîmes, ils virent. Venir : il vint, ils vinrent." },
            },
            {
              heading: "Ne pas confondre",
              paragraphs: [
                "À la 1re personne du singulier, le passé simple des verbes en -er (je chantai) se prononce presque comme l'imparfait (je chantais). Pour choisir, remplacez « je » par « il » : si vous entendez « il chanta », c'est le passé simple (-ai) ; si vous entendez « il chantait », c'est l'imparfait (-ais).",
                "Au singulier, les verbes du 2e groupe ont la même forme au passé simple et au présent : « il finit » peut être l'un ou l'autre. C'est le contexte qui tranche : dans « Il finit son assiette, se leva et sortit », les autres verbes sont au passé simple, donc « finit » aussi. Même piège avec « je vis », passé simple de voir (« ce jour-là, je vis un aigle ») mais aussi présent de vivre (« je vis à Lyon »).",
              ],
            },
          ],
          keyPoints: [
            "Le passé simple est le temps des récits écrits au passé ; à l'oral, on emploie le passé composé.",
            "1er groupe et aller : -ai, -as, -a, -âmes, -âtes, -èrent (je chantai, ils chantèrent).",
            "2e groupe : -is, -is, -it, -îmes, -îtes, -irent (je finis, ils finirent).",
            "3e groupe : trois familles, en -i- (je pris), en -u- (je fus, j'eus), en -in- (je vins).",
            "Accent circonflexe à nous et vous : nous fûmes, vous vîntes, nous mangeâmes.",
            "Je chantai (passé simple) ou je chantais (imparfait) : remplacer « je » par « il » pour choisir.",
          ],
          example: {
            statement: "Conjuguez au passé simple les verbes entre parenthèses (texte écrit pour l'exercice) : « Le chevalier (descendre) de cheval, (prendre) son épée et (s'avancer) vers la grotte. Ses compagnons (rester) en arrière : ils (avoir) peur. »",
            solution: [
              "« descendre » : verbe du 3e groupe en -i-, 3e personne du singulier → il descendit.",
              "« prendre » : 3e groupe en -i-, forme irrégulière → il prit.",
              "« s'avancer » : 1er groupe en -cer, cédille devant a → il s'avança.",
              "« rester » : 1er groupe, 3e personne du pluriel → ils restèrent.",
              "« avoir » : 3e personne du pluriel → ils eurent.",
              "Réponse : « Le chevalier descendit de cheval, prit son épée et s'avança vers la grotte. Ses compagnons restèrent en arrière : ils eurent peur. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au passé simple, à toutes les personnes, les verbes « marcher » et « réfléchir ».",
              hint: "« Marcher » est un verbe du 1er groupe ; « réfléchir » fait « nous réfléchissons » au présent, c'est donc un verbe du 2e groupe. N'oubliez pas l'accent circonflexe aux deux premières personnes du pluriel.",
              solution: [
                "Marcher (1er groupe, terminaisons -ai, -as, -a, -âmes, -âtes, -èrent) : je marchai, tu marchas, il marcha, nous marchâmes, vous marchâtes, ils marchèrent.",
                "Réfléchir (2e groupe, terminaisons -is, -is, -it, -îmes, -îtes, -irent) : je réfléchis, tu réfléchis, il réfléchit, nous réfléchîmes, vous réfléchîtes, ils réfléchirent.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez au passé simple les verbes entre parenthèses (texte écrit pour l'exercice) : « Ce soir-là, la tempête (commencer) vers minuit. Nous (manger) en silence. Puis on (venir) frapper à la porte : ce (être) un vieil homme trempé. Mon père le (faire) entrer. Nous (voir) qu'il tremblait. D'abord, il ne (pouvoir) pas parler ; enfin, il (dire) son nom. »",
              hint: "Repérez le groupe de chaque verbe et la personne du sujet. Attention à « commencer » et « manger » (cédille et e devant a), et aux verbes irréguliers du 3e groupe.",
              solution: [
                "la tempête commença (1er groupe en -cer : cédille devant a).",
                "Nous mangeâmes (1er groupe en -ger : e devant a, accent circonflexe).",
                "on vint (venir, famille en -in-) ; ce fut (être).",
                "Mon père le fit entrer (faire) ; nous vîmes (voir, accent circonflexe).",
                "il ne put pas parler (pouvoir) ; il dit son nom (dire).",
                "Texte corrigé : « Ce soir-là, la tempête commença vers minuit. Nous mangeâmes en silence. Puis on vint frapper à la porte : ce fut un vieil homme trempé. Mon père le fit entrer. Nous vîmes qu'il tremblait. D'abord, il ne put pas parler ; enfin, il dit son nom. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Texte écrit pour l'exercice : « Il finit son repas, prit son sac, vit le facteur et courut vers lui. Il lui tendit une lettre, puis il partit. » a) Réécrivez ce texte en remplaçant « il » par « nous » (et « son » par « notre »), sans changer de temps. b) La forme « il finit » pourrait aussi être un présent. Expliquez comment vous savez qu'ici, c'est un passé simple.",
              hint: "Identifiez d'abord l'infinitif et la famille de chaque verbe (en -i- ou en -u-), puis appliquez les terminaisons de « nous » avec l'accent circonflexe.",
              solution: [
                "Les infinitifs : finir (2e groupe), prendre (en -i-), voir (en -i-), courir (en -u-), tendre (en -i-), partir (en -i-).",
                "À la 1re personne du pluriel : nous finîmes, nous prîmes, nous vîmes, nous courûmes, nous tendîmes, nous partîmes.",
                "a) Texte réécrit : « Nous finîmes notre repas, prîmes notre sac, vîmes le facteur et courûmes vers lui. Nous lui tendîmes une lettre, puis nous partîmes. »",
                "b) « Il finit » a la même forme au présent et au passé simple. Mais tous les autres verbes de la phrase sont sans ambiguïté au passé simple (« prit », « vit », « courut ») ; au présent, on aurait « prend », « voit », « court ». Les actions se suivent dans le même récit au passé, donc « finit » est aussi au passé simple. La transformation avec « nous » le confirme : au présent on écrirait « nous finissons », ici c'est « nous finîmes ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque verbe à sa forme au passé simple.",
            pairs: [
              { left: "être, avec « il »", right: "il fut" },
              { left: "avoir, avec « ils »", right: "ils eurent" },
              { left: "venir, avec « nous »", right: "nous vînmes" },
              { left: "faire, avec « vous »", right: "vous fîtes" },
              { left: "aller, avec « ils »", right: "ils allèrent" },
              { left: "manger, avec « je »", right: "je mangeai" },
            ],
          },
          quiz: [
            { q: "Quelle est la forme de « chanter » à la 1re personne du singulier du passé simple ?", options: ["je chantais", "je chanta", "je chantis", "je chantai"], answer: 3, why: "Les verbes en -er font -ai à la 1re personne du passé simple ; « je chantais » est l'imparfait." },
            { q: "Comment conjugue-t-on « venir » avec « nous » au passé simple ?", options: ["nous vînmes", "nous venîmes", "nous vinrent", "nous venions"], answer: 0, why: "Venir appartient à la famille en -in- : nous vînmes, avec un accent circonflexe." },
            { q: "Quelle forme est correcte ?", options: ["ils commençèrent", "ils commencèrent", "ils commencairent"], answer: 1, why: "Pas de cédille devant e : la cédille n'est utile que devant a, o ou u." },
            { q: "Lequel de ces verbes a un passé simple en -u- ?", options: ["prendre", "faire", "vouloir", "dire"], answer: 2, why: "Vouloir fait « je voulus » ; prendre, faire et dire font « je pris », « je fis », « je dis »." },
            { q: "Dans « Il finit son assiette, se leva et sortit », le verbe « finit » est...", options: ["au présent de l'indicatif", "à l'imparfait de l'indicatif", "au passé simple", "au futur simple de l'indicatif"], answer: 2, why: "Les verbes voisins (« se leva », « sortit ») sont au passé simple : « finit » l'est aussi." },
          ],
          trap: "Écrire « je marchais » au lieu de « je marchai » (ou l'inverse), oublier l'accent circonflexe de « nous » et « vous » (nous fûmes, vous vîntes), ou mettre une cédille devant e (« ils commençèrent »).",
          method: "Apprenez les verbes du 3e groupe par famille (en -i-, en -u-, en -in-) plutôt qu'un par un. Pour vérifier une forme en -ai ou en -ais, remplacez « je » par « il » : « il marcha » ou « il marchait » s'entendent très différemment.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'imparfait-passe-simple',
          title: 'Imparfait ou passé simple : premier plan et arrière-plan',
          minutes: 30,
          objectives: [
            "Distinguer les emplois de l'imparfait et du passé simple dans un récit au passé.",
            "Identifier le premier plan et l'arrière-plan d'un récit.",
            "Comprendre la valeur d'aspect des deux temps : action vue en cours ou action vue dans sa totalité.",
            "Choisir le temps qui convient pour rédiger un récit au passé.",
          ],
          course: [
            {
              heading: "Deux temps pour un même passé",
              paragraphs: [
                "L'imparfait et le passé simple situent tous les deux les faits dans le passé. Ce qui les distingue, ce n'est donc pas le moment, mais la manière de présenter l'action et le rôle qu'elle joue dans le récit. Les grammairiens parlent d'aspect : la façon dont on envisage le déroulement d'une action.",
                "Pensez à une pièce de théâtre. Le décor est déjà en place quand le rideau se lève : la forêt, la nuit, le vent. Puis les acteurs entrent et agissent, l'un après l'autre. Dans un récit, le décor est à l'imparfait, c'est l'arrière-plan ; les actions des personnages sont au passé simple, c'est le premier plan.",
              ],
            },
            {
              heading: "Le passé simple : le premier plan",
              paragraphs: [
                "Le passé simple sert à raconter les actions principales, celles qui font avancer l'histoire. Ces actions se succèdent, souvent dans l'ordre où elles se produisent : « Il entra, posa son sac et ouvrit la fenêtre. » Chaque verbe fait avancer le récit d'un pas.",
                "Le passé simple présente l'action dans sa totalité, comme un bloc, avec un début et une fin. C'est pourquoi on l'emploie aussi pour une action longue, si sa durée est limitée et vue d'un seul coup d'œil : « Le roi régna trente ans. » « Ils marchèrent toute la nuit. » La durée ne suffit donc pas à imposer l'imparfait.",
              ],
              box: { label: "Règle", text: "Passé simple (premier plan) : actions principales, successives, qui font avancer le récit ; action vue en entier, avec un début et une fin, même si elle dure." },
            },
            {
              heading: "L'imparfait : l'arrière-plan",
              paragraphs: [
                "L'imparfait sert d'abord à décrire : le lieu, le temps qu'il fait, l'apparence et le caractère des personnages. « La maison était vieille, les volets grinçaient, une odeur de pain chaud flottait dans la cuisine. » Ces verbes n'ajoutent pas d'événement : ils installent le décor.",
                "L'imparfait exprime aussi des actions habituelles ou répétées : « Chaque matin, elle prenait le bus de sept heures. » Enfin, il présente une action en cours de déroulement, sans en montrer le début ni la fin, comme si l'on était au milieu de cette action : « Il lisait près du feu. » On ne sait pas quand il a commencé ni quand il s'arrêtera.",
              ],
              box: { label: "Règle", text: "Imparfait (arrière-plan) : descriptions, habitudes et répétitions, actions en cours de déroulement, vues sans limites précises." },
            },
            {
              heading: "Combiner les deux temps",
              paragraphs: [
                "Les deux temps travaillent ensemble. Une construction très fréquente montre une action en cours (imparfait) interrompue par un événement soudain (passé simple) : « Il lisait près du feu quand on frappa à la porte. » L'imparfait installe la situation ; le passé simple la fait basculer.",
                "Certains mots aident à choisir, sans être des règles absolues. « Chaque jour », « souvent », « d'habitude », « toujours » accompagnent souvent l'imparfait (habitude). « Soudain », « tout à coup », « un jour », « ce matin-là », « alors » accompagnent souvent le passé simple (événement unique). Comparez : « Chaque dimanche, il allait au marché » (habitude) et « Ce dimanche-là, il alla au marché » (un événement unique).",
              ],
              box: { label: "À retenir", text: "Imparfait = le décor et ce qui dure en arrière-plan. Passé simple = les événements qui font avancer l'histoire. Action en cours (imparfait) + événement soudain (passé simple) : « Elle dormait quand l'orage éclata. »" },
            },
          ],
          keyPoints: [
            "Imparfait et passé simple situent tous deux l'action dans le passé ; ils diffèrent par l'aspect et le rôle dans le récit.",
            "Passé simple : premier plan, actions principales et successives, action vue en entier.",
            "Imparfait : arrière-plan, descriptions, habitudes, actions en cours.",
            "Une action longue mais limitée peut être au passé simple : « Ils marchèrent toute la nuit. »",
            "Action en cours (imparfait) interrompue par un événement (passé simple) : « Il lisait quand on frappa. »",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « La nuit tombait sur le port. Les bateaux dansaient doucement. Soudain, une cloche sonna. Marin se leva, attrapa sa veste et courut vers le quai. » Classez les verbes conjugués en premier plan et arrière-plan, et justifiez.",
            solution: [
              "Arrière-plan, à l'imparfait : « tombait », « dansaient ». Ces verbes décrivent le décor (la nuit, les bateaux) et présentent des actions en cours, sans limites.",
              "Premier plan, au passé simple : « sonna », « se leva », « attrapa », « courut ». Ce sont des actions uniques, qui se suivent et font avancer l'histoire.",
              "Le mot « Soudain » marque le passage de l'arrière-plan au premier plan : un événement surgit dans le décor.",
              "Réponse : deux verbes à l'imparfait installent la scène, quatre verbes au passé simple racontent l'action.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Texte écrit pour l'exercice : « Autrefois, mon grand-père travaillait dans une ferme. Il se levait chaque jour à cinq heures. Un matin d'hiver, il découvrit un renard dans le poulailler. » Pour chaque verbe conjugué, donnez son temps et dites s'il exprime une habitude ou un événement unique.",
              hint: "Cherchez les indicateurs de temps : « chaque jour » signale une habitude, « un matin » signale un moment précis.",
              solution: [
                "« travaillait » : imparfait ; situation qui dure, en arrière-plan (une habitude de vie).",
                "« se levait » : imparfait ; habitude, soulignée par « chaque jour ».",
                "« découvrit » : passé simple ; événement unique, introduit par « Un matin d'hiver ».",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez chaque verbe entre parenthèses à l'imparfait ou au passé simple, et justifiez votre choix (texte écrit pour l'exercice) : « Il (être) sept heures. La pluie (tomber) depuis le matin et les rues (être) désertes. Mathilde (marcher) vers l'arrêt de bus quand une voiture (s'arrêter) brusquement à côté d'elle. La vitre (descendre) lentement. »",
              hint: "Demandez-vous pour chaque verbe : est-ce le décor ou une action en cours (imparfait), ou un événement qui fait avancer l'histoire (passé simple) ? Le mot « quand » signale souvent une interruption.",
              solution: [
                "« Il était sept heures » : imparfait, indication de cadre (l'heure).",
                "« La pluie tombait » et « les rues étaient désertes » : imparfait, description du décor.",
                "« Mathilde marchait » : imparfait, action en cours au moment où survient l'événement.",
                "« une voiture s'arrêta » : passé simple, événement soudain qui interrompt la marche (« quand », « brusquement »).",
                "« La vitre descendit » : passé simple, action suivante qui fait avancer l'histoire.",
                "Texte corrigé : « Il était sept heures. La pluie tombait depuis le matin et les rues étaient désertes. Mathilde marchait vers l'arrêt de bus quand une voiture s'arrêta brusquement à côté d'elle. La vitre descendit lentement. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un élève a écrit (texte écrit pour l'exercice) : « La forêt fut silencieuse. Les arbres furent immenses et leurs branches cachèrent le ciel. Léna avançait prudemment. Tout à coup, un hibou hululait et elle sursautait. » a) Relevez les cinq verbes mal employés et corrigez-les. b) Expliquez en une phrase la règle qui justifie chaque correction. c) Expliquez pourquoi « Léna avançait prudemment » est correct.",
              hint: "Distinguez ce qui relève de la description (le décor) et ce qui est un événement soudain. Regardez le connecteur « Tout à coup ».",
              solution: [
                "a) « fut » → « était » ; « furent » → « étaient » ; « cachèrent » → « cachaient » ; « hululait » → « hulula » ; « sursautait » → « sursauta ».",
                "b) « était », « étaient », « cachaient » : ces verbes décrivent le décor de la forêt ; la description se met à l'imparfait. « hulula », « sursauta » : ce sont des événements soudains et uniques, annoncés par « Tout à coup » ; ils font avancer l'histoire, donc passé simple.",
                "c) « Léna avançait » est à l'imparfait parce que c'est une action en cours, qui sert d'arrière-plan au moment où l'événement survient : le hibou interrompt sa marche.",
                "Texte corrigé : « La forêt était silencieuse. Les arbres étaient immenses et leurs branches cachaient le ciel. Léna avançait prudemment. Tout à coup, un hibou hulula et elle sursauta. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : imparfait ou passé simple ?",
            statements: [
              { text: "Une action longue se met toujours à l'imparfait.", true: false, why: "Une durée limitée et vue en entier se met au passé simple : « Ils marchèrent toute la nuit. »" },
              { text: "Les descriptions de lieux se mettent en général à l'imparfait.", true: true, why: "La description forme l'arrière-plan du récit." },
              { text: "Dans « Il lisait quand on frappa », l'imparfait montre une action en cours.", true: true, why: "La lecture est en cours ; le coup frappé à la porte l'interrompt." },
              { text: "Le passé simple sert à exprimer les habitudes : « Chaque matin, il se leva tôt. »", true: false, why: "L'habitude s'exprime à l'imparfait : « Chaque matin, il se levait tôt. »" },
              { text: "Les actions qui se suivent et font avancer l'histoire sont au passé simple.", true: true, why: "Elles forment le premier plan du récit." },
              { text: "L'imparfait situe l'action plus loin dans le passé que le passé simple.", true: false, why: "Les deux temps peuvent désigner le même moment ; ils diffèrent par l'aspect, pas par l'époque." },
              { text: "« Soudain » introduit souvent un verbe au passé simple.", true: true, why: "Il annonce un événement unique et brusque." },
            ],
          },
          quiz: [
            { q: "« Le ciel ... gris et le vent ... dans les arbres. » Quels verbes conviennent ?", options: ["fut / souffla", "était / soufflait", "a été / a soufflé"], answer: 1, why: "Il s'agit d'une description du décor : l'imparfait convient." },
            { q: "« Elle dormait profondément quand le téléphone ... » :", options: ["sonna", "sonnait", "sonnera", "sonne"], answer: 0, why: "Un événement soudain interrompt une action en cours : passé simple." },
            { q: "Quelle valeur a l'imparfait dans « Chaque été, nous partions en Bretagne » ?", options: ["Une description de personnage", "Une habitude", "Une action soudaine et unique", "Un événement du premier plan"], answer: 1, why: "« Chaque été » indique une action répétée : c'est l'imparfait d'habitude." },
            { q: "Pourquoi écrit-on « Le roi régna quarante ans » au passé simple ?", options: ["Parce que l'action est courte", "Parce que c'est une description", "Parce que c'est une habitude répétée du roi", "Parce que la durée est vue en entier"], answer: 3, why: "Le passé simple présente l'action comme un bloc limité, même si elle dure longtemps." },
            { q: "Comment appelle-t-on les actions principales d'un récit, au passé simple ?", options: ["Le premier plan", "L'arrière-plan", "Le décor du récit"], answer: 0, why: "Le premier plan regroupe les actions qui font avancer l'histoire ; l'arrière-plan, le décor." },
          ],
          trap: "Croire qu'une action longue doit toujours être à l'imparfait et une action courte toujours au passé simple : ce qui compte, c'est le rôle de l'action (décor ou événement) et la façon de la voir (en cours ou en entier).",
          method: "Pour choisir, posez la question : « Est-ce que ce verbe fait avancer l'histoire ? » Si oui, passé simple. S'il décrit, explique une habitude ou montre une action en cours, imparfait. Vérifiez ensuite les indicateurs de temps (soudain, chaque jour).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'passe-compose-plus-que-parfait',
          title: 'Le passé composé et le plus-que-parfait dans un récit',
          minutes: 30,
          objectives: [
            "Former le passé composé et le plus-que-parfait avec l'auxiliaire être ou avoir.",
            "Accorder le participe passé employé avec l'auxiliaire être.",
            "Identifier la valeur d'antériorité du plus-que-parfait dans un récit au passé.",
            "Employer le passé composé dans un récit à la première personne ou dans un dialogue.",
          ],
          course: [
            {
              heading: "Deux temps composés",
              paragraphs: [
                "Le passé composé et le plus-que-parfait sont des temps composés : ils se forment avec un auxiliaire (être ou avoir) suivi du participe passé du verbe. Seul le temps de l'auxiliaire change. Au passé composé, l'auxiliaire est au présent : j'ai marché, elle est partie. Au plus-que-parfait, l'auxiliaire est à l'imparfait : j'avais marché, elle était partie.",
                "Exemple complet avec finir : passé composé, j'ai fini, tu as fini, il a fini, nous avons fini, vous avez fini, ils ont fini ; plus-que-parfait, j'avais fini, tu avais fini, il avait fini, nous avions fini, vous aviez fini, ils avaient fini.",
              ],
              box: { label: "Formule", text: "Passé composé = auxiliaire être ou avoir au présent + participe passé. Plus-que-parfait = auxiliaire être ou avoir à l'imparfait + participe passé." },
            },
            {
              heading: "Être ou avoir ? L'accord du participe passé",
              paragraphs: [
                "La plupart des verbes se conjuguent avec l'auxiliaire avoir, à commencer par avoir et être eux-mêmes (j'ai eu, j'ai été). Se conjuguent avec être : certains verbes de mouvement ou de changement d'état (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, rentrer, devenir, revenir) et tous les verbes pronominaux (se lever, se promener, s'enfuir).",
                "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet : « Elle est partie. » « Ils étaient tombés. » « Les filles se sont levées. » Avec l'auxiliaire avoir, le participe passé ne s'accorde pas avec le sujet : « Elles ont mangé. » (Un cas particulier, quand le complément d'objet direct est placé avant le verbe, sera étudié plus tard.)",
                "Remarque : monter, descendre, sortir, rentrer se conjuguent avec avoir quand ils ont un complément d'objet direct. Comparez : « Elle est sortie » et « Elle a sorti le chien ».",
              ],
              box: { label: "Règle", text: "Avec être, le participe passé s'accorde avec le sujet (elles sont arrivées). Avec avoir, il ne s'accorde pas avec le sujet (elles ont chanté)." },
            },
            {
              heading: "Le passé composé dans le récit",
              paragraphs: [
                "Le passé composé est le temps du passé de la langue orale : « Hier, j'ai raté le bus. » Dans un récit écrit au passé simple, on le retrouve donc dans les dialogues, quand les personnages parlent : « Le garde s'approcha. ‹ Qu'avez-vous vu ? › demanda-t-il. »",
                "Certains récits, surtout à la première personne, sont entièrement écrits au passé composé, comme un journal intime ou un témoignage : « Ce matin, je suis allée à la plage et j'ai vu un phoque. » C'est le cas d'un roman célèbre, L'Étranger d'Albert Camus (1942). Le passé composé présente l'action comme achevée, en lien avec le moment où l'on parle ou écrit.",
              ],
            },
            {
              heading: "Le plus-que-parfait : revenir en arrière",
              paragraphs: [
                "Le plus-que-parfait exprime une action passée qui a eu lieu avant une autre action passée. On dit qu'il marque l'antériorité. « Quand Paul arriva à la gare, le train était parti. » Le train est parti d'abord, Paul est arrivé ensuite : le plus-que-parfait (« était parti ») indique l'action la plus ancienne.",
                "Dans un récit, le plus-que-parfait permet au narrateur de faire un retour en arrière, pour expliquer ce qui s'était passé avant : « Léa ouvrit la boîte. Son grand-père l'avait cachée là, des années plus tôt. » Le passé composé joue le même rôle par rapport au présent : « Je mange (maintenant) le gâteau que j'ai acheté (avant). »",
              ],
              box: { label: "À retenir", text: "Le plus-que-parfait marque une action antérieure à une autre action passée (au passé simple, à l'imparfait ou au passé composé). Dans un récit transposé du présent au passé : le passé composé devient plus-que-parfait." },
            },
          ],
          keyPoints: [
            "Passé composé : auxiliaire au présent + participe passé (j'ai vu, elle est venue).",
            "Plus-que-parfait : auxiliaire à l'imparfait + participe passé (j'avais vu, elle était venue).",
            "Auxiliaire être : verbes de mouvement ou de changement d'état et verbes pronominaux.",
            "Avec être, le participe passé s'accorde avec le sujet ; avec avoir, pas avec le sujet.",
            "Le passé composé : récit à la première personne, dialogues, langue orale.",
            "Le plus-que-parfait marque l'antériorité par rapport à un autre fait passé.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Lorsque Paul ouvrit la lettre, il comprit que sa sœur était partie la veille. Avant de s'en aller, elle avait déposé ses clés sur la table. » Relevez les verbes au plus-que-parfait, puis rangez les quatre actions dans l'ordre où elles se sont produites.",
            solution: [
              "Verbes au plus-que-parfait : « était partie » (auxiliaire être à l'imparfait + participe accordé avec « sa sœur ») et « avait déposé » (auxiliaire avoir à l'imparfait).",
              "Ces verbes marquent des actions antérieures à celles du récit, qui sont au passé simple (« ouvrit », « comprit »).",
              "Ordre réel : 1. la sœur dépose ses clés sur la table (« Avant de s'en aller ») ; 2. elle part, la veille ; 3. Paul ouvre la lettre ; 4. il comprend.",
              "Réponse : le plus-que-parfait permet au narrateur d'évoquer ce qui s'est passé avant le moment raconté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au passé composé, puis au plus-que-parfait : elle (partir) ; nous (finir) ; ils (tomber) ; vous (voir) ; les filles (se lever).",
              hint: "Choisissez d'abord l'auxiliaire : verbes de mouvement et pronominaux avec être, les autres avec avoir. Avec être, accordez le participe avec le sujet.",
              solution: [
                "elle (partir) : elle est partie ; elle était partie (auxiliaire être, participe accordé au féminin).",
                "nous (finir) : nous avons fini ; nous avions fini (auxiliaire avoir, pas d'accord avec le sujet).",
                "ils (tomber) : ils sont tombés ; ils étaient tombés (être, accord au masculin pluriel).",
                "vous (voir) : vous avez vu ; vous aviez vu (avoir).",
                "les filles (se lever) : les filles se sont levées ; les filles s'étaient levées (verbe pronominal, être, accord au féminin pluriel).",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez au plus-que-parfait les verbes entre parenthèses, puis indiquez quel événement s'est produit en dernier (texte écrit pour l'exercice) : « Quand les pompiers arrivèrent, le feu (détruire) la grange. Les animaux (s'enfuir) dans les champs. Heureusement, le fermier (ouvrir) les portes à temps. »",
              hint: "« Détruire » et « ouvrir » se conjuguent avec avoir ; « s'enfuir » est pronominal. Attention à l'accord du participe de « s'enfuir » avec « les animaux ».",
              solution: [
                "le feu avait détruit la grange (avoir à l'imparfait + participe passé de détruire).",
                "Les animaux s'étaient enfuis (verbe pronominal : être à l'imparfait, participe accordé au masculin pluriel).",
                "le fermier avait ouvert les portes (avoir à l'imparfait + participe passé d'ouvrir).",
                "L'événement le plus récent est l'arrivée des pompiers (« arrivèrent », au passé simple) : tous les faits au plus-que-parfait se sont produits avant.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Extrait d'un journal intime (écrit pour l'exercice) : « Aujourd'hui, je suis partie tôt avec mon frère. Hier, un pêcheur nous a parlé d'un phoque qui dort sur les rochers. Nous sommes descendus jusqu'à la crique et nous avons enfin vu l'animal. » Transformez ce texte en récit à la troisième personne, au passé simple, en commençant par « Ce jour-là, Nina... ». Pensez à changer les indicateurs de temps et à marquer l'antériorité.",
              hint: "Les actions du jour passent au passé simple ; ce qui s'est passé la veille passe au plus-que-parfait ; le présent de vérité (« qui dort ») passe à l'imparfait. « Hier » devient « la veille ».",
              solution: [
                "Indicateurs de temps : « Aujourd'hui » devient « Ce jour-là » ; « Hier » devient « La veille ».",
                "Actions du jour, du passé composé au passé simple : « je suis partie » → « Nina partit » ; « nous sommes descendus » → « ils descendirent » ; « nous avons vu » → « ils virent ».",
                "Action de la veille, antérieure : « un pêcheur nous a parlé » → « un pêcheur leur avait parlé » (plus-que-parfait).",
                "Description : « qui dort » → « qui dormait » (imparfait, arrière-plan).",
                "Texte transformé : « Ce jour-là, Nina partit tôt avec son frère. La veille, un pêcheur leur avait parlé d'un phoque qui dormait sur les rochers. Ils descendirent jusqu'à la crique et virent enfin l'animal. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Texte écrit pour le jeu : « À dix-huit heures, Léo entra dans la cuisine et poussa un cri : le gâteau avait disparu ! Le matin, il avait acheté les bougies ; à midi, sa mère avait sorti le gâteau du four ; dans l'après-midi, sa petite sœur l'avait mangé en cachette. » Remettez les événements dans l'ordre où ils se sont réellement produits.",
            items: [
              "Léo achète les bougies.",
              "Sa mère sort le gâteau du four.",
              "Sa petite sœur mange le gâteau en cachette.",
              "Léo entre dans la cuisine.",
              "Léo pousse un cri.",
            ],
          },
          quiz: [
            { q: "Comment se forme le plus-que-parfait ?", options: ["Auxiliaire au présent + participe passé", "Auxiliaire au futur simple + participe passé", "Auxiliaire à l'imparfait + participe passé"], answer: 2, why: "« J'avais fini », « elle était partie » : l'auxiliaire est à l'imparfait." },
            { q: "Quelle phrase est correctement accordée ?", options: ["Elles sont arrivées en retard.", "Elles ont mangées les pommes du verger.", "Elles sont arrivé en retard.", "Elle est venu seule."], answer: 0, why: "Avec être, le participe s'accorde avec le sujet ; avec avoir, il ne s'accorde pas avec le sujet." },
            { q: "« Quand nous arrivâmes, le spectacle ... » : quelle forme marque que le spectacle a commencé avant ?", options: ["commença", "commence", "commencerait bientôt", "avait commencé"], answer: 3, why: "Le plus-que-parfait marque une action antérieure à une autre action passée." },
            { q: "Quel verbe se conjugue avec l'auxiliaire être au passé composé ?", options: ["manger", "tomber", "voir", "prendre"], answer: 1, why: "Tomber est un verbe de changement d'état : « il est tombé »." },
            { q: "Dans un roman au passé simple, où trouve-t-on souvent le passé composé ?", options: ["Dans les descriptions du décor", "Dans les paroles des personnages", "Dans les actions du premier plan"], answer: 1, why: "Le passé composé est le temps du passé à l'oral : les personnages l'emploient quand ils parlent." },
          ],
          trap: "Oublier d'accorder le participe passé avec l'auxiliaire être (« elle est parti ») ou, à l'inverse, l'accorder avec le sujet quand l'auxiliaire est avoir (« elles ont mangées »).",
          method: "Pour choisir l'accord, repérez d'abord l'auxiliaire. Avec être, demandez « qui est-ce qui ? » et accordez avec la réponse. Pour repérer l'antériorité, dessinez une flèche du temps et placez-y chaque action : celle au plus-que-parfait se place toujours à gauche de l'autre.",
        },
      ],
    },
    {
      id: 'voyager-en-poesie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'poesie-invitation-voyage',
          title: 'La poésie, une invitation au voyage',
          minutes: 25,
          objectives: [
            "Identifier les formes du voyage en poésie : voyage réel, voyage rêvé, voyage du retour et voyage intérieur.",
            "Situer quelques poètes du voyage et leurs œuvres : Du Bellay, Baudelaire, Rimbaud, Cendrars.",
            "Analyser comment un poème fait voyager le lecteur : lieux, sensations, rythme, émotions.",
            "Exprimer et justifier une réaction personnelle de lecteur face à un poème.",
          ],
          course: [
            {
              heading: "Pourquoi les poètes voyagent-ils ?",
              paragraphs: [
                "Le voyage est l'un des grands thèmes de la poésie. Les poètes partent pour découvrir le monde, pour fuir l'ennui de la vie ordinaire, pour rencontrer d'autres peuples, ou simplement pour rêver. Et le lecteur voyage avec eux, sans quitter sa chaise : le poème lui fait voir des paysages, entendre des bruits, sentir des parfums lointains.",
                "Le titre de ce chapitre, « Du monde entier au cœur du monde », est celui sous lequel ont été réunies les poésies complètes de Blaise Cendrars, poète voyageur du XXe siècle. Il montre bien les deux directions du voyage poétique : vers l'extérieur, à travers le monde entier, et vers l'intérieur, jusqu'au cœur, c'est-à-dire jusqu'aux émotions et à soi-même.",
              ],
            },
            {
              heading: "Le voyage réel : partir et découvrir",
              paragraphs: [
                "Certains poèmes racontent un vrai départ. Dans La Prose du Transsibérien et de la petite Jehanne de France (1913), Blaise Cendrars se souvient d'un voyage de jeunesse en train à travers la Russie, avec une compagne nommée Jehanne. Le poème est écrit en vers libres, de longueurs très variées ; il accumule les noms de villes et les images, et son rythme rappelle le roulement du train. Il fut publié sous la forme d'un long dépliant de près de deux mètres, mis en couleurs par l'artiste Sonia Delaunay.",
                "Arthur Rimbaud, lui, voyage à pied. Dans le sonnet « Ma Bohème », écrit en 1870 alors qu'il est encore adolescent, il raconte ses fugues sur les routes, les poches trouées, dormant à la belle étoile. Le voyage est pour lui synonyme de liberté et d'inspiration : il compose ses vers en marchant.",
              ],
            },
            {
              heading: "Le voyage rêvé",
              paragraphs: [
                "Le voyage peut aussi rester un rêve. Dans « L'Invitation au voyage », poème des Fleurs du mal (1857), Charles Baudelaire invite la femme qu'il aime à partir avec lui vers un pays imaginaire, qui lui ressemble. Il ne raconte pas un voyage accompli : il le désire et l'imagine. Un refrain revient trois fois et résume ce monde idéal : « Là, tout n'est qu'ordre et beauté, / Luxe, calme et volupté. »",
                "Le pays du poème n'existe pas sur une carte : c'est un lieu d'harmonie parfaite, fait de lumière douce, de parfums et de calme. Le voyage rêvé permet au poète d'échapper, par l'imagination, à un monde qui le déçoit.",
              ],
            },
            {
              heading: "Le voyage du retour et le voyage intérieur",
              paragraphs: [
                "Partir, c'est aussi découvrir ce qui nous manque. Au XVIe siècle, Joachim Du Bellay passe plusieurs années à Rome. Dans un sonnet célèbre des Regrets (1558), qui commence par « Heureux qui, comme Ulysse, a fait un beau voyage », il envie Ulysse, le héros de l'Odyssée, qui a fini par rentrer chez lui. Lui préfère son petit village d'Anjou aux palais de Rome : le voyage fait naître la nostalgie, le regret du pays natal.",
                "Enfin, tout voyage poétique est aussi un voyage intérieur. En découvrant le monde, le poète découvre ses émotions, ses souvenirs, ses désirs. Lire un poème de voyage, c'est donc se demander à la fois où il nous emmène et ce qu'il nous apprend du cœur de celui qui voyage.",
              ],
              box: { label: "À retenir", text: "Quatre formes de voyage poétique : le voyage réel (Cendrars, Rimbaud), le voyage rêvé (Baudelaire), le voyage du retour et la nostalgie (Du Bellay), le voyage intérieur, présent dans tous." },
            },
            {
              heading: "Comment un poème fait-il voyager ?",
              paragraphs: [
                "Pour analyser un poème du voyage, repérez : les lieux (noms de pays, de villes, de mers, appelés toponymes) ; les verbes de mouvement (partir, filer, traverser, voguer) ; les moyens de transport ; les sensations (couleurs, bruits, odeurs) ; le rythme (énumérations, vers longs ou courts) ; les émotions (joie, désir, peur, regret).",
                "Pour donner votre avis de lecteur, ne vous contentez pas de « j'aime » ou « je n'aime pas ». Dites ce que le poème vous a fait ressentir ou imaginer, puis appuyez-vous sur un mot ou un vers précis qui a produit cet effet.",
              ],
            },
          ],
          keyPoints: [
            "Le voyage est un grand thème poétique : découvrir, fuir, rêver, se retrouver.",
            "Voyage réel : Cendrars, La Prose du Transsibérien (1913) ; Rimbaud, « Ma Bohème » (1870).",
            "Voyage rêvé : Baudelaire, « L'Invitation au voyage », Les Fleurs du mal (1857).",
            "Voyage du retour, nostalgie : Du Bellay, Les Regrets (1558), « Heureux qui, comme Ulysse... ».",
            "Indices à repérer : lieux, verbes de mouvement, transports, sensations, rythme, émotions.",
          ],
          example: {
            statement: "Poème en vers libres écrit pour l'exercice : « Je prends le train du soir / Les gares défilent comme des lanternes / Lyon Marseille Gênes / L'odeur du sel entre par la fenêtre / Et mon cœur court plus vite que les rails ». Quel type de voyage ce poème évoque-t-il, et comment fait-il voyager le lecteur ?",
            solution: [
              "Type de voyage : un voyage réel, en train, raconté au présent par un « je » qui part (« Je prends le train du soir »).",
              "Les lieux : une énumération de villes, « Lyon Marseille Gênes », sans virgules, qui donne l'impression que les gares passent très vite.",
              "Les sensations : la vue (« comme des lanternes ») et l'odorat (« L'odeur du sel »), qui annonce l'approche de la mer.",
              "Le voyage intérieur : le dernier vers montre l'émotion du voyageur, son impatience ou sa joie : son cœur « court plus vite que les rails ».",
              "Réponse : le poème évoque un voyage réel vers la mer ; il fait voyager le lecteur par l'énumération des villes, les sensations et l'émotion du dernier vers.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque poète à son œuvre et au type de voyage qu'elle évoque. Poètes : Joachim Du Bellay, Charles Baudelaire, Blaise Cendrars, Arthur Rimbaud. Œuvres : « L'Invitation au voyage » ; La Prose du Transsibérien ; « Ma Bohème » ; Les Regrets. Types de voyage : voyage rêvé ; voyage en train ; fugue à pied ; nostalgie du pays natal.",
              hint: "Relisez les parties 2, 3 et 4 du cours. Repérez d'abord les dates : XVIe siècle, 1857, 1870, 1913.",
              solution: [
                "Joachim Du Bellay : Les Regrets (1558) ; nostalgie du pays natal.",
                "Charles Baudelaire : « L'Invitation au voyage » (Les Fleurs du mal, 1857) ; voyage rêvé.",
                "Arthur Rimbaud : « Ma Bohème » (1870) ; fugue à pied.",
                "Blaise Cendrars : La Prose du Transsibérien (1913) ; voyage en train.",
              ],
            },
            {
              level: 2,
              statement: "Poème écrit pour l'exercice : « Je reviens de loin, de très loin / J'ai vu les déserts d'or et les fleuves verts / J'ai dormi sous des ciels qui parlaient d'autres langues / Mais ce soir, devant la porte de ma maison / L'odeur du tilleul me serre le cœur ». a) Relevez les lieux et les sensations. b) Quel moment du voyage ce poème évoque-t-il ? c) Quelle émotion domine à la fin ? Justifiez.",
              hint: "Repérez les temps des verbes : le passé composé raconte le voyage, le présent décrit le moment actuel. Cherchez où se trouve le « je » à la fin du poème.",
              solution: [
                "a) Lieux : « les déserts d'or », « les fleuves verts », « des ciels qui parlaient d'autres langues » (lieux lointains), puis « la porte de ma maison » (le lieu familier). Sensations : la vue (couleurs « or », « verts ») et l'odorat (« L'odeur du tilleul »).",
                "b) Le poème évoque le retour : « Je reviens de loin ». Le voyage est raconté au passé composé (« J'ai vu », « J'ai dormi ») ; le présent (« ce soir ») montre le voyageur arrivé chez lui.",
                "c) À la fin domine une émotion forte, mêlée de tendresse et de nostalgie : l'odeur familière du tilleul « me serre le cœur ». Le connecteur « Mais » oppose les merveilles du voyage à la force d'un simple souvenir de la maison, comme chez Du Bellay.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux poèmes écrits pour l'exercice. Poème A : « Partons, partons sur la mer qui chante / Les voiles blanches nous attendent / Le monde est grand et nous sommes jeunes ». Poème B : « J'ai fait le tour des villes célèbres / J'ai vu les tours, les ponts, les palais / Et je ne pense qu'au ruisseau de mon enfance ». Rédigez un paragraphe de huit à dix lignes qui compare ces deux poèmes (type de voyage, émotions, procédés) et qui donne votre préférence de lecteur, justifiée par un vers.",
              hint: "Comparez les temps des verbes (impératif ou passé composé), les émotions (enthousiasme ou nostalgie) et les procédés (répétition, énumération, opposition). Pour votre avis, citez un vers précis et dites ce qu'il produit sur vous.",
              solution: [
                "Étape 1, le poème A : un appel au départ, à l'impératif (« Partons, partons ») ; la répétition exprime l'enthousiasme ; le dernier vers associe l'immensité du monde et la jeunesse. C'est un voyage désiré, tourné vers l'avenir.",
                "Étape 2, le poème B : un bilan de voyage au passé composé ; une énumération (« les tours, les ponts, les palais ») rappelle les merveilles vues ; le dernier vers, introduit par « Et », les oppose à un souvenir modeste, « le ruisseau de mon enfance ». C'est la nostalgie, comme chez Du Bellay.",
                "Étape 3, l'avis justifié : choisir un poème et citer un vers.",
                "Exemple de paragraphe : « Ces deux poèmes parlent du voyage, mais de façon opposée. Le poème A est un appel au départ : l'impératif répété, ‹ Partons, partons ›, exprime l'enthousiasme, et le dernier vers associe l'immensité du monde à la jeunesse. Le poème B, au contraire, fait le bilan d'un voyage : l'énumération des ‹ tours, [des] ponts, [des] palais › montre tout ce que le voyageur a vu, mais le dernier vers révèle qu'il ne pense qu'au ‹ ruisseau de [son] enfance ›. Le premier poème regarde vers l'avenir, le second vers le passé. Je préfère le poème B, car son dernier vers me surprend : un simple ruisseau compte plus que des palais, et cela montre que le vrai voyage se passe dans le cœur. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque poète à son œuvre.",
            pairs: [
              { left: "Joachim Du Bellay", right: "Les Regrets (1558)" },
              { left: "Charles Baudelaire", right: "Les Fleurs du mal (1857)" },
              { left: "Arthur Rimbaud", right: "« Ma Bohème » (1870)" },
              { left: "Blaise Cendrars", right: "La Prose du Transsibérien (1913)" },
              { left: "Guillaume Apollinaire", right: "Alcools (1913)" },
            ],
          },
          quiz: [
            { q: "Quel poète envie Ulysse, qui a pu rentrer chez lui ?", options: ["Arthur Rimbaud", "Joachim Du Bellay", "Blaise Cendrars", "Charles Baudelaire"], answer: 1, why: "Dans Les Regrets, Du Bellay, exilé à Rome, regrette son village d'Anjou." },
            { q: "Dans « L'Invitation au voyage », le voyage est...", options: ["rêvé", "raconté au retour", "fait à pied sur les routes"], answer: 0, why: "Baudelaire imagine un pays idéal et invite la femme aimée à y partir : le voyage reste un désir." },
            { q: "Par quel moyen de transport voyage-t-on dans le poème de Cendrars de 1913 ?", options: ["En bateau à voiles", "À cheval", "En train", "En montgolfière"], answer: 2, why: "La Prose du Transsibérien évoque un voyage sur le chemin de fer qui traverse la Russie." },
            { q: "Comment appelle-t-on un nom de lieu (pays, ville, fleuve) ?", options: ["Une anaphore", "Une rime", "Une strophe", "Un toponyme"], answer: 3, why: "Un toponyme est un nom propre de lieu ; les poèmes de voyage en sont souvent remplis." },
            { q: "Qu'appelle-t-on le « voyage intérieur » ?", options: ["Un voyage fait dans son propre pays", "La découverte de ses émotions", "Un voyage à l'intérieur d'une maison"], answer: 1, why: "En voyageant, le poète découvre aussi ses sentiments, ses souvenirs et ses désirs." },
          ],
          trap: "Croire qu'un poème de voyage raconte forcément un vrai voyage : beaucoup de poèmes évoquent un voyage rêvé, désiré ou regretté, et tous parlent aussi des émotions du poète.",
          method: "Pour lire un poème de voyage, surlignez avec trois couleurs : les lieux, les sensations, les émotions. Vous verrez d'un coup d'œil où va le poème et ce qu'il fait ressentir ; votre analyse et votre avis s'appuieront sur ces mots.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vers-rimes-strophes',
          title: 'Lire un poème : vers, rimes et strophes',
          minutes: 30,
          objectives: [
            "Compter les syllabes d'un vers en appliquant la règle du e muet.",
            "Identifier les principaux vers (octosyllabe, décasyllabe, alexandrin) et le vers libre.",
            "Reconnaître la disposition, la richesse et le genre des rimes.",
            "Nommer les strophes et identifier la forme du sonnet.",
          ],
          course: [
            {
              heading: "Le vers et ses syllabes",
              paragraphs: [
                "Un vers est une ligne de poème. Dans la poésie régulière, on le mesure en comptant ses syllabes prononcées. Exemple écrit pour la leçon : « La mer chantait sous le ciel de juillet » se découpe ainsi : La / mer / chan / tait / sous / le / ciel / de / juil / let. Il compte dix syllabes.",
                "La difficulté vient du e muet (le e non accentué en fin de mot, comme dans « plaine » ou « porte »). Il obéit à trois règles. Devant une consonne, à l'intérieur du vers, il se prononce et compte : « une barque légère » se découpe en u / ne / bar / que / lé / gè(re), soit six syllabes. Devant une voyelle ou un h muet, il ne compte pas, on fait l'élision : « u / n'î / le » (« une île »). En fin de vers, il ne compte jamais.",
              ],
              box: { label: "Règle", text: "Le e muet compte devant une consonne, à l'intérieur du vers. Il ne compte pas devant une voyelle ou un h muet (élision), ni en fin de vers." },
            },
            {
              heading: "Les vers réguliers et le vers libre",
              paragraphs: [
                "Les vers les plus fréquents portent un nom selon leur nombre de syllabes : l'octosyllabe (8 syllabes), très employé au Moyen Âge ; le décasyllabe (10 syllabes) ; l'alexandrin (12 syllabes), le grand vers de la poésie française, qui doit son nom au Roman d'Alexandre, écrit au XIIe siècle. L'alexandrin classique se partage souvent en deux moitiés de six syllabes, appelées hémistiches.",
                "Exemple d'alexandrin écrit pour la leçon : « Je partirai demain vers les îles lointaines » : Je / par / ti / rai / de / main / vers / les / î / les / loin / tai / nes. Le e de « îles » compte, car il est suivi d'une consonne ; celui de « lointaines », en fin de vers, ne compte pas. Total : douze syllabes.",
                "À partir de la fin du XIXe siècle, beaucoup de poètes choisissent le vers libre : un vers sans nombre fixe de syllabes et sans rime obligatoire. Le rythme naît alors du retour à la ligne, des répétitions, des longueurs variées. Cendrars et Apollinaire l'emploient souvent. Il existe aussi le poème en prose, sans vers du tout, comme les Petits poèmes en prose de Baudelaire.",
              ],
            },
            {
              heading: "Les rimes : disposition, richesse, genre",
              paragraphs: [
                "La rime est le retour du même son à la fin de deux vers ou plus. On la note avec des lettres (A, B, C). Trois dispositions sont fréquentes : les rimes suivies ou plates (AABB), les rimes croisées (ABAB) et les rimes embrassées (ABBA).",
                "La richesse d'une rime dépend du nombre de sons communs, en comptant la dernière voyelle prononcée et ce qui la suit. Rime pauvre : un seul son commun (« ami » / « joli », son [i]). Rime suffisante : deux sons communs (« voyage » / « rivage », sons [a] et [ʒ]). Rime riche : trois sons ou plus (« mer » / « amer », sons [m], [ɛ] et [ʁ]). On compte les sons que l'on entend, pas les lettres.",
                "Enfin, une rime est dite féminine quand le mot se termine par un e muet (« plaine » / « fontaine », « vie » / « envie »), et masculine dans tous les autres cas (« chemin » / « matin »). Dans la poésie classique, rimes féminines et masculines alternent.",
              ],
              box: { label: "Repère", text: "Rimes plates AABB, croisées ABAB, embrassées ABBA. Rime pauvre : 1 son commun ; suffisante : 2 ; riche : 3 ou plus. Rime féminine : terminée par un e muet ; masculine : les autres." },
            },
            {
              heading: "Les strophes et le sonnet",
              paragraphs: [
                "Une strophe est un groupe de vers séparé des autres par une ligne blanche. Elle porte un nom selon son nombre de vers : le distique (2 vers), le tercet (3), le quatrain (4), le quintil (5), le sizain (6).",
                "Le sonnet est une forme fixe venue d'Italie et très pratiquée en France depuis le XVIe siècle, notamment par Du Bellay et Ronsard. Il compte quatorze vers, répartis en deux quatrains puis deux tercets. Le sonnet de Du Bellay « Heureux qui, comme Ulysse... » et « Ma Bohème » de Rimbaud sont des sonnets en alexandrins. Le dernier vers d'un sonnet, appelé la chute, est souvent frappant.",
              ],
              box: { label: "Définition", text: "Le sonnet est un poème à forme fixe de 14 vers : deux quatrains suivis de deux tercets." },
            },
          ],
          keyPoints: [
            "Un vers se mesure en syllabes prononcées.",
            "Le e muet compte devant une consonne ; pas devant une voyelle (élision) ni en fin de vers.",
            "Octosyllabe : 8 syllabes ; décasyllabe : 10 ; alexandrin : 12 (deux hémistiches de 6).",
            "Le vers libre n'a ni nombre fixe de syllabes ni rime obligatoire.",
            "Rimes plates (AABB), croisées (ABAB), embrassées (ABBA) ; pauvres, suffisantes, riches.",
            "Strophes : distique, tercet, quatrain, quintil, sizain. Sonnet : 2 quatrains + 2 tercets.",
          ],
          example: {
            statement: "Quatrain écrit pour l'exercice : « Le vent du large emporte ma chanson / Vers l'horizon où le soleil se lève ; / Je suis la route et poursuis mon beau rêve, / Et l'eau qui brille abrite un grand poisson. » Nommez le vers employé, puis la disposition, la richesse et le genre des rimes.",
            solution: [
              "Comptons le premier vers : Le / vent / du / lar / g(e) em / por / te / ma / chan / son. Le e de « large » s'élide devant « emporte » ; celui de « emporte » compte devant « ma ». Total : 10 syllabes.",
              "Deuxième vers : Vers / l'ho / ri / zon / où / le / so / leil / se / lè(ve) : 10 syllabes, le e final ne compte pas. Les autres vers comptent aussi 10 syllabes : ce sont des décasyllabes.",
              "Disposition : chanson (A), lève (B), rêve (B), poisson (A). Les rimes sont embrassées (ABBA).",
              "Richesse : « chanson » / « poisson » ont deux sons communs, [s] et [ɔ̃] : rime suffisante. « lève » / « rêve » ont deux sons communs, [ɛ] et [v] : rime suffisante.",
              "Genre : « lève » / « rêve » se terminent par un e muet, rime féminine ; « chanson » / « poisson », rime masculine.",
              "Réponse : un quatrain de décasyllabes, en rimes embrassées, suffisantes, alternant rimes masculines et féminines.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Comptez les syllabes de ces vers écrits pour l'exercice et nommez chaque vers. a) « Le navire quitte le port » b) « Un grand navire glisse sur la mer » c) « Je partirai demain vers les îles lointaines ».",
              hint: "Découpez chaque vers syllabe par syllabe avec des barres obliques. Regardez chaque e muet : est-il suivi d'une consonne, d'une voyelle, ou est-il en fin de vers ?",
              solution: [
                "a) Le / na / vi / re / quit / te / le / port : le e de « navire » et celui de « quitte » comptent, car ils sont suivis d'une consonne. 8 syllabes : octosyllabe.",
                "b) Un / grand / na / vi / re / glis / se / sur / la / mer : 10 syllabes : décasyllabe.",
                "c) Je / par / ti / rai / de / main / vers / les / î / les / loin / tai(nes) : le e de « îles » compte, celui de « lointaines » non (fin de vers). 12 syllabes : alexandrin.",
              ],
            },
            {
              level: 2,
              statement: "Quatrain écrit pour l'exercice : « Sur le quai, la foule s'agite, / Le train siffle dans le matin ; / Mon cœur se met à battre vite, / Je pars pour un monde lointain. » a) Vérifiez que ce sont des octosyllabes. b) Donnez la disposition des rimes. c) Donnez la richesse et le genre de chaque rime.",
              hint: "Pour la richesse, prononcez les fins de vers à voix haute et comptez les sons communs à partir de la dernière voyelle prononcée, en remontant si les sons d'avant sont identiques.",
              solution: [
                "a) Sur / le / quai / la / fou / le / s'a / gi(te) : 8. Le / train / sif / fle / dans / le / ma / tin : 8. Mon / cœur / se / met / à / bat / tre / vi(te) : 8. Je / pars / pour / un / mon / de / loin / tain : 8. Ce sont bien des octosyllabes.",
                "b) agite (A), matin (B), vite (A), lointain (B) : rimes croisées (ABAB).",
                "c) « agite » / « vite » : sons communs [i] et [t], rime suffisante ; mots terminés par un e muet, rime féminine.",
                "« matin » / « lointain » : sons communs [t] et [ɛ̃], rime suffisante ; rime masculine.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici le début d'un quatrain écrit pour l'exercice : « Une ombre passe sur la grève, / Elle avance avec la marée, ». a) Comptez les syllabes de ces deux vers, en expliquant le traitement de chaque e muet. b) Écrivez deux vers de même longueur pour compléter le quatrain en rimes croisées : le troisième vers doit faire une rime riche avec « grève », le quatrième une rime avec « marée ». c) Donnez la richesse de vos deux rimes.",
              hint: "Pour une rime riche avec « grève » (sons [g], [ʁ], [ɛ], [v]), cherchez un mot qui reprenne au moins les trois derniers sons [ʁɛv]. Vérifiez le compte de vos vers syllabe par syllabe.",
              solution: [
                "a) Premier vers : U / n'om / bre / pas / se / sur / la / grè(ve). Le e de « Une » s'élide devant « ombre » ; ceux de « ombre » et « passe » comptent devant une consonne ; celui de « grève » ne compte pas (fin de vers). Total : 8 syllabes.",
                "Deuxième vers : El / l'a / van / c'a / vec / la / ma / rée. Les e de « Elle » et « avance » s'élident devant une voyelle ; le e final de « marée » ne compte pas. Total : 8 syllabes. Ce sont des octosyllabes.",
                "b) Exemple : « Et je la suis comme en un rêve, / Jusqu'à la nuit toute dorée. » Vérification : Et / je / la / suis / com / m'en / un / rê(ve) : 8 ; Jus / qu'à / la / nuit / tou / te / do / rée : 8.",
                "c) « grève » / « rêve » : sons communs [ʁ], [ɛ], [v], rime riche. « marée » / « dorée » : sons communs [ʁ] et [e], rime suffisante. Le quatrain obtenu est en rimes croisées (ABAB) : grève (A), marée (B), rêve (A), dorée (B).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : vers, rimes et strophes.",
            statements: [
              { text: "Un alexandrin compte douze syllabes.", true: true, why: "Douze syllabes, souvent réparties en deux hémistiches de six." },
              { text: "Le e muet en fin de vers compte toujours pour une syllabe.", true: false, why: "En fin de vers, le e muet ne compte jamais." },
              { text: "Des rimes ABBA sont des rimes croisées.", true: false, why: "ABBA, ce sont des rimes embrassées ; les rimes croisées sont ABAB." },
              { text: "Un sonnet compte quatorze vers.", true: true, why: "Deux quatrains et deux tercets : 4 + 4 + 3 + 3 = 14." },
              { text: "Un poème en vers libres doit toujours rimer.", true: false, why: "Le vers libre n'a ni nombre fixe de syllabes ni rime obligatoire." },
              { text: "« Mer » et « amer » forment une rime riche.", true: true, why: "Trois sons communs : [m], [ɛ], [ʁ]." },
              { text: "Une strophe de trois vers s'appelle un quatrain.", true: false, why: "Trois vers forment un tercet ; un quatrain en compte quatre." },
            ],
          },
          quiz: [
            { q: "Combien de syllabes compte « Une île au loin » ?", options: ["5", "4", "3", "6"], answer: 1, why: "U / n'î / l(e) au / loin : les deux e s'élident devant une voyelle, ce qui donne quatre syllabes." },
            { q: "Comment appelle-t-on un vers de dix syllabes ?", options: ["Un octosyllabe", "Un alexandrin", "Un décasyllabe", "Un hémistiche"], answer: 2, why: "Déca- signifie dix ; l'octosyllabe en a huit, l'alexandrin douze." },
            { q: "Des rimes disposées AABB sont des rimes...", options: ["plates", "embrassées", "croisées"], answer: 0, why: "Les rimes plates (ou suivies) se succèdent deux par deux." },
            { q: "« Voyage » et « rivage » forment une rime...", options: ["pauvre", "riche", "masculine et pauvre", "suffisante"], answer: 3, why: "Deux sons communs, [a] et [ʒ] : la rime est suffisante (et féminine, à cause du e muet)." },
            { q: "De quoi se compose un sonnet ?", options: ["Quatre quatrains", "Deux quatrains et deux tercets", "Deux tercets et deux distiques suivis d'un sizain"], answer: 1, why: "Le sonnet est une forme fixe de 14 vers : deux quatrains puis deux tercets." },
          ],
          trap: "Compter les syllabes comme on parle tous les jours, en avalant les e muets : en poésie, le e muet devant une consonne se prononce et compte (« une barque légère » fait six syllabes : u / ne / bar / que / lé / gè(re)).",
          method: "Pour compter un vers, recopiez-le en séparant les syllabes par des barres obliques, entourez chaque e muet et notez à côté s'il compte (devant une consonne) ou non (devant une voyelle, en fin de vers). Puis comptez sur vos doigts en le disant lentement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'images-poetiques',
          title: 'Les images poétiques : comparaison et métaphore',
          minutes: 30,
          objectives: [
            "Identifier une comparaison et une métaphore, et nommer le comparé et le comparant.",
            "Repérer les outils de comparaison et le point commun entre les éléments rapprochés.",
            "Interpréter l'effet d'une image poétique.",
            "Créer des comparaisons et des métaphores originales.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une image poétique ?",
              paragraphs: [
                "Une image poétique rapproche deux réalités différentes qui ont un point commun. En disant que la lune est « une pièce d'or », le poète nous fait voir la lune autrement : ronde, brillante, précieuse. L'image ne décrit pas seulement, elle fait imaginer et ressentir.",
                "Les deux grandes images sont la comparaison et la métaphore. Pour les analyser, on utilise trois mots : le comparé (ce dont on parle vraiment), le comparant (ce à quoi on le rapproche) et le point commun (ce qu'ils partagent).",
              ],
            },
            {
              heading: "La comparaison",
              paragraphs: [
                "La comparaison rapproche le comparé et le comparant grâce à un outil de comparaison. Les plus fréquents sont : comme, tel, tel que, pareil à, semblable à, ainsi que, ressembler à, sembler, on dirait. Exemple écrit pour la leçon : « La lune est ronde comme une pièce d'or. » Comparé : la lune ; comparant : une pièce d'or ; outil : comme ; point commun : rond (et, sans que ce soit dit, brillant).",
                "Le point commun n'est pas toujours exprimé. Dans « Le train file comme une flèche », c'est au lecteur de comprendre qu'il s'agit de la vitesse. Baudelaire, dans « L'Albatros » (Les Fleurs du mal), compare le poète à cet oiseau des mers, magnifique dans le ciel mais maladroit et moqué quand il est capturé sur le pont d'un navire : il emploie l'outil « semblable à ».",
              ],
              box: { label: "Définition", text: "La comparaison rapproche un comparé et un comparant à l'aide d'un outil de comparaison (comme, tel, pareil à, semblable à, ressembler à...). Exemple : « Ses yeux brillent comme des étoiles. »" },
            },
            {
              heading: "La métaphore",
              paragraphs: [
                "La métaphore rapproche aussi un comparé et un comparant, mais sans outil de comparaison : elle les identifie directement, comme s'ils étaient une seule chose. « La lune est une pièce d'or. » « Ses yeux sont des étoiles. » La métaphore est plus forte et plus surprenante que la comparaison, car elle supprime la distance entre les deux réalités.",
                "Parfois, le comparé n'est même pas nommé : « La pièce d'or du ciel brillait sur la ville » ; le lecteur devine qu'il s'agit de la lune. Une image célèbre d'Apollinaire termine le poème « Zone » (Alcools, 1913) par trois mots seulement : « Soleil cou coupé ». Le soleil couchant, rouge, devient l'image d'un cou tranché : l'effet est saisissant.",
                "Quand une métaphore se prolonge sur plusieurs phrases ou plusieurs vers, avec des mots du même domaine, on parle de métaphore filée. Exemple écrit pour la leçon : « La ville est un océan : les voitures sont des vagues, les passants des poissons pressés, et les tours des phares dans la nuit. »",
              ],
              box: { label: "Définition", text: "La métaphore rapproche un comparé et un comparant sans outil de comparaison : « Ses yeux sont des étoiles. » La métaphore filée prolonge une même image sur plusieurs phrases ou vers." },
            },
            {
              heading: "Interpréter une image",
              paragraphs: [
                "Repérer une image ne suffit pas : il faut dire ce qu'elle apporte. Posez-vous trois questions. Quel est le point commun entre le comparé et le comparant ? Que fait-elle voir ou ressentir (une couleur, une forme, un mouvement, une émotion) ? Est-elle positive ou inquiétante ? Comparer la mer à un « miroir » évoque le calme ; la comparer à un « monstre affamé » évoque le danger.",
                "Une autre image est très fréquente : la personnification, qui donne à un objet, un animal ou une idée des caractéristiques humaines. « Le vent chante dans les voiles », « la ville s'endort ». Elle rend le monde vivant et proche, comme s'il ressentait des émotions.",
              ],
              box: { label: "À retenir", text: "Avec outil de comparaison : comparaison. Sans outil : métaphore. Une chose qui agit ou ressent comme un humain : personnification." },
            },
          ],
          keyPoints: [
            "Une image poétique rapproche deux réalités (le comparé et le comparant) qui ont un point commun.",
            "La comparaison utilise un outil : comme, tel, pareil à, semblable à, ressembler à, on dirait.",
            "La métaphore rapproche sans outil : « La lune est une pièce d'or. »",
            "La métaphore filée prolonge une même image sur plusieurs phrases ou vers.",
            "La personnification prête des traits humains à une chose ou un animal.",
            "Interpréter une image : trouver le point commun et dire l'effet produit.",
          ],
          example: {
            statement: "Vers écrits pour l'exercice : « La mer, pareille à une bête endormie, / Respire doucement sous la lune ; / Le phare, œil jaune de la nuit, / Veille sur les bateaux. » Relevez les images, nommez-les et interprétez-en une.",
            solution: [
              "« La mer, pareille à une bête endormie » : comparaison. Comparé : la mer ; comparant : une bête endormie ; outil : pareille à ; point commun : le calme, le mouvement lent.",
              "« Respire doucement » : personnification (et prolongement de l'image de la bête) : la mer respire comme un être vivant ; le mouvement des vagues devient une respiration.",
              "« Le phare, œil jaune de la nuit » : métaphore, sans outil. Comparé : le phare ; comparant : un œil ; point commun : la lumière ronde qui regarde au loin.",
              "« Veille sur les bateaux » : personnification : le phare agit comme un gardien.",
              "Interprétation : la métaphore de l'œil fait du phare un être attentif et protecteur ; l'ensemble des images donne une atmosphère paisible et rassurante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase écrite pour l'exercice, dites s'il s'agit d'une comparaison ou d'une métaphore, et nommez le comparé et le comparant (et l'outil s'il y en a un). a) « Les nuages ressemblent à des moutons. » b) « La route est un ruban gris. » c) « Il court tel un lièvre. » d) « Ce champ de blé est un océan d'or. »",
              hint: "Cherchez d'abord un outil de comparaison (comme, tel, ressembler à...). S'il y en a un, c'est une comparaison ; sinon, une métaphore.",
              solution: [
                "a) Comparaison. Comparé : les nuages ; comparant : des moutons ; outil : ressemblent à.",
                "b) Métaphore. Comparé : la route ; comparant : un ruban gris ; pas d'outil.",
                "c) Comparaison. Comparé : il ; comparant : un lièvre ; outil : tel.",
                "d) Métaphore. Comparé : ce champ de blé ; comparant : un océan d'or ; pas d'outil.",
              ],
            },
            {
              level: 2,
              statement: "a) Transformez ces comparaisons en métaphores : « Le soleil est comme une orange » ; « Ses cheveux sont pareils à des flammes ». b) Transformez ces métaphores en comparaisons : « Le désert est une mer de sable » ; « La neige est un manteau blanc ». c) Pour chacune des quatre images, donnez le point commun.",
              hint: "Pour obtenir une métaphore, supprimez l'outil de comparaison. Pour obtenir une comparaison, ajoutez-en un (comme, pareil à...).",
              solution: [
                "a) « Le soleil est une orange. » « Ses cheveux sont des flammes. »",
                "b) « Le désert est comme une mer de sable. » « La neige est pareille à un manteau blanc. »",
                "c) Soleil et orange : la forme ronde et la couleur. Cheveux et flammes : la couleur rousse et le mouvement. Désert et mer : l'immensité et les dunes qui ressemblent à des vagues. Neige et manteau : elle recouvre tout le paysage, comme un vêtement.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Poème écrit pour l'exercice : « La gare est une ruche immense / Les voyageurs bourdonnent sur les quais / Les trains, abeilles de fer, / Partent chercher le miel des pays lointains. » a) Montrez qu'il s'agit d'une métaphore filée : relevez les mots qui appartiennent au même domaine. b) Interprétez l'image : qu'apporte-t-elle à la description de la gare ? c) Écrivez à votre tour une métaphore filée de trois ou quatre lignes sur un aéroport, un port ou une route.",
              hint: "Repérez le comparant de départ (« une ruche »), puis tous les mots liés aux abeilles. Pour c), choisissez un comparant (une fourmilière, une forêt, un fleuve...) et trouvez quatre mots de ce domaine.",
              solution: [
                "a) La métaphore de départ assimile la gare à une ruche. Elle est prolongée par d'autres mots du domaine des abeilles : « bourdonnent », « abeilles », « miel ». L'image se poursuit sur les quatre vers : c'est une métaphore filée.",
                "b) L'image fait entendre le bruit continu de la gare (le bourdonnement) et voir l'agitation de la foule, nombreuse et affairée comme des abeilles. Les trains deviennent des « abeilles de fer » qui partent chercher « le miel » : les pays lointains sont présentés comme une richesse douce et précieuse. Le voyage devient désirable.",
                "c) Exemple : « L'aéroport est une forêt de verre : les avions, grands oiseaux d'argent, s'envolent de ses branches, et les voyageurs, comme des feuilles, s'éparpillent au vent du départ. » Le domaine de la forêt est filé par « oiseaux », « branches », « feuilles », « vent » (la phrase contient aussi une comparaison, avec « comme »).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Comparé", right: "Ce dont on parle vraiment" },
              { left: "Comparant", right: "Ce à quoi on le rapproche" },
              { left: "Outil de comparaison", right: "Comme, tel, pareil à, semblable à" },
              { left: "Métaphore", right: "Rapprochement sans outil de comparaison" },
              { left: "Métaphore filée", right: "Image prolongée sur plusieurs vers" },
              { left: "Personnification", right: "Traits humains prêtés à une chose" },
            ],
          },
          quiz: [
            { q: "« Ses yeux sont deux lacs tranquilles. » Quelle est cette image ?", options: ["Une comparaison", "Une métaphore", "Une rime"], answer: 1, why: "Il n'y a pas d'outil de comparaison : c'est une métaphore." },
            { q: "Dans « Le nuage flotte comme un voile », quel est le comparant ?", options: ["un voile", "le nuage", "comme", "flotte"], answer: 0, why: "Le comparant est ce à quoi l'on rapproche le comparé (le nuage) : un voile." },
            { q: "Lequel de ces mots n'est pas un outil de comparaison ?", options: ["pareil à", "tel", "semblable à", "parce que"], answer: 3, why: "« Parce que » exprime la cause ; les autres servent à comparer." },
            { q: "« La forêt chuchote des secrets. » Quelle image reconnaissez-vous ?", options: ["Une comparaison avec outil", "Une personnification", "Une rime embrassée"], answer: 1, why: "La forêt chuchote comme un être humain : c'est une personnification." },
            { q: "Qu'est-ce qu'une métaphore filée ?", options: ["Une métaphore qui contient le mot « fil »", "Une comparaison très courte, en un seul mot", "Une même image prolongée", "Une rime répétée trois fois de suite"], answer: 2, why: "La métaphore filée développe une même image avec plusieurs mots du même domaine." },
          ],
          trap: "Prendre toute phrase contenant « comme » pour une comparaison poétique : dans « Comme il pleuvait, il resta chez lui », « comme » exprime la cause. Il faut deux réalités différentes rapprochées par un point commun.",
          method: "Pour analyser une image, remplissez toujours la même fiche : comparé, comparant, outil (ou aucun), point commun, effet produit. La dernière case est la plus importante : c'est elle qui transforme un simple repérage en interprétation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-poeme-voyage',
          title: 'Écrire un poème du voyage',
          minutes: 35,
          objectives: [
            "Rechercher et organiser des idées pour écrire un poème sur le thème du voyage.",
            "Employer des procédés poétiques : images, énumérations, répétitions, sonorités.",
            "Choisir une forme : vers libres ou vers réguliers rimés.",
            "Réviser son poème, puis le dire à voix haute de façon expressive.",
          ],
          course: [
            {
              heading: "Choisir son voyage et chercher des idées",
              paragraphs: [
                "Commencez par choisir le voyage dont parlera votre poème : un voyage réel que vous avez fait, un voyage rêvé vers un pays imaginaire, un retour vers un lieu aimé, ou un voyage intérieur (dans un souvenir, dans un rêve). Choisissez aussi le moyen de transport et le moment : un train de nuit, une barque à l'aube, une marche dans la neige.",
                "Faites ensuite une carte mentale au brouillon. Au centre, le lieu ou le voyage ; autour, cinq branches pour les cinq sens (ce que l'on voit, entend, sent, touche, goûte) ; puis des branches pour les émotions et pour les mots du voyage (partir, filer, traverser, horizon, escale, sillage). Plus vos mots sont précis, plus le lecteur voyagera : « le parfum des oranges » vaut mieux que « une bonne odeur ».",
              ],
              box: { label: "Repère", text: "Avant d'écrire : quel voyage (réel, rêvé, retour, intérieur) ? quel transport ? quel moment ? quelles sensations pour chacun des cinq sens ? quelle émotion principale ?" },
            },
            {
              heading: "Employer des procédés poétiques",
              paragraphs: [
                "Les images transforment le paysage : une comparaison (« les rails brillent comme des fils d'argent ») ou une métaphore (« la mer, tapis bleu froissé »). L'énumération accumule les noms de lieux ou les objets, comme le fait Cendrars : elle donne une impression de vitesse et d'abondance.",
                "La répétition crée le rythme. L'anaphore reprend le même mot ou le même groupe de mots en début de vers : « Je veux voir... / Je veux entendre... / Je veux toucher... ». Les sonorités font entendre le voyage : l'allitération répète un son consonne (« le train traverse la terre » répète le son [t] et le son [ʁ]), l'assonance répète un son voyelle.",
              ],
              box: { label: "À retenir", text: "Anaphore : répétition d'un mot en début de vers. Allitération : répétition d'un son consonne. Assonance : répétition d'un son voyelle. Énumération : liste de mots de même nature." },
            },
            {
              heading: "Choisir une forme",
              paragraphs: [
                "Deux grandes possibilités s'offrent à vous. Les vers libres vous laissent une grande liberté : pas de nombre fixe de syllabes, pas de rime obligatoire. Le rythme vient alors des retours à la ligne, des répétitions, de l'alternance de vers longs et courts. Un vers très court, isolé, attire l'attention.",
                "Les vers réguliers demandent de compter les syllabes (par exemple des octosyllabes) et de choisir une disposition de rimes (plates, croisées ou embrassées). C'est plus contraignant, mais la contrainte aide souvent à trouver des mots inattendus. Dans les deux cas, donnez un titre à votre poème : il oriente la lecture.",
              ],
            },
            {
              heading: "Réviser et dire son poème",
              paragraphs: [
                "Relisez votre poème à voix haute : l'oreille repère ce qui sonne mal. Chassez les clichés, ces expressions trop entendues (« le ciel bleu », « le beau soleil ») : remplacez-les par une image personnelle. Supprimez les mots inutiles : en poésie, chaque mot compte. Vérifiez l'orthographe et, en vers réguliers, le compte des syllabes et les rimes.",
                "Pour dire le poème devant la classe, marquez une légère pause à la fin de chaque vers, prononcez les e muets qui comptent, articulez, et variez le ton selon l'émotion : plus vite pour le départ, plus lentement pour la nostalgie. Regardez votre public de temps en temps.",
              ],
            },
          ],
          keyPoints: [
            "Choisir son voyage : réel, rêvé, retour ou intérieur, avec un transport et un moment précis.",
            "Chercher des idées avec une carte mentale des cinq sens et des émotions.",
            "Employer des procédés : comparaison, métaphore, énumération, anaphore, allitération, assonance.",
            "Choisir une forme : vers libres (rythme par le retour à la ligne) ou vers réguliers rimés.",
            "Réviser : lire à voix haute, chasser les clichés, supprimer les mots inutiles.",
          ],
          example: {
            statement: "Écrivez trois vers libres en anaphore sur un voyage en train de nuit, contenant au moins une image et une sensation.",
            solution: [
              "Choix du voyage : réel, en train, la nuit ; émotion : le mélange de fatigue et d'émerveillement.",
              "Carte mentale rapide : vue (lumières des villages, reflet dans la vitre) ; ouïe (le roulement, le sifflet) ; toucher (la vitre froide) ; émotion (le rêve).",
              "Choix de l'anaphore : « Dans la nuit » au début de chaque vers.",
              "Proposition : « Dans la nuit, les villages sont des lucioles posées sur les collines / Dans la nuit, le train ronronne comme un chat géant / Dans la nuit, mon front contre la vitre froide, je rêve de la mer ».",
              "Vérification : anaphore (« Dans la nuit ») ; une métaphore (les villages, des lucioles) ; une comparaison (« comme un chat géant ») ; des sensations (la vue, l'ouïe avec « ronronne », le toucher avec « la vitre froide »).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Vous écrivez un poème sur une traversée en bateau. Pour chacun des cinq sens, trouvez un détail précis. Transformez ensuite deux de ces détails en images (une comparaison et une métaphore).",
              hint: "Imaginez-vous sur le pont du bateau : que voyez-vous, qu'entendez-vous, que sentez-vous, que touchez-vous, quel goût avez-vous sur les lèvres ?",
              solution: [
                "Vue : l'écume blanche derrière le bateau. Ouïe : les cris des mouettes. Odorat : l'odeur du sel et du gasoil. Toucher : le vent humide sur le visage. Goût : le sel sur les lèvres.",
                "Comparaison : « Derrière nous, l'écume s'étire comme une longue écharpe de dentelle. »",
                "Métaphore : « Les mouettes, ces violons fous du ciel, crient au-dessus du pont. »",
              ],
            },
            {
              level: 2,
              statement: "Écrivez un poème de cinq vers libres commençant chacun par « Je veux » (anaphore), sur un voyage rêvé. Votre poème doit contenir une énumération de lieux, une comparaison et une métaphore.",
              hint: "Choisissez des lieux réels ou imaginaires et des verbes de perception variés (voir, entendre, toucher, sentir). Placez l'énumération dans un vers, et les images dans deux autres.",
              solution: [
                "Préparation : voyage rêvé ; lieux : des ports, des montagnes, des déserts ; images : une comparaison avec « comme », une métaphore sans outil.",
                "Proposition : « Je veux voir Tanger, Valparaiso, Zanzibar / Je veux entendre les dunes chanter comme des orgues / Je veux toucher la neige, ce sucre des montagnes / Je veux dormir dans un hamac entre deux étoiles / Je veux revenir avec le monde dans les poches ».",
                "Vérification : l'anaphore « Je veux » ouvre les cinq vers ; énumération de lieux (Tanger, Valparaiso, Zanzibar) ; une comparaison (« comme des orgues ») ; une métaphore (« la neige, ce sucre des montagnes ») ; le dernier vers ramène le voyage vers soi.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un élève a écrit ce poème (texte écrit pour l'exercice) : « Je pars en vacances. / La mer est bleue. / Le ciel est bleu. / C'est très beau. / Je suis content. » Réécrivez-le pour en faire un vrai poème du voyage (cinq à huit vers), puis expliquez en trois ou quatre phrases les améliorations apportées.",
              hint: "Repérez les clichés (« la mer est bleue »), les répétitions maladroites (« bleu ») et les phrases qui disent l'émotion au lieu de la faire ressentir (« C'est très beau », « Je suis content »). Remplacez-les par des sensations et des images.",
              solution: [
                "Diagnostic : le poème accumule des clichés (« La mer est bleue », « Le ciel est bleu »), répète le même adjectif, et nomme l'émotion (« Je suis content ») au lieu de la montrer. Il n'y a ni image, ni sensation autre que la vue, ni rythme travaillé.",
                "Proposition de réécriture : « Le train s'arrête, les portes s'ouvrent / Et tout à coup la mer / Immense tapis froissé où dansent mille éclats de verre / Le ciel s'y regarde comme dans un miroir / Le vent me jette du sel au visage / Je cours / Je cours vers l'eau qui m'attend ».",
                "Améliorations : les clichés sont remplacés par des images (une métaphore, « tapis froissé », et une comparaison, « comme dans un miroir ») ; d'autres sens apparaissent (le toucher et le goût avec le sel au visage) ; la joie n'est plus nommée mais montrée par l'action (« Je cours ») et par la répétition ; les vers de longueurs variées, avec deux vers très courts (« Et tout à coup la mer », « Je cours »), créent un rythme d'élan et de surprise.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'écriture d'un poème du voyage.",
            items: [
              "Choisir le voyage : réel, rêvé, retour ou intérieur.",
              "Faire une carte mentale des cinq sens et des émotions.",
              "Choisir la forme : vers libres ou vers réguliers rimés.",
              "Rédiger le poème en y plaçant des images et des répétitions.",
              "Relire à voix haute et chasser les clichés.",
              "Dire le poème devant la classe.",
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on la reprise d'un même mot au début de plusieurs vers ?", options: ["Une allitération", "Une anaphore", "Une métaphore", "Une rime"], answer: 1, why: "L'anaphore répète un mot ou un groupe de mots en début de vers ou de phrase." },
            { q: "Laquelle de ces expressions est un cliché ?", options: ["le ciel bleu", "un ciel de craie mouillée", "le ciel couleur d'abricot"], answer: 0, why: "« Le ciel bleu » est une expression trop entendue, qui ne fait rien imaginer de neuf." },
            { q: "« Le train traverse la terre » répète le son [t] : c'est...", options: ["une assonance", "une anaphore", "une allitération", "une rime embrassée"], answer: 2, why: "L'allitération répète un son consonne ; l'assonance, un son voyelle." },
            { q: "Qu'est-ce qui caractérise le vers libre ?", options: ["Il doit compter douze syllabes", "Il rime toujours avec le vers suivant", "Il n'a pas de nombre fixe de syllabes", "Il s'écrit sans aucune ponctuation ni majuscule"], answer: 2, why: "Le vers libre n'a ni nombre fixe de syllabes ni rime obligatoire." },
            { q: "Pour faire ressentir la joie du voyageur, il vaut mieux...", options: ["écrire « Je suis très content »", "la montrer par des actions et des images", "répéter « content » plusieurs fois de suite"], answer: 1, why: "Une émotion montrée par des gestes, des sensations et des images touche davantage le lecteur qu'une émotion simplement nommée." },
          ],
          trap: "Nommer les émotions au lieu de les faire ressentir (« C'est beau », « Je suis triste ») et accumuler les clichés (« le ciel bleu », « la mer immense ») : le poème reste plat. Ce sont les détails précis et les images personnelles qui font voyager.",
          method: "Écrivez d'abord sans vous censurer, puis relisez en posant trois questions à chaque vers : ce mot est-il précis ? ce vers fait-il voir, entendre ou sentir quelque chose ? puis-je enlever un mot sans rien perdre ? Gardez ce qui résiste à ces trois questions.",
        },
      ],
    },
  ],
}
