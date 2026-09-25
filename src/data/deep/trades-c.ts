// L'approfondissement pédagogique des dojos couverts par data/enrich/trades-c · voir ./types.
import { B } from '../bilingual'
import type { Deepening } from './types'

export const DEEP_TRADES_C: Record<string, Deepening> = {
  /* ================================================================ */
  /* COMMERCIAL · PROSPECTER                                          */
  /* ================================================================ */

  'sa-prospect/sa-brief': {
    intro: B("Before writing to a prospect, you need one fact about them that is recent, true and relevant to their role. An AI tool with web search finds candidate facts in minutes, but it can also produce a precise-looking fact that does not exist. This dojo gives you a three-minute routine: ask for dated facts with sources, ask what each fact changes for the person's role, then open the source of the one you will quote. At the end, you have a checked fact and a first sentence built on it.",
      "Avant d'écrire à un prospect, il vous faut un fait le concernant qui soit récent, vrai et utile pour son poste. Un outil d'IA doté de la recherche web trouve des faits candidats en quelques minutes, mais il peut aussi produire un fait d'apparence précise qui n'existe pas. Ce dojo vous propose une routine de trois minutes : demander des faits datés et sourcés, demander ce que chaque fait change pour le poste de la personne, puis ouvrir la source de celui que vous citerez. À la fin, vous disposez d'un fait vérifié et d'une première phrase construite sur lui."),
    concepts: [
      {
        term: B("Dated fact", "Fait daté"),
        def: B("A piece of information tied to a date and a source you can open: \"opened a site in Lyon, March, local press article\". Without the date you cannot tell whether it is still news; without the source you cannot check it.",
          "Une information rattachée à une date et à une source que vous pouvez ouvrir : « ouverture d'un site à Lyon, mars, article de la presse locale ». Sans la date, vous ignorez s'il s'agit encore d'une actualité ; sans la source, vous ne pouvez pas la vérifier."),
      },
      {
        term: B("Hallucination", "Hallucination"),
        def: B("A false statement produced by the model with the same confidence as a true one. It happens most often on recent or little-known facts, which is exactly what prospecting asks for.",
          "Une affirmation fausse produite par le modèle avec la même assurance qu'une affirmation vraie. Elle survient surtout sur des faits récents ou peu connus, c'est-à-dire précisément ce que demande la prospection."),
      },
      {
        term: B("Role implication", "Implication pour le poste"),
        def: B("What the fact changes for this person's job. A new warehouse means hiring for an HR director, and stock and schedules for an operations director. The same fact gives two different first lines.",
          "Ce que le fait change pour le métier de cette personne. Un nouvel entrepôt signifie des recrutements pour une DRH, des stocks et des plannings pour un directeur des opérations. Le même fait produit deux premières lignes différentes."),
      },
      {
        term: B("Web search", "Recherche web"),
        def: B("Some AI tools can search the web and show links; others answer only from what they learned during training, which stops at a past date. Without search, the tool cannot know last month's news.",
          "Certains outils d'IA peuvent chercher sur le web et afficher des liens ; d'autres répondent uniquement à partir de ce qu'ils ont appris lors de leur entraînement, qui s'arrête à une date passée. Sans recherche, l'outil ne peut pas connaître l'actualité du mois dernier."),
      },
    ],
    walkthrough: {
      title: B("Karim prepares a message to the purchasing manager of a bakery chain",
        "Karim prépare un message pour la responsable des achats d'une chaîne de boulangeries"),
      steps: [
        B("Karim sells refrigerated display cases. He opens his AI tool with web search on and states his target: the purchasing manager of a chain of 22 bakeries in Brittany. Why: without the role and the offer, the tool returns a generic company profile.",
          "Karim vend des vitrines réfrigérées. Il ouvre son outil d'IA, recherche web activée, et indique sa cible : la responsable des achats d'une chaîne de 22 boulangeries en Bretagne. Pourquoi : sans le poste ni l'offre, l'outil renvoie un portrait générique de l'entreprise."),
        B("He asks for what changed in the last 12 months, each fact with a date and a link, and allows \"not found\". Why: the date tells him whether it is still news, the link lets him check, and \"not found\" removes the pressure to produce something plausible.",
          "Il demande ce qui a changé depuis 12 mois, chaque fait avec une date et un lien, et autorise « non trouvé ». Pourquoi : la date lui indique s'il s'agit encore d'une actualité, le lien lui permet de vérifier, et « non trouvé » supprime la pression de produire quelque chose de plausible."),
        B("The tool returns four facts. One has no link: \"acquired a competitor last year\". Karim drops it at once. Why: a fact without a source is a guess, and the most precise guesses are the most dangerous.",
          "L'outil renvoie quatre faits. L'un n'a pas de lien : « rachat d'un concurrent l'an dernier ». Karim l'écarte aussitôt. Pourquoi : un fait sans source est une supposition, et les suppositions les plus précises sont les plus dangereuses."),
        B("For the three remaining facts, he asks what each one means for a purchasing manager. Five new shops announced for spring means five sets of display cases to order on a tight schedule. Why: this turns news into a reason for her to read on.",
          "Pour les trois faits restants, il demande ce que chacun signifie pour une responsable des achats. Cinq boutiques annoncées pour le printemps représentent cinq lots de vitrines à commander dans un délai serré. Pourquoi : l'actualité devient une raison, pour elle, de poursuivre la lecture."),
        B("He opens the press article on the five openings and checks the number and the date himself. Only then does he write his first line about the five shops. Check: the sentence contains nothing the article does not say.",
          "Il ouvre l'article de presse sur les cinq ouvertures et vérifie lui-même le nombre et la date. C'est seulement ensuite qu'il rédige sa première ligne sur les cinq boutiques. Vérification : la phrase ne contient rien que l'article ne dise pas."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking \"tell me about this company\" and getting a portrait: history, values, figures, with no dates or links.",
          "Demander « parle-moi de cette entreprise » et obtenir un portrait : historique, valeurs, chiffres, sans dates ni liens."),
        fix: B("Ask for changes in the last 12 months, each with a date and a source link, and allow \"not found\". A change gives you a reason to write now; a portrait gives you nothing to check.",
          "Demandez les changements des 12 derniers mois, chacun avec une date et un lien vers la source, et autorisez « non trouvé ». Un changement vous donne une raison d'écrire maintenant ; un portrait ne vous donne rien à vérifier."),
      },
      {
        wrong: B("Asking the model \"are you sure?\" instead of opening the link.",
          "Demander au modèle « tu es sûr ? » au lieu d'ouvrir le lien."),
        fix: B("The model will usually confirm, because agreeing is the most likely reply. Open the source yourself: it takes ten seconds, and it is the only check that counts.",
          "Le modèle confirmera le plus souvent, car acquiescer est la réponse la plus probable. Ouvrez vous-même la source : cela prend dix secondes, et c'est la seule vérification qui compte."),
      },
      {
        wrong: B("Using a tool without web search and taking its answer as current news.",
          "Utiliser un outil sans recherche web et prendre sa réponse pour de l'actualité."),
        fix: B("Add to the prompt: \"if you cannot search the web, say so and stop\". A tool without search only knows what it learned during training, which does not include last month's openings.",
          "Ajoutez au prompt : « si tu ne peux pas chercher sur le web, dis-le et arrête-toi ». Un outil sans recherche ne connaît que ce qu'il a appris pendant son entraînement, qui n'inclut pas les ouvertures du mois dernier."),
      },
    ],
    recap: [
      B("Ask for facts from the last 12 months, each with a date and a source link.",
        "Demandez des faits des 12 derniers mois, chacun avec une date et un lien vers la source."),
      B("Allow \"not found\": it removes the pressure to invent.",
        "Autorisez « non trouvé » : cela supprime la pression d'inventer."),
      B("A fact becomes useful when you say what it changes for the person's role.",
        "Un fait devient utile lorsque vous dites ce qu'il change pour le poste de la personne."),
      B("Open the source of the fact you quote; asking the model to confirm is not a check.",
        "Ouvrez la source du fait que vous citez ; demander confirmation au modèle n'est pas une vérification."),
    ],
    further: B("Time your routine: aim for three minutes per prospect, from prompt to opened link. Save the prompt with three blanks (company, role, offer) so you only fill them in. If a prospect yields no dated fact at all, that is information too: write about their sector rather than invent a personal hook.",
      "Chronométrez votre routine : visez trois minutes par prospect, du prompt au lien ouvert. Enregistrez le prompt avec trois champs (entreprise, poste, offre) afin de n'avoir qu'à les remplir. Si un prospect ne livre aucun fait daté, c'est aussi une information : écrivez à partir de son secteur plutôt que d'inventer une accroche personnelle."),
    more: [
      {
        q: B("The tool returns a fact with a working link, but the article is three years old. What do you do?",
          "L'outil renvoie un fait avec un lien valide, mais l'article date de trois ans. Que faites-vous ?"),
        options: [
          B("Quote it: the source is real", "Vous le citez : la source est réelle"),
          B("Look for a more recent fact", "Vous cherchez un fait plus récent"),
          B("Quote it without mentioning the date", "Vous le citez sans mentionner la date"),
        ],
        answer: 1,
        why: B("A real but old fact is no longer news: the prospect has moved on. Your first line must speak about their current situation, so the date matters as much as the link.",
          "Un fait réel mais ancien n'est plus une actualité : le prospect est passé à autre chose. Votre première ligne doit parler de sa situation actuelle ; la date compte donc autant que le lien."),
      },
      {
        q: B("Your tool lists recent facts but shows no links, and says nothing about searching. What do you do?",
          "Votre outil liste des faits récents sans aucun lien, et ne dit rien d'une recherche. Que faites-vous ?"),
        options: [
          B("Trust it: the facts are detailed", "Vous lui faites confiance : les faits sont détaillés"),
          B("Ask it to add the missing links from memory", "Vous lui demandez d'ajouter de mémoire les liens manquants"),
          B("Ask whether it searched; stop if not", "Vous demandez s'il a cherché ; sinon, vous arrêtez"),
        ],
        answer: 2,
        why: B("Links written from memory can be invented too. If the tool did not search, its recent facts are guesses: switch on search or look yourself.",
          "Des liens écrits de mémoire peuvent eux aussi être inventés. Si l'outil n'a pas cherché, ses faits récents sont des suppositions : activez la recherche ou cherchez vous-même."),
      },
    ],
  },

  'sa-prospect/sa-first': {
    intro: B("A first prospecting message has one job: get a short reply from someone who does not know you. This dojo shows how to make the AI write a six-line message built on a checked fact, a comparable case and a closed question that can be answered in five words. You will also learn to cut every sentence about you, because those are the ones the prospect skips. At the end, you have a message you can send today and a structure you can reuse.",
      "Un premier message de prospection n'a qu'une mission : obtenir une réponse courte de la part de quelqu'un qui ne vous connaît pas. Ce dojo vous montre comment faire rédiger à l'IA un message de six lignes fondé sur un fait vérifié, un cas comparable et une question fermée à laquelle on répond en cinq mots. Vous apprendrez aussi à supprimer chaque phrase qui parle de vous, car ce sont celles que le prospect saute. À la fin, vous disposez d'un message à envoyer aujourd'hui et d'une structure réutilisable."),
    concepts: [
      {
        term: B("Size of the ask", "Taille de la demande"),
        def: B("What replying costs the prospect. A five-word answer costs a few seconds; a 30-minute call costs a slot in the calendar. The smaller the ask, the more replies you get from strangers.",
          "Ce que la réponse coûte au prospect. Une réponse de cinq mots coûte quelques secondes ; un appel de 30 minutes coûte un créneau dans l'agenda. Plus la demande est petite, plus les inconnus répondent."),
      },
      {
        term: B("Closed question", "Question fermée"),
        def: B("A question answered by yes, no, a number or a short fact: \"Are your new drivers trained before their first shift?\". It can be answered on a phone, between two meetings.",
          "Une question à laquelle on répond par oui, non, un nombre ou un fait bref : « Vos nouveaux chauffeurs sont-ils formés avant leur première tournée ? ». On peut y répondre sur un téléphone, entre deux réunions."),
      },
      {
        term: B("Comparable case", "Cas comparable"),
        def: B("A real situation of a client like them, told in two lines: same size, same sector, what changed. It shows you understand their world without describing your product.",
          "La situation réelle d'un client qui leur ressemble, racontée en deux lignes : même taille, même secteur, ce qui a changé. Elle montre que vous comprenez leur univers sans décrire votre produit."),
      },
      {
        term: B("Default template", "Gabarit par défaut"),
        def: B("The shape the model uses when you give none: introduction, product, meeting request. It is the average of the sales emails it has read, and the shape prospects delete first.",
          "La forme qu'adopte le modèle lorsque vous n'en imposez aucune : présentation, produit, demande de rendez-vous. C'est la moyenne des emails commerciaux qu'il a lus, et la forme que les prospects suppriment en premier."),
      },
    ],
    walkthrough: {
      title: B("Léa writes to the owner of four dental practices",
        "Léa écrit au dirigeant de quatre cabinets dentaires"),
      steps: [
        B("Léa sells an SMS appointment reminder service. She gives the model the recipient (Dr Martin, owner of 4 practices), the checked fact (a 4th practice opened in June, local press) and a real case. Why: with the material supplied, the model arranges instead of inventing.",
          "Léa vend un service de rappel de rendez-vous par SMS. Elle fournit au modèle le destinataire (Dr Martin, gérant de 4 cabinets), le fait vérifié (4e cabinet ouvert en juin, presse locale) et un cas réel. Pourquoi : avec la matière fournie, le modèle agence au lieu d'inventer."),
        B("The case: a group of three practices whose assistants stopped calling every patient the day before. She sets the structure: line 1 the fact, lines 2 and 3 the case, last line a closed question, six lines maximum. Why: a fixed shape takes the model out of its default template.",
          "Le cas : un groupe de trois cabinets dont les assistantes ont cessé d'appeler chaque patient la veille. Elle fixe la structure : ligne 1 le fait, lignes 2 et 3 le cas, dernière ligne une question fermée, six lignes au plus. Pourquoi : une forme imposée fait sortir le modèle de son gabarit par défaut."),
        B("She forbids any sentence about her company and any meeting request. Why: those sentences serve Léa's need, while the prospect reads only to find out whether the message concerns him.",
          "Elle interdit toute phrase sur son entreprise et toute demande de rendez-vous. Pourquoi : ces phrases servent le besoin de Léa, alors que le prospect ne lit que pour savoir si le message le concerne."),
        B("She asks for three versions of the final question and picks: \"Today, who calls your patients the day before their appointment?\". Why: it is answered in a few words, and the answer tells her whether the problem exists at his practices.",
          "Elle demande trois versions de la question finale et retient : « Aujourd'hui, qui appelle vos patients la veille de leur rendez-vous ? ». Pourquoi : on y répond en quelques mots, et la réponse lui indique si le problème existe dans ses cabinets."),
        B("She reads the draft on her phone: six lines, no sentence starting with \"I\" or \"we\", no number she cannot prove. Check: the prospect will read it on a phone too, and one invented number is enough to lose his trust.",
          "Elle relit le brouillon sur son téléphone : six lignes, aucune phrase commençant par « je » ou « nous », aucun chiffre qu'elle ne peut prouver. Vérification : le prospect le lira lui aussi sur un téléphone, et un seul chiffre inventé suffit à perdre sa confiance."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking for \"a prospecting email\", then editing the result line by line.",
          "Demander « un mail de prospection », puis corriger le résultat ligne par ligne."),
        fix: B("Give the shape before the model writes: number of lines, order of the lines, what is forbidden. Editing a template email keeps its skeleton; setting the shape changes it.",
          "Imposez la forme avant que le modèle n'écrive : nombre de lignes, ordre des lignes, interdits. Retoucher un email standard en conserve le squelette ; fixer la forme le change."),
      },
      {
        wrong: B("Ending with \"Would you have 30 minutes next week?\".",
          "Terminer par « Auriez-vous 30 minutes la semaine prochaine ? »."),
        fix: B("Replace it with a closed question about their situation, answerable in five words. The meeting comes after the first reply, not before it.",
          "Remplacez-la par une question fermée sur leur situation, à laquelle on répond en cinq mots. Le rendez-vous vient après la première réponse, et non avant."),
      },
      {
        wrong: B("Putting a number you cannot prove in the comparable case, such as \"40% fewer missed appointments\".",
          "Placer dans le cas comparable un chiffre que vous ne pouvez pas prouver, comme « 40 % de rendez-vous manqués en moins »."),
        fix: B("Describe what changed in concrete terms (\"the assistants stopped calling every patient\") unless you have the client's figure in writing. An unprovable number is the first thing a sceptical reader challenges.",
          "Décrivez concrètement ce qui a changé (« les assistantes ont cessé d'appeler chaque patient »), sauf si vous disposez du chiffre du client par écrit. Un chiffre invérifiable est la première chose qu'un lecteur sceptique conteste."),
      },
    ],
    recap: [
      B("The goal of a first message is a short reply, not a meeting.",
        "L'objectif d'un premier message est une réponse courte, et non un rendez-vous."),
      B("Give the model the fact and the case: it arranges, it does not invent.",
        "Fournissez au modèle le fait et le cas : il agence, il n'invente pas."),
      B("Fix the shape: six lines, the fact first, then the case, then a closed question.",
        "Imposez la forme : six lignes, le fait d'abord, puis le cas, puis une question fermée."),
      B("Cut every sentence that talks about you or your company.",
        "Supprimez chaque phrase qui parle de vous ou de votre entreprise."),
    ],
    further: B("Keep a log of your first messages: the final question used and whether you got a reply. After twenty messages, paste the log into your AI tool and ask which questions got replies and what they have in common. You learn which question shapes work in your sector, from your own results.",
      "Tenez un registre de vos premiers messages : la question finale employée, et si vous avez obtenu une réponse. Après vingt messages, collez ce registre dans votre outil d'IA et demandez quelles questions ont suscité des réponses et ce qu'elles ont en commun. Vous apprenez ainsi, à partir de vos propres résultats, quelles formes de questions fonctionnent dans votre secteur."),
    more: [
      {
        q: B("The model's draft opens with \"We are a young company specialised in...\". What do you change in the prompt?",
          "Le brouillon commence par « Nous sommes une jeune entreprise spécialisée dans... ». Que modifiez-vous dans le prompt ?"),
        options: [
          B("Ask for a shorter, lighter introduction of your company", "Vous demandez une présentation plus courte et plus légère"),
          B("Line 1 is their fact; no sentence about you", "Ligne 1 : leur fait ; aucune phrase sur vous"),
          B("Ask for a more original opening line", "Vous demandez une accroche plus originale"),
        ],
        answer: 1,
        why: B("A shorter introduction is still about you. Imposing their fact as line 1 and forbidding sentences about you makes the model talk about the prospect from the first word.",
          "Une présentation plus courte parle encore de vous. Imposer leur fait en ligne 1 et interdire les phrases sur vous oblige le modèle à parler du prospect dès le premier mot."),
      },
      {
        q: B("Which final question fits a first message to the HR director of a logistics firm?",
          "Quelle question finale convient à un premier message adressé à la DRH d'une entreprise de logistique ?"),
        options: [
          B("\"Could we talk about your training needs?\"", "« Pourrions-nous parler de vos besoins en formation ? »"),
          B("\"What are your HR priorities for next year?\"", "« Quelles sont vos priorités RH pour l'an prochain ? »"),
          B("\"Would a demo on Tuesday suit you?\"", "« Une démonstration mardi vous conviendrait-elle ? »"),
          B("\"Are new drivers trained before day one?\"", "« Les nouveaux caristes sont-ils formés avant le jour J ? »"),
        ],
        answer: 3,
        why: B("Only the last one is closed and about their situation: yes, no, or \"not always\". The others ask for a conversation, a meeting or a long answer, which a stranger postpones.",
          "Seule la dernière est fermée et porte sur leur situation : oui, non, ou « pas toujours ». Les autres demandent un échange, un rendez-vous ou une longue réponse, qu'un inconnu remet à plus tard."),
      },
    ],
  },

  'sa-prospect/sa-follow': {
    intro: B("Many replies to prospecting come after a follow-up rather than after the first message. But a follow-up that only reminds the prospect of your first email gives them no new reason to answer. This dojo teaches a three-step sequence: each follow-up brings one new element (a fact, a client case, an answer to a likely objection), each one can be read alone, and the last one closes the file politely. You will leave with a sequence ready to schedule.",
      "Bien des réponses en prospection arrivent après une relance plutôt qu'après le premier message. Mais une relance qui se contente de rappeler votre premier email ne donne au prospect aucune nouvelle raison de répondre. Ce dojo enseigne une séquence en trois temps : chaque relance apporte un élément nouveau (un fait, un cas client, la réponse à une objection probable), chacune se lit isolément, et la dernière clôt le dossier avec courtoisie. Vous repartez avec une séquence prête à programmer."),
    concepts: [
      {
        term: B("Standalone message", "Message autonome"),
        def: B("A follow-up that makes sense even if the prospect never read the previous ones. It carries its own reason to reply instead of pointing back to a message they probably skipped.",
          "Une relance qui se comprend même si le prospect n'a jamais lu les précédentes. Elle porte sa propre raison de répondre au lieu de renvoyer à un message qu'il a probablement ignoré."),
      },
      {
        term: B("New element", "Apport nouveau"),
        def: B("The one thing a follow-up adds: a fact about their sector, a comparable client case, or the answer to an objection they are likely to have. One per message keeps each message short.",
          "L'unique élément qu'ajoute une relance : un fait sur son secteur, un cas client comparable, ou la réponse à une objection qu'il est susceptible d'avoir. Un seul par message, ce qui garde chaque message court."),
      },
      {
        term: B("Closing message", "Message de clôture"),
        def: B("The last follow-up, which says clearly that you will stop writing, without reproach, and how to reach you later. It creates the first and only real deadline in the sequence.",
          "La dernière relance, qui annonce clairement que vous cesserez d'écrire, sans reproche, et comment vous recontacter plus tard. Elle crée la première et la seule véritable échéance de la séquence."),
      },
      {
        term: B("Cadence", "Cadence"),
        def: B("The spacing between messages, for example day 7, day 14 and day 21. Regular spacing reads as a professional sequence rather than as pressure.",
          "L'espacement entre les messages, par exemple J+7, J+14 et J+21. Un rythme régulier se lit comme une démarche professionnelle, et non comme une pression."),
      },
    ],
    walkthrough: {
      title: B("Antoine follows up with a hotel manager who did not reply",
        "Antoine relance une directrice d'hôtel restée silencieuse"),
      steps: [
        B("Antoine sells energy audits to hotels. He pastes his first message to Ms Garnier, manager of a 60-room hotel in Annecy, and says it got no reply. Why: the model must see what was already said, so it does not repeat it.",
          "Antoine vend des audits énergétiques aux hôtels. Il colle son premier message à Mme Garnier, directrice d'un hôtel de 60 chambres à Annecy, et précise qu'il est resté sans réponse. Pourquoi : le modèle doit voir ce qui a déjà été dit pour ne pas le répéter."),
        B("He lists what each follow-up carries: day 7, a fact (the winter season, when heating costs peak, starts in December); day 14, a case (a 45-room hotel that found its boiler heating empty wings at night); day 21, the closing. Why: one precise element each stops the model padding.",
          "Il liste l'apport de chaque relance : J+7, un fait (la saison d'hiver, où le chauffage coûte le plus, débute en décembre) ; J+14, un cas (un hôtel de 45 chambres qui chauffait la nuit des ailes vides) ; J+21, la clôture. Pourquoi : un élément précis par message empêche le remplissage."),
        B("He forbids any reference to his previous messages: no \"just following up\", no \"further to my email\", no \"did you see\". Why: these phrases are the model's default openings for a follow-up, and they signal that there is nothing new.",
          "Il interdit toute référence à ses messages précédents : ni « je me permets de revenir vers vous », ni « suite à mon mail », ni « avez-vous vu ». Pourquoi : ces formules sont les ouvertures par défaut du modèle pour une relance, et elles signalent qu'il n'y a rien de nouveau."),
        B("He asks for four lines per message, formal \"vous\", and a closing that says how to reach him next season. Why: short messages get read on a phone, and a courteous closing keeps the door open for later.",
          "Il demande quatre lignes par message, le vouvoiement, et une clôture qui indique comment le recontacter à la saison suivante. Pourquoi : un message court se lit sur un téléphone, et une clôture courtoise laisse la porte ouverte."),
        B("He reads each follow-up as if it were the only one received. The day-14 draft starts with \"As I mentioned\": he deletes it and opens on the hotel case. Check: all three now stand alone, and he schedules them in his email tool.",
          "Il relit chaque relance comme si c'était la seule reçue. Le brouillon de J+14 commence par « Comme je vous l'indiquais » : il le supprime et ouvre sur le cas de l'hôtel. Vérification : les trois messages se lisent désormais seuls, et il les programme dans sa messagerie."),
      ],
    },
    mistakes: [
      {
        wrong: B("Sending three follow-ups that repeat the first message in other words.",
          "Envoyer trois relances qui répètent le premier message en d'autres termes."),
        fix: B("Before writing, list one new element per follow-up: a fact, a case, an objection answered. If you only find two, send two; a follow-up with nothing new costs you credibility.",
          "Avant d'écrire, listez un apport nouveau par relance : un fait, un cas, une objection traitée. Si vous n'en trouvez que deux, n'envoyez que deux relances ; une relance sans nouveauté vous coûte en crédibilité."),
      },
      {
        wrong: B("A closing message with a reproach: \"Since you never answered...\".",
          "Un message de clôture teinté de reproche : « Puisque vous n'avez jamais répondu... »."),
        fix: B("Close neutrally: say you are stopping, thank them, and give a way to reach you later. A reproach burns the contact; a neutral closing often brings back a \"not now, try again in January\".",
          "Clôturez de façon neutre : annoncez que vous arrêtez, remerciez, et indiquez comment vous joindre plus tard. Un reproche brûle le contact ; une clôture neutre suscite souvent un « pas maintenant, revenez en janvier »."),
      },
      {
        wrong: B("Letting the model add fake urgency, such as \"offer valid until Friday\".",
          "Laisser le modèle ajouter une fausse urgence, comme « offre valable jusqu'à vendredi »."),
        fix: B("Forbid invented deadlines in the prompt. The only deadline in the sequence is the real one: you stop writing after the last message.",
          "Interdisez les échéances inventées dans le prompt. La seule échéance de la séquence est la vraie : vous cessez d'écrire après le dernier message."),
      },
    ],
    recap: [
      B("Each follow-up carries one new element: a fact, a case or an answer to an objection.",
        "Chaque relance porte un apport nouveau : un fait, un cas ou la réponse à une objection."),
      B("Forbid any sentence that points back to your previous message.",
        "Interdisez toute phrase qui renvoie à votre message précédent."),
      B("Every follow-up must make sense if it is the only one read.",
        "Chaque relance doit se comprendre si elle est la seule lue."),
      B("The last message closes the file politely and creates the only real deadline.",
        "Le dernier message clôt le dossier avec courtoisie et crée la seule véritable échéance."),
    ],
    further: B("Build a bank of new elements for your offer: five sector facts, three client cases, three answers to frequent objections. Update it each quarter. When you build a sequence, you pick three elements from the bank instead of searching each time, and your follow-ups stay factual.",
      "Constituez une réserve d'apports pour votre offre : cinq faits sectoriels, trois cas clients, trois réponses aux objections fréquentes. Mettez-la à jour chaque trimestre. Pour chaque séquence, vous y puisez trois éléments au lieu de chercher à chaque fois, et vos relances restent factuelles."),
    more: [
      {
        q: B("You have only one new element for your follow-ups. What do you do?",
          "Vous ne disposez que d'un seul apport nouveau pour vos relances. Que faites-vous ?"),
        options: [
          B("Write three follow-ups and spread it thin", "Vous rédigez trois relances en le diluant"),
          B("Send the first message again, unchanged", "Vous renvoyez le premier message tel quel"),
          B("One follow-up with it, then the closing", "Une relance avec cet apport, puis la clôture"),
        ],
        answer: 2,
        why: B("A follow-up without anything new only says you are waiting. Two messages that each carry something are better than three where two are empty.",
          "Une relance sans nouveauté dit seulement que vous attendez. Deux messages qui apportent chacun quelque chose valent mieux que trois dont deux sont vides."),
      },
      {
        q: B("Your day-7 follow-up opens with \"I wanted to make sure my email reached you\". What is the problem?",
          "Votre relance de J+7 commence par « Je voulais m'assurer que mon mail vous était bien parvenu ». Quel est le problème ?"),
        options: [
          B("It points back and brings nothing new", "Elle renvoie en arrière et n'apporte rien"),
          B("It is too formal for a follow-up", "Elle est trop formelle pour une relance"),
          B("It is too short to be noticed", "Elle est trop courte pour être remarquée"),
          B("Nothing: it is a courteous way to check delivery", "Aucun : c'est une façon courtoise de vérifier la réception"),
        ],
        answer: 0,
        why: B("It asks the prospect to go and find your first message, and brings nothing. Open instead on the new element: a fact or a case that concerns them.",
          "Elle demande au prospect d'aller rechercher votre premier message, et n'apporte rien. Ouvrez plutôt sur l'apport nouveau : un fait ou un cas qui le concerne."),
      },
    ],
  },

  /* ================================================================ */
  /* COMMERCIAL · L'ENTRETIEN                                         */
  /* ================================================================ */

  'sa-meeting/sa-prep': {
    intro: B("A discovery meeting is useful when the client talks and you learn things you could not have found alone. This dojo shows how to prepare five questions with AI: questions their website does not answer, questions about a precise past event, and one question about the cost of doing nothing. You will also prepare the follow-up to ask when an answer stays vague. At the end, you walk in with a card of questions instead of a demo.",
      "Un rendez-vous de découverte est utile lorsque le client parle et que vous apprenez ce que vous n'auriez pas trouvé seul. Ce dojo vous montre comment préparer cinq questions avec l'IA : des questions auxquelles leur site ne répond pas, des questions sur un événement passé précis, et une question sur le coût de l'inaction. Vous préparerez aussi la relance à poser lorsqu'une réponse reste vague. À la fin, vous entrez dans la salle avec une fiche de questions plutôt qu'avec une démonstration."),
    concepts: [
      {
        term: B("Discovery meeting", "Rendez-vous de découverte"),
        def: B("The first real meeting with a prospect, where you try to understand their situation before proposing anything. Its success is measured by what you learn, not by what you present.",
          "Le premier véritable rendez-vous avec un prospect, où vous cherchez à comprendre sa situation avant de proposer quoi que ce soit. Sa réussite se mesure à ce que vous apprenez, et non à ce que vous présentez."),
      },
      {
        term: B("Past-event question", "Question sur un fait passé"),
        def: B("A question about one precise moment: \"the last time a delivery was late, what did you do?\". It brings a story with names, tools and numbers, where a general question brings an opinion.",
          "Une question sur un moment précis : « la dernière fois qu'une livraison a eu du retard, comment avez-vous fait ? ». Elle suscite un récit avec des noms, des outils et des chiffres, là où une question générale suscite une opinion."),
      },
      {
        term: B("Cost of inaction", "Coût de l'inaction"),
        def: B("What happens if the client changes nothing. If the answer is \"not much\", there is no urgency, and you know it before investing weeks in the deal.",
          "Ce qui se passe si le client ne change rien. Si la réponse est « pas grand-chose », il n'y a pas d'urgence, et vous le savez avant d'investir des semaines dans le dossier."),
      },
      {
        term: B("Follow-up question", "Relance"),
        def: B("A short second question asked when the answer stays vague: \"can you give me an example?\", \"how many times last month?\". It turns \"pretty well\" into a fact.",
          "Une courte seconde question posée lorsque la réponse reste vague : « pouvez-vous me donner un exemple ? », « combien de fois le mois dernier ? ». Elle transforme « plutôt bien » en fait."),
      },
    ],
    walkthrough: {
      title: B("Yasmine prepares a meeting with the owner of six bike shops",
        "Yasmine prépare un rendez-vous avec le gérant de six magasins de vélos"),
      steps: [
        B("Yasmine sells stock management software. She pastes what she knows: the website (6 shops, sales and repairs, spring promotions) and Olivier's reply to her first email, \"stock is a headache in spring\". Why: the model can only drop questions she can already answer if it sees that information.",
          "Yasmine vend un logiciel de gestion des stocks. Elle colle ce qu'elle sait : le site (6 magasins, vente et réparation, promotions de printemps) et la réponse d'Olivier à son premier mail, « le stock, c'est la galère au printemps ». Pourquoi : le modèle ne peut écarter les questions déjà résolues que s'il voit ces éléments."),
        B("She asks for five questions, none answered by what she pasted, three about a precise past moment. Why: \"How do you manage stock?\" gets a general answer; \"Last spring, which model ran out first, and how did you find out?\" gets a story.",
          "Elle demande cinq questions, aucune résolue par ce qu'elle a collé, dont trois sur un moment passé précis. Pourquoi : « Comment gérez-vous le stock ? » obtient une réponse générale ; « Au printemps dernier, quel modèle a manqué en premier, et comment l'avez-vous su ? » obtient un récit."),
        B("She requires one question about doing nothing: \"If nothing changes before next spring, what happens in the shops?\". Why: the answer tells her whether there is a real deadline, which decides how much time the deal deserves.",
          "Elle exige une question sur l'inaction : « Si rien ne change d'ici le printemps prochain, que se passe-t-il dans les magasins ? ». Pourquoi : la réponse lui indique s'il existe une véritable échéance, ce qui détermine le temps que mérite le dossier."),
        B("For each question, she asks what she is trying to learn and the follow-up if the answer stays vague. The model proposes: \"Roughly how many sales did you lose that week?\". Why: she will not have time to invent a follow-up while listening.",
          "Pour chaque question, elle demande ce qu'elle cherche à apprendre et la relance à poser si la réponse reste vague. Le modèle propose : « Combien de ventes avez-vous perdues cette semaine-là, à peu près ? ». Pourquoi : elle n'aura pas le temps d'inventer une relance tout en écoutant."),
        B("She checks the card: five questions, none about her software, each one a sentence she can say aloud. She removes one the website already answered (\"Do you do repairs?\"). Check: the card fits on one page she keeps in front of her.",
          "Elle contrôle la fiche : cinq questions, aucune sur son logiciel, chacune formulable à voix haute en une phrase. Elle retire celle à laquelle le site répondait déjà (« Faites-vous de la réparation ? »). Vérification : la fiche tient sur une page qu'elle garde sous les yeux."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking for \"discovery questions\" without giving what you already know.",
          "Demander des « questions de découverte » sans fournir ce que vous savez déjà."),
        fix: B("Paste the website, the first emails and your notes, and forbid questions they already answer. Otherwise the model gives the standard list, and you spend the client's time on facts you could have read.",
          "Collez le site, les premiers emails et vos notes, et interdisez les questions auxquelles ils répondent. Sinon, le modèle fournit la liste standard, et vous consacrez le temps du client à des faits que vous auriez pu lire."),
      },
      {
        wrong: B("Keeping general questions: \"What are your priorities?\", \"Are you satisfied with your tool?\".",
          "Conserver des questions générales : « Quelles sont vos priorités ? », « Êtes-vous satisfait de votre outil ? »."),
        fix: B("Rewrite each one about a precise moment: \"the last time...\", \"last quarter, how did you...\". A precise moment is remembered in detail; a general question gets a polished answer.",
          "Réécrivez chacune autour d'un moment précis : « la dernière fois que... », « le trimestre dernier, comment avez-vous... ». Un moment précis se remémore en détail ; une question générale obtient une réponse convenue."),
      },
      {
        wrong: B("Preparing questions that are really arguments: \"Wouldn't an automatic tool save you time?\".",
          "Préparer des questions qui sont en réalité des arguments : « Un outil automatique ne vous ferait-il pas gagner du temps ? »."),
        fix: B("Remove every question that mentions your product or suggests the answer. At this stage you gather facts; a leading question makes the client defensive and teaches you nothing.",
          "Retirez toute question qui mentionne votre produit ou suggère la réponse. À ce stade, vous recueillez des faits ; une question orientée met le client sur la défensive et ne vous apprend rien."),
      },
    ],
    recap: [
      B("Give the model what you already know, and forbid the questions it answers.",
        "Fournissez au modèle ce que vous savez déjà, et interdisez les questions auxquelles cela répond."),
      B("Ask about precise past moments: they bring stories with usable details.",
        "Interrogez sur des moments passés précis : ils suscitent des récits aux détails exploitables."),
      B("Include one question about the cost of doing nothing.",
        "Prévoyez une question sur le coût de l'inaction."),
      B("Prepare a follow-up for vague answers before the meeting, not during it.",
        "Préparez la relance aux réponses vagues avant le rendez-vous, et non pendant."),
    ],
    further: B("After the meeting, paste your five questions and the answers you noted. Ask the model which question brought the most usable detail, which one fell flat, and why. Keep the good ones in a question bank per type of client: after a few meetings, your preparation takes five minutes.",
      "Après le rendez-vous, collez vos cinq questions et les réponses notées. Demandez au modèle quelle question a apporté le plus de détails exploitables, laquelle est tombée à plat, et pourquoi. Conservez les bonnes dans une réserve de questions par type de client : après quelques rendez-vous, votre préparation prend cinq minutes."),
    more: [
      {
        q: B("The client answers \"We manage\" to your question about stock. Which follow-up works best?",
          "Le client répond « On s'en sort » à votre question sur le stock. Quelle relance est la plus efficace ?"),
        options: [
          B("\"When did something last run out?\"", "« Quand avez-vous manqué d'un article pour la dernière fois ? »"),
          B("\"Great, so it is not a priority?\"", "« Très bien, ce n'est donc pas une priorité ? »"),
          B("\"Our tool could help you avoid that kind of problem.\"", "« Notre outil pourrait vous éviter ce genre de problème. »"),
        ],
        answer: 0,
        why: B("\"We manage\" is a general answer. A question about the last time brings back a precise episode, with its cost. The other two close the topic or turn the meeting into a pitch.",
          "« On s'en sort » est une réponse générale. Une question sur la dernière fois fait ressurgir un épisode précis, avec son coût. Les deux autres ferment le sujet ou transforment le rendez-vous en argumentaire."),
      },
      {
        q: B("Your card holds these four questions. Which one do you drop?",
          "Votre fiche comporte ces quatre questions. Laquelle retirez-vous ?"),
        options: [
          B("\"Last spring, what ran out first?\"", "« Au printemps dernier, qu'est-ce qui a manqué en premier ? »"),
          B("\"If nothing changes before spring, what happens in May?\"", "« Si rien ne change d'ici le printemps, que se passe-t-il en mai ? »"),
          B("\"Wouldn't an automatic tool save you time?\"", "« Un outil automatique ne vous ferait-il pas gagner du temps ? »"),
          B("\"Who counts the stock today, and when?\"", "« Qui compte le stock aujourd'hui, et quand ? »"),
        ],
        answer: 2,
        why: B("It suggests the answer and talks about your product: the client hears a pitch and defends his current way of working. The other three ask for facts only he knows.",
          "Elle suggère la réponse et parle de votre produit : le client entend un argumentaire et défend sa façon de faire actuelle. Les trois autres demandent des faits que lui seul connaît."),
      },
    ],
  },

  'sa-meeting/sa-notes': {
    intro: B("Right after a sales meeting, your notes are messy, full of abbreviations and question marks. Those question marks are valuable: they show what is still uncertain in the deal. This dojo teaches you to turn raw notes into a three-part report (what was said, what was agreed, what is unclear) without the AI smoothing the doubts away. You finish with a record a colleague could act on, and a follow-up email that settles the main doubt the same day.",
      "Juste après un rendez-vous commercial, vos notes sont en désordre, pleines d'abréviations et de points d'interrogation. Ces points d'interrogation ont de la valeur : ils montrent ce qui reste incertain dans l'affaire. Ce dojo vous apprend à transformer des notes brutes en compte rendu en trois parties (ce qui a été dit, ce qui a été convenu, ce qui reste flou) sans que l'IA efface les doutes. Vous terminez avec une trace sur laquelle un collègue pourrait agir, et un email de suivi qui lève le doute principal le jour même."),
    concepts: [
      {
        term: B("Raw notes", "Notes brutes"),
        def: B("What you wrote or dictated during or just after the meeting, unedited: abbreviations, \"??\", half sentences. They are the only source; the report must not add anything they do not contain.",
          "Ce que vous avez écrit ou dicté pendant ou juste après le rendez-vous, sans retouche : abréviations, « ?? », phrases inachevées. Elles constituent la seule source ; le compte rendu ne doit rien ajouter qu'elles ne contiennent."),
      },
      {
        term: B("Smoothing", "Lissage"),
        def: B("What a model does when asked for a clean summary: it turns doubts into statements so the text looks finished. \"Budget ??\" becomes \"budget confirmed\".",
          "Ce que fait un modèle à qui l'on demande un résumé propre : il transforme les doutes en affirmations pour que le texte paraisse abouti. « Budget ?? » devient « budget confirmé »."),
      },
      {
        term: B("Unclear section", "Partie floue"),
        def: B("The third part of the report: each doubt, why it matters for the sale, and the question that would settle it. It is the part you act on first.",
          "La troisième partie du compte rendu : chaque doute, pourquoi il compte pour la vente, et la question qui le lèverait. C'est la partie sur laquelle vous agissez en premier."),
      },
      {
        term: B("Handover test", "Test de la reprise"),
        def: B("The check: could a colleague take over the deal tomorrow with this report alone, without calling you? If not, something essential is missing.",
          "La vérification : un collègue pourrait-il reprendre le dossier demain avec ce seul compte rendu, sans vous appeler ? Sinon, il manque quelque chose d'essentiel."),
      },
    ],
    walkthrough: {
      title: B("Mathilde writes up a meeting with an accounting firm",
        "Mathilde rédige le compte rendu d'un rendez-vous avec un cabinet comptable"),
      steps: [
        B("Mathilde sells professional coffee machines. On the pavement, she dictates: \"30 people, two floors, current machine breaks down twice a month, want beans, rent or buy ??, partner Ms Faure decides, not there, two-week trial?, call before 15 Oct\". Why: dictated within minutes, the notes still hold her doubts.",
          "Mathilde vend des machines à café professionnelles. Sur le trottoir, elle dicte : « 30 pers, deux étages, machine actuelle en panne 2 fois par mois, veulent du grain, location ou achat ??, décide l'associée Mme Faure, absente, essai 2 sem ?, rappeler avant 15/10 ». Pourquoi : dictées dans les minutes qui suivent, les notes conservent ses doutes."),
        B("She pastes them as they are and asks for three parts: said, agreed, unclear. She forbids any addition and requires \"to be confirmed\" for missing names or dates. Why: each doubt now has a place, so the model keeps it instead of smoothing it.",
          "Elle les colle telles quelles et demande trois parties : dit, convenu, flou. Elle interdit tout ajout et exige « à préciser » pour les noms ou dates manquants. Pourquoi : chaque doute dispose désormais d'une place, et le modèle le conserve au lieu de le lisser."),
        B("She reads the result. The unclear part lists rent or buy and Ms Faure's criteria, but the agreed part says \"two-week trial agreed\". Why it matters: her notes had a question mark, and the model turned a doubt into a commitment.",
          "Elle lit le résultat. La partie floue mentionne location ou achat et les critères de Mme Faure, mais la partie convenue indique « essai de deux semaines accepté ». Pourquoi c'est important : ses notes portaient un point d'interrogation, et le modèle a transformé un doute en engagement."),
        B("She corrects the prompt: \"the trial is a question, not an agreement\", and runs it again. The trial moves to the unclear part. Why: a false agreement would have led her to deliver a machine nobody had asked for.",
          "Elle corrige le prompt : « l'essai est une question, pas un accord », puis relance. L'essai passe dans la partie floue. Pourquoi : un faux accord l'aurait conduite à livrer une machine que personne n'avait demandée."),
        B("She applies the handover test: could her colleague Hugo call the firm tomorrow with this page alone? Yes: he knows the need, the decision-maker and the two open questions. She then emails the client to ask whether they prefer to rent or to buy.",
          "Elle applique le test de la reprise : son collègue Hugo pourrait-il appeler le cabinet demain avec cette seule page ? Oui : il connaît le besoin, la décideuse et les deux questions ouvertes. Elle écrit ensuite au client pour savoir s'il préfère la location ou l'achat."),
      ],
    },
    mistakes: [
      {
        wrong: B("Tidying your notes before pasting them, so they look better.",
          "Mettre vos notes au propre avant de les coller, pour qu'elles aient meilleure allure."),
        fix: B("Paste them as they are, question marks and abbreviations included. Tidying is where doubts disappear first, before the model has even seen them.",
          "Collez-les telles quelles, points d'interrogation et abréviations compris. C'est lors de la mise au propre que les doutes disparaissent en premier, avant même que le modèle les ait vus."),
      },
      {
        wrong: B("Accepting the report without comparing it with your notes.",
          "Accepter le compte rendu sans le comparer à vos notes."),
        fix: B("Check each line of the agreed part against your notes. Anything you cannot find there moves to the unclear part or goes. It takes two minutes and protects you from a false commitment.",
          "Confrontez chaque ligne de la partie convenue à vos notes. Tout ce que vous n'y retrouvez pas passe dans la partie floue ou disparaît. Cela prend deux minutes et vous protège d'un faux engagement."),
      },
      {
        wrong: B("Filing the report in the CRM and moving straight on to the next meeting.",
          "Classer le compte rendu dans le CRM et passer aussitôt au rendez-vous suivant."),
        fix: B("Act on the unclear part the same day: send the client the question that settles the most important doubt. An unsettled doubt resolves itself later, rarely in your favour.",
          "Agissez sur la partie floue le jour même : envoyez au client la question qui lève le doute le plus important. Un doute non levé se tranche plus tard de lui-même, rarement en votre faveur."),
      },
    ],
    recap: [
      B("Paste raw notes as they are: the doubts are information.",
        "Collez vos notes brutes telles quelles : les doutes sont une information."),
      B("Ask for three parts: what was said, what was agreed, what is unclear.",
        "Demandez trois parties : ce qui a été dit, ce qui a été convenu, ce qui reste flou."),
      B("Forbid additions and require \"to be confirmed\" for missing names and dates.",
        "Interdisez les ajouts et exigez « à préciser » pour les noms et dates manquants."),
      B("Check the agreed part against your notes, then act on the unclear part the same day.",
        "Confrontez la partie convenue à vos notes, puis agissez sur la partie floue le jour même."),
    ],
    further: B("Add one line to your prompt: \"list the facts that would change my forecast for this deal\". Over a few weeks, compare these lists with how your deals actually ended. You will see which doubts usually announce a lost deal in your sector, and you can raise them earlier in the next meetings.",
      "Ajoutez une ligne à votre prompt : « liste les faits qui modifieraient ma prévision pour cette affaire ». Sur quelques semaines, comparez ces listes avec l'issue réelle de vos affaires. Vous verrez quels doutes annoncent le plus souvent une affaire perdue dans votre secteur, et vous pourrez les aborder plus tôt lors des rendez-vous suivants."),
    more: [
      {
        q: B("Your notes say \"decision: partner, not met\". The report says \"decision-maker convinced\". What do you do?",
          "Vos notes indiquent « décision : associée, pas rencontrée ». Le compte rendu dit « décideuse convaincue ». Que faites-vous ?"),
        options: [
          B("Keep it: the contact seemed positive", "Vous le gardez : le contact semblait positif"),
          B("Move it to unclear, then check the rest", "Vous le passez en flou, puis vérifiez le reste"),
          B("Delete the line to keep the report short", "Vous supprimez la ligne pour rester bref"),
        ],
        answer: 1,
        why: B("The model turned an unknown into a fact. Move it back to the unclear part and check the other agreed lines: where one smoothing appeared, there may be others.",
          "Le modèle a transformé une inconnue en fait. Replacez-la dans la partie floue et vérifiez les autres lignes convenues : là où un lissage est apparu, il peut y en avoir d'autres."),
      },
      {
        q: B("Which report passes the handover test?",
          "Quel compte rendu réussit le test de la reprise ?"),
        options: [
          B("Facts, actions with names and dates, open questions", "Faits, actions avec noms et dates, questions ouvertes"),
          B("A detailed account of the meeting in time order", "Un récit détaillé du rendez-vous dans l'ordre"),
          B("Three lines: good meeting, keen client, next step soon", "Trois lignes : bon échange, client motivé, suite bientôt"),
        ],
        answer: 0,
        why: B("A colleague needs to know what to do, whom to call and what is still open. A chronological account hides the actions, and a vague summary gives none.",
          "Un collègue doit savoir quoi faire, qui appeler et ce qui reste ouvert. Un récit chronologique noie les actions, et un résumé vague n'en donne aucune."),
      },
    ],
  },

  'sa-meeting/sa-object': {
    intro: B("An objection is a short sentence that can hide very different problems: no budget, no priority, not enough trust yet, or someone else to convince. Answering the wrong problem, for example with a discount when the real issue is a partner's approval, weakens your position. This dojo teaches you to note the client's exact words, ask the AI for three possible meanings and the clue that separates them, then ask one question before answering anything.",
      "Une objection est une phrase courte qui peut masquer des problèmes très différents : pas de budget, pas de priorité, pas encore assez de confiance, ou une autre personne à convaincre. Répondre au mauvais problème, par exemple par une remise alors que l'enjeu réel est l'accord d'un associé, affaiblit votre position. Ce dojo vous apprend à noter les mots exacts du client, à demander à l'IA trois significations possibles et l'indice qui les distingue, puis à poser une question avant de répondre quoi que ce soit."),
    concepts: [
      {
        term: B("Objection", "Objection"),
        def: B("A sentence by which the client resists moving forward: \"too expensive\", \"not now\", \"I need to think\". It is a symptom; the cause is still to be found.",
          "Une phrase par laquelle le client freine l'avancée : « trop cher », « pas maintenant », « je dois réfléchir ». C'est un symptôme ; la cause reste à trouver."),
      },
      {
        term: B("Exact words", "Mots exacts"),
        def: B("The client's sentence as they said it, not your rephrasing. \"Too expensive for what it is\" and \"too expensive this year\" point to different causes; the difference lies in two or three words.",
          "La phrase du client telle qu'il l'a prononcée, et non votre reformulation. « Trop cher pour ce que c'est » et « trop cher cette année » désignent des causes différentes ; l'écart tient à deux ou trois mots."),
      },
      {
        term: B("Diagnostic question", "Question de diagnostic"),
        def: B("An open question that tells the possible meanings apart, asked before any answer: \"compared with what?\", \"what will your partner ask?\". It defends nothing; it gathers information.",
          "Une question ouverte qui départage les significations possibles, posée avant toute réponse : « par rapport à quoi ? », « que va demander votre associé ? ». Elle ne défend rien ; elle recueille de l'information."),
      },
      {
        term: B("Premature answer", "Réponse prématurée"),
        def: B("An answer given before knowing the cause, such as a discount or a list of benefits. At best it fixes one of the possible problems, and it often makes the others worse.",
          "Une réponse donnée avant de connaître la cause, comme une remise ou une liste d'avantages. Au mieux, elle règle l'un des problèmes possibles, et elle aggrave souvent les autres."),
      },
    ],
    walkthrough: {
      title: B("Rachid decodes \"We need to think about it\"",
        "Rachid décode « Il faut qu'on réfléchisse »"),
      steps: [
        B("Rachid sells vehicle tracking to a plumbing firm with 15 vans. At the end of the demo, the owner, Ms Colin, says: \"It is interesting, we need to think about it.\" He writes it down word for word and notes that she glanced at her operations manager on \"we\". Why: a rephrasing would erase both clues.",
          "Rachid vend une solution de géolocalisation à une entreprise de plomberie de 15 camionnettes. En fin de démonstration, la gérante, Mme Colin, déclare : « C'est intéressant, il faut qu'on réfléchisse. » Il note la phrase mot pour mot, et le regard adressé à son responsable d'exploitation sur « on ». Pourquoi : une reformulation effacerait ces deux indices."),
        B("He asks the model for three possible meanings, with no answer yet. It proposes: someone else must agree, fear that the technicians will see tracking as surveillance, or no urgency before the next budget. Why: listing causes first stops him reacting to the one he fears most, the price.",
          "Il demande au modèle trois significations possibles, sans réponse pour l'instant. Le modèle propose : une autre personne doit donner son accord, la crainte que les techniciens y voient une surveillance, ou l'absence d'urgence avant le prochain budget. Pourquoi : lister d'abord les causes l'empêche de réagir à celle qu'il redoute le plus, le prix."),
        B("For each meaning, he asks for the clue that would confirm it. The glance at the operations manager supports the first; any mention of the team would support the second. Why: clues let him weigh the meanings with what he actually saw.",
          "Pour chaque signification, il demande l'indice qui la confirmerait. Le regard vers le responsable d'exploitation appuie la première ; toute mention de l'équipe appuierait la deuxième. Pourquoi : les indices lui permettent de pondérer les hypothèses avec ce qu'il a réellement observé."),
        B("He asks for one open question to tell them apart and gets: \"When you discuss it together, what will be the first question on the table?\". Why: the answer names the real obstacle without forcing Ms Colin to admit a doubt.",
          "Il demande une question ouverte pour les départager et obtient : « Quand vous en discuterez ensemble, quelle sera la première question sur la table ? ». Pourquoi : la réponse nomme l'obstacle réel sans obliger Mme Colin à avouer un doute."),
        B("Two days later, he calls and asks it. She answers: \"How the technicians will take it.\" He proposes a meeting with the technicians' representative. Check: his answer addresses the cause she named, and he never mentioned the price.",
          "Deux jours plus tard, il l'appelle et pose la question. Elle répond : « Comment les techniciens vont le prendre. » Il propose une rencontre avec le représentant des techniciens. Vérification : sa réponse traite la cause qu'elle a nommée, et il n'a jamais évoqué le prix."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking the model \"how do I answer 'too expensive'?\".",
          "Demander au modèle « comment répondre à 'trop cher' ? »."),
        fix: B("Ask first for three things the sentence could mean in your context, with the clue for each. A ready-made comeback targets the most common meaning, which is not always your client's.",
          "Demandez d'abord trois choses que la phrase peut signifier dans votre contexte, avec l'indice de chacune. Une réplique toute faite vise la signification la plus courante, qui n'est pas toujours celle de votre client."),
      },
      {
        wrong: B("Rephrasing the objection in your prompt: \"the client finds it expensive\".",
          "Reformuler l'objection dans votre prompt : « le client trouve ça cher »."),
        fix: B("Paste the exact words in quotes, with the context: who said it, at what point in the meeting, what happened just before. The model can only use a clue it can see.",
          "Collez les mots exacts entre guillemets, avec le contexte : qui l'a dit, à quel moment du rendez-vous, ce qui s'est passé juste avant. Le modèle ne peut exploiter qu'un indice qu'il voit."),
      },
      {
        wrong: B("Asking the diagnostic question, then answering it yourself: \"Is it the budget? Because we can...\".",
          "Poser la question de diagnostic, puis y répondre vous-même : « C'est le budget ? Parce qu'on peut... »."),
        fix: B("Ask the question and stop talking. If you suggest the answer, the client takes the easiest way out and you learn nothing new.",
          "Posez la question et taisez-vous. Si vous suggérez la réponse, le client choisit la sortie la plus facile et vous n'apprenez rien de nouveau."),
      },
    ],
    recap: [
      B("An objection is a symptom: several causes can hide behind the same sentence.",
        "Une objection est un symptôme : plusieurs causes peuvent se cacher derrière la même phrase."),
      B("Note the exact words and the context; the clues are in the details.",
        "Notez les mots exacts et le contexte ; les indices sont dans les détails."),
      B("Ask the AI for three meanings and the clue that separates them.",
        "Demandez à l'IA trois significations et l'indice qui les distingue."),
      B("Ask one open question before answering, then let the client speak.",
        "Posez une question ouverte avant de répondre, puis laissez parler le client."),
    ],
    further: B("Train the reflex: ask the model to play a client who raises an objection with a hidden cause it picks without telling you. Your task is to find the cause in two questions at most. Then ask it to reveal the cause and comment on your questions. Three rounds a week are enough to make asking before answering a habit.",
      "Entraînez le réflexe : demandez au modèle de jouer un client qui soulève une objection dont il choisit la cause sans vous la dire. Votre mission : trouver la cause en deux questions au plus. Demandez-lui ensuite de révéler la cause et de commenter vos questions. Trois séances par semaine suffisent pour faire de « demander avant de répondre » une habitude."),
    more: [
      {
        q: B("The client says: \"It is too expensive compared with what we pay now.\" What clue does this give you?",
          "Le client dit : « C'est trop cher par rapport à ce qu'on paie aujourd'hui. » Quel indice cela vous donne-t-il ?"),
        options: [
          B("They have no budget at all", "Il n'a aucun budget"),
          B("They compare you with a current solution", "Il vous compare à une solution actuelle"),
          B("They do not yet trust your company or your offer", "Il ne fait pas encore confiance à votre entreprise ni à votre offre"),
        ],
        answer: 1,
        why: B("\"Compared with what we pay now\" points to a comparison. Your next question: what does the current solution include, and what does it cost in time? The discussion moves to value, not to a discount.",
          "« Par rapport à ce qu'on paie aujourd'hui » désigne une comparaison. Votre question suivante : que comprend la solution actuelle, et que coûte-t-elle en temps ? La discussion porte alors sur la valeur, et non sur une remise."),
      },
      {
        q: B("You asked \"What will your partner ask you?\". The client stays silent for a few seconds. What do you do?",
          "Vous avez demandé « Que va vous demander votre associé ? ». Le client se tait quelques secondes. Que faites-vous ?"),
        options: [
          B("Suggest: \"Probably the price?\"", "Vous suggérez : « Sans doute le prix ? »"),
          B("Rephrase the question more simply", "Vous reformulez la question plus simplement"),
          B("Wait for the answer", "Vous attendez la réponse"),
          B("Move on to your benefits", "Vous passez à vos avantages"),
        ],
        answer: 2,
        why: B("The client is thinking about the real obstacle. Suggesting an answer offers an easy way out; waiting lets the true cause come out, which is what the question was for.",
          "Le client réfléchit à l'obstacle réel. Suggérer une réponse lui offre une sortie facile ; attendre laisse émerger la véritable cause, ce qui était le but de la question."),
      },
    ],
  },

  /* ================================================================ */
  /* COMMERCIAL · CONCLURE                                            */
  /* ================================================================ */

  'sa-close/sa-proposal': {
    intro: B("A sales proposal is often read by someone who was not in the meeting: a finance director, a partner, a board. They read it quickly, often on a phone, and decide from the first paragraph whether to go on. This dojo teaches you to write a one-page proposal for that absent reader: their problem in their words with their number, what you do, what it costs, and the first step with a date. The AI drafts; you supply the facts and check that the page stands on its own.",
      "Une proposition commerciale est souvent lue par une personne absente du rendez-vous : un directeur financier, un associé, un conseil. Elle la lit vite, souvent sur un téléphone, et décide dès le premier paragraphe si elle poursuit. Ce dojo vous apprend à rédiger une proposition d'une page pour ce lecteur absent : son problème avec ses mots et son chiffre, ce que vous faites, ce que cela coûte, et la première étape avec une date. L'IA rédige le brouillon ; vous fournissez les faits et vérifiez que la page se suffit à elle-même."),
    concepts: [
      {
        term: B("Absent reader", "Lecteur absent"),
        def: B("The person who decides but did not attend the meeting. They know nothing of your conversation, so the page must hold everything they need to say yes.",
          "La personne qui décide sans avoir assisté au rendez-vous. Elle ignore tout de votre échange : la page doit donc contenir tout ce dont elle a besoin pour dire oui."),
      },
      {
        term: B("Client's number", "Chiffre du client"),
        def: B("A figure the client gave you, such as \"6 stores without a manager for 3 months\". Placed in the first paragraph, it shows you understood and lets the reader recognise their own problem.",
          "Un chiffre que le client vous a donné, comme « 6 magasins sans responsable depuis 3 mois ». Placé dans le premier paragraphe, il montre que vous avez compris et permet au lecteur de reconnaître son propre problème."),
      },
      {
        term: B("First step", "Première étape"),
        def: B("A small, concrete, dated action that starts the project: a 30-minute call in a given week, a site visit. It replaces \"feel free to contact us\", which leaves the initiative to the reader.",
          "Une action courte, concrète et datée qui lance le projet : un appel de 30 minutes telle semaine, une visite sur site. Elle remplace « n'hésitez pas à nous contacter », qui laisse l'initiative au lecteur."),
      },
      {
        term: B("Standalone page", "Page autonome"),
        def: B("A proposal that can be forwarded without any explanation. If your contact has to add a paragraph for it to be understood, the page is not standalone.",
          "Une proposition que l'on peut transférer sans aucune explication. Si votre contact doit ajouter un paragraphe pour qu'elle soit comprise, la page n'est pas autonome."),
      },
    ],
    walkthrough: {
      title: B("Camille writes a cleaning proposal for a medical centre",
        "Camille rédige une proposition de nettoyage pour un centre médical"),
      steps: [
        B("Camille runs a commercial cleaning company. She tells the model who the reader is: the board of doctors of a 12-practitioner medical centre, who were not at her meeting with Mr Blanc, the administrator. Why: naming the absent reader changes what must be explained.",
          "Camille dirige une entreprise de nettoyage. Elle indique au modèle qui est le lecteur : le conseil des médecins d'un centre de 12 praticiens, absent de son rendez-vous avec M. Blanc, l'administrateur. Pourquoi : nommer le lecteur absent change ce qu'il faut expliquer."),
        B("She supplies the first paragraph's material in Mr Blanc's words: \"our current provider misses one visit in four, and patients complain about the waiting room\". Why: the doctors recognise their centre in that sentence; \"hygiene excellence\" would tell them nothing.",
          "Elle fournit la matière du premier paragraphe avec les mots de M. Blanc : « notre prestataire actuel saute un passage sur quatre, et les patients se plaignent de la salle d'attente ». Pourquoi : les médecins reconnaissent leur centre dans cette phrase ; « l'excellence en hygiène » ne leur dirait rien."),
        B("She gives the offer and price as facts: daily cleaning at 7 pm, disinfection of consulting rooms, 1,450 euros excl. VAT per month, one month's notice. Why: the model must not round or embellish a price the reader will compare with the current invoice.",
          "Elle donne l'offre et le prix comme des faits : nettoyage quotidien à 19 h, désinfection des cabinets, 1 450 euros HT par mois, préavis d'un mois. Pourquoi : le modèle ne doit ni arrondir ni embellir un prix que le lecteur comparera à la facture actuelle."),
        B("She asks for four blocks (problem, what we do, price, first step) and forbids company history and references. First step: a walk-through of the premises with Mr Blanc in the week of 13 October. Why: a dated step gives the board a simple decision to make.",
          "Elle demande quatre blocs (problème, ce que nous faisons, prix, première étape) et interdit historique et références. Première étape : une visite des locaux avec M. Blanc la semaine du 13 octobre. Pourquoi : une étape datée donne au conseil une décision simple à prendre."),
        B("She asks the model to play a doctor reading on a phone and to list the questions left unanswered. It asks: \"What happens if a visit is missed?\". Camille adds one line on her replacement guarantee. Check: the page now answers that question without her.",
          "Elle demande au modèle de jouer un médecin qui lit sur son téléphone et de lister les questions restées sans réponse. Il demande : « Que se passe-t-il si un passage est manqué ? ». Camille ajoute une ligne sur sa garantie de remplacement. Vérification : la page répond désormais à cette question sans elle."),
      ],
    },
    mistakes: [
      {
        wrong: B("Writing for the person you met, with references to your conversation such as \"as discussed\".",
          "Écrire pour la personne rencontrée, avec des renvois à votre échange comme « comme convenu »."),
        fix: B("Name the absent reader in the prompt and forbid references to the meeting. Every fact the reader needs must be written on the page, not implied.",
          "Nommez le lecteur absent dans le prompt et interdisez les renvois au rendez-vous. Chaque fait utile au lecteur doit figurer sur la page, et non être sous-entendu."),
      },
      {
        wrong: B("Opening with your company: history, values, number of clients.",
          "Ouvrir sur votre entreprise : historique, valeurs, nombre de clients."),
        fix: B("Open on their problem, in their words, with their number. Your company can fit in one line at the end; the reader decides in the first paragraph whether the page concerns them.",
          "Ouvrez sur leur problème, avec leurs mots et leur chiffre. Votre entreprise peut tenir en une ligne à la fin ; le lecteur décide dès le premier paragraphe si la page le concerne."),
      },
      {
        wrong: B("Ending with \"Do not hesitate to contact us for further information\".",
          "Terminer par « N'hésitez pas à nous contacter pour tout complément d'information »."),
        fix: B("End with one dated first step, such as \"a 30-minute call in the week of 6 October\". The reader then has a yes or a no to give, not an initiative to take.",
          "Terminez par une première étape datée, comme « un appel de 30 minutes la semaine du 6 octobre ». Le lecteur a alors un oui ou un non à donner, et non une initiative à prendre."),
      },
    ],
    recap: [
      B("Write for the decision-maker who was not in the meeting.",
        "Écrivez pour le décideur qui n'assistait pas au rendez-vous."),
      B("Open on their problem, in their words, with their number.",
        "Ouvrez sur leur problème, avec leurs mots et leur chiffre."),
      B("One paragraph on what you do, one on the price, stated plainly with its unit.",
        "Un paragraphe sur ce que vous faites, un sur le prix, énoncé clairement avec son unité."),
      B("End with a dated first step, then test the page with the model playing the absent reader.",
        "Terminez par une première étape datée, puis testez la page en faisant jouer au modèle le lecteur absent."),
    ],
    further: B("Gather your last three signed proposals and your last three lost ones. Paste them into your AI tool, client names removed, and ask what the signed ones do in their first paragraph that the lost ones do not. Turn the answer into one extra rule in your proposal prompt.",
      "Rassemblez vos trois dernières propositions signées et vos trois dernières perdues. Collez-les dans votre outil d'IA, noms des clients retirés, et demandez ce que font les propositions signées dans leur premier paragraphe que les autres ne font pas. Transformez la réponse en règle supplémentaire dans votre prompt de proposition."),
    more: [
      {
        q: B("The model writes: \"As discussed on Tuesday, here is our offer.\" What is the problem?",
          "Le modèle écrit : « Comme évoqué mardi, voici notre offre. » Quel est le problème ?"),
        options: [
          B("It is too informal for a proposal", "C'est trop familier pour une proposition"),
          B("It should give the exact time of the meeting", "Il faudrait l'heure exacte du rendez-vous"),
          B("The decision-maker was not there on Tuesday", "Le décideur n'était pas là mardi"),
        ],
        answer: 2,
        why: B("\"As discussed\" refers to a conversation the decision-maker did not hear. Replace it with what was said: their problem, in their words.",
          "« Comme évoqué » renvoie à un échange que le décideur n'a pas entendu. Remplacez-le par ce qui a été dit : leur problème, avec leurs mots."),
      },
      {
        q: B("Your price paragraph says \"a competitive budget, adapted to your needs\". What do you write instead?",
          "Votre paragraphe prix indique « un budget compétitif, adapté à vos besoins ». Qu'écrivez-vous à la place ?"),
        options: [
          B("The amount, its unit and what it includes", "Le montant, son unité et ce qu'il comprend"),
          B("A price range, to keep some room for negotiation", "Une fourchette, pour garder une marge de négociation"),
          B("Nothing: the price is given by phone", "Rien : le prix se donne par téléphone"),
        ],
        answer: 0,
        why: B("The decision-maker needs a number to decide. A vague phrase or a range sends them back to your contact with a question, and the page no longer stands on its own.",
          "Le décideur a besoin d'un chiffre pour trancher. Une formule vague ou une fourchette le renvoie vers votre contact avec une question, et la page cesse d'être autonome."),
      },
    ],
  },

  'sa-close/sa-price': {
    intro: B("Announcing a price is the moment many salespeople rush: they justify it, add a discount, or fill the silence. Each of these tells the client that the price is open to discussion. This dojo teaches a simple sequence: say the number and its unit in one sentence, stop talking, and answer the client's first reaction by going back to what the offer replaces. You rehearse it with the AI playing the client, so the first time you hold the silence is not in front of a real buyer.",
      "L'annonce du prix est le moment où bien des commerciaux se précipitent : ils justifient, ajoutent une remise ou comblent le silence. Chacun de ces réflexes indique au client que le prix est négociable. Ce dojo enseigne une séquence simple : énoncer le chiffre et son unité en une phrase, se taire, puis répondre à la première réaction du client en revenant à ce que l'offre remplace. Vous la répétez avec l'IA dans le rôle du client, afin que la première fois où vous tenez le silence ne soit pas face à un véritable acheteur."),
    concepts: [
      {
        term: B("Price sentence", "Phrase de prix"),
        def: B("One sentence with the number, the unit and what it includes: \"It is 1,200 euros per month for the three sites, maintenance included.\" Nothing before to prepare it, nothing after to soften it.",
          "Une phrase qui contient le chiffre, l'unité et ce qui est compris : « C'est 1 200 euros par mois pour les trois sites, maintenance comprise. » Rien avant pour la préparer, rien après pour l'adoucir."),
      },
      {
        term: B("Silence after the price", "Silence après le prix"),
        def: B("The pause you leave after the price sentence. It gives the client time to calculate; their first words then tell you where they stand.",
          "La pause que vous ménagez après la phrase de prix. Elle laisse au client le temps de calculer ; ses premiers mots vous indiquent ensuite où il en est."),
      },
      {
        term: B("Reference point", "Point de comparaison"),
        def: B("What the client compares your price with. If it is nothing, the number looks big. If it is what the offer replaces (hours, errors, repairs, another supplier), the number becomes a difference.",
          "Ce à quoi le client compare votre prix. S'il ne le compare à rien, le chiffre paraît élevé. S'il le compare à ce que l'offre remplace (heures, erreurs, réparations, autre fournisseur), le chiffre devient un écart."),
      },
      {
        term: B("Unrequested discount", "Remise non demandée"),
        def: B("A price cut offered before the client asked for one. It signals that your first price was not serious and invites a second round of negotiation.",
          "Une baisse de prix proposée avant que le client ne l'ait demandée. Elle signale que votre premier prix n'était pas sérieux et appelle une seconde négociation."),
      },
    ],
    walkthrough: {
      title: B("Bastien rehearses the price of a kitchen maintenance contract",
        "Bastien répète l'annonce du prix d'un contrat de maintenance de cuisine"),
      steps: [
        B("Bastien sells maintenance for commercial kitchens. He writes his sentence first: \"The annual contract is 3,600 euros excl. VAT for your two kitchens, with two preventive visits and emergency call-outs within 24 hours.\" Why: a sentence written in advance is said calmly.",
          "Bastien vend la maintenance de cuisines professionnelles. Il écrit d'abord sa phrase : « Le contrat annuel est de 3 600 euros HT pour vos deux cuisines, avec deux visites préventives et des dépannages sous 24 heures. » Pourquoi : une phrase écrite à l'avance se prononce calmement."),
        B("He prepares the reference point: last year, the group paid for three emergency repairs and lost a Saturday service when a cold room failed. He asks the model to phrase it as a question. Why: if the client objects, he compares the price with what it replaces instead of defending the number.",
          "Il prépare le point de comparaison : l'an dernier, le groupe a payé trois dépannages d'urgence et perdu un service du samedi à cause d'une chambre froide en panne. Il demande au modèle de le formuler en question. Pourquoi : en cas d'objection, il compare le prix à ce qu'il remplace au lieu de défendre le chiffre."),
        B("He sets up the role-play: the model plays Ms Durand, who runs two restaurants, interested but careful with money, one line at a time, and must stop him if he justifies before she reacts. Why: the rule makes his habit visible at the very moment it appears.",
          "Il met en place le jeu de rôle : le modèle incarne Mme Durand, gérante de deux restaurants, intéressée mais prudente, une réplique à la fois, et doit l'arrêter s'il justifie avant qu'elle ne réagisse. Pourquoi : la règle rend son réflexe visible au moment exact où il apparaît."),
        B("In round one, he adds \"it pays for itself quickly\" right after the price, and the model stops him. In round two, he says the sentence and types \"...\" until she speaks: \"That is more than I expected.\" He answers: \"What did last year's repairs cost you, roughly?\".",
          "Au premier tour, il ajoute « c'est vite rentabilisé » juste après le prix, et le modèle l'arrête. Au deuxième tour, il prononce sa phrase et tape « ... » jusqu'à ce qu'elle parle : « C'est plus que ce que j'imaginais. » Il répond : « Combien vous ont coûté les dépannages de l'an dernier, à peu près ? »."),
        B("He asks for three remarks and for the clearest price sentence he said. Check: one sentence, no discount offered, and his answer to the objection was about what the contract replaces. He copies the final sentence onto the card he will keep during the call.",
          "Il demande trois remarques et la phrase de prix la plus nette qu'il a prononcée. Vérification : une seule phrase, aucune remise proposée, et sa réponse à l'objection portait sur ce que le contrat remplace. Il recopie la phrase finale sur la fiche qu'il gardera pendant l'appel."),
      ],
    },
    mistakes: [
      {
        wrong: B("Preparing a long justification to deliver right after the price.",
          "Préparer une longue justification à dérouler juste après le prix."),
        fix: B("Keep it for later: it becomes your answer if the client objects, starting from what the offer replaces. Said straight after the price, it sounds like an apology.",
          "Gardez-la pour plus tard : elle devient votre réponse si le client objecte, en partant de ce que l'offre remplace. Prononcée juste après le prix, elle sonne comme une excuse."),
      },
      {
        wrong: B("Asking the AI \"how do I announce my price so that it does not seem expensive?\".",
          "Demander à l'IA « comment annoncer mon prix pour qu'il ne paraisse pas cher ? »."),
        fix: B("Ask it to play the client and to stop you whenever you justify or discount unasked. A model asked for help pleases you with arguments; a model playing a client shows you your reflexes.",
          "Demandez-lui de jouer le client et de vous arrêter dès que vous justifiez ou remisez sans y être invité. Un modèle sollicité pour aider vous flatte avec des arguments ; un modèle qui joue le client vous montre vos réflexes."),
      },
      {
        wrong: B("Answering \"that is expensive\" by explaining the number: \"it includes the hours, the travel...\".",
          "Répondre à « c'est cher » en détaillant le chiffre : « cela comprend les heures, les déplacements... »."),
        fix: B("Go back to the reference point with a question: \"What does it cost you today to...?\". The discussion moves from your price to the comparison, and the client does the calculation.",
          "Revenez au point de comparaison par une question : « Combien vous coûte aujourd'hui le fait de... ? ». La discussion passe de votre prix à la comparaison, et c'est le client qui fait le calcul."),
      },
    ],
    recap: [
      B("Write your price sentence in advance: number, unit, what it includes.",
        "Écrivez votre phrase de prix à l'avance : chiffre, unité, contenu."),
      B("After the price, stop talking: the client's first words are information.",
        "Après le prix, taisez-vous : les premiers mots du client sont une information."),
      B("If they object, go back to what the offer replaces, ideally with a question.",
        "En cas d'objection, revenez à ce que l'offre remplace, de préférence par une question."),
      B("Rehearse with the AI playing a client who stops you when you justify.",
        "Répétez avec l'IA dans le rôle d'un client qui vous arrête dès que vous justifiez."),
    ],
    further: B("Rehearse the three most likely reactions in turn: silence, a question about scope, and \"that is more than planned\". Ask the model to play each one on purpose and write your best answer to each on your call card. After a real call, note which reaction came and adjust the card.",
      "Répétez successivement les trois réactions les plus probables : le silence, une question sur le périmètre, et « c'est plus que prévu ». Demandez au modèle de jouer chacune délibérément, et notez votre meilleure réponse à chacune sur votre fiche d'appel. Après un appel réel, notez la réaction survenue et ajustez la fiche."),
    more: [
      {
        q: B("Right after your price, the client asks: \"Is maintenance included?\". What does this reaction tell you?",
          "Juste après votre prix, le client demande : « La maintenance est-elle comprise ? ». Que vous apprend cette réaction ?"),
        options: [
          B("They want a discount", "Il veut une remise"),
          B("They reject the price and are about to leave", "Il rejette le prix et s'apprête à partir"),
          B("They are checking the scope: a good sign", "Il vérifie le périmètre : c'est bon signe"),
        ],
        answer: 2,
        why: B("A question about scope means the client is working out what they get for the number: they are considering it. Answer precisely, then stop talking again.",
          "Une question sur le périmètre signifie que le client évalue ce qu'il obtient pour ce chiffre : il l'envisage. Répondez précisément, puis taisez-vous de nouveau."),
      },
      {
        q: B("In the role-play, the model stops you: you added \"we can adapt\" after the price. What do you change?",
          "Dans le jeu de rôle, le modèle vous arrête : vous avez ajouté « on peut s'adapter » après le prix. Que changez-vous ?"),
        options: [
          B("Nothing: flexibility reassures clients", "Rien : la souplesse rassure les clients"),
          B("Say the price sentence, then nothing", "Vous dites la phrase de prix, puis rien"),
          B("Announce a higher price to keep a margin", "Vous annoncez plus haut pour garder une marge"),
        ],
        answer: 1,
        why: B("\"We can adapt\" opens the negotiation before the client has even reacted. Say your sentence and wait: if they want to negotiate, they will say so, and you will learn why.",
          "« On peut s'adapter » ouvre la négociation avant même que le client ait réagi. Dites votre phrase et attendez : s'il veut négocier, il le dira, et vous saurez pourquoi."),
      },
    ],
  },

  'sa-close/sa-after': {
    intro: B("Signing is not the end of a sale: whether the client renews is largely decided in the first month, by whether something really changes for them. This dojo teaches you to structure the first thirty days as three dates (day 7, day 15, day 30), each with one concrete action and a named person. The AI drafts the plan and the email that books the dates; you supply the names and the client's own goal. You leave with a start-up plan that you and the client can both check.",
      "La signature ne clôt pas la vente : le renouvellement se décide en grande partie pendant le premier mois, selon que quelque chose change réellement pour le client. Ce dojo vous apprend à structurer les trente premiers jours en trois dates (J+7, J+15, J+30), chacune avec une action concrète et une personne nommée. L'IA rédige le plan et l'email qui fixe les dates ; vous fournissez les noms et l'objectif du client, formulé avec ses mots. Vous repartez avec un plan de démarrage que vous et le client pouvez vérifier."),
    concepts: [
      {
        term: B("Onboarding", "Onboarding"),
        def: B("The period right after signing when the client starts using what they bought. It ends when the first concrete result is visible, not when the account is handed over.",
          "La période qui suit la signature, pendant laquelle le client commence à utiliser ce qu'il a acheté. Elle s'achève lorsque le premier résultat concret est visible, et non lorsque le dossier est transmis."),
      },
      {
        term: B("First value", "Première preuve de valeur"),
        def: B("The first result the client can observe, such as the first invoice sent from the new tool. The sooner it appears, the sooner the purchase feels justified.",
          "Le premier résultat observable par le client, comme la première facture envoyée depuis le nouvel outil. Plus il apparaît tôt, plus vite l'achat semble justifié."),
      },
      {
        term: B("Named owner", "Responsable nommé"),
        def: B("A person identified by name for each action, on the client's side and on yours. \"The team\" cannot be called when nothing moves; Sandrine can.",
          "Une personne identifiée par son nom pour chaque action, chez le client comme chez vous. On ne peut pas appeler « l'équipe » quand rien n'avance ; on peut appeler Sandrine."),
      },
      {
        term: B("Sign of progress", "Signe de progression"),
        def: B("Something you can see or count that shows the action happened: calendars online, five bookings made online. It turns \"how is it going?\" into a check.",
          "Un élément observable ou mesurable qui montre que l'action a eu lieu : agendas en ligne, cinq réservations faites en ligne. Il transforme « comment ça se passe ? » en vérification."),
      },
    ],
    walkthrough: {
      title: B("Guillaume starts a carpentry firm on his invoicing tool",
        "Guillaume lance une menuiserie sur son outil de facturation"),
      steps: [
        B("Guillaume sells an invoicing tool. He pastes the client's goal in their words, \"stop chasing unpaid invoices by hand\", and the names: Ms Roche, office manager, who will use the tool; Mr Petit, the owner, who signed. Why: the plan must aim at their goal and rest on real people.",
          "Guillaume vend un outil de facturation. Il colle l'objectif du client avec ses mots, « arrêter de relancer les impayés à la main », et les noms : Mme Roche, responsable administrative, qui utilisera l'outil ; M. Petit, le gérant, qui a signé. Pourquoi : le plan doit viser leur objectif et reposer sur des personnes réelles."),
        B("He asks for one single action by day 7 and gets a list of five. He insists on one thing. The model keeps: \"Ms Roche sends the month's first 10 invoices from the tool\". Why: one clear action gets done; five become a to-do list postponed to next week.",
          "Il demande une seule action pour J+7 et obtient une liste de cinq. Il insiste : une seule. Le modèle retient : « Mme Roche envoie les 10 premières factures du mois depuis l'outil ». Pourquoi : une action claire est accomplie ; cinq deviennent une liste de tâches reportée à la semaine suivante."),
        B("For day 15, he asks for a 15-minute check with a sign of progress: automatic reminders switched on for overdue invoices, and how many were sent. Why: a countable sign turns the checkpoint into a fact rather than an impression.",
          "Pour J+15, il demande un point de 15 minutes avec un signe de progression : les relances automatiques activées pour les factures échues, et le nombre de relances envoyées. Pourquoi : un signe dénombrable transforme le point d'étape en fait plutôt qu'en impression."),
        B("For day 30, he asks for a review with Mr Petit, booked now, on the reason he bought: how many overdue invoices were chased without a phone call. Why: the decision-maker must see his own goal reached, and booking is easy today but hard in three weeks.",
          "Pour J+30, il demande un bilan avec M. Petit, fixé dès maintenant, sur la raison de son achat : combien de factures échues ont été relancées sans un seul appel. Pourquoi : le décideur doit voir son propre objectif atteint, et fixer la date est facile aujourd'hui, difficile dans trois semaines."),
        B("He asks for the email to Ms Roche proposing the three dates, eight lines at most, with an exact slot for day 30. Check: each step has a first name, day 7 holds a single action, and the day-30 slot has a date and a time. He sends it that afternoon.",
          "Il demande l'email à Mme Roche proposant les trois dates, huit lignes au plus, avec un créneau précis pour J+30. Vérification : chaque étape porte un nom, J+7 ne contient qu'une action, et le créneau de J+30 a une date et une heure. Il l'envoie l'après-midi même."),
      ],
    },
    mistakes: [
      {
        wrong: B("Accepting a plan full of phases, workshops and \"teams\".",
          "Accepter un plan rempli de phases, d'ateliers et d'« équipes »."),
        fix: B("Ask for three dates, one action each, one first name each. Where the model has no name, require \"to ask\" rather than a department, then ask the client for the name.",
          "Demandez trois dates, une action et un prénom pour chacune. Là où le modèle n'a pas de nom, exigez « à demander » plutôt qu'un service, puis demandez ce nom au client."),
      },
      {
        wrong: B("Leaving the day-30 review \"to be scheduled later\".",
          "Laisser le bilan de J+30 « à planifier plus tard »."),
        fix: B("Book it on the day of signing, with a date and a time, in the decision-maker's calendar. A meeting already in the calendar takes place; one still to schedule gets postponed.",
          "Fixez-le le jour de la signature, avec une date et une heure, dans l'agenda du décideur. Un rendez-vous déjà inscrit a lieu ; un rendez-vous à planifier est reporté."),
      },
      {
        wrong: B("Measuring the start by your own actions: \"training delivered\", \"account created\".",
          "Mesurer le démarrage à vos propres actions : « formation dispensée », « compte créé »."),
        fix: B("Measure it by what the client did, such as \"first 10 invoices sent from the tool\". All your actions can be completed while nothing changes on their side.",
          "Mesurez-le à ce que le client a fait, par exemple « 10 premières factures envoyées depuis l'outil ». Toutes vos actions peuvent être accomplies sans que rien ne change de son côté."),
      },
    ],
    recap: [
      B("Renewal is largely decided in the first month, by what changes for the client.",
        "Le renouvellement se décide en grande partie le premier mois, selon ce qui change pour le client."),
      B("Structure the start in three dates: one action by day 7, a check at day 15, a review at day 30.",
        "Structurez le démarrage en trois dates : une action à J+7, un point à J+15, un bilan à J+30."),
      B("Each action has a named owner; where a name is missing, ask the client.",
        "Chaque action a un responsable nommé ; si un nom manque, demandez-le au client."),
      B("Book the day-30 review with the decision-maker on the day of signing.",
        "Fixez le bilan de J+30 avec le décideur le jour même de la signature."),
    ],
    further: B("Turn the plan into a shared checklist with the client: three lines, three names, three dates, one sign of progress each. Send it at signing and tick it together at day 15. If day 7 is missed, call the named person that same day, before the delay grows.",
      "Transformez le plan en liste partagée avec le client : trois lignes, trois noms, trois dates, un signe de progression pour chacune. Envoyez-la à la signature et cochez-la ensemble à J+15. Si l'étape de J+7 n'est pas tenue, appelez la personne nommée le jour même, avant que le retard ne s'installe."),
    more: [
      {
        q: B("At day 7, the action is not done. Ms Roche says she lacked time. What do you do?",
          "À J+7, l'action n'est pas faite. Mme Roche dit avoir manqué de temps. Que faites-vous ?"),
        options: [
          B("Wait for the day-15 check", "Vous attendez le point de J+15"),
          B("Tell the owner that his team is running late", "Vous signalez au gérant le retard de son équipe"),
          B("Do it with her this week, in 20 minutes", "Vous le faites avec elle cette semaine, en 20 minutes"),
        ],
        answer: 2,
        why: B("The first action is the one that proves the purchase. Doing it with her removes the obstacle, time, without blaming anyone. Waiting a week lets the start slip.",
          "La première action est celle qui prouve l'intérêt de l'achat. La faire avec elle lève l'obstacle, le temps, sans accuser personne. Attendre une semaine laisse le démarrage glisser."),
      },
      {
        q: B("Which day-15 sign of progress is the most useful?",
          "Quel signe de progression est le plus utile à J+15 ?"),
        options: [
          B("\"The client seems satisfied with the tool so far\"", "« Le client semble satisfait de l'outil pour l'instant »"),
          B("\"Training completed\"", "« Formation effectuée »"),
          B("\"Account fully set up\"", "« Compte entièrement paramétré »"),
          B("\"12 reminders sent automatically\"", "« 12 relances envoyées automatiquement »"),
        ],
        answer: 3,
        why: B("It can be counted and it shows the client's own goal moving. Satisfaction is an impression, and training or setup are your actions, which can be done while nothing changes for them.",
          "Il se compte et montre l'objectif du client en marche. La satisfaction est une impression, et la formation ou le paramétrage sont vos actions, réalisables sans que rien ne change pour lui."),
      },
    ],
  },
}
