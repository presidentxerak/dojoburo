import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-3e',
  chapters: [
    {
      id: 'se-raconter',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'genre-autobiographique',
          title: "L'autobiographie : un genre, un pacte avec le lecteur",
          minutes: 30,
          objectives: [
            "Définir l'autobiographie et le pacte autobiographique.",
            "Distinguer l'autobiographie des genres voisins : mémoires, journal intime, roman autobiographique, autofiction.",
            "Identifier les raisons qui poussent un auteur à écrire sur sa propre vie.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une autobiographie ?",
              paragraphs: [
                "Le mot « autobiographie » est formé de trois racines grecques : autos (soi-même), bios (la vie) et graphein (écrire). Une autobiographie est donc le récit qu'une personne écrit sur sa propre vie. Le mot apparaît en français au début du XIXe siècle, mais la pratique est plus ancienne : Les Confessions de Jean-Jacques Rousseau, rédigées entre 1765 et 1770 et publiées après sa mort, sont considérées comme le texte fondateur du genre en France.",
                "Le critique Philippe Lejeune, dans Le Pacte autobiographique (1975), a donné la définition qui sert de référence. Il insiste sur trois éléments : le texte est un récit rétrospectif (on regarde en arrière, vers le passé), il est écrit en prose, et il raconte l'histoire d'une personnalité, c'est-à-dire comment l'auteur est devenu celui qu'il est.",
                "La marque essentielle du genre est l'identité entre trois instances : l'auteur (la personne réelle dont le nom figure sur la couverture), le narrateur (celui qui dit « je » dans le texte) et le personnage principal (celui dont on suit l'histoire). Dans une autobiographie, ces trois instances sont une seule et même personne, à des âges différents.",
              ],
              box: { label: "Définition", text: "Selon Philippe Lejeune, l'autobiographie est un « récit rétrospectif en prose qu'une personne réelle fait de sa propre existence, lorsqu'elle met l'accent sur sa vie individuelle, en particulier sur l'histoire de sa personnalité ». Auteur = narrateur = personnage principal." },
            },
            {
              heading: "Le pacte autobiographique",
              paragraphs: [
                "Le pacte autobiographique est l'engagement que l'auteur prend envers son lecteur : il affirme qu'il va raconter sa vie et qu'il s'efforcera de dire la vérité. Ce pacte se lit souvent dans le titre, dans une préface ou dans les premières pages. C'est lui qui fait que le lecteur lit le livre comme un récit vrai, et non comme un roman.",
                "Montaigne ouvre ses Essais (1580) par un avis « Au lecteur » qui commence ainsi : « C'est ici un livre de bonne foi, lecteur. » Il y déclare aussi : « je suis moi-même la matière de mon livre ». Rousseau, au début des Confessions, annonce : « Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme, ce sera moi. » Dans les deux cas, l'auteur promet la sincérité.",
                "Attention : le pacte engage la sincérité, pas l'exactitude parfaite. La mémoire oublie, déforme, embellit ; l'auteur choisit ce qu'il raconte et ce qu'il tait. Beaucoup d'autobiographes le reconnaissent eux-mêmes. Le lecteur sait donc qu'il lit une vérité reconstruite, celle d'un regard d'adulte posé sur son passé.",
              ],
            },
            {
              heading: "Pourquoi se raconter ?",
              paragraphs: [
                "Les raisons d'écrire sur soi sont variées et souvent mêlées. On peut chercher à se connaître et à comprendre comment on est devenu soi-même. On peut vouloir se justifier face à des accusations : c'est l'une des intentions de Rousseau. On peut aussi rendre hommage à des proches, comme Marcel Pagnol qui célèbre son père et sa mère dans La Gloire de mon père et Le Château de ma mère (1957).",
                "D'autres auteurs écrivent pour témoigner d'une époque ou d'une épreuve, pour transmettre une mémoire à leurs enfants, ou pour revivre par l'écriture des moments heureux disparus. Jean-Paul Sartre, dans Les Mots (1964), analyse avec ironie son enfance et la manière dont il a découvert la lecture puis l'écriture.",
              ],
              box: { label: "À retenir", text: "Les grandes visées de l'autobiographie : se connaître, se justifier, témoigner, transmettre, rendre hommage, revivre le passé. Un même livre en combine souvent plusieurs." },
            },
            {
              heading: "Les genres voisins",
              paragraphs: [
                "Les mémoires racontent la vie de l'auteur, mais en insistant sur les événements historiques dont il a été témoin ou acteur : par exemple les Mémoires d'outre-tombe de Chateaubriand, publiés après sa mort, en 1848. Le journal intime est écrit au jour le jour, les entrées sont datées et l'auteur ne connaît pas la suite de sa vie : le Journal d'Anne Frank, tenu de 1942 à 1944, en est un exemple célèbre.",
                "Le roman autobiographique s'inspire de la vie de l'auteur mais change les noms : dans L'Enfant (1879), Jules Vallès raconte sa jeunesse sous le nom de Jacques Vingtras. Le nom de l'auteur et celui du héros étant différents, le pacte autobiographique n'est pas signé. Enfin, l'autofiction, mot créé par Serge Doubrovsky en 1977, mêle volontairement faits réels et invention, tout en gardant le nom de l'auteur.",
              ],
              box: { label: "Repère", text: "Autobiographie : vie entière ou grande partie, regard rétrospectif. Mémoires : vie et grands événements historiques. Journal intime : au jour le jour, daté. Roman autobiographique : vie réelle, noms changés. Autofiction : réel et fiction mêlés." },
            },
          ],
          keyPoints: [
            "Autobiographie : récit rétrospectif en prose qu'une personne réelle fait de sa propre vie (Philippe Lejeune, 1975).",
            "Identité entre l'auteur, le narrateur et le personnage principal, qui disent tous « je ».",
            "Le pacte autobiographique : l'auteur s'engage auprès du lecteur à dire la vérité sur sa vie.",
            "Le pacte engage la sincérité, pas l'exactitude : la mémoire sélectionne et reconstruit.",
            "Visées : se connaître, se justifier, témoigner, transmettre, rendre hommage.",
            "Genres voisins : mémoires, journal intime, roman autobiographique, autofiction.",
          ],
          example: {
            statement: "Au début des Confessions, Rousseau écrit : « Je forme une entreprise qui n'eut jamais d'exemple et dont l'exécution n'aura point d'imitateur. Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme, ce sera moi. » Montrez que ce passage établit un pacte autobiographique.",
            solution: [
              "Repérer qui parle : le pronom « je » renvoie à Rousseau lui-même, auteur du livre. Le « moi » final confirme que l'homme décrit est l'auteur : auteur, narrateur et personnage sont la même personne.",
              "Repérer le projet : « Je veux montrer [...] un homme » annonce le sujet du livre, une vie humaine, et « ce sera moi » précise qu'il s'agit de sa propre vie.",
              "Repérer l'engagement de vérité : l'expression « dans toute la vérité de la nature » est une promesse de sincérité totale faite au lecteur.",
              "Repérer le destinataire : « mes semblables » désigne les lecteurs, à qui l'auteur s'adresse directement.",
              "Conclure : ce passage établit bien un pacte autobiographique, car Rousseau annonce qu'il va raconter sa propre vie et s'engage envers ses lecteurs à dire toute la vérité. Il souligne aussi l'originalité de son projet (« une entreprise qui n'eut jamais d'exemple »).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le genre de chacun des textes suivants (autobiographie, mémoires, journal intime, roman autobiographique). a) Un homme politique raconte les grandes négociations auxquelles il a participé. b) Une adolescente écrit chaque soir ce qu'elle a vécu dans la journée, en datant chaque page. c) Un écrivain raconte son enfance et sa jeunesse sous son propre nom, des années plus tard. d) Un écrivain raconte son enfance, mais donne au héros un autre nom que le sien.",
              hint: "Posez-vous deux questions : le nom du héros est-il celui de l'auteur ? Le texte est-il écrit au jour le jour ou longtemps après ?",
              solution: [
                "a) Des mémoires : l'auteur raconte sa vie en insistant sur les événements historiques et politiques dont il a été acteur.",
                "b) Un journal intime : l'écriture est quotidienne et datée, sans regard rétrospectif sur l'ensemble de la vie.",
                "c) Une autobiographie : récit rétrospectif, sous le nom de l'auteur, avec identité entre auteur, narrateur et personnage.",
                "d) Un roman autobiographique : la vie racontée est inspirée de celle de l'auteur, mais le nom changé empêche le pacte autobiographique.",
              ],
            },
            {
              level: 2,
              statement: "Montaigne ouvre ses Essais (1580) par ces mots : « C'est ici un livre de bonne foi, lecteur. » Plus loin dans le même avis, il écrit : « je suis moi-même la matière de mon livre ». a) Quel mot de la première phrase exprime l'engagement de sincérité ? b) À qui l'auteur s'adresse-t-il, et pourquoi est-ce important pour le pacte ? c) Que signifie « je suis moi-même la matière de mon livre » ?",
              hint: "Le mot « foi » signifie ici la confiance que l'on peut accorder à quelqu'un. Cherchez ensuite l'apostrophe, c'est-à-dire le mot qui interpelle quelqu'un.",
              solution: [
                "a) L'expression « de bonne foi » exprime l'engagement de sincérité : un livre de bonne foi est un livre honnête, qui ne cherche pas à tromper.",
                "b) L'auteur s'adresse directement au lecteur par l'apostrophe « lecteur ». C'est important, car un pacte se conclut entre deux personnes : l'auteur promet, le lecteur reçoit cette promesse.",
                "c) Cette phrase signifie que le sujet du livre est l'auteur lui-même : Montaigne ne parle pas d'un personnage inventé ni d'un sujet extérieur, il parle de lui.",
                "Conclusion : en quelques mots, Montaigne annonce le sujet de son livre (lui-même) et promet la sincérité au lecteur, ce qui correspond au pacte autobiographique.",
              ],
            },
            {
              level: 3,
              statement: "Question de type brevet. « Une autobiographie dit-elle toujours la vérité ? » Répondez en un paragraphe argumenté d'une dizaine de lignes, en vous appuyant sur ce que vous savez du pacte autobiographique et sur au moins un exemple d'œuvre étudiée en cours.",
              hint: "Construisez votre paragraphe en deux temps : ce que l'auteur promet, puis ce qui limite cette promesse (mémoire, choix, pudeur). Terminez par une phrase de bilan.",
              solution: [
                "Idée 1, la promesse : l'auteur d'une autobiographie s'engage à dire la vérité. C'est le pacte autobiographique : Rousseau, au début des Confessions, veut montrer un homme « dans toute la vérité de la nature ».",
                "Idée 2, les limites : la mémoire est imparfaite. L'auteur écrit souvent des dizaines d'années après les faits, il oublie certains détails, en reconstruit d'autres et choisit ce qu'il raconte. Il peut aussi taire ce qui le gêne ou chercher à se donner une bonne image.",
                "Idée 3, la nuance : ces limites ne font pas de l'autobiographie un mensonge. L'auteur reste sincère, c'est-à-dire qu'il dit ce qu'il croit vrai, et beaucoup d'autobiographes signalent eux-mêmes leurs doutes.",
                "Paragraphe rédigé possible : « Une autobiographie repose sur une promesse de vérité, le pacte autobiographique. Rousseau affirme ainsi vouloir montrer un homme ‹ dans toute la vérité de la nature ›. Pourtant, cette vérité n'est jamais complète : l'auteur écrit longtemps après les faits, sa mémoire oublie ou embellit, et il choisit les épisodes qu'il raconte. L'autobiographie ne dit donc pas toute la vérité, mais elle dit une vérité sincère, celle d'un adulte qui cherche à comprendre son passé. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque genre à sa définition.",
            pairs: [
              { left: "Autobiographie", right: "Récit rétrospectif de sa propre vie, sous son propre nom" },
              { left: "Mémoires", right: "Récit de sa vie centré sur les événements historiques vécus" },
              { left: "Journal intime", right: "Écriture de soi au jour le jour, avec des entrées datées" },
              { left: "Roman autobiographique", right: "Vie réelle de l'auteur racontée sous un autre nom" },
              { left: "Autofiction", right: "Récit qui mêle volontairement faits réels et invention" },
            ],
          },
          quiz: [
            { q: "Que signifie, d'après son étymologie, le mot « autobiographie » ?", options: ["Écrire sa propre vie", "Inventer la vie d'un personnage", "Écrire la vie d'un roi", "Lire la vie des autres"], answer: 0, why: "Autos signifie soi-même, bios la vie et graphein écrire : c'est l'écriture de sa propre vie." },
            { q: "Dans une autobiographie, l'auteur, le narrateur et le personnage principal sont...", options: ["trois personnes différentes", "une seule et même personne", "toujours des inventions", "désignés par « il »"], answer: 1, why: "L'identité entre auteur, narrateur et personnage est la marque du genre : c'est la même personne, à des âges différents." },
            { q: "Qui a défini le « pacte autobiographique » en 1975 ?", options: ["Jean-Jacques Rousseau", "Michel de Montaigne", "Philippe Lejeune", "Marcel Pagnol"], answer: 2, why: "Philippe Lejeune a proposé cette notion dans son essai Le Pacte autobiographique, en 1975." },
            { q: "Un texte écrit au jour le jour, avec des entrées datées, est...", options: ["des mémoires", "un roman autobiographique", "une autofiction", "un journal intime"], answer: 3, why: "Le journal intime suit le fil des jours ; l'auteur ne connaît pas encore la suite de sa vie." },
            { q: "Dans L'Enfant (1879), Jules Vallès raconte sa jeunesse sous le nom de Jacques Vingtras. Il s'agit...", options: ["d'un roman autobiographique", "d'une autobiographie au sens strict", "de mémoires historiques"], answer: 0, why: "La vie racontée est celle de l'auteur, mais le nom du héros est différent : le pacte autobiographique n'est pas signé." },
          ],
          trap: "Croire que le pacte autobiographique garantit une vérité exacte : il engage la sincérité de l'auteur, mais la mémoire sélectionne, oublie et reconstruit.",
          method: "Pour reconnaître une autobiographie, vérifiez trois choses : le nom sur la couverture est-il celui du narrateur, le récit est-il rétrospectif, l'auteur promet-il la vérité ? Si une seule réponse est non, cherchez un genre voisin.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'recit-enfance',
          title: "Le récit d'enfance : souvenirs et mémoire",
          minutes: 30,
          objectives: [
            "Identifier les caractéristiques du récit d'enfance.",
            "Distinguer le regard de l'enfant et celui de l'adulte qui se souvient.",
            "Analyser le travail de la mémoire dans un récit de souvenirs : sélection, oubli, reconstruction.",
          ],
          course: [
            {
              heading: "Un genre très pratiqué",
              paragraphs: [
                "Le récit d'enfance est une forme d'autobiographie qui se concentre sur les premières années de la vie, jusqu'à l'adolescence. L'auteur y raconte sa famille, les lieux de son enfance, l'école, ses jeux, ses peurs et ses découvertes. Le livre I des Confessions de Rousseau en est un modèle ancien.",
                "Au XXe siècle, le récit d'enfance devient un genre majeur : La Gloire de mon père de Marcel Pagnol (1957), Les Mots de Jean-Paul Sartre (1964), W ou le souvenir d'enfance de Georges Perec (1975), Enfance de Nathalie Sarraute (1983). D'autres récits font découvrir des enfances très différentes : L'Enfant noir de Camara Laye (1953) se déroule en Guinée, Le Gone du Chaâba d'Azouz Begag (1986) dans un bidonville près de Lyon.",
                "Ces textes racontent souvent des scènes fondatrices : une première fois (la première rentrée, la première lecture), la découverte de l'injustice, la peur, la mort d'un proche. Ce sont des moments qui ont, selon l'auteur, contribué à faire de lui l'adulte qu'il est devenu.",
              ],
            },
            {
              heading: "Le double regard : l'enfant et l'adulte",
              paragraphs: [
                "Dans un récit d'enfance, deux « je » coexistent : le « je » de l'enfant, qui vit les événements, et le « je » de l'adulte, qui les raconte des années plus tard. L'adulte peut retrouver les émotions de l'enfant (sa joie, sa peur, son incompréhension) mais aussi les commenter avec le recul, l'humour ou la tendresse de celui qui sait ce qui s'est passé ensuite.",
                "Ce double regard se repère grâce aux temps verbaux. Le temps de l'histoire, celui du souvenir, est surtout raconté au passé simple ou au passé composé et à l'imparfait. Le temps de l'écriture, celui de l'adulte qui écrit, utilise le présent d'énonciation : « Aujourd'hui encore, je revois cette cour d'école. » Des indicateurs de temps (« à cette époque », « des années plus tard », « maintenant ») soulignent aussi l'écart.",
                "Rousseau raconte ainsi, au livre I des Confessions, qu'enfant il fut accusé à tort d'avoir cassé un peigne appartenant à Mlle Lambercier. L'enfant découvre la violence de l'injustice ; l'adulte qui écrit explique que ce sentiment l'a marqué pour toujours et dit qu'il ressent encore cette émotion en l'écrivant.",
              ],
              box: { label: "Repère", text: "Temps du souvenir : imparfait, passé simple ou passé composé, plus-que-parfait (« j'avais sept ans »). Temps de l'écriture : présent d'énonciation (« je m'en souviens encore »). Leur alternance révèle le double regard." },
            },
            {
              heading: "Le travail de la mémoire",
              paragraphs: [
                "La mémoire n'est pas un enregistrement fidèle. Elle sélectionne quelques scènes, en efface d'autres, mélange parfois les époques. Les auteurs de récits d'enfance le savent et le disent : ils emploient des modalisateurs qui expriment le doute, comme « il me semble », « peut-être », « je crois », « si je me souviens bien ».",
                "Certains font de cette fragilité le sujet même de leur livre. Georges Perec, dont les parents ont disparu pendant la Seconde Guerre mondiale, écrit dans W ou le souvenir d'enfance : « Je n'ai pas de souvenirs d'enfance ». Nathalie Sarraute, dans Enfance, dialogue avec un double d'elle-même qui interroge l'exactitude de chacun de ses souvenirs.",
                "Le souvenir peut aussi revenir par surprise, grâce à une sensation. Dans Du côté de chez Swann (1913), Marcel Proust décrit comment le goût d'une madeleine trempée dans du thé fait ressurgir d'un coup tout un pan de l'enfance du narrateur à Combray. On parle de mémoire involontaire : un goût, une odeur, un son réveillent un passé que l'on croyait perdu.",
              ],
              box: { label: "À retenir", text: "La mémoire sélectionne, oublie et reconstruit. Les modalisateurs (« il me semble », « peut-être ») signalent le doute ; une sensation peut faire ressurgir un souvenir (la madeleine de Proust)." },
            },
          ],
          keyPoints: [
            "Le récit d'enfance raconte les premières années de la vie de l'auteur, souvent à travers des scènes fondatrices.",
            "Deux « je » coexistent : l'enfant qui vit et l'adulte qui raconte avec le recul.",
            "Temps du souvenir (imparfait, passé simple ou composé) et présent d'énonciation (temps de l'écriture) s'alternent.",
            "La mémoire est sélective et fragile : les modalisateurs (« il me semble », « peut-être ») expriment le doute.",
            "Une sensation peut réveiller un souvenir : c'est la mémoire involontaire, illustrée par la madeleine de Proust.",
            "Œuvres repères : Rousseau, Pagnol, Sartre, Perec, Sarraute, Camara Laye.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « J'avais six ans. Ce matin-là, ma mère me lâcha la main devant la grille et je crus que le monde s'écroulait. Aujourd'hui, je souris de ce chagrin, mais je sens encore le froid du fer sous mes doigts. » Relevez les marques du double regard (enfant et adulte).",
            solution: [
              "Repérer le temps du souvenir : « J'avais » (imparfait), « lâcha » et « crus » (passé simple) racontent la scène vécue par l'enfant.",
              "Repérer le temps de l'écriture : « je souris » et « je sens » sont au présent d'énonciation, le moment où l'adulte écrit.",
              "Repérer les indicateurs de temps : « Ce matin-là » renvoie au passé, « Aujourd'hui » au présent de l'écriture.",
              "Analyser les deux regards : l'enfant vit un chagrin immense (« le monde s'écroulait », hyperbole) ; l'adulte le juge avec tendresse et recul (« je souris de ce chagrin »).",
              "Noter ce qui relie les deux : la sensation du « froid du fer » est restée intacte, ce qui montre la force du souvenir.",
              "Conclusion : le passage fait entendre à la fois l'émotion de l'enfant et le regard amusé de l'adulte, grâce à l'alternance des temps du passé et du présent d'énonciation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque phrase selon qu'elle relève du temps du souvenir (l'enfant) ou du temps de l'écriture (l'adulte). a) Nous habitions une petite maison au bord du canal. b) Je comprends maintenant pourquoi mon père se taisait. c) Ce jour-là, je découvris la mer. d) Il me semble encore entendre sa voix.",
              hint: "Identifiez le temps de chaque verbe principal : un présent qui renvoie au moment où l'on écrit signale l'adulte.",
              solution: [
                "a) Temps du souvenir : « habitions » est à l'imparfait et décrit le cadre de l'enfance.",
                "b) Temps de l'écriture : « comprends » est au présent d'énonciation, renforcé par « maintenant » ; c'est l'adulte qui commente.",
                "c) Temps du souvenir : « découvris » est au passé simple et raconte un événement ponctuel de l'enfance.",
                "d) Temps de l'écriture : « Il me semble » est au présent d'énonciation ; l'adulte évoque l'effet actuel du souvenir.",
              ],
            },
            {
              level: 2,
              statement: "Texte écrit pour l'exercice : « Je crois que c'était un dimanche. Peut-être ma grand-mère portait-elle sa robe bleue, à moins que je ne confonde avec une autre fête. Ce dont je suis sûr, c'est l'odeur des crêpes. » a) Relevez trois expressions qui expriment le doute. b) Quelle certitude reste au narrateur ? c) Que montre ce passage sur la mémoire ?",
              hint: "Cherchez les verbes et les adverbes qui atténuent une affirmation, puis comparez-les à la dernière phrase.",
              solution: [
                "a) Expressions du doute : « Je crois que », « Peut-être », « à moins que je ne confonde ».",
                "b) La seule certitude est une sensation : « l'odeur des crêpes ».",
                "c) Ce passage montre que la mémoire est incertaine pour les faits (le jour, la robe) mais que les sensations restent vives.",
                "Conclusion : le narrateur assume la fragilité de ses souvenirs, ce qui renforce sa sincérité ; la sensation olfactive joue le rôle d'une mémoire involontaire.",
              ],
            },
            {
              level: 3,
              statement: "Question de type brevet. Texte écrit pour l'exercice : « Le maître m'accusa d'avoir déchiré le cahier de Paul. Je n'avais rien fait. Je pleurai, je protestai, personne ne me crut. J'ai aujourd'hui cinquante ans, et je n'ai jamais oublié la brûlure de cette injustice. » a) Quel sentiment l'enfant éprouve-t-il ? Justifiez par deux procédés. b) Comment le narrateur adulte montre-t-il l'importance de ce souvenir ? c) Quel épisode célèbre d'une œuvre autobiographique ce texte rappelle-t-il ?",
              hint: "Observez le rythme de la troisième phrase, puis le changement de temps dans la dernière phrase. Pour c), pensez au livre I des Confessions.",
              solution: [
                "a) L'enfant éprouve un sentiment d'injustice et de désespoir. Procédés : la phrase courte « Je n'avais rien fait » affirme son innocence ; l'accumulation de verbes au passé simple « Je pleurai, je protestai » traduit son agitation, et la chute « personne ne me crut » souligne son impuissance.",
                "b) Le narrateur adulte passe au présent d'énonciation (« J'ai aujourd'hui cinquante ans ») et précise qu'il n'a « jamais oublié ». La métaphore de « la brûlure » montre que la blessure reste vive des années après.",
                "c) Ce texte rappelle l'épisode du peigne cassé dans Les Confessions de Rousseau : accusé à tort, l'enfant y découvre l'injustice, sentiment qui le marque durablement.",
                "Bilan : le texte superpose la souffrance de l'enfant et le regard de l'adulte, pour montrer qu'un souvenir d'enfance peut former une personnalité.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le récit d'enfance et la mémoire.",
            statements: [
              { text: "Dans un récit d'enfance, le narrateur est un adulte qui se souvient.", true: true, why: "Le récit est écrit après coup : l'adulte raconte l'enfant qu'il a été." },
              { text: "Le présent d'énonciation sert à raconter les scènes de l'enfance.", true: false, why: "Il marque le moment de l'écriture ; les scènes sont surtout racontées aux temps du passé." },
              { text: "« Il me semble » est un modalisateur qui exprime le doute.", true: true, why: "Le narrateur atténue son affirmation : il n'est pas certain de son souvenir." },
              { text: "Un récit d'enfance doit raconter toutes les années de l'enfance, sans rien oublier.", true: false, why: "La mémoire sélectionne : l'auteur choisit quelques scènes marquantes." },
              { text: "Chez Proust, un goût fait ressurgir un souvenir : c'est la mémoire involontaire.", true: true, why: "Le goût de la madeleine trempée dans le thé ramène l'enfance à Combray." },
              { text: "Georges Perec affirme avoir des souvenirs d'enfance très précis.", true: false, why: "Il écrit au contraire : « Je n'ai pas de souvenirs d'enfance », et fait de ce manque le sujet de son livre." },
            ],
          },
          quiz: [
            { q: "Dans « Aujourd'hui encore, je revois sa maison », le présent est...", options: ["un présent de vérité générale", "un présent de narration", "un présent d'énonciation", "un présent d'habitude"], answer: 2, why: "Il renvoie au moment où l'adulte écrit : c'est le présent d'énonciation." },
            { q: "Quel auteur dialogue avec un double qui met en doute ses souvenirs ?", options: ["Nathalie Sarraute", "Marcel Pagnol", "Camara Laye"], answer: 0, why: "Dans Enfance (1983), Nathalie Sarraute fait intervenir une seconde voix qui interroge chacun de ses souvenirs." },
            { q: "Quelle expression est un modalisateur du doute ?", options: ["Ce jour-là", "Peut-être", "Soudain", "Ensuite"], answer: 1, why: "« Peut-être » atténue l'affirmation ; les autres expressions organisent le temps du récit." },
            { q: "Dans le livre I des Confessions, Rousseau enfant découvre l'injustice quand...", options: ["il perd sa mère", "il quitte Genève", "on lui confisque ses livres", "on l'accuse à tort d'avoir cassé un peigne"], answer: 3, why: "Accusé d'avoir cassé le peigne de Mlle Lambercier, il ne parvient pas à prouver son innocence." },
            { q: "Pourquoi dit-on que la mémoire « reconstruit » le passé ?", options: ["Parce que l'auteur invente toujours tout", "Parce qu'elle oublie, sélectionne et réorganise les souvenirs", "Parce que le récit est écrit au futur"], answer: 1, why: "Le souvenir raconté est le fruit d'un tri et d'une réorganisation, sans pour autant être un mensonge." },
          ],
          trap: "Confondre le temps du souvenir et le temps de l'écriture : un verbe au présent dans un récit d'enfance n'est pas forcément un présent de narration, c'est souvent l'adulte qui commente au présent d'énonciation.",
          method: "Face à un récit d'enfance, surlignez de deux couleurs les verbes au passé (l'enfant) et les verbes au présent d'énonciation (l'adulte) : le double regard apparaît d'un coup d'œil, et vous pouvez l'analyser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'autoportrait',
          title: "Se représenter : autoportraits en mots et en images",
          minutes: 30,
          objectives: [
            "Analyser un autoportrait peint en utilisant le vocabulaire de l'image : cadrage, pose, regard, lumière, attributs.",
            "Identifier les procédés du portrait littéraire : portrait physique et portrait moral.",
            "Comparer la représentation de soi en mots et en images.",
          ],
          course: [
            {
              heading: "L'autoportrait : se prendre soi-même pour modèle",
              paragraphs: [
                "Un autoportrait est une représentation qu'un artiste fait de lui-même. En peinture, le genre se développe à la Renaissance, quand les miroirs deviennent plus courants et que les artistes revendiquent leur statut de créateurs. Albrecht Dürer, peintre allemand, réalise en 1500 un autoportrait célèbre où il se représente de face, le regard droit, dans une pose solennelle qui rappelle les images du Christ.",
                "Certains peintres se sont représentés toute leur vie, comme un journal en images : Rembrandt au XVIIe siècle a peint, dessiné et gravé des dizaines d'autoportraits, de la jeunesse à la vieillesse. Vincent van Gogh en a peint plus de trente entre 1886 et 1889. Au XXe siècle, Frida Kahlo fait de l'autoportrait le cœur de son œuvre, pour exprimer sa souffrance physique et son identité mexicaine.",
              ],
              box: { label: "Définition", text: "Un autoportrait est une représentation de soi par soi-même, en image (peinture, dessin, photographie) ou en mots. Il montre l'apparence, mais aussi la façon dont l'auteur se voit et veut être vu." },
            },
            {
              heading: "Lire un autoportrait en image",
              paragraphs: [
                "Pour analyser un autoportrait, observez d'abord le cadrage : le personnage est-il vu en pied (en entier), en buste, en gros plan sur le visage ? Puis la pose : de face, de trois quarts, de profil. Le regard est essentiel : un peintre qui fixe le spectateur l'interpelle ; un regard détourné suggère la rêverie ou le retrait.",
                "Observez ensuite la lumière (qui éclaire le visage, qui laisse des zones d'ombre), les couleurs (chaudes ou froides, vives ou sombres), le décor et les attributs, c'est-à-dire les objets qui disent quelque chose de la personne : un pinceau ou une palette rappellent le métier de peintre, un vêtement riche indique un rang social. Chaque détail est un choix et produit un sens.",
              ],
              box: { label: "Repère", text: "Grille d'analyse d'une image : identifier (auteur, titre, date, technique), décrire (cadrage, pose, regard, lumière, couleurs, attributs), interpréter (quelle image de lui l'artiste veut-il donner ?)." },
            },
            {
              heading: "L'autoportrait en mots",
              paragraphs: [
                "L'écrivain peut aussi faire son autoportrait. Il dresse souvent un portrait physique (taille, visage, allure, voix) et un portrait moral (caractère, qualités, défauts, goûts). Montaigne, dans les Essais, se peint « tout entier » et avoue ses faiblesses. Michel Leiris ouvre L'Âge d'homme (1939) par une description de lui-même sans complaisance, où il détaille ce qu'il n'aime pas dans son apparence.",
                "Les procédés du portrait littéraire sont nombreux : les adjectifs qualificatifs et les compléments du nom qui précisent ; les comparaisons et les métaphores (« mes cheveux sont une broussaille ») ; l'énumération ; un ordre de description (du haut vers le bas, du physique vers le moral). Le présent d'énonciation (« je suis », « j'ai ») domine, et les modalisateurs (« je crois être », « on me dit ») montrent que se voir soi-même n'est pas facile.",
              ],
            },
            {
              heading: "Entre sincérité et mise en scène",
              paragraphs: [
                "Se représenter, c'est toujours choisir ce que l'on montre. Un autoportrait peut chercher la vérité, jusqu'à se montrer laid, vieilli ou malade, mais il peut aussi flatter, déguiser ou mettre en scène. Gustave Courbet se peint en jeune homme exalté dans Le Désespéré ; la photographe Claude Cahun, dans les années 1920 et 1930, se photographie sous des apparences très diverses pour interroger l'identité.",
                "Le selfie d'aujourd'hui pose les mêmes questions : quelle image de moi est-ce que je donne ? Comparer un autoportrait en mots et un autoportrait en image permet de voir ce que chacun fait mieux : l'image montre d'un coup l'apparence et l'expression ; le texte peut décrire l'intérieur, le caractère, l'évolution dans le temps.",
              ],
              box: { label: "À retenir", text: "Tout autoportrait est un regard sur soi et une image adressée aux autres : il mêle sincérité et mise en scène. L'image montre, le texte peut aussi expliquer et nuancer." },
            },
          ],
          keyPoints: [
            "Un autoportrait est une représentation de soi par soi-même, en image ou en mots.",
            "Vocabulaire de l'image : cadrage (en pied, buste, gros plan), pose (face, trois quarts, profil), regard, lumière, couleurs, attributs.",
            "Le portrait littéraire associe portrait physique et portrait moral.",
            "Procédés : adjectifs, comparaisons et métaphores, énumérations, ordre de description, présent d'énonciation.",
            "Tout autoportrait mêle sincérité et mise en scène : il montre comment l'auteur se voit et veut être vu.",
          ],
          example: {
            statement: "L'Autoportrait de Dürer (1500) représente le peintre de face, en buste, sur un fond sombre. Il a de longs cheveux bouclés, porte un manteau bordé de fourrure, et sa main droite est posée sur sa poitrine. Une inscription latine indique qu'il s'est peint lui-même à vingt-huit ans. Analysez l'image que Dürer donne de lui-même.",
            solution: [
              "Identifier : il s'agit d'un autoportrait peint d'Albrecht Dürer, daté de 1500 ; l'inscription confirme que le modèle est le peintre.",
              "Décrire le cadrage et la pose : le buste de face, parfaitement symétrique, rend la figure solennelle et immobile.",
              "Décrire le regard et la lumière : le peintre fixe le spectateur ; la lumière éclaire le visage et la main, qui se détachent sur le fond sombre.",
              "Décrire les attributs : le manteau bordé de fourrure signale l'aisance et le rang social ; la main mise en valeur peut rappeler l'outil du peintre.",
              "Interpréter : la pose frontale rappelle les images du Christ ; Dürer affirme ainsi la dignité de l'artiste, presque comparé à un créateur.",
              "Conclusion : Dürer se représente comme un homme important et sûr de son talent, et non comme un simple artisan.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque terme à sa définition. Termes : a) en pied, b) trois quarts, c) attribut, d) gros plan. Définitions : 1) objet qui révèle l'identité ou le métier du personnage ; 2) le personnage est représenté en entier, de la tête aux pieds ; 3) le cadrage resserré sur le visage ; 4) le visage est légèrement tourné, entre la face et le profil.",
              hint: "Les termes « en pied » et « gros plan » concernent le cadrage ; « trois quarts » concerne la pose.",
              solution: [
                "a) En pied : 2, le personnage est représenté en entier.",
                "b) Trois quarts : 4, le visage est entre la face et le profil.",
                "c) Attribut : 1, objet qui révèle l'identité ou le métier.",
                "d) Gros plan : 3, cadrage resserré sur le visage.",
              ],
            },
            {
              level: 2,
              statement: "Autoportrait écrit pour l'exercice : « Je suis grand, trop grand pour les bancs de l'école. Mes mains ressemblent à deux pelles. On me croit calme ; en réalité, je bouillonne comme une casserole oubliée sur le feu. J'aime les livres, le silence et les chiens. » a) Distinguez le portrait physique et le portrait moral. b) Relevez une comparaison et expliquez-la. c) Quel temps domine et pourquoi ?",
              hint: "Le portrait physique décrit le corps ; le portrait moral décrit le caractère et les goûts. Une comparaison contient un outil comme « comme » ou « ressembler à ».",
              solution: [
                "a) Portrait physique : la taille (« grand, trop grand ») et les mains (« deux pelles »). Portrait moral : le caractère (« On me croit calme ; en réalité, je bouillonne ») et les goûts (« les livres, le silence et les chiens »).",
                "b) Comparaisons : « Mes mains ressemblent à deux pelles » souligne avec humour leur grande taille ; « je bouillonne comme une casserole oubliée sur le feu » montre une agitation intérieure cachée.",
                "c) Le présent d'énonciation domine (« Je suis », « J'aime ») : le narrateur se décrit tel qu'il est au moment où il écrit.",
                "Bilan : ce portrait oppose l'apparence (le calme) et la réalité intérieure, ce qu'une image seule montrerait difficilement.",
              ],
            },
            {
              level: 3,
              statement: "Question de type brevet. « Un autoportrait en mots peut-il dire plus de choses qu'un autoportrait peint ? » Répondez en un paragraphe argumenté d'une dizaine de lignes, en vous appuyant sur un exemple d'image et un exemple de texte étudiés dans cette leçon.",
              hint: "Montrez d'abord ce que l'image fait mieux que le texte, puis ce que le texte peut exprimer que l'image ne montre pas. Terminez par une phrase qui nuance.",
              solution: [
                "Idée 1 : l'image montre d'un seul coup l'apparence, l'expression, la posture. L'Autoportrait de Dürer (1500) impose en un regard une image solennelle de l'artiste, par la pose frontale et le manteau de fourrure.",
                "Idée 2 : le texte peut décrire ce qui ne se voit pas : le caractère, les pensées, les contradictions, l'évolution dans le temps. Montaigne, dans les Essais, analyse ses défauts et ses goûts ; Leiris détaille ce qu'il pense de son propre physique.",
                "Idée 3, la nuance : l'image n'est pas muette pour autant ; le regard, la lumière ou les attributs suggèrent aussi une personnalité. Les deux formes se complètent.",
                "Paragraphe rédigé possible : « Un autoportrait peint frappe d'abord par ce qu'il montre : la pose frontale de Dürer en 1500 suffit à imposer l'image d'un artiste sûr de lui. Pourtant, le texte peut aller plus loin, car il exprime ce qui reste invisible : Montaigne avoue ses faiblesses et ses goûts, ce qu'aucune image ne dirait aussi précisément. L'autoportrait en mots dit donc souvent davantage sur l'intérieur d'une personne, même si l'image, par ses détails, suggère elle aussi un caractère. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du vocabulaire de l'image à sa définition.",
            pairs: [
              { left: "Cadrage", right: "Ce que l'image montre du personnage : en pied, en buste, en gros plan" },
              { left: "Pose de profil", right: "Le visage est vu de côté" },
              { left: "Attribut", right: "Objet qui révèle le métier ou l'identité" },
              { left: "Arrière-plan", right: "La partie de l'image située derrière le personnage" },
              { left: "Portrait moral", right: "Description du caractère, des qualités et des défauts" },
            ],
          },
          quiz: [
            { q: "Quel peintre se représente en 1500 dans une pose frontale qui rappelle les images du Christ ?", options: ["Van Gogh", "Rembrandt", "Frida Kahlo", "Albrecht Dürer"], answer: 3, why: "L'Autoportrait de Dürer (1500), symétrique et solennel, affirme la dignité de l'artiste." },
            { q: "Dans un tableau, une palette tenue par le peintre est...", options: ["un attribut", "un cadrage", "un arrière-plan"], answer: 0, why: "C'est un objet qui révèle le métier du personnage : un attribut." },
            { q: "« On me croit timide, mais je suis curieux de tout. » Cette phrase relève...", options: ["du portrait physique", "du portrait moral", "de la description du décor", "du cadrage"], answer: 1, why: "Elle décrit le caractère, pas l'apparence : c'est un portrait moral." },
            { q: "Un personnage représenté de la tête aux pieds est peint...", options: ["en buste", "en gros plan", "en pied", "de trois quarts"], answer: 2, why: "« En pied » signifie que le personnage est représenté en entier." },
            { q: "Pourquoi dit-on qu'un autoportrait est aussi une mise en scène ?", options: ["Parce qu'il est toujours peint au théâtre", "Parce que l'artiste choisit l'image de lui qu'il donne aux autres", "Parce qu'il représente toujours un acteur"], answer: 1, why: "Pose, vêtements, lumière ou mots sont choisis : l'artiste construit l'image qu'il veut transmettre." },
          ],
          trap: "Se contenter de décrire l'autoportrait sans l'interpréter : chaque détail (pose, regard, objet, comparaison) doit être relié à l'image que l'auteur veut donner de lui.",
          method: "Pour analyser un autoportrait, utilisez toujours la formule « je vois... donc je comprends que... » : un élément observé, puis le sens que vous lui donnez. Exemple : « Le peintre fixe le spectateur, donc il l'interpelle et s'affirme. »",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-souvenir',
          title: "Écrire un souvenir personnel",
          minutes: 35,
          objectives: [
            "Rédiger le récit d'un souvenir personnel à la première personne.",
            "Organiser un récit en mêlant narration, description et expression des sentiments.",
            "Employer de façon cohérente les temps du passé et le présent d'énonciation.",
            "Relire et améliorer son texte à l'aide d'une grille de critères.",
          ],
          course: [
            {
              heading: "Comprendre le sujet",
              paragraphs: [
                "Au brevet, la rédaction propose deux sujets au choix : un sujet de réflexion et un sujet d'imagination. Le sujet d'imagination est souvent lié au texte étudié dans la première partie de l'épreuve ; quand ce texte est autobiographique, on peut vous demander de raconter un souvenir personnel, réel ou inventé, à la manière de l'auteur.",
                "Avant d'écrire, relisez la consigne et soulignez ses contraintes : la personne (« je »), le genre (récit de souvenir), le moment à raconter (un premier jour, une peur, une joie, une injustice), ce qui est attendu en plus du récit (« vous exprimerez vos sentiments », « vous direz ce que ce souvenir représente pour vous aujourd'hui ») et la longueur demandée. Chaque contrainte oubliée fait perdre des points.",
              ],
              box: { label: "Règle", text: "Un souvenir personnel se raconte à la première personne, avec un double regard : l'enfant qui vit la scène, l'adulte (ou l'adolescent) qui la raconte et la comprend avec le recul." },
            },
            {
              heading: "Préparer au brouillon",
              paragraphs: [
                "Choisissez un seul moment précis, plutôt qu'une période entière : un récit d'une page sur « le jour où je me suis perdu au marché » est plus vivant qu'un résumé de toutes vos vacances. Notez au brouillon le lieu, l'époque, votre âge, les personnes présentes, ce que vous avez vu, entendu, senti, et ce que vous avez éprouvé.",
                "Faites ensuite un plan simple en trois ou quatre temps. 1) La situation : où, quand, avec qui. 2) L'élément déclencheur et le moment fort : ce qui s'est passé. 3) Le dénouement : comment la scène s'est terminée. 4) Le bilan de l'adulte : ce que ce souvenir vous a appris ou ce qu'il représente aujourd'hui. Ce dernier paragraphe, écrit au présent d'énonciation, donne de la profondeur au texte.",
              ],
            },
            {
              heading: "Rédiger un récit vivant",
              paragraphs: [
                "Soignez l'entrée dans le récit : une phrase qui situe vite (« J'avais huit ans quand... ») ou qui plonge dans l'action (« Le train venait de partir sans moi. »). Employez l'imparfait pour le décor et les habitudes, le passé simple ou le passé composé pour les actions principales, le plus-que-parfait pour ce qui s'est passé avant. Gardez le même temps de récit du début à la fin.",
                "Faites appel aux cinq sens : une couleur, une odeur, un bruit, une sensation de froid ou de chaleur rendent la scène concrète. Exprimez les sentiments avec un lexique précis (inquiétude, soulagement, honte, fierté) et, si possible, par des images (« mon cœur cognait comme un tambour »). Un court dialogue, bien ponctué (deux-points et guillemets pour ouvrir, puis un tiret de dialogue à chaque changement de personnage qui parle), peut faire entendre les personnages.",
                "Insérez enfin quelques interventions de l'adulte qui se souvient : « Aujourd'hui encore, je revois... », « Je ne savais pas alors que... ». Ces phrases au présent d'énonciation ou au conditionnel (futur dans le passé) montrent le recul et le travail de la mémoire.",
              ],
              box: { label: "À retenir", text: "Un bon récit de souvenir : un moment précis, des détails sensoriels, des sentiments nommés et imagés, des temps du passé cohérents, et le regard de l'adulte au présent d'énonciation." },
            },
            {
              heading: "Relire et améliorer",
              paragraphs: [
                "Gardez dix minutes pour vous relire, avec une grille de critères. Le sujet est-il respecté (première personne, souvenir, sentiments, bilan) ? Le récit est-il organisé en paragraphes, avec des connecteurs de temps (d'abord, soudain, puis, finalement) ? Les temps sont-ils cohérents ?",
                "Relisez ensuite pour l'orthographe, en vous concentrant sur une difficulté à la fois : les accords sujet-verbe, les accords dans le groupe nominal, les participes passés, les terminaisons du passé simple (je marchai, je finis) et de l'imparfait (je marchais). Remplacez enfin les verbes trop vagues (faire, dire, il y a) par des verbes précis (fabriquer, murmurer, se dresser).",
              ],
            },
          ],
          keyPoints: [
            "Souligner les contraintes du sujet : « je », souvenir, sentiments, bilan, longueur.",
            "Raconter un seul moment précis, préparé au brouillon (lieu, âge, personnes, sensations, émotions).",
            "Plan : situation, moment fort, dénouement, bilan de l'adulte au présent d'énonciation.",
            "Imparfait pour le décor, passé simple ou passé composé pour les actions, plus-que-parfait pour l'antériorité.",
            "Rendre la scène vivante : cinq sens, sentiments précis, images, court dialogue.",
            "Se relire avec une grille : respect du sujet, organisation, temps, orthographe, verbes précis.",
          ],
          example: {
            statement: "Sujet : « Racontez un souvenir d'enfance où vous avez eu très peur. Vous exprimerez vos sentiments et direz ce que ce souvenir représente pour vous aujourd'hui. » Proposez un plan et rédigez le premier paragraphe.",
            solution: [
              "Analyser la consigne : récit à la première personne, un souvenir de peur, des sentiments exprimés, un bilan au présent.",
              "Choisir un moment précis : le soir où, à sept ans, je me suis retrouvé seul dans le noir pendant une coupure de courant.",
              "Plan : 1) la situation (un soir d'orage, chez ma grand-mère) ; 2) le moment fort (la lumière s'éteint, les bruits, la peur qui monte) ; 3) le dénouement (ma grand-mère arrive avec une bougie) ; 4) le bilan (aujourd'hui encore, j'aime les bougies et je comprends que la peur grandit dans le silence).",
              "Premier paragraphe rédigé : « J'avais sept ans et je passais les vacances chez ma grand-mère, dans une vieille maison au bout d'un chemin de terre. Ce soir-là, l'orage grondait depuis des heures et la pluie frappait les volets. J'étais assis dans la cuisine, un livre sur les genoux, quand la lumière s'éteignit d'un coup. »",
                  "Vérifier : imparfait pour le décor (« passais », « grondait », « frappait »), passé simple pour l'événement (« s'éteignit »), détails sensoriels (bruit de l'orage, pluie), première personne respectée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Enrichissez chaque phrase en ajoutant un détail sensoriel (vue, ouïe, odorat, toucher ou goût) et un sentiment. a) J'entrai dans la classe. b) Nous arrivâmes à la plage. c) Ma mère ouvrit la porte.",
              hint: "Demandez-vous : qu'est-ce que je voyais, entendais, sentais à ce moment-là, et qu'est-ce que je ressentais ?",
              solution: [
                "a) Exemple : « J'entrai dans la classe, qui sentait la craie et le bois ciré, et mon cœur se serra devant tous ces visages inconnus. » (odorat, appréhension)",
                "b) Exemple : « Nous arrivâmes à la plage ; le sable brûlant piquait mes pieds nus et je courus vers l'eau, ivre de joie. » (toucher, joie)",
                "c) Exemple : « Ma mère ouvrit la porte dans un grincement aigu, et je retins mon souffle, persuadé qu'elle avait tout découvert. » (ouïe, inquiétude)",
                "Toute réponse est juste si elle ajoute une sensation précise et un sentiment nommé ou suggéré, sans changer le temps du verbe.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ce passage au passé, en employant l'imparfait et le passé simple selon le sens : « Il est huit heures. La cour est pleine d'élèves qui crient. Soudain, la cloche sonne. Je prends mon cartable et je cours vers la porte. »",
              hint: "L'imparfait décrit le décor et les actions en cours ; le passé simple raconte les actions soudaines et successives, souvent après « soudain ».",
              solution: [
                "Décor : « Il est huit heures » devient « Il était huit heures » ; « La cour est pleine » devient « La cour était pleine » ; « qui crient » devient « qui criaient » (imparfait de description).",
                "Action soudaine : « la cloche sonne » devient « la cloche sonna » (passé simple, renforcé par « Soudain »).",
                "Actions successives : « je prends » devient « je pris », « je cours » devient « je courus » (passé simple).",
                "Texte réécrit : « Il était huit heures. La cour était pleine d'élèves qui criaient. Soudain, la cloche sonna. Je pris mon cartable et je courus vers la porte. »",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type brevet (sujet d'imagination). « Racontez un moment de votre enfance où vous avez découvert quelque chose qui vous a marqué (un lieu, une personne, un livre, une passion). Votre récit, à la première personne, mêlera narration, description et expression des sentiments, et se terminera par le regard que vous portez aujourd'hui sur ce souvenir. » Rédigez le plan détaillé puis le dernier paragraphe (le bilan).",
              hint: "Choisissez une découverte précise. Le dernier paragraphe doit passer au présent d'énonciation et dire ce que ce souvenir a changé pour vous.",
              solution: [
                "Analyse du sujet : première personne ; une découverte marquante ; trois types de passages attendus (narration, description, sentiments) ; un bilan final au présent.",
                "Plan détaillé possible : 1) Situation : à neuf ans, un mercredi pluvieux, ma tante m'emmène à la médiathèque. 2) Description du lieu : les rayonnages, le silence, l'odeur du papier. 3) Moment fort : je tombe sur un livre de contes illustrés, je m'assois par terre et j'oublie l'heure. 4) Dénouement : ma tante me trouve, l'heure de fermeture est passée, elle sourit et m'inscrit. 5) Bilan au présent.",
                "Dernier paragraphe rédigé : « Aujourd'hui, je ne me souviens plus du titre de ce livre, mais je revois encore sa couverture rouge et la lumière grise de la fenêtre. Je sais maintenant que ce mercredi-là a changé quelque chose en moi : j'ai découvert qu'une histoire pouvait me faire oublier le monde. Chaque fois que j'entre dans une bibliothèque, je retrouve un peu de l'émerveillement de cet enfant assis par terre. »",
                "Vérification : présent d'énonciation (« je ne me souviens plus », « je sais »), modalisation de la mémoire, sentiment nommé (« émerveillement »), double regard (« cet enfant »). Le bilan répond bien à la dernière contrainte du sujet.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'écriture d'un souvenir personnel.",
            items: [
              "Lire la consigne et souligner ses contraintes",
              "Choisir un moment précis de l'enfance",
              "Noter au brouillon lieux, personnes, sensations et sentiments",
              "Construire le plan : situation, moment fort, dénouement, bilan",
              "Rédiger en soignant les temps du passé et les détails",
              "Écrire le bilan de l'adulte au présent d'énonciation",
              "Se relire avec une grille de critères",
            ],
          },
          quiz: [
            { q: "Dans un récit de souvenir, quel temps convient pour décrire le décor ?", options: ["Le passé simple", "L'imparfait", "Le futur", "Le présent de vérité générale"], answer: 1, why: "L'imparfait sert à la description et à l'arrière-plan du récit." },
            { q: "Quel est le meilleur choix de sujet pour un récit d'une page ?", options: ["Toute mon année de CM2", "Mes dix premières années", "Le jour où j'ai perdu mon chien au parc"], answer: 2, why: "Un moment précis permet des détails concrets et un récit vivant ; une longue période oblige à résumer." },
            { q: "« Je ne savais pas alors que je ne le reverrais jamais. » Que montre cette phrase ?", options: ["Le regard de l'adulte qui connaît la suite", "Une erreur de concordance des temps", "Un dialogue entre deux enfants", "Une description du décor"], answer: 0, why: "Le narrateur adulte annonce ce que l'enfant ignorait : c'est le recul de celui qui se souvient." },
            { q: "Quel mot nomme le plus précisément un sentiment ?", options: ["bizarre", "bien", "mal", "soulagement"], answer: 3, why: "« Soulagement » désigne un sentiment précis ; les autres mots sont vagues." },
            { q: "Par quoi peut se terminer un récit de souvenir au brevet ?", options: ["Par un bilan au présent sur ce que ce souvenir représente", "Par une liste de mots difficiles", "Par un résumé du texte de la première partie"], answer: 0, why: "Le bilan de l'adulte, au présent d'énonciation, répond souvent à une contrainte du sujet et donne de la profondeur au récit." },
          ],
          trap: "Mélanger sans raison le présent et le passé dans le récit : choisissez un temps de récit (passé simple ou passé composé avec l'imparfait) et réservez le présent aux commentaires de l'adulte.",
          method: "Avant de rendre votre copie, relisez-la trois fois avec un objectif différent : d'abord le respect du sujet, ensuite la cohérence des temps, enfin l'orthographe (accords et terminaisons verbales).",
        },
      ],
    },
    {
      id: 'phrase-complexe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'juxtaposition-coordination',
          title: "Juxtaposition, coordination et subordination",
          minutes: 30,
          objectives: [
            "Identifier les propositions d'une phrase complexe en repérant les verbes conjugués.",
            "Distinguer juxtaposition, coordination et subordination.",
            "Distinguer proposition indépendante, proposition principale et proposition subordonnée.",
          ],
          course: [
            {
              heading: "Phrase simple et phrase complexe",
              paragraphs: [
                "Une proposition est un ensemble de mots organisé autour d'un verbe conjugué, avec son sujet et ses compléments. Une phrase simple ne contient qu'une seule proposition : « Le vent souffle. » Une phrase complexe en contient plusieurs : « Le vent souffle, les volets claquent et la maison tremble. » Cette phrase compte trois verbes conjugués (souffle, claquent, tremble), donc trois propositions.",
                "Pour compter les propositions, soulignez les verbes conjugués. Attention aux temps composés : dans « Il a fini son travail », l'auxiliaire et le participe passé forment un seul verbe (a fini). Les infinitifs et les participes employés seuls ne comptent pas en général : « Il veut partir » est une phrase simple, car seul « veut » est conjugué.",
              ],
              box: { label: "Règle", text: "Une phrase compte autant de propositions que de verbes conjugués. Un verbe à un temps composé (auxiliaire + participe passé) compte pour un seul verbe." },
            },
            {
              heading: "Juxtaposition et coordination",
              paragraphs: [
                "Deux propositions sont juxtaposées quand elles sont placées côte à côte, séparées seulement par un signe de ponctuation : une virgule, un point-virgule ou deux-points. « Le ciel s'assombrit ; l'orage approche. » Aucun mot ne les relie : c'est au lecteur de deviner le lien logique. Les deux-points signalent souvent une cause ou une conséquence : « Le match est annulé : il pleut trop. »",
                "Deux propositions sont coordonnées quand elles sont reliées par une conjonction de coordination (mais, ou, et, donc, or, ni, car) ou par un adverbe de liaison (puis, ensuite, pourtant, cependant, en effet, c'est pourquoi...). « Elle a couru, car elle était en retard. » La conjonction ou l'adverbe rend le lien logique explicite : addition (et), opposition (mais), cause (car), conséquence (donc).",
                "Dans la juxtaposition comme dans la coordination, les propositions sont sur le même plan : aucune ne dépend de l'autre, et chacune pourrait former une phrase à elle seule. On les appelle des propositions indépendantes.",
              ],
              box: { label: "Repère", text: "Conjonctions de coordination : mais, ou, et, donc, or, ni, car (« Mais où est donc Ornicar ? »). Adverbes de liaison fréquents : puis, ensuite, pourtant, cependant, en effet, ainsi, c'est pourquoi." },
            },
            {
              heading: "La subordination",
              paragraphs: [
                "Dans la subordination, une proposition dépend d'une autre. La proposition subordonnée est introduite par un mot subordonnant et ne peut pas former une phrase à elle seule : « parce qu'il pleut » est incomplet. La proposition dont elle dépend s'appelle la proposition principale. Dans « Nous restons à la maison parce qu'il pleut », la principale est « Nous restons à la maison » et la subordonnée « parce qu'il pleut ».",
                "Les mots subordonnants sont de trois sortes : les pronoms relatifs (qui, que, quoi, dont, où, lequel...), qui introduisent les subordonnées relatives ; les conjonctions de subordination (que, quand, comme, si, et les locutions parce que, bien que, afin que, lorsque...), qui introduisent les subordonnées conjonctives ; les mots interrogatifs (si, qui, quand, pourquoi, comment...), qui introduisent les subordonnées interrogatives indirectes : « Je me demande pourquoi il est parti. »",
                "Il existe aussi des subordonnées sans verbe conjugué, qui ont leur propre sujet : la subordonnée infinitive (« J'entends les enfants rire » : « les enfants » est le sujet de « rire ») et la subordonnée participiale (« La nuit tombée, nous rentrâmes »). Vous les rencontrerez surtout dans les textes littéraires.",
              ],
              box: { label: "Définition", text: "Proposition indépendante : ne dépend d'aucune autre et n'a pas de subordonnée. Proposition principale : a au moins une subordonnée qui dépend d'elle. Proposition subordonnée : introduite par un mot subordonnant, elle dépend d'une principale." },
            },
            {
              heading: "Analyser une phrase complexe pas à pas",
              paragraphs: [
                "Une même phrase peut combiner les trois modes de liaison. Pour l'analyser, procédez par étapes : 1) soulignez les verbes conjugués ; 2) délimitez chaque proposition autour de son verbe ; 3) entourez les mots de liaison et les signes de ponctuation qui séparent les propositions ; 4) nommez chaque relation et chaque proposition.",
                "Exemple : « Il pleuvait, mais nous sommes sortis parce que nous l'avions promis. » Trois verbes conjugués : pleuvait, sommes sortis, avions promis. « Il pleuvait » et « nous sommes sortis » sont coordonnées par « mais ». « parce que nous l'avions promis » est une subordonnée qui dépend de « nous sommes sortis », qui est donc aussi une principale.",
              ],
            },
          ],
          keyPoints: [
            "Une proposition s'organise autour d'un verbe conjugué ; autant de verbes conjugués, autant de propositions.",
            "Juxtaposition : propositions séparées par une virgule, un point-virgule ou deux-points, sans mot de liaison.",
            "Coordination : propositions reliées par mais, ou, et, donc, or, ni, car, ou par un adverbe de liaison.",
            "Subordination : une subordonnée, introduite par un mot subordonnant, dépend d'une principale.",
            "Indépendante : ne dépend de rien et n'a pas de subordonnée ; principale : a une subordonnée.",
            "Subordonnants : pronoms relatifs, conjonctions de subordination, mots interrogatifs.",
          ],
          example: {
            statement: "Analysez la phrase suivante : « Le soleil se couchait, les oiseaux se taisaient et le vieil homme, qui marchait lentement, rentrait chez lui. »",
            solution: [
              "Souligner les verbes conjugués : se couchait, se taisaient, marchait, rentrait. La phrase compte donc quatre propositions.",
              "Délimiter : [Le soleil se couchait], [les oiseaux se taisaient] et [le vieil homme ... rentrait chez lui], [qui marchait lentement].",
              "« Le soleil se couchait » et « les oiseaux se taisaient » sont juxtaposées : elles sont séparées par une virgule, sans mot de liaison.",
              "« les oiseaux se taisaient » et « le vieil homme rentrait chez lui » sont coordonnées par la conjonction « et ».",
              "« qui marchait lentement » est une subordonnée relative introduite par le pronom relatif « qui » ; elle complète « le vieil homme » et dépend de la proposition « le vieil homme rentrait chez lui », qui est donc principale.",
              "Bilan : quatre propositions ; deux indépendantes juxtaposées, une coordination par « et », une principale et sa subordonnée relative.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le nombre de propositions de chaque phrase. a) Les élèves entrent en classe. b) Le professeur a distribué les copies et le silence s'est installé. c) Je pense que vous avez raison. d) Il voulait partir, mais il devait attendre son frère qui arrivait de Lyon.",
              hint: "Soulignez seulement les verbes conjugués ; un temps composé compte pour un verbe, un infinitif ne compte pas.",
              solution: [
                "a) Un verbe conjugué (entrent) : une proposition, c'est une phrase simple.",
                "b) Deux verbes conjugués (a distribué, s'est installé) : deux propositions.",
                "c) Deux verbes conjugués (pense, avez) : deux propositions.",
                "d) Trois verbes conjugués (voulait, devait, arrivait) : trois propositions. « partir » et « attendre » sont des infinitifs et ne comptent pas.",
              ],
            },
            {
              level: 2,
              statement: "Dites si les propositions sont juxtaposées, coordonnées ou liées par subordination, et justifiez. a) Le ciel s'assombrit ; l'orage approche. b) Elle a couru, car elle était en retard. c) Je sortirai quand la pluie cessera. d) Il a beaucoup révisé, pourtant il est inquiet. e) Je me demande si le magasin est ouvert.",
              hint: "Regardez ce qui sépare les propositions : un signe de ponctuation seul, une conjonction de coordination ou un adverbe de liaison, ou un mot subordonnant.",
              solution: [
                "a) Juxtaposition : les propositions sont séparées par un point-virgule, sans mot de liaison.",
                "b) Coordination : la conjonction de coordination « car » relie les deux propositions (lien de cause).",
                "c) Subordination : « quand la pluie cessera » est une subordonnée conjonctive introduite par la conjonction « quand » ; elle dépend de « Je sortirai ».",
                "d) Coordination : l'adverbe de liaison « pourtant » relie les deux propositions (lien d'opposition).",
                "e) Subordination : « si le magasin est ouvert » est une subordonnée interrogative indirecte introduite par « si » ; elle dépend de « Je me demande ».",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Voici deux phrases : « Il pleuvait. Nous sommes restés à la maison. » a) Réunissez-les en une seule phrase de trois manières : par juxtaposition, par coordination, par subordination. b) Laquelle de vos trois phrases rend le lien logique le moins explicite ? Pourquoi ? c) Analysez la phrase obtenue par subordination (propositions et mot subordonnant).",
              hint: "Pour la juxtaposition, pensez aux deux-points ; pour la coordination, à « donc » ; pour la subordination, à « comme » ou « parce que ».",
              solution: [
                "a) Juxtaposition : « Il pleuvait : nous sommes restés à la maison. » Coordination : « Il pleuvait, donc nous sommes restés à la maison. » Subordination : « Comme il pleuvait, nous sommes restés à la maison. » (ou « Nous sommes restés à la maison parce qu'il pleuvait. »)",
                "b) La juxtaposition rend le lien le moins explicite : aucun mot ne dit qu'il s'agit d'une cause ; seuls les deux-points et le sens le suggèrent au lecteur.",
                "c) « Comme il pleuvait, nous sommes restés à la maison » contient deux propositions : la principale « nous sommes restés à la maison » et la subordonnée conjonctive « Comme il pleuvait », introduite par la conjonction de subordination « comme », qui exprime la cause.",
                "Bilan : la même idée peut s'exprimer par les trois modes de liaison ; la subordination hiérarchise les idées et précise le lien logique.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : juxtaposition, coordination, subordination.",
            statements: [
              { text: "« Il veut partir » contient deux propositions.", true: false, why: "Seul « veut » est conjugué ; « partir » est un infinitif. C'est une phrase simple." },
              { text: "Deux propositions séparées par un point-virgule sont juxtaposées.", true: true, why: "La juxtaposition relie les propositions par la seule ponctuation." },
              { text: "« Car » est une conjonction de subordination.", true: false, why: "« Car » fait partie des conjonctions de coordination : mais, ou, et, donc, or, ni, car." },
              { text: "Une subordonnée peut former une phrase à elle seule.", true: false, why: "Elle dépend d'une principale : « parce qu'il pleut » est incomplet seul." },
              { text: "« a mangé » compte pour un seul verbe conjugué.", true: true, why: "Au passé composé, l'auxiliaire et le participe passé forment un seul verbe." },
              { text: "Une proposition qui a une subordonnée s'appelle une principale.", true: true, why: "La principale est la proposition dont dépend la subordonnée." },
              { text: "Les pronoms relatifs introduisent les subordonnées conjonctives.", true: false, why: "Les pronoms relatifs introduisent les subordonnées relatives ; les conjonctives sont introduites par une conjonction de subordination." },
            ],
          },
          quiz: [
            { q: "Combien de propositions compte « Quand il eut fini, il rangea ses affaires et sortit » ?", options: ["Deux", "Trois", "Quatre", "Une"], answer: 1, why: "Trois verbes conjugués : eut fini (passé antérieur, un seul verbe), rangea, sortit." },
            { q: "Dans « Il fait beau, nous sortons », les propositions sont...", options: ["coordonnées", "subordonnées", "juxtaposées"], answer: 2, why: "Elles sont séparées par une virgule, sans mot de liaison : elles sont juxtaposées." },
            { q: "Quel mot est une conjonction de coordination ?", options: ["or", "quand", "lorsque", "parce que"], answer: 0, why: "« Or » fait partie de la liste mais, ou, et, donc, or, ni, car ; les autres sont des subordonnants." },
            { q: "Dans « Je sais qu'il viendra », « Je sais » est...", options: ["une subordonnée", "une indépendante", "une coordonnée", "une principale"], answer: 3, why: "« qu'il viendra » dépend de « Je sais », qui est donc la proposition principale." },
            { q: "Dans « Je me demande où il habite », le mot « où » introduit...", options: ["une coordonnée", "une subordonnée interrogative indirecte", "une juxtaposée", "une principale"], answer: 1, why: "Après « je me demande », « où » introduit une question posée indirectement : c'est une subordonnée interrogative indirecte." },
          ],
          trap: "Compter les infinitifs et les participes comme des verbes conjugués, ou compter deux verbes dans un temps composé : seul le verbe conjugué (auxiliaire et participe ensemble) forme une proposition.",
          method: "Analysez toujours dans le même ordre : verbes conjugués soulignés, propositions délimitées entre crochets, mots de liaison entourés. Puis nommez : juxtaposition, coordination ou subordination.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subordonnees-relatives',
          title: "Les propositions subordonnées relatives",
          minutes: 30,
          objectives: [
            "Identifier une proposition subordonnée relative, son pronom relatif et son antécédent.",
            "Donner la fonction du pronom relatif dans la subordonnée.",
            "Choisir le pronom relatif qui convient : qui, que, dont, où, lequel et ses composés.",
            "Distinguer une relative déterminative et une relative explicative.",
          ],
          course: [
            {
              heading: "Reconnaître une subordonnée relative",
              paragraphs: [
                "La subordonnée relative est introduite par un pronom relatif. Elle complète le plus souvent un nom ou un pronom placé juste avant, qu'on appelle l'antécédent. Dans « Le livre que je lis est passionnant », la principale est « Le livre est passionnant », la relative est « que je lis », le pronom relatif est « que » et son antécédent est « livre ».",
                "La relative joue un rôle proche de celui d'un adjectif : elle apporte une précision sur l'antécédent. Sa fonction est complément de l'antécédent (on dit aussi expansion du nom). Comme l'adjectif épithète, elle peut souvent être supprimée sans que la phrase devienne incorrecte : « Le livre est passionnant. »",
                "Le pronom relatif remplace l'antécédent dans la subordonnée, ce qui évite une répétition : « J'ai un ami. Mon ami vit au Canada » devient « J'ai un ami qui vit au Canada ». Plus rarement, une relative n'a pas d'antécédent, surtout dans les proverbes : « Qui vivra verra. »",
              ],
              box: { label: "Définition", text: "La subordonnée relative est introduite par un pronom relatif (qui, que, quoi, dont, où, lequel...). Elle complète un nom ou un pronom, l'antécédent, que le pronom relatif remplace. Fonction de la relative : complément de l'antécédent." },
            },
            {
              heading: "Les pronoms relatifs et leur fonction",
              paragraphs: [
                "Les formes simples sont qui, que, quoi, dont, où. Les formes composées varient en genre et en nombre : lequel, laquelle, lesquels, lesquelles, et, combinées avec « à » ou « de », auquel, à laquelle, auxquels, auxquelles, duquel, de laquelle, desquels, desquelles. Elles s'emploient surtout après une préposition : « la table sur laquelle il écrit », « le projet auquel je pense ».",
                "Le pronom relatif a une fonction dans la subordonnée. « Qui » est sujet : « l'élève qui parle ». « Que » est COD (« le film que j'ai vu ») ou attribut (« le héros qu'il était »). « Dont » remplace un complément introduit par « de » : COI (« le livre dont je parle », car on parle de quelque chose), complément du nom (« l'auteur dont j'admire le style », le style de l'auteur), complément de l'adjectif (« le résultat dont il est fier », fier de). « Où » est complément circonstanciel de lieu ou de temps : « la ville où je suis né », « le jour où il est parti ».",
                "Pour trouver la fonction du pronom, remplacez-le par son antécédent et reconstruisez la subordonnée comme une phrase indépendante : « le livre dont je parle » donne « je parle du livre », donc « dont » est COI du verbe « parle ».",
              ],
              box: { label: "Repère", text: "qui : sujet. que : COD ou attribut. dont : complément introduit par « de » (COI, complément du nom, complément de l'adjectif). où : complément de lieu ou de temps. lequel et ses composés : après une préposition." },
            },
            {
              heading: "Relative déterminative et relative explicative",
              paragraphs: [
                "La relative déterminative est indispensable pour identifier l'antécédent ; elle n'est pas encadrée de virgules. « Les élèves qui ont fini peuvent sortir » : seuls ceux qui ont fini peuvent sortir. Si on la supprime, le sens change.",
                "La relative explicative ajoute une information sur un antécédent déjà identifié ; elle est encadrée de virgules et peut être supprimée sans changer l'essentiel du sens. « Les élèves, qui ont fini, peuvent sortir » : tous les élèves ont fini, et tous peuvent sortir. Une virgule suffit donc à changer le sens d'une phrase.",
              ],
            },
            {
              heading: "Orthographe et bon usage",
              paragraphs: [
                "Après « qui » sujet, le verbe s'accorde avec l'antécédent : « C'est moi qui suis arrivé le premier », « C'est vous qui avez gagné ». Après « que » COD placé avant un verbe conjugué avec « avoir », le participe passé s'accorde avec l'antécédent : « les fleurs que j'ai cueillies ».",
                "Employez « dont » quand le verbe ou le nom se construit avec « de » : on dit « le livre dont j'ai besoin » (avoir besoin de), et non « le livre que j'ai besoin ». Évitez aussi de répéter l'information : « l'ami dont je connais la sœur », et non « l'ami dont je connais sa sœur ». En écriture, les relatives enrichissent les descriptions et évitent les répétitions.",
              ],
              box: { label: "Règle", text: "Après « qui », le verbe s'accorde avec l'antécédent (c'est nous qui partons). Avec « que » COD placé avant l'auxiliaire « avoir », le participe passé s'accorde avec l'antécédent (la lettre que j'ai écrite)." },
            },
          ],
          keyPoints: [
            "La relative est introduite par un pronom relatif et complète un antécédent (nom ou pronom).",
            "Fonction de la relative : complément de l'antécédent ; elle se supprime souvent comme un adjectif.",
            "qui : sujet ; que : COD ou attribut ; dont : complément en « de » ; où : lieu ou temps.",
            "Pour trouver la fonction du pronom, remplacez-le par l'antécédent et reconstruisez la phrase.",
            "Déterminative : sans virgules, indispensable ; explicative : entre virgules, supprimable.",
            "Le verbe après « qui » s'accorde avec l'antécédent : c'est vous qui avez raison.",
          ],
          example: {
            statement: "Analysez les relatives de la phrase : « Le village où j'ai grandi, dont je garde un souvenir ému, possède une église que les touristes admirent. »",
            solution: [
              "Repérer les verbes conjugués : ai grandi, garde, possède, admirent. Il y a quatre propositions ; la principale est « Le village possède une église ».",
              "Première relative : « où j'ai grandi ». Antécédent : « village ». « J'ai grandi dans le village » : « où » est complément circonstanciel de lieu de « ai grandi ».",
              "Deuxième relative : « dont je garde un souvenir ému ». Antécédent : « village ». « Je garde un souvenir du village » : « dont » est complément du nom « souvenir ».",
              "Troisième relative : « que les touristes admirent ». Antécédent : « église ». « Les touristes admirent l'église » : « que » est COD de « admirent ».",
              "Type : « dont je garde un souvenir ému » est une relative explicative (entre virgules) ; « où j'ai grandi » et « que les touristes admirent » sont déterminatives.",
              "Bilan : trois relatives, toutes compléments de leur antécédent, dont les pronoms ont trois fonctions différentes (lieu, complément du nom, COD).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le pronom relatif qui convient. a) La maison ... nous habitons est ancienne. b) C'est un roman ... tout le monde parle. c) Le chien ... aboie est le mien. d) La lettre ... j'ai reçue m'a ému. e) L'outil avec ... il travaille est cassé.",
              hint: "Reconstruisez chaque relative avec l'antécédent : « nous habitons dans la maison », « tout le monde parle de ce roman », etc.",
              solution: [
                "a) La maison où nous habitons est ancienne (nous habitons dans la maison : complément de lieu). « dans laquelle » est aussi possible.",
                "b) C'est un roman dont tout le monde parle (on parle de ce roman : complément en « de »).",
                "c) Le chien qui aboie est le mien (le chien aboie : sujet).",
                "d) La lettre que j'ai reçue m'a ému (j'ai reçu la lettre : COD ; le participe « reçue » s'accorde avec « lettre »).",
                "e) L'outil avec lequel il travaille est cassé (il travaille avec l'outil : après une préposition, masculin singulier).",
              ],
            },
            {
              level: 2,
              statement: "Donnez la fonction du pronom relatif de chaque phrase, en justifiant. a) Le train qui part à midi est complet. b) La chanson que vous fredonnez me plaît. c) Le stylo dont je me sers est bleu. d) Je me souviens de la période où il vivait à Paris. e) C'est l'auteur dont j'admire le style.",
              hint: "Remplacez le pronom par son antécédent et reconstruisez la subordonnée : la fonction de l'antécédent dans cette phrase est celle du pronom.",
              solution: [
                "a) « qui » est sujet de « part » : le train part à midi.",
                "b) « que » est COD de « fredonnez » : vous fredonnez la chanson.",
                "c) « dont » est COI de « me sers » : je me sers du stylo (se servir de).",
                "d) « où » est complément circonstanciel de temps de « vivait » : il vivait à Paris à cette période.",
                "e) « dont » est complément du nom « style » : j'admire le style de l'auteur.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. a) Réunissez chaque paire de phrases en une seule, à l'aide d'un pronom relatif : « J'ai lu un livre. L'auteur de ce livre est italien. » ; « Nous avons visité un musée. Ce musée expose des tableaux de Monet. » b) Expliquez la différence de sens entre : « Les voyageurs qui étaient fatigués se sont endormis » et « Les voyageurs, qui étaient fatigués, se sont endormis. » c) Corrigez la phrase : « C'est le film que je vous ai parlé. »",
              hint: "Pour a), repérez le mot répété et la préposition qui l'accompagne. Pour b), demandez-vous si tous les voyageurs se sont endormis.",
              solution: [
                "a) « J'ai lu un livre dont l'auteur est italien. » (« l'auteur de ce livre » : « dont » est complément du nom « auteur ».) « Nous avons visité un musée qui expose des tableaux de Monet. » (« ce musée » est sujet de « expose », d'où « qui ».)",
                "b) Sans virgules, la relative est déterminative : seuls les voyageurs fatigués se sont endormis, les autres sont restés éveillés. Avec virgules, la relative est explicative : tous les voyageurs étaient fatigués et tous se sont endormis.",
                "c) On dit « parler de quelque chose » : il faut donc « dont ». Phrase corrigée : « C'est le film dont je vous ai parlé. »",
                "Bilan : le choix du pronom dépend de la construction du verbe ou du nom dans la subordonnée, et la ponctuation peut modifier le sens d'une relative.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pronom relatif à sa fonction dans l'exemple.",
            pairs: [
              { left: "l'élève qui parle", right: "sujet du verbe" },
              { left: "le film que j'ai vu", right: "complément d'objet direct" },
              { left: "le livre dont je parle", right: "complément d'objet indirect (parler de)" },
              { left: "la ville où je suis né", right: "complément circonstanciel de lieu" },
              { left: "l'auteur dont j'admire le style", right: "complément du nom" },
            ],
          },
          quiz: [
            { q: "Dans « La robe que vous portez est jolie », quel est l'antécédent de « que » ?", options: ["vous", "robe", "jolie", "portez"], answer: 1, why: "« que » remplace « robe » : vous portez la robe." },
            { q: "Quelle est la fonction de « dont » dans « le projet dont il rêve » ?", options: ["COI du verbe « rêve »", "sujet du verbe", "COD du verbe", "complément de lieu"], answer: 0, why: "On rêve de quelque chose : il rêve du projet, donc « dont » est COI." },
            { q: "Quelle phrase est correcte ?", options: ["C'est vous qui a raison.", "C'est vous qui avez raison.", "C'est vous qui ont raison.", "C'est vous qu'avez raison."], answer: 1, why: "Après « qui », le verbe s'accorde avec l'antécédent « vous » : avez." },
            { q: "« Mes cousins, qui habitent Lyon, viendront. » La relative est...", options: ["déterminative", "complétive", "explicative"], answer: 2, why: "Encadrée de virgules, elle ajoute une information supprimable : elle est explicative." },
            { q: "Quel pronom complète « le jour ... il est né » ?", options: ["que", "dont", "lequel", "où"], answer: 3, why: "« Où » peut avoir un antécédent de temps : il est né ce jour-là." },
          ],
          trap: "Employer « que » à la place de « dont » avec un verbe construit avec « de » (« le livre que j'ai besoin ») : reconstruisez la phrase (« j'ai besoin du livre ») pour choisir le bon pronom.",
          method: "Pour la fonction d'un pronom relatif, appliquez toujours la même astuce : remplacez le pronom par son antécédent, réécrivez la subordonnée comme une phrase complète, puis donnez la fonction du mot remplacé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subordonnees-conjonctives',
          title: "Les subordonnées conjonctives : complétives et circonstancielles",
          minutes: 35,
          objectives: [
            "Identifier une subordonnée conjonctive et sa conjonction de subordination.",
            "Distinguer la subordonnée complétive et la subordonnée circonstancielle.",
            "Donner la fonction d'une complétive et la nuance de sens d'une circonstancielle.",
            "Distinguer « que » pronom relatif et « que » conjonction de subordination.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une subordonnée conjonctive ?",
              paragraphs: [
                "Une subordonnée conjonctive est introduite par une conjonction de subordination : que, quand, comme, si, ou une locution conjonctive (parce que, bien que, afin que, lorsque, pendant que, si bien que...). Contrairement au pronom relatif, la conjonction n'a pas d'antécédent et n'a aucune fonction dans la subordonnée : elle sert seulement à la rattacher à la principale.",
                "On distingue deux grandes familles. Les subordonnées complétives complètent le verbe (ou un nom, un adjectif) et sont le plus souvent essentielles. Les subordonnées circonstancielles indiquent les circonstances de l'action principale (temps, cause, but...) et peuvent souvent être déplacées ou supprimées.",
              ],
            },
            {
              heading: "La subordonnée complétive",
              paragraphs: [
                "La complétive est introduite par « que » et occupe la place d'un groupe nominal. On peut souvent la remplacer par « cela » : « Je crois que la pluie va cesser » devient « Je crois cela ». Sa fonction la plus fréquente est COD du verbe de la principale. Elle peut aussi être sujet (« Qu'il soit en retard m'étonne »), attribut du sujet (« L'essentiel est que vous soyez prêts »), complément de l'adjectif (« Je suis heureux que vous veniez ») ou complément du nom (« L'idée qu'il puisse échouer l'inquiète »).",
                "Le mode de la complétive dépend du sens du verbe principal. On emploie l'indicatif quand le fait est présenté comme réel ou certain, après les verbes de déclaration, d'opinion, de perception ou de savoir (dire, penser, croire, savoir, voir) : « Je pense qu'il viendra ». On emploie le subjonctif après les verbes de volonté, de souhait, de sentiment, de doute ou de nécessité (vouloir, souhaiter, craindre, douter, regretter, il faut que) : « Je veux qu'il vienne ». À la forme négative, les verbes d'opinion appellent souvent le subjonctif : « Je ne pense pas qu'il vienne ».",
                "Après des verbes comme demander, ignorer, se demander, on trouve aussi des subordonnées interrogatives indirectes, introduites par si, qui, quand, où, pourquoi, comment : « Je me demande s'il viendra ». Elles sont, elles aussi, complément du verbe.",
              ],
              box: { label: "Règle", text: "Complétive : introduite par « que », remplaçable par « cela », essentielle. Fonctions : COD (le plus souvent), sujet, attribut, complément de l'adjectif ou du nom. Indicatif pour un fait réel ; subjonctif pour la volonté, le sentiment, le doute, la nécessité." },
            },
            {
              heading: "La subordonnée circonstancielle",
              paragraphs: [
                "La circonstancielle est complément circonstanciel du verbe de la principale. On peut le plus souvent la déplacer ou la supprimer : « Quand la nuit tomba, nous rentrâmes » ou « Nous rentrâmes quand la nuit tomba ». Elle est introduite par une conjonction ou une locution conjonctive qui en indique le sens.",
                "Temps : quand, lorsque, dès que, pendant que, après que (indicatif) ; avant que, jusqu'à ce que (subjonctif). Cause : parce que, puisque, comme, étant donné que (indicatif). Conséquence : si bien que, de sorte que, si (tellement)... que (indicatif). But : pour que, afin que, de peur que (subjonctif). Concession et opposition : bien que, quoique (subjonctif) ; alors que, tandis que, même si (indicatif). Condition : si (indicatif), à condition que (subjonctif), au cas où (conditionnel). Comparaison : comme, de même que, ainsi que (indicatif).",
              ],
              box: { label: "Repère", text: "Retenez les pièges de mode : « après que » + indicatif (après qu'il est parti) ; « avant que » + subjonctif (avant qu'il parte) ; « bien que » + subjonctif ; « même si » + indicatif ; jamais de conditionnel après « si » de condition." },
            },
            {
              heading: "« Que » : pronom relatif ou conjonction ?",
              paragraphs: [
                "Le mot « que » peut être un pronom relatif ou une conjonction de subordination. Le pronom relatif a un antécédent (un nom placé juste avant) et une fonction dans la subordonnée, souvent COD : dans « le livre que Paul lit », Paul lit le livre ; il manque un COD après « lit », et c'est « que » qui le remplace.",
                "La conjonction n'a ni antécédent ni fonction : dans « Je sais que Paul lit ce livre », la subordonnée « Paul lit ce livre » est grammaticalement complète sans « que ». Le test est donc simple : si la proposition qui suit « que » est complète, « que » est une conjonction ; s'il y manque un élément (souvent le COD), « que » est un pronom relatif.",
                "Attention au cas piège du nom suivi de « que » : dans « l'idée qu'il a eue », il a eu l'idée (il manque le COD) : relatif. Dans « l'idée qu'il puisse échouer », « il puisse échouer » est complet : conjonction, et la complétive est complément du nom « idée ».",
              ],
            },
          ],
          keyPoints: [
            "La conjonctive est introduite par une conjonction de subordination, qui n'a ni antécédent ni fonction.",
            "Complétive : introduite par « que », remplaçable par « cela », souvent COD ; essentielle.",
            "Indicatif après un verbe de déclaration ou d'opinion ; subjonctif après volonté, sentiment, doute, nécessité.",
            "Circonstancielle : complément circonstanciel, souvent déplaçable et supprimable (temps, cause, conséquence, but, concession, condition, comparaison).",
            "« après que » + indicatif ; « avant que », « bien que », « pour que » + subjonctif.",
            "« que » relatif : la proposition qui suit est incomplète ; « que » conjonction : elle est complète.",
          ],
          example: {
            statement: "Analysez la phrase : « Comme l'orage menaçait, le guide décida que nous dormirions au refuge. »",
            solution: [
              "Repérer les verbes conjugués : menaçait, décida, dormirions. La phrase contient trois propositions.",
              "Proposition principale : « le guide décida ».",
              "« Comme l'orage menaçait » : subordonnée conjonctive circonstancielle de cause, introduite par la conjonction « comme » ; elle est complément circonstanciel de cause de « décida » et pourrait être déplacée (« Le guide décida... comme l'orage menaçait »).",
              "« que nous dormirions au refuge » : subordonnée conjonctive complétive introduite par « que » ; on peut la remplacer par « cela » (le guide décida cela) : elle est COD de « décida ».",
              "Vérifier la nature de « que » : « nous dormirions au refuge » est une proposition complète, donc « que » est une conjonction et non un pronom relatif.",
              "Bilan : une principale, une circonstancielle de cause et une complétive COD. Le verbe « dormirions » est au conditionnel présent, employé comme futur dans le passé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque subordonnée est complétive ou circonstancielle ; pour une circonstancielle, précisez la nuance. a) Je sais que vous travaillez. b) Nous partirons dès que le soleil se lèvera. c) Il souhaite que ses amis viennent. d) Puisque vous insistez, j'accepte. e) Parlez fort pour que tout le monde vous entende.",
              hint: "Essayez de remplacer la subordonnée par « cela » : si c'est possible, c'est une complétive. Sinon, cherchez la circonstance exprimée par la conjonction.",
              solution: [
                "a) Complétive : « Je sais cela » ; elle est COD de « sais ».",
                "b) Circonstancielle de temps, introduite par « dès que ».",
                "c) Complétive COD de « souhaite », au subjonctif car le verbe exprime un souhait.",
                "d) Circonstancielle de cause, introduite par « puisque ».",
                "e) Circonstancielle de but, introduite par « pour que », avec le subjonctif « entende ».",
              ],
            },
            {
              level: 2,
              statement: "Dites si « que » est un pronom relatif ou une conjonction de subordination, et justifiez. a) La lettre que vous avez écrite est belle. b) Il affirme que la lettre est belle. c) L'idée qu'il a eue est géniale. d) L'idée qu'il puisse échouer l'inquiète.",
              hint: "Lisez la proposition qui suit « que » : est-elle complète, ou lui manque-t-il un complément ?",
              solution: [
                "a) Pronom relatif : « vous avez écrite » est incomplet ; on comprend « vous avez écrit la lettre ». « que » a pour antécédent « lettre » et il est COD de « avez écrite ».",
                "b) Conjonction : « la lettre est belle » est une proposition complète ; « que » introduit une complétive COD de « affirme ».",
                "c) Pronom relatif : « il a eue » est incomplet (il a eu l'idée) ; « que » a pour antécédent « idée » et il est COD de « a eue ».",
                "d) Conjonction : « il puisse échouer » est complet ; la complétive est complément du nom « idée ».",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. a) Donnez la fonction de chaque complétive et justifiez le mode du verbe : 1) Nous espérons que le spectacle vous plaira. 2) Que vous ayez réussi ne m'étonne pas. 3) Le problème est que personne ne répond. 4) Elle est fière que son frère ait gagné. b) Réécrivez la phrase « Je pense qu'il viendra » à la forme négative et expliquez la modification du verbe de la subordonnée.",
              hint: "Pour la fonction, demandez-vous de quel mot dépend la complétive : un verbe, un sujet placé en tête, le verbe « être » ou un adjectif. Pour le mode, demandez-vous si le fait est présenté comme certain.",
              solution: [
                "a) 1) COD de « espérons » ; indicatif (« plaira ») car « espérer » présente le fait comme envisagé avec confiance.",
                "a) 2) Sujet de « étonne » ; subjonctif (« ayez réussi ») car la complétive placée en tête de phrase se met au subjonctif.",
                "a) 3) Attribut du sujet « Le problème » ; indicatif (« répond ») car le fait est présenté comme réel.",
                "a) 4) Complément de l'adjectif « fière » ; subjonctif (« ait gagné ») car il dépend d'un sentiment.",
                "b) « Je ne pense pas qu'il vienne. » À la forme négative, le fait n'est plus présenté comme certain mais comme douteux : le verbe passe de l'indicatif (viendra) au subjonctif (vienne).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : complétives et circonstancielles.",
            statements: [
              { text: "Une conjonction de subordination a une fonction dans la subordonnée.", true: false, why: "Seul le pronom relatif a une fonction ; la conjonction relie seulement." },
              { text: "Dans « Je crois qu'il pleut », la complétive est COD de « crois ».", true: true, why: "On peut dire « Je crois cela » : la complétive est COD." },
              { text: "On écrit « après qu'il soit parti ».", true: false, why: "« Après que » se construit avec l'indicatif : après qu'il est parti." },
              { text: "Une circonstancielle peut souvent être déplacée dans la phrase.", true: true, why: "Comme un complément circonstanciel, elle est généralement mobile." },
              { text: "Dans « le gâteau que j'ai fait », « que » est une conjonction.", true: false, why: "« j'ai fait » est incomplet (j'ai fait le gâteau) : « que » est un pronom relatif COD." },
              { text: "« Bien que » est suivi du subjonctif.", true: true, why: "Bien que, quoique : la concession se construit avec le subjonctif." },
              { text: "On peut écrire « si j'aurais su ».", true: false, why: "Jamais de conditionnel après « si » de condition : si j'avais su." },
            ],
          },
          quiz: [
            { q: "Dans « Il faut que vous partiez », le verbe de la subordonnée est...", options: ["à l'indicatif", "au conditionnel", "au subjonctif"], answer: 2, why: "« Il faut que » exprime la nécessité et entraîne le subjonctif : partiez." },
            { q: "Dans « Je suis content que vous soyez là », la complétive est...", options: ["COD du verbe « être »", "complément de l'adjectif « content »", "sujet du verbe", "attribut du sujet"], answer: 1, why: "La complétive dépend de l'adjectif « content » : elle est complément de l'adjectif, au subjonctif car elle exprime un sentiment." },
            { q: "Quelle conjonction introduit une circonstancielle de but ?", options: ["afin que", "puisque", "si bien que", "lorsque"], answer: 0, why: "« Afin que » exprime le but ; puisque : cause ; si bien que : conséquence ; lorsque : temps." },
            { q: "Dans « La chanson que j'écoute », « que » est...", options: ["une conjonction", "un pronom relatif", "un adverbe", "une préposition"], answer: 1, why: "« j'écoute » est incomplet (j'écoute la chanson) : « que » est un pronom relatif COD, d'antécédent « chanson »." },
            { q: "Quelle phrase est correcte ?", options: ["Il est sorti avant que la pluie commence.", "Il est sorti avant que la pluie commencera.", "Il est sorti avant que la pluie a commencé."], answer: 0, why: "« Avant que » se construit avec le subjonctif : avant que la pluie commence." },
          ],
          trap: "Confondre « que » pronom relatif et « que » conjonction parce qu'ils suivent tous deux un nom (« l'idée que... ») : seule la question « la proposition qui suit est-elle complète ? » permet de trancher.",
          method: "Pour classer une conjonctive, faites deux tests à la suite : remplacez-la par « cela » (si cela marche, complétive) ; sinon, essayez de la déplacer et cherchez la circonstance (temps, cause, but...) exprimée par la conjonction.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cause-consequence-but',
          title: "Exprimer la cause, la conséquence, le but et l'opposition",
          minutes: 35,
          objectives: [
            "Identifier les relations logiques de cause, de conséquence, de but, d'opposition et de concession.",
            "Exprimer ces relations par des moyens variés : subordonnées, prépositions, coordination, juxtaposition, lexique.",
            "Employer le mode qui convient après chaque conjonction : indicatif ou subjonctif.",
          ],
          course: [
            {
              heading: "Les relations logiques",
              paragraphs: [
                "Les relations logiques indiquent comment deux faits sont liés. La cause est ce qui provoque un fait (« Le match est annulé parce qu'il pleut »). La conséquence est le résultat d'un fait (« Il pleut, si bien que le match est annulé »). Cause et conséquence sont les deux faces d'une même relation : tout dépend du fait que l'on met en avant.",
                "Le but est le résultat que l'on cherche à atteindre : il n'est pas encore réalisé (« Il s'entraîne pour qu'on le sélectionne »). L'opposition met en contraste deux faits (« Paul aime le sport alors que sa sœur le déteste »). La concession reconnaît un fait qui aurait dû empêcher l'autre, mais qui ne l'empêche pas (« Bien qu'il pleuve, le match a lieu »).",
                "Bien maîtriser ces relations est indispensable pour comprendre un texte argumentatif et pour argumenter soi-même : elles structurent un raisonnement et montrent au lecteur la logique de votre pensée.",
              ],
            },
            {
              heading: "Exprimer la cause et la conséquence",
              paragraphs: [
                "La cause s'exprime par une subordonnée à l'indicatif (parce que, puisque pour une cause connue de tous, comme en tête de phrase, étant donné que, vu que, sous prétexte que), par une préposition (à cause de, plutôt négatif ; grâce à, positif ; en raison de ; faute de ; pour + infinitif passé : « puni pour avoir menti »), par la coordination (car, en effet), par la juxtaposition avec deux-points, par un participe (« Épuisé, il s'arrêta ») ou par le lexique (la cause, la raison, être dû à, provenir de).",
                "La conséquence s'exprime par une subordonnée à l'indicatif (si bien que, de sorte que, au point que, si ou tellement + adjectif + que, tant ou tellement + verbe + que : « Il a tant couru qu'il est épuisé »), par la coordination ou un adverbe (donc, c'est pourquoi, ainsi, par conséquent, alors), par une préposition suivie d'un infinitif (au point de, jusqu'à) ou par le lexique (entraîner, provoquer, causer, la conséquence, le résultat).",
              ],
              box: { label: "À retenir", text: "Cause et conséquence : subordonnée à l'indicatif. Cause : parce que, puisque, comme, car, à cause de, grâce à. Conséquence : si bien que, si... que, tellement... que, donc, c'est pourquoi, par conséquent." },
            },
            {
              heading: "Exprimer le but",
              paragraphs: [
                "Le but s'exprime par une subordonnée au subjonctif, puisque le résultat visé n'est pas encore réel : pour que, afin que, de peur que, de crainte que (but à éviter) : « Je vous explique la règle pour que vous la compreniez. » Il s'exprime aussi par une préposition suivie d'un infinitif ou d'un nom : pour, afin de, de peur de, en vue de.",
                "Quand le sujet est le même dans les deux propositions, on emploie l'infinitif : « Je travaille pour réussir » (et non « pour que je réussisse »). Quand les sujets sont différents, on emploie la subordonnée : « Je travaille pour que mes parents soient fiers. » Attention à « de sorte que » : suivi de l'indicatif, il exprime la conséquence (« Il a crié, de sorte que tout le monde l'a entendu ») ; suivi du subjonctif, le but (« Criez, de sorte que tout le monde vous entende »).",
              ],
            },
            {
              heading: "Exprimer l'opposition et la concession",
              paragraphs: [
                "L'opposition s'exprime par alors que, tandis que (indicatif), par des prépositions (au lieu de, contrairement à, à l'inverse de) et par des mots de liaison (mais, au contraire, en revanche). La concession s'exprime par bien que, quoique, encore que (subjonctif), même si (indicatif), par des prépositions (malgré, en dépit de), par des adverbes (pourtant, cependant, néanmoins, toutefois) et par la locution avoir beau + infinitif : « Il a beau courir, il arrive en retard. »",
                "Attention : « malgré que » est déconseillé dans la langue soignée ; dites « bien que ». « Même si » se construit toujours avec l'indicatif : « même si vous partez tôt ». En dissertation ou au brevet, la concession est très utile pour nuancer une idée : « Certes... mais... », « Bien que..., il faut reconnaître que... ».",
              ],
              box: { label: "Règle", text: "Subjonctif : pour que, afin que, de peur que (but) ; bien que, quoique (concession). Indicatif : parce que, puisque, comme (cause) ; si bien que, si... que (conséquence) ; alors que, tandis que, même si (opposition, concession)." },
            },
          ],
          keyPoints: [
            "Cause : origine d'un fait ; conséquence : résultat ; but : résultat recherché, pas encore réalisé.",
            "Opposition : deux faits en contraste ; concession : un fait n'empêche pas l'autre.",
            "Chaque relation s'exprime par subordonnée, préposition, coordination, adverbe, juxtaposition ou lexique.",
            "Cause, conséquence, opposition : indicatif ; but et concession (bien que, quoique) : subjonctif.",
            "Même sujet : pour + infinitif ; sujets différents : pour que + subjonctif.",
            "« Même si » + indicatif ; « malgré que » est à éviter, préférez « bien que ».",
          ],
          example: {
            statement: "Exprimez de quatre manières différentes le lien entre « Le pont est fermé » et « Les voitures font un détour ».",
            solution: [
              "Identifier la relation : la fermeture du pont est la cause, le détour est la conséquence.",
              "Subordonnée de cause : « Les voitures font un détour parce que le pont est fermé. »",
              "Subordonnée de conséquence : « Le pont est fermé, si bien que les voitures font un détour. »",
              "Préposition + nom : « À cause de la fermeture du pont, les voitures font un détour. »",
              "Coordination ou juxtaposition : « Le pont est fermé, donc les voitures font un détour. » ou « Les voitures font un détour : le pont est fermé. »",
              "Vérifier les modes : toutes ces constructions de cause et de conséquence emploient l'indicatif (est fermé, font).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la relation logique exprimée dans chaque phrase (cause, conséquence, but, opposition, concession). a) Il a réussi grâce à son travail. b) Parlez plus fort afin que tout le monde vous entende. c) Bien qu'il soit fatigué, il continue. d) Il a tant couru qu'il est épuisé. e) Marie aime le sport alors que son frère le déteste.",
              hint: "Repérez le mot de liaison (grâce à, afin que, bien que, tant... que, alors que), puis rappelez-vous ce qu'il exprime.",
              solution: [
                "a) Cause : « grâce à » introduit une cause positive.",
                "b) But : « afin que » exprime le résultat recherché (avec le subjonctif « entende »).",
                "c) Concession : la fatigue aurait dû l'arrêter, mais ne l'arrête pas (« bien que » + subjonctif).",
                "d) Conséquence : « tant... que » ; l'épuisement est le résultat de la course.",
                "e) Opposition : « alors que » met en contraste les goûts de Marie et de son frère.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez le verbe entre parenthèses au mode et au temps qui conviennent. a) Je vous explique la règle pour que vous la (comprendre). b) Bien qu'elle (être) en avance, elle court. c) Il part tôt parce qu'il (avoir) un rendez-vous. d) Il pleut tellement que la rivière (déborder). e) Même si vous (partir) tôt, vous serez en retard.",
              hint: "But et concession avec « bien que » : subjonctif. Cause, conséquence et « même si » : indicatif.",
              solution: [
                "a) pour que vous la compreniez : subjonctif présent, car « pour que » exprime le but.",
                "b) Bien qu'elle soit en avance : subjonctif présent, car « bien que » exprime la concession.",
                "c) parce qu'il a un rendez-vous : indicatif présent, car « parce que » exprime la cause.",
                "d) que la rivière déborde : indicatif présent, car « tellement... que » exprime la conséquence.",
                "e) Même si vous partez tôt : indicatif présent, car « même si » se construit avec l'indicatif.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet (réécriture). a) Réunissez « Il pleuvait. Le match a été maintenu. » en exprimant la concession de trois façons : avec « bien que », avec « malgré », avec « pourtant ». b) Réunissez « Le vent soufflait très fort. Les arbres pliaient. » en exprimant d'abord la conséquence avec « si... que », puis la cause avec « parce que ». c) Réécrivez « Je travaille pour que je réussisse » en corrigeant la maladresse.",
              hint: "Avec « malgré », il faut un nom, pas un verbe. Pour c), comparez les sujets des deux propositions.",
              solution: [
                "a) « Bien qu'il pleuve, le match a été maintenu. » (dans une langue très soutenue : « bien qu'il plût ») ; « Malgré la pluie, le match a été maintenu. » ; « Il pleuvait ; pourtant, le match a été maintenu. »",
                "b) Conséquence : « Le vent soufflait si fort que les arbres pliaient. » Cause : « Les arbres pliaient parce que le vent soufflait très fort. »",
                "c) Les deux propositions ont le même sujet (« je ») : on emploie l'infinitif. « Je travaille pour réussir. »",
                "Bilan : une même relation se construit de plusieurs façons ; le choix du mot de liaison impose la construction (nom après « malgré », subjonctif après « bien que », indicatif après « parce que »).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot de liaison à la relation logique qu'il exprime.",
            pairs: [
              { left: "puisque", right: "la cause" },
              { left: "si bien que", right: "la conséquence" },
              { left: "afin que", right: "le but" },
              { left: "tandis que", right: "l'opposition" },
              { left: "bien que", right: "la concession" },
              { left: "à condition que", right: "la condition" },
            ],
          },
          quiz: [
            { q: "« Faute de temps, il n'a pas fini. » La relation exprimée est...", options: ["le but", "la conséquence", "la cause", "l'opposition"], answer: 2, why: "« Faute de » introduit la cause : le manque de temps explique qu'il n'ait pas fini." },
            { q: "Quelle phrase est correcte ?", options: ["Bien qu'il est malade, il travaille.", "Bien qu'il soit malade, il travaille.", "Bien qu'il serait malade, il travaille."], answer: 1, why: "« Bien que » exprime la concession et se construit avec le subjonctif : soit." },
            { q: "Quel mot exprime la conséquence ?", options: ["car", "c'est pourquoi", "puisque", "grâce à"], answer: 1, why: "« C'est pourquoi » introduit le résultat ; les trois autres expriment la cause." },
            { q: "« Il a beau protester, personne ne l'écoute. » La relation est...", options: ["la concession", "la cause", "le but", "la conséquence"], answer: 0, why: "« Avoir beau » + infinitif exprime la concession : ses protestations n'empêchent pas l'indifférence." },
            { q: "Dans quelle phrase « de sorte que » exprime-t-il le but ?", options: ["Il a parlé fort, de sorte que tout le monde l'a entendu.", "Il a tant parlé, de sorte qu'il est enroué.", "Il pleut, de sorte que la route est glissante.", "Parlez fort, de sorte qu'on vous entende."], answer: 3, why: "Suivi du subjonctif (entende), « de sorte que » exprime le but ; suivi de l'indicatif, la conséquence." },
          ],
          trap: "Confondre le but et la conséquence : la conséquence est un résultat réel (indicatif), le but un résultat seulement recherché (subjonctif). « Il crie si fort qu'on l'entend » n'est pas « Il crie pour qu'on l'entende ».",
          method: "Apprenez les mots de liaison par familles dans un tableau à cinq colonnes (cause, conséquence, but, opposition, concession), avec pour chacun le mode qui suit. Avant d'écrire, demandez-vous : le résultat est-il réel ou seulement visé ?",
        },
      ],
    },
    {
      id: 'denoncer-travers',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'satire-ironie',
          title: "La satire et l'ironie : faire rire pour dénoncer",
          minutes: 30,
          objectives: [
            "Définir la satire et l'ironie.",
            "Identifier les procédés de l'ironie et de la satire : antiphrase, exagération, fausse naïveté, regard étranger.",
            "Analyser la visée critique d'un texte satirique.",
          ],
          course: [
            {
              heading: "La satire : se moquer pour critiquer",
              paragraphs: [
                "La satire est un texte ou une œuvre qui critique en s'en moquant les défauts d'une personne, d'un groupe, des mœurs ou des institutions d'une société. Le mot vient du latin satura, qui désignait un mélange. Dans l'Antiquité, le poète latin Juvénal écrit des Satires ; en France, Boileau en compose au XVIIe siècle.",
                "La satire prend des formes variées. La Bruyère, dans Les Caractères (1688), dresse des portraits types qui ridiculisent les vices de son temps : Giton, le riche sûr de lui, s'oppose à Phédon, le pauvre qui s'efface. Molière, dans ses comédies, s'attaque à l'hypocrisie religieuse (Tartuffe), à la prétention ou à l'avarice. On parle de registre satirique pour désigner cette tonalité moqueuse et critique.",
              ],
              box: { label: "Définition", text: "La satire est une critique moqueuse des défauts d'une personne, d'un groupe ou d'une société. Elle cherche à faire rire, mais surtout à faire réfléchir et à dénoncer." },
            },
            {
              heading: "L'ironie : dire le contraire de ce que l'on pense",
              paragraphs: [
                "L'ironie consiste à dire le contraire de ce que l'on pense, en laissant comprendre au lecteur ce que l'on pense vraiment. Son procédé de base est l'antiphrase : s'exclamer « Quel temps magnifique ! » sous une pluie battante. L'ironie suppose une complicité : le lecteur doit repérer des indices (le contexte, une exagération, un décalage entre les mots et les faits) pour comprendre le vrai sens.",
                "Montesquieu, dans De l'esprit des lois (1748), fait semblant de défendre l'esclavage en accumulant des arguments absurdes : « Ceux dont il s'agit sont noirs depuis les pieds jusqu'à la tête ; et ils ont le nez si écrasé qu'il est presque impossible de les plaindre. » L'absurdité même de l'argument (refuser sa pitié à cause d'une apparence physique) fait comprendre que l'auteur pense exactement le contraire et ridiculise les esclavagistes.",
                "Voltaire, dans Candide (1759), décrit une bataille comme un spectacle magnifique : « Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées. » Puis il parle de « boucherie héroïque », un oxymore qui révèle l'horreur du massacre. Parfois, l'ironie laisse place à une dénonciation directe : un esclave mutilé rencontré par Candide déclare : « C'est à ce prix que vous mangez du sucre en Europe. »",
              ],
              box: { label: "Définition", text: "L'ironie consiste à dire le contraire de ce que l'on pense pour faire entendre sa véritable opinion. Son procédé principal est l'antiphrase. Elle exige la complicité du lecteur, qui doit repérer les indices." },
            },
            {
              heading: "Les procédés de la satire et de l'ironie",
              paragraphs: [
                "L'exagération (hyperbole) grossit un défaut jusqu'au ridicule. La fausse naïveté consiste à faire semblant de ne pas comprendre : un personnage naïf, comme Candide, décrit sans juger des horreurs que le lecteur, lui, juge. L'éloge paradoxal fait l'éloge de ce qui devrait être condamné. Les oxymores et les contrastes (« boucherie héroïque ») rapprochent des mots qui s'opposent et créent un choc.",
                "Le regard étranger consiste à faire décrire une société par un personnage venu d'ailleurs, qui trouve étranges des habitudes que l'on croyait naturelles. Dans les Lettres persanes (1721) de Montesquieu, deux Persans, Usbek et Rica, découvrent Paris et décrivent avec étonnement les mœurs françaises. Une lettre montre les Parisiens si étonnés par le costume de Rica qu'ils s'exclament : « Comment peut-on être Persan ? » C'est la curiosité des Parisiens qui devient ridicule.",
              ],
            },
            {
              heading: "Pourquoi faire rire pour dénoncer ?",
              paragraphs: [
                "Le rire est une arme. Il rend la critique agréable à lire, donc mieux reçue et plus facile à retenir : c'est l'idéal classique de « plaire et instruire ». Il ridiculise les puissants, qui paraissent moins redoutables quand on rit d'eux. Il oblige aussi le lecteur à réfléchir : comprendre l'ironie, c'est déjà partager le jugement de l'auteur.",
                "Aux XVIIe et XVIIIe siècles, la satire permet aussi de contourner la censure : en faisant parler des Persans ou en situant l'action dans des pays imaginaires, les auteurs critiquent la France sans la nommer. Le risque de l'ironie est d'être mal comprise : un lecteur qui la prend au premier degré croit que l'auteur défend ce qu'il attaque.",
              ],
              box: { label: "À retenir", text: "Satire et ironie font rire pour faire réfléchir : le rire rend la critique plaisante, ridiculise la cible, implique le lecteur et, autrefois, permettait de déjouer la censure." },
            },
          ],
          keyPoints: [
            "Satire : critique moqueuse des défauts d'une personne, d'un groupe ou d'une société.",
            "Ironie : dire le contraire de ce que l'on pense ; procédé principal : l'antiphrase.",
            "Procédés : exagération, fausse naïveté, éloge paradoxal, oxymore, regard étranger.",
            "Œuvres repères : La Bruyère, Les Caractères (1688) ; Montesquieu, Lettres persanes (1721) ; Voltaire, Candide (1759).",
            "L'ironie exige la complicité du lecteur, qui repère les indices du second degré.",
            "Le rire est une arme : il plaît, ridiculise, fait réfléchir et contournait la censure.",
          ],
          example: {
            statement: "Expliquez l'ironie de cette phrase de Montesquieu (De l'esprit des lois, 1748) : « Ceux dont il s'agit sont noirs depuis les pieds jusqu'à la tête ; et ils ont le nez si écrasé qu'il est presque impossible de les plaindre. »",
            solution: [
              "Situer : dans ce chapitre, Montesquieu fait semblant de reprendre les arguments des défenseurs de l'esclavage.",
              "Sens littéral : la phrase prétend qu'on ne peut pas plaindre les esclaves à cause de leur couleur de peau et de la forme de leur nez.",
              "Repérer l'absurdité : l'apparence physique n'a aucun rapport avec la souffrance d'un être humain ; l'argument est volontairement grotesque. L'hyperbole « depuis les pieds jusqu'à la tête » souligne ce ridicule.",
              "Identifier le procédé : il s'agit d'une antiphrase ; Montesquieu pense le contraire de ce qu'il écrit.",
              "Dégager la cible et l'effet : en exposant la bêtise de ces arguments, l'auteur ridiculise les esclavagistes et pousse le lecteur à s'indigner.",
              "Conclusion : l'ironie dénonce l'esclavage plus efficacement qu'un discours direct, car le lecteur découvre lui-même l'absurdité des justifications.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces phrases, lesquelles sont ironiques ? Justifiez. a) « Bravo, encore un vase cassé : vous êtes vraiment adroit ! » b) « Il fait froid ce matin, couvrez-vous. » c) « Quelle belle journée ! », dit-il en regardant la tempête par la fenêtre. d) « Ce restaurant est excellent, j'y retournerai. »",
              hint: "Cherchez un décalage entre ce qui est dit et la situation : c'est le signe d'une antiphrase.",
              solution: [
                "a) Ironique : « vraiment adroit » contredit le fait (un vase cassé) ; le locuteur pense le contraire, c'est une antiphrase.",
                "b) Pas ironique : la phrase dit exactement ce que pense le locuteur.",
                "c) Ironique : « belle journée » s'oppose à la tempête ; le contexte révèle l'antiphrase.",
                "d) Pas ironique, en l'absence d'indice contraire : rien ne contredit l'éloge.",
              ],
            },
            {
              level: 2,
              statement: "Dans Candide (1759), Voltaire écrit à propos d'une bataille : « Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées. » Quelques lignes plus loin, il parle de « boucherie héroïque ». a) Quelle impression donne la première phrase ? b) Relevez le procédé de répétition et dites son effet. c) Expliquez l'expression « boucherie héroïque ». d) Que dénonce Voltaire ?",
              hint: "Comparez le vocabulaire de la première phrase (beauté, ordre) à la réalité d'une bataille. Pour c), demandez-vous si les deux mots vont ensemble.",
              solution: [
                "a) La première phrase donne l'impression d'un spectacle magnifique, presque d'une fête : c'est un éloge.",
                "b) La répétition de « si » devant quatre adjectifs mélioratifs (beau, leste, brillant, ordonné) crée une gradation enthousiaste ; cet éloge excessif paraît suspect.",
                "c) « Boucherie héroïque » est un oxymore : « boucherie » évoque un massacre sanglant, « héroïque » la gloire. Le rapprochement révèle que la prétendue gloire militaire cache un carnage.",
                "d) Voltaire dénonce la guerre et ceux qui la présentent comme glorieuse : l'éloge de la première phrase est ironique, et l'oxymore en révèle le vrai sens.",
              ],
            },
            {
              level: 3,
              statement: "Sujet d'écriture de type brevet. Rédigez un paragraphe satirique d'une dizaine de lignes qui dénonce un travers de notre société (par exemple l'usage excessif du téléphone portable). Vous emploierez au moins deux procédés étudiés (antiphrase, exagération, regard étranger, fausse naïveté), puis vous indiquerez lesquels vous avez utilisés.",
              hint: "Le regard étranger est efficace : imaginez un visiteur venu d'une autre planète, ou d'une autre époque, qui décrit avec admiration ce qu'il voit.",
              solution: [
                "Choisir la cible : l'usage excessif du téléphone portable, qui coupe les gens les uns des autres.",
                "Choisir les procédés : le regard étranger (un voyageur venu d'une planète lointaine), l'antiphrase (il admire ce qu'il faudrait regretter) et l'exagération.",
                "Paragraphe possible : « Les habitants de cette planète ont fait une découverte admirable : ils n'ont plus besoin de se regarder. Chacun tient devant ses yeux une petite plaque lumineuse qu'il caresse du pouce, avec une tendresse qu'il ne réserve plus à personne. Au restaurant, les familles dînent en silence, chacune penchée sur sa plaque : quelle merveilleuse harmonie ! J'ai même vu un jeune homme traverser la rue sans lever les yeux ; il a frôlé une voiture, mais il n'a rien remarqué, tant sa plaque était passionnante. Je rentrerai chez moi convaincu que ce peuple est le plus sociable de l'univers. »",
                "Procédés utilisés : regard étranger (le voyageur qui ne connaît pas les téléphones et les appelle « plaques lumineuses ») ; antiphrase (« découverte admirable », « merveilleuse harmonie », « le plus sociable ») ; exagération (« une tendresse qu'il ne réserve plus à personne ») ; fausse naïveté (le narrateur ne voit pas le danger).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : satire et ironie.",
            statements: [
              { text: "L'antiphrase consiste à dire le contraire de ce que l'on pense.", true: true, why: "C'est le procédé de base de l'ironie : le lecteur doit comprendre le sens inverse." },
              { text: "Un texte satirique cherche seulement à faire rire.", true: false, why: "Le rire est un moyen : la satire cherche surtout à dénoncer et à faire réfléchir." },
              { text: "Dans les Lettres persanes, des Persans découvrent Paris.", true: true, why: "Usbek et Rica décrivent les mœurs françaises avec un regard étranger." },
              { text: "« Boucherie héroïque » est une comparaison.", true: false, why: "C'est un oxymore : deux mots de sens opposés sont rapprochés, sans outil de comparaison." },
              { text: "L'ironie risque d'être mal comprise si le lecteur la prend au premier degré.", true: true, why: "Faute de repérer les indices, le lecteur croit que l'auteur défend ce qu'il critique." },
              { text: "Montesquieu défend réellement l'esclavage dans De l'esprit des lois.", true: false, why: "Il fait semblant d'en reprendre les arguments pour en montrer l'absurdité : c'est de l'ironie." },
            ],
          },
          quiz: [
            { q: "Quel procédé consiste à faire décrire une société par un personnage venu d'ailleurs ?", options: ["L'antiphrase", "L'hyperbole", "Le regard étranger", "La litote"], answer: 2, why: "Le regard étranger fait paraître étranges des habitudes que l'on croyait naturelles, comme dans les Lettres persanes." },
            { q: "Qui a écrit Candide (1759) ?", options: ["Montesquieu", "La Bruyère", "Molière", "Voltaire"], answer: 3, why: "Candide est un conte philosophique de Voltaire, qui dénonce notamment la guerre, le fanatisme et l'esclavage." },
            { q: "« Quel courage ! » dit-on à quelqu'un qui s'enfuit devant une araignée. C'est...", options: ["une antiphrase", "une métaphore", "une comparaison", "un euphémisme"], answer: 0, why: "Le locuteur dit le contraire de ce qu'il pense : c'est une antiphrase, procédé de l'ironie." },
            { q: "Dans Les Caractères (1688), La Bruyère...", options: ["raconte sa vie", "dresse des portraits satiriques", "écrit des fables en vers"], answer: 1, why: "Ses portraits types, comme Giton et Phédon, ridiculisent les défauts de la société de son temps." },
            { q: "Pourquoi l'ironie implique-t-elle le lecteur ?", options: ["Parce qu'elle lui pose des questions directes", "Parce qu'il doit repérer les indices et rétablir le vrai sens", "Parce qu'elle est écrite au futur", "Parce qu'elle utilise toujours le « vous »"], answer: 1, why: "Le sens véritable n'est pas écrit : le lecteur doit le reconstruire, ce qui le rend complice de l'auteur." },
          ],
          trap: "Prendre un texte ironique au premier degré : avant de conclure, cherchez les indices (exagération, contradiction avec les faits, absurdité de l'argument) qui montrent que l'auteur pense le contraire.",
          method: "Pour analyser l'ironie, rédigez en trois temps : ce que le texte dit (sens littéral), l'indice qui trahit l'ironie (exagération, décalage), ce que l'auteur pense vraiment et ce qu'il dénonce.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'apologue',
          title: "L'apologue : fables et contes pour dénoncer",
          minutes: 30,
          objectives: [
            "Définir l'apologue et en reconnaître les formes : fable, conte philosophique, parabole.",
            "Distinguer le récit et la morale, explicite ou implicite.",
            "Analyser comment un récit bref sert à dénoncer et à argumenter, en plaisant et en instruisant.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un apologue ?",
              paragraphs: [
                "Un apologue est un court récit qui illustre une leçon, une morale. C'est une argumentation indirecte : au lieu d'exposer une idée par un raisonnement, l'auteur raconte une histoire dont le lecteur tire lui-même l'enseignement. L'apologue vise à la fois à plaire (par l'histoire) et à instruire (par la leçon).",
                "Jean de La Fontaine, dans la préface de ses Fables (1668), en donne une image célèbre : « L'apologue est composé de deux parties, dont on peut appeler l'une le corps, l'autre l'âme. Le corps est la fable ; l'âme, la moralité. » Le récit est le corps visible ; la leçon est ce qui lui donne son sens.",
              ],
              box: { label: "Définition", text: "L'apologue est un récit bref, souvent symbolique, qui illustre une morale. Ses principales formes sont la fable, le conte philosophique et la parabole. Il cherche à plaire et à instruire." },
            },
            {
              heading: "La fable",
              paragraphs: [
                "La fable est un court récit, souvent en vers, qui met en scène des animaux personnifiés représentant des types humains : le lion est le roi puissant, le renard le flatteur rusé, l'agneau l'innocent. La Fontaine reprend des sujets du Grec Ésope (VIe siècle avant J.-C.) et du Latin Phèdre (Ier siècle), et publie ses Fables de 1668 à 1694. Il écrit lui-même : « Je me sers d'animaux pour instruire les hommes. »",
                "La morale peut être explicite (formulée dans le texte, au début ou à la fin) ou implicite (le lecteur doit la déduire). Dans « Le Loup et l'Agneau », elle ouvre la fable : « La raison du plus fort est toujours la meilleure ». Ce n'est pas un conseil mais un constat amer : le récit montre un loup qui finit par dévorer un agneau innocent, alors que celui-ci a réfuté toutes ses accusations.",
                "La fable dénonce souvent les abus de pouvoir. Dans « Les Animaux malades de la peste », le lion, le tigre et l'ours avouent des crimes graves mais sont excusés, tandis que l'âne, qui a seulement brouté un peu d'herbe, est condamné. La morale conclut : « Selon que vous serez puissant ou misérable, / Les jugements de cour vous rendront blanc ou noir. » La Fontaine critique ainsi la justice et la cour de son temps.",
              ],
            },
            {
              heading: "Le conte philosophique et les autres formes",
              paragraphs: [
                "Le conte philosophique, genre du XVIIIe siècle, raconte les aventures d'un personnage souvent naïf qui voyage et découvre le monde. Voltaire en est le maître : Zadig (1747), Micromégas (1752), Candide (1759). Dans Candide, le héros, élevé dans l'idée que « tout est au mieux », découvre la guerre, le fanatisme, l'esclavage ; le conte dénonce cet optimisme aveugle et se termine par la célèbre formule : « il faut cultiver notre jardin ».",
                "La parabole est un récit symbolique à portée morale ou religieuse, comme les paraboles des Évangiles (le fils prodigue). Les contes de Perrault (1697) se terminent par des moralités. Au XXe siècle, George Orwell, dans La Ferme des animaux (1945), écrit une fable politique : les animaux renversent le fermier, mais les cochons qui prennent le pouvoir deviennent des tyrans, ce qui dénonce le totalitarisme.",
              ],
              box: { label: "Repère", text: "Fable : animaux personnifiés, souvent en vers (Ésope, La Fontaine). Conte philosophique : héros naïf, voyages, critique de la société (Voltaire). Parabole : récit symbolique, morale ou religieuse. Fable politique moderne : Orwell." },
            },
            {
              heading: "Pourquoi l'apologue est-il efficace ?",
              paragraphs: [
                "L'apologue convainc par le récit : une histoire concrète frappe l'imagination et se retient mieux qu'un raisonnement abstrait. Le détour par les animaux ou par des pays imaginaires permet de critiquer les puissants sans les nommer, donc d'échapper à la censure ou d'éviter de blesser directement.",
                "Enfin, l'apologue rend le lecteur actif : c'est lui qui interprète le récit et en tire la leçon, ce qui la rend plus convaincante. Quand la morale est implicite, ou ironique comme dans « Le Loup et l'Agneau », il doit encore davantage réfléchir.",
              ],
              box: { label: "À retenir", text: "L'apologue est une argumentation indirecte : il plaît par le récit, instruit par la morale, critique sans nommer et laisse le lecteur tirer lui-même la leçon." },
            },
          ],
          keyPoints: [
            "Apologue : court récit qui illustre une morale ; argumentation indirecte.",
            "Le corps (le récit) et l'âme (la morale), selon La Fontaine (1668).",
            "Fable : animaux personnifiés représentant des types humains ; morale explicite ou implicite.",
            "Conte philosophique : héros naïf qui découvre le monde ; Voltaire, Candide (1759).",
            "Autres formes : parabole, conte à moralité (Perrault), fable politique (Orwell).",
            "L'apologue plaît et instruit, critique sans nommer et rend le lecteur actif.",
          ],
          example: {
            statement: "Dans « Le Loup et l'Agneau », la morale est placée au début : « La raison du plus fort est toujours la meilleure ». L'agneau répond à chaque accusation du loup, qui finit pourtant par l'emporter et le manger « sans autre forme de procès ». Expliquez la leçon de cette fable.",
            solution: [
              "Repérer la place de la morale : elle est explicite et placée au début, puis le récit sert à la démontrer.",
              "Résumer le récit : le loup accuse l'agneau de troubler son eau, puis d'avoir dit du mal de lui ; l'agneau prouve chaque fois son innocence (il boit plus bas dans le courant, il n'était pas encore né).",
              "Analyser le dénouement : malgré ces réponses, le loup dévore l'agneau. L'expression « sans autre forme de procès » rappelle le vocabulaire de la justice et montre qu'il n'y a pas eu de jugement.",
              "Interpréter la morale : « la raison du plus fort » ne désigne pas le meilleur argument, mais le droit que s'arroge le plus puissant. Le mot « meilleure » est ironique : la force l'emporte, non la justice.",
              "Conclure : La Fontaine ne conseille pas d'agir comme le loup ; il dénonce l'injustice des puissants, qui cherchent des prétextes pour écraser les faibles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez la forme d'apologue décrite. a) Un court récit en vers où un renard flatte un corbeau pour lui voler son fromage. b) Un récit en prose du XVIIIe siècle où un jeune homme naïf voyage et découvre les malheurs du monde. c) Un récit des Évangiles où un fils dépense son héritage puis est pardonné par son père. d) Un roman de 1945 où des animaux chassent le fermier, puis subissent la tyrannie des cochons.",
              hint: "Animaux et vers : fable. Héros naïf et voyage : conte philosophique. Récit religieux : parabole.",
              solution: [
                "a) Une fable : « Le Corbeau et le Renard » de La Fontaine, avec des animaux personnifiés.",
                "b) Un conte philosophique : il s'agit de Candide de Voltaire (1759).",
                "c) Une parabole : la parabole du fils prodigue, récit symbolique à portée religieuse.",
                "d) Une fable politique : La Ferme des animaux de George Orwell, qui dénonce le totalitarisme.",
              ],
            },
            {
              level: 2,
              statement: "À la fin de « Le Corbeau et le Renard », le renard, qui a obtenu le fromage en flattant le corbeau, lui dit : « Apprenez que tout flatteur / Vit aux dépens de celui qui l'écoute. » a) Quel défaut humain la fable dénonce-t-elle ? b) Qui formule la morale, et qu'a-t-elle de surprenant ? c) Reformulez la morale avec vos propres mots. d) Quels types humains le corbeau et le renard représentent-ils ?",
              hint: "Observez le personnage qui prononce la leçon : est-ce le narrateur ? Que vient de faire ce personnage ?",
              solution: [
                "a) La fable dénonce la vanité, qui rend sensible à la flatterie, et la flatterie elle-même.",
                "b) C'est le renard qui formule la morale, et non le narrateur. C'est surprenant, car le flatteur explique lui-même sa ruse à sa victime, avec ironie, après en avoir profité.",
                "c) Reformulation : celui qui fait des compliments cherche souvent à tirer un profit de la personne qui l'écoute ; il faut donc se méfier des flatteurs.",
                "d) Le corbeau représente le vaniteux, naïf et fier de lui ; le renard représente le flatteur rusé et intéressé.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Dans « Les Animaux malades de la peste », les animaux cherchent le coupable dont le sacrifice mettra fin à l'épidémie. Le lion avoue avoir dévoré des moutons et parfois le berger ; le renard l'excuse en le flattant ; les autres puissants sont excusés aussi. L'âne avoue avoir brouté un peu d'herbe dans un pré qui ne lui appartenait pas : tous le désignent comme coupable. La morale dit : « Selon que vous serez puissant ou misérable, / Les jugements de cour vous rendront blanc ou noir. » a) Relevez les deux antithèses de la morale et expliquez-les. b) Que dénonce La Fontaine ? c) En un paragraphe, répondez : un récit plaisant est-il plus efficace qu'un discours direct pour dénoncer une injustice ?",
              hint: "Une antithèse oppose deux mots de sens contraire. Pour c), pensez à la mémoire du lecteur, à la censure et au rôle actif du lecteur.",
              solution: [
                "a) Les antithèses sont « puissant / misérable » et « blanc / noir ». La première oppose les deux catégories sociales ; la seconde, l'innocence (blanc) et la culpabilité (noir). Leur mise en parallèle montre que le jugement dépend du rang social, non des actes.",
                "b) La Fontaine dénonce une justice partiale qui épargne les puissants (le lion, qui a pourtant mangé le berger) et accable les faibles (l'âne, coupable d'une faute minuscule) ; il vise la cour et la société de son temps.",
                "c) Paragraphe possible : « Un récit plaisant est souvent plus efficace qu'un discours direct. D'abord, l'histoire de l'âne condamné pour un peu d'herbe frappe l'imagination et se retient facilement. Ensuite, le détour par les animaux permettait à La Fontaine de critiquer la justice de la cour sans risquer la censure. Enfin, le lecteur, indigné par le sort de l'âne, tire lui-même la leçon, ce qui la rend plus convaincante. Un discours direct a cependant l'avantage de la clarté, alors que la fable peut être lue comme un simple divertissement. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque œuvre à son auteur.",
            pairs: [
              { left: "Fables (1668-1694)", right: "Jean de La Fontaine" },
              { left: "Candide (1759)", right: "Voltaire" },
              { left: "Histoires ou contes du temps passé (1697)", right: "Charles Perrault" },
              { left: "La Ferme des animaux (1945)", right: "George Orwell" },
              { left: "Fables grecques (VIe siècle av. J.-C.)", right: "Ésope" },
            ],
          },
          quiz: [
            { q: "Selon La Fontaine, la morale est...", options: ["le corps de l'apologue", "le titre de la fable", "l'âme de l'apologue", "le premier vers"], answer: 2, why: "« Le corps est la fable ; l'âme, la moralité » : la morale donne son sens au récit." },
            { q: "Comment se termine Candide de Voltaire ?", options: ["« Tout est au mieux. »", "« Il faut cultiver notre jardin. »", "« La raison du plus fort est toujours la meilleure. »", "« Tout flatteur vit aux dépens de celui qui l'écoute. »"], answer: 1, why: "La formule finale invite à agir modestement et concrètement, plutôt qu'à croire aveuglément que tout va bien." },
            { q: "Une morale implicite est une morale...", options: ["placée au début", "écrite en vers", "que le lecteur doit déduire", "dite par le narrateur"], answer: 2, why: "Implicite signifie non formulée : le lecteur la tire lui-même du récit." },
            { q: "Pourquoi La Fontaine met-il en scène des animaux ?", options: ["Pour amuser les enfants seulement", "Pour faire des récits scientifiques", "Pour décrire la campagne", "Pour instruire les hommes de façon indirecte"], answer: 3, why: "Les animaux représentent des types humains ; ce détour permet de critiquer sans nommer." },
            { q: "« La raison du plus fort est toujours la meilleure » est...", options: ["un constat amer", "un conseil de La Fontaine", "une loi de la nature à imiter"], answer: 0, why: "La Fontaine constate que la force l'emporte sur la justice ; le récit dénonce cette réalité." },
          ],
          trap: "Croire que la morale d'une fable est toujours un conseil : « La raison du plus fort est toujours la meilleure » décrit une injustice pour la dénoncer, elle n'invite pas à l'imiter.",
          method: "Pour analyser un apologue, faites deux colonnes : à gauche le récit (personnages, actions, dénouement), à droite ce que chaque élément représente dans la société réelle. La morale apparaît au croisement des deux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'caricature-dessin-presse',
          title: "Caricature et dessin de presse : lire une image qui dénonce",
          minutes: 30,
          objectives: [
            "Analyser une caricature ou un dessin de presse : identifier, décrire, interpréter.",
            "Identifier les procédés de l'image satirique : exagération, symbole, décalage, relation entre le texte et l'image.",
            "Situer le dessin de presse dans l'histoire de la liberté d'expression.",
          ],
          course: [
            {
              heading: "Caricature et dessin de presse",
              paragraphs: [
                "Le mot caricature vient de l'italien caricare, « charger » : une caricature est un portrait qui exagère les traits physiques ou les défauts d'une personne pour s'en moquer. Un grand nez devient immense, un ventre rond devient énorme. La caricature ne cherche pas la ressemblance exacte mais la reconnaissance immédiate et le ridicule.",
                "Le dessin de presse est un dessin publié dans un journal, qui commente l'actualité de façon souvent humoristique. Il utilise fréquemment la caricature, mais aussi des scènes inventées, des symboles et des textes courts. On le compare à un éditorial en image : en quelques traits, il donne un point de vue et fait réfléchir le lecteur.",
              ],
              box: { label: "Définition", text: "Caricature : portrait qui exagère les traits d'une personne pour la ridiculiser. Dessin de presse : dessin publié dans un journal, qui commente l'actualité et exprime un point de vue, souvent avec humour." },
            },
            {
              heading: "Une histoire liée à la liberté d'expression",
              paragraphs: [
                "Au XIXe siècle, la caricature politique se développe avec la presse illustrée. En 1831, lors de son procès, le journaliste Charles Philipon montre comment le visage du roi Louis-Philippe peut se transformer progressivement en poire : la poire devient le symbole moqueur du roi. La même année, Honoré Daumier publie Gargantua, qui représente le roi en géant dévorant l'argent pris au peuple ; il est condamné à six mois de prison.",
                "La loi du 29 juillet 1881 sur la liberté de la presse, toujours en vigueur, garantit en France la liberté de publier, dans certaines limites (la diffamation, l'injure, la provocation à la haine sont punies). Pendant l'affaire Dreyfus, Caran d'Ache publie en 1898 « Un dîner en famille » : une famille calme décide de ne pas parler de l'affaire, puis la seconde image montre une bagarre générale, avec la légende « Ils en ont parlé... ». Le dessin montre combien l'affaire divise la France.",
                "Aujourd'hui encore, le dessin de presse est un symbole de la liberté d'expression. Le dessinateur Plantu a fondé en 2006, avec Kofi Annan, l'association Cartooning for Peace. Le 7 janvier 2015, l'attentat contre la rédaction de Charlie Hebdo a tué douze personnes, dont les dessinateurs Cabu, Charb, Honoré, Tignous et Wolinski, rappelant que cette liberté peut être menacée.",
              ],
            },
            {
              heading: "Les procédés de l'image satirique",
              paragraphs: [
                "L'exagération déforme les traits (grosse tête sur un petit corps, traits amplifiés) ; la simplification ne garde que l'essentiel pour être lue en un coup d'œil. Les symboles condensent une idée : la colombe pour la paix, la balance pour la justice, Marianne pour la République, la poire pour Louis-Philippe. L'animalisation transforme une personne en animal pour souligner un défaut (un requin pour la cupidité).",
                "Le décalage et l'absurde créent la surprise : une situation grave traitée de façon banale, ou l'inverse. Les références culturelles (un tableau célèbre détourné, un personnage de conte comme Pinocchio dont le nez s'allonge) parlent au lecteur. Enfin, le texte compte autant que l'image : le titre, la légende et les bulles complètent le dessin, le contredisent (ironie) ou contiennent un jeu de mots.",
              ],
              box: { label: "Repère", text: "Procédés : exagération, simplification, symbole, animalisation, décalage, référence culturelle, jeu entre l'image et le texte (titre, légende, bulles)." },
            },
            {
              heading: "Méthode d'analyse d'un dessin de presse",
              paragraphs: [
                "1) Identifier : l'auteur, le journal, la date, et l'événement d'actualité commenté (sans contexte, un dessin de presse est souvent incompréhensible). 2) Décrire : les personnages, les objets, le décor, la composition, les couleurs, le texte. 3) Interpréter : repérer les procédés, la cible visée et le message. 4) Juger : le dessin est-il efficace, drôle, choquant, et pourquoi ?",
                "Un dessin de presse peut choquer, et c'est parfois son but : provoquer la réflexion. La liberté d'expression protège le droit de critiquer les idées, les pouvoirs et les croyances, dans les limites fixées par la loi. Analyser un dessin, c'est aussi comprendre ce débat et apprendre à distinguer la critique d'une idée de l'attaque contre des personnes.",
              ],
              box: { label: "À retenir", text: "Lire un dessin de presse : identifier (auteur, date, contexte), décrire (ce que l'on voit et lit), interpréter (procédés, cible, message), juger (efficacité)." },
            },
          ],
          keyPoints: [
            "Caricature (de l'italien caricare, charger) : portrait exagéré qui ridiculise.",
            "Dessin de presse : commentaire de l'actualité en image, comparable à un éditorial.",
            "Repères : la poire de Louis-Philippe (1831), Daumier, loi du 29 juillet 1881, Caran d'Ache (1898), Charlie Hebdo (2015).",
            "Procédés : exagération, symbole, animalisation, décalage, référence culturelle, jeu texte et image.",
            "Méthode : identifier, décrire, interpréter, juger.",
            "Le dessin de presse est un symbole de la liberté d'expression, encadrée par la loi.",
          ],
          example: {
            statement: "En 1898, en pleine affaire Dreyfus, Caran d'Ache publie dans Le Figaro « Un dîner en famille », en deux images. Dans la première, une famille est réunie autour d'une table et le père déclare : « Surtout ! ne parlons pas de l'affaire Dreyfus ! » Dans la seconde, la table est renversée et tous les convives se battent ; la légende indique : « Ils en ont parlé... » Analysez ce dessin.",
            solution: [
              "Identifier : dessin de presse de Caran d'Ache, publié en 1898 dans Le Figaro, pendant l'affaire Dreyfus, qui oppose les partisans et les adversaires de la révision du procès du capitaine Dreyfus.",
              "Décrire la première image : une scène calme et ordonnée, une famille bourgeoise à table ; la bulle exprime une précaution.",
              "Décrire la seconde image : le désordre total, la vaisselle brisée, les convives qui se battent ; la légende est très courte.",
              "Interpréter les procédés : le contraste entre les deux images crée l'effet comique ; les points de suspension de la légende laissent le lecteur imaginer la dispute ; l'exagération (une bagarre générale) souligne la violence des passions.",
              "Dégager le message : l'affaire Dreyfus divise la France jusqu'au cœur des familles ; il suffit d'en parler pour que la discorde éclate.",
              "Juger : le dessin est efficace car il est compris immédiatement, grâce à la simplicité de la construction en deux temps et à l'économie du texte.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque symbole à ce qu'il représente habituellement dans un dessin de presse : a) la colombe ; b) la balance ; c) Marianne ; d) la poire (au XIXe siècle) ; e) le requin. Propositions : la République française, la justice, la paix, l'avidité ou la cupidité, le roi Louis-Philippe.",
              hint: "Pensez aux symboles officiels (la justice, la République) et aux images que l'on associe aux animaux.",
              solution: [
                "a) La colombe : la paix.",
                "b) La balance : la justice.",
                "c) Marianne : la République française.",
                "d) La poire : le roi Louis-Philippe, depuis le dessin de Philipon en 1831.",
                "e) Le requin : l'avidité ou la cupidité (le requin dévore tout).",
              ],
            },
            {
              level: 2,
              statement: "Dessin imaginé pour l'exercice : un homme politique souriant parle devant un micro ; sur une banderole derrière lui, on lit « Je tiendrai toutes mes promesses ». Son nez est si long qu'il traverse toute l'image et sert de perchoir à des oiseaux. a) Quelle référence culturelle reconnaissez-vous ? b) Relevez deux procédés. c) Quel est le message du dessin ? d) Comment le texte et l'image fonctionnent-ils ensemble ?",
              hint: "Quel personnage de conte voit son nez s'allonger quand il ment ?",
              solution: [
                "a) La référence est Pinocchio, le pantin dont le nez s'allonge à chaque mensonge.",
                "b) Procédés : l'exagération (un nez qui traverse l'image), l'absurde (des oiseaux perchés dessus) et la référence culturelle.",
                "c) Message : les promesses de cet homme politique sont des mensonges ; plus largement, le dessin dénonce les promesses électorales non tenues.",
                "d) Le texte et l'image se contredisent : la banderole affirme la sincérité, le nez prouve le mensonge. Ce décalage crée l'ironie.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Dans Gargantua (1831), Honoré Daumier représente le roi Louis-Philippe en géant au ventre énorme, assis sur un trône ; une longue planche monte jusqu'à sa bouche, et des serviteurs y portent des paniers remplis de pièces prises à des gens pauvres et amaigris, tandis que des notables, sous le trône, recueillent les faveurs qu'il distribue. a) Quelle œuvre littéraire le titre rappelle-t-il, et pourquoi ce choix ? b) Relevez deux procédés satiriques et leur effet. c) Que dénonce Daumier ? d) Daumier a été condamné à six mois de prison : que montre cette condamnation ? Répondez en quelques lignes.",
              hint: "Gargantua est un géant de Rabelais, célèbre pour son appétit. Pour d), pensez à la liberté de la presse avant la loi de 1881.",
              solution: [
                "a) Le titre rappelle Gargantua de Rabelais (XVIe siècle), un géant à l'appétit démesuré. Ce choix fait du roi un ogre qui engloutit tout.",
                "b) Procédés : le gigantisme et l'exagération (le ventre énorme), qui ridiculisent le roi et soulignent sa gloutonnerie ; le contraste entre le roi obèse et le peuple amaigri, qui rend l'injustice évidente.",
                "c) Daumier dénonce les impôts qui appauvrissent le peuple au profit du roi et de son entourage de notables favorisés : c'est une critique de la monarchie de Juillet et de ses privilèges.",
                "d) La condamnation montre que la liberté de la presse était alors limitée : critiquer le roi pouvait mener en prison. Elle prouve aussi la force de la caricature, que le pouvoir jugeait dangereuse. Il faudra attendre la loi du 29 juillet 1881 pour que la liberté de la presse soit largement garantie.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'analyse d'un dessin de presse.",
            items: [
              "Identifier l'auteur, le journal et la date",
              "Retrouver l'événement d'actualité commenté",
              "Décrire les personnages, les objets et le décor",
              "Lire le texte : titre, légende, bulles",
              "Repérer les procédés : exagération, symboles, décalage",
              "Formuler la cible et le message du dessin",
              "Juger l'efficacité du dessin",
            ],
          },
          quiz: [
            { q: "D'où vient le mot « caricature » ?", options: ["Du latin satura, mélange", "Du grec graphein, écrire", "De l'anglais cartoon", "De l'italien caricare, charger"], answer: 3, why: "Caricaturer, c'est « charger » un portrait, c'est-à-dire en exagérer les traits." },
            { q: "Quel objet est devenu au XIXe siècle le symbole moqueur du roi Louis-Philippe ?", options: ["Une poire", "Une couronne", "Un parapluie"], answer: 0, why: "En 1831, Charles Philipon montre comment le visage du roi se transforme en poire." },
            { q: "Quelle loi garantit la liberté de la presse en France ?", options: ["La loi du 9 décembre 1905", "La loi du 29 juillet 1881", "La loi du 4 août 1789", "La loi du 10 mai 2001"], answer: 1, why: "La loi du 29 juillet 1881 sur la liberté de la presse est toujours en vigueur." },
            { q: "Dans un dessin de presse, la colombe symbolise le plus souvent...", options: ["la justice", "la République", "la paix", "la richesse"], answer: 2, why: "La colombe, souvent avec un rameau d'olivier, est le symbole traditionnel de la paix." },
            { q: "Quand la légende contredit ce que montre l'image, cela crée...", options: ["une ironie", "une erreur du dessinateur", "une simple description"], answer: 0, why: "Le décalage entre le texte et l'image fait comprendre le contraire de ce qui est écrit : c'est un procédé ironique." },
          ],
          trap: "Décrire le dessin sans le replacer dans son contexte : un dessin de presse commente une actualité précise, et sans elle on passe à côté de la cible et du message.",
          method: "Avant d'interpréter un dessin, faites l'inventaire de tout ce que vous voyez et lisez, du premier plan à l'arrière-plan, puis associez à chaque détail une intention : « le dessinateur exagère ce trait pour... ».",
        },
      ],
    },
    {
      id: 'verbe-temps-modes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'valeurs-temps-recit',
          title: "Les valeurs des temps dans le récit",
          minutes: 35,
          objectives: [
            "Identifier les temps de l'indicatif employés dans un récit.",
            "Expliquer la valeur de l'imparfait, du passé simple, du plus-que-parfait, du passé antérieur et du passé composé.",
            "Distinguer les valeurs du présent : énonciation, narration, vérité générale, habitude.",
            "Employer les temps de façon cohérente dans un récit au passé.",
          ],
          course: [
            {
              heading: "Deux systèmes de temps",
              paragraphs: [
                "Un texte peut être ancré dans la situation d'énonciation, c'est-à-dire lié au moment où l'on parle : c'est le cas d'une lettre, d'un dialogue, d'un journal. Il utilise alors le présent, le passé composé et le futur : « Hier, j'ai vu ce film ; demain, je le reverrai. »",
                "Un récit peut aussi être coupé de la situation d'énonciation : les faits sont présentés comme achevés, sans lien avec le moment où l'on écrit. On utilise alors le système du passé simple : passé simple, imparfait, plus-que-parfait, passé antérieur, et le conditionnel pour exprimer le futur dans le passé. C'est le système des contes et de la plupart des romans : « Il était une fois un roi qui avait trois filles. Un jour, il les appela... »",
              ],
            },
            {
              heading: "Passé simple et imparfait : premier plan et arrière-plan",
              paragraphs: [
                "Le passé simple exprime des actions ponctuelles, achevées, souvent successives, qui font avancer l'histoire : c'est le premier plan du récit. « Il ouvrit la porte, entra et alluma la lumière. » On le trouve souvent après des indicateurs comme « soudain », « tout à coup », « un jour ».",
                "L'imparfait exprime l'arrière-plan : la description (« La mer était calme »), les actions en cours dont on ne voit ni le début ni la fin (« Il lisait »), les habitudes et répétitions (« Chaque soir, il lisait une heure »). Une action à l'imparfait est souvent interrompue par une action au passé simple : « Il lisait quand le téléphone sonna. »",
                "Une analogie aide à retenir : au théâtre, l'imparfait installe le décor et l'éclairage, le passé simple fait agir les personnages. Attention aux terminaisons à la première personne du singulier : « je marchai » (passé simple) et « je marchais » (imparfait) se prononcent presque de la même façon ; mettez le verbe à la troisième personne pour vérifier (il marcha, il marchait).",
              ],
              box: { label: "Règle", text: "Passé simple : actions ponctuelles, achevées, successives (premier plan). Imparfait : description, action en cours, habitude ou répétition (arrière-plan). L'imparfait est souvent interrompu par un passé simple." },
            },
            {
              heading: "Exprimer l'antériorité et le futur dans le passé",
              paragraphs: [
                "Le plus-que-parfait (auxiliaire à l'imparfait + participe passé) exprime un fait antérieur à un autre fait passé : « Il avait plu toute la nuit ; la route était glissante. » Il permet un retour en arrière dans le récit. Le passé antérieur (auxiliaire au passé simple + participe passé) exprime un fait immédiatement antérieur à un fait au passé simple, souvent après quand, lorsque, dès que, après que : « Dès qu'il eut fini, il sortit. »",
                "Pour exprimer un fait futur par rapport à un moment passé, on emploie le conditionnel présent, appelé alors futur dans le passé : « Il savait qu'il réussirait. » Comparez : « Il sait qu'il réussira » (présent et futur) devient, au passé, « Il savait qu'il réussirait ». Le conditionnel passé exprime de même un futur antérieur dans le passé : « Il pensait qu'il aurait fini avant midi. »",
              ],
              box: { label: "Repère", text: "Plus-que-parfait : antériorité par rapport à un fait passé. Passé antérieur : antériorité immédiate par rapport à un passé simple. Conditionnel présent : futur dans le passé (il savait qu'il viendrait)." },
            },
            {
              heading: "Les valeurs du présent et du passé composé",
              paragraphs: [
                "Le présent n'exprime pas toujours le moment présent. Le présent d'énonciation renvoie au moment où l'on parle ou écrit : « En ce moment, j'écris. » Le présent de narration raconte des faits passés pour les rendre plus vivants : « Il marchait tranquillement. Soudain, une ombre surgit devant lui. » Le présent de vérité générale exprime un fait toujours vrai (proverbes, définitions, morales) : « L'eau bout à 100 °C. » Le présent d'habitude exprime une action répétée : « Chaque matin, il court une heure. »",
                "Le passé composé exprime un fait passé en lien avec le présent de l'énonciation, ou dont le résultat est encore visible : « J'ai perdu mes clés » (et je ne les ai toujours pas). Dans de nombreux récits modernes à la première personne, il remplace le passé simple : L'Étranger d'Albert Camus (1942) commence par « Aujourd'hui, maman est morte. » Ce choix donne au récit le ton d'une parole proche et directe.",
              ],
              box: { label: "À retenir", text: "Présent d'énonciation (maintenant), de narration (faits passés rendus vivants), de vérité générale (toujours vrai), d'habitude (répétition). Passé composé : fait passé lié au présent." },
            },
          ],
          keyPoints: [
            "Récit au passé : passé simple (premier plan) et imparfait (arrière-plan).",
            "Passé simple : actions ponctuelles et successives ; imparfait : description, action en cours, habitude.",
            "Plus-que-parfait : antériorité ; passé antérieur : antériorité immédiate par rapport au passé simple.",
            "Conditionnel présent dans un récit au passé : futur dans le passé.",
            "Présent d'énonciation, de narration, de vérité générale, d'habitude.",
            "Passé composé : fait passé lié au présent ; fréquent dans les récits modernes à la première personne.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Il était minuit. La pluie tombait depuis des heures et la maison dormait. Soudain, un bruit retentit dans le grenier. Léa, qui avait lu des histoires de fantômes toute la soirée, se leva d'un bond. Elle savait qu'elle ne se rendormirait pas. » Identifiez le temps et la valeur de chaque verbe conjugué.",
            solution: [
              "« était », « tombait », « dormait » : imparfait de description ; ils installent le décor (arrière-plan). « tombait depuis des heures » souligne en plus la durée.",
              "« retentit » : passé simple ; action ponctuelle et soudaine, annoncée par « Soudain », qui lance l'événement (premier plan).",
              "« avait lu » : plus-que-parfait ; action antérieure aux faits racontés, qui explique la peur de Léa.",
              "« se leva » : passé simple ; action ponctuelle de premier plan, qui suit le bruit.",
              "« savait » : imparfait ; état mental, sans limite précise, à l'arrière-plan.",
              "« ne se rendormirait pas » : conditionnel présent, valeur de futur dans le passé : c'est un fait à venir par rapport au moment du récit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le temps et la valeur du verbe principal. a) Chaque été, nous partions chez nos cousins. b) La Terre tourne autour du Soleil. c) Il ouvrit la porte, entra et alluma la lumière. d) Quand il eut terminé son repas, il sortit. e) Elle promit qu'elle reviendrait.",
              hint: "Identifiez d'abord le temps, puis demandez-vous : décor ou action ? une fois ou souvent ? avant ou après un autre fait ?",
              solution: [
                "a) « partions » : imparfait d'habitude (action répétée, soulignée par « Chaque été »).",
                "b) « tourne » : présent de vérité générale (fait toujours vrai).",
                "c) « ouvrit », « entra », « alluma » : passé simple ; actions ponctuelles et successives de premier plan.",
                "d) « eut terminé » : passé antérieur ; action immédiatement antérieure à « sortit » (passé simple).",
                "e) « reviendrait » : conditionnel présent, valeur de futur dans le passé (le retour est à venir par rapport à la promesse).",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez les verbes entre parenthèses à l'imparfait ou au passé simple, et justifiez. « Le soleil (briller) et les oiseaux (chanter). Marc (marcher) tranquillement sur le chemin quand, tout à coup, un chien (surgir) devant lui. Il (s'arrêter), (reculer) d'un pas et (appeler) à l'aide. »",
              hint: "Le décor et l'action en cours se mettent à l'imparfait ; l'événement soudain et les réactions successives, au passé simple.",
              solution: [
                "« brillait », « chantaient » : imparfait de description (le décor).",
                "« marchait » : imparfait ; action en cours, interrompue par l'événement.",
                "« surgit » : passé simple ; action soudaine, annoncée par « tout à coup ».",
                "« s'arrêta », « recula », « appela » : passé simple ; actions successives de premier plan.",
                "Texte : « Le soleil brillait et les oiseaux chantaient. Marc marchait tranquillement sur le chemin quand, tout à coup, un chien surgit devant lui. Il s'arrêta, recula d'un pas et appela à l'aide. »",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet (réécriture et analyse). « Je pousse la porte de la classe. Tous les élèves me regardent. Je ne connais personne et j'ai envie de disparaître. Le professeur s'approche et me sourit. » a) Réécrivez ce passage au passé, en employant le passé simple et l'imparfait. b) Quelle est la valeur du présent dans : « Chacun sait que les premiers jours sont difficiles » ? c) Pourquoi un écrivain peut-il choisir de raconter une scène passée au présent ?",
              hint: "Les actions (pousser, s'approcher, sourire) passent au passé simple ; les états et sentiments (connaître, avoir envie) à l'imparfait.",
              solution: [
                "a) « Je poussai la porte de la classe. Tous les élèves me regardèrent. Je ne connaissais personne et j'avais envie de disparaître. Le professeur s'approcha et me sourit. »",
                "Justification : « poussai », « regardèrent », « s'approcha », « sourit » sont des actions ponctuelles et successives (passé simple) ; « connaissais » et « avais envie » expriment des états et des sentiments durables (imparfait). On pourrait aussi écrire « me regardaient » pour insister sur la durée du regard.",
                "b) C'est un présent de vérité générale : l'affirmation est présentée comme toujours vraie, pour tout le monde.",
                "c) Le présent de narration rend la scène plus vivante : le lecteur a l'impression de la vivre en même temps que le narrateur, ce qui renforce l'émotion et le suspense.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque exemple à la valeur du temps employé.",
            pairs: [
              { left: "La nuit tombait sur la ville.", right: "Imparfait de description" },
              { left: "Soudain, la porte claqua.", right: "Passé simple : action ponctuelle" },
              { left: "Il avait oublié ses clés.", right: "Plus-que-parfait : antériorité" },
              { left: "Il savait qu'elle viendrait.", right: "Conditionnel : futur dans le passé" },
              { left: "Qui veut voyager loin ménage sa monture.", right: "Présent de vérité générale" },
              { left: "Chaque dimanche, il allait au marché.", right: "Imparfait d'habitude" },
            ],
          },
          quiz: [
            { q: "Dans un récit au passé, quel temps exprime les actions de premier plan ?", options: ["L'imparfait", "Le plus-que-parfait", "Le conditionnel", "Le passé simple"], answer: 3, why: "Le passé simple raconte les actions ponctuelles et successives qui font avancer l'histoire." },
            { q: "« Il lisait quand on frappa à la porte. » L'imparfait exprime...", options: ["une habitude", "une vérité générale", "une action en cours interrompue", "une action future"], answer: 2, why: "La lecture est en cours au moment où survient l'action au passé simple." },
            { q: "Quel verbe est au passé antérieur ?", options: ["il eut fini", "il avait fini", "il a fini", "il aurait fini"], answer: 0, why: "Le passé antérieur se forme avec l'auxiliaire au passé simple (eut) et le participe passé." },
            { q: "« L'eau gèle à 0 °C. » Il s'agit d'un présent...", options: ["de narration", "d'énonciation", "d'habitude", "de vérité générale"], answer: 3, why: "C'est un fait toujours vrai, indépendant du moment où l'on parle." },
            { q: "Dans « Elle pensait qu'il partirait », « partirait » exprime...", options: ["une hypothèse", "une politesse", "un futur dans le passé"], answer: 2, why: "Le conditionnel exprime ici un fait à venir par rapport à un moment passé (« pensait »)." },
          ],
          trap: "Mettre au passé simple une description ou une habitude (« Chaque matin, il se leva tôt ») : l'imparfait s'impose pour l'arrière-plan et la répétition, le passé simple pour les actions ponctuelles.",
          method: "Pour choisir entre imparfait et passé simple, posez la question : est-ce le décor ou une habitude (imparfait), ou une action qui fait avancer l'histoire à un moment précis (passé simple) ? Vérifiez la terminaison à la troisième personne.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subjonctif-conditionnel',
          title: "Le subjonctif et le conditionnel : formes et emplois",
          minutes: 35,
          objectives: [
            "Conjuguer le subjonctif présent et passé, le conditionnel présent et passé.",
            "Identifier les emplois du subjonctif et du conditionnel.",
            "Distinguer le futur et le conditionnel à la première personne du singulier.",
            "Construire correctement une phrase de condition introduite par « si ».",
          ],
          course: [
            {
              heading: "Modes et temps : quelques repères",
              paragraphs: [
                "Le mode indique la manière dont le locuteur présente l'action. L'indicatif présente un fait comme réel, situé dans le temps : « Il vient. » Le subjonctif présente un fait comme envisagé, souhaité, redouté ou douteux : « Je veux qu'il vienne. » L'impératif exprime l'ordre ou le conseil : « Viens ! »",
                "Le conditionnel a longtemps été présenté comme un mode à part. La grammaire actuelle le range souvent parmi les temps de l'indicatif, mais beaucoup d'ouvrages parlent encore de « mode conditionnel ». L'essentiel, pour vous, est de connaître ses formes et ses différents emplois.",
              ],
            },
            {
              heading: "Le subjonctif : formes et emplois",
              paragraphs: [
                "Au subjonctif présent, la plupart des verbes prennent le radical de la troisième personne du pluriel de l'indicatif présent et les terminaisons -e, -es, -e, -ions, -iez, -ent : ils finissent donne « que je finisse, que nous finissions ». Exemples : que je chante, que tu chantes, qu'il chante, que nous chantions, que vous chantiez, qu'ils chantent. Verbes irréguliers à connaître : être (que je sois, que nous soyons), avoir (que j'aie, qu'il ait, que nous ayons), aller (que j'aille, que nous allions), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache), vouloir (que je veuille, que nous voulions).",
                "Le subjonctif passé se forme avec l'auxiliaire au subjonctif présent et le participe passé : « que j'aie fini », « qu'elle soit partie ». Il exprime un fait accompli par rapport à un autre. Dans les textes littéraires, vous rencontrerez aussi l'imparfait du subjonctif (« qu'il chantât », « qu'il fût ») : il suffit de savoir le reconnaître.",
                "Le subjonctif s'emploie surtout dans des subordonnées : après des verbes de volonté, de souhait, de sentiment, de doute ou de nécessité (« Il faut que vous partiez », « Je crains qu'il soit en retard ») et après certaines conjonctions (pour que, afin que, bien que, avant que, sans que, à moins que, jusqu'à ce que). Dans une proposition indépendante, il exprime l'ordre ou le souhait à la troisième personne : « Qu'il entre ! », « Vive la République ! »",
              ],
              box: { label: "Règle", text: "Subjonctif présent : radical de « ils » au présent + -e, -es, -e, -ions, -iez, -ent. Emplois : après volonté, souhait, sentiment, doute, nécessité ; après pour que, bien que, avant que, sans que ; ordre ou souhait (qu'il entre !)." },
            },
            {
              heading: "Le conditionnel : formes et emplois",
              paragraphs: [
                "Le conditionnel présent se forme avec le radical du futur et les terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Je chanterais, je finirais, je serais, j'aurais, j'irais, je ferais, je pourrais, je voudrais, je viendrais, je verrais. Le conditionnel passé se forme avec l'auxiliaire au conditionnel présent et le participe passé : « j'aurais chanté », « je serais venu ».",
                "Le conditionnel exprime d'abord l'hypothèse. Avec « si » + imparfait, on emploie le conditionnel présent pour un fait possible ou irréel dans le présent : « Si j'avais le temps, je lirais davantage. » Avec « si » + plus-que-parfait, on emploie le conditionnel passé pour un fait qui ne s'est pas réalisé dans le passé : « Si j'avais su, je serais venu. »",
                "Il a aussi d'autres valeurs : le futur dans le passé (« Il disait qu'il viendrait »), l'information non confirmée, fréquente dans la presse (« L'incendie aurait fait trois blessés »), la politesse (« Je voudrais un renseignement »), le souhait ou le regret (« J'aimerais tant partir », « J'aurais voulu le connaître ») et l'imaginaire, dans les jeux d'enfants (« On serait des pirates »).",
              ],
              box: { label: "Formule", text: "Si + présent → futur (Si vous venez, nous sortirons). Si + imparfait → conditionnel présent (Si vous veniez, nous sortirions). Si + plus-que-parfait → conditionnel passé (Si vous étiez venu, nous serions sortis)." },
            },
            {
              heading: "Les pièges à éviter",
              paragraphs: [
                "À la première personne du singulier, le futur et le conditionnel se ressemblent : « je chanterai » (futur) et « je chanterais » (conditionnel). Pour choisir, remplacez « je » par « nous » : « nous chanterons » (futur, donc -rai) ou « nous chanterions » (conditionnel, donc -rais). Exemple : « Si j'avais de l'argent, je voyagerais » (nous voyagerions).",
                "Après « si » de condition, on n'emploie jamais le conditionnel : on dit « si j'avais su », et non « si j'aurais su ». Attention aussi aux homophones entre indicatif et subjonctif : « il voit » / « qu'il voie », « il croit » / « qu'il croie », « il est » / « qu'il ait » ; et aux formes en -yions, -yiez : « que nous voyions », « que vous croyiez ».",
              ],
            },
          ],
          keyPoints: [
            "Subjonctif : fait envisagé (volonté, sentiment, doute, nécessité) ; radical de « ils » + -e, -es, -e, -ions, -iez, -ent.",
            "Irréguliers : que je sois, que j'aie, que j'aille, que je fasse, que je puisse, que je sache, que je veuille.",
            "Conditionnel présent : radical du futur + terminaisons de l'imparfait (je chanterais).",
            "Si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé ; jamais de conditionnel après « si ».",
            "Valeurs du conditionnel : hypothèse, futur dans le passé, information non confirmée, politesse, souhait ou regret.",
            "Futur ou conditionnel ? Remplacez « je » par « nous » : -rons ou -rions.",
          ],
          example: {
            statement: "Identifiez le mode ou le temps de chaque verbe conjugué, puis donnez sa valeur : « Si j'avais su, je serais venu plus tôt. Il faut que vous me racontiez tout. Selon la radio, la route serait coupée. »",
            solution: [
              "« avais su » : plus-que-parfait de l'indicatif, après « si » ; il pose une condition dans le passé.",
              "« serais venu » : conditionnel passé ; avec « si » + plus-que-parfait, il exprime un fait irréel du passé (je ne suis pas venu plus tôt).",
              "« faut » : indicatif présent ; « racontiez » : subjonctif présent, employé après « il faut que », qui exprime la nécessité.",
              "« serait coupée » : conditionnel présent ; il exprime une information non confirmée, rapportée par la radio.",
              "Bilan : trois emplois différents, l'hypothèse irréelle, la nécessité et l'information incertaine, montrent que ces formes servent à présenter des faits qui ne sont pas donnés comme certains.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au subjonctif présent. a) faire : que je ... b) aller : qu'ils ... c) être : que nous ... d) finir : que vous ... e) pouvoir : qu'elle ... f) savoir : que vous ...",
              hint: "Plusieurs de ces verbes sont irréguliers au subjonctif : apprenez-les par cœur. Pour « finir », partez de « ils finissent ».",
              solution: [
                "a) que je fasse.",
                "b) qu'ils aillent.",
                "c) que nous soyons (sans « i » après le « y »).",
                "d) que vous finissiez (radical de « ils finissent » + -iez).",
                "e) qu'elle puisse.",
                "f) que vous sachiez.",
              ],
            },
            {
              level: 2,
              statement: "Futur ou conditionnel ? Conjuguez le verbe à la première personne et justifiez. a) Demain, je (partir) à huit heures. b) Si j'étais riche, je (voyager) autour du monde. c) Je (vouloir) un verre d'eau, s'il vous plaît. d) Il m'a promis que je (recevoir) une réponse. e) Quand j'aurai fini, je vous (appeler).",
              hint: "Remplacez « je » par « nous » : si vous entendez « -rons », c'est le futur ; si vous entendez « -rions », c'est le conditionnel.",
              solution: [
                "a) je partirai : futur (nous partirons) ; fait à venir présenté comme certain.",
                "b) je voyagerais : conditionnel présent (nous voyagerions) ; hypothèse après « si » + imparfait.",
                "c) Je voudrais : conditionnel présent (nous voudrions) ; politesse.",
                "d) je recevrais : conditionnel présent (nous recevrions) ; futur dans le passé, après « a promis ».",
                "e) je vous appellerai : futur (nous appellerons) ; fait à venir après le futur antérieur « j'aurai fini ».",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. a) Complétez la phrase « Si vous (venir), nous (aller) au cinéma » de trois façons : avec « si » + présent, avec « si » + imparfait, avec « si » + plus-que-parfait. Expliquez la différence de sens. b) Quelle est la valeur du conditionnel dans : « Selon nos informations, le ministre démissionnerait » ? Pourquoi un journaliste emploie-t-il ce temps ? c) Corrigez : « Si j'aurais su, je serais pas venu. »",
              hint: "Pour a), le verbe qui suit « si » n'est jamais au conditionnel ; c'est le verbe de la principale qui change. Pour c), il y a deux erreurs.",
              solution: [
                "a) « Si vous venez, nous irons au cinéma » : condition réalisable dans l'avenir (si + présent, futur). « Si vous veniez, nous irions au cinéma » : hypothèse possible ou irréelle dans le présent (si + imparfait, conditionnel présent). « Si vous étiez venus, nous serions allés au cinéma » : irréel du passé, la condition ne s'est pas réalisée (si + plus-que-parfait, conditionnel passé).",
                "b) C'est le conditionnel de l'information non confirmée : le journaliste rapporte une nouvelle sans pouvoir la garantir. Il se protège ainsi d'une éventuelle erreur et prévient le lecteur.",
                "c) Première erreur : pas de conditionnel après « si » ; il faut le plus-que-parfait « si j'avais su ». Seconde erreur : la négation doit comporter « ne ». Phrase corrigée : « Si j'avais su, je ne serais pas venu. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : subjonctif et conditionnel.",
            statements: [
              { text: "« Il faut que » est suivi du subjonctif.", true: true, why: "La nécessité entraîne le subjonctif : il faut que vous veniez." },
              { text: "On peut écrire « Si j'aurais le temps, je viendrais ».", true: false, why: "Pas de conditionnel après « si » : si j'avais le temps, je viendrais." },
              { text: "Le conditionnel présent se forme avec le radical du futur et les terminaisons de l'imparfait.", true: true, why: "Je chanter-ais, nous finir-ions : radical du futur, terminaisons de l'imparfait." },
              { text: "« Que nous soyions » est la bonne orthographe.", true: false, why: "On écrit « que nous soyons », sans « i » après le « y »." },
              { text: "« L'avion aurait atterri à Lyon » peut exprimer une information non confirmée.", true: true, why: "La presse emploie le conditionnel pour rapporter un fait qu'elle ne peut garantir." },
              { text: "« Je voudrais » est un futur.", true: false, why: "C'est un conditionnel présent de politesse ; le futur serait « je voudrai »." },
              { text: "« Bien que » est suivi de l'indicatif.", true: false, why: "« Bien que » exprime la concession et se construit avec le subjonctif : bien qu'il soit tard." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte ?", options: ["que j'aille", "que j'alle", "que j'allais", "que j'irai"], answer: 0, why: "Le verbe « aller » est irrégulier au subjonctif : que j'aille, que nous allions." },
            { q: "« Si vous étiez venu, vous l'... rencontré. » Quelle forme complète la phrase ?", options: ["aurez", "auriez", "aviez", "avez"], answer: 1, why: "Avec si + plus-que-parfait, la principale est au conditionnel passé : vous l'auriez rencontré." },
            { q: "Dans « J'aimerais tant revoir la mer », le conditionnel exprime...", options: ["une information non confirmée", "un futur dans le passé", "un souhait", "une condition"], answer: 2, why: "« J'aimerais » exprime un désir, un souhait." },
            { q: "Quelle phrase contient un subjonctif ?", options: ["Je sais qu'il vient.", "Je pense qu'il viendra.", "Il dit qu'il venait.", "Je veux qu'il vienne."], answer: 3, why: "« Vouloir que » exprime la volonté et entraîne le subjonctif : vienne." },
            { q: "« Je (finir) ce travail demain sans faute. » Quelle forme convient ?", options: ["finirais", "finirai", "finisse"], answer: 1, why: "Il s'agit d'un fait à venir présenté comme certain : futur, « je finirai » (nous finirons)." },
          ],
          trap: "Écrire « si j'aurais » : après « si » qui exprime la condition, on n'emploie jamais le conditionnel, mais le présent, l'imparfait ou le plus-que-parfait de l'indicatif.",
          method: "Pour choisir entre -rai et -rais à la première personne, remplacez mentalement « je » par « nous » : « -rons » signale le futur, « -rions » le conditionnel. Pour le subjonctif, apprenez par cœur les sept verbes irréguliers (être, avoir, aller, faire, pouvoir, savoir, vouloir).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'voix-passive',
          title: "La voix active et la voix passive",
          minutes: 30,
          objectives: [
            "Identifier une phrase à la voix passive et son complément d'agent.",
            "Transformer une phrase active en phrase passive, et inversement, en conservant le temps.",
            "Distinguer la voix passive d'un temps composé formé avec l'auxiliaire « être ».",
            "Expliquer l'effet produit par le choix de la voix passive.",
          ],
          course: [
            {
              heading: "Voix active et voix passive",
              paragraphs: [
                "À la voix active, le sujet fait l'action : « Le jury récompense l'élève. » À la voix passive, le sujet subit l'action : « L'élève est récompensé par le jury. » Les deux phrases ont le même sens, mais elles ne mettent pas en valeur la même personne.",
                "Le passage de l'une à l'autre suit une règle précise : le COD de la phrase active devient le sujet de la phrase passive ; le sujet de la phrase active devient le complément d'agent, introduit par « par » (parfois par « de »). Seuls les verbes qui ont un COD, c'est-à-dire les verbes transitifs directs, peuvent se mettre à la voix passive.",
              ],
              box: { label: "Définition", text: "Voix active : le sujet fait l'action. Voix passive : le sujet subit l'action, faite par le complément d'agent (introduit par « par » ou « de »). Le COD actif devient le sujet passif." },
            },
            {
              heading: "Former la voix passive",
              paragraphs: [
                "Le verbe passif se forme avec l'auxiliaire « être » conjugué au temps du verbe actif, suivi du participe passé, qui s'accorde avec le sujet. Présent : « La souris est mangée par le chat » (le chat mange la souris). Imparfait : « était mangée ». Passé simple : « fut mangée ». Futur : « sera mangée ». Passé composé : « a été mangée ». Plus-que-parfait : « avait été mangée ». Conditionnel présent : « serait mangée ».",
                "Le temps d'un verbe passif est donc celui de l'auxiliaire « être » : « a été récompensé » est un passé composé passif, car « a été » est le passé composé d'« être ». Le complément d'agent est introduit par « de » après certains verbes de sentiment ou d'état : « Elle est aimée de tous », « La ville est entourée de remparts ». Si le sujet actif est « on », la phrase passive n'a pas de complément d'agent : « On a réparé la route » devient « La route a été réparée ».",
              ],
              box: { label: "Formule", text: "Verbe passif = « être » au temps du verbe actif + participe passé accordé avec le sujet. Exemple : ont récompensé (passé composé actif) → a été récompensée (passé composé passif)." },
            },
            {
              heading: "Ne pas confondre",
              paragraphs: [
                "« Elle est partie » n'est pas une phrase passive : c'est le passé composé actif du verbe « partir », qui se conjugue avec « être ». Le verbe « partir » n'a pas de COD, il ne peut donc pas être passif, et l'on ne peut pas ajouter de complément d'agent. De même, « Il est tombé » est un passé composé actif.",
                "« La porte est fermée » peut exprimer un état (le participe joue le rôle d'un adjectif attribut) ou une action passive (« La porte est fermée chaque soir par le gardien », c'est-à-dire « le gardien ferme la porte chaque soir »). Pour vérifier, cherchez la phrase active équivalente : si elle existe, avec un sujet qui fait l'action, la phrase est passive. Enfin, certaines tournures pronominales ont un sens passif : « Ce plat se mange froid » (on mange ce plat froid).",
              ],
              box: { label: "Règle", text: "Test : une phrase est passive si l'on peut retrouver une phrase active de même sens, au même temps, dont le COD est le sujet passif. « Il est parti » n'en a pas : c'est un passé composé actif." },
            },
            {
              heading: "Pourquoi choisir la voix passive ?",
              paragraphs: [
                "La voix passive place en tête de phrase celui qui subit l'action : elle le met en valeur. Un titre de presse comme « Un enfant sauvé de la noyade par un adolescent » attire l'attention sur la victime. Elle permet aussi de garder le même sujet d'une phrase à l'autre, ce qui rend un texte plus cohérent.",
                "Elle permet enfin de taire l'agent : parce qu'il est inconnu (« Le tableau a été volé cette nuit »), évident ou sans importance (« L'eau est chauffée à 100 °C »), ou parce que l'on veut éviter de désigner un responsable (« Des erreurs ont été commises »). Repérer l'absence de complément d'agent permet donc de lire un texte de façon critique.",
              ],
              box: { label: "À retenir", text: "La voix passive met en valeur celui qui subit l'action et permet de taire l'agent (inconnu, évident, ou que l'on préfère ne pas nommer)." },
            },
          ],
          keyPoints: [
            "Voix active : le sujet fait l'action ; voix passive : le sujet subit l'action.",
            "COD actif → sujet passif ; sujet actif → complément d'agent (par, parfois de).",
            "Verbe passif = « être » au temps du verbe actif + participe passé accordé avec le sujet.",
            "Seuls les verbes qui ont un COD peuvent être mis au passif.",
            "« Elle est partie » est un passé composé actif, pas une phrase passive.",
            "La passive met en valeur celui qui subit l'action et permet de taire l'agent.",
          ],
          example: {
            statement: "Mettez à la voix passive : « Les pompiers ont éteint l'incendie. » Puis indiquez le temps du verbe passif.",
            solution: [
              "Repérer le verbe et son temps : « ont éteint », passé composé de l'indicatif.",
              "Vérifier qu'il y a un COD : « l'incendie » (les pompiers ont éteint quoi ? l'incendie). La transformation est possible.",
              "Le COD « l'incendie » devient le sujet de la phrase passive.",
              "Conjuguer « être » au passé composé : « a été », puis ajouter le participe passé « éteint », accordé avec « l'incendie » (masculin singulier).",
              "Le sujet actif « les pompiers » devient le complément d'agent : « par les pompiers ».",
              "Résultat : « L'incendie a été éteint par les pompiers. » Le verbe est au passé composé de la voix passive.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque phrase est à la voix active ou à la voix passive, et justifiez. a) Le facteur a apporté un colis. b) Le colis a été apporté par le facteur. c) Les enfants sont partis tôt. d) Le gâteau sera partagé entre les invités. e) Cette chanteuse est admirée de tous.",
              hint: "Une phrase passive a un sujet qui subit l'action ; cherchez si vous pouvez retrouver une phrase active équivalente.",
              solution: [
                "a) Active : le sujet « le facteur » fait l'action ; « un colis » est COD.",
                "b) Passive : le sujet « le colis » subit l'action ; « par le facteur » est complément d'agent. Temps : passé composé.",
                "c) Active : passé composé du verbe « partir », conjugué avec « être » ; « partir » n'a pas de COD.",
                "d) Passive, sans complément d'agent : on partagera le gâteau. Temps : futur.",
                "e) Passive : « de tous » est complément d'agent (tous admirent cette chanteuse). Temps : présent.",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases à la voix passive, en conservant le temps. a) Le chat poursuit la souris. b) Le maire inaugurera la médiathèque. c) Un orage détruisit les récoltes. d) On avait annulé le concert. e) Les élèves liront ces romans.",
              hint: "Repérez d'abord le temps du verbe actif : c'est à ce temps que vous conjuguez « être ». N'oubliez pas l'accord du participe passé.",
              solution: [
                "a) La souris est poursuivie par le chat (présent ; « poursuivie » au féminin).",
                "b) La médiathèque sera inaugurée par le maire (futur).",
                "c) Les récoltes furent détruites par un orage (passé simple ; accord au féminin pluriel).",
                "d) Le concert avait été annulé (plus-que-parfait ; pas de complément d'agent, car le sujet actif est « on »).",
                "e) Ces romans seront lus par les élèves (futur ; « lus » au masculin pluriel).",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type brevet. Titre de presse : « Un enfant de huit ans a été sauvé de la noyade par un adolescent. » a) Réécrivez ce titre à la voix active. b) Quel effet produit le choix de la voix passive dans le titre original ? c) Dans la phrase « Des décisions regrettables ont été prises », pourquoi l'auteur a-t-il pu ne pas mentionner de complément d'agent ? d) Donnez le temps et la voix de « La gardienne avait été prévenue ».",
              hint: "Pour b), demandez-vous qui apparaît en premier dans chaque version. Pour d), le temps d'un verbe passif est celui de l'auxiliaire « être ».",
              solution: [
                "a) « Un adolescent a sauvé de la noyade un enfant de huit ans. » (passé composé actif)",
                "b) La voix passive place « un enfant de huit ans » en tête : le lecteur s'intéresse d'abord à la victime et à son sauvetage, ce qui touche davantage ; l'adolescent sauveteur apparaît à la fin, comme une révélation.",
                "c) L'absence de complément d'agent permet de taire les responsables : on évoque des décisions sans dire qui les a prises, peut-être pour éviter de les désigner ou parce qu'ils sont trop nombreux.",
                "d) « avait été prévenue » : plus-que-parfait de la voix passive (« avait été » est le plus-que-parfait d'« être ») ; le participe « prévenue » s'accorde avec le sujet féminin « la gardienne ».",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour mettre une phrase à la voix passive.",
            items: [
              "Repérer le verbe actif et son temps",
              "Vérifier que le verbe a un COD",
              "Placer le COD en tête : il devient le sujet",
              "Conjuguer « être » au temps du verbe actif",
              "Ajouter le participe passé accordé avec le nouveau sujet",
              "Transformer l'ancien sujet en complément d'agent introduit par « par »",
            ],
          },
          quiz: [
            { q: "Quelle phrase est à la voix passive ?", options: ["Elle est arrivée hier.", "Il est très content.", "Nous sommes restés chez nous.", "Le livre est lu par Marie."], answer: 3, why: "Le sujet « le livre » subit l'action faite par le complément d'agent « par Marie » (Marie lit le livre)." },
            { q: "« Le voleur fut arrêté par la police. » À quel temps est le verbe passif ?", options: ["Passé composé", "Imparfait", "Passé simple", "Plus-que-parfait"], answer: 2, why: "« fut » est le passé simple d'« être » : le verbe passif est au passé simple." },
            { q: "Dans « Il est respecté de ses voisins », « de ses voisins » est...", options: ["complément d'agent", "complément du nom", "COD", "complément de lieu"], answer: 0, why: "Après certains verbes de sentiment, le complément d'agent est introduit par « de » : ses voisins le respectent." },
            { q: "Quelle phrase ne peut pas être mise à la voix passive ?", options: ["Le vent emporte les feuilles.", "Paul dort profondément.", "Le cuisinier prépare le repas."], answer: 1, why: "« Dormir » n'a pas de COD : un verbe sans COD ne peut pas se mettre au passif." },
            { q: "Pourquoi écrire « Le musée a été cambriolé cette nuit » sans complément d'agent ?", options: ["Parce que c'est interdit au passif", "Parce que le cambrioleur est inconnu", "Parce que le verbe est au présent", "Parce que le sujet est masculin"], answer: 1, why: "La voix passive permet de raconter l'action sans nommer l'agent, ici parce qu'on ne le connaît pas." },
          ],
          trap: "Prendre pour une phrase passive un passé composé formé avec « être » (« Elle est partie ») : seul un verbe qui a un COD peut être passif, et l'on doit pouvoir retrouver la phrase active équivalente.",
          method: "Pour trouver le temps d'un verbe passif, cachez le participe passé et conjuguez seulement l'auxiliaire « être » : « a été » (passé composé), « sera » (futur), « fut » (passé simple). Le temps de l'auxiliaire est le temps du verbe passif.",
        },
      ],
    },
  ],
}
