// LE COURS « Copywriting et vente avec l'IA », PARTIE B · voir ./types et ./index.
//
// LA PARTIE A comprend le lecteur (voix du client, niveaux de conscience,
// désirs et objections) puis positionne l'offre (proposition de valeur,
// cadres, titres, preuve). Celle-ci écrit ce qui vend (page de vente, e-mails,
// publicités et posts, storytelling) puis affine et mesure (clarté, IA en
// partenaire d'entraînement, éthique et droit, tests).
//
// LE MÊME FIL ROUGE · la Bicyclerie Merle, l'atelier fictif de Claire Merle,
// qui vend des vélos de ville reconditionnés, chacun contrôlé sur une liste
// écrite, réparé et garanti, un forfait d'entretien, et propose un essai
// gratuit à l'atelier. Le tableau de citations et le tableau des objections
// construits dans la partie A servent ici de matière.
//
// CE QUE LE COURS S'INTERDIT. Aucun chiffre de marché, aucun taux « normal »,
// aucun prix, aucun témoignage, aucune citation, aucun article de loi ni
// seuil légal inventé. Les avis apparaissent comme des [CHAMPS] à remplir
// avec de vrais avis, cités avec accord. Les règles juridiques et
// publicitaires sont décrites par leur principe, avec un renvoi aux sources
// officielles nommées (DGCCRF sur economie.gouv.fr, service-public.fr,
// Légifrance, CNIL, aide officielle de chaque plateforme), sans adresse
// inventée.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 3 · ÉCRIRE CE QUI VEND                                       */
/* ================================================================== */

const M3 = 'cw-m3'

const SELL: Level[] = [
  {
    id: 'cw-salespage',
    master: 'planning',
    minutes: 11,
    title: B("The sales page, from top to bottom", "La page de vente de haut en bas"),
    learn: B(
      "You will build a sales page in the order the reader asks their questions, from headline to guarantee.",
      "Vous saurez construire une page de vente dans l'ordre où le lecteur se pose ses questions, du titre à la garantie.",
    ),
    act: B("Outline the Merle bike sales page section by section, then have the AI critique the outline.",
      "Bâtissez le plan de la page de vente des vélos Merle, section par section, puis faites-le critiquer par l'IA."),
    steps: [
      B("List the reader's questions in order: what is it, is it for me, why believe it, how much, what if it fails?",
        "Listez les questions du lecteur dans l'ordre : de quoi s'agit-il, pour qui, pourquoi y croire, combien, et si ça ne va pas ?"),
      B("Give each question a section: promise, problem, offer, proof, price, guarantee, FAQ, call to action.",
        "Attribuez une section à chaque question : promesse, problème, offre, preuve, prix, garantie, FAQ, appel à l'action."),
      B("Ask the AI for an outline, not copy, and correct it with your quote and objection tables.",
        "Demandez à l'IA un plan, pas un texte, et corrigez-le avec vos tableaux de citations et d'objections."),
      B("Reread the page through its section headings alone: they must tell the offer on their own.",
        "Relisez la page en ne lisant que les titres de section : ils doivent raconter l'offre à eux seuls."),
    ],
    trap: B(
      "Writing the page in the order you think about the offer (story first, details later) instead of the order in which the reader doubts.",
      "Écrire la page dans l'ordre où l'on pense à l'offre (l'histoire, puis les détails) au lieu de l'ordre dans lequel le lecteur doute.",
    ),
    quiz: {
      q: B("On the Merle page, many visitors leave at the price section. What do you check first?",
        "Sur la page Merle, beaucoup de visiteurs partent au niveau du prix. Que vérifiez-vous d'abord ?"),
      options: [
        B("That the price is printed larger so it is seen without effort", "Que le prix est écrit en plus gros, pour être vu sans effort"),
        B("That value and proof come before the price, answering doubts", "Que la valeur et la preuve précèdent le prix et lèvent les doutes"),
        B("That the page is shorter, so the price arrives much earlier", "Que la page est plus courte, pour que le prix arrive plus tôt"),
      ],
      answer: 1,
      why: B(
        "Leaving at the price often means it arrived before the value was established. Check the order first: benefits, proof and answers to objections before the amount.",
        "Un départ au prix signale souvent un prix arrivé avant que la valeur soit établie. Vérifiez d'abord l'ordre : bénéfices, preuve et réponse aux objections avant le montant.",
      ),
    },
    badge: B("Builds the page in the reader's order", "Construit la page dans l'ordre du lecteur"),
  },
  {
    id: 'cw-emails',
    master: 'orchestration',
    minutes: 10,
    title: B("Emails and sequences", "Les e-mails et les séquences"),
    learn: B(
      "You will write a welcome sequence where each email has one job, one link and a reason to be opened.",
      "Vous saurez écrire une séquence d'accueil où chaque e-mail a un seul rôle, un seul lien et une raison d'être ouvert.",
    ),
    act: B("Write the five-email welcome sequence of Bicyclerie Merle, then set it up in your email tool.",
      "Rédigez la séquence de bienvenue de la Bicyclerie Merle en cinq e-mails, puis réglez-la dans votre outil d'e-mailing."),
    steps: [
      B("Set the job of each email: welcome, teach, prove, answer an objection, offer.",
        "Fixez le rôle de chaque e-mail : accueillir, apprendre, prouver, répondre à une objection, proposer."),
      B("Write the subject and first line together: that is what shows in the inbox.",
        "Écrivez l'objet et la première ligne ensemble : c'est ce qui se lit dans la boîte de réception."),
      B("Keep one call to action per email, and a recognisable sender: a person, not a no-reply address.",
        "Gardez un seul appel à l'action par e-mail, et un expéditeur reconnaissable : une personne, pas une adresse anonyme."),
      B("Schedule the delays in Brevo, Mailchimp or Klaviyo, and run the sequence on your own address.",
        "Programmez les délais dans Brevo, Mailchimp ou Klaviyo, et testez la séquence sur votre propre adresse."),
    ],
    trap: B(
      "Sending the same promotion five times under five subject lines: the reader unsubscribes before learning to trust you.",
      "Envoyer cinq fois la même promotion sous cinq objets différents : le lecteur se désabonne avant d'avoir appris à vous faire confiance.",
    ),
    quiz: {
      q: B("The third Merle email has three links: blog, shop and Instagram. What do you change?",
        "Le troisième e-mail de Merle contient trois liens : le blog, la boutique et Instagram. Que changez-vous ?"),
      options: [
        B("Nothing: the more links, the more chances the reader clicks", "Rien : plus il y a de liens, plus le lecteur a de chances de cliquer"),
        B("You add a fourth link to the FAQ to clear any remaining doubts", "Vous ajoutez un quatrième lien vers la FAQ pour lever les doutes"),
        B("You keep the one link that serves this email's single job", "Vous gardez le seul lien qui sert le rôle de cet e-mail précis"),
      ],
      answer: 2,
      why: B(
        "Each extra link splits attention and blurs the email's job. One link, tied to one goal, also makes measurement readable: you know what the click means.",
        "Chaque lien ajouté divise l'attention et brouille le rôle de l'e-mail. Un seul lien, aligné sur un seul objectif, rend aussi la mesure lisible : vous savez ce que le clic signifie.",
      ),
    },
    badge: B("Writes sequences, not barrages", "Écrit des séquences, pas des rafales"),
  },
  {
    id: 'cw-ads',
    master: 'growth',
    minutes: 10,
    title: B("Ads and posts", "Les publicités et les posts"),
    learn: B(
      "You will adapt one message to an ad and to a post, according to format, context and platform rules.",
      "Vous saurez adapter un même message à une publicité et à un post, selon le format, le contexte et les règles de la plateforme.",
    ),
    act: B("Turn the Merle offer into three Meta ads and one post, each ad with a different angle.",
      "Déclinez l'offre Merle en trois publicités Meta et un post, chaque publicité avec un angle différent."),
    steps: [
      B("Study the active ads in your sector in the Meta Ad Library, without copying them.",
        "Étudiez les publicités actives du secteur dans la bibliothèque publicitaire de Meta, sans les copier."),
      B("Pick one angle per ad: a desire, an objection answered, a proof, each for one audience.",
        "Choisissez un angle par annonce : un désir, une objection levée, une preuve, chacun pour un public."),
      B("Write the first line to stop the scroll: concrete, visual, with no empty words.",
        "Écrivez la première ligne pour arrêter le défilement : concrète, visuelle, sans mot vide."),
      B("Check the platform's current advertising policies and the required mentions before publishing.",
        "Vérifiez les règles publicitaires en vigueur de la plateforme et les mentions obligatoires avant publication."),
    ],
    trap: B(
      "Posting the same sentence everywhere: an ad interrupts a stranger, a post talks to followers, and they expect different things.",
      "Publier la même phrase partout : une publicité interrompt un inconnu, un post parle à des abonnés, et ils n'attendent pas la même chose.",
    ),
    quiz: {
      q: B("Your Merle ad opens with \"Discover our cycling universe\". Results are weak. What do you rewrite?",
        "Votre annonce Merle commence par « Découvrez notre univers vélo ». Les résultats sont faibles. Que réécrivez-vous ?"),
      options: [
        B("The first line, so it shows a scene or a concrete benefit", "La première ligne, pour qu'elle montre une scène ou un bénéfice concret"),
        B("Only the visual, because ad text is hardly ever read at all", "Le visuel seulement, car le texte d'une annonce n'est presque pas lu"),
        B("Only the targeting, since the message is right but poorly shown", "Le ciblage seulement, car le message est juste mais mal diffusé"),
      ],
      answer: 0,
      why: B(
        "\"Discover our universe\" says neither for whom, nor what, nor why now. The first line decides whether a stranger keeps reading; it must carry an image or a precise benefit.",
        "« Découvrez notre univers » ne dit ni pour qui, ni quoi, ni pourquoi maintenant. La première ligne décide si l'inconnu continue de lire ; elle doit porter une image ou un bénéfice précis.",
      ),
    },
    badge: B("Fits the message to the format", "Adapte le message au format"),
  },
  {
    id: 'cw-story',
    master: 'writing',
    minutes: 10,
    title: B("Storytelling that serves the offer", "Le storytelling au service de l'offre"),
    learn: B(
      "You will tell a true story that moves the reader toward the offer, instead of talking about yourself.",
      "Vous saurez raconter une histoire vraie qui fait avancer le lecteur vers l'offre, au lieu de parler de vous.",
    ),
    act: B("Write the Merle story in three acts, with the reader as the hero and the offer as the tool.",
      "Écrivez l'histoire de Merle en trois temps, avec le lecteur comme héros et l'offre comme outil."),
    steps: [
      B("Choose a real, precise moment: a place, a day, a detail you can check.",
        "Choisissez un moment réel et précis : un lieu, un jour, un détail que vous pouvez vérifier."),
      B("Structure it: situation, tension, change, then the explicit link to what the offer makes possible.",
        "Structurez : situation, tension, changement, puis le lien explicite avec ce que l'offre permet."),
      B("Put the reader at the centre: your story is only a mirror of theirs.",
        "Placez le lecteur au centre : votre histoire n'est qu'un miroir de la sienne."),
      B("Ask the AI to cut everything that does not serve the tension, then read it aloud.",
        "Demandez à l'IA de couper tout ce qui ne sert pas la tension, puis relisez à voix haute."),
    ],
    trap: B(
      "Letting the AI invent a moving anecdote: a made-up story is false proof, and it gets found out.",
      "Laisser l'IA inventer une anecdote émouvante : une histoire fabriquée est une fausse preuve, et elle se découvre.",
    ),
    quiz: {
      q: B("The AI suggests a story where Claire crossed Europe by bike. She never did. What do you do?",
        "L'IA propose une histoire où Claire a traversé l'Europe à vélo. Elle ne l'a jamais fait. Que faites-vous ?"),
      options: [
        B("You keep it: it is storytelling, and readers know that", "Vous la gardez : c'est du storytelling, le lecteur le sait bien"),
        B("You keep it, but change it to a shorter and likelier trip", "Vous la gardez, en la changeant pour un voyage plus court"),
        B("You replace it with a true moment, even a smaller one", "Vous la remplacez par un moment vrai, même plus modeste"),
      ],
      answer: 2,
      why: B(
        "A story presented as lived engages your credibility, and in advertising it can be a misleading practice. A true, modest moment told precisely convinces better than a legend.",
        "Une histoire présentée comme vécue engage votre crédibilité, et en publicité elle peut constituer une pratique trompeuse. Un moment vrai et modeste, raconté avec précision, convainc mieux qu'une légende.",
      ),
    },
    badge: B("Tells true stories that serve the reader", "Raconte vrai, au service du lecteur"),
  },
]

const SELL_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M3, 'cw-salespage')]: {
    why: [
      B("A reader keeps moving down a sales page only while it answers the question they are asking at that moment. Those questions come in a fairly stable order: what is it, is it for me, why believe you, how much, and what happens if it does not suit me. A page that follows that order reads without effort; a page that shuffles it makes the reader search, and searching makes them leave.",
        "Un lecteur n'avance dans une page de vente que tant qu'elle répond à la question qu'il se pose à cet instant. Ces questions arrivent dans un ordre assez stable : de quoi s'agit-il, est-ce pour moi, pourquoi vous croire, combien, et si cela ne me convient pas. Une page qui suit cet ordre se lit sans effort ; une page qui le bouscule oblige à chercher, et chercher fait partir."),
      B("So each section has one job. The headline promises a precise result to a precise reader. The problem section shows you understand their situation, in their words. The offer says exactly what they get, proof makes it believable. Price comes once value is established, the guarantee removes the risk, the FAQ handles remaining objections, and the call to action returns at each stage.",
        "Chaque section a donc un rôle, et un seul. Le titre promet un résultat précis à un lecteur précis. Le problème montre que vous comprenez sa situation, avec ses mots. L'offre dit exactement ce qu'il reçoit, la preuve la rend croyable. Le prix arrive quand la valeur est établie, la garantie retire le risque, la FAQ traite les objections restantes, et l'appel à l'action revient à chaque palier."),
      B("AI is useful here as an architect, not as a pen. Asked for the whole page at once, it produces smooth, generic copy. Asked for the outline first, it gives you something you can correct in a minute with your quote table, your real proof and your limits. Then you write section by section, giving each time the section's job and the true material to use.",
        "L'IA est utile ici comme architecte, pas comme plume. Demandée d'emblée, la page entière sort lisse et générique. Demandé d'abord, le plan se corrige en une minute avec votre tableau de citations, vos preuves réelles et vos limites. On rédige ensuite section par section, en donnant chaque fois le rôle de la section et la matière vraie à utiliser."),
    ],
    example: {
      context: B("Claire Merle wants a sales page for the refurbished bikes of her fictional workshop. She asks for the whole page at once and gets smooth copy with no clear guarantee and no price.",
        "Claire Merle veut une page de vente pour les vélos reconditionnés de son atelier fictif. Elle demande la page entière d'un coup et obtient un texte lisse, sans garantie claire ni prix."),
      before: B("Write a sales page for my refurbished bikes. Make it convincing and professional.",
        "Écris une page de vente pour mes vélos reconditionnés. Rends-la convaincante et professionnelle."),
      after: B("You are a sales page writer. Do not write the copy yet: first propose an outline.\nOffer: refurbished city bikes from Bicyclerie Merle, each checked on a written check list, repaired and guaranteed; a free test ride at the workshop.\nReader: commutes in town, wants a reliable bike without paying for a new one, fears a used bike that breaks down.\nTheir words and objections: [MY QUOTE TABLE AND OBJECTION TABLE].\nProof available: the check list given with each bike, [REAL WARRANTY TERMS], [REAL REVIEWS, QUOTED WITH CONSENT].\nFor each section (headline, problem, offer, proof, price, guarantee, FAQ, call to action): the reader question it answers and the material to use.\nFlag any section for which proof is missing.",
        "Tu es rédacteur de pages de vente. N'écris pas encore le texte : propose d'abord un plan.\nOffre : les vélos de ville reconditionnés de la Bicyclerie Merle, chacun contrôlé sur une liste écrite, réparé et garanti ; un essai gratuit à l'atelier.\nLecteur : se déplace en ville, veut un vélo fiable sans payer le neuf, craint un vélo d'occasion qui tombe en panne.\nSes mots et ses objections : [MON TABLEAU DE CITATIONS ET MON TABLEAU DES OBJECTIONS].\nPreuves disponibles : la liste de contrôle remise avec chaque vélo, [CONDITIONS RÉELLES DE LA GARANTIE], [AVIS RÉELS, CITÉS AVEC ACCORD].\nPour chaque section (titre, problème, offre, preuve, prix, garantie, FAQ, appel à l'action) : la question du lecteur à laquelle elle répond, et la matière à utiliser.\nSignale toute section pour laquelle une preuve manque."),
      takeaway: B("The second prompt asks for an outline, gives the exact offer, the reader's words and the only real proof. Claire fixes the order in a minute, sees that the guarantee lacks its terms, then writes section by section.",
        "Le second prompt demande un plan, donne l'offre exacte, les mots du lecteur et les seules preuves réelles. Claire corrige l'ordre en une minute, voit que la garantie manque de conditions, puis rédige section par section."),
    },
    exercise: {
      goal: B("The full outline of your sales page, one section per reader question, with the real material of each and the list of missing proof.",
        "Le plan complet de votre page de vente, une section par question du lecteur, avec la matière réelle de chacune et la liste des preuves qui manquent."),
      prompt: B("You are a sales page writer. Do not write yet: propose an outline.\nOffer: [WHAT THE CUSTOMER GETS, EXACTLY].\nReader: [WHO THEY ARE, WHAT THEY WANT, WHAT THEY FEAR].\nTheir words: [TWO OR THREE REAL QUOTES].\nProof I have: [REAL REVIEWS, CHECKABLE FACTS, GUARANTEE TERMS].\nPrice and terms: [PRICE, COMMITMENT, RETURNS].\nFor each section, top to bottom: the reader question it answers, its section heading, the material to use.\nDo not invent any proof: flag every place where one is missing.",
        "Tu es rédacteur de pages de vente. Ne rédige pas encore : propose un plan.\nOffre : [CE QUE LE CLIENT REÇOIT, EXACTEMENT].\nLecteur : [QUI IL EST, CE QU'IL VEUT, CE QU'IL CRAINT].\nSes mots : [DEUX OU TROIS CITATIONS RÉELLES].\nPreuves dont je dispose : [AVIS RÉELS, FAITS VÉRIFIABLES, CONDITIONS DE GARANTIE].\nPrix et conditions : [PRIX, ENGAGEMENT, RETOURS].\nPour chaque section, de haut en bas : la question du lecteur à laquelle elle répond, son titre de section, la matière à utiliser.\nN'invente aucune preuve : signale chaque endroit où il en manque une."),
      check: [
        B("Each section answers a reader question you can name", "Chaque section répond à une question du lecteur que vous savez nommer"),
        B("The price comes after the offer and the proof, not before", "Le prix arrive après l'offre et la preuve, pas avant"),
        B("No proof in the outline is invented: each exists or is flagged missing", "Aucune preuve du plan n'est inventée : chacune existe, ou est signalée manquante"),
        B("The section headings alone are enough to understand the offer", "Les titres de section suffisent à eux seuls à comprendre l'offre"),
      ],
      bonus: B("Open three sales pages you find successful and note the order of their sections. Compare with your outline: where the order differs, ask which reader question each one handles first, and why.",
        "Ouvrez trois pages de vente que vous trouvez réussies et notez l'ordre de leurs sections. Comparez avec votre plan : là où l'ordre diffère, demandez-vous quelle question du lecteur chacune traite en premier, et pourquoi."),
    },
    more: [
      { q: B("Why ask the AI for an outline before having it write the sales page?",
          "Pourquoi demander un plan à l'IA avant de lui faire rédiger la page de vente ?"),
        options: [
          B("Because an outline is quick to correct with your real proof", "Parce qu'un plan se corrige vite avec vos vraies preuves et vos citations"),
          B("Because the AI cannot write more than a few paragraphs in one go", "Parce que l'IA ne sait pas écrire plus de quelques paragraphes d'un coup"),
          B("Because the outline is enough: the page then goes live as proposed", "Parce que le plan suffit : la page se publie ensuite telle que proposée"),
        ],
        answer: 0,
        why: B("Fixing the order and material of an outline takes a minute. Fixing a whole smooth, generic page often means starting over; and the outline reveals missing proof early.",
          "Corriger l'ordre et la matière d'un plan prend une minute. Corriger une page entière, lisse et générique, oblige souvent à tout reprendre ; et le plan révèle tôt les preuves qui manquent.") },
      { q: B("On the Merle page, where should the warranty terms go?",
          "Sur la page Merle, où placer les conditions de la garantie ?"),
        options: [
          B("At the very bottom, after the FAQ, so as not to distract", "Tout en bas, après la FAQ, pour ne pas distraire le lecteur"),
          B("Near the price and the call to action, where doubt arises", "Près du prix et de l'appel à l'action, là où naît le doute"),
          B("Nowhere: a guarantee makes the reader think the bike is risky", "Nulle part : une garantie fait croire que le vélo est risqué"),
        ],
        answer: 1,
        why: B("Risk is felt at the moment of committing, so near the price and the call to action. A guarantee placed there answers the doubt as it appears; at the bottom, it comes too late.",
          "Le risque se ressent au moment de s'engager, donc près du prix et de l'appel à l'action. Une garantie placée là répond au doute à l'instant où il apparaît ; reléguée en bas, elle arrive trop tard.") },
    ],
  },

  [enrichKey(M3, 'cw-emails')]: {
    why: [
      B("An email is played twice. In the inbox, the sender, the subject and the first line decide whether it is opened; once opened, its body decides whether the link is clicked. So you write the subject and the first line together, as one promise, and the sender is a recognisable person rather than an anonymous address.",
        "Un e-mail se joue deux fois. Dans la boîte de réception, l'expéditeur, l'objet et la première ligne décident s'il est ouvert ; une fois ouvert, son contenu décide si le lien est cliqué. On écrit donc l'objet et la première ligne ensemble, comme une seule promesse, et l'expéditeur est une personne reconnaissable plutôt qu'une adresse anonyme."),
      B("A sequence is a series of emails sent automatically after a trigger, such as a sign-up. Its strength comes from splitting the jobs: welcome and deliver what was promised, teach something useful, prove, answer an objection, then offer. Each email does one thing; trust is built from one email to the next, not in a single one.",
        "Une séquence est une suite d'e-mails envoyés automatiquement après un déclencheur, par exemple une inscription. Sa force vient de la répartition des rôles : accueillir et livrer ce qui était promis, apprendre quelque chose d'utile, prouver, lever une objection, puis proposer. Chaque e-mail fait une chose ; la confiance se construit d'un e-mail à l'autre, pas dans un seul."),
      B("Measurement has changed: some mail apps load emails in advance to protect privacy, which makes open rates unreliable. Judge a sequence by its clicks and by the bookings it brings. Delays and exit conditions are set in the tool (Brevo, Mailchimp, Klaviyo); consent rules are checked on the CNIL website.",
        "La mesure a changé : certaines messageries chargent les e-mails à l'avance pour protéger la vie privée, ce qui rend le taux d'ouverture peu fiable. Jugez donc une séquence sur ses clics et sur les réservations qu'elle produit. Délais et conditions de sortie se règlent dans l'outil (Brevo, Mailchimp, Klaviyo) ; les règles de consentement se vérifient sur le site de la CNIL."),
    ],
    example: {
      context: B("Claire collects sign-ups with a free guide on choosing a bike size. She then sends them one promotional email a week, and unsubscribes keep rising.",
        "Claire recueille des inscrits grâce à un guide gratuit pour choisir la taille de son vélo. Elle leur envoie ensuite un e-mail promotionnel par semaine, et les désabonnements montent."),
      before: B("Write an email to sell my refurbished bikes to my list. Add a discount and links to the blog, the shop and Instagram.",
        "Écris un e-mail pour vendre mes vélos reconditionnés à ma liste. Ajoute une réduction et des liens vers le blog, la boutique et Instagram."),
      after: B("You are an email copywriter. Write the welcome sequence for people who downloaded the guide \"Choosing the right size of city bike\".\nFive emails, one job each:\n1. Day 0: deliver the guide, say what comes next.\n2. Day 2: one useful tip from the guide (setting the saddle height).\n3. Day 4: one real proof, the written check list each bike goes through, or [REAL REVIEW, QUOTED WITH CONSENT].\n4. Day 6: the objection \"what if it breaks down?\", answered with [REAL WARRANTY TERMS] and the maintenance plan.\n5. Day 8: the offer, booking a free test ride, one link only.\nFor each: sender (Claire, Bicyclerie Merle), subject, first line, body of 120 words at most, a single call to action.\nNo false urgency, no \"last chance\".",
        "Tu es rédacteur d'e-mails. Écris la séquence de bienvenue des inscrits au guide « Choisir la bonne taille de vélo de ville ».\nCinq e-mails, un rôle chacun :\n1. Jour 0 : livrer le guide, dire ce qui va suivre.\n2. Jour 2 : un conseil utile tiré du guide (régler la hauteur de selle).\n3. Jour 4 : une preuve réelle, la liste de contrôle écrite que suit chaque vélo, ou [AVIS RÉEL, CITÉ AVEC ACCORD].\n4. Jour 6 : l'objection « et s'il tombe en panne ? », avec [CONDITIONS RÉELLES DE LA GARANTIE] et le forfait d'entretien.\n5. Jour 8 : l'offre, réserver un essai gratuit, un seul lien.\nPour chacun : expéditeur (Claire, Bicyclerie Merle), objet, première ligne, corps de 120 mots au plus, un seul appel à l'action.\nAucune fausse urgence, aucun « dernière chance »."),
      takeaway: B("The first prompt asks for an immediate sale with three links. The second spreads the jobs over five emails, offers only in the fifth, and sets subject, first line and call to action for each.",
        "Le premier prompt réclame une vente immédiate avec trois liens. Le second répartit les rôles sur cinq e-mails, ne propose qu'au cinquième, et fixe objet, première ligne et appel à l'action pour chacun."),
    },
    exercise: {
      goal: B("A welcome sequence of four to six emails, one job per email, set up in your tool and tested on your own address.",
        "Une séquence de bienvenue de quatre à six e-mails, un rôle par e-mail, réglée dans votre outil et testée sur votre propre adresse."),
      prompt: B("You are an email copywriter. Write the welcome sequence for people who signed up for [WHAT MADE THEM SIGN UP].\nReader: [WHO THEY ARE, THEIR MAIN DOUBT].\nJobs, in order: welcome, teach [ONE USEFUL TIP], prove [ONE REAL PROOF], answer the objection [THE OBJECTION], offer [THE OFFER].\nDelays between emails: [IN DAYS].\nFor each email: subject, first line, body of [NUMBER] words at most, one call to action.\nSender: [A FIRST NAME AND THE BRAND].\nDo not invent any review or figure; no false urgency.",
        "Tu es rédacteur d'e-mails. Écris la séquence de bienvenue des inscrits à [CE QUI LES A FAIT S'INSCRIRE].\nLecteur : [QUI IL EST, SON PRINCIPAL DOUTE].\nRôles, dans l'ordre : accueillir, apprendre [UN CONSEIL UTILE], prouver [UNE PREUVE RÉELLE], lever l'objection [L'OBJECTION], proposer [L'OFFRE].\nDélais entre les e-mails : [EN JOURS].\nPour chaque e-mail : objet, première ligne, corps de [NOMBRE] mots au plus, un seul appel à l'action.\nExpéditeur : [UN PRÉNOM ET LA MARQUE].\nN'invente aucun avis ni chiffre ; aucune fausse urgence."),
      check: [
        B("Each email has a single job you can state in three words", "Chaque e-mail a un rôle unique, que vous pouvez dire en trois mots"),
        B("Subject and first line make one single promise", "L'objet et la première ligne forment une seule promesse"),
        B("One call to action per email, and the offer comes after something useful", "Un seul appel à l'action par e-mail, et l'offre arrive après quelque chose d'utile"),
        B("The sequence reached your address, in order and on schedule", "La séquence est arrivée sur votre adresse, dans l'ordre et aux délais prévus"),
      ],
      bonus: B("Add an exit condition: a subscriber who books a test ride leaves the sequence before the offer email. Check in your tool's documentation how to set it; being offered what you just accepted damages trust.",
        "Ajoutez une condition de sortie : un inscrit qui réserve un essai quitte la séquence avant l'e-mail d'offre. Vérifiez dans la documentation de votre outil comment la régler ; recevoir l'offre qu'on vient d'accepter abîme la confiance."),
    },
    more: [
      { q: B("Why judge the Merle sequence on clicks and bookings rather than on open rate?",
          "Pourquoi juger la séquence Merle sur les clics et les réservations plutôt que sur les ouvertures ?"),
        options: [
          B("Because no email tool displays the open rate any more", "Parce que plus aucun outil d'e-mailing n'affiche le taux d'ouverture"),
          B("Because opens are unreliable since some mail apps preload emails", "Parce que des messageries préchargent les e-mails et faussent les ouvertures"),
          B("Because an opened email only counts once it is read to the very end", "Parce qu'un e-mail ouvert ne compte que s'il est lu jusqu'en bas"),
        ],
        answer: 1,
        why: B("To protect privacy, some mail apps load emails in advance, which counts opens that never happened. Clicks and bookings reflect a real action by the reader.",
          "Pour protéger la vie privée, certaines messageries chargent les e-mails à l'avance, ce qui compte des ouvertures qui n'en sont pas. Les clics et les réservations traduisent une action réelle du lecteur.") },
      { q: B("The fourth email answers \"what if it breaks down?\". What should it contain first?",
          "Le quatrième e-mail répond à « et s'il tombe en panne ? ». Que doit-il contenir en priorité ?"),
        options: [
          B("A big discount, valid for a few hours, to make them decide fast", "Une forte réduction, valable quelques heures, pour décider vite"),
          B("A detailed account of the workshop's story from its very start", "Un récit détaillé de l'histoire de l'atelier depuis ses débuts"),
          B("The concrete answer: warranty terms and the maintenance plan", "La réponse concrète : conditions de garantie et forfait d'entretien"),
        ],
        answer: 2,
        why: B("An objection is answered by a precise reply to the perceived risk. What reassures here is what the offer really provides, warranty and maintenance, not urgency pushing a decision before the doubt is lifted.",
          "Une objection se lève par une réponse précise au risque perçu. Ce qui rassure ici, c'est ce que l'offre prévoit réellement, garantie et entretien, pas une urgence qui pousse à décider avant que le doute soit levé.") },
    ],
  },

  [enrichKey(M3, 'cw-ads')]: {
    why: [
      B("An ad interrupts someone who was not looking for you. It has an image and a first line to justify that interruption, and the reader judges it in an instant, while scrolling. A post mostly reaches followers who already know you and expect something from you: an idea, a tip, an exchange. The same message cannot be written the same way for both.",
        "Une publicité interrompt quelqu'un qui ne vous cherchait pas. Elle dispose d'une image et d'une première ligne pour justifier cette interruption, et le lecteur la juge en un instant, en faisant défiler. Un post, lui, touche surtout des abonnés qui vous connaissent et attendent quelque chose de vous : une idée, un conseil, un échange. Le même message ne s'écrit donc pas de la même façon dans les deux cas."),
      B("In an ad, the angle matters more than the wording. An angle is the way in: a desire (getting to work without waiting for the tram), an objection answered (a used bike that breaks down), a proof (the written check list). Testing three different angles tells you what moves your reader; testing three wordings of one angle tells you little.",
        "Dans une publicité, l'angle compte plus que la formule. Un angle est la porte d'entrée : un désir (aller au travail sans attendre le tram), une objection levée (le vélo d'occasion qui tombe en panne), une preuve (la liste de contrôle écrite). Tester trois angles différents vous apprend ce qui fait bouger votre lecteur ; tester trois formulations d'un même angle vous apprend peu."),
      B("Each platform has advertising policies (banned content, regulated claims, formats) and they change: read those of Meta, Google or LinkedIn before publishing. The Meta Ad Library shows the active ads of a sector; it helps you understand the angles in use, never to copy a text.",
        "Chaque plateforme a ses règles publicitaires (contenus interdits, allégations encadrées, formats), et elles changent : lisez celles de Meta, de Google ou de LinkedIn avant de publier. La bibliothèque publicitaire de Meta montre les annonces actives d'un secteur ; elle aide à comprendre les angles employés, jamais à recopier un texte."),
    ],
    example: {
      context: B("Claire launches Meta ads for Merle aimed at office workers who take the tram. She wrote a single ad, reused word for word as an Instagram post, and neither works.",
        "Claire lance des publicités Meta pour Merle, visant des employés qui prennent le tram. Elle a écrit une seule annonce, reprise mot pour mot en post Instagram, et aucune des deux ne marche."),
      before: B("Write a Facebook ad for my refurbished bikes. Make it catchy and fun.",
        "Écris une pub Facebook pour mes vélos reconditionnés. Rends-la accrocheuse et fun."),
      after: B("You are an ad copywriter. Write three Meta ads for Bicyclerie Merle, one per angle:\nA. Desire: getting to work on time without waiting for the tram.\nB. Objection: \"a used bike will break down\", answered by the written check list and [REAL WARRANTY TERMS].\nC. Proof: the check list given with each bike.\nReader: office worker who commutes by tram, has never thought of cycling to work.\nFor each: a first line showing a concrete scene (no \"Discover\"), short primary text, a headline, the idea for the visual.\nNo unprovable superlative, no false urgency.\nThen, separately, an Instagram post for existing followers: one maintenance tip, no selling.",
        "Tu es rédacteur publicitaire. Écris trois publicités Meta pour la Bicyclerie Merle, une par angle :\nA. Désir : arriver à l'heure au travail sans attendre le tram.\nB. Objection : « un vélo d'occasion, ça tombe en panne », levée par la liste de contrôle écrite et [CONDITIONS RÉELLES DE LA GARANTIE].\nC. Preuve : la liste de contrôle remise avec chaque vélo.\nLecteur : employé qui va au bureau en tram, n'a jamais pensé au vélo.\nPour chacune : une première ligne qui montre une scène concrète (pas de « Découvrez »), un texte principal court, un titre, l'idée du visuel.\nAucun superlatif invérifiable, aucune fausse urgence.\nPuis, séparément, un post Instagram pour les abonnés : un conseil d'entretien, sans vente."),
      takeaway: B("The first request gives a format and a mood. The second sets three distinct angles, a reader, what each element must do and what is excluded, then separates the followers' post from the ad.",
        "La première demande donne un format et une humeur. La seconde fixe trois angles distincts, un lecteur, ce que chaque élément doit faire et ce qui est exclu, puis sépare le post des abonnés de la publicité."),
    },
    exercise: {
      goal: B("Three ads on three distinct angles and one post for your followers, each tied to what you want to learn about your reader.",
        "Trois publicités sur trois angles distincts et un post pour vos abonnés, chacun relié à ce que vous voulez apprendre de votre lecteur."),
      prompt: B("You are an ad copywriter. Write three [PLATFORM] ads for [OFFER], one per angle:\nA. Desire: [THE RESULT THE READER WANTS].\nB. Objection: [THE MOST FREQUENT OBJECTION] and its answer.\nC. Proof: [ONE REAL, CHECKABLE PROOF].\nReader: [WHO THEY ARE, WHAT THEY ALREADY KNOW ABOUT YOU].\nFor each: a concrete first line, primary text of [NUMBER] words at most, a headline, a visual idea.\nThen one post for my followers about [USEFUL TOPIC], with no selling.\nInvent no figure, no review, no urgency.",
        "Tu es rédacteur publicitaire. Écris trois publicités [PLATEFORME] pour [OFFRE], une par angle :\nA. Désir : [LE RÉSULTAT QUE VEUT LE LECTEUR].\nB. Objection : [L'OBJECTION LA PLUS FRÉQUENTE] et sa réponse.\nC. Preuve : [UNE PREUVE RÉELLE ET VÉRIFIABLE].\nLecteur : [QUI IL EST, CE QU'IL SAIT DÉJÀ DE VOUS].\nPour chacune : une première ligne concrète, un texte principal de [NOMBRE] mots au plus, un titre, une idée de visuel.\nPuis un post pour mes abonnés sur [SUJET UTILE], sans vente.\nN'invente ni chiffre, ni avis, ni urgence."),
      check: [
        B("The three angles really differ, not three phrasings of one idea", "Les trois angles diffèrent vraiment, ce ne sont pas trois tournures d'une idée"),
        B("Each first line shows a scene or a concrete benefit", "Chaque première ligne montre une scène ou un bénéfice concret"),
        B("The post serves your followers and is not a copied ad", "Le post sert vos abonnés et n'est pas une publicité recopiée"),
        B("You reread the current advertising policies of the chosen platform", "Vous avez relu les règles publicitaires actuelles de la plateforme choisie"),
      ],
      bonus: B("Search your sector in the Meta Ad Library and sort ten active ads by angle. Note the angle nobody uses: it may be the one that sets you apart, provided it is true for your offer.",
        "Cherchez votre secteur dans la bibliothèque publicitaire de Meta et classez dix annonces actives par angle. Notez l'angle que personne n'emploie : c'est peut-être celui qui vous distinguera, à condition qu'il soit vrai pour votre offre."),
    },
    more: [
      { q: B("You test three Merle ads that all say \"quality bikes\" in other words. What will you learn?",
          "Vous testez trois annonces Merle qui disent toutes « des vélos de qualité » autrement. Qu'apprendrez-vous ?"),
        options: [
          B("Little: they share one angle, and only the wording changes", "Peu de chose : elles portent le même angle, seule la formule change"),
          B("Which of the three targeted audiences cares most about bikes", "Lequel des trois publics ciblés est le plus sensible au vélo"),
          B("Which text length works best on the platform overall", "Quelle longueur de texte fonctionne le mieux sur la plateforme"),
        ],
        answer: 0,
        why: B("A test teaches something when versions differ on a point that matters. Three wordings of one angle give small gaps that are hard to read; three distinct angles tell you what reaches the reader.",
          "Un test apprend quelque chose quand les versions diffèrent sur un point qui compte. Trois formulations d'un même angle donnent des écarts faibles et difficiles à lire ; trois angles distincts disent ce qui touche le lecteur.") },
      { q: B("What is the Meta Ad Library for in your work?",
          "À quoi sert la bibliothèque publicitaire de Meta dans votre travail ?"),
        options: [
          B("To reuse competitors' copy that seems to be working well", "À reprendre les textes des concurrents qui semblent bien marcher"),
          B("To find out the exact budget and results of every single ad", "À connaître le budget et les résultats exacts de chaque annonce"),
          B("To see a sector's active ads and spot the angles they use", "À voir les annonces actives d'un secteur et repérer leurs angles"),
        ],
        answer: 2,
        why: B("It shows ads currently running, which helps you understand angles and formats. It does not tell you what works, and copying a text would make you speak with someone else's words.",
          "Elle montre les annonces en cours, ce qui aide à comprendre les angles et les formats employés. Elle ne dit pas ce qui fonctionne, et copier un texte vous ferait parler avec les mots d'un autre.") },
    ],
  },

  [enrichKey(M3, 'cw-story')]: {
    why: [
      B("A story holds attention because it sets up a tension: a situation, a problem that disturbs it, a change. The reader wants to know how it resolves. In copywriting, that tension is useful only if its resolution leads to the offer; a fine story that leads nowhere entertains and does not sell.",
        "Une histoire retient l'attention parce qu'elle installe une tension : une situation, un problème qui la dérange, un changement. Le lecteur veut savoir comment elle se résout. En copywriting, cette tension n'est utile que si sa résolution mène vers l'offre ; une belle histoire qui ne conduit nulle part divertit et ne vend pas."),
      B("The hero is not the brand but the reader, or someone like them. The founder's story helps when it mirrors the reader's problem: Claire, too, once bought a used bike that let her down. The offer then becomes the tool that makes the change possible, not the subject of the story.",
        "Le héros n'est pas la marque mais le lecteur, ou quelqu'un qui lui ressemble. L'histoire de la fondatrice sert quand elle reflète le problème du lecteur : Claire, elle aussi, a acheté un jour un vélo d'occasion qui l'a lâchée. L'offre devient alors l'outil qui permet le changement, pas le sujet du récit."),
      B("A story's strength comes from true details: a place, a gesture, a sentence heard. That is why the AI must never invent one. It can help structure, cut and order; the material comes from what really happened. A made-up anecdote presented as lived is false proof, and it gets found out.",
        "La force d'une histoire vient de ses détails vrais : un lieu, un geste, une phrase entendue. C'est pourquoi l'IA ne doit jamais l'inventer. Elle peut aider à structurer, couper, ordonner ; la matière vient de ce qui s'est réellement passé. Une anecdote fabriquée présentée comme vécue est une fausse preuve, et elle se découvre."),
    ],
    example: {
      context: B("Claire wants an \"Our story\" section for the Merle page. She asks the AI for a moving story; the text describes a tour of Europe by bike she never made.",
        "Claire veut une section « Notre histoire » pour la page Merle. Elle demande à l'IA une histoire touchante ; le texte décrit un tour d'Europe à vélo qu'elle n'a jamais fait."),
      before: B("Write a moving story about how Bicyclerie Merle was founded, for my sales page. Make the reader dream.",
        "Écris une histoire émouvante sur la création de la Bicyclerie Merle pour ma page de vente. Fais rêver le lecteur."),
      after: B("Help me structure a true story, without inventing anything. Here are the facts:\n- For years I went to the office by bus.\n- I bought a used bike from a classified ad; it broke down within weeks, and nobody could tell me what had been checked.\n- I learned bike mechanics, then opened the workshop to sell the bikes I would have wanted: checked on a written list, repaired, guaranteed.\nStructure in three parts: situation, tension, change, then one sentence linking to the reader and to the test ride.\n150 words at most. Add no place, no person, no detail that is not in my facts; if a detail is missing, ask me.",
        "Tu m'aides à structurer une histoire vraie, sans rien inventer. Voici les faits :\n- Pendant des années, j'allais au bureau en bus.\n- J'ai acheté un vélo d'occasion sur une petite annonce ; il m'a lâchée en quelques semaines, et personne ne savait me dire ce qui avait été vérifié.\n- J'ai appris la mécanique, puis ouvert l'atelier pour vendre les vélos que j'aurais voulu acheter : contrôlés sur une liste écrite, réparés, garantis.\nStructure en trois temps : situation, tension, changement, puis une phrase qui relie au lecteur et à l'essai gratuit.\n150 mots au plus. N'ajoute aucun lieu, aucune personne, aucun détail absent de mes faits ; si un détail manque, pose-moi la question."),
      takeaway: B("The first prompt asks for emotion and gets fiction. The second supplies the facts, imposes a structure and forbids additions: the story is humbler, but true, and it leads to the reader and the offer.",
        "Le premier prompt demande de l'émotion et obtient de la fiction. Le second fournit les faits, impose une structure et interdit tout ajout : l'histoire est plus modeste, mais vraie, et elle mène au lecteur et à l'offre."),
    },
    exercise: {
      goal: B("A true story of 150 words at most, in three parts, leading from the reader's problem to your offer, with no invented detail.",
        "Une histoire vraie de 150 mots au plus, en trois temps, qui mène du problème du lecteur à votre offre, sans aucun détail inventé."),
      prompt: B("Help me structure a true story, without inventing anything. Here are the facts:\n- Starting situation: [WHAT WAS HAPPENING BEFORE, FOR YOU OR A REAL CUSTOMER].\n- Moment of tension: [THE PRECISE MOMENT, WITH A TRUE PLACE OR DETAIL].\n- Change: [WHAT CHANGED, AND HOW].\nReader: [WHO THEY ARE, THE PROBLEM THEY SHARE WITH THIS STORY].\nOffer: [WHAT THE OFFER MAKES POSSIBLE].\nStructure: situation, tension, change, then one sentence linking to the reader and the offer. [NUMBER] words at most.\nAdd no fact that is not in my list; if one is missing, ask me.",
        "Tu m'aides à structurer une histoire vraie, sans rien inventer. Voici les faits :\n- Situation de départ : [CE QUI SE PASSAIT AVANT, POUR VOUS OU POUR UN CLIENT RÉEL].\n- Moment de tension : [LE MOMENT PRÉCIS, AVEC UN LIEU OU UN DÉTAIL VRAI].\n- Changement : [CE QUI A CHANGÉ, ET COMMENT].\nLecteur : [QUI IL EST, LE PROBLÈME QU'IL PARTAGE AVEC CETTE HISTOIRE].\nOffre : [CE QUE L'OFFRE PERMET].\nStructure : situation, tension, changement, puis une phrase qui relie au lecteur et à l'offre. [NOMBRE] mots au plus.\nN'ajoute aucun fait absent de ma liste ; s'il en manque un, pose-moi la question."),
      check: [
        B("Every detail of the story is true and you can say where it comes from", "Chaque détail de l'histoire est vrai et vous savez dire d'où il vient"),
        B("The tension is visible: a problem the reader recognises", "La tension est visible : un problème que le lecteur reconnaît"),
        B("The last sentence links the story to the reader and to the offer", "La dernière phrase relie l'histoire au lecteur et à ce que l'offre permet"),
        B("If it is a customer's story, you have their consent to tell it", "S'il s'agit de l'histoire d'un client, vous avez son accord pour la raconter"),
      ],
      bonus: B("Read your story aloud to someone who does not know your offer, then ask what they remember. If they quote a true detail and the problem, the story works; if they only remember adjectives, cut them.",
        "Lisez votre histoire à voix haute à quelqu'un qui ne connaît pas votre offre, puis demandez-lui ce qu'il en retient. S'il cite un détail vrai et le problème, l'histoire fonctionne ; s'il ne retient que des adjectifs, coupez-les."),
    },
    more: [
      { q: B("In the Merle story, who should the hero be?",
          "Dans l'histoire de Merle, qui doit être le héros ?"),
        options: [
          B("The founder, because it is her journey that is being told", "La fondatrice, parce que c'est son parcours qui est raconté"),
          B("The reader, whom Claire's story mirrors and leads toward", "Le lecteur, que l'histoire de Claire reflète et vers qui elle mène"),
          B("The bike itself, presented as the main character of the tale", "Le vélo lui-même, présenté comme le personnage principal du récit"),
        ],
        answer: 1,
        why: B("Claire's story helps because it mirrors the reader's problem. The reader recognises themselves and sees the change is possible; the offer is the tool of that change, not the subject.",
          "L'histoire de Claire sert parce qu'elle reflète le problème du lecteur. Celui-ci s'y reconnaît et voit le changement possible ; l'offre est l'outil de ce changement, pas le sujet.") },
      { q: B("The AI adds \"an old Italian mechanic who taught me everything\". He never existed. What do you do?",
          "L'IA ajoute « un vieux mécanicien italien qui m'a tout appris ». Il n'a jamais existé. Que faites-vous ?"),
        options: [
          B("You remove him and go back to the facts, even plainer ones", "Vous le retirez et revenez aux faits, même plus simples"),
          B("You keep him, because he makes the story more memorable", "Vous le gardez, car il rend l'histoire plus mémorable"),
          B("You keep him, but give him a more believable first name and age", "Vous le gardez, avec un prénom et un âge plus crédibles"),
        ],
        answer: 0,
        why: B("An invented character in a story presented as lived is false proof. It engages your credibility and, in a commercial context, can mislead consumers. Plain facts are enough when they are precise.",
          "Un personnage inventé dans une histoire présentée comme vécue est une fausse preuve. Il engage votre crédibilité et, dans un contexte commercial, peut tromper le consommateur. Les faits simples suffisent s'ils sont précis.") },
    ],
  },
}

const SELL_DEEP: Record<string, Deepening> = {
  [deepKey(M3, 'cw-salespage')]: {
    intro: B("A sales page is not a text read from end to end for pleasure: it is a series of answers to the questions a reader asks before paying. This lesson describes those questions in their usual order, the job of each section that answers them, and how to use AI to build the outline before the copy. You will build the sales page of the refurbished bikes of Bicyclerie Merle, using the quote and objection tables from the earlier modules, and you will be able to judge a page by reading its section headings alone.",
      "Une page de vente n'est pas un texte que l'on lit de bout en bout par plaisir : c'est une suite de réponses aux questions qu'un lecteur se pose avant de payer. Ce cours décrit ces questions dans leur ordre habituel, le rôle de chaque section qui y répond, et la manière d'employer l'IA pour bâtir le plan avant le texte. Vous construirez la page de vente des vélos reconditionnés de la Bicyclerie Merle, à partir des tableaux de citations et d'objections des modules précédents, et vous saurez juger une page en ne lisant que ses titres de section."),
    concepts: [
      { term: B("Above the fold", "Au-dessus de la ligne de flottaison"),
        def: B("The part visible without scrolling. It must say what the offer is, for whom, and what result it brings, with a first call to action.",
          "La partie visible sans faire défiler. Elle doit dire ce qu'est l'offre, pour qui, et quel résultat elle apporte, avec un premier appel à l'action.") },
      { term: B("Call to action (CTA)", "Appel à l'action (CTA)"),
        def: B("The precise step asked of the reader, phrased by what they get (\"Book my free test ride\") rather than by the effort (\"Submit\").",
          "Le geste précis demandé au lecteur, formulé par ce qu'il obtient (« Réserver mon essai gratuit ») plutôt que par l'effort (« Valider »).") },
      { term: B("Risk reversal", "Inversion du risque"),
        def: B("What removes the reader's risk of a wrong choice: a guarantee, a trial, an easy return. It only counts if it is true and applied as written.",
          "Ce qui retire au lecteur le risque de se tromper : une garantie, un essai, un retour simple. Elle ne vaut que si elle est vraie et appliquée telle qu'écrite.") },
      { term: B("Objection", "Objection"),
        def: B("A reason not to buy that the reader gives themselves. The FAQ and the proof sections answer it, with the words customers actually use.",
          "Une raison de ne pas acheter que le lecteur se donne. La FAQ et les sections de preuve y répondent, avec les mots qu'emploient réellement les clients.") },
    ],
    walkthrough: {
      title: B("Claire builds the sales page of Merle's refurbished bikes, from outline to first draft.",
        "Claire construit la page de vente des vélos reconditionnés Merle, du plan à la première version."),
      steps: [
        B("She writes down the reader's five questions in order and attaches the quotes from her table. Why: the page will be built on real doubts, not on what she likes to say about her bikes.",
          "Elle note les cinq questions du lecteur dans l'ordre et y rattache les citations de son tableau. Pourquoi : la page sera bâtie sur des doutes réels, pas sur ce qu'elle aime dire de ses vélos."),
        B("She asks the AI for an outline only, giving the exact offer, the reader, their words and the proof available. Why: an outline is fixed in a minute, a whole page has to be rewritten.",
          "Elle demande à l'IA un plan seulement, en donnant l'offre exacte, le lecteur, ses mots et les preuves disponibles. Pourquoi : un plan se corrige en une minute, une page entière se réécrit."),
        B("The outline opens on the workshop's history. She moves it after the offer and opens on the reader's result: a reliable bike for the commute, without paying for a new one. Why: the first screen talks about the reader, not the company.",
          "Le plan ouvre sur l'histoire de l'atelier. Elle la déplace après l'offre et ouvre sur le résultat pour le lecteur : un vélo fiable pour ses trajets, sans payer le neuf. Pourquoi : le premier écran parle du lecteur, pas de l'entreprise."),
        B("The AI flags a thin proof section. Claire places there the written check list given with each bike and two real reviews quoted with consent. Why: true, modest proof beats invented proof.",
          "L'IA signale une section preuve trop mince. Claire y place la liste de contrôle écrite remise avec chaque vélo et deux avis réels, cités avec accord. Pourquoi : une preuve vraie et modeste vaut mieux qu'une preuve inventée."),
        B("She writes section by section, then rereads only the section headings. Why: if they tell the offer on their own, a hurried reader will understand it too.",
          "Elle rédige section par section, puis relit uniquement les titres de section. Pourquoi : s'ils racontent l'offre à eux seuls, le lecteur pressé la comprendra aussi."),
      ],
    },
    mistakes: [
      { wrong: B("Opening the page on the company's history or values.", "Ouvrir la page sur l'histoire de l'entreprise ou sur ses valeurs."),
        fix: B("Open on the result for the reader and what they get. The story belongs further down, where it serves as proof or as a bridge.",
          "Ouvrez sur le résultat pour le lecteur et sur ce qu'il reçoit. L'histoire a sa place plus bas, quand elle sert de preuve ou de lien.") },
      { wrong: B("Hiding the price or the terms at the bottom of the page.", "Cacher le prix ou les conditions en bas de page."),
        fix: B("Show price and terms clearly, after the value and near the call to action. A price that is hard to find breeds distrust.",
          "Affichez le prix et les conditions clairement, après la valeur et près de l'appel à l'action. Un prix difficile à trouver fait naître la méfiance.") },
      { wrong: B("Placing a single call to action, at the very bottom.", "Placer un seul appel à l'action, tout en bas."),
        fix: B("Repeat the same call to action at each point where the reader may be convinced: after the first screen, after the proof, after the FAQ.",
          "Répétez le même appel à l'action à chaque palier où le lecteur peut être convaincu : après le premier écran, après la preuve, après la FAQ.") },
    ],
    recap: [
      B("A sales page answers the reader's questions in the order they ask them.", "Une page de vente répond aux questions du lecteur dans l'ordre où il se les pose."),
      B("Each section has a single job, and its heading must say it.", "Chaque section a un rôle unique, et son titre doit le dire."),
      B("The price comes after value and proof, with the guarantee beside it.", "Le prix arrive après la valeur et la preuve, avec la garantie à côté."),
      B("Ask the AI for the outline before the copy, and correct it with true material.", "On demande à l'IA le plan avant le texte, et on le corrige avec de la matière vraie."),
    ],
    further: B("Take a sales page you admire and reduce it to its section headings. Next to each, write the reader question it answers. You will get a template to compare with yours, without copying a single sentence.",
      "Prenez une page de vente que vous admirez et réduisez-la à ses titres de section. Écrivez, à côté de chacun, la question du lecteur à laquelle il répond. Vous obtiendrez un gabarit à comparer au vôtre, sans copier une seule phrase."),
    more: [
      { q: B("The first screen of the Merle page talks about Claire's passion for mechanics. What is wrong with it?",
          "Le premier écran de la page Merle parle de la passion de Claire pour la mécanique. Que lui reprochez-vous ?"),
        options: [
          B("It is too short: a passion needs at least three paragraphs", "Il est trop court : une passion demande au moins trois paragraphes"),
          B("It lacks a photo of Claire, the only way to convey emotion", "Il manque une photo de Claire, seule capable de transmettre l'émotion"),
          B("It says neither what the reader gets nor whether it is for them", "Il ne dit pas au lecteur ce qu'il obtient, ni s'il est concerné"),
        ],
        answer: 2,
        why: B("The first screen decides whether the reader goes on. It must say what the offer is, for whom, and the expected result; Claire's passion becomes useful proof further down, once the reader feels concerned.",
          "Le premier écran décide si le lecteur continue. Il doit dire ce qu'est l'offre, pour qui, et le résultat attendu ; la passion de Claire devient une preuve utile plus bas, une fois le lecteur concerné.") },
      { q: B("How can you check quickly that a sales page is well structured?",
          "Comment vérifier rapidement qu'une page de vente est bien structurée ?"),
        options: [
          B("By reading only its section headings, which must tell the offer", "En lisant seulement ses titres de section, qui doivent raconter l'offre"),
          B("By counting its words: a good page is under five hundred words", "En comptant ses mots : une bonne page tient en moins de cinq cents mots"),
          B("By having the AI that wrote it give it a mark out of ten", "En la faisant noter sur dix par l'IA qui l'a rédigée"),
        ],
        answer: 0,
        why: B("Section headings are what a hurried reader reads. If they are enough to understand the offer and its order, the structure holds; length, for its part, depends on the offer and the reader.",
          "Les titres de section sont ce que lit un lecteur pressé. S'ils suffisent à comprendre l'offre et son ordre, la structure tient ; la longueur, elle, dépend de l'offre et du lecteur.") },
    ],
  },

  [deepKey(M3, 'cw-emails')]: {
    intro: B("A single email rarely sells; a well-built sequence creates a relationship, then makes an offer. This lesson explains what happens in the inbox (sender, subject, first line), how to split the jobs within a welcome sequence, and how to measure it without trusting open rates. You will write the sequence of Bicyclerie Merle for people who downloaded its bike size guide, and you will be able to set it up in an email tool such as Brevo, Mailchimp or Klaviyo.",
      "Un e-mail isolé vend rarement ; une séquence bien construite installe une relation, puis propose. Ce cours explique ce qui se joue dans la boîte de réception (expéditeur, objet, première ligne), comment répartir les rôles dans une séquence de bienvenue, et comment la mesurer sans se fier aux ouvertures. Vous écrirez la séquence de la Bicyclerie Merle pour les inscrits à son guide des tailles, et vous saurez la régler dans un outil d'e-mailing comme Brevo, Mailchimp ou Klaviyo."),
    concepts: [
      { term: B("Automated sequence", "Séquence automatisée"),
        def: B("A series of emails sent after a trigger (sign-up, purchase, abandoned cart), with set delays. Each subscriber receives it at their own pace.",
          "Une suite d'e-mails envoyés après un déclencheur (inscription, achat, panier abandonné), avec des délais fixés. Chaque inscrit la reçoit à son propre rythme.") },
      { term: B("Subject and preview text", "Objet et texte d'aperçu"),
        def: B("The subject and the line shown next to it in the inbox. Together they form the promise that decides whether the email is opened.",
          "L'objet et la ligne qui s'affiche à côté dans la boîte de réception. Ensemble, ils forment la promesse qui décide de l'ouverture.") },
      { term: B("Exit condition", "Condition de sortie"),
        def: B("The rule that removes a subscriber from a sequence, for instance once they book or buy. It avoids sending an offer to someone who just accepted it.",
          "La règle qui retire un inscrit d'une séquence, par exemple quand il réserve ou achète. Elle évite d'envoyer une offre à quelqu'un qui vient de l'accepter.") },
      { term: B("Consent", "Consentement"),
        def: B("The recipient's agreement to receive your emails. Its rules, which differ for consumers and professionals, are checked with the CNIL.",
          "L'accord du destinataire pour recevoir vos e-mails. Ses règles, différentes pour les particuliers et les professionnels, se vérifient auprès de la CNIL.") },
    ],
    walkthrough: {
      title: B("Claire writes, then sets up, the welcome sequence for people who downloaded the Merle size guide.",
        "Claire écrit, puis règle, la séquence de bienvenue des inscrits au guide des tailles de Merle."),
      steps: [
        B("She defines the trigger, the guide download, and five jobs: deliver, teach, prove, reassure, offer. Why: each email must be summed up by its job, otherwise it carries too much.",
          "Elle définit le déclencheur, le téléchargement du guide, et cinq rôles : livrer, apprendre, prouver, rassurer, proposer. Pourquoi : chaque e-mail doit se résumer à son rôle, sinon il en porte trop."),
        B("She has the AI write three subject and first line pairs per email, then keeps the most precise. Why: that is what subscribers see before opening, and the rest does not exist if they do not open.",
          "Elle fait écrire à l'IA trois couples objet et première ligne par e-mail, puis garde les plus précis. Pourquoi : c'est ce que l'inscrit voit avant d'ouvrir, et le reste n'existe pas s'il n'ouvre pas."),
        B("She rereads each body and removes extra links to keep only one. Why: a single link makes the action obvious and the measurement readable.",
          "Elle relit chaque corps d'e-mail et retire les liens en trop pour n'en garder qu'un. Pourquoi : un seul lien rend l'action évidente et la mesure lisible."),
        B("She sets the sequence in her tool: two-day delays, a sender named after her and the workshop, an exit condition when a test ride is booked. Why: the sequence must stop as soon as the subscriber acts.",
          "Elle règle la séquence dans son outil : délais de deux jours, un expéditeur à son nom et à celui de l'atelier, une condition de sortie dès qu'un essai est réservé. Pourquoi : la séquence doit s'arrêter dès que l'inscrit agit."),
        B("She signs up with a personal address and receives the five emails. Why: it is the only way to see the order, the delays, the display on a phone and the links as subscribers will.",
          "Elle s'inscrit elle-même avec une adresse personnelle et reçoit les cinq e-mails. Pourquoi : c'est le seul moyen de voir l'ordre, les délais, l'affichage sur téléphone et les liens comme l'inscrit les verra."),
      ],
    },
    mistakes: [
      { wrong: B("Making the offer in the first email, before delivering what was promised.", "Proposer l'offre dès le premier e-mail, avant d'avoir livré ce qui était promis."),
        fix: B("Deliver first what prompted the sign-up, then bring something useful. The offer comes when the subscriber has already received value.",
          "Livrez d'abord ce qui a motivé l'inscription, puis apportez quelque chose d'utile. L'offre arrive quand l'inscrit a déjà reçu de la valeur.") },
      { wrong: B("Sending from a no-reply address or a faceless company name.", "Envoyer depuis une adresse qui refuse les réponses, ou sous un nom de société impersonnel."),
        fix: B("Send from an identifiable person of the brand, at an address that accepts replies. Subscribers' replies are also a source of quotes.",
          "Envoyez depuis une personne identifiable de la marque, à une adresse qui accepte les réponses. Les réponses des inscrits sont aussi une source de citations.") },
      { wrong: B("Judging the sequence on its open rate.", "Juger la séquence sur son taux d'ouverture."),
        fix: B("Track the clicks and bookings each email brings. Opens are distorted by the preloading some mail apps perform.",
          "Suivez les clics et les réservations produits par chaque e-mail. Les ouvertures sont faussées par le préchargement de certaines messageries.") },
    ],
    recap: [
      B("Sender, subject and first line decide whether an email is opened.", "L'expéditeur, l'objet et la première ligne décident de l'ouverture."),
      B("In a sequence, each email has one job and one link.", "Dans une séquence, chaque e-mail a un rôle et un seul lien."),
      B("Give before you offer, and let an exit condition stop the sequence at the right time.", "On donne avant de proposer, et une condition de sortie arrête la séquence au bon moment."),
      B("A sequence is judged on clicks and bookings, not on opens.", "Une séquence se juge sur les clics et les réservations, pas sur les ouvertures."),
    ],
    further: B("Write a second, short sequence triggered by an abandoned booking, in three emails: reminder, answer to the most frequent objection, last useful piece of information. Check in your tool's documentation which triggers it offers.",
      "Écrivez une seconde séquence courte, déclenchée par une réservation abandonnée, en trois e-mails : rappel, réponse à l'objection la plus fréquente, dernière information utile. Vérifiez dans la documentation de votre outil quels déclencheurs il propose."),
    more: [
      { q: B("A subscriber books a test ride after the third email of the sequence. What should happen?",
          "Un inscrit réserve un essai après le troisième e-mail de la séquence. Que doit-il se passer ?"),
        options: [
          B("They still get the last two emails, to stay informed", "Il reçoit quand même les deux derniers e-mails, pour rester informé"),
          B("They leave the welcome sequence and get the test ride details", "Il sort de la séquence et reçoit les informations de son essai"),
          B("They are removed from the list, since they need no more convincing", "Il est retiré de la liste, puisqu'il n'a plus besoin d'être convaincu"),
        ],
        answer: 1,
        why: B("An exit condition removes the subscriber who has acted. Sending them the offer they just accepted damages trust; a message about their booking takes over.",
          "Une condition de sortie retire l'inscrit qui a agi. Lui envoyer l'offre qu'il vient d'accepter abîme la confiance ; un message sur sa réservation prend le relais.") },
      { q: B("Which subject line fits the second email best, the one with the saddle height tip?",
          "Quel objet convient le mieux au deuxième e-mail, celui du conseil sur la hauteur de selle ?"),
        options: [
          B("\"The Bicyclerie Merle newsletter, issue no. 2\"", "« Lettre de la Bicyclerie Merle, numéro 2 »"),
          B("\"Last chance: our best offer, tonight only!\"", "« Dernière chance : notre meilleure offre, ce soir seulement ! »"),
          B("\"Your knees can tell if your saddle is too low\"", "« Vos genoux savent si votre selle est trop basse »"),
        ],
        answer: 2,
        why: B("The subject promises what the email brings, precisely and usefully. An issue number promises nothing, and commercial urgency contradicts the job of an email meant to help first.",
          "L'objet promet ce que l'e-mail apporte, de façon précise et utile. Un numéro de lettre ne promet rien, et une urgence commerciale contredit le rôle d'un e-mail qui doit d'abord aider.") },
    ],
  },

  [deepKey(M3, 'cw-ads')]: {
    intro: B("An ad and a post have neither the same reader nor the same context. The first interrupts a stranger scrolling through a feed; the second speaks to followers who chose to follow you. This lesson explains how to choose an angle, write a first line that stops the scroll, adapt one message to each format, and respect platform rules. You will turn the Merle offer into Meta ads and an Instagram post, and you will be able to design ads that teach you something about your reader.",
      "Une publicité et un post n'ont ni le même lecteur, ni le même contexte. La première interrompt un inconnu qui fait défiler son fil ; le second s'adresse à des abonnés qui ont choisi de vous suivre. Ce cours explique comment choisir un angle, écrire une première ligne qui arrête le défilement, adapter un même message à chaque format, et respecter les règles des plateformes. Vous déclinerez l'offre Merle en publicités Meta et en post Instagram, et vous saurez concevoir des annonces qui vous apprennent quelque chose sur votre lecteur."),
    concepts: [
      { term: B("Angle", "Angle"),
        def: B("The way in chosen to present the offer: a desire, a fear, an objection answered, a proof. Two ads on the same angle are two variants, not two ideas.",
          "La porte d'entrée choisie pour présenter l'offre : un désir, une peur, une objection levée, une preuve. Deux annonces au même angle sont deux variantes, pas deux idées.") },
      { term: B("Opening line (hook)", "Première ligne (hook)"),
        def: B("The few words visible before the text expands. They must show a scene or a concrete benefit, otherwise the rest is never read.",
          "Les quelques mots visibles avant de déplier le texte. Ils doivent montrer une scène ou un bénéfice concret, sinon le reste n'est pas lu.") },
      { term: B("Cold and warm audiences", "Public froid et public chaud"),
        def: B("A cold audience does not know you; a warm one already follows you or has visited your site. You do not tell them the same things, nor in the same order.",
          "Un public froid ne vous connaît pas ; un public chaud vous suit déjà ou a visité votre site. On ne leur dit pas la même chose, ni dans le même ordre.") },
      { term: B("Advertising policies", "Règles publicitaires"),
        def: B("The conditions a platform imposes on ads: banned content, regulated claims, formats. They change and are read in each platform's official help.",
          "Les conditions qu'une plateforme impose aux annonces : contenus interdits, allégations encadrées, formats. Elles évoluent et se lisent dans l'aide officielle de chaque plateforme.") },
    ],
    walkthrough: {
      title: B("Claire turns the Merle offer into three Meta ads and one Instagram post.",
        "Claire décline l'offre Merle en trois publicités Meta et un post Instagram."),
      steps: [
        B("She browses the Meta Ad Library and sorts about ten bike shop ads by angle. Why: she sees that almost all praise the bikes themselves, and none speaks of the fear of a used bike breaking down.",
          "Elle consulte la bibliothèque publicitaire de Meta et classe une dizaine d'annonces de magasins de vélos par angle. Pourquoi : elle voit que presque toutes vantent les vélos eux-mêmes, et qu'aucune ne parle de la peur de la panne d'un vélo d'occasion."),
        B("She keeps three angles: getting to work without waiting for the tram, the fear of breakdown, and the proof of the written check list. Why: three distinct angles will bring three different answers from the reader.",
          "Elle retient trois angles : aller au travail sans attendre le tram, la peur de la panne, et la preuve de la liste de contrôle écrite. Pourquoi : trois angles distincts donneront trois réponses différentes du lecteur."),
        B("She has the AI write five first lines per angle, then keeps those showing a scene: \"The tram just left before your eyes, again.\" Why: a precise scene stops the scroll better than a general promise.",
          "Elle fait écrire par l'IA cinq premières lignes par angle, puis garde celles qui montrent une scène : « Le tram vient de partir sous vos yeux, encore. » Pourquoi : une scène précise arrête mieux le défilement qu'une promesse générale."),
        B("She rereads each ad against Meta's advertising policies and removes a superlative she cannot prove. Why: a rejected or misleading ad costs more than a modest one.",
          "Elle relit chaque annonce face aux règles publicitaires de Meta et retire un superlatif qu'elle ne peut pas prouver. Pourquoi : une annonce refusée ou trompeuse coûte plus cher qu'une annonce modeste."),
        B("For her Instagram followers, she writes a post on checking tyre pressure, with no purchase link. Why: a follower expects value, and that value makes the next ad credible.",
          "Pour ses abonnés Instagram, elle écrit un post sur la vérification de la pression des pneus, sans lien d'achat. Pourquoi : un abonné attend de la valeur, et c'est elle qui rend la publicité suivante crédible."),
      ],
    },
    mistakes: [
      { wrong: B("Copying the same sentence into the ad, the post and the email.", "Recopier la même phrase dans la publicité, le post et l'e-mail."),
        fix: B("Keep the same underlying message, but rewrite it for each reader: a stranger to stop, a follower to serve, a subscriber to accompany.",
          "Gardez le même message de fond, mais réécrivez-le pour chaque lecteur : un inconnu à arrêter, un abonné à servir, un inscrit à accompagner.") },
      { wrong: B("Testing three wordings of one angle and believing you compared three ideas.", "Tester trois formulations d'un même angle et croire avoir comparé trois idées."),
        fix: B("Vary the angle, not only the words. Note for each ad the angle tested, so the result teaches you something.",
          "Faites varier l'angle, pas seulement les mots. Notez pour chaque annonce l'angle testé, pour que le résultat vous apprenne quelque chose.") },
      { wrong: B("Publishing without rereading the platform's advertising policies.", "Publier sans relire les règles publicitaires de la plateforme."),
        fix: B("Before each campaign, reread the rules in force in the platform's official help, especially for health, environmental or price claims.",
          "Avant chaque campagne, relisez les règles en vigueur dans l'aide officielle de la plateforme, en particulier pour les allégations de santé, d'environnement ou de prix.") },
    ],
    recap: [
      B("An ad interrupts a stranger; a post serves followers.", "Une publicité interrompt un inconnu ; un post sert des abonnés."),
      B("The angle matters more than the wording: test different angles.", "L'angle compte plus que la formule : on teste des angles différents."),
      B("The first line shows a scene or a concrete benefit.", "La première ligne montre une scène ou un bénéfice concret."),
      B("Advertising policies change and are checked before each campaign.", "Les règles publicitaires changent et se vérifient avant chaque campagne."),
    ],
    further: B("Take your best ad and rewrite it for another platform, for instance LinkedIn or Google Ads. Note what changes: the reader, their state of mind, the length allowed. Read that platform's formats and rules in its official help before writing.",
      "Prenez votre meilleure annonce et réécrivez-la pour une autre plateforme, par exemple LinkedIn ou Google Ads. Notez ce qui change : le lecteur, son état d'esprit, la longueur permise. Lisez les formats et les règles de cette plateforme dans son aide officielle avant d'écrire."),
    more: [
      { q: B("Claire's Instagram post repeats her ad word for word. Her followers barely react. Why?",
          "Le post Instagram de Claire reprend mot pour mot sa publicité. Ses abonnés réagissent peu. Pourquoi ?"),
        options: [
          B("Because Instagram always hides any post that looks like an ad", "Parce qu'Instagram masque toujours les posts qui ressemblent à une publicité"),
          B("Because followers expect value, not the ad written for strangers", "Parce que des abonnés attendent de la valeur, pas l'annonce faite aux inconnus"),
          B("Because ad copy is always too short to work as an Instagram post", "Parce qu'un texte publicitaire est toujours trop court pour un post"),
        ],
        answer: 1,
        why: B("A follower chose to follow you for what you bring. Serving them the ad written to stop a stranger answers a question they no longer ask.",
          "Un abonné a choisi de vous suivre pour ce que vous lui apportez. Lui servir l'annonce écrite pour arrêter un inconnu, c'est répondre à une question qu'il ne se pose plus.") },
      { q: B("Which first line is most likely to stop a tram commuter who is scrolling?",
          "Quelle première ligne a le plus de chances d'arrêter un usager du tram qui fait défiler ?"),
        options: [
          B("\"Bicyclerie Merle, a passion for bikes since forever\"", "« Bicyclerie Merle, la passion du vélo depuis toujours »"),
          B("\"The tram just left before your eyes, again\"", "« Le tram vient de partir sous vos yeux, encore »"),
          B("\"Discover our universe and all our values\"", "« Découvrez notre univers et nos valeurs »"),
        ],
        answer: 1,
        why: B("It speaks of the reader and their daily life, with a concrete scene they recognise. The other two speak of the brand in general terms, which a stranger ignores in a split second.",
          "Elle parle du lecteur et de son quotidien, avec une scène concrète qu'il reconnaît. Les deux autres parlent de la marque en termes généraux, ce qu'un inconnu ignore en une fraction de seconde.") },
    ],
  },

  [deepKey(M3, 'cw-story')]: {
    intro: B("A well-told story gets read, but a story that serves the offer moves the reader toward a decision. This lesson explains the structure of a short story (situation, tension, change), the reader's place as hero, the use of true details, and the exact role of AI: structuring and cutting, never inventing. You will write the story of Bicyclerie Merle for its sales page and for an email, and you will be able to tell a story that serves the offer from one that only serves its author.",
      "Une histoire bien racontée fait lire, mais une histoire au service de l'offre fait avancer le lecteur vers une décision. Ce cours explique la structure d'un récit court (situation, tension, changement), la place du lecteur comme héros, l'usage des détails vrais, et le rôle exact de l'IA : structurer et couper, jamais inventer. Vous écrirez l'histoire de la Bicyclerie Merle pour sa page de vente et pour un e-mail, et vous saurez distinguer une histoire qui sert l'offre d'une histoire qui ne sert que son auteur."),
    concepts: [
      { term: B("Tension", "Tension"),
        def: B("The problem that disturbs the starting situation and makes the reader want to know what comes next. Without tension, a story is only a description.",
          "Le problème qui dérange la situation de départ et donne envie de connaître la suite. Sans tension, un récit n'est qu'une description.") },
      { term: B("Reader as hero", "Le lecteur comme héros"),
        def: B("The principle that the story serves the reader: they recognise the problem, and the offer helps them change. The brand plays the guide, not the hero.",
          "Le principe selon lequel le récit sert le lecteur : il se reconnaît dans le problème, et l'offre l'aide à changer. La marque joue le guide, pas le héros.") },
      { term: B("True detail", "Détail vrai"),
        def: B("A precise, checkable element (a place, a day, a gesture, a sentence heard). It makes the story credible better than any adjective.",
          "Un élément précis et vérifiable (un lieu, un jour, un geste, une phrase entendue). Il rend l'histoire crédible mieux que n'importe quel adjectif.") },
      { term: B("Bridge to the offer", "Pont vers l'offre"),
        def: B("The sentence linking the end of the story to the reader's situation and to what the offer makes possible. Without it, the story entertains without selling.",
          "La phrase qui relie la fin de l'histoire à la situation du lecteur et à ce que l'offre permet. Sans elle, l'histoire divertit sans vendre.") },
    ],
    walkthrough: {
      title: B("Claire turns her memories into a short story for the Merle page.",
        "Claire transforme ses souvenirs en une histoire courte pour la page Merle."),
      steps: [
        B("She lists the true facts of her journey without embellishing: the bus, the used bike from an ad, the breakdown, the training, the opening. Why: the AI will work on this material and nothing else.",
          "Elle liste les faits vrais de son parcours, sans les embellir : le bus, le vélo d'occasion acheté sur une annonce, la panne, la formation, l'ouverture. Pourquoi : l'IA ne travaillera que sur cette matière, et rien d'autre."),
        B("She spots the moment of tension, the breakdown, and notes a true detail: nobody could tell her what had been checked on the bike. Why: the precise moment carries the emotion better than a summary.",
          "Elle repère le moment de tension, la panne, et note un détail vrai : personne ne savait lui dire ce qui avait été vérifié sur le vélo. Pourquoi : le moment précis porte l'émotion mieux qu'un résumé du parcours."),
        B("She asks the AI for a three-part structure, 150 words at most, and forbids adding any fact. Why: the constraint stops the AI from filling gaps with fiction.",
          "Elle demande à l'IA une structure en trois temps, 150 mots au plus, et interdit d'ajouter un fait. Pourquoi : la contrainte empêche l'IA de combler les vides par de la fiction."),
        B("The AI proposes a version; Claire deletes two adjectives and a sentence about her passion. Why: these are claims, not facts, and the reader skips them.",
          "L'IA propose une version ; Claire supprime deux adjectifs et une phrase sur sa passion. Pourquoi : ce sont des affirmations, pas des faits, et le lecteur les saute."),
        B("She ends with a bridge, \"That check list is the one I wish I had been given\", then places the story after the offer. Why: the story then supports the reader's decision.",
          "Elle termine par un pont, « Cette liste de contrôle, j'aurais voulu qu'on me la donne », puis place l'histoire après l'offre. Pourquoi : le récit sert alors la décision du lecteur."),
      ],
    },
    mistakes: [
      { wrong: B("Telling the brand's story as a feat, with the founder as heroine.", "Raconter l'histoire de la marque comme un exploit, avec la fondatrice en héroïne."),
        fix: B("Make your journey the mirror of the reader's problem. You are the guide who found the way; the reader stays the hero.",
          "Faites de votre parcours le miroir du problème du lecteur. Vous êtes le guide qui a trouvé le chemin ; le lecteur reste le héros.") },
      { wrong: B("Letting the AI fill gaps with invented places, people or dialogue.", "Laisser l'IA combler les vides avec des lieux, des personnes ou des dialogues inventés."),
        fix: B("Supply the facts, explicitly forbid any addition, and ask the AI to ask a question whenever a detail is missing.",
          "Fournissez les faits, interdisez explicitement tout ajout, et demandez à l'IA de poser une question dès qu'un détail manque.") },
      { wrong: B("Ending the story without linking it to the reader or the offer.", "Finir l'histoire sans la relier au lecteur ni à l'offre."),
        fix: B("Add a bridge sentence back to the reader and to what the offer allows. If that sentence cannot be written, the story does not belong on the page.",
          "Ajoutez une phrase de pont qui ramène au lecteur et à ce que l'offre lui permet. Si cette phrase est impossible à écrire, l'histoire n'a pas sa place sur la page.") },
    ],
    recap: [
      B("A useful story follows a tension that resolves toward the offer.", "Une histoire utile suit une tension qui se résout vers l'offre."),
      B("The reader is the hero; the brand is the guide.", "Le lecteur est le héros ; la marque est le guide."),
      B("True details convince better than adjectives.", "Les détails vrais convainquent mieux que les adjectifs."),
      B("The AI structures and cuts; it never invents a fact.", "L'IA structure et coupe ; elle n'invente jamais un fait."),
    ],
    further: B("Collect, with consent, the story of a real customer: their situation before, the moment they changed, what changed next. Structure it with the same method and compare it with yours. A checkable customer story is often the most convincing proof.",
      "Recueillez, avec son accord, l'histoire d'un client réel : sa situation avant, le moment où il a changé, ce qui a changé ensuite. Structurez-la avec la même méthode et comparez-la à la vôtre. L'histoire vérifiable d'un client est souvent la plus convaincante des preuves."),
    more: [
      { q: B("Why explicitly forbid the AI from adding facts to your story?",
          "Pourquoi interdire explicitement à l'IA d'ajouter des faits à votre histoire ?"),
        options: [
          B("Because a long story exceeds what a sales page can hold", "Parce qu'un récit trop long dépasse ce qu'une page de vente peut contenir"),
          B("Because invented details are banned by every single platform", "Parce que les détails inventés sont interdits par toutes les plateformes"),
          B("Because the model fills gaps with plausible but false details", "Parce que le modèle comble les vides par des détails plausibles mais faux"),
        ],
        answer: 2,
        why: B("A model produces the most likely continuation; faced with a gap, it invents a detail that sounds right. Without an explicit ban, the story fills with fiction presented as lived.",
          "Un modèle produit la suite la plus probable ; face à un vide, il invente un détail qui sonne juste. Sans interdiction explicite, l'histoire se remplit de fiction présentée comme vécue.") },
      { q: B("Where should Claire's story go on the Merle sales page?",
          "Où placer l'histoire de Claire sur la page de vente Merle ?"),
        options: [
          B("After the offer, as proof of sincerity and expertise", "Après l'offre, comme preuve de sincérité et d'expertise"),
          B("At the very top, before the headline, to create emotion", "Tout en haut, avant même le titre, pour créer l'émotion"),
          B("In a separate document, sent only to customers", "Dans un document séparé, envoyé seulement aux clients"),
        ],
        answer: 0,
        why: B("The first screen must tell the reader what they get. The founder's story, placed after the offer, builds trust when the reader wonders who is behind it.",
          "Le premier écran doit dire au lecteur ce qu'il obtient. L'histoire de la fondatrice, placée après l'offre, renforce la confiance au moment où le lecteur se demande qui est derrière.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M3, track: 'course', glyph: 'pen', tint: '#db2777', at: [50, 76], levels: SELL,
    title: B("Write what sells", "Écrire ce qui vend"),
    blurb: B("The sales page from top to bottom, email sequences, ads and posts, and storytelling that serves the offer.",
      "La page de vente de haut en bas, les séquences d'e-mails, les publicités et les posts, et un storytelling au service de l'offre."),
  },
]

export const COPY_B: CoursePart = {
  modules: MODULES,
  enrich: { ...SELL_ENRICH },
  deep: { ...SELL_DEEP },
}
