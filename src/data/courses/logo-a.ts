// LE COURS « Logotype et charte graphique avec l'IA », PARTIE A · voir ./types et ./index.
//
// UN FIL ROUGE POUR LES DEUX MODULES · « Pagelune », un café-librairie de
// quartier, fictif, ouvert par Camille. Nora, graphiste indépendante, en crée
// l'identité. On cadre la marque (brief, concurrence, personnalité, famille de
// logo), puis on crée le logotype : pistes explorées avec l'IA image, dessin
// vectoriel, tests de réduction et vérification de disponibilité de la marque.
// La partie B reprend l'identité pour les couleurs, les typographies et la
// charte.
//
// CE QUE LE COURS AFFIRME DES OUTILS ET DU DROIT, ET CE QU'IL S'INTERDIT. Il
// s'en tient aux principes stables : une image produite par une IA est une
// image matricielle, pas un fichier de logo ; Illustrator, Figma et Inkscape
// dessinent des courbes de Bézier ; un favicon se lit à quelques pixels ; une
// marque se dépose par classes et par territoire, auprès de l'INPI ou de
// l'EUIPO. Les fonctions de chaque outil, leurs offres, les tarifs et les
// délais de dépôt changent, et la protection des images générées par IA est
// une question juridique encore discutée : le cours renvoie aux documentations
// et aux sites officiels, sans chiffre, sans article de loi.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 1 · LA STRATÉGIE AVANT LE DESSIN                             */
/* ================================================================== */

const M1 = 'lg-m1'

const STRAT: Level[] = [
  {
    id: 'lg-brief',
    master: 'planning',
    minutes: 11,
    title: B('The brand brief: positioning, values, audience', 'Le brief de marque : positionnement, valeurs, public'),
    learn: B(
      'You will write a one-page brand brief with AI: positioning, values, audience, and what the logo must convey.',
      "Vous saurez rédiger avec l'IA un brief de marque d'une page : positionnement, valeurs, public, et ce que le logo doit dire.",
    ),
    act: B('Run the briefing interview of Pagelune with AI as a guide, then condense the answers into a one-page brief.',
      "Menez l'entretien de cadrage de Pagelune avec l'IA pour guide, puis condensez les réponses en un brief d'une page."),
    steps: [
      B('Have the AI draft about fifteen interview questions: offer, customers, values, ambitions, what must never change.',
        "Faites rédiger par l'IA une quinzaine de questions d'entretien : offre, clients, valeurs, ambitions, ce qui ne doit pas changer."),
      B("Write down the answers in the owner's own words, without turning them into marketing language yet.",
        'Notez les réponses avec les mots de la gérante, sans les reformuler tout de suite en langage marketing.'),
      B('Ask the AI to draw a positioning statement from them: for whom, which need, what sets the place apart.',
        "Demandez à l'IA d'en tirer un énoncé de positionnement : pour qui, quel besoin, ce qui distingue le lieu."),
      B('Keep three values and give each a visual consequence, such as warm, handmade, readable at a glance.',
        "Retenez trois valeurs et donnez à chacune une conséquence visuelle : chaleureux, fait main, lisible d'un coup d'oeil."),
    ],
    trap: B(
      'Opening an image generator before the brief: the AI draws its own idea of a café, and you end up choosing a picture instead of a strategy.',
      "Ouvrir un générateur d'images avant le brief : l'IA dessine sa propre idée d'un café, et vous choisissez une image au lieu d'une stratégie.",
    ),
    quiz: {
      q: B('Camille says Pagelune is "for everyone who likes books". What should the brief do with that answer?',
        "Camille dit que Pagelune s'adresse « à tous ceux qui aiment les livres ». Que doit en faire le brief ?"),
      options: [
        B('Keep it as written, since a wide audience gives the logo more freedom', 'Le garder tel quel, un public large laissant plus de liberté au logo'),
        B('Narrow it to a primary audience, described by a situation and a need', 'Le resserrer en un public principal, décrit par une situation et un besoin'),
        B('Replace it with the age bracket and income level of current customers', "Le remplacer par la tranche d'âge et les revenus des clients actuels"),
      ],
      answer: 1,
      why: B(
        'A logo cannot speak to everyone. A primary audience described by a situation (students who stay for hours, neighbours passing by) says what to favour; age and income alone say little about needs.',
        "Un logo ne peut pas parler à tout le monde. Un public principal décrit par une situation (étudiants qui restent des heures, voisins de passage) dit quoi privilégier ; l'âge et les revenus disent peu des besoins.",
      ),
    },
    badge: B('Briefs before drawing', 'Cadre avant de dessiner'),
  },
  {
    id: 'lg-rivals',
    master: 'research',
    minutes: 10,
    title: B('Study the competition and find the gap', "Étudier la concurrence et trouver l'écart"),
    learn: B(
      'You will audit competing identities, place them on a positioning map and find the visual territory left free.',
      'Vous saurez auditer les identités concurrentes, les placer sur une carte de positionnement et trouver le territoire libre.',
    ),
    act: B('Collect eight competing identities around Pagelune, fill an audit grid, then map them on two axes.',
      'Rassemblez huit identités concurrentes autour de Pagelune, remplissez une grille d\'audit, puis placez-les sur deux axes.'),
    steps: [
      B('List direct competitors (cafés, bookshops nearby) and indirect ones (chains, online sellers, libraries).',
        'Listez les concurrents directs (cafés, librairies proches) et indirects (chaînes, vente en ligne, médiathèques).'),
      B('Capture each logo, sign and social profile, then note family of logo, colours, type style and tone.',
        'Capturez chaque logo, enseigne et profil social, puis notez famille de logo, couleurs, style de lettre et registre.'),
      B('Ask the AI to sort the grid into recurring codes, the conventions that every competitor repeats.',
        "Demandez à l'IA de classer la grille en codes récurrents, les conventions que tous les concurrents répètent."),
      B('Draw two axes that matter to the audience, place each brand, and name the empty zone you could own.',
        'Tracez deux axes qui comptent pour le public, placez chaque marque, et nommez la zone vide que vous pourriez occuper.'),
    ],
    trap: B(
      'Letting the AI describe competitors from memory: it invents logos and colours with confidence. Audit only what you captured yourself.',
      "Laisser l'IA décrire les concurrents de mémoire : elle invente logos et couleurs avec aplomb. N'auditez que ce que vous avez capturé.",
    ),
    quiz: {
      q: B('Six of the eight cafés around Pagelune use a coffee cup in brown and cream. What does the audit tell Nora?',
        "Six des huit cafés autour de Pagelune affichent une tasse en brun et crème. Que dit l'audit à Nora ?"),
      options: [
        B('The cup is mandatory, since customers expect it on every café sign', 'La tasse est obligatoire, les clients l\'attendent sur toute enseigne de café'),
        B('Brown and cream are protected by the first café that used them here', 'Le brun et le crème sont protégés par le premier café du quartier'),
        B('It is a category code: keep a cue of it, but stand out elsewhere', "C'est un code de catégorie : en garder un signe, mais se distinguer ailleurs"),
      ],
      answer: 2,
      why: B(
        'A code repeated by most competitors signals the category, but it also makes brands interchangeable. Keeping one cue of it reassures, while form, colour or tone can mark the difference.',
        "Un code répété par la plupart des concurrents signale la catégorie, mais rend aussi les marques interchangeables. En garder un signe rassure ; la forme, la couleur ou le registre marquent la différence.",
      ),
    },
    badge: B('Finds the free territory', 'Trouve le territoire libre'),
  },
  {
    id: 'lg-mood',
    master: 'writing',
    minutes: 10,
    title: B('Brand personality and the moodboard', 'La personnalité de marque et le moodboard'),
    learn: B(
      'You will express a brand personality as precise adjectives and sliders, then build a moodboard that shows it.',
      'Vous saurez exprimer une personnalité de marque en adjectifs précis et en curseurs, puis bâtir un moodboard qui la montre.',
    ),
    act: B('Define the personality of Pagelune on five sliders, then assemble and annotate a moodboard of twelve images.',
      'Définissez la personnalité de Pagelune sur cinq curseurs, puis assemblez et annotez un moodboard de douze images.'),
    steps: [
      B('Ask the AI for pairs of opposite adjectives, then place Pagelune on each scale, such as classic or modern.',
        "Demandez à l'IA des paires d'adjectifs opposés, puis placez Pagelune sur chaque échelle, comme classique ou moderne."),
      B('Keep three to five adjectives and write, for each, what it rules out: cosy, but not old-fashioned.',
        'Gardez trois à cinq adjectifs et écrivez pour chacun ce qu\'il exclut : chaleureux, mais pas vieillot.'),
      B('Gather images in Pinterest, Milanote or FigJam: textures, lettering, places, objects, never only logos.',
        'Réunissez des images dans Pinterest, Milanote ou FigJam : textures, lettrages, lieux, objets, jamais seulement des logos.'),
      B('Annotate each image with the adjective it supports, and remove those you cannot justify.',
        "Annotez chaque image avec l'adjectif qu'elle soutient, et retirez celles que vous ne savez pas justifier."),
    ],
    trap: B(
      'Choosing vague adjectives such as modern, quality or authentic: every brand claims them, so they guide neither the moodboard nor the logo.',
      'Choisir des adjectifs vagues comme moderne, qualité ou authentique : toutes les marques les revendiquent, ils ne guident ni le moodboard ni le logo.',
    ),
    quiz: {
      q: B('Camille approves a moodboard, but nobody can say why each image is there. What is missing?',
        "Camille valide un moodboard, mais personne ne sait dire pourquoi chaque image s'y trouve. Que manque-t-il ?"),
      options: [
        B('The link between each image and an adjective of the personality', "Le lien entre chaque image et un adjectif de la personnalité"),
        B('More images, so that the overall feeling becomes easier to read', "Plus d'images, pour que l'impression d'ensemble se lise mieux"),
        B('A final logo placed in the middle, to show where the board leads', 'Un logo final placé au centre, pour montrer où mène la planche'),
      ],
      answer: 0,
      why: B(
        'A moodboard is an argument, not a collection. Each image annotated with the adjective it supports can be discussed, kept or removed; an unexplained board only records a taste of the moment.',
        "Un moodboard est un argument, pas une collection. Chaque image annotée avec l'adjectif qu'elle soutient se discute, se garde ou se retire ; une planche sans explication ne garde qu'un goût du moment.",
      ),
    },
    badge: B('Turns a character into images', 'Traduit un caractère en images'),
  },
  {
    id: 'lg-families',
    master: 'analysis',
    minutes: 9,
    title: B('Logo families and when to use them', 'Les familles de logos et leur usage'),
    learn: B(
      'You will tell apart wordmark, lettermark, symbol, combination mark and emblem, and choose one from the brief.',
      'Vous saurez distinguer logotype, monogramme, symbole, logo combiné et emblème, et en choisir un à partir du brief.',
    ),
    act: B('List where the Pagelune logo will appear, then compare the five families and justify one in writing.',
      'Listez où apparaîtra le logo de Pagelune, puis comparez les cinq familles et justifiez votre choix par écrit.'),
    steps: [
      B('List every use of the logo: shop sign, cup, receipt, bookmark, social avatar, favicon, tote bag.',
        'Listez chaque usage du logo : enseigne, gobelet, ticket de caisse, marque-page, avatar social, favicon, tote bag.'),
      B('Check the name: short or long, easy to read, and whether people already know it or still need to learn it.',
        "Examinez le nom : court ou long, facile à lire, déjà connu du public ou encore à faire connaître."),
      B('Ask the AI to score each family against your uses and your name, with the reason for each score.',
        "Demandez à l'IA de noter chaque famille selon vos usages et votre nom, en donnant la raison de chaque note."),
      B('Write the choice in two sentences, including the version used for very small sizes.',
        'Rédigez le choix en deux phrases, en incluant la version utilisée pour les très petites tailles.'),
    ],
    trap: B(
      'Wanting a symbol alone for a new name nobody knows yet: people see an image but cannot connect it to the business.',
      "Vouloir un symbole seul pour un nom encore inconnu : le public voit une image, mais ne sait pas la relier à l'enseigne.",
    ),
    quiz: {
      q: B('Pagelune is new, its name is short, and it needs a tiny avatar. Which family fits best?',
        "Pagelune est nouveau, son nom est court, et il lui faut un minuscule avatar. Quelle famille convient le mieux ?"),
      options: [
        B('An emblem, with the name set inside a detailed round badge', 'Un emblème, le nom placé dans un badge rond très détaillé'),
        B('A symbol alone, so the image speaks without any lettering at all', 'Un symbole seul, pour que l\'image parle sans aucun lettrage'),
        B('A combination mark, with a symbol that can also stand alone', 'Un logo combiné, dont le symbole peut aussi vivre seul'),
      ],
      answer: 2,
      why: B(
        'A combination mark teaches the name while the symbol becomes familiar, and the symbol alone can serve as the avatar. An emblem loses its text when small; a symbol alone does not say the name of a new place.',
        "Un logo combiné fait connaître le nom pendant que le symbole devient familier, et le symbole seul sert d'avatar. Un emblème perd son texte en petit ; un symbole seul ne dit pas le nom d'un lieu nouveau.",
      ),
    },
    badge: B('Picks the right family', 'Choisit la bonne famille'),
  },
]

const STRAT_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M1, 'lg-brief')]: {
    why: [
      B("A logo is a compressed answer to a strategic question: who is this business, for whom, and why choose it over another. While the question is open, any drawing can be defended and none can be chosen, so discussions drift into taste. The brief settles the question in writing before anyone draws, and every later proposal is judged against it.",
        "Un logo est la réponse condensée à une question de stratégie : qui est cette entreprise, pour qui, et pourquoi la choisir plutôt qu'une autre. Tant que la question reste ouverte, tout dessin se défend et aucun ne se choisit : la discussion glisse vers le goût. Le brief tranche la question par écrit avant tout dessin, et chaque proposition sera jugée à son aune."),
      B("AI is useful here as an interviewer and an editor, not as an author. It can prepare complete questions, notice contradictions between two answers and condense notes into a clear page. It cannot know what the owner wants: the substance must come from her words, which is why the answers are noted verbatim before being summarised.",
        "L'IA est utile ici comme intervieweuse et comme éditrice, pas comme autrice. Elle prépare des questions complètes, repère les contradictions entre deux réponses et condense des notes en une page claire. Elle ne peut pas savoir ce que veut la gérante : la matière doit venir de ses mots, c'est pourquoi les réponses sont notées telles quelles avant d'être résumées."),
      B("A good brief ends with consequences for the drawing. A value such as 'welcoming' becomes a constraint (rounded shapes, warm colours, a readable name), and a primary audience tells which uses matter first. Without that last step, the brief describes the business but does not guide the logo.",
        "Un bon brief se termine par des conséquences pour le dessin. Une valeur comme « accueillant » devient une contrainte (formes arrondies, couleurs chaudes, nom lisible), et un public principal dit quels usages comptent d'abord. Sans cette dernière étape, le brief décrit l'entreprise mais ne guide pas le logo."),
    ],
    example: {
      context: B("Nora meets Camille, who is opening Pagelune, a neighbourhood café and bookshop. Nora's first prompt asks the AI for a brief straight away, and gets a page that could describe any café in any town.",
        "Nora rencontre Camille, qui ouvre Pagelune, un café-librairie de quartier. Son premier prompt demande directement un brief à l'IA, et obtient une page qui pourrait décrire n'importe quel café de n'importe quelle ville."),
      before: B("Write a brand brief for a café-bookshop called Pagelune.",
        "Rédige un brief de marque pour un café-librairie nommé Pagelune."),
      after: B("You are helping me write the brand brief of Pagelune, a neighbourhood café and bookshop opening soon.\nDo not write the brief yet.\n1. Give me 15 interview questions for the owner, grouped under: offer, customers, values, competitors, ambitions, constraints (budget, timing, what must never change).\n2. For each group, add one follow-up question to ask if the answer stays vague.\nThen I will paste her answers word for word. At that point, write a one-page brief with: positioning statement (For [audience] who [need], Pagelune is [category] that [benefit], unlike [alternative]), three values each with a visual consequence, the primary audience described by a situation, and the uses of the logo ranked by importance.\nFlag any contradiction between her answers instead of smoothing it over.",
        "Tu m'aides à rédiger le brief de marque de Pagelune, un café-librairie de quartier qui ouvre bientôt.\nNe rédige pas encore le brief.\n1. Donne-moi 15 questions d'entretien pour la gérante, regroupées en : offre, clients, valeurs, concurrents, ambitions, contraintes (budget, délais, ce qui ne doit jamais changer).\n2. Pour chaque groupe, ajoute une question de relance si la réponse reste floue.\nEnsuite, je collerai ses réponses mot pour mot. À ce moment, rédige un brief d'une page avec : énoncé de positionnement (Pour [public] qui [besoin], Pagelune est [catégorie] qui [bénéfice], contrairement à [alternative]), trois valeurs avec chacune sa conséquence visuelle, le public principal décrit par une situation, et les usages du logo classés par importance.\nSignale toute contradiction entre ses réponses au lieu de la lisser."),
      takeaway: B("The second prompt separates the interview from the writing and forces the substance to come from Camille. The brief that results names a real audience and turns each value into a constraint Nora can check her sketches against.",
        "Le second prompt sépare l'entretien de la rédaction et oblige la matière à venir de Camille. Le brief obtenu nomme un vrai public et traduit chaque valeur en contrainte à laquelle Nora pourra confronter ses esquisses."),
    },
    exercise: {
      goal: B("A one-page brief for a real or fictional business, built from verbatim answers, ending with visual consequences and ranked uses of the logo.",
        "Un brief d'une page pour une entreprise réelle ou fictive, bâti sur des réponses notées telles quelles, terminé par des conséquences visuelles et les usages du logo classés."),
      prompt: B("You are helping me write the brand brief of [NAME], [WHAT THE BUSINESS DOES, IN ONE SENTENCE].\nStep 1: give me 15 interview questions grouped under offer, customers, values, competitors, ambitions, constraints. Do not write the brief yet.\nStep 2 (after I paste the answers): write a one-page brief with:\n- a positioning statement: For [AUDIENCE] who [NEED], [NAME] is [CATEGORY] that [BENEFIT], unlike [ALTERNATIVE];\n- three values, each with what it implies for shapes, colours and lettering;\n- the primary audience, described by a situation, not by age;\n- the uses of the logo, ranked: [LIST THE USES YOU ALREADY KNOW].\nQuote the owner's words when you use them, and list any contradiction you find.",
        "Tu m'aides à rédiger le brief de marque de [NOM], [CE QUE FAIT L'ENTREPRISE, EN UNE PHRASE].\nÉtape 1 : donne-moi 15 questions d'entretien regroupées en offre, clients, valeurs, concurrents, ambitions, contraintes. Ne rédige pas encore le brief.\nÉtape 2 (après que j'ai collé les réponses) : rédige un brief d'une page avec :\n- un énoncé de positionnement : Pour [PUBLIC] qui [BESOIN], [NOM] est [CATÉGORIE] qui [BÉNÉFICE], contrairement à [ALTERNATIVE] ;\n- trois valeurs, chacune avec ce qu'elle implique pour les formes, les couleurs et le lettrage ;\n- le public principal, décrit par une situation, pas par un âge ;\n- les usages du logo, classés : [LISTEZ LES USAGES DÉJÀ CONNUS].\nCite les mots du client quand tu les reprends, et liste toute contradiction trouvée."),
      check: [
        B("The brief fits on one page and can be read in two minutes", "Le brief tient sur une page et se lit en deux minutes"),
        B("The positioning statement names an alternative the audience really considers", "L'énoncé de positionnement nomme une alternative que le public envisage vraiment"),
        B("Each value has a visual consequence you could check on a sketch", "Chaque valeur a une conséquence visuelle vérifiable sur une esquisse"),
        B("The owner reread the brief and corrected or approved it", "Le client a relu le brief et l'a corrigé ou validé"),
      ],
      bonus: B("Ask the AI to play a sceptical investor and attack the positioning statement in five questions. Answer them in the brief: a positioning that survives objections will also survive the first logo review.",
        "Demandez à l'IA de jouer un investisseur sceptique et d'attaquer l'énoncé de positionnement en cinq questions. Répondez-y dans le brief : un positionnement qui résiste aux objections résistera aussi à la première revue du logo."),
    },
    more: [
      { q: B("Why does Nora paste Camille's answers word for word before asking for a summary?",
          "Pourquoi Nora colle-t-elle les réponses de Camille mot pour mot avant de demander une synthèse ?"),
        options: [
          B("Because the AI cannot read text unless it is in the form of a quote", "Parce que l'IA ne sait lire un texte que s'il se présente comme une citation"),
          B("So that the substance of the brief comes from the owner, not from the model", "Pour que la matière du brief vienne de la gérante, et non du modèle"),
          B("To make the brief longer, since a long brief is taken more seriously", "Pour allonger le brief, un brief long étant pris plus au sérieux"),
        ],
        answer: 1,
        why: B("A model asked to fill gaps writes plausible generalities. Verbatim answers anchor the summary in what the owner really said, and her own words often carry the personality the logo must express.",
          "Un modèle à qui l'on demande de combler des vides écrit des généralités plausibles. Les réponses notées telles quelles ancrent la synthèse dans ce que la gérante a vraiment dit, et ses propres mots portent souvent la personnalité que le logo doit exprimer.") },
      { q: B("The brief lists the value 'welcoming'. What turns it into a useful constraint for the logo?",
          "Le brief retient la valeur « accueillant ». Qu'est-ce qui en fait une contrainte utile pour le logo ?"),
        options: [
          B("Writing it in capital letters at the very top of the brief page", "L'écrire en capitales tout en haut de la page du brief"),
          B("Adding two synonyms, such as friendly and open, next to it", "Lui ajouter deux synonymes, comme amical et ouvert, juste à côté"),
          B("Stating what it implies: soft shapes, warm colours, a readable name", "Dire ce qu'elle implique : formes douces, couleurs chaudes, nom lisible"),
        ],
        answer: 2,
        why: B("A value guides the drawing only once it is translated into choices that can be seen and checked. Synonyms stay abstract; consequences let Nora say whether a sketch respects the brief.",
          "Une valeur ne guide le dessin qu'une fois traduite en choix visibles et vérifiables. Des synonymes restent abstraits ; des conséquences permettent à Nora de dire si une esquisse respecte le brief.") },
    ],
  },

  [enrichKey(M1, 'lg-rivals')]: {
    why: [
      B("Customers never see a logo alone: they see it next to others, on a street, in a search result, on a shelf. A competitive audit reconstructs that context. It reveals the codes of the category, the signs that say 'café' or 'bookshop' at a glance, and the places where every brand looks the same.",
        "Le public ne voit jamais un logo seul : il le voit à côté d'autres, dans une rue, dans un résultat de recherche, sur un rayon. Un audit de la concurrence reconstitue ce contexte. Il révèle les codes de la catégorie, les signes qui disent « café » ou « librairie » d'un coup d'oeil, et les endroits où toutes les marques se ressemblent."),
      B("A positioning map makes the gap visible. Two axes chosen for what matters to the audience (for instance traditional to contemporary, and quick service to place to stay) place each competitor as a point. An empty zone is not automatically good, but it is a hypothesis worth checking against the brief.",
        "Une carte de positionnement rend l'écart visible. Deux axes choisis pour ce qui compte aux yeux du public (par exemple traditionnel à contemporain, et service rapide à lieu où l'on reste) placent chaque concurrent comme un point. Une zone vide n'est pas forcément bonne, mais c'est une hypothèse à confronter au brief."),
      B("AI is strong at sorting a grid you filled and at spotting patterns across many entries. It is weak, and confidently wrong, when asked to describe brands from memory: it may give a café the wrong colour or an invented symbol. The rule is simple: you collect the evidence, the AI helps to read it.",
        "L'IA est forte pour classer une grille que vous avez remplie et pour repérer des motifs sur de nombreuses lignes. Elle est faible, et fausse avec assurance, quand on lui demande de décrire des marques de mémoire : elle peut prêter à un café une mauvaise couleur ou un symbole inventé. La règle est simple : vous rassemblez les preuves, l'IA aide à les lire."),
    ],
    example: {
      context: B("Nora wants to know how Pagelune can stand out. She first asks the AI to analyse the cafés of the neighbourhood, without giving it any material.",
        "Nora veut savoir comment Pagelune peut se distinguer. Elle demande d'abord à l'IA d'analyser les cafés du quartier, sans lui fournir aucune matière."),
      before: B("Analyse the logos of the cafés and bookshops in my neighbourhood and tell me how to stand out.",
        "Analyse les logos des cafés et librairies de mon quartier et dis-moi comment me démarquer."),
      after: B("Here is an audit grid I filled from photos I took and from the official websites and social accounts of 8 competitors of Pagelune (café and bookshop).\nColumns: name, type (direct or indirect), logo family, main colours, type style, symbol if any, tone of their posts.\n[PASTE OF THE GRID]\n1. Using only this grid, list the codes that at least half of them share.\n2. Suggest three pairs of axes relevant to a customer choosing where to read and have coffee, and explain why each pair matters.\n3. For the pair I choose, place each brand and describe the empty zones.\nDo not add any information that is not in the grid. If a cell is empty, say it is unknown.",
        "Voici une grille d'audit remplie à partir de photos que j'ai prises et des sites et comptes officiels de 8 concurrents de Pagelune (café-librairie).\nColonnes : nom, type (direct ou indirect), famille de logo, couleurs principales, style de lettre, symbole éventuel, registre de leurs publications.\n[GRILLE COLLÉE]\n1. En t'appuyant sur cette grille seulement, liste les codes partagés par au moins la moitié d'entre eux.\n2. Propose trois paires d'axes pertinentes pour un client qui choisit où lire et boire un café, et explique pourquoi chaque paire compte.\n3. Pour la paire que je choisirai, place chaque marque et décris les zones vides.\nN'ajoute aucune information absente de la grille. Si une case est vide, dis qu'elle est inconnue."),
      takeaway: B("The AI now reads evidence instead of inventing it. Nora learns that most competitors share brown tones and a cup, and that none occupies 'contemporary and a place to stay', which matches the brief of Pagelune.",
        "L'IA lit désormais des preuves au lieu d'en inventer. Nora apprend que la plupart des concurrents partagent des tons bruns et une tasse, et qu'aucun n'occupe la zone « contemporain et lieu où l'on reste », qui correspond au brief de Pagelune."),
    },
    exercise: {
      goal: B("A filled audit grid of six to ten competitors, the list of category codes, and a positioning map with the free zone named and checked against the brief.",
        "Une grille d'audit remplie pour six à dix concurrents, la liste des codes de la catégorie, et une carte de positionnement avec la zone libre nommée et confrontée au brief."),
      prompt: B("I am auditing the competitors of [YOUR BRAND], which [WHAT IT DOES].\nHere is my grid, filled only from what I captured myself (photos, official websites, official social accounts):\n[PASTE YOUR GRID: NAME, DIRECT OR INDIRECT, LOGO FAMILY, COLOURS, TYPE STYLE, SYMBOL, TONE]\n1. List the codes shared by at least half of the brands, and those used by only one.\n2. Propose three pairs of axes that matter to [YOUR PRIMARY AUDIENCE], with one sentence on why.\n3. On the pair I pick, place each brand and describe the empty zones.\n4. For each empty zone, say whether it fits this positioning: [PASTE YOUR POSITIONING STATEMENT].\nUse only the grid. Mark anything uncertain as unknown.",
        "J'audite les concurrents de [VOTRE MARQUE], qui [CE QU'ELLE FAIT].\nVoici ma grille, remplie uniquement avec ce que j'ai capturé moi-même (photos, sites officiels, comptes sociaux officiels) :\n[COLLEZ VOTRE GRILLE : NOM, DIRECT OU INDIRECT, FAMILLE DE LOGO, COULEURS, STYLE DE LETTRE, SYMBOLE, REGISTRE]\n1. Liste les codes partagés par au moins la moitié des marques, et ceux qu'une seule utilise.\n2. Propose trois paires d'axes qui comptent pour [VOTRE PUBLIC PRINCIPAL], avec une phrase sur la raison.\n3. Sur la paire que je choisirai, place chaque marque et décris les zones vides.\n4. Pour chaque zone vide, dis si elle convient à ce positionnement : [COLLEZ VOTRE ÉNONCÉ DE POSITIONNEMENT].\nN'utilise que la grille. Marque comme inconnu tout ce qui est incertain."),
      check: [
        B("Every row of the grid comes from a capture you can show", "Chaque ligne de la grille vient d'une capture que vous pouvez montrer"),
        B("The grid includes at least two indirect competitors", "La grille comprend au moins deux concurrents indirects"),
        B("The two axes describe a customer's choice, not your own taste", "Les deux axes décrivent un choix du client, pas votre goût"),
        B("The free zone you keep is consistent with the positioning in the brief", "La zone libre retenue est cohérente avec le positionnement du brief"),
      ],
      bonus: B("Put your future logo, still imaginary, on the map in pencil. Then ask the AI which competitor it would most resemble if it used the category codes. You now know which codes to keep as a cue and which to avoid.",
        "Placez au crayon votre futur logo, encore imaginaire, sur la carte. Demandez ensuite à l'IA à quel concurrent il ressemblerait le plus s'il reprenait les codes de la catégorie. Vous savez alors quels codes garder comme signe et lesquels éviter."),
    },
    more: [
      { q: B("The AI describes a nearby bookshop's logo in detail, though Nora never shared it. What should she do?",
          "L'IA décrit en détail le logo d'une librairie voisine, que Nora ne lui a jamais montré. Que doit-elle faire ?"),
        options: [
          B("Treat it as unverified and check it against a capture or the official site", "Le tenir pour non vérifié et le comparer à une capture ou au site officiel"),
          B("Keep it, since a detailed description is usually a reliable one", "Le garder, une description détaillée étant en général fiable"),
          B("Ask the AI to confirm, and keep the description if it says yes", "Demander à l'IA de confirmer, et garder la description si elle dit oui"),
        ],
        answer: 0,
        why: B("Models can produce precise and wrong descriptions of real brands. Asking the same model to confirm adds no evidence; only a capture or an official source does.",
          "Les modèles peuvent produire des descriptions précises et fausses de marques réelles. Demander au même modèle de confirmer n'ajoute aucune preuve ; seule une capture ou une source officielle en apporte.") },
      { q: B("Why include the local library and online booksellers in the audit of Pagelune?",
          "Pourquoi inclure la médiathèque et les librairies en ligne dans l'audit de Pagelune ?"),
        options: [
          B("Because the law requires an audit to list every type of competitor", "Parce que la loi impose de lister tous les types de concurrents"),
          B("Because the customer also weighs them when deciding where to read", "Parce que le client les met aussi en balance pour choisir où lire"),
          B("Because their logos are easier to find than those of small cafés", "Parce que leurs logos sont plus faciles à trouver que ceux des cafés"),
        ],
        answer: 1,
        why: B("Indirect competitors are the alternatives a customer really considers. Leaving them out gives a map that is too small, and a gap that may already be occupied by a library or a large online seller.",
          "Les concurrents indirects sont les alternatives que le client envisage vraiment. Les écarter donne une carte trop petite, et un écart peut-être déjà occupé par une médiathèque ou un grand vendeur en ligne.") },
    ],
  },

  [enrichKey(M1, 'lg-mood')]: {
    why: [
      B("Personality is what makes two brands with the same positioning feel different. It is described with human traits, as one would describe a person: warm or reserved, playful or serious, classic or contemporary. Marketing research has proposed frameworks for this, such as the brand personality dimensions of Jennifer Aaker; the practical point is to choose traits that exclude something.",
        "La personnalité est ce qui rend différentes deux marques au même positionnement. On la décrit avec des traits humains, comme on décrirait une personne : chaleureuse ou réservée, joueuse ou sérieuse, classique ou contemporaine. La recherche en marketing a proposé des cadres pour cela, comme les dimensions de personnalité de marque de Jennifer Aaker ; l'enjeu pratique est de choisir des traits qui excluent quelque chose."),
      B("Sliders between two opposite adjectives force a decision. 'Cosy' alone is vague; 'seven out of ten towards cosy, three towards minimal' tells the designer how far to go. Each trait should be written with its limit (cosy, but not old-fashioned), because the limit is what prevents the drawing from tipping into a cliché.",
        "Des curseurs entre deux adjectifs opposés obligent à décider. « Chaleureux » seul reste vague ; « sept sur dix vers chaleureux, trois vers épuré » dit au graphiste jusqu'où aller. Chaque trait s'écrit avec sa limite (chaleureux, mais pas vieillot), car c'est la limite qui empêche le dessin de basculer dans le cliché."),
      B("The moodboard turns words into images that everyone can react to. It works when it gathers textures, lettering, places, materials and light, not only other logos, which would push towards imitation. Annotated images become shared references: the owner can point to one and say 'this, not that'.",
        "Le moodboard traduit les mots en images auxquelles chacun peut réagir. Il fonctionne quand il réunit textures, lettrages, lieux, matières et lumières, et pas seulement d'autres logos, qui pousseraient à l'imitation. Les images annotées deviennent des références partagées : la gérante peut en montrer une et dire « ceci, pas cela »."),
    ],
    example: {
      context: B("Nora asks the AI for the personality of Pagelune and receives a list of flattering adjectives that could describe any café, then fills a board with logos she likes.",
        "Nora demande à l'IA la personnalité de Pagelune et reçoit une liste d'adjectifs flatteurs qui pourraient décrire n'importe quel café, puis remplit une planche de logos qu'elle aime."),
      before: B("Give me the brand personality of Pagelune and ideas for a moodboard.",
        "Donne-moi la personnalité de marque de Pagelune et des idées de moodboard."),
      after: B("Here is the brief of Pagelune: [PASTE OF THE BRIEF].\n1. Propose 8 pairs of opposite adjectives relevant to a café and bookshop (for example classic / contemporary, cosy / minimal, playful / serious).\n2. For each pair, suggest a position from 1 to 10 based only on the brief, and quote the sentence of the brief that justifies it.\n3. Then propose 4 adjectives for the personality, each written with what it excludes (X, but not Y).\n4. For the moodboard, list 12 kinds of images to look for (textures, lettering, places, objects, light), each tied to one adjective. No logos of other brands.",
        "Voici le brief de Pagelune : [BRIEF COLLÉ].\n1. Propose 8 paires d'adjectifs opposés pertinentes pour un café-librairie (par exemple classique / contemporain, chaleureux / épuré, joueur / sérieux).\n2. Pour chaque paire, propose une position de 1 à 10 fondée uniquement sur le brief, en citant la phrase du brief qui la justifie.\n3. Propose ensuite 4 adjectifs pour la personnalité, chacun écrit avec ce qu'il exclut (X, mais pas Y).\n4. Pour le moodboard, liste 12 types d'images à chercher (textures, lettrages, lieux, objets, lumières), chacun relié à un adjectif. Aucun logo d'autre marque."),
      takeaway: B("Each position is now justified by the brief, and each adjective has a limit. The moodboard that follows mixes paper textures, night light and handwritten signs, all annotated, which Camille can discuss image by image.",
        "Chaque position est désormais justifiée par le brief, et chaque adjectif a sa limite. Le moodboard qui suit mêle textures de papier, lumière du soir et enseignes manuscrites, toutes annotées, que Camille peut discuter image par image."),
    },
    exercise: {
      goal: B("A personality defined on five sliders and three to five bounded adjectives, plus an annotated moodboard of about twelve images where each image supports one adjective.",
        "Une personnalité définie sur cinq curseurs et trois à cinq adjectifs bornés, plus un moodboard annoté d'une douzaine d'images où chacune soutient un adjectif."),
      prompt: B("Here is the brief of [YOUR BRAND]: [PASTE YOUR BRIEF].\n1. Propose 8 pairs of opposite adjectives relevant to [YOUR SECTOR].\n2. For each pair, suggest a position from 1 to 10 based on the brief, and quote the sentence that justifies it.\n3. Propose 3 to 5 personality adjectives, each in the form 'X, but not Y'.\n4. List 12 kinds of images for a moodboard (textures, lettering, places, objects, light, colours), each tied to one adjective. Exclude logos of other brands.\nI will choose the final positions myself: [THE TWO SLIDERS YOU ALREADY FEEL SURE ABOUT].",
        "Voici le brief de [VOTRE MARQUE] : [COLLEZ VOTRE BRIEF].\n1. Propose 8 paires d'adjectifs opposés pertinentes pour [VOTRE SECTEUR].\n2. Pour chaque paire, propose une position de 1 à 10 fondée sur le brief, en citant la phrase qui la justifie.\n3. Propose 3 à 5 adjectifs de personnalité, chacun sous la forme « X, mais pas Y ».\n4. Liste 12 types d'images pour un moodboard (textures, lettrages, lieux, objets, lumières, couleurs), chacun relié à un adjectif. Exclus les logos d'autres marques.\nJe choisirai moi-même les positions finales : [LES DEUX CURSEURS DONT VOUS ÊTES DÉJÀ SÛR]."),
      check: [
        B("Each slider position is justified by a sentence of the brief", "Chaque position de curseur est justifiée par une phrase du brief"),
        B("Each adjective is written with what it excludes", "Chaque adjectif est écrit avec ce qu'il exclut"),
        B("The board holds fewer than three logos of other brands, ideally none", "La planche compte moins de trois logos d'autres marques, idéalement aucun"),
        B("Every image carries an annotation naming the adjective it supports", "Chaque image porte une annotation qui nomme l'adjectif soutenu"),
      ],
      bonus: B("Show the board to someone who has not read the brief and ask for three adjectives. If at least two match yours, the board speaks; if not, remove the images that sent them elsewhere.",
        "Montrez la planche à quelqu'un qui n'a pas lu le brief et demandez-lui trois adjectifs. Si au moins deux rejoignent les vôtres, la planche parle ; sinon, retirez les images qui l'ont envoyé ailleurs."),
    },
    more: [
      { q: B("Why write 'cosy, but not old-fashioned' rather than simply 'cosy'?",
          "Pourquoi écrire « chaleureux, mais pas vieillot » plutôt que simplement « chaleureux » ?"),
        options: [
          B("Because the limit stops the drawing from sliding into a cliché", "Parce que la limite empêche le dessin de glisser vers le cliché"),
          B("Because a brand personality must always contain a negative word", "Parce qu'une personnalité de marque doit toujours contenir un mot négatif"),
          B("Because the AI does not understand adjectives that stand alone", "Parce que l'IA ne comprend pas les adjectifs employés seuls"),
        ],
        answer: 0,
        why: B("Most adjectives can be pushed too far. Naming the excess to avoid tells the designer, and the AI image tool later, where to stop: warm wood and soft light, yes; lace and faded sepia, no.",
          "La plupart des adjectifs peuvent être poussés trop loin. Nommer l'excès à éviter dit au graphiste, et plus tard à l'outil d'IA image, où s'arrêter : bois chaud et lumière douce, oui ; dentelle et sépia passé, non.") },
      { q: B("Nora's board is mostly made of logos she admires. What is the main risk?",
          "La planche de Nora se compose surtout de logos qu'elle admire. Quel est le principal risque ?"),
        options: [
          B("The board will be too colourful to print on a single page", "La planche sera trop colorée pour tenir sur une seule page"),
          B("Camille will find the board too professional to understand", "Camille trouvera la planche trop professionnelle pour la comprendre"),
          B("The final logo will drift towards imitating existing marks", "Le logo final tendra à imiter des marques qui existent déjà"),
        ],
        answer: 2,
        why: B("A board of logos invites copying forms that already belong to someone. Textures, places, lettering and objects carry the mood without pointing to a ready-made solution.",
          "Une planche de logos invite à recopier des formes qui appartiennent déjà à quelqu'un. Textures, lieux, lettrages et objets portent l'ambiance sans désigner une solution toute faite.") },
    ],
  },

  [enrichKey(M1, 'lg-families')]: {
    why: [
      B("Logos fall into a few families. The wordmark is the name set in a distinctive way. The lettermark, or monogram, reduces it to initials. The symbol is an image without text, figurative or abstract. The combination mark joins a symbol and the name, and the emblem places the name inside a shape, like a badge or a seal.",
        "Les logos se rangent en quelques familles. Le logotype (wordmark) est le nom composé de façon distinctive. Le monogramme (lettermark) le réduit à des initiales. Le symbole est une image sans texte, figurative ou abstraite. Le logo combiné associe un symbole et le nom, et l'emblème place le nom à l'intérieur d'une forme, comme un badge ou un sceau."),
      B("Each family answers different constraints. A wordmark teaches the name but needs a short, readable one. A symbol alone works for brands already known, because people must learn to connect the image to the name. An emblem looks rich on a sign or a cup, but its small text disappears at small sizes.",
        "Chaque famille répond à des contraintes différentes. Un logotype fait connaître le nom, mais il le faut court et lisible. Un symbole seul convient aux marques déjà connues, car le public doit apprendre à relier l'image au nom. Un emblème est riche sur une enseigne ou un gobelet, mais son petit texte disparaît en petite taille."),
      B("The choice comes from the list of uses, not from taste. A logo that must live on a sign and as a social avatar needs a version that works in a small square. That is why many identities are systems: a main version, a horizontal or stacked variant, and a reduced mark for the smallest uses.",
        "Le choix vient de la liste des usages, pas du goût. Un logo qui doit vivre sur une enseigne et en avatar social a besoin d'une version qui fonctionne dans un petit carré. C'est pourquoi beaucoup d'identités sont des systèmes : une version principale, une variante horizontale ou empilée, et une marque réduite pour les plus petits usages."),
    ],
    example: {
      context: B("Camille loves round vintage badges and asks for an emblem. Nora asks the AI which family is best, without saying anything about the uses, and gets an answer that simply agrees with her client.",
        "Camille aime les badges ronds d'inspiration ancienne et demande un emblème. Nora demande à l'IA quelle famille est la meilleure, sans rien dire des usages, et obtient une réponse qui donne simplement raison à sa cliente."),
      before: B("My client wants a round vintage emblem for her café. Is that a good idea?",
        "Ma cliente veut un emblème rond d'inspiration ancienne pour son café. Est-ce une bonne idée ?"),
      after: B("Brand: Pagelune, a new café and bookshop. The name has 8 letters and is not known yet.\nUses, ranked: 1. shop sign above the window, 2. social avatar (small circle), 3. cups and paper bags, 4. bookmarks and receipts (one colour), 5. website favicon.\nCompare these five families: wordmark, lettermark, symbol alone, combination mark, emblem.\nFor each, give a score from 1 to 5 on each use, with one sentence of reasoning.\nThen recommend a family and say what the reduced version for the avatar and the favicon would be.\nMy client likes emblems: tell me honestly where an emblem would work in this system and where it would not.",
        "Marque : Pagelune, un nouveau café-librairie. Le nom compte 8 lettres et n'est pas encore connu.\nUsages, classés : 1. enseigne au-dessus de la vitrine, 2. avatar social (petit cercle), 3. gobelets et sacs en papier, 4. marque-pages et tickets (une couleur), 5. favicon du site.\nCompare ces cinq familles : logotype, monogramme, symbole seul, logo combiné, emblème.\nPour chacune, donne une note de 1 à 5 sur chaque usage, avec une phrase de raisonnement.\nRecommande ensuite une famille et dis quelle serait la version réduite pour l'avatar et le favicon.\nMa cliente aime les emblèmes : dis-moi franchement où un emblème fonctionnerait dans ce système, et où non."),
      takeaway: B("With the uses on the table, the comparison favours a combination mark whose symbol, a crescent formed by a page, works alone. The emblem Camille likes finds its place on cups and a stamp, as a secondary version.",
        "Avec les usages sur la table, la comparaison favorise un logo combiné dont le symbole, un croissant formé par une page, fonctionne seul. L'emblème qu'aime Camille trouve sa place sur les gobelets et un tampon, comme version secondaire."),
    },
    exercise: {
      goal: B("A written choice of logo family for your brand, justified by ranked uses and the nature of the name, with the reduced version for small sizes already defined.",
        "Un choix écrit de famille de logo pour votre marque, justifié par les usages classés et la nature du nom, avec la version réduite pour les petites tailles déjà définie."),
      prompt: B("Brand: [NAME], [WHAT IT DOES]. The name has [NUMBER] letters and is [ALREADY KNOWN / NEW].\nUses, ranked by importance: [LIST 5 TO 8 USES, FROM THE LARGEST TO THE SMALLEST].\nCompare five families: wordmark, lettermark, symbol alone, combination mark, emblem.\nFor each, score each use from 1 to 5 and give one sentence of reasoning.\nRecommend one family, describe the system (main version, variant, reduced mark) and say which family would be a mistake here, and why.\nIf the scores are close, say so instead of forcing a winner.",
        "Marque : [NOM], [CE QU'ELLE FAIT]. Le nom compte [NOMBRE] lettres et il est [DÉJÀ CONNU / NOUVEAU].\nUsages, classés par importance : [LISTEZ 5 À 8 USAGES, DU PLUS GRAND AU PLUS PETIT].\nCompare cinq familles : logotype, monogramme, symbole seul, logo combiné, emblème.\nPour chacune, note chaque usage de 1 à 5 et donne une phrase de raisonnement.\nRecommande une famille, décris le système (version principale, variante, marque réduite) et dis quelle famille serait une erreur ici, et pourquoi.\nSi les notes sont proches, dis-le au lieu de forcer un gagnant."),
      check: [
        B("The uses are ranked and include at least one very small format", "Les usages sont classés et comprennent au moins un très petit format"),
        B("The choice mentions whether the name is known or still new", "Le choix mentionne si le nom est connu ou encore nouveau"),
        B("A reduced version is defined for the avatar and the favicon", "Une version réduite est définie pour l'avatar et le favicon"),
        B("You can explain in one sentence why the other families were set aside", "Vous savez expliquer en une phrase pourquoi les autres familles sont écartées"),
      ],
      bonus: B("Find, in your own street or town, one example of each family on real signs. Photograph them and note, for each, the smallest place you saw it used. You will notice which families survive a small size.",
        "Trouvez, dans votre rue ou votre ville, un exemple de chaque famille sur de vraies enseignes. Photographiez-les et notez, pour chacune, le plus petit support où vous l'avez vue. Vous verrez quelles familles survivent à la petite taille."),
    },
    more: [
      { q: B("A long-established local bakery, known by everyone in town, wants to modernise. Which family carries the least risk?",
          "Une boulangerie installée depuis longtemps, connue de toute la ville, veut se moderniser. Quelle famille comporte le moins de risque ?"),
        options: [
          B("A brand new abstract symbol, without the name next to it", "Un tout nouveau symbole abstrait, sans le nom à côté"),
          B("A redrawn wordmark or combination mark that keeps the name visible", "Un logotype ou un logo combiné redessiné qui garde le nom visible"),
          B("A lettermark made of initials that customers have never used", "Un monogramme fait d'initiales que les clients n'ont jamais employées"),
        ],
        answer: 1,
        why: B("The value of a known business lies in its name. Keeping the name visible preserves recognition while the drawing modernises; a new symbol or unused initials would ask customers to learn everything again.",
          "La valeur d'une enseigne connue tient à son nom. Garder le nom visible préserve la reconnaissance pendant que le dessin se modernise ; un nouveau symbole ou des initiales inusitées demanderaient au public de tout réapprendre.") },
      { q: B("Why do many identities define a reduced mark in addition to the main logo?",
          "Pourquoi beaucoup d'identités définissent-elles une marque réduite en plus du logo principal ?"),
        options: [
          B("Because each social network requires its own registered logo", "Parce que chaque réseau social exige son propre logo déposé"),
          B("Because a reduced mark costs less to print on paper goods", "Parce qu'une marque réduite coûte moins cher à imprimer"),
          B("Because the full logo becomes unreadable in very small spaces", "Parce que le logo complet devient illisible dans les très petits espaces"),
        ],
        answer: 2,
        why: B("Avatars, favicons and app icons offer a few pixels or millimetres. A simplified mark derived from the main logo keeps the brand recognisable where the full version would turn into a blur.",
          "Avatars, favicons et icônes d'app offrent quelques pixels ou millimètres. Une marque simplifiée, dérivée du logo principal, garde la marque reconnaissable là où la version complète deviendrait une tache.") },
    ],
  },
}

const STRAT_DEEP: Record<string, Deepening> = {
  [deepKey(M1, 'lg-brief')]: {
    intro: B("Before any sketch, a logo needs a question to answer: who is the business, for whom, and why choose it. The brand brief is the short document that answers it in writing. This lesson shows how to prepare and run the briefing interview with AI as a guide, how to write a positioning statement, and how to turn values into visual constraints. You will write the brief of Pagelune, the fictional café and bookshop that runs through this course, and you will be able to judge any later proposal against it.",
      "Avant toute esquisse, un logo a besoin d'une question à laquelle répondre : qui est l'entreprise, pour qui, et pourquoi la choisir. Le brief de marque est le court document qui y répond par écrit. Ce cours montre comment préparer et mener l'entretien de cadrage avec l'IA pour guide, comment écrire un énoncé de positionnement, et comment traduire des valeurs en contraintes visuelles. Vous rédigerez le brief de Pagelune, le café-librairie fictif qui sert de fil rouge à cette formation, et vous saurez juger toute proposition ultérieure à son aune."),
    concepts: [
      { term: B('Brand brief', 'Brief de marque'),
        def: B("A one-page document that states the positioning, the audience, the values and the uses of the identity. It is approved by the client before any drawing.",
          "Un document d'une page qui énonce le positionnement, le public, les valeurs et les usages de l'identité. Le client le valide avant tout dessin.") },
      { term: B('Positioning statement', 'Énoncé de positionnement'),
        def: B("One sentence: for [audience] who [need], [brand] is [category] that [benefit], unlike [alternative]. It says where the brand stands in the customer's mind.",
          "Une phrase : pour [public] qui [besoin], [marque] est [catégorie] qui [bénéfice], contrairement à [alternative]. Elle dit où la marque se place dans l'esprit du client.") },
      { term: B('Primary audience', 'Public principal'),
        def: B("The group the identity must convince first, described by a situation and a need rather than by age alone. Other audiences exist, but they do not decide the design.",
          "Le groupe que l'identité doit convaincre d'abord, décrit par une situation et un besoin plutôt que par l'âge seul. D'autres publics existent, mais ils ne décident pas du dessin.") },
      { term: B('Visual consequence', 'Conséquence visuelle'),
        def: B("The translation of a value into a choice that can be seen: 'welcoming' becomes soft shapes and a readable name. It makes the brief usable at the drawing stage.",
          "La traduction d'une valeur en choix visible : « accueillant » devient formes douces et nom lisible. Elle rend le brief utilisable au moment du dessin.") },
    ],
    walkthrough: {
      title: B("Nora writes the brief of Pagelune with Camille, its owner, in one interview and two AI passes.",
        "Nora rédige le brief de Pagelune avec Camille, sa gérante, en un entretien et deux passages par l'IA."),
      steps: [
        B("She asks the AI for fifteen questions grouped by theme, with a follow-up for each group. Why: a structured interview covers the constraints (budget, timing, what must not change) that clients forget to mention.",
          "Elle demande à l'IA quinze questions regroupées par thème, avec une relance par groupe. Pourquoi : un entretien structuré couvre les contraintes (budget, délais, ce qui ne doit pas changer) que les clients oublient de mentionner."),
        B("During the meeting, she notes Camille's answers word for word, including expressions such as 'a living room where books are for sale'. Why: these words carry the personality, and a summary written too early would lose them.",
          "Pendant le rendez-vous, elle note les réponses de Camille mot pour mot, y compris des expressions comme « un salon où les livres sont à vendre ». Pourquoi : ces mots portent la personnalité, et un résumé trop précoce les perdrait."),
        B("She pastes the answers and asks for a positioning statement, plus a list of contradictions. The AI notices that Camille wants both 'quick coffee for commuters' and 'a place to stay for hours'. Why: a contradiction left open would split the logo between two intentions.",
          "Elle colle les réponses et demande un énoncé de positionnement, plus une liste des contradictions. L'IA remarque que Camille veut à la fois « un café rapide pour ceux qui partent travailler » et « un lieu où rester des heures ». Pourquoi : une contradiction laissée ouverte partagerait le logo entre deux intentions."),
        B("Nora asks Camille to choose; the primary audience becomes readers who stay, the commuters a secondary one. Why: the logo can serve both, but only one can decide its tone.",
          "Nora demande à Camille de choisir ; le public principal devient celui des lecteurs qui restent, les pressés un public secondaire. Pourquoi : le logo peut servir les deux, mais un seul peut décider de son registre."),
        B("She writes three values with their consequences (welcoming, curious, calm) and the ranked uses, from the shop sign to the favicon. Why: this last section is what she will use to accept or reject each sketch.",
          "Elle rédige trois valeurs avec leurs conséquences (accueillant, curieux, calme) et les usages classés, de l'enseigne au favicon. Pourquoi : c'est cette dernière partie qui lui servira à accepter ou refuser chaque esquisse."),
      ],
    },
    mistakes: [
      { wrong: B("Asking the AI to write the brief directly from the name of the business.",
          "Demander à l'IA de rédiger le brief directement à partir du nom de l'entreprise."),
        fix: B("Use the AI to prepare the interview, then to summarise verbatim answers. The substance comes from the client, never from the model.",
          "Servez-vous de l'IA pour préparer l'entretien, puis pour résumer des réponses notées telles quelles. La matière vient du client, jamais du modèle.") },
      { wrong: B("Describing the audience as 'everyone' or by age and income only.",
          "Décrire le public comme « tout le monde » ou seulement par l'âge et les revenus."),
        fix: B("Name a primary audience by its situation and need (readers who want to stay for hours), and accept that the logo speaks to it first.",
          "Nommez un public principal par sa situation et son besoin (des lecteurs qui veulent rester des heures), et acceptez que le logo s'adresse d'abord à lui.") },
      { wrong: B("Listing values without saying what they change in the drawing.",
          "Lister des valeurs sans dire ce qu'elles changent dans le dessin."),
        fix: B("Give each value a visual consequence on shapes, colours or lettering, so that a sketch can be checked against it.",
          "Donnez à chaque valeur une conséquence visuelle sur les formes, les couleurs ou le lettrage, pour qu'une esquisse puisse s'y confronter.") },
    ],
    recap: [
      B("The brief answers who, for whom and why, before any drawing.", "Le brief répond à qui, pour qui et pourquoi, avant tout dessin."),
      B("The AI prepares the interview and summarises; the client provides the substance.", "L'IA prépare l'entretien et résume ; le client fournit la matière."),
      B("A positioning statement names the audience, the need, the benefit and the alternative.", "Un énoncé de positionnement nomme le public, le besoin, le bénéfice et l'alternative."),
      B("Each value must come with a visual consequence that can be checked.", "Chaque valeur doit venir avec une conséquence visuelle vérifiable."),
    ],
    further: B("Rewrite the positioning statement of a brand you use every day, using only what its shop, website and packaging show. Compare it with what the brand says about itself: the distance between the two is exactly what a brief tries to reduce.",
      "Réécrivez l'énoncé de positionnement d'une marque que vous utilisez chaque jour, à partir de ce que montrent sa boutique, son site et ses emballages. Comparez-le avec ce que la marque dit d'elle-même : l'écart entre les deux est précisément ce qu'un brief cherche à réduire."),
    more: [
      { q: B("The AI finds that Camille wants both quick takeaway coffee and a place to stay for hours. What should Nora do?",
          "L'IA relève que Camille veut à la fois du café rapide à emporter et un lieu où rester des heures. Que doit faire Nora ?"),
        options: [
          B("Ask Camille which audience comes first, and write it in the brief", "Demander à Camille quel public passe en premier, et l'écrire dans le brief"),
          B("Keep both in the brief, since the logo will sort it out by itself", "Garder les deux dans le brief, le logo tranchera de lui-même"),
          B("Let the AI pick the audience that is easier to design for", "Laisser l'IA choisir le public le plus simple à dessiner"),
        ],
        answer: 0,
        why: B("A contradiction is a decision that belongs to the client. Once a primary audience is chosen, the logo can still serve the other one, but its tone is no longer split between two intentions.",
          "Une contradiction est une décision qui revient au client. Une fois le public principal choisi, le logo peut encore servir l'autre, mais son registre n'est plus partagé entre deux intentions.") },
      { q: B("Which part of the brief will Nora use most when she reviews her first sketches?",
          "Quelle partie du brief Nora utilisera-t-elle le plus en relisant ses premières esquisses ?"),
        options: [
          B("The history of the building where the café is located", "L'histoire du bâtiment où se trouve le café"),
          B("The values with their visual consequences, and the ranked uses", "Les valeurs avec leurs conséquences visuelles, et les usages classés"),
          B("The list of the fifteen questions asked during the interview", "La liste des quinze questions posées pendant l'entretien"),
        ],
        answer: 1,
        why: B("Consequences and uses are the checkable part of the brief: a sketch either has soft shapes and a readable name, or not; it either survives the avatar size, or not.",
          "Les conséquences et les usages sont la partie vérifiable du brief : une esquisse a des formes douces et un nom lisible, ou non ; elle survit à la taille d'un avatar, ou non.") },
    ],
  },

  [deepKey(M1, 'lg-rivals')]: {
    intro: B("A logo is always seen among others. Studying the competition means rebuilding that context: which signs the category uses, where the brands look alike, and which visual territory is left free. This lesson shows how to collect evidence, fill an audit grid, let AI sort it without inventing anything, and draw a positioning map. Applied to Pagelune, it will give you a gap to occupy and a list of codes to keep or avoid.",
      "Un logo est toujours vu parmi d'autres. Étudier la concurrence, c'est reconstituer ce contexte : quels signes la catégorie emploie, où les marques se ressemblent, et quel territoire visuel reste libre. Ce cours montre comment rassembler des preuves, remplir une grille d'audit, laisser l'IA la classer sans rien inventer, et tracer une carte de positionnement. Appliqué à Pagelune, il vous donnera un écart à occuper et une liste de codes à garder ou à éviter."),
    concepts: [
      { term: B('Competitive audit', 'Audit concurrentiel'),
        def: B("A structured review of competing identities, built from captures: logo family, colours, lettering, symbols, tone. It describes what exists, not what one imagines.",
          "Une revue structurée des identités concurrentes, bâtie sur des captures : famille de logo, couleurs, lettrage, symboles, registre. Elle décrit ce qui existe, pas ce que l'on imagine.") },
      { term: B('Category codes', 'Codes de catégorie'),
        def: B("The signs most competitors repeat, such as a cup and brown tones for cafés. They help customers recognise the category, and make brands interchangeable.",
          "Les signes que la plupart des concurrents répètent, comme une tasse et des tons bruns pour les cafés. Ils aident à reconnaître la catégorie, et rendent les marques interchangeables.") },
      { term: B('Positioning map', 'Carte de positionnement'),
        def: B("Two axes that matter to the customer, on which each brand is placed as a point. Empty zones are hypotheses of differentiation to check against the brief.",
          "Deux axes qui comptent pour le client, sur lesquels chaque marque est placée comme un point. Les zones vides sont des hypothèses de différenciation à confronter au brief.") },
      { term: B('Indirect competitor', 'Concurrent indirect'),
        def: B("An alternative that meets the same need in another way, such as a public library or an online bookseller for someone who wants to read.",
          "Une alternative qui répond au même besoin autrement, comme une médiathèque ou une librairie en ligne pour quelqu'un qui veut lire.") },
    ],
    walkthrough: {
      title: B("Nora audits eight competitors of Pagelune and finds the territory its logo can occupy.",
        "Nora audite huit concurrents de Pagelune et trouve le territoire que son logo peut occuper."),
      steps: [
        B("She walks the neighbourhood, photographs signs, cups and menus, and saves the official websites and social profiles. Why: an audit is only as good as its evidence, and the AI must never fill gaps from memory.",
          "Elle parcourt le quartier, photographie enseignes, gobelets et cartes, et enregistre les sites et profils sociaux officiels. Pourquoi : un audit ne vaut que par ses preuves, et l'IA ne doit jamais combler les vides de mémoire."),
        B("She fills a grid of eight rows, five direct competitors and three indirect ones (a chain, a library, an online bookseller). Why: the customer weighs all of them, so the map must include them.",
          "Elle remplit une grille de huit lignes, cinq concurrents directs et trois indirects (une chaîne, une médiathèque, une librairie en ligne). Pourquoi : le client les met tous en balance, la carte doit donc les inclure."),
        B("She pastes the grid and asks the AI to list the shared codes, using only the grid. Result: brown and cream, a cup or a book drawn in outline, rounded serif lettering. Why: these codes say 'café' or 'bookshop' and must be handled consciously.",
          "Elle colle la grille et demande à l'IA de lister les codes partagés, à partir de la grille seulement. Résultat : brun et crème, une tasse ou un livre dessinés au trait, un lettrage à empattements arrondi. Pourquoi : ces codes disent « café » ou « librairie » et doivent être traités en connaissance de cause."),
        B("She chooses the axes 'traditional to contemporary' and 'quick service to place to stay', and places each brand. The zone 'contemporary and a place to stay' is empty. Why: it matches the primary audience of the brief.",
          "Elle choisit les axes « traditionnel à contemporain » et « service rapide à lieu où l'on reste », et place chaque marque. La zone « contemporain et lieu où l'on reste » est vide. Pourquoi : elle correspond au public principal du brief."),
        B("She writes her conclusion: keep one cue of the category (a reference to the page), avoid brown and the cup, aim for a contemporary and calm look. Why: this sentence will brief the AI image exploration in the next module.",
          "Elle rédige sa conclusion : garder un signe de la catégorie (une référence à la page), éviter le brun et la tasse, viser un aspect contemporain et calme. Pourquoi : cette phrase servira de consigne à l'exploration en IA image, dans le module suivant."),
      ],
    },
    mistakes: [
      { wrong: B("Asking the AI to describe the logos of real competitors without giving it any material.",
          "Demander à l'IA de décrire les logos de concurrents réels sans lui fournir de matière."),
        fix: B("Collect captures yourself, fill the grid, then ask the AI to sort only what the grid contains, marking gaps as unknown.",
          "Rassemblez vous-même les captures, remplissez la grille, puis demandez à l'IA de classer seulement ce qu'elle contient, en marquant les vides comme inconnus.") },
      { wrong: B("Choosing axes that reflect the designer's taste, such as 'ugly to beautiful'.",
          "Choisir des axes qui reflètent le goût du graphiste, comme « laid à beau »."),
        fix: B("Choose axes that describe a customer's choice, such as quick service or a place to stay, so that the map speaks of the market.",
          "Choisissez des axes qui décrivent un choix du client, comme service rapide ou lieu où l'on reste, pour que la carte parle du marché.") },
      { wrong: B("Rejecting every category code to be as different as possible.",
          "Rejeter tous les codes de la catégorie pour être aussi différent que possible."),
        fix: B("Keep one cue that signals the category, and differentiate on form, colour or tone. A logo nobody can place is not distinctive, it is confusing.",
          "Gardez un signe qui indique la catégorie, et différenciez-vous par la forme, la couleur ou le registre. Un logo que personne ne sait situer n'est pas distinctif, il est déroutant.") },
    ],
    recap: [
      B("The audit rebuilds the context in which the logo will be seen.", "L'audit reconstitue le contexte dans lequel le logo sera vu."),
      B("You collect the evidence; the AI sorts it and never fills gaps from memory.", "Vous rassemblez les preuves ; l'IA les classe et ne comble jamais les vides de mémoire."),
      B("Category codes reassure but make brands interchangeable: keep one, differ elsewhere.", "Les codes de catégorie rassurent mais rendent les marques interchangeables : gardez-en un, différez ailleurs."),
      B("A positioning map with customer axes turns a gap into a testable hypothesis.", "Une carte aux axes du client transforme un écart en hypothèse vérifiable."),
    ],
    further: B("Repeat the audit in another channel: search for 'café librairie' in a map application and look at the avatars in the results list, at their real size. The context of a small avatar among others often reveals codes that the shop signs hide.",
      "Refaites l'audit sur un autre canal : cherchez « café librairie » dans une application de cartes et regardez les avatars dans la liste de résultats, à leur taille réelle. Le contexte d'un petit avatar parmi d'autres révèle souvent des codes que les enseignes masquent."),
    more: [
      { q: B("On the map, the zone 'traditional and quick service' is empty. Should Pagelune occupy it?",
          "Sur la carte, la zone « traditionnel et service rapide » est vide. Pagelune doit-il l'occuper ?"),
        options: [
          B("Yes, since any empty zone is a business opportunity to seize", "Oui, toute zone vide est une occasion commerciale à saisir"),
          B("Yes, if the AI confirms that the zone is really empty in the town", "Oui, si l'IA confirme que la zone est vraiment vide dans la ville"),
          B("No, because it contradicts the primary audience set in the brief", "Non, car elle contredit le public principal fixé par le brief"),
        ],
        answer: 2,
        why: B("A gap is only useful if it matches the strategy. The brief of Pagelune targets readers who stay; a quick, traditional position would make the logo speak to someone else.",
          "Un écart n'est utile que s'il rejoint la stratégie. Le brief de Pagelune vise les lecteurs qui restent ; une position rapide et traditionnelle ferait parler le logo à quelqu'un d'autre.") },
      { q: B("What is the safest role for AI in a competitive audit?",
          "Quel est le rôle le plus sûr de l'IA dans un audit concurrentiel ?"),
        options: [
          B("Sorting the grid you filled and proposing relevant axes", "Classer la grille que vous avez remplie et proposer des axes pertinents"),
          B("Finding and describing the competitors' logos by itself", "Trouver et décrire elle-même les logos des concurrents"),
          B("Deciding which competitor the new logo should copy", "Décider quel concurrent le nouveau logo doit copier"),
        ],
        answer: 0,
        why: B("The AI is reliable when it works on material you provide, and unreliable when it describes real brands from memory. Copying a competitor is never the goal of an audit.",
          "L'IA est fiable quand elle travaille sur une matière que vous fournissez, et peu fiable quand elle décrit de mémoire des marques réelles. Copier un concurrent n'est jamais le but d'un audit.") },
    ],
  },

  [deepKey(M1, 'lg-mood')]: {
    intro: B("Two cafés can share the same positioning and still feel completely different: that difference is personality. This lesson shows how to describe a brand personality precisely, with sliders between opposite adjectives and adjectives bounded by what they exclude, then how to build a moodboard that shows it. You will define the personality of Pagelune with AI and assemble an annotated board that Camille can discuss image by image.",
      "Deux cafés peuvent partager le même positionnement et dégager pourtant une impression toute différente : cette différence, c'est la personnalité. Ce cours montre comment décrire précisément une personnalité de marque, avec des curseurs entre adjectifs opposés et des adjectifs bornés par ce qu'ils excluent, puis comment bâtir un moodboard qui la montre. Vous définirez la personnalité de Pagelune avec l'IA et assemblerez une planche annotée que Camille pourra discuter image par image."),
    concepts: [
      { term: B('Brand personality', 'Personnalité de marque'),
        def: B("The set of human traits associated with a brand, such as warm, curious or calm. It shapes the logo, the colours and later the tone of voice.",
          "L'ensemble des traits humains associés à une marque, comme chaleureuse, curieuse ou calme. Elle oriente le logo, les couleurs et plus tard le ton de voix.") },
      { term: B('Personality slider', 'Curseur de personnalité'),
        def: B("A scale between two opposite adjectives, such as classic and contemporary, on which the brand is placed. It forces a decision that a single adjective avoids.",
          "Une échelle entre deux adjectifs opposés, comme classique et contemporain, sur laquelle on place la marque. Elle impose une décision qu'un adjectif seul évite.") },
      { term: B('Bounded adjective', 'Adjectif borné'),
        def: B("An adjective written with its limit, in the form 'X, but not Y'. The limit prevents the design from sliding into the cliché of the trait.",
          "Un adjectif écrit avec sa limite, sous la forme « X, mais pas Y ». La limite empêche le dessin de glisser vers le cliché du trait.") },
      { term: B('Moodboard', 'Moodboard'),
        def: B("A board of images (textures, lettering, places, objects, light) that makes the personality visible. Each image is annotated with the trait it supports.",
          "Une planche d'images (textures, lettrages, lieux, objets, lumières) qui rend la personnalité visible. Chaque image est annotée avec le trait qu'elle soutient.") },
    ],
    walkthrough: {
      title: B("Nora defines the personality of Pagelune and builds its moodboard in FigJam.",
        "Nora définit la personnalité de Pagelune et construit son moodboard dans FigJam."),
      steps: [
        B("She pastes the brief and asks the AI for eight pairs of opposite adjectives with a proposed position, each justified by a sentence of the brief. Why: a position the brief cannot justify is the AI's taste, not the brand's.",
          "Elle colle le brief et demande à l'IA huit paires d'adjectifs opposés avec une position proposée, chacune justifiée par une phrase du brief. Pourquoi : une position que le brief ne justifie pas relève du goût de l'IA, pas de celui de la marque."),
        B("With Camille, she keeps five sliders and moves two: 'playful to serious' goes from 3 to 5, because Camille wants to be taken seriously by publishers. Why: the client decides; the AI only proposes.",
          "Avec Camille, elle garde cinq curseurs et en déplace deux : « joueur à sérieux » passe de 3 à 5, car Camille veut être prise au sérieux par les éditeurs. Pourquoi : le client décide ; l'IA ne fait que proposer."),
        B("She writes four bounded adjectives: welcoming but not familiar, curious but not scattered, calm but not austere, contemporary but not cold. Why: each limit is a line the logo must not cross.",
          "Elle écrit quatre adjectifs bornés : accueillant mais pas familier, curieux mais pas dispersé, calme mais pas austère, contemporain mais pas froid. Pourquoi : chaque limite est une ligne que le logo ne doit pas franchir."),
        B("She gathers about twenty images in Pinterest, then keeps twelve in FigJam: paper grain, evening light on a window, a hand-painted sign, a reading lamp, a deep blue night sky. Why: textures and places carry a mood without suggesting a ready-made logo.",
          "Elle réunit une vingtaine d'images dans Pinterest, puis en garde douze dans FigJam : grain de papier, lumière du soir sur une vitrine, enseigne peinte à la main, lampe de lecture, ciel nocturne bleu profond. Pourquoi : textures et lieux portent une ambiance sans suggérer de logo tout fait."),
        B("She annotates each image with its adjective and removes two she cannot justify. Why: the board becomes an argument that Camille can accept or contest piece by piece.",
          "Elle annote chaque image avec son adjectif et en retire deux qu'elle ne sait pas justifier. Pourquoi : la planche devient un argument que Camille peut accepter ou contester pièce par pièce."),
      ],
    },
    mistakes: [
      { wrong: B("Choosing adjectives that every brand claims, such as quality, modern or authentic.",
          "Choisir des adjectifs que toutes les marques revendiquent, comme qualité, moderne ou authentique."),
        fix: B("Place the brand on sliders between opposites, and write each adjective with what it excludes.",
          "Placez la marque sur des curseurs entre opposés, et écrivez chaque adjectif avec ce qu'il exclut.") },
      { wrong: B("Building the moodboard mostly from logos of other brands.",
          "Construire le moodboard surtout avec des logos d'autres marques."),
        fix: B("Gather textures, lettering, places, objects and light, so that the board sets a mood without pointing to forms that already belong to someone.",
          "Réunissez textures, lettrages, lieux, objets et lumières, pour que la planche installe une ambiance sans désigner des formes qui appartiennent déjà à quelqu'un.") },
      { wrong: B("Presenting a board without annotations and asking the client whether they like it.",
          "Présenter une planche sans annotations et demander au client s'il l'aime."),
        fix: B("Annotate each image with the trait it supports, and ask the client which traits are missing or wrong, not whether the board is pretty.",
          "Annotez chaque image avec le trait qu'elle soutient, et demandez au client quels traits manquent ou sonnent faux, pas si la planche est jolie.") },
    ],
    recap: [
      B("Personality is what distinguishes brands that share a positioning.", "La personnalité distingue des marques qui partagent un positionnement."),
      B("Sliders force decisions; bounded adjectives prevent clichés.", "Les curseurs obligent à décider ; les adjectifs bornés évitent les clichés."),
      B("A moodboard gathers textures, places and lettering, not other logos.", "Un moodboard réunit textures, lieux et lettrages, pas d'autres logos."),
      B("Every image is annotated with the trait it supports.", "Chaque image est annotée avec le trait qu'elle soutient."),
    ],
    further: B("Read an introduction to brand personality frameworks, such as Jennifer Aaker's dimensions, in a marketing textbook. Then place three brands you know on the same five sliders as Pagelune: comparing positions trains your eye faster than any definition.",
      "Lisez une introduction aux cadres de personnalité de marque, comme les dimensions de Jennifer Aaker, dans un manuel de marketing. Placez ensuite trois marques que vous connaissez sur les cinq mêmes curseurs que Pagelune : comparer des positions exerce l'oeil plus vite qu'aucune définition."),
    more: [
      { q: B("The AI proposes 'playful: 8 out of 10' for Pagelune, but no sentence of the brief supports it. What does Nora do?",
          "L'IA propose « joueur : 8 sur 10 » pour Pagelune, mais aucune phrase du brief ne le justifie. Que fait Nora ?"),
        options: [
          B("She accepts it, since the AI has seen many café brands", "Elle l'accepte, l'IA ayant vu beaucoup de marques de cafés"),
          B("She treats it as a suggestion to confirm or correct with Camille", "Elle la traite comme une suggestion à confirmer ou corriger avec Camille"),
          B("She deletes the slider, since it cannot be justified at all", "Elle supprime le curseur, puisqu'il est injustifiable"),
        ],
        answer: 1,
        why: B("An unjustified position reflects the model's average idea of a café. The slider itself is useful; its value must come from the brief or from the client.",
          "Une position injustifiée reflète l'idée moyenne qu'a le modèle d'un café. Le curseur lui-même est utile ; sa valeur doit venir du brief ou du client.") },
      { q: B("Which image best supports 'calm but not austere' on the board of Pagelune?",
          "Quelle image soutient le mieux « calme mais pas austère » sur la planche de Pagelune ?"),
        options: [
          B("A reading lamp casting warm light on an armchair", "Une lampe de lecture posant une lumière chaude sur un fauteuil"),
          B("A bare white wall with a single black line drawn on it", "Un mur blanc nu, traversé d'une seule ligne noire"),
          B("A crowded market stall covered in bright colours", "Un étal de marché bondé couvert de couleurs vives"),
        ],
        answer: 0,
        why: B("The lamp is calm and warm at once. The bare wall is calm but austere, the market stall is neither calm nor restrained: each misses one side of the bounded adjective.",
          "La lampe est à la fois calme et chaleureuse. Le mur nu est calme mais austère, l'étal n'est ni calme ni retenu : chacun manque un côté de l'adjectif borné.") },
    ],
  },

  [deepKey(M1, 'lg-families')]: {
    intro: B("Before drawing, you choose the kind of logo to draw. Wordmark, lettermark, symbol, combination mark and emblem each answer different constraints: the length and fame of the name, the sizes at which the logo will live, the places where it will appear. This lesson defines the five families, shows how to choose one from the list of uses, and explains why most identities are systems with a reduced mark. You will choose and justify the family of the Pagelune logo.",
      "Avant de dessiner, on choisit le type de logo à dessiner. Logotype, monogramme, symbole, logo combiné et emblème répondent chacun à des contraintes différentes : la longueur et la notoriété du nom, les tailles auxquelles le logo vivra, les supports où il apparaîtra. Ce cours définit les cinq familles, montre comment en choisir une à partir de la liste des usages, et explique pourquoi la plupart des identités sont des systèmes avec une marque réduite. Vous choisirez et justifierez la famille du logo de Pagelune."),
    concepts: [
      { term: B('Wordmark and lettermark', 'Logotype et monogramme'),
        def: B("The wordmark is the name set in a distinctive way; the lettermark reduces it to initials. Both rely on lettering, and the wordmark needs a short, readable name.",
          "Le logotype est le nom composé de façon distinctive ; le monogramme le réduit à des initiales. Les deux reposent sur le lettrage, et le logotype demande un nom court et lisible.") },
      { term: B('Symbol', 'Symbole'),
        def: B("An image without text, figurative (a recognisable object) or abstract (a shape). Used alone, it suits brands whose name is already known.",
          "Une image sans texte, figurative (un objet reconnaissable) ou abstraite (une forme). Employé seul, il convient aux marques dont le nom est déjà connu.") },
      { term: B('Combination mark', 'Logo combiné'),
        def: B("A symbol and the name, arranged together. It teaches the name while the symbol becomes familiar, and the two can often be used separately.",
          "Un symbole et le nom, assemblés. Il fait connaître le nom pendant que le symbole devient familier, et les deux peuvent souvent s'employer séparément.") },
      { term: B('Emblem', 'Emblème'),
        def: B("The name placed inside a shape, like a badge, a seal or a crest. Rich on a sign or a cup, it loses its small text at small sizes.",
          "Le nom placé à l'intérieur d'une forme, comme un badge, un sceau ou un blason. Riche sur une enseigne ou un gobelet, il perd son petit texte en petite taille.") },
      { term: B('Logo system', 'Système de logo'),
        def: B("A main version, its variants (horizontal, stacked) and a reduced mark for the smallest uses. It lets one identity work from the shop sign to the favicon.",
          "Une version principale, ses variantes (horizontale, empilée) et une marque réduite pour les plus petits usages. Il permet à une identité de fonctionner de l'enseigne au favicon.") },
    ],
    walkthrough: {
      title: B("Nora chooses the family of the Pagelune logo, while finding a place for the emblem Camille likes.",
        "Nora choisit la famille du logo de Pagelune, tout en trouvant une place à l'emblème qu'aime Camille."),
      steps: [
        B("She lists the uses from the brief, from the largest to the smallest: shop sign, window sticker, cups, paper bags, bookmarks, receipts, social avatar, favicon. Why: the smallest use often decides more than the largest.",
          "Elle liste les usages du brief, du plus grand au plus petit : enseigne, vitrophanie, gobelets, sacs en papier, marque-pages, tickets, avatar social, favicon. Pourquoi : le plus petit usage décide souvent davantage que le plus grand."),
        B("She notes that the name, Pagelune, has eight letters, reads easily and is still unknown. Why: an unknown name argues for keeping it visible, so a symbol alone is set aside for now.",
          "Elle note que le nom, Pagelune, compte huit lettres, se lit facilement et reste inconnu. Pourquoi : un nom inconnu plaide pour le garder visible ; le symbole seul est donc écarté pour l'instant."),
        B("She asks the AI to score the five families on each use, with a sentence of reasoning. The combination mark leads; the emblem scores well on cups and badly on the avatar and favicon. Why: written scores make the choice explainable to Camille.",
          "Elle demande à l'IA de noter les cinq familles sur chaque usage, avec une phrase de raisonnement. Le logo combiné arrive en tête ; l'emblème est bien noté sur les gobelets et mal sur l'avatar et le favicon. Pourquoi : des notes écrites rendent le choix explicable à Camille."),
        B("She proposes a system: a combination mark (a crescent formed by a turning page, next to the name), the symbol alone as a reduced mark, and a round emblem kept for cups and a stamp. Why: the client's wish finds a place without weakening the small uses.",
          "Elle propose un système : un logo combiné (un croissant formé par une page qui tourne, à côté du nom), le symbole seul comme marque réduite, et un emblème rond réservé aux gobelets et à un tampon. Pourquoi : le souhait de la cliente trouve sa place sans affaiblir les petits usages."),
        B("She writes the decision in two sentences in the brief, including the reduced mark. Why: the exploration with image AI in the next module will be briefed on this family, not on all of them.",
          "Elle écrit la décision en deux phrases dans le brief, marque réduite comprise. Pourquoi : l'exploration en IA image du module suivant sera cadrée sur cette famille, et non sur toutes."),
      ],
    },
    mistakes: [
      { wrong: B("Choosing the family by taste, before listing the uses.",
          "Choisir la famille par goût, avant de lister les usages."),
        fix: B("List every use from the largest to the smallest, then score each family against them. The smallest use often decides.",
          "Listez chaque usage du plus grand au plus petit, puis notez chaque famille au regard de chacun. Le plus petit usage décide souvent.") },
      { wrong: B("Using a symbol alone for a new business whose name nobody knows.",
          "Employer un symbole seul pour une entreprise nouvelle dont personne ne connaît le nom."),
        fix: B("Start with a combination mark so that the name is learned, and let the symbol stand alone where space is lacking.",
          "Commencez par un logo combiné pour que le nom s'apprenne, et laissez le symbole vivre seul là où la place manque.") },
      { wrong: B("Designing a single logo and shrinking it everywhere.",
          "Dessiner un logo unique et le réduire partout."),
        fix: B("Plan a system: main version, variant and reduced mark, each designed for its size range rather than scaled down mechanically.",
          "Prévoyez un système : version principale, variante et marque réduite, chacune pensée pour sa gamme de tailles plutôt que réduite mécaniquement.") },
    ],
    recap: [
      B("Five families: wordmark, lettermark, symbol, combination mark, emblem.", "Cinq familles : logotype, monogramme, symbole, logo combiné, emblème."),
      B("The choice comes from the ranked uses and the fame of the name.", "Le choix vient des usages classés et de la notoriété du nom."),
      B("A symbol alone suits names that are already known.", "Un symbole seul convient aux noms déjà connus."),
      B("Most identities are systems with a reduced mark for small sizes.", "La plupart des identités sont des systèmes avec une marque réduite pour les petites tailles."),
    ],
    further: B("Look at the website, app icon and printed receipts of three brands you use. For each, identify the main version and the reduced mark, and note at which size the switch happens. You will see systems everywhere once you look for them.",
      "Observez le site, l'icône d'app et les tickets imprimés de trois marques que vous utilisez. Pour chacune, repérez la version principale et la marque réduite, et notez à quelle taille se fait le passage. Vous verrez des systèmes partout une fois que vous les chercherez."),
    more: [
      { q: B("Camille insists on an emblem. Where does it fit best in the Pagelune system?",
          "Camille tient à un emblème. Où trouve-t-il le mieux sa place dans le système de Pagelune ?"),
        options: [
          B("As the favicon, where its round shape fits the browser tab", "Comme favicon, sa forme ronde convenant à l'onglet du navigateur"),
          B("As the main logo on every use, to keep the identity consistent", "Comme logo principal partout, pour garder l'identité cohérente"),
          B("On cups and a stamp, where it has room to be read", "Sur les gobelets et un tampon, où il a la place d'être lu"),
        ],
        answer: 2,
        why: B("An emblem needs space for its text. Cups and stamps give it that space; the favicon and avatar do not, and making it the main logo would weaken every small use.",
          "Un emblème a besoin de place pour son texte. Gobelets et tampons la lui donnent ; le favicon et l'avatar non, et en faire le logo principal affaiblirait chaque petit usage.") },
      { q: B("Which fact about Pagelune weighs most against a symbol used alone?",
          "Quel fait concernant Pagelune pèse le plus contre un symbole employé seul ?"),
        options: [
          B("The name is new, so people cannot yet connect an image to it", "Le nom est nouveau, le public ne peut pas encore y relier une image"),
          B("Symbols are more expensive to print on paper bags and cups", "Les symboles coûtent plus cher à imprimer sur les sacs et gobelets"),
          B("Cafés are not legally allowed to use a symbol without text", "Les cafés n'ont pas le droit d'utiliser un symbole sans texte"),
        ],
        answer: 0,
        why: B("A symbol alone works once customers associate it with the name, which takes time and exposure. For a new business, keeping the name next to the symbol builds that association.",
          "Un symbole seul fonctionne une fois que le public l'associe au nom, ce qui demande du temps et de l'exposition. Pour une entreprise nouvelle, garder le nom à côté du symbole construit cette association.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M1, track: 'course', glyph: 'target', tint: '#ea580c', at: [12, 82], levels: STRAT,
    title: B('Strategy before drawing', 'La stratégie avant le dessin'),
    blurb: B('A brand brief, a competitive audit, a personality with its moodboard, and the right family of logo.',
      'Un brief de marque, un audit de la concurrence, une personnalité avec son moodboard, et la bonne famille de logo.'),
  },
]

export const LOGO_A: CoursePart = {
  modules: MODULES,
  enrich: { ...STRAT_ENRICH },
  deep: { ...STRAT_DEEP },
}
