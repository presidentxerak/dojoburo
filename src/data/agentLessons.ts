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
        plain: "Il lit une pile de documents pour toi et répond à une question, et pour chaque phrase qu'il écrit, il peut te montrer où il l'a lue.",
        like: "Un assistant de recherche consciencieux qui surligne la page avant de te dire ce qu'elle raconte. Le surlignage est tout le métier. Sans lui, tu as un assistant qui a l'air sûr de lui.",
        need: [
          "Une question à laquelle tu veux vraiment une réponse, écrite en une phrase.",
          "Trois ou quatre vrais documents. Les tiens, pas des échantillons.",
          "Un document qui NE répond PAS à la question, mis de côté pour la dernière étape.",
        ],
        words: [
          { term: "Source", says: "Un document que tu accepterais de montrer à quelqu'un qui doute de toi." },
          { term: "Hallucination", says: "Quand le modèle écrit quelque chose de plausible qu'il n'a lu nulle part. Ça ressemble exactement aux parties vraies." },
          { term: "Mot à mot", says: "Recopié tel quel, pas résumé." },
        ],
      },
      steps: [
        {
          why: "À un modèle à qui l'on demande d'« utiliser des sources », tout fera office de source : un billet de blog, sa propre mémoire, une phrase qu'il vient d'écrire. Si tu n'as pas dit ce qui compte, il décide pour toi, et il décide généreusement.",
          how: [
            "Écris les types de document que tu ACCEPTERAIS : un contrat signé, un article publié, une page de ta propre documentation.",
            "Écris ceux que tu n'accepterais pas : une réponse de forum, une page sans date, tout ce que tu ne peux pas ouvrir.",
            "Lis les deux listes à un collègue. S'il peut les appliquer sans te poser de question, elles sont finies.",
          ],
          bad: "Utilise des sources fiables.",
          good: "Une source est un document que je peux ouvrir à une adresse ou à un chemin de fichier, qui porte une date, et que je pourrais envoyer à un client. Les messages de forum, les pages marketing et les PDF sans date ne sont pas des sources.",
          note: "La première est un adjectif et te coûte des tokens pour rien : « fiable » ne veut rien dire pour un modèle. La seconde est un test que n'importe qui peut appliquer, le modèle compris.",
          reward: "Tu as écrit une règle qu'un inconnu pourrait appliquer. C'est bien plus rare qu'il n'y paraît !",
        },
        {
          why: "Laissé seul, un modèle résume. C'est dans le résumé que les inventions se glissent, parce qu'un résumé qui comble un petit trou se lit mieux qu'un résumé qui s'arrête. Imposer la citation supprime le trou qu'il pourrait combler.",
          how: [
            "Ajoute au prompt : chaque affirmation doit être suivie d'un fragment recopié mot à mot depuis la matière.",
            "Dis quoi faire quand aucun fragment n'existe : écrire « introuvable dans la matière » et passer.",
            "Interdis la paraphrase à l'intérieur des guillemets. Une « citation » reformulée est exactement l'échec que tu essaies d'arrêter.",
          ],
          bad: "Résume les documents et cite tes sources.",
          good: "Pour chaque affirmation, écris l'affirmation, puis à la ligne suivante la phrase exacte du document qui l'appuie, entre guillemets, avec le nom du fichier. Si tu ne trouves pas une telle phrase, écris INTROUVABLE et ne fais pas l'affirmation.",
          note: "La seconde rend l'échec visible. INTROUVABLE est un résultat sur lequel on peut agir ; un paragraphe assuré, non.",
          reward: "Ton agent sait maintenant échouer à voix haute. La plupart ne le savent pas, et c'est pourquoi personne ne leur fait confiance.",
        },
        {
          why: "La réponse dangereuse n'est pas la fausse, c'est celle qui a l'air complète. Si la matière n'abordait jamais la moitié de ta question, une bonne réponse le dit ; une mauvaise couvre discrètement la moitié qu'elle a trouvée et se lit comme si elle avait tout couvert.",
          how: [
            "Exige une section intitulée « Non couvert » dans chaque réponse.",
            "Dis qu'elle ne doit pas rester vide, sauf si chaque partie de la question a été répondue par une citation.",
            "Lis cette section en premier, avant la réponse, à chaque fois.",
          ],
          bad: "Signale ce qui n'est pas clair.",
          good: "Termine par une section « Non couvert ». Liste chaque partie de ma question à laquelle aucun document n'a répondu. Si cette section est vide, dis explicitement quel document a répondu à quelle partie.",
          note: "Un « Non couvert » vide est un avertissement, pas une bonne note. Ça veut en général dire que l'agent n'a pas cherché, et la seconde version l'oblige à prouver le contraire.",
          reward: "Tu as rendu le silence impossible. Un agent qui ne peut pas se taire sur les trous est un agent qu'on lit vite.",
        },
        {
          why: "Tout ce qui précède est de la théorie jusqu'à ce que l'agent rencontre une question à laquelle il ne peut pas répondre. C'est le seul moment qui te dit si tu as construit un chercheur ou un devineur très éloquent.",
          how: [
            "Prends le document que tu avais mis de côté, celui qui ne répond pas à ta question.",
            "Donne-le seul à l'agent, avec la même question.",
            "Lis ce qui revient avant de lire quoi que ce soit d'autre.",
          ],
          bad: "Fais-le tourner sur tes vrais documents et regarde si la réponse a l'air bonne.",
          good: "Fais-le tourner sur le document qui ne peut pas répondre, et vérifie qu'il le dit. Ensuite seulement, sur les vrais.",
          note: "Un agent qui a l'air bon sur de la matière qui marche ne t'apprend rien. Le piège est le test.",
          reward: "Il a dit qu'il ne savait pas. Tu viens de construire la chose la plus rare de ce domaine !",
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
        plain: "Il écrit des brouillons qui te ressemblent au lieu de ressembler à un robot de conversation, à partir d'une description de ta voix que tu écris une seule fois.",
        like: "Un prête-plume qui a lu tout ce que tu as publié. Tu ne lui expliques pas ton style chaque matin ; il l'a déjà, et tu corriges les bords.",
        need: [
          "Trois brouillons qu'un modèle a écrits pour toi et que tu n'as pas aimés. Garde-les, c'est la matière première.",
          "Deux textes de toi dont tu es content.",
          "Un quart d'heure pour dire à voix haute ce qui n'allait pas dans les trois mauvais.",
        ],
        words: [
          { term: "Ton", says: "Ta façon de sonner. En pratique : les choses que tu ne fais jamais, plus que celles que tu fais." },
          { term: "Brief", says: "Le system prompt que l'agent emporte dans chaque travail, par opposition à ce que tu tapes à chaque fois." },
        ],
      },
      steps: [
        {
          why: "Tu ne peux pas décrire ta voix de mémoire. Tous ceux qui essaient écrivent les quatre mêmes adjectifs, et les adjectifs ne changent rien. Tes trois mauvais brouillons, eux, contiennent exactement ce que tu détestes, par écrit.",
          how: [
            "Ouvre les trois brouillons que tu n'as pas aimés.",
            "Pour chacun, souligne les phrases qui t'ont fait grincer. Pas les faibles : celles qui sonnaient faux.",
            "À côté de chacune, écris en mots simples ce qui n'allait pas. « Trop empressé. » « On dirait une publicité. » « Explique ce que je viens de dire. »",
          ],
          bad: "Mon ton est professionnel mais amical, clair et engageant.",
          good: "Brouillon 2, ligne 3 : « Nous sommes ravis d'annoncer » · je ne dis jamais ravis. Brouillon 1, dernière ligne : un appel à l'action que je n'ai pas demandé. Brouillon 3 : trois adjectifs dans une phrase.",
          note: "La première phrase irait à n'importe quelle entreprise du monde. La seconde est indiscutablement la tienne, et chacune de ses lignes devient une règle à l'étape suivante.",
          reward: "Tu as maintenant des preuves au lieu d'adjectifs. Chaque règle que tu écriras sera traçable jusqu'à quelque chose de réel.",
        },
        {
          why: "Un modèle ne peut pas agir sur « sois chaleureux mais pas bavard ». Il peut agir sur « ne commence jamais par une question ». Les instructions de style positives sont de la décoration ; les interdits se vérifient, et une règle que personne ne peut vérifier est une règle que personne n'applique.",
          how: [
            "Transforme chaque grincement souligné en une phrase commençant par « Ne jamais ».",
            "Rends chacune vérifiable : quelqu'un d'autre doit pouvoir dire si elle a été enfreinte, sans te demander.",
            "Jette celles que tu ne peux pas relier à un brouillon précis.",
          ],
          bad: "Évite le langage promotionnel.",
          good: "Ne jamais ouvrir par une question. Ne jamais employer ravis, passionnés, incontournable. Ne jamais finir par un appel à l'action sauf demande explicite. Ne jamais mettre plus d'un adjectif par phrase.",
          note: "« Promotionnel » est une appréciation. Les quatre interdits sont des tests, et un relecteur qui ne te connaît pas peut les appliquer.",
          reward: "Ton goût est devenu vérifiable. C'est la seule forme de goût qu'une machine sait suivre.",
        },
        {
          why: "Les interdits disent ce qu'il ne faut pas faire et ne montrent jamais ce qu'il faut faire. Un seul exemple travaillé porte ce que dix règles n'arrivent pas à dire, parce que la voix est dans le rythme et pas dans le vocabulaire.",
          how: [
            "Prends un passage de ta propre écriture dont tu es content.",
            "Mets à côté la version qu'un modèle en aurait faite, ou la tienne avant correction.",
            "Ne commente pas la paire. L'écart parle mieux que ton commentaire.",
          ],
          bad: "Écris dans un style clair et direct.",
          good: "Voici un avant et un après. Avant : « Nous sommes ravis de vous présenter notre nouvelle fonctionnalité, conçue pour transformer votre quotidien. » Après : « La recherche accepte maintenant les guillemets. Ça marche dans les commentaires aussi. » Écris comme l'après.",
          note: "La paire enseigne le rythme, la longueur de phrase et le refus d'annoncer. Aucun adjectif n'aurait transmis ça.",
          reward: "Tu as donné un modèle à imiter plutôt qu'une instruction à suivre. C'est ce qui distingue un brief qui marche.",
        },
        {
          why: "Un brief qui grossit cesse d'être suivi. Au-delà d'une vingtaine de règles, le modèle en applique certaines et en oublie d'autres, et tu ne sauras jamais lesquelles. Couper est donc une étape, pas un nettoyage.",
          how: [
            "Compte tes règles. Si tu dépasses vingt, tu vas en supprimer.",
            "Supprime d'abord celles que tu ne peux relier à aucun brouillon raté.",
            "Note ce que tu as supprimé, et à quelle condition tu le remettrais.",
          ],
          bad: "Garde toutes les règles, on ne sait jamais.",
          good: "Vingt règles au plus, chacune traçable jusqu'à un brouillon précis. Une règle supprimée revient seulement si un nouveau brouillon la redemande.",
          note: "La seconde version fait du brief une chose vivante avec une règle d'entrée. La première en fait une décharge où rien ne se vérifie plus.",
          reward: "Ton brief tient sur un écran. C'est la seule longueur qu'un modèle suit jusqu'au bout.",
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
        plain: "Il répond aux clients avec ta voix, à l'intérieur de limites que tu poses, et passe la conversation à un humain dès qu'il le doit.",
        like: "Une recrue à sa première semaine. Douée pour être aimable, pas encore autorisée à promettre quoi que ce soit. La formation porte entièrement sur ce qu'elle ne doit pas dire.",
        need: [
          "Dix vrais messages de clients. Des ennuyeux, pas les dramatiques.",
          "Ta véritable politique de remboursement et de livraison, par écrit.",
          "Une décision sur qui prend le relais quand l'agent s'arrête.",
        ],
        words: [
          { term: "Transfert", says: "Passer la conversation à une personne. La chose la plus importante que fait l'agent." },
          { term: "Guardrail", says: "Une chose que l'agent ne peut jamais faire, écrite comme une règle plutôt qu'espérée." },
        ],
      },
      steps: [
        {
          why: "Un modèle préfère être utile qu'exact. À qui lui demande quand une commande arrive, il produira une date, parce qu'une date est ce que le lecteur voulait. Personne n'a prévu cette date. C'est désormais une promesse que tu as faite.",
          how: [
            "Nomme les trois choses qu'il ne peut jamais énoncer : une date de livraison, un prix, une décision de remboursement.",
            "Pour chacune, écris la phrase exacte qu'il dit à la place, mot pour mot.",
            "Lis ces trois phrases comme si tu les recevais. Si l'une t'agace, réécris-la maintenant.",
          ],
          bad: "Ne fais pas de promesses que tu ne peux pas tenir.",
          good: "N'énonce jamais une date de livraison, un prix, ni si un remboursement sera accordé. Dis à la place, mot pour mot : « J'ai transmis à l'équipe, qui confirmera dans la journée. »",
          note: "La version de gauche demande au modèle de juger ce qu'est une promesse. Celle de droite retire le jugement et lui tend un script.",
          reward: "Trois phrases que ton agent ne peut plus dire. C'est trois façons de moins de devoir quelque chose à un client.",
        },
        {
          why: "Si tu ne lui dis que ce qu'il ne faut pas dire, il improvisera le vide, et c'est dans l'improvisation qu'est le dégât. « Je ne sais pas » doit être une vraie réponse, approuvée et bien écrite, sinon elle ne sera jamais choisie.",
          how: [
            "Écris la réponse qu'il envoie quand il ne peut vraiment pas répondre.",
            "Fais-en une bonne réponse : ce qu'il ignore, ce qui se passe ensuite, et quand.",
            "Lis-la à voix haute en te mettant à la place du client. Si elle t'agace, elle n'est pas finie.",
          ],
          bad: "Je suis désolé, je ne suis pas en mesure de vous aider sur cette demande.",
          good: "Je n'ai pas la réponse à celle-là. Je l'ai transmise à l'équipe et quelqu'un vous répondra dans la journée. Si c'est urgent, répondez URGENT et ça passe en tête.",
          note: "Celle de gauche met fin à la conversation. Celle de droite dit ce qu'elle ignore, ce qui se passe ensuite et quand. C'est une vraie réponse.",
          reward: "Ton agent a maintenant une façon digne de s'arrêter. La plupart ne savent que continuer à parler.",
        },
        {
          why: "Demander à un modèle de « transférer quand c'est approprié » lui confie précisément le jugement que tu veux le moins lui laisser. Une liste de conditions n'est pas une version dégradée du jugement : c'est ce que tu voulais dire.",
          how: [
            "Liste les conditions qui déclenchent le transfert, comme des faits et non des impressions : de l'argent mentionné, des mots juridiques, un deuxième message sur le même sujet, de la colère.",
            "Pour chacune, dis qui reçoit.",
            "Ajoute le filet : dans le doute, transférer.",
          ],
          bad: "Transfère à un humain quand la situation l'exige.",
          good: "Transfère immédiatement si : le message mentionne un remboursement, une opposition bancaire, un avocat ou la presse ; s'il s'agit du deuxième message sur le même sujet ; ou si le client dit qu'il est en colère. Dans le doute, transfère.",
          note: "Chaque condition de droite est un fait que l'agent peut vérifier. « L'exige » est une appréciation qu'il rendra différemment à chaque fois.",
          reward: "Le transfert est devenu une règle, plus une impression. Ton agent sait quand il est dépassé.",
        },
        {
          why: "Un agent qui résume ta politique la rendra presque juste, et presque juste sur un remboursement, c'est faux. Il doit citer la politique comme le chercheur cite un document.",
          how: [
            "Mets la politique en entier dans le system prompt de l'agent.",
            "Dis-lui de citer la ligne qui s'applique plutôt que de l'expliquer.",
            "Éprouve-le avec une question que la politique ne couvre pas, et vérifie qu'il n'invente pas la réponse.",
          ],
          bad: "Tu connais notre politique de remboursement : 30 jours, hors frais de port, sous conditions.",
          good: "Voici la politique en entier. Quand elle s'applique, cite la ligne exacte. Quand le client demande quelque chose qu'elle ne couvre pas, dis-le et transfère.",
          note: "Une politique résumée est une politique dont on a retiré les exceptions, et les exceptions sont la seule partie au sujet de laquelle on t'écrit.",
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
        plain: "Il lit un changement dans ton code et te dit ce qui est cassé, et seulement ce qui est cassé.",
        like: "Un bon relecteur qui laisse quatre commentaires au lieu de quarante. Les quatre sont corrigés. Les quarante reçoivent un pouce levé et une fusion.",
        need: [
          "Un vrai changement de ton code, idéalement un qui contenait un défaut.",
          "Tes conventions, si tu en as d'écrites. Sinon, c'est la réponse à une question posée plus bas.",
          "La volonté de le laisser ne rien signaler du tout.",
        ],
        words: [
          { term: "Constat", says: "Un défaut que le relecteur peut démontrer, par opposition à quelque chose qu'il aurait écrit autrement." },
          { term: "Faux positif", says: "Un problème signalé qui n'en est pas un. Deux de ceux-là et les gens cessent de lire le reste." },
        ],
      },
      steps: [
        {
          why: "Demande une relecture et tu obtiens des avis : le nommage, la structure, ce que l'auteur aurait dû faire. Les avis enterrent le seul vrai défaut. Définir ce QU'EST un constat est ce qui sépare les deux.",
          how: [
            "Exige trois lignes pour tout constat : l'entrée, ce que le code en fait, ce qu'il devrait faire à la place.",
            "Si l'une des trois ne peut pas être écrite, ce n'est pas un constat.",
            "Dis-le explicitement : « si tu ne peux pas écrire les trois, ne le signale pas ».",
          ],
          bad: "Relis ce code et signale les problèmes.",
          good: "Ne signale un problème que si tu peux écrire : (1) une entrée concrète, (2) ce que le code en fait, (3) ce qu'il devrait faire à la place. Si tu ne peux pas écrire les trois, tais-toi.",
          note: "Les trois lignes ne sont pas de la paperasse. C'est un test que le modèle doit passer avant de parler, et la plupart des avis y échouent.",
          reward: "Tu as défini ce qui compte comme problème. Chaque commentaire devra désormais gagner sa place.",
        },
        {
          why: "Le goût est ce qui rend un relecteur illisible. Il arrive de la même voix assurée que les vrais défauts, en bien plus grand nombre, et c'est la raison pour laquelle plus personne ne lit l'outil après deux semaines.",
          how: [
            "Écris la liste de ce qu'il ne peut jamais signaler : le nommage, la mise en forme, l'organisation des fichiers, les « pense à utiliser », tout ce dont un formateur automatique s'occupe.",
            "Dis où vivent tes conventions, ou dis franchement qu'il n'y en a aucune.",
            "S'il n'y en a aucune : interdis-lui d'en inventer.",
          ],
          bad: "Respecte les bonnes pratiques et les conventions de l'équipe.",
          good: "Ne commente jamais le nommage, la mise en forme, la structure des fichiers, ni une préférence entre deux approches qui marchent. Nous n'avons aucune convention écrite, donc n'en déduis aucune.",
          note: "« Bonnes pratiques » est une invitation à tout signaler. La version de droite ferme la porte sur la catégorie entière.",
          reward: "Le goût est banni. Ce qui reste est la partie qui mérite d'être lue.",
        },
        {
          why: "Quarante constats et quatre constats portent la même information si les quarante ne sont pas classés, parce que personne ne lit jusqu'en bas. Un plafond force le modèle à choisir, et choisir est le travail.",
          how: [
            "Plafonne le nombre de constats. Cinq est un bon départ.",
            "Exige-les classés du pire au moins grave, le pire en tête de page.",
            "Interdis de remplir le quota : s'il y en a deux, il en signale deux.",
          ],
          bad: "Liste tous les problèmes que tu trouves, classés par gravité.",
          good: "Signale au plus cinq constats, le pire d'abord. S'il y en a moins de cinq de réels, signales-en moins. Ne rembourre jamais la liste pour atteindre cinq.",
          note: "« Ne rembourre jamais » est la phrase porteuse. Sans elle, un plafond devient un quota, et un quota fabrique des constats.",
          reward: "Ton relecteur peut maintenant signaler deux choses et s'arrêter. Cette retenue est ce qui le rend lisible.",
        },
        {
          why: "La seule question qui compte est de savoir s'il se tait sur du code propre. Un relecteur qui trouve toujours quelque chose est un relecteur qui se trompe toujours un peu.",
          how: [
            "Lance-le sur un changement dont tu sais qu'il contenait un vrai défaut. Vérifie qu'il l'a trouvé.",
            "Lance-le sur un changement dont tu sais qu'il était propre. Regarde ce qu'il dit.",
            "S'il a trouvé quelque chose sur le propre, lis ce constat de près : soit il a raison et tu avais tort, soit tes interdits ont un trou.",
          ],
          bad: "Lance-le sur quelques changements et regarde si les commentaires semblent raisonnables.",
          good: "Lance-le sur un changement au défaut connu et sur un changement connu comme propre. Il doit trouver le premier et ne rien dire sur le second.",
          note: "L'éprouver seulement sur du code cassé te dit qu'il sait parler. L'éprouver sur du code propre te dit s'il sait s'arrêter.",
          reward: "Il s'est tu quand il n'y avait rien à dire. C'est tout le jeu !",
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
        plain: "Il vérifie tes chiffres, puis te dit ce qu'il ferait et ce qui rendrait ce conseil faux.",
        like: "Un collègue de la finance qui lit ton tableur avant la réunion : d'abord l'arithmétique, ensuite l'opinion, et jamais les deux mêlées.",
        need: [
          "Un vrai tableur ou tableau, avec des chiffres qui comptent pour toi.",
          "La décision que ces chiffres sont censés alimenter.",
          "Une hypothèse là-dedans dont tu n'es pas sûr.",
        ],
        words: [
          { term: "Hypothèse", says: "Un chiffre que quelqu'un a choisi plutôt que mesuré. En général celui qui décide du résultat." },
          { term: "Critères d'abandon", says: "Ce qui devrait devenir vrai pour que la recommandation soit fausse." },
        ],
      },
      steps: [
        {
          why: "À qui lui demande de « vérifier ça », un modèle se met à discuter tes hypothèses et saute la somme qui ne tombe pas juste. L'arithmétique et le jugement sont deux métiers, et c'est l'arithmétique que les humains ratent vraiment.",
          how: [
            "Écris les quatre erreurs que tu veux attraper : un total qui n'égale pas ses parties, un taux appliqué à la mauvaise base, un changement d'unité que personne n'a signalé, une ligne exclue d'une plage.",
            "Demande-toi lesquelles des quatre tu as personnellement laissé passer. Sois honnête, ça change tes priorités.",
            "Mets ces quatre en tête du prompt, avant tout ce qui touche aux opinions.",
          ],
          bad: "Vérifie ce modèle et cherche les erreurs.",
          good: "Vérifie ces quatre choses d'abord : les totaux égalent la somme de leurs parties ; chaque pourcentage est appliqué à la base nommée à côté de lui ; les unités sont cohérentes dans toute la feuille ; aucune plage n'exclut une ligne en silence. Rends chacune en réussite ou échec.",
          note: "La version de gauche invite au commentaire. Celle de droite est une liste de contrôle qui passe ou ne passe pas, et elle attrape les erreurs qui arrivent vraiment jusqu'aux conseils d'administration.",
          reward: "Quatre erreurs que ta feuille ne peut plus cacher. Presque personne n'écrit cette liste.",
        },
        {
          why: "Dès que l'arithmétique et l'opinion sont dans le même paragraphe, tu ne peux agir ni sur l'une ni sur l'autre. Tu ne sais pas si « ça paraît optimiste » veut dire une formule cassée ou un désaccord sur le marché.",
          how: [
            "Exige deux sections qui ne se mélangent jamais : ARITHMÉTIQUE et JUGEMENT.",
            "L'arithmétique ne contient que des choses vraies ou fausses.",
            "Le jugement ne contient que des choses dont une personne raisonnable pourrait débattre.",
          ],
          bad: "Relis le modèle et donne ton avis.",
          good: "Réponds en deux sections. ARITHMÉTIQUE : seulement des affirmations vraies ou fausses, chacune avec sa cellule. JUGEMENT : seulement des affirmations dont on peut raisonnablement débattre. Rien n'appartient aux deux.",
          note: "Demande-toi ce qui n'appartient à aucune des deux. En général : une inquiétude vague. La séparation a l'effet secondaire utile de la supprimer.",
          reward: "Ton analyste ne peut plus cacher une opinion dans un calcul.",
        },
        {
          why: "La ligne la plus dangereuse d'une revue est celle qui n'a jamais été vérifiée et jamais mentionnée. Le silence se lit comme une approbation, et personne ne revient demander quelles cellules ont été sautées.",
          how: [
            "Exige une section : « Pris pour argent comptant ».",
            "Chaque entrée qu'il n'a pas pu vérifier y va, avec la raison.",
            "Lis cette section avant la conclusion, à chaque fois.",
          ],
          bad: "Signale tout ce dont tu n'étais pas sûr.",
          good: "Termine par « Pris pour argent comptant » : chaque chiffre que tu n'as pas pu vérifier depuis la feuille elle-même, et pourquoi. Si c'est vide, nomme la source de chaque entrée.",
          note: "« Signale tout » ne produit rien, parce que rien ne semble digne d'être signalé sur le moment. Une section obligatoire, elle, produit la liste.",
          reward: "Tu vois maintenant ce qui n'a pas été vérifié. Cette liste est en général plus intéressante que la revue.",
        },
        {
          why: "Une analyse qui finit par « ça dépend » t'a renvoyé le travail. La recommandation est le livrable, et elle n'est utile que si elle dit aussi ce qui la rendrait fausse.",
          how: [
            "Exige une recommandation nommée dans la première phrase.",
            "Interdis les précautions : pas de « il pourrait être intéressant d'envisager ».",
            "Exige des critères d'abandon : ce qui devrait être vrai pour que ce soit le mauvais choix.",
          ],
          bad: "Résume les options et leurs compromis.",
          good: "Ouvre par une recommandation, nommée, dans la première phrase. Puis les deux raisons les plus fortes, puis les critères d'abandon : ce qui devrait devenir vrai pour que ce soit faux. Si les preuves sont équilibrées, recommande quand même, et dis qu'elles le sont.",
          note: "Les critères d'abandon sont ce qui rend une recommandation sûre à suivre. Ils disent quoi surveiller une fois la décision prise.",
          reward: "Il s'engage sur une réponse et te dit comment elle pourrait être fausse. C'est à ça que sert un analyste.",
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
        plain: "Il lit chaque chose qui arrive et la met dans la bonne pile.",
        like: "La personne qui trie le courrier du matin. Le travail est facile une fois les piles bien choisies, et impossible quand deux piles se chevauchent.",
        need: [
          "Vingt vrais éléments : courriels, tickets, prospects. Des vrais, y compris les gênants.",
          "Ta liste actuelle de catégories.",
          "Un collègue prêt à trier les mêmes vingt de son côté.",
        ],
        words: [
          { term: "Nomenclature", says: "Ta liste de piles. Presque tout problème de tri est un problème de cette liste, pas du modèle." },
          { term: "Justesse par classe", says: "À quelle fréquence chaque pile est juste, par opposition à la fréquence où le tri est juste dans l'ensemble." },
        ],
      },
      steps: [
        {
          why: "Si deux de tes catégories se chevauchent, aucun prompt n'y changera rien : un humain ne sait pas les trier de façon fiable non plus. Écrire chaque catégorie comme un test est la façon de trouver le chevauchement, et la plupart des gens en trouvent un tout de suite.",
          how: [
            "Écris chaque catégorie comme une question à laquelle on répond par oui ou non.",
            "Prends les deux qui te semblent les plus proches. Trouve la question unique qui les sépare.",
            "Si tu n'en trouves aucune, fusionne-les. C'est un résultat, pas un échec.",
          ],
          bad: "Catégories : Bogue, Problème, Retour, Demande de fonctionnalité.",
          good: "Bogue : le produit a fait quelque chose dont sa documentation dit qu'il ne le fait pas. Demande de fonctionnalité : le produit ne fait pas quelque chose qu'il n'a jamais prétendu faire. (Problème et Retour fusionnés : aucune question ne les séparait.)",
          note: "La fusion est la partie précieuse. Deux catégories qu'un humain confond seront confondues par un agent aussi, et aucun prompt n'a jamais réparé une nomenclature.",
          reward: "Tu viens de trouver un chevauchement dans tes propres catégories. C'était ça le défaut, et il n'a jamais été dans le modèle.",
        },
        {
          why: "Avec tes seules catégories, un modèle en choisira toujours une, y compris pour ce qui n'appartient à aucune. Ces rangements forcés sont invisibles : ils ressemblent exactement à des réponses justes jusqu'à ce que quelqu'un agisse dessus.",
          how: [
            "Ajoute une catégorie « Aucune de celles-ci ».",
            "Dis quand s'en servir : quand le test d'aucune catégorie ne répond oui.",
            "Décide maintenant ce qu'on fait de ces éléments, et qui les regarde.",
          ],
          bad: "Choisis la catégorie la plus appropriée.",
          good: "Ne choisis une catégorie que si son test répond oui. Si aucun ne répond, réponds « Aucune de celles-ci ». Celles-là vont dans la boîte partagée et sont lues chaque lundi.",
          note: "Sans l'issue de secours, ton taux d'erreur reste caché dans tes catégories. Avec elle, il devient une pile qu'on peut regarder.",
          reward: "Ton trieur peut maintenant refuser de trier. C'est dans les refus que tu apprendras le plus.",
        },
        {
          why: "Tu ne peux pas savoir si un classeur marche en lisant ses réponses. Il a l'air certain de tout. Vingt éléments que tu as étiquetés toi-même sont la seule mesure honnête, et ça prend vingt minutes.",
          how: [
            "Prends vingt vrais éléments, couvrant chaque catégorie et quelques cas gênants.",
            "Étiquette-les toi-même, avant de lancer quoi que ce soit.",
            "Fais étiqueter les mêmes vingt par un collègue. Chaque désaccord entre ton collègue et toi montre que tes catégories sont floues, pas son jugement.",
          ],
          bad: "Fais-le tourner une semaine et vois ce que ça donne.",
          good: "Vingt éléments, étiquetés par moi et par un collègue avant que l'agent ne les voie. Les quatre sur lesquels nous divergeons retournent à la première étape.",
          note: "Un désaccord entre deux humains est une mesure de ta nomenclature, et elle est gratuite. Fais-la avant d'accuser le modèle.",
          reward: "Tu as un jeu de test. À partir de là, tu peux vraiment dire si un changement a aidé.",
        },
        {
          why: "Quatre-vingt-dix pour cent de justesse cachent une catégorie fausse à chaque fois. Si cette catégorie est « urgent », ta moyenne est excellente et ton produit brûle.",
          how: [
            "Note chaque catégorie séparément : justes sur total, pile par pile.",
            "Trouve la pire.",
            "Demande-toi si ça compte. Une mauvaise note sur une pile rare et inoffensive, ça va ; sur « urgent », non.",
          ],
          bad: "Justesse : 91 %.",
          good: "Bogue 95 % (19/20). Demande de fonctionnalité 88 % (7/8). Urgent 40 % (2/5). La moyenne va bien. Urgent, non, et c'est la seule qui réveille quelqu'un.",
          note: "Une moyenne est faite pour cacher exactement ça. Par catégorie, c'est quatre minutes de plus et c'est le seul chiffre qui dit quoi faire.",
          reward: "Tu as trouvé la catégorie qui rate. Une moyenne t'aurait dit que tout allait bien.",
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
        plain: "Il lit des factures, des contrats ou des formulaires et les transforme en colonnes propres qu'on peut mettre dans un tableur.",
        like: "Quelqu'un qui retape des formulaires papier dans une base, sauf qu'il ne fatigue jamais et ne laisse jamais une case vide parce qu'il a deviné.",
        need: [
          "Dix vrais documents du même genre. Dont deux mal numérisés ou bizarrement mis en page.",
          "La liste des champs dont tu as vraiment besoin. Pas tous les champs de la page.",
          "Une décision, par champ, sur ce qu'on fait quand il est absent.",
        ],
        words: [
          { term: "Schéma", says: "La liste des champs, leurs types, et ce que chacun veut dire. Écrite avant tout le reste." },
          { term: "Vide", says: "La valeur qui veut dire « absent ». Différente de zéro, et différente de la chaîne vide." },
          { term: "Emplacement", says: "L'endroit du document d'où vient une valeur. L'équivalent de la citation, pour l'extraction." },
        ],
      },
      steps: [
        {
          why: "Tout le monde commence par lancer le modèle et regarder ce qui sort. Ce qui sort est une forme qui change d'un document à l'autre, et qu'on passe ensuite une semaine à normaliser. Le schéma d'abord est plus rapide, et il force les questions qu'on évitait.",
          how: [
            "Ne liste que les champs dont tu te serviras en aval.",
            "Donne un type à chacun : texte, nombre, date, oui ou non.",
            "Pour chacun, écris à quoi ressemble l'absence, et si elle est permise.",
          ],
          bad: "Extrais toutes les informations pertinentes de la facture.",
          good: "numero_facture : texte, obligatoire. total_ttc : nombre, obligatoire. date_echeance : date, peut être vide si la facture indique « à réception ». numero_tva : texte, peut être vide.",
          note: "« Pertinent » est décidé par le modèle, différemment à chaque fois. La version de droite est un contrat, et tout l'aval peut s'y fier.",
          reward: "Tu as un schéma. Chaque débat que tu aurais eu dans trois semaines vient d'avoir lieu en dix minutes.",
        },
        {
          why: "Un champ absent et un champ vide ne veulent pas dire la même chose, et un modèle rendra allègrement quelque chose de plausible pour les deux. Un numéro de TVA plausible dans un tableau propre se découvre lors d'un audit, trois mois plus tard.",
          how: [
            "Dis-le explicitement : rendre un vide plutôt qu'une supposition.",
            "Interdis de déduire une valeur depuis d'autres champs.",
            "Ajoute : si le document est illisible, rendre un vide partout et le dire.",
          ],
          bad: "Remplis chaque champ le plus précisément possible.",
          good: "Si une valeur n'est pas imprimée dans le document, rends un vide. Ne déduis jamais une valeur depuis un autre champ ni depuis ce qui est habituel. Si la page est illisible, rends un vide pour chaque champ et mets illisible à vrai.",
          note: "« Le plus précisément possible » est lu par le modèle comme « produis toujours quelque chose ». La version de droite fait d'une case vide la bonne réponse.",
          reward: "Ton extracteur peut maintenant ne rien rendre. Une case vide à laquelle on se fie vaut mieux qu'une pleine à laquelle on ne se fie pas.",
        },
        {
          why: "Une valeur sans emplacement ne peut pas être vérifiée. Avec un emplacement, n'importe qui vérifie un lot entier en quelques minutes en regardant les endroits pointés au lieu de relire les documents.",
          how: [
            "Exige, à côté de chaque valeur, le texte exact d'où elle a été lue.",
            "Exige le numéro de page ou de ligne où il apparaissait.",
            "Contrôle dix valeurs au hasard en ne regardant que les emplacements.",
          ],
          bad: "total_ttc : 1240,50",
          good: "total_ttc : 1240,50, lu depuis « TOTAL TTC 1 240,50 EUR », page 2, ligne 14.",
          note: "Quand un emplacement est faux alors que la valeur a l'air juste, tu as trouvé une mise en page qui cassera en silence au prochain lot.",
          reward: "Chaque nombre pointe désormais vers son origine. Vérifier cent documents vient de devenir un travail de dix minutes.",
        },
        {
          why: "L'extraction marche à merveille sur les documents bien rangés, et les documents bien rangés ne sont pas ceux qui te coûtent de l'argent. Les deux documents laids que tu as mis de côté sont tout le test.",
          how: [
            "Lance-le sur les deux documents mal numérisés ou bizarrement mis en page.",
            "Vérifie qu'il a rendu des vides plutôt que des inventions.",
            "Si tu as dû exclure un document pour que ça marche, écris pourquoi. C'est une vraie limite de ton agent.",
          ],
          bad: "Ça a marché sur neuf sur dix, c'est assez bien.",
          good: "Il a rendu des vides sur le scan pivoté au lieu de deviner. Le manuscrit, nous l'avons exclu : l'écriture à la main est hors périmètre, et nous le disons.",
          note: "Une limite nommée est une caractéristique. Une limite tue est un défaut qui arrive un vendredi.",
          reward: "Il a échoué honnêtement sur les cas durs. Tu sais maintenant exactement où ton agent s'arrête.",
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
        plain: "Elle regarde une page, un prix ou un concurrent à un rythme donné, et ne te dit que ce qui a vraiment changé.",
        like: "Un veilleur de nuit. S'il appelle chaque heure pour dire que tout va bien, tu cesses d'écouter, et tu rates le seul appel qui comptait.",
        need: [
          "Une source que tu vérifies réellement à la main aujourd'hui.",
          "La décision que ça alimente. S'il n'y en a aucune, ne construis pas cet agent.",
          "Un endroit où garder ce que la source disait la fois d'avant.",
        ],
        words: [
          { term: "Différence", says: "L'écart entre maintenant et la fois d'avant. La seule chose qu'une sentinelle devrait jamais signaler." },
          { term: "Bruit", says: "Un changement réel qui ne veut rien dire. Une date en pied de page, une phrase reformulée." },
        ],
      },
      steps: [
        {
          why: "Toute page change sans arrêt : horodatages, identifiants de session, phrases reformulées. Sans définition de « changé », ta sentinelle parle à chaque passage, et parler à chaque passage revient à ne rien dire.",
          how: [
            "Écris ce qui compte comme changement pour CETTE source : un prix qui bouge, une formule qui apparaît ou disparaît, une fonctionnalité nommée.",
            "Écris ce qui n'en est pas : la formulation, la mise en page, les dates en pied de page, tout ce qui est sous un seuil.",
            "Décide si un paragraphe reformulé est un changement. La plupart du temps non, et le dire à voix haute t'épargne des semaines.",
          ],
          bad: "Préviens-moi quand le concurrent met à jour sa page de tarifs.",
          good: "Un changement est : un nombre du tableau de prix qui bouge, un nom de formule qui apparaît ou disparaît, ou une fonctionnalité ajoutée ou retirée d'une formule. La reformulation, la mise en page et les dates de pied de page ne sont pas des changements.",
          note: "La version de droite est un filtre que l'agent peut appliquer. Celle de gauche lui demande de deviner ce qui t'importe, et il devinera différemment chaque semaine.",
          reward: "Tu as défini ce que « changé » veut dire. Neuf dixièmes d'une sentinelle tiennent dans cette phrase.",
        },
        {
          why: "Une semaine calme, un modèle à qui l'on demande un rapport en écrira un. Il attrape des adjectifs, et tu finis par lire « dynamique toujours soutenue » au sujet d'une page qui n'a pas bougé d'un pixel.",
          how: [
            "Interdis franchement les mots de remplissage : significatif, notable, continu, dynamique, solide.",
            "Écris le message exact d'une semaine sans changement.",
            "Fais ce message assez court pour qu'on le voie d'un coup d'oeil.",
          ],
          bad: "Résume les évolutions notables de la semaine.",
          good: "Ne signale que les changements qui correspondent à la définition ci-dessus. S'il n'y en a aucun, réponds exactement : « Aucun changement. » N'emploie jamais : significatif, notable, continu, dynamique.",
          note: "« Aucun changement. » est un bon rapport. Il se lit en une seconde et il est vrai, ce dont peu de rapports hebdomadaires peuvent se vanter.",
          reward: "Ta sentinelle peut maintenant dire qu'il ne s'est rien passé. Elle gagnera sa place la semaine où elle dira le contraire.",
        },
        {
          why: "On ne peut pas signaler une différence sans garder l'état précédent. C'est l'étape que les gens sautent, et c'est pourquoi leur sentinelle signale la page entière à chaque fois comme si tout était nouveau.",
          how: [
            "Enregistre ce que disait la source à chaque passage.",
            "Compare à la dernière version enregistrée, pas à la mémoire du modèle.",
            "Décide qui est responsable de ce stock et combien de temps on le garde.",
          ],
          bad: "Vérifie la page chaque semaine et dis-moi ce qui est nouveau.",
          good: "Lis la page. Compare à la copie enregistrée du passage précédent. Ne signale que les différences, puis enregistre la nouvelle copie.",
          note: "Un modèle n'a aucune mémoire entre deux passages. « Ce qui est nouveau » ne veut rien dire pour lui si tu ne lui tends pas l'ancienne version.",
          reward: "Ta sentinelle a maintenant un hier. Sans lui, chaque jour ressemble au premier.",
        },
        {
          why: "La cadence doit venir de la décision, pas du calendrier. Un rapport hebdomadaire qui alimente une décision trimestrielle, ce sont onze rapports que personne ne lit et l'habitude d'ignorer le douzième.",
          how: [
            "Nomme la décision que ça alimente.",
            "Demande-toi à quelle fréquence cette décision est vraiment prise.",
            "Règle le rythme là-dessus, puis divise la fréquence par deux et regarde si quelque chose casse.",
          ],
          bad: "Lance-le chaque matin pour qu'on reste au courant.",
          good: "Ceci alimente la revue trimestrielle des prix. Ça tourne une fois par mois, et ça nous alerte immédiatement seulement si un prix bouge de plus de dix pour cent.",
          note: "Deux rythmes, pas un : un lent pour le rapport, un immédiat pour ce qui ne peut pas attendre. La plupart des sentinelles n'ont que le premier et t'alertent avec.",
          reward: "Le rythme vient maintenant d'une décision au lieu d'une habitude. Ta sentinelle sera encore lue dans six mois.",
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
        plain: "Il transforme un objectif écrit en une ligne en une liste ordonnée d'étapes, chacune avec un responsable et un résultat qu'on peut voir.",
        like: "Un chef de projet à son premier jour : les bons posent cinq questions gênantes avant d'écrire quoi que ce soit. Les autres te tendent un beau plan pour la mauvaise chose.",
        need: [
          "Un vrai objectif que tu as écrit. Une ligne suffit, c'est justement le sujet.",
          "Les noms des gens qui feraient le travail.",
          "Une tolérance à ce qu'on te demande ce que tu voulais dire.",
        ],
        words: [
          { term: "Critères d'acceptation", says: "Comment tu sauras qu'une étape est finie, écrit de façon que deux personnes ne puissent pas diverger." },
          { term: "Remonter depuis la fin", says: "Partir de la chose finie et demander ce qui devait arriver juste avant." },
        ],
      },
      steps: [
        {
          why: "Un objectif comme « améliorer l'accueil des nouveaux » ne se planifie pas, il ne fait que s'interpréter, et cinq personnes l'interpréteront de cinq façons. Un objectif qu'on pourrait photographier se planifie, et le fait de l'écrire règle la plupart des disputes avant qu'elles commencent.",
          how: [
            "Réécris l'objectif comme une chose qui existe à la fin.",
            "Demande-toi : comment saurais-je que c'est fini sans demander à personne ?",
            "Si la réponse est une impression, continue à réécrire.",
          ],
          bad: "Améliorer notre accueil des nouveaux.",
          good: "Un nouvel utilisateur atteint son premier projet enregistré sans aide, et nous le voyons dans les chiffres quatre semaines d'affilée.",
          note: "Celui de droite peut être vrai ou faux un mardi donné. Celui de gauche peut se discuter éternellement, et il le sera.",
          reward: "Ton objectif est devenu une chose qui existe ou n'existe pas. La moitié des désaccords viennent de disparaître !",
        },
        {
          why: "Les plans écrits vers l'avant se remplissent d'étapes qui semblaient être une bonne idée. Les plans écrits depuis la fin ne contiennent que des étapes dont quelque chose d'autre a vraiment besoin, et il y en a d'ordinaire deux fois moins.",
          how: [
            "Pars de la chose finie et demande ce qui devait être vrai juste avant.",
            "Recommence jusqu'à tomber sur quelque chose de faisable lundi.",
            "Cherche ensuite les étapes dont rien en aval ne dépend. Supprime-les.",
          ],
          bad: "Étape 1 : recherche. Étape 2 : conception. Étape 3 : développement. Étape 4 : lancement.",
          good: "Pour qu'un utilisateur atteigne un projet enregistré, l'enregistrement doit marcher. Pour qu'il marche, les comptes doivent exister. Pour que les comptes existent, il faut choisir un provider. C'est ça, lundi.",
          note: "Le plan de gauche convient à n'importe quel projet, ce qui veut dire qu'il n'en décrit aucun. Celui de droite est assez précis pour être faux, et c'est ce qui le rend utile.",
          reward: "Ton plan ne contient plus que des étapes dont quelque chose a besoin. C'est en général la moitié de la liste de départ.",
        },
        {
          why: "Un planificateur à qui l'on donne un objectif flou tranchera chaque ambiguïté en devinant, en silence, et te tendra un plan bien rangé. Les suppositions sont invisibles, et tu les découvres pendant le travail.",
          how: [
            "Exige une section « Questions ouvertes ». Elle ne doit pas rester vide.",
            "Exige qu'elle liste ce qu'il a voulu supposer et ce qu'il a supposé à la place.",
            "Réponds-y toi-même avant que le travail commence.",
          ],
          bad: "Demande-moi si quelque chose n'est pas clair.",
          good: "Termine par « Questions ouvertes », qui ne doit pas être vide. Pour chacune : ce qu'il te fallait savoir, ce que tu as supposé à la place, et ce qui change dans le plan si la supposition est fausse.",
          note: "« Demande si ce n'est pas clair » n'est jamais suivi d'effet, parce que produire un plan donne le sentiment d'avoir fait le travail. Une section obligatoire, elle, rend les suppositions visibles.",
          reward: "Les suppositions sont sur la page au lieu d'être dans le travail. Cette liste est la partie la plus précieuse du plan.",
        },
        {
          why: "Une étape sans résultat observable est une étape que deux personnes déclareront finie à des moments différents. C'est là que les projets glissent en silence, sans que personne sache dire quand.",
          how: [
            "Pour chaque étape, écris ce qui existe à la fin.",
            "Vérifie que deux personnes pourraient le regarder et tomber d'accord.",
            "Si elles pourraient diverger, l'étape n'est pas encore définie.",
          ],
          bad: "Étape 3 : améliorer le parcours d'inscription.",
          good: "Étape 3 : un formulaire d'inscription qui accepte un courriel et crée un compte, en ligne derrière un drapeau. Fini veut dire : un collègue peut s'inscrire sur la préproduction sans vous.",
          note: "Le test n'est pas de savoir si ça sonne clair. C'est de savoir si deux personnes qui vérifient chacune de leur côté rendraient le même verdict.",
          reward: "Chaque étape finit maintenant par quelque chose qu'on peut montrer du doigt. Personne n'aura à demander si c'est fini.",
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
        plain: "Il fait des choses dans tes vrais systèmes : il envoie le courriel, met à jour la fiche, ouvre le ticket.",
        like: "Donner les clés à un nouveau collègue. La question n'est jamais de savoir s'il est compétent ; c'est de savoir quelles portes les clés ouvrent, et si ce qu'il fait peut être défait.",
        need: [
          "Un système auquel tu le laisserais toucher, et une liste de ce qu'il peut y faire.",
          "La réponse à : quelle est la pire action unique qu'il pourrait faire aujourd'hui ?",
          "Un compte de test. Pas le vrai, pas pour le premier essai.",
        ],
        words: [
          { term: "Rayon d'action", says: "Tout ce qui pourrait être touché si ça tourne mal. Presque toujours plus grand qu'on ne le croit d'abord." },
          { term: "Lecture seule", says: "Il peut regarder mais ne peut rien changer. Là où tout agent à outils devrait commencer." },
          { term: "Humain dans la boucle", says: "Une personne dit oui avant que l'action ait lieu." },
        ],
      },
      steps: [
        {
          why: "Le prompt est la partie facile d'un agent à outils. Le travail est de décider ce qu'il ne doit jamais toucher, et de prouver qu'il ne le peut pas, avant que quoi que ce soit ne tourne. Les gens font ça après le premier incident.",
          how: [
            "Écris trois listes : ce qu'il peut lire, ce qu'il peut modifier, ce qu'il ne doit jamais toucher.",
            "Réponds à voix haute : quelle est la pire action unique qu'il pourrait faire aujourd'hui ?",
            "Si cette réponse te fait peur, la troisième liste est trop courte.",
          ],
          bad: "Il a accès à notre CRM.",
          good: "Peut lire : contacts, affaires. Peut modifier : les notes d'affaire, l'étape d'affaire. Ne doit jamais toucher : la suppression de contacts, la facturation, tout ce qui est dans le tunnel Gagné. Pire cas aujourd'hui : il fait reculer une affaire en cours, ce qu'on peut défaire depuis le journal d'audit.",
          note: "La phrase du pire cas est celle qui compte. Si tu ne peux pas l'écrire, tu ne sais pas encore ce que tu as confié.",
          reward: "Tu sais nommer la pire chose qu'il pourrait faire. La plupart de ceux qui construisent ça ne le savent pas.",
        },
        {
          why: "Une part surprenante de tout travail consiste à lire, et lire ne casse rien. Séparer les deux te donne quelque chose d'utile dès le premier jour pendant que la moitié risquée est encore en réflexion.",
          how: [
            "Construis d'abord la version en lecture seule et sers-t'en une semaine.",
            "Note la part du travail qu'elle faisait déjà.",
            "Ajoute l'écriture une action à la fois, pas en bloc.",
          ],
          bad: "Donne-lui tous les accès pour qu'il puisse faire tout le travail.",
          good: "Semaine un : lecture seule. Il rédige la mise à jour et je la colle. Semaine deux : il écrit les notes d'affaire, rien d'autre. L'étape d'affaire viendra plus tard, si jamais.",
          note: "La plupart des gens découvrent que la version en lecture seule couvre l'essentiel de la valeur. La moitié risquée n'était pas le sujet.",
          reward: "Tu as une version qui ne peut rien casser. Mets celle-là en service d'abord !",
        },
        {
          why: "Une étape d'approbation qui montre trop peu est pire que pas d'approbation du tout : les gens cliquent oui sans lire, et l'erreur porte maintenant une signature. Ce que voit celui qui approuve est le problème de conception.",
          how: [
            "Décide exactement ce que voit celui qui approuve : l'action, la cible, l'avant et l'après.",
            "Rends-le décidable en cinq secondes.",
            "Éprouve-le sur toi-même quand tu es pressé et légèrement agacé. C'est la vraie condition.",
          ],
          bad: "L'agent veut mettre à jour une fiche. Approuver ? [Oui] [Non]",
          good: "Déplacer l'affaire « Acme, 12 k » de Négociation à Gagné. Responsable : Sam. Parce que : le client a répondu « nous signons ». [Approuver] [Refuser]",
          note: "Celle de gauche sera approuvée sans être lue avant une semaine. Celle de droite se juge sans rien ouvrir d'autre.",
          reward: "Ton étape d'approbation se lit en cinq secondes. C'est la seule sorte que les gens lisent vraiment.",
        },
        {
          why: "Le retour en arrière est ce qui rend le reste survivable. Sans lui, chaque erreur est définitive et chaque approbation porte tout le poids de la décision.",
          how: [
            "Pour chaque action permise, écris comment on la défait.",
            "Là où rien ne se défait, interdis l'action ou exige qu'une personne l'exécute.",
            "Garde un journal de ce qui a été fait, assez détaillé pour le défaire à la main.",
          ],
          bad: "Fais attention avec les actions destructrices.",
          good: "Étape d'affaire : réversible depuis le journal d'audit. Note ajoutée : réversible en la supprimant. Courriel envoyé : NON réversible, donc c'est une personne qui l'envoie. Contact supprimé : purement interdit.",
          note: "« Fais attention » n'est pas un contrôle. La version de droite range chaque action dans l'un de trois cas, et un seul demande un humain.",
          reward: "Chaque action qu'il peut faire peut être défaite, ou il n'a pas le droit de la faire. Tu peux dormir tranquille.",
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
        plain: "Il écrit plusieurs versions vraiment différentes d'une même chose, puis lit les résultats et te dit laquelle garder.",
        like: "Un concepteur-rédacteur qui apporte cinq idées plutôt qu'une idée en cinq tenues. La seconde est ce qu'on obtient par défaut.",
        need: [
          "Quelque chose dont tu veux des variantes : un objet de courriel, une publicité, un titre de page.",
          "Un moyen de mesurer le résultat. Même approximatif.",
          "Le chiffre qui te ferait arrêter le test. Décidé avant de commencer.",
        ],
        words: [
          { term: "Variante", says: "Une version testée. Utile seulement si elle diffère des autres d'une façon que tu as choisie." },
          { term: "Hypothèse", says: "Ce que tu penses que cette variante prouvera. Sans elle, une variante est de la décoration." },
          { term: "Règle d'arrêt", says: "Le résultat qui met fin au test, écrit avant qu'il commence pour ne pas pouvoir le déplacer." },
        ],
      },
      steps: [
        {
          why: "Demande vingt variantes et tu obtiens une idée en vingt tenues : les mots changent, l'argument non. Tu lances ensuite un test qui ne peut rien t'apprendre, parce que rien ne différait vraiment.",
          how: [
            "Nomme l'axe : ce qui DOIT différer entre les variantes.",
            "Vérifie-le : deux variantes pourraient-elles différer sur ton axe et se lire pareil ? Alors ce n'est pas un axe.",
            "Trois variantes sur un vrai axe valent mieux que vingt sur aucun.",
          ],
          bad: "Écris vingt objets de courriel pour cette campagne.",
          good: "Écris trois objets, chacun sur un axe différent : un qui ouvre sur le prix, un sur le temps gagné, un sur le nom d'un client. La formulation est à toi ; l'angle est fixé.",
          note: "Vingt reformulations testent la même idée vingt fois, à vingt fois le prix, et ne répondent à rien.",
          reward: "Tes variantes diffèrent maintenant à dessein. Un test sur elles peut vraiment t'apprendre quelque chose.",
        },
        {
          why: "Une variante sans hypothèse ne peut rien t'apprendre, qu'elle gagne ou qu'elle perde. Tu apprends qu'une suite de mots a battu une autre, ce qui ne se transporte pas à la campagne suivante.",
          how: [
            "Écris, à côté de chaque variante, ce qu'elle teste.",
            "Cherche la variante sans hypothèse. Demande pourquoi elle est là.",
            "En général elle est là pour allonger la liste. Supprime-la.",
          ],
          bad: "Variante A, variante B, variante C.",
          good: "A, ouvre sur le prix : teste si ce public est sensible au prix. B, ouvre sur le temps gagné : teste s'il manque de temps. C, ouvre sur le nom d'un client : teste si la preuve sociale pèse plus que les deux.",
          note: "Quand B gagne, la version de gauche te dit d'utiliser B. Celle de droite te dit que ce public manque de temps, ce qui vaut bien davantage.",
          reward: "Chaque variante porte maintenant une question. Quoi qu'il gagne, tu apprends quelque chose de transposable.",
        },
        {
          why: "Une règle d'arrêt écrite après les résultats n'est pas une règle, c'est une justification. Tout le monde le sait et tout le monde le fait quand même, parce que les chiffres arrivent et que l'un d'eux est devant.",
          how: [
            "Avant de lancer, écris le chiffre qui met fin au test.",
            "Écris ce que tu fais si l'écart est trop petit pour compter.",
            "Mets les deux par écrit là où quelqu'un d'autre peut les voir.",
          ],
          bad: "On verra laquelle marche le mieux.",
          good: "Arrêt à 2 000 affichages par variante. Garder la gagnante seulement si elle bat la version actuelle de plus de 15 %. Si l'écart est sous 15 %, garder la version actuelle et noter que l'axe ne comptait pas.",
          note: "« Garder la version actuelle » doit être une issue possible. Si le test ne peut que remplacer, ce n'est pas un test.",
          reward: "La ligne d'arrivée est écrite avant la course. Tu ne peux plus la déplacer.",
        },
        {
          why: "Le dernier échec est de lire le résultat comme on l'espérait. Un petit écart sur un petit échantillon est du bruit, et un modèle à qui l'on demande « laquelle a gagné » en nommera une, parce que c'est ce qu'on lui a demandé.",
          how: [
            "Fais-lui rendre les chiffres, l'écart, et si l'écart passe ta règle.",
            "Exige les mots « c'est du bruit » quand il ne la passe pas.",
            "Vérifie qu'il sait dire qu'un test n'a rien conclu, avant de lui faire confiance sur un test qui a conclu.",
          ],
          bad: "La variante B a le mieux marché.",
          good: "B : 4,1 %. A : 3,9 %. Écart : 0,2 point sur 2 000 affichages. C'est du bruit et ça ne passe pas la règle des 15 %. Recommandation : garder la version actuelle ; l'axe ne comptait pas.",
          note: "Un agent qui sait dire « c'est du bruit » est un agent à qui l'on peut se fier quand il dit que ça n'en est pas.",
          reward: "Il t'a dit qu'un résultat était du bruit. Cette honnêteté vaut plus que n'importe quel gagnant qu'il aurait pu nommer.",
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
        plain: "Il fait tourner plusieurs agents l'un après l'autre, passe chaque résultat au suivant, et te dit lequel a cassé quand la fin est fausse.",
        like: "Une chaîne de production. Le difficile n'est jamais les machines, c'est de savoir quel poste a produit la pièce défectueuse.",
        need: [
          "Deux agents que tu as déjà, qui marchent chacun de leur côté.",
          "Une idée claire de ce que le premier passe au second.",
          "Un endroit où noter ce qui est entré et sorti de chaque étape.",
        ],
        words: [
          { term: "Contrat", says: "La forme convenue de ce qu'une étape passe à la suivante. Écrite, pas supposée." },
          { term: "Trace", says: "Le relevé de ce que chaque étape a reçu et produit. Sans elle, une chaîne est une boîte noire." },
          { term: "Idempotent", says: "Sans danger si on le relance. Envoyer un courriel ne l'est pas ; écrire un fichier l'est en général." },
        ],
      },
      steps: [
        {
          why: "Les chaînes cassent aux jointures. L'étape deux reçoit quelque chose de légèrement différent de ce qu'elle attendait, fait de son mieux, et produit quelque chose de légèrement faux. Trois étapes plus loin la sortie est absurde et chaque étape a l'air innocente.",
          how: [
            "Pour chaque jointure, écris la forme exacte qui y passe.",
            "Dis ce que l'étape réceptrice fait quand la forme est mauvaise : s'arrêter, jamais improviser.",
            "Éprouve chaque jointure en lui tendant exprès quelque chose de mal formé.",
          ],
          bad: "L'agent de recherche passe ses trouvailles au rédacteur.",
          good: "La recherche passe : une liste d'objets {affirmation, citation, source}, éventuellement vide. Si le rédacteur reçoit autre chose, ou une citation manquante, il s'arrête et dit quel champ était mauvais.",
          note: "« Ses trouvailles » n'est pas une forme. La version de droite est vérifiable, et c'est la vérification qui transforme une corruption silencieuse en message d'erreur.",
          reward: "Tes étapes ont maintenant un contrat. La casse se produit à la jointure au lieu de trois étapes plus loin.",
        },
        {
          why: "Si reproduire l'étape trois demande de lancer la une et la deux, chaque session de débogage te coûte la chaîne entière, et tu cesseras de déboguer. Chaque étape doit tourner seule sur une entrée fixe.",
          how: [
            "Enregistre une vraie entrée pour chaque étape.",
            "Assure-toi que chaque étape peut tourner sur cette entrée enregistrée, seule.",
            "Essaie : reproduis l'étape trois sans lancer la une et la deux.",
          ],
          bad: "Lance toute la chaîne et regarde où ça dérape.",
          good: "Chaque étape a un exemple d'entrée enregistré sur disque. Déboguer l'étape trois, c'est : charger entree-etape-3.json, lancer l'étape trois, regarder.",
          note: "C'est la différence entre une boucle de débogage de cinq secondes et une de cinq minutes, ce qui en pratique est la différence entre déboguer et deviner.",
          reward: "N'importe quelle étape peut maintenant tourner seule. Ton débogage vient d'être cent fois plus rapide.",
        },
        {
          why: "Quand la sortie est fausse à la fin, chaque étape en amont est suspecte. Une trace transforme ça en une lecture de deux minutes. Sans elle, tu relances la chaîne en changeant des prompts au hasard.",
          how: [
            "Enregistre ce qui est entré et sorti de chaque étape.",
            "Garde de quoi reproduire, pas plus : une trace est aussi un tas de tes données.",
            "Décide combien de temps elle est gardée et qui peut la lire.",
          ],
          bad: "Journalise les erreurs.",
          good: "Enregistrer par étape : l'entrée, la sortie, l'heure, le modèle. Gardé 30 jours, lisible par l'équipe, et les noms de clients sont retirés avant l'écriture.",
          note: "Les erreurs sont le cas facile ; elles s'annoncent. Les échecs coûteux sont ceux où chaque étape a réussi et où la réponse est fausse quand même.",
          reward: "Tu vois maintenant dans ta chaîne. Elle a cessé d'être une boîte noire avec un surcoût.",
        },
        {
          why: "Reprendre est le réflexe, et il est faux pour toute étape qui agit dans le monde. Reprendre un courriel en envoie deux. La politique d'échec doit se décider par étape, avant que quelque chose échoue à trois heures du matin.",
          how: [
            "Pour chaque étape, choisis-en une : reprendre, sauter, arrêter, ou demander à un humain.",
            "Nomme les étapes qui ne doivent JAMAIS être reprises, et pourquoi.",
            "Décide ce que voit l'utilisateur quand la chaîne s'arrête à mi-chemin.",
          ],
          bad: "Reprendre en cas d'échec, jusqu'à trois fois.",
          good: "Recherche : reprendre deux fois, c'est de la lecture seule. Rédaction : reprendre une fois. Envoi de courriel : ne jamais reprendre, s'arrêter et demander à un humain, parce qu'une reprise envoie un second courriel. Les chaînes à moitié faites montrent à l'utilisateur ce qui a abouti.",
          note: "Une politique de reprise uniforme est sans danger pour la lecture et dangereuse pour l'action. La distinction se fait par étape, et c'est toute cette leçon.",
          reward: "Chaque étape sait quoi faire quand elle échoue. Rien ne sera envoyé deux fois à trois heures du matin.",
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
