// L'approfondissement des dojos de ce groupe · voir ./types.
import { B } from '../bilingual'
import type { Enrichment } from './types'

export const ENRICH_TRADES_C: Record<string, Enrichment> = {
  /* ================================================================ */
  /* COMMERCIAL · PROSPECTER                                          */
  /* ================================================================ */

  'sa-prospect/sa-brief': {
    why: [
      B("A model writes the most likely next words. When it does not know a company's recent news, the most likely text is still a precise one: a date, an amount, a name. That is why an invented funding round looks exactly like a real one.",
        "Un modèle écrit les mots les plus probables. Quand il ne connaît pas l'actualité d'une entreprise, le texte le plus probable reste un texte précis : une date, un montant, un nom. C'est pour ça qu'une levée de fonds inventée ressemble trait pour trait à une vraie."),
      B("So change what you ask for. A date and a source link for each fact, and the right to answer \"not found\". You open one link in ten seconds, and a fact without a link goes in the bin. Then ask what the fact means for the person's role: that turns a piece of news into a reason to write.",
        "Change donc ce que tu demandes. Une date et un lien pour chaque fait, et le droit de répondre « non trouvé ». Tu ouvres un lien en dix secondes, et un fait sans lien part à la poubelle. Demande ensuite ce que le fait change pour le poste de la personne : c'est ce qui transforme une actualité en raison d'écrire."),
      B("Picture your prospect reading \"Congratulations on your March funding round\". If there was no round, the conversation is over before it starts. If there was, and you add what it means for their team, you are the one message that day that understood something.",
        "Imagine ton prospect qui lit « Félicitations pour votre levée de fonds de mars ». S'il n'y a pas eu de levée, la conversation est finie avant d'avoir commencé. S'il y en a eu une, et que tu ajoutes ce qu'elle change pour son équipe, tu es le seul message du jour qui a compris quelque chose."),
    ],
    example: {
      context: B("Sofiane sells scheduling software to franchise networks. He wants to write to the operations director of a chain of 40 hair salons.",
        "Sofiane vend un logiciel de planning à des réseaux de franchise. Il veut écrire au directeur des opérations d'une chaîne de 40 salons de coiffure."),
      before: B("Give me info on Salons Arlequin for my prospecting.",
        "Donne-moi des infos sur les Salons Arlequin pour ma prospection."),
      after: B("I am preparing a first message to the operations director of Salons Arlequin (a network of 40 franchised hair salons).\nFind what has changed there in the last 12 months: openings, closures, hiring, a new director, an acquisition.\nFor each fact: the date, the source link, and what it changes for an operations director (schedules, hiring, cover for absences).\nIf you find no source, write \"not found\". Do not invent any number.\nIf you cannot search the web, say so and stop.\nEnd with the most useful fact for my first line, and why.",
        "Je prépare un premier message pour le directeur des opérations des Salons Arlequin (réseau de 40 salons de coiffure en franchise).\nCherche ce qui a changé chez eux depuis 12 mois : ouvertures, fermetures, recrutements, nouveau dirigeant, rachat.\nPour chaque fait : la date, le lien de la source, et ce que ça change pour un directeur des opérations (plannings, recrutement, remplacements).\nSi tu ne trouves pas de source, écris « non trouvé ». N'invente aucun chiffre.\nSi tu ne peux pas chercher sur le web, dis-le et arrête-toi.\nTermine par le fait le plus utile pour ma première ligne, et pourquoi."),
      takeaway: B("The second prompt demands a date and a link for every fact, and allows \"not found\". Sofiane has one link to open before writing, instead of a portrait he cannot check.",
        "Le second prompt exige une date et un lien pour chaque fait, et autorise « non trouvé ». Sofiane n'a plus qu'un lien à ouvrir avant d'écrire, au lieu d'un portrait qu'il ne peut pas vérifier."),
    },
    exercise: {
      goal: B("A sheet of three dated facts about a real prospect, each with a source you opened, and the first line of your message.",
        "Une fiche de trois faits datés sur un vrai prospect, chacun avec une source que tu as ouverte, et la première ligne de ton message."),
      prompt: B("You are a sales analyst. I sell [YOUR OFFER IN ONE SENTENCE] and I want to write to [FIRST NAME, ROLE] at [COMPANY].\nFind what has changed there in the last 12 months: hiring, openings, acquisition, new director, launch, published results.\nFor each fact, give:\n- the date\n- the source link\n- what this fact implies for someone in the role of [ROLE]\nIf you have no source, write \"not found\" and invent nothing. If you cannot search the web, say so and stop.\nRank the facts from most to least useful to open a first message.\nThen suggest a first line based on fact no. 1, in 20 words maximum.",
        "Tu es un analyste commercial. Je vends [TON OFFRE EN UNE PHRASE] et je veux écrire à [PRÉNOM, POSTE] chez [ENTREPRISE].\nCherche ce qui a changé chez eux depuis 12 mois : recrutements, ouvertures, rachat, nouveau dirigeant, lancement, résultats publiés.\nPour chaque fait, donne :\n- la date\n- le lien de la source\n- ce que ce fait implique pour quelqu'un au poste de [POSTE]\nSi tu n'as pas de source, écris « non trouvé » et n'invente rien. Si tu ne peux pas chercher sur le web, dis-le et arrête-toi.\nClasse les faits du plus utile au moins utile pour ouvrir un premier message.\nPropose ensuite une première ligne basée sur le fait n° 1, en 20 mots maximum."),
      check: [
        B("Every fact has a date and a link, or says \"not found\"", "Chaque fait a une date et un lien, ou la mention « non trouvé »"),
        B("You opened the link of the fact you will quote, and it really says that", "Tu as ouvert le lien du fait que tu vas citer, et il dit bien ça"),
        B("The implication is about the person's role, not the company in general", "L'implication parle du poste de la personne, pas de l'entreprise en général"),
        B("Your first line is about them, not about your offer", "Ta première ligne parle d'eux, pas de ton offre"),
      ],
      bonus: B("Build the sheet for five prospects in the same sector, then ask which fact comes up for several of them. That shared fact is the hook of your next campaign.",
        "Fais la fiche pour cinq prospects du même secteur, puis demande quel fait revient chez plusieurs d'entre eux. Ce fait commun est l'accroche de ta prochaine campagne."),
    },
    more: [
      {
        q: B("The model says your prospect \"opened 12 branches in 2025\". You find no source. What do you do?",
          "Le modèle t'annonce que ton prospect « a ouvert 12 agences en 2025 ». Tu ne trouves aucune source. Que fais-tu ?"),
        options: [
          B("Stay vague: \"I saw you are growing\"", "Tu restes vague : « j'ai vu que vous grandissez »"),
          B("Drop it and look for another fact", "Tu l'abandonnes et tu cherches un autre fait"),
          B("Use it, rounded to \"about ten\"", "Tu l'emploies, arrondi à « une dizaine »"),
        ],
        answer: 1,
        why: B("A fact with no source is still a guess, even rounded or blurred. If it is wrong, the prospect sees it at once. Move on to a fact whose source you can open.",
          "Un fait sans source reste une supposition, même arrondi ou flouté. S'il est faux, le prospect le voit tout de suite. Passe à un fait dont tu peux ouvrir la source."),
      },
      {
        q: B("You found a true fact: they are hiring 8 salespeople. What do you add to the prompt so it becomes useful?",
          "Tu as trouvé un fait vrai : ils recrutent 8 commerciaux. Qu'ajoutes-tu au prompt pour qu'il serve ?"),
        options: [
          B("A compliment on their fine growth", "Un compliment sur leur belle croissance"),
          B("Their revenue for last year", "Leur chiffre d'affaires de l'an dernier"),
          B("What it changes for your contact", "Ce que ça change pour ton contact"),
        ],
        answer: 2,
        why: B("The fact alone gives no reason to reply. Eight new salespeople to train at once is a concrete problem for the sales director. That problem is your first line.",
          "Le fait seul ne donne aucune raison de répondre. Huit commerciaux à former en même temps, c'est un problème concret pour le directeur commercial. C'est ce problème qui fait ta première ligne."),
      },
    ],
  },

  'sa-prospect/sa-first': {
    why: [
      B("Ask a model for \"a prospecting email\" and you get the average of every sales email it has read: who we are, what we do, and thirty minutes next week. It is the most common shape, so it is the most likely one. It is also the one your prospect deletes without reading.",
        "Demande « un mail de prospection » à un modèle et tu obtiens la moyenne de tous les mails commerciaux qu'il a lus : qui nous sommes, ce que nous faisons, et trente minutes la semaine prochaine. C'est la forme la plus courante, donc la plus probable. C'est aussi celle que ton prospect supprime sans la lire."),
      B("To leave the average, give the shape yourself: six lines, the order of the lines, and what is forbidden. Forbidding sentences about you forces the model to talk about them. Asking for one question answerable in five words makes the reply cost almost nothing.",
        "Pour sortir de la moyenne, donne toi-même la forme : six lignes, l'ordre des lignes, et ce qui est interdit. Interdire les phrases sur toi force le modèle à parler d'eux. Demander une question qui se répond en cinq mots rend la réponse presque gratuite."),
      B("Think of your prospect reading on their phone, between two meetings. If replying means opening their calendar, they postpone it, and a postponed reply is never sent. If replying means typing \"yes, since March\", they do it right away.",
        "Pense à ton prospect qui lit sur son téléphone, entre deux réunions. Si répondre l'oblige à ouvrir son agenda, il remet à plus tard, et une réponse remise n'est jamais envoyée. Si répondre veut dire taper « oui, depuis mars », il le fait tout de suite."),
    ],
    example: {
      context: B("Claire sells workplace safety training. She writes to the HR director of a logistics company that has just opened a warehouse in Lyon, a fact she checked.",
        "Claire vend des formations à la sécurité au travail. Elle écrit à la DRH d'une entreprise de logistique qui vient d'ouvrir un entrepôt à Lyon, un fait qu'elle a vérifié."),
      before: B("Write a prospecting email to offer my safety training to a logistics company and ask for a meeting.",
        "Écris un mail de prospection pour proposer mes formations sécurité à une entreprise de logistique et demander un rendez-vous."),
      after: B("Write a first prospecting message of 6 lines maximum to Nadia, HR director at TransAlp Logistique.\nLine 1: their new Lyon warehouse, opened in March (checked source).\nLines 2 and 3: what I have seen work at a carrier of the same size: new forklift drivers trained in their first week, before they start on the floor.\nLast line: one closed question she can answer in five words.\nForbidden: introducing my company, talking about me, asking for a meeting or a call.\nTone: direct, polite, formal \"vous\".",
        "Écris un premier message de prospection de 6 lignes maximum pour Nadia, DRH de TransAlp Logistique.\nLigne 1 : leur nouvel entrepôt de Lyon, ouvert en mars (source vérifiée).\nLignes 2 et 3 : ce que j'ai vu marcher chez un transporteur de même taille : les nouveaux caristes formés dès leur première semaine, avant leur prise de poste.\nDernière ligne : une question fermée, à laquelle elle répond en cinq mots.\nInterdits : présenter mon entreprise, parler de moi, demander un rendez-vous ou un appel.\nTon : direct, poli, vouvoiement."),
      takeaway: B("The first prompt produces the average email: introduction, catalogue, meeting request. The second fixes the length, the order and the small final question, and forbids everything about Claire.",
        "Le premier prompt produit le mail moyen : présentation, catalogue, demande de rendez-vous. Le second fixe la longueur, l'ordre et la petite question finale, et interdit tout ce qui parle de Claire."),
    },
    exercise: {
      goal: B("A six-line first message, ready to send to a real prospect, ending on a question they can answer in five words.",
        "Un premier message de six lignes, prêt à envoyer à un vrai prospect, qui finit sur une question à laquelle il répond en cinq mots."),
      prompt: B("You are an experienced B2B salesperson. Write a first prospecting message.\nRecipient: [FIRST NAME, ROLE, COMPANY].\nChecked fact about them: [THE FACT + ITS DATE].\nWhat I have seen work for a comparable client: [CONCRETE RESULT OR CHANGE, NO INVENTED NUMBER].\nRules:\n- 6 lines maximum\n- line 1: the checked fact, turned towards them\n- lines 2 and 3: the comparable case\n- last line: one single closed question, answerable in five words\n- no sentence about me or my company, no meeting request\nGive 3 versions of the final question. Then reread the message and delete every sentence that starts with \"we\" or \"I\".",
        "Tu es un commercial B2B expérimenté. Écris un premier message de prospection.\nDestinataire : [PRÉNOM, POSTE, ENTREPRISE].\nFait vérifié sur eux : [LE FAIT + SA DATE].\nCe que j'ai vu marcher chez un client comparable : [RÉSULTAT OU CHANGEMENT CONCRET, SANS CHIFFRE INVENTÉ].\nRègles :\n- 6 lignes maximum\n- ligne 1 : le fait vérifié, tourné vers eux\n- lignes 2 et 3 : le cas comparable\n- dernière ligne : une seule question fermée, qui se répond en cinq mots\n- aucune phrase sur moi ou mon entreprise, aucune demande de rendez-vous\nPropose 3 versions de la question finale. Puis relis le message et supprime chaque phrase qui commence par « nous » ou « je »."),
      check: [
        B("The message fits in six lines on your phone screen", "Le message tient en six lignes sur l'écran de ton téléphone"),
        B("No sentence starts with \"I\", \"we\" or your company name", "Aucune phrase ne commence par « je », « nous » ou le nom de ton entreprise"),
        B("The final question can be answered with yes, no or five words", "La question finale se répond par oui, non ou en cinq mots"),
        B("The comparable case holds no number you cannot prove", "Le cas comparable ne contient aucun chiffre que tu ne peux pas prouver"),
      ],
      bonus: B("Write a LinkedIn version of the same message in 300 characters. Then compare: which line did you have to keep at all costs? That line is your real hook.",
        "Écris une version LinkedIn du même message en 300 caractères. Puis compare : quelle ligne as-tu dû garder à tout prix ? C'est elle, ta vraie accroche."),
    },
    more: [
      {
        q: B("The model ends your message with \"Would you be free for 30 minutes on Tuesday?\". What do you change?",
          "Le modèle termine ton message par « Seriez-vous disponible 30 minutes mardi ? ». Que changes-tu ?"),
        options: [
          B("A closed question about them", "Tu mets une question fermée sur eux"),
          B("You offer two slots instead of one", "Tu proposes deux créneaux au lieu d'un"),
          B("Nothing, it is clear and polite", "Rien, c'est clair et poli"),
        ],
        answer: 0,
        why: B("Two slots are still a meeting request, the biggest thing you can ask. A closed question about their situation is answered in five words and opens the conversation.",
          "Deux créneaux restent une demande de rendez-vous, la plus grosse demande possible. Une question fermée sur leur situation se répond en cinq mots et ouvre l'échange."),
      },
      {
        q: B("Your 6-line message has 3 lines about your company. No reply. What is the most likely reason?",
          "Ton message de 6 lignes en compte 3 sur ton entreprise. Pas de réponse. Quelle est la raison la plus probable ?"),
        options: [
          B("The message was far too short", "Le message était beaucoup trop court"),
          B("Those lines say nothing about them", "Ces lignes ne parlent pas d'eux"),
          B("You should have attached your brochure", "Il fallait joindre ta plaquette"),
        ],
        answer: 1,
        why: B("The prospect checks in two seconds whether the message concerns them. Three lines about you means half the message does not.",
          "Le prospect vérifie en deux secondes si le message le concerne. Trois lignes sur toi, c'est la moitié du message qui ne le concerne pas."),
      },
    ],
  },

  'sa-prospect/sa-follow': {
    why: [
      B("Ask for \"a follow-up\" and the model writes \"I am just following up on my last email\", because it is the most common follow-up sentence there is. It adds nothing, so it gives the prospect no new reason to answer.",
        "Demande « une relance » et le modèle écrit « Je me permets de revenir vers vous », parce que c'est la phrase de relance la plus courante. Elle n'ajoute rien, donc elle ne donne au prospect aucune nouvelle raison de répondre."),
      B("Forbid any reference to your previous message, and give each follow-up one new thing to carry: a fact, a client case, or an answer to a likely objection. Each message can then be read alone. It no longer depends on the first one, which the prospect has probably not read.",
        "Interdis toute référence à ton message précédent, et donne à chaque relance une chose nouvelle à porter : un fait, un cas client, ou la réponse à une objection probable. Chaque message se lit alors seul. Il ne dépend plus du premier, que le prospect n'a sans doute pas lu."),
      B("The last message closes the file, clearly and without reproach. It is the first message with a deadline: after this, nothing more will come. Someone who was simply not deciding now has a reason to answer, yes or no.",
        "La dernière relance ferme le dossier, clairement et sans reproche. C'est le premier message avec une échéance : après lui, plus rien ne viendra. Celui qui ne se décidait pas a enfin une raison de répondre, oui ou non."),
    ],
    example: {
      context: B("Julien sells connected cash registers to restaurants. He wrote to Mehdi, who runs three brasseries, a week ago. No reply.",
        "Julien vend des caisses enregistreuses connectées aux restaurateurs. Il a écrit à Mehdi, gérant de trois brasseries, il y a une semaine. Pas de réponse."),
      before: B("Write a follow-up for my prospect who did not answer my email from last week.",
        "Écris une relance pour mon prospect qui n'a pas répondu à mon mail de la semaine dernière."),
      after: B("Write 3 follow-ups for Mehdi, who runs three brasseries in Nantes and did not answer my first message about connected cash registers.\nForbidden: any sentence referring to my previous message (\"just following up\", \"further to my email\", \"did you see\").\nFollow-up 1 (day 7): a new fact: stock tracking per restaurant, useful when you run several sites.\nFollow-up 2 (day 14): a case: a restaurant owner with three sites who stopped counting his tills by hand every night.\nFollow-up 3 (day 21): I close the file, without reproach, leaving the door open.\n4 lines maximum each, formal \"vous\".",
        "Écris 3 relances pour Mehdi, gérant de trois brasseries à Nantes, qui n'a pas répondu à mon premier message sur les caisses connectées.\nInterdit : toute phrase qui renvoie à mon message précédent (« je me permets de revenir vers vous », « suite à mon mail », « avez-vous vu »).\nRelance 1 (J+7) : un fait nouveau : le suivi des stocks par établissement, utile quand on gère plusieurs salles.\nRelance 2 (J+14) : un cas : un restaurateur avec trois adresses qui a arrêté de compter ses caisses à la main chaque soir.\nRelance 3 (J+21) : je ferme le dossier, sans reproche, en laissant la porte ouverte.\n4 lignes maximum chacune, vouvoiement."),
      takeaway: B("Each follow-up brings Mehdi something he did not have, so each one can be read alone. And the last one finally gives him a deadline: he knows it is now or never.",
        "Chaque relance apporte à Mehdi une chose qu'il n'avait pas, donc chacune peut se lire seule. Et la dernière lui donne enfin une échéance : il sait que c'est maintenant ou jamais."),
    },
    exercise: {
      goal: B("A sequence of three follow-ups for a real silent prospect, each bringing something new, the last one closing the file.",
        "Une série de trois relances pour un vrai prospect silencieux, chacune avec un apport nouveau, la dernière qui ferme le dossier."),
      prompt: B("You are a B2B salesperson. My prospect [FIRST NAME, ROLE, COMPANY] did not answer this first message:\n[PASTE YOUR FIRST MESSAGE]\nWrite 3 follow-ups, one week apart.\nEach one brings ONE thing they did not have:\n- follow-up 1: a new fact about their sector or company: [CHECKED FACT]\n- follow-up 2: a comparable client case: [REAL CASE]\n- follow-up 3: I close the file, politely, without reproach, saying how to reach me later.\nForbidden: any sentence referring to my previous messages, any guilt-tripping, any fake urgency.\n4 lines maximum per follow-up. Formal \"vous\".\nAt the end, check that each follow-up makes sense if it is the only one they read.",
        "Tu es un commercial B2B. Mon prospect [PRÉNOM, POSTE, ENTREPRISE] n'a pas répondu à ce premier message :\n[COLLE TON PREMIER MESSAGE]\nÉcris 3 relances, espacées d'une semaine.\nChacune apporte UNE chose qu'il n'avait pas :\n- relance 1 : un fait nouveau sur son secteur ou son entreprise : [FAIT VÉRIFIÉ]\n- relance 2 : un cas client comparable : [CAS RÉEL]\n- relance 3 : je ferme le dossier, poliment, sans reproche, en disant comment me recontacter plus tard.\nInterdits : toute phrase qui renvoie à mes messages précédents, toute culpabilisation, toute fausse urgence.\n4 lignes maximum par relance. Vouvoiement.\nÀ la fin, vérifie que chaque relance se comprend si c'est la seule qu'il lit."),
      check: [
        B("No follow-up contains \"just following up\", \"further to\" or \"did you see\"", "Aucune relance ne contient « revenir vers vous », « suite à » ou « avez-vous vu »"),
        B("Each follow-up makes sense without the previous ones", "Chaque relance se comprend seule, sans avoir lu les précédentes"),
        B("The fact and the case are real: you could prove them if asked", "Le fait et le cas sont réels : tu peux les prouver si on te les demande"),
        B("The last one clearly says you are closing the file, with no hurt tone", "La dernière dit clairement que tu fermes le dossier, sans ton vexé"),
      ],
      bonus: B("Prepare for the answers to follow-up 3. Ask for the two most likely ones (\"not now\" and \"not interested\") and what you reply to each to keep a useful contact.",
        "Prépare les réponses à la relance 3. Demande les deux plus probables (« pas maintenant » et « pas intéressé ») et ce que tu réponds à chacune pour garder un contact utile."),
    },
    more: [
      {
        q: B("Your follow-up 2 starts with \"Just following up on my email\". What do you do?",
          "Ta relance 2 commence par « Je me permets de revenir vers vous ». Que fais-tu ?"),
        options: [
          B("Keep it, it is a polite formula", "Tu la gardes, c'est une formule polie"),
          B("Replace it with \"Friendly reminder\"", "Tu la remplaces par « Petit rappel amical »"),
          B("Delete it, open on the case", "Tu la supprimes, tu ouvres sur le cas"),
        ],
        answer: 2,
        why: B("The first two refer to the previous message and say you have nothing new. Opening on the case gives the prospect a reason to read, even if they never saw your first message.",
          "Les deux premières renvoient au message précédent et disent que tu n'as rien de neuf. Ouvrir sur le cas donne au prospect une raison de lire, même s'il n'a jamais vu ton premier message."),
      },
      {
        q: B("After your \"I am closing the file\" message, the prospect replies \"not before January\". This is:",
          "Après ta relance « je ferme le dossier », le prospect répond « pas avant janvier ». C'est :"),
        options: [
          B("A failure: you push harder right away", "Un échec : tu insistes tout de suite"),
          B("Useful: note it, return in January", "Une info utile : tu notes, tu reviens en janvier"),
          B("A polite brush-off you can ignore", "Une politesse que tu peux ignorer"),
        ],
        answer: 1,
        why: B("The closing message did its job: it got a clear answer. \"Not before January\" gives you a date. Note it, and come back then with something new.",
          "Le message de fermeture a fait son travail : il a obtenu une réponse claire. « Pas avant janvier » te donne une date. Note-la, et reviens à ce moment-là avec un fait nouveau."),
      },
    ],
  },

  /* ================================================================ */
  /* COMMERCIAL · L'ENTRETIEN                                         */
  /* ================================================================ */

  'sa-meeting/sa-prep': {
    why: [
      B("Ask for \"discovery questions\" and the model gives the ones everyone asks: your priorities, your budget, your current tool. Your client has heard them a hundred times, and gives the answer they always give. You learn nothing you could act on.",
        "Demande des « questions de découverte » et le modèle te donne celles que tout le monde pose : « vos priorités », « votre budget », « votre outil actuel ». Ton client les a entendues cent fois, et il fait la réponse qu'il fait toujours. Tu n'apprends rien sur quoi agir."),
      B("Give the model what you already know (their website, the first emails) and forbid any question it answers. Then ask for questions about one precise past moment: \"the last time a technician was absent on a Monday, what did you do?\". A precise moment brings a story, with names, tools and numbers in it.",
        "Donne au modèle ce que tu sais déjà (leur site, les premiers mails) et interdis toute question à laquelle ça répond. Demande ensuite des questions sur un moment passé précis : « la dernière fois qu'un technicien était absent un lundi, comment avez-vous fait ? ». Un moment précis amène un récit, avec des noms, des outils et des chiffres."),
      B("The question about doing nothing shows the cost of waiting. If nothing changes before winter, what happens? If the answer is \"not much\", you know there is no urgency, and you know it before spending a month on the deal.",
        "La question sur « ne rien faire » montre ce que coûte l'attente. Si rien ne change d'ici l'hiver, que se passe-t-il ? Si la réponse est « pas grand-chose », tu sais qu'il n'y a pas d'urgence, et tu le sais avant de passer un mois sur le dossier."),
    ],
    example: {
      context: B("Inès sells field service software. Tomorrow she meets Paul, who runs a heating company with 25 technicians.",
        "Inès vend un logiciel de gestion des interventions. Demain, elle rencontre Paul, dirigeant d'une PME de chauffage de 25 techniciens."),
      before: B("Give me questions to ask in a discovery meeting with a prospect.",
        "Donne-moi des questions à poser en rendez-vous découverte avec un prospect."),
      after: B("Tomorrow I meet Paul, who runs a heating company (25 technicians, 3 branches).\nWhat I already know from their website: boiler servicing, 7-day emergency repairs, 3 branches in the Isère area.\nPrepare 5 questions whose answers I cannot guess.\nRules:\n- no question their website already answers\n- each question is about one precise time (\"the last time...\"), not the general case\n- one question is about what happens if they change nothing before winter\n- spoken style, one sentence per question, formal \"vous\"\nFor each question, write what I am trying to learn.",
        "Demain, je rencontre Paul, dirigeant d'une PME de chauffage (25 techniciens, 3 agences).\nCe que je sais déjà grâce à leur site : entretien de chaudières, dépannage 7 jours sur 7, 3 agences en Isère.\nPrépare 5 questions dont je ne peux pas deviner la réponse.\nRègles :\n- aucune question à laquelle leur site répond déjà\n- chaque question porte sur une fois précise (« la dernière fois que... »), pas sur le cas général\n- une question porte sur ce qui se passe s'ils ne changent rien d'ici l'hiver\n- formulation orale, une phrase par question, vouvoiement\nPour chaque question, écris ce que je cherche à apprendre."),
      takeaway: B("The first prompt gives the questions everyone asks, so the answers everyone gives. The second removes what Inès already knows and aims at precise past events: Paul will tell stories, and Inès will listen.",
        "Le premier prompt donne les questions que tout le monde pose, donc les réponses que tout le monde donne. Le second retire ce qu'Inès sait déjà et vise des faits passés précis : Paul va raconter, et Inès va écouter."),
    },
    exercise: {
      goal: B("Your five questions for your next meeting, each with what you want to learn, on one card you keep in front of you.",
        "Tes cinq questions pour ton prochain rendez-vous, chacune avec ce que tu veux apprendre, sur une fiche que tu gardes sous les yeux."),
      prompt: B("You are a sales coach. I meet [FIRST NAME, ROLE] at [COMPANY] on [DATE] to talk about [YOUR OFFER].\nHere is what I already know (website, LinkedIn, first emails):\n[PASTE WHAT YOU KNOW]\nPrepare 5 open questions:\n- none whose answer is already in what I know\n- at least 3 about the last time a precise problem happened\n- one about what happens if they do nothing in the next 6 months\n- spoken style, one sentence each, formal \"vous\"\nFor each question: what I am trying to learn, and the follow-up to ask if the answer stays vague.\nDo not suggest any question about my product.",
        "Tu es un coach commercial. Je rencontre [PRÉNOM, POSTE] chez [ENTREPRISE] le [DATE] pour parler de [TON OFFRE].\nVoici ce que je sais déjà (site, LinkedIn, premiers échanges) :\n[COLLE CE QUE TU SAIS]\nPrépare 5 questions ouvertes :\n- aucune dont la réponse est dans ce que je sais déjà\n- au moins 3 sur la dernière fois qu'un problème précis s'est produit\n- une sur ce qui se passe s'ils ne font rien dans les 6 prochains mois\n- formulation orale, une phrase chacune, vouvoiement\nPour chaque question : ce que je cherche à apprendre, et la relance à poser si la réponse reste vague.\nNe propose aucune question sur mon produit."),
      check: [
        B("None of your questions is answered on their website", "Aucune de tes questions ne trouve sa réponse sur leur site"),
        B("At least three questions point to a precise moment, like \"the last time\"", "Au moins trois questions visent un moment précis, comme « la dernière fois »"),
        B("One question is about the cost of doing nothing", "Une question porte sur le coût de ne rien faire"),
        B("No question is about your product", "Aucune question ne parle de ton produit"),
      ],
      bonus: B("Rehearse the meeting: ask the model to play the prospect with vague answers, and practise following up until you get a precise fact (a date, a number, the name of a tool).",
        "Répète le rendez-vous : demande au modèle de jouer le prospect avec des réponses vagues, et entraîne-toi à relancer jusqu'à obtenir un fait précis (une date, un chiffre, un nom d'outil)."),
    },
    more: [
      {
        q: B("You ask \"How do you handle your quotes?\". The client says \"pretty well\". Which follow-up is worth most?",
          "Tu demandes « Comment gérez-vous vos devis ? ». Le client répond « plutôt bien ». Quelle relance vaut le plus ?"),
        options: [
          B("\"What could be improved, in your view?\"", "« Qu'est-ce qui pourrait être amélioré, selon vous ? »"),
          B("\"Tell me about the last late quote.\"", "« Racontez-moi le dernier devis parti en retard. »"),
          B("\"Would you be open to a demo?\"", "« Seriez-vous partant pour une démo ? »"),
        ],
        answer: 1,
        why: B("\"Pretty well\" is the general answer everyone gives. One precise late quote brings a story: how many days, why, who chased it. Those details are what you can use.",
          "« Plutôt bien » est la réponse générale que tout le monde donne. Un devis précis parti en retard amène un récit : combien de jours, pourquoi, qui a relancé. Ce sont ces détails qui te servent."),
      },
      {
        q: B("The model suggests \"What is your line of business?\". What do you do?",
          "Le modèle te propose « Quel est votre secteur d'activité ? ». Que fais-tu ?"),
        options: [
          B("Delete it: their website answers it", "Tu la supprimes : leur site y répond"),
          B("Keep it to break the ice", "Tu la gardes pour briser la glace"),
          B("Move it to the very end of the meeting", "Tu la places tout à la fin de l'entretien"),
        ],
        answer: 0,
        why: B("Every question you could answer alone takes the client's time and shows you did not prepare. Keep those minutes for what only they can tell you.",
          "Chaque question dont tu pourrais trouver la réponse seul prend du temps au client et montre que tu n'as pas préparé. Garde ces minutes pour ce que lui seul peut te dire."),
      },
    ],
  },

  'sa-meeting/sa-notes': {
    why: [
      B("Your raw notes hold signals: \"??\", \"not clear\", \"check with partner\". Ask for \"a clean summary\" and the model smooths them away, because a summary aims to look finished. You get a confident story where the doubts have become facts.",
        "Tes notes brutes contiennent des signaux : « ?? », « pas clair », « voir avec l'associé ». Demande « un résumé propre » et le modèle les efface, parce qu'un résumé cherche à paraître fini. Tu obtiens un récit assuré où les doutes sont devenus des faits."),
      B("Three required sections change the job: what was said, what was agreed, what is unclear. The model now has a place to put each doubt, so it keeps them. Forbid it to add anything missing from your notes, and ask for \"to be confirmed\" when a name or date is not there.",
        "Trois parties obligatoires changent le travail : ce qui a été dit, ce qui a été convenu, ce qui reste flou. Le modèle a maintenant une place pour chaque doute, donc il les garde. Interdis-lui d'ajouter ce qui manque à tes notes, et demande « à préciser » quand un nom ou une date n'y est pas."),
      B("Test it this way: you go on holiday tomorrow and a colleague takes over the deal. Can they act from your write-up alone, without calling you? If yes, it is a real record. If not, it is a souvenir.",
        "Fais ce test : tu pars en congé demain et un collègue reprend le dossier. Peut-il agir avec ton seul compte rendu, sans t'appeler ? Si oui, c'est une vraie trace. Sinon, c'est un souvenir."),
    ],
    example: {
      context: B("Thomas sells office furniture. He has just met the facilities manager of a law firm, and his notes are a mess on his phone.",
        "Thomas vend du mobilier de bureau. Il sort d'un rendez-vous avec la responsable des services généraux d'un cabinet d'avocats, et ses notes sont en vrac sur son téléphone."),
      before: B("Turn my meeting notes into a clean summary:\nfirm 45 ppl, move in Sept, wants sit-stand desks ?? budget not clear, check with partner, Ms Roux ok on 6 wk lead time, talk showroom demo",
        "Fais un résumé propre de mes notes de rdv :\ncabinet 45 pers, déménagement sept, veut bureaux assis-debout ?? budget pas clair, voir avec associé, Mme Roux ok sur délai 6 sem, parler démo showroom"),
      after: B("Here are my raw notes from a meeting with Ms Roux, facilities manager at a law firm. Keep the hesitations, correct nothing.\n\"firm 45 ppl, move in Sept, wants sit-stand desks ?? budget not clear, check with partner, Ms Roux ok on 6 wk lead time, talk showroom demo\"\nWrite a report in 3 parts:\n1. What was said (facts only)\n2. What was agreed (who does what, by when)\n3. What is still unclear (each doubt, and the question that would settle it)\nAdd no information that is not in my notes. If a name or a date is missing, write \"to be confirmed\".",
        "Voici mes notes brutes d'un rendez-vous avec Mme Roux, responsable des services généraux d'un cabinet d'avocats. Garde les hésitations, ne corrige rien.\n« cabinet 45 pers, déménagement sept, veut bureaux assis-debout ?? budget pas clair, voir avec associé, Mme Roux ok sur délai 6 sem, parler démo showroom »\nFais un compte rendu en 3 parties :\n1. Ce qui a été dit (faits uniquement)\n2. Ce qui a été convenu (qui fait quoi, pour quand)\n3. Ce qui reste flou (chaque doute, et la question qui le lèverait)\nN'ajoute aucune information absente de mes notes. S'il manque un nom ou une date, écris « à préciser »."),
      takeaway: B("A plain summary would have smoothed over the \"??\" and the \"budget not clear\". The unclear section keeps them, and gives Thomas the two questions to send Ms Roux tonight.",
        "Un simple résumé aurait lissé les « ?? » et le « budget pas clair ». La partie « flou » les garde, et elle donne à Thomas les deux questions à envoyer à Mme Roux dès ce soir."),
    },
    exercise: {
      goal: B("The three-part report of your last meeting, and the email that settles the first doubt, sent the same day.",
        "Le compte rendu en trois parties de ton dernier rendez-vous, et le mail qui lève le premier doute, envoyé le jour même."),
      prompt: B("You are my sales assistant. Here are my raw notes from the meeting with [FIRST NAME, ROLE, COMPANY] on [DATE]. They are messy and full of doubts: keep them.\n[PASTE OR DICTATE YOUR NOTES]\nWrite a report in 3 parts:\n1. What was said: the facts, with the client's numbers and exact words when I noted them.\n2. What was agreed: each action with who does it and by when. If the who or the when is missing, write \"to be confirmed\".\n3. What is unclear: each doubt, why it matters for the sale, and the question that would settle it.\nAdd nothing that is not in my notes.\nThen draft a short email to the client asking the most important question from part 3. Formal \"vous\".",
        "Tu es mon assistant commercial. Voici mes notes brutes du rendez-vous avec [PRÉNOM, POSTE, ENTREPRISE] du [DATE]. Elles sont en vrac, avec mes doutes : garde-les.\n[COLLE OU DICTE TES NOTES]\nFais un compte rendu en 3 parties :\n1. Ce qui a été dit : les faits, avec les chiffres et les mots exacts du client quand je les ai notés.\n2. Ce qui a été convenu : chaque action avec qui la fait et pour quand. S'il manque le qui ou le quand, écris « à préciser ».\n3. Ce qui reste flou : chaque doute, pourquoi il compte pour la vente, et la question qui le lèverait.\nN'ajoute rien qui ne soit pas dans mes notes.\nPuis rédige un mail court au client qui pose la question la plus importante de la partie 3. Vouvoiement."),
      check: [
        B("A colleague taking over tomorrow would know what to do without calling you", "Un collègue qui reprend le dossier demain saurait quoi faire sans t'appeler"),
        B("The unclear section holds at least one doubt; if not, reread your notes", "La partie « flou » contient au moins un doute, sinon relis tes notes"),
        B("Nothing was added: everything can be found in your notes", "Rien n'a été ajouté : tout se retrouve dans tes notes"),
        B("Each agreed action has a name and a date, or says \"to be confirmed\"", "Chaque action convenue a un nom et une date, ou la mention « à préciser »"),
      ],
      bonus: B("Dictate your notes out loud right after the meeting, in the car or on the pavement, with your phone's voice typing. Paste the text as it is, hesitations included, and run the same prompt.",
        "Dicte tes notes à voix haute juste après le rendez-vous, dans ta voiture ou sur le trottoir, avec la dictée de ton téléphone. Colle le texte tel quel, hésitations comprises, et lance le même prompt."),
    },
    more: [
      {
        q: B("Your report says \"Client convinced, signing in June\". Your notes said \"signing June? check with CFO\". What happened?",
          "Ton compte rendu dit « Client convaincu, signature en juin ». Tes notes disaient « signature juin ? voir avec DAF ». Que s'est-il passé ?"),
        options: [
          B("The model smoothed a doubt away", "Le modèle a lissé un doute"),
          B("The model summarised the key point well", "Le modèle a bien résumé l'essentiel"),
          B("Your notes were far too long for it", "Tes notes étaient bien trop longues"),
        ],
        answer: 0,
        why: B("A summary aims to look neat, and a doubt does not look neat. Always ask for an unclear section, and forbid adding what is not in your notes.",
          "Un résumé cherche à faire propre, et un doute ne fait pas propre. Demande toujours une partie « flou », et interdis d'ajouter ce qui n'est pas dans tes notes."),
      },
      {
        q: B("You have ten minutes after your meeting. Which part of the report do you act on first?",
          "Tu as dix minutes après ton rendez-vous. Sur quelle partie du compte rendu agis-tu d'abord ?"),
        options: [
          B("The agreed part, to follow it up", "La partie « convenu », pour la relancer"),
          B("The unclear part: email them", "La partie « flou » : tu écris au client"),
          B("The formatting, for the CRM", "La mise en forme, pour le CRM"),
        ],
        answer: 1,
        why: B("What was agreed will be repeated at the next meeting. What is unclear settles itself if nobody asks, and rarely in your favour.",
          "Ce qui a été convenu sera répété au prochain rendez-vous. Ce qui est flou se tranche tout seul si personne ne pose la question, et rarement en ta faveur."),
      },
    ],
  },

  'sa-meeting/sa-object': {
    why: [
      B("An objection is a short sentence that can hide several different problems. \"It is too expensive\" can mean: no budget this year, I do not see what it replaces, or I cannot defend it to my boss. Each one needs a different answer.",
        "Une objection est une phrase courte qui peut cacher plusieurs problèmes différents. « C'est trop cher » peut vouloir dire : pas de budget cette année, je ne vois pas ce que ça remplace, ou je ne sais pas le défendre devant mon patron. Chacun demande une réponse différente."),
      B("Ask a model \"how to answer too expensive\" and it gives you ready-made comebacks, all aimed at the price. Ask it instead for three possible meanings and the clue that separates them. It then works like a doctor who asks where it hurts before prescribing.",
        "Demande à un modèle « comment répondre à trop cher » et il te donne des répliques toutes faites, toutes tournées vers le prix. Demande-lui plutôt trois sens possibles et l'indice qui les distingue. Il travaille alors comme un médecin qui demande où ça fait mal avant de prescrire."),
      B("Give the client's exact words, not your rephrasing. \"Too expensive for what it is\" and \"too expensive this year\" point to two different problems. Your rephrasing erases exactly the word that would have guided you.",
        "Donne les mots exacts du client, pas ta reformulation. « Trop cher pour ce que c'est » et « trop cher cette année » désignent deux problèmes différents. Ta reformulation efface justement le mot qui t'aurait guidé."),
    ],
    example: {
      context: B("Élodie sells outsourced payroll to small businesses. The owner of a 12-person garage tells her: \"It is too expensive for what it is.\"",
        "Élodie vend un service de paie externalisée aux PME. Le gérant d'un garage de 12 salariés lui dit : « C'est trop cher pour ce que c'est. »"),
      before: B("How do I answer a client who says it is too expensive?",
        "Comment répondre à un client qui dit que c'est trop cher ?"),
      after: B("The owner of a garage (12 employees) just told me, word for word: \"It is too expensive for what it is.\"\nI offer to run his payroll at 25 euros per payslip. Today his accountant prepares the payslips.\nDo not give me an answer to the objection.\nGive me 3 things this sentence may really mean, taking into account the words \"for what it is\".\nFor each one: a clue that would reveal it in the conversation.\nThen write ONE open question to ask him, which would tell me which of the 3 is right. Formal \"vous\", simple tone.",
        "Le gérant d'un garage (12 salariés) vient de me dire, mot pour mot : « C'est trop cher pour ce que c'est. »\nJe lui propose de gérer sa paie à 25 euros par bulletin. Aujourd'hui, c'est son comptable qui fait les bulletins.\nNe me donne pas de réponse à l'objection.\nDonne-moi 3 choses que cette phrase peut vraiment vouloir dire, en tenant compte des mots « pour ce que c'est ».\nPour chacune : un indice qui la trahirait dans la conversation.\nPuis écris UNE question ouverte à lui poser, qui me dirait laquelle des 3 est la bonne. Vouvoiement, ton simple."),
      takeaway: B("The first prompt gives comebacks about price. The second starts from the exact words: \"for what it is\" suggests he does not see what the service replaces. Élodie asks a question before defending her price.",
        "Le premier prompt donne des répliques sur le prix. Le second part des mots exacts : « pour ce que c'est » laisse penser qu'il ne voit pas ce que le service remplace. Élodie pose une question avant de défendre son prix."),
    },
    exercise: {
      goal: B("For an objection you hear often: three possible meanings, the clues that separate them, and the question to ask before answering.",
        "Pour une objection que tu entends souvent : trois sens possibles, les indices qui les distinguent, et la question à poser avant de répondre."),
      prompt: B("You are a sales coach. I sell [YOUR OFFER] to [TYPE OF CLIENT].\nA client told me, word for word: \"[THE EXACT OBJECTION]\".\nContext: [WHERE THE DISCUSSION WAS, WHO WAS THERE].\nDo not answer the objection yet.\n1. Give 3 different things it may really mean (for example a budget problem, a priority problem, a trust problem, or someone else to convince).\n2. For each one, the clue in their words or attitude that would make it likely.\n3. Write one open question, formal \"vous\", that helps me find which one is right.\n4. Only then: for each meaning, the right answer in 2 sentences.",
        "Tu es un coach commercial. Je vends [TON OFFRE] à [TYPE DE CLIENT].\nUn client m'a dit, mot pour mot : « [L'OBJECTION EXACTE] ».\nContexte : [OÙ EN ÉTAIT LA DISCUSSION, QUI ÉTAIT PRÉSENT].\nNe réponds pas encore à l'objection.\n1. Donne 3 choses différentes qu'elle peut vraiment vouloir dire (par exemple un problème de budget, de priorité, de confiance, ou quelqu'un d'autre à convaincre).\n2. Pour chacune, l'indice dans ses mots ou son attitude qui la rendrait probable.\n3. Écris une question ouverte, en vouvoiement, qui m'aide à savoir laquelle est la bonne.\n4. Seulement ensuite : pour chaque sens, la bonne réponse en 2 phrases."),
      check: [
        B("You pasted the client's exact words, not your rephrasing", "Tu as collé les mots exacts du client, pas ta reformulation"),
        B("The three meanings are truly different, not three versions of price", "Les trois sens sont vraiment différents, pas trois variantes du prix"),
        B("Your question is open and defends nothing", "Ta question est ouverte et ne défend rien"),
        B("None of the answers starts with a discount", "Aucune des réponses ne commence par une remise"),
      ],
      bonus: B("Do it for your five most frequent objections and put everything in a table: objection | possible meanings | question to ask. Reread it before every important meeting.",
        "Fais-le pour tes cinq objections les plus fréquentes et range tout dans un tableau : objection | sens possibles | question à poser. Relis-le avant chaque rendez-vous important."),
    },
    more: [
      {
        q: B("A client says \"I need to talk to my partner\". Which question do you ask first?",
          "Un client dit « Je dois en parler à mon associé ». Quelle question poses-tu d'abord ?"),
        options: [
          B("\"When can you talk to them about it?\"", "« Quand pouvez-vous lui en parler ? »"),
          B("\"What will your partner ask you?\"", "« Que va vous demander votre associé ? »"),
          B("\"Shall I send them our brochure and pricing?\"", "« Je lui envoie notre plaquette et nos tarifs ? »"),
        ],
        answer: 1,
        why: B("This question brings the real objection to light: price, risk or timing. You learn what the partner will ask, and you can prepare your client for that conversation.",
          "Cette question fait apparaître la vraie objection : le prix, le risque ou le calendrier. Tu apprends ce que l'associé va demander, et tu peux préparer ton client à cette discussion."),
      },
      {
        q: B("You paste \"the client finds it expensive\" instead of their words. What is the risk?",
          "Tu colles « le client trouve ça cher » au lieu de ses mots. Quel est le risque ?"),
        options: [
          B("None, it means the same thing", "Aucun, ça veut dire la même chose"),
          B("The model will just take longer to answer", "Le modèle mettra plus longtemps à répondre"),
          B("You lose the clue to what it hides", "Tu perds l'indice de ce qu'elle cache"),
        ],
        answer: 2,
        why: B("\"Too expensive for what it is\", \"too expensive this year\" and \"more expensive than X\" do not mean the same thing. Your rephrasing erases the very word that was guiding you.",
          "« Trop cher pour ce que c'est », « trop cher cette année » et « plus cher que X » ne veulent pas dire la même chose. Ta reformulation efface le mot qui te guidait."),
      },
    ],
  },

  /* ================================================================ */
  /* COMMERCIAL · CONCLURE                                            */
  /* ================================================================ */

  'sa-close/sa-proposal': {
    why: [
      B("Your proposal will be forwarded. The person who decides, often a finance director or a partner, was not in the meeting. They open it on their phone with one line from your contact: \"What do you think?\". They read the first paragraph and decide whether to go on.",
        "Ta proposition sera transférée. Celui qui décide, souvent un directeur financier ou un associé, n'était pas au rendez-vous. Il l'ouvre sur son téléphone avec une ligne de ton contact : « Qu'en penses-tu ? ». Il lit le premier paragraphe et décide s'il continue."),
      B("Ask for \"a sales proposal\" and the model follows the usual template: company history, methodology, references, several pages. Tell it who the real reader is and what they need: their problem in their words, what you do, what it costs, the first step with a date.",
        "Demande « une proposition commerciale » et le modèle suit le modèle habituel : historique de l'entreprise, méthodologie, références, plusieurs pages. Dis-lui qui est le vrai lecteur et ce qu'il lui faut : son problème avec ses mots, ce que tu fais, ce que ça coûte, la première étape avec une date."),
      B("Their own number in the first paragraph is what makes the reader recognise their company. \"6 stores without a manager for 3 months\" is their problem. \"Talent acquisition excellence\" is yours.",
        "Leur propre chiffre dans le premier paragraphe, c'est ce qui fait que le lecteur reconnaît son entreprise. « 6 magasins sans responsable depuis 3 mois », c'est son problème. « L'excellence en recrutement », c'est le tien."),
    ],
    example: {
      context: B("Hugo, a recruitment consultant, met Sarah, HR director of a chain of 15 sports stores. She must get his proposal approved by the CFO, whom Hugo has never met.",
        "Hugo, consultant en recrutement, a rencontré Sarah, DRH d'une chaîne de 15 magasins de sport. Elle doit faire valider sa proposition par le directeur financier, qu'Hugo n'a jamais vu."),
      before: B("Write a sales proposal for a mission to recruit 6 store managers.",
        "Rédige une proposition commerciale pour une mission de recrutement de 6 responsables de magasin."),
      after: B("Write a one-page proposal. Sarah (HR director) will forward it to her CFO, who was not at the meeting.\nParagraph 1: their problem, in Sarah's words: \"6 stores without a manager for 3 months, and sales dropping in those stores\".\nParagraph 2: what I do: recruit the 6 managers, first shortlist within 3 weeks.\nParagraph 3: what it costs: 15% of gross annual salary per hire, paid on hiring.\nLast line: the first step and its date: a 30-minute scoping call in the week of 6 October.\nNo presentation of my firm, no methodology, no references.",
        "Rédige une proposition d'une page. Sarah (DRH) la transférera à son directeur financier, qui n'était pas au rendez-vous.\nParagraphe 1 : leur problème, avec les mots de Sarah : « 6 magasins sans responsable depuis 3 mois, et le chiffre qui baisse dans ces magasins-là ».\nParagraphe 2 : ce que je fais : recrutement des 6 responsables, première liste de candidats sous 3 semaines.\nParagraphe 3 : ce que ça coûte : 15 % du salaire annuel brut par recrutement, payé à l'embauche.\nDernière ligne : la première étape et sa date : un appel de cadrage de 30 minutes la semaine du 6 octobre.\nPas de présentation de mon cabinet, pas de méthodologie, pas de références."),
      takeaway: B("The first prompt produces a multi-page brochure. The second writes for the CFO: he recognises his company's problem, sees the cost and knows what happens next, without needing Sarah.",
        "Le premier prompt produit une plaquette de plusieurs pages. Le second écrit pour le directeur financier : il reconnaît le problème de son entreprise, voit le coût et sait ce qui se passe ensuite, sans avoir besoin de Sarah."),
    },
    exercise: {
      goal: B("A one-page proposal for a real deal in progress, written for the decision-maker you have not met.",
        "Une proposition d'une page pour un vrai dossier en cours, écrite pour le décideur que tu n'as pas rencontré."),
      prompt: B("You are an experienced salesperson. Write a sales proposal of one page maximum.\n[FIRST NAME, ROLE OF YOUR CONTACT] will forward it to [ROLE OF THE DECISION-MAKER], who was not at the meeting.\nTheir problem, in their words and with their number: [QUOTE OR NUMBER GIVEN BY THE CLIENT].\nWhat I propose: [YOUR OFFER, SCOPE, TIMING].\nThe price: [AMOUNT AND UNIT].\nFirst step: [ACTION + DATE].\nStructure: 1 paragraph problem, 1 paragraph solution, 1 paragraph price, 1 line first step.\nForbidden: presenting my company, jargon, superlatives, invented references.\nThen reread it as the [ROLE OF THE DECISION-MAKER]: list the 3 questions they would ask that remain unanswered.",
        "Tu es un commercial expérimenté. Rédige une proposition commerciale d'une page maximum.\n[PRÉNOM, POSTE DE TON CONTACT] la transférera à [POSTE DU DÉCIDEUR], qui n'était pas au rendez-vous.\nLeur problème, avec leurs mots et leur chiffre : [CITATION OU CHIFFRE DONNÉ PAR LE CLIENT].\nCe que je propose : [TON OFFRE, PÉRIMÈTRE, DÉLAI].\nLe prix : [MONTANT ET UNITÉ].\nPremière étape : [ACTION + DATE].\nStructure : 1 paragraphe problème, 1 paragraphe solution, 1 paragraphe prix, 1 ligne première étape.\nInterdits : présentation de mon entreprise, jargon, superlatifs, références inventées.\nPuis relis-la comme le [POSTE DU DÉCIDEUR] : liste les 3 questions qu'il se poserait et qui restent sans réponse."),
      check: [
        B("The first paragraph holds a number or a sentence that came from the client", "Le premier paragraphe contient un chiffre ou une phrase venue du client"),
        B("Someone who was not at the meeting understands the problem in one reading", "Quelqu'un d'absent au rendez-vous comprend le problème en une lecture"),
        B("The price is written plainly, with its unit", "Le prix est écrit en clair, avec son unité"),
        B("The last line gives an action and a date, not \"feel free to reach out\"", "La dernière ligne donne une action et une date, pas « n'hésitez pas »"),
      ],
      bonus: B("Ask the model to play the CFO, who reads your proposal on the phone between two meetings and replies to your contact in three lines. That reply shows you what is missing.",
        "Demande au modèle de jouer le directeur financier, qui lit ta proposition sur son téléphone entre deux réunions et répond à ton contact en trois lignes. Sa réponse te montre ce qui manque."),
    },
    more: [
      {
        q: B("Your proposal opens with \"Founded in 2008, our company...\". What do you do?",
          "Ta proposition commence par « Fondée en 2008, notre société... ». Que fais-tu ?"),
        options: [
          B("Add your client references right after", "Tu ajoutes tes références clients juste après"),
          B("Keep it, it builds trust", "Tu la gardes, ça rassure"),
          B("Open on their problem and number", "Tu ouvres sur leur problème et leur chiffre"),
        ],
        answer: 2,
        why: B("The decision-maker reads the first paragraph and decides whether to go on. If they find your history there, they do not find their problem. Your history can fit in one line at the end, or disappear.",
          "Le décideur lit le premier paragraphe et décide s'il continue. S'il y trouve ton histoire, il n'y trouve pas son problème. Ton historique peut tenir en une ligne à la fin, ou disparaître."),
      },
      {
        q: B("Your contact says \"perfect, I will pass it on\". Who must be able to defend the proposal?",
          "Ton contact te dit « c'est parfait, je transmets ». Qui doit pouvoir défendre la proposition ?"),
        options: [
          B("You, by calling the decision-maker", "Toi, en appelant le décideur"),
          B("Your contact, with this page alone", "Ton contact, seul, avec cette page"),
          B("The procurement team", "Le service achats"),
        ],
        answer: 1,
        why: B("You will not be in the room where it is decided. Your contact will, with your page. If it answers the decision-maker's questions, it defends your deal for you.",
          "Tu ne seras pas dans la salle où l'on décide. Ton contact y sera, avec ta page. Si elle répond aux questions du décideur, elle défend ton dossier à ta place."),
      },
    ],
  },

  'sa-close/sa-price': {
    why: [
      B("After saying a price, silence feels unbearable, so we fill it: \"it pays for itself fast\", \"we can discuss it\". Each of those sentences sounds like an apology. It tells the client you expect them to object, so they do.",
        "Après avoir dit un prix, le silence paraît insupportable, alors on le remplit : « c'est vite rentabilisé », « on peut en discuter ». Chacune de ces phrases sonne comme une excuse. Elle dit au client que tu attends son objection, alors il la fait."),
      B("Asked to \"help announce a price\", a model does the same: it writes a justification and often slips in a discount, because it tries to please. Use it differently. Make it play the client, and ask it to stop you whenever you justify before they have reacted.",
        "Si tu demandes à un modèle de « t'aider à annoncer un prix », il fait pareil : il écrit une justification et glisse souvent une remise, parce qu'il cherche à faire plaisir. Utilise-le autrement. Fais-lui jouer le client, et demande-lui de t'arrêter dès que tu justifies avant sa réaction."),
      B("The client's first reaction is information: silence while they calculate, a question about the scope, or \"that is more than planned\". Each one tells you where you stand. Prepare your answer about what the offer replaces, not about the number.",
        "La première réaction du client est une information : un silence le temps de calculer, une question sur le périmètre, ou « c'est plus que prévu ». Chacune te dit où tu en es. Prépare ta réponse sur ce que l'offre remplace, pas sur le chiffre."),
    ],
    example: {
      context: B("Nathalie, a freelance graphic designer, must announce 4,800 euros for a new visual identity to a restaurant owner. She prepares the call with AI.",
        "Nathalie, graphiste freelance, doit annoncer 4 800 euros pour une nouvelle identité visuelle à un restaurateur. Elle prépare l'appel avec l'IA."),
      before: B("Help me announce my price of 4,800 euros to a client without him finding it too expensive.",
        "Aide-moi à annoncer mon prix de 4 800 euros à un client sans qu'il le trouve trop cher."),
      after: B("You play Marc, owner of a 40-seat restaurant who wants a new logo, menu and sign. You are interested but careful with money.\nI will announce my price in one sentence: the number, what it includes, then I stop talking.\nReact like a real client: silence, a question, or an objection. One line at a time, then wait for my answer.\nIf I justify my price before you have spoken, or offer a discount you did not ask for, stop the role-play and tell me.\nAt the end, give me 3 remarks on how I announced the price.",
        "Tu joues Marc, patron d'un restaurant de 40 couverts qui veut un nouveau logo, un nouveau menu et une nouvelle enseigne. Tu es intéressé mais prudent avec l'argent.\nJe vais t'annoncer mon prix en une phrase : le chiffre, ce qu'il comprend, puis je me tais.\nRéagis comme un vrai client : un silence, une question, ou une objection. Une réplique à la fois, puis attends ma réponse.\nSi je justifie mon prix avant que tu aies parlé, ou si je propose une remise que tu n'as pas demandée, arrête le jeu et dis-le-moi.\nÀ la fin, donne-moi 3 remarques sur ma façon d'annoncer le prix."),
      takeaway: B("The first prompt asks for a sales pitch, so for a justification. The second makes Nathalie rehearse: she says the number, stops, and gets a real reaction. The model stops her as soon as she apologises for her price.",
        "Le premier prompt demande un argumentaire, donc une justification. Le second fait répéter Nathalie : elle dit le chiffre, se tait, et reçoit une vraie réaction. Le modèle l'arrête dès qu'elle s'excuse de son prix."),
    },
    exercise: {
      goal: B("Your price sentence, rehearsed three times with a simulated client, and your answer ready for the first objection, based on what your offer replaces.",
        "Ta phrase de prix, répétée trois fois face à un client simulé, et ta réponse prête pour la première objection, fondée sur ce que ton offre remplace."),
      prompt: B("You play [CLIENT PROFILE: ROLE, COMPANY, SITUATION]. You are interested in [YOUR OFFER] but careful with the budget.\nI will announce my price: [AMOUNT + UNIT, e.g. \"1,200 euros per month\"].\nRules of the game:\n- one line at a time, then you wait\n- react like a real client: sometimes silence (write \"...\"), sometimes a question, sometimes an objection\n- if I justify my price before your reaction, or lower it without you asking, stop the game and point it out\n- if you object and I answer about the number instead of what it replaces for you, point that out too\nWe play 3 rounds. At the end, give me the clearest price sentence I said.",
        "Tu joues [PROFIL DU CLIENT : POSTE, ENTREPRISE, SITUATION]. Tu t'intéresses à [TON OFFRE] mais tu fais attention au budget.\nJe vais t'annoncer mon prix : [MONTANT + UNITÉ, par exemple « 1 200 euros par mois »].\nRègles du jeu :\n- une seule réplique à la fois, puis tu attends\n- réagis comme un vrai client : parfois un silence (écris « ... »), parfois une question, parfois une objection\n- si je justifie mon prix avant ta réaction, ou si je le baisse sans que tu le demandes, arrête le jeu et signale-le\n- si tu objectes et que je réponds sur le chiffre au lieu de ce que ça remplace chez toi, signale-le aussi\nOn fait 3 tours. À la fin, donne-moi la phrase de prix la plus nette que j'ai dite."),
      check: [
        B("Your price sentence is one sentence: the number, the unit, then nothing", "Ta phrase de prix tient en une phrase : le chiffre, l'unité, puis rien"),
        B("You held the silence at least once without filling it", "Tu as tenu le silence au moins une fois sans le combler"),
        B("Your answer to the objection is about what your offer replaces, not the amount", "Ta réponse à l'objection parle de ce que ton offre remplace, pas du montant"),
        B("You offered no discount the client did not ask for", "Tu n'as proposé aucune remise que le client n'a pas demandée"),
      ],
      bonus: B("Do the same rehearsal out loud with your tool's voice mode, if it has one. Silence is much harder to hold when you speak than when you type.",
        "Fais la même répétition à voix haute avec le mode vocal de ton outil, s'il en a un. Le silence est bien plus dur à tenir à l'oral qu'à l'écrit."),
    },
    more: [
      {
        q: B("You say \"It is 900 euros per month.\" The client says nothing for 5 seconds. What do you do?",
          "Tu dis « C'est 900 euros par mois. » Le client se tait 5 secondes. Que fais-tu ?"),
        options: [
          B("Wait for them to speak", "Tu attends qu'il parle"),
          B("Add that it pays for itself quickly", "Tu ajoutes que c'est vite rentabilisé"),
          B("Offer to split it into three payments", "Tu proposes de payer en trois fois"),
        ],
        answer: 0,
        why: B("Five seconds feel long to you, not to them: they are calculating. Their first sentence will tell you whether the block is the amount, the budget or the timing. If you talk, you will never know.",
          "Cinq secondes te paraissent longues, pas à lui : il calcule. Sa première phrase te dira s'il bloque sur le montant, le budget ou le moment. Si tu parles, tu ne le sauras jamais."),
      },
      {
        q: B("The client replies \"That is expensive.\" Which answer follows the method?",
          "Le client répond « C'est cher. » Quelle réponse suit la méthode ?"),
        options: [
          B("\"I can do 800 as a gesture.\"", "« Je peux faire un geste à 800. »"),
          B("\"What does doing it in-house cost you today?\"", "« Aujourd'hui, combien vous coûte de le faire en interne ? »"),
          B("\"That is simply the going market rate, you know.\"", "« C'est simplement le prix du marché, vous savez. »"),
        ],
        answer: 1,
        why: B("Going back to what the offer replaces moves the discussion from the amount to a comparison. A discount, on the other hand, confirms your first price was not serious.",
          "Revenir à ce que l'offre remplace fait passer la discussion du montant à la comparaison. La remise, elle, confirme que ton premier prix n'était pas sérieux."),
      },
    ],
  },

  'sa-close/sa-after': {
    why: [
      B("On the day of signing, the client wants it to work. Three weeks later, their calendar is full and your project has slipped behind everything else. Renewal depends on what changed during that first month, not on what you say at renewal time.",
        "Le jour de la signature, le client veut que ça marche. Trois semaines plus tard, son agenda est plein et ton projet est passé derrière tout le reste. Le renouvellement dépend de ce qui a changé ce premier mois, pas de ce que tu diras au moment de renouveler."),
      B("Ask for \"an onboarding plan\" and the model writes phases, teams and workshops: nobody in particular is responsible for anything. Ask for three dates with a first name on each. A first name is a person you can call on day seven if nothing has moved.",
        "Demande « un plan d'onboarding » et le modèle écrit des phases, des équipes et des ateliers : personne en particulier n'est responsable de rien. Demande trois dates avec un prénom sur chacune. Un prénom, c'est une personne que tu peux appeler au septième jour si rien n'a bougé."),
      B("One single action by day seven is the first proof that the purchase was worth it: calendars online, first invoice sent, first report read. Book the day-thirty review now, while the client still cares. A meeting already in the calendar takes place.",
        "Une seule action au septième jour, c'est la première preuve que l'achat valait le coup : agendas en ligne, première facture envoyée, premier rapport lu. Cale le bilan du trentième jour tout de suite, tant que le client y tient. Un rendez-vous déjà posé, lui, a lieu."),
    ],
    example: {
      context: B("Laura sells an online booking tool. A physiotherapy practice with 4 physios has just signed. Her contact is Sandrine, the receptionist.",
        "Laura vend un outil de prise de rendez-vous en ligne. Un cabinet de 4 kinésithérapeutes vient de signer. Sa contact est Sandrine, la secrétaire."),
      before: B("Make an onboarding plan for my new client.",
        "Fais un plan d'onboarding pour mon nouveau client."),
      after: B("My client just signed: a practice with 4 physiotherapists. My contact is Sandrine, the receptionist. The decision-maker is Julien Morel, one of the partners.\nWrite the first 30 days as 3 dates, with a name on each:\n- day 7: ONE single thing done on their side (the 4 physios' calendars are online and the link is on their website), and who does it, by name\n- day 15: what we check together, in 15 minutes\n- day 30: the review with Julien Morel, to be booked today\nFor each date: what I do, what they do, and the sign that it works (for example, appointments booked online without a phone call).\nThen write the email to Sandrine proposing these three dates. Formal \"vous\".",
        "Mon client vient de signer : un cabinet de 4 kinésithérapeutes. Ma contact est Sandrine, la secrétaire. Le décideur est Julien Morel, l'un des associés.\nÉcris les 30 premiers jours en 3 dates, avec un nom sur chacune :\n- J+7 : UNE seule chose faite chez eux (les agendas des 4 kinés sont en ligne et le lien est sur leur site), et qui la fait, par son nom\n- J+15 : ce qu'on vérifie ensemble, en 15 minutes\n- J+30 : le bilan avec Julien Morel, à caler dès aujourd'hui\nPour chaque date : ce que je fais, ce qu'ils font, et le signe que ça marche (par exemple, des rendez-vous pris en ligne sans appel au cabinet).\nPuis écris le mail à Sandrine qui propose ces trois dates. Vouvoiement."),
      takeaway: B("The first prompt gives a generic plan with \"teams\" and \"phases\". The second sets one thing for day 7, a name for each action and a day-30 review booked at signing, while the client still believes in it.",
        "Le premier prompt donne un plan générique, avec des « équipes » et des « phases ». Le second fixe une seule chose à J+7, un nom pour chaque action et un bilan J+30 calé dès la signature, pendant que le client y croit encore."),
    },
    exercise: {
      goal: B("The first-30-days plan for a client you just signed: three dates, three names, and the email that books the day-thirty review.",
        "Le plan des 30 premiers jours d'un client que tu viens de signer : trois dates, trois noms, et le mail qui cale le bilan du trentième jour."),
      prompt: B("You are a customer success manager. My client [COMPANY] has just signed for [YOUR OFFER].\nMy contact: [FIRST NAME, ROLE]. The decision-maker: [FIRST NAME, ROLE].\nWhat they want to achieve, in their words: [THEIR GOAL].\nWrite their first 30 days as 3 dates:\n- day 7: one single thing they must have done, and the person on their side who does it, by name\n- day 15: a short checkpoint\n- day 30: a review with the decision-maker\nFor each date: my action, their action, the concrete sign that it is moving.\nIf I have not given a name, write \"to ask\" instead of inventing a department.\nEnd with an email to [CONTACT'S FIRST NAME] proposing these dates, with a precise slot for day 30. Formal \"vous\", 8 lines maximum.",
        "Tu es responsable de la réussite client. Mon client [ENTREPRISE] vient de signer pour [TON OFFRE].\nMon contact : [PRÉNOM, POSTE]. Le décideur : [PRÉNOM, POSTE].\nCe qu'ils veulent obtenir, avec leurs mots : [LEUR OBJECTIF].\nÉcris leurs 30 premiers jours en 3 dates :\n- J+7 : une seule chose qu'ils doivent avoir faite, et la personne qui la fait chez eux, par son nom\n- J+15 : un point de contrôle court\n- J+30 : un bilan avec le décideur\nPour chaque date : mon action, leur action, le signe concret que ça avance.\nSi je n'ai pas donné de nom, écris « à demander » au lieu d'inventer un service.\nTermine par un mail à [PRÉNOM DU CONTACT] qui propose ces dates, avec un créneau précis pour J+30. Vouvoiement, 8 lignes maximum."),
      check: [
        B("The day-7 step holds one single action, not a list", "L'étape J+7 contient une seule action, pas une liste"),
        B("Each step carries a first name, not \"the team\" or \"the department\"", "Chaque étape porte un prénom, pas « l'équipe » ou « le service »"),
        B("The day-30 review has a date and a time, not \"within a month\"", "Le bilan J+30 a une date et une heure, pas « d'ici un mois »"),
        B("The sign of progress is something you can see or count", "Le signe que ça avance se voit ou se compte"),
      ],
      bonus: B("List your last five clients: what they had done after one week, and whether they renewed. Ask the model what sets apart those who stayed. That is your real day-seven action.",
        "Liste tes cinq derniers clients : ce qu'ils avaient fait au bout d'une semaine, et s'ils ont renouvelé. Demande au modèle ce qui distingue ceux qui sont restés. C'est ta vraie action du septième jour."),
    },
    more: [
      {
        q: B("Your plan says \"Day 7: sales team training\". What is missing?",
          "Ton plan dit « J+7 : formation de l'équipe commerciale ». Que manque-t-il ?"),
        options: [
          B("A longer, more detailed training session", "Une formation plus longue et plus détaillée"),
          B("The name of who runs it on their side", "Le nom de la personne qui l'organise chez eux"),
          B("A PDF training handout", "Un support de formation en PDF"),
        ],
        answer: 1,
        why: B("\"The team\" does not feel responsible. A first name does: it is a person you can call if nothing has moved by day seven.",
          "« L'équipe » ne se sent pas responsable. Un prénom, si : c'est une personne que tu peux appeler si rien n'a bougé au septième jour."),
      },
      {
        q: B("Why book the day-30 review on the day of signing?",
          "Pourquoi caler le bilan J+30 le jour même de la signature ?"),
        options: [
          B("They are keen and their calendar is still open", "Le client est motivé et son agenda est encore libre"),
          B("Because the contract usually requires it to be set", "Parce que le contrat l'exige en général"),
          B("To invoice them faster", "Pour facturer plus vite"),
        ],
        answer: 0,
        why: B("On signing day, the client wants it to work. Three weeks later, their calendar is full and the subject has slipped behind the rest. A meeting already booked takes place.",
          "Le jour de la signature, le client veut que ça marche. Trois semaines plus tard, son agenda est plein et le sujet est passé derrière le reste. Un rendez-vous déjà posé, lui, a lieu."),
      },
    ],
  },

  /* ASSISTANT_PLACEHOLDER */
}
