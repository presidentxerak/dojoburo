// LES DEUX COURS DE DESIGN · pour qui n'a jamais designé.
//
// À QUI ILS S'ADRESSENT, et pourquoi ça change tout. Le public n'est pas un
// designer qui veut un outil de plus : c'est quelqu'un du growth, de la
// communication ou du produit, qui doit sortir un écran, une page ou une
// maquette, et qui n'a jamais appris. Cette personne ne manque pas de
// logiciel. Elle manque de CRITÈRES · elle regarde deux propositions et ne
// sait pas dire laquelle est meilleure, ni pourquoi.
//
// Donc ces cours n'enseignent pas des gestes. Ils enseignent à juger.
//
// AUCUN CHEMIN DE MENU, AUCUN CLIC. C'est la même règle que sur la page des
// frameworks, pour la même raison : « Menu Objet, puis Grouper la sélection »
// est faux à la prochaine version, quelqu'un le suit, ça ne marche pas, et il
// croit avoir mal compris. Ce qui ne périme pas, c'est le MODÈLE · ce qu'est un
// cadre, ce que fait une contrainte, pourquoi un composant existe. Une fois le
// modèle en tête, l'interface courante se découvre en dix minutes.
// scripts/test-design.mjs fait échouer la construction si un chemin de menu
// revient s'y glisser.
//
// ÉCRITS DANS LES DEUX LANGUES DÈS LE DÉPART. Le lot de traduction a été fait
// avant ces deux cours précisément pour ne pas avoir cinq cours à traduire au
// lieu de trois. Les écrire en anglais seul le jour même aurait recontracté la
// dette qu'on venait de payer.

export interface Bi { en: string; fr: string }

export interface DesignWord { term: Bi; means: Bi }

export interface DesignLesson {
  id: string
  /** le titre, court */
  title: Bi
  /** LA PHRASE SANS JARGON · ce que c'est, pour quelqu'un qui n'a jamais
   *  designé. C'est le bloc que les cours de design sautent, parce que leurs
   *  auteurs ont oublié le jour où ils ne savaient pas. */
  plain: Bi
  /** la comparaison connue · elle fait plus de travail qu'une définition */
  like: Bi
  /** les mots qu'on va employer, définis avant de s'en servir */
  words: DesignWord[]
  /** ce qu'on fait, concrètement · des gestes, pas des clics */
  steps: Bi[]
  /** L'ERREUR DU DÉBUTANT, nommée. Un cours qui ne dit que la bonne façon
   *  enseigne à la reconnaître ; nommer la mauvaise enseigne à l'éviter. */
  trap: Bi
  /** COMMENT SAVOIR QUE C'EST JUSTE · un critère vérifiable, pas un goût.
   *  C'est ce qui manque à ce public : il n'a pas d'avis, il a besoin d'un
   *  test qu'il peut appliquer seul. */
  check: Bi
}

export interface DesignCourse {
  id: 'design' | 'figma'
  path: string
  title: Bi
  /** pour qui, en une phrase · on le dit, plutôt que de laisser quelqu'un
   *  découvrir au bout de vingt minutes que ce n'est pas pour lui */
  forWho: Bi
  /** ce qu'on sait faire à la fin · une capacité, jamais un sentiment */
  promise: Bi
  lessons: DesignLesson[]
}

const B = (en: string, fr: string): Bi => ({ en, fr })

/* ------------------------------------------------------------------ */
/* 1 · FAIRE DU DESIGN AVEC UN MODÈLE                                  */
/* ------------------------------------------------------------------ */
//
// LE COEUR HONNÊTE DE CE COURS : un modèle produit du design PLAUSIBLE, et le
// plausible est exactement le problème. Il rend une page qui ressemble à une
// page, avec des ombres, des dégradés et des coins arrondis, et qui ne tient
// aucune des décisions qui font qu'un écran fonctionne. Quelqu'un qui n'a
// jamais designé ne peut pas voir la différence, et c'est précisément lui qui
// va s'en servir.
//
// Le cours n'apprend donc pas à demander plus joli. Il apprend les six ou sept
// décisions qu'un modèle prendra mal à votre place si vous ne les prenez pas,
// et comment les reconnaître dans ce qu'il rend.
export const DESIGN_COURSE: DesignCourse = {
  id: 'design',
  path: '/design',
  title: B('Design with a model', 'Fais du design avec un modèle !'),
  forWho: B(
    'For someone in growth, communications or product who has to ship a screen and has never been taught design.',
    "Pour toi qui bosses dans le growth, la communication ou le produit, qui dois sortir un écran sans avoir jamais appris le design.",
  ),
  promise: B(
    'You will not learn to draw. You will learn to judge: to say what is wrong with a screen, in words a model can act on.',
    "Tu n'apprendras pas à dessiner. Tu vas apprendre à juger : dire ce qui ne va pas dans un écran, avec des mots sur lesquels un modèle peut enfin agir.",
  ),
  lessons: [
    {
      id: 'plausible',
      title: B('What a model knows about design, and what it does not',
        "Ce qu'un modèle sait du design (et ce qu'il ignore)"),
      plain: B(
        'A model has read millions of pages, so it knows what a page LOOKS like. It has never watched anyone fail to find a button. It produces work that is plausible, and plausible is the trap: it has the shape of a finished design without any of the decisions that make one work.',
        "Un modèle a lu des millions de pages, donc il sait à quoi une page RESSEMBLE. Il n'a jamais vu personne ne pas trouver un bouton. Il produit du plausible, et le plausible est le piège : ça a la forme d'un design fini sans aucune des décisions qui en font un.",
      ),
      like: B(
        'Someone who has read a thousand recipes and never tasted anything. The dish looks right in every photograph and nobody has checked the salt.',
        "Quelqu'un qui a lu mille recettes sans jamais rien goûter. Le plat est impeccable sur toutes les photos et personne n'a vérifié le sel.",
      ),
      words: [
        { term: B('Plausible', 'Plausible'), means: B('Looks like the real thing at a glance, and falls apart the moment someone uses it.', "Ressemble à la vraie chose au premier coup d'oeil, et s'effondre dès que quelqu'un s'en sert.") },
        { term: B('Hierarchy', 'Hiérarchie'), means: B('What the eye is meant to reach first, second, third. Not decoration: the order of reading.', "Ce que l'oeil doit atteindre en premier, en deuxième, en troisième. Pas de la décoration : l'ordre de lecture.") },
        { term: B('Affordance', 'Affordance'), means: B('What a thing looks like it will do when you touch it. A button that does not look pressable is a failed button.', "Ce qu'une chose a l'air de faire quand on la touche. Un bouton qui n'a pas l'air cliquable est un bouton raté.") },
      ],
      steps: [
        B('Take any screen a model made for you and ask one question: where is my eye supposed to go first?',
          "Prends n'importe quel écran qu'un modèle t'a fait et pose une seule question : où mon oeil doit-il aller en premier ?"),
        B('If three things compete for that place, the model has decorated rather than designed. Name the one that should win.',
          "Si trois choses se disputent cette place, le modèle a décoré au lieu de designer. Nomme celle qui doit gagner."),
        B('Ask again for the same screen, saying which element must dominate and which must recede. That single sentence changes more than any adjective.',
          "Redemande le même écran en disant quel élément doit dominer et lequel doit s'effacer. Cette seule phrase change plus que n'importe quel adjectif."),
      ],
      trap: B(
        'Asking for "more modern" or "cleaner". Those words mean nothing operational, so the model swaps one set of decorations for another and you go round for an hour feeling that it is nearly there.',
        "Demander « plus moderne » ou « plus épuré ». Ces mots n'ont aucune traduction opérationnelle, donc le modèle échange un jeu de décorations contre un autre et tu tournes une heure avec le sentiment que ça y est presque.",
      ),
      check: B(
        'Squint at the screen until it blurs. Whatever is still visible is your hierarchy. If that is not what you meant, the design is wrong regardless of how it looks sharp.',
        "Plisse les yeux jusqu'à ce que l'écran devienne flou. Ce qui reste visible est ta hiérarchie. Si ce n'est pas ce que tu voulais, le design est faux quelle que soit son allure une fois net.",
      ),
    },
    {
      id: 'brief',
      title: B('The brief decides everything: constraints, not adjectives',
        "Le brief décide de tout : des contraintes, pas des adjectifs"),
      plain: B(
        'A design brief for a model is the same object as a prompt for an agent: a set of things it may not do. Adjectives are invisible to it. Constraints are not, because a constraint can be checked and an adjective cannot.',
        "Un brief de design pour un modèle est le même objet qu'un prompt pour un agent : un ensemble de choses qu'il n'a pas le droit de faire. Les adjectifs lui sont invisibles. Les contraintes non, parce qu'une contrainte se vérifie et un adjectif non.",
      ),
      like: B(
        'Briefing a photographer. "Make it feel premium" gets you a guess. "One subject, no props, natural light from the left, nothing red in frame" gets you the photograph.',
        "Briefer un photographe. « Qu'on sente le haut de gamme » te rend une supposition. « Un seul sujet, aucun accessoire, lumière naturelle venant de la gauche, aucun rouge dans le cadre » te rend la photo.",
      ),
      words: [
        { term: B('Constraint', 'Contrainte'), means: B('A rule that can be checked by looking. Two typefaces maximum. No shadow. Nothing below the fold.', "Une règle qui se vérifie en regardant. Deux polices maximum. Aucune ombre. Rien sous la ligne de flottaison.") },
        { term: B('Type scale', 'Échelle typographique'), means: B('The handful of text sizes you allow yourself, and nothing between them. It is what makes a page look decided rather than assembled.', "La poignée de tailles de texte que tu t'autorises, et rien entre elles. C'est ce qui fait qu'une page a l'air décidée plutôt qu'assemblée.") },
        { term: B('Spacing scale', 'Échelle d\'espacement'), means: B('The same idea for gaps: a fixed set of distances, used everywhere, instead of whatever number felt right.', "La même idée pour les écarts : un jeu fixe de distances, utilisé partout, au lieu du chiffre qui semblait bien sur le moment.") },
      ],
      steps: [
        B('Write the three things the design may NOT do before you write anything it should do.',
          "Écris les trois choses que le design n'a PAS le droit de faire avant d'écrire quoi que ce soit qu'il doive faire."),
        B('Name the scales: how many text sizes, how many spacings, how many colours. Small numbers. Four, four and three is plenty.',
          "Nomme les échelles : combien de tailles de texte, combien d'espacements, combien de couleurs. De petits nombres. Quatre, quatre et trois suffisent largement."),
        B('State the one job of the screen in a sentence that contains a verb. Not "the pricing page" but "make someone pick a plan without scrolling twice".',
          "Énonce le travail de l'écran en une phrase contenant un verbe. Pas « la page tarifs » mais « faire choisir une formule sans avoir à défiler deux fois »."),
      ],
      trap: B(
        'Giving a reference and nothing else. A model shown a famous site will copy its surface, including the decisions that only made sense for that company, and you inherit them without knowing you did.',
        "Donner une référence et rien d'autre. Un modèle à qui on montre un site connu en recopie la surface, y compris les décisions qui n'avaient de sens que pour cette entreprise, et tu en hérites sans le savoir.",
      ),
      check: B(
        'Hand your brief to someone else and ask them to tell you what is forbidden. If they cannot, you wrote adjectives.',
        "Donne ton brief à quelqu'un d'autre et demande-lui ce qui est interdit. S'il ne peut pas le dire, tu as écrit des adjectifs.",
      ),
    },
    {
      id: 'decisions',
      title: B('The decisions a model will get wrong if you do not make them',
        "Les décisions qu'un modèle prendra mal si tu ne les prends pas"),
      plain: B(
        'Left alone, a model defaults to the average of everything it has seen. The average is not neutral: it is a real set of choices, made by nobody, for no one. These are the places where the average is actively wrong for you.',
        "Laissé seul, un modèle retombe sur la moyenne de tout ce qu'il a vu. La moyenne n'est pas neutre : c'est un vrai jeu de choix, fait par personne, pour personne. Voici les endroits où la moyenne est franchement mauvaise pour toi.",
      ),
      like: B(
        'Buying a suit off the rack in the most common size. It fits nobody in particular, and it is obvious on everybody.',
        "Acheter un costume en taille la plus courante. Il ne va à personne en particulier, et ça se voit sur tout le monde.",
      ),
      words: [
        { term: B('Contrast', 'Contraste'), means: B('How far apart two things are in weight, size or colour. Low contrast reads as timid; it is the single most common fault in generated design.', "L'écart entre deux choses en graisse, en taille ou en couleur. Un contraste faible se lit comme de la timidité ; c'est le défaut numéro un du design généré.") },
        { term: B('Density', 'Densité'), means: B('How much sits in a given space. A dashboard and a landing page want opposite answers, and the average sits uselessly between them.', "La quantité de choses dans un espace donné. Un tableau de bord et une page d'accueil veulent des réponses opposées, et la moyenne se place inutilement entre les deux.") },
        { term: B('Voice', 'Ton'), means: B('Whether the interface speaks like a bank, a friend or a manual. It is a design decision, not a copywriting one.', "Si l'interface parle comme une banque, un ami ou un manuel. C'est une décision de design, pas de rédaction.") },
      ],
      steps: [
        B('Decide density first: is this screen read in three seconds or worked in for an hour? Everything else follows.',
          "Décide la densité d'abord : cet écran se lit en trois secondes ou s'y travaille-t-on une heure ? Tout le reste en découle."),
        B('Decide the one colour that means "act here", and forbid it everywhere else. A page with four accent colours has none.',
          "Décide la seule couleur qui veut dire « agis ici », et interdis-la partout ailleurs. Une page avec quatre couleurs d'accent n'en a aucune."),
        B('Decide what happens when there is nothing to show. Empty states are where generated design is always weakest, because nobody photographs them.',
          "Décide ce qui se passe quand il n'y a rien à montrer. Les états vides sont l'endroit où le design généré est toujours le plus faible, parce que personne ne les photographie."),
      ],
      trap: B(
        'Letting the model choose the accent colour. It will pick the blue that every product uses, and your screen will be indistinguishable from software people already ignore.',
        "Laisser le modèle choisir la couleur d'accent. Il prendra le bleu que tous les produits utilisent, et ton écran sera indiscernable de logiciels que les gens ignorent déjà.",
      ),
      check: B(
        'Print the screen in black and white. If it still works, your hierarchy is built on size and weight, which is where it belongs. If it collapses, you were leaning on colour to do structural work.',
        "Imprime l'écran en noir et blanc. S'il fonctionne encore, ta hiérarchie repose sur la taille et la graisse, là où elle doit être. S'il s'effondre, tu faisais porter à la couleur un travail de structure.",
      ),
    },
    {
      id: 'iterate',
      title: B('Iterate without destroying what worked', 'Itère sans casser ce qui marchait !'),
      plain: B(
        'The usual failure is not a bad first draft, it is the fifth one. You ask for six changes at once, the model rewrites the whole screen, two things you liked disappear, and you cannot say which request caused it.',
        "L'échec habituel n'est pas le premier jet, c'est le cinquième. Tu demandes six changements d'un coup, le modèle réécrit tout l'écran, deux choses qui te plaisaient disparaissent, et tu ne peux pas dire quelle demande en est la cause.",
      ),
      like: B(
        'Adjusting a recipe by changing five ingredients at once. It tastes different and you have learned nothing you can reuse.',
        "Corriger une recette en changeant cinq ingrédients d'un coup. Le goût a changé et tu n'as rien appris de réutilisable.",
      ),
      words: [
        { term: B('One variable', 'Une variable'), means: B('Changing exactly one thing per round, so the difference tells you something.', "Changer exactement une chose par tour, pour que l'écart t'apprenne quelque chose.") },
        { term: B('Lock', 'Verrou'), means: B('Naming what must not change, out loud, in the same message as what must.', "Nommer ce qui ne doit pas bouger, explicitement, dans le même message que ce qui doit bouger.") },
      ],
      steps: [
        B('Say what to keep before you say what to change. "Keep the layout and the type sizes. Change only the spacing between the cards."',
          "Dis quoi garder avant de dire quoi changer. « Garde la mise en page et les tailles de texte. Change seulement l'espace entre les cartes. »"),
        B('Keep the version you liked. A model cannot go back to something you did not save, and it will not reproduce it from a description.',
          "Garde la version qui te plaisait. Un modèle ne peut pas revenir à ce que tu n'as pas conservé, et il ne la reproduira pas depuis une description."),
        B('When you cannot say why a version is better, stop and write it down. If you cannot write it, you are choosing by mood, and tomorrow you will choose differently.',
          "Quand tu ne sais pas dire pourquoi une version est meilleure, arrête-toi et écris-le. Si tu ne peux pas l'écrire, tu choisis à l'humeur, et demain tu choisiras autrement."),
      ],
      trap: B(
        'Correcting forward for twenty turns. Beyond a few rounds the thread carries every rejected version with it, the model averages them, and the output gets blander with each attempt.',
        "Corriger en avançant pendant vingt tours. Au delà de quelques allers-retours, le fil traîne toutes les versions rejetées, le modèle en fait la moyenne, et le résultat devient plus fade à chaque tentative.",
      ),
      check: B(
        'Put the first version and the current one side by side. If you cannot name three deliberate differences, you have been busy rather than productive.',
        "Mets la première version et l'actuelle côte à côte. Si tu ne peux pas nommer trois différences voulues, tu as été occupé plutôt que productif.",
      ),
    },
    {
      id: 'system',
      title: B('What you leave with is a system, not a picture',
        "Ce que tu emportes : un système, pas une image"),
      plain: B(
        'One good screen is worth very little. What is worth something is the short list of rules that produced it, because that list makes the next twenty screens agree with each other without you in the room.',
        "Un bel écran ne vaut presque rien. Ce qui vaut quelque chose, c'est la courte liste de règles qui l'a produit, parce que cette liste fait que les vingt écrans suivants s'accordent entre eux sans toi dans la pièce.",
      ),
      like: B(
        'The difference between one good sentence and a style guide. The sentence is used once; the guide keeps a whole team sounding like one person.',
        "La différence entre une bonne phrase et une charte rédactionnelle. La phrase sert une fois ; la charte fait qu'une équipe entière parle d'une seule voix.",
      ),
      words: [
        { term: B('Design system', 'Système de design'), means: B('The written set of decisions: the scales, the colours, the spacings, and what each is for. Boring on purpose.', "L'ensemble écrit des décisions : les échelles, les couleurs, les espacements, et à quoi sert chacun. Ennuyeux volontairement.") },
        { term: B('Token', 'Jeton de design'), means: B('A named value rather than a number in a file. "Space M" instead of 16, so it can change in one place.', "Une valeur nommée plutôt qu'un nombre dans un fichier. « Espace M » au lieu de 16, pour que ça change à un seul endroit.") },
      ],
      steps: [
        B('At the end of any screen you are happy with, write down the sizes, spacings and colours it actually used. Name them.',
          "À la fin de tout écran qui te satisfait, note les tailles, les espacements et les couleurs réellement employés. Nomme-les."),
        B('Give that list to the model at the START of the next screen, as constraints. This is the whole trick, and it is why the brief lesson came before this one.',
          "Donne cette liste au modèle au DÉBUT de l'écran suivant, comme contraintes. C'est tout le truc, et c'est pourquoi la leçon sur le brief venait avant celle-ci."),
        B('Keep the list in a file, not in a conversation. A conversation ends; the file is what makes the second month easier than the first.',
          "Garde la liste dans un fichier, pas dans une conversation. Une conversation se termine ; le fichier est ce qui rend le deuxième mois plus facile que le premier."),
      ],
      trap: B(
        'Treating each screen as a fresh request. It is the most expensive habit in this course: every screen starts from the average again, and nothing you learned accumulates.',
        "Traiter chaque écran comme une demande neuve. C'est l'habitude la plus coûteuse de ce cours : chaque écran repart de la moyenne, et rien de ce que tu as appris ne s'accumule.",
      ),
      check: B(
        'Ask someone to point at two screens and say whether they come from the same product. If they hesitate, you have pictures, not a system.',
        "Demande à quelqu'un de regarder deux écrans et de dire s'ils viennent du même produit. S'il hésite, tu as des images, pas un système.",
      ),
    },
  ],
}

/* ------------------------------------------------------------------ */
/* 2 · FIGMA                                                           */
/* ------------------------------------------------------------------ */
//
// CE COURS N'APPREND PAS À CLIQUER. L'interface de Figma change plusieurs fois
// par an ; le MODÈLE, lui, n'a pas bougé depuis des années. Un cadre est un
// cadre, l'auto layout range dans une direction, un composant est une chose
// écrite une fois, une contrainte dit quoi faire quand la place change.
//
// Quelqu'un qui tient ce modèle trouve n'importe quel bouton en dix minutes.
// Quelqu'un qui a appris les boutons est perdu à la mise à jour suivante, et
// c'est ce qui arrive à la quasi-totalité des tutoriels.
export const FIGMA_COURSE: DesignCourse = {
  id: 'figma',
  path: '/figma',
  title: B('Figma, the model behind the buttons', 'Figma : entre dans le modèle derrière les boutons'),
  forWho: B(
    'For someone who has been sent a Figma link, has to change something in it, and has never opened the tool.',
    "Pour toi, à qui on a envoyé un lien Figma, qui dois y changer quelque chose, et qui n'as jamais ouvert l'outil.",
  ),
  promise: B(
    'Five ideas. Once you hold them, the current interface is a ten minute discovery rather than a course, and it stays true when the buttons move.',
    "Cinq idées. Une fois tenues, l'interface du moment se découvre en dix minutes au lieu de s'apprendre, et ça reste vrai quand les boutons changent de place.",
  ),
  lessons: [
    {
      id: 'frame',
      title: B('A frame, not a page', 'Un cadre, pas une page'),
      plain: B(
        'Everything lives inside a frame, and a frame is a box that knows its own size. This sounds trivial and it is the whole mental model: a design is boxes inside boxes, each one responsible for what is in it.',
        "Tout vit dans un cadre, et un cadre est une boîte qui connaît sa propre taille. Ça a l'air trivial et c'est tout le modèle mental : un design est une suite de boîtes dans des boîtes, chacune responsable de ce qu'elle contient.",
      ),
      like: B(
        'Moving house with boxes rather than armfuls. What is in a box travels with it, and you can restack the boxes without unpacking anything.',
        "Déménager avec des cartons plutôt qu'à bras-le-corps. Ce qui est dans un carton voyage avec lui, et on peut réempiler les cartons sans rien déballer.",
      ),
      words: [
        { term: B('Frame', 'Cadre'), means: B('A box with a size, which can hold other boxes and can clip what overflows it.', "Une boîte avec une taille, qui peut contenir d'autres boîtes et rogner ce qui en déborde.") },
        { term: B('Group', 'Groupe'), means: B('Several things tied together with no size of their own. Useful for moving, useless for layout, and the source of most beginner confusion.', "Plusieurs choses liées ensemble, sans taille propre. Utile pour déplacer, inutile pour la mise en page, et source de la plupart des confusions de débutant.") },
      ],
      steps: [
        B('Before moving anything, find out what it is inside. Almost every "why did that jump" is a thing that belonged to a box you did not see.',
          "Avant de déplacer quoi que ce soit, trouve dans quoi c'est. Presque tous les « pourquoi ça a sauté » sont une chose qui appartenait à une boîte que tu n'avais pas vue."),
        B('Use frames where you would have used a group. A group tracks its contents; a frame governs them, and governing is what you want.',
          "Utilise des cadres là où tu aurais mis un groupe. Un groupe suit son contenu ; un cadre le gouverne, et c'est gouverner que tu veux."),
      ],
      trap: B(
        'Dragging things loose on the canvas because it is faster. It is faster for ten minutes and then nothing can be resized without breaking, and you cannot say why.',
        "Poser les choses en vrac sur le plan de travail parce que c'est plus rapide. Ça l'est dix minutes, puis plus rien ne se redimensionne sans casser, et tu ne sais pas dire pourquoi.",
      ),
      check: B(
        'Resize the outer box. If everything inside behaves sensibly, your structure is right. If things overlap or fly off, you have groups where you needed frames.',
        "Redimensionne la boîte extérieure. Si tout ce qu'elle contient se comporte raisonnablement, ta structure est bonne. Si des choses se chevauchent ou s'envolent, tu as des groupes là où il fallait des cadres.",
      ),
    },
    {
      id: 'autolayout',
      title: B('Auto layout: stop placing things by hand', "Auto layout : arrête enfin de tout placer à la main !"),
      plain: B(
        'Auto layout tells a frame to arrange its children in a direction, with a fixed gap, instead of you positioning each one. It is the difference between a document that survives a text change and one that has to be rebuilt every time.',
        "L'auto layout dit à un cadre de ranger ses enfants dans une direction, avec un écart fixe, au lieu que tu places chacun. C'est la différence entre un document qui survit à un changement de texte et un qui se refait à chaque fois.",
      ),
      like: B(
        'A shelf rather than a pile. Add a book to a shelf and the others shift along; add one to a pile and you restack the lot.',
        "Une étagère plutôt qu'une pile. Ajoute un livre sur une étagère et les autres se décalent ; ajoutes-en un sur une pile et tu réempiles tout.",
      ),
      words: [
        { term: B('Direction', 'Direction'), means: B('Whether children stack downwards or run across. Almost every layout is these two, nested.', "Si les enfants s'empilent vers le bas ou se suivent en largeur. Presque toute mise en page est ces deux là, imbriqués.") },
        { term: B('Gap', 'Écart'), means: B('The single spacing between children, set once rather than eyeballed between each pair.', "L'espacement unique entre les enfants, réglé une fois plutôt qu'estimé à l'oeil entre chaque paire.") },
        { term: B('Hug and fill', 'Ajuster et remplir'), means: B('Whether a box shrinks to its contents or stretches to its parent. Getting these two right is most of the work.', "Si une boîte se réduit à son contenu ou s'étire à son parent. Bien régler ces deux là, c'est l'essentiel du travail.") },
      ],
      steps: [
        B('Put auto layout on anything that is a list, a row of buttons, a card, or a page. In practice, on nearly everything.',
          "Mets de l'auto layout sur tout ce qui est une liste, une rangée de boutons, une carte ou une page. En pratique, sur presque tout."),
        B('Set the gap from your spacing scale, not by dragging until it looks right. This is where the first design course pays off here.',
          "Règle l'écart depuis ton échelle d'espacement, pas en tirant jusqu'à ce que ça semble bien. C'est ici que le premier cours de design se rentabilise."),
        B('Then change a label to something twice as long, on purpose. That is the test, and it takes four seconds.',
          "Puis change un libellé pour un deux fois plus long, exprès. C'est le test, et il prend quatre secondes."),
      ],
      trap: B(
        'Nesting auto layouts six deep to force one stubborn alignment. When you are fighting it, the answer is almost always that one box should hug where it fills, or the reverse.',
        "Imbriquer six niveaux d'auto layout pour forcer un alignement récalcitrant. Quand tu te bats, la réponse est presque toujours qu'une boîte doit ajuster là où elle remplit, ou l'inverse.",
      ),
      check: B(
        'Double the length of the longest piece of text. A layout that survives that is a layout; one that does not is a drawing.',
        "Double la longueur du plus long texte. Une mise en page qui survit à ça est une mise en page ; une qui n'y survit pas est un dessin.",
      ),
    },
    {
      id: 'components',
      title: B('Components: write a thing once', 'Composants : écris une chose une seule fois'),
      plain: B(
        'A component is one definition and many copies that follow it. Change the definition and every copy changes. It is the same idea as a function in code, and the same idea as the design system from the other course.',
        "Un composant est une définition et des copies qui la suivent. Change la définition et toutes les copies changent. C'est la même idée qu'une fonction en programmation, et la même idée que le système de design de l'autre cours.",
      ),
      like: B(
        'A rubber stamp. You recut the stamp, not the four hundred pages you already stamped.',
        "Un tampon. On retaille le tampon, pas les quatre cents pages déjà tamponnées.",
      ),
      words: [
        { term: B('Main and instance', 'Principal et instance'), means: B('The definition, and each copy of it placed in a design. Editing an instance detaches it from the rule, which is sometimes right and usually a mistake.', "La définition, et chaque copie posée dans un design. Modifier une instance la détache de la règle, ce qui est parfois voulu et généralement une erreur.") },
        { term: B('Variant', 'Variante'), means: B('One component with declared states: default, hover, disabled. Not four separate components that will drift apart.', "Un composant avec des états déclarés : normal, survol, désactivé. Pas quatre composants séparés qui finiront par diverger.") },
      ],
      steps: [
        B('Make a component the second time you need the same thing, not the first. Building a system for something used once costs more than it returns.',
          "Fais un composant la deuxième fois que tu as besoin de la même chose, pas la première. Bâtir un système pour une chose utilisée une fois coûte plus que ça ne rapporte."),
        B('Name it for what it is, not what it looks like. "Primary button", never "blue button": the day it turns green the name lies.',
          "Nomme-le pour ce qu'il est, pas pour son allure. « Bouton principal », jamais « bouton bleu » : le jour où il devient vert le nom ment."),
      ],
      trap: B(
        'Making everything a component on day one. You end up maintaining a library for a design nobody has approved yet, and changing direction costs ten times more.',
        "Tout transformer en composant dès le premier jour. Tu entretiens une bibliothèque pour un design que personne n'a validé, et changer de direction coûte dix fois plus.",
      ),
      check: B(
        'Change the definition and watch. If some copies did not follow, they were detached, and you have quietly got two versions of your button.',
        "Change la définition et regarde. Si certaines copies n'ont pas suivi, elles étaient détachées, et tu as discrètement deux versions de ton bouton.",
      ),
    },
    {
      id: 'variables',
      title: B('Variables: the system before the screens', 'Variables : le système avant les écrans'),
      plain: B(
        'A variable is a named value: a colour, a spacing, a size, used by name instead of by number. It is the design token from the other course, made real in the tool.',
        "Une variable est une valeur nommée : une couleur, un espacement, une taille, utilisée par son nom plutôt que par son nombre. C'est le jeton de design de l'autre cours, rendu réel dans l'outil.",
      ),
      like: B(
        'Writing "the house colour" on four hundred tins instead of writing the exact mix on each one. When the house colour changes, you change it once.',
        "Écrire « la couleur de la maison » sur quatre cents pots plutôt que le mélange exact sur chacun. Quand la couleur change, on la change une fois.",
      ),
      words: [
        { term: B('Collection', 'Collection'), means: B('A set of variables that change together, which is how light and dark themes are actually built.', "Un ensemble de variables qui changent ensemble, et c'est comme ça qu'un thème clair et un thème sombre se construisent vraiment.") },
        { term: B('Alias', 'Alias'), means: B('A variable pointing at another: "button background" points at "accent". You change accent, the button follows, and the meaning stays readable.', "Une variable qui pointe vers une autre : « fond du bouton » pointe vers « accent ». Tu changes l'accent, le bouton suit, et le sens reste lisible.") },
      ],
      steps: [
        B('Define the scales as variables before drawing the second screen. Not the first: you do not know them yet.',
          "Définis les échelles en variables avant de dessiner le deuxième écran. Pas le premier : tu ne les connais pas encore."),
        B('Name by role, never by appearance. "Surface", "accent", "danger". A name that describes a colour is a name that becomes false.',
          "Nomme par rôle, jamais par apparence. « Surface », « accent », « danger ». Un nom qui décrit une couleur est un nom qui deviendra faux."),
      ],
      trap: B(
        'Creating sixty variables for a design with four colours. A system larger than the thing it governs is a second job, and you will abandon it.',
        "Créer soixante variables pour un design à quatre couleurs. Un système plus grand que ce qu'il gouverne est un second métier, et tu l'abandonneras.",
      ),
      check: B(
        'Change one variable and see how much of the design moves. If nothing moves, you named values nobody uses. If everything moves at once, you aliased too little.',
        "Change une variable et regarde ce qui bouge. Si rien ne bouge, tu as nommé des valeurs que personne n'utilise. Si tout bouge d'un coup, tu as trop peu utilisé d'alias.",
      ),
    },
    {
      id: 'handoff',
      title: B('Handing over: what a developer, or a model, needs to receive',
        "Passe la main : ce qu'un développeur, ou un modèle, doit recevoir"),
      plain: B(
        'A design is finished when someone else can build it without asking you a question. That is a testable condition, and it is almost never true of a file that looks finished.',
        "Un design est fini quand quelqu'un d'autre peut le construire sans te poser de question. C'est une condition vérifiable, et elle est presque jamais vraie d'un fichier qui a l'air fini.",
      ),
      like: B(
        'A recipe versus a photograph of a dish. Both show what it should be; only one lets someone make it.',
        "Une recette contre la photo d'un plat. Les deux montrent le résultat attendu ; un seul permet de le refaire.",
      ),
      words: [
        { term: B('State', 'État'), means: B('What the screen looks like when it is loading, empty, or wrong. Three screens nobody designs and everybody ships.', "L'allure de l'écran quand il charge, quand il est vide, ou quand ça a échoué. Trois écrans que personne ne dessine et que tout le monde livre.") },
        { term: B('Breakpoint', 'Point de rupture'), means: B('The width at which the layout changes shape. One is often enough; deciding none is deciding badly.', "La largeur à laquelle la mise en page change de forme. Un seul suffit souvent ; n'en décider aucun, c'est mal décider.") },
      ],
      steps: [
        B('Draw the empty state and the error state before you polish the happy one. They take twenty minutes and they are where real products look unfinished.',
          "Dessine l'état vide et l'état d'erreur avant de peaufiner le cas idéal. Ils prennent vingt minutes et ce sont eux qui font qu'un vrai produit a l'air inachevé."),
        B('Write the rules that the picture cannot show: what wraps, what truncates, what happens at the narrowest width you support.',
          "Écris les règles que l'image ne peut pas montrer : ce qui passe à la ligne, ce qui se tronque, ce qui se passe à la largeur la plus étroite que tu acceptes."),
        B('If a model is going to build it, give it the variables and the rules, not a screenshot. A screenshot is the one input that forces it back to guessing.',
          "Si c'est un modèle qui doit le construire, donne-lui les variables et les règles, pas une capture d'écran. Une capture est le seul apport qui le force à revenir à la supposition."),
      ],
      trap: B(
        'Handing over the happy path only. Every question that comes back costs more than the state would have, and the answer gets decided by whoever is building, at speed, alone.',
        "Ne passer que le cas idéal. Chaque question qui revient coûte plus cher que l'état ne l'aurait coûté, et la réponse est tranchée par celui qui construit, vite, seul.",
      ),
      check: B(
        'Give the file to someone with no context and ask them to list their questions. The list is your unfinished work, and it is shorter to fix than to answer.',
        "Donne le fichier à quelqu'un sans contexte et demande-lui de lister ses questions. Cette liste est ton travail inachevé, et il est plus court à corriger qu'à répondre.",
      ),
    },
  ],
}

export const DESIGN_COURSES: DesignCourse[] = [DESIGN_COURSE, FIGMA_COURSE]

/** Les leçons des deux cours, comptées · dérivé, jamais écrit. */
export const DESIGN_LESSON_COUNT = DESIGN_COURSES.reduce((n, c) => n + c.lessons.length, 0)

export const DESIGN_COURSE_BY_ID = Object.fromEntries(
  DESIGN_COURSES.map((c) => [c.id, c]),
) as Record<DesignCourse['id'], DesignCourse>

/** La piste de progression · comme AGENT_TRACK et LEVER_TRACK, une piste à
 *  part, pour que ces leçons ne se fassent pas passer pour des leçons de
 *  l'académie dans le décompte du maître. C'est exactement le défaut qui a
 *  fait afficher « 34 sur 20 » une fois déjà. */
export const DESIGN_TRACK = 'design'
