// LE COURS, POUR QUELQU'UN QUI N'A JAMAIS RIEN CONSTRUIT.
//
// Les douze cas d'usage (./agentUseCases) disent ce qu'un agent FAIT, ce qui
// est dur, et les quatre étapes du parcours. C'était écrit pour quelqu'un qui
// sait déjà de quoi on parle : « force the quote », « ban taste », « write the
// schema first ». Un débutant lit ça et n'a aucune idée de par où commencer.
//
// Ce fichier porte ce qui manquait, et rien d'autre :
//
//   · un PRÉAMBULE par agent · ce que c'est en une phrase sans jargon, une
//     comparaison avec quelque chose de connu, ce qu'il faut avoir sous la
//     main, et les mots qu'on va employer et qu'il ne connaît pas
//   · pour CHAQUE étape · pourquoi elle existe, les gestes concrets, un
//     exemple RATÉ et le même RÉUSSI, et ce que le maître dit en la validant
//
// L'EXEMPLE RATÉ N'EST PAS DÉCORATIF. C'est la partie que les cours sautent,
// et c'est celle qui apprend : montrer une bonne réponse enseigne à la
// reconnaître, montrer la mauvaise à côté enseigne à la produire. Chaque paire
// ici est du texte qu'on pourrait vraiment écrire, pas une caricature.
//
// POURQUOI UN FICHIER À PART. agentUseCases est la colonne vertébrale : douze
// entrées, lues par la salle, le plan du site, les gardes et la page. Y verser
// quatre fois plus de prose l'aurait rendu illisible, et c'est le fichier qu'on
// ouvre pour savoir ce que le produit contient. La garde test-usecases vérifie
// que les deux ne divergent jamais : chaque agent a son préambule, chaque étape
// sa leçon, et aucune leçon n'est orpheline.
import { USE_CASES } from './agentUseCases'

/** Un mot de métier, et ce qu'il veut dire en français courant. */
export interface Word {
  term: string
  says: string
}

/** Ce qu'il faut avoir compris avant la première étape. */
export interface Primer {
  /** ce que fait cet agent, en une phrase, sans un seul mot de métier */
  plain: string
  /** une comparaison avec un métier ou un objet que tout le monde connaît */
  like: string
  /** ce qu'il faut avoir sous la main pour commencer · concret, vérifiable */
  need: string[]
  /** les mots qu'on va employer · trois au plus, sinon c'est un glossaire */
  words: Word[]
}

/** L'animation qui illustre une étape. Six familles, pas quarante-huit : ce
 *  qu'on fait à l'étape deux d'un agent de tri et à l'étape deux d'un agent
 *  d'extraction est la MÊME chose, poser une contrainte, et un dessin par
 *  étape aurait donné quarante-huit illustrations à maintenir dont personne
 *  n'aurait vérifié aucune. */
export type StageId = 'define' | 'constrain' | 'expose' | 'test' | 'measure' | 'bound'

export interface StepLesson {
  /** pourquoi cette étape existe · ce qui casse si on la saute */
  why: string
  /** les gestes, dans l'ordre · on doit pouvoir les faire en les lisant */
  how: string[]
  /** ce qu'un débutant écrit spontanément, et qui ne marche pas */
  bad: string
  /** la même chose, écrite correctement */
  good: string
  /** ce qui change entre les deux, nommé */
  note: string
  stage: StageId
  /** ce que le maître dit en validant l'étape · court, et pas une flatterie */
  reward: string
}

/** LE FRANÇAIS D'UNE LEÇON, dans la même entrée que l'anglais.
 *
 *  Il porte la leçon ENTIÈRE, pas champ par champ : un primer à moitié
 *  traduit et quatre étapes anglaises donneraient une fiche bilingue, ce qui
 *  se lit comme une page cassée. La garde vérifie donc la leçon entière ou
 *  rien · voir scripts/test-i18n. */
export interface LessonFr {
  primer: Primer
  steps: Array<Omit<StepLesson, 'stage'>>
}

export interface Lesson {
  primer: Primer
  steps: StepLesson[]
  fr?: LessonFr
}

/** UNE LEÇON DANS LA LANGUE LUE · le seul chemin, comme useCaseIn pour les
 *  cas d'usage. Le `stage` n'est pas traduit : c'est l'identifiant d'une
 *  famille d'animation, pas un texte. */
export function lessonIn(l: Lesson, lang: 'en' | 'fr'): Lesson {
  if (lang !== 'fr' || !l.fr) return l
  return {
    ...l,
    primer: l.fr.primer,
    steps: l.steps.map((s, i) => ({ ...(l.fr!.steps[i] ?? s), stage: s.stage })),
  }
}

export const LESSONS: Record<string, Lesson> = {
  /* ---------------------------------------------------------------- */
  research: {
    primer: {
      plain: 'It reads a pile of documents for you and answers a question, and for every sentence it writes, it can show you where it read that.',
      like: 'A diligent research assistant who highlights the page before telling you what it says. The highlighting is the whole job. Without it you have an assistant who sounds sure.',
      need: [
        'A question you actually want answered, written in one sentence.',
        'Three or four real documents. Yours, not samples.',
        'One document that does NOT answer the question, kept aside for the last step.',
      ],
      words: [
        { term: 'Source', says: 'A document you would be willing to show someone who doubted you.' },
        { term: 'Hallucination', says: 'When the model writes something plausible that it did not read anywhere. It looks exactly like the true parts.' },
        { term: 'Verbatim', says: 'Copied word for word, not summarised.' },
      ],
    },
    steps: [
      {
        why: 'A model asked to "use sources" will call anything a source: a blog post, its own memory, a sentence it just wrote. If you have not said what counts, it decides for you, and it decides generously.',
        how: [
          'Write down the kinds of document you WOULD accept: a signed contract, a published paper, a page of your own docs.',
          'Write down the kinds you would not: a forum answer, an undated page, anything you cannot open.',
          'Read the two lists to a colleague. If they can apply them without asking you a question, they are done.',
        ],
        bad: 'Use reliable sources.',
        good: 'A source is a document I can open at a URL or a file path, that carries a date, and that I could send to a customer. Forum posts, marketing pages and undated PDFs are not sources.',
        note: 'The first is an adjective and costs you tokens for nothing: "reliable" means nothing to a model. The second is a test anyone can apply, including the model.',
        stage: 'define',
        reward: 'You have written a rule a stranger could apply. That is rarer than it sounds.',
      },
      {
        why: 'Left alone, a model summarises. Summarising is where inventions creep in, because a summary that fills a small gap reads better than one that stops. Forcing a quote removes the gap it could fill.',
        how: [
          'Add to the instruction: every claim must be followed by a fragment copied word for word from the material.',
          'Say what to do when no fragment exists: write "not found in the material" and move on.',
          'Forbid paraphrasing inside the quote marks. A "quote" that is reworded is the exact failure you are trying to stop.',
        ],
        bad: 'Summarise the documents and cite your sources.',
        good: 'For each claim, write the claim, then on the next line the exact sentence from the document that supports it, in quote marks, with the file name. If you cannot find such a sentence, write NOT FOUND and do not make the claim.',
        note: 'The second one makes the failure visible. NOT FOUND is a result you can act on; a confident paragraph is not.',
        stage: 'constrain',
        reward: 'Your agent can now fail out loud. Most cannot, and that is why nobody trusts them.',
      },
      {
        why: 'The dangerous answer is not the wrong one, it is the complete-looking one. If the material never addressed half your question, a good answer says so; a bad one quietly covers the half it found and reads as if it covered everything.',
        how: [
          'Require a section titled "Not covered" in every answer.',
          'Say that it must not be empty unless every part of the question was answered by a quote.',
          'Read that section first, before the answer, every single time.',
        ],
        bad: 'Mention anything that is unclear.',
        good: 'End with a section "Not covered". List every part of my question that no document answered. If this section is empty, say explicitly which document answered each part.',
        note: 'An empty "Not covered" is a warning, not a good grade. It usually means the agent did not look, and the second version forces it to prove otherwise.',
        stage: 'expose',
        reward: 'You have made silence impossible. An agent that cannot stay quiet about gaps is an agent you can read quickly.',
      },
      {
        why: 'Everything above is theory until the agent meets a question it cannot answer. That is the only moment that tells you whether you built a researcher or a very fluent guesser.',
        how: [
          'Take the document you set aside, the one that does not answer your question.',
          'Give it to the agent alone, with the same question.',
          'Read what comes back before reading anything else.',
        ],
        bad: 'Run it on your real documents and see if the answer looks good.',
        good: 'Run it on the document that cannot answer, and check it says so. Then run it on the real ones.',
        note: 'An agent that looks good on material that works tells you nothing. The trap is the test.',
        stage: 'test',
        reward: 'It said it did not know. You have built the rarest thing in this field.',
      },
    ],
    fr: {
      primer: {
        plain: "Il lit pour vous un ensemble de documents et répond à une question ; pour chaque phrase qu'il écrit, il peut vous indiquer où il l'a lue.",
        like: "Un assistant de recherche consciencieux qui surligne la page avant de vous en rapporter le contenu. Le surlignage constitue l'essentiel du métier : sans lui, vous disposez d'un assistant qui paraît simplement sûr de lui.",
        need: [
          "Une question à laquelle vous souhaitez réellement une réponse, formulée en une phrase.",
          "Trois ou quatre documents réels : les vôtres, et non des échantillons.",
          "Un document qui NE répond PAS à la question, mis de côté pour la dernière étape.",
        ],
        words: [
          { term: "Source", says: "Un document que vous accepteriez de montrer à une personne qui met votre parole en doute." },
          { term: "Hallucination", says: "Le fait, pour un modèle, d'écrire un contenu plausible qu'il n'a lu nulle part. Ce contenu ressemble exactement aux passages exacts." },
          { term: "Mot à mot", says: "Recopié à l'identique, et non résumé." },
        ],
      },
      steps: [
        {
          why: "Un modèle à qui l'on demande d'« utiliser des sources » considérera n'importe quoi comme une source : un billet de blog, sa propre mémoire, une phrase qu'il vient d'écrire. Si vous n'avez pas précisé ce qui compte, il décide à votre place, et avec indulgence.",
          how: [
            "Notez les types de documents que vous ACCEPTERIEZ : un contrat signé, un article publié, une page de votre propre documentation.",
            "Notez ceux que vous refuseriez : une réponse de forum, une page non datée, tout ce que vous ne pouvez pas ouvrir.",
            "Lisez les deux listes à un collègue. S'il peut les appliquer sans vous poser de question, elles sont complètes.",
          ],
          bad: "Utilise des sources fiables.",
          good: "Une source est un document que je peux ouvrir à une adresse ou à un chemin de fichier, qui porte une date, et que je pourrais envoyer à un client. Les messages de forum, les pages marketing et les PDF sans date ne sont pas des sources.",
          note: "La première est un adjectif qui consomme des tokens sans effet : « fiable » n'a aucune signification opérationnelle pour un modèle. La seconde est un test que chacun peut appliquer, y compris le modèle.",
          reward: "Vous avez rédigé une règle qu'un inconnu pourrait appliquer. C'est bien plus rare qu'il n'y paraît.",
        },
        {
          why: "Livré à lui-même, un modèle résume. C'est dans le résumé que s'introduisent les inventions, car un résumé qui comble une petite lacune se lit mieux qu'un résumé qui s'interrompt. Imposer la citation supprime la lacune qu'il pourrait combler.",
          how: [
            "Ajoutez au prompt : chaque affirmation doit être suivie d'un extrait recopié mot pour mot à partir de la documentation.",
            "Précisez la conduite à tenir lorsqu'aucun extrait n'existe : écrire « introuvable dans la documentation » et poursuivre.",
            "Interdisez la paraphrase entre guillemets. Une « citation » reformulée est précisément l'échec que vous cherchez à éviter.",
          ],
          bad: "Résume les documents et cite tes sources.",
          good: "Pour chaque affirmation, écris l'affirmation, puis à la ligne suivante la phrase exacte du document qui l'appuie, entre guillemets, avec le nom du fichier. Si tu ne trouves pas une telle phrase, écris INTROUVABLE et ne fais pas l'affirmation.",
          note: "La seconde rend l'échec visible. INTROUVABLE est un résultat exploitable ; un paragraphe assuré ne l'est pas.",
          reward: "Votre agent sait désormais signaler explicitement ses échecs. La plupart n'en sont pas capables, et c'est pourquoi personne ne leur fait confiance.",
        },
        {
          why: "La réponse dangereuse n'est pas la réponse fausse, mais celle qui paraît complète. Si la documentation n'abordait jamais la moitié de votre question, une bonne réponse le signale ; une mauvaise traite discrètement la moitié trouvée et se lit comme si elle avait tout couvert.",
          how: [
            "Exigez une section intitulée « Non couvert » dans chaque réponse.",
            "Précisez qu'elle ne doit pas rester vide, sauf si chaque partie de la question a reçu une réponse appuyée par une citation.",
            "Lisez cette section en premier, avant la réponse, à chaque fois.",
          ],
          bad: "Signale ce qui n'est pas clair.",
          good: "Termine par une section « Non couvert ». Liste chaque partie de ma question à laquelle aucun document n'a répondu. Si cette section est vide, dis explicitement quel document a répondu à quelle partie.",
          note: "Une section « Non couvert » vide est un avertissement, non un bon résultat. Elle signifie généralement que l'agent n'a pas cherché, et la seconde version l'oblige à prouver le contraire.",
          reward: "Vous avez rendu le silence impossible. Un agent qui ne peut pas taire ses lacunes est un agent que l'on lit rapidement.",
        },
        {
          why: "Tout ce qui précède reste théorique tant que l'agent n'a pas rencontré une question à laquelle il ne peut pas répondre. C'est le seul moment qui vous indique si vous avez construit un chercheur ou un devin particulièrement éloquent.",
          how: [
            "Prenez le document mis de côté, celui qui ne répond pas à votre question.",
            "Soumettez-le seul à l'agent, avec la même question.",
            "Lisez sa réponse avant toute autre chose.",
          ],
          bad: "Fais-le tourner sur tes vrais documents et regarde si la réponse a l'air bonne.",
          good: "Fais-le tourner sur le document qui ne peut pas répondre, et vérifie qu'il le dit. Ensuite seulement, sur les vrais.",
          note: "Un agent qui paraît performant sur une documentation favorable ne vous apprend rien. Le piège constitue le véritable test.",
          reward: "Il a reconnu qu'il ne savait pas. Vous venez de construire l'élément le plus rare de ce domaine.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  writing: {
    primer: {
      plain: 'It writes drafts that sound like you instead of sounding like a chatbot, from a description of your voice that you write once.',
      like: 'A ghostwriter who has read everything you have published. You do not explain your style to them each morning; they already have it, and you correct the edges.',
      need: [
        'Three drafts a model wrote for you that you disliked. Keep them, they are the raw material.',
        'Two pieces of your own writing that you are happy with.',
        'Fifteen minutes to say out loud what was wrong with the three bad ones.',
      ],
      words: [
        { term: 'Tone of voice', says: 'How you sound. In practice: the things you never do, more than the things you do.' },
        { term: 'Brief', says: 'A standing instruction the agent carries into every job, as opposed to what you type each time.' },
      ],
    },
    steps: [
      {
        why: 'You cannot describe your voice from memory. Everyone who tries writes the same four adjectives, and adjectives change nothing. Your three bad drafts, on the other hand, contain the exact things you hate, in writing.',
        how: [
          'Open the three drafts you disliked.',
          'For each, underline the sentences that made you wince. Not the weak ones: the ones that felt wrong.',
          'Next to each, write in plain words what was wrong. "Too eager." "Sounds like an advert." "Explains what I already said."',
        ],
        bad: 'My tone is professional but friendly, clear and engaging.',
        good: 'Draft 2, line 3: "We are thrilled to announce" · I never say thrilled. Draft 1, last line: a call to action I did not ask for. Draft 3: three adjectives in one sentence.',
        note: 'The first sentence would fit any company on earth. The second is unmistakably yours, and every line of it becomes a rule at the next step.',
        stage: 'define',
        reward: 'You now have evidence instead of adjectives. Every rule you write next will be traceable to something real.',
      },
      {
        why: 'A model cannot act on "be warm but not chatty". It can act on "never open with a question". Positive style instructions are decoration; bans are checkable, and a rule nobody can check is a rule nobody can enforce.',
        how: [
          'Turn each underlined wince into a sentence starting with "Never".',
          'Make each one testable: someone else must be able to tell whether it was broken, without asking you.',
          'Keep the original bad line next to the rule. That pair is worth more than the rule alone.',
        ],
        bad: 'Write in a natural, human tone. Avoid corporate language.',
        good: 'Never open with a rhetorical question. Never use: thrilled, excited, delighted, seamless, robust. Never add a call to action unless I asked for one. Never use more than one adjective per sentence.',
        note: 'Every rule on the right can be checked by someone who has never met you. That is the only test a style rule has to pass.',
        stage: 'constrain',
        reward: 'Your taste is now written down in a form someone else could apply. That is what a brief is.',
      },
      {
        why: 'Bans tell the agent what not to do, and leave the whole space of what to do wide open. One worked example does more than ten more rules, because it shows the shape of a good answer instead of describing it.',
        how: [
          'Take one of your bad drafts and rewrite a paragraph of it the way you would actually write it.',
          'Put the two versions in the brief, labelled BEFORE and AFTER.',
          'Do not explain the difference. If it needs explaining, the example is not carrying its weight.',
        ],
        bad: 'Here is an example of good writing: [a paragraph you like from somewhere else].',
        good: 'BEFORE: "We are thrilled to announce our seamless new integration." AFTER: "You can now connect Stripe. It takes one click and we do not touch your keys."',
        note: 'A borrowed example teaches someone else\'s voice. A before and after from your own draft teaches the distance between the model\'s instinct and yours.',
        stage: 'expose',
        reward: 'One pair of paragraphs just taught more than the twenty rules above it.',
      },
      {
        why: 'A brief that keeps growing stops being obeyed. Past a certain length the model starts dropping rules quietly, and you cannot tell which ones. Cutting is not tidying: it is what makes the rest work.',
        how: [
          'Count your rules. Over twenty, you are going to lose some.',
          'Delete every rule you have never actually seen broken.',
          'For each one you delete, write what would have to happen for you to add it back.',
        ],
        bad: 'Keep every rule. More guidance is better guidance.',
        good: 'Twenty rules, each one traceable to a draft I rejected. Deleted: "avoid passive voice" · I have never once minded it.',
        note: 'The rule you cannot trace to a real bad draft is a rule you imagined. It costs tokens on every run and protects you from nothing.',
        stage: 'measure',
        reward: 'You deleted rules on purpose. That is the step everyone skips and the reason most briefs stop working.',
      },
    ],
    fr: {
      primer: {
        plain: "Il rédige des brouillons qui vous ressemblent plutôt qu'à un robot conversationnel, à partir d'une description de votre voix rédigée une seule fois.",
        like: "Un prête-plume qui aurait lu tout ce que vous avez publié. Vous ne lui expliquez pas votre style chaque matin : il le connaît déjà, et vous corrigez les détails.",
        need: [
          "Trois brouillons rédigés pour vous par un modèle et qui ne vous ont pas plu. Conservez-les : ils constituent la matière première.",
          "Deux textes de votre main dont vous êtes satisfait.",
          "Un quart d'heure pour formuler à voix haute ce qui n'allait pas dans les trois mauvais brouillons.",
        ],
        words: [
          { term: "Ton", says: "Votre manière de sonner. En pratique, elle se définit davantage par ce que vous ne faites jamais que par ce que vous faites." },
          { term: "Brief", says: "Le system prompt que l'agent emporte dans chaque travail, par opposition à ce que vous saisissez à chaque fois." },
        ],
      },
      steps: [
        {
          why: "Vous ne pouvez pas décrire votre voix de mémoire. Tous ceux qui s'y essaient écrivent les quatre mêmes adjectifs, et les adjectifs ne changent rien. Vos trois mauvais brouillons, en revanche, contiennent par écrit exactement ce que vous détestez.",
          how: [
            "Ouvrez les trois brouillons qui ne vous ont pas plu.",
            "Dans chacun, soulignez les phrases qui vous ont gêné : non pas les plus faibles, mais celles qui sonnaient faux.",
            "À côté de chacune, notez en termes simples ce qui n'allait pas. « Trop empressé. » « On dirait une publicité. » « Répète ce que je viens de dire. »",
          ],
          bad: "Mon ton est professionnel mais amical, clair et engageant.",
          good: "Brouillon 2, ligne 3 : « Nous sommes ravis d'annoncer » · je ne dis jamais ravis. Brouillon 1, dernière ligne : un appel à l'action que je n'ai pas demandé. Brouillon 3 : trois adjectifs dans une phrase.",
          note: "La première phrase conviendrait à n'importe quelle entreprise au monde. La seconde vous appartient sans conteste, et chacune de ses lignes devient une règle à l'étape suivante.",
          reward: "Vous disposez désormais de preuves plutôt que d'adjectifs. Chaque règle que vous rédigerez pourra être rattachée à un élément concret.",
        },
        {
          why: "Un modèle ne peut pas agir sur « sois chaleureux mais pas bavard ». Il peut agir sur « ne commence jamais par une question ». Les consignes de style positives sont décoratives ; les interdits se vérifient, et une règle que personne ne peut vérifier est une règle que personne n'applique.",
          how: [
            "Transformez chaque passage souligné en une phrase commençant par « Ne jamais ».",
            "Rendez chacune vérifiable : une autre personne doit pouvoir dire si elle a été enfreinte, sans vous consulter.",
            "Écartez celles que vous ne pouvez rattacher à aucun brouillon précis.",
          ],
          bad: "Évite le langage promotionnel.",
          good: "Ne jamais ouvrir par une question. Ne jamais employer ravis, passionnés, incontournable. Ne jamais finir par un appel à l'action sauf demande explicite. Ne jamais mettre plus d'un adjectif par phrase.",
          note: "« Promotionnel » est une appréciation. Les quatre interdits sont des tests, qu'un relecteur qui ne vous connaît pas peut appliquer.",
          reward: "Votre goût est devenu vérifiable. C'est la seule forme de goût qu'une machine sait suivre.",
        },
        {
          why: "Les interdits indiquent ce qu'il ne faut pas faire, sans jamais montrer ce qu'il faut faire. Un seul exemple commenté transmet ce que dix règles ne parviennent pas à exprimer, car la voix réside dans le rythme et non dans le vocabulaire.",
          how: [
            "Choisissez un passage de votre propre écriture dont vous êtes satisfait.",
            "Placez à côté la version qu'un modèle en aurait produite, ou votre propre version avant correction.",
            "Ne commentez pas la paire. L'écart est plus parlant que tout commentaire.",
          ],
          bad: "Écris dans un style clair et direct.",
          good: "Voici un avant et un après. Avant : « Nous sommes ravis de vous présenter notre nouvelle fonctionnalité, conçue pour transformer votre quotidien. » Après : « La recherche accepte maintenant les guillemets. Ça marche dans les commentaires aussi. » Écris comme l'après.",
          note: "La paire enseigne le rythme, la longueur des phrases et le refus de l'effet d'annonce. Aucun adjectif n'aurait transmis cela.",
          reward: "Vous avez fourni un modèle à imiter plutôt qu'une instruction à suivre. C'est ce qui caractérise un brief efficace.",
        },
        {
          why: "Un brief qui s'allonge cesse d'être suivi. Au-delà d'une vingtaine de règles, le modèle en applique certaines et en oublie d'autres, sans que vous sachiez lesquelles. Réduire le brief est donc une étape à part entière, et non un simple nettoyage.",
          how: [
            "Comptez vos règles. Si vous en avez plus de vingt, vous devrez en supprimer.",
            "Supprimez d'abord celles que vous ne pouvez rattacher à aucun brouillon raté.",
            "Notez ce que vous avez supprimé, et à quelle condition vous le rétabliriez.",
          ],
          bad: "Garde toutes les règles, on ne sait jamais.",
          good: "Vingt règles au plus, chacune traçable jusqu'à un brouillon précis. Une règle supprimée revient seulement si un nouveau brouillon la redemande.",
          note: "La seconde version fait du brief un document vivant doté d'une règle d'admission. La première en fait un fourre-tout où plus rien ne se vérifie.",
          reward: "Votre brief tient sur un écran. C'est la seule longueur qu'un modèle suit jusqu'au bout.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  support: {
    primer: {
      plain: 'It answers customers in your voice, inside limits you set, and hands the conversation to a human the moment it should.',
      like: 'A new hire on their first week. Good at being kind, not yet allowed to promise anything. The training is entirely about what they must not say.',
      need: [
        'Ten real messages from customers. Boring ones, not the dramatic ones.',
        'Your actual refund and delivery policy, in writing.',
        'A decision on who takes over when the agent stops.',
      ],
      words: [
        { term: 'Escalation', says: 'Handing the conversation to a person. The most important thing the agent does.' },
        { term: 'Guardrail', says: 'A thing the agent may never do, written as a rule rather than hoped for.' },
      ],
    },
    steps: [
      {
        why: 'A model would rather be helpful than accurate. Asked when an order arrives, it will produce a date, because a date is what the reader wanted. Nobody planned that date. It is now a promise you have made.',
        how: [
          'Name the three things it may never state: a delivery date, a price, a refund decision.',
          'For each, write the exact sentence it says instead, word for word.',
          'Read those three sentences as if you had received them. If one annoys you, rewrite it now.',
        ],
        bad: 'Do not make promises you cannot keep.',
        good: 'Never state a delivery date, a price, or whether a refund will be granted. Instead say, word for word: "I have passed this to the team, who will confirm today."',
        note: 'The left version asks the model to use judgement about promises. The right one removes the judgement and hands it a script.',
        stage: 'bound',
        reward: 'Three sentences your agent can no longer say. That is three fewer ways to owe a customer something.',
      },
      {
        why: 'If you only tell it what not to say, it will improvise the gap, and the improvisation is where the damage is. "I do not know" has to be a real, approved, well-written answer, or it will never be chosen.',
        how: [
          'Write the reply it sends when it genuinely cannot answer.',
          'Make it a good reply: what it does not know, what happens next, when.',
          'Read it aloud as the customer. If you would be annoyed, it is not finished.',
        ],
        bad: 'I am sorry, I am unable to help with that request.',
        good: 'I do not have the answer to that one. I have sent it to the team and someone will reply today. If it is urgent, reply with URGENT and it moves to the top.',
        note: 'The left one ends the conversation. The right one says what it does not know, what happens next, and when. It is a real answer.',
        stage: 'define',
        reward: 'Your agent now has a dignified way to stop. Most of them only know how to keep talking.',
      },
      {
        why: 'Asking a model to "escalate when appropriate" hands it the one judgement you least want it making. A list of conditions is not a lesser version of judgement: it is the thing you actually meant.',
        how: [
          'List the conditions that hand over, as facts and not feelings: money mentioned, legal words, a second message about the same thing, anger.',
          'For each, say who receives it.',
          'Add the catch-all: when in doubt, hand over.',
        ],
        bad: 'Escalate to a human when the situation requires it.',
        good: 'Hand over immediately if: the message mentions a refund, a chargeback, a lawyer or the press; it is the second message on the same subject; or the customer says they are angry. When unsure, hand over.',
        note: 'Every condition on the right is a fact the agent can check. "Requires it" is a judgement it will make differently every time.',
        stage: 'constrain',
        reward: 'Handing over is now a rule, not a feeling. Your agent knows when it is out of its depth.',
      },
      {
        why: 'An agent that summarises your policy will get it almost right, and almost right about a refund is wrong. It should quote the policy the way the researcher quotes a document.',
        how: [
          'Put the policy in the agent\'s standing instructions, in full.',
          'Tell it to quote the relevant line rather than explain it.',
          'Test it with a question the policy does not cover, and check it does not invent the answer.',
        ],
        bad: 'You know our refund policy: 30 days, minus shipping, with conditions.',
        good: 'Here is the policy in full. When it applies, quote the exact line. When the customer asks something the policy does not cover, say so and hand over.',
        note: 'A summarised policy is a policy with the exceptions removed, and the exceptions are the only part anyone writes to you about.',
        stage: 'test',
        reward: 'It quotes instead of remembering. That is the difference between a support agent and a liability.',
      },
    ],
    fr: {
      primer: {
        plain: "Il répond aux clients avec votre voix, dans les limites que vous fixez, et transmet la conversation à un humain dès que nécessaire.",
        like: "Une nouvelle recrue en première semaine : douée pour l'amabilité, mais pas encore autorisée à promettre quoi que ce soit. Sa formation porte entièrement sur ce qu'elle ne doit pas dire.",
        need: [
          "Dix messages réels de clients : des messages ordinaires, et non les cas dramatiques.",
          "Votre politique réelle de remboursement et de livraison, sous forme écrite.",
          "Une décision sur la personne qui prend le relais lorsque l'agent s'arrête.",
        ],
        words: [
          { term: "Transfert", says: "Transmettre la conversation à une personne. C'est l'action la plus importante de l'agent." },
          { term: "Guardrail", says: "Une action que l'agent ne peut jamais accomplir, formulée comme une règle plutôt qu'espérée." },
        ],
      },
      steps: [
        {
          why: "Un modèle privilégie l'utilité sur l'exactitude. Si on lui demande quand une commande arrivera, il fournira une date, parce qu'une date est ce que le lecteur attendait. Personne n'a prévu cette date, et elle constitue désormais une promesse faite en votre nom.",
          how: [
            "Nommez les trois éléments qu'il ne doit jamais énoncer : une date de livraison, un prix, une décision de remboursement.",
            "Pour chacun, rédigez la phrase exacte qu'il prononcera à la place, mot pour mot.",
            "Lisez ces trois phrases comme si vous les receviez. Si l'une d'elles vous agace, réécrivez-la immédiatement.",
          ],
          bad: "Ne fais pas de promesses que tu ne peux pas tenir.",
          good: "N'énonce jamais une date de livraison, un prix, ni si un remboursement sera accordé. Dis à la place, mot pour mot : « J'ai transmis à l'équipe, qui confirmera dans la journée. »",
          note: "La première version demande au modèle de juger ce qu'est une promesse. La seconde supprime ce jugement et lui fournit un texte à suivre.",
          reward: "Trois phrases que votre agent ne peut plus prononcer, soit trois engagements de moins envers un client.",
        },
        {
          why: "Si vous lui indiquez seulement ce qu'il ne faut pas dire, il comblera le vide par l'improvisation, et c'est là que survient le dommage. « Je ne sais pas » doit être une réponse à part entière, validée et bien rédigée ; sinon, elle ne sera jamais choisie.",
          how: [
            "Rédigez la réponse qu'il envoie lorsqu'il ne peut réellement pas répondre.",
            "Faites-en une bonne réponse : ce qu'il ignore, ce qui va se passer, et dans quel délai.",
            "Lisez-la à voix haute en vous mettant à la place du client. Si elle vous agace, elle n'est pas terminée.",
          ],
          bad: "Je suis désolé, je ne suis pas en mesure de vous aider sur cette demande.",
          good: "Je n'ai pas la réponse à celle-là. Je l'ai transmise à l'équipe et quelqu'un vous répondra dans la journée. Si c'est urgent, répondez URGENT et ça passe en tête.",
          note: "La première met fin à la conversation. La seconde indique ce qu'elle ignore, la suite des événements et le délai : c'est une véritable réponse.",
          reward: "Votre agent dispose désormais d'une manière digne de s'arrêter. La plupart ne savent que continuer à parler.",
        },
        {
          why: "Demander à un modèle de « transférer quand c'est approprié » lui confie précisément le jugement que vous souhaitez le moins lui laisser. Une liste de conditions n'est pas une version dégradée du jugement : c'est l'expression exacte de votre intention.",
          how: [
            "Listez les conditions qui déclenchent le transfert sous forme de faits et non d'impressions : une mention d'argent, un vocabulaire juridique, un deuxième message sur le même sujet, de la colère.",
            "Pour chacune, indiquez le destinataire.",
            "Ajoutez une règle de sécurité : en cas de doute, transférer.",
          ],
          bad: "Transfère à un humain quand la situation l'exige.",
          good: "Transfère immédiatement si : le message mentionne un remboursement, une opposition bancaire, un avocat ou la presse ; s'il s'agit du deuxième message sur le même sujet ; ou si le client dit qu'il est en colère. Dans le doute, transfère.",
          note: "Chaque condition de la seconde version est un fait que l'agent peut vérifier. « L'exige » est une appréciation qu'il interprétera différemment à chaque fois.",
          reward: "Le transfert est devenu une règle, et non plus une impression. Votre agent sait reconnaître quand une situation le dépasse.",
        },
        {
          why: "Un agent qui résume votre politique la restituera de façon presque exacte, et presque exact, s'agissant d'un remboursement, signifie faux. Il doit citer la politique comme le chercheur cite un document.",
          how: [
            "Placez la politique intégrale dans le system prompt de l'agent.",
            "Demandez-lui de citer la ligne applicable plutôt que de l'expliquer.",
            "Testez-le avec une question que la politique ne couvre pas, et vérifiez qu'il n'invente pas la réponse.",
          ],
          bad: "Tu connais notre politique de remboursement : 30 jours, hors frais de port, sous conditions.",
          good: "Voici la politique en entier. Quand elle s'applique, cite la ligne exacte. Quand le client demande quelque chose qu'elle ne couvre pas, dis-le et transfère.",
          note: "Une politique résumée est une politique privée de ses exceptions, et les exceptions sont précisément ce qui motive les messages des clients.",
          reward: "Il cite au lieu de se souvenir. C'est la différence entre un agent de support et un engagement juridique.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  coding: {
    primer: {
      plain: 'It reads a change to your code and tells you what is broken, and only what is broken.',
      like: 'A good reviewer who leaves four comments instead of forty. The four get fixed. The forty get a thumbs up and a merge.',
      need: [
        'One real change from your codebase, ideally one that had a bug in it.',
        'Your conventions, if you have any written down. If not, that is the answer to a question below.',
        'The willingness to let it report nothing at all.',
      ],
      words: [
        { term: 'Finding', says: 'A defect the reviewer can demonstrate, as opposed to something it would have written differently.' },
        { term: 'False positive', says: 'A reported problem that is not one. Two of these and people stop reading the rest.' },
      ],
    },
    steps: [
      {
        why: 'Ask for a review and you get opinions: naming, structure, what the author should have done. The opinions bury the one real bug. Defining what a finding IS is what separates the two.',
        how: [
          'Require three lines for every finding: the input, what the code does with it, what it should do instead.',
          'If any of the three cannot be written, it is not a finding.',
          'Say that explicitly: "if you cannot write all three, do not report it".',
        ],
        bad: 'Review this code and point out any issues.',
        good: 'Report a problem only if you can write: (1) a concrete input, (2) what the code does with that input, (3) what it should do instead. If you cannot write all three, say nothing.',
        note: 'The three lines are not paperwork. They are a test the model has to pass before speaking, and most opinions fail it.',
        stage: 'define',
        reward: 'You have defined what counts as a problem. Every comment from now on has to earn its place.',
      },
      {
        why: 'Taste is what makes a reviewer unreadable. It arrives in the same confident voice as the real defects, in far greater volume, and it is the reason nobody reads the tool after week two.',
        how: [
          'Write the list of what it may never report: naming, formatting, file layout, "consider using", anything a formatter handles.',
          'Say where your conventions live, or say plainly that there are none.',
          'If there are none: forbid it from inventing some.',
        ],
        bad: 'Follow best practices and our team conventions.',
        good: 'Never comment on naming, formatting, file structure, or a preference between two working approaches. We have no written conventions, so do not infer any.',
        note: '"Best practices" is an invitation to report everything. The right version closes the door on the whole category.',
        stage: 'constrain',
        reward: 'Taste is banned. What is left is the part worth reading.',
      },
      {
        why: 'Forty findings and four findings contain the same information if the forty are unranked, because nobody reads to the bottom. A ceiling forces the model to choose, and choosing is the work.',
        how: [
          'Cap the number of findings. Five is a good start.',
          'Require them ordered worst first, with the worst one first on the page.',
          'Forbid filling the quota: if there are two, report two.',
        ],
        bad: 'List all the issues you find, ordered by severity.',
        good: 'Report at most five findings, worst first. If there are fewer than five real ones, report fewer. Never pad the list to reach five.',
        note: '"Never pad" is the load-bearing sentence. Without it a cap becomes a quota, and a quota manufactures findings.',
        stage: 'measure',
        reward: 'Your reviewer can now report two things and stop. That restraint is what makes it readable.',
      },
      {
        why: 'The only question that matters is whether it stays quiet on clean code. A reviewer that always finds something is a reviewer that is always partly wrong.',
        how: [
          'Run it on a change you know had a real bug. Check it found that bug.',
          'Run it on a change you know was clean. Check what it says.',
          'If it found something on the clean one, read that finding closely: either it is right and you were wrong, or your bans have a hole.',
        ],
        bad: 'Run it on a few changes and see if the comments seem reasonable.',
        good: 'Run it on one change with a known bug and one known-clean change. It must find the first and say nothing about the second.',
        note: 'Testing only on broken code tells you it can talk. Testing on clean code tells you whether it can stop.',
        stage: 'test',
        reward: 'It stayed quiet when there was nothing to say. That is the whole game.',
      },
    ],
    fr: {
      primer: {
        plain: "Il lit une modification de votre code et vous signale ce qui est défaillant, et uniquement ce qui est défaillant.",
        like: "Un bon relecteur qui laisse quatre commentaires au lieu de quarante. Les quatre sont corrigés ; les quarante reçoivent une approbation distraite et une fusion.",
        need: [
          "Une modification réelle de votre code, idéalement une qui contenait un défaut.",
          "Vos conventions, si elles sont écrites. À défaut, une question posée plus bas y répond.",
          "L'acceptation qu'il puisse ne rien signaler du tout.",
        ],
        words: [
          { term: "Constat", says: "Un défaut que le relecteur peut démontrer, par opposition à ce qu'il aurait simplement écrit autrement." },
          { term: "Faux positif", says: "Un problème signalé qui n'en est pas un. Après deux faux positifs, les lecteurs cessent de lire le reste." },
        ],
      },
      steps: [
        {
          why: "Si vous demandez une relecture, vous obtenez des avis : le nommage, la structure, ce que l'auteur aurait dû faire. Ces avis masquent le seul véritable défaut. Définir ce QU'EST un constat permet de distinguer les deux.",
          how: [
            "Exigez trois lignes pour tout constat : l'entrée, ce que le code en fait, et ce qu'il devrait faire à la place.",
            "Si l'une des trois ne peut pas être rédigée, il ne s'agit pas d'un constat.",
            "Formulez-le explicitement : « si tu ne peux pas écrire les trois, ne le signale pas ».",
          ],
          bad: "Relis ce code et signale les problèmes.",
          good: "Ne signale un problème que si tu peux écrire : (1) une entrée concrète, (2) ce que le code en fait, (3) ce qu'il devrait faire à la place. Si tu ne peux pas écrire les trois, tais-toi.",
          note: "Ces trois lignes ne relèvent pas de la formalité administrative : c'est un test que le modèle doit réussir avant de s'exprimer, et la plupart des avis y échouent.",
          reward: "Vous avez défini ce qui constitue un problème. Chaque commentaire devra désormais justifier sa présence.",
        },
        {
          why: "Les questions de goût rendent un relecteur illisible. Elles sont formulées avec la même assurance que les vrais défauts, en bien plus grand nombre, et c'est pourquoi plus personne ne lit l'outil au bout de deux semaines.",
          how: [
            "Rédigez la liste de ce qu'il ne doit jamais signaler : le nommage, la mise en forme, l'organisation des fichiers, les « pense à utiliser », tout ce que gère un formateur automatique.",
            "Indiquez où se trouvent vos conventions, ou précisez franchement qu'il n'en existe aucune.",
            "S'il n'en existe aucune, interdisez-lui d'en inventer.",
          ],
          bad: "Respecte les bonnes pratiques et les conventions de l'équipe.",
          good: "Ne commente jamais le nommage, la mise en forme, la structure des fichiers, ni une préférence entre deux approches qui marchent. Nous n'avons aucune convention écrite, donc n'en déduis aucune.",
          note: "« Bonnes pratiques » est une invitation à tout signaler. La seconde version exclut la catégorie entière.",
          reward: "Les questions de goût sont exclues. Ce qui reste est la partie qui mérite d'être lue.",
        },
        {
          why: "Quarante constats et quatre constats apportent la même information si les quarante ne sont pas hiérarchisés, car personne ne lit jusqu'en bas. Un plafond oblige le modèle à choisir, et choisir constitue le travail.",
          how: [
            "Plafonnez le nombre de constats. Cinq est un bon point de départ.",
            "Exigez un classement du plus grave au moins grave, le plus grave en tête.",
            "Interdisez de remplir un quota : s'il y en a deux, il en signale deux.",
          ],
          bad: "Liste tous les problèmes que tu trouves, classés par gravité.",
          good: "Signale au plus cinq constats, le pire d'abord. S'il y en a moins de cinq de réels, signales-en moins. Ne rembourre jamais la liste pour atteindre cinq.",
          note: "« Ne rembourre jamais » est la phrase décisive. Sans elle, un plafond devient un quota, et un quota fabrique des constats.",
          reward: "Votre relecteur peut désormais signaler deux éléments et s'arrêter. Cette retenue est ce qui le rend lisible.",
        },
        {
          why: "La seule question qui importe est de savoir s'il se tait face à un code sans défaut. Un relecteur qui trouve toujours quelque chose se trompe toujours un peu.",
          how: [
            "Exécutez-le sur une modification dont vous savez qu'elle contenait un défaut réel. Vérifiez qu'il l'a trouvé.",
            "Exécutez-le sur une modification dont vous savez qu'elle était correcte. Observez ce qu'il en dit.",
            "S'il a signalé quelque chose sur la modification correcte, examinez ce constat attentivement : soit il a raison et vous aviez tort, soit vos interdits comportent une lacune.",
          ],
          bad: "Lance-le sur quelques changements et regarde si les commentaires semblent raisonnables.",
          good: "Lance-le sur un changement au défaut connu et sur un changement connu comme propre. Il doit trouver le premier et ne rien dire sur le second.",
          note: "Le tester uniquement sur du code défaillant vous indique qu'il sait parler. Le tester sur du code correct vous indique s'il sait s'arrêter.",
          reward: "Il s'est tu lorsqu'il n'y avait rien à dire. C'est là tout l'enjeu.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  analysis: {
    primer: {
      plain: 'It checks your numbers, then tells you what it would do and what would make that advice wrong.',
      like: 'A finance colleague who reads your spreadsheet before the meeting: first the arithmetic, then the opinion, and never the two mixed together.',
      need: [
        'A real spreadsheet or table with numbers you care about.',
        'The decision the numbers are supposed to feed.',
        'One assumption in there you are not sure about.',
      ],
      words: [
        { term: 'Assumption', says: 'A number somebody chose rather than measured. Usually the one that decides the outcome.' },
        { term: 'Kill criteria', says: 'What would have to become true for the recommendation to be wrong.' },
      ],
    },
    steps: [
      {
        why: 'Asked to "check this", a model will argue with your assumptions and skip the sum that does not add up. Arithmetic and judgement are different jobs, and the arithmetic is the one humans actually get wrong.',
        how: [
          'Write the four errors you want caught: a total that does not equal its parts, a rate applied to the wrong base, a unit change nobody flagged, a row excluded from a range.',
          'Ask which of the four you have personally shipped. Be honest, it changes what you prioritise.',
          'Put those four at the top of the instruction, before anything about opinions.',
        ],
        bad: 'Check this model for errors.',
        good: 'Check these four things first: totals equal the sum of their parts; every percentage is applied to the base named next to it; units are consistent across the sheet; no range silently excludes a row. Report each as pass or fail.',
        note: 'The left version invites commentary. The right version is a checklist that either passes or does not, and it catches the mistakes that actually reach boardrooms.',
        stage: 'define',
        reward: 'Four errors your sheet can no longer hide. Most people never write this list down.',
      },
      {
        why: 'Once arithmetic and opinion are in the same paragraph, you cannot act on either. You do not know whether "this looks optimistic" means a broken formula or a disagreement about the market.',
        how: [
          'Require two sections that never mix: ARITHMETIC and JUDGEMENT.',
          'Arithmetic contains only things that are true or false.',
          'Judgement contains only things a reasonable person could disagree with.',
        ],
        bad: 'Review the model and share your thoughts.',
        good: 'Answer in two sections. ARITHMETIC: only claims that are true or false, each with the cell. JUDGEMENT: only claims someone could reasonably disagree with. Nothing belongs in both.',
        note: 'Ask yourself what belongs in neither. Usually: vague worry. The split has the useful side effect of deleting it.',
        stage: 'constrain',
        reward: 'Your analyst can no longer hide an opinion inside a calculation.',
      },
      {
        why: 'The most dangerous line in any review is the one that was never checked and never mentioned. Silence reads as approval, and nobody goes back to ask which cells were skipped.',
        how: [
          'Require a section: "Taken on trust".',
          'Every input it could not verify goes there, with why.',
          'Read that section before the conclusion, every time.',
        ],
        bad: 'Flag anything you were unsure about.',
        good: 'End with "Taken on trust": every figure you could not verify from the sheet itself, and why. If this is empty, name the source of every single input.',
        note: '"Flag anything" produces nothing, because nothing feels flag-worthy in the moment. A required section produces the list.',
        stage: 'expose',
        reward: 'You can now see what was not checked. That list is usually more interesting than the review.',
      },
      {
        why: 'An analysis that ends in "it depends" has moved the work back to you. The recommendation is the deliverable, and it is only useful if it also says what would make it wrong.',
        how: [
          'Require one named recommendation in the first sentence.',
          'Forbid hedging: no "it may be worth considering".',
          'Require kill criteria: what would have to be true for this to be the wrong call.',
        ],
        bad: 'Summarise the options and their trade-offs.',
        good: 'Open with one recommendation, named, in the first sentence. Then the two strongest reasons, then the kill criteria: what would have to become true for this to be wrong. If the evidence is balanced, still recommend, and say it is balanced.',
        note: 'Kill criteria are what make a recommendation safe to follow. They tell you what to watch for after you have decided.',
        stage: 'test',
        reward: 'It commits to an answer and tells you how it could be wrong. That is what an analyst is for.',
      },
    ],
    fr: {
      primer: {
        plain: "Il vérifie vos chiffres, puis vous indique ce qu'il recommande et ce qui invaliderait cette recommandation.",
        like: "Un collègue de la finance qui relit votre tableur avant la réunion : d'abord l'arithmétique, ensuite l'opinion, et jamais les deux mêlées.",
        need: [
          "Un tableur ou un tableau réel, contenant des chiffres importants pour vous.",
          "La décision que ces chiffres sont censés éclairer.",
          "Une hypothèse du tableau dont vous n'êtes pas certain.",
        ],
        words: [
          { term: "Hypothèse", says: "Un chiffre choisi plutôt que mesuré. C'est généralement celui qui détermine le résultat." },
          { term: "Critères d'abandon", says: "Ce qui devrait se vérifier pour que la recommandation devienne fausse." },
        ],
      },
      steps: [
        {
          why: "Si on lui demande de « vérifier cela », un modèle se met à discuter vos hypothèses et néglige la somme qui ne tombe pas juste. L'arithmétique et le jugement sont deux métiers distincts, et c'est l'arithmétique que les humains négligent réellement.",
          how: [
            "Rédigez les quatre erreurs que vous souhaitez détecter : un total qui n'égale pas la somme de ses parties, un taux appliqué à la mauvaise base, un changement d'unité non signalé, une ligne exclue d'une plage.",
            "Demandez-vous lesquelles de ces quatre erreurs vous avez vous-même laissé passer. Cette honnêteté modifie vos priorités.",
            "Placez ces quatre points en tête du prompt, avant tout ce qui relève de l'opinion.",
          ],
          bad: "Vérifie ce modèle et cherche les erreurs.",
          good: "Vérifie ces quatre choses d'abord : les totaux égalent la somme de leurs parties ; chaque pourcentage est appliqué à la base nommée à côté de lui ; les unités sont cohérentes dans toute la feuille ; aucune plage n'exclut une ligne en silence. Rends chacune en réussite ou échec.",
          note: "La première version invite au commentaire. La seconde est une liste de contrôle binaire, qui détecte les erreurs parvenant réellement jusqu'aux conseils d'administration.",
          reward: "Quatre erreurs que votre feuille ne peut plus dissimuler. Presque personne ne rédige cette liste.",
        },
        {
          why: "Dès que l'arithmétique et l'opinion figurent dans le même paragraphe, vous ne pouvez agir ni sur l'une ni sur l'autre. Vous ne savez pas si « cela paraît optimiste » désigne une formule erronée ou un désaccord sur le marché.",
          how: [
            "Exigez deux sections qui ne se mélangent jamais : ARITHMÉTIQUE et JUGEMENT.",
            "L'arithmétique ne contient que des affirmations vraies ou fausses.",
            "Le jugement ne contient que des éléments qu'une personne raisonnable pourrait discuter.",
          ],
          bad: "Relis le modèle et donne ton avis.",
          good: "Réponds en deux sections. ARITHMÉTIQUE : seulement des affirmations vraies ou fausses, chacune avec sa cellule. JUGEMENT : seulement des affirmations dont on peut raisonnablement débattre. Rien n'appartient aux deux.",
          note: "Demandez-vous ce qui n'appartient à aucune des deux. Généralement, une inquiétude diffuse ; la séparation a l'effet secondaire utile de l'éliminer.",
          reward: "Votre analyste ne peut plus dissimuler une opinion dans un calcul.",
        },
        {
          why: "La ligne la plus dangereuse d'une revue est celle qui n'a jamais été vérifiée ni mentionnée. Le silence se lit comme une approbation, et personne ne revient demander quelles cellules ont été ignorées.",
          how: [
            "Exigez une section « Pris pour argent comptant ».",
            "Chaque donnée qu'il n'a pas pu vérifier y figure, avec la raison.",
            "Lisez cette section avant la conclusion, à chaque fois.",
          ],
          bad: "Signale tout ce dont tu n'étais pas sûr.",
          good: "Termine par « Pris pour argent comptant » : chaque chiffre que tu n'as pas pu vérifier depuis la feuille elle-même, et pourquoi. Si c'est vide, nomme la source de chaque entrée.",
          note: "« Signale tout » ne produit rien, car rien ne semble mériter d'être signalé sur le moment. Une section obligatoire, en revanche, produit la liste.",
          reward: "Vous voyez désormais ce qui n'a pas été vérifié. Cette liste est généralement plus instructive que la revue elle-même.",
        },
        {
          why: "Une analyse qui se conclut par « cela dépend » vous a renvoyé le travail. La recommandation est le livrable, et elle n'est utile que si elle précise également ce qui la rendrait fausse.",
          how: [
            "Exigez une recommandation explicite dès la première phrase.",
            "Interdisez les précautions oratoires : pas de « il pourrait être intéressant d'envisager ».",
            "Exigez des critères d'abandon : ce qui devrait se vérifier pour que ce choix soit le mauvais.",
          ],
          bad: "Résume les options et leurs compromis.",
          good: "Ouvre par une recommandation, nommée, dans la première phrase. Puis les deux raisons les plus fortes, puis les critères d'abandon : ce qui devrait devenir vrai pour que ce soit faux. Si les preuves sont équilibrées, recommande quand même, et dis qu'elles le sont.",
          note: "Les critères d'abandon sont ce qui rend une recommandation sûre à suivre. Ils indiquent ce qu'il faut surveiller une fois la décision prise.",
          reward: "Il s'engage sur une réponse et vous indique comment elle pourrait se révéler fausse. C'est précisément le rôle d'un analyste.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  triage: {
    primer: {
      plain: 'It reads each thing that arrives and puts it in the right pile.',
      like: 'The person who sorts the morning post. The job is easy once the piles are well chosen, and impossible when two piles overlap.',
      need: [
        'Twenty real items: emails, tickets, leads. Real ones, including the awkward ones.',
        'Your current list of categories.',
        'A colleague willing to sort the same twenty independently.',
      ],
      words: [
        { term: 'Taxonomy', says: 'Your list of piles. Almost every sorting problem is a problem with this list, not with the model.' },
        { term: 'Per class accuracy', says: 'How often each pile is right, as opposed to how often the sorting is right overall.' },
      ],
    },
    steps: [
      {
        why: 'If two of your categories overlap, no instruction will fix it: a human cannot sort them reliably either. Writing each category as a test is how you find the overlap, and most people find one immediately.',
        how: [
          'Write each category as a question with a yes or no answer.',
          'Take the two that feel closest. Find the single question that separates them.',
          'If you cannot find one, merge them. That is a result, not a failure.',
        ],
        bad: 'Categories: Bug, Problem, Feedback, Feature request.',
        good: 'Bug: the product did something it documents it will not do. Feature request: the product does not do something it never claimed to do. (Problem and Feedback merged: no question separated them.)',
        note: 'The merge is the valuable part. Two categories a human confuses will be confused by an agent too, and no prompt has ever fixed a taxonomy.',
        stage: 'define',
        reward: 'You just found an overlap in your own categories. That was the bug, and it was never in the model.',
      },
      {
        why: 'Given only your categories, a model will always pick one, including for things that belong in none. Those forced fits are invisible: they look exactly like correct answers until someone acts on them.',
        how: [
          'Add a category called "None of these".',
          'Say when to use it: when no category\'s test returns yes.',
          'Decide now what happens to those items, and who looks at them.',
        ],
        bad: 'Pick the most appropriate category.',
        good: 'Pick a category only if its test returns yes. If none does, answer "None of these". Those go to the shared inbox and are read every Monday.',
        note: 'Without the escape hatch, your error rate stays hidden inside your categories. With it, it becomes a pile you can look at.',
        stage: 'bound',
        reward: 'Your sorter can now refuse to sort. The refusals are where you will learn the most.',
      },
      {
        why: 'You cannot tell whether a classifier works by reading its answers. It sounds certain about everything. Twenty items you have labelled yourself is the only honest measure, and it takes twenty minutes.',
        how: [
          'Take twenty real items, covering every category and a few awkward ones.',
          'Label them yourself, before running anything.',
          'Have a colleague label the same twenty. Where you disagree, your categories are unclear, not their judgement.',
        ],
        bad: 'Run it for a week and see how it feels.',
        good: 'Twenty items, labelled by me and by one colleague before the agent sees them. The four we disagreed on go back to step one.',
        note: 'Disagreement between two humans is a measurement of your taxonomy, and it is free. Do it before blaming the model.',
        stage: 'measure',
        reward: 'You have a test set. From here you can actually tell whether a change helped.',
      },
      {
        why: 'Ninety percent accuracy hides a category that is wrong every single time. If that category is "urgent", your average is excellent and your product is on fire.',
        how: [
          'Score each category separately: right out of total, per pile.',
          'Find the worst one.',
          'Ask whether it matters. A bad score on a rare, harmless pile is fine; a bad score on "urgent" is not.',
        ],
        bad: 'Accuracy: 91%.',
        good: 'Bug 95% (19/20). Feature request 88% (7/8). Urgent 40% (2/5). The average is fine. Urgent is not, and it is the only one that pages anyone.',
        note: 'An average is designed to hide exactly this. Per category is four extra minutes and it is the only number that tells you what to do.',
        stage: 'test',
        reward: 'You found the category that fails. An average would have told you everything was fine.',
      },
    ],
    fr: {
      primer: {
        plain: "Il lit chaque élément entrant et le place dans la bonne catégorie.",
        like: "La personne qui trie le courrier du matin. Le travail est simple lorsque les catégories sont bien choisies, et impossible lorsque deux d'entre elles se chevauchent.",
        need: [
          "Vingt éléments réels : courriels, tickets, prospects. Des cas réels, y compris les plus embarrassants.",
          "Votre liste actuelle de catégories.",
          "Un collègue disposé à trier les mêmes vingt éléments de son côté.",
        ],
        words: [
          { term: "Nomenclature", says: "Votre liste de catégories. Presque tout problème de tri provient de cette liste, et non du modèle." },
          { term: "Justesse par classe", says: "La fréquence à laquelle chaque catégorie est correctement attribuée, par opposition au taux de réussite global du tri." },
        ],
      },
      steps: [
        {
          why: "Si deux de vos catégories se chevauchent, aucun prompt n'y remédiera : un humain ne sait pas non plus les distinguer de façon fiable. Rédiger chaque catégorie sous forme de test permet de révéler ce chevauchement, et la plupart des gens en découvrent un immédiatement.",
          how: [
            "Formulez chaque catégorie comme une question à laquelle on répond par oui ou par non.",
            "Prenez les deux catégories qui vous paraissent les plus proches et trouvez la question unique qui les distingue.",
            "Si vous n'en trouvez aucune, fusionnez-les. C'est un résultat, et non un échec.",
          ],
          bad: "Catégories : Bogue, Problème, Retour, Demande de fonctionnalité.",
          good: "Bogue : le produit a fait quelque chose dont sa documentation dit qu'il ne le fait pas. Demande de fonctionnalité : le produit ne fait pas quelque chose qu'il n'a jamais prétendu faire. (Problème et Retour fusionnés : aucune question ne les séparait.)",
          note: "La fusion est l'élément le plus précieux. Deux catégories qu'un humain confond seront également confondues par un agent, et aucun prompt n'a jamais corrigé une nomenclature.",
          reward: "Vous venez de découvrir un chevauchement dans vos propres catégories. C'était là le défaut, et il ne provenait pas du modèle.",
        },
        {
          why: "Avec vos seules catégories, un modèle en choisira toujours une, y compris pour un élément qui n'appartient à aucune. Ces classements forcés sont invisibles : ils ressemblent exactement à des réponses correctes jusqu'à ce que quelqu'un agisse en conséquence.",
          how: [
            "Ajoutez une catégorie « Aucune de celles-ci ».",
            "Précisez quand l'utiliser : lorsque le test d'aucune catégorie ne donne de réponse positive.",
            "Décidez dès maintenant du traitement de ces éléments et de la personne qui les examine.",
          ],
          bad: "Choisis la catégorie la plus appropriée.",
          good: "Ne choisis une catégorie que si son test répond oui. Si aucun ne répond, réponds « Aucune de celles-ci ». Celles-là vont dans la boîte partagée et sont lues chaque lundi.",
          note: "Sans cette issue de secours, votre taux d'erreur reste dissimulé dans vos catégories. Avec elle, il devient une catégorie que l'on peut examiner.",
          reward: "Votre trieur peut désormais refuser de trier. Ce sont ces refus qui vous en apprendront le plus.",
        },
        {
          why: "Vous ne pouvez pas savoir si un classificateur fonctionne en lisant ses réponses : il paraît certain de tout. Vingt éléments étiquetés par vos soins constituent la seule mesure fiable, et cela prend vingt minutes.",
          how: [
            "Prenez vingt éléments réels, couvrant chaque catégorie ainsi que quelques cas délicats.",
            "Étiquetez-les vous-même, avant toute exécution.",
            "Faites étiqueter les mêmes vingt éléments par un collègue. Chaque désaccord entre vous révèle un flou dans vos catégories, et non une erreur de jugement de sa part.",
          ],
          bad: "Fais-le tourner une semaine et vois ce que ça donne.",
          good: "Vingt éléments, étiquetés par moi et par un collègue avant que l'agent ne les voie. Les quatre sur lesquels nous divergeons retournent à la première étape.",
          note: "Un désaccord entre deux humains mesure la qualité de votre nomenclature, et cette mesure est gratuite. Effectuez-la avant d'incriminer le modèle.",
          reward: "Vous disposez d'un jeu de test. Vous pouvez désormais déterminer si une modification a réellement été utile.",
        },
        {
          why: "Quatre-vingt-dix pour cent de réussite peuvent masquer une catégorie systématiquement erronée. Si cette catégorie est « urgent », votre moyenne est excellente alors que votre produit est en difficulté.",
          how: [
            "Évaluez chaque catégorie séparément : réponses correctes sur total, catégorie par catégorie.",
            "Identifiez la moins performante.",
            "Demandez-vous si cela a de l'importance. Un mauvais score sur une catégorie rare et sans conséquence est acceptable ; sur « urgent », il ne l'est pas.",
          ],
          bad: "Justesse : 91 %.",
          good: "Bogue 95 % (19/20). Demande de fonctionnalité 88 % (7/8). Urgent 40 % (2/5). La moyenne va bien. Urgent, non, et c'est la seule qui réveille quelqu'un.",
          note: "Une moyenne masque précisément ce type de problème. L'évaluation par catégorie demande quatre minutes de plus, et c'est le seul chiffre qui indique quoi faire.",
          reward: "Vous avez identifié la catégorie défaillante. Une moyenne vous aurait laissé croire que tout allait bien.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  extraction: {
    primer: {
      plain: 'It reads invoices, contracts or forms and turns them into neat columns you can put in a spreadsheet.',
      like: 'Someone retyping paper forms into a database, except they never get tired and never leave a box empty because they guessed.',
      need: [
        'Ten real documents of the same kind. Including two that are badly scanned or oddly laid out.',
        'The list of fields you actually need. Not every field on the page.',
        'A decision, per field, on what to do when it is missing.',
      ],
      words: [
        { term: 'Schema', says: 'The list of fields, their types, and what each one means. Written before anything else.' },
        { term: 'Null', says: 'The value that means "not present". Different from zero, and different from empty.' },
        { term: 'Span', says: 'Where in the document a value came from. The extraction equivalent of a quote.' },
      ],
    },
    steps: [
      {
        why: 'Everyone starts by running the model and seeing what comes out. What comes out is a shape that changes per document, which you then spend a week normalising. The schema first is faster, and it forces the questions you were avoiding.',
        how: [
          'List only the fields you will actually use downstream.',
          'Give each a type: text, number, date, yes or no.',
          'For each, write what missing looks like, and whether missing is allowed.',
        ],
        bad: 'Extract all relevant information from the invoice.',
        good: 'invoice_number: text, required. total_incl_tax: number, required. due_date: date, may be null if the invoice says "on receipt". vat_number: text, may be null.',
        note: '"Relevant" is decided by the model, differently each time. The right version is a contract, and everything downstream can rely on it.',
        stage: 'define',
        reward: 'You have a schema. Every argument you would have had in three weeks just happened in ten minutes.',
      },
      {
        why: 'A missing field and an empty field mean different things, and a model will happily return something plausible for both. A plausible VAT number in a clean table is discovered during an audit, three months later.',
        how: [
          'Say it explicitly: return null rather than a guess.',
          'Forbid inferring a value from other fields.',
          'Add: if the document is unreadable, return null for everything and say so.',
        ],
        bad: 'Fill in every field as accurately as possible.',
        good: 'If a value is not printed in the document, return null. Never infer a value from another field or from what is typical. If the page is unreadable, return null for every field and set unreadable to true.',
        note: '"As accurately as possible" is read by the model as "always produce something". The right version makes an empty cell the correct answer.',
        stage: 'constrain',
        reward: 'Your extractor can now return nothing. An empty cell you can trust beats a full one you cannot.',
      },
      {
        why: 'A value without a location cannot be checked. With one, anyone can verify a whole batch in minutes by looking at the highlighted places instead of rereading the documents.',
        how: [
          'Require, next to each value, the exact text it was read from.',
          'Require the page or line number where it appeared.',
          'Spot-check ten values by looking only at the spans.',
        ],
        bad: 'total_incl_tax: 1240.50',
        good: 'total_incl_tax: 1240.50, read from "TOTAL TTC 1 240,50 EUR", page 2, line 14.',
        note: 'When a span is wrong but the value looks right, you have found a document layout that will break silently on the next batch.',
        stage: 'expose',
        reward: 'Every number now points at where it came from. Checking a hundred documents just became a ten minute job.',
      },
      {
        why: 'Extraction works beautifully on tidy documents, and tidy documents are not the ones that cost you money. The two ugly ones you set aside are the entire test.',
        how: [
          'Run it on the two badly scanned or oddly laid out documents.',
          'Check it returned nulls rather than inventions.',
          'If you had to exclude a document to make it work, write down why. That is a real limit of your agent.',
        ],
        bad: 'It worked on nine out of ten, good enough.',
        good: 'It returned nulls on the rotated scan instead of guessing. The handwritten one we excluded: handwriting is out of scope, and we say so.',
        note: 'A named limit is a feature. An unnamed one is a bug that arrives on a Friday.',
        stage: 'test',
        reward: 'It failed honestly on the hard ones. You now know exactly where your agent stops.',
      },
    ],
    fr: {
      primer: {
        plain: "Il lit des factures, des contrats ou des formulaires et les transforme en colonnes structurées, exploitables dans un tableur.",
        like: "Une personne qui ressaisit des formulaires papier dans une base de données, à ceci près qu'elle ne se fatigue jamais et ne remplit jamais une case en devinant.",
        need: [
          "Dix documents réels du même type, dont deux mal numérisés ou mis en page de façon inhabituelle.",
          "La liste des champs dont vous avez réellement besoin, et non tous les champs de la page.",
          "Une décision, pour chaque champ, sur la conduite à tenir lorsqu'il est absent.",
        ],
        words: [
          { term: "Schéma", says: "La liste des champs, leur type et la signification de chacun. Elle se rédige avant toute autre chose." },
          { term: "Vide", says: "La valeur qui signifie « absent ». Elle diffère de zéro, comme de la chaîne vide." },
          { term: "Emplacement", says: "L'endroit du document dont provient une valeur. C'est l'équivalent de la citation dans l'extraction." },
        ],
      },
      steps: [
        {
          why: "Tout le monde commence par exécuter le modèle et observer le résultat. Or ce résultat prend une forme qui varie d'un document à l'autre, et que l'on passe ensuite une semaine à normaliser. Commencer par le schéma est plus rapide, et oblige à se poser les questions que l'on évitait.",
          how: [
            "Ne listez que les champs que vous utiliserez en aval.",
            "Attribuez un type à chacun : texte, nombre, date, oui ou non.",
            "Pour chacun, précisez comment se manifeste l'absence, et si elle est autorisée.",
          ],
          bad: "Extrais toutes les informations pertinentes de la facture.",
          good: "numero_facture : texte, obligatoire. total_ttc : nombre, obligatoire. date_echeance : date, peut être vide si la facture indique « à réception ». numero_tva : texte, peut être vide.",
          note: "« Pertinent » est décidé par le modèle, différemment à chaque fois. La seconde version est un contrat, sur lequel tout le traitement en aval peut s'appuyer.",
          reward: "Vous disposez d'un schéma. Chaque débat que vous auriez eu dans trois semaines vient d'être tranché en dix minutes.",
        },
        {
          why: "Un champ absent et un champ vide n'ont pas la même signification, et un modèle renverra sans hésiter une valeur plausible dans les deux cas. Un numéro de TVA plausible dans un tableau net se découvre lors d'un audit, trois mois plus tard.",
          how: [
            "Formulez-le explicitement : renvoyer une valeur vide plutôt qu'une supposition.",
            "Interdisez de déduire une valeur à partir d'autres champs.",
            "Ajoutez : si le document est illisible, renvoyer une valeur vide pour chaque champ et le signaler.",
          ],
          bad: "Remplis chaque champ le plus précisément possible.",
          good: "Si une valeur n'est pas imprimée dans le document, rends un vide. Ne déduis jamais une valeur depuis un autre champ ni depuis ce qui est habituel. Si la page est illisible, rends un vide pour chaque champ et mets illisible à vrai.",
          note: "« Le plus précisément possible » est compris par le modèle comme « produis toujours quelque chose ». La seconde version fait d'une case vide la réponse correcte.",
          reward: "Votre extracteur peut désormais ne rien renvoyer. Une case vide fiable vaut mieux qu'une case remplie dont on doute.",
        },
        {
          why: "Une valeur sans localisation ne peut pas être vérifiée. Avec une localisation, n'importe qui vérifie un lot entier en quelques minutes en consultant les endroits indiqués au lieu de relire les documents.",
          how: [
            "Exigez, à côté de chaque valeur, le texte exact dont elle a été extraite.",
            "Exigez le numéro de page ou de ligne où il figurait.",
            "Contrôlez dix valeurs au hasard en ne consultant que leur localisation.",
          ],
          bad: "total_ttc : 1240,50",
          good: "total_ttc : 1240,50, lu depuis « TOTAL TTC 1 240,50 EUR », page 2, ligne 14.",
          note: "Lorsqu'une localisation est erronée alors que la valeur paraît correcte, vous avez identifié une mise en page qui échouera silencieusement au prochain lot.",
          reward: "Chaque nombre renvoie désormais à son origine. Vérifier cent documents devient un travail de dix minutes.",
        },
        {
          why: "L'extraction fonctionne parfaitement sur les documents bien structurés, mais ce ne sont pas ceux qui vous coûtent de l'argent. Les deux documents difficiles que vous avez mis de côté constituent l'essentiel du test.",
          how: [
            "Exécutez-le sur les deux documents mal numérisés ou mis en page de façon inhabituelle.",
            "Vérifiez qu'il a renvoyé des valeurs vides plutôt que des inventions.",
            "Si vous avez dû exclure un document pour obtenir un résultat, notez-en la raison. C'est une limite réelle de votre agent.",
          ],
          bad: "Ça a marché sur neuf sur dix, c'est assez bien.",
          good: "Il a rendu des vides sur le scan pivoté au lieu de deviner. Le manuscrit, nous l'avons exclu : l'écriture à la main est hors périmètre, et nous le disons.",
          note: "Une limite nommée est une caractéristique. Une limite passée sous silence est un défaut qui se manifeste un vendredi.",
          reward: "Il a échoué honnêtement sur les cas difficiles. Vous savez désormais exactement où s'arrête votre agent.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  watch: {
    primer: {
      plain: 'It looks at a page, a price or a competitor on a schedule, and tells you only when something actually changed.',
      like: 'A night watchman. If they radio in every hour to say all is well, you stop listening, and you miss the one call that mattered.',
      need: [
        'One source you genuinely check by hand today.',
        'The decision this feeds. If there is none, do not build this agent.',
        'Somewhere to keep what the source said last time.',
      ],
      words: [
        { term: 'Diff', says: 'The difference between now and last time. The only thing a watcher should ever report.' },
        { term: 'Noise', says: 'A change that is real but means nothing. A date in a footer, a reworded sentence.' },
      ],
    },
    steps: [
      {
        why: 'Every page changes constantly: timestamps, session ids, reworded sentences. Without a definition of "changed", your watcher reports every run, and reporting every run is the same as reporting nothing.',
        how: [
          'Write what counts as a change for THIS source: a price moving, a plan appearing or disappearing, a named feature.',
          'Write what does not: wording, layout, dates in footers, anything below a threshold.',
          'Decide whether a reworded paragraph is a change. Most of the time it is not, and saying so out loud saves you weeks.',
        ],
        bad: 'Tell me when the competitor updates their pricing page.',
        good: 'A change is: a number in the price table moving, a plan name appearing or disappearing, or a feature added to or removed from a plan. Rewording, layout and footer dates are not changes.',
        note: 'The right version is a filter the agent can apply. The left one asks it to guess what you care about, and it will guess differently each week.',
        stage: 'define',
        reward: 'You have defined what "changed" means. Nine tenths of a watcher is this sentence.',
      },
      {
        why: 'On a quiet week, a model asked to write a report will write one. It reaches for adjectives, and you end up reading "continued strong momentum" about a page that did not move a pixel.',
        how: [
          'Ban the filler words outright: significant, notable, continued, momentum, robust.',
          'Write the exact message for a week with no changes.',
          'Make that message short enough that seeing it is instant.',
        ],
        bad: 'Summarise any notable developments this week.',
        good: 'Report only changes that match the definition above. If there are none, reply with exactly: "No changes." Never use: significant, notable, continued, momentum.',
        note: '"No changes." is a good report. It takes one second to read and it is true, which is more than most weekly reports manage.',
        stage: 'constrain',
        reward: 'Your watcher can now say nothing happened. It will earn its keep on the week it says something did.',
      },
      {
        why: 'You cannot report a difference without keeping the previous state. This is the step people skip, and it is why their watcher reports the whole page every time as if all of it were new.',
        how: [
          'Save what the source said on each run.',
          'Compare against the last saved version, not against the model\'s memory.',
          'Decide who owns that store and how long it is kept.',
        ],
        bad: 'Check the page each week and tell me what is new.',
        good: 'Read the page. Compare against the saved copy from last run. Report only the differences, then save the new copy.',
        note: 'A model has no memory between runs. "What is new" means nothing to it unless you hand it the old version.',
        stage: 'expose',
        reward: 'Your watcher now has a yesterday. Without one, every day looks like the first.',
      },
      {
        why: 'Cadence should come from the decision, not from the calendar. A weekly report feeding a quarterly decision is eleven reports nobody reads and a habit of ignoring the twelfth.',
        how: [
          'Name the decision this feeds.',
          'Ask how often that decision is genuinely made.',
          'Set the rhythm to match, then halve the frequency and see if anything breaks.',
        ],
        bad: 'Run it every morning so we stay on top of it.',
        good: 'This feeds the quarterly pricing review. It runs monthly, and it pages us immediately only if a price moves more than ten percent.',
        note: 'Two rhythms, not one: a slow one for the report, an instant one for the thing that cannot wait. Most watchers have only the first and page you with it.',
        stage: 'measure',
        reward: 'The rhythm now comes from a decision instead of a habit. Your watcher will still be read in six months.',
      },
    ],
    fr: {
      primer: {
        plain: "Elle surveille une page, un prix ou un concurrent à intervalle régulier, et ne vous signale que ce qui a réellement changé.",
        like: "Un veilleur de nuit. S'il appelle toutes les heures pour dire que tout va bien, vous cessez d'écouter, et vous manquez le seul appel qui comptait.",
        need: [
          "Une source que vous vérifiez réellement à la main aujourd'hui.",
          "La décision que cette surveillance éclaire. S'il n'en existe aucune, ne construisez pas cet agent.",
          "Un emplacement où conserver le contenu précédent de la source.",
        ],
        words: [
          { term: "Différence", says: "L'écart entre l'état actuel et l'état précédent. C'est la seule chose qu'une sentinelle devrait signaler." },
          { term: "Bruit", says: "Un changement réel mais dépourvu de signification : une date en pied de page, une phrase reformulée." },
        ],
      },
      steps: [
        {
          why: "Toute page change en permanence : horodatages, identifiants de session, phrases reformulées. Sans définition de « changé », votre sentinelle s'exprime à chaque passage, ce qui revient à ne rien dire.",
          how: [
            "Définissez ce qui constitue un changement pour CETTE source : un prix qui évolue, une formule qui apparaît ou disparaît, une fonctionnalité nommée.",
            "Définissez ce qui n'en est pas : la formulation, la mise en page, les dates de pied de page, tout ce qui reste sous un certain seuil.",
            "Décidez si un paragraphe reformulé constitue un changement. Le plus souvent, ce n'est pas le cas, et le formuler explicitement vous épargne des semaines.",
          ],
          bad: "Préviens-moi quand le concurrent met à jour sa page de tarifs.",
          good: "Un changement est : un nombre du tableau de prix qui bouge, un nom de formule qui apparaît ou disparaît, ou une fonctionnalité ajoutée ou retirée d'une formule. La reformulation, la mise en page et les dates de pied de page ne sont pas des changements.",
          note: "La seconde version est un filtre que l'agent peut appliquer. La première lui demande de deviner ce qui vous importe, et il le devinera différemment chaque semaine.",
          reward: "Vous avez défini ce que signifie « changé ». Les neuf dixièmes d'une sentinelle tiennent dans cette phrase.",
        },
        {
          why: "Lors d'une semaine calme, un modèle chargé de rédiger un rapport en rédigera un. Il recourt aux adjectifs, et vous finissez par lire « dynamique toujours soutenue » à propos d'une page qui n'a pas changé d'un pixel.",
          how: [
            "Interdisez explicitement les mots de remplissage : significatif, notable, continu, dynamique, solide.",
            "Rédigez le message exact correspondant à une semaine sans changement.",
            "Rendez ce message assez court pour être lu d'un coup d'oeil.",
          ],
          bad: "Résume les évolutions notables de la semaine.",
          good: "Ne signale que les changements qui correspondent à la définition ci-dessus. S'il n'y en a aucun, réponds exactement : « Aucun changement. » N'emploie jamais : significatif, notable, continu, dynamique.",
          note: "« Aucun changement. » constitue un bon rapport. Il se lit en une seconde et il est exact, ce dont peu de rapports hebdomadaires peuvent se prévaloir.",
          reward: "Votre sentinelle peut désormais signaler qu'il ne s'est rien passé. Elle démontrera son utilité la semaine où elle signalera le contraire.",
        },
        {
          why: "On ne peut pas signaler une différence sans conserver l'état précédent. C'est l'étape que l'on omet le plus souvent, et c'est pourquoi tant de sentinelles signalent la page entière à chaque fois, comme si tout était nouveau.",
          how: [
            "Enregistrez le contenu de la source à chaque passage.",
            "Comparez-le à la dernière version enregistrée, et non à la mémoire du modèle.",
            "Désignez le responsable de cet historique et fixez sa durée de conservation.",
          ],
          bad: "Vérifie la page chaque semaine et dis-moi ce qui est nouveau.",
          good: "Lis la page. Compare à la copie enregistrée du passage précédent. Ne signale que les différences, puis enregistre la nouvelle copie.",
          note: "Un modèle n'a aucune mémoire d'un passage à l'autre. « Ce qui est nouveau » n'a aucun sens pour lui si vous ne lui fournissez pas la version précédente.",
          reward: "Votre sentinelle dispose désormais d'une mémoire de la veille. Sans elle, chaque jour ressemble au premier.",
        },
        {
          why: "La fréquence doit découler de la décision, et non du calendrier. Un rapport hebdomadaire qui éclaire une décision trimestrielle, ce sont onze rapports que personne ne lit et l'habitude d'ignorer le douzième.",
          how: [
            "Nommez la décision que cette surveillance éclaire.",
            "Demandez-vous à quelle fréquence cette décision est réellement prise.",
            "Réglez la fréquence en conséquence, puis divisez-la par deux et observez si quelque chose se dégrade.",
          ],
          bad: "Lance-le chaque matin pour qu'on reste au courant.",
          good: "Ceci alimente la revue trimestrielle des prix. Ça tourne une fois par mois, et ça nous alerte immédiatement seulement si un prix bouge de plus de dix pour cent.",
          note: "Deux rythmes, et non un seul : un rythme lent pour le rapport, une alerte immédiate pour ce qui ne peut pas attendre. La plupart des sentinelles ne disposent que du premier, et l'utilisent pour vous alerter.",
          reward: "La fréquence découle désormais d'une décision et non d'une habitude. Votre sentinelle sera encore lue dans six mois.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  planning: {
    primer: {
      plain: 'It turns a goal written in one line into an ordered list of steps, each with an owner and a result you can see.',
      like: 'A project manager on their first day: the useful ones ask five awkward questions before writing anything. The rest hand you a beautiful plan for the wrong thing.',
      need: [
        'A real goal you have written down. One line is fine, that is the point.',
        'The names of the people who would do the work.',
        'A tolerance for being asked what you actually meant.',
      ],
      words: [
        { term: 'Acceptance criteria', says: 'How you will know a step is done, written so two people cannot disagree.' },
        { term: 'Working backwards', says: 'Starting from the finished thing and asking what had to happen just before.' },
      ],
    },
    steps: [
      {
        why: 'A goal like "improve onboarding" cannot be planned, only interpreted, and five people will interpret it five ways. A goal you could photograph can be planned, and the act of writing it settles most arguments before they start.',
        how: [
          'Rewrite the goal as a thing that exists at the end.',
          'Ask: how would I know it is done without asking anyone?',
          'If the answer is a feeling, keep rewriting.',
        ],
        bad: 'Improve our onboarding.',
        good: 'A new user reaches their first saved project without help, and we can see that in the numbers for four weeks running.',
        note: 'The right one can be true or false on a given Tuesday. The left one can be argued about forever, and will be.',
        stage: 'define',
        reward: 'Your goal is now a thing that either exists or does not. Half the disagreements just disappeared.',
      },
      {
        why: 'Plans written forwards fill up with steps that seemed like a good idea. Plans written backwards only contain steps something else actually needs, which is usually half as many.',
        how: [
          'Start from the finished thing and ask what had to be true immediately before it.',
          'Repeat until you reach something you can do on Monday.',
          'Then look for steps that nothing downstream depends on. Delete them.',
        ],
        bad: 'Step 1: research. Step 2: design. Step 3: build. Step 4: launch.',
        good: 'For a user to reach a saved project, saving must work. For saving to work, accounts must exist. For accounts to exist, we must pick a provider. That is Monday.',
        note: 'The left plan fits any project, which means it describes none. The right one is specific enough to be wrong, which is what makes it useful.',
        stage: 'constrain',
        reward: 'Your plan now contains only steps something needs. That is usually half the list you started with.',
      },
      {
        why: 'A planner given a vague goal will resolve every ambiguity by guessing, silently, and hand you a tidy plan. The guesses are invisible, and you find them during the work.',
        how: [
          'Require a section: "Open questions". It must not be empty.',
          'Require it to list what it wanted to assume and what it assumed instead.',
          'Answer them yourself before the work starts.',
        ],
        bad: 'Ask me if anything is unclear.',
        good: 'End with "Open questions", which must not be empty. For each: what you needed to know, what you assumed instead, and what changes in the plan if the assumption is wrong.',
        note: '"Ask if anything is unclear" is never taken up, because producing a plan feels like the job. A required section makes the assumptions visible.',
        stage: 'expose',
        reward: 'The guesses are on the page now instead of in the work. That list is the most valuable part of the plan.',
      },
      {
        why: 'A step without an observable result is a step two people will declare done at different times. That is where projects quietly slip, and nobody can point at when.',
        how: [
          'For each step, write what exists at the end of it.',
          'Check that two people could look at it and agree.',
          'If they could disagree, the step is not defined yet.',
        ],
        bad: 'Step 3: improve the sign-up flow.',
        good: 'Step 3: a sign-up form that accepts an email and creates an account, live behind a flag. Done means: a colleague can sign up on staging without you.',
        note: 'The test is not whether it sounds clear. It is whether two people checking it separately would reach the same verdict.',
        stage: 'test',
        reward: 'Every step now ends in something you can point at. Nobody will have to ask whether it is done.',
      },
    ],
    fr: {
      primer: {
        plain: "Il transforme un objectif formulé en une ligne en une liste ordonnée d'étapes, chacune assortie d'un responsable et d'un résultat observable.",
        like: "Un chef de projet à son premier jour : les meilleurs posent cinq questions embarrassantes avant d'écrire quoi que ce soit. Les autres vous remettent un plan soigné pour le mauvais objectif.",
        need: [
          "Un objectif réel que vous avez rédigé. Une ligne suffit : c'est précisément le sujet.",
          "Le nom des personnes qui réaliseraient le travail.",
          "L'acceptation d'être interrogé sur ce que vous vouliez dire.",
        ],
        words: [
          { term: "Critères d'acceptation", says: "La manière de savoir qu'une étape est terminée, formulée de sorte que deux personnes ne puissent pas diverger." },
          { term: "Remonter depuis la fin", says: "Partir du résultat final et se demander ce qui devait se produire juste avant." },
        ],
      },
      steps: [
        {
          why: "Un objectif comme « améliorer l'accueil des nouveaux » ne se planifie pas : il s'interprète, et cinq personnes l'interpréteront de cinq façons. Un objectif suffisamment concret pour être photographié se planifie, et le simple fait de le formuler règle la plupart des désaccords avant qu'ils n'apparaissent.",
          how: [
            "Reformulez l'objectif comme un élément qui existe à la fin du travail.",
            "Demandez-vous : comment saurais-je que c'est terminé sans interroger personne ?",
            "Si la réponse relève de l'impression, poursuivez la reformulation.",
          ],
          bad: "Améliorer notre accueil des nouveaux.",
          good: "Un nouvel utilisateur atteint son premier projet enregistré sans aide, et nous le voyons dans les chiffres quatre semaines d'affilée.",
          note: "Le second peut être vrai ou faux un mardi donné. Le premier peut être discuté indéfiniment, et il le sera.",
          reward: "Votre objectif est devenu un élément qui existe ou n'existe pas. La moitié des désaccords viennent de disparaître.",
        },
        {
          why: "Les plans rédigés du début vers la fin se remplissent d'étapes qui semblaient être de bonnes idées. Les plans rédigés à rebours ne contiennent que des étapes dont un autre élément a réellement besoin, et ils en comptent généralement deux fois moins.",
          how: [
            "Partez du résultat final et demandez-vous ce qui devait être vrai juste avant.",
            "Répétez l'opération jusqu'à aboutir à une action réalisable dès lundi.",
            "Recherchez ensuite les étapes dont rien ne dépend en aval, et supprimez-les.",
          ],
          bad: "Étape 1 : recherche. Étape 2 : conception. Étape 3 : développement. Étape 4 : lancement.",
          good: "Pour qu'un utilisateur atteigne un projet enregistré, l'enregistrement doit marcher. Pour qu'il marche, les comptes doivent exister. Pour que les comptes existent, il faut choisir un provider. C'est ça, lundi.",
          note: "Le premier plan convient à n'importe quel projet, ce qui signifie qu'il n'en décrit aucun. Le second est assez précis pour pouvoir être faux, et c'est ce qui le rend utile.",
          reward: "Votre plan ne contient plus que des étapes nécessaires. C'est généralement la moitié de la liste initiale.",
        },
        {
          why: "Un planificateur confronté à un objectif flou tranchera chaque ambiguïté par supposition, silencieusement, et vous remettra un plan soigné. Ces suppositions sont invisibles, et vous les découvrez pendant le travail.",
          how: [
            "Exigez une section « Questions ouvertes ». Elle ne doit pas rester vide.",
            "Exigez qu'elle recense ce qu'il aurait eu besoin de savoir et ce qu'il a supposé à la place.",
            "Répondez-y vous-même avant le début du travail.",
          ],
          bad: "Demande-moi si quelque chose n'est pas clair.",
          good: "Termine par « Questions ouvertes », qui ne doit pas être vide. Pour chacune : ce qu'il te fallait savoir, ce que tu as supposé à la place, et ce qui change dans le plan si la supposition est fausse.",
          note: "« Demande si ce n'est pas clair » n'est jamais suivi d'effet, car produire un plan donne le sentiment d'avoir accompli le travail. Une section obligatoire, en revanche, rend les suppositions visibles.",
          reward: "Les suppositions figurent sur la page au lieu de se cacher dans le travail. Cette liste est la partie la plus précieuse du plan.",
        },
        {
          why: "Une étape sans résultat observable sera déclarée terminée par deux personnes à des moments différents. C'est ainsi que les projets prennent du retard en silence, sans que personne sache dire quand.",
          how: [
            "Pour chaque étape, précisez ce qui existe à son terme.",
            "Vérifiez que deux personnes pourraient l'examiner et tomber d'accord.",
            "Si elles pouvaient diverger, l'étape n'est pas encore définie.",
          ],
          bad: "Étape 3 : améliorer le parcours d'inscription.",
          good: "Étape 3 : un formulaire d'inscription qui accepte un courriel et crée un compte, en ligne derrière un drapeau. Fini veut dire : un collègue peut s'inscrire sur la préproduction sans vous.",
          note: "Le critère n'est pas la clarté apparente, mais la question de savoir si deux personnes vérifiant chacune de leur côté rendraient le même verdict.",
          reward: "Chaque étape aboutit désormais à un élément concret que l'on peut montrer. Personne n'aura à demander si elle est terminée.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  tools: {
    primer: {
      plain: 'It does things in your real systems: sends the email, updates the record, opens the ticket.',
      like: 'Giving a new colleague the keys. The question is never how capable they are; it is which doors the keys open, and whether anything they do can be undone.',
      need: [
        'One system you would let it touch, and a list of what it may do there.',
        'The answer to: what is the worst single action it could take today?',
        'A test account. Not the real one, not for the first run.',
      ],
      words: [
        { term: 'Blast radius', says: 'Everything that could be affected if it goes wrong. Almost always bigger than you first think.' },
        { term: 'Read only', says: 'It can look but cannot change anything. Where every tool agent should start.' },
        { term: 'Human in the loop', says: 'A person says yes before the action happens.' },
      ],
    },
    steps: [
      {
        why: 'The prompt is the easy part of a tool agent. The work is deciding what it may never touch, and proving it cannot, before anything runs. People do this after the first incident.',
        how: [
          'Write three lists: what it may read, what it may change, what it must never touch.',
          'Answer out loud: what is the worst single action it could take today?',
          'If that answer frightens you, the third list is too short.',
        ],
        bad: 'It has access to our CRM.',
        good: 'May read: contacts, deals. May change: deal notes, deal stage. Must never touch: contact deletion, billing, anything in the Closed Won pipeline. Worst case today: it moves a live deal backwards, which we can undo from the audit log.',
        note: 'The worst-case sentence is the one that matters. If you cannot write it, you do not yet know what you have handed over.',
        stage: 'bound',
        reward: 'You can name the worst thing it could do. Most people building these cannot.',
      },
      {
        why: 'A surprising share of any job is reading, and reading cannot break anything. Splitting the two gives you something useful on day one while the risky half is still being thought about.',
        how: [
          'Build the read-only version first and use it for a week.',
          'Note how much of the job it already did.',
          'Add write access one action at a time, not as a group.',
        ],
        bad: 'Give it full access so it can do the whole job.',
        good: 'Week one: read only. It drafts the update and I paste it. Week two: it writes deal notes, nothing else. Deal stage comes later, if ever.',
        note: 'Most people discover the read-only version covers most of the value. The risky half was never the point.',
        stage: 'constrain',
        reward: 'You have a version that cannot break anything. Ship that one first.',
      },
      {
        why: 'An approval step that shows too little is worse than none: people click yes without reading, and now the mistake has a signature on it. What the approver sees is the design problem.',
        how: [
          'Decide exactly what the approver sees: the action, the target, the before and after.',
          'Make it decidable in five seconds.',
          'Test it on yourself when you are busy and slightly annoyed. That is the real condition.',
        ],
        bad: 'Agent wants to update a record. Approve? [Yes] [No]',
        good: 'Move deal "Acme, 12k" from Negotiation to Closed Won. Owner: Sam. Because: the customer replied "we are signing". [Approve] [Reject]',
        note: 'The left one will be approved without being read within a week. The right one can be judged without opening anything else.',
        stage: 'expose',
        reward: 'Your approval step is now readable in five seconds. That is the only kind anyone actually reads.',
      },
      {
        why: 'Undo is what makes the rest survivable. Without it, every mistake is permanent and every approval carries the full weight of the decision.',
        how: [
          'For each allowed action, write how it is reversed.',
          'Where there is no reversal, either forbid the action or require a person to perform it.',
          'Keep a log of what was done, with enough detail to reverse it by hand.',
        ],
        bad: 'Be careful with destructive actions.',
        good: 'Deal stage: reversible from the audit log. Note added: reversible by deleting it. Email sent: NOT reversible, therefore a person sends it. Contact deleted: forbidden outright.',
        note: '"Be careful" is not a control. The right version turns each action into one of three cases, and only one of them needs a human.',
        stage: 'test',
        reward: 'Every action it may take can be taken back, or it is not allowed to take it. You can sleep now.',
      },
    ],
    fr: {
      primer: {
        plain: "Il agit dans vos systèmes réels : il envoie le courriel, met à jour la fiche, ouvre le ticket.",
        like: "Confier les clés à un nouveau collègue. La question n'est jamais de savoir s'il est compétent, mais quelles portes ces clés ouvrent, et si ses actions peuvent être annulées.",
        need: [
          "Un système auquel vous l'autoriseriez à accéder, et la liste de ce qu'il peut y faire.",
          "La réponse à la question : quelle est la pire action qu'il pourrait accomplir aujourd'hui ?",
          "Un compte de test : pas le compte réel, du moins pas pour le premier essai.",
        ],
        words: [
          { term: "Rayon d'action", says: "Tout ce qui pourrait être affecté en cas de problème. Il est presque toujours plus étendu qu'on ne le pense au départ." },
          { term: "Lecture seule", says: "Il peut consulter, mais ne peut rien modifier. C'est par là que tout agent doté d'outils devrait commencer." },
          { term: "Humain dans la boucle", says: "Une personne donne son accord avant que l'action ait lieu." },
        ],
      },
      steps: [
        {
          why: "Le prompt est la partie facile d'un agent doté d'outils. Le véritable travail consiste à décider ce qu'il ne doit jamais toucher, et à prouver qu'il ne le peut pas, avant toute exécution. La plupart des équipes ne le font qu'après le premier incident.",
          how: [
            "Rédigez trois listes : ce qu'il peut lire, ce qu'il peut modifier, ce qu'il ne doit jamais toucher.",
            "Répondez à voix haute : quelle est la pire action qu'il pourrait accomplir aujourd'hui ?",
            "Si cette réponse vous inquiète, la troisième liste est trop courte.",
          ],
          bad: "Il a accès à notre CRM.",
          good: "Peut lire : contacts, affaires. Peut modifier : les notes d'affaire, l'étape d'affaire. Ne doit jamais toucher : la suppression de contacts, la facturation, tout ce qui est dans le tunnel Gagné. Pire cas aujourd'hui : il fait reculer une affaire en cours, ce qu'on peut défaire depuis le journal d'audit.",
          note: "La phrase décrivant le pire cas est celle qui compte. Si vous ne pouvez pas la rédiger, vous ne savez pas encore ce que vous avez confié.",
          reward: "Vous savez nommer la pire action qu'il pourrait accomplir. La plupart de ceux qui construisent ce type d'agent en sont incapables.",
        },
        {
          why: "Une part étonnante de tout travail consiste à lire, et la lecture ne détruit rien. Séparer lecture et écriture vous fournit un outil utile dès le premier jour, pendant que la partie risquée est encore à l'étude.",
          how: [
            "Construisez d'abord la version en lecture seule et utilisez-la pendant une semaine.",
            "Notez la part du travail qu'elle accomplissait déjà.",
            "Ajoutez l'écriture une action à la fois, et non en bloc.",
          ],
          bad: "Donne-lui tous les accès pour qu'il puisse faire tout le travail.",
          good: "Semaine un : lecture seule. Il rédige la mise à jour et je la colle. Semaine deux : il écrit les notes d'affaire, rien d'autre. L'étape d'affaire viendra plus tard, si jamais.",
          note: "La plupart des utilisateurs découvrent que la version en lecture seule apporte l'essentiel de la valeur. La partie risquée n'était pas l'enjeu principal.",
          reward: "Vous disposez d'une version qui ne peut rien endommager. Mettez-la en service en premier.",
        },
        {
          why: "Une étape d'approbation qui montre trop peu est pire que l'absence d'approbation : les utilisateurs acceptent sans lire, et l'erreur porte désormais une signature. Ce que voit la personne qui approuve constitue le véritable problème de conception.",
          how: [
            "Définissez précisément ce que voit la personne qui approuve : l'action, la cible, l'état avant et l'état après.",
            "Faites en sorte que la décision puisse être prise en cinq secondes.",
            "Testez-la sur vous-même lorsque vous êtes pressé et légèrement contrarié : ce sont les conditions réelles.",
          ],
          bad: "L'agent veut mettre à jour une fiche. Approuver ? [Oui] [Non]",
          good: "Déplacer l'affaire « Acme, 12 k » de Négociation à Gagné. Responsable : Sam. Parce que : le client a répondu « nous signons ». [Approuver] [Refuser]",
          note: "La première sera approuvée sans être lue en moins d'une semaine. La seconde se juge sans rien ouvrir d'autre.",
          reward: "Votre étape d'approbation se lit en cinq secondes. C'est la seule que les gens lisent réellement.",
        },
        {
          why: "La possibilité de revenir en arrière est ce qui rend le reste supportable. Sans elle, chaque erreur est définitive et chaque approbation porte tout le poids de la décision.",
          how: [
            "Pour chaque action autorisée, décrivez la manière de l'annuler.",
            "Lorsqu'une action est irréversible, interdisez-la ou exigez qu'une personne l'exécute.",
            "Tenez un journal des actions effectuées, suffisamment détaillé pour les annuler manuellement.",
          ],
          bad: "Fais attention avec les actions destructrices.",
          good: "Étape d'affaire : réversible depuis le journal d'audit. Note ajoutée : réversible en la supprimant. Courriel envoyé : NON réversible, donc c'est une personne qui l'envoie. Contact supprimé : purement interdit.",
          note: "« Fais attention » n'est pas un contrôle. La seconde version classe chaque action dans l'un de trois cas, dont un seul requiert un humain.",
          reward: "Chaque action qu'il peut accomplir est réversible, ou bien il n'a pas le droit de l'accomplir. Vous pouvez être serein.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  growth: {
    primer: {
      plain: 'It writes several genuinely different versions of something, then reads the results and tells you which to keep.',
      like: 'A copywriter who brings five ideas rather than one idea in five outfits. The second kind is what you get by default.',
      need: [
        'Something you want variants of: a subject line, an ad, a landing headline.',
        'A way to measure the result. Even a rough one.',
        'The number that would make you stop the test. Decided before you start.',
      ],
      words: [
        { term: 'Variant', says: 'One version being tested. Only useful if it differs from the others in a way you chose.' },
        { term: 'Hypothesis', says: 'What you think this variant will prove. Without one, a variant is decoration.' },
        { term: 'Stopping rule', says: 'The result that ends the test, written before it starts so you cannot move it.' },
      ],
    },
    steps: [
      {
        why: 'Ask for twenty variants and you get one idea in twenty outfits: the words change, the argument does not. You then run a test that cannot tell you anything, because nothing was actually different.',
        how: [
          'Name the axis: what MUST differ between variants.',
          'Check it: could two variants differ on your axis and still read the same? Then it is not an axis.',
          'Three variants on a real axis beat twenty on none.',
        ],
        bad: 'Write twenty subject lines for this campaign.',
        good: 'Write three subject lines, each on a different axis: one leads with price, one with time saved, one with a customer name. The wording is yours; the angle is fixed.',
        note: 'Twenty rewordings test the same idea twenty times, at twenty times the cost, and answer nothing.',
        stage: 'define',
        reward: 'Your variants now differ on purpose. A test on them can actually tell you something.',
      },
      {
        why: 'A variant without a hypothesis cannot teach you anything, whether it wins or loses. You learn that one string of words beat another, which does not transfer to the next campaign.',
        how: [
          'Write, next to each variant, what it is testing.',
          'Look for the variant with no hypothesis. Ask why it is there.',
          'Usually it is there to make the list longer. Delete it.',
        ],
        bad: 'Variant A, Variant B, Variant C.',
        good: 'A, leads with price: tests whether this audience is price-driven. B, leads with time saved: tests whether they are time-poor. C, leads with a customer name: tests whether social proof outweighs both.',
        note: 'When B wins, the left version tells you to use B. The right version tells you this audience is time-poor, which is worth far more.',
        stage: 'constrain',
        reward: 'Each variant now has a question attached. Whatever wins, you learn something transferable.',
      },
      {
        why: 'A stopping rule written after the results is not a rule, it is a justification. Everyone knows this and everyone does it anyway, because the numbers arrive and one of them is ahead.',
        how: [
          'Before launching, write the number that ends the test.',
          'Write what you do if the difference is too small to matter.',
          'Put both in writing where someone else can see them.',
        ],
        bad: 'We will see which one performs better.',
        good: 'Stop at 2,000 impressions per variant. Keep the winner only if it beats the current version by more than 15%. If the gap is under 15%, keep the current version and note that the axis did not matter.',
        note: '"Keep the current version" has to be a possible outcome. If the test can only replace, it is not a test.',
        stage: 'measure',
        reward: 'The finish line is written down before the race. You can no longer move it.',
      },
      {
        why: 'The last failure is reading the result the way you hoped. A small difference on a small sample is noise, and a model asked "which won" will name one, because naming one is what was asked.',
        how: [
          'Have it report the numbers, the gap, and whether the gap clears your rule.',
          'Require the words "this is noise" when the gap does not clear it.',
          'Check it can say the test was inconclusive, before you trust it on one that was not.',
        ],
        bad: 'Variant B performed best.',
        good: 'B: 4.1%. A: 3.9%. Gap: 0.2 points on 2,000 impressions. This is noise and does not clear the 15% rule. Recommendation: keep the current version; the axis did not matter.',
        note: 'An agent that can say "this is noise" is an agent you can trust when it says something is not.',
        stage: 'test',
        reward: 'It told you a result was noise. That honesty is worth more than any winner it could have named.',
      },
    ],
    fr: {
      primer: {
        plain: "Il rédige plusieurs versions réellement différentes d'un même contenu, puis analyse les résultats et vous indique laquelle conserver.",
        like: "Un concepteur-rédacteur qui propose cinq idées plutôt qu'une seule idée sous cinq formes. La seconde situation est celle que l'on obtient par défaut.",
        need: [
          "Un contenu pour lequel vous souhaitez des variantes : un objet de courriel, une publicité, un titre de page.",
          "Un moyen de mesurer le résultat, même approximatif.",
          "Le seuil qui mettrait fin au test, fixé avant de commencer.",
        ],
        words: [
          { term: "Variante", says: "Une version testée. Elle n'est utile que si elle diffère des autres selon un critère que vous avez choisi." },
          { term: "Hypothèse", says: "Ce que vous pensez que cette variante démontrera. Sans hypothèse, une variante n'est que décorative." },
          { term: "Règle d'arrêt", says: "Le résultat qui met fin au test, défini avant son lancement afin qu'il ne puisse pas être modifié." },
        ],
      },
      steps: [
        {
          why: "Si vous demandez vingt variantes, vous obtenez une seule idée sous vingt formes : les mots changent, l'argument reste le même. Vous lancez ensuite un test qui ne peut rien vous apprendre, puisque rien ne différait réellement.",
          how: [
            "Nommez l'axe : ce qui DOIT différer d'une variante à l'autre.",
            "Vérifiez-le : deux variantes pourraient-elles différer sur cet axe tout en se lisant de la même façon ? Si oui, ce n'est pas un axe.",
            "Trois variantes sur un axe réel valent mieux que vingt sans axe.",
          ],
          bad: "Écris vingt objets de courriel pour cette campagne.",
          good: "Écris trois objets, chacun sur un axe différent : un qui ouvre sur le prix, un sur le temps gagné, un sur le nom d'un client. La formulation est à toi ; l'angle est fixé.",
          note: "Vingt reformulations testent vingt fois la même idée, pour vingt fois le prix, et ne répondent à aucune question.",
          reward: "Vos variantes diffèrent désormais de façon délibérée. Un test portant sur elles peut réellement vous apprendre quelque chose.",
        },
        {
          why: "Une variante sans hypothèse ne peut rien vous apprendre, qu'elle gagne ou qu'elle perde. Vous apprenez seulement qu'une suite de mots en a battu une autre, ce qui ne se transpose pas à la campagne suivante.",
          how: [
            "Notez, à côté de chaque variante, ce qu'elle teste.",
            "Repérez la variante dépourvue d'hypothèse et demandez-vous pourquoi elle figure dans la liste.",
            "Le plus souvent, elle ne sert qu'à allonger la liste. Supprimez-la.",
          ],
          bad: "Variante A, variante B, variante C.",
          good: "A, ouvre sur le prix : teste si ce public est sensible au prix. B, ouvre sur le temps gagné : teste s'il manque de temps. C, ouvre sur le nom d'un client : teste si la preuve sociale pèse plus que les deux.",
          note: "Si B l'emporte, la première version vous indique d'utiliser B. La seconde vous apprend que ce public manque de temps, ce qui a bien plus de valeur.",
          reward: "Chaque variante porte désormais une question. Quel que soit le résultat, vous apprenez quelque chose de transposable.",
        },
        {
          why: "Une règle d'arrêt rédigée après les résultats n'est pas une règle, mais une justification. Chacun le sait et le fait pourtant, parce que les chiffres arrivent et que l'un d'eux est en tête.",
          how: [
            "Avant le lancement, notez le seuil qui met fin au test.",
            "Notez la conduite à tenir si l'écart est trop faible pour être significatif.",
            "Consignez les deux par écrit, à un endroit accessible à d'autres personnes.",
          ],
          bad: "On verra laquelle marche le mieux.",
          good: "Arrêt à 2 000 affichages par variante. Garder la gagnante seulement si elle bat la version actuelle de plus de 15 %. Si l'écart est sous 15 %, garder la version actuelle et noter que l'axe ne comptait pas.",
          note: "« Garder la version actuelle » doit être une issue possible. Si le test ne peut aboutir qu'à un remplacement, ce n'est pas un test.",
          reward: "La ligne d'arrivée est fixée avant la course. Vous ne pouvez plus la déplacer.",
        },
        {
          why: "Le dernier écueil consiste à interpréter le résultat selon ses espérances. Un faible écart sur un petit échantillon relève du bruit, et un modèle à qui l'on demande « laquelle a gagné » en désignera une, parce que c'est la question posée.",
          how: [
            "Demandez-lui de fournir les chiffres, l'écart, et d'indiquer si cet écart satisfait votre règle.",
            "Exigez la mention « c'est du bruit » lorsque ce n'est pas le cas.",
            "Vérifiez qu'il sait reconnaître un test non concluant avant de lui faire confiance sur un test concluant.",
          ],
          bad: "La variante B a le mieux marché.",
          good: "B : 4,1 %. A : 3,9 %. Écart : 0,2 point sur 2 000 affichages. C'est du bruit et ça ne passe pas la règle des 15 %. Recommandation : garder la version actuelle ; l'axe ne comptait pas.",
          note: "Un agent capable de dire « c'est du bruit » est un agent auquel on peut se fier lorsqu'il affirme le contraire.",
          reward: "Il vous a signalé qu'un résultat relevait du bruit. Cette honnêteté vaut davantage que n'importe quel gagnant qu'il aurait pu désigner.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  orchestration: {
    primer: {
      plain: 'It runs several agents one after another, passes each result to the next, and tells you which one broke when the end is wrong.',
      like: 'A production line. The hard part is never the machines, it is knowing which station produced the faulty part.',
      need: [
        'Two agents you already have working on their own.',
        'A clear idea of what the first hands to the second.',
        'Somewhere to write down what went in and out of each step.',
      ],
      words: [
        { term: 'Contract', says: 'The agreed shape of what one step hands the next. Written down, not assumed.' },
        { term: 'Trace', says: 'The record of what each step received and produced. Without one, a chain is a black box.' },
        { term: 'Idempotent', says: 'Safe to run twice. Sending an email is not; writing a file usually is.' },
      ],
    },
    steps: [
      {
        why: 'Chains break at the joints. Step two receives something slightly different from what it expected, does its best, and produces something slightly wrong. Three steps later the output is nonsense and every step looks innocent.',
        how: [
          'For each joint, write the exact shape that passes through it.',
          'Say what the receiving step does when the shape is wrong: stop, never improvise.',
          'Test each joint by handing it something malformed on purpose.',
        ],
        bad: 'The research agent passes its findings to the writer.',
        good: 'Research hands over: a list of {claim, quote, source} objects, possibly empty. If the writer receives anything else, or a missing quote, it stops and says which field was wrong.',
        note: '"Its findings" is not a shape. The right version is checkable, and the check is what turns a silent corruption into an error message.',
        stage: 'define',
        reward: 'Your steps now have a contract. Breakage happens at the joint instead of three steps later.',
      },
      {
        why: 'If reproducing step three means running one and two, every debug session costs you the whole chain, and you will stop debugging. Each step must run alone on fixed input.',
        how: [
          'Save a real input for each step.',
          'Make sure each step can run on that saved input alone.',
          'Try it: reproduce step three without running one and two.',
        ],
        bad: 'Run the whole pipeline and watch where it goes wrong.',
        good: 'Each step has a saved example input on disk. Debugging step three is: load step-3-input.json, run step three, look.',
        note: 'This is the difference between a five second debug loop and a five minute one, which in practice is the difference between debugging and guessing.',
        stage: 'constrain',
        reward: 'Any step can now be run on its own. Your debugging just got a hundred times faster.',
      },
      {
        why: 'When the output is wrong at the end, every step upstream is a suspect. A trace turns that into a two minute read. Without one you are re-running the chain and changing prompts at random.',
        how: [
          'Record what went into and out of every step.',
          'Keep enough to reproduce, not more: a trace is also a pile of your data.',
          'Decide how long it is kept and who can read it.',
        ],
        bad: 'Log any errors.',
        good: 'Record per step: the input, the output, the time, the model. Kept 30 days, readable by the team, and customer names are removed before it is written.',
        note: 'Errors are the easy case; they announce themselves. The expensive failures are the ones where every step succeeded and the answer is still wrong.',
        stage: 'expose',
        reward: 'You can now see inside your chain. It stopped being a black box with extra cost.',
      },
      {
        why: 'Retrying is the reflex, and it is wrong for any step that acts in the world. Retrying an email sends two. The failure policy has to be decided per step, before something fails at three in the morning.',
        how: [
          'For each step, pick one: retry, skip, stop, or ask a human.',
          'Name the steps that must NEVER be retried, and why.',
          'Decide what the user sees when the chain stops halfway.',
        ],
        bad: 'Retry on failure, up to three times.',
        good: 'Research: retry twice, it is read only. Write: retry once. Send email: never retry, stop and ask a human, because a retry sends a second email. Half-finished chains show the user what completed.',
        note: 'A blanket retry policy is safe for reading and dangerous for acting. The distinction is per step, and it is the whole of this lesson.',
        stage: 'test',
        reward: 'Every step knows what to do when it fails. Nothing will be sent twice at three in the morning.',
      },
    ],
    fr: {
      primer: {
        plain: "Il exécute plusieurs agents successivement, transmet chaque résultat au suivant et vous indique lequel a échoué lorsque le résultat final est erroné.",
        like: "Une chaîne de production. La difficulté ne tient jamais aux machines, mais à l'identification du poste qui a produit la pièce défectueuse.",
        need: [
          "Deux agents dont vous disposez déjà et qui fonctionnent chacun séparément.",
          "Une idée précise de ce que le premier transmet au second.",
          "Un emplacement où consigner ce qui est entré et sorti à chaque étape.",
        ],
        words: [
          { term: "Contrat", says: "La forme convenue de ce qu'une étape transmet à la suivante. Elle est écrite, et non supposée." },
          { term: "Trace", says: "Le relevé de ce que chaque étape a reçu et produit. Sans elle, une chaîne est une boîte noire." },
          { term: "Idempotent", says: "Sans risque en cas de réexécution. Envoyer un courriel ne l'est pas ; écrire un fichier l'est généralement." },
        ],
      },
      steps: [
        {
          why: "Les chaînes cèdent aux jonctions. L'étape deux reçoit un élément légèrement différent de ce qu'elle attendait, fait de son mieux et produit un résultat légèrement erroné. Trois étapes plus loin, la sortie est absurde et chaque étape paraît irréprochable.",
          how: [
            "Pour chaque jonction, rédigez la forme exacte de ce qui y transite.",
            "Précisez ce que fait l'étape réceptrice lorsque la forme est incorrecte : s'arrêter, jamais improviser.",
            "Testez chaque jonction en lui fournissant délibérément une entrée mal formée.",
          ],
          bad: "L'agent de recherche passe ses trouvailles au rédacteur.",
          good: "La recherche passe : une liste d'objets {affirmation, citation, source}, éventuellement vide. Si le rédacteur reçoit autre chose, ou une citation manquante, il s'arrête et dit quel champ était mauvais.",
          note: "« Ses trouvailles » n'est pas une forme. La seconde version est vérifiable, et c'est cette vérification qui transforme une corruption silencieuse en message d'erreur.",
          reward: "Vos étapes disposent désormais d'un contrat. La défaillance se manifeste à la jonction plutôt que trois étapes plus loin.",
        },
        {
          why: "Si reproduire l'étape trois exige d'exécuter les étapes une et deux, chaque session de débogage vous coûte la chaîne entière, et vous finirez par renoncer à déboguer. Chaque étape doit pouvoir s'exécuter seule sur une entrée fixe.",
          how: [
            "Enregistrez une entrée réelle pour chaque étape.",
            "Assurez-vous que chaque étape peut s'exécuter seule sur cette entrée enregistrée.",
            "Essayez : reproduisez l'étape trois sans exécuter les étapes une et deux.",
          ],
          bad: "Lance toute la chaîne et regarde où ça dérape.",
          good: "Chaque étape a un exemple d'entrée enregistré sur disque. Déboguer l'étape trois, c'est : charger entree-etape-3.json, lancer l'étape trois, regarder.",
          note: "C'est la différence entre un cycle de débogage de cinq secondes et un cycle de cinq minutes, soit en pratique la différence entre déboguer et deviner.",
          reward: "Chaque étape peut désormais s'exécuter seule. Votre débogage vient de devenir cent fois plus rapide.",
        },
        {
          why: "Lorsque la sortie finale est erronée, chaque étape en amont devient suspecte. Une trace transforme cette enquête en une lecture de deux minutes. Sans elle, vous relancez la chaîne en modifiant des prompts au hasard.",
          how: [
            "Enregistrez ce qui est entré et sorti à chaque étape.",
            "Conservez de quoi reproduire, sans plus : une trace est aussi un dépôt de vos données.",
            "Décidez de sa durée de conservation et des personnes autorisées à la lire.",
          ],
          bad: "Journalise les erreurs.",
          good: "Enregistrer par étape : l'entrée, la sortie, l'heure, le modèle. Gardé 30 jours, lisible par l'équipe, et les noms de clients sont retirés avant l'écriture.",
          note: "Les erreurs sont le cas simple, car elles se signalent d'elles-mêmes. Les échecs coûteux sont ceux où chaque étape a réussi et où la réponse est néanmoins fausse.",
          reward: "Vous voyez désormais l'intérieur de votre chaîne. Elle a cessé d'être une boîte noire au coût supplémentaire.",
        },
        {
          why: "Reprendre est le réflexe naturel, et il est erroné pour toute étape qui agit sur le monde réel. Reprendre l'envoi d'un courriel en envoie deux. La politique d'échec doit être décidée étape par étape, avant qu'une défaillance survienne à trois heures du matin.",
          how: [
            "Pour chaque étape, choisissez une option : reprendre, ignorer, arrêter, ou solliciter un humain.",
            "Nommez les étapes qui ne doivent JAMAIS être reprises, et justifiez-le.",
            "Décidez de ce que voit l'utilisateur lorsque la chaîne s'interrompt en cours de route.",
          ],
          bad: "Reprendre en cas d'échec, jusqu'à trois fois.",
          good: "Recherche : reprendre deux fois, c'est de la lecture seule. Rédaction : reprendre une fois. Envoi de courriel : ne jamais reprendre, s'arrêter et demander à un humain, parce qu'une reprise envoie un second courriel. Les chaînes à moitié faites montrent à l'utilisateur ce qui a abouti.",
          note: "Une politique de reprise uniforme est sans danger pour la lecture et dangereuse pour l'action. La distinction se fait étape par étape, et c'est tout l'objet de cette leçon.",
          reward: "Chaque étape sait comment réagir en cas d'échec. Rien ne sera envoyé deux fois à trois heures du matin.",
        },
      ],
    },
  },
}

/* ------------------------------------------------------------------ */

export const lessonFor = (id: string): Lesson | null => LESSONS[id] ?? null

/** Les cas d'usage sans leçon · lu par la garde. Douze agents annoncés avec un
 *  cours « de A à Z » dont l'un serait vide est exactement le genre de trou
 *  qu'on découvre en production, parce que la page s'affiche quand même. */
export const USE_CASES_WITHOUT_LESSON = USE_CASES.filter((u) => !LESSONS[u.id]).map((u) => u.id)

/** …et l'inverse : une leçon qui ne correspond à aucun agent. */
export const LESSONS_WITHOUT_USE_CASE = Object.keys(LESSONS).filter(
  (id) => !USE_CASES.some((u) => u.id === id),
)
