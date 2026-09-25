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
import { NEW_TRADE_PACKS } from './metiers'

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
    title: B('Stop writing for everyone', "Cessez d'écrire pour tout le monde"),
    learn: B(
      'Does your message speak to everyone? You will learn to write for one segment: one specific group of customers.',
      "Votre message s'adresse-t-il à tout le monde ? Vous apprendrez à écrire pour un segment, c'est-à-dire un groupe de clients précis.",
    ),
    act: B('Describe one typical buyer in six lines, then ask the AI for a message written just for them.',
      "Décrivez un acheteur type en six lignes, puis demandez à l'IA un message écrit pour lui seul."),
    steps: [
      B('Give their job, the moment they need you, and what they were doing before they looked for you.',
        "Précisez son poste, le moment où il a besoin de vous, et ce qu'il faisait avant de vous chercher."),
      B('Add the words this buyer actually uses, not the vocabulary of your product.',
        "Ajoutez les mots que cet acheteur emploie lui-même, et non le vocabulaire de votre produit."),
      B('Ask for the message. Then ask what would stop working if you sent it to a different group.',
        "Demandez le message, puis demandez ce qui cesserait de fonctionner si vous l'adressiez à un autre groupe."),
    ],
    trap: B(
      'Describing your buyer by age and hobbies? That says nothing about why they would buy. What counts is their moment and what they already tried.',
      "Décrire un client par son âge et ses loisirs n'explique pas pourquoi il achèterait. Ce qui compte, c'est son moment de besoin et ce qu'il a déjà essayé.",
    ),
    quiz: {
      q: B('Which detail is truly useful to describe a segment?',
        "Quel détail est réellement utile pour décrire un segment ?"),
      options: [
        B('Their age bracket and their city', "Leur tranche d'âge et leur ville"),
        B('The size of their company', 'La taille de leur entreprise'),
        B('What they tried before you', "Ce qu'ils ont essayé avant vous"),
      ],
      answer: 2,
      why: B(
        'What someone already tried shows you what disappointed them. That is exactly what your message must answer. Age or company size put people in boxes without explaining why they buy.',
        "Ce qu'un client a déjà essayé révèle ce qui l'a déçu, et c'est précisément à cela que votre message doit répondre. L'âge ou la taille de l'entreprise classent les gens sans expliquer leur achat.",
      ),
    },
    badge: B('Writes for one specific buyer', 'Écrit pour un acheteur précis'),
  },
  {
    id: 'gr-variants',
    master: 'writing',
    minutes: 7,
    title: B('Three angles are worth more than a hundred variants', 'Trois angles valent mieux que cent variantes'),
    learn: B(
      'You will test messages that differ in substance, not just in wording.',
      "Vous apprendrez à tester des messages qui diffèrent sur le fond, et non seulement dans la formulation.",
    ),
    act: B('Ask for three messages that each give a different reason to buy.',
      "Demandez trois messages qui avancent chacun une raison d'acheter différente."),
    steps: [
      B('Pick the three angles yourself: the problem solved, the gain, the risk avoided.',
        "Choisissez vous-même les trois angles : le problème résolu, le gain obtenu, le risque évité."),
      B('Ask for one message per angle, same length and same offer, so only the angle changes.',
        "Demandez un message par angle, de même longueur et avec la même offre, afin que seul l'angle varie."),
      B('Keep the angle that wins. Only then, test different wordings for that angle.',
        "Conservez l'angle gagnant. Ensuite seulement, testez différentes formulations de cet angle."),
    ],
    trap: B(
      'Asking for twenty variants? You get twenty ways of saying the same thing. The result teaches you nothing you can reuse.',
      "Demander vingt variantes produit vingt manières de dire la même chose. Le résultat ne vous apprend alors rien de réutilisable.",
    ),
    quiz: {
      q: B('You tested twenty variants of one angle, and one wins. What did you learn?',
        "Vous avez testé vingt variantes d'un seul angle et l'une d'elles l'emporte. Qu'avez-vous appris ?"),
      options: [
        B('Which wording performs best', "Quelle formulation fonctionne le mieux"),
        B('Almost nothing reusable', 'Presque rien de réutilisable'),
        B('That the audience is large', 'Que l\'audience est large'),
      ],
      answer: 1,
      why: B(
        'A winning wording stops working as soon as the channel or the season changes. A winning angle tells you why people buy. That lesson still holds when you rewrite the message.',
        "Une formulation gagnante cesse de fonctionner dès que le canal ou la saison change. Un angle gagnant, en revanche, explique pourquoi les gens achètent, et cette leçon demeure valable lorsque vous réécrivez le message.",
      ),
    },
    badge: B('Tests angles, not words', 'Teste des angles, pas des mots'),
  },
  {
    id: 'gr-landing',
    master: 'analysis',
    minutes: 7,
    title: B('Keep the promise your ad made', "Tenez la promesse de votre annonce"),
    learn: B(
      'You will spot the gap between what your ad promises and what your page actually says.',
      "Vous apprendrez à repérer l'écart entre ce que promet votre publicité et ce que dit réellement votre page.",
    ),
    act: B('Give the AI your ad and your page. Ask what a visitor expected to find and did not.',
      "Donnez à l'IA votre annonce et votre page. Demandez ce qu'un visiteur s'attendait à trouver sans le trouver."),
    steps: [
      B('Paste the ad first, then the page. In that order, the AI understands the ad is the promise.',
        "Collez d'abord l'annonce, puis la page. Dans cet ordre, l'IA comprend que l'annonce constitue la promesse."),
      B('Ask which sentence a visitor reads first, and whether it repeats what the ad says.',
        "Demandez quelle phrase un visiteur lit en premier, et si elle reprend ce que dit l'annonce."),
      B('Ask what the visitor is asked to give, and when. A form before the promised answer drives them away.',
        "Demandez ce que l'on exige du visiteur, et à quel moment. Un formulaire placé avant la réponse promise le fait fuir."),
    ],
    trap: B(
      'Judging the page on its own. A visitor always arrives right after reading your ad, and judges the page against that promise.',
      "Juger la page isolément. Un visiteur arrive toujours juste après avoir lu votre annonce, et il évalue la page au regard de cette promesse.",
    ),
    quiz: {
      q: B('Your click rate is high, but nobody buys or signs up. Where do you look first?',
        "Votre taux de clic est bon, mais personne n'achète ni ne s'inscrit. Où regardez-vous d'abord ?"),
      options: [
        B('The gap between ad and page', "L'écart entre l'annonce et la page"),
        B('The price', 'Le prix'),
        B('The loading time of the page', 'Le temps de chargement de la page'),
      ],
      answer: 0,
      why: B(
        'A good click rate proves your ad attracts people. If they leave right after, your page does not answer what the ad promised. You can fix that without spending anything more.',
        "Un bon taux de clic prouve que votre annonce attire. Si les visiteurs repartent aussitôt, la page ne répond pas à ce que l'annonce promettait. Cela se corrige sans aucune dépense supplémentaire.",
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
    title: B("Nail your new sign-ups' first day!", "Réussissez le premier jour de vos inscrits"),
    learn: B(
      'You will build a welcome that leads a new user to one single action, instead of showing them everything.',
      "Vous concevrez un accueil qui conduit le nouvel inscrit vers une seule action, au lieu de tout lui montrer.",
    ),
    act: B('Name the one thing a new user must do, then write the three messages that get them there.',
      "Nommez la seule action qu'un nouvel inscrit doit accomplir, puis rédigez les trois messages qui l'y conduisent."),
    steps: [
      B('Pick the action that shows a user will stay. Just one, and you must be able to count it.',
        "Choisissez l'action qui indique qu'un inscrit va rester. Une seule, et vous devez pouvoir la mesurer."),
      B('Write message one for people who have not done that action yet, not for everyone.',
        "Rédigez le premier message pour ceux qui n'ont pas encore accompli cette action, et non pour tout le monde."),
      B('Stop the messages as soon as the action is done. Carrying on after that is just noise.',
        "Interrompez les messages dès que l'action est accomplie. Poursuivre au-delà ne produit que du bruit."),
    ],
    trap: B(
      'Showing every feature on day one? Nobody remembers it all, and the one thing that mattered gets lost among the rest.',
      "Présenter toutes les fonctions dès le premier jour. Personne ne retient tout, et la seule chose importante se perd parmi le reste.",
    ),
    quiz: {
      q: B('What should stop a welcome sequence?',
        "Qu'est-ce qui doit mettre fin à une séquence d'accueil ?"),
      options: [
        B('The action being done', "L'action accomplie"),
        B('The last message being sent', 'Le dernier message envoyé'),
        B('A week going by', 'Une semaine écoulée'),
      ],
      answer: 0,
      why: B(
        'If you keep asking someone for an action they already did, they see your messages are automatic and do not know them. They stop reading, and that is hard to win back.',
        "Si vous demandez encore une action à quelqu'un qui l'a déjà accomplie, il comprend que vos messages sont automatiques et ne le connaissent pas. Il cesse alors de les lire, ce qui est difficile à rattraper.",
      ),
    },
    badge: B('Aims for one action, then stops', "Vise une action, puis s'arrête"),
  },
  {
    id: 'gr-nudge',
    master: 'writing',
    minutes: 6,
    title: B('Follow up without ever nagging', "Relancez sans jamais harceler"),
    learn: B(
      'Do your follow-ups repeat the first message? You will learn to bring something new each time.',
      "Vos relances répètent-elles le premier message ? Vous apprendrez à apporter un élément nouveau à chaque fois.",
    ),
    act: B('Write three follow-ups. Each one must bring a piece of information the previous one did not have.',
      "Rédigez trois relances. Chacune doit apporter une information absente de la précédente."),
    steps: [
      B('Give the AI your first message and forbid it to repeat the offer.',
        "Donnez à l'IA votre premier message et interdisez-lui de répéter l'offre."),
      B('Ask for one new element per follow-up: a customer example, a number, or the answer to an objection.',
        "Demandez un élément nouveau par relance : un exemple client, un chiffre, ou la réponse à une objection."),
      B('Ask for a sentence that makes it easy to say no. It raises replies without losing you any contacts.',
        "Demandez une phrase qui permet de refuser facilement. Elle augmente le taux de réponse sans vous faire perdre de contacts."),
    ],
    trap: B(
      'Writing "just following up". It shows you have nothing new to say, and it forces the reader to remember your first message.',
      "Écrire « je me permets de revenir vers vous ». Cette phrase montre que vous n'avez rien de nouveau à dire, et oblige le lecteur à se rappeler votre premier message.",
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
        'Most of the time, silence is not a refusal: the person has not decided yet. If saying no is easy, they reply. And a reply, even a no, lets you stop chasing that contact.',
        "Le plus souvent, un silence n'est pas un refus : la personne n'a pas encore décidé. Si refuser est facile, elle répond. Or une réponse, même négative, vous permet de cesser de relancer ce contact.",
      ),
    },
    badge: B('Adds something each time', "Ajoute un élément à chaque fois"),
  },
  {
    id: 'gr-churn',
    master: 'analysis',
    minutes: 7,
    title: B("Spot who's leaving before they leave", "Repérez qui va partir, avant son départ"),
    learn: B(
      'You will spot the signs that come before a customer leaves, while you can still act.',
      "Vous apprendrez à repérer les signes qui précèdent le départ d'un client, lorsqu'il est encore temps d'agir.",
    ),
    act: B('Give the AI two lists: customers who stayed and customers who left. Ask what sets them apart.',
      "Donnez à l'IA deux listes : les clients restés et les clients partis. Demandez ce qui les distingue."),
    steps: [
      B('Send what customers did before leaving. Never send the departure itself.',
        "Transmettez ce que les clients faisaient avant de partir, mais jamais le départ lui-même."),
      B('Ask for each difference with the number of customers behind it, and what the AI cannot conclude.',
        "Demandez chaque différence avec le nombre de clients concernés, ainsi que ce que l'IA ne peut pas conclure."),
      B('Check one signal by hand on ten accounts before acting on it.',
        "Vérifiez un signal à la main sur dix comptes avant d'agir sur cette base."),
    ],
    trap: B(
      'Including the cancellation date in your data. The AI will conclude, very confidently, that people who cancelled left. That teaches you nothing.',
      "Inclure la date de résiliation dans vos données. L'IA conclura, avec beaucoup d'assurance, que les clients ayant résilié sont partis, ce qui ne vous apprend rien.",
    ),
    quiz: {
      q: B('Which column must not be in the data you send?',
        "Quelle colonne ne doit pas figurer dans les données que vous transmettez ?"),
      options: [
        B('The cancellation itself', 'L\'annulation elle-même'),
        B('The date of their last use', 'La date de leur dernière utilisation'),
        B('The plan they were on', 'Le forfait souscrit'),
      ],
      answer: 0,
      why: B(
        'Data that only exists because the customer left will be taken as the cause of leaving. The result looks perfect, but it comes too late for you to act.',
        "Une donnée qui n'existe que parce que le client est parti sera prise pour la cause du départ. Le résultat paraît parfait, mais il arrive trop tard pour que vous puissiez agir.",
      ),
    },
    badge: B('Spots the signs before they leave', 'Repère les signes avant le départ'),
  },
]

const GR_MEASURE: Level[] = [
  {
    id: 'gr-question',
    master: 'analysis',
    minutes: 6,
    title: B('One dashboard, one question', 'Un tableau de bord, une seule question'),
    learn: B(
      'You will build a dashboard that answers one question instead of showing everything.',
      "Vous apprendrez à construire un tableau de bord qui répond à une question précise au lieu de tout afficher.",
    ),
    act: B('Write your question first, then ask the AI which three numbers answer it.',
      "Formulez d'abord votre question, puis demandez à l'IA quels sont les trois chiffres qui y répondent."),
    steps: [
      B('Write the question as a sentence you would say out loud to a colleague.',
        "Formulez la question comme une phrase que vous prononceriez à voix haute devant un collègue."),
      B('Ask for the fewest numbers that answer it, and what each one is for.',
        "Demandez le plus petit nombre de chiffres qui y répondent, et la fonction de chacun."),
      B('Ask what number would have to move for the answer to change.',
        "Demandez quel chiffre devrait varier pour que la réponse change."),
    ],
    trap: B(
      'Putting everything you can measure on the board? Nobody reads it. Worse, it gives the impression everything is tracked when nobody is looking.',
      "Placer sur le tableau tout ce qui se mesure. Personne ne le lit et, pire encore, il donne l'impression que tout est suivi alors que personne ne regarde.",
    ),
    quiz: {
      q: B('How do you know a metric belongs on the board?',
        "Comment savez-vous qu'un indicateur a sa place sur le tableau ?"),
      options: [
        B('A decision changes when it moves', "Une décision change lorsqu'il varie"),
        B('It is available in the tool', "Il est disponible dans l'outil"),
        B('The team has always had it on the board', "L'équipe l'a toujours eu sur le tableau"),
      ],
      answer: 0,
      why: B(
        'A number that changes no decision is only decoration. And it takes the place of the two or three useful numbers. Being available is not a reason to keep it.',
        "Un chiffre qui ne modifie aucune décision n'est qu'un ornement, et il occupe la place des deux ou trois chiffres utiles. Qu'un chiffre soit disponible ne justifie pas de le conserver.",
      ),
    },
    badge: B('Asks the question before measuring', 'Pose la question avant de mesurer'),
  },
  {
    id: 'gr-test',
    master: 'analysis',
    minutes: 7,
    title: B('Read your tests without fooling yourself', "Lisez vos tests sans vous leurrer"),
    learn: B(
      'You will finally tell a real result from plain chance.',
      "Vous apprendrez à distinguer un résultat réel d'un simple effet du hasard.",
    ),
    act: B('Give the AI your two results and the visitor count of each version. Ask what cannot be concluded.',
      "Donnez à l'IA vos deux résultats et le nombre de visiteurs de chaque version. Demandez ce qui ne peut pas être conclu."),
    steps: [
      B('Send numbers of people, not percentages. A percentage hides how few people there were.',
        "Transmettez des effectifs, et non des pourcentages. Un pourcentage masque le faible nombre de personnes concernées."),
      B('Ask for the range the true result probably falls in, rather than a plain yes or no.',
        "Demandez l'intervalle dans lequel se situe probablement le vrai résultat, plutôt qu'un simple oui ou non."),
      B('Ask how long the test would have needed to run to reach a conclusion.',
        "Demandez combien de temps le test aurait dû durer pour permettre une conclusion."),
    ],
    trap: B(
      'Stopping the test the day it proves you right? Every test looks good on some day. Stopping it then means you picked the result yourself.',
      "Arrêter le test le jour où il vous donne raison. Tout test paraît favorable à un moment donné : l'arrêter alors revient à choisir vous-même le résultat.",
    ),
    quiz: {
      q: B('12 % against 9 %, on two hundred visitors. What do you say?',
        "12 % contre 9 %, sur deux cents visiteurs. Que concluez-vous ?"),
      options: [
        B('B wins, the gap is three points', "B gagne, l'écart est de trois points"),
        B('A wins, keep it', "A gagne, on conserve A"),
        B('Too few people to tell', 'Trop peu de monde pour conclure'),
      ],
      answer: 2,
      why: B(
        'Two hundred visitors split in two gives only a handful of conversions on each side. One person switching sides is enough to flip the winner. Chance decides, not the page.',
        "Deux cents visiteurs répartis en deux groupes ne donnent qu'une poignée de conversions de chaque côté. Il suffit qu'une personne change de camp pour inverser le gagnant : c'est le hasard qui décide, non la page.",
      ),
    },
    badge: B('Counts people, not percents', "Compte des personnes, pas des pourcentages"),
  },
  {
    id: 'gr-attrib',
    master: 'research',
    minutes: 7,
    title: B("Don't take your attribution report at its word", "Ne croyez pas votre rapport d'attribution sur parole"),
    learn: B(
      'You will see that a channel report is just one way of reading the numbers among several.',
      "Vous verrez qu'un rapport par canal n'est qu'une lecture possible des chiffres parmi plusieurs.",
    ),
    act: B('Ask the AI for three different readings of the same numbers, and the decision each one would lead to.',
      "Demandez à l'IA trois lectures différentes des mêmes chiffres, et la décision que chacune entraînerait."),
    steps: [
      B('Give the numbers without saying what you conclude, so you do not steer the AI.',
        "Donnez les chiffres sans indiquer votre conclusion, afin de ne pas orienter l'IA."),
      B('For each channel, ask for a reading that gives it the credit, with the assumption behind it.',
        "Pour chaque canal, demandez une lecture qui lui attribue le mérite, avec l'hypothèse qui la justifie."),
      B('Pick the reading whose assumption you can check, then actually check it.',
        "Retenez la lecture dont vous pouvez vérifier l'hypothèse, puis vérifiez-la effectivement."),
    ],
    trap: B(
      'Believing your attribution tool tells the truth. Each tool only sees its own contacts with the customer, so it gives itself credit for the sale.',
      "Croire que votre outil d'attribution dit la vérité. Chaque outil ne voit que ses propres contacts avec le client ; il s'attribue donc le mérite de la vente.",
    ),
    quiz: {
      q: B('Two tools disagree on which channel won. Who is right?',
        "Deux outils divergent sur le canal gagnant. Lequel a raison ?"),
      options: [
        B('The one that saw the last click before the sale', 'Celui qui a vu le dernier clic avant la vente'),
        B('Neither, they count differently', 'Aucun, ils comptent différemment'),
        B('The one with more data', "Celui qui dispose du plus de données"),
      ],
      answer: 1,
      why: B(
        'The two tools do not measure the same thing, so neither is the truth. Look instead at which decision each one would push you to make, and whether those decisions really differ.',
        "Les deux outils ne mesurent pas la même chose : aucun ne détient donc la vérité. Examinez plutôt la décision que chacun vous pousserait à prendre, et si ces décisions diffèrent réellement.",
      ),
    },
    badge: B('Doubts the attribution report', "Doute du rapport d'attribution"),
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
    title: B('Finally put your style in writing', "Formalisez enfin votre style par écrit"),
    learn: B(
      'You will write a style guide anyone can apply, including an AI.',
      "Vous apprendrez à rédiger une charte de style que n'importe qui peut appliquer, y compris une IA.",
    ),
    act: B('Give the AI five of your real texts and ask for the style rules it spots in them.',
      "Donnez à l'IA cinq de vos textes réels et demandez-lui les règles de style qu'elle y repère."),
    steps: [
      B('Pick ordinary texts, not your best ones. Your best texts are exceptions, not your usual style.',
        "Choisissez des textes ordinaires, et non vos meilleurs. Vos meilleurs textes sont des exceptions, pas votre style habituel."),
      B('Ask for rules a stranger could follow, and a counter-example for each.',
        "Demandez des règles qu'un inconnu pourrait appliquer, avec un contre-exemple pour chacune."),
      B('Correct the list yourself. The rules you remove teach you as much about your style as the ones you keep.',
        "Corrigez vous-même la liste. Les règles que vous retirez vous renseignent autant sur votre style que celles que vous conservez."),
    ],
    trap: B(
      'Writing rules like "be warm and professional". Two people apply them in opposite ways, and nobody can say who is wrong.',
      "Écrire des règles comme « être chaleureux et professionnel ». Deux personnes les appliquent de façon opposée, et nul ne peut dire laquelle a tort.",
    ),
    quiz: {
      q: B('Which of these is a usable rule?',
        "Laquelle de ces règles est applicable ?"),
      options: [
        B('Keep a tone that is warm and modern', 'Garder un ton chaleureux et moderne'),
        B('Never open on the company name', "Ne jamais commencer par le nom de l'entreprise"),
        B('Write with personality', 'Écrire avec de la personnalité'),
      ],
      answer: 1,
      why: B(
        'A useful rule can be checked: you can point at a sentence and say it breaks the rule. Nobody can point at a sentence and prove it lacks warmth.',
        "Une règle utile se vérifie : on peut désigner une phrase et affirmer qu'elle l'enfreint. En revanche, personne ne peut prouver qu'une phrase manque de chaleur.",
      ),
    },
    badge: B('Has a written style guide', "Dispose d'une charte de style écrite"),
  },
  {
    id: 'co-calendar',
    master: 'planning',
    minutes: 6,
    title: B('A calendar that survives the whole quarter', 'Un calendrier qui tient tout le trimestre'),
    learn: B(
      'Filling your calendar one slot at a time? You will build it around a few big subjects instead.',
      "Remplissez-vous votre calendrier case par case ? Vous apprendrez plutôt à le construire autour de quelques grands sujets.",
    ),
    act: B('Name three subjects for the quarter, then ask what each one can produce.',
      "Nommez trois sujets pour le trimestre, puis demandez ce que chacun peut produire."),
    steps: [
      B('Pick three subjects, no more. Beyond that, the team spreads thin and the calendar breaks down along the way.',
        "Choisissez trois sujets, pas davantage. Au-delà, l'équipe se disperse et le calendrier cède en cours de route."),
      B('Ask what each subject can give in three formats, and what it cannot give.',
        "Demandez ce que chaque sujet peut produire dans trois formats, et ce qu'il ne peut pas produire."),
      B('Leave a quarter of the slots empty for news you cannot predict.',
        "Laissez un quart des cases vides pour l'actualité que vous ne pouvez pas prévoir."),
    ],
    trap: B(
      'Filling every slot before the quarter starts. When real news happens, it has no room left, and it was what people wanted to read.',
      "Remplir toutes les cases avant le début du trimestre. Lorsqu'un véritable événement survient, il n'a plus de place, alors que c'est ce que les lecteurs attendaient.",
    ),
    quiz: {
      q: B('Why leave slots empty on purpose?',
        "Pourquoi laisser volontairement des cases vides ?"),
      options: [
        B('To have room for what happens', "Pour faire place à ce qui survient"),
        B('To rest the team', 'Pour reposer l\'équipe'),
        B('To keep the production cost down', 'Pour contenir le coût de production'),
      ],
      answer: 0,
      why: B(
        'With a full calendar, every real event forces you to choose between your plan and the news. If you kept room free, you do not have to choose.',
        "Avec un calendrier plein, chaque événement réel vous oblige à choisir entre votre plan et l'actualité. Si vous avez réservé de la place, ce choix ne se pose pas.",
      ),
    },
    badge: B('Plans around subjects', 'Planifie par sujets'),
  },
  {
    id: 'co-decline',
    master: 'writing',
    minutes: 7,
    title: B('One idea, four formats, zero repeats', "Une idée, quatre formats, aucune redite"),
    learn: B(
      'You will turn one piece into four without saying the same thing four times.',
      "Vous apprendrez à décliner un contenu en quatre formats sans répéter quatre fois la même chose.",
    ),
    act: B('Take one article and ask the AI what each format must cut and add.',
      "Prenez un article et demandez à l'IA ce que chaque format doit retrancher et ajouter."),
    steps: [
      B('Say who reads each format and in what state of mind.',
        "Précisez qui lit chaque format, et dans quel état d'esprit."),
      B('Ask what must be cut for that reader, then what must be added for them.',
        "Demandez ce qu'il faut retrancher pour ce lecteur, puis ce qu'il faut lui ajouter."),
      B('Keep one identical sentence in all four formats. That sentence is your core idea.',
        "Conservez une même phrase dans les quatre formats. Cette phrase constitue votre idée centrale."),
    ],
    trap: B(
      'Asking for the same text, only shorter? You get a long text with pieces missing, and readers can feel what is missing.',
      "Demander le même texte en plus court. Vous obtenez un texte long amputé de passages, et les lecteurs perçoivent ce qui manque.",
    ),
    quiz: {
      q: B('What proves a set of formats came from one idea?',
        "Qu'est-ce qui prouve qu'une série de formats procède d'une seule idée ?"),
      options: [
        B('They have the same title', 'Ils portent le même titre'),
        B('They were all published the same week', 'Ils ont tous été publiés la même semaine'),
        B('One sentence is in all of them', "Une même phrase figure dans chacun"),
      ],
      answer: 2,
      why: B(
        'Anyone can paste a shared title on anything. A sentence that stays after every cut is the part that could not be removed: it is the idea itself.',
        "N'importe qui peut apposer un titre commun sur n'importe quel contenu. Une phrase qui subsiste après toutes les coupes est ce qui ne pouvait pas être retiré : il s'agit de l'idée elle-même.",
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
    title: B('The post that knows when to stop', "Le post qui sait s'arrêter à temps"),
    learn: B(
      'You will learn to cut the useless lines almost everyone adds at the end of a post.',
      "Vous apprendrez à supprimer les lignes inutiles que l'on ajoute presque toujours à la fin d'un post.",
    ),
    act: B('Write your post, then ask the AI where it could have stopped.',
      "Rédigez votre post, puis demandez à l'IA où il aurait pu s'arrêter."),
    steps: [
      B('Ask for the last sentence that carries information, and cut after it.',
        "Demandez quelle est la dernière phrase porteuse d'information, et coupez après elle."),
      B('Ask what the reader should do next. If there is nothing to do, add no call to action.',
        "Demandez ce que le lecteur doit faire ensuite. S'il n'a rien à faire, n'ajoutez pas d'appel à l'action."),
      B('Remove every sentence that talks about the post instead of the subject, like "hope this helps".',
        "Supprimez toute phrase qui parle du post plutôt que du sujet, comme « j'espère que cela vous aidera »."),
    ],
    trap: B(
      'Closing with a question just to get reactions? Readers notice, and they understand your text had no real ending.',
      "Conclure par une question dans le seul but de susciter des réactions. Les lecteurs le perçoivent, et comprennent que votre texte n'avait pas de véritable fin.",
    ),
    quiz: {
      q: B('Which ending is worth keeping?',
        "Quelle fin mérite d'être conservée ?"),
      options: [
        B('A question, to get people replying', 'Une question, pour faire réagir'),
        B('The last fact, and nothing after', 'Le dernier fait, et rien après'),
        B('A summary of the post', 'Un résumé du post'),
      ],
      answer: 1,
      why: B(
        'A post gets replies when it is interesting. A question added at the end asks the reader to supply the interest the text failed to create.',
        "Un post suscite des réponses lorsqu'il est intéressant. Une question ajoutée à la fin demande au lecteur de fournir l'intérêt que le texte n'a pas su créer.",
      ),
    },
    badge: B('Stops at the last fact', 'S\'arrête au dernier fait'),
  },
  {
    id: 'co-letter',
    master: 'writing',
    minutes: 7,
    title: B('Your newsletter, still opened at issue ten!', "Une newsletter encore ouverte au dixième numéro"),
    learn: B(
      'You will give each issue one clear promise, instead of sending a roundup.',
      "Vous apprendrez à donner à chaque numéro une promesse claire et unique, au lieu d'envoyer un récapitulatif.",
    ),
    act: B('Write the promise of your next issue in one line, then build the issue from it.',
      "Formulez en une ligne la promesse de votre prochain numéro, puis construisez le numéro à partir d'elle."),
    steps: [
      B('Write what the reader will know by the end, not a list of what is inside.',
        "Écrivez ce que le lecteur saura à la fin de sa lecture, et non la liste de ce que contient le numéro."),
      B('Ask what to drop from the issue because it does not serve that promise.',
        "Demandez ce qu'il faut retirer du numéro parce que cela ne sert pas cette promesse."),
      B('Write the subject line last, once the issue is finished, based on the promise.',
        "Rédigez l'objet en dernier, une fois le numéro terminé, en partant de la promesse."),
    ],
    trap: B(
      'Sending a monthly roundup? It promises nothing, so the reader has no reason to open it. By issue ten, nobody opens it anymore.',
      "Envoyer un récapitulatif du mois. Il ne promet rien : le lecteur n'a donc aucune raison de l'ouvrir. Au dixième numéro, plus personne ne l'ouvre.",
    ),
    quiz: {
      q: B('When do you write the subject line?',
        "À quel moment rédigez-vous l'objet ?"),
      options: [
        B('Last, from the promise', 'En dernier, à partir de la promesse'),
        B('First, it frames the issue', 'En premier, il cadre le numéro'),
        B('At the same time as the intro', 'En même temps que l\'introduction'),
      ],
      answer: 0,
      why: B(
        'Written first, the subject line promises something the issue then has to catch up with. Written last, it only announces what the issue really delivers. That is what makes people open the next ones.',
        "Rédigé en premier, l'objet promet ce que le numéro devra ensuite rattraper. Rédigé en dernier, il annonce seulement ce que le numéro apporte réellement, ce qui incite à ouvrir les suivants.",
      ),
    },
    badge: B('One promise per issue', 'Une promesse par numéro'),
  },
  {
    id: 'co-visual',
    master: 'tools',
    minutes: 7,
    title: B('Describe the image you want, in precise words', "Décrivez l'image voulue en termes précis"),
    learn: B(
      'You will write an image brief precise enough to judge the result.',
      "Vous apprendrez à rédiger un brief d'image assez précis pour pouvoir évaluer le résultat.",
    ),
    act: B('Write a brief that says the subject, the framing, and what must not appear.',
      "Rédigez un brief qui indique le sujet, le cadrage, et ce qui ne doit pas apparaître."),
    steps: [
      B('Say where the image will be seen and at what size. That decides everything else.',
        "Indiquez où l'image sera vue et à quelle taille. Ce paramètre détermine tout le reste."),
      B('Name what must not be there: no text, no faces, no logo.',
        "Nommez ce qui doit être absent : pas de texte, pas de visages, pas de logo."),
      B('Ask for three options that differ in subject, not in colour.',
        "Demandez trois propositions qui diffèrent par le sujet, et non par la couleur."),
    ],
    trap: B(
      'Asking for something "modern and clean". Those words mean something different to everyone. You get an average image and cannot say what is wrong.',
      "Demander une image « moderne et épurée ». Ces mots désignent autre chose pour chacun. Vous obtenez une image moyenne, sans pouvoir dire ce qui ne va pas.",
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
        'A constraint you can check avoids the argument. Text in an image seen at 400 pixels is unreadable: that is a fact, not a matter of taste.',
        "Une contrainte vérifiable évite le débat. Du texte dans une image vue en 400 pixels de large est illisible : c'est un fait, et non une question de goût.",
      ),
    },
    badge: B('Writes briefs you can check', 'Écrit des briefs vérifiables'),
  },
]

const CO_PRESS: Level[] = [
  {
    id: 'co-release',
    master: 'writing',
    minutes: 7,
    title: B('One release, one page, news first', 'Un communiqué, une page, la nouvelle d\'abord'),
    learn: B(
      'You will announce the news in the first sentence, instead of building up to it.',
      "Vous apprendrez à annoncer la nouvelle dès la première phrase, au lieu d'y parvenir progressivement.",
    ),
    act: B('Write the news in one sentence, then ask what the rest of the page must add.',
      "Formulez la nouvelle en une phrase, puis demandez ce que le reste de la page doit apporter."),
    steps: [
      B('First sentence: what is happening, who is involved, and when. Nothing before it.',
        "En première phrase : ce qui se passe, qui est concerné, et quand. Rien avant."),
      B('Then add only what a journalist cannot find anywhere else.',
        "Ajoutez ensuite uniquement ce qu'un journaliste ne peut pas trouver ailleurs."),
      B('Ask what questions a journalist would still ask you after reading. Answer them on the page.',
        "Demandez quelles questions un journaliste vous poserait encore après lecture, et répondez-y dans la page."),
    ],
    trap: B(
      'Opening by presenting the company and its mission. A journalist decides at the first line whether to keep reading. If they find your mission there, they stop.',
      "Commencer par présenter l'entreprise et sa mission. Le journaliste décide dès la première ligne s'il poursuit ; s'il y lit votre mission, il s'arrête là.",
    ),
    quiz: {
      q: B('What goes in the first sentence of a release?',
        "Que place-t-on dans la première phrase d'un communiqué ?"),
      options: [
        B('Who the company is', 'Qui est l\'entreprise'),
        B('Why it matters to the market', 'Pourquoi cela compte pour le marché'),
        B('What happened, and when', 'Ce qui se passe, et quand'),
      ],
      answer: 2,
      why: B(
        'Whoever reads your first line decides whether to read on. Only the news can convince them to continue. Everything else can wait for the rest of the page.',
        "Celui qui lit votre première ligne décide s'il lira la suite. Seule la nouvelle peut le convaincre de continuer ; tout le reste peut attendre la suite de la page.",
      ),
    },
    badge: B('Leads with the news', 'Commence par la nouvelle'),
  },
  {
    id: 'co-answer',
    master: 'support',
    minutes: 6,
    title: B('Answer a journalist in twenty minutes', "Répondez à un journaliste en vingt minutes"),
    learn: B(
      'A journalist is waiting on you? You will answer fast, without writing a sentence you would regret.',
      "Un journaliste attend votre réponse ? Vous apprendrez à répondre vite, sans écrire une phrase que vous regretteriez.",
    ),
    act: B('Draft the answer, then ask which sentence you would not want quoted alone.',
      "Rédigez la réponse, puis demandez quelle phrase vous ne voudriez pas voir citée isolément."),
    steps: [
      B('Answer the question asked, and only that one. If you dodge it, the dodge becomes the story.',
        "Répondez à la question posée, et à elle seule. Si vous l'éludez, c'est cette esquive qui fera l'article."),
      B('Ask the AI to read each sentence as if it were the only one quoted in the article.',
        "Demandez à l'IA de relire chaque phrase comme si elle était la seule citée dans l'article."),
      B('Say what you do not know, and when you will know it.',
        "Indiquez ce que vous ignorez, et quand vous le saurez."),
    ],
    trap: B(
      'Sending a long answer to look transparent. More sentences means more that can be quoted out of context. And it will happen.',
      "Envoyer une longue réponse pour paraître transparent. Plus il y a de phrases, plus il y en a qui peuvent être citées hors contexte, et cela finira par arriver.",
    ),
    quiz: {
      q: B('How do you test each sentence of your answer?',
        "Comment éprouver chaque phrase de votre réponse ?"),
      options: [
        B('Read in the whole answer', 'Lue dans la réponse entière'),
        B('Read alone, as a quote', 'Lue seule, comme une citation'),
        B('Read by your own team', "Lue par votre équipe"),
      ],
      answer: 1,
      why: B(
        'An answer is almost never published whole. A sentence that only makes sense with the others will be published alone, and the reader will not see the rest.',
        "Une réponse n'est presque jamais publiée en entier. Une phrase qui n'a de sens qu'avec les autres sera publiée seule, et le lecteur ne verra pas le reste.",
      ),
    },
    badge: B('Writes quotable sentences', 'Écrit des phrases citables'),
  },
  {
    id: 'co-crisis',
    master: 'triage',
    minutes: 7,
    title: B('Crisis: say only what you know', "En crise, ne dites que ce que vous savez"),
    learn: B(
      'Before you speak, you will learn to separate what you know from what you assume.',
      "Avant de vous exprimer, vous apprendrez à distinguer ce que vous savez de ce que vous supposez.",
    ),
    act: B('List the facts, the unknowns and the assumptions, then write only from the facts.',
      "Listez les faits, les inconnues et les suppositions, puis n'écrivez qu'à partir des faits."),
    steps: [
      B('Sort each piece of information into three groups: certain, unknown, or assumed. Be strict.',
        "Classez chaque information dans l'un de trois groupes : certain, inconnu ou supposé. Soyez strict."),
      B('Write from the certain facts, and say plainly what is still unknown.',
        "Rédigez à partir des faits certains, et indiquez clairement ce qui reste inconnu."),
      B('Announce the time of your next update, and keep to it even with nothing new.',
        "Annoncez l'heure de votre prochaine mise à jour, et respectez-la même sans élément nouveau."),
    ],
    trap: B(
      'Announcing that no customer was affected before you are sure? If it turns out false, the story is no longer the incident but your denial.',
      "Annoncer qu'aucun client n'est touché avant d'en être certain. Si cela s'avère faux, on ne parle plus de l'incident, mais de votre démenti.",
    ),
    quiz: {
      q: B('You do not yet know the extent. What do you publish?',
        "Vous ne connaissez pas encore l'ampleur. Que publiez-vous ?"),
      options: [
        B('Nothing, until you know', "Rien, tant que vous ne savez pas"),
        B('A reassuring note while the investigation runs', "Un message rassurant pendant que l'enquête se poursuit"),
        B('What is known, and the next update time', "Ce que vous savez, et l'heure de la prochaine mise à jour"),
      ],
      answer: 2,
      why: B(
        'Silence looks like you are hiding something. A reassuring message you later have to take back costs more than the incident. A short, true message with the next update time keeps you credible.',
        "Le silence laisse penser que vous cachez quelque chose. Un message rassurant qu'il faut ensuite démentir coûte plus cher que l'incident. Un message court et exact, avec l'heure de la prochaine mise à jour, préserve votre crédibilité.",
      ),
    },
    badge: B('Separates facts from assumptions', 'Sépare les faits des suppositions'),
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
    title: B('Finally say what you do, in one sentence', "Dites enfin ce que vous faites, en une phrase"),
    learn: B(
      'You will find one clear sentence and say it the same way to everyone who asks what you do.',
      "Vous apprendrez à formuler une phrase claire et à la dire de la même façon à quiconque vous demande ce que vous faites.",
    ),
    act: B('Write your sentence for one specific customer, then ask the AI what a stranger would picture reading it.',
      "Rédigez votre phrase pour un client précis, puis demandez à l'IA ce qu'un inconnu se représenterait en la lisant."),
    steps: [
      B('Say who it is for, and what those customers no longer have to do thanks to you. Without both, it is a slogan.',
        "Précisez pour qui c'est, et ce que ces clients n'ont plus à faire grâce à vous. Sans ces deux éléments, il s'agit d'un slogan."),
      B('Ask what other companies your sentence could describe. If the list is long, it is too vague.',
        "Demandez quelles autres entreprises votre phrase pourrait décrire. Si la liste est longue, la phrase est trop vague."),
      B('Say it out loud to someone outside the company. Note the first question they ask.',
        "Prononcez-la à voix haute devant une personne extérieure, et notez la première question qu'elle vous pose."),
    ],
    trap: B(
      'Giving a category instead of the change you bring. "An AI platform for teams" describes thousands of companies and does not say what you do.',
      "Donner une catégorie au lieu du changement apporté. « Une plateforme IA pour les équipes » décrit des milliers d'entreprises et ne dit pas ce que vous faites.",
    ),
    quiz: {
      q: B('How do you test the sentence?',
        "Comment éprouver votre phrase ?"),
      options: [
        B('Ask if it sounds good', 'Demander si elle sonne bien'),
        B('Ask what else it could describe', 'Demander ce qu\'elle pourrait décrire d\'autre'),
        B('Ask whether it is short enough to remember', "Demander si elle est assez courte pour être retenue"),
      ],
      answer: 1,
      why: B(
        'A sentence that also fits your competitors is not about you. Listing what else it could describe is the fastest way to see if it really says something.',
        "Une phrase qui convient aussi à vos concurrents ne parle pas de vous. Lister ce qu'elle pourrait décrire d'autre est le moyen le plus rapide de vérifier qu'elle dit réellement quelque chose.",
      ),
    },
    badge: B('Says what they do in one line', "Dit ce qu'il fait en une phrase"),
  },
  {
    id: 'fo-deck',
    master: 'planning',
    minutes: 7,
    title: B('Ten slides, one argument, no filler', "Dix diapositives, un raisonnement, aucun remplissage"),
    learn: B(
      'You will build a deck where each slide leads logically to the next.',
      "Vous apprendrez à construire un deck où chaque diapositive conduit logiquement à la suivante.",
    ),
    act: B('Write the ten sentences first, in order, and read them as one paragraph.',
      "Écrivez d'abord les dix phrases, dans l'ordre, et lisez-les comme un seul paragraphe."),
    steps: [
      B('One sentence per slide, and that sentence is the title.',
        "Une phrase par diapositive, et cette phrase en constitue le titre."),
      B('Read the ten sentences in a row. If that paragraph does not convince, the deck will not either.',
        "Lisez les dix phrases à la suite. Si ce paragraphe ne convainc pas, le deck ne convaincra pas davantage."),
      B('Ask where a reader could object, and put the answer on the next slide.',
        "Demandez où un lecteur pourrait objecter, et placez la réponse sur la diapositive suivante."),
    ],
    trap: B(
      'Polishing the design before your argument holds? Beautiful slides hide a weak argument, even from you.',
      "Soigner le design avant que le raisonnement ne tienne. De belles diapositives masquent un raisonnement faible, y compris à vos propres yeux.",
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
        'Read in a row, the titles show your argument with nothing around it. If they do not convince on their own, no chart later on will save them.',
        "Lus à la suite, les titres exposent votre raisonnement sans rien autour. S'ils ne convainquent pas à eux seuls, aucun graphique ultérieur ne les sauvera.",
      ),
    },
    badge: B('Argues in ten sentences', 'Argumente en dix phrases'),
  },
  {
    id: 'fo-hard',
    master: 'research',
    minutes: 7,
    title: B('Answer the question that hurts', "Répondez à la question qui dérange"),
    learn: B(
      'You will prepare the three objections you least want to hear.',
      "Vous apprendrez à préparer les trois objections que vous redoutez le plus d'entendre.",
    ),
    act: B('Ask the AI to attack your project as hard as it can, then answer in writing.',
      "Demandez à l'IA d'attaquer votre projet aussi durement que possible, puis répondez par écrit."),
    steps: [
      B('Give it your pitch and ask for the strongest criticism anyone could make.',
        "Donnez-lui votre pitch et demandez les critiques les plus fortes que l'on puisse formuler."),
      B('Keep the objections you cannot answer in one sentence. Those are the ones that matter.',
        "Conservez les objections auxquelles vous ne savez pas répondre en une phrase : ce sont celles qui comptent."),
      B('Write your answer, then check which assumptions it rests on.',
        "Rédigez votre réponse, puis vérifiez sur quelles hypothèses elle repose."),
    ],
    trap: B(
      'Letting the AI agree with you. It then serves up objections you already know how to beat, and you learn nothing new.',
      "Laisser l'IA vous donner raison. Elle vous sert alors les objections que vous savez déjà contrer, et vous ne découvrez rien de nouveau.",
    ),
    quiz: {
      q: B('Which objection is worth preparing?',
        'Quelle objection mérite d\'être préparée ?'),
      options: [
        B('The one you answer instantly', "Celle à laquelle vous répondez aussitôt"),
        B('The one nobody in the room has raised yet', "Celle que personne dans la salle n'a encore soulevée"),
        B('The one that takes you a paragraph', "Celle qui vous demande un paragraphe"),
      ],
      answer: 2,
      why: B(
        'An objection you answer instantly was never a risk. The one that needs a paragraph is the one you will fumble in a meeting. It is the only one worth the work.',
        "Une objection à laquelle vous répondez aussitôt n'a jamais représenté un risque. Celle qui exige un paragraphe est celle que vous manquerez en réunion : c'est la seule qui justifie ce travail.",
      ),
    },
    badge: B('Prepares the hard objection', "Prépare l'objection difficile"),
  },
]

const FO_CUSTOMER: Level[] = [
  {
    id: 'fo-interview',
    master: 'research',
    minutes: 7,
    title: B('Twenty customer interviews, zero leading questions', "Vingt entretiens clients, aucune question orientée"),
    learn: B(
      'You will ask customers what they did, not what they plan to do.',
      "Vous apprendrez à demander aux clients ce qu'ils ont fait, et non ce qu'ils comptent faire.",
    ),
    act: B('Write ten questions, then ask which of them predict nothing.',
      "Rédigez dix questions, puis demandez lesquelles ne prédisent rien."),
    steps: [
      B('Ask what they did last time, not what they would do.',
        "Demandez ce qu'ils ont fait la dernière fois, et non ce qu'ils feraient."),
      B('Never name your solution before the end of the conversation.',
        "Ne nommez jamais votre solution avant la fin de l'entretien."),
      B('Ask what it cost them: time, money, or an argument with someone.',
        "Demandez ce que cela leur a coûté : du temps, de l'argent, ou un désaccord avec quelqu'un."),
    ],
    trap: B(
      'Asking whether they would use it? Everyone says yes to a stranger who built something, and that yes has never predicted a single purchase.',
      "Demander s'ils l'utiliseraient. Tout le monde répond oui à un inconnu qui a construit quelque chose, et ce oui n'a jamais prédit un seul achat.",
    ),
    quiz: {
      q: B('Which question is worth asking?',
        "Quelle question mérite d'être posée ?"),
      options: [
        B('Would you pay for this?', 'Paieriez-vous pour cela ?'),
        B('What did you do last time?', 'Qu\'avez-vous fait la dernière fois ?'),
        B('Does this seem useful to you?', 'Cela vous paraît-il utile ?'),
      ],
      answer: 1,
      why: B(
        'What happened can be told in detail, and nobody invents it to please you. An intention costs nothing to state, and it is forgotten as soon as the interview ends.',
        "Ce qui s'est passé se raconte en détail, et personne ne l'invente pour vous faire plaisir. Une intention ne coûte rien à énoncer, et elle est oubliée dès la fin de l'entretien.",
      ),
    },
    badge: B('Asks about the past', 'Interroge le passé'),
  },
  {
    id: 'fo-verbatim',
    master: 'extraction',
    minutes: 7,
    title: B('Read your notes without seeing what you want', "Lisez vos notes sans y projeter vos attentes"),
    learn: B(
      'You will let recurring problems show up on their own, instead of looking for the ones you expect.',
      "Vous apprendrez à laisser les problèmes récurrents émerger d'eux-mêmes, au lieu de chercher ceux que vous attendez.",
    ),
    act: B('Paste twenty raw interview notes and ask what comes back, before saying what you expect.',
      "Collez vingt notes d'entretien brutes et demandez ce qui revient, avant d'exprimer vos attentes."),
    steps: [
      B("Paste the customers' exact words, not your summary.",
        "Collez les mots exacts des clients, et non votre résumé."),
      B('Ask for the recurring themes, how often each one appears, and the quotes that back it.',
        "Demandez les thèmes récurrents, la fréquence de chacun, et les citations qui l'attestent."),
      B('Look at the theme with the fewest quotes. It is often the one whose importance you overrate.',
        "Examinez le thème qui compte le moins de citations : c'est souvent celui dont vous surestimez l'importance."),
    ],
    trap: B(
      'Saying up front what you hope to find. The AI will find it in quotes that half fit, and you will not see the ones it skipped.',
      "Annoncer d'emblée ce que vous espérez trouver. L'IA le trouvera dans des citations qui ne correspondent qu'à moitié, et vous ne verrez pas celles qu'elle a ignorées.",
    ),
    quiz: {
      q: B('Why send the raw words and not your summary?',
        "Pourquoi transmettre les mots bruts plutôt que votre résumé ?"),
      options: [
        B('It is faster and there is less to paste', "C'est plus rapide et il y a moins à coller"),
        B('Your summary already chose', "Votre résumé a déjà opéré un choix"),
        B('The tool prefers long text', 'L\'outil préfère les longs textes'),
      ],
      answer: 1,
      why: B(
        'Writing a summary already means choosing what matters. If you hand over your summary, the AI only confirms your choices, and you learn nothing.',
        "Résumer, c'est déjà choisir ce qui compte. Si vous transmettez votre résumé, l'IA ne fait que confirmer vos choix, et vous n'apprenez rien.",
      ),
    },
    badge: B('Reads notes without bias', 'Lit les notes sans a priori'),
  },
  {
    id: 'fo-price',
    master: 'analysis',
    minutes: 7,
    title: B('Finally set your first price', "Fixez enfin votre premier prix"),
    learn: B(
      'Pricing from your costs? You will price against what your product replaces instead.',
      "Vous fixez votre prix d'après vos coûts ? Vous apprendrez à le fixer d'après ce que votre produit remplace.",
    ),
    act: B('Name what your customer stops paying for thanks to you, then ask what share of that you can charge.',
      "Nommez ce que votre client cesse de payer grâce à vous, puis demandez quelle part de cette somme vous pouvez facturer."),
    steps: [
      B('Write what they do today and what it costs them in hours or money.',
        "Décrivez ce qu'ils font aujourd'hui et ce que cela leur coûte en heures ou en argent."),
      B('Ask for three price levels and what each one says about the product.',
        "Demandez trois niveaux de prix et ce que chacun exprime du produit."),
      B('Ask which one you would be embarrassed to say out loud, and why.',
        "Demandez lequel vous gênerait à annoncer à voix haute, et pourquoi."),
    ],
    trap: B(
      'Pricing from your costs. The customer does not know your costs. They compare your price to what they already spend on that problem.',
      "Fixer votre prix à partir de vos coûts. Le client ignore vos coûts : il compare votre prix à ce qu'il dépense déjà pour résoudre ce problème.",
    ),
    quiz: {
      q: B('What does the customer compare your price to?',
        "À quoi le client compare-t-il votre prix ?"),
      options: [
        B('What it costs you to build and serve', "Ce que cela vous coûte à produire et à fournir"),
        B('What a competitor charges', 'Ce que facture un concurrent'),
        B('What they spend on this today', 'Ce qu\'ils dépensent aujourd\'hui pour cela'),
      ],
      answer: 2,
      why: B(
        'Buyers do not know your costs, and they do not care. They know what this problem already costs them, and that is the only number they can compare you to.',
        "Les acheteurs ne connaissent pas vos coûts, et ils ne s'en soucient pas. Ils savent en revanche ce que ce problème leur coûte déjà : c'est le seul chiffre auquel ils peuvent vous comparer.",
      ),
    },
    badge: B('Prices against what it replaces', "Fixe son prix selon ce qu'il remplace"),
  },
]

const FO_TEAM: Level[] = [
  {
    id: 'fo-role',
    master: 'planning',
    minutes: 6,
    title: B('Write the job before you hire', "Définissez le poste avant de recruter"),
    learn: B(
      'You will describe the work of the first ninety days, not a profile.',
      "Vous apprendrez à décrire le travail des quatre-vingt-dix premiers jours, et non un profil.",
    ),
    act: B('Write what this person will have achieved in three months, then work out the profile from that.',
      "Décrivez ce que cette personne aura accompli dans trois mois, puis déduisez-en le profil."),
    steps: [
      B('List three things that will exist thanks to this person.',
        "Listez trois réalisations qui existeront grâce à cette personne."),
      B('Ask what skills those three things actually require.',
        "Demandez quelles compétences ces trois réalisations exigent réellement."),
      B('Cut every requirement that does not appear in that answer.',
        "Supprimez toute exigence qui n'apparaît pas dans cette réponse."),
    ],
    trap: B(
      'Requiring five years of experience on six tools. You rule out people who could deliver the work, and keep those who just know the tools.',
      "Exiger cinq ans d'expérience sur six outils. Vous écartez des personnes capables de livrer le travail, et retenez celles qui connaissent seulement les outils.",
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
        'Results can be checked after ninety days, and they show which skills really mattered. A skill list can only be checked on a CV, which only describes the past.',
        "Des résultats se vérifient au bout de quatre-vingt-dix jours, et ils révèlent les compétences réellement nécessaires. Une liste de compétences ne se vérifie que sur un CV, qui ne décrit que le passé.",
      ),
    },
    badge: B('Hires for an outcome', 'Recrute pour un résultat'),
  },
  {
    id: 'fo-decide',
    master: 'writing',
    minutes: 6,
    title: B('Keep a record of your decisions', "Gardez une trace de vos décisions"),
    learn: B(
      'Why did you choose that, again? You will keep a log that reminds you later.',
      "Pourquoi aviez-vous fait ce choix, déjà ? Vous apprendrez à tenir un journal qui vous le rappellera plus tard.",
    ),
    act: B('Write the decision, the other possible options, and what would prove you wrong.',
      "Consignez la décision, les autres options possibles, et ce qui prouverait que vous vous êtes trompé."),
    steps: [
      B('Write the decision in one sentence, in the past tense, to show it is made.',
        "Formulez la décision en une phrase, au passé, pour indiquer qu'elle est prise."),
      B('List the options you rejected, with the main reason for each.',
        "Listez les options que vous avez écartées, avec la raison principale de chacune."),
      B('Name the fact that would prove you wrong, and when you will check.',
        "Nommez le fait qui vous donnerait tort, et le moment où vous le vérifierez."),
    ],
    trap: B(
      'Recording only the decision. Six months later nobody remembers the other options, and the same debate starts again from scratch.',
      "Ne consigner que la décision. Six mois plus tard, personne ne se souvient des autres options, et le même débat recommence de zéro.",
    ),
    quiz: {
      q: B('What makes a decision record useful later?',
        "Qu'est-ce qui rend une trace de décision utile par la suite ?"),
      options: [
        B('The options that were rejected', 'Les options qui ont été écartées'),
        B('The date it was made', 'La date à laquelle elle a été prise'),
        B('Who signed it off, and on what date', "Qui l'a validée, et à quelle date"),
      ],
      answer: 0,
      why: B(
        'On its own, the decision looks obvious in hindsight, so it teaches nothing. The rejected options show the situation you were really in when you chose.',
        "Isolée, la décision paraît évidente après coup ; elle n'apprend donc rien. Les options écartées restituent la situation réelle dans laquelle vous vous trouviez au moment de choisir.",
      ),
    },
    badge: B('Keeps the rejected options', 'Garde les options écartées'),
  },
  {
    id: 'fo-keep',
    master: 'triage',
    minutes: 6,
    title: B("What you'll never hand over", "Ce que vous ne déléguerez jamais"),
    learn: B(
      'You will tell apart what you can delegate from what only you can do.',
      "Vous apprendrez à distinguer ce que vous pouvez déléguer de ce que vous seul pouvez accomplir.",
    ),
    act: B('List a week of your tasks and sort them yourself into three piles.',
      "Listez vos tâches d'une semaine et répartissez-les vous-même en trois catégories."),
    steps: [
      B('Pile one: anyone could do it with instructions. Write those instructions.',
        "Première catégorie : n'importe qui peut le faire avec des instructions. Rédigez ces instructions."),
      B('Pile two: someone could do it if they knew the context. Write that context down.',
        "Deuxième catégorie : quelqu'un pourrait le faire s'il connaissait le contexte. Consignez ce contexte."),
      B('Pile three: it needs your judgement or your name. Keep it, and say why.',
        "Troisième catégorie : il faut votre jugement ou votre nom. Conservez-la, et expliquez pourquoi."),
    ],
    trap: B(
      'Keeping a task because explaining it takes longer than doing it? True the first time. But if it comes back every week, you lose that time each time.',
      "Garder une tâche parce que l'expliquer prend plus de temps que l'exécuter. C'est vrai une fois ; si elle revient chaque semaine, vous perdez ce temps à chaque fois.",
    ),
    quiz: {
      q: B('Explaining a task takes longer than doing it. What do you do?',
        "Expliquer une tâche prend plus de temps que l'exécuter. Que faites-vous ?"),
      options: [
        B('Explain it once, if it recurs', "Vous l'expliquez une fois, si elle revient"),
        B('Keep it, it is faster', "Vous la gardez, c'est plus rapide"),
        B('Wait until you have time to explain it', "Vous attendez d'avoir le temps de l'expliquer"),
      ],
      answer: 0,
      why: B(
        'You are comparing the wrong things. Compare one explanation with the time spent doing the task every week. Keeping it only makes sense if it never comes back.',
        "La comparaison porte sur les mauvais termes. Il faut comparer une seule explication au temps passé chaque semaine à exécuter la tâche. La garder n'a de sens que si elle ne revient jamais.",
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
    title: B('Acquisition that hits the mark', 'L\'acquisition qui vise juste'),
    blurb: B("Target one clear segment, test real angles, and make your page keep your ad's promise.",
      "Visez un segment précis, testez de véritables angles, et faites en sorte que votre page tienne la promesse de votre annonce."),
  },
  {
    id: 'gr-lifecycle', track: 'trade', glyph: 'ring', tint: '#e0459b', at: [3, 10], levels: GR_LIFE,
    title: B('Keep the people who sign up', "Fidéliser les nouveaux inscrits"),
    blurb: B('Nail the first day, send follow-ups that add something, spot who is about to leave.',
      "Réussissez le premier jour, envoyez des relances utiles, repérez qui s'apprête à partir."),
  },
  {
    id: 'gr-measure', track: 'trade', glyph: 'bars', tint: '#e0459b', at: [5, 10], levels: GR_MEASURE,
    title: B('Measure what really matters', "Mesurer ce qui compte vraiment"),
    blurb: B('One dashboard per question, tests read without fooling yourself, and a critical eye on attribution.',
      "Un tableau de bord par question, des tests lus avec rigueur, et un regard critique sur l'attribution."),
  },
  {
    id: 'co-voice', track: 'trade', glyph: 'pen', tint: '#0ea5e9', at: [1, 12], levels: CO_VOICE,
    title: B('Your editorial line', "Votre ligne éditoriale"),
    blurb: B('Put your style in writing, build a calendar that holds, and turn one idea into several formats.',
      "Formalisez votre style, construisez un calendrier qui tient, et déclinez une idée en plusieurs formats."),
  },
  {
    id: 'co-formats', track: 'trade', glyph: 'layers', tint: '#0ea5e9', at: [3, 12], levels: CO_FORMATS,
    title: B('Formats people actually read!', "Des formats réellement lus"),
    blurb: B('A post that stops in time, a newsletter people still open, a visual you can judge.',
      "Un post qui s'arrête à temps, une newsletter encore ouverte, un visuel que vous pouvez évaluer."),
  },
  {
    id: 'co-press', track: 'trade', glyph: 'star4', tint: '#0ea5e9', at: [5, 12], levels: CO_PRESS,
    title: B('Press and crisis, without panic', "Presse et crise, avec sang-froid"),
    blurb: B('Lead with the news, answer a journalist in twenty minutes, separate facts from assumptions.',
      "Annoncez d'abord la nouvelle, répondez à un journaliste en vingt minutes, séparez les faits des suppositions."),
  },
  {
    id: 'fo-story', track: 'trade', glyph: 'peak', tint: '#7b5cff', at: [1, 14], levels: FO_STORY,
    title: B('Your founder story', "Votre récit de fondateur"),
    blurb: B('Your business in one sentence, a ten-slide deck that convinces, and the objection that hurts.',
      "Votre activité en une phrase, un deck de dix diapositives qui convainc, et l'objection qui dérange."),
  },
  {
    id: 'fo-customer', track: 'trade', glyph: 'centre', tint: '#7b5cff', at: [3, 14], levels: FO_CUSTOMER,
    title: B('Finally understand your customer', "Comprendre enfin votre client"),
    blurb: B('Ask customers what they actually did, read your notes without bias, set your first price.',
      "Interrogez vos clients sur ce qu'ils ont fait, lisez vos notes sans a priori, fixez votre premier prix."),
  },
  {
    id: 'fo-team', track: 'trade', glyph: 'quadrant', tint: '#7b5cff', at: [5, 14], levels: FO_TEAM,
    title: B('Your team, your time', "Votre équipe, votre temps"),
    blurb: B('Hire for an outcome, keep a record of your decisions, sort before delegating.',
      "Recrutez pour un résultat, gardez une trace de vos décisions, triez avant de déléguer."),
  },
]

export const TRADES_1: Trade[] = [
  {
    id: 'growth',
    label: B('Growth marketer', 'Growth marketer'),
    who: B('You bring in customers, and you answer for what it costs.',
      "Vous faites venir des clients, et vous rendez compte de ce que cela coûte."),
    glyph: 'target', tint: '#e0459b',
    cities: ['gr-acquisition', 'gr-lifecycle', 'gr-measure'],
  },
  {
    id: 'comms',
    label: B('Communications', 'Communicant'),
    who: B('You write what the company says, and you are responsible for it.',
      "Vous rédigez ce que dit l'entreprise, et vous en portez la responsabilité."),
    glyph: 'pen', tint: '#0ea5e9',
    cities: ['co-voice', 'co-formats', 'co-press'],
  },
  {
    id: 'founder',
    label: B('Founder', 'Fondateur'),
    who: B('You decide, you sell and you hire, often on the same day.',
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
    title: B('Problem first, solution second', 'Le problème d\'abord, la solution ensuite'),
    learn: B(
      'You will state a problem that does not already contain its answer.',
      "Vous apprendrez à énoncer un problème qui ne contient pas déjà sa réponse.",
    ),
    act: B('Write down the request you received, then ask the AI what problem lies behind it.',
      "Notez la demande reçue, puis demandez à l'IA quel problème elle recouvre."),
    steps: [
      B('Write the request as it arrived, with the feature name in it.',
        "Notez la demande telle qu'elle est arrivée, avec le nom de la fonctionnalité."),
      B('Ask what the person was trying to do just before they asked.',
        "Demandez ce que la personne tentait de faire juste avant de formuler sa demande."),
      B('Restate the problem without mentioning any solution. Only then, look for three possible solutions.',
        "Reformulez le problème sans mentionner de solution. Ensuite seulement, cherchez trois solutions possibles."),
    ],
    trap: B(
      'Taking "we need an export" as a problem. It is already a solution, and it hides the real question: what do they do with the file afterwards?',
      "Prendre « il nous faut un export » pour un problème. C'est déjà une solution, qui masque la vraie question : que font-ils du fichier ensuite ?",
    ),
    quiz: {
      q: B('A customer asks for a bulk import. What do you write down?',
        "Un client demande un import en masse. Que notez-vous ?"),
      options: [
        B('They re-enter data they already have', "Ils ressaisissent des données qu'ils possèdent déjà"),
        B('Build a bulk import', 'Construire un import en masse'),
        B('A bulk import, marked as high priority', 'Un import en masse, marqué prioritaire'),
      ],
      answer: 0,
      why: B(
        'Written as a problem, the request can be solved with an import, a connector, or by removing the need for that data. Written as a feature, it allows only one of those solutions.',
        "Formulée comme un problème, la demande peut se résoudre par un import, un connecteur, ou en supprimant le besoin de ces données. Formulée comme une fonctionnalité, elle n'autorise qu'une seule de ces solutions.",
      ),
    },
    badge: B('States problems', 'Énonce des problèmes'),
  },
  {
    id: 'pr-triage',
    master: 'triage',
    minutes: 7,
    title: B('Sort everything that comes in', "Triez tout ce qui remonte"),
    learn: B(
      'Hundreds of messages in a heap? You will group them by problem, not by wording.',
      "Des centaines de messages en vrac ? Vous apprendrez à les regrouper par problème, et non par formulation.",
    ),
    act: B('Paste fifty pieces of customer feedback and ask for groups, with how many are in each.',
      "Collez cinquante retours clients et demandez de les regrouper, avec le nombre de retours par groupe."),
    steps: [
      B('Send the messages raw, without categories of your own.',
        "Transmettez les messages bruts, sans vos propres catégories."),
      B('Ask for groups by underlying problem, with one quote per group.',
        "Demandez des groupes par problème de fond, avec une citation par groupe."),
      B('Check the two smallest groups by hand. That is where the sorting most often goes wrong.',
        "Vérifiez à la main les deux plus petits groupes : c'est là que le tri se trompe le plus souvent."),
    ],
    trap: B(
      'Giving the AI your existing categories. Everything will fit in them, even the messages that showed you those categories are wrong.',
      "Donner à l'IA vos catégories existantes. Tout y entrera, même les messages qui montraient que ces catégories sont erronées.",
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
        'A big group rests on an obvious shared word, so it is rarely wrong. A group of two often joins two unrelated topics that just happened to use the same words.',
        "Un gros groupe repose sur un mot commun évident ; il est donc rarement faux. Un groupe de deux messages réunit souvent deux sujets sans rapport qui employaient simplement les mêmes mots.",
      ),
    },
    badge: B('Groups by problem', 'Regroupe par problème'),
  },
  {
    id: 'pr-no',
    master: 'writing',
    minutes: 6,
    title: B('Say no in writing, and get it accepted', "Refusez par écrit, et faites accepter ce refus"),
    learn: B(
      'You will write a refusal that stays clear even when it is forwarded to other people.',
      "Vous apprendrez à rédiger un refus qui reste clair même lorsqu'il est transféré à d'autres personnes.",
    ),
    act: B('Write the refusal, then ask how it reads to someone who did not follow the thread.',
      "Rédigez le refus, puis demandez comment le lirait quelqu'un qui n'a pas suivi l'échange."),
    steps: [
      B('First say what you understood of the problem, in their words.',
        "Reformulez d'abord ce que vous avez compris du problème, avec leurs propres mots."),
      B('Give one reason, the real one. A list of reasons looks like an excuse.',
        "Donnez une seule raison, la vraie. Une liste de raisons ressemble à une excuse."),
      B('Say what could change your answer, and when you will look at the request again.',
        "Indiquez ce qui pourrait modifier votre réponse, et quand vous réexaminerez la demande."),
    ],
    trap: B(
      'Answering "not on the roadmap"? With no reason given, the same request comes back next quarter, from someone more senior.',
      "Répondre « ce n'est pas prévu ». Sans raison, la même demande reviendra au trimestre suivant, portée par quelqu'un de plus haut placé.",
    ),
    quiz: {
      q: B('What makes a refusal hold over time?',
        'Qu\'est-ce qui fait tenir un refus dans la durée ?'),
      options: [
        B('It says what would change it', "Il indique ce qui le ferait changer"),
        B('It is short and firm', 'Il est court et ferme'),
        B('It comes from someone senior enough', "Il vient de quelqu'un d'assez haut placé"),
      ],
      answer: 0,
      why: B(
        'When you say what would change the answer, people wait for that condition instead of arguing. Without one, their only option is to go over your head, and someone will.',
        "Lorsque vous indiquez à quelle condition votre réponse changerait, les gens attendent cette condition au lieu de discuter. Sans condition, leur seul recours est d'en appeler plus haut, et quelqu'un le fera.",
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
    title: B('A spec an engineer can finally read', 'Une spécification enfin lisible par un développeur'),
    learn: B(
      'You will describe what the product does, instead of describing screens.',
      "Vous apprendrez à décrire ce que fait le produit, plutôt que de décrire des écrans.",
    ),
    act: B('Write what the system does in each case, and ask what case is missing.',
      "Décrivez ce que fait le système dans chaque cas, et demandez quel cas manque."),
    steps: [
      B('One line per case: given this, the system does that.',
        "Une ligne par cas : dans telle situation, le système fait telle chose."),
      B('Ask which cases are not covered by your lines.',
        "Demandez quels cas ne sont couverts par aucune de vos lignes."),
      B('Ask which two lines contradict each other. There is usually one pair.',
        "Demandez quelles lignes se contredisent : il existe presque toujours une telle paire."),
    ],
    trap: B(
      'Describing only the screen. You then forget every case: empty list, loading, too many rows, partial access rights.',
      "Décrire seulement l'écran. Vous oubliez alors tous les cas : liste vide, chargement, trop de lignes, droits d'accès partiels.",
    ),
    quiz: {
      q: B('Which line belongs in a spec?',
        'Quelle ligne a sa place dans une spécification ?'),
      options: [
        B('A list on the left, a form on the right', 'Une liste à gauche, un formulaire à droite'),
        B('With no rows, it shows how to add one', "Sans aucune ligne, l'écran montre comment en ajouter une"),
        B('The page should feel fast', 'La page doit sembler rapide'),
      ],
      answer: 1,
      why: B(
        'A behaviour can be built, then checked by someone who was not in the conversation. A layout or a feeling can be delivered exactly as asked and still be wrong.',
        "Un comportement peut être construit, puis vérifié par quelqu'un qui n'a pas pris part à la discussion. Une mise en page ou une impression peuvent être livrées exactement comme demandé et rester fausses.",
      ),
    },
    badge: B('Writes behaviour', 'Écrit des comportements'),
  },
  {
    id: 'pr-edges',
    master: 'analysis',
    minutes: 7,
    title: B('Hunt down the edge cases before production', "Traquez les cas limites avant la production"),
    learn: B(
      'You will find the states nobody drew, before your users find them for you.',
      "Vous apprendrez à identifier les états que personne n'a dessinés, avant que vos utilisateurs ne les découvrent.",
    ),
    act: B('Give the AI your spec and ask for every state a user could be in.',
      "Donnez à l'IA votre spécification et demandez tous les états dans lesquels un utilisateur peut se trouver."),
    steps: [
      B('Ask for the empty case, the huge case, and the case interrupted halfway.',
        "Demandez le cas vide, le cas énorme, et le cas interrompu en cours de route."),
      B('Ask what happens when two people do it at the same time.',
        "Demandez ce qui se passe lorsque deux personnes effectuent l'action simultanément."),
      B('Decide the answer to each case yourself. An undecided case ends up as a bug, and it will be on you.',
        "Décidez vous-même de la réponse à chaque cas. Un cas non tranché finit en bug, et c'est à vous qu'on le reprochera."),
    ],
    trap: B(
      'Leaving an edge case to be decided during development. The developer will settle it in a few seconds, without knowing what is at stake.',
      "Laisser un cas limite se décider pendant le développement. Le développeur le tranchera en quelques secondes, sans en connaître les enjeux.",
    ),
    quiz: {
      q: B('Which state is forgotten most often?',
        'Quel état est le plus souvent oublié ?'),
      options: [
        B('The empty one, on day one', "L'état vide, le premier jour"),
        B('The one with too much data', 'Celui avec trop de données'),
        B('The one with an error', 'Celui avec une erreur'),
      ],
      answer: 0,
      why: B(
        'The empty state is the only one every user sees. Yet nobody designs it, because the mock-up is drawn with sample data.',
        "L'état vide est le seul que voient tous les utilisateurs. Pourtant, personne ne le conçoit, parce que la maquette est réalisée avec des données d'exemple.",
      ),
    },
    badge: B('Decides the edges', 'Tranche les cas limites'),
  },
  {
    id: 'pr-mock',
    master: 'tools',
    minutes: 6,
    title: B('Describe a screen in plain words', "Décrivez un écran en termes simples"),
    learn: B(
      'No more blank page: you will get a first screen to react to.',
      "Pour dépasser la page blanche, vous apprendrez à obtenir un premier écran sur lequel réagir.",
    ),
    act: B('Describe the structure, the data and the main action, then ask the AI for a first rough screen.',
      "Décrivez la structure, les données et l'action principale, puis demandez à l'IA une première ébauche d'écran."),
    steps: [
      B('List what is on the page, in order of importance. That order drives the whole design.',
        "Listez les éléments de la page par ordre d'importance. Cet ordre oriente l'ensemble du design."),
      B('Say the one thing the user came to do. One, not a list of options.',
        "Indiquez la seule chose que l'utilisateur vient faire. Une seule, et non une liste de possibilités."),
      B('Treat what comes back as a draft to discuss, never as a finished design.',
        "Traitez le résultat comme un brouillon à discuter, jamais comme un design abouti."),
    ],
    trap: B(
      'Shipping the generated screen as is. It is an average of everything the model has seen, so probably the screen your competitors already have.',
      "Livrer tel quel l'écran généré. Il constitue une moyenne de tout ce que le modèle a vu, donc probablement l'écran dont vos concurrents disposent déjà.",
    ),
    quiz: {
      q: B('What is a generated screen good for?',
        'À quoi sert un écran généré ?'),
      options: [
        B('Shipping quickly', "Livrer rapidement"),
        B('Showing it to a customer this week', 'Le montrer à un client cette semaine'),
        B('Having something to argue with', "Disposer d'un support à discuter"),
      ],
      answer: 2,
      why: B(
        'People say far more about a wrong screen than about a blank page. Those reactions are the whole value, and they stop the moment the draft is treated as a decision.',
        "On s'exprime bien davantage devant un écran imparfait que devant une page blanche. Ces réactions constituent tout l'intérêt, et elles cessent dès que le brouillon est pris pour une décision.",
      ),
    },
    badge: B('Drafts to get reactions', 'Ébauche pour faire réagir'),
  },
]

const PR_SHIP: Level[] = [
  {
    id: 'pr-stop',
    master: 'analysis',
    minutes: 6,
    title: B('Define success before you build', "Définissez la réussite avant de construire"),
    learn: B(
      'You will say, before building, what would count as success.',
      "Vous apprendrez à énoncer, avant de construire, ce qui constituerait une réussite.",
    ),
    act: B('Write the number and the date that will decide, before a single line of code.',
      "Notez le chiffre et la date qui trancheront, avant d'écrire la moindre ligne de code."),
    steps: [
      B('Pick one number, measurable today, that will move if this works.',
        "Choisissez un chiffre, mesurable dès aujourd'hui, qui évoluera si le projet fonctionne."),
      B('Pick a date to check it, far enough away to give the project time to work.',
        "Fixez une date d'examen, assez éloignée pour laisser au projet le temps de produire ses effets."),
      B('Also write what you will do if the number does not move.',
        "Notez également ce que vous ferez si le chiffre ne bouge pas."),
    ],
    trap: B(
      'Choosing the metric after launch. Something always moved, and you will be tempted to claim that was the goal.',
      "Choisir l'indicateur après le lancement. Un chiffre a toujours bougé, et vous serez tenté d'affirmer que c'était là l'objectif.",
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
        'Chosen afterwards, a metric can only confirm. Chosen beforehand, it is the one thing in the project that can tell you it did not work.',
        "Choisi après coup, un indicateur ne peut que confirmer. Choisi à l'avance, il est le seul élément du projet capable de vous signaler un échec.",
      ),
    },
    badge: B('Names the number first', 'Nomme le chiffre d\'abord'),
  },
  {
    id: 'pr-notes',
    master: 'writing',
    minutes: 6,
    title: B('Release notes people actually read!', "Des notes de version réellement lues"),
    learn: B(
      'You will write what changed for the user, not a technical list of what was shipped.',
      "Vous apprendrez à décrire ce qui change pour l'utilisateur, et non la liste technique de ce qui a été livré.",
    ),
    act: B('Take your change list and ask what each line means for someone using it.',
      "Prenez votre liste de changements et demandez ce que chaque ligne signifie pour un utilisateur."),
    steps: [
      B('Start every line with what the reader can now do.',
        "Commencez chaque ligne par ce que le lecteur peut désormais faire."),
      B('Drop everything a user would not notice.',
        "Retirez tout ce qu'un utilisateur ne remarquerait pas."),
      B('Put the most important change first, on its own, and the rest below it.',
        "Placez le changement le plus important en premier, isolé, et le reste en dessous."),
    ],
    trap: B(
      'Publishing the list of tickets? Every line is true, but none of them speaks to the person reading.',
      "Publier la liste des tickets. Chaque ligne est exacte, mais aucune ne s'adresse à la personne qui lit.",
    ),
    quiz: {
      q: B('How does a good release note line begin?',
        'Comment commence une bonne ligne de note de version ?'),
      options: [
        B('With the component that changed', 'Par le composant modifié'),
        B('With the ticket number', 'Par le numéro de ticket'),
        B('With what the user can now do', "Par ce que l'utilisateur peut désormais faire"),
      ],
      answer: 2,
      why: B(
        'The reader decides in half a second whether this concerns them. Only the new ability answers that question. Everything else makes them want to stop reading.',
        "Le lecteur décide en une demi-seconde si la ligne le concerne. Seule la nouvelle possibilité répond à cette question ; tout le reste l'incite à interrompre sa lecture.",
      ),
    },
    badge: B('Writes for the reader', 'Écrit pour le lecteur'),
  },
  {
    id: 'pr-post',
    master: 'analysis',
    minutes: 7,
    title: B('What went wrong, without hunting a culprit', "Analyser l'échec sans chercher de coupable"),
    learn: B(
      'You will find what, in the way the team works, made the mistake possible.',
      "Vous apprendrez à identifier ce qui, dans l'organisation de l'équipe, a rendu l'erreur possible.",
    ),
    act: B('Write the timeline, then ask what could have prevented the incident.',
      "Rédigez la chronologie, puis demandez ce qui aurait pu empêcher l'incident."),
    steps: [
      B('Write the sequence of events with times, and no names.',
        "Retracez la suite des faits avec les heures, sans aucun nom."),
      B('Ask at which moment the problem could still have been caught.',
        "Demandez à quel moment le problème aurait encore pu être repéré."),
      B('Ask why nobody noticed at that moment. That is what needs to change.',
        "Demandez pourquoi personne ne l'a remarqué à ce moment-là : c'est précisément ce qu'il faut changer."),
    ],
    trap: B(
      'Concluding that someone should have been more careful. That is not a change, it is a wish, and the same incident will happen again.',
      "Conclure qu'il aurait fallu être plus vigilant. Il ne s'agit pas d'un changement mais d'un souhait, et le même incident se reproduira.",
    ),
    quiz: {
      q: B('Which conclusion actually changes something?',
        "Quelle conclusion change réellement quelque chose ?"),
      options: [
        B('Be more careful during deployments', 'Être plus vigilant lors des mises en service'),
        B('Add a second reviewer', 'Ajouter un deuxième relecteur'),
        B('The check ran after, not before', "La vérification passait après, et non avant"),
      ],
      answer: 2,
      why: B(
        'A fact about the order of steps can be fixed tomorrow, and the fix holds even when everyone is tired. Care and an extra reviewer both depend on how people feel that day.',
        "Un fait portant sur l'ordre des étapes se corrige dès le lendemain, et la correction tient même lorsque chacun est fatigué. La vigilance et un relecteur supplémentaire dépendent de l'état des personnes ce jour-là.",
      ),
    },
    badge: B('Looks for causes, not culprits', 'Cherche la cause, pas un coupable'),
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
    title: B('Three minutes of research before your first message', "Trois minutes de recherche avant le premier message"),
    learn: B(
      'You will find the fact about your prospect that makes your first sentence personal.',
      "Vous apprendrez à trouver le fait qui rend personnelle la première phrase adressée à votre prospect.",
    ),
    act: B('Ask the AI what changed recently at this company, and what it implies for them.',
      "Demandez à l'IA ce qui a changé récemment chez ce prospect, et ce que cela implique pour lui."),
    steps: [
      B('Ask for facts with a date attached. A fact without a date is only a guess.',
        "Demandez des faits datés. Un fait sans date n'est qu'une supposition."),
      B('Ask what each fact would mean for someone in that role.',
        "Demandez ce que chaque fait signifierait pour une personne occupant ce poste."),
      B('Check the one you plan to use. Never cite a source you have not opened yourself.',
        "Vérifiez celui que vous comptez utiliser. Ne citez jamais une source que vous n'avez pas ouverte vous-même."),
    ],
    trap: B(
      'Quoting a fact the model invented. It is detailed, it sounds right, and the person on the other side knows within one line that you did not check.',
      "Citer un fait inventé par le modèle. Il est détaillé et paraît juste, mais votre interlocuteur comprend dès la première ligne que vous n'avez pas vérifié.",
    ),
    quiz: {
      q: B('The model gives you a funding round with a date. What now?',
        "Le modèle vous indique une levée de fonds datée. Que faites-vous ?"),
      options: [
        B('Open the source first', "Vous ouvrez d'abord la source"),
        B('Use it, the date proves it', "Vous l'utilisez, la date en atteste"),
        B('Ask the model to confirm', "Vous demandez confirmation au modèle"),
      ],
      answer: 0,
      why: B(
        'Invented facts are often the most precise ones, because precision makes them believable. Asking the model again only produces a second invention, just as confident.',
        "Les faits inventés sont souvent les plus précis, car la précision les rend crédibles. Interroger de nouveau le modèle ne produit qu'une seconde invention, tout aussi assurée.",
      ),
    },
    badge: B('Checks before citing', 'Vérifie avant de citer'),
  },
  {
    id: 'sa-first',
    master: 'writing',
    minutes: 6,
    title: B('A first message in six lines, not one more', 'Un premier message en six lignes, pas une de plus'),
    learn: B(
      'You will ask for one small thing instead of asking for a meeting.',
      "Vous apprendrez à solliciter une petite chose plutôt qu'un rendez-vous.",
    ),
    act: B('Write it, then cut every sentence that talks about you.',
      "Rédigez-le, puis supprimez chaque phrase qui parle de vous."),
    steps: [
      B('Open on them, with the fact you checked. One line.',
        "Commencez par votre interlocuteur, avec le fait vérifié. Une ligne."),
      B('Say what you have seen work for someone like them. Two lines.',
        "Indiquez ce que vous avez vu fonctionner pour quelqu'un dans sa situation. Deux lignes."),
      B('Ask one question they can answer in five words.',
        "Posez une question à laquelle il peut répondre en cinq mots."),
    ],
    trap: B(
      'Asking for thirty minutes in the first message? It is the biggest thing you could ask for, and you ask before you have earned any trust.',
      "Demander trente minutes dès le premier message. C'est la demande la plus lourde possible, formulée avant d'avoir gagné la moindre confiance.",
    ),
    quiz: {
      q: B('What should the first message ask for?',
        "Que doit solliciter le premier message ?"),
      options: [
        B('Thirty minutes next week', 'Trente minutes la semaine prochaine'),
        B('An answer of five words', 'Une réponse de cinq mots'),
        B('A look at your website', "Un coup d'oeil à votre site"),
      ],
      answer: 1,
      why: B(
        'A five-word answer costs nothing and starts a conversation. A meeting costs a slot in the calendar, and nobody gives that to a stranger.',
        "Une réponse de cinq mots ne coûte rien et ouvre une conversation. Un rendez-vous coûte un créneau dans l'agenda, et personne ne l'accorde à un inconnu.",
      ),
    },
    badge: B('Asks something small', 'Demande une petite chose'),
  },
  {
    id: 'sa-follow',
    master: 'writing',
    minutes: 6,
    title: B('Follow-ups that bring something new', "Des relances qui apportent du nouveau"),
    learn: B(
      'You will give them a reason to reply that is not your own need.',
      "Vous apprendrez à donner à votre interlocuteur une raison de répondre qui ne soit pas votre propre besoin.",
    ),
    act: B('Write three follow-ups, each carrying one thing they did not have.',
      "Rédigez trois relances, apportant chacune un élément qu'il ne possédait pas."),
    steps: [
      B('Forbid the AI any sentence that refers to your previous message.',
        "Interdisez à l'IA toute phrase qui fait référence à votre message précédent."),
      B('Each follow-up brings a fact, a customer example, or the answer to an objection.',
        "Chaque relance apporte un fait, un exemple client, ou la réponse à une objection."),
      B('The last follow-up says clearly that you are closing the file, with no reproach.',
        "La dernière relance annonce clairement que vous clôturez le dossier, sans reproche."),
    ],
    trap: B(
      'Sending "did you see my message"? You ask them for effort, and you show you have nothing new to say.',
      "Envoyer « avez-vous vu mon message ». Vous exigez un effort de votre interlocuteur, et montrez que vous n'avez rien de nouveau à dire.",
    ),
    quiz: {
      q: B('Why say clearly in the last message that you are closing the file?',
        "Pourquoi annoncer clairement la clôture du dossier dans la dernière relance ?"),
      options: [
        B('It is more polite', 'C\'est plus poli'),
        B('It saves you time on dead files', "Cela vous fait gagner du temps sur les dossiers morts"),
        B('It often gets the reply', "Cela suscite souvent la réponse"),
      ],
      answer: 2,
      why: B(
        'Announcing that the file is closing finally creates a deadline. People who could not decide suddenly have a reason to reply, yes or no.',
        "Annoncer la clôture du dossier crée enfin une échéance. Ceux qui ne parvenaient pas à décider ont soudain une raison de répondre, par oui ou par non.",
      ),
    },
    badge: B('Closes the file cleanly', "Clôt le dossier proprement"),
  },
]

const SA_MEET: Level[] = [
  {
    id: 'sa-prep',
    master: 'planning',
    minutes: 6,
    title: B('Five questions that get your client talking', "Cinq questions qui font parler votre client"),
    learn: B(
      'You will spend the meeting listening to your client instead of presenting your offer.',
      "Vous apprendrez à consacrer le rendez-vous à écouter votre client plutôt qu'à présenter votre offre.",
    ),
    act: B('Write five questions whose answers you could not guess in advance.',
      "Rédigez cinq questions dont vous ne pouvez pas deviner les réponses à l'avance."),
    steps: [
      B('Drop every question you could answer yourself from their website.',
        "Retirez toute question à laquelle leur site répond déjà."),
      B('Ask about the last time it happened, not about the general case.',
        "Interrogez sur la dernière occurrence du problème, et non sur le cas général."),
      B('Prepare one question for what happens if they do nothing.',
        "Préparez une question sur ce qui se passe s'ils ne font rien."),
    ],
    trap: B(
      'Preparing a demo instead of questions? It answers what nobody asked, and it takes the time you needed to understand what they want.',
      "Préparer une démonstration plutôt que des questions. Elle répond à ce que personne n'a demandé, et consomme le temps qui devait servir à comprendre leur besoin.",
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
        "Une question sur un événement passé précis suscite un récit détaillé, et ce sont les détails qui permettent d'agir. Les questions générales obtiennent la réponse que tout le monde donne.",
      ),
    },
    badge: B('Prepares questions', 'Prépare des questions'),
  },
  {
    id: 'sa-notes',
    master: 'extraction',
    minutes: 6,
    title: B('Your write-up, done the same day', "Un compte rendu bouclé le jour même"),
    learn: B(
      'You will leave a record that someone else could act on.',
      "Vous apprendrez à laisser une trace sur la base de laquelle une autre personne pourrait agir.",
    ),
    act: B('Dictate your raw notes and ask for the facts, the next step, and what is still uncertain.',
      "Dictez vos notes brutes et demandez les faits, la prochaine étape, et ce qui reste incertain."),
    steps: [
      B('Send your notes as they are, with the hesitations in them.',
        "Transmettez vos notes telles quelles, hésitations comprises."),
      B('Ask for three sections: what was said, what was agreed, what is unclear.',
        "Demandez trois parties : ce qui a été dit, ce qui a été convenu, ce qui reste flou."),
      B('Read the unclear part first. That is what deserves a follow-up email to the client.',
        "Lisez d'abord la partie floue : c'est elle qui justifie un courriel de suivi au client."),
    ],
    trap: B(
      'Writing only what was agreed. Without the doubts, the deal looks done, and they come back later as a nasty surprise.',
      "Ne consigner que ce qui a été convenu. Sans les doutes, l'affaire semble conclue, et ceux-ci ressurgissent plus tard sous forme de mauvaise surprise.",
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
        'What was agreed will be repeated at the next meeting anyway. What is unclear, if nobody deals with it, will end up settling itself, against you.',
        "Ce qui a été convenu sera de toute façon rappelé au prochain rendez-vous. Ce qui reste flou, si personne ne s'en charge, finira par se régler de lui-même, et à votre détriment.",
      ),
    },
    badge: B('Records what is unclear', 'Note ce qui reste flou'),
  },
  {
    id: 'sa-object',
    master: 'support',
    minutes: 7,
    title: B('Decode the objection before you answer', "Décodez l'objection avant d'y répondre"),
    learn: B(
      'Before answering an objection, you will look for what it really hides.',
      "Vous apprendrez à rechercher ce que cache réellement une objection avant d'y répondre.",
    ),
    act: B('Write the objection as they said it, and ask what it could stand for.',
      "Notez l'objection telle qu'elle a été formulée, et demandez ce qu'elle peut signifier."),
    steps: [
      B('Write their exact words. If you rephrase, you already change the meaning.',
        "Notez leurs mots exacts. Reformuler, c'est déjà en modifier le sens."),
      B('Ask for three things it could really mean, and how to tell them apart.',
        "Demandez trois significations possibles, et la manière de les distinguer."),
      B('Ask the question that tells them apart, before answering anything.',
        "Posez la question qui permet de les distinguer, avant de répondre quoi que ce soit."),
    ],
    trap: B(
      'Answering "it is too expensive" with a discount? Sometimes it is really the price. Often, they cannot yet justify the purchase to someone else.',
      "Répondre à « c'est trop cher » par une remise. Parfois, le prix est réellement en cause ; souvent, le client ne sait pas encore justifier l'achat auprès d'un tiers.",
    ),
    quiz: {
      q: B('"It is too expensive." What do you do first?',
        "« C'est trop cher. » Que faites-vous d'abord ?"),
      options: [
        B('Offer a discount', 'Proposer une remise'),
        B('Justify the price against the value', "Justifier le prix au regard de la valeur"),
        B('Find out what it stands for', "Chercher ce que cela signifie réellement"),
      ],
      answer: 2,
      why: B(
        'A discount answers only one of the three possible meanings, and damages the other two. It shows your price was arbitrary, which makes the purchase harder to defend internally.',
        "Une remise ne répond qu'à l'une des trois significations possibles, et nuit aux deux autres. Elle montre que votre prix était arbitraire, ce qui rend l'achat plus difficile à défendre en interne.",
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
    title: B('The proposal that fits on one page!', "Une proposition qui tient en une page"),
    learn: B(
      'You will write a proposal that stays clear even when it is forwarded to someone else.',
      "Vous apprendrez à rédiger une proposition qui reste claire même lorsqu'elle est transférée à un tiers.",
    ),
    act: B('Write it for the person who was not in the meeting.',
      "Rédigez-la pour la personne qui n'assistait pas au rendez-vous."),
    steps: [
      B('Open on their problem, in their words, with their number in it.',
        "Commencez par leur problème, avec leurs mots et leur chiffre."),
      B('One paragraph on what you will do, one on what it costs.',
        "Un paragraphe sur ce que vous ferez, un autre sur ce que cela coûte."),
      B('End with the first step and its date, not with a sign-off.',
        "Terminez par la première étape et sa date, et non par une formule de politesse."),
    ],
    trap: B(
      'Sending twelve pages to look serious? The decision-maker reads only the first paragraph. If their problem is not there, they think you did not understand.',
      "Envoyer douze pages pour paraître sérieux. Le décideur ne lit que le premier paragraphe ; s'il n'y voit pas son problème, il conclut que vous ne l'avez pas compris.",
    ),
    quiz: {
      q: B('Who is the proposal written for?',
        "Pour qui la proposition est-elle rédigée ?"),
      options: [
        B('The one who was not there', "La personne qui n'était pas là"),
        B('The person you met', "La personne que vous avez rencontrée"),
        B('Their procurement team, who will read it', 'Leur service achats, qui la lira'),
      ],
      answer: 0,
      why: B(
        'The person you met already agrees, and they will have to defend this without you. The document is their argument, not yours.',
        "La personne rencontrée est déjà convaincue, et elle devra défendre votre proposition en votre absence. Le document constitue son argumentaire, et non le vôtre.",
      ),
    },
    badge: B('Writes to be forwarded', 'Écrit pour être transféré'),
  },
  {
    id: 'sa-price',
    master: 'support',
    minutes: 6,
    title: B('Say your price without flinching', "Annoncez votre prix avec assurance"),
    learn: B(
      'You will give the number early and let it be discussed.',
      "Vous apprendrez à donner le chiffre tôt et à le laisser être discuté.",
    ),
    act: B('Say the price in the first half of the conversation, then stop talking.',
      "Annoncez le prix dans la première moitié de l'entretien, puis gardez le silence."),
    steps: [
      B('Say the number and the unit (per month, per user), then stop.',
        "Énoncez le chiffre et l'unité (par mois, par utilisateur), puis cessez de parler."),
      B('Let the pause last. The client should be the next one to speak.',
        "Laissez la pause se prolonger : c'est au client de reprendre la parole."),
      B('If they object, go back to what it replaces, not to the number.',
        "En cas d'objection, revenez à ce que l'offre remplace, et non au chiffre."),
    ],
    trap: B(
      'Justifying the price right away. It shows you expect an objection, so the client raises it, and you end up defending yourself.',
      "Justifier le prix dans la foulée. Cela montre que vous attendez une objection ; le client la formule alors, et vous vous retrouvez à vous défendre.",
    ),
    quiz: {
      q: B('You said the number. What comes next?',
        "Vous avez annoncé le chiffre. Que vient-il ensuite ?"),
      options: [
        B('The reason it is worth it', "La raison pour laquelle il se justifie"),
        B('Silence', 'Le silence'),
        B('A cheaper option', 'Une option moins chère'),
      ],
      answer: 1,
      why: B(
        'Anything you say after the price sounds like an apology. Their first reaction is the information you came for. If you talk over it, you lose it.',
        "Tout ce que vous dites après le prix sonne comme une excuse. La première réaction du client est précisément l'information que vous êtes venu chercher : en parlant par-dessus, vous la perdez.",
      ),
    },
    badge: B('Says the number', 'Dit le chiffre'),
  },
  {
    id: 'sa-after',
    master: 'planning',
    minutes: 6,
    title: B('After the signature, the real work starts', 'Après la signature, le vrai travail commence'),
    learn: B(
      'You will help the client get started, instead of just handing over the account.',
      "Vous apprendrez à accompagner le démarrage du client, au lieu de simplement transmettre son dossier.",
    ),
    act: B('Write the first thirty days as three dates with a name on each.',
      "Structurez les trente premiers jours en trois dates, avec un nom pour chacune."),
    steps: [
      B('Name what they must have done by day seven. One thing.',
        "Nommez ce qu'ils doivent avoir accompli au septième jour. Une seule chose."),
      B('Name who does it on their side, by name, not by team.',
        "Nommez qui s'en charge chez eux, par son nom, et non par son service."),
      B('Book the day-thirty check-in now, while the client is still motivated.',
        "Planifiez dès maintenant le point du trentième jour, tant que le client est motivé."),
    ],
    trap: B(
      'Treating the sale as finished at signature? The renewal is decided in the first month, by whether anything really changed for the client.',
      "Considérer la vente comme achevée à la signature. Le renouvellement se décide pendant le premier mois, selon que quelque chose a réellement changé pour le client.",
    ),
    quiz: {
      q: B('When is the renewal mostly decided?',
        "Quand le renouvellement se décide-t-il principalement ?"),
      options: [
        B('At the renewal conversation', 'Lors de l\'échange de renouvellement'),
        B('In the first month', 'Le premier mois'),
        B('During the negotiation', 'Pendant la négociation'),
      ],
      answer: 1,
      why: B(
        'By the renewal conversation the answer already exists, and you are only being told it. The month after signature is the last time you can still change it.',
        "Lors de l'échange de renouvellement, la réponse existe déjà : on ne fait que vous l'annoncer. Le mois qui suit la signature est le dernier moment où vous pouvez encore l'infléchir.",
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
    title: B('Finally empty your inbox!', "Videz enfin votre boîte de réception"),
    learn: B(
      'Inbox overflowing? You will sort by what each message asks of you, not by who sent it.',
      "Votre boîte déborde ? Vous apprendrez à trier selon ce que chaque message vous demande, et non selon son expéditeur.",
    ),
    act: B('Paste thirty subject lines and ask what each one actually requires.',
      "Collez trente objets de messages et demandez ce que chacun exige réellement."),
    steps: [
      B('Set up four piles: answer, do, wait for someone, or nothing to do.',
        "Prévoyez quatre catégories : répondre, agir, attendre quelqu'un, ou rien à faire."),
      B('Ask the AI to put each message in a pile, with the action to take in four words.',
        "Demandez à l'IA de classer chaque message dans une catégorie, avec l'action à mener en quatre mots."),
      B('Start with the "nothing to do" pile: delete or archive it.',
        "Commencez par la catégorie « rien à faire » : supprimez-la ou archivez-la."),
    ],
    trap: B(
      'Sorting by sender. Importance comes from the request, not the person. And sorting by name always keeps the same people at the top.',
      "Trier par expéditeur. L'importance tient à la demande, non à la personne ; de plus, un tri par nom maintient toujours les mêmes personnes en tête de liste.",
    ),
    quiz: {
      q: B('Which pile do you clear first?',
        "Quelle catégorie traitez-vous en premier ?"),
      options: [
        B('The ones needing nothing', 'Ceux qui ne demandent rien'),
        B('The ones needing an answer', 'Ceux qui demandent une réponse'),
        B('The ones from your manager', "Ceux de votre responsable"),
      ],
      answer: 0,
      why: B(
        'Clearing what needs nothing takes seconds and removes most of the volume. What remains is a list you can face calmly, and that is the whole point.',
        "Écarter ce qui ne demande rien prend quelques secondes et retire l'essentiel du volume. Il reste une liste que vous pouvez aborder sereinement, ce qui est précisément l'objectif.",
      ),
    },
    badge: B('Sorts by request', 'Trie par demande'),
  },
  {
    id: 'as-agenda',
    master: 'planning',
    minutes: 6,
    title: B('An agenda that forces decisions', "Un ordre du jour qui conduit à décider"),
    learn: B(
      'You will write an agenda where each line is a decision to make.',
      "Vous apprendrez à rédiger un ordre du jour dont chaque ligne est une décision à prendre.",
    ),
    act: B('Turn the list of topics into a list of questions to be settled.',
      "Transformez la liste des sujets en une liste de questions à trancher."),
    steps: [
      B('Each line is a question, with the name of who decides and the time planned in minutes.',
        "Chaque ligne est une question, avec le nom de la personne qui décide et la durée prévue en minutes."),
      B('Anything that needs no decision can be sent in writing, without a meeting.',
        "Tout ce qui n'appelle pas de décision peut être transmis par écrit, sans réunion."),
      B('Send it the day before. An agenda discovered in the meeting is useless.',
        "Envoyez-le la veille. Un ordre du jour découvert en séance ne sert à rien."),
    ],
    trap: B(
      'Listing topics? A topic has no end, so the meeting ends when the hour does, and the last topic is never reached.',
      "Lister des sujets. Un sujet n'a pas de fin : la réunion s'arrête donc lorsque l'heure est écoulée, et le dernier sujet n'est jamais abordé.",
    ),
    quiz: {
      q: B('What belongs on an agenda line?',
        "Que place-t-on sur une ligne d'ordre du jour ?"),
      options: [
        B('A topic and who presents it', 'Un sujet et qui le présente'),
        B('A document to read', 'Un document à lire'),
        B('A question and who decides', 'Une question et qui tranche'),
      ],
      answer: 2,
      why: B(
        'A question has an end: it is settled or it is not. A topic can take up any amount of time, and it always eats the time the next line needed.',
        "Une question a une fin : elle est tranchée ou ne l'est pas. Un sujet peut occuper un temps illimité, et il empiète toujours sur le temps dont la ligne suivante avait besoin.",
      ),
    },
    badge: B('Turns topics into decisions', 'Transforme les sujets en décisions'),
  },
  {
    id: 'as-minutes',
    master: 'extraction',
    minutes: 6,
    title: B('Leave the meeting with the record ready', "Quittez la réunion avec le compte rendu prêt"),
    learn: B(
      'You will leave the room with the record already written.',
      "Vous apprendrez à quitter la salle avec un compte rendu déjà rédigé.",
    ),
    act: B('Note only decisions and owners during the meeting, then expand after.',
      "Pendant la réunion, notez seulement les décisions et les responsables, puis développez ensuite."),
    steps: [
      B('During the meeting, write only the decisions and who owns each one. Nothing else.',
        "Pendant la réunion, notez uniquement les décisions et la personne qui s'en charge. Rien d'autre."),
      B('Read the decisions out loud before the end. That is the moment to correct them.',
        "Relisez les décisions à voix haute avant la fin : c'est le moment de les corriger."),
      B('Expand afterwards from your notes, never from memory.',
        "Développez ensuite à partir de vos notes, jamais de mémoire."),
    ],
    trap: B(
      'Writing everything that is said. You stop listening, and the four real decisions get lost in an hour of talk.',
      "Noter tout ce qui se dit. Vous cessez d'écouter, et les quatre véritables décisions se perdent dans une heure de discussion.",
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
        'Everyone is in the room and still remembers. A correction takes ten seconds there. By email it takes a long thread, and at the next meeting it can cost the decision.',
        "Tout le monde est présent et s'en souvient encore : une correction prend dix secondes sur place. Par courriel, elle exige un long échange, et à la réunion suivante elle peut coûter la décision.",
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
    title: B('Pull the facts out of a pile of documents', "Extrayez les faits d'une pile de documents"),
    learn: B(
      'You will pull the same information out of documents that look nothing alike.',
      "Vous apprendrez à extraire les mêmes informations de documents très différents les uns des autres.",
    ),
    act: B('List the fields to extract first, then apply them to ten documents.',
      "Listez d'abord les champs à extraire, puis appliquez-les à dix documents."),
    steps: [
      B('Write the field list with what to do when a field is absent.',
        "Rédigez la liste des champs, en précisant la conduite à tenir lorsqu'un champ manque."),
      B('Demand the word "absent" rather than a plausible guess.',
        "Exigez le mot « absent » plutôt qu'une supposition vraisemblable."),
      B('Check three documents by hand before trusting the other two hundred.',
        "Vérifiez trois documents à la main avant de vous fier aux deux cents autres."),
    ],
    trap: B(
      'Letting the AI fill in a missing field. A plausible date in an empty field is worse than an empty field, because nobody will ever question it.',
      "Laisser l'IA compléter un champ manquant. Une date vraisemblable dans un champ vide est pire qu'un champ vide, car personne ne la remettra en question.",
    ),
    quiz: {
      q: B('A field is missing from the document. What should the AI return?',
        "Un champ manque dans le document. Que doit renvoyer l'IA ?"),
      options: [
        B('The most likely value', 'La valeur la plus probable'),
        B('The value from the previous document', 'La valeur du document précédent'),
        B('The word absent', 'Le mot absent'),
      ],
      answer: 2,
      why: B(
        'A written absence can be seen, counted and fixed. A guess enters your table looking exactly like the two hundred values that were really read.',
        "Une absence écrite se voit, se compte et se corrige. Une supposition entre dans votre tableau et ressemble exactement aux deux cents valeurs réellement lues.",
      ),
    },
    badge: B('Demands "absent" when missing', "Exige « absent » en cas de manque"),
  },
  {
    id: 'as-table',
    master: 'analysis',
    minutes: 6,
    title: B('From mess to clean table', 'Du désordre au tableau propre'),
    learn: B(
      'You will turn free text into columns that can be counted.',
      "Vous apprendrez à transformer du texte libre en colonnes dénombrables.",
    ),
    act: B('Define the columns and the allowed values, then convert twenty rows.',
      "Définissez les colonnes et les valeurs autorisées, puis convertissez vingt lignes."),
    steps: [
      B('List the allowed values for each column. Closed lists, not free text.',
        "Listez les valeurs autorisées pour chaque colonne : des listes fermées, et non du texte libre."),
      B('Add one value called other, and read what falls into it.',
        "Ajoutez une valeur « autre », et examinez ce qui s'y retrouve."),
      B('If many rows land in "other", your list is incomplete. Fix the list, not the rows.',
        "Si de nombreuses lignes tombent dans « autre », votre liste est incomplète. Corrigez la liste, et non les lignes."),
    ],
    trap: B(
      'Letting each row invent its own label. You end up with forty spellings of three things and a table that cannot be counted.',
      "Laisser chaque ligne inventer son étiquette. Vous obtenez quarante graphies pour trois réalités, et un tableau impossible à dénombrer.",
    ),
    quiz: {
      q: B('A quarter of the rows land in "other". What does it mean?',
        "Un quart des lignes tombent dans « autre ». Qu'est-ce que cela signifie ?"),
      options: [
        B('Your list of values is wrong', "Votre liste de valeurs est erronée"),
        B('The data is messy', 'Les données sont sales'),
        B('The model did not understand the task', "Le modèle n'a pas compris la tâche"),
      ],
      answer: 0,
      why: B(
        'A large "other" is the most honest signal you get. It shows a real category exists that you did not name. Renaming rows one by one hides the problem instead of fixing it.',
        "Une catégorie « autre » volumineuse est le signal le plus fiable dont vous disposiez : elle révèle une catégorie réelle que vous n'avez pas nommée. Renommer les lignes une à une masque le problème au lieu de le résoudre.",
      ),
    },
    badge: B('Uses closed lists', 'Utilise des listes fermées'),
  },
  {
    id: 'as-template',
    master: 'writing',
    minutes: 6,
    title: B('Stop retyping the same document', "Cessez de ressaisir le même document"),
    learn: B(
      'Retyping that document twice a week? You will build a template that holds what never changes.',
      "Vous ressaisissez ce document deux fois par semaine ? Vous apprendrez à bâtir un modèle qui contient ce qui ne change jamais.",
    ),
    act: B('Take three past versions and ask what is identical in all of them.',
      "Prenez trois versions antérieures et demandez ce qui est identique dans les trois."),
    steps: [
      B('The identical parts become the template. You no longer have to retype them.',
        "Les parties identiques constituent le modèle : vous n'avez plus à les ressaisir."),
      B('The parts that change become named blanks, each with an example.',
        "Les parties variables deviennent des blancs nommés, chacun accompagné d'un exemple."),
      B('Always keep one finished example next to the template.',
        "Conservez toujours un exemple complet à côté du modèle."),
    ],
    trap: B(
      'Making a template with empty blanks and no example. Everyone fills them differently, and the document stops being comparable from week to week.',
      "Créer un modèle aux blancs vides, sans exemple. Chacun les remplit différemment, et le document cesse d'être comparable d'une semaine à l'autre.",
    ),
    quiz: {
      q: B('What goes next to a template?',
        "Que place-t-on à côté d'un modèle ?"),
      options: [
        B('One finished example', 'Un exemple rempli'),
        B('Instructions for filling it', 'Une notice pour le remplir'),
        B('The previous version', 'La version précédente'),
      ],
      answer: 0,
      why: B(
        'People copy what they can see far more reliably than they follow what they have to read. One good example answers a dozen questions that instructions leave open.',
        "On reproduit ce que l'on voit bien plus fidèlement qu'on ne suit ce que l'on doit lire. Un bon exemple répond à une dizaine de questions qu'une notice laisse ouvertes.",
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
    title: B('Six calendars, one slot', 'Six agendas, un seul créneau'),
    learn: B(
      'You will propose slots instead of asking everyone when they are free.',
      "Vous apprendrez à proposer des créneaux plutôt qu'à demander à chacun ses disponibilités.",
    ),
    act: B('Give the constraints and ask for three slots, ranked, with what each costs.',
      "Indiquez les contraintes et demandez trois créneaux classés, avec ce que chacun coûte."),
    steps: [
      B('State who must be there and who can miss it. That is the real constraint.',
        "Précisez qui doit être présent et qui peut s'absenter : c'est la véritable contrainte."),
      B('Ask for three slots, ranked, each with the people it inconveniences.',
        "Demandez trois créneaux classés, avec pour chacun les personnes qu'il gêne."),
      B('Send the top one as a decision, with the second as the fallback.',
        "Envoyez le premier sous forme de décision, avec le deuxième comme solution de repli."),
    ],
    trap: B(
      'Asking six people for their availability? You get six lists that do not match, and a second round of emails to sort it out.',
      "Demander leurs disponibilités à six personnes. Vous obtenez six listes qui ne concordent pas, et un second échange de courriels pour trancher.",
    ),
    quiz: {
      q: B('How do you propose a meeting to six people?',
        "Comment proposez-vous une réunion à six personnes ?"),
      options: [
        B('Propose one slot and a fallback', 'Proposer un créneau et un repli'),
        B('Ask each of them for their availability', 'Demander à chacun ses disponibilités'),
        B('Send a poll with ten slots', 'Envoyer un sondage à dix créneaux'),
      ],
      answer: 0,
      why: B(
        'Every open question multiplies the replies you then have to match up. A decision with one fallback brings at most one objection, and usually none.',
        "Chaque question ouverte multiplie les réponses qu'il vous faudra ensuite concilier. Une décision assortie d'une solution de repli suscite au plus une objection, et souvent aucune.",
      ),
    },
    badge: B('Proposes, not polls', 'Propose au lieu de sonder'),
  },
  {
    id: 'as-voice',
    master: 'writing',
    minutes: 6,
    title: B('Write as someone else, without it showing', "Écrivez au nom d'un autre, sans que cela se voie"),
    learn: B(
      'You will write like the person you work for, without guessing at their style.',
      "Vous apprendrez à écrire comme la personne pour qui vous travaillez, sans deviner son style.",
    ),
    act: B('Gather five messages they wrote and draw the rules of their style from them before writing.',
      "Réunissez cinq messages qu'elle a rédigés et dégagez-en les règles de son style avant d'écrire."),
    steps: [
      B('Use messages they wrote themselves, not ones written for them.',
        "Utilisez des messages qu'elle a rédigés elle-même, et non des messages écrits pour elle."),
      B('Note how they open, how they close, and how long their messages are.',
        "Notez comment elle ouvre ses messages, comment elle les conclut, et leur longueur."),
      B('Show them the rules, not the drafts. Rules only need correcting once.',
        "Soumettez-lui les règles, et non les brouillons : les règles ne se corrigent qu'une fois."),
    ],
    trap: B(
      'Writing better than they do. The improvement is exactly what gives you away: people who know them notice by the second line.',
      "Écrire mieux qu'elle. C'est précisément l'amélioration qui vous trahit : ceux qui la connaissent le remarquent dès la deuxième ligne.",
    ),
    quiz: {
      q: B('What do you show them for approval?',
        "Que lui soumettez-vous pour validation ?"),
      options: [
        B('The rules of their voice', 'Les règles de son style'),
        B('Each draft, before sending', 'Chaque brouillon, avant envoi'),
        B('A sample of ten messages', 'Un échantillon de dix messages'),
      ],
      answer: 0,
      why: B(
        'Approving drafts one by one never ends and teaches you nothing. Approving the rules is done once, and every message afterwards is already right.',
        "Valider les brouillons un par un n'a pas de fin et ne vous apprend rien. Valider les règles se fait une fois, et tous les messages suivants sont d'emblée justes.",
      ),
    },
    badge: B('Writes faithfully for someone else', "Écrit fidèlement à la place d'un autre"),
  },
  {
    id: 'as-never',
    master: 'watch',
    minutes: 6,
    title: B('What you never hand to a machine', "Ce que vous ne confiez jamais à une machine"),
    learn: B(
      'You will decide in advance what you never give to an AI, before you are short on time.',
      "Vous apprendrez à décider à l'avance ce que vous ne confiez jamais à une IA, avant d'être pressé par le temps.",
    ),
    act: B('List the document types you handle and mark those that must never go into an AI tool.',
      "Listez les types de documents que vous manipulez et signalez ceux qui ne doivent jamais entrer dans un outil d'IA."),
    steps: [
      B('Mark anything with someone else\'s personal details in it.',
        "Signalez tout document contenant les données personnelles d'autrui."),
      B('Mark anything you would not want read by a third party.',
        "Signalez tout ce que vous ne voudriez pas voir lu par un tiers."),
      B('For the rest, write down which tool you are allowed to use, and stick to it.',
        "Pour le reste, notez l'outil que vous êtes autorisé à utiliser, et tenez-vous-en à lui."),
    ],
    trap: B(
      'Deciding case by case in the moment. It is on a rushed afternoon that you cross the line, and after that you never go back.',
      "Décider au cas par cas, sur le moment. C'est lors d'un après-midi chargé que l'on franchit la limite, et l'on ne revient ensuite jamais en arrière.",
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
        'In the moment, there is always a good reason to make an exception. Only a line written in advance holds on the day you are swamped.',
        "Sur le moment, il existe toujours une bonne raison de faire une exception. Seule une limite écrite à l'avance tient le jour où vous êtes débordé.",
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
    title: B('The real problem', 'Le vrai problème'),
    blurb: B('State the real problem, group incoming feedback, say no with a condition.',
      "Énoncez le vrai problème, regroupez les retours, refusez en posant une condition."),
  },
  {
    id: 'pr-spec', track: 'trade', glyph: 'grid', tint: '#1fa563', at: [3, 16], levels: PR_SPEC,
    title: B('Specs that hold up', 'Des spécifications solides'),
    blurb: B('Describe behaviour, decide the edge cases, draft a screen to get reactions.',
      "Décrivez des comportements, tranchez les cas limites, ébauchez un écran pour susciter des réactions."),
  },
  {
    id: 'pr-ship', track: 'trade', glyph: 'delta', tint: '#1fa563', at: [5, 16], levels: PR_SHIP,
    title: B('Ship, and learn!', "Livrer, puis apprendre"),
    blurb: B('Define success first, write for the reader, look for the cause rather than a culprit.',
      "Définissez d'abord la réussite, écrivez pour le lecteur, cherchez la cause plutôt qu'un coupable."),
  },
  {
    id: 'sa-prospect', track: 'trade', glyph: 'target', tint: '#f59e0b', at: [1, 18], levels: SA_PROSPECT,
    title: B('Prospect without making things up', "Prospecter sans rien inventer"),
    blurb: B('Check before citing, ask for something small, close the file cleanly.',
      "Vérifiez avant de citer, demandez peu, clôturez le dossier proprement."),
  },
  {
    id: 'sa-meeting', track: 'trade', glyph: 'ring', tint: '#f59e0b', at: [3, 18], levels: SA_MEET,
    title: B('The meeting where you listen', "L'entretien où vous écoutez"),
    blurb: B('Prepare your questions, note what is still unclear, understand the objection before answering.',
      "Préparez vos questions, notez ce qui reste flou, comprenez l'objection avant d'y répondre."),
  },
  {
    id: 'sa-close', track: 'trade', glyph: 'diamond', tint: '#f59e0b', at: [5, 18], levels: SA_CLOSE,
    title: B('Close, then get the client started', "Conclure, puis lancer le client"),
    blurb: B('Write to be forwarded, say your price, help the client get started.',
      "Écrivez pour être transféré, annoncez votre prix, accompagnez le démarrage du client."),
  },
  {
    id: 'as-flow', track: 'trade', glyph: 'rows', tint: '#08c2ac', at: [1, 20], levels: AS_FLOW,
    title: B('Master your messages and meetings', "Maîtriser messages et réunions"),
    blurb: B('Sort messages by request, write agendas that force decisions, confirm in the meeting.',
      "Triez les messages par demande, rédigez des ordres du jour qui font décider, confirmez en réunion."),
  },
  {
    id: 'as-docs', track: 'trade', glyph: 'layers', tint: '#08c2ac', at: [3, 20], levels: AS_DOCS,
    title: B('Documents under control', "Vos documents sous contrôle"),
    blurb: B('Demand "absent" when a field is missing, use closed lists, keep an example.',
      "Exigez « absent » lorsqu'un champ manque, utilisez des listes fermées, conservez un exemple."),
  },
  {
    id: 'as-time', track: 'trade', glyph: 'hex', tint: '#08c2ac', at: [5, 20], levels: AS_TIME,
    title: B('Protect other people\'s time', "Protéger le temps des autres"),
    blurb: B('Propose instead of polling, write for someone else, draw the line early.',
      "Proposez plutôt que sonder, écrivez au nom d'un autre, tracez la limite tôt."),
  },
]

export const TRADES_2: Trade[] = [
  {
    id: 'product',
    label: B('Product manager', 'Chef de produit'),
    who: B('You decide what gets built, and you answer for what does not.',
      "Vous décidez de ce qui se construit, et vous répondez de ce qui ne se construit pas."),
    glyph: 'grid', tint: '#1fa563',
    cities: ['pr-problem', 'pr-spec', 'pr-ship'],
  },
  {
    id: 'sales',
    label: B('Sales', 'Commercial'),
    who: B('You are judged on what gets signed, and on what happens after.',
      "Vous êtes évalué sur ce qui est signé, et sur ce qui suit."),
    glyph: 'diamond', tint: '#f59e0b',
    cities: ['sa-prospect', 'sa-meeting', 'sa-close'],
  },
  {
    id: 'assistant',
    label: B('Executive assistant', 'Assistant de direction'),
    who: B('You manage the messages, the documents, and other people\'s time.',
      "Vous gérez les messages, les documents, et le temps des autres."),
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

// LES NOUVEAUX MÉTIERS · un fichier chacun, voir data/metiers.
export const TRADES: Trade[] = [...TRADES_1, ...TRADES_2, ...NEW_TRADE_PACKS.map((p) => p.trade)]

export const TRADE_MODULES: Module[] = [...TRADE_MODULES_1, ...TRADE_MODULES_2, ...NEW_TRADE_PACKS.flatMap((p) => p.modules)]

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
