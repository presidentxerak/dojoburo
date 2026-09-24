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
        "Un modèle produit les mots les plus probables. Lorsqu'il ignore l'actualité d'une entreprise, le texte le plus probable reste pourtant un texte précis : une date, un montant, un nom. C'est pourquoi une levée de fonds inventée ressemble trait pour trait à une vraie."),
      B("So change what you ask for. A date and a source link for each fact, and the right to answer \"not found\". You open one link in ten seconds, and a fact without a link goes in the bin. Then ask what the fact means for the person's role: that turns a piece of news into a reason to write.",
        "Modifiez donc votre demande : exigez une date et un lien pour chaque fait, et autorisez la réponse « non trouvé ». Vous ouvrez un lien en dix secondes, et tout fait sans lien est écarté. Demandez ensuite ce que le fait change pour le poste de la personne : c'est ce qui transforme une actualité en raison d'écrire."),
      B("Picture your prospect reading \"Congratulations on your March funding round\". If there was no round, the conversation is over before it starts. If there was, and you add what it means for their team, you are the one message that day that understood something.",
        "Imaginez votre prospect lisant « Félicitations pour votre levée de fonds de mars ». S'il n'y a pas eu de levée, la conversation s'achève avant d'avoir commencé. S'il y en a eu une, et que vous ajoutez ce qu'elle change pour son équipe, vous êtes le seul message du jour à avoir compris quelque chose."),
    ],
    example: {
      context: B("Sofiane sells scheduling software to franchise networks. He wants to write to the operations director of a chain of 40 hair salons.",
        "Sofiane vend un logiciel de planning à des réseaux de franchise. Il souhaite écrire au directeur des opérations d'une chaîne de 40 salons de coiffure."),
      before: B("Give me info on Salons Arlequin for my prospecting.",
        "Donne-moi des infos sur les Salons Arlequin pour ma prospection."),
      after: B("I am preparing a first message to the operations director of Salons Arlequin (a network of 40 franchised hair salons).\nFind what has changed there in the last 12 months: openings, closures, hiring, a new director, an acquisition.\nFor each fact: the date, the source link, and what it changes for an operations director (schedules, hiring, cover for absences).\nIf you find no source, write \"not found\". Do not invent any number.\nIf you cannot search the web, say so and stop.\nEnd with the most useful fact for my first line, and why.",
        "Je prépare un premier message pour le directeur des opérations des Salons Arlequin (réseau de 40 salons de coiffure en franchise).\nCherche ce qui a changé chez eux depuis 12 mois : ouvertures, fermetures, recrutements, nouveau dirigeant, rachat.\nPour chaque fait : la date, le lien de la source, et ce que ça change pour un directeur des opérations (plannings, recrutement, remplacements).\nSi tu ne trouves pas de source, écris « non trouvé ». N'invente aucun chiffre.\nSi tu ne peux pas chercher sur le web, dis-le et arrête-toi.\nTermine par le fait le plus utile pour ma première ligne, et pourquoi."),
      takeaway: B("The second prompt demands a date and a link for every fact, and allows \"not found\". Sofiane has one link to open before writing, instead of a portrait he cannot check.",
        "Le second prompt exige une date et un lien pour chaque fait, et autorise « non trouvé ». Sofiane n'a plus qu'un lien à ouvrir avant d'écrire, au lieu d'un portrait impossible à vérifier."),
    },
    exercise: {
      goal: B("A sheet of three dated facts about a real prospect, each with a source you opened, and the first line of your message.",
        "Une fiche de trois faits datés sur un prospect réel, chacun accompagné d'une source que vous avez ouverte, et la première ligne de votre message."),
      prompt: B("You are a sales analyst. I sell [YOUR OFFER IN ONE SENTENCE] and I want to write to [FIRST NAME, ROLE] at [COMPANY].\nFind what has changed there in the last 12 months: hiring, openings, acquisition, new director, launch, published results.\nFor each fact, give:\n- the date\n- the source link\n- what this fact implies for someone in the role of [ROLE]\nIf you have no source, write \"not found\" and invent nothing. If you cannot search the web, say so and stop.\nRank the facts from most to least useful to open a first message.\nThen suggest a first line based on fact no. 1, in 20 words maximum.",
        "Tu es un analyste commercial. Je vends [TON OFFRE EN UNE PHRASE] et je veux écrire à [PRÉNOM, POSTE] chez [ENTREPRISE].\nCherche ce qui a changé chez eux depuis 12 mois : recrutements, ouvertures, rachat, nouveau dirigeant, lancement, résultats publiés.\nPour chaque fait, donne :\n- la date\n- le lien de la source\n- ce que ce fait implique pour quelqu'un au poste de [POSTE]\nSi tu n'as pas de source, écris « non trouvé » et n'invente rien. Si tu ne peux pas chercher sur le web, dis-le et arrête-toi.\nClasse les faits du plus utile au moins utile pour ouvrir un premier message.\nPropose ensuite une première ligne basée sur le fait n° 1, en 20 mots maximum."),
      check: [
        B("Every fact has a date and a link, or says \"not found\"", "Chaque fait comporte une date et un lien, ou la mention « non trouvé »"),
        B("You opened the link of the fact you will quote, and it really says that", "Vous avez ouvert le lien du fait que vous allez citer, et il confirme bien ce fait"),
        B("The implication is about the person's role, not the company in general", "L'implication concerne le poste de la personne, et non l'entreprise en général"),
        B("Your first line is about them, not about your offer", "Votre première ligne parle d'eux, et non de votre offre"),
      ],
      bonus: B("Build the sheet for five prospects in the same sector, then ask which fact comes up for several of them. That shared fact is the hook of your next campaign.",
        "Établissez la fiche pour cinq prospects du même secteur, puis demandez quel fait revient chez plusieurs d'entre eux. Ce fait commun constituera l'accroche de votre prochaine campagne."),
    },
    more: [
      {
        q: B("The model says your prospect \"opened 12 branches in 2025\". You find no source. What do you do?",
          "Le modèle vous annonce que votre prospect « a ouvert 12 agences en 2025 ». Vous ne trouvez aucune source. Que faites-vous ?"),
        options: [
          B("Stay vague: \"I saw you are growing\"", "Vous restez vague : « j'ai vu que vous grandissez »"),
          B("Drop it and look for another fact", "Vous l'abandonnez et cherchez un autre fait"),
          B("Use it, rounded to \"about ten\"", "Vous l'utilisez, arrondi à « une dizaine »"),
        ],
        answer: 1,
        why: B("A fact with no source is still a guess, even rounded or blurred. If it is wrong, the prospect sees it at once. Move on to a fact whose source you can open.",
          "Un fait sans source reste une supposition, même arrondi ou rendu flou. S'il est faux, le prospect le remarque immédiatement. Passez à un fait dont vous pouvez ouvrir la source."),
      },
      {
        q: B("You found a true fact: they are hiring 8 salespeople. What do you add to the prompt so it becomes useful?",
          "Vous avez trouvé un fait avéré : ils recrutent 8 commerciaux. Qu'ajoutez-vous au prompt pour le rendre utile ?"),
        options: [
          B("A compliment on their fine growth", "Un compliment sur leur belle croissance"),
          B("Their revenue for last year", "Leur chiffre d'affaires de l'an dernier"),
          B("What it changes for your contact", "Ce que cela change pour votre contact"),
        ],
        answer: 2,
        why: B("The fact alone gives no reason to reply. Eight new salespeople to train at once is a concrete problem for the sales director. That problem is your first line.",
          "Le fait seul ne donne aucune raison de répondre. En revanche, huit commerciaux à former simultanément constituent un problème concret pour le directeur commercial. C'est ce problème qui fournit votre première ligne."),
      },
    ],
  },

  'sa-prospect/sa-first': {
    why: [
      B("Ask a model for \"a prospecting email\" and you get the average of every sales email it has read: who we are, what we do, and thirty minutes next week. It is the most common shape, so it is the most likely one. It is also the one your prospect deletes without reading.",
        "Demandez « un mail de prospection » à un modèle : vous obtenez la moyenne de tous les emails commerciaux qu'il a lus (qui nous sommes, ce que nous faisons, trente minutes la semaine prochaine). C'est la forme la plus courante, donc la plus probable. C'est aussi celle que votre prospect supprime sans la lire."),
      B("To leave the average, give the shape yourself: six lines, the order of the lines, and what is forbidden. Forbidding sentences about you forces the model to talk about them. Asking for one question answerable in five words makes the reply cost almost nothing.",
        "Pour sortir de la moyenne, imposez vous-même la forme : six lignes, leur ordre, et ce qui est interdit. Interdire les phrases qui parlent de vous oblige le modèle à parler du prospect. Demander une question à laquelle on répond en cinq mots rend la réponse presque sans effort."),
      B("Think of your prospect reading on their phone, between two meetings. If replying means opening their calendar, they postpone it, and a postponed reply is never sent. If replying means typing \"yes, since March\", they do it right away.",
        "Pensez à votre prospect qui lit sur son téléphone, entre deux réunions. Si répondre l'oblige à ouvrir son agenda, il remet à plus tard, et une réponse différée n'est jamais envoyée. Si répondre consiste à taper « oui, depuis mars », il le fait immédiatement."),
    ],
    example: {
      context: B("Claire sells workplace safety training. She writes to the HR director of a logistics company that has just opened a warehouse in Lyon, a fact she checked.",
        "Claire vend des formations à la sécurité au travail. Elle écrit à la DRH d'une entreprise de logistique qui vient d'ouvrir un entrepôt à Lyon, un fait qu'elle a vérifié."),
      before: B("Write a prospecting email to offer my safety training to a logistics company and ask for a meeting.",
        "Écris un mail de prospection pour proposer mes formations sécurité à une entreprise de logistique et demander un rendez-vous."),
      after: B("Write a first prospecting message of 6 lines maximum to Nadia, HR director at TransAlp Logistique.\nLine 1: their new Lyon warehouse, opened in March (checked source).\nLines 2 and 3: what I have seen work at a carrier of the same size: new forklift drivers trained in their first week, before they start on the floor.\nLast line: one closed question she can answer in five words.\nForbidden: introducing my company, talking about me, asking for a meeting or a call.\nTone: direct, polite, formal \"vous\".",
        "Écris un premier message de prospection de 6 lignes maximum pour Nadia, DRH de TransAlp Logistique.\nLigne 1 : leur nouvel entrepôt de Lyon, ouvert en mars (source vérifiée).\nLignes 2 et 3 : ce que j'ai vu marcher chez un transporteur de même taille : les nouveaux caristes formés dès leur première semaine, avant leur prise de poste.\nDernière ligne : une question fermée, à laquelle elle répond en cinq mots.\nInterdits : présenter mon entreprise, parler de moi, demander un rendez-vous ou un appel.\nTon : direct, poli, vouvoiement."),
      takeaway: B("The first prompt produces the average email: introduction, catalogue, meeting request. The second fixes the length, the order and the small final question, and forbids everything about Claire.",
        "Le premier prompt produit l'email moyen : présentation, catalogue, demande de rendez-vous. Le second fixe la longueur, l'ordre et la courte question finale, et interdit tout ce qui parle de Claire."),
    },
    exercise: {
      goal: B("A six-line first message, ready to send to a real prospect, ending on a question they can answer in five words.",
        "Un premier message de six lignes, prêt à être envoyé à un prospect réel, qui se termine par une question à laquelle il peut répondre en cinq mots."),
      prompt: B("You are an experienced B2B salesperson. Write a first prospecting message.\nRecipient: [FIRST NAME, ROLE, COMPANY].\nChecked fact about them: [THE FACT + ITS DATE].\nWhat I have seen work for a comparable client: [CONCRETE RESULT OR CHANGE, NO INVENTED NUMBER].\nRules:\n- 6 lines maximum\n- line 1: the checked fact, turned towards them\n- lines 2 and 3: the comparable case\n- last line: one single closed question, answerable in five words\n- no sentence about me or my company, no meeting request\nGive 3 versions of the final question. Then reread the message and delete every sentence that starts with \"we\" or \"I\".",
        "Tu es un commercial B2B expérimenté. Écris un premier message de prospection.\nDestinataire : [PRÉNOM, POSTE, ENTREPRISE].\nFait vérifié sur eux : [LE FAIT + SA DATE].\nCe que j'ai vu marcher chez un client comparable : [RÉSULTAT OU CHANGEMENT CONCRET, SANS CHIFFRE INVENTÉ].\nRègles :\n- 6 lignes maximum\n- ligne 1 : le fait vérifié, tourné vers eux\n- lignes 2 et 3 : le cas comparable\n- dernière ligne : une seule question fermée, qui se répond en cinq mots\n- aucune phrase sur moi ou mon entreprise, aucune demande de rendez-vous\nPropose 3 versions de la question finale. Puis relis le message et supprime chaque phrase qui commence par « nous » ou « je »."),
      check: [
        B("The message fits in six lines on your phone screen", "Le message tient en six lignes sur l'écran de votre téléphone"),
        B("No sentence starts with \"I\", \"we\" or your company name", "Aucune phrase ne commence par « je », « nous » ou le nom de votre entreprise"),
        B("The final question can be answered with yes, no or five words", "La question finale appelle un oui, un non ou une réponse en cinq mots"),
        B("The comparable case holds no number you cannot prove", "Le cas comparable ne contient aucun chiffre que vous ne pouvez pas prouver"),
      ],
      bonus: B("Write a LinkedIn version of the same message in 300 characters. Then compare: which line did you have to keep at all costs? That line is your real hook.",
        "Rédigez une version LinkedIn du même message en 300 caractères, puis comparez : quelle ligne avez-vous dû conserver à tout prix ? C'est elle, votre véritable accroche."),
    },
    more: [
      {
        q: B("The model ends your message with \"Would you be free for 30 minutes on Tuesday?\". What do you change?",
          "Le modèle termine votre message par « Seriez-vous disponible 30 minutes mardi ? ». Que modifiez-vous ?"),
        options: [
          B("A closed question about them", "Vous posez une question fermée qui porte sur eux"),
          B("You offer two slots instead of one", "Vous proposez deux créneaux au lieu d'un"),
          B("Nothing, it is clear and polite", "Rien, c'est clair et poli"),
        ],
        answer: 0,
        why: B("Two slots are still a meeting request, the biggest thing you can ask. A closed question about their situation is answered in five words and opens the conversation.",
          "Deux créneaux restent une demande de rendez-vous, soit la demande la plus lourde possible. Une question fermée sur leur situation se répond en cinq mots et ouvre l'échange."),
      },
      {
        q: B("Your 6-line message has 3 lines about your company. No reply. What is the most likely reason?",
          "Votre message de 6 lignes en consacre 3 à votre entreprise. Aucune réponse. Quelle en est la raison la plus probable ?"),
        options: [
          B("The message was far too short", "Le message était beaucoup trop court"),
          B("Those lines say nothing about them", "Ces lignes ne parlent pas d'eux"),
          B("You should have attached your brochure", "Il fallait joindre votre plaquette"),
        ],
        answer: 1,
        why: B("The prospect checks in two seconds whether the message concerns them. Three lines about you means half the message does not.",
          "Le prospect vérifie en deux secondes si le message le concerne. Or trois lignes consacrées à vous représentent la moitié du message qui ne le concerne pas."),
      },
    ],
  },

  'sa-prospect/sa-follow': {
    why: [
      B("Ask for \"a follow-up\" and the model writes \"I am just following up on my last email\", because it is the most common follow-up sentence there is. It adds nothing, so it gives the prospect no new reason to answer.",
        "Demandez « une relance » : le modèle écrit « Je me permets de revenir vers vous », car c'est la formule de relance la plus courante. Elle n'ajoute rien et ne donne donc au prospect aucune nouvelle raison de répondre."),
      B("Forbid any reference to your previous message, and give each follow-up one new thing to carry: a fact, a client case, or an answer to a likely objection. Each message can then be read alone. It no longer depends on the first one, which the prospect has probably not read.",
        "Interdisez toute référence à votre message précédent, et confiez à chaque relance un élément nouveau : un fait, un cas client ou la réponse à une objection probable. Chaque message se lit alors isolément. Il ne dépend plus du premier, que le prospect n'a probablement pas lu."),
      B("The last message closes the file, clearly and without reproach. It is the first message with a deadline: after this, nothing more will come. Someone who was simply not deciding now has a reason to answer, yes or no.",
        "La dernière relance clôt le dossier, clairement et sans reproche. C'est le premier message qui comporte une échéance : après lui, plus rien ne viendra. Le prospect indécis dispose enfin d'une raison de répondre, par oui ou par non."),
    ],
    example: {
      context: B("Julien sells connected cash registers to restaurants. He wrote to Mehdi, who runs three brasseries, a week ago. No reply.",
        "Julien vend des caisses enregistreuses connectées aux restaurateurs. Il a écrit il y a une semaine à Mehdi, gérant de trois brasseries, et n'a reçu aucune réponse."),
      before: B("Write a follow-up for my prospect who did not answer my email from last week.",
        "Écris une relance pour mon prospect qui n'a pas répondu à mon mail de la semaine dernière."),
      after: B("Write 3 follow-ups for Mehdi, who runs three brasseries in Nantes and did not answer my first message about connected cash registers.\nForbidden: any sentence referring to my previous message (\"just following up\", \"further to my email\", \"did you see\").\nFollow-up 1 (day 7): a new fact: stock tracking per restaurant, useful when you run several sites.\nFollow-up 2 (day 14): a case: a restaurant owner with three sites who stopped counting his tills by hand every night.\nFollow-up 3 (day 21): I close the file, without reproach, leaving the door open.\n4 lines maximum each, formal \"vous\".",
        "Écris 3 relances pour Mehdi, gérant de trois brasseries à Nantes, qui n'a pas répondu à mon premier message sur les caisses connectées.\nInterdit : toute phrase qui renvoie à mon message précédent (« je me permets de revenir vers vous », « suite à mon mail », « avez-vous vu »).\nRelance 1 (J+7) : un fait nouveau : le suivi des stocks par établissement, utile quand on gère plusieurs salles.\nRelance 2 (J+14) : un cas : un restaurateur avec trois adresses qui a arrêté de compter ses caisses à la main chaque soir.\nRelance 3 (J+21) : je ferme le dossier, sans reproche, en laissant la porte ouverte.\n4 lignes maximum chacune, vouvoiement."),
      takeaway: B("Each follow-up brings Mehdi something he did not have, so each one can be read alone. And the last one finally gives him a deadline: he knows it is now or never.",
        "Chaque relance apporte à Mehdi un élément qu'il n'avait pas : chacune peut donc se lire isolément. La dernière lui fixe enfin une échéance, et il sait que c'est maintenant ou jamais."),
    },
    exercise: {
      goal: B("A sequence of three follow-ups for a real silent prospect, each bringing something new, the last one closing the file.",
        "Une série de trois relances pour un prospect réel resté silencieux, chacune avec un apport nouveau, la dernière clôturant le dossier."),
      prompt: B("You are a B2B salesperson. My prospect [FIRST NAME, ROLE, COMPANY] did not answer this first message:\n[PASTE YOUR FIRST MESSAGE]\nWrite 3 follow-ups, one week apart.\nEach one brings ONE thing they did not have:\n- follow-up 1: a new fact about their sector or company: [CHECKED FACT]\n- follow-up 2: a comparable client case: [REAL CASE]\n- follow-up 3: I close the file, politely, without reproach, saying how to reach me later.\nForbidden: any sentence referring to my previous messages, any guilt-tripping, any fake urgency.\n4 lines maximum per follow-up. Formal \"vous\".\nAt the end, check that each follow-up makes sense if it is the only one they read.",
        "Tu es un commercial B2B. Mon prospect [PRÉNOM, POSTE, ENTREPRISE] n'a pas répondu à ce premier message :\n[COLLE TON PREMIER MESSAGE]\nÉcris 3 relances, espacées d'une semaine.\nChacune apporte UNE chose qu'il n'avait pas :\n- relance 1 : un fait nouveau sur son secteur ou son entreprise : [FAIT VÉRIFIÉ]\n- relance 2 : un cas client comparable : [CAS RÉEL]\n- relance 3 : je ferme le dossier, poliment, sans reproche, en disant comment me recontacter plus tard.\nInterdits : toute phrase qui renvoie à mes messages précédents, toute culpabilisation, toute fausse urgence.\n4 lignes maximum par relance. Vouvoiement.\nÀ la fin, vérifie que chaque relance se comprend si c'est la seule qu'il lit."),
      check: [
        B("No follow-up contains \"just following up\", \"further to\" or \"did you see\"", "Aucune relance ne contient « revenir vers vous », « suite à » ou « avez-vous vu »"),
        B("Each follow-up makes sense without the previous ones", "Chaque relance se comprend isolément, sans avoir lu les précédentes"),
        B("The fact and the case are real: you could prove them if asked", "Le fait et le cas sont réels : vous pouvez les prouver si on vous le demande"),
        B("The last one clearly says you are closing the file, with no hurt tone", "La dernière indique clairement que vous clôturez le dossier, sans agacement"),
      ],
      bonus: B("Prepare for the answers to follow-up 3. Ask for the two most likely ones (\"not now\" and \"not interested\") and what you reply to each to keep a useful contact.",
        "Préparez les réponses à la relance 3. Demandez les deux réponses les plus probables (« pas maintenant » et « pas intéressé ») et ce que vous répondez à chacune pour conserver un contact utile."),
    },
    more: [
      {
        q: B("Your follow-up 2 starts with \"Just following up on my email\". What do you do?",
          "Votre relance 2 commence par « Je me permets de revenir vers vous ». Que faites-vous ?"),
        options: [
          B("Keep it, it is a polite formula", "Vous la conservez : c'est une formule polie"),
          B("Replace it with \"Friendly reminder\"", "Vous la remplacez par « Petit rappel amical »"),
          B("Delete it, open on the case", "Vous la supprimez et ouvrez sur le cas"),
        ],
        answer: 2,
        why: B("The first two refer to the previous message and say you have nothing new. Opening on the case gives the prospect a reason to read, even if they never saw your first message.",
          "Les deux premières formules renvoient au message précédent et signalent que vous n'avez rien de nouveau. Ouvrir sur le cas donne au prospect une raison de lire, même s'il n'a jamais vu votre premier message."),
      },
      {
        q: B("After your \"I am closing the file\" message, the prospect replies \"not before January\". This is:",
          "Après votre relance « je ferme le dossier », le prospect répond « pas avant janvier ». Il s'agit :"),
        options: [
          B("A failure: you push harder right away", "D'un échec : vous insistez immédiatement"),
          B("Useful: note it, return in January", "D'une information utile : vous la notez et revenez en janvier"),
          B("A polite brush-off you can ignore", "D'une politesse que vous pouvez ignorer"),
        ],
        answer: 1,
        why: B("The closing message did its job: it got a clear answer. \"Not before January\" gives you a date. Note it, and come back then with something new.",
          "Le message de clôture a rempli son rôle : il a obtenu une réponse claire. « Pas avant janvier » vous fournit une date. Notez-la, et revenez à ce moment-là avec un fait nouveau."),
      },
    ],
  },

  /* ================================================================ */
  /* COMMERCIAL · L'ENTRETIEN                                         */
  /* ================================================================ */

  'sa-meeting/sa-prep': {
    why: [
      B("Ask for \"discovery questions\" and the model gives the ones everyone asks: your priorities, your budget, your current tool. Your client has heard them a hundred times, and gives the answer they always give. You learn nothing you could act on.",
        "Demandez des « questions de découverte » : le modèle vous fournit celles que tout le monde pose (« vos priorités », « votre budget », « votre outil actuel »). Votre client les a entendues cent fois et donne la réponse qu'il donne toujours. Vous n'apprenez donc rien qui permette d'agir."),
      B("Give the model what you already know (their website, the first emails) and forbid any question it answers. Then ask for questions about one precise past moment: \"the last time a technician was absent on a Monday, what did you do?\". A precise moment brings a story, with names, tools and numbers in it.",
        "Fournissez au modèle ce que vous savez déjà (leur site, les premiers emails) et interdisez toute question à laquelle ces éléments répondent. Demandez ensuite des questions sur un moment passé précis : « la dernière fois qu'un technicien était absent un lundi, comment avez-vous fait ? ». Un moment précis suscite un récit, avec des noms, des outils et des chiffres."),
      B("The question about doing nothing shows the cost of waiting. If nothing changes before winter, what happens? If the answer is \"not much\", you know there is no urgency, and you know it before spending a month on the deal.",
        "La question sur « ne rien faire » révèle ce que coûte l'attente : si rien ne change d'ici l'hiver, que se passe-t-il ? Si la réponse est « pas grand-chose », vous savez qu'il n'y a pas d'urgence, et vous le savez avant de consacrer un mois au dossier."),
    ],
    example: {
      context: B("Inès sells field service software. Tomorrow she meets Paul, who runs a heating company with 25 technicians.",
        "Inès vend un logiciel de gestion des interventions. Demain, elle rencontre Paul, dirigeant d'une PME de chauffage employant 25 techniciens."),
      before: B("Give me questions to ask in a discovery meeting with a prospect.",
        "Donne-moi des questions à poser en rendez-vous découverte avec un prospect."),
      after: B("Tomorrow I meet Paul, who runs a heating company (25 technicians, 3 branches).\nWhat I already know from their website: boiler servicing, 7-day emergency repairs, 3 branches in the Isère area.\nPrepare 5 questions whose answers I cannot guess.\nRules:\n- no question their website already answers\n- each question is about one precise time (\"the last time...\"), not the general case\n- one question is about what happens if they change nothing before winter\n- spoken style, one sentence per question, formal \"vous\"\nFor each question, write what I am trying to learn.",
        "Demain, je rencontre Paul, dirigeant d'une PME de chauffage (25 techniciens, 3 agences).\nCe que je sais déjà grâce à leur site : entretien de chaudières, dépannage 7 jours sur 7, 3 agences en Isère.\nPrépare 5 questions dont je ne peux pas deviner la réponse.\nRègles :\n- aucune question à laquelle leur site répond déjà\n- chaque question porte sur une fois précise (« la dernière fois que... »), pas sur le cas général\n- une question porte sur ce qui se passe s'ils ne changent rien d'ici l'hiver\n- formulation orale, une phrase par question, vouvoiement\nPour chaque question, écris ce que je cherche à apprendre."),
      takeaway: B("The first prompt gives the questions everyone asks, so the answers everyone gives. The second removes what Inès already knows and aims at precise past events: Paul will tell stories, and Inès will listen.",
        "Le premier prompt fournit les questions que tout le monde pose, et donc les réponses que tout le monde donne. Le second écarte ce qu'Inès sait déjà et vise des faits passés précis : Paul racontera, et Inès écoutera."),
    },
    exercise: {
      goal: B("Your five questions for your next meeting, each with what you want to learn, on one card you keep in front of you.",
        "Vos cinq questions pour votre prochain rendez-vous, chacune accompagnée de ce que vous voulez apprendre, sur une fiche que vous gardez sous les yeux."),
      prompt: B("You are a sales coach. I meet [FIRST NAME, ROLE] at [COMPANY] on [DATE] to talk about [YOUR OFFER].\nHere is what I already know (website, LinkedIn, first emails):\n[PASTE WHAT YOU KNOW]\nPrepare 5 open questions:\n- none whose answer is already in what I know\n- at least 3 about the last time a precise problem happened\n- one about what happens if they do nothing in the next 6 months\n- spoken style, one sentence each, formal \"vous\"\nFor each question: what I am trying to learn, and the follow-up to ask if the answer stays vague.\nDo not suggest any question about my product.",
        "Tu es un coach commercial. Je rencontre [PRÉNOM, POSTE] chez [ENTREPRISE] le [DATE] pour parler de [TON OFFRE].\nVoici ce que je sais déjà (site, LinkedIn, premiers échanges) :\n[COLLE CE QUE TU SAIS]\nPrépare 5 questions ouvertes :\n- aucune dont la réponse est dans ce que je sais déjà\n- au moins 3 sur la dernière fois qu'un problème précis s'est produit\n- une sur ce qui se passe s'ils ne font rien dans les 6 prochains mois\n- formulation orale, une phrase chacune, vouvoiement\nPour chaque question : ce que je cherche à apprendre, et la relance à poser si la réponse reste vague.\nNe propose aucune question sur mon produit."),
      check: [
        B("None of your questions is answered on their website", "Aucune de vos questions ne trouve sa réponse sur leur site"),
        B("At least three questions point to a precise moment, like \"the last time\"", "Au moins trois questions portent sur un moment précis, comme « la dernière fois »"),
        B("One question is about the cost of doing nothing", "Une question porte sur le coût de l'inaction"),
        B("No question is about your product", "Aucune question ne porte sur votre produit"),
      ],
      bonus: B("Rehearse the meeting: ask the model to play the prospect with vague answers, and practise following up until you get a precise fact (a date, a number, the name of a tool).",
        "Répétez le rendez-vous : demandez au modèle de jouer le prospect en donnant des réponses vagues, et entraînez-vous à relancer jusqu'à obtenir un fait précis (une date, un chiffre, un nom d'outil)."),
    },
    more: [
      {
        q: B("You ask \"How do you handle your quotes?\". The client says \"pretty well\". Which follow-up is worth most?",
          "Vous demandez « Comment gérez-vous vos devis ? ». Le client répond « plutôt bien ». Quelle relance est la plus utile ?"),
        options: [
          B("\"What could be improved, in your view?\"", "« Qu'est-ce qui pourrait être amélioré, selon vous ? »"),
          B("\"Tell me about the last late quote.\"", "« Racontez-moi le dernier devis parti en retard. »"),
          B("\"Would you be open to a demo?\"", "« Seriez-vous partant pour une démo ? »"),
        ],
        answer: 1,
        why: B("\"Pretty well\" is the general answer everyone gives. One precise late quote brings a story: how many days, why, who chased it. Those details are what you can use.",
          "« Plutôt bien » est la réponse générale que tout le monde donne. Un devis précis parti en retard suscite un récit : combien de jours, pourquoi, qui a relancé. Ce sont ces détails qui vous sont utiles."),
      },
      {
        q: B("The model suggests \"What is your line of business?\". What do you do?",
          "Le modèle vous propose « Quel est votre secteur d'activité ? ». Que faites-vous ?"),
        options: [
          B("Delete it: their website answers it", "Vous la supprimez : leur site y répond"),
          B("Keep it to break the ice", "Vous la conservez pour briser la glace"),
          B("Move it to the very end of the meeting", "Vous la placez tout à la fin de l'entretien"),
        ],
        answer: 0,
        why: B("Every question you could answer alone takes the client's time and shows you did not prepare. Keep those minutes for what only they can tell you.",
          "Chaque question dont vous pourriez trouver seul la réponse prend du temps au client et montre un manque de préparation. Réservez ces minutes à ce que lui seul peut vous dire."),
      },
    ],
  },

  'sa-meeting/sa-notes': {
    why: [
      B("Your raw notes hold signals: \"??\", \"not clear\", \"check with partner\". Ask for \"a clean summary\" and the model smooths them away, because a summary aims to look finished. You get a confident story where the doubts have become facts.",
        "Vos notes brutes contiennent des signaux : « ?? », « pas clair », « voir avec l'associé ». Demandez « un résumé propre » : le modèle les efface, car un résumé cherche à paraître abouti. Vous obtenez un récit assuré dans lequel les doutes sont devenus des faits."),
      B("Three required sections change the job: what was said, what was agreed, what is unclear. The model now has a place to put each doubt, so it keeps them. Forbid it to add anything missing from your notes, and ask for \"to be confirmed\" when a name or date is not there.",
        "Imposer trois parties modifie le travail : ce qui a été dit, ce qui a été convenu, ce qui reste flou. Le modèle dispose alors d'une place pour chaque doute, et il les conserve. Interdisez-lui d'ajouter ce qui manque à vos notes, et demandez « à préciser » lorsqu'un nom ou une date est absent."),
      B("Test it this way: you go on holiday tomorrow and a colleague takes over the deal. Can they act from your write-up alone, without calling you? If yes, it is a real record. If not, it is a souvenir.",
        "Faites ce test : vous partez en congé demain et un collègue reprend le dossier. Peut-il agir avec votre seul compte rendu, sans vous appeler ? Si oui, c'est une véritable trace ; sinon, ce n'est qu'un souvenir."),
    ],
    example: {
      context: B("Thomas sells office furniture. He has just met the facilities manager of a law firm, and his notes are a mess on his phone.",
        "Thomas vend du mobilier de bureau. Il sort d'un rendez-vous avec la responsable des services généraux d'un cabinet d'avocats, et ses notes sont éparpillées sur son téléphone."),
      before: B("Turn my meeting notes into a clean summary:\nfirm 45 ppl, move in Sept, wants sit-stand desks ?? budget not clear, check with partner, Ms Roux ok on 6 wk lead time, talk showroom demo",
        "Fais un résumé propre de mes notes de rdv :\ncabinet 45 pers, déménagement sept, veut bureaux assis-debout ?? budget pas clair, voir avec associé, Mme Roux ok sur délai 6 sem, parler démo showroom"),
      after: B("Here are my raw notes from a meeting with Ms Roux, facilities manager at a law firm. Keep the hesitations, correct nothing.\n\"firm 45 ppl, move in Sept, wants sit-stand desks ?? budget not clear, check with partner, Ms Roux ok on 6 wk lead time, talk showroom demo\"\nWrite a report in 3 parts:\n1. What was said (facts only)\n2. What was agreed (who does what, by when)\n3. What is still unclear (each doubt, and the question that would settle it)\nAdd no information that is not in my notes. If a name or a date is missing, write \"to be confirmed\".",
        "Voici mes notes brutes d'un rendez-vous avec Mme Roux, responsable des services généraux d'un cabinet d'avocats. Garde les hésitations, ne corrige rien.\n« cabinet 45 pers, déménagement sept, veut bureaux assis-debout ?? budget pas clair, voir avec associé, Mme Roux ok sur délai 6 sem, parler démo showroom »\nFais un compte rendu en 3 parties :\n1. Ce qui a été dit (faits uniquement)\n2. Ce qui a été convenu (qui fait quoi, pour quand)\n3. Ce qui reste flou (chaque doute, et la question qui le lèverait)\nN'ajoute aucune information absente de mes notes. S'il manque un nom ou une date, écris « à préciser »."),
      takeaway: B("A plain summary would have smoothed over the \"??\" and the \"budget not clear\". The unclear section keeps them, and gives Thomas the two questions to send Ms Roux tonight.",
        "Un simple résumé aurait gommé les « ?? » et le « budget pas clair ». La partie « flou » les conserve et fournit à Thomas les deux questions à envoyer à Mme Roux dès ce soir."),
    },
    exercise: {
      goal: B("The three-part report of your last meeting, and the email that settles the first doubt, sent the same day.",
        "Le compte rendu en trois parties de votre dernier rendez-vous, et l'email qui lève le premier doute, envoyé le jour même."),
      prompt: B("You are my sales assistant. Here are my raw notes from the meeting with [FIRST NAME, ROLE, COMPANY] on [DATE]. They are messy and full of doubts: keep them.\n[PASTE OR DICTATE YOUR NOTES]\nWrite a report in 3 parts:\n1. What was said: the facts, with the client's numbers and exact words when I noted them.\n2. What was agreed: each action with who does it and by when. If the who or the when is missing, write \"to be confirmed\".\n3. What is unclear: each doubt, why it matters for the sale, and the question that would settle it.\nAdd nothing that is not in my notes.\nThen draft a short email to the client asking the most important question from part 3. Formal \"vous\".",
        "Tu es mon assistant commercial. Voici mes notes brutes du rendez-vous avec [PRÉNOM, POSTE, ENTREPRISE] du [DATE]. Elles sont en vrac, avec mes doutes : garde-les.\n[COLLE OU DICTE TES NOTES]\nFais un compte rendu en 3 parties :\n1. Ce qui a été dit : les faits, avec les chiffres et les mots exacts du client quand je les ai notés.\n2. Ce qui a été convenu : chaque action avec qui la fait et pour quand. S'il manque le qui ou le quand, écris « à préciser ».\n3. Ce qui reste flou : chaque doute, pourquoi il compte pour la vente, et la question qui le lèverait.\nN'ajoute rien qui ne soit pas dans mes notes.\nPuis rédige un mail court au client qui pose la question la plus importante de la partie 3. Vouvoiement."),
      check: [
        B("A colleague taking over tomorrow would know what to do without calling you", "Un collègue qui reprendrait le dossier demain saurait quoi faire sans vous appeler"),
        B("The unclear section holds at least one doubt; if not, reread your notes", "La partie « flou » contient au moins un doute ; sinon, relisez vos notes"),
        B("Nothing was added: everything can be found in your notes", "Rien n'a été ajouté : tout figure dans vos notes"),
        B("Each agreed action has a name and a date, or says \"to be confirmed\"", "Chaque action convenue comporte un nom et une date, ou la mention « à préciser »"),
      ],
      bonus: B("Dictate your notes out loud right after the meeting, in the car or on the pavement, with your phone's voice typing. Paste the text as it is, hesitations included, and run the same prompt.",
        "Dictez vos notes à voix haute juste après le rendez-vous, dans votre voiture ou dans la rue, avec la dictée de votre téléphone. Collez le texte tel quel, hésitations comprises, et lancez le même prompt."),
    },
    more: [
      {
        q: B("Your report says \"Client convinced, signing in June\". Your notes said \"signing June? check with CFO\". What happened?",
          "Le compte rendu indique « Client convaincu, signature en juin ». Vos notes disaient « signature juin ? voir avec DAF ». Qu'est-il arrivé ?"),
        options: [
          B("The model smoothed a doubt away", "Le modèle a gommé un doute"),
          B("The model summarised the key point well", "Le modèle a bien résumé l'essentiel"),
          B("Your notes were far too long for it", "Vos notes étaient bien trop longues"),
        ],
        answer: 0,
        why: B("A summary aims to look neat, and a doubt does not look neat. Always ask for an unclear section, and forbid adding what is not in your notes.",
          "Un résumé cherche à paraître net, et un doute nuit à cette netteté. Demandez donc toujours une partie « flou », et interdisez l'ajout de tout élément absent de vos notes."),
      },
      {
        q: B("You have ten minutes after your meeting. Which part of the report do you act on first?",
          "Vous disposez de dix minutes après votre rendez-vous. Sur quelle partie du compte rendu agissez-vous d'abord ?"),
        options: [
          B("The agreed part, to follow it up", "La partie « convenu », pour la relancer"),
          B("The formatting, for the CRM", "La mise en forme, pour le CRM"),
          B("The unclear part: email them", "La partie « flou » : vous écrivez au client"),
        ],
        answer: 2,
        why: B("What was agreed will be repeated at the next meeting. What is unclear settles itself if nobody asks, and rarely in your favour.",
          "Ce qui a été convenu sera rappelé au prochain rendez-vous. En revanche, ce qui est flou se tranche de lui-même si personne ne pose la question, et rarement en votre faveur."),
      },
    ],
  },

  'sa-meeting/sa-object': {
    why: [
      B("An objection is a short sentence that can hide several different problems. \"It is too expensive\" can mean: no budget this year, I do not see what it replaces, or I cannot defend it to my boss. Each one needs a different answer.",
        "Une objection est une phrase courte qui peut masquer plusieurs problèmes différents. « C'est trop cher » peut signifier : pas de budget cette année, je ne vois pas ce que cela remplace, ou je ne sais pas le défendre devant ma hiérarchie. Chacun appelle une réponse différente."),
      B("Ask a model \"how to answer too expensive\" and it gives you ready-made comebacks, all aimed at the price. Ask it instead for three possible meanings and the clue that separates them. It then works like a doctor who asks where it hurts before prescribing.",
        "Demandez à un modèle « comment répondre à trop cher » : il vous fournit des répliques toutes faites, toutes centrées sur le prix. Demandez-lui plutôt trois interprétations possibles et l'indice qui les distingue. Il procède alors comme un médecin qui demande où se situe la douleur avant de prescrire."),
      B("Give the client's exact words, not your rephrasing. \"Too expensive for what it is\" and \"too expensive this year\" point to two different problems. Your rephrasing erases exactly the word that would have guided you.",
        "Fournissez les mots exacts du client, et non votre reformulation. « Trop cher pour ce que c'est » et « trop cher cette année » désignent deux problèmes différents. Votre reformulation efface précisément le mot qui vous aurait guidé."),
    ],
    example: {
      context: B("Élodie sells outsourced payroll to small businesses. The owner of a 12-person garage tells her: \"It is too expensive for what it is.\"",
        "Élodie vend un service de paie externalisée aux PME. Le gérant d'un garage de 12 salariés lui dit : « C'est trop cher pour ce que c'est. »"),
      before: B("How do I answer a client who says it is too expensive?",
        "Comment répondre à un client qui dit que c'est trop cher ?"),
      after: B("The owner of a garage (12 employees) just told me, word for word: \"It is too expensive for what it is.\"\nI offer to run his payroll at 25 euros per payslip. Today his accountant prepares the payslips.\nDo not give me an answer to the objection.\nGive me 3 things this sentence may really mean, taking into account the words \"for what it is\".\nFor each one: a clue that would reveal it in the conversation.\nThen write ONE open question to ask him, which would tell me which of the 3 is right. Formal \"vous\", simple tone.",
        "Le gérant d'un garage (12 salariés) vient de me dire, mot pour mot : « C'est trop cher pour ce que c'est. »\nJe lui propose de gérer sa paie à 25 euros par bulletin. Aujourd'hui, c'est son comptable qui fait les bulletins.\nNe me donne pas de réponse à l'objection.\nDonne-moi 3 choses que cette phrase peut vraiment vouloir dire, en tenant compte des mots « pour ce que c'est ».\nPour chacune : un indice qui la trahirait dans la conversation.\nPuis écris UNE question ouverte à lui poser, qui me dirait laquelle des 3 est la bonne. Vouvoiement, ton simple."),
      takeaway: B("The first prompt gives comebacks about price. The second starts from the exact words: \"for what it is\" suggests he does not see what the service replaces. Élodie asks a question before defending her price.",
        "Le premier prompt fournit des répliques sur le prix. Le second part des mots exacts : « pour ce que c'est » suggère qu'il ne voit pas ce que le service remplace. Élodie pose donc une question avant de défendre son prix."),
    },
    exercise: {
      goal: B("For an objection you hear often: three possible meanings, the clues that separate them, and the question to ask before answering.",
        "Pour une objection que vous entendez souvent : trois interprétations possibles, les indices qui les distinguent, et la question à poser avant de répondre."),
      prompt: B("You are a sales coach. I sell [YOUR OFFER] to [TYPE OF CLIENT].\nA client told me, word for word: \"[THE EXACT OBJECTION]\".\nContext: [WHERE THE DISCUSSION WAS, WHO WAS THERE].\nDo not answer the objection yet.\n1. Give 3 different things it may really mean (for example a budget problem, a priority problem, a trust problem, or someone else to convince).\n2. For each one, the clue in their words or attitude that would make it likely.\n3. Write one open question, formal \"vous\", that helps me find which one is right.\n4. Only then: for each meaning, the right answer in 2 sentences.",
        "Tu es un coach commercial. Je vends [TON OFFRE] à [TYPE DE CLIENT].\nUn client m'a dit, mot pour mot : « [L'OBJECTION EXACTE] ».\nContexte : [OÙ EN ÉTAIT LA DISCUSSION, QUI ÉTAIT PRÉSENT].\nNe réponds pas encore à l'objection.\n1. Donne 3 choses différentes qu'elle peut vraiment vouloir dire (par exemple un problème de budget, de priorité, de confiance, ou quelqu'un d'autre à convaincre).\n2. Pour chacune, l'indice dans ses mots ou son attitude qui la rendrait probable.\n3. Écris une question ouverte, en vouvoiement, qui m'aide à savoir laquelle est la bonne.\n4. Seulement ensuite : pour chaque sens, la bonne réponse en 2 phrases."),
      check: [
        B("You pasted the client's exact words, not your rephrasing", "Vous avez collé les mots exacts du client, et non votre reformulation"),
        B("The three meanings are truly different, not three versions of price", "Les trois interprétations sont réellement différentes, et non trois variantes du prix"),
        B("Your question is open and defends nothing", "Votre question est ouverte et ne défend rien"),
        B("None of the answers starts with a discount", "Aucune des réponses ne commence par une remise"),
      ],
      bonus: B("Do it for your five most frequent objections and put everything in a table: objection | possible meanings | question to ask. Reread it before every important meeting.",
        "Appliquez la méthode à vos cinq objections les plus fréquentes et rassemblez le tout dans un tableau : objection | interprétations possibles | question à poser. Relisez-le avant chaque rendez-vous important."),
    },
    more: [
      {
        q: B("A client says \"I need to talk to my partner\". Which question do you ask first?",
          "Un client dit « Je dois en parler à mon associé ». Quelle question posez-vous d'abord ?"),
        options: [
          B("\"When can you talk to them about it?\"", "« Quand pouvez-vous lui en parler ? »"),
          B("\"What will your partner ask you?\"", "« Que va vous demander votre associé ? »"),
          B("\"Shall I send them our brochure and pricing?\"", "« Je lui envoie notre plaquette et nos tarifs ? »"),
        ],
        answer: 1,
        why: B("This question brings the real objection to light: price, risk or timing. You learn what the partner will ask, and you can prepare your client for that conversation.",
          "Cette question fait émerger la véritable objection : le prix, le risque ou le calendrier. Vous apprenez ce que l'associé va demander, et vous pouvez préparer votre client à cette discussion."),
      },
      {
        q: B("You paste \"the client finds it expensive\" instead of their words. What is the risk?",
          "Vous collez « le client trouve ça cher » au lieu de ses mots. Quel est le risque ?"),
        options: [
          B("None, it means the same thing", "Aucun, cela revient au même"),
          B("The model will just take longer to answer", "Le modèle mettra plus longtemps à répondre"),
          B("You lose the clue to what it hides", "Vous perdez l'indice de ce qu'elle masque"),
        ],
        answer: 2,
        why: B("\"Too expensive for what it is\", \"too expensive this year\" and \"more expensive than X\" do not mean the same thing. Your rephrasing erases the very word that was guiding you.",
          "« Trop cher pour ce que c'est », « trop cher cette année » et « plus cher que X » n'ont pas le même sens. Votre reformulation efface le mot qui vous guidait."),
      },
    ],
  },

  /* ================================================================ */
  /* COMMERCIAL · CONCLURE                                            */
  /* ================================================================ */

  'sa-close/sa-proposal': {
    why: [
      B("Your proposal will be forwarded. The person who decides, often a finance director or a partner, was not in the meeting. They open it on their phone with one line from your contact: \"What do you think?\". They read the first paragraph and decide whether to go on.",
        "Votre proposition sera transférée. La personne qui décide, souvent un directeur financier ou un associé, n'assistait pas au rendez-vous. Elle l'ouvre sur son téléphone, accompagnée d'une ligne de votre contact : « Qu'en penses-tu ? ». Elle lit le premier paragraphe et décide alors si elle poursuit."),
      B("Ask for \"a sales proposal\" and the model follows the usual template: company history, methodology, references, several pages. Tell it who the real reader is and what they need: their problem in their words, what you do, what it costs, the first step with a date.",
        "Demandez « une proposition commerciale » : le modèle suit le schéma habituel (historique de l'entreprise, méthodologie, références, plusieurs pages). Indiquez-lui plutôt qui est le véritable lecteur et ce dont il a besoin : son problème formulé avec ses mots, ce que vous faites, ce que cela coûte, la première étape avec une date."),
      B("Their own number in the first paragraph is what makes the reader recognise their company. \"6 stores without a manager for 3 months\" is their problem. \"Talent acquisition excellence\" is yours.",
        "Le chiffre du client placé dans le premier paragraphe permet au lecteur de reconnaître son entreprise. « 6 magasins sans responsable depuis 3 mois » décrit son problème ; « L'excellence en recrutement » décrit le vôtre."),
    ],
    example: {
      context: B("Hugo, a recruitment consultant, met Sarah, HR director of a chain of 15 sports stores. She must get his proposal approved by the CFO, whom Hugo has never met.",
        "Hugo, consultant en recrutement, a rencontré Sarah, DRH d'une chaîne de 15 magasins de sport. Elle doit faire valider sa proposition par le directeur financier, qu'Hugo n'a jamais rencontré."),
      before: B("Write a sales proposal for a mission to recruit 6 store managers.",
        "Rédige une proposition commerciale pour une mission de recrutement de 6 responsables de magasin."),
      after: B("Write a one-page proposal. Sarah (HR director) will forward it to her CFO, who was not at the meeting.\nParagraph 1: their problem, in Sarah's words: \"6 stores without a manager for 3 months, and sales dropping in those stores\".\nParagraph 2: what I do: recruit the 6 managers, first shortlist within 3 weeks.\nParagraph 3: what it costs: 15% of gross annual salary per hire, paid on hiring.\nLast line: the first step and its date: a 30-minute scoping call in the week of 6 October.\nNo presentation of my firm, no methodology, no references.",
        "Rédige une proposition d'une page. Sarah (DRH) la transférera à son directeur financier, qui n'était pas au rendez-vous.\nParagraphe 1 : leur problème, avec les mots de Sarah : « 6 magasins sans responsable depuis 3 mois, et le chiffre qui baisse dans ces magasins-là ».\nParagraphe 2 : ce que je fais : recrutement des 6 responsables, première liste de candidats sous 3 semaines.\nParagraphe 3 : ce que ça coûte : 15 % du salaire annuel brut par recrutement, payé à l'embauche.\nDernière ligne : la première étape et sa date : un appel de cadrage de 30 minutes la semaine du 6 octobre.\nPas de présentation de mon cabinet, pas de méthodologie, pas de références."),
      takeaway: B("The first prompt produces a multi-page brochure. The second writes for the CFO: he recognises his company's problem, sees the cost and knows what happens next, without needing Sarah.",
        "Le premier prompt produit une plaquette de plusieurs pages. Le second s'adresse au directeur financier : celui-ci reconnaît le problème de son entreprise, voit le coût et sait ce qui se passe ensuite, sans avoir besoin de Sarah."),
    },
    exercise: {
      goal: B("A one-page proposal for a real deal in progress, written for the decision-maker you have not met.",
        "Une proposition d'une page pour un dossier réel en cours, rédigée pour le décideur que vous n'avez pas rencontré."),
      prompt: B("You are an experienced salesperson. Write a sales proposal of one page maximum.\n[FIRST NAME, ROLE OF YOUR CONTACT] will forward it to [ROLE OF THE DECISION-MAKER], who was not at the meeting.\nTheir problem, in their words and with their number: [QUOTE OR NUMBER GIVEN BY THE CLIENT].\nWhat I propose: [YOUR OFFER, SCOPE, TIMING].\nThe price: [AMOUNT AND UNIT].\nFirst step: [ACTION + DATE].\nStructure: 1 paragraph problem, 1 paragraph solution, 1 paragraph price, 1 line first step.\nForbidden: presenting my company, jargon, superlatives, invented references.\nThen reread it as the [ROLE OF THE DECISION-MAKER]: list the 3 questions they would ask that remain unanswered.",
        "Tu es un commercial expérimenté. Rédige une proposition commerciale d'une page maximum.\n[PRÉNOM, POSTE DE TON CONTACT] la transférera à [POSTE DU DÉCIDEUR], qui n'était pas au rendez-vous.\nLeur problème, avec leurs mots et leur chiffre : [CITATION OU CHIFFRE DONNÉ PAR LE CLIENT].\nCe que je propose : [TON OFFRE, PÉRIMÈTRE, DÉLAI].\nLe prix : [MONTANT ET UNITÉ].\nPremière étape : [ACTION + DATE].\nStructure : 1 paragraphe problème, 1 paragraphe solution, 1 paragraphe prix, 1 ligne première étape.\nInterdits : présentation de mon entreprise, jargon, superlatifs, références inventées.\nPuis relis-la comme le [POSTE DU DÉCIDEUR] : liste les 3 questions qu'il se poserait et qui restent sans réponse."),
      check: [
        B("The first paragraph holds a number or a sentence that came from the client", "Le premier paragraphe contient un chiffre ou une phrase provenant du client"),
        B("Someone who was not at the meeting understands the problem in one reading", "Une personne absente du rendez-vous comprend le problème dès la première lecture"),
        B("The price is written plainly, with its unit", "Le prix est indiqué clairement, avec son unité"),
        B("The last line gives an action and a date, not \"feel free to reach out\"", "La dernière ligne indique une action et une date, et non « n'hésitez pas »"),
      ],
      bonus: B("Ask the model to play the CFO, who reads your proposal on the phone between two meetings and replies to your contact in three lines. That reply shows you what is missing.",
        "Demandez au modèle de jouer le directeur financier qui lit votre proposition sur son téléphone entre deux réunions et répond à votre contact en trois lignes. Sa réponse vous montre ce qui manque."),
    },
    more: [
      {
        q: B("Your proposal opens with \"Founded in 2008, our company...\". What do you do?",
          "Votre proposition commence par « Fondée en 2008, notre société... ». Que faites-vous ?"),
        options: [
          B("Add your client references right after", "Vous ajoutez vos références clients juste après"),
          B("Keep it, it builds trust", "Vous la conservez, car cela rassure"),
          B("Open on their problem and number", "Vous ouvrez sur leur problème et leur chiffre"),
        ],
        answer: 2,
        why: B("The decision-maker reads the first paragraph and decides whether to go on. If they find your history there, they do not find their problem. Your history can fit in one line at the end, or disappear.",
          "Le décideur lit le premier paragraphe et décide s'il poursuit. S'il y trouve votre histoire, il n'y trouve pas son problème. Votre historique peut tenir en une ligne à la fin, ou disparaître."),
      },
      {
        q: B("Your contact says \"perfect, I will pass it on\". Who must be able to defend the proposal?",
          "Votre contact vous dit « c'est parfait, je transmets ». Qui doit pouvoir défendre la proposition ?"),
        options: [
          B("You, by calling the decision-maker", "Vous, en appelant le décideur"),
          B("Your contact, with this page alone", "Votre contact, seul, avec cette page"),
          B("The procurement team", "Le service achats"),
        ],
        answer: 1,
        why: B("You will not be in the room where it is decided. Your contact will, with your page. If it answers the decision-maker's questions, it defends your deal for you.",
          "Vous ne serez pas présent lors de la décision ; votre contact le sera, avec votre page. Si celle-ci répond aux questions du décideur, elle défend votre dossier à votre place."),
      },
    ],
  },

  'sa-close/sa-price': {
    why: [
      B("After saying a price, silence feels unbearable, so we fill it: \"it pays for itself fast\", \"we can discuss it\". Each of those sentences sounds like an apology. It tells the client you expect them to object, so they do.",
        "Après l'annonce d'un prix, le silence paraît insupportable, et l'on cherche à le combler : « c'est vite rentabilisé », « on peut en discuter ». Or chacune de ces phrases sonne comme une excuse. Elle indique au client que vous attendez son objection, et il la formule donc."),
      B("Asked to \"help announce a price\", a model does the same: it writes a justification and often slips in a discount, because it tries to please. Use it differently. Make it play the client, and ask it to stop you whenever you justify before they have reacted.",
        "Si vous demandez à un modèle de « vous aider à annoncer un prix », il procède de la même façon : il rédige une justification et glisse souvent une remise, car il cherche à satisfaire. Utilisez-le autrement : faites-lui jouer le client, et demandez-lui de vous interrompre dès que vous justifiez le prix avant sa réaction."),
      B("The client's first reaction is information: silence while they calculate, a question about the scope, or \"that is more than planned\". Each one tells you where you stand. Prepare your answer about what the offer replaces, not about the number.",
        "La première réaction du client constitue une information : un silence le temps de calculer, une question sur le périmètre, ou « c'est plus que prévu ». Chacune vous indique où vous en êtes. Préparez votre réponse en vous appuyant sur ce que l'offre remplace, et non sur le chiffre."),
    ],
    example: {
      context: B("Nathalie, a freelance graphic designer, must announce 4,800 euros for a new visual identity to a restaurant owner. She prepares the call with AI.",
        "Nathalie, graphiste freelance, doit annoncer 4 800 euros à un restaurateur pour une nouvelle identité visuelle. Elle prépare l'appel avec l'IA."),
      before: B("Help me announce my price of 4,800 euros to a client without him finding it too expensive.",
        "Aide-moi à annoncer mon prix de 4 800 euros à un client sans qu'il le trouve trop cher."),
      after: B("You play Marc, owner of a 40-seat restaurant who wants a new logo, menu and sign. You are interested but careful with money.\nI will announce my price in one sentence: the number, what it includes, then I stop talking.\nReact like a real client: silence, a question, or an objection. One line at a time, then wait for my answer.\nIf I justify my price before you have spoken, or offer a discount you did not ask for, stop the role-play and tell me.\nAt the end, give me 3 remarks on how I announced the price.",
        "Tu joues Marc, patron d'un restaurant de 40 couverts qui veut un nouveau logo, un nouveau menu et une nouvelle enseigne. Tu es intéressé mais prudent avec l'argent.\nJe vais t'annoncer mon prix en une phrase : le chiffre, ce qu'il comprend, puis je me tais.\nRéagis comme un vrai client : un silence, une question, ou une objection. Une réplique à la fois, puis attends ma réponse.\nSi je justifie mon prix avant que tu aies parlé, ou si je propose une remise que tu n'as pas demandée, arrête le jeu et dis-le-moi.\nÀ la fin, donne-moi 3 remarques sur ma façon d'annoncer le prix."),
      takeaway: B("The first prompt asks for a sales pitch, so for a justification. The second makes Nathalie rehearse: she says the number, stops, and gets a real reaction. The model stops her as soon as she apologises for her price.",
        "Le premier prompt demande un argumentaire, donc une justification. Le second fait répéter Nathalie : elle énonce le chiffre, se tait et reçoit une réaction réelle. Le modèle l'interrompt dès qu'elle s'excuse de son prix."),
    },
    exercise: {
      goal: B("Your price sentence, rehearsed three times with a simulated client, and your answer ready for the first objection, based on what your offer replaces.",
        "Votre phrase d'annonce du prix, répétée trois fois face à un client simulé, et votre réponse à la première objection, fondée sur ce que votre offre remplace."),
      prompt: B("You play [CLIENT PROFILE: ROLE, COMPANY, SITUATION]. You are interested in [YOUR OFFER] but careful with the budget.\nI will announce my price: [AMOUNT + UNIT, e.g. \"1,200 euros per month\"].\nRules of the game:\n- one line at a time, then you wait\n- react like a real client: sometimes silence (write \"...\"), sometimes a question, sometimes an objection\n- if I justify my price before your reaction, or lower it without you asking, stop the game and point it out\n- if you object and I answer about the number instead of what it replaces for you, point that out too\nWe play 3 rounds. At the end, give me the clearest price sentence I said.",
        "Tu joues [PROFIL DU CLIENT : POSTE, ENTREPRISE, SITUATION]. Tu t'intéresses à [TON OFFRE] mais tu fais attention au budget.\nJe vais t'annoncer mon prix : [MONTANT + UNITÉ, par exemple « 1 200 euros par mois »].\nRègles du jeu :\n- une seule réplique à la fois, puis tu attends\n- réagis comme un vrai client : parfois un silence (écris « ... »), parfois une question, parfois une objection\n- si je justifie mon prix avant ta réaction, ou si je le baisse sans que tu le demandes, arrête le jeu et signale-le\n- si tu objectes et que je réponds sur le chiffre au lieu de ce que ça remplace chez toi, signale-le aussi\nOn fait 3 tours. À la fin, donne-moi la phrase de prix la plus nette que j'ai dite."),
      check: [
        B("Your price sentence is one sentence: the number, the unit, then nothing", "Votre annonce du prix tient en une phrase : le chiffre, l'unité, puis rien"),
        B("You held the silence at least once without filling it", "Vous avez tenu le silence au moins une fois sans le combler"),
        B("Your answer to the objection is about what your offer replaces, not the amount", "Votre réponse à l'objection porte sur ce que votre offre remplace, et non sur le montant"),
        B("You offered no discount the client did not ask for", "Vous n'avez proposé aucune remise que le client n'avait pas demandée"),
      ],
      bonus: B("Do the same rehearsal out loud with your tool's voice mode, if it has one. Silence is much harder to hold when you speak than when you type.",
        "Effectuez la même répétition à voix haute avec le mode vocal de votre outil, s'il en dispose. Le silence est bien plus difficile à tenir à l'oral qu'à l'écrit."),
    },
    more: [
      {
        q: B("You say \"It is 900 euros per month.\" The client says nothing for 5 seconds. What do you do?",
          "Vous dites « C'est 900 euros par mois. » Le client se tait pendant 5 secondes. Que faites-vous ?"),
        options: [
          B("Wait for them to speak", "Vous attendez qu'il parle"),
          B("Add that it pays for itself quickly", "Vous ajoutez que c'est vite rentabilisé"),
          B("Offer to split it into three payments", "Vous proposez un paiement en trois fois"),
        ],
        answer: 0,
        why: B("Five seconds feel long to you, not to them: they are calculating. Their first sentence will tell you whether the block is the amount, the budget or the timing. If you talk, you will never know.",
          "Cinq secondes vous paraissent longues, mais pas à lui : il calcule. Sa première phrase vous indiquera s'il bloque sur le montant, le budget ou le moment. Si vous parlez, vous ne le saurez jamais."),
      },
      {
        q: B("The client replies \"That is expensive.\" Which answer follows the method?",
          "Le client répond « C'est cher. » Quelle réponse respecte la méthode ?"),
        options: [
          B("\"I can do 800 as a gesture.\"", "« Je peux faire un geste à 800. »"),
          B("\"What does doing it in-house cost you today?\"", "« Aujourd'hui, combien vous coûte de le faire en interne ? »"),
          B("\"That is simply the going market rate, you know.\"", "« C'est simplement le prix du marché, vous savez. »"),
        ],
        answer: 1,
        why: B("Going back to what the offer replaces moves the discussion from the amount to a comparison. A discount, on the other hand, confirms your first price was not serious.",
          "Revenir à ce que l'offre remplace fait passer la discussion du montant à la comparaison. La remise, à l'inverse, confirme que votre premier prix n'était pas sérieux."),
      },
    ],
  },

  'sa-close/sa-after': {
    why: [
      B("On the day of signing, the client wants it to work. Three weeks later, their calendar is full and your project has slipped behind everything else. Renewal depends on what changed during that first month, not on what you say at renewal time.",
        "Le jour de la signature, le client veut que le projet réussisse. Trois semaines plus tard, son agenda est plein et votre projet est passé derrière tout le reste. Le renouvellement dépend donc de ce qui a changé au cours de ce premier mois, et non de ce que vous direz au moment de renouveler."),
      B("Ask for \"an onboarding plan\" and the model writes phases, teams and workshops: nobody in particular is responsible for anything. Ask for three dates with a first name on each. A first name is a person you can call on day seven if nothing has moved.",
        "Demandez « un plan d'onboarding » : le modèle rédige des phases, des équipes et des ateliers, si bien que personne n'est responsable de rien en particulier. Demandez plutôt trois dates, avec un prénom pour chacune. Un prénom désigne une personne que vous pouvez appeler au septième jour si rien n'a avancé."),
      B("One single action by day seven is the first proof that the purchase was worth it: calendars online, first invoice sent, first report read. Book the day-thirty review now, while the client still cares. A meeting already in the calendar takes place.",
        "Une seule action au septième jour constitue la première preuve que l'achat en valait la peine : agendas en ligne, première facture envoyée, premier rapport lu. Fixez immédiatement le bilan du trentième jour, tant que le client est motivé. Un rendez-vous déjà fixé, lui, a lieu."),
    ],
    example: {
      context: B("Laura sells an online booking tool. A physiotherapy practice with 4 physios has just signed. Her contact is Sandrine, the receptionist.",
        "Laura vend un outil de prise de rendez-vous en ligne. Un cabinet de 4 kinésithérapeutes vient de signer. Son interlocutrice est Sandrine, la secrétaire."),
      before: B("Make an onboarding plan for my new client.",
        "Fais un plan d'onboarding pour mon nouveau client."),
      after: B("My client just signed: a practice with 4 physiotherapists. My contact is Sandrine, the receptionist. The decision-maker is Julien Morel, one of the partners.\nWrite the first 30 days as 3 dates, with a name on each:\n- day 7: ONE single thing done on their side (the 4 physios' calendars are online and the link is on their website), and who does it, by name\n- day 15: what we check together, in 15 minutes\n- day 30: the review with Julien Morel, to be booked today\nFor each date: what I do, what they do, and the sign that it works (for example, appointments booked online without a phone call).\nThen write the email to Sandrine proposing these three dates. Formal \"vous\".",
        "Mon client vient de signer : un cabinet de 4 kinésithérapeutes. Ma contact est Sandrine, la secrétaire. Le décideur est Julien Morel, l'un des associés.\nÉcris les 30 premiers jours en 3 dates, avec un nom sur chacune :\n- J+7 : UNE seule chose faite chez eux (les agendas des 4 kinés sont en ligne et le lien est sur leur site), et qui la fait, par son nom\n- J+15 : ce qu'on vérifie ensemble, en 15 minutes\n- J+30 : le bilan avec Julien Morel, à caler dès aujourd'hui\nPour chaque date : ce que je fais, ce qu'ils font, et le signe que ça marche (par exemple, des rendez-vous pris en ligne sans appel au cabinet).\nPuis écris le mail à Sandrine qui propose ces trois dates. Vouvoiement."),
      takeaway: B("The first prompt gives a generic plan with \"teams\" and \"phases\". The second sets one thing for day 7, a name for each action and a day-30 review booked at signing, while the client still believes in it.",
        "Le premier prompt produit un plan générique, avec des « équipes » et des « phases ». Le second fixe une seule action à J+7, un nom pour chaque action et un bilan J+30 fixé dès la signature, pendant que le client est encore convaincu."),
    },
    exercise: {
      goal: B("The first-30-days plan for a client you just signed: three dates, three names, and the email that books the day-thirty review.",
        "Le plan des 30 premiers jours d'un client que vous venez de signer : trois dates, trois noms, et l'email qui fixe le bilan du trentième jour."),
      prompt: B("You are a customer success manager. My client [COMPANY] has just signed for [YOUR OFFER].\nMy contact: [FIRST NAME, ROLE]. The decision-maker: [FIRST NAME, ROLE].\nWhat they want to achieve, in their words: [THEIR GOAL].\nWrite their first 30 days as 3 dates:\n- day 7: one single thing they must have done, and the person on their side who does it, by name\n- day 15: a short checkpoint\n- day 30: a review with the decision-maker\nFor each date: my action, their action, the concrete sign that it is moving.\nIf I have not given a name, write \"to ask\" instead of inventing a department.\nEnd with an email to [CONTACT'S FIRST NAME] proposing these dates, with a precise slot for day 30. Formal \"vous\", 8 lines maximum.",
        "Tu es responsable de la réussite client. Mon client [ENTREPRISE] vient de signer pour [TON OFFRE].\nMon contact : [PRÉNOM, POSTE]. Le décideur : [PRÉNOM, POSTE].\nCe qu'ils veulent obtenir, avec leurs mots : [LEUR OBJECTIF].\nÉcris leurs 30 premiers jours en 3 dates :\n- J+7 : une seule chose qu'ils doivent avoir faite, et la personne qui la fait chez eux, par son nom\n- J+15 : un point de contrôle court\n- J+30 : un bilan avec le décideur\nPour chaque date : mon action, leur action, le signe concret que ça avance.\nSi je n'ai pas donné de nom, écris « à demander » au lieu d'inventer un service.\nTermine par un mail à [PRÉNOM DU CONTACT] qui propose ces dates, avec un créneau précis pour J+30. Vouvoiement, 8 lignes maximum."),
      check: [
        B("The day-7 step holds one single action, not a list", "L'étape J+7 contient une seule action, et non une liste"),
        B("Each step carries a first name, not \"the team\" or \"the department\"", "Chaque étape porte un prénom, et non « l'équipe » ou « le service »"),
        B("The day-30 review has a date and a time, not \"within a month\"", "Le bilan J+30 a une date et une heure, et non « d'ici un mois »"),
        B("The sign of progress is something you can see or count", "Le signe de progression est observable ou mesurable"),
      ],
      bonus: B("List your last five clients: what they had done after one week, and whether they renewed. Ask the model what sets apart those who stayed. That is your real day-seven action.",
        "Dressez la liste de vos cinq derniers clients : ce qu'ils avaient fait au bout d'une semaine, et s'ils ont renouvelé. Demandez au modèle ce qui distingue ceux qui sont restés. Vous obtenez ainsi votre véritable action du septième jour."),
    },
    more: [
      {
        q: B("Your plan says \"Day 7: sales team training\". What is missing?",
          "Votre plan indique « J+7 : formation de l'équipe commerciale ». Que manque-t-il ?"),
        options: [
          B("A longer, more detailed training session", "Une formation plus longue et plus détaillée"),
          B("The name of who runs it on their side", "Le nom de la personne qui l'organise chez le client"),
          B("A PDF training handout", "Un support de formation en PDF"),
        ],
        answer: 1,
        why: B("\"The team\" does not feel responsible. A first name does: it is a person you can call if nothing has moved by day seven.",
          "« L'équipe » ne se sent pas responsable, alors qu'une personne nommée l'est : c'est quelqu'un que vous pouvez appeler si rien n'a avancé au septième jour."),
      },
      {
        q: B("Why book the day-30 review on the day of signing?",
          "Pourquoi fixer le bilan J+30 le jour même de la signature ?"),
        options: [
          B("They are keen and their calendar is still open", "Le client est motivé et son agenda est encore libre"),
          B("Because the contract usually requires it to be set", "Parce que le contrat l'exige en général"),
          B("To invoice them faster", "Pour facturer plus vite"),
        ],
        answer: 0,
        why: B("On signing day, the client wants it to work. Three weeks later, their calendar is full and the subject has slipped behind the rest. A meeting already booked takes place.",
          "Le jour de la signature, le client veut que le projet réussisse. Trois semaines plus tard, son agenda est plein et le sujet est passé derrière le reste. Un rendez-vous déjà fixé, lui, a lieu."),
      },
    ],
  },

  /* ================================================================ */
  /* ASSISTANT · LE FLOT                                              */
  /* ================================================================ */

  'as-flow/as-inbox': {
    why: [
      B("Sorting by sender means deciding before reading. Sorting by request asks each message one question: what does it expect from me? There are only four answers: reply, do something, wait for someone, nothing.",
        "Trier par expéditeur revient à décider avant d'avoir lu. Trier par demande, en revanche, pose une seule question à chaque message : qu'attend-il de moi ? Il n'existe que quatre réponses : répondre, faire, attendre quelqu'un, rien."),
      B("A model sorts very well when the boxes are closed and defined. Give it the four piles with one definition each, and demand the action in four words. It can no longer write a summary: it has to decide. You then read one list, not thirty emails.",
        "Un modèle classe très bien lorsque les catégories sont fermées et définies. Fournissez-lui les quatre tas, chacun avec sa définition, et exigez l'action en quatre mots. Il ne peut alors plus rédiger de résumé : il doit trancher. Vous lisez ensuite une liste, et non trente emails."),
      B("Think of your inbox as a desk covered in paper. You throw away the flyers first, and only then do you see what is left. The \"nothing\" pile (newsletters, copies, notifications) goes first, and what remains is a list you can face.",
        "Représentez-vous votre boîte comme un bureau couvert de papiers : vous jetez d'abord les prospectus, et c'est seulement alors que vous voyez ce qui reste. Le tas « rien » (newsletters, copies, notifications) part donc en premier, et ce qui reste forme une liste que vous pouvez affronter."),
    ],
    example: {
      context: B("Amandine is an executive assistant in a building company. On Monday morning, 64 unread emails are waiting, half of them for her director.",
        "Amandine est assistante de direction dans une PME du bâtiment. Lundi matin, 64 emails non lus l'attendent, dont la moitié destinés à son directeur."),
      before: B("Here are my emails, tell me which ones are important.",
        "Voici mes mails, dis-moi lesquels sont importants."),
      after: B("You are my sorting assistant. Below are 30 lines: sender | subject | first sentence.\nPut each email in ONE of these 4 piles:\n- REPLY: someone expects a written answer from me or my director\n- DO: there is a task to carry out (book, send, pay, file)\n- WAIT: what happens next depends on someone else\n- NOTHING: information, copy, newsletter, notification\nFormat: a table no. | pile | action in 4 words maximum | deadline if written in the email.\nNever sort by sender. If you hesitate, write \"to check\" instead of choosing.\n(the 30 lines follow)",
        "Tu es mon assistant de tri. Voici 30 lignes : expéditeur | objet | première phrase.\nClasse chaque mail dans UN de ces 4 tas :\n- RÉPONDRE : quelqu'un attend une réponse écrite de moi ou de mon directeur\n- FAIRE : il y a une tâche à exécuter (réserver, envoyer, payer, classer)\n- ATTENDRE : la suite dépend de quelqu'un d'autre\n- RIEN : information, copie, newsletter, notification\nFormat : un tableau n° | tas | action en 4 mots maximum | échéance si elle est écrite dans le mail.\nNe classe jamais selon l'expéditeur. Si tu hésites, écris « à vérifier » au lieu de choisir.\n(les 30 lignes suivent)"),
      takeaway: B("\"Important\" means nothing to the model, so it invents a criterion, often the sender. With four defined piles and a four-word action, Amandine gets a list she can work through in order.",
        "« Important » ne signifie rien pour le modèle : il invente donc un critère, souvent l'expéditeur. Avec quatre tas définis et une action en quatre mots, Amandine obtient une liste qu'elle traite dans l'ordre."),
    },
    exercise: {
      goal: B("Your inbox sorted into four piles, the \"nothing\" pile deleted or archived, and a four-word action for everything else.",
        "Votre boîte de réception triée en quatre tas, le tas « rien » supprimé ou archivé, et une action en quatre mots pour tout le reste."),
      prompt: B("You are my sorting assistant. I am [YOUR ROLE] and I also handle the emails of [PERSON, IF RELEVANT].\nHere are my unread emails, one per line: sender | subject | first sentence.\n[PASTE 20 TO 30 LINES]\nPut each line in one pile only:\n- REPLY: someone expects a written answer\n- DO: there is a task to carry out\n- WAIT: what happens next depends on someone else (say who)\n- NOTHING: information, copy, newsletter, notification\nGive a table: no. | pile | action in 4 words maximum | deadline if it is written in the email.\nNever sort by sender. If you hesitate between two piles, write \"to check\".\nEnd with the number of emails in each pile.",
        "Tu es mon assistant de tri. Je suis [TON POSTE] et je gère aussi les mails de [PERSONNE, SI C'EST LE CAS].\nVoici mes mails non lus, un par ligne : expéditeur | objet | première phrase.\n[COLLE 20 À 30 LIGNES]\nClasse chaque ligne dans un seul tas :\n- RÉPONDRE : quelqu'un attend une réponse écrite\n- FAIRE : il y a une tâche à exécuter\n- ATTENDRE : la suite dépend de quelqu'un d'autre (précise qui)\n- RIEN : information, copie, newsletter, notification\nDonne un tableau : n° | tas | action en 4 mots maximum | échéance si elle est écrite dans le mail.\nNe trie jamais selon l'expéditeur. Si tu hésites entre deux tas, écris « à vérifier ».\nTermine par le nombre de mails dans chaque tas."),
      check: [
        B("Each email is in one pile only, with an action of four words maximum", "Chaque email figure dans un seul tas, avec une action de quatre mots au maximum"),
        B("You deleted or archived the \"nothing\" pile before reading the rest", "Vous avez supprimé ou archivé le tas « rien » avant de lire le reste"),
        B("No deadline was invented: each one is written in the email", "Aucune échéance n'a été inventée : chacune figure dans l'email"),
        B("You pasted nothing your company forbids you to give an AI tool", "Vous n'avez collé aucun email que votre entreprise interdit de confier à un outil IA"),
      ],
      bonus: B("Turn this prompt into a permanent setup: a project or custom assistant in your tool, if it offers one, with the four piles already defined. Each morning you paste, and it is sorted.",
        "Transformez ce prompt en réglage permanent : un projet ou un assistant personnalisé dans votre outil, s'il le permet, avec les quatre tas déjà définis. Chaque matin, il vous suffit de coller vos emails pour obtenir le tri."),
    },
    more: [
      {
        q: B("The model puts all your director's emails at the top, even a copy sent for information. What do you fix?",
          "Le modèle place en tête tous les emails de votre directeur, même une copie pour information. Que corrigez-vous ?"),
        options: [
          B("Add \"never sort by sender\"", "Vous ajoutez « ne trie jamais selon l'expéditeur »"),
          B("Nothing, the director comes first anyway", "Rien, le directeur passe avant de toute façon"),
          B("Ask for a sort by date instead", "Vous demandez plutôt un tri par date"),
        ],
        answer: 0,
        why: B("A copy for information is still a copy, even from the director: it goes in \"nothing\". What is asked of you is what counts, not who writes.",
          "Une copie pour information reste une copie, même si elle vient du directeur : elle va dans « rien ». Ce qui compte, c'est ce que l'on vous demande, et non l'identité de l'expéditeur."),
      },
      {
        q: B("An email says: \"I will get back to you as soon as I have the supplier's quote.\" Which pile?",
          "Un email indique : « Je reviens vers toi dès que j'ai le devis du fournisseur. » Dans quel tas le placez-vous ?"),
        options: [
          B("Reply", "Répondre"),
          B("Do", "Faire"),
          B("Wait", "Attendre"),
          B("Nothing", "Rien"),
        ],
        answer: 2,
        why: B("What happens next depends on the supplier, not on you. Note who you are waiting for and by when, so you can chase it. It is not \"nothing\": a missing quote can block a whole file.",
          "La suite dépend du fournisseur, et non de vous. Notez qui vous attendez et pour quand, afin de relancer si rien n'arrive. Ce n'est pas « rien » : un devis attendu peut bloquer tout un dossier."),
      },
    ],
  },

  'as-flow/as-agenda': {
    why: [
      B("A topic has no end. \"Lille renovation works\" can fill an hour, and the meeting stops when time runs out, not when something is decided. A question has an end: it is settled or it is not. \"Do we accept the plumber's quote or ask for another?\" stops as soon as someone decides.",
        "Un sujet n'a pas de fin. « Travaux de Lille » peut occuper une heure, et la réunion s'arrête lorsque l'heure est écoulée, et non lorsqu'une décision est prise. Une question, en revanche, a une fin : elle est tranchée ou non. « On accepte le devis du plombier ou on en demande un autre ? » s'arrête dès que quelqu'un tranche."),
      B("A model turns topics into questions well, if you give it the context you have and ask for three things per line: the question, the one person who decides, the minutes. When it cannot guess the decision, it should say so. You then know what to ask the organiser before the meeting, not during it.",
        "Un modèle transforme efficacement des sujets en questions si vous lui fournissez le contexte dont vous disposez et demandez trois éléments par ligne : la question, la personne qui tranche, la durée en minutes. Lorsqu'il ne peut pas deviner la décision attendue, il doit le signaler. Vous savez alors quoi demander à l'organisateur avant la réunion, et non pendant."),
      B("Anything with no decision becomes a five-line written note, sent the day before with the agenda. People arrive having read it, and knowing what they will have to decide. The meeting time goes to decisions only.",
        "Tout ce qui n'appelle pas de décision devient une note écrite de cinq lignes, envoyée la veille avec l'ordre du jour. Les participants arrivent en l'ayant lue et en sachant ce qu'ils devront trancher. Le temps de réunion est ainsi réservé aux décisions."),
    ],
    example: {
      context: B("Mathieu is assistant to the CEO of a chain of 8 hotels. He is preparing Thursday's management committee and has received a loose list of topics.",
        "Mathieu est assistant du directeur général d'une chaîne de 8 hôtels. Il prépare le comité de direction du jeudi et a reçu une liste de sujets en désordre."),
      before: B("Make an agenda for Thursday's management committee with: seminar budget, front desk hiring, Lille hotel works, CSR update.",
        "Fais un ordre du jour pour le comité de direction de jeudi avec : budget séminaire, recrutement réception, travaux hôtel de Lille, point RSE."),
      after: B("You are an executive assistant. Turn this list of topics into an agenda of decisions for a one-hour management committee.\nTopics: seminar budget, Lille front desk hiring, Lille hotel works, CSR update.\nFor each topic:\n- write the question to settle, phrased so it is answered by a choice (yes/no, A or B, an amount)\n- who decides, by role: CEO, CFO, operations director\n- how many minutes\nIf a topic calls for no decision, remove it and write instead a 5-line note to send beforehand.\nThe total must not exceed 50 minutes.\nIf you do not know which decision is expected, write the question I should ask the CEO.",
        "Tu es assistant de direction. Transforme cette liste de sujets en ordre du jour de décisions pour un comité de direction d'une heure.\nSujets : budget séminaire, recrutement réception Lille, travaux hôtel de Lille, point RSE.\nPour chaque sujet :\n- écris la question à trancher, formulée pour qu'on y réponde par un choix (oui/non, A ou B, un montant)\n- qui tranche, par son rôle : DG, DAF, directrice des opérations\n- combien de minutes\nSi un sujet n'appelle aucune décision, retire-le et rédige à la place une note de 5 lignes à envoyer avant.\nLe total ne doit pas dépasser 50 minutes.\nSi tu ne sais pas quelle décision est attendue, écris la question que je dois poser au DG."),
      takeaway: B("\"Lille works\" can last an hour. \"Do we accept the plumber's quote or ask for another?\" is settled in ten minutes. The CSR update, with no decision in it, becomes a note read before the meeting.",
        "« Travaux de Lille » peut durer une heure, alors que « On accepte le devis du plombier ou on en demande un autre ? » se tranche en dix minutes. Le point RSE, qui n'appelle pas de décision, devient une note lue avant la réunion."),
    },
    exercise: {
      goal: B("The agenda of your next meeting, where each line is a question with who decides and how many minutes, ready to send the day before.",
        "L'ordre du jour de votre prochaine réunion, dont chaque ligne est une question accompagnée de la personne qui tranche et du nombre de minutes, prêt à être envoyé la veille."),
      prompt: B("You are an executive assistant. Here are the topics planned for the [MEETING NAME] on [DATE], length [DURATION]:\n[PASTE THE LIST OF TOPICS, WITH THE CONTEXT YOU KNOW]\nFor each topic:\n1. Write the question to settle, answered by a choice (yes/no, A or B, a date, an amount).\n2. Say who decides (a name or a role, one person only).\n3. Give a duration in minutes.\nIf a topic calls for no decision, take it off the agenda and write a written note of 5 lines maximum to send with it.\nIf you cannot guess the expected decision, write the question I should ask the organiser.\nThe total must leave 10 minutes of margin.\nEnd with the email to send the day before, 5 lines maximum.",
        "Tu es assistant de direction. Voici les sujets prévus pour la réunion [NOM DE LA RÉUNION] du [DATE], durée [DURÉE] :\n[COLLE LA LISTE DES SUJETS, AVEC LE CONTEXTE QUE TU CONNAIS]\nPour chaque sujet :\n1. Écris la question à trancher, qui se répond par un choix (oui/non, A ou B, une date, un montant).\n2. Indique qui tranche (un nom ou un rôle, une seule personne).\n3. Donne une durée en minutes.\nSi un sujet n'appelle aucune décision, sors-le de l'ordre du jour et rédige une note écrite de 5 lignes maximum à envoyer avec.\nSi tu ne peux pas deviner la décision attendue, écris la question que je dois poser à l'organisateur.\nLe total doit laisser 10 minutes de marge.\nTermine par le mail d'envoi, à envoyer la veille, 5 lignes maximum."),
      check: [
        B("Each line ends with a question mark", "Chaque ligne se termine par un point d'interrogation"),
        B("Each question has one single person who decides", "Chaque question est tranchée par une seule personne"),
        B("Topics with no decision are out and go as a written note", "Les sujets sans décision sont retirés et envoyés sous forme de note écrite"),
        B("The total minutes leave a margin before the end", "Le total des minutes laisse une marge avant la fin"),
      ],
      bonus: B("After the meeting, paste the agenda and your notes. Ask which questions stayed unanswered: they open the next agenda, at the top.",
        "Après la réunion, collez l'ordre du jour et vos notes. Demandez quelles questions sont restées sans réponse : elles ouvriront le prochain ordre du jour, en première position."),
    },
    more: [
      {
        q: B("Your line says \"Update on the trade show\". Which version gets a decision?",
          "Votre ligne indique « Point sur le salon professionnel ». Quelle version conduit à une décision ?"),
        options: [
          B("\"Trade show: update and presentation by Julie (15 min)\"", "« Salon pro : point et présentation par Julie (15 min) »"),
          B("\"9 or 18 m² stand? Julie decides, 10 min\"", "« Stand de 9 ou 18 m² ? Julie tranche, 10 min »"),
          B("\"Trade show: round table\"", "« Salon pro : tour de table »"),
        ],
        answer: 1,
        why: B("A presentation or a round table has no end. A question with two options and one person who decides stops as soon as it has its answer.",
          "Une présentation ou un tour de table n'ont pas de fin. Une question comportant deux options et une personne qui tranche s'arrête, en revanche, dès qu'elle obtient sa réponse."),
      },
      {
        q: B("One topic is \"Quarterly results, for information\". What do you do with it?",
          "Un sujet s'intitule « Résultats du trimestre, pour information ». Que faites-vous ?"),
        options: [
          B("Give it 20 minutes at the start", "Vous lui accordez 20 minutes en début de réunion"),
          B("Put it last, if there is time left", "Vous le placez en dernier, s'il reste du temps"),
          B("Send it in writing, off the agenda", "Vous l'envoyez par écrit, hors ordre du jour"),
        ],
        answer: 2,
        why: B("Information is read in two minutes and needs nobody else to be understood. Reading it out in the meeting takes the time the decisions needed.",
          "Une information se lit en deux minutes et n'a besoin de personne pour être comprise. La lire à voix haute en réunion empiète sur le temps des décisions."),
      },
    ],
  },

  'as-flow/as-minutes': {
    why: [
      B("If you write down everything during the meeting, you stop listening, and the four decisions drown in an hour of talk. Note only two things live: what was decided, and who owns it. Before the end, read the decisions out loud. Corrections take ten seconds while everyone is still there.",
        "Si vous notez tout pendant la réunion, vous cessez d'écouter, et les quatre décisions se perdent dans une heure de discussion. Ne notez donc que deux éléments en direct : ce qui a été décidé, et qui en est responsable. Avant la fin, relisez les décisions à voix haute : une correction prend dix secondes tant que tout le monde est présent."),
      B("Afterwards, the model expands your notes into a clean record. Tell it to use your notes only. Otherwise it fills the gaps with something plausible: a deadline nobody gave, an owner nobody named. Ask for \"to be set\" wherever something is missing, so the gap stays visible.",
        "Ensuite, le modèle développe vos notes en un compte rendu soigné. Indiquez-lui de n'utiliser que vos notes ; sinon, il comble les lacunes avec des éléments plausibles : une échéance que personne n'a donnée, un responsable que personne n'a nommé. Demandez « à fixer » partout où un élément manque, afin que la lacune reste visible."),
      B("An automatic transcript does not replace your notes. In a long transcript, \"we could hire an intern\" and \"we will hire an intern\" look alike, and a model can take an idea for a decision. Your notes, confirmed in the room, are the reference.",
        "Une transcription automatique ne remplace pas vos notes. Dans une longue transcription, « on pourrait prendre un stagiaire » et « on prend un stagiaire » se ressemblent, et un modèle peut prendre une idée pour une décision. Vos notes, confirmées en séance, font donc référence."),
    ],
    example: {
      context: B("Chloé is an assistant in a real estate agency. She takes the notes at the Monday team meeting and has written five lines in her notebook.",
        "Chloé est assistante dans une agence immobilière. Elle prend les notes de la réunion d'équipe du lundi et a écrit cinq lignes dans son carnet."),
      before: B("Write me a report of this morning's team meeting.",
        "Fais-moi un compte rendu de la réunion d'équipe de ce matin."),
      after: B("Here are my notes from Monday's team meeting (7 people). These are the decisions read out loud at the end:\n- Victor-Hugo street listing: price cut proposed to the seller, Karim calls on Wednesday\n- professional photos for properties over 400k: yes, Chloé gets 2 quotes by Friday\n- Saturday shifts: November schedule done by Sophie\n- shop window: postponed to next meeting\nWrite the report from these notes only:\n1. Decisions (table: decision | owner | deadline)\n2. Postponed (with the reason if I noted it)\nAdd no decision, no name, no date. If a deadline is missing, write \"to be set\".\nNeutral tone, 1 page max, ready to send to the team.",
        "Voici mes notes de la réunion d'équipe de ce lundi (7 personnes). Ce sont les décisions relues à voix haute en fin de réunion :\n- mandat rue Victor-Hugo : baisse de prix proposée au vendeur, Karim appelle mercredi\n- photos pro pour les biens de plus de 400 000 euros : oui, Chloé demande 2 devis d'ici vendredi\n- permanences du samedi : planning de novembre fait par Sophie\n- vitrine : reportée à la prochaine réunion\nRédige le compte rendu à partir de ces notes uniquement :\n1. Décisions (tableau : décision | responsable | échéance)\n2. Reporté (avec la raison si je l'ai notée)\nN'ajoute aucune décision, aucun nom, aucune date. S'il manque une échéance, écris « à fixer ».\nTon neutre, 1 page maximum, prêt à envoyer à l'équipe."),
      takeaway: B("The first prompt has nothing to read, so the model invents a meeting. The second starts from decisions confirmed in the room: it formats them, and flags what is missing (Sophie's deadline) instead of filling it in.",
        "Le premier prompt n'a rien à lire : le modèle invente donc une réunion. Le second part des décisions confirmées en séance : il les met en forme et signale ce qui manque (l'échéance de Sophie) au lieu de le combler."),
    },
    exercise: {
      goal: B("The report of your next meeting, sent within the hour, built only from your notes of the decisions.",
        "Le compte rendu de votre prochaine réunion, envoyé dans l'heure, construit à partir de vos seules notes de décisions."),
      prompt: B("You are an executive assistant. Here are my notes from the [NAME] meeting on [DATE], with [PARTICIPANTS].\nI noted only the decisions and their owners, read out loud at the end of the meeting:\n[PASTE YOUR NOTES]\nWrite the report from these notes only:\n1. A table: decision | owner | deadline\n2. Postponed items, with the reason if I noted it\n3. Open questions, if any\nRules: add no decision, no name, no date. If an owner or a deadline is missing, write \"to be set\" in bold.\nNeutral tone, one page maximum.\nEnd with a 3-line cover email asking people to flag any error before [DEADLINE].",
        "Tu es assistant de direction. Voici mes notes de la réunion [NOM] du [DATE], avec [PARTICIPANTS].\nJ'ai noté uniquement les décisions et leurs responsables, relues à voix haute en fin de réunion :\n[COLLE TES NOTES]\nRédige le compte rendu à partir de ces notes uniquement :\n1. Un tableau : décision | responsable | échéance\n2. Les points reportés, avec la raison si je l'ai notée\n3. Les questions ouvertes, s'il y en a\nRègles : n'ajoute aucune décision, aucun nom, aucune date. S'il manque un responsable ou une échéance, écris « à fixer » en gras.\nTon neutre, une page maximum.\nTermine par un mail d'envoi de 3 lignes qui demande de signaler une erreur avant le [DATE LIMITE]."),
      check: [
        B("Every decision in the report is in your notes", "Chaque décision du compte rendu figure dans vos notes"),
        B("Every decision has an owner, or says \"to be set\"", "Chaque décision a un responsable, ou la mention « à fixer »"),
        B("The report went out the same day", "Le compte rendu a été envoyé le jour même"),
        B("You chased each \"to be set\" with the right person", "Vous avez relancé chaque « à fixer » auprès de la bonne personne"),
      ],
      bonus: B("If your meeting is transcribed and your company allows it, compare: ask the model for the decisions from the transcript, then set them against your notes. Note every idea it took for a decision.",
        "Si votre réunion est transcrite et que votre entreprise l'autorise, comparez : demandez au modèle les décisions à partir de la transcription, puis confrontez-les à vos notes. Notez chaque idée qu'il a prise pour une décision."),
    },
    more: [
      {
        q: B("The report says \"Decision: hire an intern\". In the meeting, someone only said \"we could\". What happened?",
          "Le compte rendu indique « Décision : prendre un stagiaire ». En réunion, on a seulement dit « on pourrait ». Que s'est-il passé ?"),
        options: [
          B("It took an idea for a decision", "Le modèle a pris une idée pour une décision"),
          B("The transcript was of poor quality", "La transcription était de mauvaise qualité"),
          B("The intern was approved later on", "Le stagiaire a été validé plus tard"),
        ],
        answer: 0,
        why: B("In an hour of talk, \"we could\" and \"we will\" look alike. Your notes of the decisions read out at the end are the only reliable source: the report starts from them.",
          "Dans une heure de discussion, « on pourrait » et « on fait » se ressemblent. Vos notes de décisions, relues en fin de réunion, constituent la seule source fiable : le compte rendu doit partir d'elles."),
      },
      {
        q: B("A decision has no owner in your notes. What should the report say?",
          "Une décision n'a pas de responsable dans vos notes. Que doit indiquer le compte rendu ?"),
        options: [
          B("The name of whoever raised it first", "Le nom de la personne qui l'a proposée"),
          B("\"To be set\", clearly visible", "« À fixer », bien visible"),
          B("Nothing: drop the decision", "Rien : on retire la décision"),
        ],
        answer: 1,
        why: B("A decision with no owner will not be carried out. A visible \"to be set\" forces someone to take it. A guessed name puts the task on someone who never accepted it.",
          "Une décision sans responsable ne sera pas exécutée. Un « à fixer » visible oblige quelqu'un à s'en charger, alors qu'un nom deviné attribue la tâche à une personne qui ne l'a jamais acceptée."),
      },
    ],
  },

  /* ================================================================ */
  /* ASSISTANT · LES DOCUMENTS                                        */
  /* ================================================================ */

  'as-docs/as-extract': {
    why: [
      B("When a model fills a field, it writes the most likely value. An empty field is unusual text, so it tends to put something plausible there: a 30-day due date, a standard amount. That value then looks exactly like the ones it really read.",
        "Lorsqu'un modèle remplit un champ, il écrit la valeur la plus probable. Or un champ vide constitue un texte inhabituel : le modèle tend donc à y placer une valeur plausible, comme une échéance à 30 jours ou un montant standard. Cette valeur ressemble ensuite trait pour trait à celles qu'il a réellement lues."),
      B("So give it the right to say nothing. Name the fields, give the expected format, and demand the word \"absent\" when the information is not written. Also ask where each value was read (page or section): you can then check any line in a few seconds.",
        "Accordez-lui donc le droit de ne rien dire. Nommez les champs, précisez le format attendu, et exigez le mot « absent » lorsque l'information n'est pas écrite. Demandez également où chaque valeur a été lue (page ou section) : vous pourrez alors vérifier n'importe quelle ligne en quelques secondes."),
      B("Check three documents by hand before trusting the rest. If those three are right, field by field, your list of fields is understood. If one is wrong, fix the prompt now, not once two hundred lines depend on it.",
        "Vérifiez trois documents à la main avant de vous fier aux autres. Si ces trois-là sont exacts, champ par champ, votre liste de champs a été comprise. Si l'un est erroné, corrigez le prompt immédiatement, et non lorsque deux cents lignes en dépendront."),
    ],
    example: {
      context: B("Nadia, executive assistant in an architecture firm, must record the key data of 40 subcontractor contracts before an audit.",
        "Nadia, assistante de direction dans un cabinet d'architectes, doit relever les informations clés de 40 contrats de sous-traitants avant un audit."),
      before: B("Extract the important information from these contracts.",
        "Extrais les infos importantes de ces contrats."),
      after: B("You extract information from subcontracting contracts. For EACH contract, fill in these fields and nothing else:\n- subcontractor: company name as written\n- purpose: 10 words maximum\n- amount excl. VAT: number in euros, as written\n- signature date: DD/MM/YYYY\n- end date: DD/MM/YYYY\n- insurance certificate attached: yes / no\nIf a piece of information is not written in the contract, write \"absent\". Deduce nothing, calculate nothing, complete nothing.\nFor each value, give the page where you read it.\nAnswer with a table, one row per contract.",
        "Tu extrais des informations de contrats de sous-traitance. Pour CHAQUE contrat, remplis ces champs, et rien d'autre :\n- sous-traitant : raison sociale telle qu'écrite\n- objet : 10 mots maximum\n- montant HT : nombre en euros, tel qu'écrit\n- date de signature : JJ/MM/AAAA\n- date de fin : JJ/MM/AAAA\n- attestation d'assurance jointe : oui / non\nSi une information n'est pas écrite dans le contrat, écris « absent ». Ne déduis rien, ne calcule rien, ne complète rien.\nPour chaque valeur, indique la page où tu l'as lue.\nRéponds par un tableau, une ligne par contrat."),
      takeaway: B("\"Important information\" lets the model choose and fill in. Named fields, a format and the word \"absent\" make every gap visible. With the page given, Nadia checks any value in seconds.",
        "« Infos importantes » laisse le modèle choisir et compléter. Des champs nommés, un format et le mot « absent » rendent chaque lacune visible. Grâce à la page citée, Nadia vérifie une valeur en quelques secondes."),
    },
    exercise: {
      goal: B("A clean table drawn from at least five of your real documents (invoices, contracts, quotes, order forms), gaps marked \"absent\" and three rows checked by hand.",
        "Un tableau propre tiré d'au moins cinq de vos documents réels (factures, contrats, devis, bons de commande), avec les lacunes marquées « absent » et trois lignes vérifiées à la main."),
      prompt: B("You extract information from [TYPE OF DOCUMENTS: invoices, contracts, quotes...].\nFor each document, fill in only these fields:\n[FIELD 1]: [EXPECTED FORMAT, e.g. DD/MM/YYYY]\n[FIELD 2]: [EXPECTED FORMAT]\n[FIELD 3]: [EXPECTED FORMAT]\nRules:\n- if the information is not written in the document, write \"absent\"\n- deduce nothing, calculate nothing, never reuse a value from another document\n- for each value, say where you read it (page or section)\nAnswer with a table: document | one column per field.\nAt the end, list the documents with at least one \"absent\".",
        "Tu extrais des informations de [TYPE DE DOCUMENTS : factures, contrats, devis...].\nPour chaque document, remplis uniquement ces champs :\n[CHAMP 1] : [FORMAT ATTENDU, par exemple JJ/MM/AAAA]\n[CHAMP 2] : [FORMAT ATTENDU]\n[CHAMP 3] : [FORMAT ATTENDU]\nRègles :\n- si l'information n'est pas écrite dans le document, écris « absent »\n- ne déduis rien, ne calcule rien, ne reprends jamais une valeur d'un autre document\n- pour chaque valeur, indique où tu l'as lue (page ou section)\nRéponds par un tableau : document | une colonne par champ.\nÀ la fin, liste les documents qui ont au moins un « absent »."),
      check: [
        B("You checked three documents by hand, field by field", "Vous avez vérifié trois documents à la main, champ par champ"),
        B("Each \"absent\" matches a real gap in the document", "Chaque « absent » correspond à une lacune réelle du document"),
        B("No value is calculated or deduced, even if it looks right", "Aucune valeur n'est calculée ou déduite, même si elle paraît juste"),
        B("You removed any personal data you are not allowed to give the tool", "Vous avez retiré les données personnelles que vous n'avez pas le droit de confier à l'outil"),
      ],
      bonus: B("Slip in on purpose a document with a missing date. If the table does not say \"absent\" there, your prompt still lets guesses through: make the rule stronger and run it again.",
        "Insérez volontairement un document dans lequel il manque une date. Si le tableau n'indique pas « absent » à cet endroit, votre prompt laisse encore passer des suppositions : renforcez la règle et recommencez."),
    },
    more: [
      {
        q: B("An invoice shows no due date. The model writes \"30 days\". What do you do?",
          "Une facture n'affiche pas d'échéance. Le modèle écrit « 30 jours ». Que faites-vous ?"),
        options: [
          B("Keep it, it is the usual term", "Vous conservez cette valeur : c'est le délai habituel"),
          B("Add: \"if missing, write absent\"", "Vous ajoutez : « si absent, écris absent »"),
          B("Work out the due date yourself", "Vous calculez vous-même l'échéance"),
        ],
        answer: 1,
        why: B("\"30 days\" is plausible, so nobody will ever check it. If the due date is missing, the supplier has to state it, and your table must show that it is missing.",
          "« 30 jours » est plausible : personne ne le vérifiera donc jamais. Si l'échéance manque, il revient au fournisseur de la préciser, et votre tableau doit montrer qu'elle est absente."),
      },
      {
        q: B("You run the extraction on 150 CVs. What do you do before using the table?",
          "Vous lancez l'extraction sur 150 CV. Que faites-vous avant d'utiliser le tableau ?"),
        options: [
          B("Ask the model whether it is sure", "Vous demandez au modèle s'il est sûr de lui"),
          B("Run the extraction a second time", "Vous relancez l'extraction une deuxième fois"),
          B("Check three CVs by hand", "Vous vérifiez trois CV à la main"),
        ],
        answer: 2,
        why: B("The model will always say it is sure, and a second run can repeat the same mistake. Three documents checked by hand show whether your fields are understood, before 150 rows depend on them.",
          "Le modèle se déclarera toujours sûr de lui, et une deuxième passe peut reproduire la même erreur. Trois documents vérifiés à la main montrent si vos champs sont compris, avant que 150 lignes en dépendent."),
      },
    ],
  },

  'as-docs/as-table': {
    why: [
      B("Free text cannot be counted. \"Appt\", \"appointment\" and \"booking for vaccine\" are three spellings of one thing, and a count by label gives three small numbers instead of one big one. Your manager's question, why do people call, stays unanswered.",
        "Du texte libre ne se compte pas. « RDV », « rendez-vous » et « prise de RDV vaccin » sont trois graphies d'une même chose, et un comptage par étiquette produit trois petits chiffres au lieu d'un seul, important. La question de votre responsable, à savoir pourquoi les gens appellent, reste alors sans réponse."),
      B("A closed list forces the model to choose among values you set. Asking it to copy them exactly makes every cell countable. Add one value, \"other\", with five words to say what it is: the model no longer needs to invent a label when a line does not fit.",
        "Une liste fermée oblige le modèle à choisir parmi des valeurs que vous avez fixées, et lui demander de les recopier à l'identique rend chaque cellule comptable. Ajoutez une valeur « autre », accompagnée de cinq mots de description : le modèle n'a plus besoin d'inventer une étiquette lorsqu'une ligne n'entre dans aucune catégorie."),
      B("\"Other\" is your alarm. If it gets large, a real category exists that your list did not name. Fix the list and run it again. Renaming rows one by one fixes this table, but not next month's.",
        "« Autre » constitue votre signal d'alarme. S'il grossit, c'est qu'une catégorie réelle existe sans que votre liste l'ait nommée. Corrigez la liste et relancez. Renommer les lignes une à une répare ce tableau-ci, mais pas celui du mois prochain."),
    ],
    example: {
      context: B("Élise works at the front desk of a veterinary clinic. She has three months of call notes in free text. Her manager wants to know why people call.",
        "Élise travaille à l'accueil d'une clinique vétérinaire. Elle dispose de trois mois de notes d'appels en texte libre. Son responsable souhaite savoir pourquoi les gens appellent."),
      before: B("Sort these call notes and tell me what comes up most.",
        "Classe ces notes d'appels et dis-moi ce qui revient le plus."),
      after: B("Here are 20 notes of calls received at the front desk, one per line (names removed).\nTurn them into a table with these columns:\n- reason: ONE value among: appointment | test result | emergency | invoice | medication | other\n- species: dog | cat | small pet | unknown\n- callback needed: yes | no\n- if reason = other: 5 words saying what it is about\nInvent no other value. No synonyms, no plurals: copy the values exactly as listed.\nAt the end, count the rows for each reason.",
        "Voici 20 notes d'appels reçus à l'accueil, une par ligne (noms retirés).\nTransforme-les en tableau avec ces colonnes :\n- motif : UNE valeur parmi : rendez-vous | résultat d'analyse | urgence | facture | médicament | autre\n- espèce : chien | chat | NAC | inconnu\n- rappel nécessaire : oui | non\n- si motif = autre : 5 mots pour dire de quoi il s'agit\nN'invente aucune autre valeur. Pas de synonymes, pas de pluriels : recopie les valeurs exactement comme dans la liste.\nÀ la fin, compte le nombre de lignes par motif."),
      takeaway: B("Without a closed list, you get \"appt\", \"appointment\" and \"vaccine booking\": three rows for one thing. Here every row can be counted, and the \"other\" column shows what the list forgot.",
        "Sans liste fermée, on obtient « RDV », « rendez-vous » et « rdv vaccin » : trois lignes pour une même chose. Ici, chaque ligne peut être comptée, et la colonne « autre » révèle ce que la liste a omis."),
    },
    exercise: {
      goal: B("A twenty-row table drawn from your own free text (requests, customer feedback, notes), with closed-value columns and a count per category.",
        "Un tableau de vingt lignes tiré de votre propre texte libre (demandes, retours clients, notes), avec des colonnes à valeurs fermées et un décompte par catégorie."),
      prompt: B("You turn free text into a table I can count.\nHere are [NUMBER] lines of [KIND OF TEXT: internal requests, customer feedback, call notes...]:\n[PASTE THE LINES]\nColumns, with the ONLY allowed values:\n- [COLUMN 1]: [VALUE A] | [VALUE B] | [VALUE C] | other\n- [COLUMN 2]: [ALLOWED VALUES]\n- detail: if you chose \"other\", 5 words saying what it is\nCopy the values exactly as written in the list, with no synonym or plural.\nAt the end:\n1. the number of rows for each value\n2. if \"other\" is above 15% of the rows, suggest the category or categories missing from my list.",
        "Tu transformes du texte libre en tableau que je pourrai compter.\nVoici [NOMBRE] lignes de [NATURE DU TEXTE : demandes internes, retours clients, notes d'appels...] :\n[COLLE LES LIGNES]\nColonnes, avec les SEULES valeurs permises :\n- [COLONNE 1] : [VALEUR A] | [VALEUR B] | [VALEUR C] | autre\n- [COLONNE 2] : [VALEURS PERMISES]\n- précision : si tu as choisi « autre », 5 mots pour dire ce que c'est\nRecopie les valeurs exactement comme dans la liste, sans synonyme ni pluriel.\nÀ la fin :\n1. le nombre de lignes par valeur\n2. si « autre » dépasse 15 % des lignes, propose la ou les catégories qui manquent à ma liste."),
      check: [
        B("Each cell holds a value from your list, spelled exactly the same", "Chaque cellule contient une valeur de votre liste, écrite à l'identique"),
        B("You read every row filed under \"other\"", "Vous avez lu toutes les lignes classées « autre »"),
        B("If \"other\" was large, you fixed the list, then ran it again", "Si « autre » était important, vous avez corrigé la liste, puis relancé"),
        B("The final count matches the number of lines you pasted", "Le décompte final correspond au nombre de lignes collées"),
      ],
      bonus: B("Paste the table into your spreadsheet and build a pivot table, for example reason by month. Notes nobody read have become a number your manager can follow.",
        "Collez le tableau dans votre tableur et créez un tableau croisé dynamique, par exemple motif par mois. Des notes que personne ne lisait deviennent ainsi un chiffre que votre responsable peut suivre."),
    },
    more: [
      {
        q: B("Your table has \"appt\", \"appointment\" and \"booking\". What do you fix?",
          "Votre tableau contient « RDV », « rendez-vous » et « prise de RDV ». Que corrigez-vous ?"),
        options: [
          B("Rename the rows one by one", "Vous renommez les lignes une par une"),
          B("Set a closed list of values, then rerun", "Vous imposez une liste fermée, puis relancez"),
          B("Ask the model to be more consistent overall", "Vous demandez au modèle d'être plus cohérent"),
        ],
        answer: 1,
        why: B("Renaming by hand repairs this table, not the next one. A closed list in the prompt prevents the problem every time, and your table stays comparable from one month to the next.",
          "Renommer à la main répare ce tableau-ci, mais pas le suivant. Une liste fermée dans le prompt prévient le problème à chaque fois, et votre tableau reste comparable d'un mois à l'autre."),
      },
      {
        q: B("You read the \"other\" rows: 8 out of 30 are quote requests. What do you do?",
          "Vous lisez les lignes « autre » : 8 sur 30 sont des demandes de devis. Que faites-vous ?"),
        options: [
          B("Add \"quote\" to the list and rerun", "Vous ajoutez « devis » à la liste et relancez"),
          B("Leave it, that is what other is for", "Vous laissez ainsi : « autre » est prévu pour cela"),
          B("Delete those rows from the table", "Vous supprimez ces lignes du tableau"),
        ],
        answer: 0,
        why: B("Eight rows out of thirty is a real category your list did not name. Add it: it is the only way to count it.",
          "Huit lignes sur trente constituent une catégorie réelle que votre liste ne nommait pas. Ajoutez-la : c'est le seul moyen de la compter."),
      },
    ],
  },

  'as-docs/as-template': {
    why: [
      B("What never changes in a document you keep retyping is already written, three times, in your past versions. A model compares texts well: give it three and it separates what is identical from what changes. The identical parts become the fixed text, the rest become named blanks.",
        "Ce qui ne change jamais dans un document que vous retapez figure déjà, trois fois, dans vos versions passées. Or un modèle compare efficacement des textes : fournissez-lui-en trois, et il distingue ce qui est identique de ce qui varie. Les parties identiques deviennent le texte fixe ; le reste devient des champs nommés."),
      B("A blank named [MANAGER] still leaves room for guessing: full name or first name? job title? Put an example in each blank, and keep one fully filled example next to the template. People copy what they see more faithfully than they follow instructions. Models do too: that is the idea behind few-shot.",
        "Un champ nommé [MANAGER] laisse encore place à l'interprétation : nom complet ou prénom ? avec le poste ? Placez un exemple dans chaque champ, et conservez un exemple entièrement rempli à côté du modèle. En effet, les gens reproduisent ce qu'ils voient plus fidèlement qu'ils ne suivent une notice. Il en va de même pour les modèles : c'est le principe du few-shot."),
      B("Start from your own versions, not from \"make me a template\". The model then keeps your phrasing, your sections and what your colleagues are used to reading, instead of producing an average document nobody recognises.",
        "Partez de vos propres versions, et non de « fais-moi un modèle ». Le modèle conserve alors vos formulations, vos rubriques et ce que vos collègues ont l'habitude de lire, au lieu de produire un document moyen que personne ne reconnaît."),
    ],
    example: {
      context: B("Sandrine, executive assistant in an 80-person manufacturing company, writes a welcome email for every new hire: hours, badge, parking, first day. Two a month, never the same way.",
        "Sandrine, assistante de direction dans une PME industrielle de 80 personnes, rédige un email d'accueil à chaque arrivée : horaires, badge, parking, premier jour. Deux par mois, jamais de la même façon."),
      before: B("Make me a welcome email template for new employees.",
        "Fais-moi un modèle de mail d'accueil pour les nouveaux salariés."),
      after: B("Here are three welcome emails I sent to new employees in recent months:\n(email 1)\n(email 2)\n(email 3)\n1. List what is identical or nearly so in all three: this will be the fixed text of the template.\n2. List what changes from one email to another: these become blanks named in CAPITALS in square brackets, for example [MANAGER NAME].\n3. Write the template.\n4. Next to it, write a filled example for a fictional new hire: Lucas, maintenance technician, starting on a Monday at 8 am.",
        "Voici trois mails d'accueil que j'ai envoyés à de nouveaux salariés ces derniers mois :\n(mail 1)\n(mail 2)\n(mail 3)\n1. Liste ce qui est identique ou presque dans les trois : ce sera le texte fixe du modèle.\n2. Liste ce qui change d'un mail à l'autre : ce seront des blancs nommés en MAJUSCULES entre crochets, par exemple [NOM DU MANAGER].\n3. Écris le modèle.\n4. À côté, écris un exemple rempli pour un arrivant fictif : Lucas, technicien de maintenance, qui arrive un lundi à 8 h."),
      takeaway: B("The first prompt invents a generic welcome email. The second starts from Sandrine's real emails: the model keeps her phrasing, leaves blank only what changes, and provides the example her colleagues will copy.",
        "Le premier prompt invente un email d'accueil générique. Le second part des emails réels de Sandrine : le modèle conserve ses formulations, ne laisse en blanc que ce qui varie, et fournit l'exemple que ses collègues reproduiront."),
    },
    exercise: {
      goal: B("A template for a document you often retype, with named blanks and a filled example, stored where you find it in ten seconds.",
        "Un modèle d'un document que vous retapez souvent, avec ses champs nommés et un exemple rempli, rangé à un endroit où vous le retrouvez en dix secondes."),
      prompt: B("You are an executive assistant. Here are 3 past versions of a document I often write: [TYPE OF DOCUMENT].\nVersion 1:\n[PASTE]\nVersion 2:\n[PASTE]\nVersion 3:\n[PASTE]\n1. List what is identical in the three versions: this will be the fixed text.\n2. List what changes: each item becomes a blank named in capitals in square brackets, with an example in brackets.\n3. Write the full template.\n4. Write a filled example, realistic, for a fictional case.\n5. Point out the parts that change for no reason from one version to another (greetings, order of paragraphs): propose a single version for each.\nKeep my phrasing. Add no section I did not have.",
        "Tu es assistant de direction. Voici 3 versions passées d'un document que je rédige souvent : [TYPE DE DOCUMENT].\nVersion 1 :\n[COLLE]\nVersion 2 :\n[COLLE]\nVersion 3 :\n[COLLE]\n1. Liste ce qui est identique dans les trois versions : ce sera le texte fixe.\n2. Liste ce qui change : chaque élément devient un blanc nommé en majuscules entre crochets, avec un exemple entre parenthèses.\n3. Écris le modèle complet.\n4. Écris un exemple rempli, réaliste, pour un cas fictif.\n5. Signale les passages qui changent sans raison d'une version à l'autre (formules de politesse, ordre des paragraphes) : propose une seule version pour chacun.\nGarde mes formulations. N'ajoute aucune rubrique que je n'avais pas."),
      check: [
        B("Each blank has a clear name and an example in brackets", "Chaque champ porte un nom clair et un exemple entre parenthèses"),
        B("The fixed text uses your phrasing, not the model's", "Le texte fixe reprend vos formulations, et non celles du modèle"),
        B("A colleague can fill the template without asking you anything", "Un collègue peut remplir le modèle sans vous poser de question"),
        B("The filled example is stored right next to the template", "L'exemple rempli est rangé juste à côté du modèle"),
      ],
      bonus: B("Give the template and the example to a colleague, with no explanation. Note every question they ask you: each one points to a badly named blank or a missing example.",
        "Remettez le modèle et l'exemple à un collègue, sans explication. Notez chaque question qu'il vous pose : chacune signale un champ mal nommé ou un exemple manquant."),
    },
    more: [
      {
        q: B("Two colleagues fill in your template. One writes \"Monday 3rd\", the other \"03/11 at 9:00\". What is missing?",
          "Deux collègues remplissent votre modèle. L'un écrit « lundi 3 », l'autre « 03/11 à 9h00 ». Que manque-t-il ?"),
        options: [
          B("A two-page guide on how to fill it", "Une notice de remplissage de deux pages"),
          B("A finished example next to it", "Un exemple rempli à côté du modèle"),
          B("An email reminder every time", "Un rappel par email à chaque fois"),
        ],
        answer: 1,
        why: B("Faced with a bare blank, everyone fills it their own way. A filled example shows the expected format at a glance, and people copy what they see.",
          "Face à un champ vide, chacun remplit à sa façon. Un exemple rempli montre le format attendu d'un coup d'œil, et les gens reproduisent ce qu'ils voient."),
      },
      {
        q: B("You ask \"make me a meeting report template\" and provide nothing. What is the risk?",
          "Vous demandez « fais-moi un modèle de compte rendu » sans rien fournir. Quel est le risque ?"),
        options: [
          B("A template too short to be useful", "Un modèle trop court pour être utile"),
          B("None, the model knows the formats", "Aucun, le modèle connaît les formats"),
          B("Something generic, not yours", "Un document générique, et non le vôtre"),
        ],
        answer: 2,
        why: B("Without your past versions, the model writes an average report. It loses your phrasing, your sections and what your team is used to reading. Three real examples give it all that.",
          "Sans vos versions passées, le modèle rédige un compte rendu moyen. Il perd vos formulations, vos rubriques et ce que votre équipe a l'habitude de lire. Trois exemples réels lui fournissent tous ces éléments."),
      },
    ],
  },

  /* ================================================================ */
  /* ASSISTANT · LE TEMPS DES AUTRES                                  */
  /* ================================================================ */

  'as-time/as-schedule': {
    why: [
      B("Asking six people when they are free gets you six lists that do not overlap, and a second round of emails. Scheduling is a problem of constraints. Once the constraints are written down, one person can solve it: you, with the model.",
        "Demander leurs disponibilités à six personnes vous procure six listes qui ne se recoupent pas, puis un deuxième tour d'emails. Fixer une réunion relève en effet d'un problème de contraintes. Une fois les contraintes écrites, une seule personne peut le résoudre : vous, avec le modèle."),
      B("The key constraint is who must attend and who can miss it. Give it to the model, with the busy slots copied from calendars, travel and time zones. Ask for three slots, ranked, each with who it inconveniences. You can then send a decision with one fallback, instead of a question.",
        "La contrainte clé consiste à savoir qui doit être présent et qui peut être absent. Fournissez-la au modèle, avec les créneaux occupés copiés des agendas, les déplacements et les fuseaux horaires. Demandez trois créneaux classés, chacun avec les personnes qu'il gêne. Vous pouvez alors envoyer une décision assortie d'une solution de repli, au lieu d'une question."),
      B("A model does not look at a calendar: it writes what is likely, and it can get a weekday wrong. Check every date and every weekday in your own calendar before sending. Trust the ranking, check the dates.",
        "Un modèle ne consulte pas de calendrier : il écrit ce qui est probable, et il peut se tromper de jour de la semaine. Vérifiez donc chaque date et chaque jour dans votre propre agenda avant d'envoyer. Fiez-vous au classement, mais vérifiez les dates."),
    ],
    example: {
      context: B("Julie, assistant to the sales director of a retail group, must set up a 90-minute meeting with six people, including two regional directors.",
        "Julie, assistante du directeur commercial d'un groupe de distribution, doit organiser une réunion d'une heure trente avec six personnes, dont deux directeurs régionaux."),
      before: B("When can I set up a meeting with 6 people next week?",
        "Quand est-ce que je peux caler une réunion avec 6 personnes la semaine prochaine ?"),
      after: B("I need to set up a 90-minute meeting next week.\nMust attend: Marc (sales director), Hélène (CFO), Yann (West regional director).\nNice to have, may be absent: Inès, Paul, Lina.\nConstraints:\n- Yann is on the road Monday and Tuesday; video call possible only after 5 pm on those days\n- Hélène: month-end closing until Wednesday noon, nothing before\n- Marc is busy all day Thursday\n- no meeting on Friday afternoon\nSuggest 3 slots, ranked. For each: who it inconveniences and why.\nThen write the invitation announcing slot 1 as a decision, with slot 2 as the fallback. Direct tone, between colleagues, 5 lines.",
        "Je dois caler une réunion d'une heure trente la semaine prochaine.\nIndispensables : Marc (directeur commercial), Hélène (DAF), Yann (directeur régional Ouest).\nSouhaitables, peuvent être absents : Inès, Paul, Lina.\nContraintes :\n- Yann est en tournée lundi et mardi ; visio possible uniquement après 17 h ces jours-là\n- Hélène : clôture comptable jusqu'à mercredi midi, rien avant\n- Marc est pris toute la journée de jeudi\n- pas de réunion le vendredi après-midi\nPropose 3 créneaux classés. Pour chacun : qui il dérange et pourquoi.\nPuis écris l'invitation qui annonce le créneau n° 1 comme une décision, avec le n° 2 en repli. Ton direct, entre collègues, 5 lignes."),
      takeaway: B("The first prompt gives no constraint, so the model can only suggest a poll. The second separates must-attend from nice-to-have: Julie sends a decision and, at worst, gets one objection.",
        "Le premier prompt ne fournit aucune contrainte : le modèle ne peut donc que conseiller un sondage. Le second distingue l'indispensable du souhaitable : Julie envoie une décision et reçoit, au pire, une seule objection."),
    },
    exercise: {
      goal: B("Three ranked slots for your next hard-to-schedule meeting, and the invitation that announces the first one as a decision.",
        "Trois créneaux classés pour votre prochaine réunion difficile à organiser, et l'invitation qui annonce le premier comme une décision."),
      prompt: B("You are an executive assistant. I need to schedule: [PURPOSE OF THE MEETING], length [DURATION], between [DATE] and [DATE].\nMust attend: [NAMES].\nNice to have, may miss it: [NAMES].\nKnown constraints: [TRAVEL, TIME ZONES, PART-TIME DAYS, FORBIDDEN SLOTS].\nBusy slots, copied from calendars: [LIST].\nSuggest 3 slots, ranked from best to worst. For each: the weekday AND the date, who it inconveniences, and why.\nUse only the information above. If a constraint is missing for you to decide, ask me.\nThen write the invitation: slot 1 announced as decided, slot 2 as the fallback, and a deadline to report a conflict. 5 lines maximum.",
        "Tu es assistant de direction. Je dois caler : [OBJET DE LA RÉUNION], durée [DURÉE], entre le [DATE] et le [DATE].\nIndispensables : [NOMS].\nSouhaitables, peuvent manquer : [NOMS].\nContraintes connues : [DÉPLACEMENTS, FUSEAUX HORAIRES, TEMPS PARTIELS, CRÉNEAUX INTERDITS].\nCréneaux déjà pris, copiés des agendas : [LISTE].\nPropose 3 créneaux, classés du meilleur au moins bon. Pour chacun : le jour de la semaine ET la date, qui il dérange, et pourquoi.\nN'utilise que les informations ci-dessus. S'il te manque une contrainte pour trancher, pose-moi la question.\nPuis écris l'invitation : le créneau n° 1 annoncé comme décidé, le n° 2 en repli, et une date limite pour signaler un empêchement. 5 lignes maximum."),
      check: [
        B("You checked in your calendar that each date falls on the weekday given", "Vous avez vérifié dans votre agenda que chaque date correspond bien au jour annoncé"),
        B("Each slot says clearly who it inconveniences", "Chaque créneau indique clairement les personnes qu'il gêne"),
        B("Everyone who must attend is free on slot 1", "Toutes les personnes indispensables sont libres sur le créneau n° 1"),
        B("The invitation announces a decision, not an open question", "L'invitation annonce une décision, et non une question ouverte"),
      ],
      bonus: B("Do the same exercise with people in two time zones, for example Paris and Montreal. Demand each person's local time in the invitation, and check it yourself.",
        "Refaites l'exercice avec des participants répartis sur deux fuseaux horaires, par exemple Paris et Montréal. Exigez l'heure locale de chacun dans l'invitation, et vérifiez-la vous-même."),
    },
    more: [
      {
        q: B("The model suggests \"Thursday the 16th\". In your calendar, the 16th is a Friday. What do you take from it?",
          "Le modèle propose « jeudi 16 ». Dans votre agenda, le 16 est un vendredi. Qu'en retenez-vous ?"),
        options: [
          B("Stop using AI for any scheduling at all", "Vous cessez d'utiliser l'IA pour vos agendas"),
          B("Check every date before sending", "Vous vérifiez chaque date avant d'envoyer"),
          B("It is rare, send it anyway", "C'est rare, vous envoyez tout de même"),
        ],
        answer: 1,
        why: B("A model can get a weekday wrong: it writes what is likely, it does not look at a calendar. The ranking stays useful, but every date is checked before it goes out.",
          "Un modèle peut se tromper de jour, car il écrit ce qui est probable sans consulter de calendrier. Le classement reste utile, mais chaque date doit être vérifiée avant l'envoi."),
      },
      {
        q: B("Lina cannot make any of the three slots. She is \"nice to have\". What do you do?",
          "Lina n'est disponible sur aucun des trois créneaux. Sa présence est « souhaitable ». Que faites-vous ?"),
        options: [
          B("Run a whole new round of availability checks", "Vous relancez un tour complet de disponibilités"),
          B("Push it back by a week", "Vous décalez d'une semaine"),
          B("Keep slot 1 and send her the minutes", "Vous conservez le n° 1 et lui envoyez le compte rendu"),
        ],
        answer: 2,
        why: B("You said in advance who could miss it: this is exactly the case it was for. Reopening the question for an optional person restarts six calendars.",
          "Vous avez indiqué à l'avance qui pouvait être absent, précisément pour ce cas. Rouvrir la question pour une personne facultative remettrait six agendas en jeu."),
      },
    ],
  },

  'as-time/as-voice': {
    why: [
      B("Ask for an email \"like my boss, professional\" and the model uses its own default voice: smooth, polite, a little long. People who know your boss notice it within two lines. The problem is not quality: the text is too polished to be theirs.",
        "Demandez un email « comme mon patron, professionnel » : le modèle adopte sa voix par défaut, lisse, polie, un peu longue. Les personnes qui connaissent votre patron le remarquent en deux lignes. Le problème ne tient pas à la qualité : le texte est simplement trop soigné pour être le sien."),
      B("Five messages the person wrote themselves hold the real rules: how they open, how they sign off, how long they write, tu or vous, the words they use and the ones they never use. Ask the model to describe those rules without improving them. A short list of rules is easier to check than any draft.",
        "Cinq messages rédigés par la personne elle-même contiennent les véritables règles : sa façon d'ouvrir et de signer, la longueur, « tu » ou « vous », les mots qu'elle emploie et ceux qu'elle n'emploie jamais. Demandez au modèle de décrire ces règles sans les améliorer. Une courte liste de règles se vérifie plus facilement qu'un brouillon."),
      B("Have the person approve the rules once. Every message after that follows them, and you stop submitting drafts one by one. Writing for someone is honest when they agree and know you do it: the approved rules make that agreement clear.",
        "Faites valider les règles une fois par la personne concernée. Tous les messages suivants les respectent, et vous cessez de soumettre les brouillons un par un. Écrire au nom de quelqu'un est honnête lorsqu'il y consent et sait que vous le faites : les règles validées rendent cet accord explicite."),
    ],
    example: {
      context: B("Sophie is assistant to Bernard, who runs a family transport company. He asks her to answer his long-standing clients' emails for him.",
        "Sophie est l'assistante de Bernard, dirigeant d'une entreprise familiale de transport. Il lui demande de répondre à sa place aux emails de ses clients historiques."),
      before: B("Answer this client as if my boss were writing, in a professional way.",
        "Réponds à ce client comme si c'était mon patron qui écrivait, de façon professionnelle."),
      after: B("Here are 5 emails Bernard wrote himself to clients (not written by me):\n(the 5 emails)\nBefore writing anything, derive his writing rules:\n- how he opens and how he signs off\n- average length, in lines\n- tu or vous, depending on who\n- words and phrases he uses often, and those he never uses\n- his punctuation (exclamation marks, capitals, abbreviations)\nPresent these rules in 10 lines maximum. I will have Bernard approve them.\nDo not improve his style: describe it.",
        "Voici 5 mails écrits par Bernard lui-même à des clients (pas par moi) :\n(les 5 mails)\nAvant d'écrire quoi que ce soit, tires-en ses règles d'écriture :\n- comment il ouvre et comment il signe\n- longueur moyenne, en lignes\n- tutoiement ou vouvoiement, selon qui\n- les mots et tournures qu'il emploie souvent, et ceux qu'il n'emploie jamais\n- sa ponctuation (points d'exclamation, majuscules, abréviations)\nPrésente ces règles en 10 lignes maximum. Je les ferai valider par Bernard.\nN'améliore pas son style : décris-le."),
      takeaway: B("\"Professional\" gives the model's standard voice, which Bernard's clients spot at once. The second prompt starts from his real emails and produces rules Bernard approves once and for all.",
        "« Professionnel » produit la voix standard du modèle, que les clients de Bernard repèrent immédiatement. Le second prompt part de ses emails réels et produit des règles que Bernard valide une fois pour toutes."),
    },
    exercise: {
      goal: B("The style sheet of the person you write for, approved by them, and a first message drafted with those rules.",
        "La fiche de style de la personne pour laquelle vous écrivez, validée par elle, et un premier message rédigé selon ces règles."),
      prompt: B("You help me write on behalf of [FIRST NAME, ROLE], with their agreement.\nHere are 5 messages this person wrote themselves:\n[PASTE THE 5 MESSAGES]\nStep 1: derive a style sheet of 10 lines maximum:\n- opening and sign-off\n- usual length\n- tu or vous, depending on the recipient\n- frequent words and phrases, and what this person never writes\n- punctuation and habits (abbreviations, capitals, emojis)\nDescribe the style, do not improve it.\nStep 2: wait until I tell you \"sheet approved\".\nStep 3: write the reply to this message, applying the sheet:\n[PASTE THE MESSAGE RECEIVED]",
        "Tu m'aides à écrire au nom de [PRÉNOM, POSTE], avec son accord.\nVoici 5 messages écrits par cette personne elle-même :\n[COLLE LES 5 MESSAGES]\nÉtape 1 : tires-en une fiche de style de 10 lignes maximum :\n- ouverture et signature\n- longueur habituelle\n- tutoiement ou vouvoiement, selon les destinataires\n- mots et tournures fréquents, et ce que cette personne n'écrit jamais\n- ponctuation et habitudes (abréviations, majuscules, emojis)\nDécris son style, ne l'améliore pas.\nÉtape 2 : attends que je te dise « fiche validée ».\nÉtape 3 : écris la réponse à ce message en appliquant la fiche :\n[COLLE LE MESSAGE REÇU]"),
      check: [
        B("The 5 messages were written by the person, not by you", "Les 5 messages ont été rédigés par la personne, et non par vous"),
        B("The sheet describes and does not correct: the quirks are in it too", "La fiche décrit sans corriger : les particularités de style y figurent aussi"),
        B("The person approved the sheet before your first message went out", "La personne a validé la fiche avant votre premier envoi"),
        B("Your draft is the same length as their real messages", "Votre brouillon a la même longueur que ses messages réels"),
      ],
      bonus: B("Mix your draft with two of their real messages and have a colleague who knows them well read all three. If they spot yours, ask how, and add that rule to the sheet.",
        "Mélangez votre brouillon avec deux de ses messages réels et faites lire les trois à un collègue qui la connaît bien. S'il identifie le vôtre, demandez-lui comment, et ajoutez la règle correspondante à la fiche."),
    },
    more: [
      {
        q: B("Your director writes 2-line emails with no greeting. The model produces 8 careful lines. What do you do?",
          "Votre directrice écrit des emails de 2 lignes, sans formule de politesse. Le modèle en produit 8, très soignées. Que faites-vous ?"),
        options: [
          B("Keep it, it is more professional", "Vous conservez cette version, plus professionnelle"),
          B("Ask the model to sound a lot more natural", "Vous demandez au modèle d'être plus naturel"),
          B("Add to the sheet: \"2 lines, no greeting\"", "Vous ajoutez à la fiche : « 2 lignes, pas de formule »"),
        ],
        answer: 2,
        why: B("An email that is too polished shows it is not hers. \"More natural\" stays vague. A precise rule, the length and no greeting, is followed in every message.",
          "Un email trop soigné révèle qu'il ne vient pas d'elle. « Plus naturel » reste vague, alors qu'une règle précise (la longueur, l'absence de formule) est respectée à chaque message."),
      },
      {
        q: B("Why use messages she wrote herself, and not the ones you wrote for her?",
          "Pourquoi utiliser des messages qu'elle a rédigés elle-même, et non ceux que vous avez rédigés pour elle ?"),
        options: [
          B("Yours carry your voice, not hers", "Les vôtres portent votre voix, et non la sienne"),
          B("Hers are usually the more recent ones", "Les siens sont en général plus récents"),
          B("Hers are better written", "Les siens sont mieux écrits"),
        ],
        answer: 0,
        why: B("If you start from your own drafts, the sheet describes your style. Only her own messages hold her real habits.",
          "Si vous partez de vos propres brouillons, la fiche décrit votre style. Seuls les messages qu'elle a elle-même rédigés contiennent ses véritables habitudes."),
      },
    ],
  },

  'as-time/as-never': {
    why: [
      B("When you paste a document into an AI tool, it leaves your computer and goes to the provider's servers. What happens next depends on the tool, your account and its settings: some keep conversations, some can use them to improve their models. Personal data about other people is also covered by the GDPR.",
        "Lorsque vous collez un document dans un outil IA, il quitte votre ordinateur pour les serveurs du provider. La suite dépend de l'outil, de votre compte et de ses réglages : certains conservent les conversations, d'autres peuvent s'en servir pour améliorer leurs modèles. Les données personnelles de tiers relèvent en outre du RGPD."),
      B("Draw the line in advance, because in the moment there is always a good reason for an exception: the director is waiting, it is Friday at 5 pm. A written list removes the decision. You no longer weigh the case: you check the list.",
        "Fixez la limite à l'avance, car sur le moment il existe toujours une bonne raison de faire une exception : le directeur attend, il est vendredi 17 h. Une liste écrite supprime la décision : vous ne pesez plus le cas, vous consultez la liste."),
      B("Three categories are enough: never, anonymised only, allowed with a given tool. Anonymising means removing everything that identifies someone: the name, but also the address, the date of birth, the file number. When in doubt, it is never.",
        "Trois catégories suffisent : jamais, anonymisé uniquement, autorisé avec tel outil. Anonymiser signifie retirer tout ce qui permet d'identifier une personne : le nom, mais aussi l'adresse, la date de naissance, le numéro de dossier. En cas de doute, la réponse est jamais."),
    ],
    example: {
      context: B("Céline is assistant to the director of a private clinic. One Friday at 5 pm, she has to summarise a dispute file with a patient, and she is tempted to paste it into a chatbot.",
        "Céline est assistante du directeur d'une clinique privée. Un vendredi à 17 h, elle doit résumer un dossier de litige avec un patient, et elle est tentée de le coller dans un chatbot."),
      before: B("Summarise this lawyer's letter about the dispute with Mr Dupont, a patient operated on in March, for my director.\n(letter pasted in full)",
        "Résume ce courrier d'avocat sur le litige avec M. Dupont, patient opéré en mars, pour mon directeur.\n(courrier collé en entier)"),
      after: B("I am an executive assistant in a private clinic. Help me write my rule for using AI tools, BEFORE I need it.\nDocuments I handle every week: patient letters, dispute files, care staff schedules, supplier invoices, management committee minutes, internal memos, job ads.\nFor each type, classify it:\n- NEVER: does not leave, even anonymised\n- ANONYMISED: only after removing names, dates of birth, addresses and any identifying detail\n- ALLOWED: with the tool approved by the clinic\nGive a one-line reason for each. Give no final legal advice: flag what I must have confirmed by management or the DPO (data protection officer).",
        "Je suis assistante de direction dans une clinique privée. Aide-moi à écrire ma règle d'usage des outils IA, AVANT d'en avoir besoin.\nDocuments que je manipule chaque semaine : courriers de patients, dossiers de litige, plannings des soignants, factures fournisseurs, comptes rendus du comité de direction, notes de service, offres d'emploi.\nPour chaque type, classe-le :\n- JAMAIS : ne sort pas, même anonymisé\n- ANONYMISÉ : seulement après avoir retiré noms, dates de naissance, adresses et tout détail qui identifie\n- AUTORISÉ : avec l'outil validé par la clinique\nDonne la raison en une ligne pour chacun. Ne donne aucun avis juridique définitif : signale ce que je dois faire confirmer par la direction ou le DPO (délégué à la protection des données)."),
      takeaway: B("The first prompt sends a named patient's health data on a Friday evening, because it was urgent. The second draws the line calmly: on the day of the dispute, Céline has nothing to decide, she applies her list.",
        "Le premier prompt transmet les données de santé d'un patient nommé, un vendredi soir, parce que c'était urgent. Le second fixe la limite à froid : le jour du litige, Céline n'a plus rien à décider, elle applique sa liste."),
    },
    exercise: {
      goal: B("Your AI usage rule on one page: your document types sorted into never, anonymised or allowed, with the permitted tool for each case.",
        "Votre règle d'usage de l'IA sur une page : vos types de documents classés en jamais, anonymisé ou autorisé, avec l'outil permis pour chaque cas."),
      prompt: B("Help me write my personal rule for using AI tools at work. I am [YOUR ROLE] in [TYPE OF COMPANY].\nTools I use or that the company allows: [TOOLS, AND WHETHER THE ACCOUNTS ARE PERSONAL OR PROFESSIONAL].\nTypes of documents I handle: [LIST: emails, contracts, HR, finance, clients...].\nFor each type:\n1. Classify it: NEVER, ANONYMISED (after removing the data that identifies someone) or ALLOWED (with which tool).\n2. Give the reason in one line: personal data, confidentiality, trade secret, legal obligation.\n3. For ANONYMISED: list what must be removed or replaced.\nPut the simple rule at the top: when in doubt, it is NEVER.\nFlag what I must have confirmed by my management or the DPO (data protection officer). Give no final legal opinion.\nProduce one page I can print.",
        "Aide-moi à écrire ma règle personnelle d'usage des outils IA au travail. Je suis [TON POSTE] dans [TYPE D'ENTREPRISE].\nLes outils que j'utilise ou que l'entreprise autorise : [OUTILS, ET S'IL S'AGIT DE COMPTES PERSONNELS OU PROFESSIONNELS].\nLes types de documents que je manipule : [LISTE : mails, contrats, RH, finances, clients...].\nPour chaque type :\n1. Classe-le : JAMAIS, ANONYMISÉ (après avoir retiré les données qui identifient quelqu'un) ou AUTORISÉ (avec quel outil).\n2. Donne la raison en une ligne : données personnelles, confidentialité, secret des affaires, obligation légale.\n3. Pour ANONYMISÉ : liste ce qu'il faut retirer ou remplacer.\nMets en tête la règle simple : dans le doute, c'est JAMAIS.\nSignale ce que je dois faire confirmer par ma direction ou le DPO (délégué à la protection des données). Ne donne aucun avis juridique définitif.\nRends une page que je peux imprimer."),
      check: [
        B("Every document with someone else's personal data is in NEVER or ANONYMISED", "Tout document contenant des données personnelles de tiers est classé JAMAIS ou ANONYMISÉ"),
        B("Each ALLOWED type names a precise tool, not just \"AI\"", "Chaque type AUTORISÉ nomme un outil précis, et pas seulement « l'IA »"),
        B("You can say in one sentence what you remove to anonymise", "Vous savez expliquer en une phrase ce que vous retirez pour anonymiser"),
        B("Your list is written down and within reach, not only in your head", "Votre liste est écrite et à portée de main, et non seulement mémorisée"),
      ],
      bonus: B("Have your page approved by your manager or the DPO, then share it with your team. A shared rule stops each person from drawing their own line on a rushed afternoon.",
        "Faites valider votre page par votre responsable ou le DPO, puis proposez-la à votre équipe. Une règle commune évite que chacun fixe sa propre limite un après-midi de forte pression."),
    },
    more: [
      {
        q: B("Your director urgently asks you to summarise an HR report with employees' names. Your list says NEVER. What do you do?",
          "Votre directeur vous demande de résumer en urgence un rapport RH nommant des salariés. Votre liste indique JAMAIS. Que faites-vous ?"),
        options: [
          B("Do it this once, it is urgent", "Vous le faites cette fois, car c'est urgent"),
          B("Summarise it yourself, and say why", "Vous le résumez vous-même, et expliquez pourquoi"),
          B("Use a different, less well-known AI tool", "Vous passez par un autre outil IA, moins connu"),
        ],
        answer: 1,
        why: B("The list exists for exactly this moment. Changing tools does not change the problem: the data still leaves. Explaining your rule to your director makes it legitimate for next time.",
          "La liste existe précisément pour ce moment. Changer d'outil ne résout pas le problème : les données sortent tout de même. Expliquer votre règle à votre directeur la rend légitime pour la prochaine fois."),
      },
      {
        q: B("Your list puts client emails in ANONYMISED. You want one reworded; it has a name, address and contract number. What do you do?",
          "Votre liste classe les emails clients en ANONYMISÉ. Vous souhaitez en reformuler un, avec nom, adresse et n° de contrat. Que faites-vous ?"),
        options: [
          B("Swap them for tags like [CLIENT]", "Vous les remplacez par des repères comme [CLIENT]"),
          B("Paste it as is, the tool is secure", "Vous collez tel quel : l'outil est sécurisé"),
          B("Just remove the name", "Vous retirez seulement le nom"),
        ],
        answer: 0,
        why: B("The name alone is not enough: an address or a contract number also identifies the client. Replace each piece of data with a tag, and put the real values back afterwards, in your email tool.",
          "Le nom seul ne suffit pas : une adresse ou un numéro de contrat permettent aussi d'identifier le client. Remplacez chaque donnée par un repère, puis réintroduisez les vraies valeurs dans votre messagerie."),
      },
    ],
  },
}
