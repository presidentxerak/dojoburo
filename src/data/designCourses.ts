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
  title: B('Design with a model', "Le design avec un modèle"),
  forWho: B(
    'For someone in growth, communications or product who has to ship a screen and has never been taught design.',
    "Pour les professionnels du growth, de la communication ou du produit qui doivent livrer un écran sans avoir jamais été formés au design.",
  ),
  promise: B(
    'You will not learn to draw. You will learn to judge: to say what is wrong with a screen, in words a model can act on.',
    "Vous n'apprendrez pas à dessiner. Vous apprendrez à juger : à formuler les défauts d'un écran en des termes sur lesquels un modèle peut réellement agir.",
  ),
  lessons: [
    {
      id: 'plausible',
      title: B('What a model knows about design, and what it does not',
        "Ce qu'un modèle sait du design, et ce qu'il ignore"),
      plain: B(
        'A model has read millions of pages, so it knows what a page LOOKS like. It has never watched anyone fail to find a button. It produces work that is plausible, and plausible is the trap: it has the shape of a finished design without any of the decisions that make one work.',
        "Un modèle a lu des millions de pages : il sait donc à quoi une page RESSEMBLE. En revanche, il n'a jamais vu quelqu'un chercher un bouton sans le trouver. Il produit du plausible, et c'est là que réside le piège : le résultat a l'apparence d'un design abouti sans comporter aucune des décisions qui en font un.",
      ),
      like: B(
        'Someone who has read a thousand recipes and never tasted anything. The dish looks right in every photograph and nobody has checked the salt.',
        "Imaginez une personne qui aurait lu mille recettes sans jamais rien goûter. Le plat est impeccable sur toutes les photos, mais personne n'a vérifié l'assaisonnement.",
      ),
      words: [
        { term: B('Plausible', 'Plausible'), means: B('Looks like the real thing at a glance, and falls apart the moment someone uses it.', "Qui ressemble à l'objet réel au premier coup d'oeil, mais s'effondre dès que quelqu'un l'utilise.") },
        { term: B('Hierarchy', 'Hiérarchie'), means: B('What the eye is meant to reach first, second, third. Not decoration: the order of reading.', "L'ordre dans lequel l'oeil doit parcourir les éléments : en premier, en deuxième, en troisième. Il ne s'agit pas de décoration, mais de l'ordre de lecture.") },
        { term: B('Affordance', 'Affordance'), means: B('What a thing looks like it will do when you touch it. A button that does not look pressable is a failed button.', "Ce qu'un élément semble permettre lorsqu'on le touche. Un bouton qui ne paraît pas cliquable est un bouton raté.") },
      ],
      steps: [
        B('Take any screen a model made for you and ask one question: where is my eye supposed to go first?',
          "Prenez n'importe quel écran produit par un modèle et posez une seule question : où mon regard doit-il se porter en premier ?"),
        B('If three things compete for that place, the model has decorated rather than designed. Name the one that should win.',
          "Si trois éléments se disputent cette place, le modèle a décoré au lieu de concevoir. Nommez celui qui doit l'emporter."),
        B('Ask again for the same screen, saying which element must dominate and which must recede. That single sentence changes more than any adjective.',
          "Redemandez le même écran en précisant l'élément qui doit dominer et celui qui doit s'effacer. Cette seule phrase a plus d'effet que n'importe quel adjectif."),
      ],
      trap: B(
        'Asking for "more modern" or "cleaner". Those words mean nothing operational, so the model swaps one set of decorations for another and you go round for an hour feeling that it is nearly there.',
        "Demander un rendu « plus moderne » ou « plus épuré ». Ces termes n'ont aucune traduction opérationnelle : le modèle remplace un ensemble de décorations par un autre, et vous tournez en rond pendant une heure avec l'impression d'y être presque.",
      ),
      check: B(
        'Squint at the screen until it blurs. Whatever is still visible is your hierarchy. If that is not what you meant, the design is wrong regardless of how it looks sharp.',
        "Plissez les yeux jusqu'à ce que l'écran devienne flou. Ce qui reste visible constitue votre hiérarchie. Si ce n'est pas celle que vous souhaitiez, le design est erroné, quelle que soit son apparence une fois net.",
      ),
    },
    {
      id: 'brief',
      title: B('The brief decides everything: constraints, not adjectives',
        "Le brief décide de tout : des contraintes, non des adjectifs"),
      plain: B(
        'A design brief for a model is the same object as a prompt for an agent: a set of things it may not do. Adjectives are invisible to it. Constraints are not, because a constraint can be checked and an adjective cannot.',
        "Un brief de design destiné à un modèle est de même nature qu'un prompt destiné à un agent : un ensemble de choses qu'il n'a pas le droit de faire. Les adjectifs n'ont presque aucun effet sur lui ; les contraintes, si, car une contrainte se vérifie, contrairement à un adjectif.",
      ),
      like: B(
        'Briefing a photographer. "Make it feel premium" gets you a guess. "One subject, no props, natural light from the left, nothing red in frame" gets you the photograph.',
        "Pensez au brief d'un photographe. « Qu'on sente le haut de gamme » vous renvoie une supposition. « Un seul sujet, aucun accessoire, lumière naturelle venant de la gauche, aucun rouge dans le cadre » vous renvoie la photo attendue.",
      ),
      words: [
        { term: B('Constraint', 'Contrainte'), means: B('A rule that can be checked by looking. Two typefaces maximum. No shadow. Nothing below the fold.', "Une règle que l'on peut vérifier du regard. Deux polices au maximum. Aucune ombre. Rien sous la ligne de flottaison.") },
        { term: B('Type scale', 'Échelle typographique'), means: B('The handful of text sizes you allow yourself, and nothing between them. It is what makes a page look decided rather than assembled.', "Le petit ensemble de tailles de texte que vous vous autorisez, sans valeur intermédiaire. C'est ce qui donne à une page une apparence maîtrisée plutôt qu'assemblée.") },
        { term: B('Spacing scale', 'Échelle d\'espacement'), means: B('The same idea for gaps: a fixed set of distances, used everywhere, instead of whatever number felt right.', "Le même principe appliqué aux écarts : un ensemble fixe de distances, utilisé partout, au lieu de la valeur qui semblait convenir sur le moment.") },
      ],
      steps: [
        B('Write the three things the design may NOT do before you write anything it should do.',
          "Rédigez les trois choses que le design n'a PAS le droit de faire avant d'écrire ce qu'il doit faire."),
        B('Name the scales: how many text sizes, how many spacings, how many colours. Small numbers. Four, four and three is plenty.',
          "Nommez les échelles : combien de tailles de texte, combien d'espacements, combien de couleurs. Choisissez de petits nombres : quatre, quatre et trois suffisent largement."),
        B('State the one job of the screen in a sentence that contains a verb. Not "the pricing page" but "make someone pick a plan without scrolling twice".',
          "Énoncez la fonction de l'écran en une phrase comportant un verbe. Non pas « la page tarifs », mais « faire choisir une formule sans avoir à faire défiler la page deux fois »."),
      ],
      trap: B(
        'Giving a reference and nothing else. A model shown a famous site will copy its surface, including the decisions that only made sense for that company, and you inherit them without knowing you did.',
        "Fournir une référence et rien d'autre. Un modèle à qui l'on montre un site connu en reproduit la surface, y compris des décisions qui n'avaient de sens que pour cette entreprise, et vous en héritez sans le savoir.",
      ),
      check: B(
        'Hand your brief to someone else and ask them to tell you what is forbidden. If they cannot, you wrote adjectives.',
        "Confiez votre brief à une autre personne et demandez-lui ce qui est interdit. Si elle ne peut pas le dire, vous avez écrit des adjectifs.",
      ),
    },
    {
      id: 'decisions',
      title: B('The decisions a model will get wrong if you do not make them',
        "Les décisions qu'un modèle prendra mal si vous ne les prenez pas"),
      plain: B(
        'Left alone, a model defaults to the average of everything it has seen. The average is not neutral: it is a real set of choices, made by nobody, for no one. These are the places where the average is actively wrong for you.',
        "Livré à lui-même, un modèle se rabat sur la moyenne de tout ce qu'il a vu. Or cette moyenne n'est pas neutre : c'est un ensemble réel de choix, faits par personne et pour personne. Voici les domaines où la moyenne vous dessert nettement.",
      ),
      like: B(
        'Buying a suit off the rack in the most common size. It fits nobody in particular, and it is obvious on everybody.',
        "Acheter un costume dans la taille la plus courante. Il ne convient à personne en particulier, et cela se remarque chez tout le monde.",
      ),
      words: [
        { term: B('Contrast', 'Contraste'), means: B('How far apart two things are in weight, size or colour. Low contrast reads as timid; it is the single most common fault in generated design.', "L'écart entre deux éléments en graisse, en taille ou en couleur. Un contraste faible se lit comme de la timidité ; c'est le premier défaut du design généré.") },
        { term: B('Density', 'Densité'), means: B('How much sits in a given space. A dashboard and a landing page want opposite answers, and the average sits uselessly between them.', "La quantité d'éléments dans un espace donné. Un tableau de bord et une page d'accueil appellent des réponses opposées, et la moyenne se situe inutilement entre les deux.") },
        { term: B('Voice', 'Ton'), means: B('Whether the interface speaks like a bank, a friend or a manual. It is a design decision, not a copywriting one.', "La manière dont l'interface s'exprime : comme une banque, un ami ou un manuel. Il s'agit d'une décision de design, et non de rédaction.") },
      ],
      steps: [
        B('Decide density first: is this screen read in three seconds or worked in for an hour? Everything else follows.',
          "Décidez d'abord de la densité : cet écran se lit-il en trois secondes, ou y travaille-t-on pendant une heure ? Tout le reste en découle."),
        B('Decide the one colour that means "act here", and forbid it everywhere else. A page with four accent colours has none.',
          "Choisissez l'unique couleur qui signifie « agissez ici », et proscrivez-la partout ailleurs. Une page comportant quatre couleurs d'accent n'en a en réalité aucune."),
        B('Decide what happens when there is nothing to show. Empty states are where generated design is always weakest, because nobody photographs them.',
          "Décidez de ce qui s'affiche lorsqu'il n'y a rien à montrer. Les états vides sont toujours le point faible du design généré, parce que personne ne les photographie."),
      ],
      trap: B(
        'Letting the model choose the accent colour. It will pick the blue that every product uses, and your screen will be indistinguishable from software people already ignore.',
        "Laisser le modèle choisir la couleur d'accent. Il retiendra le bleu qu'utilisent tous les produits, et votre écran se confondra avec des logiciels que les gens ignorent déjà.",
      ),
      check: B(
        'Print the screen in black and white. If it still works, your hierarchy is built on size and weight, which is where it belongs. If it collapses, you were leaning on colour to do structural work.',
        "Imprimez l'écran en noir et blanc. S'il fonctionne encore, votre hiérarchie repose sur la taille et la graisse, là où elle doit se trouver. S'il s'effondre, vous faisiez porter à la couleur un rôle structurel.",
      ),
    },
    {
      id: 'iterate',
      title: B('Iterate without destroying what worked', "Itérer sans détruire ce qui fonctionnait"),
      plain: B(
        'The usual failure is not a bad first draft, it is the fifth one. You ask for six changes at once, the model rewrites the whole screen, two things you liked disappear, and you cannot say which request caused it.',
        "L'échec habituel ne survient pas au premier jet, mais au cinquième. Vous demandez six modifications à la fois, le modèle réécrit tout l'écran, deux éléments qui vous plaisaient disparaissent, et vous ne pouvez pas déterminer quelle demande en est la cause.",
      ),
      like: B(
        'Adjusting a recipe by changing five ingredients at once. It tastes different and you have learned nothing you can reuse.',
        "Corriger une recette en changeant cinq ingrédients à la fois. Le goût a changé, mais vous n'en avez tiré aucun enseignement réutilisable.",
      ),
      words: [
        { term: B('One variable', 'Une variable'), means: B('Changing exactly one thing per round, so the difference tells you something.', "Modifier exactement un élément par tour, afin que l'écart observé vous apprenne quelque chose.") },
        { term: B('Lock', 'Verrou'), means: B('Naming what must not change, out loud, in the same message as what must.', "Nommer explicitement ce qui ne doit pas changer, dans le même message que ce qui doit changer.") },
      ],
      steps: [
        B('Say what to keep before you say what to change. "Keep the layout and the type sizes. Change only the spacing between the cards."',
          "Indiquez ce qu'il faut conserver avant d'indiquer ce qu'il faut modifier. « Garde la mise en page et les tailles de texte. Change seulement l'espace entre les cartes. »"),
        B('Keep the version you liked. A model cannot go back to something you did not save, and it will not reproduce it from a description.',
          "Conservez la version qui vous plaisait. Un modèle ne peut pas revenir à ce que vous n'avez pas conservé, et il ne la reproduira pas à partir d'une description."),
        B('When you cannot say why a version is better, stop and write it down. If you cannot write it, you are choosing by mood, and tomorrow you will choose differently.',
          "Lorsque vous ne savez pas expliquer pourquoi une version est meilleure, arrêtez-vous et écrivez-le. Si vous ne pouvez pas l'écrire, vous choisissez selon votre humeur, et demain vous choisirez autrement."),
      ],
      trap: B(
        'Correcting forward for twenty turns. Beyond a few rounds the thread carries every rejected version with it, the model averages them, and the output gets blander with each attempt.',
        "Corriger en cours de route pendant vingt tours. Au-delà de quelques allers-retours, le fil transporte toutes les versions rejetées, le modèle en fait la moyenne, et le résultat s'affadit à chaque tentative.",
      ),
      check: B(
        'Put the first version and the current one side by side. If you cannot name three deliberate differences, you have been busy rather than productive.',
        "Placez la première version et la version actuelle côte à côte. Si vous ne pouvez pas nommer trois différences voulues, vous avez été occupé plutôt que productif.",
      ),
    },
    {
      id: 'system',
      title: B('What you leave with is a system, not a picture',
        "Ce que vous emportez : un système, non une image"),
      plain: B(
        'One good screen is worth very little. What is worth something is the short list of rules that produced it, because that list makes the next twenty screens agree with each other without you in the room.',
        "Un bel écran n'a presque aucune valeur en soi. Ce qui en a, c'est la courte liste de règles qui l'a produit, car cette liste permet aux vingt écrans suivants de s'accorder entre eux sans que vous ayez à intervenir.",
      ),
      like: B(
        'The difference between one good sentence and a style guide. The sentence is used once; the guide keeps a whole team sounding like one person.',
        "C'est la différence entre une phrase réussie et une charte rédactionnelle. La phrase sert une fois ; la charte permet à toute une équipe de parler d'une seule voix.",
      ),
      words: [
        { term: B('Design system', 'Système de design'), means: B('The written set of decisions: the scales, the colours, the spacings, and what each is for. Boring on purpose.', "L'ensemble écrit des décisions : les échelles, les couleurs, les espacements, et la fonction de chacun. Volontairement sobre.") },
        { term: B('Token', 'Design token'), means: B('A named value rather than a number in a file. "Space M" instead of 16, so it can change in one place.', "Une valeur nommée plutôt qu'un nombre inscrit dans un fichier. « Espace M » au lieu de 16, afin que la modification se fasse en un seul endroit.") },
      ],
      steps: [
        B('At the end of any screen you are happy with, write down the sizes, spacings and colours it actually used. Name them.',
          "À l'issue de chaque écran qui vous satisfait, notez les tailles, les espacements et les couleurs réellement employés. Nommez-les."),
        B('Give that list to the model at the START of the next screen, as constraints. This is the whole trick, and it is why the brief lesson came before this one.',
          "Fournissez cette liste au modèle au DÉBUT de l'écran suivant, sous forme de contraintes. C'est tout le principe, et c'est pourquoi la leçon sur le brief précédait celle-ci."),
        B('Keep the list in a file, not in a conversation. A conversation ends; the file is what makes the second month easier than the first.',
          "Conservez la liste dans un fichier, non dans une conversation. Une conversation se termine ; le fichier est ce qui rend le deuxième mois plus facile que le premier."),
      ],
      trap: B(
        'Treating each screen as a fresh request. It is the most expensive habit in this course: every screen starts from the average again, and nothing you learned accumulates.',
        "Traiter chaque écran comme une demande nouvelle. C'est l'habitude la plus coûteuse de ce cours : chaque écran repart de la moyenne, et rien de ce que vous avez appris ne s'accumule.",
      ),
      check: B(
        'Ask someone to point at two screens and say whether they come from the same product. If they hesitate, you have pictures, not a system.',
        "Demandez à quelqu'un d'examiner deux écrans et de dire s'ils proviennent du même produit. S'il hésite, vous avez des images, et non un système.",
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
  title: B('Figma, the model behind the buttons', "Figma : comprendre le modèle derrière les boutons"),
  forWho: B(
    'For someone who has been sent a Figma link, has to change something in it, and has never opened the tool.',
    "Pour les personnes qui ont reçu un lien Figma, doivent y modifier quelque chose et n'ont jamais ouvert l'outil.",
  ),
  promise: B(
    'Five ideas. Once you hold them, the current interface is a ten minute discovery rather than a course, and it stays true when the buttons move.',
    "Cinq idées. Une fois maîtrisées, l'interface du moment se découvre en dix minutes au lieu de s'apprendre, et ce savoir reste valable lorsque les boutons changent de place.",
  ),
  lessons: [
    {
      id: 'frame',
      title: B('A frame, not a page', "Un cadre, et non une page"),
      plain: B(
        'Everything lives inside a frame, and a frame is a box that knows its own size. This sounds trivial and it is the whole mental model: a design is boxes inside boxes, each one responsible for what is in it.',
        "Tout se trouve dans un cadre, et un cadre est une boîte qui connaît sa propre taille. Cela paraît trivial, mais c'est tout le modèle mental : un design est une succession de boîtes imbriquées, chacune responsable de son contenu.",
      ),
      like: B(
        'Moving house with boxes rather than armfuls. What is in a box travels with it, and you can restack the boxes without unpacking anything.',
        "Déménager avec des cartons plutôt qu'en portant les objets un à un. Ce qui se trouve dans un carton voyage avec lui, et l'on peut réempiler les cartons sans rien déballer.",
      ),
      words: [
        { term: B('Frame', 'Cadre'), means: B('A box with a size, which can hold other boxes and can clip what overflows it.', "Une boîte dotée d'une taille, qui peut contenir d'autres boîtes et masquer ce qui en déborde.") },
        { term: B('Group', 'Groupe'), means: B('Several things tied together with no size of their own. Useful for moving, useless for layout, and the source of most beginner confusion.', "Plusieurs éléments liés entre eux, sans taille propre. Utile pour les déplacer, inutile pour la mise en page, et source de la plupart des confusions chez les débutants.") },
      ],
      steps: [
        B('Before moving anything, find out what it is inside. Almost every "why did that jump" is a thing that belonged to a box you did not see.',
          "Avant de déplacer quoi que ce soit, identifiez ce qui le contient. Presque tous les déplacements inattendus concernent un élément qui appartenait à une boîte que vous n'aviez pas vue."),
        B('Use frames where you would have used a group. A group tracks its contents; a frame governs them, and governing is what you want.',
          "Utilisez des cadres là où vous auriez placé un groupe. Un groupe suit son contenu ; un cadre le régit, et c'est précisément ce que vous recherchez."),
      ],
      trap: B(
        'Dragging things loose on the canvas because it is faster. It is faster for ten minutes and then nothing can be resized without breaking, and you cannot say why.',
        "Disposer les éléments en vrac sur le plan de travail parce que c'est plus rapide. Cela l'est pendant dix minutes ; ensuite, plus rien ne se redimensionne sans se casser, et vous ne savez pas expliquer pourquoi.",
      ),
      check: B(
        'Resize the outer box. If everything inside behaves sensibly, your structure is right. If things overlap or fly off, you have groups where you needed frames.',
        "Redimensionnez la boîte extérieure. Si tout son contenu se comporte correctement, votre structure est bonne. Si des éléments se chevauchent ou se déplacent, vous avez utilisé des groupes là où il fallait des cadres.",
      ),
    },
    {
      id: 'autolayout',
      title: B('Auto layout: stop placing things by hand', "L'auto layout : cesser de tout placer à la main"),
      plain: B(
        'Auto layout tells a frame to arrange its children in a direction, with a fixed gap, instead of you positioning each one. It is the difference between a document that survives a text change and one that has to be rebuilt every time.',
        "L'auto layout indique à un cadre de disposer ses enfants dans une direction, avec un écart fixe, au lieu que vous placiez chacun d'eux. C'est la différence entre un document qui résiste à une modification du texte et un document qu'il faut refaire à chaque fois.",
      ),
      like: B(
        'A shelf rather than a pile. Add a book to a shelf and the others shift along; add one to a pile and you restack the lot.',
        "Une étagère plutôt qu'une pile. Si vous ajoutez un livre sur une étagère, les autres se décalent ; si vous l'ajoutez à une pile, vous devez tout réempiler.",
      ),
      words: [
        { term: B('Direction', 'Direction'), means: B('Whether children stack downwards or run across. Almost every layout is these two, nested.', "Indique si les enfants s'empilent verticalement ou se succèdent horizontalement. Presque toute mise en page combine ces deux dispositions, imbriquées.") },
        { term: B('Gap', 'Écart'), means: B('The single spacing between children, set once rather than eyeballed between each pair.', "L'espacement unique entre les enfants, défini une fois plutôt qu'estimé à l'oeil entre chaque paire.") },
        { term: B('Hug and fill', 'Ajuster et remplir'), means: B('Whether a box shrinks to its contents or stretches to its parent. Getting these two right is most of the work.', "Indique si une boîte se réduit à son contenu ou s'étire jusqu'à son parent. Bien régler ces deux options constitue l'essentiel du travail.") },
      ],
      steps: [
        B('Put auto layout on anything that is a list, a row of buttons, a card, or a page. In practice, on nearly everything.',
          "Appliquez l'auto layout à tout ce qui constitue une liste, une rangée de boutons, une carte ou une page. En pratique, à presque tout."),
        B('Set the gap from your spacing scale, not by dragging until it looks right. This is where the first design course pays off here.',
          "Réglez l'écart à partir de votre échelle d'espacement, et non en ajustant jusqu'à ce que le résultat semble correct. C'est ici que le premier cours de design porte ses fruits."),
        B('Then change a label to something twice as long, on purpose. That is the test, and it takes four seconds.',
          "Remplacez ensuite délibérément un libellé par un texte deux fois plus long. C'est le test, et il prend quatre secondes."),
      ],
      trap: B(
        'Nesting auto layouts six deep to force one stubborn alignment. When you are fighting it, the answer is almost always that one box should hug where it fills, or the reverse.',
        "Imbriquer six niveaux d'auto layout pour forcer un alignement récalcitrant. Lorsque vous luttez ainsi, la solution est presque toujours qu'une boîte doit s'ajuster là où elle remplit, ou inversement.",
      ),
      check: B(
        'Double the length of the longest piece of text. A layout that survives that is a layout; one that does not is a drawing.',
        "Doublez la longueur du texte le plus long. Une mise en page qui résiste à ce test est une véritable mise en page ; celle qui n'y résiste pas n'est qu'un dessin.",
      ),
    },
    {
      id: 'components',
      title: B('Components: write a thing once', "Les composants : définir un élément une seule fois"),
      plain: B(
        'A component is one definition and many copies that follow it. Change the definition and every copy changes. It is the same idea as a function in code, and the same idea as the design system from the other course.',
        "Un composant est une définition accompagnée de copies qui la suivent. Modifiez la définition et toutes les copies changent. C'est le même principe qu'une fonction en programmation, et le même que le système de design présenté dans l'autre cours.",
      ),
      like: B(
        'A rubber stamp. You recut the stamp, not the four hundred pages you already stamped.',
        "Un tampon. On retaille le tampon, non les quatre cents pages déjà tamponnées.",
      ),
      words: [
        { term: B('Main and instance', 'Principal et instance'), means: B('The definition, and each copy of it placed in a design. Editing an instance detaches it from the rule, which is sometimes right and usually a mistake.', "La définition, et chaque copie placée dans un design. Modifier une instance la détache de la règle, ce qui est parfois voulu et le plus souvent une erreur.") },
        { term: B('Variant', 'Variante'), means: B('One component with declared states: default, hover, disabled. Not four separate components that will drift apart.', "Un composant doté d'états déclarés : normal, survol, désactivé. Et non quatre composants distincts qui finiront par diverger.") },
      ],
      steps: [
        B('Make a component the second time you need the same thing, not the first. Building a system for something used once costs more than it returns.',
          "Créez un composant la deuxième fois que vous avez besoin du même élément, et non la première. Construire un système pour un élément utilisé une seule fois coûte plus qu'il ne rapporte."),
        B('Name it for what it is, not what it looks like. "Primary button", never "blue button": the day it turns green the name lies.',
          "Nommez-le d'après sa fonction, non d'après son apparence. « Bouton principal », jamais « bouton bleu » : le jour où il deviendra vert, le nom sera faux."),
      ],
      trap: B(
        'Making everything a component on day one. You end up maintaining a library for a design nobody has approved yet, and changing direction costs ten times more.',
        "Tout transformer en composant dès le premier jour. Vous entretenez une bibliothèque pour un design que personne n'a validé, et tout changement de direction coûte dix fois plus.",
      ),
      check: B(
        'Change the definition and watch. If some copies did not follow, they were detached, and you have quietly got two versions of your button.',
        "Modifiez la définition et observez. Si certaines copies n'ont pas suivi, elles étaient détachées, et vous disposez sans le savoir de deux versions de votre bouton.",
      ),
    },
    {
      id: 'variables',
      title: B('Variables: the system before the screens', "Les variables : le système avant les écrans"),
      plain: B(
        'A variable is a named value: a colour, a spacing, a size, used by name instead of by number. It is the design token from the other course, made real in the tool.',
        "Une variable est une valeur nommée : une couleur, un espacement, une taille, utilisée par son nom plutôt que par sa valeur numérique. C'est le design token de l'autre cours, concrétisé dans l'outil.",
      ),
      like: B(
        'Writing "the house colour" on four hundred tins instead of writing the exact mix on each one. When the house colour changes, you change it once.',
        "Écrire « la couleur de la maison » sur quatre cents pots plutôt que la formule exacte sur chacun. Lorsque la couleur change, on la modifie une seule fois.",
      ),
      words: [
        { term: B('Collection', 'Collection'), means: B('A set of variables that change together, which is how light and dark themes are actually built.', "Un ensemble de variables qui changent conjointement ; c'est ainsi que l'on construit réellement un thème clair et un thème sombre.") },
        { term: B('Alias', 'Alias'), means: B('A variable pointing at another: "button background" points at "accent". You change accent, the button follows, and the meaning stays readable.', "Une variable qui renvoie à une autre : « fond du bouton » renvoie à « accent ». Lorsque vous modifiez l'accent, le bouton suit, et le sens reste lisible.") },
      ],
      steps: [
        B('Define the scales as variables before drawing the second screen. Not the first: you do not know them yet.',
          "Définissez les échelles sous forme de variables avant de dessiner le deuxième écran. Pas avant le premier : vous ne les connaissez pas encore."),
        B('Name by role, never by appearance. "Surface", "accent", "danger". A name that describes a colour is a name that becomes false.',
          "Nommez par rôle, jamais par apparence : « surface », « accent », « danger ». Un nom qui décrit une couleur finira par devenir faux."),
      ],
      trap: B(
        'Creating sixty variables for a design with four colours. A system larger than the thing it governs is a second job, and you will abandon it.',
        "Créer soixante variables pour un design à quatre couleurs. Un système plus vaste que ce qu'il régit devient un second métier, et vous finirez par l'abandonner.",
      ),
      check: B(
        'Change one variable and see how much of the design moves. If nothing moves, you named values nobody uses. If everything moves at once, you aliased too little.',
        "Modifiez une variable et observez ce qui change. Si rien ne change, vous avez nommé des valeurs que personne n'utilise. Si tout change à la fois, vous n'avez pas assez utilisé d'alias.",
      ),
    },
    {
      id: 'handoff',
      title: B('Handing over: what a developer, or a model, needs to receive',
        "La transmission : ce qu'un développeur, ou un modèle, doit recevoir"),
      plain: B(
        'A design is finished when someone else can build it without asking you a question. That is a testable condition, and it is almost never true of a file that looks finished.',
        "Un design est terminé lorsqu'une autre personne peut le construire sans vous poser de question. C'est une condition vérifiable, et elle n'est presque jamais remplie par un fichier qui semble terminé.",
      ),
      like: B(
        'A recipe versus a photograph of a dish. Both show what it should be; only one lets someone make it.',
        "Une recette face à la photo d'un plat. Les deux montrent le résultat attendu ; une seule permet de le reproduire.",
      ),
      words: [
        { term: B('State', 'État'), means: B('What the screen looks like when it is loading, empty, or wrong. Three screens nobody designs and everybody ships.', "L'apparence de l'écran pendant le chargement, lorsqu'il est vide ou en cas d'échec. Trois écrans que personne ne dessine et que tout le monde livre.") },
        { term: B('Breakpoint', 'Point de rupture'), means: B('The width at which the layout changes shape. One is often enough; deciding none is deciding badly.', "La largeur à partir de laquelle la mise en page change de forme. Un seul point suffit souvent ; ne pas en définir revient à mal décider.") },
      ],
      steps: [
        B('Draw the empty state and the error state before you polish the happy one. They take twenty minutes and they are where real products look unfinished.',
          "Dessinez l'état vide et l'état d'erreur avant de peaufiner le cas idéal. Ils demandent vingt minutes, et c'est leur absence qui donne à un vrai produit une apparence inachevée."),
        B('Write the rules that the picture cannot show: what wraps, what truncates, what happens at the narrowest width you support.',
          "Rédigez les règles que l'image ne peut pas montrer : ce qui passe à la ligne, ce qui est tronqué, et ce qui se produit à la largeur minimale que vous acceptez."),
        B('If a model is going to build it, give it the variables and the rules, not a screenshot. A screenshot is the one input that forces it back to guessing.',
          "Si c'est un modèle qui doit le construire, fournissez-lui les variables et les règles, et non une capture d'écran. La capture est le seul apport qui l'oblige à revenir à la supposition."),
      ],
      trap: B(
        'Handing over the happy path only. Every question that comes back costs more than the state would have, and the answer gets decided by whoever is building, at speed, alone.',
        "Ne transmettre que le cas idéal. Chaque question qui en découle coûte plus cher que la conception de l'état manquant, et la réponse est tranchée par la personne qui construit, rapidement et seule.",
      ),
      check: B(
        'Give the file to someone with no context and ask them to list their questions. The list is your unfinished work, and it is shorter to fix than to answer.',
        "Confiez le fichier à une personne sans contexte et demandez-lui de dresser la liste de ses questions. Cette liste représente votre travail inachevé, et il est plus rapide de la corriger que d'y répondre.",
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
