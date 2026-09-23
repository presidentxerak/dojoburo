// LES FORMATIONS MÉTIER · six métiers, trois cités chacun.
//
// ---------------------------------------------------------------------------
// CE QU'UNE FORMATION MÉTIER EST, ET CE QU'ELLE N'EST PAS
//
// Elle n'est PAS le parcours généraliste avec d'autres exemples. Un cours qui
// se contente de remplacer « votre document » par « votre campagne » vend deux
// fois la même chose, et celui qui a payé les deux s'en aperçoit au troisième
// dojo. Ce qui change ici est la MATIÈRE : les objets du métier (un segment,
// un communiqué, une spécification, une relance, un ordre du jour), les
// erreurs propres au métier, et les décisions que personne d'autre ne prend.
//
// Elle suppose le parcours généraliste connu. On n'y réexplique ni le
// contexte, ni le rôle, ni ce qu'est un jeton. C'est pour cela qu'elle coûte
// moins cher et qu'elle est plus courte : elle commence où l'autre s'arrête.
//
// ---------------------------------------------------------------------------
// TROIS CITÉS, TROIS DOJOS · la forme est la même pour les six
//
// Les trois cités d'un métier suivent son cycle réel, pas une progression de
// difficulté : on entre par ce qui déclenche le travail, on traverse ce qui le
// constitue, on sort par ce qui l'achève. Quelqu'un peut donc entrer par la
// cité qui correspond à ce qu'il a sur son bureau ce matin.
//
// ---------------------------------------------------------------------------
// LES COORDONNÉES · chaque métier a sa bande sur la carte
//
// Un métier est une carte à part : on ne voit jamais les cités d'un autre
// métier. Les bandes ci-dessous ne servent donc pas à séparer visuellement,
// elles servent à ce que deux cités n'aient jamais la même adresse dans le
// programme entier · voir scripts/test-curriculum.
import { B } from './bilingual'
import type { Level, Module } from './curriculum'
import type { IconName } from './icons'

/** Un métier · ce qu'on choisit avant de commencer. */
export interface Trade {
  id: string
  label: { en: string; fr: string }
  /** une ligne · à qui ce métier s'adresse, en termes de tous les jours */
  who: { en: string; fr: string }
  glyph: IconName
  tint: string
  /** les identifiants de ses cités, dans l'ordre conseillé */
  cities: string[]
}

/* ================================================================== */
/* GROWTH MARKETER                                                     */
/* ================================================================== */

const GR_ACQ: Level[] = [
  {
    id: 'gr-segment',
    master: 'growth',
    minutes: 7,
    title: B('One segment, named', 'Un segment, nommé'),
    learn: B(
      'You will write for one named group instead of for everyone at once.',
      "Vous écrirez pour un groupe nommé au lieu d'écrire pour tout le monde à la fois.",
    ),
    act: B('Describe one buyer in six lines, then ask for a message for them alone.',
      'Décrivez un acheteur en six lignes, puis demandez un message pour lui seul.'),
    steps: [
      B('Name the job, the moment, and what they were doing before they looked for you.',
        "Nommez le poste, le moment, et ce qu'ils faisaient avant de vous chercher."),
      B('Add the words they use themselves. Not your product words.',
        "Ajoutez les mots qu'ils emploient eux-mêmes. Pas les mots de votre produit."),
      B('Ask for the message, then ask what it would lose on another segment.',
        "Demandez le message, puis demandez ce qu'il perdrait sur un autre segment."),
    ],
    trap: B(
      'Describing a persona with an age and a hobby. Neither predicts a purchase; the moment and the previous attempt do.',
      "Décrire un persona avec un âge et un loisir. Aucun des deux ne prédit un achat ; le moment et la tentative précédente, si.",
    ),
    quiz: {
      q: B('Which detail earns its place in a segment description?',
        'Quel détail mérite sa place dans la description d\'un segment ?'),
      options: [
        B('Their age bracket and their city', 'Leur tranche d\'âge et leur ville d\'exercice'),
        B('The size of their company', 'La taille de leur entreprise'),
        B('What they tried before you', 'Ce qu\'ils ont essayé avant vous'),
      ],
      answer: 2,
      why: B(
        'What someone already tried tells you what disappointed them, which is the one thing your message has to answer. Age and size sort people without explaining anything.',
        "Ce que quelqu'un a déjà essayé dit ce qui l'a déçu, et c'est la seule chose à laquelle votre message doit répondre. L'âge et la taille classent les gens sans rien expliquer.",
      ),
    },
    badge: B('Writes to one person', 'Écrit à une personne'),
  },
  {
    id: 'gr-variants',
    master: 'writing',
    minutes: 7,
    title: B('Three angles beat a hundred variants', 'Trois angles valent mieux que cent variantes'),
    learn: B(
      'You will test differences that mean something instead of shuffling words.',
      "Vous testerez des différences qui veulent dire quelque chose au lieu de brasser des mots.",
    ),
    act: B('Ask for three messages that disagree about why someone would buy.',
      'Demandez trois messages qui ne sont pas d\'accord sur la raison d\'acheter.'),
    steps: [
      B('State the three angles yourself: the pain, the gain, the risk avoided.',
        "Énoncez vous-même les trois angles : la douleur, le gain, le risque évité."),
      B('Ask for one message per angle, same length, same offer.',
        "Demandez un message par angle, même longueur, même offre."),
      B('Keep the angle that wins, then vary wording inside it. Not before.',
        "Gardez l'angle qui gagne, puis variez la formulation dedans. Pas avant."),
    ],
    trap: B(
      'Asking for twenty variants. You get twenty ways of saying the same thing, and no result tells you anything you can reuse.',
      "Demander vingt variantes. Vous obtenez vingt façons de dire la même chose, et aucun résultat ne vous apprend quoi que ce soit de réutilisable.",
    ),
    quiz: {
      q: B('Twenty variants of one angle win over three angles. What did you learn?',
        'Vingt variantes d\'un angle l\'emportent sur trois angles. Qu\'avez-vous appris ?'),
      options: [
        B('Which wording performs best', 'Quelle formulation marche le mieux'),
        B('Almost nothing reusable', 'Presque rien de réutilisable'),
        B('That the audience is large', 'Que l\'audience est large'),
      ],
      answer: 1,
      why: B(
        'A winning wording stops working when the channel or the season changes. A winning angle tells you what people are buying, and it survives every rewrite.',
        "Une formulation gagnante cesse de marcher quand le canal ou la saison changent. Un angle gagnant dit ce que les gens achètent, et il survit à toutes les réécritures.",
      ),
    },
    badge: B('Tests angles, not words', 'Teste des angles, pas des mots'),
  },
  {
    id: 'gr-landing',
    master: 'analysis',
    minutes: 7,
    title: B('The page that keeps the promise', 'La page qui tient la promesse'),
    learn: B(
      'You will catch the gap between what the ad said and what the page says.',
      "Vous verrez l'écart entre ce que la publicité a promis et ce que la page raconte.",
    ),
    act: B('Give it your ad and your page, and ask what a visitor expected and did not find.',
      'Donnez-lui votre annonce et votre page, et demandez ce qu\'un visiteur attendait sans le trouver.'),
    steps: [
      B('Paste the ad first, the page second. Order tells it which is the promise.',
        "Collez l'annonce d'abord, la page ensuite. L'ordre lui dit laquelle est la promesse."),
      B('Ask for the first sentence a visitor reads, and whether it repeats the ad.',
        "Demandez la première phrase que lit un visiteur, et si elle reprend l'annonce."),
      B('Ask what is asked of them, and when. A form above the answer is a toll.',
        "Demandez ce qu'on leur réclame, et à quel moment. Un formulaire avant la réponse est un péage."),
    ],
    trap: B(
      'Judging the page on its own. It is never read on its own: it is read three seconds after a promise, and it is judged against it.',
      "Juger la page seule. Elle n'est jamais lue seule : elle est lue trois secondes après une promesse, et elle est jugée par rapport à elle.",
    ),
    quiz: {
      q: B('Your click rate is high and nobody converts. Where do you look first?',
        'Votre taux de clic est bon et personne ne convertit. Où regardez-vous d\'abord ?'),
      options: [
        B('The gap between ad and page', "L'écart entre l'annonce et la page"),
        B('The price', 'Le prix'),
        B('The loading time of the page', 'Le temps de chargement de la page'),
      ],
      answer: 0,
      why: B(
        'A good click rate proves the promise worked. Losing people right after it means the page answered a different question, and that costs nothing to fix.',
        "Un bon taux de clic prouve que la promesse a marché. Les perdre juste après veut dire que la page répond à une autre question, et cela se corrige sans rien dépenser.",
      ),
    },
    badge: B('Reads ad and page together', 'Lit annonce et page ensemble'),
  },
]

const GR_LIFE: Level[] = [
  {
    id: 'gr-dayone',
    master: 'planning',
    minutes: 7,
    title: B('The first day of a new sign-up', "Le premier jour d'un nouvel inscrit"),
    learn: B(
      'You will build a welcome that leads to one action, not to a tour.',
      "Vous construirez un accueil qui mène à une action, pas à une visite guidée.",
    ),
    act: B('Name the one thing a new user must do, then write the three messages that get them there.',
      'Nommez la seule chose qu\'un nouvel inscrit doit faire, puis écrivez les trois messages qui l\'y mènent.'),
    steps: [
      B('Pick the action that predicts staying. One, and you must be able to count it.',
        "Choisissez l'action qui prédit qu'on reste. Une seule, et elle doit se compter."),
      B('Write message one for someone who has not done it, not for everyone.',
        "Écrivez le premier message pour quelqu'un qui ne l'a pas faite, pas pour tout le monde."),
      B('Stop the sequence when the action happens. A sequence that runs on is noise.',
        "Arrêtez la séquence quand l'action est faite. Une séquence qui continue est du bruit."),
    ],
    trap: B(
      'Presenting every feature on day one. Nobody remembers a tour, and the one thing that mattered is buried in the middle of it.',
      "Présenter toutes les fonctions le premier jour. Personne ne retient une visite guidée, et la seule chose qui comptait est noyée au milieu.",
    ),
    quiz: {
      q: B('What makes a welcome sequence stop?',
        'Qu\'est-ce qui fait s\'arrêter une séquence d\'accueil ?'),
      options: [
        B('The action being done', "L'action accomplie"),
        B('The last message being sent', 'Le dernier message envoyé'),
        B('A week going by', 'Une semaine écoulée'),
      ],
      answer: 0,
      why: B(
        'Someone who has already done the thing and still gets told to do it learns that your messages do not know them. That lesson is expensive and it lasts.',
        "Quelqu'un qui a déjà fait la chose et à qui on continue de la demander apprend que vos messages ne le connaissent pas. Cette leçon coûte cher et elle dure.",
      ),
    },
    badge: B('One action, then silence', 'Une action, puis le silence'),
  },
  {
    id: 'gr-nudge',
    master: 'writing',
    minutes: 6,
    title: B('A follow-up that does not nag', 'Une relance qui n\'insiste pas'),
    learn: B(
      'You will bring something new each time instead of repeating yourself louder.',
      "Vous apporterez du neuf à chaque fois au lieu de vous répéter plus fort.",
    ),
    act: B('Write three follow-ups where each one carries a fact the previous did not.',
      'Écrivez trois relances où chacune porte un fait que la précédente n\'avait pas.'),
    steps: [
      B('Give it the first message and forbid it from restating the offer.',
        "Donnez-lui le premier message et interdisez-lui de redire l'offre."),
      B('Ask for one new element per follow-up: a case, a number, an objection answered.',
        "Demandez un élément neuf par relance : un cas, un chiffre, une objection traitée."),
      B('Ask for the exit line. A way out raises replies and costs you nobody.',
        "Demandez la phrase de sortie. Une porte de sortie augmente les réponses et ne vous coûte personne."),
    ],
    trap: B(
      'Writing "just following up". It says you have nothing to add, and it asks the reader to do the work of remembering.',
      "Écrire « je me permets de revenir vers vous ». Cela dit que vous n'avez rien à ajouter, et demande au lecteur de faire l'effort de se souvenir.",
    ),
    quiz: {
      q: B('Why offer a way to say no in a follow-up?',
        'Pourquoi proposer une façon de dire non dans une relance ?'),
      options: [
        B('It is polite', 'C\'est poli'),
        B('It keeps the tone professional throughout', "Cela garde un ton professionnel d'un bout à l'autre"),
        B('It raises the number of replies', 'Cela augmente le nombre de réponses'),
      ],
      answer: 2,
      why: B(
        'Most silence is not refusal, it is indecision. Making no easy to say turns silence into an answer, and an answer lets you stop spending on that contact.',
        "Le silence n'est pas un refus, c'est une indécision. Rendre le non facile transforme le silence en réponse, et une réponse vous permet d'arrêter de dépenser sur ce contact.",
      ),
    },
    badge: B('Adds something each time', 'Ajoute quelque chose à chaque fois'),
  },
  {
    id: 'gr-churn',
    master: 'analysis',
    minutes: 7,
    title: B('Seeing who is about to leave', 'Voir qui est sur le départ'),
    learn: B(
      'You will find the behaviour that comes before leaving, not after.',
      "Vous trouverez le comportement qui précède le départ, pas celui qui le suit.",
    ),
    act: B('Give it two lists, those who stayed and those who left, and ask what differs.',
      'Donnez-lui deux listes, ceux qui sont restés et ceux qui sont partis, et demandez ce qui diffère.'),
    steps: [
      B('Send behaviour from before the departure, never the departure itself.',
        "Envoyez le comportement d'avant le départ, jamais le départ lui-même."),
      B('Ask for differences with a count attached, and for what it cannot tell.',
        "Demandez les différences avec un effectif, et ce qu'il ne peut pas conclure."),
      B('Check one signal by hand on ten accounts before acting on it.',
        "Vérifiez un signal à la main sur dix comptes avant d'agir dessus."),
    ],
    trap: B(
      'Feeding it the cancellation itself. It will find that people who cancelled cancelled, and say it with great confidence.',
      "Lui donner l'annulation elle-même. Il trouvera que les gens qui ont résilié ont résilié, et le dira avec beaucoup d'assurance.",
    ),
    quiz: {
      q: B('Which column must not be in the data you send?',
        'Quelle colonne ne doit pas se trouver dans les données envoyées ?'),
      options: [
        B('The cancellation itself', 'L\'annulation elle-même'),
        B('The date of their last use', 'La date de leur dernière utilisation'),
        B('The plan they were on', 'Le forfait souscrit'),
      ],
      answer: 0,
      why: B(
        'Anything that only exists because someone left will be found as the cause of leaving. The result looks brilliant and predicts nothing you can act on in time.',
        "Tout ce qui n'existe que parce que quelqu'un est parti sera trouvé comme la cause du départ. Le résultat paraît brillant et ne prédit rien sur quoi agir à temps.",
      ),
    },
    badge: B('Looks before, not after', 'Regarde avant, pas après'),
  },
]

const GR_MEASURE: Level[] = [
  {
    id: 'gr-question',
    master: 'analysis',
    minutes: 6,
    title: B('One question per dashboard', 'Une question par tableau de bord'),
    learn: B(
      'You will build a board that answers one question instead of showing everything.',
      "Vous construirez un tableau qui répond à une question au lieu de tout montrer.",
    ),
    act: B('Write the question first, then ask which three numbers answer it.',
      'Écrivez la question d\'abord, puis demandez quels trois chiffres y répondent.'),
    steps: [
      B('Write the question as a sentence someone would say out loud.',
        "Écrivez la question comme une phrase qu'on dirait à voix haute."),
      B('Ask for the smallest set of numbers that answers it, and why each is there.',
        "Demandez le plus petit jeu de chiffres qui y répond, et pourquoi chacun y est."),
      B('Ask what number would have to move for the answer to change.',
        "Demandez quel chiffre devrait bouger pour que la réponse change."),
    ],
    trap: B(
      'Putting on the board everything you can measure. Nobody reads it, and a board nobody reads is worse than no board: it looks like oversight.',
      "Mettre sur le tableau tout ce qui se mesure. Personne ne le lit, et un tableau que personne ne lit est pire que pas de tableau : il a l'air d'un contrôle.",
    ),
    quiz: {
      q: B('What tells you a metric belongs on the board?',
        'Qu\'est-ce qui dit qu\'un indicateur a sa place sur le tableau ?'),
      options: [
        B('A decision changes when it moves', 'Une décision change quand il bouge'),
        B('It is available in the tool', "Il est disponible dans l'outil"),
        B('The team has always had it on the board', "L'équipe l'a toujours eu sur le tableau"),
      ],
      answer: 0,
      why: B(
        'A number that changes nothing is decoration, and decoration crowds out the two or three numbers that do change something. Availability is not a reason.',
        "Un chiffre qui ne change rien est un décor, et le décor chasse les deux ou trois chiffres qui changent quelque chose. La disponibilité n'est pas une raison.",
      ),
    },
    badge: B('Asks before measuring', 'Demande avant de mesurer'),
  },
  {
    id: 'gr-test',
    master: 'analysis',
    minutes: 7,
    title: B('Reading a test without fooling yourself', 'Lire un test sans se mentir'),
    learn: B(
      'You will know when a result is a result and when it is noise.',
      "Vous saurez quand un résultat est un résultat et quand c'est du bruit.",
    ),
    act: B('Give it your two numbers and sample sizes, and ask what it cannot conclude.',
      'Donnez-lui vos deux chiffres et vos effectifs, et demandez ce qu\'il ne peut pas conclure.'),
    steps: [
      B('Send the counts, not the percentages. Percentages hide how few people that was.',
        "Envoyez les effectifs, pas les pourcentages. Les pourcentages cachent le peu de monde que c'était."),
      B('Ask for the range the true value sits in, not a yes or a no.',
        "Demandez l'intervalle où se trouve la vraie valeur, pas un oui ou un non."),
      B('Ask how long you would have had to run it to answer at all.',
        "Demandez combien de temps il aurait fallu le laisser tourner pour pouvoir conclure."),
    ],
    trap: B(
      'Stopping the test the day it looks good. Every test looks good on some day, and the day you stop is the day you chose your answer.',
      "Arrêter le test le jour où il est bon. Tout test est bon un jour ou l'autre, et le jour où vous l'arrêtez est le jour où vous avez choisi la réponse.",
    ),
    quiz: {
      q: B('12 % against 9 %, on two hundred visitors. What do you say?',
        '12 % contre 9 %, sur deux cents visiteurs. Que dites-vous ?'),
      options: [
        B('B wins, the gap is three points', "B gagne, l'écart est de trois points"),
        B('A wins, keep it', 'A gagne, on garde A'),
        B('Too few people to tell', 'Trop peu de monde pour conclure'),
      ],
      answer: 2,
      why: B(
        'Two hundred visitors split in two gives a handful of conversions each side. One person moving between them flips the winner, so the winner is the coin, not the page.',
        "Deux cents visiteurs coupés en deux donnent une poignée de conversions de chaque côté. Une personne qui bascule change le gagnant : le gagnant est le hasard, pas la page.",
      ),
    },
    badge: B('Counts people, not percents', 'Compte des gens, pas des pourcents'),
  },
  {
    id: 'gr-attrib',
    master: 'research',
    minutes: 7,
    title: B('Attribution is a story', "L'attribution est un récit"),
    learn: B(
      'You will treat a channel report as one account among several possible ones.',
      "Vous traiterez un rapport par canal comme un récit parmi plusieurs possibles.",
    ),
    act: B('Ask for three readings of the same numbers, and what each one would have you do.',
      'Demandez trois lectures des mêmes chiffres, et ce que chacune vous ferait faire.'),
    steps: [
      B('Give the numbers with no conclusion of your own attached.',
        "Donnez les chiffres sans y attacher votre conclusion."),
      B('Ask for a reading that favours each channel in turn, with its assumption.',
        "Demandez une lecture qui favorise chaque canal à son tour, avec son hypothèse."),
      B('Pick the reading whose assumption you can actually check, and check it.',
        "Choisissez la lecture dont l'hypothèse est vérifiable, et vérifiez-la."),
    ],
    trap: B(
      'Taking the tool\'s model for the truth. Every tool credits the touch it can see, so every tool credits itself.',
      "Prendre le modèle de l'outil pour la vérité. Chaque outil crédite le contact qu'il voit, donc chaque outil se crédite lui-même.",
    ),
    quiz: {
      q: B('Two tools disagree on which channel won. Who is right?',
        'Deux outils ne sont pas d\'accord sur le canal gagnant. Qui a raison ?'),
      options: [
        B('The one that saw the last click before the sale', 'Celui qui a vu le dernier clic avant la vente'),
        B('Neither, they count differently', 'Aucun, ils comptent différemment'),
        B('The one with more data', 'Celui qui a le plus de données'),
      ],
      answer: 1,
      why: B(
        'They are not measuring the same thing, so they cannot both be checked against one truth. What you can do is ask which decision each would lead to, and whether that decision differs at all.',
        "Ils ne mesurent pas la même chose, donc on ne peut pas les confronter à une vérité unique. Ce qu'on peut faire, c'est demander à quelle décision chacun mène, et si cette décision diffère vraiment.",
      ),
    },
    badge: B('Doubts the model', 'Doute du modèle'),
  },
]

/* ================================================================== */
/* COMMUNICANT                                                         */
/* ================================================================== */

const CO_VOICE: Level[] = [
  {
    id: 'co-voice',
    master: 'writing',
    minutes: 7,
    title: B('A voice, written down', 'Une voix, écrite noir sur blanc'),
    learn: B(
      'You will hold a style guide that anyone can apply, including a machine.',
      "Vous tiendrez une charte de style que n'importe qui peut appliquer, machine comprise.",
    ),
    act: B('Give it five real texts and ask it to state the rules it sees.',
      'Donnez-lui cinq textes réels et demandez-lui d\'énoncer les règles qu\'il voit.'),
    steps: [
      B('Choose ordinary pieces, not your best ones. The best are not your voice.',
        "Choisissez des textes ordinaires, pas vos meilleurs. Les meilleurs ne sont pas votre voix."),
      B('Ask for rules a stranger could follow, and a counter-example for each.',
        "Demandez des règles qu'un inconnu pourrait suivre, et un contre-exemple pour chacune."),
      B('Correct the list yourself. What you strike out is as telling as what you keep.',
        "Corrigez la liste vous-même. Ce que vous rayez en dit autant que ce que vous gardez."),
    ],
    trap: B(
      'Writing rules like "be warm and professional". Two people apply that in two opposite ways, and neither can be told they are wrong.',
      "Écrire des règles comme « être chaleureux et professionnel ». Deux personnes l'appliquent de deux façons opposées, et aucune ne peut avoir tort.",
    ),
    quiz: {
      q: B('Which of these is a usable rule?',
        'Laquelle de ces règles est utilisable ?'),
      options: [
        B('Keep a tone that is warm and modern', 'Garder un ton chaleureux et moderne'),
        B('Never open on the company name', "Ne jamais commencer par le nom de l'entreprise"),
        B('Write with personality', 'Écrire avec de la personnalité'),
      ],
      answer: 1,
      why: B(
        'A usable rule can be broken visibly. You can point at a sentence and say it breaks that one; nobody can point at a sentence that fails to be warm.',
        "Une règle utilisable peut se briser visiblement. On peut montrer une phrase et dire qu'elle l'enfreint ; personne ne peut montrer une phrase qui manque de chaleur.",
      ),
    },
    badge: B('Holds a written voice', 'Tient une voix écrite'),
  },
  {
    id: 'co-calendar',
    master: 'planning',
    minutes: 6,
    title: B('A calendar that survives a quarter', 'Un calendrier qui tient un trimestre'),
    learn: B(
      'You will plan around a few subjects instead of filling slots.',
      "Vous planifierez autour de quelques sujets au lieu de remplir des cases.",
    ),
    act: B('Name three subjects for the quarter, then ask for what each one can produce.',
      'Nommez trois sujets pour le trimestre, puis demandez ce que chacun peut produire.'),
    steps: [
      B('Three subjects, no more. A fourth is what breaks calendars in week five.',
        "Trois sujets, pas plus. C'est le quatrième qui casse les calendriers en semaine cinq."),
      B('Ask what each subject gives in three formats, and what it cannot give.',
        "Demandez ce que chaque sujet donne dans trois formats, et ce qu'il ne peut pas donner."),
      B('Leave a quarter of the slots empty for what actually happens.',
        "Laissez un quart des cases vides pour ce qui arrivera vraiment."),
    ],
    trap: B(
      'Filling every slot before the quarter starts. The first real event of the month has nowhere to go, and it is the only thing anyone wanted to read.',
      "Remplir toutes les cases avant que le trimestre commence. Le premier vrai événement du mois n'a plus de place, et c'est la seule chose que les gens voulaient lire.",
    ),
    quiz: {
      q: B('Why leave slots empty on purpose?',
        'Pourquoi laisser des cases vides exprès ?'),
      options: [
        B('To have room for what happens', 'Pour avoir de la place quand il se passe quelque chose'),
        B('To rest the team', 'Pour reposer l\'équipe'),
        B('To keep the production cost down', 'Pour contenir le coût de production'),
      ],
      answer: 0,
      why: B(
        'A full calendar turns every real event into a choice between your plan and the news. Room planned in advance means you never have to make that choice.',
        "Un calendrier plein transforme chaque vrai événement en arbitrage entre votre plan et l'actualité. De la place prévue à l'avance vous évite cet arbitrage.",
      ),
    },
    badge: B('Plans around subjects', 'Planifie par sujets'),
  },
  {
    id: 'co-decline',
    master: 'writing',
    minutes: 7,
    title: B('One idea, several forms', 'Une idée, plusieurs formes'),
    learn: B(
      'You will turn one piece into four without saying the same thing four times.',
      "Vous transformerez un contenu en quatre sans dire quatre fois la même chose.",
    ),
    act: B('Take one article and ask what each format would have to cut and add.',
      'Prenez un article et demandez ce que chaque format devrait couper et ajouter.'),
    steps: [
      B('Say who reads each format and in what state of mind.',
        "Dites qui lit chaque format et dans quel état d'esprit."),
      B('Ask what must be cut for that reader, then what must be added for them.',
        "Demandez ce qu'il faut couper pour ce lecteur, puis ce qu'il faut ajouter pour lui."),
      B('Keep one sentence identical across all four. That is the idea.',
        "Gardez une phrase identique dans les quatre. C'est elle, l'idée."),
    ],
    trap: B(
      'Asking for the same text made shorter. A short version of a long text is a long text with holes, and readers feel the holes.',
      "Demander le même texte en plus court. Une version courte d'un texte long est un texte long troué, et les lecteurs sentent les trous.",
    ),
    quiz: {
      q: B('What proves a set of formats came from one idea?',
        'Qu\'est-ce qui prouve qu\'une série de formats vient d\'une seule idée ?'),
      options: [
        B('They have the same title', 'Ils portent le même titre'),
        B('They were all published the same week', 'Ils ont tous été publiés la même semaine'),
        B('One sentence is in all of them', 'Une phrase se retrouve dans tous'),
      ],
      answer: 2,
      why: B(
        'A shared title is a label anyone can paste on. A sentence that survives every cut is the part that could not be removed, which is exactly what the idea was.',
        "Un titre commun est une étiquette qu'on colle. Une phrase qui survit à toutes les coupes est la partie qu'on ne pouvait pas retirer, c'est-à-dire l'idée elle-même.",
      ),
    },
    badge: B('Declines without repeating', 'Décline sans répéter'),
  },
]

const CO_FORMATS: Level[] = [
  {
    id: 'co-post',
    master: 'writing',
    minutes: 6,
    title: B('The post that stops in time', "Le post qui s'arrête à temps"),
    learn: B(
      'You will cut the three lines that always get added at the end.',
      "Vous couperez les trois lignes qu'on ajoute toujours à la fin.",
    ),
    act: B('Write your post, then ask where it could have stopped.',
      'Écrivez votre post, puis demandez où il aurait pu s\'arrêter.'),
    steps: [
      B('Ask for the last sentence that carries information, and cut after it.',
        "Demandez la dernière phrase qui porte une information, et coupez après."),
      B('Ask what the reader is meant to do. If nothing, say nothing.',
        "Demandez ce que le lecteur est censé faire. Si rien, ne dites rien."),
      B('Remove every sentence that comments on the post itself.',
        "Retirez chaque phrase qui commente le post lui-même."),
    ],
    trap: B(
      'Closing with a question to drive engagement. Readers recognise it, and it tells them the piece had no ending of its own.',
      "Conclure par une question pour faire réagir. Les lecteurs le reconnaissent, et cela leur dit que le texte n'avait pas de fin à lui.",
    ),
    quiz: {
      q: B('Which ending is worth keeping?',
        'Quelle fin mérite d\'être gardée ?'),
      options: [
        B('A question, to get people replying', 'Une question, pour faire réagir'),
        B('The last fact, and nothing after', 'Le dernier fait, et rien après'),
        B('A summary of the post', 'Un résumé du post'),
      ],
      answer: 1,
      why: B(
        'A post earns replies by being worth replying to. A question added at the end asks the reader to supply the interest the text did not.',
        "Un post gagne des réponses en méritant qu'on y réponde. Une question ajoutée à la fin demande au lecteur de fournir l'intérêt que le texte n'a pas eu.",
      ),
    },
    badge: B('Stops at the last fact', 'S\'arrête au dernier fait'),
  },
  {
    id: 'co-letter',
    master: 'writing',
    minutes: 7,
    title: B('A newsletter still opened at number ten', 'Une lettre encore ouverte au dixième numéro'),
    learn: B(
      'You will keep one promise per issue instead of sending a roundup.',
      "Vous tiendrez une promesse par numéro au lieu d'envoyer un récapitulatif.",
    ),
    act: B('Write the promise of your next issue in one line, then build it from that.',
      'Écrivez la promesse du prochain numéro en une ligne, puis construisez à partir d\'elle.'),
    steps: [
      B('The promise says what the reader will know by the end. Not what is inside.',
        "La promesse dit ce que le lecteur saura à la fin. Pas ce qu'il y a dedans."),
      B('Ask what to drop from the issue because it does not serve the promise.',
        "Demandez ce qu'il faut retirer du numéro parce que cela ne sert pas la promesse."),
      B('Write the subject line from the promise, last, once the issue exists.',
        "Écrivez l'objet à partir de la promesse, en dernier, une fois le numéro écrit."),
    ],
    trap: B(
      'Sending a roundup of the month. It has no promise, so it has no reason to be opened, and the tenth one is opened by nobody.',
      "Envoyer le récapitulatif du mois. Il n'a pas de promesse, donc aucune raison d'être ouvert, et le dixième ne l'est par personne.",
    ),
    quiz: {
      q: B('When do you write the subject line?',
        'Quand écrivez-vous l\'objet ?'),
      options: [
        B('Last, from the promise', 'En dernier, à partir de la promesse'),
        B('First, it frames the issue', 'En premier, il cadre le numéro'),
        B('At the same time as the intro', 'En même temps que l\'introduction'),
      ],
      answer: 0,
      why: B(
        'A subject written first becomes a promise the issue then has to fit. Written last, it can only say what the issue actually delivers, which is the one thing that keeps people opening.',
        "Un objet écrit en premier devient une promesse à laquelle le numéro doit ensuite se plier. Écrit en dernier, il ne peut dire que ce que le numéro tient vraiment, et c'est la seule chose qui fait qu'on continue d'ouvrir.",
      ),
    },
    badge: B('One promise per issue', 'Une promesse par numéro'),
  },
  {
    id: 'co-visual',
    master: 'tools',
    minutes: 7,
    title: B('Describing an image, not drawing it', "Décrire une image, pas la dessiner"),
    learn: B(
      'You will brief a visual so that what comes back can be judged.',
      "Vous briefierez un visuel de façon que ce qui revient puisse être jugé.",
    ),
    act: B('Write a brief that says the subject, the framing, and what must not appear.',
      'Écrivez un brief qui dit le sujet, le cadrage, et ce qui ne doit pas apparaître.'),
    steps: [
      B('Say where it will be seen and at what size. That decides everything else.',
        "Dites où il sera vu et à quelle taille. Cela décide de tout le reste."),
      B('Name what must not be there: no text, no faces, no logo.',
        "Nommez ce qui ne doit pas y être : pas de texte, pas de visages, pas de logo."),
      B('Ask for three options that differ in subject, not in colour.',
        "Demandez trois propositions qui diffèrent par le sujet, pas par la couleur."),
    ],
    trap: B(
      'Asking for something modern and clean. Both words mean the taste of whoever answers, so you get an average and you cannot say what is wrong with it.',
      "Demander quelque chose de moderne et épuré. Les deux mots désignent le goût de celui qui répond : vous obtenez une moyenne et vous ne pouvez pas dire ce qui cloche.",
    ),
    quiz: {
      q: B('Which line belongs in a visual brief?',
        'Quelle ligne a sa place dans un brief visuel ?'),
      options: [
        B('Seen at 400 pixels wide, no text', 'Vu en 400 pixels de large, sans texte'),
        B('Make it modern, striking and premium', 'Qu\'il soit moderne, percutant et haut de gamme'),
        B('Something in our brand colours', 'Quelque chose dans nos couleurs'),
      ],
      answer: 0,
      why: B(
        'A constraint you can check settles the argument before it starts. Text in an image seen at 400 pixels is unreadable, and that is a fact rather than an opinion about style.',
        "Une contrainte vérifiable tranche le débat avant qu'il commence. Du texte dans une image vue en 400 pixels est illisible, et c'est un fait plutôt qu'un avis sur le style.",
      ),
    },
    badge: B('Briefs what can be judged', 'Briefe ce qui se juge'),
  },
]

const CO_PRESS: Level[] = [
  {
    id: 'co-release',
    master: 'writing',
    minutes: 7,
    title: B('The release that fits on a page', 'Le communiqué qui tient sur une page'),
    learn: B(
      'You will lead with the news instead of building up to it.',
      "Vous commencerez par la nouvelle au lieu d'y amener.",
    ),
    act: B('Write the news in one sentence, then ask what the rest of the page owes it.',
      'Écrivez la nouvelle en une phrase, puis demandez ce que le reste de la page lui doit.'),
    steps: [
      B('First sentence: what happened, who, when. Nothing before it.',
        "Première phrase : ce qui se passe, qui, quand. Rien avant."),
      B('Then only what a journalist cannot find elsewhere.',
        "Ensuite, seulement ce qu'un journaliste ne trouve pas ailleurs."),
      B('Ask what a reader would still have to ask you. Answer that in the page.',
        "Demandez ce qu'un lecteur devrait encore vous demander. Répondez-y dans la page."),
    ],
    trap: B(
      'Opening on the company and its mission. A journalist reads the first line and decides; a mission statement in that line decides for them.',
      "Commencer par l'entreprise et sa mission. Un journaliste lit la première ligne et décide ; une phrase de mission à cet endroit décide à sa place.",
    ),
    quiz: {
      q: B('What goes in the first sentence of a release?',
        'Que met-on dans la première phrase d\'un communiqué ?'),
      options: [
        B('Who the company is', 'Qui est l\'entreprise'),
        B('Why it matters to the market', 'Pourquoi cela compte pour le marché'),
        B('What happened, and when', 'Ce qui se passe, et quand'),
      ],
      answer: 2,
      why: B(
        'The first line is read by someone deciding whether to keep reading. Only the news itself can win that decision, and everything else has a page to make its case.',
        "La première ligne est lue par quelqu'un qui décide s'il continue. Seule la nouvelle peut gagner cette décision, et tout le reste a une page pour plaider.",
      ),
    },
    badge: B('Leads with the news', 'Commence par la nouvelle'),
  },
  {
    id: 'co-answer',
    master: 'support',
    minutes: 6,
    title: B('Answering a journalist in twenty minutes', 'Répondre à un journaliste en vingt minutes'),
    learn: B(
      'You will answer fast without saying something you cannot stand behind.',
      "Vous répondrez vite sans dire une chose que vous ne pourrez pas assumer.",
    ),
    act: B('Draft the answer, then ask which sentence you would not want quoted alone.',
      'Rédigez la réponse, puis demandez quelle phrase vous ne voudriez pas voir citée seule.'),
    steps: [
      B('Answer the question asked. A different answer becomes the story.',
        "Répondez à la question posée. Une autre réponse devient l'article."),
      B('Ask for each sentence to be read as if it were the only one quoted.',
        "Demandez que chaque phrase soit lue comme si elle était la seule citée."),
      B('Say what you do not know, and when you will know it.',
        "Dites ce que vous ne savez pas, et quand vous le saurez."),
    ],
    trap: B(
      'Sending a long answer to look open. Length gives more sentences to quote out of context, and one of them will be.',
      "Envoyer une longue réponse pour paraître ouvert. La longueur donne plus de phrases à sortir de leur contexte, et l'une d'elles le sera.",
    ),
    quiz: {
      q: B('How should each sentence of your answer be tested?',
        'Comment faut-il éprouver chaque phrase de votre réponse ?'),
      options: [
        B('Read in the whole answer', 'Lue dans la réponse entière'),
        B('Read alone, as a quote', 'Lue seule, comme une citation'),
        B('Read by your own team', 'Lue par votre équipe'),
      ],
      answer: 1,
      why: B(
        'Almost nothing is published whole. A sentence that only works in context is a sentence that will appear without it, and the context will not travel with it.',
        "Presque rien n'est publié en entier. Une phrase qui ne tient que dans son contexte est une phrase qui paraîtra sans lui, et le contexte ne la suivra pas.",
      ),
    },
    badge: B('Writes quotable sentences', 'Écrit des phrases citables'),
  },
  {
    id: 'co-crisis',
    master: 'triage',
    minutes: 7,
    title: B('The sentence you cannot take back', 'La phrase qu\'on ne rattrape pas'),
    learn: B(
      'You will separate what is known from what is believed before saying anything.',
      "Vous séparerez ce qui est su de ce qui est cru avant de dire quoi que ce soit.",
    ),
    act: B('List the facts, the unknowns and the beliefs, then write only from the first list.',
      'Listez les faits, les inconnues et les croyances, puis n\'écrivez qu\'à partir de la première liste.'),
    steps: [
      B('Sort every statement into known, unknown, or assumed. Be strict.',
        "Classez chaque affirmation en su, inconnu, ou supposé. Soyez strict."),
      B('Write from the known list, and say plainly what is still unknown.',
        "Écrivez à partir des faits, et dites clairement ce qui reste inconnu."),
      B('Give the time of your next update, and hold it even with nothing new.',
        "Donnez l'heure de votre prochain point, et tenez-la même sans rien de neuf."),
    ],
    trap: B(
      'Saying that no customer was affected before you know. When it turns out one was, the story stops being the incident and becomes the denial.',
      "Dire qu'aucun client n'est touché avant de le savoir. Quand il s'avère que si, le sujet n'est plus l'incident mais le démenti.",
    ),
    quiz: {
      q: B('You do not yet know the extent. What do you publish?',
        'Vous ne connaissez pas encore l\'ampleur. Que publiez-vous ?'),
      options: [
        B('Nothing, until you know', 'Rien, tant que vous ne savez pas'),
        B('A reassuring note while the investigation runs', "Un message rassurant pendant que l'enquête se poursuit"),
        B('What is known, and the next update time', 'Ce qui est su, et l\'heure du prochain point'),
      ],
      answer: 2,
      why: B(
        'Silence is read as hiding, and reassurance you have to withdraw costs more than the incident. A short, true statement with a next time keeps the account yours.',
        "Le silence est lu comme une dissimulation, et une assurance qu'il faut retirer coûte plus cher que l'incident. Un message court, vrai, avec une prochaine heure, garde le récit de votre côté.",
      ),
    },
    badge: B('Separates known from believed', 'Sépare le su du cru'),
  },
]

/* ================================================================== */
/* FONDATEUR                                                           */
/* ================================================================== */

const FO_STORY: Level[] = [
  {
    id: 'fo-line',
    master: 'writing',
    minutes: 6,
    title: B('The sentence that says what you do', 'La phrase qui dit ce que vous faites'),
    learn: B(
      'You will say it once, the same way, to anyone who asks.',
      "Vous le direz une fois, de la même façon, à qui vous le demande.",
    ),
    act: B('Write it for one customer, then ask what a stranger would picture.',
      'Écrivez-la pour un client, puis demandez ce qu\'un inconnu imaginerait.'),
    steps: [
      B('Say who it is for and what they stop doing. Both, or it is a slogan.',
        "Dites pour qui c'est et ce qu'ils arrêtent de faire. Les deux, sinon c'est un slogan."),
      B('Ask what it could also describe. If the list is long, it says nothing.',
        "Demandez ce que cela pourrait décrire d'autre. Si la liste est longue, elle ne dit rien."),
      B('Read it out loud to someone outside. Keep their first question.',
        "Dites-la à voix haute à quelqu'un d'extérieur. Gardez sa première question."),
    ],
    trap: B(
      'Naming a category instead of a change. "An AI platform for teams" describes ten thousand companies and commits to none of their work.',
      "Nommer une catégorie plutôt qu'un changement. « Une plateforme IA pour les équipes » décrit dix mille entreprises et n'engage le travail d'aucune.",
    ),
    quiz: {
      q: B('How do you test the sentence?',
        'Comment éprouve-t-on la phrase ?'),
      options: [
        B('Ask if it sounds good', 'Demander si elle sonne bien'),
        B('Ask what else it could describe', 'Demander ce qu\'elle pourrait décrire d\'autre'),
        B('Ask whether it is short enough to remember', 'Demander si elle est assez courte pour se retenir'),
      ],
      answer: 1,
      why: B(
        'A sentence that fits your competitors is not about you. Listing what else it covers is the fastest way to see whether it says anything at all.',
        "Une phrase qui convient à vos concurrents ne parle pas de vous. Lister ce qu'elle couvre d'autre est la façon la plus rapide de voir si elle dit quoi que ce soit.",
      ),
    },
    badge: B('Says one thing', 'Dit une seule chose'),
  },
  {
    id: 'fo-deck',
    master: 'planning',
    minutes: 7,
    title: B('Ten slides, one argument', 'Dix diapositives, un raisonnement'),
    learn: B(
      'You will build a deck where each slide earns the next one.',
      "Vous construirez un deck où chaque diapositive mérite la suivante.",
    ),
    act: B('Write the ten sentences first, in order, and read them as one paragraph.',
      'Écrivez d\'abord les dix phrases, dans l\'ordre, et lisez-les comme un paragraphe.'),
    steps: [
      B('One sentence per slide, and that sentence is the title.',
        "Une phrase par diapositive, et cette phrase est le titre."),
      B('Read the ten in a row. If the paragraph limps, the deck limps.',
        "Lisez les dix à la suite. Si le paragraphe boite, le deck boite."),
      B('Ask where a reader would object, and put the answer on the next slide.',
        "Demandez où un lecteur objecterait, et mettez la réponse sur la diapositive suivante."),
    ],
    trap: B(
      'Designing before the argument holds. Pretty slides make a weak argument harder to see, including for you.',
      "Dessiner avant que le raisonnement tienne. De belles diapositives rendent un raisonnement faible plus difficile à voir, y compris par vous.",
    ),
    quiz: {
      q: B('What is the first thing to build in a deck?',
        'Que construit-on en premier dans un deck ?'),
      options: [
        B('The ten title sentences', 'Les dix phrases de titre'),
        B('The order the slides go in', 'L\'ordre dans lequel viennent les diapositives'),
        B('The numbers slide', 'La diapositive des chiffres'),
      ],
      answer: 0,
      why: B(
        'The titles read in a row are the argument stripped of everything else. If they do not convince on their own, no chart later in the deck will rescue them.',
        "Les titres lus à la suite sont le raisonnement débarrassé du reste. S'ils ne convainquent pas seuls, aucun graphique plus loin ne les sauvera.",
      ),
    },
    badge: B('Argues in ten lines', 'Raisonne en dix lignes'),
  },
  {
    id: 'fo-hard',
    master: 'research',
    minutes: 7,
    title: B('Answering the question that hurts', 'Répondre à la question qui fâche'),
    learn: B(
      'You will prepare the three objections you least want to hear.',
      "Vous préparerez les trois objections que vous voulez le moins entendre.",
    ),
    act: B('Ask it to argue against you as hard as it can, then answer in writing.',
      'Demandez-lui de plaider contre vous le plus durement possible, puis répondez par écrit.'),
    steps: [
      B('Give it your pitch and ask for the strongest case against it.',
        "Donnez-lui votre discours et demandez le réquisitoire le plus fort contre lui."),
      B('Keep the objections you cannot answer in one sentence. Those are the real ones.',
        "Gardez les objections auxquelles vous ne répondez pas en une phrase. Ce sont les vraies."),
      B('Write the answer you would give, and check what it assumes.',
        "Écrivez la réponse que vous donneriez, et vérifiez ce qu'elle suppose."),
    ],
    trap: B(
      'Rehearsing the answers you already had. A model that agrees with you produces the objections you have already beaten, which is a rehearsal and not a test.',
      "Répéter les réponses que vous aviez déjà. Un modèle qui vous donne raison produit les objections que vous avez déjà vaincues : c'est une répétition, pas une épreuve.",
    ),
    quiz: {
      q: B('Which objection is worth preparing?',
        'Quelle objection mérite d\'être préparée ?'),
      options: [
        B('The one you answer instantly', 'Celle à laquelle vous répondez aussitôt'),
        B('The one nobody in the room has raised yet', "Celle que personne dans la salle n'a encore soulevée"),
        B('The one that takes you a paragraph', 'Celle qui vous prend un paragraphe'),
      ],
      answer: 2,
      why: B(
        'An objection you answer instantly was never a risk. The one that needs a paragraph is the one you will fumble in a room, and it is the only one worth the work.',
        "Une objection à laquelle vous répondez aussitôt n'a jamais été un risque. Celle qui demande un paragraphe est celle que vous raterez dans une salle, et la seule qui mérite le travail.",
      ),
    },
    badge: B('Prepares the hard one', 'Prépare la difficile'),
  },
]

const FO_CUSTOMER: Level[] = [
  {
    id: 'fo-interview',
    master: 'research',
    minutes: 7,
    title: B('Twenty conversations, without leading', 'Vingt entretiens, sans influencer'),
    learn: B(
      'You will ask about the past instead of asking about intentions.',
      "Vous interrogerez le passé au lieu d'interroger les intentions.",
    ),
    act: B('Write ten questions, then ask which of them predict nothing.',
      'Écrivez dix questions, puis demandez lesquelles ne prédisent rien.'),
    steps: [
      B('Ask what they did last time, not what they would do.',
        "Demandez ce qu'ils ont fait la dernière fois, pas ce qu'ils feraient."),
      B('Never name your solution before the end of the conversation.',
        "Ne nommez jamais votre solution avant la fin de l'entretien."),
      B('Ask what it cost them: time, money, or an argument with someone.',
        "Demandez ce que cela leur a coûté : du temps, de l'argent, ou une dispute."),
    ],
    trap: B(
      'Asking whether they would use it. Everyone says yes to a stranger who built something, and that yes has never predicted a single purchase.',
      "Demander s'ils l'utiliseraient. Tout le monde dit oui à un inconnu qui a construit quelque chose, et ce oui n'a jamais prédit un seul achat.",
    ),
    quiz: {
      q: B('Which question is worth asking?',
        'Quelle question vaut la peine d\'être posée ?'),
      options: [
        B('Would you pay for this?', 'Paieriez-vous pour cela ?'),
        B('What did you do last time?', 'Qu\'avez-vous fait la dernière fois ?'),
        B('Does this seem useful to you?', 'Cela vous paraît-il utile ?'),
      ],
      answer: 1,
      why: B(
        'The past happened, so it can be described in detail and it cannot be invented to please you. An intention costs nothing to state and is forgotten on the way out.',
        "Le passé a eu lieu, donc il se raconte en détail et ne s'invente pas pour vous faire plaisir. Une intention ne coûte rien à déclarer et s'oublie en sortant.",
      ),
    },
    badge: B('Asks about the past', 'Interroge le passé'),
  },
  {
    id: 'fo-verbatim',
    master: 'extraction',
    minutes: 7,
    title: B('Reading notes without seeing what you want', 'Lire des notes sans y voir ce qu\'on veut'),
    learn: B(
      'You will let the recurring problem appear instead of looking for it.',
      "Vous laisserez le problème récurrent apparaître au lieu de le chercher.",
    ),
    act: B('Paste twenty verbatim notes and ask what comes back, before saying what you expect.',
      'Collez vingt notes brutes et demandez ce qui revient, avant de dire ce que vous attendez.'),
    steps: [
      B('Paste the words people used, not your summary of them.',
        "Collez les mots employés, pas votre résumé."),
      B('Ask for the themes with a count, and the quotes behind each one.',
        "Demandez les thèmes avec un effectif, et les citations derrière chacun."),
      B('Ask which theme has fewest quotes. That is the one you are inflating.',
        "Demandez quel thème a le moins de citations. C'est celui que vous gonflez."),
    ],
    trap: B(
      'Saying up front what you expect to find. You will find it, in the quotes that half fit, and you will never notice the ones you skipped.',
      "Annoncer d'avance ce que vous espérez trouver. Vous le trouverez, dans les citations qui conviennent à moitié, et vous ne verrez jamais celles que vous avez sautées.",
    ),
    quiz: {
      q: B('Why send the raw words and not your summary?',
        'Pourquoi envoyer les mots bruts et pas votre résumé ?'),
      options: [
        B('It is faster and there is less to paste', "C'est plus rapide et il y a moins à coller"),
        B('Your summary already chose', 'Votre résumé a déjà choisi'),
        B('The tool prefers long text', 'L\'outil préfère les longs textes'),
      ],
      answer: 1,
      why: B(
        'Summarising is deciding what mattered. Handing over a summary asks for confirmation of a decision you already made, and you will get it.',
        "Résumer, c'est décider de ce qui comptait. Remettre un résumé demande la confirmation d'une décision déjà prise, et vous l'obtiendrez.",
      ),
    },
    badge: B('Lets the notes speak', 'Laisse parler les notes'),
  },
  {
    id: 'fo-price',
    master: 'analysis',
    minutes: 7,
    title: B('The first price', 'Le premier prix'),
    learn: B(
      'You will set a price against what it replaces, not against your costs.',
      "Vous fixerez un prix face à ce qu'il remplace, pas face à vos coûts.",
    ),
    act: B('Name what a customer stops paying for, then ask what a fair share of that is.',
      'Nommez ce qu\'un client cesse de payer, puis demandez quelle part en revient justement.'),
    steps: [
      B('Write what they do today and what it costs them in hours or money.',
        "Écrivez ce qu'ils font aujourd'hui et ce que cela leur coûte en heures ou en argent."),
      B('Ask for three price levels and what each one says about the product.',
        "Demandez trois niveaux de prix et ce que chacun dit du produit."),
      B('Ask which one you would be embarrassed to say out loud. Ask why.',
        "Demandez lequel vous gênerait à dire à voix haute. Demandez pourquoi."),
    ],
    trap: B(
      'Pricing from your costs. Your costs are your problem; the customer compares your price to what they already spend on the same problem.',
      "Fixer le prix à partir de vos coûts. Vos coûts sont votre problème ; le client compare votre prix à ce qu'il dépense déjà pour le même problème.",
    ),
    quiz: {
      q: B('What is the price compared against?',
        'À quoi le prix est-il comparé ?'),
      options: [
        B('What it costs you to build and serve', 'Ce que cela vous coûte à construire et à servir'),
        B('What a competitor charges', 'Ce que facture un concurrent'),
        B('What they spend on this today', 'Ce qu\'ils dépensent aujourd\'hui pour cela'),
      ],
      answer: 2,
      why: B(
        'Buyers do not know your costs and cannot be made to care. They know what this problem already takes from them, and that number is the only one they can compare you to.',
        "Les acheteurs ignorent vos coûts et on ne peut pas les y intéresser. Ils savent ce que ce problème leur prend déjà, et ce chiffre est le seul auquel ils peuvent vous comparer.",
      ),
    },
    badge: B('Prices against the problem', 'Fixe le prix face au problème'),
  },
]

const FO_TEAM: Level[] = [
  {
    id: 'fo-role',
    master: 'planning',
    minutes: 6,
    title: B('Writing the job before hiring for it', 'Écrire le poste avant de recruter'),
    learn: B(
      'You will describe the work of the first ninety days, not a profile.',
      "Vous décrirez le travail des quatre-vingt-dix premiers jours, pas un profil.",
    ),
    act: B('Write what this person will have finished in three months, then work back.',
      'Écrivez ce que cette personne aura terminé dans trois mois, puis remontez.'),
    steps: [
      B('List three things that will exist because they were there.',
        "Listez trois choses qui existeront parce qu'ils étaient là."),
      B('Ask what skills those three things actually require.',
        "Demandez quelles compétences ces trois choses exigent vraiment."),
      B('Cut every requirement that does not appear in that answer.',
        "Coupez chaque exigence qui n'apparaît pas dans cette réponse."),
    ],
    trap: B(
      'Listing five years of experience in six tools. It filters out people who would have delivered the three things and keeps people who have seen the tools.',
      "Lister cinq ans d'expérience sur six outils. Cela écarte ceux qui auraient livré les trois choses et retient ceux qui ont vu les outils.",
    ),
    quiz: {
      q: B('What does a good role description start from?',
        'De quoi part une bonne description de poste ?'),
      options: [
        B('The skills and tools the job requires', 'Les compétences et outils exigés par le poste'),
        B('What will exist in ninety days', 'Ce qui existera dans quatre-vingt-dix jours'),
        B('The level of seniority', 'Le niveau de séniorité'),
      ],
      answer: 1,
      why: B(
        'Outcomes can be checked at ninety days, and they tell you which skills were actually needed. A skill list can only be checked against a CV, which is a description of the past.',
        "Des livrables se vérifient à quatre-vingt-dix jours, et ils disent quelles compétences étaient vraiment nécessaires. Une liste de compétences ne se vérifie que sur un CV, c'est-à-dire sur le passé.",
      ),
    },
    badge: B('Hires for an outcome', 'Recrute pour un résultat'),
  },
  {
    id: 'fo-decide',
    master: 'writing',
    minutes: 6,
    title: B('One decision a week, written', 'Une décision par semaine, écrite'),
    learn: B(
      'You will keep a record that tells you later why you chose that.',
      "Vous tiendrez une trace qui vous dira plus tard pourquoi vous aviez choisi cela.",
    ),
    act: B('Write the decision, the options, and what would make it wrong.',
      'Écrivez la décision, les options, et ce qui la rendrait fausse.'),
    steps: [
      B('State the decision in one sentence, in the past tense. It is made.',
        "Énoncez la décision en une phrase, au passé. Elle est prise."),
      B('List the options you rejected and the one reason each was rejected.',
        "Listez les options écartées et l'unique raison de chaque rejet."),
      B('Name the fact that would prove you wrong, and when you will look.',
        "Nommez le fait qui vous donnerait tort, et quand vous irez regarder."),
    ],
    trap: B(
      'Recording only the decision. Six months later nobody remembers the alternatives, so the same argument runs again from the start.',
      "Ne consigner que la décision. Six mois plus tard, personne ne se souvient des alternatives, et le même débat recommence depuis le début.",
    ),
    quiz: {
      q: B('What makes a decision record useful later?',
        'Qu\'est-ce qui rend une décision consignée utile plus tard ?'),
      options: [
        B('The options that were rejected', 'Les options qui ont été écartées'),
        B('The date it was made', 'La date à laquelle elle a été prise'),
        B('Who signed it off, and on what date', "Qui l'a validée, et à quelle date"),
      ],
      answer: 0,
      why: B(
        'The decision alone reads as obvious in hindsight, so it teaches nothing. The rejected options are what show the situation you were actually in.',
        "La décision seule paraît évidente après coup, donc elle n'apprend rien. Les options écartées sont ce qui montre la situation où vous étiez vraiment.",
      ),
    },
    badge: B('Keeps the alternatives', 'Garde les alternatives'),
  },
  {
    id: 'fo-keep',
    master: 'triage',
    minutes: 6,
    title: B('What you will not hand over', 'Ce que vous ne confierez pas'),
    learn: B(
      'You will tell apart what can be delegated from what only you can hold.',
      "Vous distinguerez ce qui se délègue de ce que vous seul pouvez tenir.",
    ),
    act: B('List a week of your work and sort it into three piles yourself.',
      'Listez une semaine de votre travail et triez-la vous-même en trois tas.'),
    steps: [
      B('Pile one: anyone could do it with instructions. Write the instructions.',
        "Premier tas : n'importe qui peut le faire avec une consigne. Écrivez la consigne."),
      B('Pile two: someone could, once they know the context. Write the context.',
        "Deuxième tas : quelqu'un le pourrait, une fois le contexte connu. Écrivez le contexte."),
      B('Pile three: it needs your judgement or your name. Keep it, and say why.',
        "Troisième tas : il faut votre jugement ou votre nom. Gardez-le, et dites pourquoi."),
    ],
    trap: B(
      'Keeping a task because explaining it would take longer than doing it. That is true once, and false every week after.',
      "Garder une tâche parce que l'expliquer prendrait plus de temps que la faire. C'est vrai une fois, et faux toutes les semaines suivantes.",
    ),
    quiz: {
      q: B('Explaining a task takes longer than doing it. What do you do?',
        'Expliquer une tâche prend plus de temps que la faire. Que faites-vous ?'),
      options: [
        B('Explain it once, if it recurs', 'Vous l\'expliquez une fois, si elle revient'),
        B('Keep it, it is faster', 'Vous la gardez, c\'est plus rapide'),
        B('Wait until you have time to explain it', "Vous attendez d'avoir le temps de l'expliquer"),
      ],
      answer: 0,
      why: B(
        'The comparison is wrong: it is explaining once against doing it every week. Only a task that never comes back is worth keeping on that argument.',
        "La comparaison est fausse : c'est expliquer une fois contre le faire toutes les semaines. Seule une tâche qui ne revient jamais mérite d'être gardée sur cet argument.",
      ),
    },
    badge: B('Sorts before delegating', 'Trie avant de déléguer'),
  },
]

/* ================================================================== */
/* LES CITÉS DES TROIS PREMIERS MÉTIERS                                */
/* ================================================================== */

export const TRADE_MODULES_1: Module[] = [
  {
    id: 'gr-acquisition', track: 'trade', glyph: 'target', tint: '#e0459b', at: [1, 10], levels: GR_ACQ,
    title: B('Acquisition', 'L\'acquisition'),
    blurb: B('One segment, angles that mean something, a page that keeps the promise.',
      "Un segment, des angles qui veulent dire quelque chose, une page qui tient la promesse."),
  },
  {
    id: 'gr-lifecycle', track: 'trade', glyph: 'ring', tint: '#e0459b', at: [3, 10], levels: GR_LIFE,
    title: B('Lifecycle', 'Le cycle de vie'),
    blurb: B('The first day, follow-ups that add something, seeing who is about to leave.',
      "Le premier jour, des relances qui apportent quelque chose, voir qui va partir."),
  },
  {
    id: 'gr-measure', track: 'trade', glyph: 'bars', tint: '#e0459b', at: [5, 10], levels: GR_MEASURE,
    title: B('Measurement', 'La mesure'),
    blurb: B('One question per board, reading a test honestly, doubting attribution.',
      "Une question par tableau, lire un test honnêtement, douter de l'attribution."),
  },
  {
    id: 'co-voice', track: 'trade', glyph: 'pen', tint: '#0ea5e9', at: [1, 12], levels: CO_VOICE,
    title: B('The editorial line', 'La ligne éditoriale'),
    blurb: B('A written voice, a calendar that holds, one idea in several forms.',
      "Une voix écrite, un calendrier qui tient, une idée en plusieurs formes."),
  },
  {
    id: 'co-formats', track: 'trade', glyph: 'layers', tint: '#0ea5e9', at: [3, 12], levels: CO_FORMATS,
    title: B('The formats', 'Les formats'),
    blurb: B('A post that stops in time, a letter still opened, a visual that can be judged.',
      "Un post qui s'arrête à temps, une lettre encore ouverte, un visuel qui se juge."),
  },
  {
    id: 'co-press', track: 'trade', glyph: 'star4', tint: '#0ea5e9', at: [5, 12], levels: CO_PRESS,
    title: B('Press and crisis', 'Presse et crise'),
    blurb: B('Lead with the news, answer in twenty minutes, separate known from believed.',
      "Commencer par la nouvelle, répondre en vingt minutes, séparer le su du cru."),
  },
  {
    id: 'fo-story', track: 'trade', glyph: 'peak', tint: '#7b5cff', at: [1, 14], levels: FO_STORY,
    title: B('The story', 'Le récit'),
    blurb: B('One sentence, ten slides that argue, the objection that hurts.',
      "Une phrase, dix diapositives qui raisonnent, l'objection qui fâche."),
  },
  {
    id: 'fo-customer', track: 'trade', glyph: 'centre', tint: '#7b5cff', at: [3, 14], levels: FO_CUSTOMER,
    title: B('The customer', 'Le client'),
    blurb: B('Ask about the past, let the notes speak, price against the problem.',
      "Interroger le passé, laisser parler les notes, fixer le prix face au problème."),
  },
  {
    id: 'fo-team', track: 'trade', glyph: 'quadrant', tint: '#7b5cff', at: [5, 14], levels: FO_TEAM,
    title: B('Team and time', 'L\'équipe et le temps'),
    blurb: B('Hire for an outcome, keep the alternatives, sort before delegating.',
      "Recruter pour un résultat, garder les alternatives, trier avant de déléguer."),
  },
]

export const TRADES_1: Trade[] = [
  {
    id: 'growth',
    label: B('Growth marketer', 'Growth marketer'),
    who: B('You are answerable for what comes in, and for what it cost.',
      "Vous répondez de ce qui rentre, et de ce que cela a coûté."),
    glyph: 'target', tint: '#e0459b',
    cities: ['gr-acquisition', 'gr-lifecycle', 'gr-measure'],
  },
  {
    id: 'comms',
    label: B('Communications', 'Communicant'),
    who: B('You write what the company says, and you answer for it.',
      "Vous écrivez ce que dit l'entreprise, et vous en répondez."),
    glyph: 'pen', tint: '#0ea5e9',
    cities: ['co-voice', 'co-formats', 'co-press'],
  },
  {
    id: 'founder',
    label: B('Founder', 'Fondateur'),
    who: B('You decide, you sell, and you hire, often in the same day.',
      "Vous décidez, vous vendez et vous recrutez, souvent le même jour."),
    glyph: 'peak', tint: '#7b5cff',
    cities: ['fo-story', 'fo-customer', 'fo-team'],
  },
]
/* ================================================================== */
/* CHEF DE PRODUIT                                                     */
/* ================================================================== */

const PR_PROBLEM: Level[] = [
  {
    id: 'pr-problem',
    master: 'research',
    minutes: 7,
    title: B('The problem before the solution', 'Le problème avant la solution'),
    learn: B(
      'You will state a problem that does not already contain its answer.',
      "Vous énoncerez un problème qui ne contient pas déjà sa réponse.",
    ),
    act: B('Write the request you received, then ask what problem it assumes is solved.',
      'Écrivez la demande reçue, puis demandez quel problème elle suppose résolu.'),
    steps: [
      B('Write the request as it arrived, with the feature name in it.',
        "Écrivez la demande telle qu'elle est arrivée, avec le nom de la fonction."),
      B('Ask what the person was trying to do just before they asked.',
        "Demandez ce que la personne essayait de faire juste avant de demander."),
      B('Restate the problem with no solution in the sentence. Then look for three.',
        "Reformulez le problème sans solution dans la phrase. Cherchez-en trois ensuite."),
    ],
    trap: B(
      'Taking "we need an export" as a problem. It is already an answer, and it hides the question of what they do with the file afterwards.',
      "Prendre « il nous faut un export » pour un problème. C'est déjà une réponse, et elle masque la question de ce qu'ils font du fichier ensuite.",
    ),
    quiz: {
      q: B('A customer asks for a bulk import. What do you write down?',
        'Un client demande un import en masse. Qu\'écrivez-vous ?'),
      options: [
        B('They re-enter data they already have', 'Ils resaisissent des données qu\'ils ont déjà'),
        B('Build a bulk import', 'Construire un import en masse'),
        B('A bulk import, marked as high priority', 'Un import en masse, marqué prioritaire'),
      ],
      answer: 0,
      why: B(
        'Written as a problem, the same request can be answered by an import, a connector, or by not needing the data at all. Written as a feature, only one of those three can ever be considered.',
        "Écrite comme un problème, la même demande peut se résoudre par un import, un connecteur, ou en n'ayant plus besoin de la donnée. Écrite comme une fonction, une seule des trois sera jamais envisagée.",
      ),
    },
    badge: B('States problems', 'Énonce des problèmes'),
  },
  {
    id: 'pr-triage',
    master: 'triage',
    minutes: 7,
    title: B('Sorting what comes in', 'Trier ce qui remonte'),
    learn: B(
      'You will group hundreds of messages by problem, not by wording.',
      "Vous regrouperez des centaines de messages par problème, pas par formulation.",
    ),
    act: B('Paste fifty pieces of feedback and ask for groups, with the count in each.',
      'Collez cinquante retours et demandez des groupes, avec leur effectif.'),
    steps: [
      B('Send the messages raw, with no category of your own.',
        "Envoyez les messages bruts, sans catégorie de votre part."),
      B('Ask for groups by underlying problem, and one quote per group.',
        "Demandez des groupes par problème sous-jacent, et une citation par groupe."),
      B('Check the two smallest groups by hand. That is where the sorting broke.',
        "Vérifiez les deux plus petits groupes à la main. C'est là que le tri a cassé."),
    ],
    trap: B(
      'Giving it your existing categories. Everything will fit in them, including the messages that were telling you the categories are wrong.',
      "Lui donner vos catégories existantes. Tout y rentrera, y compris les messages qui vous disaient que ces catégories sont fausses.",
    ),
    quiz: {
      q: B('Why check the smallest groups rather than the biggest?',
        'Pourquoi vérifier les plus petits groupes plutôt que les plus gros ?'),
      options: [
        B('They are the quickest ones to read', 'Ce sont les plus rapides à lire'),
        B('They matter less', 'Ils comptent moins'),
        B('That is where sorting fails', 'C\'est là que le tri échoue'),
      ],
      answer: 2,
      why: B(
        'A big group is held together by an obvious shared word, so it is rarely wrong. A group of two is often two unrelated things that happened to share a phrase.',
        "Un gros groupe tient par un mot commun évident, il est rarement faux. Un groupe de deux est souvent deux choses sans rapport qui partageaient une tournure.",
      ),
    },
    badge: B('Groups by problem', 'Regroupe par problème'),
  },
  {
    id: 'pr-no',
    master: 'writing',
    minutes: 6,
    title: B('Saying no in writing', 'Dire non par écrit'),
    learn: B(
      'You will refuse in a way that survives being forwarded.',
      "Vous refuserez d'une façon qui survit à un transfert.",
    ),
    act: B('Write the refusal, then ask how it reads to someone who was not in the thread.',
      'Écrivez le refus, puis demandez comment il se lit pour quelqu\'un hors du fil.'),
    steps: [
      B('Say what you understood of the problem, in their words, first.',
        "Dites d'abord ce que vous avez compris du problème, avec leurs mots."),
      B('Give the one reason. A list of reasons reads as an excuse.',
        "Donnez l'unique raison. Une liste de raisons se lit comme une excuse."),
      B('Say what would change the answer, and when you will look again.',
        "Dites ce qui changerait la réponse, et quand vous regarderez à nouveau."),
    ],
    trap: B(
      'Answering "not on the roadmap". It gives no reason, so it invites the same request again next quarter, through someone more senior.',
      "Répondre « ce n'est pas au programme ». Cela ne donne aucune raison, donc la demande reviendra au trimestre suivant, par quelqu'un de plus haut placé.",
    ),
    quiz: {
      q: B('What makes a refusal hold over time?',
        'Qu\'est-ce qui fait tenir un refus dans la durée ?'),
      options: [
        B('It says what would change it', 'Il dit ce qui le changerait'),
        B('It is short and firm', 'Il est court et ferme'),
        B('It comes from someone senior enough', "Il vient de quelqu'un d'assez haut placé"),
      ],
      answer: 0,
      why: B(
        'A refusal with a condition attached turns an argument into a wait. Without one, the only way to reopen it is to escalate, and someone will.',
        "Un refus assorti d'une condition transforme un débat en attente. Sans condition, la seule façon de le rouvrir est de monter d'un cran, et quelqu'un le fera.",
      ),
    },
    badge: B('Refuses with a condition', 'Refuse avec une condition'),
  },
]

const PR_SPEC: Level[] = [
  {
    id: 'pr-spec',
    master: 'writing',
    minutes: 7,
    title: B('A spec an engineer can read', 'Une spécification qu\'un développeur peut lire'),
    learn: B(
      'You will describe behaviour instead of describing screens.',
      "Vous décrirez des comportements au lieu de décrire des écrans.",
    ),
    act: B('Write what the system does in each case, and ask what case is missing.',
      'Écrivez ce que le système fait dans chaque cas, et demandez quel cas manque.'),
    steps: [
      B('One line per case: given this, the system does that.',
        "Une ligne par cas : dans telle situation, le système fait telle chose."),
      B('Ask which cases are not covered by your lines.',
        "Demandez quels cas ne sont couverts par aucune de vos lignes."),
      B('Ask which two lines contradict each other. There is usually one pair.',
        "Demandez quelles deux lignes se contredisent. Il y a presque toujours une paire."),
    ],
    trap: B(
      'Describing the screen. A screen description leaves every state unsaid: empty, loading, too many rows, half a permission.',
      "Décrire l'écran. Une description d'écran laisse tous les états non dits : vide, en cours, trop de lignes, une permission à moitié.",
    ),
    quiz: {
      q: B('Which line belongs in a spec?',
        'Quelle ligne a sa place dans une spécification ?'),
      options: [
        B('A list on the left, a form on the right', 'Une liste à gauche, un formulaire à droite'),
        B('With no rows, it shows how to add one', 'Sans aucune ligne, il montre comment en ajouter une'),
        B('The page should feel fast', 'La page doit sembler rapide'),
      ],
      answer: 1,
      why: B(
        'A behaviour can be built and then checked by someone who was not in the conversation. A layout and a feeling can both be delivered exactly as asked and still be wrong.',
        "Un comportement se construit puis se vérifie par quelqu'un qui n'était pas dans la conversation. Une mise en page et une impression peuvent être livrées exactement comme demandé et rester fausses.",
      ),
    },
    badge: B('Writes behaviour', 'Écrit des comportements'),
  },
  {
    id: 'pr-edges',
    master: 'analysis',
    minutes: 7,
    title: B('The edges, listed', 'Les cas limites, listés'),
    learn: B(
      'You will find the states nobody drew before they are found in production.',
      "Vous trouverez les états que personne n'a dessinés avant qu'ils ne soient trouvés en production.",
    ),
    act: B('Give it your spec and ask for every state a user could be in.',
      'Donnez-lui votre spécification et demandez tous les états où un utilisateur peut être.'),
    steps: [
      B('Ask for the empty case, the huge case, and the interrupted case.',
        "Demandez le cas vide, le cas énorme, et le cas interrompu."),
      B('Ask what happens when two people do it at the same time.',
        "Demandez ce qui se passe quand deux personnes le font en même temps."),
      B('Decide each one yourself. An undecided edge becomes a bug with your name.',
        "Tranchez chacun vous-même. Un cas limite non tranché devient un défaut à votre nom."),
    ],
    trap: B(
      'Leaving an edge to be decided during build. It will be decided, in three seconds, by whoever is writing that line at the time.',
      "Laisser un cas limite à trancher pendant le développement. Il sera tranché, en trois secondes, par celui qui écrit la ligne à ce moment-là.",
    ),
    quiz: {
      q: B('Which state is forgotten most often?',
        'Quel état est le plus souvent oublié ?'),
      options: [
        B('The empty one, on day one', 'Le vide, le premier jour'),
        B('The one with too much data', 'Celui avec trop de données'),
        B('The one with an error', 'Celui avec une erreur'),
      ],
      answer: 0,
      why: B(
        'The empty state is the only one every single user sees, and it is the one nobody designs because the mock-up was drawn with sample data in it.',
        "L'état vide est le seul que chaque utilisateur voit sans exception, et c'est celui que personne ne dessine parce que la maquette a été faite avec des données d'exemple.",
      ),
    },
    badge: B('Decides the edges', 'Tranche les cas limites'),
  },
  {
    id: 'pr-mock',
    master: 'tools',
    minutes: 6,
    title: B('Describing a screen in words', 'Décrire un écran avec des mots'),
    learn: B(
      'You will get a first screen to react to instead of an empty page.',
      "Vous obtiendrez un premier écran auquel réagir au lieu d'une page blanche.",
    ),
    act: B('Describe the structure, the data and the one action, then ask for a rough screen.',
      'Décrivez la structure, les données et l\'unique action, puis demandez un écran grossier.'),
    steps: [
      B('Say what is on the page, in order of importance. Order is the design.',
        "Dites ce qu'il y a sur la page, par ordre d'importance. L'ordre EST le design."),
      B('Say the one thing the user came to do. One, not a list of options.',
        "Dites la seule chose que l'utilisateur vient faire. Une, pas une liste de possibilités."),
      B('Treat what comes back as a draft to argue with, never as a design.',
        "Traitez ce qui revient comme un brouillon à contester, jamais comme un design."),
    ],
    trap: B(
      'Shipping what comes back. It is an average of everything the model has seen, which is exactly the screen your competitors already have.',
      "Livrer ce qui revient. C'est une moyenne de tout ce que le modèle a vu, c'est-à-dire exactement l'écran que vos concurrents ont déjà.",
    ),
    quiz: {
      q: B('What is a generated screen good for?',
        'À quoi sert un écran généré ?'),
      options: [
        B('Shipping quickly', 'Livrer vite'),
        B('Showing it to a customer this week', 'Le montrer à un client cette semaine'),
        B('Having something to argue with', 'Avoir quelque chose à contester'),
      ],
      answer: 2,
      why: B(
        'People say far more about a wrong screen than about an empty page. That reaction is the whole value, and it disappears the moment the draft is treated as a decision.',
        "Les gens en disent bien plus devant un écran faux que devant une page blanche. Cette réaction est tout l'intérêt, et elle disparaît dès que le brouillon est pris pour une décision.",
      ),
    },
    badge: B('Drafts to argue with', 'Ébauche pour contester'),
  },
]

const PR_SHIP: Level[] = [
  {
    id: 'pr-stop',
    master: 'analysis',
    minutes: 6,
    title: B('The stopping condition', 'Le critère d\'arrêt'),
    learn: B(
      'You will say before building what would count as it having worked.',
      "Vous direz avant de construire ce qui compterait comme une réussite.",
    ),
    act: B('Write the number and the date that will decide, before a line is written.',
      'Écrivez le chiffre et la date qui trancheront, avant la première ligne de code.'),
    steps: [
      B('One number, measurable today, that would move if this works.',
        "Un chiffre, mesurable dès aujourd'hui, qui bougerait si cela marche."),
      B('A date to look at it, far enough away to be fair.',
        "Une date pour le regarder, assez loin pour être juste."),
      B('What you will do if it does not move. Write that too.',
        "Ce que vous ferez s'il ne bouge pas. Écrivez-le aussi."),
    ],
    trap: B(
      'Choosing the metric after launch. Something always moved, and the one that moved becomes the one you were aiming for.',
      "Choisir l'indicateur après la mise en service. Quelque chose a toujours bougé, et celui qui a bougé devient celui qu'on visait.",
    ),
    quiz: {
      q: B('When is the success metric chosen?',
        'Quand choisit-on l\'indicateur de réussite ?'),
      options: [
        B('At launch, with real data', 'Au lancement, avec de vraies données'),
        B('Before building', 'Avant de construire'),
        B('At the review, a month later', 'Au bilan, un mois plus tard'),
      ],
      answer: 1,
      why: B(
        'Chosen afterwards, a metric can only confirm. Chosen before, it is the one thing in the project that is allowed to tell you no.',
        "Choisi après, un indicateur ne peut que confirmer. Choisi avant, c'est la seule chose du projet qui ait le droit de vous dire non.",
      ),
    },
    badge: B('Names the number first', 'Nomme le chiffre d\'abord'),
  },
  {
    id: 'pr-notes',
    master: 'writing',
    minutes: 6,
    title: B('Release notes people read', 'La note de version qui se lit'),
    learn: B(
      'You will write what changed for the user, not what was merged.',
      "Vous écrirez ce qui change pour l'utilisateur, pas ce qui a été livré.",
    ),
    act: B('Take your change list and ask what each line means for someone using it.',
      'Prenez votre liste de changements et demandez ce que chaque ligne veut dire pour un utilisateur.'),
    steps: [
      B('Start every line with what the reader can now do.',
        "Commencez chaque ligne par ce que le lecteur peut désormais faire."),
      B('Drop everything nobody outside would notice.',
        "Retirez tout ce que personne à l'extérieur ne remarquerait."),
      B('Put the one that matters first, alone, and the rest under it.',
        "Mettez celle qui compte en premier, seule, et le reste en dessous."),
    ],
    trap: B(
      'Publishing the list of tickets. Every line is true and none of them is addressed to the person reading.',
      "Publier la liste des tickets. Chaque ligne est vraie et aucune ne s'adresse à celui qui lit.",
    ),
    quiz: {
      q: B('How does a good release note line begin?',
        'Comment commence une bonne ligne de note de version ?'),
      options: [
        B('With the component that changed', 'Par le composant modifié'),
        B('With the ticket number', 'Par le numéro de ticket'),
        B('With what you can now do', 'Par ce que vous pouvez désormais faire'),
      ],
      answer: 2,
      why: B(
        'The reader is deciding in half a second whether this concerns them. Only the new ability answers that, and everything else makes them stop reading.',
        "Le lecteur décide en une demi-seconde si cela le concerne. Seule la nouvelle possibilité répond à cette question, et tout le reste le fait arrêter de lire.",
      ),
    },
    badge: B('Writes for the reader', 'Écrit pour le lecteur'),
  },
  {
    id: 'pr-post',
    master: 'analysis',
    minutes: 7,
    title: B('What went wrong, with no culprit', 'Ce qui a raté, sans coupable'),
    learn: B(
      'You will find the condition that made the mistake possible.',
      "Vous trouverez la condition qui a rendu l'erreur possible.",
    ),
    act: B('Write the timeline, then ask what would have had to be true to stop it.',
      'Écrivez la chronologie, puis demandez ce qui aurait dû être vrai pour l\'empêcher.'),
    steps: [
      B('Write the sequence with times, and no names.',
        "Écrivez la suite des faits avec des heures, et sans noms."),
      B('Ask at which moment it could still have been caught.',
        "Demandez à quel moment cela pouvait encore être attrapé."),
      B('Ask what made that moment invisible. That is the thing to change.',
        "Demandez ce qui a rendu ce moment invisible. C'est cela qu'il faut changer."),
    ],
    trap: B(
      'Concluding that someone should have been more careful. That is not a change, it is a wish, and it guarantees the same day happens again.',
      "Conclure qu'il aurait fallu être plus vigilant. Ce n'est pas un changement, c'est un souhait, et cela garantit que la même journée se reproduira.",
    ),
    quiz: {
      q: B('Which conclusion actually changes something?',
        'Quelle conclusion change vraiment quelque chose ?'),
      options: [
        B('Be more careful during deployments', 'Être plus vigilant lors des mises en service'),
        B('Add a second reviewer', 'Ajouter un deuxième relecteur'),
        B('The check ran after, not before', 'La vérification passait après, pas avant'),
      ],
      answer: 2,
      why: B(
        'A fact about the order of things can be changed tomorrow and will hold when everyone is tired. Care and extra reviewers both depend on people having a good day.',
        "Un fait sur l'ordre des choses se change dès demain et tient quand tout le monde est fatigué. La vigilance et le relecteur supplémentaire dépendent tous deux d'une bonne journée.",
      ),
    },
    badge: B('Looks for conditions', 'Cherche les conditions'),
  },
]

/* ================================================================== */
/* COMMERCIAL                                                          */
/* ================================================================== */

const SA_PROSPECT: Level[] = [
  {
    id: 'sa-brief',
    master: 'research',
    minutes: 6,
    title: B('Three minutes of homework', 'Trois minutes de préparation'),
    learn: B(
      'You will know the one thing about them that changes your first line.',
      "Vous saurez la seule chose qui change votre première ligne.",
    ),
    act: B('Ask for what changed at this company recently, and what it implies.',
      'Demandez ce qui a changé récemment chez eux, et ce que cela implique.'),
    steps: [
      B('Ask for facts with a date attached. Undated facts are guesses.',
        "Demandez des faits datés. Un fait sans date est une supposition."),
      B('Ask what each fact would mean for someone in that role.',
        "Demandez ce que chaque fait signifierait pour quelqu'un à ce poste."),
      B('Check the one you plan to use. Never cite what you have not opened.',
        "Vérifiez celui que vous comptez employer. Ne citez jamais ce que vous n'avez pas ouvert."),
    ],
    trap: B(
      'Quoting a fact the model invented. It is detailed, it sounds right, and the person on the other side knows within one line that you did not check.',
      "Citer un fait inventé par le modèle. Il est détaillé, il sonne juste, et la personne en face sait dès la première ligne que vous n'avez pas vérifié.",
    ),
    quiz: {
      q: B('The model gives you a funding round with a date. What now?',
        'Le modèle vous donne une levée de fonds avec une date. Et maintenant ?'),
      options: [
        B('Open the source first', 'Vous ouvrez la source d\'abord'),
        B('Use it, the date proves it', 'Vous l\'employez, la date le prouve'),
        B('Ask the model to confirm', 'Vous demandez confirmation au modèle'),
      ],
      answer: 0,
      why: B(
        'Invented facts come with the most precision, because precision is what makes them believable. Asking again only produces a second, equally confident invention.',
        "Les faits inventés sont les plus précis, parce que la précision est ce qui les rend crédibles. Redemander ne produit qu'une deuxième invention, tout aussi assurée.",
      ),
    },
    badge: B('Checks before citing', 'Vérifie avant de citer'),
  },
  {
    id: 'sa-first',
    master: 'writing',
    minutes: 6,
    title: B('The first message, six lines', 'Le premier message, six lignes'),
    learn: B(
      'You will ask for one small thing instead of asking for a meeting.',
      "Vous demanderez une petite chose au lieu de demander un rendez-vous.",
    ),
    act: B('Write it, then cut every sentence that talks about you.',
      'Écrivez-le, puis coupez chaque phrase qui parle de vous.'),
    steps: [
      B('Open on them, with the fact you checked. One line.',
        "Ouvrez sur eux, avec le fait que vous avez vérifié. Une ligne."),
      B('Say what you have seen work for someone like them. Two lines.',
        "Dites ce que vous avez vu marcher pour quelqu'un comme eux. Deux lignes."),
      B('Ask one question they can answer in five words.',
        "Posez une question à laquelle ils répondent en cinq mots."),
    ],
    trap: B(
      'Asking for thirty minutes in the first message. It is the largest thing you could ask for, and it is asked before anything has been earned.',
      "Demander trente minutes dès le premier message. C'est la plus grosse chose qu'on puisse demander, et elle est demandée avant d'avoir rien mérité.",
    ),
    quiz: {
      q: B('What should the first message ask for?',
        'Que doit demander le premier message ?'),
      options: [
        B('Thirty minutes next week', 'Trente minutes la semaine prochaine'),
        B('An answer of five words', 'Une réponse de cinq mots'),
        B('A look at your website', 'Un coup d\'oeil à votre site'),
      ],
      answer: 1,
      why: B(
        'A five-word answer costs nothing and starts a conversation you can build on. A meeting costs a slot in a calendar, which is the one thing nobody gives to a stranger.',
        "Une réponse de cinq mots ne coûte rien et ouvre une conversation sur laquelle bâtir. Un rendez-vous coûte un créneau, c'est-à-dire la seule chose qu'on ne donne pas à un inconnu.",
      ),
    },
    badge: B('Asks something small', 'Demande une petite chose'),
  },
  {
    id: 'sa-follow',
    master: 'writing',
    minutes: 6,
    title: B('A follow-up that brings something', 'Une relance qui apporte quelque chose'),
    learn: B(
      'You will give a reason to reply that is not your own need.',
      "Vous donnerez une raison de répondre qui n'est pas votre besoin.",
    ),
    act: B('Write three follow-ups, each carrying one thing they did not have.',
      'Écrivez trois relances, portant chacune une chose qu\'ils n\'avaient pas.'),
    steps: [
      B('Forbid any sentence that refers to your previous message.',
        "Interdisez toute phrase qui renvoie à votre message précédent."),
      B('Each one carries a fact, a case, or an answer to an objection.',
        "Chacune porte un fait, un cas, ou une réponse à une objection."),
      B('The last one closes the file, out loud, with no reproach.',
        "La dernière ferme le dossier, explicitement, sans reproche."),
    ],
    trap: B(
      'Sending "did you see my message". It puts the burden on them and says you have nothing to add, which is also true.',
      "Envoyer « avez-vous vu mon message ». Cela met la charge sur eux et dit que vous n'avez rien à ajouter, ce qui est vrai.",
    ),
    quiz: {
      q: B('Why close the file out loud in the last message?',
        'Pourquoi fermer explicitement le dossier dans la dernière relance ?'),
      options: [
        B('It is more polite', 'C\'est plus poli'),
        B('It saves you time on dead files', 'Cela vous fait gagner du temps sur les dossiers morts'),
        B('It often gets the reply', 'Cela obtient souvent la réponse'),
      ],
      answer: 2,
      why: B(
        'A file about to close is the first thing in the exchange with a deadline on it. People who were merely not deciding suddenly have a reason to, in either direction.',
        "Un dossier sur le point de se fermer est la première chose de l'échange à porter une échéance. Ceux qui ne décidaient pas ont soudain une raison de le faire, dans un sens ou dans l'autre.",
      ),
    },
    badge: B('Closes the file cleanly', 'Ferme le dossier proprement'),
  },
]

const SA_MEET: Level[] = [
  {
    id: 'sa-prep',
    master: 'planning',
    minutes: 6,
    title: B('Five questions, prepared', 'Cinq questions, préparées'),
    learn: B(
      'You will spend the meeting listening instead of presenting.',
      "Vous passerez le rendez-vous à écouter au lieu de présenter.",
    ),
    act: B('Write five questions whose answers you could not guess.',
      'Écrivez cinq questions dont vous ne pouvez pas deviner les réponses.'),
    steps: [
      B('Drop every question you could answer yourself from their website.',
        "Retirez toute question à laquelle leur site répond déjà."),
      B('Ask about the last time, not about the general case.',
        "Interrogez la dernière fois, pas le cas général."),
      B('Prepare one question for what happens if they do nothing.',
        "Préparez une question sur ce qui se passe s'ils ne font rien."),
    ],
    trap: B(
      'Preparing a demo instead of questions. A demo answers questions nobody asked, and it uses the half hour you could have spent finding out what they wanted.',
      "Préparer une démonstration plutôt que des questions. Elle répond à ce que personne n'a demandé, et mange la demi-heure qui devait servir à l'apprendre.",
    ),
    quiz: {
      q: B('Which question earns its place?',
        'Quelle question mérite sa place ?'),
      options: [
        B('What are your priorities this year?', 'Quelles sont vos priorités cette année ?'),
        B('Are you happy with your current tool?', 'Êtes-vous satisfait de votre outil actuel ?'),
        B('How did you handle it last quarter?', 'Comment avez-vous fait le trimestre dernier ?'),
      ],
      answer: 2,
      why: B(
        'A question about a specific past event gets a story with details in it, and details are what you can act on. General questions get the answer everyone gives.',
        "Une question sur un événement passé précis obtient un récit avec des détails, et les détails sont ce sur quoi on peut agir. Les questions générales obtiennent la réponse que tout le monde donne.",
      ),
    },
    badge: B('Prepares questions', 'Prépare des questions'),
  },
  {
    id: 'sa-notes',
    master: 'extraction',
    minutes: 6,
    title: B('The write-up, the same day', 'Le compte rendu, le jour même'),
    learn: B(
      'You will leave a record that someone else could act on.',
      "Vous laisserez une trace sur laquelle quelqu'un d'autre pourrait agir.",
    ),
    act: B('Dictate your raw notes and ask for the facts, the next step and the doubt.',
      'Dictez vos notes brutes et demandez les faits, la prochaine étape, et le doute.'),
    steps: [
      B('Send your notes as they are, with the hesitations in them.',
        "Envoyez vos notes telles quelles, avec les hésitations dedans."),
      B('Ask for three sections: what was said, what was agreed, what is unclear.',
        "Demandez trois parties : ce qui a été dit, ce qui a été convenu, ce qui reste flou."),
      B('Read the unclear section first. It is the one worth an email.',
        "Lisez la partie floue en premier. C'est elle qui mérite un courriel."),
    ],
    trap: B(
      'Writing only what was agreed. A record with no doubts in it reads as a done deal, and the doubt comes back three weeks later as a surprise.',
      "N'écrire que ce qui a été convenu. Une trace sans doutes se lit comme une affaire faite, et le doute revient trois semaines plus tard en surprise.",
    ),
    quiz: {
      q: B('Which part of a write-up is most useful?',
        'Quelle partie d\'un compte rendu est la plus utile ?'),
      options: [
        B('What was agreed', 'Ce qui a été convenu'),
        B('Who was in the room, and for how long', 'Qui était présent, et pendant combien de temps'),
        B('What is still unclear', 'Ce qui reste flou'),
      ],
      answer: 2,
      why: B(
        'What was agreed will be repeated in the next meeting anyway. What is unclear is the only part that will quietly decide itself against you if nobody touches it.',
        "Ce qui a été convenu sera répété au rendez-vous suivant de toute façon. Ce qui est flou est la seule partie qui se tranchera toute seule contre vous si personne n'y touche.",
      ),
    },
    badge: B('Records the doubt', 'Consigne le doute'),
  },
  {
    id: 'sa-object',
    master: 'support',
    minutes: 7,
    title: B('Taking an objection seriously', 'Prendre une objection au sérieux'),
    learn: B(
      'You will find what the objection is protecting before answering it.',
      "Vous trouverez ce que l'objection protège avant d'y répondre.",
    ),
    act: B('Write the objection as they said it, and ask what it could stand for.',
      'Écrivez l\'objection telle qu\'ils l\'ont dite, et demandez ce qu\'elle peut recouvrir.'),
    steps: [
      B('Write their exact words. Your rephrasing already answers it.',
        "Écrivez leurs mots exacts. Votre reformulation y répond déjà."),
      B('Ask for three things it could really mean, and how to tell them apart.',
        "Demandez trois choses qu'elle peut vraiment vouloir dire, et comment les distinguer."),
      B('Ask the question that tells them apart, before answering anything.',
        "Posez la question qui les distingue, avant de répondre quoi que ce soit."),
    ],
    trap: B(
      'Answering "it is too expensive" with a discount. Sometimes it means expensive, and often it means they cannot yet explain the purchase to someone else.',
      "Répondre à « c'est trop cher » par une remise. Parfois cela veut dire cher, et souvent cela veut dire qu'ils ne savent pas encore justifier l'achat devant quelqu'un.",
    ),
    quiz: {
      q: B('"It is too expensive." What do you do first?',
        '« C\'est trop cher. » Que faites-vous d\'abord ?'),
      options: [
        B('Offer a discount', 'Proposer une remise'),
        B('Justify the price against the value', 'Justifier le prix face à la valeur'),
        B('Find out what it stands for', 'Chercher ce que cela recouvre'),
      ],
      answer: 2,
      why: B(
        'A discount answers one of the three possible meanings and damages the other two: it confirms the price was arbitrary, which makes the purchase harder to defend internally.',
        "Une remise répond à l'un des trois sens possibles et abîme les deux autres : elle confirme que le prix était arbitraire, ce qui rend l'achat plus difficile à défendre en interne.",
      ),
    },
    badge: B('Asks before answering', 'Demande avant de répondre'),
  },
]

const SA_CLOSE: Level[] = [
  {
    id: 'sa-proposal',
    master: 'writing',
    minutes: 7,
    title: B('The one-page proposal', 'La proposition en une page'),
    learn: B(
      'You will write something that can be forwarded and still make sense.',
      "Vous écrirez quelque chose qui se transfère et tient encore debout.",
    ),
    act: B('Write it for the person who was not in the room.',
      'Écrivez-la pour la personne qui n\'était pas dans la salle.'),
    steps: [
      B('Open on their problem, in their words, with their number in it.',
        "Ouvrez sur leur problème, avec leurs mots, et leur chiffre dedans."),
      B('One paragraph on what you will do, one on what it costs.',
        "Un paragraphe sur ce que vous ferez, un sur ce que cela coûte."),
      B('End on the first step and its date. Not on a signature block.',
        "Terminez sur la première étape et sa date. Pas sur un bloc de signature."),
    ],
    trap: B(
      'Sending twelve pages to look thorough. The person who decides reads the first paragraph, and thoroughness there reads as not having understood.',
      "Envoyer douze pages pour paraître sérieux. Celui qui décide lit le premier paragraphe, et le sérieux y ressemble à ne pas avoir compris.",
    ),
    quiz: {
      q: B('Who is the proposal written for?',
        'Pour qui la proposition est-elle écrite ?'),
      options: [
        B('The one who was not there', 'Celle qui n\'était pas là'),
        B('The person you met', 'La personne que vous avez rencontrée'),
        B('Their procurement team, who will read it', 'Leur service achats, qui la lira'),
      ],
      answer: 0,
      why: B(
        'The person you met already agrees, and they will have to defend this without you in the room. The document is their argument, not yours.',
        "La personne rencontrée est déjà d'accord, et elle devra défendre cela sans vous dans la salle. Le document est son argumentaire, pas le vôtre.",
      ),
    },
    badge: B('Writes to be forwarded', 'Écrit pour être transféré'),
  },
  {
    id: 'sa-price',
    master: 'support',
    minutes: 6,
    title: B('Saying the price plainly', 'Dire le prix sans détour'),
    learn: B(
      'You will give the number early and let it be discussed.',
      "Vous donnerez le chiffre tôt et le laisserez se discuter.",
    ),
    act: B('Say the price in the first half of the conversation, then stop talking.',
      'Dites le prix dans la première moitié de l\'entretien, puis taisez-vous.'),
    steps: [
      B('Say the number, then the unit, then nothing.',
        "Dites le chiffre, puis l'unité, puis rien."),
      B('Let the silence run. The next sentence should be theirs.',
        "Laissez filer le silence. La phrase suivante doit être la leur."),
      B('If they object, go back to what it replaces, not to the number.',
        "S'ils objectent, revenez à ce que cela remplace, pas au chiffre."),
    ],
    trap: B(
      'Justifying the price in the same breath. It tells them you expect the objection, so they raise it, and now it is their objection rather than your answer.',
      "Justifier le prix dans la foulée. Cela leur dit que vous attendez l'objection, donc ils la soulèvent, et elle devient leur objection plutôt que votre réponse.",
    ),
    quiz: {
      q: B('You said the number. What comes next?',
        'Vous avez dit le chiffre. Que vient-il ensuite ?'),
      options: [
        B('The reason it is worth it', 'La raison pour laquelle il le vaut'),
        B('Silence', 'Le silence'),
        B('A cheaper option', 'Une option moins chère'),
      ],
      answer: 1,
      why: B(
        'Whatever you say after the number is heard as an apology for it. Their first reaction is the information you came for, and talking over it destroys it.',
        "Tout ce que vous dites après le chiffre s'entend comme une excuse. Leur première réaction est l'information que vous étiez venu chercher, et parler par-dessus la détruit.",
      ),
    },
    badge: B('Says the number', 'Dit le chiffre'),
  },
  {
    id: 'sa-after',
    master: 'planning',
    minutes: 6,
    title: B('The month after signature', 'Le mois qui suit la signature'),
    learn: B(
      'You will make the start happen instead of handing the account over.',
      "Vous ferez démarrer le client au lieu de passer le dossier.",
    ),
    act: B('Write the first thirty days as three dates with a name on each.',
      'Écrivez les trente premiers jours en trois dates avec un nom sur chacune.'),
    steps: [
      B('Name what they must have done by day seven. One thing.',
        "Nommez ce qu'ils doivent avoir fait au septième jour. Une chose."),
      B('Name who does it on their side, by name, not by team.',
        "Nommez qui le fait chez eux, par son nom, pas par son service."),
      B('Book the day thirty conversation now, while they still care.',
        "Calez l'échange du trentième jour maintenant, tant que cela les intéresse."),
    ],
    trap: B(
      'Considering the sale finished at signature. The renewal is decided in the first month, by whether anything actually changed.',
      "Considérer la vente finie à la signature. Le renouvellement se décide le premier mois, selon que quelque chose a changé ou non.",
    ),
    quiz: {
      q: B('When is the renewal mostly decided?',
        'Quand le renouvellement se décide-t-il surtout ?'),
      options: [
        B('At the renewal conversation', 'Lors de l\'échange de renouvellement'),
        B('In the first month', 'Le premier mois'),
        B('During the negotiation', 'Pendant la négociation'),
      ],
      answer: 1,
      why: B(
        'By the renewal conversation the answer already exists, and you are only being told it. The month after signature is the last time you can still change it.',
        "À l'échange de renouvellement, la réponse existe déjà et on ne fait que vous l'annoncer. Le mois qui suit la signature est le dernier moment où vous pouvez encore la changer.",
      ),
    },
    badge: B('Starts the client', 'Fait démarrer le client'),
  },
]

/* ================================================================== */
/* ASSISTANT                                                           */
/* ================================================================== */

const AS_FLOW: Level[] = [
  {
    id: 'as-inbox',
    master: 'triage',
    minutes: 6,
    title: B('Emptying an inbox', 'Vider une boîte de réception'),
    learn: B(
      'You will sort by what it asks of you, not by who sent it.',
      "Vous trierez par ce qu'on vous demande, pas par qui écrit.",
    ),
    act: B('Paste thirty subject lines and ask what each one actually requires.',
      'Collez trente objets de messages et demandez ce que chacun exige vraiment.'),
    steps: [
      B('Four piles: answer, do, wait for someone, nothing.',
        "Quatre tas : répondre, faire, attendre quelqu'un, rien."),
      B('Ask for the pile and the one action, in four words.',
        "Demandez le tas et l'action unique, en quatre mots."),
      B('Do the "nothing" pile first, by deleting it.',
        "Traitez le tas « rien » en premier, en le supprimant."),
    ],
    trap: B(
      'Sorting by sender. Importance travels with the request, not with the name, and sorting by name keeps the same people at the top forever.',
      "Trier par expéditeur. L'importance voyage avec la demande, pas avec le nom, et trier par nom garde les mêmes personnes en tête pour toujours.",
    ),
    quiz: {
      q: B('Which pile do you clear first?',
        'Quel tas traitez-vous en premier ?'),
      options: [
        B('The ones needing nothing', 'Ceux qui n\'appellent rien'),
        B('The ones needing an answer', 'Ceux qui appellent une réponse'),
        B('The ones from your manager', 'Ceux de votre responsable'),
      ],
      answer: 0,
      why: B(
        'Clearing what needs nothing costs seconds and removes most of the volume. What remains is a list you can look at without flinching, which is the whole point.',
        "Vider ce qui n'appelle rien coûte quelques secondes et retire l'essentiel du volume. Ce qui reste est une liste qu'on peut regarder sans se crisper, et c'est tout l'objectif.",
      ),
    },
    badge: B('Sorts by request', 'Trie par demande'),
  },
  {
    id: 'as-agenda',
    master: 'planning',
    minutes: 6,
    title: B('An agenda in five lines', 'Un ordre du jour en cinq lignes'),
    learn: B(
      'You will write an agenda where each line is a decision to make.',
      "Vous écrirez un ordre du jour où chaque ligne est une décision à prendre.",
    ),
    act: B('Turn the list of topics into a list of questions to be settled.',
      'Transformez la liste des sujets en liste de questions à trancher.'),
    steps: [
      B('Each line is a question, with a name and a number of minutes.',
        "Chaque ligne est une question, avec un nom et un nombre de minutes."),
      B('Anything with no decision in it is a written note, not a meeting.',
        "Tout ce qui n'appelle pas de décision est une note écrite, pas une réunion."),
      B('Send it the day before. An agenda read in the room is decoration.',
        "Envoyez-le la veille. Un ordre du jour lu dans la salle est un décor."),
    ],
    trap: B(
      'Listing topics. A topic has no end, so the meeting ends when the hour does, and the last topic is never reached.',
      "Lister des sujets. Un sujet n'a pas de fin, donc la réunion finit avec l'heure, et le dernier sujet n'est jamais atteint.",
    ),
    quiz: {
      q: B('What belongs on an agenda line?',
        'Que met-on sur une ligne d\'ordre du jour ?'),
      options: [
        B('A topic and who presents it', 'Un sujet et qui le présente'),
        B('A document to read', 'Un document à lire'),
        B('A question and who decides', 'Une question et qui tranche'),
      ],
      answer: 2,
      why: B(
        'A question has an end: it is answered or it is not. A topic can absorb any amount of time, and it always absorbs the time the next line needed.',
        "Une question a une fin : elle est tranchée ou non. Un sujet absorbe n'importe quelle durée, et il absorbe toujours le temps dont la ligne suivante avait besoin.",
      ),
    },
    badge: B('Writes decisions', 'Écrit des décisions'),
  },
  {
    id: 'as-minutes',
    master: 'extraction',
    minutes: 6,
    title: B('The record, written during', 'Le compte rendu, écrit pendant'),
    learn: B(
      'You will leave the room with the record already done.',
      "Vous quitterez la salle avec le compte rendu déjà fait.",
    ),
    act: B('Note only decisions and owners during the meeting, then expand after.',
      'Ne notez que les décisions et les responsables pendant, puis développez après.'),
    steps: [
      B('Write only what was decided and who owns it. Nothing else, live.',
        "N'écrivez que ce qui a été décidé et qui le porte. Rien d'autre, en direct."),
      B('Read the decisions out loud before the end. Corrections happen there.',
        "Relisez les décisions à voix haute avant la fin. Les corrections ont lieu là."),
      B('Expand afterwards from your notes, never from memory.',
        "Développez ensuite à partir de vos notes, jamais de mémoire."),
    ],
    trap: B(
      'Writing everything that is said. You stop listening, and a transcript hides the four decisions inside an hour of talk.',
      "Écrire tout ce qui se dit. Vous cessez d'écouter, et une transcription noie les quatre décisions dans une heure de parole.",
    ),
    quiz: {
      q: B('When are the decisions confirmed?',
        'Quand les décisions sont-elles confirmées ?'),
      options: [
        B('By email, sent straight afterwards', 'Par courriel, envoyé juste après'),
        B('Out loud before the end', 'À voix haute avant la fin'),
        B('At the next meeting', 'À la réunion suivante'),
      ],
      answer: 1,
      why: B(
        'Everyone is in the room and still remembers. A correction costs ten seconds there; by email it costs a thread, and by the next meeting it costs the decision.',
        "Tout le monde est là et s'en souvient encore. Une correction coûte dix secondes sur place ; par courriel elle coûte un fil de discussion, et à la réunion suivante elle coûte la décision.",
      ),
    },
    badge: B('Confirms in the room', 'Confirme dans la salle'),
  },
]

const AS_DOCS: Level[] = [
  {
    id: 'as-extract',
    master: 'extraction',
    minutes: 7,
    title: B('Pulling facts out of a pile', 'Extraire des faits d\'une pile'),
    learn: B(
      'You will get the same fields from documents that look nothing alike.',
      "Vous obtiendrez les mêmes champs de documents qui ne se ressemblent pas.",
    ),
    act: B('Name the fields first, then run them over ten documents.',
      'Nommez les champs d\'abord, puis passez-les sur dix documents.'),
    steps: [
      B('Write the field list with what to do when a field is absent.',
        "Écrivez la liste des champs avec ce qu'il faut faire quand un champ manque."),
      B('Demand the word "absent" rather than a plausible guess.',
        "Exigez le mot « absent » plutôt qu'une supposition crédible."),
      B('Check three documents by hand before trusting the other two hundred.',
        "Vérifiez trois documents à la main avant de croire les deux cents autres."),
    ],
    trap: B(
      'Letting a missing field be filled in. A plausible date in an empty field is worse than an empty field, because nobody will ever question it.',
      "Laisser combler un champ manquant. Une date crédible dans un champ vide est pire qu'un champ vide, parce que personne ne la questionnera jamais.",
    ),
    quiz: {
      q: B('A field is missing from the document. What should come back?',
        'Un champ manque dans le document. Que doit-il revenir ?'),
      options: [
        B('The most likely value', 'La valeur la plus probable'),
        B('The value from the previous document', 'La valeur du document précédent'),
        B('The word absent', 'Le mot absent'),
      ],
      answer: 2,
      why: B(
        'An explicit absence can be seen, counted and chased. A filled-in guess enters your table looking exactly like the two hundred values that were really read.',
        "Une absence explicite se voit, se compte et se relance. Une supposition entre dans votre tableau avec l'apparence exacte des deux cents valeurs réellement lues.",
      ),
    },
    badge: B('Demands an absence', 'Exige l\'absence'),
  },
  {
    id: 'as-table',
    master: 'analysis',
    minutes: 6,
    title: B('A table out of a mess', 'Un tableau depuis le désordre'),
    learn: B(
      'You will turn free text into columns that can be counted.',
      "Vous transformerez du texte libre en colonnes qui se comptent.",
    ),
    act: B('Define the columns and the allowed values, then convert twenty rows.',
      'Définissez les colonnes et les valeurs permises, puis convertissez vingt lignes.'),
    steps: [
      B('List the allowed values for each column. Closed lists, not free text.',
        "Listez les valeurs permises pour chaque colonne. Des listes fermées, pas du texte libre."),
      B('Add one value called other, and read what falls into it.',
        "Ajoutez une valeur « autre », et lisez ce qui y tombe."),
      B('If other is large, your list was wrong. Fix the list, not the rows.',
        "Si « autre » est gros, votre liste était fausse. Corrigez la liste, pas les lignes."),
    ],
    trap: B(
      'Letting each row invent its own label. You end up with forty spellings of three things and a table that cannot be counted.',
      "Laisser chaque ligne inventer son étiquette. Vous obtenez quarante orthographes de trois choses et un tableau qu'on ne peut pas compter.",
    ),
    quiz: {
      q: B('A quarter of the rows land in "other". What does it mean?',
        'Un quart des lignes tombent dans « autre ». Qu\'est-ce que cela veut dire ?'),
      options: [
        B('Your list of values is wrong', 'Votre liste de valeurs est fausse'),
        B('The data is messy', 'Les données sont sales'),
        B('The model did not understand the task', "Le modèle n'a pas compris la consigne"),
      ],
      answer: 0,
      why: B(
        'A large other is the one honest signal you get. It says a real category exists that you did not name, and renaming rows one by one hides it instead of fixing it.',
        "Un « autre » important est le seul signal honnête que vous ayez. Il dit qu'une vraie catégorie existe que vous n'avez pas nommée, et renommer les lignes une à une le masque au lieu de le corriger.",
      ),
    },
    badge: B('Closes the lists', 'Ferme les listes'),
  },
  {
    id: 'as-template',
    master: 'writing',
    minutes: 6,
    title: B('The document you fill twice a week', 'Le document rempli deux fois par semaine'),
    learn: B(
      'You will build a template that holds what never changes.',
      "Vous construirez un modèle qui tient ce qui ne change jamais.",
    ),
    act: B('Take three past versions and ask what is identical in all of them.',
      'Prenez trois versions passées et demandez ce qui est identique dans les trois.'),
    steps: [
      B('The identical parts become the template. They stop being retyped.',
        "Les parties identiques deviennent le modèle. Elles cessent d'être retapées."),
      B('The differing parts become named blanks, with an example in each.',
        "Les parties différentes deviennent des blancs nommés, avec un exemple dans chacun."),
      B('Keep one finished example next to the template, always.',
        "Gardez un exemple fini à côté du modèle, toujours."),
    ],
    trap: B(
      'Making a template with empty blanks and no example. Everyone fills them differently, and the document stops being comparable from week to week.',
      "Faire un modèle avec des blancs vides et sans exemple. Chacun les remplit autrement, et le document cesse d'être comparable d'une semaine à l'autre.",
    ),
    quiz: {
      q: B('What goes next to a template?',
        'Que met-on à côté d\'un modèle ?'),
      options: [
        B('One finished example', 'Un exemple rempli'),
        B('Instructions for filling it', 'Une notice pour le remplir'),
        B('The previous version', 'La version précédente'),
      ],
      answer: 0,
      why: B(
        'People copy what they can see far more reliably than they follow what they have to read. One good example settles a dozen questions that instructions leave open.',
        "Les gens copient ce qu'ils voient bien plus fidèlement qu'ils ne suivent ce qu'ils doivent lire. Un bon exemple tranche une dizaine de questions qu'une notice laisse ouvertes.",
      ),
    },
    badge: B('Keeps an example', 'Garde un exemple'),
  },
]

const AS_TIME: Level[] = [
  {
    id: 'as-schedule',
    master: 'planning',
    minutes: 6,
    title: B('Fitting six calendars together', 'Faire tenir six agendas'),
    learn: B(
      'You will propose slots instead of asking everyone when they are free.',
      "Vous proposerez des créneaux au lieu de demander à chacun ses disponibilités.",
    ),
    act: B('Give the constraints and ask for three slots, ranked, with what each costs.',
      'Donnez les contraintes et demandez trois créneaux classés, avec ce que chacun coûte.'),
    steps: [
      B('State who must be there and who can miss it. That is the real constraint.',
        "Dites qui doit être là et qui peut manquer. C'est la vraie contrainte."),
      B('Ask for three slots, ranked, each with who it inconveniences.',
        "Demandez trois créneaux classés, chacun avec qui il dérange."),
      B('Send the top one as a decision, with the second as the alternative.',
        "Envoyez le premier comme une décision, avec le deuxième en solution de repli."),
    ],
    trap: B(
      'Asking six people for their availability. You get six lists that do not intersect, and a second round of emails to resolve it.',
      "Demander leurs disponibilités à six personnes. Vous obtenez six listes qui ne se croisent pas, et un deuxième tour de courriels pour trancher.",
    ),
    quiz: {
      q: B('How do you propose a meeting to six people?',
        'Comment proposez-vous une réunion à six personnes ?'),
      options: [
        B('Propose one slot and a fallback', 'Proposer un créneau et un repli'),
        B('Ask each of them for their availability', 'Demander à chacun ses disponibilités'),
        B('Send a poll with ten slots', 'Envoyer un sondage à dix créneaux'),
      ],
      answer: 0,
      why: B(
        'Every open question multiplies the replies you must then reconcile. A decision with one alternative needs at most one objection, and usually gets none.',
        "Chaque question ouverte multiplie les réponses à réconcilier ensuite. Une décision assortie d'une alternative n'appelle au plus qu'une objection, et le plus souvent aucune.",
      ),
    },
    badge: B('Proposes, not polls', 'Propose au lieu de sonder'),
  },
  {
    id: 'as-voice',
    master: 'writing',
    minutes: 6,
    title: B('Writing on behalf of someone', 'Écrire à la place de quelqu\'un'),
    learn: B(
      'You will write in their voice without guessing at it.',
      "Vous écrirez dans leur voix sans la deviner.",
    ),
    act: B('Collect five of their own messages and derive the rules before writing.',
      'Réunissez cinq de leurs messages et tirez-en les règles avant d\'écrire.'),
    steps: [
      B('Use messages they wrote themselves, not ones written for them.',
        "Prenez des messages qu'ils ont écrits eux-mêmes, pas écrits pour eux."),
      B('Note how they open, how they close, and how long they are.',
        "Notez comment ils ouvrent, comment ils closent, et la longueur."),
      B('Show them the rules, not the drafts. Rules get corrected once.',
        "Montrez-leur les règles, pas les brouillons. Les règles se corrigent une fois."),
    ],
    trap: B(
      'Writing better than they do. The improvement is what gives it away, and every reader who knows them notices before the second line.',
      "Écrire mieux qu'eux. C'est l'amélioration qui vous trahit, et tout lecteur qui les connaît le remarque avant la deuxième ligne.",
    ),
    quiz: {
      q: B('What do you show them for approval?',
        'Que leur soumettez-vous pour validation ?'),
      options: [
        B('The rules of their voice', 'Les règles de leur voix'),
        B('Each draft, before sending', 'Chaque brouillon, avant envoi'),
        B('A sample of ten messages', 'Un échantillon de dix messages'),
      ],
      answer: 0,
      why: B(
        'Approving drafts one by one never ends and teaches you nothing. Approving the rules is done once, and every message afterwards is already right.',
        "Valider les brouillons un par un ne finit jamais et ne vous apprend rien. Valider les règles se fait une fois, et tous les messages suivants sont déjà justes.",
      ),
    },
    badge: B('Borrows a voice honestly', 'Emprunte une voix honnêtement'),
  },
  {
    id: 'as-never',
    master: 'watch',
    minutes: 6,
    title: B('What you do not hand to a machine', 'Ce qu\'on ne confie pas à une machine'),
    learn: B(
      'You will draw the line before you are in a hurry.',
      "Vous tracerez la limite avant d'être pressé.",
    ),
    act: B('List the document types you handle and mark the ones that never leave.',
      'Listez les types de documents que vous manipulez et marquez ceux qui ne sortent jamais.'),
    steps: [
      B('Mark anything with someone else\'s personal details in it.',
        "Marquez tout ce qui contient les données personnelles de quelqu'un d'autre."),
      B('Mark anything you would not want read by a third party.',
        "Marquez tout ce que vous ne voudriez pas voir lu par un tiers."),
      B('For the rest, write down which tool, and stick to it.',
        "Pour le reste, écrivez quel outil, et tenez-vous-y."),
    ],
    trap: B(
      'Deciding case by case in the moment. The one urgent afternoon is exactly when the line moves, and it never moves back.',
      "Décider au cas par cas sur le moment. L'après-midi pressé est précisément celui où la limite bouge, et elle ne revient jamais.",
    ),
    quiz: {
      q: B('When should the line be drawn?',
        'Quand faut-il tracer la limite ?'),
      options: [
        B('In advance, in writing', 'À l\'avance, par écrit'),
        B('Each time, in context', 'À chaque fois, selon le contexte'),
        B('When the policy arrives', 'Quand la politique interne arrivera'),
      ],
      answer: 0,
      why: B(
        'In the moment there is always a reason to make an exception, and the reason is always good. A line written in advance is the only one that is there on the bad afternoon.',
        "Sur le moment, il y a toujours une raison de faire une exception, et elle est toujours bonne. Une limite écrite à l'avance est la seule qui soit là le mauvais après-midi.",
      ),
    },
    badge: B('Draws the line early', 'Trace la limite tôt'),
  },
]

/* ================================================================== */
/* LES CITÉS DES TROIS DERNIERS MÉTIERS                                */
/* ================================================================== */

export const TRADE_MODULES_2: Module[] = [
  {
    id: 'pr-problem', track: 'trade', glyph: 'centre', tint: '#1fa563', at: [1, 16], levels: PR_PROBLEM,
    title: B('The problem', 'Le problème'),
    blurb: B('State problems, group what comes in, refuse with a condition.',
      "Énoncer des problèmes, regrouper ce qui remonte, refuser avec une condition."),
  },
  {
    id: 'pr-spec', track: 'trade', glyph: 'grid', tint: '#1fa563', at: [3, 16], levels: PR_SPEC,
    title: B('The spec', 'La spécification'),
    blurb: B('Write behaviour, decide the edges, draft a screen to argue with.',
      "Écrire des comportements, trancher les cas limites, ébaucher un écran à contester."),
  },
  {
    id: 'pr-ship', track: 'trade', glyph: 'delta', tint: '#1fa563', at: [5, 16], levels: PR_SHIP,
    title: B('Shipping', 'La mise en service'),
    blurb: B('Name the number first, write for the reader, look for conditions.',
      "Nommer le chiffre d'abord, écrire pour le lecteur, chercher les conditions."),
  },
  {
    id: 'sa-prospect', track: 'trade', glyph: 'target', tint: '#f59e0b', at: [1, 18], levels: SA_PROSPECT,
    title: B('Prospecting', 'La prospection'),
    blurb: B('Check before citing, ask something small, close the file cleanly.',
      "Vérifier avant de citer, demander peu, fermer le dossier proprement."),
  },
  {
    id: 'sa-meeting', track: 'trade', glyph: 'ring', tint: '#f59e0b', at: [3, 18], levels: SA_MEET,
    title: B('The meeting', 'L\'entretien'),
    blurb: B('Prepare questions, record the doubt, ask before answering.',
      "Préparer des questions, consigner le doute, demander avant de répondre."),
  },
  {
    id: 'sa-close', track: 'trade', glyph: 'diamond', tint: '#f59e0b', at: [5, 18], levels: SA_CLOSE,
    title: B('Closing', 'La conclusion'),
    blurb: B('Write to be forwarded, say the number, start the client.',
      "Écrire pour être transféré, dire le chiffre, faire démarrer le client."),
  },
  {
    id: 'as-flow', track: 'trade', glyph: 'rows', tint: '#08c2ac', at: [1, 20], levels: AS_FLOW,
    title: B('The flow', 'Le flot'),
    blurb: B('Sort by request, write decisions, confirm in the room.',
      "Trier par demande, écrire des décisions, confirmer dans la salle."),
  },
  {
    id: 'as-docs', track: 'trade', glyph: 'layers', tint: '#08c2ac', at: [3, 20], levels: AS_DOCS,
    title: B('The documents', 'Les documents'),
    blurb: B('Demand an absence, close the lists, keep an example.',
      "Exiger l'absence, fermer les listes, garder un exemple."),
  },
  {
    id: 'as-time', track: 'trade', glyph: 'hex', tint: '#08c2ac', at: [5, 20], levels: AS_TIME,
    title: B('Other people\'s time', 'Le temps des autres'),
    blurb: B('Propose instead of polling, borrow a voice honestly, draw the line early.',
      "Proposer au lieu de sonder, emprunter une voix honnêtement, tracer la limite tôt."),
  },
]

export const TRADES_2: Trade[] = [
  {
    id: 'product',
    label: B('Product manager', 'Chef de produit'),
    who: B('You decide what gets built, and you answer for what does not.',
      "Vous décidez ce qui se construit, et vous répondez de ce qui ne se construit pas."),
    glyph: 'grid', tint: '#1fa563',
    cities: ['pr-problem', 'pr-spec', 'pr-ship'],
  },
  {
    id: 'sales',
    label: B('Sales', 'Commercial'),
    who: B('You are judged on what is signed, and on what happens after.',
      "On vous juge sur ce qui est signé, et sur ce qui vient après."),
    glyph: 'diamond', tint: '#f59e0b',
    cities: ['sa-prospect', 'sa-meeting', 'sa-close'],
  },
  {
    id: 'assistant',
    label: B('Executive assistant', 'Assistant de direction'),
    who: B('You hold the flow, the documents, and other people\'s time.',
      "Vous tenez le flot, les documents, et le temps des autres."),
    glyph: 'rows', tint: '#08c2ac',
    cities: ['as-flow', 'as-docs', 'as-time'],
  },
]
/* ================================================================== */
/* CE QUI SE DÉRIVE                                                    */
/* ================================================================== */
//
// TOUT EST CALCULÉ ICI AUSSI · un métier qui annonce neuf dojos et en sert
// huit ment à celui qui vient de payer, et c'est le pire moment pour mentir.

export const TRADES: Trade[] = [...TRADES_1, ...TRADES_2]

export const TRADE_MODULES: Module[] = [...TRADE_MODULES_1, ...TRADE_MODULES_2]

export const TRADE_BY_ID: Record<string, Trade> =
  Object.fromEntries(TRADES.map((t) => [t.id, t]))

const MOD_BY_ID: Record<string, Module> =
  Object.fromEntries(TRADE_MODULES.map((m) => [m.id, m]))

/** Les cités d'un métier, dans l'ordre conseillé · rend un tableau vide plutôt
 *  que de lever, parce qu'un identifiant inventé arrive par la barre d'adresse
 *  et doit rendre une page. */
export const citiesOfTrade = (id: string): Module[] =>
  (TRADE_BY_ID[id]?.cities ?? []).map((c) => MOD_BY_ID[c]).filter(Boolean)

/** Le métier auquel appartient une cité · l'inverse du lien ci-dessus, tenu
 *  au même endroit pour qu'il ne puisse pas le contredire. */
export const TRADE_OF_CITY: Record<string, string> = Object.fromEntries(
  TRADES.flatMap((t) => t.cities.map((c) => [c, t.id])),
)

export const TRADE_COUNT = TRADES.length
export const TRADE_CITY_COUNT = TRADES[0].cities.length
export const TRADE_LEVEL_COUNT = citiesOfTrade(TRADES[0].id)
  .reduce((n, m) => n + m.levels.length, 0)
export const TRADE_MINUTES = citiesOfTrade(TRADES[0].id)
  .reduce((n, m) => n + m.levels.reduce((k, l) => k + l.minutes, 0), 0)

/** L'adresse du choix du métier, et celle d'un métier. */
export const TRADE_HOME = '/metier'
export const tradePath = (id: string) => `/metier/${id}`
