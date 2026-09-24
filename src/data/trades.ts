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
    title: B('Stop writing for everyone', "Arrête d'écrire pour tout le monde"),
    learn: B(
      'Does your message speak to everyone? You will learn to write for one segment: one specific group of customers.',
      "Ton message s'adresse à tout le monde ? Tu vas apprendre à écrire pour un seul segment : un groupe de clients précis.",
    ),
    act: B('Describe one typical buyer in six lines, then ask the AI for a message written just for them.',
      "Décris un acheteur type en six lignes, puis demande à l'IA un message écrit pour lui seul."),
    steps: [
      B('Give their job, the moment they need you, and what they were doing before they looked for you.',
        "Précise son poste, le moment où il a besoin de toi, et ce qu'il faisait avant de te chercher."),
      B('Add the words this buyer actually uses, not the vocabulary of your product.',
        "Ajoute les mots que cet acheteur emploie lui-même, pas le vocabulaire de ton produit."),
      B('Ask for the message. Then ask what would stop working if you sent it to a different group.',
        "Demande le message. Puis demande ce qui ne marcherait plus si tu l'envoyais à un autre groupe."),
    ],
    trap: B(
      'Describing your buyer by age and hobbies? That says nothing about why they would buy. What counts is their moment and what they already tried.',
      "Tu décris ton client par son âge et ses loisirs ? Ça ne dit pas pourquoi il achèterait. Ce qui compte, c'est son moment et ce qu'il a déjà essayé.",
    ),
    quiz: {
      q: B('Which detail is truly useful to describe a segment?',
        'Quel détail est vraiment utile pour décrire un segment ?'),
      options: [
        B('Their age bracket and their city', "Leur tranche d'âge et leur ville"),
        B('The size of their company', 'La taille de leur entreprise'),
        B('What they tried before you', "Ce qu'ils ont essayé avant toi"),
      ],
      answer: 2,
      why: B(
        'What someone already tried shows you what disappointed them. That is exactly what your message must answer. Age or company size put people in boxes without explaining why they buy.',
        "Ce qu'un client a déjà essayé te montre ce qui l'a déçu. C'est exactement à ça que ton message doit répondre. L'âge ou la taille de l'entreprise rangent les gens dans des cases, sans expliquer leur achat.",
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
      "Tu vas tester des messages qui diffèrent sur le fond, pas seulement sur les mots.",
    ),
    act: B('Ask for three messages that each give a different reason to buy.',
      "Demande trois messages qui donnent chacun une raison d'acheter différente."),
    steps: [
      B('Pick the three angles yourself: the problem solved, the gain, the risk avoided.',
        "Choisis toi-même les trois angles : le problème qu'on règle, le gain obtenu, le risque évité."),
      B('Ask for one message per angle, same length and same offer, so only the angle changes.',
        "Demande un message par angle, avec la même longueur et la même offre, pour que seul l'angle change."),
      B('Keep the angle that wins. Only then, test different wordings for that angle.',
        "Garde l'angle qui gagne. Ensuite seulement, teste des formulations différentes pour cet angle."),
    ],
    trap: B(
      'Asking for twenty variants? You get twenty ways of saying the same thing. The result teaches you nothing you can reuse.',
      "Tu demandes vingt variantes ? Tu obtiens vingt façons de dire la même chose. Le résultat ne t'apprend rien que tu puisses réutiliser.",
    ),
    quiz: {
      q: B('You tested twenty variants of one angle, and one wins. What did you learn?',
        "Tu as testé vingt variantes d'un seul angle et l'une gagne. Qu'as-tu appris ?"),
      options: [
        B('Which wording performs best', 'Quelle formulation marche le mieux'),
        B('Almost nothing reusable', 'Presque rien de réutilisable'),
        B('That the audience is large', 'Que l\'audience est large'),
      ],
      answer: 1,
      why: B(
        'A winning wording stops working as soon as the channel or the season changes. A winning angle tells you why people buy. That lesson still holds when you rewrite the message.',
        "Une formulation gagnante cesse de marcher dès que le canal ou la saison change. Un angle gagnant, lui, te dit pourquoi les gens achètent. Cette leçon reste vraie quand tu réécris le message.",
      ),
    },
    badge: B('Tests angles, not words', 'Teste des angles, pas des mots'),
  },
  {
    id: 'gr-landing',
    master: 'analysis',
    minutes: 7,
    title: B('Keep the promise your ad made', 'Tiens la promesse de ton annonce'),
    learn: B(
      'You will spot the gap between what your ad promises and what your page actually says.',
      "Tu vas repérer l'écart entre ce que ta publicité promet et ce que ta page dit vraiment.",
    ),
    act: B('Give the AI your ad and your page. Ask what a visitor expected to find and did not.',
      "Donne à l'IA ton annonce et ta page. Demande ce qu'un visiteur s'attendait à trouver et n'a pas trouvé."),
    steps: [
      B('Paste the ad first, then the page. In that order, the AI understands the ad is the promise.',
        "Colle l'annonce d'abord, puis la page. Dans cet ordre, l'IA comprend que l'annonce est la promesse."),
      B('Ask which sentence a visitor reads first, and whether it repeats what the ad says.',
        "Demande quelle phrase un visiteur lit en premier, et si elle reprend ce que dit l'annonce."),
      B('Ask what the visitor is asked to give, and when. A form before the promised answer drives them away.',
        "Demande ce qu'on réclame au visiteur, et à quel moment. Un formulaire avant la réponse promise le fait fuir."),
    ],
    trap: B(
      'Judging the page on its own. A visitor always arrives right after reading your ad, and judges the page against that promise.',
      "Juger la page toute seule. Un visiteur arrive toujours juste après avoir lu ton annonce, et il juge la page par rapport à cette promesse.",
    ),
    quiz: {
      q: B('Your click rate is high, but nobody buys or signs up. Where do you look first?',
        "Ton taux de clic est bon, mais personne n'achète ni ne s'inscrit. Où regardes-tu d'abord ?"),
      options: [
        B('The gap between ad and page', "L'écart entre l'annonce et la page"),
        B('The price', 'Le prix'),
        B('The loading time of the page', 'Le temps de chargement de la page'),
      ],
      answer: 0,
      why: B(
        'A good click rate proves your ad attracts people. If they leave right after, your page does not answer what the ad promised. You can fix that without spending anything more.',
        "Un bon taux de clic prouve que ton annonce attire. Si les gens partent juste après, ta page ne répond pas à ce que l'annonce promettait. Ça se corrige sans rien dépenser de plus.",
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
    title: B("Nail your new sign-ups' first day!", 'Réussis le premier jour de tes inscrits !'),
    learn: B(
      'You will build a welcome that leads a new user to one single action, instead of showing them everything.',
      "Tu vas créer un accueil qui mène le nouvel inscrit vers une seule action, au lieu de tout lui montrer.",
    ),
    act: B('Name the one thing a new user must do, then write the three messages that get them there.',
      "Nomme la seule chose qu'un nouvel inscrit doit faire, puis écris les trois messages qui l'y mènent."),
    steps: [
      B('Pick the action that shows a user will stay. Just one, and you must be able to count it.',
        "Choisis l'action qui montre qu'un inscrit va rester. Une seule, et tu dois pouvoir la compter."),
      B('Write message one for people who have not done that action yet, not for everyone.',
        "Écris le premier message pour ceux qui n'ont pas encore fait cette action, pas pour tout le monde."),
      B('Stop the messages as soon as the action is done. Carrying on after that is just noise.',
        "Arrête les messages dès que l'action est faite. Continuer après, c'est envoyer du bruit."),
    ],
    trap: B(
      'Showing every feature on day one? Nobody remembers it all, and the one thing that mattered gets lost among the rest.',
      "Tu présentes toutes les fonctions le premier jour ? Personne ne retient tout, et la seule chose importante se perd au milieu du reste.",
    ),
    quiz: {
      q: B('What should stop a welcome sequence?',
        "Qu'est-ce qui doit arrêter une séquence d'accueil ?"),
      options: [
        B('The action being done', "L'action accomplie"),
        B('The last message being sent', 'Le dernier message envoyé'),
        B('A week going by', 'Une semaine écoulée'),
      ],
      answer: 0,
      why: B(
        'If you keep asking someone for an action they already did, they see your messages are automatic and do not know them. They stop reading, and that is hard to win back.',
        "Si tu demandes encore une action à quelqu'un qui l'a déjà faite, il comprend que tes messages sont automatiques et ne le connaissent pas. Il arrête de les lire, et c'est difficile à rattraper.",
      ),
    },
    badge: B('Aims for one action, then stops', "Vise une action, puis s'arrête"),
  },
  {
    id: 'gr-nudge',
    master: 'writing',
    minutes: 6,
    title: B('Follow up without ever nagging', 'Relance sans jamais harceler'),
    learn: B(
      'Do your follow-ups repeat the first message? You will learn to bring something new each time.',
      "Tes relances répètent le premier message ? Tu vas apprendre à apporter quelque chose de nouveau à chaque fois.",
    ),
    act: B('Write three follow-ups. Each one must bring a piece of information the previous one did not have.',
      "Écris trois relances. Chacune doit apporter une information que la précédente n'avait pas."),
    steps: [
      B('Give the AI your first message and forbid it to repeat the offer.',
        "Donne à l'IA ton premier message et interdis-lui de répéter l'offre."),
      B('Ask for one new element per follow-up: a customer example, a number, or the answer to an objection.',
        "Demande un élément neuf par relance : un exemple client, un chiffre, ou la réponse à une objection."),
      B('Ask for a sentence that makes it easy to say no. It raises replies without losing you any contacts.',
        "Demande une phrase qui permet de dire non facilement. Elle augmente les réponses sans te faire perdre de contacts."),
    ],
    trap: B(
      'Writing "just following up". It shows you have nothing new to say, and it forces the reader to remember your first message.',
      "Écrire « je me permets de revenir vers vous ». Cette phrase montre que tu n'as rien de neuf à dire, et oblige le lecteur à se rappeler ton premier message.",
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
        "Le plus souvent, un silence n'est pas un refus : la personne n'a pas encore décidé. Si dire non est facile, elle répond. Et une réponse, même négative, te permet d'arrêter de relancer ce contact.",
      ),
    },
    badge: B('Adds something each time', 'Ajoute quelque chose à chaque fois'),
  },
  {
    id: 'gr-churn',
    master: 'analysis',
    minutes: 7,
    title: B("Spot who's leaving before they leave", "Repère qui va partir, avant qu'il parte"),
    learn: B(
      'You will spot the signs that come before a customer leaves, while you can still act.',
      "Tu vas repérer les signes qui arrivent avant qu'un client parte, quand tu peux encore agir.",
    ),
    act: B('Give the AI two lists: customers who stayed and customers who left. Ask what sets them apart.',
      'Donne à l\'IA deux listes : les clients restés et les clients partis. Demande ce qui les différencie.'),
    steps: [
      B('Send what customers did before leaving. Never send the departure itself.',
        "Envoie ce que les clients faisaient avant de partir. N'envoie jamais le départ lui-même."),
      B('Ask for each difference with the number of customers behind it, and what the AI cannot conclude.',
        "Demande chaque différence avec le nombre de clients concernés, et ce que l'IA ne peut pas conclure."),
      B('Check one signal by hand on ten accounts before acting on it.',
        "Vérifie un signal à la main sur dix comptes avant d'agir dessus."),
    ],
    trap: B(
      'Including the cancellation date in your data. The AI will conclude, very confidently, that people who cancelled left. That teaches you nothing.',
      "Mettre la date de résiliation dans tes données. L'IA conclura, avec beaucoup d'assurance, que ceux qui ont résilié sont partis. Ça ne t'apprend rien.",
    ),
    quiz: {
      q: B('Which column must not be in the data you send?',
        'Quelle colonne ne doit pas se trouver dans les données que tu envoies ?'),
      options: [
        B('The cancellation itself', 'L\'annulation elle-même'),
        B('The date of their last use', 'La date de leur dernière utilisation'),
        B('The plan they were on', 'Le forfait souscrit'),
      ],
      answer: 0,
      why: B(
        'Data that only exists because the customer left will be taken as the cause of leaving. The result looks perfect, but it comes too late for you to act.',
        "Une donnée qui n'existe que parce que le client est parti sera prise pour la cause du départ. Le résultat semble parfait, mais il arrive trop tard pour que tu puisses agir.",
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
      "Tu vas construire un tableau de bord qui répond à une question au lieu de tout montrer.",
    ),
    act: B('Write your question first, then ask the AI which three numbers answer it.',
      "Écris d'abord ta question, puis demande à l'IA quels sont les trois chiffres qui y répondent."),
    steps: [
      B('Write the question as a sentence you would say out loud to a colleague.',
        "Écris la question comme une phrase que tu dirais à voix haute à un collègue."),
      B('Ask for the fewest numbers that answer it, and what each one is for.',
        "Demande le moins de chiffres possible pour y répondre, et à quoi sert chacun."),
      B('Ask what number would have to move for the answer to change.',
        "Demande quel chiffre devrait bouger pour que la réponse change."),
    ],
    trap: B(
      'Putting everything you can measure on the board? Nobody reads it. Worse, it gives the impression everything is tracked when nobody is looking.',
      "Tu mets sur le tableau tout ce qui se mesure ? Personne ne le lit. Pire, il donne l'impression que tout est suivi alors que personne ne regarde.",
    ),
    quiz: {
      q: B('How do you know a metric belongs on the board?',
        'Comment sais-tu qu\'un indicateur a sa place sur le tableau ?'),
      options: [
        B('A decision changes when it moves', 'Une décision change quand il bouge'),
        B('It is available in the tool', "Il est disponible dans l'outil"),
        B('The team has always had it on the board', "L'équipe l'a toujours eu sur le tableau"),
      ],
      answer: 0,
      why: B(
        'A number that changes no decision is only decoration. And it takes the place of the two or three useful numbers. Being available is not a reason to keep it.',
        "Un chiffre qui ne fait changer aucune décision ne sert qu'à décorer. Et il prend la place des deux ou trois chiffres utiles. Qu'un chiffre soit disponible ne suffit pas à le garder.",
      ),
    },
    badge: B('Asks the question before measuring', 'Pose la question avant de mesurer'),
  },
  {
    id: 'gr-test',
    master: 'analysis',
    minutes: 7,
    title: B('Read your tests without fooling yourself', 'Lis tes tests sans te mentir'),
    learn: B(
      'You will finally tell a real result from plain chance.',
      "Tu sauras enfin distinguer un vrai résultat d'un simple effet du hasard.",
    ),
    act: B('Give the AI your two results and the visitor count of each version. Ask what cannot be concluded.',
      "Donne à l'IA tes deux résultats et le nombre de visiteurs de chaque version. Demande ce qu'on ne peut pas conclure."),
    steps: [
      B('Send numbers of people, not percentages. A percentage hides how few people there were.',
        "Envoie des nombres de personnes, pas des pourcentages. Un pourcentage cache le fait qu'il y avait peu de monde."),
      B('Ask for the range the true result probably falls in, rather than a plain yes or no.',
        "Demande entre quelles valeurs se situe probablement le vrai résultat, plutôt qu'un simple oui ou non."),
      B('Ask how long the test would have needed to run to reach a conclusion.',
        "Demande combien de temps il aurait fallu laisser tourner le test pour pouvoir conclure."),
    ],
    trap: B(
      'Stopping the test the day it proves you right? Every test looks good on some day. Stopping it then means you picked the result yourself.',
      "Tu arrêtes le test le jour où il te donne raison ? Tout test finit par sembler bon un jour. En l'arrêtant là, c'est toi qui choisis le résultat.",
    ),
    quiz: {
      q: B('12 % against 9 %, on two hundred visitors. What do you say?',
        '12 % contre 9 %, sur deux cents visiteurs. Tu en dis quoi ?'),
      options: [
        B('B wins, the gap is three points', "B gagne, l'écart est de trois points"),
        B('A wins, keep it', 'A gagne, on garde A'),
        B('Too few people to tell', 'Trop peu de monde pour conclure'),
      ],
      answer: 2,
      why: B(
        'Two hundred visitors split in two gives only a handful of conversions on each side. One person switching sides is enough to flip the winner. Chance decides, not the page.',
        "Deux cents visiteurs répartis en deux, ça donne seulement une poignée de conversions de chaque côté. Il suffit qu'une personne change de camp pour inverser le gagnant. C'est le hasard qui décide, pas la page.",
      ),
    },
    badge: B('Counts people, not percents', 'Compte des gens, pas des pourcents'),
  },
  {
    id: 'gr-attrib',
    master: 'research',
    minutes: 7,
    title: B("Don't take your attribution report at its word", "Ne crois pas ton rapport d'attribution sur parole"),
    learn: B(
      'You will see that a channel report is just one way of reading the numbers among several.',
      "Tu vas voir qu'un rapport par canal n'est qu'une façon de lire les chiffres parmi d'autres.",
    ),
    act: B('Ask the AI for three different readings of the same numbers, and the decision each one would lead to.',
      "Demande à l'IA trois lectures différentes des mêmes chiffres, et la décision que chacune entraînerait."),
    steps: [
      B('Give the numbers without saying what you conclude, so you do not steer the AI.',
        "Donne les chiffres sans dire ce que tu en conclus, pour ne pas influencer l'IA."),
      B('For each channel, ask for a reading that gives it the credit, with the assumption behind it.',
        "Demande, pour chaque canal, une lecture qui lui donne le mérite, avec l'hypothèse qui la justifie."),
      B('Pick the reading whose assumption you can check, then actually check it.',
        "Choisis la lecture dont tu peux vérifier l'hypothèse, puis vérifie-la vraiment."),
    ],
    trap: B(
      'Believing your attribution tool tells the truth. Each tool only sees its own contacts with the customer, so it gives itself credit for the sale.',
      "Croire que ton outil d'attribution dit la vérité. Chaque outil ne voit que ses propres contacts avec le client, donc il s'attribue le mérite de la vente.",
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
        'The two tools do not measure the same thing, so neither is the truth. Look instead at which decision each one would push you to make, and whether those decisions really differ.',
        "Les deux outils ne mesurent pas la même chose, donc aucun n'est la vérité. Regarde plutôt quelle décision chacun te pousserait à prendre, et si ces décisions sont vraiment différentes.",
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
    title: B('Finally put your style in writing', 'Mets enfin ton style par écrit'),
    learn: B(
      'You will write a style guide anyone can apply, including an AI.',
      "Tu vas écrire une charte de style que n'importe qui peut appliquer, y compris une IA.",
    ),
    act: B('Give the AI five of your real texts and ask for the style rules it spots in them.',
      "Donne à l'IA cinq de tes vrais textes et demande-lui les règles de style qu'elle y repère."),
    steps: [
      B('Pick ordinary texts, not your best ones. Your best texts are exceptions, not your usual style.',
        "Choisis des textes ordinaires, pas tes meilleurs. Tes meilleurs textes sont des exceptions, pas ton style habituel."),
      B('Ask for rules a stranger could follow, and a counter-example for each.',
        "Demande des règles qu'un inconnu pourrait suivre, et un contre-exemple pour chacune."),
      B('Correct the list yourself. The rules you remove teach you as much about your style as the ones you keep.',
        "Corrige la liste toi-même. Les règles que tu retires t'en apprennent autant sur ton style que celles que tu gardes."),
    ],
    trap: B(
      'Writing rules like "be warm and professional". Two people apply them in opposite ways, and nobody can say who is wrong.',
      "Écrire des règles comme « être chaleureux et professionnel ». Deux personnes les appliquent de façon opposée, et personne ne peut dire qui a tort.",
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
        'A useful rule can be checked: you can point at a sentence and say it breaks the rule. Nobody can point at a sentence and prove it lacks warmth.',
        "Une règle utile se vérifie : tu peux montrer une phrase et dire qu'elle l'enfreint. Personne ne peut montrer du doigt une phrase qui manquerait de chaleur.",
      ),
    },
    badge: B('Has a written style guide', 'A une charte de style écrite'),
  },
  {
    id: 'co-calendar',
    master: 'planning',
    minutes: 6,
    title: B('A calendar that survives the whole quarter', 'Un calendrier qui tient tout le trimestre'),
    learn: B(
      'Filling your calendar one slot at a time? You will build it around a few big subjects instead.',
      "Tu remplis ton calendrier case par case ? Tu vas plutôt le construire autour de quelques grands sujets.",
    ),
    act: B('Name three subjects for the quarter, then ask what each one can produce.',
      'Nomme trois sujets pour le trimestre, puis demande ce que chacun peut produire.'),
    steps: [
      B('Pick three subjects, no more. Beyond that, the team spreads thin and the calendar breaks down along the way.',
        "Choisis trois sujets, pas plus. Au-delà, l'équipe s'éparpille et le calendrier craque en cours de route."),
      B('Ask what each subject can give in three formats, and what it cannot give.',
        "Demande ce que chaque sujet peut donner dans trois formats, et ce qu'il ne peut pas donner."),
      B('Leave a quarter of the slots empty for news you cannot predict.',
        "Laisse un quart des cases vides pour l'actualité que tu ne peux pas prévoir."),
    ],
    trap: B(
      'Filling every slot before the quarter starts. When real news happens, it has no room left, and it was what people wanted to read.',
      "Remplir toutes les cases avant le début du trimestre. Quand un vrai événement arrive, il n'a plus de place, alors que c'est ce que les gens voulaient lire.",
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
        'With a full calendar, every real event forces you to choose between your plan and the news. If you kept room free, you do not have to choose.',
        "Avec un calendrier plein, chaque vrai événement t'oblige à choisir entre ton plan et l'actualité. Si tu as gardé de la place, tu n'as pas à choisir.",
      ),
    },
    badge: B('Plans around subjects', 'Planifie par sujets'),
  },
  {
    id: 'co-decline',
    master: 'writing',
    minutes: 7,
    title: B('One idea, four formats, zero repeats', 'Une idée, quatre formats, zéro redite'),
    learn: B(
      'You will turn one piece into four without saying the same thing four times.',
      "Tu vas transformer un contenu en quatre sans dire quatre fois la même chose.",
    ),
    act: B('Take one article and ask the AI what each format must cut and add.',
      "Prends un article et demande à l'IA ce que chaque format doit couper et ajouter."),
    steps: [
      B('Say who reads each format and in what state of mind.',
        "Dis qui lit chaque format et dans quel état d'esprit."),
      B('Ask what must be cut for that reader, then what must be added for them.',
        "Demande ce qu'il faut couper pour ce lecteur, puis ce qu'il faut ajouter pour lui."),
      B('Keep one identical sentence in all four formats. That sentence is your core idea.',
        "Garde une même phrase dans les quatre formats. Cette phrase, c'est ton idée centrale."),
    ],
    trap: B(
      'Asking for the same text, only shorter? You get a long text with pieces missing, and readers can feel what is missing.',
      "Tu demandes le même texte en plus court ? Tu obtiens un texte long auquel il manque des morceaux, et les lecteurs sentent ce qui manque.",
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
        'Anyone can paste a shared title on anything. A sentence that stays after every cut is the part that could not be removed: it is the idea itself.',
        "Un titre commun, n'importe qui peut le coller sur n'importe quoi. Une phrase qui reste après toutes les coupes est ce qu'on ne pouvait pas retirer : c'est l'idée elle-même.",
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
      "Tu vas apprendre à couper les lignes inutiles qu'on ajoute presque toujours à la fin d'un post.",
    ),
    act: B('Write your post, then ask the AI where it could have stopped.',
      "Écris ton post, puis demande à l'IA où il aurait pu s'arrêter."),
    steps: [
      B('Ask for the last sentence that carries information, and cut after it.',
        "Demande la dernière phrase qui porte une information, et coupe après."),
      B('Ask what the reader should do next. If there is nothing to do, add no call to action.',
        "Demande ce que le lecteur doit faire après. S'il n'a rien à faire, n'ajoute pas d'appel à l'action."),
      B('Remove every sentence that talks about the post instead of the subject, like "hope this helps".',
        "Retire chaque phrase qui parle du post au lieu du sujet, comme « j'espère que ça vous aidera »."),
    ],
    trap: B(
      'Closing with a question just to get reactions? Readers notice, and they understand your text had no real ending.',
      "Tu conclus par une question juste pour faire réagir ? Les lecteurs le voient, et ils comprennent que ton texte n'avait pas de vraie fin.",
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
        'A post gets replies when it is interesting. A question added at the end asks the reader to supply the interest the text failed to create.',
        "Un post obtient des réponses quand il est intéressant. Une question ajoutée à la fin demande au lecteur d'apporter l'intérêt que le texte n'a pas su créer.",
      ),
    },
    badge: B('Stops at the last fact', 'S\'arrête au dernier fait'),
  },
  {
    id: 'co-letter',
    master: 'writing',
    minutes: 7,
    title: B('Your newsletter, still opened at issue ten!', 'Ta newsletter encore ouverte au dixième numéro !'),
    learn: B(
      'You will give each issue one clear promise, instead of sending a roundup.',
      "Tu vas donner à chaque numéro une seule promesse claire, au lieu d'envoyer un récapitulatif.",
    ),
    act: B('Write the promise of your next issue in one line, then build the issue from it.',
      "Écris en une ligne la promesse de ton prochain numéro, puis construis le numéro à partir d'elle."),
    steps: [
      B('Write what the reader will know by the end, not a list of what is inside.',
        "Écris ce que le lecteur saura à la fin de sa lecture, pas la liste de ce qu'il y a dedans."),
      B('Ask what to drop from the issue because it does not serve that promise.',
        "Demande ce qu'il faut retirer du numéro parce que ça ne sert pas cette promesse."),
      B('Write the subject line last, once the issue is finished, based on the promise.',
        "Écris l'objet en dernier, une fois le numéro terminé, en partant de la promesse."),
    ],
    trap: B(
      'Sending a monthly roundup? It promises nothing, so the reader has no reason to open it. By issue ten, nobody opens it anymore.',
      "Tu envoies un récapitulatif du mois ? Il ne promet rien, donc le lecteur n'a aucune raison de l'ouvrir. Au dixième numéro, plus personne ne l'ouvre.",
    ),
    quiz: {
      q: B('When do you write the subject line?',
        "Quand écris-tu l'objet ?"),
      options: [
        B('Last, from the promise', 'En dernier, à partir de la promesse'),
        B('First, it frames the issue', 'En premier, il cadre le numéro'),
        B('At the same time as the intro', 'En même temps que l\'introduction'),
      ],
      answer: 0,
      why: B(
        'Written first, the subject line promises something the issue then has to catch up with. Written last, it only announces what the issue really delivers. That is what makes people open the next ones.',
        "Écrit en premier, l'objet promet quelque chose que le numéro devra ensuite rattraper. Écrit en dernier, il annonce seulement ce que le numéro apporte vraiment. C'est ce qui donne envie d'ouvrir les suivants.",
      ),
    },
    badge: B('One promise per issue', 'Une promesse par numéro'),
  },
  {
    id: 'co-visual',
    master: 'tools',
    minutes: 7,
    title: B('Describe the image you want, in precise words', "Décris l'image que tu veux, avec des mots précis"),
    learn: B(
      'You will write an image brief precise enough to judge the result.',
      "Tu vas écrire un brief d'image assez précis pour pouvoir juger le résultat.",
    ),
    act: B('Write a brief that says the subject, the framing, and what must not appear.',
      'Écris un brief qui dit le sujet, le cadrage, et ce qui ne doit pas apparaître.'),
    steps: [
      B('Say where the image will be seen and at what size. That decides everything else.',
        "Dis où l'image sera vue et à quelle taille. C'est ce qui décide de tout le reste."),
      B('Name what must not be there: no text, no faces, no logo.',
        "Nomme ce qui ne doit pas y être : pas de texte, pas de visages, pas de logo."),
      B('Ask for three options that differ in subject, not in colour.',
        "Demande trois propositions qui diffèrent par le sujet, pas par la couleur."),
    ],
    trap: B(
      'Asking for something "modern and clean". Those words mean something different to everyone. You get an average image and cannot say what is wrong.',
      "Demander une image « moderne et épurée ». Ces mots veulent dire autre chose pour chacun. Tu obtiens une image moyenne, sans savoir dire ce qui ne va pas.",
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
        "Une contrainte qu'on peut vérifier évite le débat. Du texte dans une image vue en 400 pixels est illisible : c'est un fait, pas une question de goût.",
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
      "Tu vas annoncer la nouvelle dès la première phrase, au lieu d'y arriver petit à petit.",
    ),
    act: B('Write the news in one sentence, then ask what the rest of the page must add.',
      'Écris la nouvelle en une phrase, puis demande ce que le reste de la page doit apporter en plus.'),
    steps: [
      B('First sentence: what is happening, who is involved, and when. Nothing before it.',
        "En première phrase : ce qui se passe, qui est concerné, et quand. Rien avant."),
      B('Then add only what a journalist cannot find anywhere else.',
        "Ensuite, n'ajoute que ce qu'un journaliste ne peut pas trouver ailleurs."),
      B('Ask what questions a journalist would still ask you after reading. Answer them on the page.',
        "Demande quelles questions un journaliste te poserait encore après lecture. Réponds-y dans la page."),
    ],
    trap: B(
      'Opening by presenting the company and its mission. A journalist decides at the first line whether to keep reading. If they find your mission there, they stop.',
      "Commencer par présenter l'entreprise et sa mission. Le journaliste décide dès la première ligne s'il continue. S'il y lit ta mission, il s'arrête là.",
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
        'Whoever reads your first line decides whether to read on. Only the news can convince them to continue. Everything else can wait for the rest of the page.',
        "Celui qui lit ta première ligne décide s'il lit la suite. Seule la nouvelle peut le convaincre de continuer. Tout le reste peut attendre la suite de la page.",
      ),
    },
    badge: B('Leads with the news', 'Commence par la nouvelle'),
  },
  {
    id: 'co-answer',
    master: 'support',
    minutes: 6,
    title: B('Answer a journalist in twenty minutes', 'Réponds à un journaliste en vingt minutes'),
    learn: B(
      'A journalist is waiting on you? You will answer fast, without writing a sentence you would regret.',
      "Un journaliste attend ta réponse ? Tu vas répondre vite, sans écrire une phrase que tu regretterais.",
    ),
    act: B('Draft the answer, then ask which sentence you would not want quoted alone.',
      'Rédige la réponse, puis demande quelle phrase tu ne voudrais pas voir citée seule.'),
    steps: [
      B('Answer the question asked, and only that one. If you dodge it, the dodge becomes the story.',
        "Réponds à la question posée, et seulement à elle. Si tu réponds à côté, c'est ça qui fera l'article."),
      B('Ask the AI to read each sentence as if it were the only one quoted in the article.',
        "Demande à l'IA de relire chaque phrase comme si c'était la seule citée dans l'article."),
      B('Say what you do not know, and when you will know it.',
        "Dis ce que tu ne sais pas, et quand tu le sauras."),
    ],
    trap: B(
      'Sending a long answer to look transparent. More sentences means more that can be quoted out of context. And it will happen.',
      "Envoyer une longue réponse pour paraître transparent. Plus il y a de phrases, plus il y en a qu'on peut citer hors contexte. Et ça finira par arriver.",
    ),
    quiz: {
      q: B('How do you test each sentence of your answer?',
        'Comment tester chaque phrase de ta réponse ?'),
      options: [
        B('Read in the whole answer', 'Lue dans la réponse entière'),
        B('Read alone, as a quote', 'Lue seule, comme une citation'),
        B('Read by your own team', 'Lue par ton équipe'),
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
    title: B('Crisis: say only what you know', 'Crise : ne dis que ce que tu sais'),
    learn: B(
      'Before you speak, you will learn to separate what you know from what you assume.',
      "Avant de parler, tu vas apprendre à séparer ce que tu sais de ce que tu supposes.",
    ),
    act: B('List the facts, the unknowns and the assumptions, then write only from the facts.',
      "Liste les faits, les inconnues et les suppositions, puis n'écris qu'à partir des faits."),
    steps: [
      B('Sort each piece of information into three groups: certain, unknown, or assumed. Be strict.',
        "Classe chaque information en trois groupes : sûr, inconnu, ou supposé. Sois strict."),
      B('Write from the certain facts, and say plainly what is still unknown.',
        "Écris à partir des faits sûrs, et dis clairement ce qui reste inconnu."),
      B('Announce the time of your next update, and keep to it even with nothing new.',
        "Annonce l'heure de ta prochaine mise à jour, et tiens-la même si tu n'as rien de neuf."),
    ],
    trap: B(
      'Announcing that no customer was affected before you are sure? If it turns out false, the story is no longer the incident but your denial.',
      "Tu annonces qu'aucun client n'est touché avant d'en être sûr ? Si c'est faux, on ne parle plus de l'incident, mais de ton démenti.",
    ),
    quiz: {
      q: B('You do not yet know the extent. What do you publish?',
        "Tu ne connais pas encore l'ampleur. Que publies-tu ?"),
      options: [
        B('Nothing, until you know', 'Rien, tant que tu ne sais pas'),
        B('A reassuring note while the investigation runs', "Un message rassurant pendant que l'enquête se poursuit"),
        B('What is known, and the next update time', "Ce que tu sais, et l'heure de la prochaine mise à jour"),
      ],
      answer: 2,
      why: B(
        'Silence looks like you are hiding something. A reassuring message you later have to take back costs more than the incident. A short, true message with the next update time keeps you credible.',
        "Le silence donne l'impression que tu caches quelque chose. Un message rassurant que tu dois ensuite démentir coûte plus cher que l'incident. Un message court et vrai, avec l'heure de la prochaine mise à jour, te garde crédible.",
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
    title: B('Finally say what you do, in one sentence', 'Dis enfin ce que tu fais, en une phrase'),
    learn: B(
      'You will find one clear sentence and say it the same way to everyone who asks what you do.',
      "Tu vas trouver une phrase claire et la dire de la même façon à tous ceux qui te demandent ce que tu fais.",
    ),
    act: B('Write your sentence for one specific customer, then ask the AI what a stranger would picture reading it.',
      "Écris ta phrase pour un client précis, puis demande à l'IA ce qu'un inconnu imaginerait en la lisant."),
    steps: [
      B('Say who it is for, and what those customers no longer have to do thanks to you. Without both, it is a slogan.',
        "Dis pour qui c'est, et ce que ces clients n'ont plus à faire grâce à toi. Sans ces deux éléments, c'est un slogan."),
      B('Ask what other companies your sentence could describe. If the list is long, it is too vague.',
        "Demande quelles autres entreprises ta phrase pourrait décrire. Si la liste est longue, elle est trop vague."),
      B('Say it out loud to someone outside the company. Note the first question they ask.',
        "Dis-la à voix haute à quelqu'un d'extérieur. Note la première question qu'il te pose."),
    ],
    trap: B(
      'Giving a category instead of the change you bring. "An AI platform for teams" describes thousands of companies and does not say what you do.',
      "Donner une catégorie au lieu du changement que tu apportes. « Une plateforme IA pour les équipes » décrit des milliers d'entreprises et ne dit pas ce que tu fais.",
    ),
    quiz: {
      q: B('How do you test the sentence?',
        'Comment tester ta phrase ?'),
      options: [
        B('Ask if it sounds good', 'Demander si elle sonne bien'),
        B('Ask what else it could describe', 'Demander ce qu\'elle pourrait décrire d\'autre'),
        B('Ask whether it is short enough to remember', 'Demander si elle est assez courte pour se retenir'),
      ],
      answer: 1,
      why: B(
        'A sentence that also fits your competitors is not about you. Listing what else it could describe is the fastest way to see if it really says something.',
        "Une phrase qui convient aussi à tes concurrents ne parle pas de toi. Lister ce qu'elle pourrait décrire d'autre est le moyen le plus rapide de voir si elle dit vraiment quelque chose.",
      ),
    },
    badge: B('Says what they do in one line', "Dit ce qu'il fait en une phrase"),
  },
  {
    id: 'fo-deck',
    master: 'planning',
    minutes: 7,
    title: B('Ten slides, one argument, no filler', 'Dix diapositives, un raisonnement, zéro remplissage'),
    learn: B(
      'You will build a deck where each slide leads logically to the next.',
      "Tu vas construire un deck où chaque diapositive mène logiquement à la suivante.",
    ),
    act: B('Write the ten sentences first, in order, and read them as one paragraph.',
      "Écris d'abord les dix phrases, dans l'ordre, et lis-les comme un paragraphe."),
    steps: [
      B('One sentence per slide, and that sentence is the title.',
        "Une phrase par diapositive, et cette phrase est le titre."),
      B('Read the ten sentences in a row. If that paragraph does not convince, the deck will not either.',
        "Lis les dix phrases à la suite. Si ce paragraphe ne convainc pas, le deck ne convaincra pas non plus."),
      B('Ask where a reader could object, and put the answer on the next slide.',
        "Demande où un lecteur pourrait objecter, et mets la réponse sur la diapositive suivante."),
    ],
    trap: B(
      'Polishing the design before your argument holds? Beautiful slides hide a weak argument, even from you.',
      "Tu soignes le design avant que ton raisonnement tienne ? De belles diapositives cachent un raisonnement faible, même à tes propres yeux.",
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
        "Lus à la suite, les titres montrent ton raisonnement sans rien autour. S'ils ne convainquent pas seuls, aucun graphique plus loin ne les sauvera.",
      ),
    },
    badge: B('Argues in ten sentences', 'Argumente en dix phrases'),
  },
  {
    id: 'fo-hard',
    master: 'research',
    minutes: 7,
    title: B('Answer the question that hurts', 'Réponds à la question qui fâche'),
    learn: B(
      'You will prepare the three objections you least want to hear.',
      "Tu vas préparer les trois objections que tu veux le moins entendre.",
    ),
    act: B('Ask the AI to attack your project as hard as it can, then answer in writing.',
      "Demande à l'IA d'attaquer ton projet le plus durement possible, puis réponds par écrit."),
    steps: [
      B('Give it your pitch and ask for the strongest criticism anyone could make.',
        "Donne-lui ton pitch et demande les critiques les plus fortes qu'on puisse lui faire."),
      B('Keep the objections you cannot answer in one sentence. Those are the ones that matter.',
        "Garde les objections auxquelles tu ne sais pas répondre en une phrase. Ce sont celles qui comptent."),
      B('Write your answer, then check which assumptions it rests on.',
        "Écris ta réponse, puis vérifie sur quelles hypothèses elle repose."),
    ],
    trap: B(
      'Letting the AI agree with you. It then serves up objections you already know how to beat, and you learn nothing new.',
      "Laisser l'IA te donner raison. Elle te sert alors les objections que tu sais déjà contrer, et tu ne découvres rien de nouveau.",
    ),
    quiz: {
      q: B('Which objection is worth preparing?',
        'Quelle objection mérite d\'être préparée ?'),
      options: [
        B('The one you answer instantly', 'Celle à laquelle tu réponds aussitôt'),
        B('The one nobody in the room has raised yet', "Celle que personne dans la salle n'a encore soulevée"),
        B('The one that takes you a paragraph', 'Celle qui te prend un paragraphe'),
      ],
      answer: 2,
      why: B(
        'An objection you answer instantly was never a risk. The one that needs a paragraph is the one you will fumble in a meeting. It is the only one worth the work.',
        "Une objection à laquelle tu réponds aussitôt n'a jamais été un risque. Celle qui te demande un paragraphe est celle que tu rateras en réunion. C'est la seule qui mérite ce travail.",
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
    title: B('Twenty customer interviews, zero leading questions', 'Vingt entretiens clients, zéro question orientée'),
    learn: B(
      'You will ask customers what they did, not what they plan to do.',
      "Tu vas demander à tes clients ce qu'ils ont fait, pas ce qu'ils comptent faire.",
    ),
    act: B('Write ten questions, then ask which of them predict nothing.',
      'Écris dix questions, puis demande lesquelles ne prédisent rien.'),
    steps: [
      B('Ask what they did last time, not what they would do.',
        "Demande ce qu'ils ont fait la dernière fois, pas ce qu'ils feraient."),
      B('Never name your solution before the end of the conversation.',
        "Ne nomme jamais ta solution avant la fin de l'entretien."),
      B('Ask what it cost them: time, money, or an argument with someone.',
        "Demande ce que ça leur a coûté : du temps, de l'argent, ou une dispute."),
    ],
    trap: B(
      'Asking whether they would use it? Everyone says yes to a stranger who built something, and that yes has never predicted a single purchase.',
      "Tu leur demandes s'ils l'utiliseraient ? Tout le monde dit oui à un inconnu qui a construit quelque chose, et ce oui n'a jamais prédit un seul achat.",
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
        'What happened can be told in detail, and nobody invents it to please you. An intention costs nothing to state, and it is forgotten as soon as the interview ends.',
        "Ce qui s'est passé se raconte en détail, et on ne l'invente pas pour te faire plaisir. Une intention ne coûte rien à annoncer, et elle est oubliée dès la fin de l'entretien.",
      ),
    },
    badge: B('Asks about the past', 'Interroge le passé'),
  },
  {
    id: 'fo-verbatim',
    master: 'extraction',
    minutes: 7,
    title: B('Read your notes without seeing what you want', 'Lis tes notes sans y voir ce que tu veux'),
    learn: B(
      'You will let recurring problems show up on their own, instead of looking for the ones you expect.',
      "Tu vas laisser les problèmes qui reviennent apparaître d'eux-mêmes, au lieu de chercher ceux que tu attends.",
    ),
    act: B('Paste twenty raw interview notes and ask what comes back, before saying what you expect.',
      "Colle vingt notes d'entretien brutes et demande ce qui revient, avant de dire ce que tu attends."),
    steps: [
      B("Paste the customers' exact words, not your summary.",
        "Colle les mots exacts des clients, pas ton résumé."),
      B('Ask for the recurring themes, how often each one appears, and the quotes that back it.',
        "Demande les thèmes qui reviennent, combien de fois chacun apparaît, et les citations qui le prouvent."),
      B('Look at the theme with the fewest quotes. It is often the one whose importance you overrate.',
        "Regarde le thème qui a le moins de citations. C'est souvent celui dont tu exagères l'importance."),
    ],
    trap: B(
      'Saying up front what you hope to find. The AI will find it in quotes that half fit, and you will not see the ones it skipped.',
      "Dire d'avance ce que tu espères trouver. L'IA le trouvera dans des citations qui collent à moitié, et tu ne verras pas celles qu'elle a ignorées.",
    ),
    quiz: {
      q: B('Why send the raw words and not your summary?',
        'Pourquoi envoyer les mots bruts et pas ton résumé ?'),
      options: [
        B('It is faster and there is less to paste', "C'est plus rapide et il y a moins à coller"),
        B('Your summary already chose', 'Ton résumé a déjà choisi'),
        B('The tool prefers long text', 'L\'outil préfère les longs textes'),
      ],
      answer: 1,
      why: B(
        'Writing a summary already means choosing what matters. If you hand over your summary, the AI only confirms your choices, and you learn nothing.',
        "Faire un résumé, c'est déjà choisir ce qui compte. Si tu donnes ton résumé, l'IA ne fait que confirmer tes choix, et tu n'apprends rien.",
      ),
    },
    badge: B('Reads notes without bias', 'Lit les notes sans a priori'),
  },
  {
    id: 'fo-price',
    master: 'analysis',
    minutes: 7,
    title: B('Finally set your first price', 'Fixe enfin ton premier prix'),
    learn: B(
      'Pricing from your costs? You will price against what your product replaces instead.',
      "Tu fixes ton prix d'après tes coûts ? Tu vas le fixer d'après ce que ton produit remplace.",
    ),
    act: B('Name what your customer stops paying for thanks to you, then ask what share of that you can charge.',
      "Nomme ce que ton client arrête de payer grâce à toi, puis demande quelle part de cette somme tu peux demander."),
    steps: [
      B('Write what they do today and what it costs them in hours or money.',
        "Écris ce qu'ils font aujourd'hui et ce que ça leur coûte en heures ou en argent."),
      B('Ask for three price levels and what each one says about the product.',
        "Demande trois niveaux de prix et ce que chacun dit du produit."),
      B('Ask which one you would be embarrassed to say out loud, and why.',
        "Demande lequel te gênerait à annoncer à voix haute, et pourquoi."),
    ],
    trap: B(
      'Pricing from your costs. The customer does not know your costs. They compare your price to what they already spend on that problem.',
      "Fixer ton prix à partir de tes coûts. Le client ne connaît pas tes coûts. Il compare ton prix à ce qu'il dépense déjà pour régler ce problème.",
    ),
    quiz: {
      q: B('What does the customer compare your price to?',
        'À quoi le client compare-t-il ton prix ?'),
      options: [
        B('What it costs you to build and serve', 'Ce que ça te coûte à construire et à servir'),
        B('What a competitor charges', 'Ce que facture un concurrent'),
        B('What they spend on this today', 'Ce qu\'ils dépensent aujourd\'hui pour cela'),
      ],
      answer: 2,
      why: B(
        'Buyers do not know your costs, and they do not care. They know what this problem already costs them, and that is the only number they can compare you to.',
        "Les acheteurs ne connaissent pas tes coûts, et ils s'en moquent. Ils savent ce que ce problème leur coûte déjà, et c'est le seul chiffre auquel ils peuvent te comparer.",
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
    title: B('Write the job before you hire', 'Écris le poste avant de recruter'),
    learn: B(
      'You will describe the work of the first ninety days, not a profile.',
      "Tu vas décrire le travail des quatre-vingt-dix premiers jours, pas un profil.",
    ),
    act: B('Write what this person will have achieved in three months, then work out the profile from that.',
      "Écris ce que cette personne aura accompli dans trois mois, puis déduis-en le profil."),
    steps: [
      B('List three things that will exist thanks to this person.',
        "Liste trois choses qui existeront grâce à cette personne."),
      B('Ask what skills those three things actually require.',
        "Demande quelles compétences ces trois choses exigent vraiment."),
      B('Cut every requirement that does not appear in that answer.',
        "Supprime chaque exigence qui n'apparaît pas dans cette réponse."),
    ],
    trap: B(
      'Requiring five years of experience on six tools. You rule out people who could deliver the work, and keep those who just know the tools.',
      "Exiger cinq ans d'expérience sur six outils. Tu écartes des gens capables de livrer le travail, et tu gardes ceux qui connaissent juste les outils.",
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
        "Des résultats se vérifient au bout de quatre-vingt-dix jours, et ils montrent quelles compétences comptaient vraiment. Une liste de compétences ne se vérifie que sur un CV, qui ne parle que du passé.",
      ),
    },
    badge: B('Hires for an outcome', 'Recrute pour un résultat'),
  },
  {
    id: 'fo-decide',
    master: 'writing',
    minutes: 6,
    title: B('Keep a record of your decisions', 'Garde une trace de tes décisions'),
    learn: B(
      'Why did you choose that, again? You will keep a log that reminds you later.',
      "Pourquoi avais-tu choisi ça, déjà ? Tu vas tenir un journal qui te le rappellera plus tard.",
    ),
    act: B('Write the decision, the other possible options, and what would prove you wrong.',
      'Écris la décision, les autres options possibles, et ce qui prouverait que tu t\'es trompé.'),
    steps: [
      B('Write the decision in one sentence, in the past tense, to show it is made.',
        "Écris la décision en une phrase, au passé, pour montrer qu'elle est prise."),
      B('List the options you rejected, with the main reason for each.',
        "Liste les options que tu as écartées, avec la raison principale pour chacune."),
      B('Name the fact that would prove you wrong, and when you will check.',
        "Nomme le fait qui te donnerait tort, et quand tu iras vérifier."),
    ],
    trap: B(
      'Recording only the decision. Six months later nobody remembers the other options, and the same debate starts again from scratch.',
      "Ne noter que la décision. Six mois plus tard, personne ne se souvient des autres options, et le même débat recommence de zéro.",
    ),
    quiz: {
      q: B('What makes a decision record useful later?',
        'Qu\'est-ce qui rend une trace de décision utile plus tard ?'),
      options: [
        B('The options that were rejected', 'Les options qui ont été écartées'),
        B('The date it was made', 'La date à laquelle elle a été prise'),
        B('Who signed it off, and on what date', "Qui l'a validée, et à quelle date"),
      ],
      answer: 0,
      why: B(
        'On its own, the decision looks obvious in hindsight, so it teaches nothing. The rejected options show the situation you were really in when you chose.',
        "La décision seule paraît évidente après coup, donc elle n'apprend rien. Les options écartées montrent dans quelle situation tu étais vraiment au moment de choisir.",
      ),
    },
    badge: B('Keeps the rejected options', 'Garde les options écartées'),
  },
  {
    id: 'fo-keep',
    master: 'triage',
    minutes: 6,
    title: B("What you'll never hand over", 'Ce que tu ne délégueras jamais'),
    learn: B(
      'You will tell apart what you can delegate from what only you can do.',
      "Tu vas distinguer ce que tu peux déléguer de ce que toi seul peux faire.",
    ),
    act: B('List a week of your tasks and sort them yourself into three piles.',
      'Liste tes tâches d\'une semaine et trie-les toi-même en trois tas.'),
    steps: [
      B('Pile one: anyone could do it with instructions. Write those instructions.',
        "Premier tas : n'importe qui peut le faire avec des instructions. Écris ces instructions."),
      B('Pile two: someone could do it if they knew the context. Write that context down.',
        "Deuxième tas : quelqu'un pourrait le faire s'il connaissait le contexte. Écris ce contexte."),
      B('Pile three: it needs your judgement or your name. Keep it, and say why.',
        "Troisième tas : il faut ton jugement ou ton nom. Garde-le, et dis pourquoi."),
    ],
    trap: B(
      'Keeping a task because explaining it takes longer than doing it? True the first time. But if it comes back every week, you lose that time each time.',
      "Tu gardes une tâche parce que l'expliquer prend plus de temps que la faire ? Vrai une fois. Mais si elle revient chaque semaine, tu perds ce temps à chaque fois.",
    ),
    quiz: {
      q: B('Explaining a task takes longer than doing it. What do you do?',
        'Expliquer une tâche prend plus de temps que la faire. Que fais-tu ?'),
      options: [
        B('Explain it once, if it recurs', 'Tu l\'expliques une fois, si elle revient'),
        B('Keep it, it is faster', 'Tu la gardes, c\'est plus rapide'),
        B('Wait until you have time to explain it', "Tu attends d'avoir le temps de l'expliquer"),
      ],
      answer: 0,
      why: B(
        'You are comparing the wrong things. Compare one explanation with the time spent doing the task every week. Keeping it only makes sense if it never comes back.',
        "Tu ne compares pas les bonnes choses. Il faut comparer une seule explication avec le temps passé à faire la tâche chaque semaine. La garder n'a de sens que si elle ne revient jamais.",
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
      "Vise un segment précis, teste de vrais angles, et fais tenir à ta page la promesse de ton annonce."),
  },
  {
    id: 'gr-lifecycle', track: 'trade', glyph: 'ring', tint: '#e0459b', at: [3, 10], levels: GR_LIFE,
    title: B('Keep the people who sign up', 'Garde ceux qui s\'inscrivent'),
    blurb: B('Nail the first day, send follow-ups that add something, spot who is about to leave.',
      "Réussis le premier jour, envoie des relances qui apportent quelque chose, repère qui va partir."),
  },
  {
    id: 'gr-measure', track: 'trade', glyph: 'bars', tint: '#e0459b', at: [5, 10], levels: GR_MEASURE,
    title: B('Measure what really matters', 'Mesure ce qui compte vraiment'),
    blurb: B('One dashboard per question, tests read without fooling yourself, and a critical eye on attribution.',
      "Un tableau de bord par question, des tests lus sans te tromper, et un regard critique sur l'attribution."),
  },
  {
    id: 'co-voice', track: 'trade', glyph: 'pen', tint: '#0ea5e9', at: [1, 12], levels: CO_VOICE,
    title: B('Your editorial line', 'Ta ligne éditoriale'),
    blurb: B('Put your style in writing, build a calendar that holds, and turn one idea into several formats.',
      "Mets ton style par écrit, bâtis un calendrier qui tient, et décline une idée en plusieurs formats."),
  },
  {
    id: 'co-formats', track: 'trade', glyph: 'layers', tint: '#0ea5e9', at: [3, 12], levels: CO_FORMATS,
    title: B('Formats people actually read!', 'Des formats qu\'on lit vraiment !'),
    blurb: B('A post that stops in time, a newsletter people still open, a visual you can judge.',
      "Un post qui s'arrête à temps, une newsletter qu'on ouvre encore, un visuel que tu peux juger."),
  },
  {
    id: 'co-press', track: 'trade', glyph: 'star4', tint: '#0ea5e9', at: [5, 12], levels: CO_PRESS,
    title: B('Press and crisis, without panic', 'Presse et crise, sans paniquer'),
    blurb: B('Lead with the news, answer a journalist in twenty minutes, separate facts from assumptions.',
      "Commence par la nouvelle, réponds à un journaliste en vingt minutes, sépare les faits des suppositions."),
  },
  {
    id: 'fo-story', track: 'trade', glyph: 'peak', tint: '#7b5cff', at: [1, 14], levels: FO_STORY,
    title: B('Your founder story', 'Ton récit de fondateur'),
    blurb: B('Your business in one sentence, a ten-slide deck that convinces, and the objection that hurts.',
      "Ton activité en une phrase, un deck de dix diapositives qui convainc, et l'objection qui fâche."),
  },
  {
    id: 'fo-customer', track: 'trade', glyph: 'centre', tint: '#7b5cff', at: [3, 14], levels: FO_CUSTOMER,
    title: B('Finally understand your customer', 'Comprends enfin ton client'),
    blurb: B('Ask customers what they actually did, read your notes without bias, set your first price.',
      "Interroge tes clients sur ce qu'ils ont fait, lis tes notes sans a priori, fixe ton premier prix."),
  },
  {
    id: 'fo-team', track: 'trade', glyph: 'quadrant', tint: '#7b5cff', at: [5, 14], levels: FO_TEAM,
    title: B('Your team, your time', 'Ton équipe, ton temps'),
    blurb: B('Hire for an outcome, keep a record of your decisions, sort before delegating.',
      "Recrute pour un résultat, garde une trace de tes décisions, trie avant de déléguer."),
  },
]

export const TRADES_1: Trade[] = [
  {
    id: 'growth',
    label: B('Growth marketer', 'Growth marketer'),
    who: B('You bring in customers, and you answer for what it costs.',
      "Tu dois faire venir des clients, et tu rends des comptes sur ce que ça coûte."),
    glyph: 'target', tint: '#e0459b',
    cities: ['gr-acquisition', 'gr-lifecycle', 'gr-measure'],
  },
  {
    id: 'comms',
    label: B('Communications', 'Communicant'),
    who: B('You write what the company says, and you are responsible for it.',
      "Tu écris ce que dit l'entreprise, et tu en portes la responsabilité."),
    glyph: 'pen', tint: '#0ea5e9',
    cities: ['co-voice', 'co-formats', 'co-press'],
  },
  {
    id: 'founder',
    label: B('Founder', 'Fondateur'),
    who: B('You decide, you sell and you hire, often on the same day.',
      "Tu décides, tu vends et tu recrutes, souvent le même jour."),
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
      "Tu vas énoncer un problème qui ne contient pas déjà sa réponse.",
    ),
    act: B('Write down the request you received, then ask the AI what problem lies behind it.',
      "Écris la demande reçue, puis demande à l'IA quel problème se cache derrière."),
    steps: [
      B('Write the request as it arrived, with the feature name in it.',
        "Écris la demande telle qu'elle est arrivée, avec le nom de la fonctionnalité."),
      B('Ask what the person was trying to do just before they asked.',
        "Demande ce que la personne essayait de faire juste avant de demander."),
      B('Restate the problem without mentioning any solution. Only then, look for three possible solutions.',
        "Reformule le problème sans mentionner de solution. Ensuite seulement, cherche trois solutions possibles."),
    ],
    trap: B(
      'Taking "we need an export" as a problem. It is already a solution, and it hides the real question: what do they do with the file afterwards?',
      "Prendre « il nous faut un export » pour un problème. C'est déjà une solution, et elle cache la vraie question : que font-ils du fichier ensuite ?",
    ),
    quiz: {
      q: B('A customer asks for a bulk import. What do you write down?',
        "Un client demande un import en masse. Qu'écris-tu ?"),
      options: [
        B('They re-enter data they already have', 'Ils resaisissent des données qu\'ils ont déjà'),
        B('Build a bulk import', 'Construire un import en masse'),
        B('A bulk import, marked as high priority', 'Un import en masse, marqué prioritaire'),
      ],
      answer: 0,
      why: B(
        'Written as a problem, the request can be solved with an import, a connector, or by removing the need for that data. Written as a feature, it allows only one of those solutions.',
        "Écrite comme un problème, la demande peut se régler par un import, un connecteur, ou en supprimant le besoin de ces données. Écrite comme une fonctionnalité, elle n'autorise qu'une seule de ces solutions.",
      ),
    },
    badge: B('States problems', 'Énonce des problèmes'),
  },
  {
    id: 'pr-triage',
    master: 'triage',
    minutes: 7,
    title: B('Sort everything that comes in', 'Trie tout ce qui remonte'),
    learn: B(
      'Hundreds of messages in a heap? You will group them by problem, not by wording.',
      "Des centaines de messages en vrac ? Tu vas les regrouper par problème, pas par formulation.",
    ),
    act: B('Paste fifty pieces of customer feedback and ask for groups, with how many are in each.',
      'Colle cinquante retours clients et demande de les regrouper, avec le nombre de retours par groupe.'),
    steps: [
      B('Send the messages raw, without categories of your own.',
        "Envoie les messages bruts, sans tes propres catégories."),
      B('Ask for groups by underlying problem, with one quote per group.',
        "Demande des groupes par problème de fond, avec une citation par groupe."),
      B('Check the two smallest groups by hand. That is where the sorting most often goes wrong.',
        "Vérifie à la main les deux plus petits groupes. C'est là que le tri se trompe le plus souvent."),
    ],
    trap: B(
      'Giving the AI your existing categories. Everything will fit in them, even the messages that showed you those categories are wrong.',
      "Donner à l'IA tes catégories existantes. Tout y rentrera, même les messages qui te montraient que ces catégories sont fausses.",
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
        "Un gros groupe repose sur un mot commun évident, donc il est rarement faux. Un groupe de deux messages réunit souvent deux sujets sans rapport qui utilisaient simplement les mêmes mots.",
      ),
    },
    badge: B('Groups by problem', 'Regroupe par problème'),
  },
  {
    id: 'pr-no',
    master: 'writing',
    minutes: 6,
    title: B('Say no in writing, and get it accepted', 'Dis non par écrit, et fais-le accepter'),
    learn: B(
      'You will write a refusal that stays clear even when it is forwarded to other people.',
      "Tu vas écrire un refus qui reste clair même quand il est transféré à d'autres personnes.",
    ),
    act: B('Write the refusal, then ask how it reads to someone who did not follow the thread.',
      "Écris le refus, puis demande comment il se lit pour quelqu'un qui n'a pas suivi l'échange."),
    steps: [
      B('First say what you understood of the problem, in their words.',
        "Dis d'abord ce que tu as compris du problème, avec leurs mots."),
      B('Give one reason, the real one. A list of reasons looks like an excuse.',
        "Donne une seule raison, la vraie. Une liste de raisons ressemble à une excuse."),
      B('Say what could change your answer, and when you will look at the request again.',
        "Dis ce qui pourrait changer ta réponse, et quand tu réexamineras la demande."),
    ],
    trap: B(
      'Answering "not on the roadmap"? With no reason given, the same request comes back next quarter, from someone more senior.',
      "Tu réponds « ce n'est pas prévu » ? Sans raison, la même demande reviendra au trimestre suivant, portée par quelqu'un de plus haut placé.",
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
        'When you say what would change the answer, people wait for that condition instead of arguing. Without one, their only option is to go over your head, and someone will.',
        "Quand tu dis à quelle condition ta réponse changerait, les gens attendent cette condition au lieu de discuter. Sans condition, leur seul recours est d'aller voir plus haut, et quelqu'un le fera.",
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
      "Tu vas décrire ce que fait le produit, au lieu de décrire des écrans.",
    ),
    act: B('Write what the system does in each case, and ask what case is missing.',
      'Écris ce que le système fait dans chaque cas, et demande quel cas manque.'),
    steps: [
      B('One line per case: given this, the system does that.',
        "Une ligne par cas : dans telle situation, le système fait telle chose."),
      B('Ask which cases are not covered by your lines.',
        "Demande quels cas ne sont couverts par aucune de tes lignes."),
      B('Ask which two lines contradict each other. There is usually one pair.',
        "Demande quelles deux lignes se contredisent. Il y a presque toujours une paire."),
    ],
    trap: B(
      'Describing only the screen. You then forget every case: empty list, loading, too many rows, partial access rights.',
      "Décrire seulement l'écran. Tu oublies alors tous les cas : liste vide, chargement, trop de lignes, droits d'accès partiels.",
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
        "Un comportement peut être construit, puis vérifié par quelqu'un qui n'était pas dans la discussion. Une mise en page ou une impression peuvent être livrées exactement comme demandé et rester fausses.",
      ),
    },
    badge: B('Writes behaviour', 'Écrit des comportements'),
  },
  {
    id: 'pr-edges',
    master: 'analysis',
    minutes: 7,
    title: B('Hunt down the edge cases before production', 'Traque les cas limites avant la production'),
    learn: B(
      'You will find the states nobody drew, before your users find them for you.',
      "Tu vas trouver les états que personne n'a dessinés, avant que tes utilisateurs ne les trouvent pour toi.",
    ),
    act: B('Give the AI your spec and ask for every state a user could be in.',
      "Donne à l'IA ta spécification et demande tous les états où un utilisateur peut se trouver."),
    steps: [
      B('Ask for the empty case, the huge case, and the case interrupted halfway.',
        "Demande le cas vide, le cas énorme, et le cas interrompu en cours de route."),
      B('Ask what happens when two people do it at the same time.',
        "Demande ce qui se passe quand deux personnes le font en même temps."),
      B('Decide the answer to each case yourself. An undecided case ends up as a bug, and it will be on you.',
        "Décide toi-même de la réponse à chaque cas. Un cas non décidé finit en bug, et on te le reprochera."),
    ],
    trap: B(
      'Leaving an edge case to be decided during development. The developer will settle it in a few seconds, without knowing what is at stake.',
      "Laisser un cas limite se décider pendant le développement. Le développeur le tranchera en quelques secondes, sans connaître les enjeux.",
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
        'The empty state is the only one every user sees. Yet nobody designs it, because the mock-up is drawn with sample data.',
        "L'état vide est le seul que tous les utilisateurs voient. Pourtant, personne ne le dessine, parce que la maquette est faite avec des données d'exemple.",
      ),
    },
    badge: B('Decides the edges', 'Tranche les cas limites'),
  },
  {
    id: 'pr-mock',
    master: 'tools',
    minutes: 6,
    title: B('Describe a screen in plain words', 'Décris un écran avec de simples mots'),
    learn: B(
      'No more blank page: you will get a first screen to react to.',
      "Fini la page blanche : tu vas obtenir un premier écran auquel réagir.",
    ),
    act: B('Describe the structure, the data and the main action, then ask the AI for a first rough screen.',
      "Décris la structure, les données et l'action principale, puis demande à l'IA une première ébauche d'écran."),
    steps: [
      B('List what is on the page, in order of importance. That order drives the whole design.',
        "Liste ce qu'il y a sur la page, par ordre d'importance. Cet ordre guide tout le design."),
      B('Say the one thing the user came to do. One, not a list of options.',
        "Dis la seule chose que l'utilisateur vient faire. Une seule, pas une liste de possibilités."),
      B('Treat what comes back as a draft to discuss, never as a finished design.',
        "Traite ce qui revient comme un brouillon à discuter, jamais comme un design fini."),
    ],
    trap: B(
      'Shipping the generated screen as is. It is an average of everything the model has seen, so probably the screen your competitors already have.',
      "Livrer tel quel l'écran généré. C'est une moyenne de tout ce que le modèle a vu, donc probablement l'écran que tes concurrents ont déjà.",
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
        'People say far more about a wrong screen than about a blank page. Those reactions are the whole value, and they stop the moment the draft is treated as a decision.',
        "Les gens en disent bien plus devant un écran raté que devant une page blanche. Ces réactions sont tout l'intérêt, et elles s'arrêtent dès que le brouillon est pris pour une décision.",
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
    title: B('Define success before you build', 'Définis la réussite avant de construire'),
    learn: B(
      'You will say, before building, what would count as success.',
      "Tu vas dire, avant de construire, ce qui compterait comme une réussite.",
    ),
    act: B('Write the number and the date that will decide, before a single line of code.',
      "Écris le chiffre et la date qui trancheront, avant d'écrire la moindre ligne de code."),
    steps: [
      B('Pick one number, measurable today, that will move if this works.',
        "Choisis un chiffre, mesurable dès aujourd'hui, qui bougera si ça marche."),
      B('Pick a date to check it, far enough away to give the project time to work.',
        "Choisis une date pour le regarder, assez lointaine pour laisser au projet le temps d'agir."),
      B('Also write what you will do if the number does not move.',
        "Écris aussi ce que tu feras si le chiffre ne bouge pas."),
    ],
    trap: B(
      'Choosing the metric after launch. Something always moved, and you will be tempted to claim that was the goal.',
      "Choisir l'indicateur après le lancement. Quelque chose a toujours bougé, et tu seras tenté de dire que c'était ça, l'objectif.",
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
        "Choisi après coup, un indicateur ne peut que confirmer. Choisi avant, c'est le seul élément du projet qui peut te dire que ça n'a pas marché.",
      ),
    },
    badge: B('Names the number first', 'Nomme le chiffre d\'abord'),
  },
  {
    id: 'pr-notes',
    master: 'writing',
    minutes: 6,
    title: B('Release notes people actually read!', 'Des notes de version qu\'on lit vraiment !'),
    learn: B(
      'You will write what changed for the user, not a technical list of what was shipped.',
      "Tu vas écrire ce qui change pour l'utilisateur, pas la liste technique de ce qui a été livré.",
    ),
    act: B('Take your change list and ask what each line means for someone using it.',
      'Prends ta liste de changements et demande ce que chaque ligne veut dire pour un utilisateur.'),
    steps: [
      B('Start every line with what the reader can now do.',
        "Commence chaque ligne par ce que le lecteur peut désormais faire."),
      B('Drop everything a user would not notice.',
        "Retire tout ce qu'un utilisateur ne remarquerait pas."),
      B('Put the most important change first, on its own, and the rest below it.',
        "Mets le changement le plus important en premier, seul, et le reste en dessous."),
    ],
    trap: B(
      'Publishing the list of tickets? Every line is true, but none of them speaks to the person reading.',
      "Tu publies la liste des tickets ? Chaque ligne est vraie, mais aucune ne parle à la personne qui lit.",
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
        "Le lecteur décide en une demi-seconde si ça le concerne. Seule la nouvelle possibilité répond à cette question. Tout le reste lui donne envie d'arrêter de lire.",
      ),
    },
    badge: B('Writes for the reader', 'Écrit pour le lecteur'),
  },
  {
    id: 'pr-post',
    master: 'analysis',
    minutes: 7,
    title: B('What went wrong, without hunting a culprit', 'Ce qui a raté, sans chercher de coupable'),
    learn: B(
      'You will find what, in the way the team works, made the mistake possible.',
      "Tu vas trouver ce qui, dans l'organisation de l'équipe, a rendu l'erreur possible.",
    ),
    act: B('Write the timeline, then ask what could have prevented the incident.',
      "Écris la chronologie, puis demande ce qui aurait pu empêcher l'incident."),
    steps: [
      B('Write the sequence of events with times, and no names.',
        "Écris la suite des faits avec des heures, et sans noms."),
      B('Ask at which moment the problem could still have been caught.',
        "Demande à quel moment on aurait encore pu repérer le problème."),
      B('Ask why nobody noticed at that moment. That is what needs to change.',
        "Demande pourquoi personne n'a rien vu à ce moment-là. C'est ça qu'il faut changer."),
    ],
    trap: B(
      'Concluding that someone should have been more careful. That is not a change, it is a wish, and the same incident will happen again.',
      "Conclure qu'il aurait fallu être plus vigilant. Ce n'est pas un changement, c'est un souhait, et le même incident se reproduira.",
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
        'A fact about the order of steps can be fixed tomorrow, and the fix holds even when everyone is tired. Care and an extra reviewer both depend on how people feel that day.',
        "Un fait sur l'ordre des étapes se corrige dès demain, et la correction tient même quand tout le monde est fatigué. La vigilance et un relecteur de plus dépendent de la forme des gens ce jour-là.",
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
    title: B('Three minutes of research before your first message', 'Trois minutes de recherche avant ton premier message'),
    learn: B(
      'You will find the fact about your prospect that makes your first sentence personal.',
      "Tu vas trouver le fait sur ton prospect qui rend ta première phrase personnelle.",
    ),
    act: B('Ask the AI what changed recently at this company, and what it implies for them.',
      "Demande à l'IA ce qui a changé récemment chez ce prospect, et ce que ça implique pour lui."),
    steps: [
      B('Ask for facts with a date attached. A fact without a date is only a guess.',
        "Demande des faits datés. Un fait sans date n'est qu'une supposition."),
      B('Ask what each fact would mean for someone in that role.',
        "Demande ce que chaque fait signifierait pour quelqu'un à ce poste."),
      B('Check the one you plan to use. Never cite a source you have not opened yourself.',
        "Vérifie celui que tu comptes utiliser. Ne cite jamais une source que tu n'as pas ouverte toi-même."),
    ],
    trap: B(
      'Quoting a fact the model invented. It is detailed, it sounds right, and the person on the other side knows within one line that you did not check.',
      "Citer un fait inventé par le modèle. Il est détaillé, il sonne juste, et la personne en face sait dès la première ligne que tu n'as pas vérifié.",
    ),
    quiz: {
      q: B('The model gives you a funding round with a date. What now?',
        'Le modèle te donne une levée de fonds avec une date. Et maintenant ?'),
      options: [
        B('Open the source first', "Tu ouvres la source d'abord"),
        B('Use it, the date proves it', "Tu l'emploies, la date le prouve"),
        B('Ask the model to confirm', 'Tu demandes confirmation au modèle'),
      ],
      answer: 0,
      why: B(
        'Invented facts are often the most precise ones, because precision makes them believable. Asking the model again only produces a second invention, just as confident.',
        "Les faits inventés sont souvent les plus précis, car la précision les rend crédibles. Redemander au modèle ne produit qu'une deuxième invention, tout aussi assurée.",
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
      "Tu vas demander une petite chose au lieu de demander un rendez-vous.",
    ),
    act: B('Write it, then cut every sentence that talks about you.',
      'Écris-le, puis coupe chaque phrase qui parle de toi.'),
    steps: [
      B('Open on them, with the fact you checked. One line.',
        "Commence par eux, avec le fait que tu as vérifié. Une ligne."),
      B('Say what you have seen work for someone like them. Two lines.',
        "Dis ce que tu as vu marcher pour quelqu'un comme eux. Deux lignes."),
      B('Ask one question they can answer in five words.',
        "Pose une question à laquelle ils peuvent répondre en cinq mots."),
    ],
    trap: B(
      'Asking for thirty minutes in the first message? It is the biggest thing you could ask for, and you ask before you have earned any trust.',
      "Tu demandes trente minutes dès le premier message ? C'est la plus grosse demande possible, et tu la fais avant d'avoir gagné sa confiance.",
    ),
    quiz: {
      q: B('What should the first message ask for?',
        'Que doit demander le premier message ?'),
      options: [
        B('Thirty minutes next week', 'Trente minutes la semaine prochaine'),
        B('An answer of five words', 'Une réponse de cinq mots'),
        B('A look at your website', "Un coup d'oeil à ton site"),
      ],
      answer: 1,
      why: B(
        'A five-word answer costs nothing and starts a conversation. A meeting costs a slot in the calendar, and nobody gives that to a stranger.',
        "Une réponse de cinq mots ne coûte rien et lance une conversation. Un rendez-vous coûte un créneau dans l'agenda, et personne ne donne ça à un inconnu.",
      ),
    },
    badge: B('Asks something small', 'Demande une petite chose'),
  },
  {
    id: 'sa-follow',
    master: 'writing',
    minutes: 6,
    title: B('Follow-ups that bring something new', 'Des relances qui apportent du neuf'),
    learn: B(
      'You will give them a reason to reply that is not your own need.',
      "Tu vas leur donner une raison de répondre qui n'est pas ton propre besoin.",
    ),
    act: B('Write three follow-ups, each carrying one thing they did not have.',
      "Écris trois relances, portant chacune une chose qu'ils n'avaient pas."),
    steps: [
      B('Forbid the AI any sentence that refers to your previous message.',
        "Interdis à l'IA toute phrase qui fait référence à ton message précédent."),
      B('Each follow-up brings a fact, a customer example, or the answer to an objection.',
        "Chaque relance apporte un fait, un exemple client, ou la réponse à une objection."),
      B('The last follow-up says clearly that you are closing the file, with no reproach.',
        "La dernière relance annonce clairement que tu fermes le dossier, sans reproche."),
    ],
    trap: B(
      'Sending "did you see my message"? You ask them for effort, and you show you have nothing new to say.',
      "Tu envoies « avez-vous vu mon message » ? Tu leur demandes un effort, et tu montres que tu n'as rien de neuf à dire.",
    ),
    quiz: {
      q: B('Why say clearly in the last message that you are closing the file?',
        'Pourquoi annoncer clairement la fermeture du dossier dans la dernière relance ?'),
      options: [
        B('It is more polite', 'C\'est plus poli'),
        B('It saves you time on dead files', 'Cela te fait gagner du temps sur les dossiers morts'),
        B('It often gets the reply', 'Cela obtient souvent la réponse'),
      ],
      answer: 2,
      why: B(
        'Announcing that the file is closing finally creates a deadline. People who could not decide suddenly have a reason to reply, yes or no.',
        "Annoncer la fermeture du dossier crée enfin une échéance. Ceux qui n'arrivaient pas à décider ont soudain une raison de répondre, oui ou non.",
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
    title: B('Five questions that get your client talking', 'Cinq questions qui font parler ton client'),
    learn: B(
      'You will spend the meeting listening to your client instead of presenting your offer.',
      "Tu vas passer le rendez-vous à écouter ton client au lieu de lui présenter ton offre.",
    ),
    act: B('Write five questions whose answers you could not guess in advance.',
      'Écris cinq questions dont tu ne peux pas deviner les réponses à l\'avance.'),
    steps: [
      B('Drop every question you could answer yourself from their website.',
        "Retire toute question à laquelle leur site répond déjà."),
      B('Ask about the last time it happened, not about the general case.',
        "Interroge sur la dernière fois où c'est arrivé, pas sur le cas général."),
      B('Prepare one question for what happens if they do nothing.',
        "Prépare une question sur ce qui se passe s'ils ne font rien."),
    ],
    trap: B(
      'Preparing a demo instead of questions? It answers what nobody asked, and it takes the time you needed to understand what they want.',
      "Tu prépares une démo plutôt que des questions ? Elle répond à ce que personne n'a demandé, et prend le temps qui devait servir à comprendre leur besoin.",
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
        "Une question sur un événement passé précis obtient un récit avec des détails, et les détails sont ce sur quoi tu peux agir. Les questions générales obtiennent la réponse que tout le monde donne.",
      ),
    },
    badge: B('Prepares questions', 'Prépare des questions'),
  },
  {
    id: 'sa-notes',
    master: 'extraction',
    minutes: 6,
    title: B('Your write-up, done the same day', 'Ton compte rendu, bouclé le jour même'),
    learn: B(
      'You will leave a record that someone else could act on.',
      "Tu vas laisser une trace sur laquelle quelqu'un d'autre pourrait agir.",
    ),
    act: B('Dictate your raw notes and ask for the facts, the next step, and what is still uncertain.',
      'Dicte tes notes brutes et demande les faits, la prochaine étape, et ce qui reste incertain.'),
    steps: [
      B('Send your notes as they are, with the hesitations in them.',
        "Envoie tes notes telles quelles, avec les hésitations dedans."),
      B('Ask for three sections: what was said, what was agreed, what is unclear.',
        "Demande trois parties : ce qui a été dit, ce qui a été convenu, ce qui reste flou."),
      B('Read the unclear part first. That is what deserves a follow-up email to the client.',
        "Lis la partie floue en premier. C'est elle qui mérite un courriel de suivi au client."),
    ],
    trap: B(
      'Writing only what was agreed. Without the doubts, the deal looks done, and they come back later as a nasty surprise.',
      "N'écrire que ce qui a été convenu. Sans les doutes, l'affaire semble conclue, et ils reviennent plus tard sous forme de mauvaise surprise.",
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
        "Ce qui a été convenu sera redit au prochain rendez-vous de toute façon. Ce qui reste flou, si personne ne s'en occupe, finira par se régler tout seul, et contre toi.",
      ),
    },
    badge: B('Records what is unclear', 'Note ce qui reste flou'),
  },
  {
    id: 'sa-object',
    master: 'support',
    minutes: 7,
    title: B('Decode the objection before you answer', "Décode l'objection avant d'y répondre"),
    learn: B(
      'Before answering an objection, you will look for what it really hides.',
      "Avant de répondre à une objection, tu vas chercher ce qu'elle cache vraiment.",
    ),
    act: B('Write the objection as they said it, and ask what it could stand for.',
      "Écris l'objection telle qu'ils l'ont dite, et demande ce qu'elle peut vouloir dire."),
    steps: [
      B('Write their exact words. If you rephrase, you already change the meaning.',
        "Écris leurs mots exacts. Si tu reformules, tu changes déjà le sens."),
      B('Ask for three things it could really mean, and how to tell them apart.',
        "Demande trois choses qu'elle peut vraiment vouloir dire, et comment les distinguer."),
      B('Ask the question that tells them apart, before answering anything.',
        "Pose la question qui les distingue, avant de répondre quoi que ce soit."),
    ],
    trap: B(
      'Answering "it is too expensive" with a discount? Sometimes it is really the price. Often, they cannot yet justify the purchase to someone else.',
      "Tu réponds à « c'est trop cher » par une remise ? Parfois, c'est vraiment le prix. Souvent, ils ne savent pas encore justifier l'achat auprès de quelqu'un d'autre.",
    ),
    quiz: {
      q: B('"It is too expensive." What do you do first?',
        "« C'est trop cher. » Que fais-tu d'abord ?"),
      options: [
        B('Offer a discount', 'Proposer une remise'),
        B('Justify the price against the value', 'Justifier le prix face à la valeur'),
        B('Find out what it stands for', 'Chercher ce que ça veut vraiment dire'),
      ],
      answer: 2,
      why: B(
        'A discount answers only one of the three possible meanings, and damages the other two. It shows your price was arbitrary, which makes the purchase harder to defend internally.',
        "Une remise ne répond qu'à un seul des trois sens possibles, et abîme les deux autres. Elle montre que ton prix était arbitraire, ce qui rend l'achat plus dur à défendre en interne.",
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
    title: B('The proposal that fits on one page!', 'La proposition qui tient en une page !'),
    learn: B(
      'You will write a proposal that stays clear even when it is forwarded to someone else.',
      "Tu vas écrire une proposition qui reste claire même quand elle est transférée à quelqu'un d'autre.",
    ),
    act: B('Write it for the person who was not in the meeting.',
      "Écris-la pour la personne qui n'était pas au rendez-vous."),
    steps: [
      B('Open on their problem, in their words, with their number in it.',
        "Commence par leur problème, avec leurs mots et leur chiffre."),
      B('One paragraph on what you will do, one on what it costs.',
        "Un paragraphe sur ce que tu feras, un sur ce que ça coûte."),
      B('End with the first step and its date, not with a sign-off.',
        "Termine par la première étape et sa date, pas par une formule de politesse."),
    ],
    trap: B(
      'Sending twelve pages to look serious? The decision-maker reads only the first paragraph. If their problem is not there, they think you did not understand.',
      "Tu envoies douze pages pour paraître sérieux ? Celui qui décide ne lit que le premier paragraphe. S'il n'y trouve pas son problème, il pense que tu n'as pas compris.",
    ),
    quiz: {
      q: B('Who is the proposal written for?',
        'Pour qui la proposition est-elle écrite ?'),
      options: [
        B('The one who was not there', "La personne qui n'était pas là"),
        B('The person you met', 'La personne que tu as rencontrée'),
        B('Their procurement team, who will read it', 'Leur service achats, qui la lira'),
      ],
      answer: 0,
      why: B(
        'The person you met already agrees, and they will have to defend this without you. The document is their argument, not yours.',
        "La personne rencontrée est déjà d'accord, et elle devra défendre ta proposition sans toi. Le document est son argumentaire, pas le tien.",
      ),
    },
    badge: B('Writes to be forwarded', 'Écrit pour être transféré'),
  },
  {
    id: 'sa-price',
    master: 'support',
    minutes: 6,
    title: B('Say your price without flinching', 'Annonce ton prix sans trembler'),
    learn: B(
      'You will give the number early and let it be discussed.',
      "Tu vas donner le chiffre tôt et le laisser se discuter.",
    ),
    act: B('Say the price in the first half of the conversation, then stop talking.',
      "Dis le prix dans la première moitié de l'entretien, puis tais-toi."),
    steps: [
      B('Say the number and the unit (per month, per user), then stop.',
        "Dis le chiffre et l'unité (par mois, par utilisateur), puis arrête de parler."),
      B('Let the pause last. The client should be the next one to speak.',
        "Laisse la pause durer. C'est au client de parler en premier."),
      B('If they object, go back to what it replaces, not to the number.',
        "S'ils objectent, reviens à ce que ça remplace, pas au chiffre."),
    ],
    trap: B(
      'Justifying the price right away. It shows you expect an objection, so the client raises it, and you end up defending yourself.',
      "Justifier le prix dans la foulée. Ça montre que tu attends une objection, alors le client la formule, et tu te retrouves à te défendre.",
    ),
    quiz: {
      q: B('You said the number. What comes next?',
        "Tu as dit le chiffre. Qu'est-ce qui vient ensuite ?"),
      options: [
        B('The reason it is worth it', 'La raison pour laquelle il le vaut'),
        B('Silence', 'Le silence'),
        B('A cheaper option', 'Une option moins chère'),
      ],
      answer: 1,
      why: B(
        'Anything you say after the price sounds like an apology. Their first reaction is the information you came for. If you talk over it, you lose it.',
        "Tout ce que tu dis après le prix sonne comme une excuse. Leur première réaction est l'information que tu es venu chercher. Si tu parles par-dessus, tu la perds.",
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
      "Tu vas aider le client à bien démarrer, au lieu de simplement transmettre son dossier.",
    ),
    act: B('Write the first thirty days as three dates with a name on each.',
      'Écris les trente premiers jours en trois dates avec un nom sur chacune.'),
    steps: [
      B('Name what they must have done by day seven. One thing.',
        "Nomme ce qu'ils doivent avoir fait au septième jour. Une chose."),
      B('Name who does it on their side, by name, not by team.',
        "Nomme qui le fait chez eux, par son nom, pas par son service."),
      B('Book the day-thirty check-in now, while the client is still motivated.',
        "Planifie dès maintenant le point du trentième jour, tant que le client est motivé."),
    ],
    trap: B(
      'Treating the sale as finished at signature? The renewal is decided in the first month, by whether anything really changed for the client.',
      "Tu considères la vente finie à la signature ? Le renouvellement se décide pendant le premier mois, selon que quelque chose a vraiment changé pour le client.",
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
        "À l'échange de renouvellement, la réponse existe déjà et on ne fait que te l'annoncer. Le mois qui suit la signature est le dernier moment où tu peux encore la changer.",
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
    title: B('Finally empty your inbox!', 'Vide enfin ta boîte de réception !'),
    learn: B(
      'Inbox overflowing? You will sort by what each message asks of you, not by who sent it.',
      "Ta boîte déborde ? Tu vas trier selon ce que chaque message te demande, pas selon qui l'envoie.",
    ),
    act: B('Paste thirty subject lines and ask what each one actually requires.',
      'Colle trente objets de messages et demande ce que chacun exige vraiment.'),
    steps: [
      B('Set up four piles: answer, do, wait for someone, or nothing to do.',
        "Prévois quatre tas : répondre, faire, attendre quelqu'un, ou rien à faire."),
      B('Ask the AI to put each message in a pile, with the action to take in four words.',
        "Demande à l'IA de ranger chaque message dans un tas, avec l'action à faire en quatre mots."),
      B('Start with the "nothing to do" pile: delete or archive it.',
        "Commence par le tas « rien à faire » : supprime-le ou archive-le."),
    ],
    trap: B(
      'Sorting by sender. Importance comes from the request, not the person. And sorting by name always keeps the same people at the top.',
      "Trier par expéditeur. L'importance vient de la demande, pas de la personne. Et trier par nom laisse toujours les mêmes personnes en haut de la liste.",
    ),
    quiz: {
      q: B('Which pile do you clear first?',
        'Quel tas traites-tu en premier ?'),
      options: [
        B('The ones needing nothing', 'Ceux qui ne demandent rien'),
        B('The ones needing an answer', 'Ceux qui demandent une réponse'),
        B('The ones from your manager', 'Ceux de ton responsable'),
      ],
      answer: 0,
      why: B(
        'Clearing what needs nothing takes seconds and removes most of the volume. What remains is a list you can face calmly, and that is the whole point.',
        "Vider ce qui ne demande rien prend quelques secondes et retire l'essentiel du volume. Ce qui reste est une liste que tu peux regarder sereinement, et c'est tout l'objectif.",
      ),
    },
    badge: B('Sorts by request', 'Trie par demande'),
  },
  {
    id: 'as-agenda',
    master: 'planning',
    minutes: 6,
    title: B('An agenda that forces decisions', 'Un ordre du jour qui fait décider'),
    learn: B(
      'You will write an agenda where each line is a decision to make.',
      "Tu vas écrire un ordre du jour où chaque ligne est une décision à prendre.",
    ),
    act: B('Turn the list of topics into a list of questions to be settled.',
      'Transforme la liste des sujets en liste de questions à trancher.'),
    steps: [
      B('Each line is a question, with the name of who decides and the time planned in minutes.',
        "Chaque ligne est une question, avec le nom de qui décide et le temps prévu en minutes."),
      B('Anything that needs no decision can be sent in writing, without a meeting.',
        "Tout ce qui n'appelle pas de décision peut être envoyé par écrit, sans réunion."),
      B('Send it the day before. An agenda discovered in the meeting is useless.',
        "Envoie-le la veille. Un ordre du jour découvert en réunion ne sert à rien."),
    ],
    trap: B(
      'Listing topics? A topic has no end, so the meeting ends when the hour does, and the last topic is never reached.',
      "Tu listes des sujets ? Un sujet n'a pas de fin, donc la réunion s'arrête quand l'heure est passée, et le dernier sujet n'est jamais abordé.",
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
        'A question has an end: it is settled or it is not. A topic can take up any amount of time, and it always eats the time the next line needed.',
        "Une question a une fin : elle est tranchée ou non. Un sujet peut prendre un temps infini, et il mange toujours le temps dont la ligne suivante avait besoin.",
      ),
    },
    badge: B('Turns topics into decisions', 'Transforme les sujets en décisions'),
  },
  {
    id: 'as-minutes',
    master: 'extraction',
    minutes: 6,
    title: B('Leave the meeting with the record ready', 'Sors de réunion avec le compte rendu prêt'),
    learn: B(
      'You will leave the room with the record already written.',
      "Tu vas quitter la salle avec le compte rendu déjà fait.",
    ),
    act: B('Note only decisions and owners during the meeting, then expand after.',
      'Ne note que les décisions et les responsables pendant la réunion, puis développe après.'),
    steps: [
      B('During the meeting, write only the decisions and who owns each one. Nothing else.',
        "Pendant la réunion, n'écris que les décisions et qui s'en charge. Rien d'autre."),
      B('Read the decisions out loud before the end. That is the moment to correct them.',
        "Relis les décisions à voix haute avant la fin. C'est le moment de les corriger."),
      B('Expand afterwards from your notes, never from memory.',
        "Développe ensuite à partir de tes notes, jamais de mémoire."),
    ],
    trap: B(
      'Writing everything that is said. You stop listening, and the four real decisions get lost in an hour of talk.',
      "Écrire tout ce qui se dit. Tu cesses d'écouter, et les quatre vraies décisions se perdent dans une heure de discussion.",
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
        "Tout le monde est là et s'en souvient encore. Une correction prend dix secondes sur place. Par courriel, elle demande un long échange, et à la réunion suivante elle peut coûter la décision.",
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
    title: B('Pull the facts out of a pile of documents', "Extrais les faits d'une pile de documents"),
    learn: B(
      'You will pull the same information out of documents that look nothing alike.',
      "Tu vas extraire les mêmes informations de documents qui ne se ressemblent pas du tout.",
    ),
    act: B('List the fields to extract first, then apply them to ten documents.',
      "Liste d'abord les champs à extraire, puis applique-les à dix documents."),
    steps: [
      B('Write the field list with what to do when a field is absent.',
        "Écris la liste des champs avec ce qu'il faut faire quand un champ manque."),
      B('Demand the word "absent" rather than a plausible guess.',
        "Exige le mot « absent » plutôt qu'une supposition crédible."),
      B('Check three documents by hand before trusting the other two hundred.',
        "Vérifie trois documents à la main avant de croire les deux cents autres."),
    ],
    trap: B(
      'Letting the AI fill in a missing field. A plausible date in an empty field is worse than an empty field, because nobody will ever question it.',
      "Laisser l'IA remplir un champ manquant. Une date crédible dans un champ vide est pire qu'un champ vide, car personne ne la remettra en question.",
    ),
    quiz: {
      q: B('A field is missing from the document. What should the AI return?',
        "Un champ manque dans le document. Qu'est-ce que l'IA doit renvoyer ?"),
      options: [
        B('The most likely value', 'La valeur la plus probable'),
        B('The value from the previous document', 'La valeur du document précédent'),
        B('The word absent', 'Le mot absent'),
      ],
      answer: 2,
      why: B(
        'A written absence can be seen, counted and fixed. A guess enters your table looking exactly like the two hundred values that were really read.',
        "Une absence écrite se voit, se compte et se corrige. Une supposition entre dans ton tableau et ressemble exactement aux deux cents valeurs vraiment lues.",
      ),
    },
    badge: B('Demands "absent" when missing', 'Exige « absent » si ça manque'),
  },
  {
    id: 'as-table',
    master: 'analysis',
    minutes: 6,
    title: B('From mess to clean table', 'Du désordre au tableau propre'),
    learn: B(
      'You will turn free text into columns that can be counted.',
      "Tu vas transformer du texte libre en colonnes qui se comptent.",
    ),
    act: B('Define the columns and the allowed values, then convert twenty rows.',
      'Définis les colonnes et les valeurs permises, puis convertis vingt lignes.'),
    steps: [
      B('List the allowed values for each column. Closed lists, not free text.',
        "Liste les valeurs permises pour chaque colonne. Des listes fermées, pas du texte libre."),
      B('Add one value called other, and read what falls into it.',
        "Ajoute une valeur « autre », et lis ce qui y tombe."),
      B('If many rows land in "other", your list is incomplete. Fix the list, not the rows.',
        "Si beaucoup de lignes tombent dans « autre », ta liste est incomplète. Corrige la liste, pas les lignes."),
    ],
    trap: B(
      'Letting each row invent its own label. You end up with forty spellings of three things and a table that cannot be counted.',
      "Laisser chaque ligne inventer son étiquette. Tu obtiens quarante orthographes de trois choses et un tableau qu'on ne peut pas compter.",
    ),
    quiz: {
      q: B('A quarter of the rows land in "other". What does it mean?',
        'Un quart des lignes tombent dans « autre ». Ça veut dire quoi ?'),
      options: [
        B('Your list of values is wrong', 'Ta liste de valeurs est fausse'),
        B('The data is messy', 'Les données sont sales'),
        B('The model did not understand the task', "Le modèle n'a pas compris la consigne"),
      ],
      answer: 0,
      why: B(
        'A large "other" is the most honest signal you get. It shows a real category exists that you did not name. Renaming rows one by one hides the problem instead of fixing it.',
        "Un gros « autre » est le signal le plus honnête que tu aies. Il montre qu'une vraie catégorie existe et que tu ne l'as pas nommée. Renommer les lignes une à une cache le problème au lieu de le régler.",
      ),
    },
    badge: B('Uses closed lists', 'Utilise des listes fermées'),
  },
  {
    id: 'as-template',
    master: 'writing',
    minutes: 6,
    title: B('Stop retyping the same document', 'Arrête de retaper le même document'),
    learn: B(
      'Retyping that document twice a week? You will build a template that holds what never changes.',
      "Tu retapes ce document deux fois par semaine ? Tu vas bâtir un modèle qui contient ce qui ne change jamais.",
    ),
    act: B('Take three past versions and ask what is identical in all of them.',
      'Prends trois versions passées et demande ce qui est identique dans les trois.'),
    steps: [
      B('The identical parts become the template. You no longer have to retype them.',
        "Les parties identiques deviennent le modèle. Tu n'as plus à les retaper."),
      B('The parts that change become named blanks, each with an example.',
        "Les parties qui changent deviennent des blancs nommés, chacun avec un exemple."),
      B('Always keep one finished example next to the template.',
        "Garde toujours un exemple fini à côté du modèle."),
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
        'People copy what they can see far more reliably than they follow what they have to read. One good example answers a dozen questions that instructions leave open.',
        "Les gens copient ce qu'ils voient bien plus fidèlement qu'ils ne suivent ce qu'ils doivent lire. Un bon exemple répond à une dizaine de questions qu'une notice laisse ouvertes.",
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
      "Tu vas proposer des créneaux au lieu de demander à chacun ses disponibilités.",
    ),
    act: B('Give the constraints and ask for three slots, ranked, with what each costs.',
      'Donne les contraintes et demande trois créneaux classés, avec ce que chacun coûte.'),
    steps: [
      B('State who must be there and who can miss it. That is the real constraint.',
        "Dis qui doit être là et qui peut manquer. C'est la vraie contrainte."),
      B('Ask for three slots, ranked, each with the people it inconveniences.',
        "Demande trois créneaux classés, avec pour chacun les personnes qu'il dérange."),
      B('Send the top one as a decision, with the second as the fallback.',
        "Envoie le premier comme une décision, avec le deuxième en solution de repli."),
    ],
    trap: B(
      'Asking six people for their availability? You get six lists that do not match, and a second round of emails to sort it out.',
      "Tu demandes leurs disponibilités à six personnes ? Tu obtiens six listes qui ne se croisent pas, et un deuxième tour de courriels pour trancher.",
    ),
    quiz: {
      q: B('How do you propose a meeting to six people?',
        'Comment proposes-tu une réunion à six personnes ?'),
      options: [
        B('Propose one slot and a fallback', 'Proposer un créneau et un repli'),
        B('Ask each of them for their availability', 'Demander à chacun ses disponibilités'),
        B('Send a poll with ten slots', 'Envoyer un sondage à dix créneaux'),
      ],
      answer: 0,
      why: B(
        'Every open question multiplies the replies you then have to match up. A decision with one fallback brings at most one objection, and usually none.',
        "Chaque question ouverte multiplie les réponses que tu devras ensuite accorder. Une décision avec une solution de repli entraîne au pire une objection, et souvent aucune.",
      ),
    },
    badge: B('Proposes, not polls', 'Propose au lieu de sonder'),
  },
  {
    id: 'as-voice',
    master: 'writing',
    minutes: 6,
    title: B('Write as someone else, without it showing', "Écris à la place de quelqu'un, sans que ça se voie"),
    learn: B(
      'You will write like the person you work for, without guessing at their style.',
      "Tu vas écrire comme la personne pour qui tu travailles, sans deviner son style.",
    ),
    act: B('Gather five messages they wrote and draw the rules of their style from them before writing.',
      "Réunis cinq messages qu'elle a écrits et tires-en les règles de son style avant d'écrire."),
    steps: [
      B('Use messages they wrote themselves, not ones written for them.',
        "Prends des messages qu'elle a écrits elle-même, pas des messages écrits pour elle."),
      B('Note how they open, how they close, and how long their messages are.',
        "Note comment elle commence ses messages, comment elle les termine, et leur longueur."),
      B('Show them the rules, not the drafts. Rules only need correcting once.',
        "Montre-lui les règles, pas les brouillons. Les règles se corrigent une seule fois."),
    ],
    trap: B(
      'Writing better than they do. The improvement is exactly what gives you away: people who know them notice by the second line.',
      "Écrire mieux qu'elle. C'est justement l'amélioration qui te trahit : ceux qui la connaissent le remarquent dès la deuxième ligne.",
    ),
    quiz: {
      q: B('What do you show them for approval?',
        'Que lui soumets-tu pour validation ?'),
      options: [
        B('The rules of their voice', 'Les règles de son style'),
        B('Each draft, before sending', 'Chaque brouillon, avant envoi'),
        B('A sample of ten messages', 'Un échantillon de dix messages'),
      ],
      answer: 0,
      why: B(
        'Approving drafts one by one never ends and teaches you nothing. Approving the rules is done once, and every message afterwards is already right.',
        "Valider les brouillons un par un ne finit jamais et ne t'apprend rien. Valider les règles se fait une fois, et tous les messages suivants sont déjà justes.",
      ),
    },
    badge: B('Writes faithfully for someone else', "Écrit fidèlement à la place d'un autre"),
  },
  {
    id: 'as-never',
    master: 'watch',
    minutes: 6,
    title: B('What you never hand to a machine', 'Ce que tu ne confies jamais à une machine'),
    learn: B(
      'You will decide in advance what you never give to an AI, before you are short on time.',
      "Tu vas décider à l'avance ce que tu ne donnes jamais à une IA, avant d'être pressé par le temps.",
    ),
    act: B('List the document types you handle and mark those that must never go into an AI tool.',
      "Liste les types de documents que tu manipules et marque ceux qui ne doivent jamais aller dans un outil d'IA."),
    steps: [
      B('Mark anything with someone else\'s personal details in it.',
        "Marque tout ce qui contient les données personnelles de quelqu'un d'autre."),
      B('Mark anything you would not want read by a third party.',
        "Marque tout ce que tu ne voudrais pas voir lu par un tiers."),
      B('For the rest, write down which tool you are allowed to use, and stick to it.',
        "Pour le reste, écris quel outil tu as le droit d'utiliser, et tiens-t'y."),
    ],
    trap: B(
      'Deciding case by case in the moment. It is on a rushed afternoon that you cross the line, and after that you never go back.',
      "Décider au cas par cas sur le moment. C'est un après-midi où tu es pressé que tu franchis la limite, et ensuite tu ne reviens jamais en arrière.",
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
        "Sur le moment, il y a toujours une bonne raison de faire une exception. Seule une limite écrite à l'avance tient bon le jour où tu es débordé.",
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
      "Énonce le vrai problème, regroupe les retours, dis non avec une condition."),
  },
  {
    id: 'pr-spec', track: 'trade', glyph: 'grid', tint: '#1fa563', at: [3, 16], levels: PR_SPEC,
    title: B('Specs that hold up', 'Des spécifications solides'),
    blurb: B('Describe behaviour, decide the edge cases, draft a screen to get reactions.',
      "Décris des comportements, décide des cas limites, ébauche un écran pour faire réagir."),
  },
  {
    id: 'pr-ship', track: 'trade', glyph: 'delta', tint: '#1fa563', at: [5, 16], levels: PR_SHIP,
    title: B('Ship, and learn!', 'Livre, et apprends !'),
    blurb: B('Define success first, write for the reader, look for the cause rather than a culprit.',
      "Définis la réussite d'abord, écris pour le lecteur, cherche la cause plutôt qu'un coupable."),
  },
  {
    id: 'sa-prospect', track: 'trade', glyph: 'target', tint: '#f59e0b', at: [1, 18], levels: SA_PROSPECT,
    title: B('Prospect without making things up', 'Prospecte sans rien inventer'),
    blurb: B('Check before citing, ask for something small, close the file cleanly.',
      "Vérifie avant de citer, demande peu, ferme le dossier proprement."),
  },
  {
    id: 'sa-meeting', track: 'trade', glyph: 'ring', tint: '#f59e0b', at: [3, 18], levels: SA_MEET,
    title: B('The meeting where you listen', "L'entretien où tu écoutes"),
    blurb: B('Prepare your questions, note what is still unclear, understand the objection before answering.',
      "Prépare tes questions, note ce qui reste flou, comprends l'objection avant d'y répondre."),
  },
  {
    id: 'sa-close', track: 'trade', glyph: 'diamond', tint: '#f59e0b', at: [5, 18], levels: SA_CLOSE,
    title: B('Close, then get the client started', 'Conclus, puis fais démarrer le client'),
    blurb: B('Write to be forwarded, say your price, help the client get started.',
      "Écris pour être transféré, annonce ton prix, aide le client à démarrer."),
  },
  {
    id: 'as-flow', track: 'trade', glyph: 'rows', tint: '#08c2ac', at: [1, 20], levels: AS_FLOW,
    title: B('Master your messages and meetings', 'Maîtrise tes messages et tes réunions'),
    blurb: B('Sort messages by request, write agendas that force decisions, confirm in the meeting.',
      "Trie tes messages par demande, écris des ordres du jour qui font décider, confirme en réunion."),
  },
  {
    id: 'as-docs', track: 'trade', glyph: 'layers', tint: '#08c2ac', at: [3, 20], levels: AS_DOCS,
    title: B('Documents under control', 'Tes documents sous contrôle'),
    blurb: B('Demand "absent" when a field is missing, use closed lists, keep an example.',
      "Exige « absent » quand un champ manque, utilise des listes fermées, garde un exemple."),
  },
  {
    id: 'as-time', track: 'trade', glyph: 'hex', tint: '#08c2ac', at: [5, 20], levels: AS_TIME,
    title: B('Protect other people\'s time', 'Protège le temps des autres'),
    blurb: B('Propose instead of polling, write for someone else, draw the line early.',
      "Propose au lieu de sonder, écris à la place de quelqu'un, trace la limite tôt."),
  },
]

export const TRADES_2: Trade[] = [
  {
    id: 'product',
    label: B('Product manager', 'Chef de produit'),
    who: B('You decide what gets built, and you answer for what does not.',
      "Tu décides ce qui se construit, et tu réponds de ce qui ne se construit pas."),
    glyph: 'grid', tint: '#1fa563',
    cities: ['pr-problem', 'pr-spec', 'pr-ship'],
  },
  {
    id: 'sales',
    label: B('Sales', 'Commercial'),
    who: B('You are judged on what gets signed, and on what happens after.',
      "On te juge sur ce qui est signé, et sur ce qui vient après."),
    glyph: 'diamond', tint: '#f59e0b',
    cities: ['sa-prospect', 'sa-meeting', 'sa-close'],
  },
  {
    id: 'assistant',
    label: B('Executive assistant', 'Assistant de direction'),
    who: B('You manage the messages, the documents, and other people\'s time.',
      "Tu gères les messages, les documents, et le temps des autres."),
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
