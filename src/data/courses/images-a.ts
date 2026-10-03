// LE COURS « Images IA de haute qualité : styles, Midjourney, retouche », PARTIE A · voir ./types et ./index.
//
// UN SEUL FIL ROUGE · « Maison Oolong », un petit salon de thé fictif à Lyon.
// Sa propriétaire, Clara, a besoin d'images cohérentes pour son site, ses
// fiches produit et ses réseaux, et d'une mascotte, Miso, un petit renard
// roux. Le module 1 apprend à comprendre et décrire une image ; le module 2
// produit ces images dans Midjourney.
//
// CE QUE LE COURS AFFIRME DE MIDJOURNEY, ET CE QU'IL S'INTERDIT. Il s'en tient
// aux principes stables : la grille de quatre images, la galerie, les
// paramètres de longue date (--ar, --stylize, --chaos, --no, --seed, --v), les
// références d'image, de style et de personnage, les variations, l'édition de
// région, le panoramique, le zoom arrière, l'agrandissement. Les plages de
// valeurs, les offres, la visibilité des images et la syntaxe de l'outil de
// personnage changent selon les versions : le cours renvoie à la documentation
// officielle, sans jamais citer de prix ni de limite.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 1 · COMPRENDRE ET DÉCRIRE UNE IMAGE                          */
/* ================================================================== */

const M1 = 'im-m1'

const SEE: Level[] = [
  {
    id: 'im-how',
    master: 'research',
    minutes: 10,
    title: B('How an image generator works', "Comment un générateur d'images fonctionne"),
    learn: B(
      'You will know how a diffusion model turns noise into an image guided by your text, and what that explains about its errors.',
      'Vous saurez comment un modèle de diffusion change du bruit en image guidé par votre texte, et ce que cela explique.',
    ),
    act: B('Generate the same prompt four times for Maison Oolong, then note what stays stable and what changes.',
      'Générez quatre fois le même prompt pour Maison Oolong, puis notez ce qui reste stable et ce qui change.'),
    steps: [
      B('Write one plain sentence describing a teapot and a cup on a wooden counter, with no style words.',
        'Écrivez une phrase simple décrivant une théière et une tasse sur un comptoir en bois, sans mot de style.'),
      B('Generate it four times in the generator of your choice and lay the results side by side.',
        'Générez-la quatre fois dans le générateur de votre choix et posez les résultats côte à côte.'),
      B('List what you never specified but the model decided: angle, light, cup shape, colours.',
        "Listez ce que vous n'avez pas précisé et que le modèle a décidé : angle, lumière, forme de tasse, couleurs."),
      B('Check the details where diffusion often slips: lettering, hands, the number of objects.',
        'Vérifiez les détails où la diffusion se trompe souvent : lettres, mains, nombre d\'objets.'),
    ],
    trap: B(
      'Believing the model finds an existing photo and pastes it: it generates new pixels, and what you leave unsaid is filled by statistical habit.',
      'Croire que le modèle trouve une photo existante et la recopie : il produit des pixels neufs, et ce que vous taisez est comblé par habitude.',
    ),
    quiz: {
      q: B('Four generations of the same prompt give four different teapots. What best explains it?',
        "Quatre générations du même prompt donnent quatre théières différentes. Qu'est-ce qui l'explique le mieux ?"),
      options: [
        B('The service picks a different stock photo from its database each time', 'Le service choisit à chaque fois une autre photo de banque dans sa base'),
        B('Each run starts from different random noise, shaped by the same text', "Chaque génération part d'un bruit aléatoire différent, guidé par le même texte"),
        B('The prompt was too short, so the model ignored most of its words', 'Le prompt était trop court, donc le modèle a ignoré la plupart des mots'),
      ],
      answer: 1,
      why: B(
        'Generation starts from random noise, set by a seed, that the model removes step by step, guided by your text. A new seed means a new starting point, hence a new teapot.',
        "La génération part d'un bruit aléatoire, fixé par une seed, que le modèle retire pas à pas, guidé par votre texte. Nouvelle seed, nouveau départ, donc nouvelle théière.",
      ),
    },
    badge: B('Knows what happens under the image', "Sait ce qui se passe sous l'image"),
  },
  {
    id: 'im-anatomy',
    master: 'writing',
    minutes: 11,
    title: B('Anatomy of an image prompt', "L'anatomie d'un prompt d'image"),
    learn: B(
      'You will build an image prompt in eight parts: subject, composition, framing, light, palette, medium, style, mood.',
      "Vous saurez bâtir un prompt d'image en huit parties : sujet, composition, cadrage, lumière, palette, médium, style, ambiance.",
    ),
    act: B('Rewrite a vague prompt for the Maison Oolong home page in eight parts, then compare both results.',
      "Réécrivez en huit parties un prompt vague pour l'accueil du site de Maison Oolong, puis comparez les deux résultats."),
    steps: [
      B('Start with the subject and its action, in concrete nouns: who or what, doing what, where.',
        'Commencez par le sujet et son action, en noms concrets : qui ou quoi, faisant quoi, où.'),
      B('Add composition and framing, then light and palette, in short phrases separated by commas.',
        'Ajoutez la composition et le cadrage, puis la lumière et la palette, en courtes expressions séparées par des virgules.'),
      B('Close with medium, style and mood: a photograph or a gouache, calm or festive.',
        "Terminez par le médium, le style et l'ambiance : photographie ou gouache, calme ou festive."),
      B('Remove every word that adds nothing visible, such as "beautiful" or "amazing".',
        "Retirez chaque mot qui n'ajoute rien de visible, comme « magnifique » ou « incroyable »."),
    ],
    trap: B(
      'Piling up praise ("stunning, masterpiece, 8k") instead of describing what should be seen: the model gets adjectives, not decisions.',
      "Empiler des éloges (« sublime, chef-d'oeuvre, 8k ») au lieu de décrire ce qu'on doit voir : le modèle reçoit des adjectifs, pas des décisions.",
    ),
    quiz: {
      q: B('Clara\'s prompt "beautiful tea shop, amazing, high quality" gives generic images. What do you add first?',
        'Le prompt de Clara « joli salon de thé, incroyable, haute qualité » donne des images banales. Qu\'ajoutez-vous d\'abord ?'),
      options: [
        B('More quality words, such as 8k, masterpiece and award-winning', "Plus de mots de qualité, comme 8k, chef-d'oeuvre et primé"),
        B('A higher resolution setting, so details appear on their own', 'Un réglage de résolution plus élevé, pour que les détails viennent seuls'),
        B('A concrete subject, framing, light and palette for the scene', 'Un sujet concret, un cadrage, une lumière et une palette pour la scène'),
      ],
      answer: 2,
      why: B(
        'Quality words carry no visual decision. A named subject, a framing, a light and a palette tell the model what to draw, which is what makes an image specific.',
        "Les mots de qualité ne portent aucune décision visuelle. Un sujet nommé, un cadrage, une lumière et une palette disent au modèle quoi dessiner : c'est ce qui rend l'image singulière.",
      ),
    },
    badge: B('Writes image prompts in eight parts', "Écrit ses prompts d'image en huit parties"),
  },
  {
    id: 'im-framing',
    master: 'planning',
    minutes: 11,
    title: B('Framing, lens and composition', 'Cadrage, objectif et composition'),
    learn: B(
      'You will choose a shot size, an angle, a focal length and a composition rule, and name them so the model follows.',
      'Vous saurez choisir une échelle de plan, un angle, une focale et une règle de composition, et les nommer pour être suivi.',
    ),
    act: B('Produce three framings of one Maison Oolong teapot: macro close-up, medium shot, wide shot with empty space.',
      'Produisez trois cadrages d\'une théière de Maison Oolong : gros plan macro, plan moyen, plan large avec espace vide.'),
    steps: [
      B('Pick the shot size from the use: a close-up for texture, a wide shot for context and text.',
        "Choisissez l'échelle de plan selon l'usage : gros plan pour la matière, plan large pour le contexte et le texte."),
      B('Name the angle: eye level, low angle, high angle, or top-down, the classic view for a flat lay.',
        "Nommez l'angle : hauteur d'oeil, contre-plongée, plongée, ou vue de dessus, classique pour une mise à plat."),
      B('Give a focal length and an aperture, such as 85mm f/1.8, to set perspective and background blur.',
        "Indiquez une focale et une ouverture, comme 85 mm f/1.8, pour fixer la perspective et le flou d'arrière-plan."),
      B('Place the subject: rule of thirds, centred symmetry, leading lines, or negative space for a headline.',
        'Placez le sujet : règle des tiers, symétrie centrée, lignes directrices, ou espace négatif pour un titre.'),
    ],
    trap: B(
      'Asking for a banner image without saying where the text will go: the subject fills the frame and the headline has nowhere to sit.',
      "Demander une image de bannière sans dire où ira le texte : le sujet remplit le cadre et le titre n'a plus de place.",
    ),
    quiz: {
      q: B('Clara needs a wide website banner with her headline on the left. Which framing do you ask for?',
        'Clara veut une bannière large pour son site, avec son titre à gauche. Quel cadrage demandez-vous ?'),
      options: [
        B('A wide shot, subject on the right third, empty space on the left', 'Un plan large, sujet sur le tiers droit, espace vide à gauche'),
        B('A macro close-up of the tea leaves filling the whole frame', 'Un gros plan macro des feuilles de thé qui remplit tout le cadre'),
        B('A top-down flat lay with many objects spread evenly to the edges', "Une vue de dessus avec de nombreux objets répartis jusqu'aux bords"),
      ],
      answer: 0,
      why: B(
        'Negative space on the left keeps room for the headline, and the subject on the right third balances it. Also ask for a wide format so the banner needs no crop.',
        "L'espace négatif à gauche garde la place du titre, et le sujet sur le tiers droit l'équilibre. Demandez aussi un format large : la bannière n'aura pas à être recadrée.",
      ),
    },
    badge: B('Frames before it generates', 'Cadre avant de générer'),
  },
  {
    id: 'im-light',
    master: 'analysis',
    minutes: 11,
    title: B('Light, colour and material', 'Lumière, couleur et matière'),
    learn: B(
      'You will describe light by direction, quality and temperature, set a palette with roles, and name the materials.',
      'Vous saurez décrire la lumière par sa direction, sa qualité et sa température, fixer une palette et nommer les matières.',
    ),
    act: B('Light the same tea scene three ways for Maison Oolong, then keep the one that fits its brand palette.',
      "Éclairez la même scène de thé de trois façons pour Maison Oolong, puis gardez celle qui s'accorde à sa palette."),
    steps: [
      B('Give the light a direction and a quality: soft window light from the left, or hard noon sun.',
        'Donnez à la lumière une direction et une qualité : douce lumière de fenêtre à gauche, ou soleil dur de midi.'),
      B('Set the time and temperature: warm golden hour, cool overcast morning, candlelight.',
        'Fixez le moment et la température : heure dorée chaude, matin couvert et froid, lueur de bougie.'),
      B('Name a palette of three to five colours, each with its role: dominant, secondary, accent.',
        'Nommez une palette de trois à cinq couleurs, chacune avec son rôle : dominante, secondaire, accent.'),
      B('Describe the materials so light has something to touch: matte stoneware, brushed brass, linen, steam.',
        'Décrivez les matières pour que la lumière ait prise : grès mat, laiton brossé, lin, vapeur.'),
    ],
    trap: B(
      'Writing "good lighting": the model picks its default, often flat and glossy, and every product looks like the same stock image.',
      "Écrire « bon éclairage » : le modèle prend sa lumière par défaut, souvent plate et brillante, et chaque produit ressemble à la même image de banque.",
    ),
    quiz: {
      q: B('The teapot looks flat and its glaze shows no texture. What do you change in the prompt?',
        'La théière paraît plate et son émail ne montre aucune texture. Que changez-vous dans le prompt ?'),
      options: [
        B('Add "highly detailed texture, 8k" at the end of the prompt', 'Ajouter « texture très détaillée, 8k » à la fin du prompt'),
        B('Ask for a brighter frontal flash so that every detail is lit evenly', 'Demander un flash frontal plus fort pour éclairer chaque détail également'),
        B('Ask for a low side light grazing the glaze, and name the glaze', "Demander une lumière latérale rasante sur l'émail, et nommer l'émail"),
      ],
      answer: 2,
      why: B(
        'Texture appears where light grazes a surface and casts tiny shadows. Frontal light flattens it, and no quality word replaces a direction. Naming the glaze (crackled celadon) helps too.',
        "La texture naît là où la lumière rase une surface et y crée de petites ombres. Une lumière frontale l'écrase, aucun mot de qualité ne remplace une direction. Nommer l'émail aide aussi.",
      ),
    },
    badge: B('Lights its images on purpose', 'Éclaire ses images à dessein'),
  },
]

const SEE_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M1, 'im-how')]: {
    why: [
      B("An image generator neither stores pictures nor searches the web. During training, a diffusion model saw a huge number of images paired with captions, each gradually buried under random noise, and it learned one skill: predicting which noise to remove so that an image becomes slightly clearer. A text encoder turns your prompt into numbers, and those numbers steer every removal step.",
        "Un générateur d'images ne stocke pas de photos et ne cherche rien sur le web. À l'entraînement, un modèle de diffusion a vu un très grand nombre d'images associées à des légendes, chacune peu à peu noyée sous du bruit aléatoire, et il a appris un seul geste : prédire le bruit à retirer pour que l'image devienne un peu plus nette. Un encodeur de texte change votre prompt en nombres, qui orientent chaque étape."),
      B("Generation runs that skill in reverse. It starts from pure noise, set by a number called the seed, and removes noise over many steps, each guided by your prompt. Most current tools work in a compressed space (latent space) and decode the result into pixels at the end. Same prompt, new seed: a new image. Same prompt, same seed, same model and settings: usually the same image.",
        "La génération applique ce geste à l'envers. Elle part d'un bruit pur, fixé par un nombre appelé seed, et le retire en de nombreuses étapes, chacune guidée par votre prompt. La plupart des outils travaillent dans un espace compressé (espace latent) et décodent le résultat en pixels à la fin. Même prompt, nouvelle seed : nouvelle image. Même prompt, même seed, même modèle et mêmes réglages : en général, la même image."),
      B("This explains the classic flaws. The model learned what things usually look like together, not rules: it renders texture, light and atmosphere well, and may fumble counting, spelling or exact spatial relations. Recent models have improved on text and hands, and some generators built into chat assistants use other architectures, but the habit to keep is the same: what you do not say, the model fills with what is most common.",
        "D'où les défauts classiques. Le modèle a appris à quoi les choses ressemblent d'habitude, pas des règles : il rend bien matière, lumière et atmosphère, et peut se tromper pour compter, épeler ou placer exactement. Les modèles récents progressent sur le texte et les mains, et certains générateurs intégrés aux assistants reposent sur d'autres architectures, mais le réflexe demeure : ce que vous ne dites pas, le modèle le comble par le plus courant."),
    ],
    example: {
      context: B("Clara runs Maison Oolong, a small fictional tea house in Lyon. She needs an image for her website, types a very short request and regenerates it ten times, hoping for luck.",
        "Clara tient Maison Oolong, un petit salon de thé fictif à Lyon. Il lui faut une image pour son site : elle tape une demande très courte et la relance dix fois, en comptant sur la chance."),
      before: B("a tea shop picture",
        "une image de salon de thé"),
      after: B("A cast-iron teapot and two small celadon cups on a light oak counter, steam rising, a few loose tea leaves beside them.\nNo text, no logo, no people.\n\n(Generate four times and compare: what is stable comes from the prompt, what varies comes from the seed.)",
        "Une théière en fonte et deux petites tasses en céladon sur un comptoir en chêne clair, de la vapeur qui monte, quelques feuilles de thé en vrac à côté.\nSans texte, sans logo, sans personne.\n\n(Générez quatre fois et comparez : ce qui est stable vient du prompt, ce qui varie vient de la seed.)"),
      takeaway: B("The first prompt leaves everything to the model's habits, so each run is a lottery. The second fixes what Clara cares about, and what still varies shows her exactly what she has not decided yet.",
        "Le premier prompt laisse tout aux habitudes du modèle : chaque essai est une loterie. Le second fixe ce qui compte pour Clara, et ce qui varie encore lui montre précisément ce qu'elle n'a pas décidé."),
    },
    exercise: {
      goal: B("A sheet comparing four generations of one prompt, separating what the prompt fixed from what the model chose on its own.",
        "Une fiche qui compare quatre générations d'un même prompt, en séparant ce que le prompt a fixé de ce que le modèle a choisi seul."),
      prompt: B("[YOUR SUBJECT, E.G. A TEAPOT AND TWO CUPS] on [A SURFACE], [ONE DETAIL OF ACTION, E.G. STEAM RISING].\nNo text, no people.\n\nGenerate this prompt four times in [YOUR GENERATOR], then fill in:\n1. Stable across the four: [...]\n2. Different in each: [...]\n3. Errors spotted (lettering, hands, counts, proportions): [...]",
        "[VOTRE SUJET, PAR EXEMPLE UNE THÉIÈRE ET DEUX TASSES] sur [UNE SURFACE], [UN DÉTAIL D'ACTION, PAR EXEMPLE DE LA VAPEUR QUI MONTE].\nSans texte, sans personne.\n\nGénérez ce prompt quatre fois dans [VOTRE GÉNÉRATEUR], puis complétez :\n1. Stable dans les quatre : [...]\n2. Différent dans chacune : [...]\n3. Erreurs repérées (lettres, mains, nombres, proportions) : [...]"),
      check: [
        B("You used exactly the same prompt for the four generations", "Vous avez utilisé exactement le même prompt pour les quatre générations"),
        B("Each stable element matches words present in the prompt", "Chaque élément stable correspond à des mots présents dans le prompt"),
        B("Each varying element is something the prompt never mentioned", "Chaque élément qui varie est une chose que le prompt ne mentionnait pas"),
        B("You checked at least one fragile detail, such as an object count", "Vous avez vérifié au moins un détail fragile, comme un nombre d'objets"),
      ],
      bonus: B("If your tool lets you fix the seed (Midjourney does with a parameter described in its docs; Stable Diffusion interfaces show it for each image), regenerate with the same seed and prompt. Note whether the image comes back identical.",
        "Si votre outil permet de fixer la seed (Midjourney le fait par un paramètre décrit dans sa documentation ; les interfaces de Stable Diffusion l'affichent pour chaque image), relancez avec la même seed et le même prompt. Notez si l'image revient identique."),
    },
    more: [
      { q: B("Your prompt mentions 'three cups', and the image shows four. What is the most accurate explanation?",
          "Votre prompt mentionne « trois tasses » et l'image en montre quatre. Quelle explication est la plus juste ?"),
        options: [
          B("The model learned visual habits, not counting rules, so numbers stay fragile", "Le modèle a appris des habitudes visuelles, pas des règles : les nombres restent fragiles"),
          B("The generator always adds one extra object to fill the empty space of the frame", "Le générateur ajoute toujours un objet de plus pour remplir l'espace vide du cadre"),
          B("The word 'three' was translated wrongly by the text encoder of the tool", "Le mot « trois » a été mal traduit par l'encodeur de texte de l'outil"),
        ],
        answer: 0,
        why: B("Diffusion models reproduce what images usually look like, and counting is a weak point. Ask for few objects of a kind, check every count, and correct it by regenerating or retouching.",
          "Les modèles de diffusion reproduisent l'allure habituelle des images, et compter est un point faible. Demandez peu d'objets d'un même type, vérifiez chaque nombre, et corrigez en relançant ou en retouchant.") },
      { q: B("You keep the same prompt and the same seed but change the model version. What should you expect?",
          "Vous gardez le même prompt et la même seed mais changez de version du modèle. À quoi vous attendre ?"),
        options: [
          B("Exactly the same image, since the seed fixes every pixel", "Exactement la même image, puisque la seed fixe chaque pixel"),
          B("An image that only changes in its resolution, never in its content", "Une image qui ne change que par sa résolution, jamais par son contenu"),
          B("A different image: the seed sets the start, the model the path", "Une image différente : la seed fixe le départ, le modèle le chemin"),
        ],
        answer: 2,
        why: B("The seed only sets the starting noise. A different model removes that noise differently, so the result changes. Reproducibility holds for the same model, settings and prompt.",
          "La seed ne fixe que le bruit de départ. Un autre modèle le retire autrement, donc le résultat change. La reproductibilité vaut pour un même modèle, de mêmes réglages et un même prompt.") },
    ],
  },

  [enrichKey(M1, 'im-anatomy')]: {
    why: [
      B("An image prompt works best as a series of decisions rather than a sentence of wishes. Eight parts cover what a photographer or an illustrator decides before working: subject (who or what, doing what), composition (where things sit), framing (shot size, angle, lens), light, palette, medium (photograph, gouache, 3D render), style and mood. Each part removes a default the model would otherwise pick.",
        "Un prompt d'image fonctionne mieux comme une suite de décisions que comme une phrase de souhaits. Huit parties couvrent ce qu'un photographe ou un illustrateur décide avant de travailler : sujet (qui ou quoi, faisant quoi), composition (où sont les choses), cadrage (échelle, angle, focale), lumière, palette, médium (photo, gouache, rendu 3D), style et ambiance. Chaque partie retire un choix par défaut."),
      B("Order matters a little: in many generators the first words weigh slightly more, so put the subject first and the finishing touches at the end. Short phrases separated by commas are easier to adjust than a long literary sentence, because you can change one decision and see its effect. Recent models also read natural sentences well: what counts is that each decision is present, not the grammar.",
        "L'ordre compte un peu : dans bien des générateurs, les premiers mots pèsent légèrement plus ; placez donc le sujet en tête et les finitions à la fin. De courtes expressions séparées par des virgules se règlent mieux qu'une longue phrase littéraire, car vous changez une décision et voyez son effet. Les modèles récents lisent aussi bien les phrases : ce qui compte est la présence de chaque décision, pas la grammaire."),
      B("Words that describe nothing visible (beautiful, masterpiece, 8k, trending) add little and push every image toward the same polished look. As for language: current generators, Midjourney included, often understand French, more or less finely depending on the tool, but technical vocabulary (focal lengths, lighting terms) is frequently read more precisely in English. Test both and keep what works.",
        "Les mots qui ne décrivent rien de visible (magnifique, chef-d'oeuvre, 8k, tendance) apportent peu et poussent chaque image vers le même rendu lisse. Côté langue : les générateurs actuels, Midjourney compris, comprennent souvent le français, plus ou moins finement selon l'outil, mais le vocabulaire technique (focales, éclairage) est souvent mieux lu en anglais. Testez les deux et gardez ce qui marche."),
    ],
    example: {
      context: B("Clara needs the hero image of the Maison Oolong home page. Her first prompt is a list of compliments, and every result looks like a generic stock photo.",
        "Clara a besoin de l'image principale de l'accueil du site de Maison Oolong. Son premier prompt est une liste de compliments, et chaque résultat ressemble à une photo de banque d'images."),
      before: B("beautiful tea shop, cozy, amazing atmosphere, masterpiece, 8k, ultra detailed",
        "magnifique salon de thé, cosy, ambiance incroyable, chef-d'oeuvre, 8k, ultra détaillé"),
      after: B("Subject: a cast-iron teapot pouring tea into a small celadon cup, on a light oak counter.\nComposition: subject on the right third, calm empty space on the left.\nFraming: medium close-up, eye level, 50mm lens, shallow depth of field.\nLight: soft morning window light from the left, steam gently backlit.\nPalette: warm oak, sage green, cream, a touch of terracotta.\nMedium and style: natural editorial photograph, fine film grain.\nMood: calm, unhurried, welcoming.",
        "Sujet : une théière en fonte qui verse du thé dans une petite tasse en céladon, sur un comptoir en chêne clair.\nComposition : sujet sur le tiers droit, espace vide et calme à gauche.\nCadrage : plan rapproché, hauteur d'oeil, objectif 50 mm, faible profondeur de champ.\nLumière : douce lumière de fenêtre du matin venant de la gauche, vapeur légèrement à contre-jour.\nPalette : chêne chaud, vert sauge, crème, une touche de terre cuite.\nMédium et style : photographie éditoriale naturelle, grain argentique fin.\nAmbiance : calme, posée, accueillante."),
      takeaway: B("Each line of the second prompt is a decision Clara can change on its own. When the result is close but not right, she knows which line to edit instead of starting over.",
        "Chaque ligne du second prompt est une décision que Clara peut changer seule. Quand le résultat est proche sans être juste, elle sait quelle ligne modifier au lieu de tout recommencer."),
    },
    exercise: {
      goal: B("An eight-part prompt for an image you really need, with a note on which part changed the result the most.",
        "Un prompt en huit parties pour une image dont vous avez vraiment besoin, avec une note sur la partie qui a le plus changé le résultat."),
      prompt: B("Subject: [WHO OR WHAT, DOING WHAT, WHERE].\nComposition: [WHERE THE SUBJECT SITS, WHAT SPACE STAYS EMPTY].\nFraming: [SHOT SIZE, ANGLE, FOCAL LENGTH].\nLight: [DIRECTION, QUALITY, TIME OF DAY].\nPalette: [THREE TO FIVE COLOURS].\nMedium: [PHOTOGRAPH, WATERCOLOUR, 3D RENDER...].\nStyle: [A MOVEMENT OR TECHNIQUE, NEVER A LIVING ARTIST'S NAME].\nMood: [TWO OR THREE WORDS].\n\nThen remove the labels, join the parts with commas, generate, and change one part at a time.",
        "Sujet : [QUI OU QUOI, FAISANT QUOI, OÙ].\nComposition : [OÙ SE TROUVE LE SUJET, QUEL ESPACE RESTE VIDE].\nCadrage : [ÉCHELLE DE PLAN, ANGLE, FOCALE].\nLumière : [DIRECTION, QUALITÉ, MOMENT DE LA JOURNÉE].\nPalette : [TROIS À CINQ COULEURS].\nMédium : [PHOTOGRAPHIE, AQUARELLE, RENDU 3D...].\nStyle : [UN COURANT OU UNE TECHNIQUE, JAMAIS LE NOM D'UN ARTISTE VIVANT].\nAmbiance : [DEUX OU TROIS MOTS].\n\nRetirez ensuite les étiquettes, joignez les parties par des virgules, générez, et changez une partie à la fois."),
      check: [
        B("Each of the eight parts holds something visible or decidable", "Chacune des huit parties contient une chose visible ou décidable"),
        B("No word is pure praise, such as beautiful, masterpiece or 8k", "Aucun mot n'est un pur éloge, comme magnifique, chef-d'oeuvre ou 8k"),
        B("The subject comes first and is described in concrete nouns", "Le sujet vient en premier et il est décrit par des noms concrets"),
        B("You changed one part at a time and noted its effect", "Vous avez changé une partie à la fois et noté son effet"),
      ],
      bonus: B("If your tool lets you fix the seed, generate the same eight-part prompt in French and in English with that seed. Note which version follows the framing and the light more closely, and keep that language for technical terms.",
        "Si votre outil permet de fixer la seed, générez le même prompt en huit parties en français et en anglais avec cette seed. Notez quelle version suit le mieux le cadrage et la lumière, et gardez cette langue pour les termes techniques."),
    },
    more: [
      { q: B("Your eight-part prompt gives a good image, but the mood is too cold. What do you change?",
          "Votre prompt en huit parties donne une bonne image, mais l'ambiance est trop froide. Que changez-vous ?"),
        options: [
          B("Rewrite the whole prompt from scratch with new wording", "Réécrire tout le prompt depuis le début avec d'autres mots"),
          B("The light and palette lines, toward warmer light and tones", "Les lignes lumière et palette, vers une lumière et des tons plus chauds"),
          B("Add 'warm' and 'cozy' three times to give them more weight", "Ajouter « chaleureux » et « cosy » trois fois pour leur donner du poids"),
        ],
        answer: 1,
        why: B("A mood is mostly made of light and colour. Changing those two lines warms the image while keeping the subject, framing and composition you already validated.",
          "Une ambiance tient surtout à la lumière et à la couleur. Changer ces deux lignes réchauffe l'image en gardant le sujet, le cadrage et la composition déjà validés.") },
      { q: B("Why prefer short phrases separated by commas to one long literary sentence?",
          "Pourquoi préférer de courtes expressions séparées par des virgules à une longue phrase littéraire ?"),
        options: [
          B("Because generators cannot read full sentences at all", "Parce que les générateurs ne savent pas du tout lire des phrases"),
          B("Because shorter prompts always produce sharper, finer images", "Parce que des prompts plus courts donnent toujours des images plus nettes"),
          B("Because each decision can be changed and tested alone", "Parce que chaque décision peut être changée et testée seule"),
        ],
        answer: 2,
        why: B("Separate decisions are easy to edit one by one, so you see which change caused which effect. Recent models read sentences well: the gain is in your control, not in theirs.",
          "Des décisions séparées se modifient une à une : vous voyez quel changement a produit quel effet. Les modèles récents lisent bien les phrases ; le gain est dans votre maîtrise, pas dans la leur.") },
    ],
  },

  [enrichKey(M1, 'im-framing')]: {
    why: [
      B("Framing is where generated images most often look amateur, because the model's default is a centred subject at eye level and medium distance. Photographers and filmmakers have a precise vocabulary for the alternatives, and generators learned it from captions: shot sizes (extreme close-up, close-up, medium shot, wide shot), angles (eye level, low angle, high angle, top-down) and the place of the subject in the frame.",
        "C'est au cadrage que les images générées font le plus souvent amateur, car le choix par défaut du modèle est un sujet centré, à hauteur d'oeil, à distance moyenne. Photographes et cinéastes ont un vocabulaire précis pour les autres choix, appris par les générateurs dans les légendes : échelles de plan (très gros plan, gros plan, plan moyen, plan large), angles (hauteur d'oeil, contre-plongée, plongée, vue de dessus) et place du sujet."),
      B("Lens terms are read as visual signatures. A wide angle (around 24mm) shows more space and stretches the foreground; a standard lens (around 50mm) looks natural; a short telephoto (around 85mm) flatters portraits and blurs the background; a long telephoto compresses distances. An aperture such as f/1.8 suggests a shallow depth of field, f/11 a scene sharp from front to back. The model reproduces the look of images captioned that way.",
        "Les termes d'objectif sont lus comme des signatures visuelles. Un grand angle (vers 24 mm) montre plus d'espace et étire le premier plan ; une focale standard (vers 50 mm) paraît naturelle ; un court téléobjectif (vers 85 mm) flatte les portraits et floute le fond ; un long téléobjectif écrase les distances. Une ouverture f/1.8 suggère une faible profondeur de champ, f/11 une scène nette partout. Le modèle imite l'allure de ces images."),
      B("Composition rules give the eye a path. The rule of thirds places the subject off-centre; symmetry gives calm and formality; leading lines (a counter edge, a shelf) guide toward the subject; negative space leaves room for a headline. Decide the use of the image first (banner, square post, vertical story, product sheet): it dictates the framing and where the empty space goes.",
        "Les règles de composition tracent un chemin pour l'oeil. La règle des tiers décentre le sujet ; la symétrie donne calme et solennité ; les lignes directrices (bord de comptoir, étagère) guident vers le sujet ; l'espace négatif laisse la place d'un titre. Décidez d'abord l'usage de l'image (bannière, post carré, story verticale, fiche produit) : il dicte le cadrage et la place du vide."),
    ],
    example: {
      context: B("Clara wants a banner for the Maison Oolong website, wide, with her headline on the left. Her first images put a teapot in the middle of a square.",
        "Clara veut une bannière pour le site de Maison Oolong, large, avec son titre à gauche. Ses premières images placent une théière au milieu d'un carré."),
      before: B("a teapot and cups on a counter, nice composition",
        "une théière et des tasses sur un comptoir, jolie composition"),
      after: B("Wide shot of a cast-iron teapot and two celadon cups on a long light oak counter, seen at eye level.\nSubject on the right third; the left half stays calm and empty, a softly blurred wall, for a headline.\n35mm lens, f/2.8, background gently out of focus.\nA shelf of tea tins draws a leading line toward the teapot.\nWide banner format (in Midjourney: --ar 16:9; check the docs of your tool).",
        "Plan large d'une théière en fonte et de deux tasses en céladon sur un long comptoir en chêne clair, vus à hauteur d'oeil.\nSujet sur le tiers droit ; la moitié gauche reste calme et vide, un mur doucement flou, pour un titre.\nObjectif 35 mm, f/2.8, arrière-plan légèrement flou.\nUne étagère de boîtes à thé trace une ligne directrice vers la théière.\nFormat de bannière large (dans Midjourney : --ar 16:9 ; vérifiez la documentation de votre outil)."),
      takeaway: B("The second prompt is written from the use of the image: where the headline goes, how wide the banner is, what guides the eye. The framing is chosen before generating instead of hoped for.",
        "Le second prompt part de l'usage de l'image : où va le titre, quelle largeur pour la bannière, ce qui guide l'oeil. Le cadrage est choisi avant de générer au lieu d'être espéré."),
    },
    exercise: {
      goal: B("Three framings of one subject, each tied to a real use: a texture close-up, a medium shot for a square post, a wide banner with room for text.",
        "Trois cadrages d'un même sujet, chacun lié à un usage réel : un gros plan de matière, un plan moyen pour un post carré, une bannière large avec de la place pour le texte."),
      prompt: B("Subject: [YOUR SUBJECT, THE SAME IN ALL THREE].\n\nVersion 1, for [USE, E.G. A PRODUCT DETAIL]: extreme close-up, [ANGLE], macro lens, very shallow depth of field.\nVersion 2, for [USE, E.G. A SQUARE POST]: medium shot, eye level, 50mm, subject on a third.\nVersion 3, for [USE, E.G. A WEBSITE BANNER]: wide shot, subject on the [LEFT OR RIGHT] third, empty space on the other side for text, wide format.\n\nKeep light, palette and style identical in all three: [YOUR LIGHT, PALETTE, STYLE].",
        "Sujet : [VOTRE SUJET, LE MÊME DANS LES TROIS].\n\nVersion 1, pour [USAGE, PAR EXEMPLE UN DÉTAIL PRODUIT] : très gros plan, [ANGLE], objectif macro, très faible profondeur de champ.\nVersion 2, pour [USAGE, PAR EXEMPLE UN POST CARRÉ] : plan moyen, hauteur d'oeil, 50 mm, sujet sur un tiers.\nVersion 3, pour [USAGE, PAR EXEMPLE UNE BANNIÈRE DE SITE] : plan large, sujet sur le tiers [GAUCHE OU DROIT], espace vide de l'autre côté pour le texte, format large.\n\nGardez lumière, palette et style identiques dans les trois : [VOTRE LUMIÈRE, PALETTE, STYLE]."),
      check: [
        B("The three images show one subject with clearly different framings", "Les trois images montrent un même sujet avec des cadrages nettement différents"),
        B("Light, palette and style stayed identical across the three", "Lumière, palette et style sont restés identiques dans les trois"),
        B("The banner leaves real empty space where the text will go", "La bannière laisse un vrai espace vide là où ira le texte"),
        B("You can name the shot size, angle and lens of each image", "Vous savez nommer l'échelle de plan, l'angle et la focale de chaque image"),
      ],
      bonus: B("Lay a dummy headline over the banner in a layout tool (Canva, Figma, a slide). If the text crosses the subject or is hard to read, adjust the composition line of the prompt, not the text.",
        "Posez un faux titre sur la bannière dans un outil de mise en page (Canva, Figma, une diapositive). Si le texte croise le sujet ou se lit mal, ajustez la ligne de composition du prompt, pas le texte."),
    },
    more: [
      { q: B("You ask for 'portrait of the tea master, 24mm lens, very close', and the face looks distorted. Why?",
          "Vous demandez « portrait du maître de thé, objectif 24 mm, très près » et le visage paraît déformé. Pourquoi ?"),
        options: [
          B("A wide angle very close stretches features; ask for 85mm instead", "Un grand angle très près étire les traits ; demandez plutôt 85 mm"),
          B("The generator does not know focal lengths and picks one at random", "Le générateur ne connaît pas les focales et en choisit une au hasard"),
          B("Portraits always distort, whatever lens you specify in the prompt", "Les portraits se déforment toujours, quelle que soit la focale demandée"),
        ],
        answer: 0,
        why: B("Images captioned with wide angles at close range show stretched noses and foreheads, and the model reproduces that look. A short telephoto such as 85mm is the classic portrait choice.",
          "Les images légendées grand angle à courte distance montrent nez et fronts étirés, et le modèle reproduit cette allure. Un court téléobjectif comme le 85 mm est le choix classique du portrait.") },
      { q: B("Clara needs a vertical image for a story. Besides the format, what must change in the prompt?",
          "Clara a besoin d'une image verticale pour une story. En plus du format, que faut-il changer dans le prompt ?"),
        options: [
          B("Nothing, since the generator recomposes vertical images by itself", "Rien, puisque le générateur recompose seul les images verticales"),
          B("The colour palette, which always looks different in vertical formats", "La palette, qui paraît toujours différente dans un format vertical"),
          B("The composition: subject and empty space placed for a tall frame", "La composition : sujet et espace vide placés pour un cadre haut"),
        ],
        answer: 2,
        why: B("A tall frame changes where the subject and the free space go: text often sits at the top or the bottom. Write the composition for the format instead of hoping the model adapts it well.",
          "Un cadre haut change la place du sujet et de l'espace libre : le texte se loge souvent en haut ou en bas. Écrivez la composition pour le format au lieu d'espérer que le modèle l'adapte.") },
    ],
  },

  [enrichKey(M1, 'im-light')]: {
    why: [
      B("Light is what makes a generated image look real or fake, cheap or premium. Three properties describe it: direction (side, back, front, above), quality (soft, from a large source such as an overcast sky or a window; hard, from a small source such as noon sun or a bare bulb) and colour temperature (warm like golden hour, cool like a blue morning). Named together, they replace the model's default flat light.",
        "C'est la lumière qui rend une image générée vraie ou fausse, bon marché ou haut de gamme. Trois propriétés la décrivent : direction (côté, arrière, face, dessus), qualité (douce, d'une grande source comme un ciel couvert ou une fenêtre ; dure, d'une petite source comme le soleil de midi ou une ampoule nue) et température (chaude comme l'heure dorée, froide comme un matin bleu). Nommées ensemble, elles remplacent la lumière plate par défaut."),
      B("Lighting setups have names the model has learned: backlight that makes steam and edges glow (rim light), side light that reveals texture, soft studio light through a softbox for products, low-key (dark, contrasted) or high-key (bright, airy). A palette works the same way: three to five named colours, with a dominant and an accent. Hex codes are only roughly understood by most generators; colour names with a material (sage green linen) work better.",
        "Les éclairages ont des noms appris par le modèle : contre-jour qui fait briller vapeur et contours (rim light), lumière latérale qui révèle la texture, lumière douce de studio à travers une boîte à lumière pour les produits, low-key (sombre, contrasté) ou high-key (clair, aérien). La palette suit la même logique : trois à cinq couleurs nommées, une dominante, un accent. Les codes hexadécimaux sont mal compris ; une couleur et sa matière (lin vert sauge) marchent mieux."),
      B("Materials are what light touches. Matte stoneware, crackled glaze, brushed brass, raw linen, wet leaves: each reacts differently, and naming them lets the light produce believable reflections and textures. For a brand, light and palette carry identity more than the subject does: keeping the same light line in every prompt is the first step toward a coherent series.",
        "Les matières sont ce que la lumière touche. Grès mat, émail craquelé, laiton brossé, lin brut, feuilles mouillées : chacune réagit autrement, et les nommer permet des reflets et des textures crédibles. Pour une marque, lumière et palette portent l'identité plus que le sujet : garder la même ligne de lumière dans chaque prompt est le premier pas vers une série cohérente."),
    ],
    example: {
      context: B("Clara's product images for her new oolong look flat and plastic, far from the warm, textured feel of her shop.",
        "Les images produit du nouvel oolong de Clara paraissent plates et plastiques, loin de l'atmosphère chaude et texturée de sa boutique."),
      before: B("teapot and tea packet, good lighting, nice colors, realistic",
        "théière et paquet de thé, bon éclairage, jolies couleurs, réaliste"),
      after: B("A tin of oolong tea beside a matte stoneware teapot with a crackled celadon glaze, on raw linen.\nLight: low, soft side light from a window on the left, late afternoon, warm; gentle shadows to the right; steam backlit.\nPalette: sage green (dominant), cream and warm oak (secondary), a small terracotta accent.\nMaterials: matte stoneware, brushed brass lid, coarse linen texture, a few dry tea leaves.\nNatural product photograph, low-key but not dark.",
        "Une boîte de thé oolong à côté d'une théière en grès mat à l'émail céladon craquelé, sur du lin brut.\nLumière : basse, latérale et douce, d'une fenêtre à gauche, fin d'après-midi, chaude ; ombres légères vers la droite ; vapeur à contre-jour.\nPalette : vert sauge (dominante), crème et chêne chaud (secondaires), un petit accent terre cuite.\nMatières : grès mat, couvercle en laiton brossé, texture de lin épais, quelques feuilles de thé sèches.\nPhotographie produit naturelle, low-key sans être sombre."),
      takeaway: B("The second prompt gives light a direction, a quality and a temperature, sets a palette with roles and names the materials. The texture of the glaze and the warmth of the shop come back because the model was told what to light and how.",
        "Le second prompt donne à la lumière une direction, une qualité et une température, fixe une palette avec des rôles et nomme les matières. La texture de l'émail et la chaleur de la boutique reviennent, parce que le modèle sait quoi éclairer et comment."),
    },
    exercise: {
      goal: B("Three lightings of the same scene, compared, and one light line kept as the reference for your brand images.",
        "Trois éclairages d'une même scène, comparés, et une ligne de lumière gardée comme référence pour les images de votre marque."),
      prompt: B("Scene: [YOUR SUBJECT AND SURFACE, IDENTICAL IN ALL THREE].\nMaterials: [TWO OR THREE MATERIALS, E.G. MATTE STONEWARE, LINEN].\nPalette: [DOMINANT], [SECONDARY], [ACCENT].\n\nLighting A: soft window light from the [SIDE], [TIME OF DAY], warm.\nLighting B: hard direct sunlight from above, crisp shadows.\nLighting C: backlight with a rim of light on the edges, dark background, low-key.\n\nGenerate each version with everything else unchanged.",
        "Scène : [VOTRE SUJET ET SA SURFACE, IDENTIQUES DANS LES TROIS].\nMatières : [DEUX OU TROIS MATIÈRES, PAR EXEMPLE GRÈS MAT, LIN].\nPalette : [DOMINANTE], [SECONDAIRE], [ACCENT].\n\nÉclairage A : douce lumière de fenêtre venant de [CÔTÉ], [MOMENT DE LA JOURNÉE], chaude.\nÉclairage B : soleil direct et dur venant du dessus, ombres nettes.\nÉclairage C : contre-jour avec un liseré de lumière sur les contours, fond sombre, low-key.\n\nGénérez chaque version sans rien changer d'autre."),
      check: [
        B("Only the lighting line changed between the three versions", "Seule la ligne d'éclairage a changé entre les trois versions"),
        B("The shadows let you read the light direction in each image", "Les ombres permettent de lire la direction de la lumière dans chaque image"),
        B("The materials read differently under each light", "Les matières se lisent différemment sous chaque lumière"),
        B("You wrote down the light line you will reuse for brand images", "Vous avez noté la ligne de lumière à réutiliser pour les images de marque"),
      ],
      bonus: B("Photograph a real object near a window at two times of day and compare with your generated versions. Describing what you observe in reality (where the shadow falls, how soft its edge is) is the best way to write light.",
        "Photographiez un vrai objet près d'une fenêtre à deux moments de la journée et comparez avec vos versions générées. Décrire ce que vous observez (où tombe l'ombre, la douceur de son bord) est la meilleure façon d'écrire la lumière."),
    },
    more: [
      { q: B("Clara asks for 'warm cozy light' and gets an orange cast over everything. What is a better request?",
          "Clara demande « lumière chaude et cosy » et obtient une dominante orange partout. Quelle demande vaut mieux ?"),
        options: [
          B("Late afternoon window light, soft, warm, with neutral whites", "Lumière de fenêtre de fin d'après-midi, douce, chaude, blancs neutres"),
          B("Very warm, very orange, very cozy candlelight in every corner", "Bougie très chaude, très orange, très cosy, dans chaque recoin du cadre"),
          B("No light description at all, letting the model decide", "Aucune description de lumière, pour laisser le modèle décider"),
        ],
        answer: 0,
        why: B("Naming the source, time and quality gives warmth without losing control, and 'neutral whites' keeps cups and linen from turning orange. Repeating 'warm' only pushes the cast further.",
          "Nommer la source, le moment et la qualité donne de la chaleur sans perdre la maîtrise, et « blancs neutres » évite que tasses et lin virent à l'orange. Répéter « chaud » accentue la dominante.") },
      { q: B("Why do colour names with a material often work better than hex codes?",
          "Pourquoi une couleur associée à une matière marche-t-elle souvent mieux qu'un code hexadécimal ?"),
        options: [
          B("Because hex codes are forbidden in most image generators", "Parce que les codes hexadécimaux sont interdits dans la plupart des outils"),
          B("Because images were captioned with words, rarely with codes", "Parce que les images ont été légendées par des mots, rarement par des codes"),
          B("Because material names make every image slightly brighter", "Parce que les noms de matières rendent chaque image un peu plus claire"),
        ],
        answer: 1,
        why: B("Models learned colours from captions, which say 'sage green linen' far more often than a hex code. Codes are only roughly understood: check exact colours later in an editor.",
          "Les modèles ont appris les couleurs dans des légendes, qui disent « lin vert sauge » bien plus souvent qu'un code. Les codes sont compris approximativement : vérifiez les couleurs exactes ensuite dans un éditeur.") },
    ],
  },
}

const SEE_DEEP: Record<string, Deepening> = {
  [deepKey(M1, 'im-how')]: {
    intro: B("Before writing better prompts, it helps to know what a prompt acts on. This lesson explains, without mathematics, how a diffusion model produces an image: training on images and captions, noise removed step by step, a text encoder that steers each step, a seed that sets the starting point. You will understand why the same prompt gives different images, why some details (lettering, hands, counts) are fragile, and why what you leave unsaid is filled by habit. The running example of this course is Maison Oolong, a small fictional tea house in Lyon whose owner, Clara, needs a coherent set of images for her website and social media.",
      "Avant d'écrire de meilleurs prompts, il est utile de savoir sur quoi un prompt agit. Ce cours explique, sans mathématiques, comment un modèle de diffusion produit une image : un entraînement sur des images et des légendes, du bruit retiré pas à pas, un encodeur de texte qui oriente chaque étape, une seed qui fixe le point de départ. Vous comprendrez pourquoi un même prompt donne des images différentes, pourquoi certains détails (lettres, mains, nombres) sont fragiles, et pourquoi ce que vous taisez est comblé par habitude. Le fil rouge de cette formation est Maison Oolong, un petit salon de thé fictif à Lyon, dont la propriétaire, Clara, a besoin d'images cohérentes pour son site et ses réseaux."),
    concepts: [
      { term: B('Diffusion', 'Diffusion'),
        def: B("A method in which the model learns to remove noise from an image. Generating means starting from pure noise and cleaning it step by step until an image appears.",
          "Une méthode où le modèle apprend à retirer du bruit d'une image. Générer revient à partir d'un bruit pur et à le nettoyer pas à pas jusqu'à ce qu'une image apparaisse.") },
      { term: B('Text encoder', 'Encodeur de texte'),
        def: B("The part that turns your prompt into numbers the image model can use. It guides each step: it does not obey sentences, it weighs associations.",
          "La partie qui change votre prompt en nombres utilisables par le modèle d'image. Il guide chaque étape : il n'obéit pas à des phrases, il pèse des associations.") },
      { term: B('Seed', 'Seed'),
        def: B("The number that sets the initial random noise. The same seed, prompt, model and settings usually give the same image; change one of them and the image changes.",
          "Le nombre qui fixe le bruit aléatoire de départ. Même seed, même prompt, même modèle et mêmes réglages donnent en général la même image ; changez l'un d'eux et l'image change.") },
      { term: B('Latent space', 'Espace latent'),
        def: B("A compressed representation in which many generators work, faster than raw pixels. A final decoder turns the result into a visible image.",
          "Une représentation compressée dans laquelle travaillent beaucoup de générateurs, plus rapide que les pixels bruts. Un décodeur final change le résultat en image visible.") },
      { term: B('Model default', 'Choix par défaut'),
        def: B("What the model produces for anything you do not specify: the most frequent angle, light and style in what it learned. It is why vague prompts look generic.",
          "Ce que le modèle produit pour tout ce que vous ne précisez pas : l'angle, la lumière et le style les plus fréquents dans ce qu'il a appris. C'est pourquoi un prompt vague donne une image banale.") },
    ],
    walkthrough: {
      title: B("Clara tests how her generator behaves before producing the first images for Maison Oolong.",
        "Clara teste le comportement de son générateur avant de produire les premières images de Maison Oolong."),
      steps: [
        B("She writes a neutral prompt: a cast-iron teapot and two celadon cups on an oak counter, no style words. Why: a neutral prompt reveals the model's default choices, which she will need to override.",
          "Elle écrit un prompt neutre : une théière en fonte et deux tasses en céladon sur un comptoir en chêne, sans mot de style. Pourquoi : un prompt neutre révèle les choix par défaut du modèle, qu'elle devra remplacer."),
        B("She generates it four times and lays the images side by side. The teapot, the cups and the counter are always there; the angle, the light and the background change. Why: what is stable comes from her words, what varies comes from the seed.",
          "Elle le génère quatre fois et pose les images côte à côte. La théière, les tasses et le comptoir sont toujours là ; l'angle, la lumière et le fond changent. Pourquoi : ce qui est stable vient de ses mots, ce qui varie vient de la seed."),
        B("She asks for three cups and gets four in one image. Why: counting is a weak point of diffusion. She decides to request at most two objects of a kind and to check every count.",
          "Elle demande trois tasses et en obtient quatre sur une image. Pourquoi : compter est un point faible de la diffusion. Elle décide de demander au plus deux objets d'un même type et de vérifier chaque nombre."),
        B("She asks for the shop name on the teapot; the lettering is approximate in some images. Why: text rendering varies by model. She will add the real name later in a layout tool, where the spelling is guaranteed.",
          "Elle demande le nom de la boutique sur la théière ; les lettres sont approximatives sur certaines images. Pourquoi : le rendu du texte varie selon les modèles. Elle ajoutera le vrai nom dans un outil de mise en page, où l'orthographe est garantie."),
        B("She writes down three defaults she wants to override: the centred angle, the flat light, the beige background. Why: these become the first decisions of her next prompts, on framing and light.",
          "Elle note trois choix par défaut à remplacer : l'angle centré, la lumière plate, le fond beige. Pourquoi : ils deviennent les premières décisions de ses prochains prompts, sur le cadrage et la lumière."),
      ],
    },
    mistakes: [
      { wrong: B("Regenerating the same vague prompt again and again, hoping for the perfect image.",
          "Relancer encore et encore le même prompt vague en espérant l'image parfaite."),
        fix: B("Change the prompt, not the seed: each missing decision (angle, light, palette) is a variable left to chance. Add it, then compare.",
          "Changez le prompt, pas la seed : chaque décision absente (angle, lumière, palette) est une variable laissée au hasard. Ajoutez-la, puis comparez.") },
      { wrong: B("Asking the generator for exact text, logos or a precise number of objects and trusting the result.",
          "Demander au générateur un texte exact, un logo ou un nombre précis d'objets, et se fier au résultat."),
        fix: B("Check every letter and every count. Add exact text and logos afterwards in a layout tool, and keep object counts low.",
          "Vérifiez chaque lettre et chaque nombre. Ajoutez le texte exact et les logos ensuite dans un outil de mise en page, et gardez peu d'objets.") },
      { wrong: B("Thinking the model understands the prompt like a person reading instructions.",
          "Croire que le modèle comprend le prompt comme une personne lit des consignes."),
        fix: B("Treat the prompt as a set of weighted associations. Concrete nouns and visual terms steer well; abstract praise and negations steer poorly.",
          "Traitez le prompt comme un ensemble d'associations pondérées. Les noms concrets et les termes visuels orientent bien ; les éloges abstraits et les négations orientent mal.") },
    ],
    recap: [
      B("A diffusion model removes noise step by step, guided by your text.", "Un modèle de diffusion retire du bruit pas à pas, guidé par votre texte."),
      B("The seed sets the starting point; a new seed gives a new image.", "La seed fixe le point de départ ; une nouvelle seed donne une nouvelle image."),
      B("What you leave unsaid is filled with the model's most frequent habits.", "Ce que vous taisez est comblé par les habitudes les plus fréquentes du modèle."),
      B("Lettering, hands and counts are fragile: always check them.", "Les lettres, les mains et les nombres sont fragiles : vérifiez-les toujours."),
    ],
    further: B("Read the page of your generator's official documentation on seeds and reproducibility (Midjourney documents its seed parameter; Stable Diffusion interfaces show the seed of each image). Repeat the four-generation test with a fixed seed, and note what changes when you alter a single word.",
      "Lisez la page de la documentation officielle de votre générateur consacrée aux seeds et à la reproductibilité (Midjourney documente son paramètre de seed ; les interfaces de Stable Diffusion affichent la seed de chaque image). Refaites le test des quatre générations avec une seed fixe, et notez ce qui change quand vous modifiez un seul mot."),
    more: [
      { q: B("Why does a negation such as 'no steam' sometimes produce steam?",
          "Pourquoi une négation comme « sans vapeur » produit-elle parfois de la vapeur ?"),
        options: [
          B("Because the generator reads prompts from the end, where the negation sits", "Parce que le générateur lit les prompts par la fin, là où est la négation"),
          B("Because the word steam still pulls the image toward steam", "Parce que le mot vapeur attire quand même l'image vers la vapeur"),
          B("Because steam is added automatically to every hot drink", "Parce que la vapeur est ajoutée d'office à toute boisson chaude"),
        ],
        answer: 1,
        why: B("The text encoder weighs words as associations: mentioning steam makes it more likely. Use the tool's dedicated exclusion (--no in Midjourney) or describe what you want instead.",
          "L'encodeur de texte pèse les mots comme des associations : mentionner la vapeur la rend plus probable. Utilisez l'exclusion prévue par l'outil (--no dans Midjourney) ou décrivez plutôt ce que vous voulez.") },
      { q: B("Clara wants to compare two light descriptions fairly. What does she keep fixed?",
          "Clara veut comparer équitablement deux descriptions de lumière. Que garde-t-elle fixe ?"),
        options: [
          B("The seed, the model and every other word of the prompt", "La seed, le modèle et tous les autres mots du prompt"),
          B("Nothing, since each image is random and cannot be compared", "Rien, puisque chaque image est aléatoire et ne se compare pas"),
          B("Only the aspect ratio, because it sets the composition", "Seulement le format, parce qu'il fixe la composition"),
        ],
        answer: 0,
        why: B("With the same seed, model and remaining words, the only difference between the two images comes from the light description, so the comparison teaches something.",
          "Avec la même seed, le même modèle et les mêmes autres mots, la seule différence entre les deux images vient de la description de lumière : la comparaison apprend quelque chose.") },
    ],
  },

  [deepKey(M1, 'im-anatomy')]: {
    intro: B("A good image prompt reads like the brief a photographer receives: what to show, how to frame it, how to light it, in which colours and in what spirit. This lesson gives you a stable structure in eight parts (subject, composition, framing, light, palette, medium, style, mood), explains why each part matters, and shows how to edit one part at a time. You will write the hero image prompt of the Maison Oolong home page and you will know, when an image is almost right, which line to change.",
      "Un bon prompt d'image se lit comme le brief que reçoit un photographe : quoi montrer, comment cadrer, comment éclairer, dans quelles couleurs et dans quel esprit. Ce cours vous donne une structure stable en huit parties (sujet, composition, cadrage, lumière, palette, médium, style, ambiance), explique le rôle de chacune et montre comment modifier une partie à la fois. Vous écrirez le prompt de l'image principale de l'accueil de Maison Oolong, et vous saurez, quand une image est presque juste, quelle ligne changer."),
    concepts: [
      { term: B('Subject', 'Sujet'),
        def: B("Who or what is shown, doing what, where. Concrete nouns (cast-iron teapot, oak counter) steer far better than categories (tea things).",
          "Qui ou quoi est montré, faisant quoi, où. Des noms concrets (théière en fonte, comptoir en chêne) orientent bien mieux que des catégories (objets du thé).") },
      { term: B('Medium', 'Médium'),
        def: B("The physical or digital technique of the image: photograph, watercolour, linocut, 3D render. It changes textures, edges and colours at once.",
          "La technique physique ou numérique de l'image : photographie, aquarelle, linogravure, rendu 3D. Il change d'un coup les textures, les contours et les couleurs.") },
      { term: B('Style', 'Style'),
        def: B("A movement, era or technique (Japanese woodblock print, Bauhaus poster, editorial photography). Describe it by its traits rather than by a living artist's name.",
          "Un courant, une époque ou une technique (estampe japonaise, affiche Bauhaus, photographie éditoriale). Décrivez-le par ses traits plutôt que par le nom d'un artiste vivant.") },
      { term: B('Mood', 'Ambiance'),
        def: B("The feeling the image should give, in two or three words. It works best when the light and the palette already support it.",
          "Le sentiment que l'image doit donner, en deux ou trois mots. Elle fonctionne le mieux quand la lumière et la palette la soutiennent déjà.") },
      { term: B('Filler words', 'Mots de remplissage'),
        def: B("Words that describe nothing visible: beautiful, masterpiece, 8k. They rarely help and can make every image look the same.",
          "Des mots qui ne décrivent rien de visible : magnifique, chef-d'oeuvre, 8k. Ils aident rarement et peuvent donner à toutes les images le même air.") },
    ],
    walkthrough: {
      title: B("Clara turns a list of compliments into the hero image prompt of Maison Oolong.",
        "Clara change une liste de compliments en prompt de l'image principale de Maison Oolong."),
      steps: [
        B("She writes the subject first: a cast-iron teapot pouring tea into a celadon cup, on a light oak counter. Why: the subject is the main decision, and in many generators the first words weigh a little more.",
          "Elle écrit d'abord le sujet : une théière en fonte qui verse du thé dans une tasse en céladon, sur un comptoir en chêne clair. Pourquoi : le sujet est la décision principale, et dans bien des générateurs les premiers mots pèsent un peu plus."),
        B("She adds composition and framing: subject on the right third, empty space on the left, medium close-up at eye level. Why: the home page headline will sit on the left.",
          "Elle ajoute la composition et le cadrage : sujet sur le tiers droit, espace vide à gauche, plan rapproché à hauteur d'oeil. Pourquoi : le titre de la page d'accueil se placera à gauche."),
        B("She adds light and palette: soft morning window light; warm oak, sage green, cream, a touch of terracotta. Why: these are the colours of her shop front, so the site and the shop will match.",
          "Elle ajoute la lumière et la palette : douce lumière de fenêtre du matin ; chêne chaud, vert sauge, crème, une touche de terre cuite. Pourquoi : ce sont les couleurs de sa devanture, le site et la boutique se répondront."),
        B("She adds medium, style and mood: natural editorial photograph, fine film grain, calm and welcoming. Why: she wants the look of a real photograph, not a glossy advert.",
          "Elle ajoute le médium, le style et l'ambiance : photographie éditoriale naturelle, grain argentique fin, calme et accueillante. Pourquoi : elle veut l'allure d'une vraie photo, pas d'une publicité lisse."),
        B("She generates, finds the image too dark, and changes only the light line to bright morning light. Why: by changing one part, she knows the improvement comes from that part and can reuse the lesson.",
          "Elle génère, trouve l'image trop sombre, et change seulement la ligne de lumière pour une lumière matinale vive. Pourquoi : en changeant une seule partie, elle sait d'où vient l'amélioration et peut réutiliser la leçon."),
      ],
    },
    mistakes: [
      { wrong: B("Writing one long poetic sentence in which the decisions are buried under adjectives.",
          "Écrire une longue phrase poétique où les décisions sont noyées sous les adjectifs."),
        fix: B("Split it into short phrases, one per decision. Keep natural language if you prefer, but make sure each of the eight parts is present.",
          "Découpez-la en courtes expressions, une par décision. Gardez une langue naturelle si vous préférez, mais vérifiez que chacune des huit parties est présente.") },
      { wrong: B("Putting the style or the quality words first and the subject at the end.",
          "Placer le style ou les mots de qualité en tête et le sujet à la fin."),
        fix: B("Start with the subject and its action. Style and finishing touches come last, once the content is fixed.",
          "Commencez par le sujet et son action. Le style et les finitions viennent en dernier, une fois le contenu fixé.") },
      { wrong: B("Changing four parts at once after a disappointing result.",
          "Changer quatre parties d'un coup après un résultat décevant."),
        fix: B("Change one part, regenerate, compare. Otherwise you never know which change helped and which one harmed.",
          "Changez une partie, relancez, comparez. Sinon, vous ne saurez jamais quel changement a aidé et lequel a nui.") },
    ],
    recap: [
      B("An image prompt is a series of decisions, not a list of wishes.", "Un prompt d'image est une suite de décisions, pas une liste de souhaits."),
      B("Eight parts: subject, composition, framing, light, palette, medium, style, mood.", "Huit parties : sujet, composition, cadrage, lumière, palette, médium, style, ambiance."),
      B("Put the subject first and describe it with concrete nouns.", "Placez le sujet en tête et décrivez-le par des noms concrets."),
      B("Remove the words that describe nothing visible.", "Retirez les mots qui ne décrivent rien de visible."),
      B("Edit one part at a time to learn what each one does.", "Modifiez une partie à la fois pour apprendre ce que fait chacune."),
    ],
    further: B("Build a personal reference sheet: for each of the eight parts, list ten words or phrases that gave you good results, with an example image. Then read the prompting guide in the official Midjourney documentation and compare its advice with your sheet.",
      "Construisez une fiche de référence personnelle : pour chacune des huit parties, listez dix mots ou expressions qui vous ont donné de bons résultats, avec une image d'exemple. Lisez ensuite le guide de prompt de la documentation officielle de Midjourney et comparez ses conseils à votre fiche."),
    more: [
      { q: B("Clara writes 'in the style of a famous living illustrator'. What is the better habit?",
          "Clara écrit « dans le style d'un illustrateur vivant célèbre ». Quelle habitude vaut mieux ?"),
        options: [
          B("Keep the name, since a precise reference always helps the model", "Garder le nom, puisqu'une référence précise aide toujours le modèle"),
          B("Describe the traits: technique, line, palette, texture, era", "Décrire les traits : technique, trait, palette, texture, époque"),
          B("Replace the name with the words unique and original", "Remplacer le nom par les mots unique et original"),
        ],
        answer: 1,
        why: B("Describing traits gives control and avoids imitating a living artist's personal style, an ethical and sometimes legal issue covered later in this course.",
          "Décrire les traits donne la maîtrise et évite d'imiter le style personnel d'un artiste vivant, une question éthique et parfois juridique traitée plus loin dans cette formation.") },
      { q: B("The subject is right but the image feels like an advert. Which part do you look at first?",
          "Le sujet est juste mais l'image fait publicité. Quelle partie regardez-vous d'abord ?"),
        options: [
          B("The medium and style, toward natural editorial photography", "Le médium et le style, vers une photographie éditoriale naturelle"),
          B("The subject, by adding more objects around the teapot", "Le sujet, en ajoutant des objets autour de la théière"),
          B("The aspect ratio, by making the image narrower", "Le format, en rendant l'image plus étroite"),
        ],
        answer: 0,
        why: B("The advertising look comes from the rendering: glossy light, perfect surfaces. The medium and style lines set that rendering, so they are the first to adjust.",
          "L'allure publicitaire vient du rendu : lumière brillante, surfaces parfaites. Les lignes médium et style fixent ce rendu, ce sont donc les premières à ajuster.") },
    ],
  },

  [deepKey(M1, 'im-framing')]: {
    intro: B("The same teapot can sell a texture, tell a story or carry a headline, depending on how it is framed. This lesson gives you the vocabulary photographers use and generators understand: shot sizes, camera angles, focal lengths and apertures, and composition rules such as the rule of thirds, symmetry, leading lines and negative space. You will learn to choose a framing from the use of the image, and you will produce three framings of a Maison Oolong teapot for three real uses.",
      "Une même théière peut vendre une matière, raconter une histoire ou porter un titre, selon son cadrage. Ce cours vous donne le vocabulaire des photographes, que les générateurs comprennent : échelles de plan, angles de prise de vue, focales et ouvertures, et règles de composition comme la règle des tiers, la symétrie, les lignes directrices et l'espace négatif. Vous apprendrez à choisir un cadrage d'après l'usage de l'image, et vous produirez trois cadrages d'une théière de Maison Oolong pour trois usages réels."),
    concepts: [
      { term: B('Shot size', 'Échelle de plan'),
        def: B("How much of the subject and its surroundings is shown: extreme close-up, close-up, medium shot, wide shot. It decides what the image is about.",
          "La part du sujet et de son environnement que l'on montre : très gros plan, gros plan, plan moyen, plan large. Elle décide de quoi parle l'image.") },
      { term: B('Camera angle', 'Angle de prise de vue'),
        def: B("The height and direction of the viewpoint: eye level for neutrality, low angle for presence, high angle or top-down for overview and flat lays.",
          "La hauteur et la direction du point de vue : hauteur d'oeil pour la neutralité, contre-plongée pour la présence, plongée ou vue de dessus pour la vue d'ensemble et la mise à plat.") },
      { term: B('Focal length', 'Focale'),
        def: B("Given in millimetres, it suggests a perspective: wide (24mm) shows space, standard (50mm) looks natural, telephoto (85mm and more) isolates and compresses.",
          "Exprimée en millimètres, elle suggère une perspective : grand angle (24 mm) pour l'espace, standard (50 mm) pour le naturel, téléobjectif (85 mm et plus) pour isoler et écraser les plans.") },
      { term: B('Depth of field', 'Profondeur de champ'),
        def: B("The zone that looks sharp. A wide aperture such as f/1.8 blurs the background and isolates the subject; f/8 to f/11 keeps the whole scene sharp.",
          "La zone qui paraît nette. Une grande ouverture comme f/1.8 floute le fond et isole le sujet ; de f/8 à f/11, toute la scène reste nette.") },
      { term: B('Negative space', 'Espace négatif'),
        def: B("The calm, empty area of an image. It is not wasted: it gives the subject air and makes room for a headline or a logo.",
          "La zone calme et vide d'une image. Elle n'est pas perdue : elle donne de l'air au sujet et fait de la place pour un titre ou un logo.") },
    ],
    walkthrough: {
      title: B("Clara plans the framings of three images for Maison Oolong before generating any of them.",
        "Clara prévoit les cadrages de trois images pour Maison Oolong avant d'en générer aucune."),
      steps: [
        B("She lists the uses: a product detail for the online shop, a square social post, a website banner. Why: the use dictates the framing, and deciding it first avoids badly cropping a good image later.",
          "Elle liste les usages : un détail produit pour la boutique en ligne, un post carré pour les réseaux, une bannière de site. Pourquoi : l'usage dicte le cadrage, et le décider d'abord évite de mal recadrer une bonne image ensuite."),
        B("For the product detail, she asks for an extreme close-up, macro lens, very shallow depth of field, on the crackled glaze of a cup. Why: the close-up sells the material, which is what makes her cups special.",
          "Pour le détail produit, elle demande un très gros plan, objectif macro, très faible profondeur de champ, sur l'émail craquelé d'une tasse. Pourquoi : le gros plan vend la matière, ce qui rend ses tasses singulières."),
        B("For the square post, she asks for a medium shot at eye level, 50mm, the teapot on the left third and a cup on the right. Why: a natural lens and a balanced layout read well at small size in a feed.",
          "Pour le post carré, elle demande un plan moyen à hauteur d'oeil, 50 mm, la théière sur le tiers gauche et une tasse à droite. Pourquoi : une focale naturelle et une disposition équilibrée se lisent bien en petit dans un fil."),
        B("For the banner, she asks for a wide shot, the subject on the right third, a calm blurred wall on the left, and a wide format. Why: the home page headline will sit on the left.",
          "Pour la bannière, elle demande un plan large, le sujet sur le tiers droit, un mur calme et flou à gauche, et un format large. Pourquoi : le titre de la page d'accueil se placera à gauche."),
        B("She keeps the same light, palette and style lines in all three prompts. Why: the three images will appear together, and only the framing should change from one to the next.",
          "Elle garde les mêmes lignes de lumière, de palette et de style dans les trois prompts. Pourquoi : les trois images apparaîtront ensemble, et seul le cadrage doit changer de l'une à l'autre."),
      ],
    },
    mistakes: [
      { wrong: B("Asking for a nice composition without a single framing term.",
          "Demander une jolie composition sans aucun terme de cadrage."),
        fix: B("Name the shot size, the angle and the position of the subject. Nice is not a decision; subject on the right third at eye level is one.",
          "Nommez l'échelle de plan, l'angle et la place du sujet. Joli n'est pas une décision ; sujet sur le tiers droit à hauteur d'oeil en est une.") },
      { wrong: B("Generating a square image, then cropping it into a wide banner.",
          "Générer une image carrée, puis la recadrer en bannière large."),
        fix: B("Set the aspect ratio at generation and compose for it. A crop loses resolution and often cuts the subject.",
          "Fixez le format dès la génération et composez pour lui. Un recadrage perd de la résolution et coupe souvent le sujet.") },
      { wrong: B("Using lens numbers as decoration, without knowing what they change.",
          "Employer des chiffres d'objectif comme décoration, sans savoir ce qu'ils changent."),
        fix: B("Choose a focal length for the perspective you want and an aperture for the blur you want, then check that the image matches.",
          "Choisissez une focale pour la perspective voulue et une ouverture pour le flou voulu, puis vérifiez que l'image correspond.") },
    ],
    recap: [
      B("Choose the framing from the use of the image.", "Choisissez le cadrage d'après l'usage de l'image."),
      B("Name the shot size, the angle and the position of the subject explicitly.", "Nommez explicitement l'échelle de plan, l'angle et la place du sujet."),
      B("Focal length and aperture are read as a look, not simulated as optics.", "Focale et ouverture sont lues comme une allure, pas simulées comme une optique."),
      B("Leave negative space wherever text will go.", "Laissez de l'espace négatif partout où ira du texte."),
    ],
    further: B("Collect ten photographs you admire (book covers, magazine pages, posters) and describe each one with the vocabulary of this lesson: shot size, angle, likely focal length, composition rule. Use these descriptions as framing lines in your next prompts and compare.",
      "Rassemblez dix photographies que vous admirez (couvertures de livres, pages de magazines, affiches) et décrivez chacune avec le vocabulaire de ce cours : échelle de plan, angle, focale probable, règle de composition. Servez-vous de ces descriptions comme lignes de cadrage dans vos prochains prompts, et comparez."),
    more: [
      { q: B("Clara wants a flat lay of tea tins, leaves and a cup for her shop page. Which angle does she ask for?",
          "Clara veut une mise à plat de boîtes, de feuilles et d'une tasse pour sa boutique. Quel angle demande-t-elle ?"),
        options: [
          B("A low angle, to give the objects more presence", "Une contre-plongée, pour donner plus de présence aux objets"),
          B("Top-down, looking straight down at the arranged objects", "Une vue de dessus, droit sur les objets disposés"),
          B("Eye level, with a long telephoto lens", "Une hauteur d'oeil, avec un long téléobjectif"),
        ],
        answer: 1,
        why: B("A flat lay is by definition seen from directly above: the objects are arranged on a surface like a layout. Other angles show their sides and lose the graphic arrangement.",
          "Une mise à plat se voit par définition du dessus : les objets sont disposés sur une surface comme une mise en page. Les autres angles montrent leurs côtés et perdent la composition graphique.") },
      { q: B("Why ask for f/1.8 in a product close-up of a cup?",
          "Pourquoi demander f/1.8 pour un gros plan produit d'une tasse ?"),
        options: [
          B("To make the whole image brighter", "Pour rendre toute l'image plus lumineuse"),
          B("To keep every element sharp from front to back", "Pour garder chaque élément net de l'avant à l'arrière"),
          B("To blur the background and isolate the cup", "Pour flouter le fond et isoler la tasse"),
        ],
        answer: 2,
        why: B("A wide aperture means a shallow depth of field: the cup stays sharp and the background melts away, which focuses attention on the product.",
          "Une grande ouverture donne une faible profondeur de champ : la tasse reste nette et le fond se fond, ce qui concentre l'attention sur le produit.") },
    ],
  },

  [deepKey(M1, 'im-light')]: {
    intro: B("Light and colour carry most of the feeling of an image and most of a brand's identity. This lesson teaches you to describe light by three properties (direction, quality, temperature), to name classic lighting setups the model knows, to set a palette of three to five colours with roles, and to name the materials that light reveals. You will light the same Maison Oolong scene three ways and keep one light line as the reference for the whole series.",
      "La lumière et la couleur portent l'essentiel du sentiment d'une image et de l'identité d'une marque. Ce cours vous apprend à décrire la lumière par trois propriétés (direction, qualité, température), à nommer les éclairages classiques que le modèle connaît, à fixer une palette de trois à cinq couleurs avec leurs rôles, et à nommer les matières que la lumière révèle. Vous éclairerez la même scène de Maison Oolong de trois façons et garderez une ligne de lumière comme référence pour toute la série."),
    concepts: [
      { term: B('Direction', 'Direction'),
        def: B("Where light comes from: side light reveals texture, backlight outlines edges and steam, front light flattens, top light hardens shadows.",
          "D'où vient la lumière : latérale, elle révèle la texture ; en contre-jour, elle dessine contours et vapeur ; de face, elle aplatit ; du dessus, elle durcit les ombres.") },
      { term: B('Quality', 'Qualité'),
        def: B("Soft light comes from a large source (overcast sky, window, softbox) and gives gentle shadows; hard light comes from a small source (sun, bare bulb) and gives crisp shadows.",
          "La lumière douce vient d'une grande source (ciel couvert, fenêtre, boîte à lumière) et donne des ombres légères ; la lumière dure vient d'une petite source (soleil, ampoule nue) et donne des ombres nettes.") },
      { term: B('Colour temperature', 'Température de couleur'),
        def: B("The warmth or coolness of light: golden hour and candlelight are warm, overcast mornings and shade are cool. It sets the mood before any colour is chosen.",
          "La chaleur ou la froideur de la lumière : l'heure dorée et la bougie sont chaudes, le matin couvert et l'ombre sont froids. Elle installe l'ambiance avant le choix des couleurs.") },
      { term: B('Palette with roles', 'Palette avec rôles'),
        def: B("Three to five colours: one dominant, one or two secondary, one accent. The roles tell the model how much of each colour to use.",
          "Trois à cinq couleurs : une dominante, une ou deux secondaires, un accent. Les rôles disent au modèle quelle part donner à chaque couleur.") },
      { term: B('Low-key and high-key', 'Low-key et high-key'),
        def: B("Low-key images are dark with strong contrast; high-key images are bright with few shadows. Each is a deliberate mood, not a flaw to fix.",
          "Les images low-key sont sombres et contrastées ; les images high-key sont claires, avec peu d'ombres. Chacune est une ambiance voulue, pas un défaut à corriger.") },
    ],
    walkthrough: {
      title: B("Clara defines the house light of Maison Oolong, the one every future image will share.",
        "Clara définit la lumière maison de Maison Oolong, celle que partageront toutes les images à venir."),
      steps: [
        B("She looks at photos of her shop at different hours and notices the best light: late afternoon, from the large window on the left, soft and warm. Why: describing a light she has observed is more reliable than inventing one.",
          "Elle regarde des photos de sa boutique à différentes heures et repère la meilleure lumière : fin d'après-midi, par la grande fenêtre de gauche, douce et chaude. Pourquoi : décrire une lumière observée est plus fiable qu'en inventer une."),
        B("She writes it as one line: soft late afternoon window light from the left, warm, gentle shadows to the right. Why: direction, quality and temperature are all present, so the model has no default to fill in.",
          "Elle l'écrit en une ligne : douce lumière de fenêtre de fin d'après-midi venant de la gauche, chaude, ombres légères vers la droite. Pourquoi : direction, qualité et température sont présentes, le modèle n'a aucun vide à combler."),
        B("She sets her palette with roles: sage green dominant, cream and warm oak secondary, terracotta accent. Why: these are the colours of her shop front and packaging, so the images will match the real brand.",
          "Elle fixe sa palette avec des rôles : vert sauge dominant, crème et chêne chaud secondaires, terre cuite en accent. Pourquoi : ce sont les couleurs de sa devanture et de ses emballages, les images s'accorderont à la vraie marque."),
        B("She generates the same tea scene under her house light, under hard noon sun and under backlight. Why: the comparison confirms that her chosen light, not chance, makes the images feel like her shop.",
          "Elle génère la même scène sous sa lumière maison, sous un soleil dur de midi et en contre-jour. Pourquoi : la comparaison confirme que c'est la lumière choisie, et non le hasard, qui donne aux images l'air de sa boutique."),
        B("She saves the light line and the palette line in a document called Maison Oolong image rules. Why: these two lines will be pasted into every prompt, the first step toward the coherent series studied later in this course.",
          "Elle enregistre la ligne de lumière et la ligne de palette dans un document intitulé Règles d'image Maison Oolong. Pourquoi : ces deux lignes seront collées dans chaque prompt, premier pas vers la série cohérente étudiée plus loin dans cette formation."),
      ],
    },
    mistakes: [
      { wrong: B("Writing good lighting, nice colours or realistic.",
          "Écrire bon éclairage, jolies couleurs ou réaliste."),
        fix: B("Name the direction, the quality and the temperature of the light, and a palette with roles. Each vague word leaves a default in place.",
          "Nommez la direction, la qualité et la température de la lumière, et une palette avec des rôles. Chaque mot vague laisse un choix par défaut en place.") },
      { wrong: B("Giving a list of eight colours with no hierarchy.",
          "Donner une liste de huit couleurs sans hiérarchie."),
        fix: B("Keep three to five colours and say which one dominates and which one is an accent. A palette without roles turns into confetti.",
          "Gardez trois à cinq couleurs et dites laquelle domine et laquelle sert d'accent. Une palette sans rôles tourne aux confettis.") },
      { wrong: B("Changing the light from one brand image to the next.",
          "Changer de lumière d'une image de marque à l'autre."),
        fix: B("Choose a house light and reuse its exact wording. Inside a series, vary the subject and the framing, not the light.",
          "Choisissez une lumière maison et réutilisez sa formulation exacte. Dans une série, variez le sujet et le cadrage, pas la lumière.") },
    ],
    recap: [
      B("Describe light by direction, quality and temperature.", "Décrivez la lumière par sa direction, sa qualité et sa température."),
      B("Named setups such as rim light, softbox or low-key are read as visual looks.", "Les éclairages nommés, comme rim light, boîte à lumière ou low-key, sont lus comme des allures."),
      B("A palette needs roles: dominant, secondary, accent.", "Une palette a besoin de rôles : dominante, secondaire, accent."),
      B("Name the materials so that light has something to reveal.", "Nommez les matières pour que la lumière ait quelque chose à révéler."),
      B("Keep one house light line for a coherent series.", "Gardez une seule ligne de lumière maison pour une série cohérente."),
    ],
    further: B("Study the lighting of three product photographs you like and write, for each, a single light line using the three properties. Test those lines on your own scene with a fixed seed: you are building a library of lights you can reuse.",
      "Étudiez l'éclairage de trois photographies produit que vous aimez et écrivez, pour chacune, une seule ligne de lumière avec les trois propriétés. Testez ces lignes sur votre propre scène avec une seed fixe : vous constituez une bibliothèque de lumières réutilisables."),
    more: [
      { q: B("The steam above Clara's teapot is invisible in the image. Which light makes it visible?",
          "La vapeur au-dessus de la théière de Clara est invisible sur l'image. Quelle lumière la rend visible ?"),
        options: [
          B("Flat overhead light, spread evenly", "Une lumière plate du dessus, répartie également"),
          B("A front flash pointed straight at the teapot", "Un flash frontal pointé droit sur la théière"),
          B("Backlight against a darker background", "Un contre-jour sur un fond plus sombre"),
        ],
        answer: 2,
        why: B("Steam is made visible by light passing through it toward the viewer, against a darker area. Front or flat light washes it out.",
          "La vapeur devient visible quand la lumière la traverse vers le spectateur, devant une zone plus sombre. Une lumière frontale ou plate l'efface.") },
      { q: B("Clara's palette is right but the image feels gloomy. Which change keeps the palette?",
          "La palette de Clara est juste mais l'image paraît morose. Quel changement garde la palette ?"),
        options: [
          B("Move from low-key to high-key lighting, brighter and airier", "Passer d'un éclairage low-key à high-key, plus clair et aérien"),
          B("Replace sage green with a bright yellow as the dominant", "Remplacer le vert sauge par un jaune vif en dominante"),
          B("Remove the palette line from the prompt entirely", "Retirer complètement la ligne de palette du prompt"),
        ],
        answer: 0,
        why: B("Gloom here comes from the lighting key, not the colours. A high-key light brightens the scene while the same palette stays in place.",
          "La morosité vient ici de la clé d'éclairage, pas des couleurs. Une lumière high-key éclaircit la scène tandis que la même palette reste en place.") },
    ],
  },
}

/* ================================================================== */
/* MODULE 2 · MIDJOURNEY EN PROFONDEUR                                 */
/* ================================================================== */

const M2 = 'im-m2'

const MJ: Level[] = []
const MJ_ENRICH: Record<string, Enrichment> = {}
const MJ_DEEP: Record<string, Deepening> = {}

/* ================================================================== */
/* LES MODULES DE LA PARTIE A                                          */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M1, track: 'course', glyph: 'frame', tint: '#9333ea', at: [12, 82], levels: SEE,
    title: B('Understand and describe an image', 'Comprendre et décrire une image'),
    blurb: B('How a generator turns noise into an image, the eight parts of an image prompt, framing and lenses, light, colour and material.',
      "Comment un générateur change du bruit en image, les huit parties d'un prompt d'image, cadrage et focales, lumière, couleur et matière."),
  },
  {
    id: M2, track: 'course', glyph: 'layers', tint: '#a855f7', at: [30, 66], levels: MJ,
    title: B('Midjourney in depth', 'Midjourney en profondeur'),
    blurb: B('The grid and the gallery, the key parameters, style and character references, then varying, editing and upscaling.',
      'La grille et la galerie, les paramètres clés, les références de style et de personnage, puis varier, retoucher et agrandir.'),
  },
]

export const IMAGES_A: CoursePart = {
  modules: MODULES,
  enrich: { ...SEE_ENRICH, ...MJ_ENRICH },
  deep: { ...SEE_DEEP, ...MJ_DEEP },
}
