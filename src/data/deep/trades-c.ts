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

  /* ================================================================ */
  /* ASSISTANT · LE FLOT                                              */
  /* ================================================================ */

  'as-flow/as-inbox': {
    intro: B("An overflowing inbox is hard to face because every email looks like a decision. This dojo teaches you to sort by what each message asks of you, not by who sent it, using four closed piles: reply, do, wait for someone, nothing. The AI sorts a list of emails into the piles with a four-word action for each; you clear the \"nothing\" pile first, then work through a short list. You will also learn what not to paste, and how to check the sorting.",
      "Une boîte de réception qui déborde est difficile à affronter, car chaque email ressemble à une décision. Ce dojo vous apprend à trier selon ce que chaque message vous demande, et non selon son expéditeur, à l'aide de quatre tas fermés : répondre, faire, attendre quelqu'un, rien. L'IA répartit une liste d'emails dans ces tas, avec une action en quatre mots pour chacun ; vous videz d'abord le tas « rien », puis traitez une liste courte. Vous apprendrez aussi ce qu'il ne faut pas coller, et comment contrôler le tri."),
    concepts: [
      {
        term: B("Sorting by request", "Tri par demande"),
        def: B("Classifying each email by what it expects from you, not by its sender or its date. A copy from the director is \"nothing\"; a supplier asking for a signature is \"do\".",
          "Classer chaque email selon ce qu'il attend de vous, et non selon son expéditeur ou sa date. Une copie du directeur relève de « rien » ; un fournisseur qui demande une signature relève de « faire »."),
      },
      {
        term: B("Closed categories", "Catégories fermées"),
        def: B("A fixed list of piles, each with a definition. The model must choose one of them and cannot invent \"important\" or \"see later\", which would bring the mess back.",
          "Une liste figée de tas, chacun avec sa définition. Le modèle doit en choisir un et ne peut pas inventer « important » ou « à voir plus tard », qui ramèneraient le désordre."),
      },
      {
        term: B("Four-word action", "Action en quatre mots"),
        def: B("The next step written as a verb and an object: \"send signed quote\", \"book room Thursday\". It forces a decision where a summary would only describe.",
          "La prochaine étape écrite sous forme de verbe et de complément : « envoyer devis signé », « réserver salle jeudi ». Elle impose une décision là où un résumé se contenterait de décrire."),
      },
      {
        term: B("Waiting pile", "Tas « attendre »"),
        def: B("Emails whose next step depends on someone else. Note who and by when: they are not \"nothing\", because a missing answer can block a whole file.",
          "Les emails dont la suite dépend de quelqu'un d'autre. Notez qui et pour quand : ils ne relèvent pas de « rien », car une réponse qui manque peut bloquer tout un dossier."),
      },
    ],
    walkthrough: {
      title: B("Nora sorts 35 emails after a trade show",
        "Nora trie 35 emails au retour d'un salon"),
      steps: [
        B("Nora, assistant to the director of an events agency, exports the unread emails as sender | subject | first sentence, without the bodies, and removes client personal details. Why: the first sentence usually shows the request, and pasting less exposes less.",
          "Nora, assistante du directeur d'une agence événementielle, exporte les emails non lus sous la forme expéditeur | objet | première phrase, sans le corps des messages, et retire les données personnelles des clients. Pourquoi : la première phrase suffit souvent à voir la demande, et coller moins expose moins."),
        B("She pastes the 35 lines with the four piles defined, a four-word action per email, and a deadline only if the email states one. Why: closed piles force a choice, and the deadline rule stops the model from inventing urgency.",
          "Elle colle les 35 lignes avec les quatre tas définis, une action en quatre mots par email, et une échéance seulement si l'email en mentionne une. Pourquoi : des tas fermés imposent un choix, et la règle sur les échéances empêche le modèle d'inventer de l'urgence."),
        B("The table shows 14 NOTHING (show newsletters, copies, badge-scan notifications), 9 REPLY, 7 DO, 3 WAIT and 2 \"to check\". She archives the 14 at once. Why: it takes one minute and removes 40% of the volume before any reading.",
          "Le tableau affiche 14 RIEN (lettres d'information du salon, copies, notifications de scan de badges), 9 RÉPONDRE, 7 FAIRE, 3 ATTENDRE et 2 « à vérifier ». Elle archive aussitôt les 14. Pourquoi : cela prend une minute et retire 40 % du volume avant toute lecture."),
        B("She opens the two \"to check\" emails herself. One is a caterer's invoice with a payment reminder: DO, \"pay caterer's invoice\". Why: \"to check\" marks what the model could not decide, and those lines deserve human eyes.",
          "Elle ouvre elle-même les deux emails « à vérifier ». L'un est une facture de traiteur assortie d'un rappel de paiement : FAIRE, « payer facture traiteur ». Pourquoi : « à vérifier » signale ce que le modèle n'a pas pu trancher, et ces lignes méritent un regard humain."),
        B("She compares five random lines with the real emails, then works through REPLY and DO in order and notes the three WAIT with who and by when. Check: the five sampled lines were in the right pile, so she can rely on the rest of the list.",
          "Elle compare cinq lignes prises au hasard avec les emails réels, puis traite RÉPONDRE et FAIRE dans l'ordre et note les trois ATTENDRE avec qui et pour quand. Vérification : les cinq lignes contrôlées étaient dans le bon tas ; elle peut donc s'appuyer sur le reste de la liste."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking \"which emails are important?\".",
          "Demander « quels emails sont importants ? »."),
        fix: B("Give four defined piles and demand exactly one pile per email. \"Important\" has no definition, so the model makes one up, often based on the sender.",
          "Fournissez quatre tas définis et exigez un seul tas par email. « Important » n'a pas de définition : le modèle en invente donc une, souvent fondée sur l'expéditeur."),
      },
      {
        wrong: B("Pasting full email bodies with client data, contracts or HR matters into any AI tool at hand.",
          "Coller le corps complet d'emails contenant des données clients, des contrats ou des sujets RH dans le premier outil d'IA venu."),
        fix: B("Paste sender, subject and first sentence only, in the tool your company allows. Remove the personal details you are not permitted to share.",
          "Collez uniquement l'expéditeur, l'objet et la première phrase, dans l'outil autorisé par votre entreprise. Retirez les données personnelles que vous n'avez pas le droit de transmettre."),
      },
      {
        wrong: B("Treating the WAIT pile like the NOTHING pile.",
          "Traiter le tas ATTENDRE comme le tas RIEN."),
        fix: B("For each WAIT email, note who you are waiting for and by when, and set a reminder. If the answer does not come, you chase it that day instead of discovering the delay a week later.",
          "Pour chaque email ATTENDRE, notez qui vous attendez et pour quand, et programmez un rappel. Si la réponse n'arrive pas, vous relancez le jour même au lieu de découvrir le retard une semaine plus tard."),
      },
    ],
    recap: [
      B("Sort by what each email asks of you, never by its sender.",
        "Triez selon ce que chaque email vous demande, jamais selon son expéditeur."),
      B("Use four closed piles with a definition each, and a four-word action per email.",
        "Utilisez quatre tas fermés, chacun défini, et une action en quatre mots par email."),
      B("Clear the NOTHING pile first: it removes much of the volume.",
        "Videz d'abord le tas RIEN : il retire une grande partie du volume."),
      B("Check a few lines against the real emails, and track the WAIT pile with names and dates.",
        "Contrôlez quelques lignes avec les emails réels, et suivez le tas ATTENDRE avec des noms et des dates."),
    ],
    further: B("Save the four-pile prompt as a reusable instruction in your tool, if it allows it, and run it each morning. After two weeks, look at the NOTHING pile: senders that always land there are candidates for an email rule or an unsubscribe, which shrinks tomorrow's inbox before any sorting.",
      "Enregistrez le prompt des quatre tas comme instruction réutilisable dans votre outil, s'il le permet, et lancez-le chaque matin. Au bout de deux semaines, examinez le tas RIEN : les expéditeurs qui y atterrissent toujours appellent une règle de messagerie ou un désabonnement, ce qui allège la boîte de demain avant tout tri."),
    more: [
      {
        q: B("\"For your information, the board meeting moves to Thursday.\" You manage the director's calendar. Which pile?",
          "« Pour information, le conseil est déplacé à jeudi. » Vous gérez l'agenda du directeur. Dans quel tas ?"),
        options: [
          B("Nothing: it says for information", "Rien : il est écrit pour information"),
          B("Wait: the board will confirm the new date", "Attendre : le conseil confirmera la nouvelle date"),
          B("Reply: acknowledge receipt to the sender", "Répondre : accuser réception à l'expéditeur"),
          B("Do: update the calendar", "Faire : mettre à jour l'agenda"),
        ],
        answer: 3,
        why: B("The label says information, but the content creates a task for you: moving the meeting in the calendar. Sort by what the email requires of you, not by how it presents itself.",
          "L'intitulé dit information, mais le contenu vous crée une tâche : déplacer la réunion dans l'agenda. Triez selon ce que l'email exige de vous, et non selon la façon dont il se présente."),
      },
      {
        q: B("You pasted 34 lines, but the model's table has only 30. What do you do?",
          "Vous avez collé 34 lignes, mais le tableau du modèle n'en compte que 30. Que faites-vous ?"),
        options: [
          B("Ask which lines are missing and sort them", "Vous demandez les lignes manquantes et les faites trier"),
          B("Ignore it: four emails do not really matter", "Vous l'ignorez : quatre emails ne comptent guère"),
          B("Start the whole sort again with fewer emails", "Vous recommencez tout le tri avec moins d'emails"),
        ],
        answer: 0,
        why: B("Missing lines are emails nobody will read. Ask for the four by number, and compare the count every time: it is the simplest check of the sort.",
          "Les lignes manquantes sont des emails que personne ne lira. Demandez les quatre par leur numéro, et comparez le décompte à chaque fois : c'est le contrôle le plus simple du tri."),
      },
    ],
  },

  'as-flow/as-agenda': {
    intro: B("A meeting ends when its time runs out, unless its agenda gives it a way to end earlier. This dojo teaches you to turn a list of topics into a list of questions to settle, each with the one person who decides and a planned number of minutes. Topics that need no decision leave the meeting and become a short note sent the day before. The AI does the rewriting; you supply the context and check that each line can really be answered.",
      "Une réunion s'arrête lorsque son temps est écoulé, sauf si son ordre du jour lui donne un moyen de finir plus tôt. Ce dojo vous apprend à transformer une liste de sujets en liste de questions à trancher, chacune avec la personne qui décide et une durée prévue en minutes. Les sujets qui n'appellent aucune décision sortent de la réunion et deviennent une note courte envoyée la veille. L'IA reformule ; vous fournissez le contexte et vérifiez que chaque ligne peut réellement recevoir une réponse."),
    concepts: [
      {
        term: B("Topic or question", "Sujet ou question"),
        def: B("A topic (\"Lille works\") names an area and has no end. A question (\"Do we accept the plumber's quote?\") has an answer, so the discussion stops when the answer is given.",
          "Un sujet (« Travaux de Lille ») désigne un domaine et n'a pas de fin. Une question (« Accepte-t-on le devis du plombier ? ») a une réponse : la discussion s'arrête dès qu'elle est donnée."),
      },
      {
        term: B("Decision owner", "Décideur"),
        def: B("The one person who settles a question if the discussion does not converge. Naming them in advance stops the meeting from ending on \"let's discuss it again\".",
          "L'unique personne qui tranche une question si la discussion ne converge pas. La nommer à l'avance évite que la réunion se termine sur « on en reparle »."),
      },
      {
        term: B("Timebox", "Temps alloué"),
        def: B("The number of minutes planned for a line. It tells everyone how deep the discussion should go, and shows before the meeting whether the agenda fits in the time.",
          "Le nombre de minutes prévu pour une ligne. Il indique à chacun la profondeur attendue de la discussion, et montre avant la réunion si l'ordre du jour tient dans le temps imparti."),
      },
      {
        term: B("Pre-read note", "Note préalable"),
        def: B("A five-line written note sent with the agenda for items that need no decision. People read it in two minutes instead of listening to it for fifteen.",
          "Une note écrite de cinq lignes, envoyée avec l'ordre du jour pour les points qui n'appellent pas de décision. On la lit en deux minutes au lieu de l'écouter pendant quinze."),
      },
    ],
    walkthrough: {
      title: B("Hélène prepares the monthly meeting of a nursing home",
        "Hélène prépare la réunion mensuelle d'un EHPAD"),
      steps: [
        B("Hélène, assistant to the director of a 120-bed nursing home, pastes four topics with what she knows: summer staffing (3 shifts uncovered in August), kitchen renovation (two quotes received), family survey (report ready), visitor badges (supplier proposal). Why: the model can only phrase the real decision if it sees the context.",
          "Hélène, assistante de la directrice d'un EHPAD de 120 lits, colle quatre sujets avec ce qu'elle sait : effectifs d'été (3 postes vacants en août), rénovation de la cuisine (deux devis reçus), enquête familles (rapport prêt), badges visiteurs (proposition d'un fournisseur). Pourquoi : le modèle ne peut formuler la vraie décision que s'il voit le contexte."),
        B("She asks for one question per topic, answered by a choice, with one decider and a duration. It proposes: \"Three temps for August, or recall staff from leave? Director decides, 15 min\" and \"Kitchen: quote A or B? Director decides, 10 min\". Why: each line now ends when the choice is made.",
          "Elle demande une question par sujet, qui se tranche par un choix, avec un décideur et une durée. Le modèle propose : « Trois intérimaires en août, ou rappel de congés ? La directrice tranche, 15 min » et « Cuisine : devis A ou B ? La directrice tranche, 10 min ». Pourquoi : chaque ligne s'arrête dès que le choix est fait."),
        B("For the survey, the model finds no decision and writes a five-line note instead. For the badges, it writes: \"I do not know which decision is expected; ask the director whether the proposal is to be approved or only presented.\" Why: a flagged gap is resolved before the meeting, not during it.",
          "Pour l'enquête, le modèle ne trouve aucune décision et rédige à la place une note de cinq lignes. Pour les badges, il écrit : « J'ignore quelle décision est attendue ; demandez à la directrice si la proposition est à valider ou seulement à présenter. » Pourquoi : une lacune signalée se règle avant la réunion, et non pendant."),
        B("The director says the badge proposal must be approved this month. The line becomes: \"Do we approve the badge supplier's proposal? Director decides, 10 min.\" Total: 35 minutes out of 60. Why: the margin absorbs the discussion that always overruns.",
          "La directrice précise que la proposition de badges doit être validée ce mois-ci. La ligne devient : « Valide-t-on la proposition du fournisseur de badges ? La directrice tranche, 10 min. » Total : 35 minutes sur 60. Pourquoi : la marge absorbe la discussion qui déborde toujours."),
        B("She sends the agenda and the survey note the day before, after checking every line: a question mark, one decider, a duration. Check: no line is a topic any more, and the survey will not take meeting time.",
          "Elle envoie l'ordre du jour et la note sur l'enquête la veille, après avoir contrôlé chaque ligne : un point d'interrogation, un décideur, une durée. Vérification : plus aucune ligne n'est un sujet, et l'enquête ne prendra pas de temps de réunion."),
      ],
    },
    mistakes: [
      {
        wrong: B("Keeping \"update\" or \"round table\" lines on the agenda.",
          "Conserver des lignes « point d'étape » ou « tour de table » à l'ordre du jour."),
        fix: B("For each line, ask what must be decided. If nothing, send the information as a five-line note before the meeting. An update read in advance frees the time for decisions.",
          "Pour chaque ligne, demandez ce qui doit être décidé. Si rien, transmettez l'information sous forme de note de cinq lignes avant la réunion. Un point lu à l'avance libère le temps des décisions."),
      },
      {
        wrong: B("Naming a group as decider: \"the committee\", \"everyone\".",
          "Désigner un groupe comme décideur : « le comité », « tout le monde »."),
        fix: B("Name one person per question, even if others give their opinion. When the discussion stalls, everyone knows who settles it.",
          "Nommez une seule personne par question, même si d'autres donnent leur avis. Lorsque la discussion s'enlise, chacun sait qui tranche."),
      },
      {
        wrong: B("Letting the model guess the decision when the context is missing.",
          "Laisser le modèle deviner la décision lorsque le contexte manque."),
        fix: B("Ask it to write the question you should put to the organiser instead of guessing. A wrong question on the agenda sends the whole discussion in the wrong direction.",
          "Demandez-lui d'écrire la question à poser à l'organisateur plutôt que de deviner. Une question erronée à l'ordre du jour oriente toute la discussion dans la mauvaise direction."),
      },
    ],
    recap: [
      B("Each agenda line is a question with an answer, not a topic.",
        "Chaque ligne de l'ordre du jour est une question qui a une réponse, et non un sujet."),
      B("Give each question one decider and a number of minutes.",
        "Attribuez à chaque question un décideur et un nombre de minutes."),
      B("Items with no decision become a short note sent the day before.",
        "Les points sans décision deviennent une note courte envoyée la veille."),
      B("Leave a margin, send the agenda the day before, and check each line ends with a question mark.",
        "Gardez une marge, envoyez l'ordre du jour la veille, et vérifiez que chaque ligne finit par un point d'interrogation."),
    ],
    further: B("After each meeting, mark every question as settled, postponed or reopened. After a few meetings, ask the model which kinds of questions keep being postponed. They usually lack a piece of information or the right decider, which you can secure before the next agenda goes out.",
      "Après chaque réunion, marquez chaque question comme tranchée, reportée ou rouverte. Au bout de quelques réunions, demandez au modèle quels types de questions sont régulièrement reportés. Il leur manque en général une information ou le bon décideur, que vous pouvez obtenir avant l'envoi du prochain ordre du jour."),
    more: [
      {
        q: B("The topic is \"Christmas party\". Which line gets a decision?",
          "Le sujet est « Fête de fin d'année ». Quelle ligne conduit à une décision ?"),
        options: [
          B("\"Christmas party: ideas and open discussion, 20 min\"", "« Fête de fin d'année : idées et discussion libre, 20 min »"),
          B("\"Christmas party: full update by the HR team, 15 min\"", "« Fête de fin d'année : point complet de l'équipe RH, 15 min »"),
          B("\"Restaurant or buffet on site? HR decides, 10 min\"", "« Restaurant ou buffet sur place ? La RH tranche, 10 min »"),
        ],
        answer: 2,
        why: B("It offers a choice and a decider, so the discussion stops as soon as one option is chosen. \"Ideas\" or an \"update\" can fill any amount of time.",
          "Elle propose un choix et un décideur : la discussion s'arrête dès qu'une option est retenue. Des « idées » ou un « point » peuvent occuper un temps illimité."),
      },
      {
        q: B("Your agenda adds up to 65 minutes for a one-hour meeting. What do you do?",
          "Votre ordre du jour totalise 65 minutes pour une réunion d'une heure. Que faites-vous ?"),
        options: [
          B("Keep it and ask everyone to be brief", "Vous le gardez et demandez à chacun d'être bref"),
          B("Turn a no-decision item into a note", "Vous transformez un point sans décision en note"),
          B("Ask participants to arrive ten minutes early", "Vous demandez d'arriver dix minutes plus tôt"),
        ],
        answer: 1,
        why: B("An overbooked agenda always sacrifices its last line. Take out what needs no decision, or postpone the least urgent question, so that a margin remains.",
          "Un ordre du jour surchargé sacrifie toujours sa dernière ligne. Retirez ce qui n'appelle pas de décision, ou reportez la question la moins urgente, afin de conserver une marge."),
      },
    ],
  },

  'as-flow/as-minutes': {
    intro: B("Meeting minutes are useful when they record the decisions and who owns them, and when they go out the same day. This dojo teaches a simple method: during the meeting, note only decisions and owners; read them aloud before the end; then let the AI expand your notes into a clean record, adding nothing. You will learn why an automatic transcript is not enough on its own, and how to keep gaps visible instead of filled.",
      "Un compte rendu est utile lorsqu'il consigne les décisions et leurs responsables, et qu'il part le jour même. Ce dojo enseigne une méthode simple : pendant la réunion, ne noter que les décisions et les responsables ; les relire à voix haute avant la fin ; puis laisser l'IA développer vos notes en un compte rendu soigné, sans rien ajouter. Vous comprendrez pourquoi une transcription automatique ne suffit pas à elle seule, et comment garder les lacunes visibles au lieu de les combler."),
    concepts: [
      {
        term: B("Decision log", "Relevé de décisions"),
        def: B("The list of what was decided, with owner and deadline. It is what people consult afterwards; the discussion that led there rarely matters.",
          "La liste de ce qui a été décidé, avec responsable et échéance. C'est ce que l'on consulte ensuite ; la discussion qui y a mené importe rarement."),
      },
      {
        term: B("Read-back", "Relecture en séance"),
        def: B("Reading the decisions aloud before the meeting ends. Corrections take seconds while everyone is present, and each owner hears their own name.",
          "La lecture à voix haute des décisions avant la fin de la réunion. Une correction prend quelques secondes tant que tout le monde est présent, et chaque responsable entend son propre nom."),
      },
      {
        term: B("Gap marker", "Marqueur de lacune"),
        def: B("A visible \"to be set\" where an owner or a date is missing. It shows what still needs deciding, where a guessed value would hide it.",
          "Un « à fixer » bien visible là où manque un responsable ou une date. Il montre ce qui reste à décider, là où une valeur devinée le masquerait."),
      },
      {
        term: B("Transcript", "Transcription"),
        def: B("The automatic written record of everything said. It is useful to check a quote, and risky as the only source: an idea (\"we could\") and a decision (\"we will\") look alike in it.",
          "L'enregistrement écrit automatique de tout ce qui a été dit. Elle est utile pour vérifier une citation, et risquée comme source unique : une idée (« on pourrait ») et une décision (« on fait ») s'y ressemblent."),
      },
    ],
    walkthrough: {
      title: B("Vincent writes the minutes of a weekly site meeting",
        "Vincent rédige le compte rendu d'une réunion de chantier"),
      steps: [
        B("Vincent, assistant in a building firm, attends the site meeting of a school renovation with the architect, the electrician, the plumber and the site manager. He writes only four lines: each decision and its owner. Why: not writing everything lets him hear when a proposal becomes a decision.",
          "Vincent, assistant dans une entreprise du bâtiment, assiste à la réunion de chantier de la rénovation d'une école, avec l'architecte, l'électricien, le plombier et le conducteur de travaux. Il n'écrit que quatre lignes : chaque décision et son responsable. Pourquoi : ne pas tout noter lui permet d'entendre le moment où une proposition devient une décision."),
        B("Five minutes before the end, he reads the four lines aloud. The architect corrects one: the paint colours will be sent by Friday, not \"soon\". Why: the correction takes ten seconds with everyone present; by email it would take a whole thread.",
          "Cinq minutes avant la fin, il lit les quatre lignes à voix haute. L'architecte en corrige une : les teintes de peinture seront envoyées d'ici vendredi, et non « bientôt ». Pourquoi : la correction prend dix secondes avec tout le monde présent ; par email, elle demanderait tout un échange."),
        B("At the office, he pastes his notes and asks for the record from these notes only: a decisions table, postponed items, open questions, and \"to be set\" in bold where an owner or deadline is missing. Why: the rule stops the model filling gaps with plausible dates.",
          "Au bureau, il colle ses notes et demande le compte rendu à partir de ces seules notes : un tableau des décisions, les points reportés, les questions ouvertes, et « à fixer » en gras là où manque un responsable ou une échéance. Pourquoi : la règle empêche le modèle de combler les lacunes avec des dates plausibles."),
        B("The draft lists the scaffolding removal as postponed, with the reason \"waiting for the roofer\", and flags \"to be set\" for the roofer's date. Why: that visible gap tells Vincent exactly whom to call this afternoon.",
          "Le brouillon classe le démontage de l'échafaudage parmi les points reportés, avec la raison « en attente du couvreur », et signale « à fixer » pour la date du couvreur. Pourquoi : cette lacune visible indique à Vincent qui appeler cet après-midi."),
        B("He checks each decision against his notes and finds none added, then sends the record at 4 pm, asking for corrections by Thursday noon. Check: every line of the table is in his notes, and every gap is visible.",
          "Il confronte chaque décision à ses notes, n'en trouve aucune ajoutée, puis envoie le compte rendu à 16 h en demandant les corrections avant jeudi midi. Vérification : chaque ligne du tableau figure dans ses notes, et chaque lacune est visible."),
      ],
    },
    mistakes: [
      {
        wrong: B("Taking word-for-word notes during the meeting, just to be safe.",
          "Prendre des notes mot à mot pendant la réunion, par précaution."),
        fix: B("Note only decisions and owners, and read them back before the end. Word-for-word notes make you miss the moment a discussion turns into a decision.",
          "Ne notez que les décisions et les responsables, et relisez-les avant la fin. Des notes mot à mot vous font manquer le moment où une discussion devient une décision."),
      },
      {
        wrong: B("Giving the model a transcript and asking for \"the decisions\".",
          "Donner une transcription au modèle et lui demander « les décisions »."),
        fix: B("Use your confirmed notes as the source. If you also use a transcript, check each decision it lists against your notes: it can take a suggestion (\"we could\") for a decision.",
          "Prenez vos notes confirmées comme source. Si vous utilisez aussi une transcription, confrontez chaque décision qu'elle liste à vos notes : elle peut prendre une suggestion (« on pourrait ») pour une décision."),
      },
      {
        wrong: B("Letting the model fill in a missing deadline with \"end of the month\".",
          "Laisser le modèle compléter une échéance manquante par « fin du mois »."),
        fix: B("Require \"to be set\" in bold for any missing owner or date, then chase each one with the right person the same day.",
          "Exigez « à fixer » en gras pour tout responsable ou toute date manquante, puis relancez chaque cas auprès de la bonne personne le jour même."),
      },
    ],
    recap: [
      B("During the meeting, note only decisions and owners.",
        "Pendant la réunion, ne notez que les décisions et les responsables."),
      B("Read the decisions aloud before the end: that is when they get corrected.",
        "Relisez les décisions à voix haute avant la fin : c'est à ce moment qu'on les corrige."),
      B("Expand from your notes only; forbid added names, dates or decisions.",
        "Développez à partir de vos seules notes ; interdisez tout ajout de nom, de date ou de décision."),
      B("Mark gaps as \"to be set\" and send the record the same day.",
        "Marquez les lacunes « à fixer » et envoyez le compte rendu le jour même."),
    ],
    further: B("Keep a running table of all decisions across meetings, with a status: done, late, dropped. Before each meeting, paste it and ask the model which decisions are overdue and whose name they carry. Opening the meeting with that list takes two minutes and shows that decisions are followed up.",
      "Tenez un tableau continu de toutes les décisions, réunion après réunion, avec un statut : faite, en retard, abandonnée. Avant chaque réunion, collez-le et demandez au modèle quelles décisions sont en retard et quel nom elles portent. Ouvrir la réunion sur cette liste prend deux minutes et montre que les décisions sont suivies."),
    more: [
      {
        q: B("During the read-back, a colleague says: \"I never agreed to own that.\" What do you do?",
          "Pendant la relecture, un collègue dit : « Je n'ai jamais accepté de m'en charger. » Que faites-vous ?"),
        options: [
          B("Keep the name: it was said earlier", "Vous gardez le nom : cela a été dit plus tôt"),
          B("Settle the owner now, before the end", "Vous fixez le responsable maintenant"),
          B("Write \"to be set\" and move on to the next line", "Vous écrivez « à fixer » et passez à la suite"),
        ],
        answer: 1,
        why: B("The read-back exists for this moment: everyone is still in the room. Settle the owner now; \"to be set\" is for gaps you only notice after the meeting.",
          "La relecture existe pour ce moment précis : tout le monde est encore là. Fixez le responsable maintenant ; « à fixer » sert aux lacunes que l'on ne découvre qu'après la réunion."),
      },
      {
        q: B("The draft adds \"Next meeting: Tuesday 10 am\". Your notes do not mention it. What do you do?",
          "Le brouillon ajoute « Prochaine réunion : mardi 10 h ». Vos notes n'en parlent pas. Que faites-vous ?"),
        options: [
          B("Delete it, or write \"to be set\"", "Vous le supprimez, ou écrivez « à fixer »"),
          B("Keep it: it is the usual slot for this meeting", "Vous le gardez : c'est le créneau habituel de cette réunion"),
          B("Ask the model where it found that information", "Vous demandez au modèle d'où vient cette information"),
        ],
        answer: 0,
        why: B("A date that is not in your notes was invented, however plausible. If the next meeting was not set, the record must show it as \"to be set\".",
          "Une date absente de vos notes a été inventée, aussi plausible soit-elle. Si la prochaine réunion n'a pas été fixée, le compte rendu doit l'indiquer « à fixer »."),
      },
    ],
  },

  /* ================================================================ */
  /* ASSISTANT · LES DOCUMENTS                                        */
  /* ================================================================ */

  'as-docs/as-extract': {
    intro: B("Extraction means pulling the same fields out of many documents laid out differently: invoices, contracts, quotes, CVs. AI tools do it quickly, but they tend to fill an empty field with a plausible value that looks exactly like a real one. This dojo teaches you to define the fields and their format, demand \"absent\" when information is missing, ask where each value was read, and check three documents by hand before trusting the rest.",
      "L'extraction consiste à relever les mêmes champs dans de nombreux documents de présentation différente : factures, contrats, devis, CV. Les outils d'IA le font rapidement, mais ils tendent à remplir un champ vide avec une valeur plausible, en tout point semblable à une valeur réelle. Ce dojo vous apprend à définir les champs et leur format, à exiger « absent » lorsqu'une information manque, à demander où chaque valeur a été lue, et à vérifier trois documents à la main avant de vous fier au reste."),
    concepts: [
      {
        term: B("Field", "Champ"),
        def: B("One piece of information to extract, with a name and a format: \"amount excl. VAT: number in euros, as written\". A precise format makes the table usable in a spreadsheet without cleaning.",
          "Une information à extraire, avec un nom et un format : « montant HT : nombre en euros, tel qu'écrit ». Un format précis rend le tableau exploitable dans un tableur sans nettoyage."),
      },
      {
        term: B("Plausible fill", "Remplissage plausible"),
        def: B("A value the model writes when the document does not contain it, because it is the likely one, such as \"30 days\" for a due date. In the table, it cannot be told apart from a real value.",
          "Une valeur que le modèle écrit alors que le document ne la contient pas, parce qu'elle est probable, comme « 30 jours » pour une échéance. Dans le tableau, rien ne la distingue d'une valeur réelle."),
      },
      {
        term: B("\"Absent\"", "« Absent »"),
        def: B("The word the model must write when the information is not in the document. It makes gaps visible and countable, so someone can ask the author or the supplier.",
          "Le mot que le modèle doit écrire lorsque l'information ne figure pas dans le document. Il rend les lacunes visibles et dénombrables, afin que quelqu'un puisse interroger l'auteur ou le fournisseur."),
      },
      {
        term: B("Source location", "Emplacement de la source"),
        def: B("The page or section where each value was read. It turns a check from rereading the whole document into opening a single page.",
          "La page ou la section où chaque valeur a été lue. Elle ramène la vérification d'une relecture complète du document à l'ouverture d'une seule page."),
      },
      {
        term: B("Spot check", "Contrôle par sondage"),
        def: B("Checking a few documents by hand, field by field, before using the whole table. If they are right, your field definitions are understood; if not, you fix the prompt before the error spreads.",
          "Vérifier quelques documents à la main, champ par champ, avant d'utiliser tout le tableau. S'ils sont justes, vos définitions de champs sont comprises ; sinon, vous corrigez le prompt avant que l'erreur ne se propage."),
      },
    ],
    walkthrough: {
      title: B("Inès extracts the key terms of 25 commercial leases",
        "Inès relève les clauses clés de 25 baux commerciaux"),
      steps: [
        B("Inès, assistant in a property management firm, writes the fields before opening any lease: tenant (name as written), address, annual rent excl. VAT (number, euros), start date and rent review date (DD/MM/YYYY), deposit. Why: fixed formats make the 25 rows comparable and sortable.",
          "Inès, assistante dans un cabinet d'administration de biens, écrit les champs avant d'ouvrir un seul bail : locataire (raison sociale telle qu'écrite), adresse, loyer annuel HT (nombre, euros), date de prise d'effet et date de révision (JJ/MM/AAAA), dépôt de garantie. Pourquoi : des formats fixes rendent les 25 lignes comparables et triables."),
        B("She adds the rules: \"absent\" if not written, no calculation (a review date is not start date plus three years unless the lease says so), and the page for each value. Why: the review date is exactly the field a model would helpfully calculate.",
          "Elle ajoute les règles : « absent » si ce n'est pas écrit, aucun calcul (une date de révision n'est pas la date d'effet plus trois ans, sauf si le bail le dit), et la page de chaque valeur. Pourquoi : la date de révision est précisément le champ qu'un modèle calculerait par obligeance."),
        B("She runs the prompt on three leases she knows well, in the tool her firm approves for client documents, and compares each field with the paper lease. One deposit reads \"3 months' rent\" in the lease, but the model wrote a number. Why: a calculated value slipped past the rule.",
          "Elle lance le prompt sur trois baux qu'elle connaît bien, dans l'outil que son cabinet autorise pour les documents clients, et compare chaque champ au bail papier. Un dépôt est rédigé « 3 mois de loyer » dans le bail, mais le modèle a écrit un nombre. Pourquoi : une valeur calculée a échappé à la règle."),
        B("She strengthens the prompt: \"if a value is expressed as a formula, copy the formula as written\". Rerun on the same three leases, the deposit now reads \"3 months' rent (p. 7)\". Why: fixing the prompt now costs less than correcting 25 rows later.",
          "Elle renforce le prompt : « si une valeur est exprimée sous forme de formule, recopie la formule telle qu'écrite ». Relancé sur les trois mêmes baux, le dépôt indique désormais « 3 mois de loyer (p. 7) ». Pourquoi : corriger le prompt maintenant coûte moins que corriger 25 lignes plus tard."),
        B("She runs the 22 other leases, then lists the rows with at least one \"absent\": two leases state no review date. She checks one on paper and confirms the gap. Check: the table shows gaps instead of guesses, and she flags both leases to the director.",
          "Elle traite les 22 autres baux, puis liste les lignes comportant au moins un « absent » : deux baux ne mentionnent aucune date de révision. Elle en vérifie un sur papier et confirme la lacune. Vérification : le tableau montre des lacunes au lieu de suppositions, et elle signale les deux baux à la direction."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking for \"the important information\" without naming the fields.",
          "Demander « les informations importantes » sans nommer les champs."),
        fix: B("List the fields and their format before running anything. Without a list, the model chooses what seems important, and its choice changes from one document to the next.",
          "Listez les champs et leur format avant de lancer quoi que ce soit. Sans liste, le modèle choisit ce qui lui semble important, et son choix varie d'un document à l'autre."),
      },
      {
        wrong: B("Letting the model calculate or deduce a missing value, such as a due date or a total.",
          "Laisser le modèle calculer ou déduire une valeur manquante, comme une échéance ou un total."),
        fix: B("Write \"deduce nothing, calculate nothing; if it is not written, write absent\". Do any calculation yourself in the spreadsheet afterwards, where it is visible and can be checked.",
          "Écrivez « ne déduis rien, ne calcule rien ; si ce n'est pas écrit, écris absent ». Faites vous-même les calculs ensuite dans le tableur, où ils sont visibles et vérifiables."),
      },
      {
        wrong: B("Running the extraction on the whole pile and checking only if something looks strange.",
          "Lancer l'extraction sur toute la pile et ne vérifier que si quelque chose paraît étrange."),
        fix: B("Check three documents by hand first, field by field. Errors from a misunderstood field look perfectly normal; you only see them by comparing with the original.",
          "Vérifiez d'abord trois documents à la main, champ par champ. Les erreurs dues à un champ mal compris paraissent parfaitement normales ; seule la comparaison avec l'original les révèle."),
      },
    ],
    recap: [
      B("Name each field and give its format before extracting.",
        "Nommez chaque champ et donnez son format avant d'extraire."),
      B("Demand \"absent\" when information is not written: a gap must stay visible.",
        "Exigez « absent » lorsqu'une information n'est pas écrite : une lacune doit rester visible."),
      B("Forbid calculations and deductions, and ask where each value was read.",
        "Interdisez calculs et déductions, et demandez où chaque valeur a été lue."),
      B("Check three documents by hand before trusting the rest of the table.",
        "Vérifiez trois documents à la main avant de vous fier au reste du tableau."),
    ],
    further: B("Keep one reusable extraction prompt per document type you handle: invoices, leases, CVs. Each time a spot check reveals an error, add the rule that fixes it. After a few runs, the prompt holds the traps of your documents, and a new colleague can use it without repeating your mistakes.",
      "Conservez un prompt d'extraction réutilisable par type de document traité : factures, baux, CV. Chaque fois qu'un contrôle par sondage révèle une erreur, ajoutez la règle qui la corrige. Après quelques passages, le prompt contient les pièges propres à vos documents, et un nouveau collègue peut l'utiliser sans refaire vos erreurs."),
    more: [
      {
        q: B("A lease says \"rent: see appendix 2\", and appendix 2 is not in the file. What should the table show?",
          "Un bail indique « loyer : voir annexe 2 », et l'annexe 2 ne figure pas au dossier. Que doit afficher le tableau ?"),
        options: [
          B("The average rent of the other leases", "Le loyer moyen des autres baux"),
          B("The rent shown in last year's table", "Le loyer figurant dans le tableau de l'an dernier"),
          B("Nothing: leave the cell completely empty", "Rien : la cellule reste entièrement vide"),
          B("\"absent (see appendix 2, p. 3)\"", "« absent (voir annexe 2, p. 3) »"),
        ],
        answer: 3,
        why: B("\"Absent\" with the reference tells you what is missing and where to look. An empty cell looks like a forgotten field, and borrowed values are guesses.",
          "« Absent » accompagné de la référence dit ce qui manque et où chercher. Une cellule vide ressemble à un champ oublié, et des valeurs empruntées sont des suppositions."),
      },
      {
        q: B("Your three spot-checked documents are all correct. What does that tell you?",
          "Vos trois documents contrôlés sont tous exacts. Qu'en déduisez-vous ?"),
        options: [
          B("Every single row of the table is now correct", "Chaque ligne du tableau est désormais exacte"),
          B("You no longer need the page references at all", "Les références de page ne sont plus nécessaires"),
          B("Fields understood; still review each \"absent\"", "Champs compris ; revoyez encore chaque « absent »"),
        ],
        answer: 2,
        why: B("A spot check validates your definitions, not every value. Keep the page references and review the gaps: they are the rows most likely to need a human.",
          "Un contrôle par sondage valide vos définitions, et non chaque valeur. Gardez les références de page et revoyez les lacunes : ce sont les lignes qui ont le plus besoin d'un regard humain."),
      },
    ],
  },

  'as-docs/as-table': {
    intro: B("Free text such as call notes, requests or customer feedback cannot be counted as it is: the same thing appears under many spellings. This dojo teaches you to turn it into a table with a closed list of values per column, plus one \"other\" value that you read carefully. The AI fills the table; you design the lists, check the \"other\" rows, and fix the list rather than the rows. You finish with a table you can count and follow month after month.",
      "Du texte libre, comme des notes d'appels, des demandes ou des retours clients, ne se compte pas en l'état : une même chose y apparaît sous de nombreuses graphies. Ce dojo vous apprend à le transformer en tableau, avec une liste fermée de valeurs par colonne et une valeur « autre » que vous lisez attentivement. L'IA remplit le tableau ; vous concevez les listes, contrôlez les lignes « autre » et corrigez la liste plutôt que les lignes. Vous terminez avec un tableau dénombrable, que vous pouvez suivre de mois en mois."),
    concepts: [
      {
        term: B("Closed list", "Liste fermée"),
        def: B("The only values allowed in a column, written in advance: \"appointment | result | emergency | invoice | other\". The model must copy one of them exactly, so every cell can be counted.",
          "Les seules valeurs permises dans une colonne, écrites à l'avance : « rendez-vous | résultat | urgence | facture | autre ». Le modèle doit en recopier une à l'identique, si bien que chaque cellule se compte."),
      },
      {
        term: B("Countable column", "Colonne dénombrable"),
        def: B("A column whose values repeat identically, so a spreadsheet can count them. Free labels turn one real category into three small counts.",
          "Une colonne dont les valeurs se répètent à l'identique, de sorte qu'un tableur puisse les compter. Des étiquettes libres transforment une catégorie réelle en trois petits décomptes."),
      },
      {
        term: B("The \"other\" value", "La valeur « autre »"),
        def: B("The exit for rows that fit nowhere, with a few words saying what they are. A large \"other\" means your list is missing a category.",
          "La sortie prévue pour les lignes qui n'entrent nulle part, accompagnée de quelques mots qui disent de quoi il s'agit. Une valeur « autre » volumineuse signale une catégorie manquante dans votre liste."),
      },
      {
        term: B("Stable categories", "Catégories stables"),
        def: B("Keeping the same list from one month to the next, so the counts can be compared over time. You change the list deliberately, never row by row.",
          "Conserver la même liste d'un mois à l'autre, afin que les décomptes restent comparables dans le temps. On modifie la liste délibérément, jamais ligne par ligne."),
      },
    ],
    walkthrough: {
      title: B("Marion shows her director where her time goes",
        "Marion montre à sa direction où passe son temps"),
      steps: [
        B("Marion, office manager in a 50-person architecture firm, gathers 40 internal requests from the last three weeks, one line each, names removed. Why: 40 lines are enough to see a pattern and few enough to check by hand.",
          "Marion, office manager dans un cabinet d'architectes de 50 personnes, rassemble 40 demandes internes des trois dernières semaines, une par ligne, noms retirés. Pourquoi : 40 lignes suffisent à faire apparaître une tendance et restent assez peu nombreuses pour être vérifiées à la main."),
        B("She writes the columns and their values: type (IT | supplies | building | travel | events | other), urgency (same day | this week | no deadline), channel (email | chat | in person), and five words of detail when type is other. Why: each column answers a question her director may ask.",
          "Elle écrit les colonnes et leurs valeurs : type (informatique | fournitures | bâtiment | déplacements | événements | autre), urgence (dans la journée | dans la semaine | sans échéance), canal (email | messagerie | en personne), et cinq mots de précision si le type est autre. Pourquoi : chaque colonne répond à une question que sa direction peut poser."),
        B("She demands exact copies of the values, no synonyms or plurals, and a count per value. Result: IT 9, supplies 7, building 5, travel 6, events 3, other 10. Why: the counts are only reliable if the spellings are identical.",
          "Elle exige des valeurs recopiées à l'identique, sans synonymes ni pluriels, et un décompte par valeur. Résultat : informatique 9, fournitures 7, bâtiment 5, déplacements 6, événements 3, autre 10. Pourquoi : les décomptes ne sont fiables que si les graphies sont identiques."),
        B("She reads the 10 \"other\" rows: 7 are meeting room and visitor bookings. She adds \"rooms and visitors\" to the list and reruns; \"other\" drops to 3. Why: a quarter of the rows in \"other\" meant the list was wrong, not the data.",
          "Elle lit les 10 lignes « autre » : 7 concernent des réservations de salles et l'accueil de visiteurs. Elle ajoute « salles et visiteurs » à la liste et relance ; « autre » tombe à 3. Pourquoi : un quart des lignes en « autre » signifiait que la liste était fausse, et non les données."),
        B("She checks that the counts add up to 40, pastes the table into her spreadsheet and builds a count by type. Check: the total matches and every cell uses a listed value. She can now show that room and visitor bookings take more of her time than IT.",
          "Elle vérifie que les décomptes totalisent 40, colle le tableau dans son tableur et construit un décompte par type. Vérification : le total correspond et chaque cellule utilise une valeur de la liste. Elle peut désormais montrer que salles et visiteurs lui prennent plus de temps que l'informatique."),
      ],
    },
    mistakes: [
      {
        wrong: B("Letting the model create its own categories.",
          "Laisser le modèle créer ses propres catégories."),
        fix: B("Write the allowed values yourself, column by column, before running. A model's categories change with each batch, so this month's table could not be compared with next month's.",
          "Écrivez vous-même les valeurs permises, colonne par colonne, avant de lancer. Les catégories d'un modèle changent à chaque lot : le tableau de ce mois ne serait pas comparable à celui du mois prochain."),
      },
      {
        wrong: B("Ignoring the \"other\" rows because there are few of them or they look dull.",
          "Ignorer les lignes « autre » parce qu'elles sont peu nombreuses ou paraissent sans intérêt."),
        fix: B("Read every row in \"other\". If several share a theme, add that category to the list and rerun; that is how the list gets better.",
          "Lisez chaque ligne classée « autre ». Si plusieurs partagent un thème, ajoutez cette catégorie à la liste et relancez ; c'est ainsi que la liste s'améliore."),
      },
      {
        wrong: B("Renaming labels by hand in the spreadsheet after the run.",
          "Renommer les étiquettes à la main dans le tableur après coup."),
        fix: B("Fix the list in the prompt and rerun instead. Manual renaming repairs this table only; the next batch will bring the same spellings back.",
          "Corrigez plutôt la liste dans le prompt et relancez. Renommer à la main ne répare que ce tableau ; le lot suivant ramènera les mêmes graphies."),
      },
    ],
    recap: [
      B("Free text becomes countable only with closed lists of values.",
        "Le texte libre ne devient dénombrable qu'avec des listes fermées de valeurs."),
      B("Require values copied exactly, with no synonyms or plurals.",
        "Exigez des valeurs recopiées à l'identique, sans synonymes ni pluriels."),
      B("Add an \"other\" value with a short detail, and read what falls into it.",
        "Ajoutez une valeur « autre » avec une brève précision, et lisez ce qui y tombe."),
      B("When \"other\" grows, fix the list and rerun; check the total matches the rows pasted.",
        "Quand « autre » grossit, corrigez la liste et relancez ; vérifiez que le total correspond aux lignes collées."),
    ],
    further: B("Run the same prompt every month with the same list, and paste each table into one spreadsheet with a month column. A pivot table by type and month then shows trends: a category that grows every month points to a process worth fixing. Change the list only on purpose, and note the date of each change.",
      "Lancez chaque mois le même prompt avec la même liste, et collez chaque tableau dans un seul tableur, avec une colonne mois. Un tableau croisé dynamique par type et par mois révèle alors les tendances : une catégorie qui grossit chaque mois désigne un processus à améliorer. Ne modifiez la liste que délibérément, en notant la date de chaque changement."),
    more: [
      {
        q: B("Your table shows \"IT\", \"I.T.\" and \"computer problem\". What went wrong?",
          "Votre tableau affiche « informatique », « info » et « problème d'ordi ». Qu'est-ce qui n'a pas fonctionné ?"),
        options: [
          B("The list was not closed, or not enforced", "La liste n'était pas fermée, ou pas imposée"),
          B("The data simply contains too many IT requests", "Les données contiennent simplement trop de demandes informatiques"),
          B("The spreadsheet did not import the table correctly", "Le tableur n'a pas importé le tableau correctement"),
        ],
        answer: 0,
        why: B("Three spellings mean the model was free to write its own labels. Give the exact values, require them to be copied as written, and rerun.",
          "Trois graphies signifient que le modèle était libre d'écrire ses propres étiquettes. Fournissez les valeurs exactes, exigez qu'elles soient recopiées telles quelles, et relancez."),
      },
      {
        q: B("After you add a category, \"other\" drops from 10 rows to 3. What do you do with those 3?",
          "Après l'ajout d'une catégorie, « autre » passe de 10 lignes à 3. Que faites-vous de ces 3 lignes ?"),
        options: [
          B("Force them into the closest category", "Vous les forcez dans la catégorie la plus proche"),
          B("Read them; keep them as other if unrelated", "Vous les lisez ; sans lien entre elles, elles restent en autre"),
          B("Delete them so the table stays clean", "Vous les supprimez pour garder un tableau propre"),
          B("Create one new category for each of them", "Vous créez une nouvelle catégorie pour chacune"),
        ],
        answer: 1,
        why: B("A few scattered rows are exactly what \"other\" is for. Forcing them into a category distorts its count, and one category per row brings the mess back.",
          "Quelques lignes éparses sont précisément la raison d'être de « autre ». Les forcer dans une catégorie fausse son décompte, et une catégorie par ligne ramène le désordre."),
      },
    ],
  },

  'as-docs/as-template': {
    intro: B("Many documents an assistant writes are rebuilt from scratch each time: a welcome email, a notice to participants, a supplier reminder. This dojo teaches you to build a template from three of your past versions: the AI compares them, keeps what is identical as fixed text, turns what changes into named blanks, and writes one filled example to keep next to the template. You finish with a template your colleagues can fill in the same way without asking you.",
      "Bien des documents qu'écrit un assistant sont refaits de zéro à chaque fois : un email d'accueil, une convocation, une relance fournisseur. Ce dojo vous apprend à bâtir un modèle à partir de trois de vos versions passées : l'IA les compare, conserve ce qui est identique comme texte fixe, transforme ce qui change en champs nommés, et rédige un exemple rempli à ranger à côté du modèle. Vous terminez avec un modèle que vos collègues remplissent de la même façon sans avoir à vous questionner."),
    concepts: [
      {
        term: B("Fixed text", "Texte fixe"),
        def: B("The parts that are identical, or nearly so, in every version. They become the body of the template and are never retyped.",
          "Les passages identiques, ou presque, dans toutes les versions. Ils forment le corps du modèle et ne sont plus jamais ressaisis."),
      },
      {
        term: B("Named blank", "Champ nommé"),
        def: B("A placeholder in capitals and square brackets, such as [ARRIVAL DATE], with an example of the expected format in brackets: (Monday 3 November, 9 am). The example removes the guesswork.",
          "Un emplacement en majuscules entre crochets, comme [DATE D'ARRIVÉE], accompagné d'un exemple du format attendu entre parenthèses : (lundi 3 novembre, 9 h). L'exemple supprime les hésitations."),
      },
      {
        term: B("Filled example", "Exemple rempli"),
        def: B("A complete version of the template for a realistic case, kept next to it. People copy what they see more faithfully than they follow instructions; the same idea, applied to models, is called few-shot.",
          "Une version complète du modèle pour un cas réaliste, rangée à côté de lui. On reproduit ce que l'on voit plus fidèlement qu'on ne suit une notice ; appliquée aux modèles d'IA, la même idée s'appelle le few-shot."),
      },
      {
        term: B("Unjustified variation", "Variation injustifiée"),
        def: B("Parts that change between versions for no reason, such as the greeting or the order of paragraphs. The template settles them once and for all.",
          "Les passages qui changent d'une version à l'autre sans raison, comme la formule d'appel ou l'ordre des paragraphes. Le modèle les tranche une fois pour toutes."),
      },
    ],
    walkthrough: {
      title: B("Aurélie builds the template of her training notices",
        "Aurélie bâtit le modèle de ses convocations de formation"),
      steps: [
        B("Aurélie, assistant in a training organisation, writes six notices a month to session participants. She picks three recent ones, for three different courses, and removes the participants' names. Why: three versions show what is constant and what changes; one would not.",
          "Aurélie, assistante dans un organisme de formation, rédige six convocations par mois pour les participants des sessions. Elle en choisit trois récentes, pour trois formations différentes, et retire les noms des participants. Pourquoi : trois versions montrent ce qui est constant et ce qui varie ; une seule ne le montrerait pas."),
        B("She asks the model to list what is identical, then what changes. Identical: the welcome sentence, the access instructions, the cancellation policy. Changing: course title, dates, room, trainer, what to bring. Why: seeing both lists lets her check the split before any template exists.",
          "Elle demande au modèle de lister ce qui est identique, puis ce qui change. Identique : la phrase d'accueil, les indications d'accès, les conditions d'annulation. Variable : intitulé, dates, salle, formateur, matériel à apporter. Pourquoi : voir les deux listes lui permet de valider le partage avant que le modèle n'existe."),
        B("She asks for the template, each changing part as a named blank with an example, for instance [DATES] (Tuesday 4 and Wednesday 5 November, 9 am to 5 pm). Why: without the example, one colleague writes \"4-5/11\" and another writes the full dates.",
          "Elle demande le modèle, chaque partie variable devenant un champ nommé avec un exemple, par exemple [DATES] (mardi 4 et mercredi 5 novembre, 9 h à 17 h). Pourquoi : sans l'exemple, un collègue écrit « 4-5/11 » et un autre les dates en toutes lettres."),
        B("The model points out that the three emails use three different greetings and place the cancellation policy differently. Aurélie picks one of each. Why: those differences were accidents of the day, and the template makes the choice once.",
          "Le modèle signale que les trois emails emploient trois formules d'appel différentes et placent les conditions d'annulation à des endroits différents. Aurélie en retient une de chaque. Pourquoi : ces écarts étaient des accidents du jour, et le modèle fait le choix une fois pour toutes."),
        B("She asks for a filled example for a fictional session and stores it next to the template in the shared folder. She gives both to a colleague, without explanation, to prepare next week's notice. Check: the colleague asks nothing, and the result matches the example's format.",
          "Elle demande un exemple rempli pour une session fictive et le range à côté du modèle dans le dossier partagé. Elle remet les deux à une collègue, sans explication, pour préparer la convocation de la semaine suivante. Vérification : la collègue ne pose aucune question, et le résultat respecte le format de l'exemple."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking \"make me a template for X\" without giving any past version.",
          "Demander « fais-moi un modèle de X » sans fournir aucune version passée."),
        fix: B("Paste three of your own versions. The model then keeps your phrasing and your sections, instead of producing an average document your readers do not recognise.",
          "Collez trois de vos propres versions. Le modèle conserve alors vos formulations et vos rubriques, au lieu de produire un document moyen que vos lecteurs ne reconnaissent pas."),
      },
      {
        wrong: B("Leaving blanks with a name only: [DATE], [PLACE].",
          "Laisser des champs avec un simple nom : [DATE], [LIEU]."),
        fix: B("Add an example in brackets to each blank, showing the expected format. A name tells what to fill in; an example shows how.",
          "Ajoutez à chaque champ un exemple entre parenthèses qui montre le format attendu. Le nom dit quoi remplir ; l'exemple montre comment."),
      },
      {
        wrong: B("Storing the template without the filled example, or in a different place.",
          "Ranger le modèle sans l'exemple rempli, ou dans un autre endroit."),
        fix: B("Keep the filled example right next to the template, in the same file or folder. It is the first thing people look at when they fill it in.",
          "Gardez l'exemple rempli juste à côté du modèle, dans le même fichier ou le même dossier. C'est la première chose que l'on regarde au moment de remplir."),
      },
    ],
    recap: [
      B("Build the template from three of your real past versions.",
        "Bâtissez le modèle à partir de trois de vos versions passées réelles."),
      B("What is identical becomes fixed text; what changes becomes a named blank.",
        "Ce qui est identique devient texte fixe ; ce qui change devient champ nommé."),
      B("Give each blank an example of the expected format.",
        "Donnez à chaque champ un exemple du format attendu."),
      B("Keep a filled example next to the template, and test both on a colleague.",
        "Rangez un exemple rempli à côté du modèle, et testez les deux sur un collègue."),
    ],
    further: B("List the documents you retype at least twice a month and rank them by time spent. Build the template for the first one this week, then one a week. After a month, ask your colleagues which template they use most and which blank raises questions, and improve those examples.",
      "Listez les documents que vous ressaisissez au moins deux fois par mois et classez-les selon le temps qu'ils vous prennent. Bâtissez le modèle du premier cette semaine, puis un par semaine. Au bout d'un mois, demandez à vos collègues quel modèle ils utilisent le plus et quel champ suscite des questions, puis améliorez ces exemples."),
    more: [
      {
        q: B("Two of your three versions open with \"Dear participant\", the third with \"Hello\". What does the template do?",
          "Deux de vos trois versions commencent par « Madame, Monsieur », la troisième par « Bonjour ». Que fait le modèle ?"),
        options: [
          B("Pick one greeting and use it every time", "Il retient une formule et l'emploie à chaque fois"),
          B("Turn the greeting into a blank to fill in each time", "Il fait de la formule d'appel un champ à remplir à chaque fois"),
          B("Keep both greetings, one after the other", "Il garde les deux formules, l'une après l'autre"),
        ],
        answer: 0,
        why: B("The difference has no reason behind it: it is an accident of the day. Choose one and put it in the fixed text; a blank would bring the variation back.",
          "L'écart n'a aucune raison d'être : c'est un accident du jour. Choisissez une formule et placez-la dans le texte fixe ; un champ ramènerait la variation."),
      },
      {
        q: B("Your blank reads [TRAINER]. One colleague writes \"Marc\", another \"Mr Leroy, senior trainer\". What do you add?",
          "Votre champ indique [FORMATEUR]. Une collègue écrit « Marc », une autre « M. Leroy, formateur senior ». Qu'ajoutez-vous ?"),
        options: [
          B("A long note on how to write people's names", "Une longue notice sur l'écriture des noms"),
          B("An example: (Marc Leroy, trainer)", "Un exemple : (Marc Leroy, formateur)"),
          B("Nothing: both versions are perfectly clear to readers", "Rien : les deux versions sont parfaitement claires"),
        ],
        answer: 1,
        why: B("An example shows the format at a glance, and people copy what they see. Without it, each notice is filled in differently and they stop being comparable.",
          "Un exemple montre le format d'un coup d'œil, et l'on reproduit ce que l'on voit. Sans lui, chaque convocation est remplie différemment et elles cessent d'être comparables."),
      },
    ],
  },

  /* ================================================================ */
  /* ASSISTANT · LE TEMPS DES AUTRES                                  */
  /* ================================================================ */

  'as-time/as-schedule': {
    intro: B("Finding a slot for several people by email often takes several rounds of messages. This dojo treats scheduling as a constraint problem: you write down who must attend, who may miss it, the busy slots and the travel, and the AI proposes three ranked slots, each with the people it inconveniences. You then send the first slot as a decision, with the second as a fallback. You will also learn to check every date and weekday yourself, because a model does not look at a calendar.",
      "Trouver un créneau commun à plusieurs personnes par email demande souvent plusieurs tours de messages. Ce dojo traite la planification comme un problème de contraintes : vous écrivez qui doit être présent, qui peut s'absenter, les créneaux pris et les déplacements, et l'IA propose trois créneaux classés, chacun avec les personnes qu'il gêne. Vous envoyez ensuite le premier sous forme de décision, avec le deuxième en repli. Vous apprendrez aussi à vérifier vous-même chaque date et chaque jour de la semaine, car un modèle ne consulte pas de calendrier."),
    concepts: [
      {
        term: B("Must-attend and nice-to-have", "Indispensable et souhaitable"),
        def: B("The split between people without whom the meeting is pointless, and people who can catch up with the minutes. It is the constraint that decides everything else.",
          "La distinction entre les personnes sans lesquelles la réunion n'a pas de sens et celles qui peuvent se rattraper avec le compte rendu. C'est la contrainte qui détermine tout le reste."),
      },
      {
        term: B("Hard constraint", "Contrainte ferme"),
        def: B("A slot that cannot be used: a flight, a month-end closing, a part-time day, a night shift. Soft preferences (\"rather mornings\") come afterwards and only break ties.",
          "Un créneau inutilisable : un vol, une clôture comptable, un jour non travaillé, une garde de nuit. Les simples préférences (« plutôt le matin ») viennent ensuite et ne servent qu'à départager."),
      },
      {
        term: B("Ranked slots", "Créneaux classés"),
        def: B("Three options ordered from best to worst, each with the people it inconveniences. The ranking makes the trade-off explicit, so you can decide instead of running a poll.",
          "Trois options classées de la meilleure à la moins bonne, chacune avec les personnes qu'elle gêne. Le classement rend l'arbitrage explicite : vous décidez au lieu de lancer un sondage."),
      },
      {
        term: B("Date check", "Vérification des dates"),
        def: B("Checking in your own calendar that each date falls on the weekday stated. A model can pair a date with the wrong weekday, because it writes what is likely.",
          "Vérifier dans votre propre agenda que chaque date tombe bien le jour annoncé. Un modèle peut associer une date au mauvais jour de la semaine, car il écrit ce qui est probable."),
      },
    ],
    walkthrough: {
      title: B("Clara schedules a recruitment panel in a hospital",
        "Clara organise un jury de recrutement à l'hôpital"),
      steps: [
        B("Clara, assistant to the HR director of a hospital group, must set a two-hour panel. Must attend: the HR director, the head of nursing, the head of cardiology. Nice to have: the training manager and an HR officer. Why: with three must-attend people instead of five, far more slots open up.",
          "Clara, assistante de la DRH d'un groupe hospitalier, doit organiser un jury de deux heures. Indispensables : la DRH, la directrice des soins, le chef du service de cardiologie. Souhaitables : le responsable formation et une chargée RH. Pourquoi : avec trois indispensables au lieu de cinq, bien plus de créneaux deviennent possibles."),
        B("She copies the busy slots from the shared calendars and adds what calendars do not show: the head of nursing is on night duty on Tuesday, the cardiologist consults on Monday and Thursday mornings, the HR director is in Lyon on Wednesday. Why: the model can only use the constraints it is given.",
          "Elle copie les créneaux pris depuis les agendas partagés et ajoute ce que les agendas ne montrent pas : la directrice des soins est de garde de nuit le mardi, le cardiologue consulte les lundis et jeudis matin, la DRH est à Lyon le mercredi. Pourquoi : le modèle n'exploite que les contraintes qu'on lui donne."),
        B("She asks for three two-hour slots next week, ranked, each with weekday and date, who it inconveniences and why, using only her information. Why: asking who is inconvenienced makes the model show the cost of each option instead of presenting one as perfect.",
          "Elle demande trois créneaux de deux heures la semaine suivante, classés, chacun avec jour et date, les personnes gênées et la raison, en s'en tenant à ses informations. Pourquoi : demander qui est gêné oblige le modèle à montrer le coût de chaque option au lieu d'en présenter une comme parfaite."),
        B("The model ranks Thursday 2 pm to 4 pm first, with the training manager inconvenienced. Clara opens her calendar: the date it gave for that Thursday is in fact a Friday. She corrects it. Why: the ranking was right but the date was not, and five people would have been confused.",
          "Le modèle classe en premier jeudi de 14 h à 16 h, avec le responsable formation gêné. Clara ouvre son agenda : la date indiquée pour ce jeudi est en réalité un vendredi. Elle la corrige. Pourquoi : le classement était juste mais la date ne l'était pas, et cinq personnes auraient été induites en erreur."),
        B("She sends the invitation: Thursday 2 pm confirmed, Monday 3 pm as the fallback, conflicts to be reported by Wednesday noon. Check: the three must-attend people are free on Thursday, the date matches the weekday, and the training manager will receive the minutes.",
          "Elle envoie l'invitation : jeudi 14 h confirmé, lundi 15 h en repli, empêchements à signaler avant mercredi midi. Vérification : les trois indispensables sont libres jeudi, la date correspond au jour, et le responsable formation recevra le compte rendu."),
      ],
    },
    mistakes: [
      {
        wrong: B("Treating everyone as must-attend.",
          "Considérer tout le monde comme indispensable."),
        fix: B("Before asking for slots, decide who can miss the meeting and catch up with the minutes. Each person moved to nice-to-have opens more slots for the others.",
          "Avant de demander des créneaux, décidez qui peut manquer la réunion et se rattraper avec le compte rendu. Chaque personne passée en « souhaitable » libère des créneaux pour les autres."),
      },
      {
        wrong: B("Sending the model's dates without checking them.",
          "Envoyer les dates du modèle sans les vérifier."),
        fix: B("Check each date and weekday in your own calendar before sending. Rely on the reasoning about constraints, but verify the calendar facts yourself.",
          "Vérifiez chaque date et chaque jour dans votre propre agenda avant l'envoi. Fiez-vous au raisonnement sur les contraintes, mais vérifiez vous-même les faits de calendrier."),
      },
      {
        wrong: B("Sending all three slots and asking people to choose.",
          "Envoyer les trois créneaux et demander à chacun de choisir."),
        fix: B("Announce slot 1 as the decision and slot 2 as the fallback, with a deadline to report a conflict. A choice among three brings back the round of replies you wanted to avoid.",
          "Annoncez le créneau n° 1 comme décision et le n° 2 en repli, avec une date limite pour signaler un empêchement. Un choix entre trois ramène le tour de réponses que vous vouliez éviter."),
      },
    ],
    recap: [
      B("Split participants into must-attend and nice-to-have before anything else.",
        "Répartissez d'abord les participants entre indispensables et souhaitables."),
      B("Give the model the busy slots plus what calendars do not show: travel, duty, part time.",
        "Donnez au modèle les créneaux pris et ce que les agendas ne montrent pas : déplacements, gardes, temps partiels."),
      B("Ask for three ranked slots, each with the people it inconveniences.",
        "Demandez trois créneaux classés, chacun avec les personnes qu'il gêne."),
      B("Check every date and weekday, then send slot 1 as a decision with a fallback.",
        "Vérifiez chaque date et chaque jour, puis envoyez le n° 1 comme décision, avec un repli."),
    ],
    further: B("Keep a short constraints sheet for the people you schedule most often: fixed duties, travel days, part-time days, preferred hours. Paste it into each scheduling prompt instead of rediscovering constraints by email. Update it whenever someone mentions a change, and have them confirm it once a quarter.",
      "Tenez une courte fiche de contraintes pour les personnes que vous planifiez le plus souvent : obligations fixes, jours de déplacement, temps partiels, horaires préférés. Collez-la dans chaque prompt de planification au lieu de redécouvrir les contraintes par email. Mettez-la à jour à chaque changement signalé, et faites-la confirmer une fois par trimestre."),
    more: [
      {
        q: B("The model proposes a slot when a must-attend person is on leave. What most likely happened?",
          "Le modèle propose un créneau où une personne indispensable est en congé. Que s'est-il le plus probablement passé ?"),
        options: [
          B("The leave was not in the constraints", "Le congé ne figurait pas dans les contraintes"),
          B("The model is simply unreliable for any scheduling", "Le modèle n'est tout simplement pas fiable pour planifier"),
          B("Must-attend people are always ranked last by the model", "Le modèle classe toujours les indispensables en dernier"),
        ],
        answer: 0,
        why: B("The model uses only what you give it. If the leave is in neither the busy slots nor the constraints, it cannot know about it. Add it and ask again.",
          "Le modèle n'utilise que ce que vous lui fournissez. Si le congé ne figure ni dans les créneaux pris ni dans les contraintes, il ne peut pas le connaître. Ajoutez-le et redemandez."),
      },
      {
        q: B("Your fallback slot would inconvenience a must-attend person. What do you do?",
          "Votre créneau de repli gênerait une personne indispensable. Que faites-vous ?"),
        options: [
          B("Send it anyway: it is only the fallback", "Vous l'envoyez quand même : ce n'est qu'un repli"),
          B("Ask for a fallback where all must-attend are free", "Vous demandez un repli où tous les indispensables sont libres"),
          B("Drop the fallback and send slot 1 alone", "Vous supprimez le repli et envoyez le n° 1 seul"),
        ],
        answer: 1,
        why: B("If slot 1 falls through, the fallback becomes the meeting. It must meet the same hard constraint: every must-attend person is free.",
          "Si le créneau n° 1 tombe, le repli devient la réunion. Il doit respecter la même contrainte ferme : toutes les personnes indispensables sont libres."),
      },
    ],
  },

  'as-time/as-voice': {
    intro: B("Assistants often write on behalf of someone else: replies to clients, invitations, thank-you notes. A model asked to write \"professionally\" uses its own smooth, polished voice, which people who know the sender notice within two lines. This dojo teaches you to draw the real rules of the person's style from five messages they wrote themselves, have them approve those rules once, and apply them to every draft. Writing for someone is legitimate when they agree to it and know you do it.",
      "Un assistant écrit souvent au nom d'un autre : réponses aux clients, invitations, remerciements. Un modèle à qui l'on demande d'écrire « de façon professionnelle » adopte sa propre voix, lisse et soignée, que les proches de l'expéditeur remarquent en deux lignes. Ce dojo vous apprend à dégager les véritables règles du style de la personne à partir de cinq messages qu'elle a rédigés elle-même, à les lui faire valider une fois, puis à les appliquer à chaque brouillon. Écrire au nom de quelqu'un est légitime lorsqu'il y consent et sait que vous le faites."),
    concepts: [
      {
        term: B("Default voice", "Voix par défaut"),
        def: B("The style a model uses when nothing else is specified: complete sentences, courteous formulas, moderate length. It is correct but recognisable, and rarely that of the person you write for.",
          "Le style qu'adopte un modèle lorsque rien d'autre n'est précisé : phrases complètes, formules courtoises, longueur modérée. Il est correct mais reconnaissable, et rarement celui de la personne pour qui vous écrivez."),
      },
      {
        term: B("Style sheet", "Fiche de style"),
        def: B("Ten lines at most describing how the person writes: opening, sign-off, length, formal or informal address, frequent words, words never used, punctuation. It is approved once and reused.",
          "Dix lignes au plus décrivant la façon d'écrire de la personne : ouverture, signature, longueur, tutoiement ou vouvoiement, mots fréquents, mots jamais employés, ponctuation. Elle est validée une fois, puis réutilisée."),
      },
      {
        term: B("Describe, do not improve", "Décrire sans corriger"),
        def: B("The instruction that keeps the person's quirks: short sentences, no greeting, a favourite phrase. Improving them is exactly what gives the ghost-writer away.",
          "La consigne qui préserve les particularités de la personne : phrases courtes, absence de formule d'appel, expression favorite. Les améliorer est précisément ce qui trahit la plume de l'assistant."),
      },
      {
        term: B("Consent", "Consentement"),
        def: B("The person's agreement that you write in their name, and in which cases. Approved rules make that agreement explicit and set its limits.",
          "L'accord de la personne pour que vous écriviez en son nom, et dans quels cas. Des règles validées rendent cet accord explicite et en fixent les limites."),
      },
    ],
    walkthrough: {
      title: B("Émilie builds the style sheet of a bakery chain's founder",
        "Émilie établit la fiche de style du fondateur d'une chaîne de boulangeries"),
      steps: [
        B("Émilie answers supplier and partner emails for Jean, founder of five bakeries. She picks five emails Jean wrote himself in recent months, not ones she drafted. Why: her own drafts would teach the model her style, not his.",
          "Émilie répond aux emails des fournisseurs et partenaires pour Jean, fondateur de cinq boulangeries. Elle choisit cinq emails rédigés par Jean lui-même ces derniers mois, et non ceux qu'elle a préparés. Pourquoi : ses propres brouillons enseigneraient au modèle son style à elle, et non celui de Jean."),
        B("She asks for his rules before any writing. The model finds: \"Hello\" and the first name, never \"Dear\"; 3 to 5 lines; formal with suppliers, informal with two old partners; often \"we will see\"; signs \"Jean\"; no exclamation marks. Why: a short list is easy for Jean to check.",
          "Elle demande ses règles avant toute rédaction. Le modèle relève : « Bonjour » et le prénom, jamais « Cher » ; 3 à 5 lignes ; vouvoiement avec les fournisseurs, tutoiement avec deux partenaires de longue date ; souvent « on verra » ; signe « Jean » ; aucun point d'exclamation. Pourquoi : une liste courte se vérifie facilement."),
        B("She asks the model to describe, not correct. It had added \"sentences could be better structured\"; she deletes that line. Why: the sheet must keep what makes Jean recognisable, including what a model would call a flaw.",
          "Elle demande au modèle de décrire sans corriger. Il avait ajouté « les phrases gagneraient à être mieux structurées » ; elle supprime cette ligne. Pourquoi : la fiche doit préserver ce qui rend Jean reconnaissable, y compris ce qu'un modèle qualifierait de défaut."),
        B("She shows Jean the ten lines. He corrects one: he is on informal terms with three partners, not two, and never ends with \"Best regards\". Why: approving rules takes him two minutes, once, instead of approving every email.",
          "Elle soumet les dix lignes à Jean. Il en corrige une : il tutoie trois partenaires, et non deux, et ne termine jamais par « Cordialement ». Pourquoi : valider des règles lui prend deux minutes, une seule fois, au lieu de valider chaque email."),
        B("She drafts a reply to a flour supplier with the approved sheet and compares it with Jean's real emails: four lines, \"Hello Marc\", signed \"Jean\", no exclamation mark. Check: the draft matches the sheet, and she sends it within the limits they agreed.",
          "Elle rédige une réponse à un meunier avec la fiche validée et la compare aux emails réels de Jean : quatre lignes, « Bonjour Marc », signé « Jean », aucun point d'exclamation. Vérification : le brouillon respecte la fiche, et elle l'envoie dans les limites convenues ensemble."),
      ],
    },
    mistakes: [
      {
        wrong: B("Asking for an email \"in my boss's style, professional\".",
          "Demander un email « dans le style de mon patron, professionnel »."),
        fix: B("Give five messages the person wrote and ask for the rules first. \"Professional\" triggers the model's default voice, which is exactly what readers who know your boss notice.",
          "Fournissez cinq messages rédigés par la personne et demandez d'abord les règles. « Professionnel » déclenche la voix par défaut du modèle, précisément ce que remarquent ceux qui connaissent votre patron."),
      },
      {
        wrong: B("Using your own past drafts as examples of their style.",
          "Utiliser vos propres brouillons passés comme exemples de son style."),
        fix: B("Use only messages the person wrote. If there are almost none in writing, ask them to dictate two or three short replies, and draw the rules from those.",
          "N'utilisez que des messages rédigés par la personne. S'il n'en existe presque pas, demandez-lui de dicter deux ou trois réponses courtes, et tirez-en les règles."),
      },
      {
        wrong: B("Having every draft approved one by one, indefinitely.",
          "Faire valider chaque brouillon un par un, indéfiniment."),
        fix: B("Have the style sheet approved once, then write within it. Keep individual approval for sensitive messages the sheet does not cover, such as a dispute or bad news.",
          "Faites valider la fiche de style une fois, puis écrivez dans son cadre. Réservez la validation au cas par cas aux messages sensibles que la fiche ne couvre pas, comme un litige ou une mauvaise nouvelle."),
      },
    ],
    recap: [
      B("Start from five messages the person wrote themselves.",
        "Partez de cinq messages rédigés par la personne elle-même."),
      B("Ask the model to describe the style, not to improve it.",
        "Demandez au modèle de décrire le style, et non de l'améliorer."),
      B("Have the person approve the rules once, then apply them to every draft.",
        "Faites valider les règles une fois, puis appliquez-les à chaque brouillon."),
      B("Compare each draft with their real messages: length, opening and sign-off first.",
        "Comparez chaque brouillon à ses messages réels : longueur, ouverture et signature d'abord."),
    ],
    further: B("Agree in writing on the boundaries: which messages you send in the person's name, which you draft for them to send, and which they always write themselves. Put those three lines at the top of the style sheet. They protect you both on the day a message goes wrong.",
      "Convenez par écrit des limites : quels messages vous envoyez en son nom, lesquels vous préparez pour qu'elle les envoie, et lesquels elle écrit toujours elle-même. Placez ces trois lignes en tête de la fiche de style. Elles vous protègent tous les deux le jour où un message pose problème."),
    more: [
      {
        q: B("The style sheet says \"no exclamation marks\", but the model's draft has two. What do you do?",
          "La fiche de style indique « aucun point d'exclamation », mais le brouillon en contient deux. Que faites-vous ?"),
        options: [
          B("Delete them and remind the model of the sheet", "Vous les supprimez et rappelez la fiche au modèle"),
          B("Keep them: they make the email warmer and friendlier", "Vous les gardez : elles rendent l'email plus chaleureux"),
          B("Rewrite the whole style sheet from scratch", "Vous réécrivez toute la fiche de style"),
        ],
        answer: 0,
        why: B("The sheet is approved; the draft must follow it. Remove them and paste the sheet again if needed. Warmth that is not the sender's is what gives the email away.",
          "La fiche est validée ; le brouillon doit la respecter. Supprimez-les et recollez la fiche si nécessaire. Une chaleur qui n'est pas celle de l'expéditeur trahit l'email."),
      },
      {
        q: B("The person you write for has almost no written messages. How do you build the sheet?",
          "La personne pour qui vous écrivez n'a presque aucun message écrit. Comment établissez-vous la fiche ?"),
        options: [
          B("Use the model's default professional style", "Vous adoptez le style professionnel par défaut du modèle"),
          B("Use your own emails as the basis for the sheet", "Vous prenez vos propres emails comme base de la fiche"),
          B("Ask them to dictate three short replies", "Vous lui faites dicter trois réponses courtes"),
        ],
        answer: 2,
        why: B("Only the person's own words hold their habits. Three dictated replies give enough material; your emails or the default style would describe someone else.",
          "Seuls les mots de la personne contiennent ses habitudes. Trois réponses dictées fournissent assez de matière ; vos emails ou le style par défaut décriraient quelqu'un d'autre."),
      },
    ],
  },

  'as-time/as-never': {
    intro: B("When you paste a document into an AI tool, it leaves your computer and goes to the provider's servers; what happens next depends on the tool, the account and its settings. Some documents must never go there, others only once anonymised, others are fine with an approved tool. This dojo teaches you to decide in advance, in writing and by document type, so that on a rushed afternoon you apply a list instead of making a judgment call. The list does not replace your company's policy or legal advice: it applies them to your daily work.",
      "Lorsque vous collez un document dans un outil d'IA, il quitte votre ordinateur pour les serveurs du provider ; la suite dépend de l'outil, du compte et de ses réglages. Certains documents ne doivent jamais y aller, d'autres seulement une fois anonymisés, d'autres le peuvent avec un outil autorisé. Ce dojo vous apprend à décider à l'avance, par écrit et par type de document, afin qu'un après-midi chargé vous appliquiez une liste au lieu de juger au cas par cas. La liste ne remplace ni la politique de votre entreprise ni un avis juridique : elle les applique à votre travail quotidien."),
    concepts: [
      {
        term: B("Personal data", "Données personnelles"),
        def: B("Any information about an identifiable person: name, address, phone, date of birth, file number, health or HR details. In Europe the GDPR frames what you may do with it, including sharing it with an outside tool.",
          "Toute information relative à une personne identifiable : nom, adresse, téléphone, date de naissance, numéro de dossier, données de santé ou RH. En Europe, le RGPD encadre ce que vous pouvez en faire, y compris la transmettre à un outil extérieur."),
      },
      {
        term: B("Anonymisation", "Anonymisation"),
        def: B("Removing or replacing everything that identifies a person, not just the name: address, dates, file numbers, rare details. If a colleague could still guess who it is, it is not anonymised.",
          "Retirer ou remplacer tout ce qui permet d'identifier une personne, et pas seulement le nom : adresse, dates, numéros de dossier, détails rares. Si un collègue pourrait encore deviner de qui il s'agit, le document n'est pas anonymisé."),
      },
      {
        term: B("Approved tool", "Outil autorisé"),
        def: B("The AI tool and the account your company allows for work documents, often a professional account with specific settings. A personal account of the same tool may not offer the same guarantees.",
          "L'outil d'IA et le compte que votre entreprise autorise pour les documents de travail, souvent un compte professionnel aux réglages spécifiques. Un compte personnel du même outil n'offre pas forcément les mêmes garanties."),
      },
      {
        term: B("Three-level rule", "Règle en trois niveaux"),
        def: B("Each document type is classed NEVER, ANONYMISED or ALLOWED (with a named tool). When in doubt, it is NEVER.",
          "Chaque type de document est classé JAMAIS, ANONYMISÉ ou AUTORISÉ (avec un outil nommé). En cas de doute, c'est JAMAIS."),
      },
    ],
    walkthrough: {
      title: B("Lucas writes his rule before tax season",
        "Lucas écrit sa règle avant la saison fiscale"),
      steps: [
        B("Lucas, assistant in a 25-person accounting firm, lists the document types he handles each week: client tax files, payslips prepared for clients, client emails, partners' meeting minutes, engagement letter templates, job ads, the internal newsletter. Why: a rule by type is applied in a second.",
          "Lucas, assistant dans un cabinet comptable de 25 personnes, liste les types de documents qu'il manipule chaque semaine : dossiers fiscaux des clients, bulletins de paie des clients, emails clients, comptes rendus des associés, modèles de lettres de mission, offres d'emploi, lettre interne. Pourquoi : une règle par type s'applique en une seconde."),
        B("He asks the model to class each type as NEVER, ANONYMISED or ALLOWED, with a one-line reason, and to flag what must be confirmed by the partners or the DPO. Why: the model drafts the reasoning, but the decision belongs to the firm.",
          "Il demande au modèle de classer chaque type en JAMAIS, ANONYMISÉ ou AUTORISÉ, avec une raison en une ligne, et de signaler ce que les associés ou le DPO doivent confirmer. Pourquoi : le modèle rédige le raisonnement, mais la décision appartient au cabinet."),
        B("The draft puts tax files and payslips in NEVER, client emails in ANONYMISED, and templates, job ads and the newsletter in ALLOWED with the firm's approved account. It flags the partners' minutes as \"to confirm\". Why: minutes may hold client names and strategy, which only the partners can judge.",
          "Le brouillon classe dossiers fiscaux et bulletins de paie en JAMAIS, emails clients en ANONYMISÉ, et modèles, offres d'emploi et lettre interne en AUTORISÉ avec le compte validé par le cabinet. Il signale les comptes rendus des associés « à confirmer ». Pourquoi : ils peuvent contenir noms de clients et stratégie, que seuls les associés peuvent juger."),
        B("For ANONYMISED, he asks what to replace: names, addresses, tax numbers, company names, amounts that identify a client. He sets his tags: [CLIENT], [ADDRESS], [TAX NO.]. Why: removing only the name leaves the client identifiable by everything else.",
          "Pour ANONYMISÉ, il demande quoi remplacer : noms, adresses, numéros fiscaux, raisons sociales, montants qui identifient un client. Il fixe ses repères : [CLIENT], [ADRESSE], [N° FISCAL]. Pourquoi : retirer seulement le nom laisse le client identifiable par tout le reste."),
        B("He shows the page to the partner in charge, who moves the minutes to NEVER and confirms which account is approved. Lucas prints it and pins it by his screen. Check: every type holding client data is NEVER or ANONYMISED, and each ALLOWED line names a precise tool and account.",
          "Il soumet la page à l'associé référent, qui classe les comptes rendus en JAMAIS et confirme le compte autorisé. Lucas l'imprime et l'affiche près de son écran. Vérification : tout type contenant des données clients est en JAMAIS ou ANONYMISÉ, et chaque ligne AUTORISÉ nomme un outil et un compte précis."),
      ],
    },
    mistakes: [
      {
        wrong: B("Deciding case by case: \"just this once, it is urgent\".",
          "Décider au cas par cas : « juste cette fois, c'est urgent »."),
        fix: B("Write the rule in advance and apply it under pressure. If the rule says NEVER, do the task another way and explain the rule to the person asking.",
          "Écrivez la règle à l'avance et appliquez-la sous pression. Si elle dit JAMAIS, accomplissez la tâche autrement et expliquez la règle à la personne qui vous sollicite."),
      },
      {
        wrong: B("Removing the name and believing the document is anonymised.",
          "Retirer le nom et croire le document anonymisé."),
        fix: B("Replace every identifying detail: address, dates of birth, file or contract numbers, rare details. Then ask yourself whether a colleague could still guess who it is.",
          "Remplacez chaque détail identifiant : adresse, dates de naissance, numéros de dossier ou de contrat, détails rares. Demandez-vous ensuite si un collègue pourrait encore deviner de qui il s'agit."),
      },
      {
        wrong: B("Using a personal account of an AI tool for work documents, because it is the same tool.",
          "Utiliser un compte personnel d'outil d'IA pour des documents de travail, parce que c'est le même outil."),
        fix: B("Use only the tool and account your company approves, and write them on your list. Settings and guarantees can differ between personal and professional accounts.",
          "N'utilisez que l'outil et le compte validés par votre entreprise, et inscrivez-les sur votre liste. Réglages et garanties peuvent différer entre comptes personnels et professionnels."),
      },
    ],
    recap: [
      B("A pasted document leaves your computer; what follows depends on the tool and the account.",
        "Un document collé quitte votre ordinateur ; la suite dépend de l'outil et du compte."),
      B("Class each document type in advance: NEVER, ANONYMISED, or ALLOWED with a named tool.",
        "Classez chaque type de document à l'avance : JAMAIS, ANONYMISÉ, ou AUTORISÉ avec un outil nommé."),
      B("Anonymising means removing everything that identifies someone, not only the name.",
        "Anonymiser, c'est retirer tout ce qui identifie quelqu'un, et pas seulement le nom."),
      B("When in doubt, it is NEVER; your company's policy or DPO has the final word.",
        "Dans le doute, c'est JAMAIS ; la politique de votre entreprise ou le DPO a le dernier mot."),
    ],
    further: B("Review your list every quarter, and whenever your company changes tools or policy. Add each new document type the day you first meet it, before using AI on it. If your team has no shared rule, offer yours to your manager as a starting point: one page approved by the DPO protects everyone better than ten personal ones.",
      "Revoyez votre liste chaque trimestre, et à chaque changement d'outil ou de politique dans votre entreprise. Ajoutez tout nouveau type de document le jour où vous le rencontrez, avant d'y appliquer l'IA. Si votre équipe n'a pas de règle commune, proposez la vôtre à votre responsable comme point de départ : une page validée par le DPO protège mieux chacun que dix règles personnelles."),
    more: [
      {
        q: B("A new AI tool spreads in your team. A colleague says \"it is secure, everyone uses it\". Your list does not name it. What do you do?",
          "Un nouvel outil d'IA se répand dans l'équipe. Un collègue affirme « il est sûr, tout le monde l'utilise ». Votre liste ne le cite pas. Que faites-vous ?"),
        options: [
          B("Use it, but only for ALLOWED documents", "Vous l'utilisez, mais seulement pour les documents AUTORISÉ"),
          B("Ask your manager or the DPO first", "Vous interrogez d'abord votre responsable ou le DPO"),
          B("Use it, but only with anonymised documents", "Vous l'utilisez, mais seulement avec des documents anonymisés"),
        ],
        answer: 1,
        why: B("Your ALLOWED line names a precise approved tool. A new tool is not on it until your company approves it, and \"everyone uses it\" is not an approval.",
          "Votre ligne AUTORISÉ nomme un outil validé précis. Un nouvel outil n'y figure pas tant que votre entreprise ne l'a pas validé, et « tout le monde l'utilise » n'est pas une validation."),
      },
      {
        q: B("Which of these documents can go in ALLOWED, with the approved tool?",
          "Lequel de ces documents peut être classé AUTORISÉ, avec l'outil validé ?"),
        options: [
          B("A job ad before publication", "Une offre d'emploi avant publication"),
          B("A candidate's CV with your interview notes", "Le CV d'un candidat avec vos notes d'entretien"),
          B("An employee's sick leave certificate", "L'arrêt maladie d'un salarié"),
          B("A client's signed contract with its appendices", "Le contrat signé d'un client, avec ses annexes"),
        ],
        answer: 0,
        why: B("A job ad holds no personal data and will soon be public. A CV, a medical certificate or a signed contract identify people or bind the company: NEVER or ANONYMISED.",
          "Une offre d'emploi ne contient aucune donnée personnelle et sera bientôt publique. Un CV, un arrêt maladie ou un contrat signé identifient des personnes ou engagent l'entreprise : JAMAIS ou ANONYMISÉ."),
      },
    ],
  },
}
