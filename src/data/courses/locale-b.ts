// LE COURS « L'IA en local, open source et hors ligne », PARTIE B · voir ./types et ./index.
//
// LES MODULES 3 ET 4 · les images, la vidéo et l'audio en local, puis la
// sécurité, l'entretien et la combinaison du local et du cloud.
//
// UN SEUL FIL ROUGE · le « Studio Haliotis », un studio de communication
// fictif de cinq personnes, qui travaille pour des clients sous accord de
// confidentialité, dont la « Coopérative des Marais », une coopérative
// ostréicole tout aussi fictive. Malo, le graphiste (fictif), installe et
// fait tourner les outils sur le poste du studio : une tour équipée d'une
// carte graphique NVIDIA, et un Mac Apple Silicon. Une règle tient les deux
// modules : un fichier client ne quitte pas la machine sans qu'on l'ait
// décidé, par écrit.
//
// CE QUE LE COURS AFFIRME, ET CE QU'IL S'INTERDIT. Il s'en tient aux principes
// stables (graphe de nœuds, familles de modèles, résolution native, licences
// des poids, brouillons vidéo, préparation audio, diarisation, provenance et
// empreintes, environnements séparés, classification des données). Les
// versions, options, profils mémoire, temps de rendu, prix et conditions des
// fournisseurs bougent : le cours renvoie aux README et pages officielles
// (ComfyUI, Black Forest Labs, Stability AI, Wan, Wan2GP, whisper.cpp,
// Ollama, Hugging Face) et aux sources officielles (CNIL, ANSSI), sans chiffre
// ni seuil inventé.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 3 · IMAGES ET VIDÉO EN LOCAL                                 */
/* ================================================================== */

const M3 = 'lo-m3'

const MEDIA: Level[] = [
  {
    id: 'lo-comfyui',
    master: 'tools',
    minutes: 12,
    title: B('Installing ComfyUI and understanding nodes', 'Installer ComfyUI et comprendre les nœuds'),
    learn: B(
      'You will install ComfyUI, run its default workflow and read each node as one step of image generation.',
      'Vous saurez installer ComfyUI, lancer son workflow par défaut et lire chaque nœud comme une étape de la génération.',
    ),
    act: B('Install ComfyUI on the Studio Haliotis workstation and trace the default workflow from checkpoint to image.',
      "Installez ComfyUI sur le poste du Studio Haliotis et suivez le workflow par défaut, du checkpoint à l'image."),
    steps: [
      B('Install ComfyUI Desktop, the portable Windows build or a git clone in a Python virtual environment, as its README says.',
        'Installez ComfyUI Desktop, la version portable Windows ou un clone git dans un environnement virtuel Python, selon le README.'),
      B('Place one checkpoint in models/checkpoints, start ComfyUI and open its local address (127.0.0.1) in the browser.',
        'Placez un checkpoint dans models/checkpoints, lancez ComfyUI et ouvrez son adresse locale (127.0.0.1) dans le navigateur.'),
      B('Follow the default graph: Load Checkpoint, two CLIP Text Encode, Empty Latent Image, KSampler, VAE Decode, Save Image.',
        'Suivez le graphe par défaut : Load Checkpoint, deux CLIP Text Encode, Empty Latent Image, KSampler, VAE Decode, Save Image.'),
      B('Change one input at a time (seed, steps, size), queue the run, then save the workflow as a named JSON file.',
        'Changez une entrée à la fois (seed, steps, taille), lancez le rendu, puis enregistrez le workflow en JSON nommé.'),
    ],
    trap: B(
      'Installing every custom node a downloaded workflow asks for: each one is Python code that runs with your rights on the machine.',
      "Installer tous les nœuds personnalisés qu'un workflow téléchargé réclame : chacun est du code Python qui s'exécute avec vos droits.",
    ),
    quiz: {
      q: B('You switch to an SDXL checkpoint and faces come out distorted at 512 x 512. What do you change first?',
        'Vous passez à un checkpoint SDXL et les visages sortent déformés en 512 x 512. Que changez-vous d\'abord ?'),
      options: [
        B('Raise the KSampler steps until the faces turn out clean', 'Augmenter les steps du KSampler pour obtenir des visages nets'),
        B('Set Empty Latent Image to the size SDXL expects', 'Régler Empty Latent Image sur la taille attendue par SDXL'),
        B('Add "beautiful face, detailed" to the positive prompt', 'Ajouter « beau visage, détaillé » au prompt positif'),
      ],
      answer: 1,
      why: B(
        'Each model has a native resolution, the one it was trained at. SDXL works around 1024 pixels per side; far below, composition and faces break. Neither steps nor quality words fix a size the model does not know.',
        "Chaque modèle a une résolution native, celle de son entraînement. SDXL travaille autour de 1024 pixels de côté ; bien en dessous, composition et visages se défont. Ni steps ni mots de qualité ne corrigent cela.",
      ),
    },
    badge: B('Reads a ComfyUI graph', 'Lit un graphe ComfyUI'),
  },
  {
    id: 'lo-sd-flux',
    master: 'analysis',
    minutes: 12,
    title: B('Generating images with Stable Diffusion and Flux', 'Générer des images avec Stable Diffusion et Flux'),
    learn: B(
      'You will choose between SD 1.5, SDXL and Flux, load the right files and set the sampler to suit each model family.',
      'Vous saurez choisir entre SD 1.5, SDXL et Flux, charger les bons fichiers et régler le sampler selon la famille du modèle.',
    ),
    act: B('Produce the same Studio Haliotis visual with SDXL and with Flux, and compare quality, speed and licence.',
      'Produisez le même visuel du Studio Haliotis avec SDXL puis avec Flux, et comparez qualité, vitesse et licence.'),
    steps: [
      B('Read the model page first: family, native resolution, advised sampler and CFG, licence, required files.',
        "Lisez d'abord la page du modèle : famille, résolution native, sampler et CFG conseillés, licence, fichiers requis."),
      B('For SDXL, write a descriptive prompt and a short negative prompt, at native size, with the CFG the model card advises.',
        'Pour SDXL, écrivez un prompt descriptif et un court prompt négatif, à la taille native, avec la CFG conseillée par la fiche.'),
      B('For Flux, load the diffusion model, its text encoders and its VAE, write full sentences and set the guidance.',
        'Pour Flux, chargez le modèle de diffusion, ses encodeurs de texte et son VAE, écrivez des phrases et réglez la guidance.'),
      B('Fix the seed, compare both outputs side by side, and note time per image and the licence of each model.',
        'Fixez la seed, comparez les deux sorties côte à côte, et notez le temps par image et la licence de chaque modèle.'),
    ],
    trap: B(
      'Using Flux.1 [dev] for a client without reading its licence: the weights of [dev] and [schnell] are not released under the same terms.',
      'Employer Flux.1 [dev] pour un client sans lire sa licence : les poids de [dev] et de [schnell] ne sont pas publiés aux mêmes conditions.',
    ),
    quiz: {
      q: B('With Flux dev, you add a long negative prompt against blur, and nothing changes. Why?',
        'Avec Flux dev, vous ajoutez un long prompt négatif contre le flou, et rien ne change. Pourquoi ?'),
      options: [
        B('The negative prompt only acts once the resolution is raised', "Le prompt négatif n'agit qu'après une hausse de la résolution"),
        B('Flux needs the negative to be placed before the positive', 'Flux exige que le négatif soit placé avant le prompt positif'),
        B('At CFG 1, as Flux dev is usually run, the negative is unused', "À CFG 1, réglage habituel de Flux dev, le négatif n'est pas employé"),
      ],
      answer: 2,
      why: B(
        'Flux dev is guidance-distilled: it runs at CFG 1 and is steered by a separate guidance value. At CFG 1 the sampler skips the negative branch. Describe what you want in positive terms instead.',
        "Flux dev est distillé pour la guidance : il tourne à CFG 1 et se pilote par une valeur de guidance à part. À CFG 1, la branche négative n'est pas calculée. Décrivez plutôt ce que vous voulez.",
      ),
    },
    badge: B('Picks the right image model', "Choisit le bon modèle d'image"),
  },
  {
    id: 'lo-video-wan',
    master: 'planning',
    minutes: 11,
    title: B('Local video with Wan and Wan2GP', 'La vidéo locale avec Wan et Wan2GP'),
    learn: B(
      'You will generate short video clips locally with Wan, through Wan2GP or ComfyUI, within what your graphics card can hold.',
      'Vous saurez générer de courts clips vidéo en local avec Wan, via Wan2GP ou ComfyUI, dans les limites de votre carte graphique.',
    ),
    act: B('Animate a Studio Haliotis still image into a short clip, starting small, then raising quality step by step.',
      'Animez une image fixe du Studio Haliotis en un court clip, en commençant petit puis en montant la qualité par paliers.'),
    steps: [
      B('Read the hardware notes of Wan and Wan2GP for your VRAM, and pick the model size and memory profile they suggest.',
        'Lisez les indications matérielles de Wan et de Wan2GP pour votre VRAM, et prenez la taille de modèle et le profil conseillés.'),
      B('Install Wan2GP in its own Python environment as its README describes, then launch its local web interface.',
        'Installez Wan2GP dans son propre environnement Python, selon son README, puis lancez son interface web locale.'),
      B('Start with image-to-video, low resolution and short duration, and write the motion: who moves, how, and the camera.',
        'Commencez en image vers vidéo, en basse résolution et durée courte, et décrivez le mouvement : qui bouge, comment, la caméra.'),
      B('Keep the seed of the best draft, then raise resolution or steps one at a time and note how long each render takes.',
        'Gardez la seed du meilleur brouillon, puis montez résolution ou steps un à un en notant la durée de chaque rendu.'),
    ],
    trap: B(
      'Launching a long, high-resolution render first: on a consumer card it can run for a long time and teach you nothing until it ends.',
      "Lancer d'emblée un rendu long en haute résolution : sur une carte grand public, il peut tourner longtemps sans rien vous apprendre avant la fin.",
    ),
    quiz: {
      q: B('Your first Wan clip is blurry and the sailboat warps as it turns. What do you change first?',
        'Votre premier clip Wan est flou et le voilier se déforme en virant. Que changez-vous d\'abord ?'),
      options: [
        B('Describe one simple motion and one camera move in the prompt', 'Décrire un seul mouvement simple et un seul mouvement de caméra'),
        B('Double the duration so the model has time to settle the motion', 'Doubler la durée pour laisser au modèle le temps de stabiliser'),
        B('Switch to the largest model even if it exceeds your VRAM', 'Passer au plus grand modèle même s\'il dépasse votre VRAM'),
      ],
      answer: 0,
      why: B(
        'Video models handle simple, clearly described motion best. One subject, one action and one camera move reduce what must stay coherent across frames; a longer clip or an oversized model adds problems.',
        "Les modèles vidéo réussissent mieux un mouvement simple et clairement décrit. Un sujet, une action, un mouvement de caméra : moins de choses à garder cohérentes d'une image à l'autre.",
      ),
    },
    badge: B('Generates video locally', 'Génère de la vidéo en local'),
  },
  {
    id: 'lo-whisper',
    master: 'extraction',
    minutes: 10,
    title: B('Transcribing audio offline with Whisper', "Transcrire l'audio avec Whisper hors ligne"),
    learn: B(
      'You will transcribe a recording on your machine with Whisper, choose the model size and export subtitles.',
      'Vous saurez transcrire un enregistrement sur votre machine avec Whisper, choisir la taille du modèle et exporter des sous-titres.',
    ),
    act: B('Transcribe a confidential client interview for Studio Haliotis without the audio ever leaving the workstation.',
      "Transcrivez un entretien client confidentiel du Studio Haliotis sans que l'audio quitte jamais le poste."),
    steps: [
      B('Pick an implementation: openai-whisper (Python), faster-whisper, or whisper.cpp, which also runs well on Apple Silicon.',
        'Choisissez une implémentation : openai-whisper (Python), faster-whisper, ou whisper.cpp, efficace aussi sur Apple Silicon.'),
      B('Convert the recording with ffmpeg to the format the tool expects (16 kHz mono WAV for whisper.cpp).',
        "Convertissez l'enregistrement avec ffmpeg au format attendu par l'outil (WAV mono 16 kHz pour whisper.cpp)."),
      B('Set the language explicitly, test a small model on two minutes, then move up a size if names and figures are wrong.',
        "Fixez la langue explicitement, testez un petit modèle sur deux minutes, puis montez d'une taille si noms et chiffres sont faux."),
      B('Export text and SRT, then proofread against the audio: proper nouns, figures and passages Whisper may have invented.',
        'Exportez texte et SRT, puis relisez à l\'écoute : noms propres, chiffres et passages que Whisper aurait pu inventer.'),
    ],
    trap: B(
      'Trusting a fluent transcript: on silence or noise, Whisper can produce plausible sentences that nobody actually said.',
      "Se fier à une transcription fluide : sur un silence ou du bruit, Whisper peut produire des phrases plausibles que personne n'a dites.",
    ),
    quiz: {
      q: B('In a two-person interview, the transcript does not say who is speaking. What do you add?',
        "Dans un entretien à deux voix, la transcription n'indique pas qui parle. Qu'ajoutez-vous ?"),
      options: [
        B('A larger Whisper model, which labels the speakers itself', 'Un modèle Whisper plus grand, qui étiquette lui-même les voix'),
        B('A higher sampling rate, so that the two voices are told apart', "Une fréquence d'échantillonnage plus haute, pour séparer les voix"),
        B('A separate diarization step, for instance with pyannote', 'Une étape de diarisation à part, par exemple avec pyannote'),
      ],
      answer: 2,
      why: B(
        'Whisper transcribes words; it does not identify speakers. Diarization is a separate task, done by tools such as pyannote or pipelines like WhisperX. A bigger model only improves recognition.',
        "Whisper transcrit des mots ; il n'identifie pas les voix. La diarisation est une tâche à part, faite par pyannote ou des chaînes comme WhisperX. Un modèle plus grand n'améliore que la reconnaissance.",
      ),
    },
    badge: B('Transcribes offline', 'Transcrit hors ligne'),
  },
]

const MEDIA_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M3, 'lo-comfyui')]: {
    why: [
      B("ComfyUI shows image generation as it really is: a chain of separate operations. A checkpoint holds three parts (the diffusion model, the text encoder called CLIP, and the VAE). The text is encoded, the KSampler removes noise step by step in a compressed space called the latent, and the VAE decodes that latent into pixels. Each node is one of these operations, and each wire carries its result.",
        "ComfyUI montre la génération d'image telle qu'elle est : une chaîne d'opérations distinctes. Un checkpoint contient trois parties (le modèle de diffusion, l'encodeur de texte appelé CLIP, et le VAE). Le texte est encodé, le KSampler retire le bruit pas à pas dans un espace compressé, le latent, puis le VAE décode ce latent en pixels. Chaque nœud est l'une de ces opérations, chaque lien transporte son résultat."),
      B("This explicit graph is what makes ComfyUI reproducible. A workflow is a JSON file, and every PNG that ComfyUI saves carries its workflow in its metadata: loading the PNG back into ComfyUI restores the graph, seed included. A colleague can rerun exactly what you did on another machine, provided the same model files are present.",
        "Ce graphe explicite rend ComfyUI reproductible. Un workflow est un fichier JSON, et chaque PNG enregistré par ComfyUI porte son workflow dans ses métadonnées : recharger le PNG dans ComfyUI restaure le graphe, seed comprise. Un collègue peut refaire exactement ce que vous avez fait, sur une autre machine, si les mêmes fichiers de modèle y sont présents."),
      B("The price of this freedom is a risk. Custom nodes, installed by hand or through ComfyUI Manager, are Python code running with your user rights. On a workstation that holds client files, install only the nodes you need, from maintained repositories, and keep ComfyUI listening on 127.0.0.1 unless you have a reason to open it to the network.",
        "Le prix de cette liberté est un risque. Les nœuds personnalisés, installés à la main ou par ComfyUI Manager, sont du code Python qui s'exécute avec vos droits d'utilisateur. Sur un poste qui détient des fichiers clients, n'installez que les nœuds nécessaires, issus de dépôts entretenus, et laissez ComfyUI à l'écoute sur 127.0.0.1, sauf raison de l'ouvrir au réseau."),
    ],
    example: {
      context: B("Studio Haliotis, a fictional five-person communication studio, works for clients under non-disclosure agreements. Malo, its designer, has just installed ComfyUI and wants a first workflow he can hand to the team.",
        "Le Studio Haliotis, un studio de communication fictif de cinq personnes, travaille pour des clients sous accord de confidentialité. Malo, son graphiste, vient d'installer ComfyUI et veut un premier workflow à confier à l'équipe."),
      before: B("Workflow \"ultimate-realism.json\" downloaded from a forum.\nThe 14 missing custom nodes it asked for: all installed.\nSeed, steps, sampler, size and prompt changed together until something looked good.\nComfyUI started with --listen to use it from the meeting room.\nNothing written down.",
        "Workflow « ultimate-realism.json » téléchargé sur un forum.\nLes 14 nœuds personnalisés manquants qu'il réclamait : tous installés.\nSeed, steps, sampler, taille et prompt changés ensemble jusqu'à ce que quelque chose plaise.\nComfyUI lancé avec --listen pour s'en servir depuis la salle de réunion.\nRien de noté."),
      after: B("Workflow \"haliotis-base-sdxl-v1.json\", built from the default graph, no custom node:\nLoad Checkpoint: one SDXL model, downloaded from its official page, hash and licence noted.\nCLIP Text Encode (positive): subject, setting, light, framing, medium.\nCLIP Text Encode (negative): a short list of what to avoid.\nEmpty Latent Image: 1024 x 1024, the native size of SDXL.\nKSampler: seed fixed, steps and CFG as advised on the model card, one change per run.\nVAE Decode, then Save Image with the prefix haliotis/[client]/[date].\nComfyUI listens on 127.0.0.1 only. A Note node explains the graph in two sentences.",
        "Workflow « haliotis-base-sdxl-v1.json », construit à partir du graphe par défaut, sans nœud personnalisé :\nLoad Checkpoint : un seul modèle SDXL, téléchargé depuis sa page officielle, empreinte et licence notées.\nCLIP Text Encode (positif) : sujet, décor, lumière, cadrage, médium.\nCLIP Text Encode (négatif) : une courte liste de ce qu'il faut éviter.\nEmpty Latent Image : 1024 x 1024, la taille native de SDXL.\nKSampler : seed fixée, steps et CFG selon la fiche du modèle, un changement par rendu.\nVAE Decode, puis Save Image avec le préfixe haliotis/[client]/[date].\nComfyUI écoute sur 127.0.0.1 seulement. Un nœud Note explique le graphe en deux phrases."),
      takeaway: B("The first approach mixes unknown code, an open network port and five simultaneous changes: nothing can be reproduced or trusted. The second starts from the default graph, documents each node and stays reproducible for the whole team.",
        "La première approche mêle du code inconnu, un port ouvert au réseau et cinq changements simultanés : rien n'est reproductible ni sûr. La seconde part du graphe par défaut, documente chaque nœud et reste reproductible pour toute l'équipe."),
    },
    exercise: {
      goal: B("A documented base workflow for your own machine, saved as JSON, with three test images that each differ by a single setting.",
        "Un workflow de base documenté pour votre machine, enregistré en JSON, avec trois images de test qui ne diffèrent chacune que d'un réglage."),
      prompt: B("Positive prompt (CLIP Text Encode, positive): [SUBJECT], [SETTING], [LIGHT: SOURCE AND TIME OF DAY], [FRAMING], [MEDIUM: PHOTO, ILLUSTRATION, 3D].\nNegative prompt (CLIP Text Encode, negative): [WHAT TO AVOID, IN A FEW WORDS].\nEmpty Latent Image: [NATIVE WIDTH] x [NATIVE HEIGHT] given on your model card.\nKSampler: seed [FIXED NUMBER], steps [VALUE FROM THE MODEL CARD], cfg [VALUE FROM THE MODEL CARD], sampler [NAME], scheduler [NAME].\nSave Image prefix: [PROJECT]/[DATE].\nRun sheet: run 1 as is; run 2 changes only [ONE SETTING]; run 3 changes only [ANOTHER SETTING].\nNote node: [TWO SENTENCES SAYING WHAT THIS WORKFLOW IS FOR AND WHICH MODEL IT EXPECTS].",
        "Prompt positif (CLIP Text Encode, positif) : [SUJET], [DÉCOR], [LUMIÈRE : SOURCE ET MOMENT DE LA JOURNÉE], [CADRAGE], [MÉDIUM : PHOTO, ILLUSTRATION, 3D].\nPrompt négatif (CLIP Text Encode, négatif) : [CE QU'IL FAUT ÉVITER, EN QUELQUES MOTS].\nEmpty Latent Image : [LARGEUR NATIVE] x [HAUTEUR NATIVE] indiquées sur la fiche de votre modèle.\nKSampler : seed [NOMBRE FIXE], steps [VALEUR DE LA FICHE], cfg [VALEUR DE LA FICHE], sampler [NOM], scheduler [NOM].\nPréfixe de Save Image : [PROJET]/[DATE].\nFiche de rendus : rendu 1 tel quel ; rendu 2, seul [UN RÉGLAGE] change ; rendu 3, seul [UN AUTRE RÉGLAGE] change.\nNœud Note : [DEUX PHRASES QUI DISENT À QUOI SERT CE WORKFLOW ET QUEL MODÈLE IL ATTEND]."),
      check: [
        B("The workflow uses only default nodes, with no custom node installed", "Le workflow n'emploie que des nœuds par défaut, sans nœud personnalisé installé"),
        B("The latent size matches the native resolution given on the model card", "La taille du latent correspond à la résolution native indiquée sur la fiche du modèle"),
        B("Each run changes a single setting, noted next to its image", "Chaque rendu ne change qu'un réglage, noté à côté de son image"),
        B("Loading one of your saved PNGs restores the same graph and seed", "Recharger l'un de vos PNG enregistrés restaure le même graphe et la même seed"),
      ],
      bonus: B("Group the nodes into three labelled groups (text, sampling, output). Then ask a colleague to reproduce your third image from the JSON file alone: if they cannot, your Note is missing something.",
        "Rangez les nœuds en trois groupes nommés (texte, échantillonnage, sortie). Demandez ensuite à un collègue de reproduire votre troisième image à partir du seul fichier JSON : s'il n'y parvient pas, il manque quelque chose à votre Note."),
    },
    more: [
      { q: B("A colleague sends you a PNG made with ComfyUI and asks how it was done. What is the fastest reliable way to find out?",
          "Un collègue vous envoie un PNG fait avec ComfyUI et vous demande comment il a été obtenu. Quel est le moyen fiable le plus rapide ?"),
        options: [
          B("Ask them to write down every setting and value in an email", "Lui demander d'écrire chaque réglage et chaque valeur dans un e-mail"),
          B("Load the PNG in ComfyUI to restore its embedded workflow", "Charger le PNG dans ComfyUI pour restaurer son workflow intégré"),
          B("Run a captioning model on the image to guess the prompt used", "Faire décrire l'image par un modèle pour deviner le prompt employé"),
        ],
        answer: 1,
        why: B("ComfyUI writes the workflow into the metadata of the PNGs it saves. Loading the image restores the graph and its values, unless a tool or platform stripped the metadata on the way.",
          "ComfyUI écrit le workflow dans les métadonnées des PNG qu'il enregistre. Charger l'image restaure le graphe et ses valeurs, sauf si un outil ou une plateforme a retiré ces métadonnées en chemin.") },
      { q: B("A workflow needs a custom node from an unknown repository with no recent activity. What is the sound move?",
          "Un workflow exige un nœud personnalisé issu d'un dépôt inconnu et sans activité récente. Quelle est la conduite saine ?"),
        options: [
          B("Rebuild that step with default nodes, or drop the workflow", "Refaire cette étape avec des nœuds standard, ou renoncer au workflow"),
          B("Install it, since being listed in ComfyUI Manager means audited", "L'installer, puisqu'être listé dans ComfyUI Manager vaut audit"),
          B("Install it and run ComfyUI as administrator to avoid errors", "L'installer et lancer ComfyUI en administrateur pour éviter les erreurs"),
        ],
        answer: 0,
        why: B("A custom node is code running with your rights. Being listed is not a security review. When the node is not essential, rebuilding with standard nodes or giving up the workflow avoids running code you cannot vouch for.",
          "Un nœud personnalisé est du code qui tourne avec vos droits. Être listé n'est pas un audit de sécurité. Quand le nœud n'est pas indispensable, refaire l'étape avec des nœuds standard ou renoncer évite d'exécuter un code dont vous ne pouvez pas répondre.") },
    ],
  },

  [enrichKey(M3, 'lo-sd-flux')]: {
    why: [
      B("Stable Diffusion and Flux are both diffusion models, but they are neither built nor driven the same way. SD 1.5 and SDXL use CLIP text encoders that respond well to lists of keywords and to a negative prompt. Flux adds a large T5 text encoder that understands full sentences, so it follows long descriptions better and renders short text more reliably.",
        "Stable Diffusion et Flux sont tous deux des modèles de diffusion, mais ils ne sont ni construits ni pilotés de la même façon. SD 1.5 et SDXL emploient des encodeurs de texte CLIP qui répondent bien aux listes de mots-clés et au prompt négatif. Flux ajoute un grand encodeur de texte T5 qui comprend des phrases entières : il suit mieux les descriptions longues et rend plus sûrement un texte court."),
      B("Each family has its operating range. SD 1.5 targets about 512 pixels per side, SDXL about 1024; Flux dev, distilled for guidance, runs at CFG 1 with a separate guidance value, so its negative prompt has no effect. Outside these ranges, images degrade and no adjective compensates. The model card gives the expected settings: read it before the first run.",
        "Chaque famille a sa plage de fonctionnement. SD 1.5 vise environ 512 pixels de côté, SDXL environ 1024 ; Flux dev, distillé pour la guidance, tourne à CFG 1 avec une valeur de guidance à part, si bien que son prompt négatif n'agit pas. Hors de ces plages, l'image se dégrade et aucun adjectif ne compense. La fiche du modèle donne les réglages attendus : lisez-la avant le premier rendu."),
      B("The choice also depends on the machine and the licence. Flux is heavier than SDXL; reduced versions (fp8, quantized GGUF) fit more modest cards, at some cost in fidelity. Licences differ: Flux.1 [schnell] is under Apache 2.0, Flux.1 [dev] under a non-commercial licence, Stable Diffusion models under Stability AI licences. Read the terms on each model page.",
        "Le choix dépend aussi de la machine et de la licence. Flux est plus lourd que SDXL ; des versions réduites (fp8, GGUF quantifié) tiennent sur des cartes plus modestes, au prix d'un peu de fidélité. Les licences diffèrent : Flux.1 [schnell] est sous Apache 2.0, Flux.1 [dev] sous licence non commerciale, les modèles Stable Diffusion sous licences Stability AI. Lisez les conditions sur chaque page de modèle."),
    ],
    example: {
      context: B("Studio Haliotis must produce a banner for the Coopérative des Marais, a fictional oyster cooperative under NDA: an oyster table on a pontoon at dusk, with the word MARAIS painted on a crate.",
        "Le Studio Haliotis doit produire une bannière pour la Coopérative des Marais, une coopérative ostréicole fictive sous NDA : une table d'huîtres sur un ponton au crépuscule, avec le mot MARAIS peint sur une caisse."),
      before: B("Model: Flux.1 [dev], CFG 7, licence not read.\nPositive: oysters, wooden table, pontoon, sunset, crate, text MARAIS, masterpiece, best quality, 8k, ultra detailed\nNegative: blurry, bad text, deformed, ugly, watermark, lowres",
        "Modèle : Flux.1 [dev], CFG 7, licence non lue.\nPositif : huîtres, table en bois, ponton, coucher de soleil, caisse, texte MARAIS, chef-d'oeuvre, meilleure qualité, 8k, ultra détaillé\nNégatif : flou, mauvais texte, déformé, laid, filigrane, basse résolution"),
      after: B("Flux.1 [dev], licence read on its model page and checked against the job; CFG 1, guidance as advised on the model card, native size.\nPrompt: A rustic wooden table on a pontoon at dusk, covered with freshly opened oysters on crushed ice and two lemon halves. In the foreground, a weathered wooden crate with the word \"MARAIS\" painted in white capital letters. Warm low sun from the left, calm water and oyster beds in the soft-focus background. Documentary photograph, natural colours, slight film grain.\n\nSame scene for SDXL, CFG as advised, 1024 x 1024:\nrustic wooden table on a pontoon, opened oysters on crushed ice, lemon halves, weathered wooden crate, dusk, low warm sun from the left, oyster beds in the background, documentary photo, natural colours, slight film grain\nNegative (SDXL only): watermark, oversaturated, text artefacts",
        "Flux.1 [dev], licence lue sur sa page de modèle et confrontée à la commande ; CFG 1, guidance selon la fiche du modèle, taille native.\nPrompt : A rustic wooden table on a pontoon at dusk, covered with freshly opened oysters on crushed ice and two lemon halves. In the foreground, a weathered wooden crate with the word \"MARAIS\" painted in white capital letters. Warm low sun from the left, calm water and oyster beds in the soft-focus background. Documentary photograph, natural colours, slight film grain.\n(Le prompt reste en anglais : plusieurs modèles le suivent mieux ainsi.)\n\nMême scène pour SDXL, CFG conseillée, 1024 x 1024 :\nrustic wooden table on a pontoon, opened oysters on crushed ice, lemon halves, weathered wooden crate, dusk, low warm sun from the left, oyster beds in the background, documentary photo, natural colours, slight film grain\nNégatif (SDXL seulement) : watermark, oversaturated, text artefacts"),
      takeaway: B("The first prompt treats Flux like SDXL: keyword soup, quality labels, a CFG that does not suit it and a negative it ignores. The second writes sentences for Flux, keeps keywords and a negative for SDXL, and follows each model card.",
        "Le premier prompt traite Flux comme SDXL : mots-clés en vrac, étiquettes de qualité, une CFG qui ne lui convient pas et un négatif qu'il ignore. Le second écrit des phrases pour Flux, garde mots-clés et négatif pour SDXL, et suit la fiche de chaque modèle."),
    },
    exercise: {
      goal: B("One visual of your own produced with an SDXL model and a Flux model, each driven its own way, with a comparison table: fidelity, text, time per image, licence.",
        "Un visuel de votre choix produit avec un modèle SDXL et un modèle Flux, chacun piloté à sa manière, avec un tableau comparatif : fidélité, texte, temps par image, licence."),
      prompt: B("Need: [WHAT THE IMAGE IS FOR, FORMAT].\n\nFlux version (sentences, no negative, CFG 1, guidance [VALUE FROM THE MODEL CARD]):\n[THE SUBJECT IN ONE SENTENCE]. [THE SETTING AND THE FOREGROUND IN ONE SENTENCE]. [LIGHT: SOURCE, DIRECTION, TIME OF DAY]. [MEDIUM] with [2 OR 3 TECHNICAL TRAITS]. Text to render, if any: \"[SHORT WORD]\".\n\nSDXL version (keywords, CFG [VALUE FROM THE MODEL CARD], size [NATIVE SIZE]):\n[SUBJECT], [SETTING], [LIGHT], [FRAMING], [MEDIUM], [2 OR 3 TECHNICAL TRAITS]\nNegative: [3 TO 5 THINGS TO AVOID]\n\nComparison: seed [SAME NUMBER FOR BOTH], time per image [FLUX] and [SDXL], licence [FLUX] and [SDXL], text legible [YES OR NO].",
        "Besoin : [À QUOI SERT L'IMAGE, FORMAT].\n\nVersion Flux (phrases, sans négatif, CFG 1, guidance [VALEUR DE LA FICHE]) :\n[LE SUJET EN UNE PHRASE]. [LE DÉCOR ET LE PREMIER PLAN EN UNE PHRASE]. [LUMIÈRE : SOURCE, DIRECTION, MOMENT]. [MÉDIUM] avec [2 OU 3 TRAITS TECHNIQUES]. Texte à rendre, s'il y en a : « [MOT COURT] ».\n\nVersion SDXL (mots-clés, CFG [VALEUR DE LA FICHE], taille [TAILLE NATIVE]) :\n[SUJET], [DÉCOR], [LUMIÈRE], [CADRAGE], [MÉDIUM], [2 OU 3 TRAITS TECHNIQUES]\nNégatif : [3 À 5 CHOSES À ÉVITER]\n\nComparaison : seed [MÊME NOMBRE POUR LES DEUX], temps par image [FLUX] et [SDXL], licence [FLUX] et [SDXL], texte lisible [OUI OU NON]."),
      check: [
        B("The Flux prompt is written in sentences and has no negative prompt", "Le prompt Flux est écrit en phrases et n'a pas de prompt négatif"),
        B("The SDXL run uses the native size and the CFG given on its model card", "Le rendu SDXL emploie la taille native et la CFG indiquées sur sa fiche"),
        B("Both licences were read on the official model pages and noted", "Les deux licences ont été lues sur les pages officielles des modèles et notées"),
        B("The table compares fidelity to the brief, text and time per image", "Le tableau compare fidélité au brief, texte et temps par image"),
      ],
      bonus: B("If Flux does not fit your VRAM, test a quantized version (fp8, or GGUF through a custom node such as ComfyUI-GGUF, checked as in the previous lesson) and note what changes in time and detail.",
        "Si Flux ne tient pas dans votre VRAM, testez une version quantifiée (fp8, ou GGUF par un nœud personnalisé comme ComfyUI-GGUF, vérifié comme au cours précédent) et notez ce qui change en temps et en détail."),
    },
    more: [
      { q: B("You need an image with a short legible word and a scene described in three sentences. Which family do you try first?",
          "Il vous faut une image avec un mot court lisible et une scène décrite en trois phrases. Quelle famille essayez-vous d'abord ?"),
        options: [
          B("SD 1.5, because its small size makes it more precise", "SD 1.5, parce que sa petite taille le rend plus précis"),
          B("Any family at all, as long as the prompt ends with quality words", "N'importe laquelle, pourvu que le prompt se termine par des mots de qualité"),
          B("Flux, whose T5 encoder follows sentences and short text better", "Flux, dont l'encodeur T5 suit mieux les phrases et le texte court"),
        ],
        answer: 2,
        why: B("Flux pairs CLIP with a large T5 text encoder that handles full sentences, which helps for detailed scenes and short text. SD 1.5 is older and works at low resolution; quality words do not change a model's abilities.",
          "Flux associe CLIP à un grand encodeur T5 qui traite des phrases entières, ce qui aide pour les scènes détaillées et le texte court. SD 1.5 est plus ancien et travaille en basse résolution ; les mots de qualité ne changent pas les capacités d'un modèle.") },
      { q: B("Your SDXL images are fine at 1024 x 1024, but at 512 x 512 the composition falls apart. What explains it?",
          "Vos images SDXL sont bonnes en 1024 x 1024, mais en 512 x 512 la composition se défait. Qu'est-ce qui l'explique ?"),
        options: [
          B("SDXL was trained around 1024 pixels and degrades far below", "SDXL a été entraîné autour de 1024 pixels et se dégrade bien en dessous"),
          B("The SDXL VAE refuses any size smaller than one megapixel", "Le VAE de SDXL refuse toute taille inférieure à un mégapixel"),
          B("Small images get fewer steps, which the sampler cuts short", "Les petites images reçoivent moins de steps, que le sampler écourte"),
        ],
        answer: 0,
        why: B("A model works best near the resolution it was trained at. SDXL targets about one megapixel; at 512 pixels per side it composes poorly. Generate at native size, then reduce the image if you need it smaller.",
          "Un modèle travaille mieux près de la résolution de son entraînement. SDXL vise environ un mégapixel ; à 512 pixels de côté, il compose mal. Générez à la taille native, puis réduisez l'image s'il vous la faut plus petite.") },
    ],
  },

  [enrichKey(M3, 'lo-video-wan')]: {
    why: [
      B("Video adds a dimension: the model must produce many frames that stay coherent with one another. That is why it costs far more memory and time than an image, and why a simple, clearly described motion succeeds better than a busy scene. Wan, released by Alibaba under the Apache 2.0 licence, offers text-to-video and image-to-video in several sizes, from a small model to much larger ones.",
        "La vidéo ajoute une dimension : le modèle doit produire de nombreuses images qui restent cohérentes entre elles. C'est pourquoi elle coûte bien plus de mémoire et de temps qu'une image, et pourquoi un mouvement simple et clairement décrit réussit mieux qu'une scène chargée. Wan, publié par Alibaba sous licence Apache 2.0, propose le texte vers vidéo et l'image vers vidéo en plusieurs tailles, d'un petit modèle à de bien plus grands."),
      B("Wan2GP is an open-source interface published on GitHub and designed for graphics cards with little VRAM. It moves model parts between VRAM and RAM, can quantize them and offers memory profiles, so that larger models run on consumer cards, slowly. ComfyUI also supports Wan through dedicated nodes. In both cases, the project's hardware notes say what is realistic for your card.",
        "Wan2GP est une interface open source publiée sur GitHub, pensée pour les cartes graphiques à faible VRAM. Elle déplace des parties du modèle entre VRAM et RAM, peut les quantifier et propose des profils mémoire, pour que de plus grands modèles tournent sur des cartes grand public, lentement. ComfyUI prend aussi Wan en charge par des nœuds dédiés. Dans les deux cas, les notes matérielles du projet disent ce qui est réaliste pour votre carte."),
      B("The method is the draft. You first render short, low-resolution clips to judge composition and motion, keep the seed of the good one, then raise one parameter at a time. Image-to-video helps too: starting from a still you have already validated (made in ComfyUI, for example) fixes framing and style, and the model only has to animate.",
        "La méthode est celle du brouillon. Vous rendez d'abord des clips courts en basse résolution pour juger composition et mouvement, gardez la seed du bon, puis montez un paramètre à la fois. L'image vers vidéo aide aussi : partir d'une image fixe déjà validée (faite dans ComfyUI, par exemple) fixe cadrage et style, et le modèle n'a plus qu'à animer."),
    ],
    example: {
      context: B("For the Coopérative des Marais social media, Studio Haliotis wants a short loop: the banner scene with a slight movement. The footage must stay on the workstation until the client approves it.",
        "Pour les réseaux sociaux de la Coopérative des Marais, le Studio Haliotis veut une courte boucle : la scène de la bannière, avec un léger mouvement. Les images doivent rester sur le poste jusqu'à validation du client."),
      before: B("Text-to-video, maximum resolution, longest duration, largest model.\nPrompt: cinematic epic shot of oyster farmers working at sunset, boats arriving, seagulls flying, camera flying over the bay then zooming on the table, people laughing, 8k, masterpiece",
        "Texte vers vidéo, résolution maximale, durée la plus longue, plus grand modèle.\nPrompt : plan cinématographique épique d'ostréiculteurs au travail au coucher du soleil, bateaux qui arrivent, mouettes en vol, caméra qui survole la baie puis zoome sur la table, gens qui rient, 8k, chef-d'oeuvre"),
      after: B("Image-to-video, from the validated banner (haliotis/marais/banniere-v3.png).\nDraft settings: low resolution, short duration, seed fixed, memory profile advised by Wan2GP for the card.\nPrompt: The camera slowly pushes in towards the table of oysters. Light ripples move on the water in the background, a thin wisp of mist drifts from left to right. Nothing else moves. Calm, documentary feel.\nThen: same seed, higher resolution; then more steps if detail is lacking. Time of each render noted in the project sheet.",
        "Image vers vidéo, à partir de la bannière validée (haliotis/marais/banniere-v3.png).\nRéglages de brouillon : basse résolution, durée courte, seed fixée, profil mémoire conseillé par Wan2GP pour la carte.\nPrompt : La caméra avance lentement vers la table d'huîtres. De légers reflets bougent sur l'eau à l'arrière-plan, un mince voile de brume glisse de gauche à droite. Rien d'autre ne bouge. Ambiance calme, documentaire.\nEnsuite : même seed, résolution plus haute ; puis plus de steps si le détail manque. Durée de chaque rendu notée dans la fiche projet."),
      takeaway: B("The first request asks for many subjects, several camera moves and maximum settings at once: the render is long and the motion incoherent. The second animates a validated image with one camera move and two small motions, in draft first.",
        "La première demande réclame beaucoup de sujets, plusieurs mouvements de caméra et des réglages maximaux à la fois : rendu long, mouvement incohérent. La seconde anime une image validée, un mouvement de caméra et deux petits mouvements, en brouillon d'abord."),
    },
    exercise: {
      goal: B("A short local clip made from one of your still images, obtained through at least three drafts, with the settings and time of each render noted.",
        "Un court clip local tiré de l'une de vos images fixes, obtenu en au moins trois brouillons, avec les réglages et la durée de chaque rendu notés."),
      prompt: B("Mode: image-to-video, from [PATH OF YOUR VALIDATED IMAGE].\nModel and profile: [MODEL SIZE] with [MEMORY PROFILE ADVISED FOR YOUR VRAM].\nPrompt: The camera [ONE MOVE: SLOWLY PUSHES IN, PANS LEFT, STAYS STILL]. [MAIN SUBJECT] [ONE SIMPLE ACTION]. In the background, [ONE SMALL MOTION]. Nothing else moves. [MOOD IN TWO WORDS].\nDraft 1: [LOW RESOLUTION], [SHORT DURATION], seed [NUMBER].\nDraft 2: same seed, only [ONE CHANGED SETTING].\nDraft 3: same seed, only [ANOTHER CHANGED SETTING].\nLog: render time [MINUTES] for each draft, and what you saw.",
        "Mode : image vers vidéo, à partir de [CHEMIN DE VOTRE IMAGE VALIDÉE].\nModèle et profil : [TAILLE DU MODÈLE] avec [PROFIL MÉMOIRE CONSEILLÉ POUR VOTRE VRAM].\nPrompt : La caméra [UN MOUVEMENT : AVANCE LENTEMENT, PANORAMIQUE À GAUCHE, RESTE FIXE]. [SUJET PRINCIPAL] [UNE ACTION SIMPLE]. À l'arrière-plan, [UN PETIT MOUVEMENT]. Rien d'autre ne bouge. [AMBIANCE EN DEUX MOTS].\nBrouillon 1 : [BASSE RÉSOLUTION], [DURÉE COURTE], seed [NOMBRE].\nBrouillon 2 : même seed, seul [UN RÉGLAGE] change.\nBrouillon 3 : même seed, seul [UN AUTRE RÉGLAGE] change.\nJournal : durée de rendu [MINUTES] pour chaque brouillon, et ce que vous avez vu."),
      check: [
        B("The prompt describes one camera move and at most two motions", "Le prompt décrit un mouvement de caméra et deux mouvements au plus"),
        B("The first draft was rendered at low resolution and short duration", "Le premier brouillon a été rendu en basse résolution et en durée courte"),
        B("Each draft changes a single setting, with the same seed", "Chaque brouillon ne change qu'un réglage, avec la même seed"),
        B("The time of each render is noted, so the final one can be planned", "La durée de chaque rendu est notée, pour planifier le rendu final"),
      ],
      bonus: B("Try the same clip in text-to-video with the same prompt and compare it with image-to-video. Note which one respects your framing and style, and in which cases text-to-video is still worth it.",
        "Essayez le même clip en texte vers vidéo avec le même prompt et comparez-le à l'image vers vidéo. Notez lequel respecte votre cadrage et votre style, et dans quels cas le texte vers vidéo vaut encore la peine."),
    },
    more: [
      { q: B("A Wan2GP render runs out of memory on your card. What is the first adjustment to try?",
          "Un rendu Wan2GP manque de mémoire sur votre carte. Quel est le premier ajustement à essayer ?"),
        options: [
          B("A lower-memory profile, or a smaller model", "Un profil plus économe en mémoire, ou un modèle plus petit"),
          B("A higher resolution, so the model works more efficiently", "Une résolution plus haute, pour que le modèle travaille mieux"),
          B("A shorter prompt, so the frames take up less space", "Un prompt plus court, pour que les images prennent moins de place"),
        ],
        answer: 0,
        why: B("Memory use depends mainly on model size, resolution and duration. Wan2GP's profiles and smaller models reduce it; the length of the prompt has a negligible effect.",
          "La mémoire employée dépend surtout de la taille du modèle, de la résolution et de la durée. Les profils de Wan2GP et les petits modèles la réduisent ; la longueur du prompt pèse très peu.") },
      { q: B("Why start from a validated still image rather than from text alone?",
          "Pourquoi partir d'une image fixe validée plutôt que du seul texte ?"),
        options: [
          B("Because Wan cannot generate anything at all from text", "Parce que Wan ne sait rien générer à partir du texte"),
          B("Because the Wan licence forbids text-to-video for any client work", "Parce que la licence de Wan interdit le texte vers vidéo pour tout travail client"),
          B("Because the image fixes framing and style, leaving only motion", "Parce que l'image fixe cadrage et style, et qu'il ne reste que le mouvement"),
        ],
        answer: 2,
        why: B("Wan does offer text-to-video. But a still you have already approved removes the uncertainty about framing, light and style: the model only has to animate, which is where it is most reliable.",
          "Wan propose bien le texte vers vidéo. Mais une image déjà approuvée lève l'incertitude sur le cadrage, la lumière et le style : le modèle n'a plus qu'à animer, ce qu'il fait le plus sûrement.") },
    ],
  },

  [enrichKey(M3, 'lo-whisper')]: {
    why: [
      B("Whisper is a speech recognition model released by OpenAI under the MIT licence: its weights can be downloaded and run without any connection. Once the model file is on the machine, the audio is processed locally, which suits confidential interviews and meetings. Several implementations exist: openai-whisper in Python, faster-whisper (based on CTranslate2) and whisper.cpp in C/C++, efficient on CPU and Apple Silicon.",
        "Whisper est un modèle de reconnaissance vocale publié par OpenAI sous licence MIT : ses poids se téléchargent et tournent sans connexion. Une fois le fichier du modèle sur la machine, l'audio est traité en local, ce qui convient aux entretiens et réunions confidentiels. Plusieurs implémentations existent : openai-whisper en Python, faster-whisper (fondé sur CTranslate2) et whisper.cpp en C/C++, efficace sur CPU et Apple Silicon."),
      B("Model size governs the trade-off. Whisper comes in sizes from tiny to large, with intermediate and faster variants: the larger ones handle names, accents and noisy recordings better, and take longer. Set the language explicitly rather than letting the model detect it, and give it clean audio: one track, steady volume, the sampling rate the tool expects.",
        "La taille du modèle règle le compromis. Whisper existe en tailles de tiny à large, avec des variantes intermédiaires et plus rapides : les grandes reconnaissent mieux les noms, les accents et les enregistrements bruités, et prennent plus de temps. Fixez la langue explicitement plutôt que de la laisser deviner, et donnez un audio propre : une piste, un volume régulier, la fréquence attendue par l'outil."),
      B("Whisper predicts plausible text, so it can also invent: on silence, music or noise, it sometimes writes sentences never said, or repeats one in a loop. It also does not know who is speaking. A professional transcript therefore needs two more steps: diarization (who speaks when) with a dedicated tool, and proofreading against the audio for names, figures and quotes.",
        "Whisper prédit un texte plausible, il peut donc aussi inventer : sur un silence, de la musique ou du bruit, il écrit parfois des phrases jamais dites, ou en répète une en boucle. Il ne sait pas non plus qui parle. Une transcription professionnelle demande donc deux étapes de plus : la diarisation (qui parle quand) avec un outil dédié, et la relecture à l'écoute des noms, chiffres et citations."),
    ],
    example: {
      context: B("Studio Haliotis records a one-hour interview with the director of the Coopérative des Marais, for a portrait on its website. The recording is confidential and must not go through an online service.",
        "Le Studio Haliotis enregistre un entretien d'une heure avec la directrice de la Coopérative des Marais, pour un portrait sur son site. L'enregistrement est confidentiel et ne doit passer par aucun service en ligne."),
      before: B("whisper entretien-marais.m4a\n(default model, language detected automatically, raw text pasted straight into the portrait)",
        "whisper entretien-marais.m4a\n(modèle par défaut, langue détectée automatiquement, texte brut collé tel quel dans le portrait)"),
      after: B("ffmpeg -i entretien-marais.m4a -ar 16000 -ac 1 -c:a pcm_s16le entretien-marais.wav\n\nwhisper-cli -m models/ggml-[MODEL SIZE].bin -f entretien-marais.wav -l fr -otxt -osrt\n(whisper.cpp; the executable was called main in older versions, see its README)\n\nThen: diarization with pyannote run locally, speakers named in the text, and every proper noun, figure and quote checked against the audio through the SRT timecodes before the portrait is written.",
        "ffmpeg -i entretien-marais.m4a -ar 16000 -ac 1 -c:a pcm_s16le entretien-marais.wav\n\nwhisper-cli -m models/ggml-[TAILLE DU MODÈLE].bin -f entretien-marais.wav -l fr -otxt -osrt\n(whisper.cpp ; l'exécutable s'appelait main dans les anciennes versions, voir son README)\n\nEnsuite : diarisation avec pyannote en local, voix nommées dans le texte, et chaque nom propre, chiffre et citation vérifié à l'écoute grâce aux timecodes du SRT avant d'écrire le portrait."),
      takeaway: B("The first command leaves the language to chance, uses the default model and trusts the raw text. The second prepares the audio, fixes the language, exports subtitles, separates the speakers and plans a proofreading pass, all on the machine.",
        "La première commande laisse la langue au hasard, prend le modèle par défaut et se fie au texte brut. La seconde prépare l'audio, fixe la langue, exporte des sous-titres, sépare les voix et prévoit une relecture, le tout sur la machine."),
    },
    exercise: {
      goal: B("A local transcript of one of your recordings, in text and SRT, compared across two model sizes, then tidied by a local model and proofread against the audio.",
        "Une transcription locale de l'un de vos enregistrements, en texte et en SRT, comparée entre deux tailles de modèle, puis mise en forme par un modèle local et relue à l'écoute."),
      prompt: B("1. Prepare the audio:\nffmpeg -i [YOUR FILE] -ar 16000 -ac 1 -c:a pcm_s16le [NAME].wav\n\n2. Transcribe twice, with two model sizes:\nwhisper [NAME].wav --model [SMALL SIZE] --language [LANGUAGE CODE] --output_format all\nwhisper [NAME].wav --model [LARGER SIZE] --language [LANGUAGE CODE] --output_format all\n\n3. Prompt for a local model (through Ollama), to tidy without rewriting:\nHere is the raw transcript of an interview between [ROLE 1] and [ROLE 2]. Add paragraphs and punctuation only. Do not change, add or remove any word. Mark with [?] every passage that seems incoherent, repeated or invented, so that I can check it against the audio.\n[PASTE THE TRANSCRIPT]",
        "1. Préparez l'audio :\nffmpeg -i [VOTRE FICHIER] -ar 16000 -ac 1 -c:a pcm_s16le [NOM].wav\n\n2. Transcrivez deux fois, avec deux tailles de modèle :\nwhisper [NOM].wav --model [PETITE TAILLE] --language [CODE DE LANGUE] --output_format all\nwhisper [NOM].wav --model [TAILLE SUPÉRIEURE] --language [CODE DE LANGUE] --output_format all\n\n3. Prompt pour un modèle local (via Ollama), pour mettre en forme sans réécrire :\nVoici la transcription brute d'un entretien entre [RÔLE 1] et [RÔLE 2]. Ajoutez seulement des paragraphes et de la ponctuation. Ne changez, n'ajoutez ni ne retirez aucun mot. Signalez par [?] chaque passage qui vous semble incohérent, répété ou inventé, pour que je le vérifie à l'écoute.\n[COLLEZ LA TRANSCRIPTION]"),
      check: [
        B("The audio never left the machine, from conversion to export", "L'audio n'a jamais quitté la machine, de la conversion à l'export"),
        B("The language was set explicitly in the command", "La langue a été fixée explicitement dans la commande"),
        B("You noted the differences between the two sizes on names and figures", "Vous avez noté les écarts entre les deux tailles sur les noms et les chiffres"),
        B("Every passage marked [?] was checked against the audio", "Chaque passage signalé par [?] a été vérifié à l'écoute"),
      ],
      bonus: B("Time both transcriptions and write down the ratio between audio length and processing time on your machine. That ratio tells you whether a one-hour interview takes a coffee break or an afternoon.",
        "Chronométrez les deux transcriptions et notez le rapport entre durée de l'audio et temps de traitement sur votre machine. Ce rapport vous dit si un entretien d'une heure prend le temps d'un café ou un après-midi."),
    },
    more: [
      { q: B("A transcript ends with the same sentence repeated a dozen times over a silent passage. What happened?",
          "Une transcription se termine par la même phrase répétée une douzaine de fois sur un passage silencieux. Que s'est-il passé ?"),
        options: [
          B("The microphone picked up an echo that Whisper wrote down", "Le micro a capté un écho que Whisper a transcrit"),
          B("Whisper generated text over silence, a known behaviour", "Whisper a généré du texte sur un silence, un défaut connu"),
          B("The model file is corrupt and must be downloaded again", "Le fichier du modèle est corrompu et doit être retéléchargé"),
        ],
        answer: 1,
        why: B("On silence or noise, Whisper may produce or repeat text. Trimming silences, using voice activity detection (faster-whisper offers it, for instance) and proofreading against the audio limit the problem.",
          "Sur un silence ou du bruit, Whisper peut produire ou répéter du texte. Couper les silences, activer une détection d'activité vocale (faster-whisper en propose une, par exemple) et relire à l'écoute limitent le problème.") },
      { q: B("A two-hour board meeting must be transcribed on a laptop with no dedicated GPU. Which choice is sensible?",
          "Un conseil d'administration de deux heures doit être transcrit sur un portable sans carte graphique dédiée. Quel choix est raisonnable ?"),
        options: [
          B("The largest model in Python, since only quality matters", "Le plus grand modèle en Python, puisque seule la qualité compte"),
          B("An online service, since local transcription needs a GPU", "Un service en ligne, puisque la transcription locale exige un GPU"),
          B("whisper.cpp with a mid-sized model, tested on an extract", "whisper.cpp avec un modèle moyen, testé sur un extrait"),
        ],
        answer: 2,
        why: B("whisper.cpp and faster-whisper are optimised for CPUs and Apple Silicon. Testing on an extract gives you time and quality before committing two hours of audio; local transcription does not require a GPU.",
          "whisper.cpp et faster-whisper sont optimisés pour les CPU et Apple Silicon. Un test sur un extrait donne le temps et la qualité avant d'engager deux heures d'audio ; la transcription locale n'exige pas de GPU.") },
    ],
  },
}

const MEDIA_DEEP: Record<string, Deepening> = {
  [deepKey(M3, 'lo-comfyui')]: {
    intro: B("ComfyUI is an open-source interface that turns image generation into a visible graph of nodes. It looks intimidating at first, yet the default workflow has only seven nodes, each of which is one step of a diffusion model's work. This lesson installs ComfyUI on the Studio Haliotis workstation, walks through those seven nodes, and shows how a workflow is saved, shared and reproduced. At the end, you will read any basic graph and know where to act when an image goes wrong.",
      "ComfyUI est une interface open source qui fait de la génération d'image un graphe de nœuds visible. Il intimide au premier abord, pourtant le workflow par défaut ne compte que sept nœuds, chacun étant une étape du travail d'un modèle de diffusion. Ce cours installe ComfyUI sur le poste du Studio Haliotis, parcourt ces sept nœuds, et montre comment un workflow s'enregistre, se partage et se reproduit. À la fin, vous lirez n'importe quel graphe simple et saurez où agir quand une image tourne mal."),
    concepts: [
      { term: B('Checkpoint', 'Checkpoint'),
        def: B("A model file that bundles the diffusion model, the text encoder (CLIP) and the VAE. It goes in models/checkpoints; some recent models, such as Flux, are often distributed as separate files instead.",
          "Un fichier de modèle qui réunit le modèle de diffusion, l'encodeur de texte (CLIP) et le VAE. Il se place dans models/checkpoints ; certains modèles récents, comme Flux, sont souvent distribués en fichiers séparés.") },
      { term: B('Latent', 'Latent'),
        def: B("The compressed space in which the model works. The KSampler denoises a latent, not pixels; the VAE then turns it into a visible image. That is why the size is set in Empty Latent Image.",
          "L'espace compressé dans lequel le modèle travaille. Le KSampler débruite un latent, pas des pixels ; le VAE le transforme ensuite en image visible. C'est pourquoi la taille se règle dans Empty Latent Image.") },
      { term: B('KSampler', 'KSampler'),
        def: B("The node that runs the denoising. Its inputs: seed (the starting noise), steps (the number of passes), CFG (how strongly the prompt is followed), sampler and scheduler (the method).",
          "Le nœud qui conduit le débruitage. Ses entrées : seed (le bruit de départ), steps (le nombre de passes), CFG (la force avec laquelle le prompt est suivi), sampler et scheduler (la méthode).") },
      { term: B('Workflow', 'Workflow'),
        def: B("The complete graph, saved as a JSON file and embedded in the PNGs ComfyUI saves. It is the recipe that lets anyone reproduce an image with the same model files.",
          "Le graphe complet, enregistré en fichier JSON et intégré aux PNG que ComfyUI enregistre. C'est la recette qui permet à quiconque de reproduire une image avec les mêmes fichiers de modèle.") },
      { term: B('Custom node', 'Nœud personnalisé'),
        def: B("A node added by a third-party extension, often through ComfyUI Manager. It extends what ComfyUI can do, and it is Python code that runs with your rights.",
          "Un nœud ajouté par une extension tierce, souvent via ComfyUI Manager. Il étend ce que ComfyUI sait faire, et c'est du code Python qui s'exécute avec vos droits.") },
    ],
    walkthrough: {
      title: B("Malo installs ComfyUI on the Studio Haliotis workstation and builds the team's base workflow.",
        "Malo installe ComfyUI sur le poste du Studio Haliotis et construit le workflow de base de l'équipe."),
      steps: [
        B("He installs ComfyUI Desktop on Windows, following the official README, and lets it create its own Python environment. Why: a separate environment keeps ComfyUI's dependencies from clashing with the other tools on the machine.",
          "Il installe ComfyUI Desktop sous Windows, selon le README officiel, et le laisse créer son propre environnement Python. Pourquoi : un environnement séparé empêche les dépendances de ComfyUI d'entrer en conflit avec les autres outils de la machine."),
        B("He downloads one SDXL checkpoint from its official Hugging Face page, notes its SHA256 hash and its licence, and places it in models/checkpoints. Why: a single known model makes the first tests interpretable.",
          "Il télécharge un checkpoint SDXL depuis sa page officielle sur Hugging Face, note son empreinte SHA256 et sa licence, et le place dans models/checkpoints. Pourquoi : un seul modèle connu rend les premiers essais interprétables."),
        B("He loads the default workflow and follows the wires from Load Checkpoint to Save Image, saying aloud what each node passes on. Why: reading the graph as a chain is what will later let him find where a fault comes from.",
          "Il charge le workflow par défaut et suit les liens de Load Checkpoint à Save Image, en disant à voix haute ce que chaque nœud transmet. Pourquoi : lire le graphe comme une chaîne lui permettra ensuite de trouver d'où vient un défaut."),
        B("He sets Empty Latent Image to 1024 x 1024, fixes the seed and renders three images, changing only the steps, then only the CFG. Why: one change per run shows the real effect of each setting.",
          "Il règle Empty Latent Image sur 1024 x 1024, fixe la seed et rend trois images, en ne changeant que les steps, puis que la CFG. Pourquoi : un changement par rendu montre l'effet réel de chaque réglage."),
        B("He saves the graph as haliotis-base-sdxl-v1.json in the shared folder and checks that loading a saved PNG restores it. Why: the team now has a reproducible base, versioned by its file name.",
          "Il enregistre le graphe sous haliotis-base-sdxl-v1.json dans le dossier partagé et vérifie que recharger un PNG enregistré le restaure. Pourquoi : l'équipe dispose d'une base reproductible, versionnée par son nom de fichier."),
      ],
    },
    mistakes: [
      { wrong: B("Mixing model files: loading an SD 1.5 LoRA or VAE on an SDXL checkpoint, then blaming the model.",
          "Mélanger les fichiers de modèle : charger un LoRA ou un VAE SD 1.5 sur un checkpoint SDXL, puis accuser le modèle."),
        fix: B("Check the family on each file's page (SD 1.5, SDXL, Flux) and keep one folder or naming prefix per family, so incompatible files are never paired.",
          "Vérifiez la famille sur la page de chaque fichier (SD 1.5, SDXL, Flux) et gardez un dossier ou un préfixe de nom par famille, pour ne jamais associer des fichiers incompatibles.") },
      { wrong: B("Opening ComfyUI to the whole network with --listen to use it from a laptop, without thinking about who else can reach it.",
          "Ouvrir ComfyUI à tout le réseau avec --listen pour s'en servir depuis un portable, sans penser à qui d'autre peut l'atteindre."),
        fix: B("Keep the default local address. If remote use is really needed, restrict it (firewall rule, VPN or SSH tunnel) to the people who should reach it.",
          "Gardez l'adresse locale par défaut. Si l'usage à distance est vraiment nécessaire, restreignez-le (règle de pare-feu, VPN ou tunnel SSH) aux personnes qui doivent y accéder.") },
      { wrong: B("Keeping only the images and losing the workflow when a website or a messaging app strips the metadata.",
          "Ne garder que les images et perdre le workflow quand un site ou une messagerie retire les métadonnées."),
        fix: B("Save the workflow as a named, versioned JSON file next to the images, and share that file rather than relying on the PNG alone.",
          "Enregistrez le workflow en fichier JSON nommé et versionné à côté des images, et partagez ce fichier plutôt que de compter sur le seul PNG.") },
    ],
    recap: [
      B("A ComfyUI graph is a chain: checkpoint, text encoding, sampling in latent space, VAE decoding.", "Un graphe ComfyUI est une chaîne : checkpoint, encodage du texte, échantillonnage dans le latent, décodage par le VAE."),
      B("Set the latent size to the native resolution of the model.", "Réglez la taille du latent sur la résolution native du modèle."),
      B("Change one setting per run to learn what it really does.", "Changez un réglage par rendu pour apprendre ce qu'il fait vraiment."),
      B("Save workflows as named JSON files: they are the team's recipes.", "Enregistrez les workflows en JSON nommés : ce sont les recettes de l'équipe."),
      B("Every custom node is code: install only what you need, from maintained sources.", "Chaque nœud personnalisé est du code : n'installez que le nécessaire, de sources entretenues."),
    ],
    further: B("Read the examples published by the ComfyUI project (the ComfyUI_examples pages), which show reference graphs for each model family. Rebuild one by hand instead of loading it, then compare your graph with the original.",
      "Lisez les exemples publiés par le projet ComfyUI (les pages ComfyUI_examples), qui montrent des graphes de référence pour chaque famille de modèles. Reconstruisez-en un à la main au lieu de le charger, puis comparez votre graphe à l'original."),
    more: [
      { q: B("After changing checkpoints, your images are sharp but their colours look washed out and slightly off. Which node do you suspect first?",
          "Après un changement de checkpoint, vos images sont nettes mais leurs couleurs semblent délavées et un peu fausses. Quel nœud soupçonnez-vous d'abord ?"),
        options: [
          B("The VAE used for decoding, which may not match the new model", "Le VAE employé pour décoder, qui ne correspond peut-être pas au nouveau modèle"),
          B("The Save Image node, whose file format has altered the colours", "Le nœud Save Image, dont le format de fichier a altéré les couleurs"),
          B("The negative prompt, which removes colour from the image", "Le prompt négatif, qui retire de la couleur à l'image"),
        ],
        answer: 0,
        why: B("The VAE turns the latent into pixels. A VAE from another family, or the wrong one, typically gives washed-out or odd colours; the save node and the negative prompt do not alter colours this way.",
          "Le VAE transforme le latent en pixels. Un VAE d'une autre famille, ou mal choisi, donne typiquement des couleurs délavées ou étranges ; le nœud d'enregistrement et le prompt négatif n'altèrent pas les couleurs de cette façon.") },
      { q: B("Why is the image size set in Empty Latent Image rather than in Save Image?",
          "Pourquoi la taille de l'image se règle-t-elle dans Empty Latent Image plutôt que dans Save Image ?"),
        options: [
          B("Because Save Image can only write PNG files", "Parce que Save Image ne sait écrire que des fichiers PNG"),
          B("Because generation runs in a latent whose size is set at the start", "Parce que la génération se fait dans un latent dont la taille est fixée au départ"),
          B("Because ComfyUI automatically resizes every image after saving it to disk", "Parce que ComfyUI redimensionne automatiquement chaque image après l'avoir enregistrée"),
        ],
        answer: 1,
        why: B("The model denoises a latent of fixed dimensions from the very first step, and the VAE decodes it at the matching pixel size. Changing the size at the end would only resample a finished image.",
          "Le modèle débruite un latent de dimensions fixes dès la première passe, et le VAE le décode à la taille en pixels correspondante. Changer la taille à la fin ne ferait que rééchantillonner une image terminée.") },
    ],
  },

  [deepKey(M3, 'lo-sd-flux')]: {
    intro: B("Stable Diffusion and Flux are the two families of open image models most used locally. They share the diffusion principle but differ in text understanding, weight, native resolution, settings and licence. This lesson teaches you to read a model card, load the right files in ComfyUI and drive each family as it expects, with the Coopérative des Marais banner made by Studio Haliotis. At the end, you will choose a model for a need and explain why a setting that works with one fails with the other.",
      "Stable Diffusion et Flux sont les deux familles de modèles d'image ouverts les plus employées en local. Elles partagent le principe de la diffusion mais diffèrent par la compréhension du texte, le poids, la résolution native, les réglages et la licence. Ce cours vous apprend à lire une fiche de modèle, à charger les bons fichiers dans ComfyUI et à piloter chaque famille comme elle l'attend, avec la bannière de la Coopérative des Marais réalisée par le Studio Haliotis. À la fin, vous choisirez un modèle selon le besoin et saurez expliquer pourquoi un réglage qui marche avec l'un échoue avec l'autre."),
    concepts: [
      { term: B('SD 1.5, SDXL, SD 3.5', 'SD 1.5, SDXL, SD 3.5'),
        def: B("Successive generations of Stable Diffusion, from Stability AI. SD 1.5 is light and has a vast ecosystem of add-ons; SDXL works around 1024 pixels; SD 3.5 is more recent. Each has its own licence.",
          "Des générations successives de Stable Diffusion, de Stability AI. SD 1.5 est léger et dispose d'un vaste écosystème d'extensions ; SDXL travaille autour de 1024 pixels ; SD 3.5 est plus récent. Chacun a sa licence.") },
      { term: B('Flux.1', 'Flux.1'),
        def: B("A family of image models from Black Forest Labs. [schnell] is fast and under Apache 2.0; [dev] is under a non-commercial licence. Both follow detailed sentences well.",
          "Une famille de modèles d'image de Black Forest Labs. [schnell] est rapide et sous Apache 2.0 ; [dev] est sous licence non commerciale. Tous deux suivent bien les phrases détaillées.") },
      { term: B('CFG and guidance', 'CFG et guidance'),
        def: B("CFG sets how strongly the sampler follows the prompt against the negative. Flux dev runs at CFG 1 and is steered by a separate guidance value (the FluxGuidance node in ComfyUI).",
          "La CFG règle la force avec laquelle le sampler suit le prompt face au négatif. Flux dev tourne à CFG 1 et se pilote par une valeur de guidance à part (le nœud FluxGuidance dans ComfyUI).") },
      { term: B('Text encoder', 'Encodeur de texte'),
        def: B("The part that turns your prompt into numbers the model uses. Stable Diffusion relies on CLIP; Flux adds T5, which reads sentences. In ComfyUI, Flux often needs these files loaded separately.",
          "La partie qui transforme votre prompt en nombres exploitables par le modèle. Stable Diffusion s'appuie sur CLIP ; Flux ajoute T5, qui lit des phrases. Dans ComfyUI, Flux demande souvent de charger ces fichiers à part.") },
      { term: B('LoRA', 'LoRA'),
        def: B("A small add-on file that adjusts a model towards a style, a subject or a product. It only works with the family it was trained for: an SDXL LoRA on SDXL.",
          "Un petit fichier d'appoint qui oriente un modèle vers un style, un sujet ou un produit. Il ne fonctionne qu'avec la famille pour laquelle il a été entraîné : un LoRA SDXL sur SDXL.") },
    ],
    walkthrough: {
      title: B("Malo produces the Coopérative des Marais banner with SDXL, then with Flux, and chooses.",
        "Malo produit la bannière de la Coopérative des Marais avec SDXL, puis avec Flux, et choisit."),
      steps: [
        B("He reads both model cards: native resolution, advised sampler, CFG or guidance, required files, licence. Why: these settings are each model's operating range, and the licence decides whether the client use is allowed.",
          "Il lit les deux fiches : résolution native, sampler conseillé, CFG ou guidance, fichiers requis, licence. Pourquoi : ces réglages sont la plage de fonctionnement de chaque modèle, et la licence décide si l'usage client est permis."),
        B("For SDXL, he loads the checkpoint, writes a keyword prompt and a short negative, and renders at 1024 x 1024 with a fixed seed. Why: SDXL responds to keywords, and its negative really acts at a CFG above 1.",
          "Pour SDXL, il charge le checkpoint, écrit un prompt en mots-clés et un court négatif, et rend en 1024 x 1024 avec une seed fixée. Pourquoi : SDXL répond aux mots-clés, et son négatif agit vraiment à une CFG supérieure à 1."),
        B("For Flux, he loads the diffusion model, the two text encoders (CLIP-L and T5) and the VAE with their dedicated nodes, sets CFG to 1 and the guidance as advised, and writes three sentences. Why: Flux is driven by sentences and guidance, not by a negative.",
          "Pour Flux, il charge le modèle de diffusion, les deux encodeurs de texte (CLIP-L et T5) et le VAE avec leurs nœuds dédiés, règle la CFG à 1 et la guidance selon la fiche, et écrit trois phrases. Pourquoi : Flux se pilote par des phrases et la guidance, pas par un négatif."),
        B("He compares on his own machine: in his tests, Flux renders the word MARAIS legibly more often, SDXL is faster. He notes the time per image of each run. Why: the decision rests on results observed on his hardware, not on a ranking found online.",
          "Il compare sur sa propre machine : dans ses essais, Flux rend plus souvent le mot MARAIS lisible, SDXL va plus vite. Il note le temps par image de chaque rendu. Pourquoi : la décision repose sur des résultats observés sur son matériel, pas sur un classement trouvé en ligne."),
        B("He checks the licences against the client job and records his choice, the files and the settings in the project sheet. Why: in six months, someone must be able to reproduce the banner and justify the right to use it.",
          "Il confronte les licences à la commande et consigne son choix, les fichiers et les réglages dans la fiche projet. Pourquoi : dans six mois, quelqu'un doit pouvoir reproduire la bannière et justifier le droit de l'utiliser."),
      ],
    },
    mistakes: [
      { wrong: B("Copying an SDXL prompt full of keywords and quality labels into Flux, with a long negative.",
          "Recopier dans Flux un prompt SDXL plein de mots-clés et d'étiquettes de qualité, avec un long négatif."),
        fix: B("Rewrite it as sentences: subject, setting, light, medium. For Flux dev, describe what you want positively, since the negative branch is not computed at CFG 1.",
          "Réécrivez-le en phrases : sujet, décor, lumière, médium. Pour Flux dev, décrivez en positif ce que vous voulez, puisque la branche négative n'est pas calculée à CFG 1.") },
      { wrong: B("Loading a LoRA or a ControlNet trained for another family, then concluding that the model is bad.",
          "Charger un LoRA ou un ControlNet entraîné pour une autre famille, puis conclure que le modèle est mauvais."),
        fix: B("Check the base model named on each add-on's page. Keep files sorted by family so that SD 1.5, SDXL and Flux components are never mixed.",
          "Vérifiez le modèle de base indiqué sur la page de chaque extension. Rangez les fichiers par famille pour ne jamais mélanger composants SD 1.5, SDXL et Flux.") },
      { wrong: B("Choosing the heaviest model by reflex and filling the VRAM until the machine slows down or the run fails.",
          "Prendre par réflexe le modèle le plus lourd et saturer la VRAM jusqu'à ralentir la machine ou faire échouer le rendu."),
        fix: B("Start with the version that fits your card (smaller model, fp8 or GGUF). Move to a heavier one only if the observed result justifies it.",
          "Commencez par la version qui tient dans votre carte (modèle plus petit, fp8 ou GGUF). Passez à plus lourd seulement si le résultat observé le justifie.") },
    ],
    recap: [
      B("Stable Diffusion responds to keywords and negatives; Flux responds to sentences and guidance.", "Stable Diffusion répond aux mots-clés et aux négatifs ; Flux répond aux phrases et à la guidance."),
      B("Generate at the native resolution of the model.", "Générez à la résolution native du modèle."),
      B("Never mix components from different model families.", "Ne mélangez jamais des composants de familles différentes."),
      B("Read the licence of every set of weights before a client use.", "Lisez la licence de chaque modèle avant tout usage pour un client."),
    ],
    further: B("Pick a need you often have (product scene, illustration, poster with text) and build a small benchmark: the same brief, three seeds, in SDXL and in Flux. Keep the table: for your hardware, it is a better guide than any general ranking.",
      "Prenez un besoin fréquent chez vous (scène produit, illustration, affiche avec texte) et construisez un petit banc d'essai : le même brief, trois seeds, en SDXL et en Flux. Gardez le tableau : pour votre matériel, il guide mieux que n'importe quel classement général."),
    more: [
      { q: B("A client wants images for commercial use, and you plan to use Flux.1 [dev]. What do you do before generating?",
          "Un client veut des images à usage commercial, et vous comptez employer Flux.1 [dev]. Que faites-vous avant de générer ?"),
        options: [
          B("Read its licence on the official model page, or choose another model", "Lire sa licence sur la page officielle du modèle, ou choisir un autre modèle"),
          B("Nothing, since all open weights allow commercial use by default anyway", "Rien, puisque tous les poids ouverts autorisent l'usage commercial par défaut"),
          B("Credit Black Forest Labs in the caption, which settles the question", "Créditer Black Forest Labs dans la légende, ce qui règle la question"),
        ],
        answer: 0,
        why: B("Open weights do not mean free use: each model has its own licence, and Flux.1 [dev] is released under a non-commercial licence. Read the terms on the official page, or pick a model whose licence covers the job, such as Flux.1 [schnell].",
          "Poids ouverts ne veut pas dire usage libre : chaque modèle a sa licence, et Flux.1 [dev] est publié sous licence non commerciale. Lisez les conditions sur la page officielle, ou prenez un modèle dont la licence couvre la commande, comme Flux.1 [schnell].") },
      { q: B("A Flux run fails for lack of VRAM on the studio's card. Which response keeps you working locally?",
          "Un rendu Flux échoue faute de VRAM sur la carte du studio. Quelle réponse permet de continuer en local ?"),
        options: [
          B("Switch to SD 1.5 and upscale its images eight times to match", "Passer à SD 1.5 et agrandir ses images huit fois pour compenser"),
          B("Load a quantized Flux version (fp8 or GGUF) suited to the card", "Charger une version quantifiée de Flux (fp8 ou GGUF) adaptée à la carte"),
          B("Raise the number of steps so that each one of them uses less memory", "Augmenter le nombre de steps pour que chacun consomme moins de mémoire"),
        ],
        answer: 1,
        why: B("Quantized versions store the weights with fewer bits, which reduces the memory needed at some cost in fidelity. Steps do not reduce memory, and an extreme upscale of a small image does not recreate missing detail.",
          "Les versions quantifiées stockent les poids sur moins de bits, ce qui réduit la mémoire nécessaire au prix d'un peu de fidélité. Les steps ne réduisent pas la mémoire, et un agrandissement extrême d'une petite image ne recrée pas le détail manquant.") },
    ],
  },

  [deepKey(M3, 'lo-video-wan')]: {
    intro: B("Local video generation is now possible on personal machines, within clear limits: short clips, long render times and a strong dependence on VRAM. This lesson presents Wan, a family of open video models released under Apache 2.0, and two ways to run it: Wan2GP, an interface built for modest graphics cards, and ComfyUI. Following Studio Haliotis, you will animate a validated image through drafts and plan a final render. At the end, you will know what to expect from your hardware and how to get a usable clip without wasting hours.",
      "La génération vidéo locale est désormais possible sur des machines personnelles, dans des limites nettes : clips courts, rendus longs et forte dépendance à la VRAM. Ce cours présente Wan, une famille de modèles vidéo ouverts publiés sous Apache 2.0, et deux façons de le faire tourner : Wan2GP, une interface conçue pour les cartes modestes, et ComfyUI. Avec le Studio Haliotis, vous animerez une image validée par brouillons et planifierez un rendu final. À la fin, vous saurez quoi attendre de votre matériel et comment obtenir un clip exploitable sans perdre des heures."),
    concepts: [
      { term: B('Text-to-video, image-to-video', 'Texte vers vidéo, image vers vidéo'),
        def: B("Two modes: the first creates a clip from a description, the second animates an existing image. The second keeps framing and style under control, which suits a brand's visuals.",
          "Deux modes : le premier crée un clip à partir d'une description, le second anime une image existante. Le second garde cadrage et style sous contrôle, ce qui convient aux visuels d'une marque.") },
      { term: B('Frames and duration', 'Images et durée'),
        def: B("A clip is a series of frames played at a given rate. The more frames and the higher the resolution, the more memory and time the render needs.",
          "Un clip est une suite d'images jouées à une cadence donnée. Plus il y a d'images et plus la résolution est haute, plus le rendu demande de mémoire et de temps.") },
      { term: B('Memory profile', 'Profil mémoire'),
        def: B("In Wan2GP, a preset that decides how much of the model stays in VRAM and how much moves to system RAM. Lower profiles fit smaller cards, at the cost of speed.",
          "Dans Wan2GP, un préréglage qui décide quelle part du modèle reste en VRAM et quelle part passe en mémoire vive. Les profils économes conviennent aux petites cartes, au prix de la vitesse.") },
      { term: B('Offloading', 'Offloading'),
        def: B("Moving parts of a model between VRAM and RAM during computation. It lets a large model run on a small card, but each transfer slows the render down.",
          "Le déplacement de parties d'un modèle entre VRAM et mémoire vive pendant le calcul. Il permet à un grand modèle de tourner sur une petite carte, mais chaque transfert ralentit le rendu.") },
      { term: B('Draft', 'Brouillon'),
        def: B("A short, low-resolution render used to judge composition and motion before spending time on the final version. Its seed is kept to reproduce the good one.",
          "Un rendu court en basse résolution, qui sert à juger composition et mouvement avant de consacrer du temps à la version finale. Sa seed est gardée pour reproduire le bon.") },
    ],
    walkthrough: {
      title: B("Malo animates the Coopérative des Marais banner on the Studio Haliotis workstation.",
        "Malo anime la bannière de la Coopérative des Marais sur le poste du Studio Haliotis."),
      steps: [
        B("He reads the Wan2GP README and the Wan model pages to see which models and profiles suit his card's VRAM. Why: these notes are maintained by the projects and change with versions; they spare him a failed install or a render that never ends.",
          "Il lit le README de Wan2GP et les pages des modèles Wan pour voir quels modèles et profils conviennent à la VRAM de sa carte. Pourquoi : ces notes sont tenues par les projets et changent avec les versions ; elles lui évitent une installation ratée ou un rendu sans fin."),
        B("He installs Wan2GP in a dedicated Python environment, launches it and checks that the interface only listens locally. Why: a separate environment protects ComfyUI's dependencies, and a local address keeps the client files private.",
          "Il installe Wan2GP dans un environnement Python dédié, le lance et vérifie que l'interface n'écoute qu'en local. Pourquoi : un environnement séparé protège les dépendances de ComfyUI, et une adresse locale garde les fichiers clients privés."),
        B("He chooses image-to-video, loads banniere-v3.png and writes a prompt with one slow push-in and two small motions (ripples, mist). Why: the image fixes framing and style, and a simple motion has the best chance of staying coherent.",
          "Il choisit l'image vers vidéo, charge banniere-v3.png et écrit un prompt avec une lente avancée de caméra et deux petits mouvements (reflets, brume). Pourquoi : l'image fixe cadrage et style, et un mouvement simple a le plus de chances de rester cohérent."),
        B("He renders three drafts at low resolution and short duration, with the same seed, changing only the wording of the motion. He keeps the second. Why: drafts are fast enough to compare several ideas in one session.",
          "Il rend trois brouillons en basse résolution et durée courte, avec la même seed, en ne changeant que la formulation du mouvement. Il garde le deuxième. Pourquoi : les brouillons sont assez rapides pour comparer plusieurs idées en une séance."),
        B("He launches the final render at higher resolution during the lunch break, with the kept seed, and notes how long it took. Why: a long render is planned like a print job, and the noted time helps schedule the next ones.",
          "Il lance le rendu final en résolution plus haute pendant la pause déjeuner, avec la seed retenue, et note sa durée. Pourquoi : un rendu long se planifie comme une impression, et la durée notée aide à programmer les suivants."),
      ],
    },
    mistakes: [
      { wrong: B("Expecting a long sequence with several shots from a single generation.",
          "Attendre d'une seule génération une longue séquence en plusieurs plans."),
        fix: B("Generate short clips, one shot each, and assemble them in an editing program. Plan the sequence as a storyboard rather than as one prompt.",
          "Générez des clips courts, un plan chacun, et assemblez-les dans un logiciel de montage. Préparez la séquence comme un storyboard plutôt que comme un seul prompt.") },
      { wrong: B("Comparing render times read online with your own, then thinking your installation is broken.",
          "Comparer des durées de rendu lues en ligne avec les vôtres, puis croire votre installation défaillante."),
        fix: B("Times depend on the card, the drivers, the profile and the settings. Measure your own on a reference draft and use it as your baseline.",
          "Les durées dépendent de la carte, des pilotes, du profil et des réglages. Mesurez la vôtre sur un brouillon de référence et servez-vous-en comme base.") },
      { wrong: B("Installing every video tool in the same Python environment as ComfyUI.",
          "Installer tous les outils vidéo dans le même environnement Python que ComfyUI."),
        fix: B("Give each tool its own environment (a venv or the project's own installer). An update to one will then not break the others.",
          "Donnez à chaque outil son propre environnement (un venv ou l'installateur du projet). La mise à jour de l'un ne cassera plus les autres.") },
    ],
    recap: [
      B("Video costs much more memory and time than an image: plan for it.", "La vidéo coûte bien plus de mémoire et de temps qu'une image : prévoyez-le."),
      B("Image-to-video from a validated still keeps framing and style under control.", "L'image vers vidéo à partir d'une image validée garde cadrage et style sous contrôle."),
      B("Draft short and small, keep the seed, raise one setting at a time.", "Brouillon court et petit, seed gardée, un réglage monté à la fois."),
      B("Read the hardware notes of Wan and Wan2GP for your VRAM before choosing a model.", "Lisez les notes matérielles de Wan et Wan2GP pour votre VRAM avant de choisir un modèle."),
    ],
    further: B("Write a three-shot storyboard for a short teaser (each shot one move, one action), generate each shot separately from a still, and assemble them in a free editor such as Kdenlive or the free version of DaVinci Resolve. You will see where local video already works and where it still struggles.",
      "Écrivez un storyboard de trois plans pour un court teaser (chaque plan, un mouvement, une action), générez chaque plan séparément à partir d'une image fixe, et assemblez-les dans un logiciel de montage gratuit comme Kdenlive ou la version gratuite de DaVinci Resolve. Vous verrez où la vidéo locale fonctionne déjà et où elle peine encore."),
    more: [
      { q: B("Your final render will take a long time. How do you organise the session?",
          "Votre rendu final va prendre longtemps. Comment organisez-vous la séance ?"),
        options: [
          B("Launch it while you keep generating images in ComfyUI", "Le lancer en continuant à générer des images dans ComfyUI"),
          B("Run it when the machine is free, after validating the seed in draft", "Le lancer quand la machine est libre, après validation de la seed en brouillon"),
          B("Launch several final renders in parallel to save time on the whole job", "Lancer plusieurs rendus finaux en parallèle pour gagner du temps"),
        ],
        answer: 1,
        why: B("A video render uses the GPU heavily; sharing it with other generation slows both down or causes memory errors. Validating in draft first means the long render is worth its time.",
          "Un rendu vidéo sollicite fortement le GPU ; le partager avec d'autres générations ralentit les deux ou provoque des erreurs de mémoire. Valider d'abord en brouillon garantit que le rendu long en vaut la peine.") },
      { q: B("Wan2GP lets a larger model run on a small card. What is the trade-off?",
          "Wan2GP permet à un grand modèle de tourner sur une petite carte. Quelle est la contrepartie ?"),
        options: [
          B("Slower renders, as model parts move between VRAM and RAM", "Des rendus plus lents, car des parties du modèle passent de la VRAM à la RAM"),
          B("Shorter clips, as Wan2GP silently deletes frames to save memory", "Des clips plus courts, car Wan2GP supprime des images pour économiser"),
          B("Fewer rights, as offloading changes the model's licence", "Moins de droits, car l'offloading change la licence du modèle"),
        ],
        answer: 0,
        why: B("Offloading and quantization trade speed, and sometimes a little fidelity, for memory. The clip length stays your choice, and the licence of the weights is unaffected by how they are loaded.",
          "L'offloading et la quantification échangent de la vitesse, et parfois un peu de fidélité, contre de la mémoire. La durée du clip reste votre choix, et la licence des poids ne dépend pas de la façon de les charger.") },
    ],
  },

  [deepKey(M3, 'lo-whisper')]: {
    intro: B("Transcription is one of the most immediately useful local AI tasks: interviews, meetings, lectures, voice notes. With Whisper, the model runs on your machine and the audio never leaves it, which matters as soon as recordings involve clients, patients or colleagues. This lesson covers the implementations of Whisper, audio preparation with ffmpeg, the choice of model size, subtitle export, speaker separation and proofreading. At the end, you will produce a reliable transcript of a confidential recording without any online service.",
      "La transcription est l'une des tâches d'IA locale les plus immédiatement utiles : entretiens, réunions, cours, notes vocales. Avec Whisper, le modèle tourne sur votre machine et l'audio ne la quitte jamais, ce qui compte dès que des clients, des patients ou des collègues sont enregistrés. Ce cours couvre les implémentations de Whisper, la préparation de l'audio avec ffmpeg, le choix de la taille du modèle, l'export des sous-titres, la séparation des voix et la relecture. À la fin, vous produirez une transcription fiable d'un enregistrement confidentiel sans aucun service en ligne."),
    concepts: [
      { term: B('Whisper', 'Whisper'),
        def: B("An open speech recognition model from OpenAI, under the MIT licence. It transcribes many languages and can translate them into English; its weights run offline once downloaded.",
          "Un modèle ouvert de reconnaissance vocale d'OpenAI, sous licence MIT. Il transcrit de nombreuses langues et peut les traduire vers l'anglais ; ses poids tournent hors ligne une fois téléchargés.") },
      { term: B('whisper.cpp and faster-whisper', 'whisper.cpp et faster-whisper'),
        def: B("Two reimplementations of Whisper. whisper.cpp, in C/C++, runs efficiently on CPU and Apple Silicon; faster-whisper, in Python, relies on CTranslate2 and is faster than the reference code.",
          "Deux réimplémentations de Whisper. whisper.cpp, en C/C++, tourne efficacement sur CPU et Apple Silicon ; faster-whisper, en Python, s'appuie sur CTranslate2 et va plus vite que le code de référence.") },
      { term: B('Diarization', 'Diarisation'),
        def: B("Determining who speaks when. Whisper does not do it; tools such as pyannote, or pipelines like WhisperX, add it to the transcript.",
          "Le fait de déterminer qui parle à quel moment. Whisper ne le fait pas ; des outils comme pyannote, ou des chaînes comme WhisperX, l'ajoutent à la transcription.") },
      { term: B('SRT and VTT', 'SRT et VTT'),
        def: B("Subtitle formats that pair each piece of text with its timecodes. They let you find a passage in the audio quickly, and caption a video.",
          "Des formats de sous-titres qui associent chaque fragment de texte à ses timecodes. Ils permettent de retrouver vite un passage dans l'audio, et de sous-titrer une vidéo.") },
      { term: B('Hallucination', 'Hallucination'),
        def: B("Text produced by the model that matches nothing in the audio, often over silence, music or noise. It reads fluently, which is precisely why it must be checked.",
          "Un texte produit par le modèle qui ne correspond à rien dans l'audio, souvent sur un silence, de la musique ou du bruit. Il se lit avec fluidité, et c'est justement pourquoi il faut le vérifier.") },
    ],
    walkthrough: {
      title: B("Studio Haliotis transcribes the confidential interview with the director of the Coopérative des Marais.",
        "Le Studio Haliotis transcrit l'entretien confidentiel avec la directrice de la Coopérative des Marais."),
      steps: [
        B("Malo converts the recording with ffmpeg to a 16 kHz mono WAV and trims the long silences at the start and end. Why: whisper.cpp expects this format, and silences are where invented text tends to appear.",
          "Malo convertit l'enregistrement avec ffmpeg en WAV mono 16 kHz et coupe les longs silences du début et de la fin. Pourquoi : whisper.cpp attend ce format, et c'est sur les silences que le texte inventé apparaît volontiers."),
        B("He tests two model sizes with whisper.cpp on a five-minute extract, with the language set to French, and compares the names of places and people. Why: the extract shows quality and time before he commits the full hour.",
          "Il teste deux tailles de modèle avec whisper.cpp sur un extrait de cinq minutes, langue fixée au français, et compare les noms de lieux et de personnes. Pourquoi : l'extrait montre qualité et durée avant d'engager l'heure entière."),
        B("He transcribes the full hour with the chosen size, exporting TXT and SRT. Why: the text is for writing, the SRT for finding each quote in the audio by its timecode.",
          "Il transcrit l'heure entière avec la taille retenue, en exportant TXT et SRT. Pourquoi : le texte sert à écrire, le SRT à retrouver chaque citation dans l'audio par son timecode."),
        B("He runs pyannote locally to separate the two voices, after downloading its model once and accepting its terms on Hugging Face, then names the speakers. Why: a portrait quotes the director, not the interviewer.",
          "Il fait tourner pyannote en local pour séparer les deux voix, après avoir téléchargé son modèle une fois et accepté ses conditions sur Hugging Face, puis nomme les interlocuteurs. Pourquoi : un portrait cite la directrice, pas l'intervieweur."),
        B("A colleague proofreads every quote, figure and proper noun against the audio, and the WAV and transcripts go into the client's encrypted folder. Why: a published quote commits the studio, and the files remain under the NDA.",
          "Une collègue relit à l'écoute chaque citation, chiffre et nom propre, et le WAV et les transcriptions rejoignent le dossier chiffré du client. Pourquoi : une citation publiée engage le studio, et les fichiers restent sous NDA."),
      ],
    },
    mistakes: [
      { wrong: B("Letting Whisper detect the language on a recording that opens with music or a word in another language.",
          "Laisser Whisper détecter la langue d'un enregistrement qui commence par de la musique ou un mot d'une autre langue."),
        fix: B("Set the language explicitly in the command (-l fr in whisper.cpp, --language fr in openai-whisper). Detection relies on the first seconds and can be wrong.",
          "Fixez la langue explicitement dans la commande (-l fr dans whisper.cpp, --language fr dans openai-whisper). La détection s'appuie sur les premières secondes et peut se tromper.") },
      { wrong: B("Publishing a quote straight from the raw transcript.",
          "Publier une citation tirée directement de la transcription brute."),
        fix: B("Find the passage through the SRT timecode and listen to it. Correct names and figures, and check that the sentence was really said.",
          "Retrouvez le passage par le timecode du SRT et écoutez-le. Corrigez noms et chiffres, et vérifiez que la phrase a bien été prononcée.") },
      { wrong: B("Concluding that local transcription is impossible without a powerful graphics card.",
          "Conclure que la transcription locale est impossible sans carte graphique puissante."),
        fix: B("Try whisper.cpp or faster-whisper on CPU or Apple Silicon with a mid-sized model. Measure the time on an extract: it is often enough for a deferred transcript.",
          "Essayez whisper.cpp ou faster-whisper sur CPU ou Apple Silicon avec un modèle moyen. Mesurez le temps sur un extrait : il suffit souvent pour une transcription en différé.") },
    ],
    recap: [
      B("Whisper runs offline once its model is downloaded: the audio stays on the machine.", "Whisper tourne hors ligne une fois son modèle téléchargé : l'audio reste sur la machine."),
      B("Prepare the audio and set the language explicitly.", "Préparez l'audio et fixez la langue explicitement."),
      B("Choose the model size on an extract, by quality and time.", "Choisissez la taille du modèle sur un extrait, selon la qualité et le temps."),
      B("Diarization is a separate step, and proofreading against the audio is not optional.", "La diarisation est une étape à part, et la relecture à l'écoute n'est pas facultative."),
    ],
    further: B("Write a small script that converts, transcribes and exports a whole folder of recordings in one command, with the model size and language as parameters. Document it: it will belong to the offline workstation built in the last module.",
      "Écrivez un petit script qui convertit, transcrit et exporte tout un dossier d'enregistrements en une commande, avec la taille du modèle et la langue en paramètres. Documentez-le : il fera partie du poste hors ligne construit au dernier module."),
    more: [
      { q: B("A French interview must be delivered with English subtitles. What can Whisper do on its own?",
          "Un entretien en français doit être livré avec des sous-titres anglais. Que peut faire Whisper seul ?"),
        options: [
          B("Transcribe it in French, or translate it directly into English", "Le transcrire en français, ou le traduire directement en anglais"),
          B("Translate it into any language, with one dedicated option for each target", "Le traduire vers n'importe quelle langue, avec une option par langue"),
          B("Nothing, since Whisper only handles English recordings", "Rien, puisque Whisper ne traite que les enregistrements en anglais"),
        ],
        answer: 0,
        why: B("Whisper's translate task produces English from other languages. For any other target language, translate the transcript afterwards, for example with a local model.",
          "La tâche de traduction de Whisper produit de l'anglais à partir d'autres langues. Pour toute autre langue cible, traduisez la transcription ensuite, par exemple avec un modèle local.") },
      { q: B("Why export SRT as well as plain text, even for an interview that will never be subtitled?",
          "Pourquoi exporter du SRT en plus du texte brut, même pour un entretien qui ne sera jamais sous-titré ?"),
        options: [
          B("Because plain text loses its accents when pasted into Word", "Parce que le texte brut perd ses accents une fois collé dans Word"),
          B("Because SRT files are smaller and easier to archive", "Parce que les fichiers SRT sont plus légers et plus faciles à archiver"),
          B("Because timecodes let you find each quote in the audio", "Parce que les timecodes permettent de retrouver chaque citation dans l'audio"),
        ],
        answer: 2,
        why: B("Each SRT segment carries its start and end time. To check a quote, you jump straight to the right moment in the recording instead of searching through an hour of audio.",
          "Chaque segment SRT porte son heure de début et de fin. Pour vérifier une citation, vous allez directement au bon moment de l'enregistrement au lieu de chercher dans une heure d'audio.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DE CETTE PARTIE                                         */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M3, track: 'course', glyph: 'frame', tint: '#16a34a', at: [50, 76], levels: MEDIA,
    title: B('Images and video locally', 'Images et vidéo en local'),
    blurb: B('Install ComfyUI and read its nodes, generate images with Stable Diffusion and Flux, animate them with Wan, and transcribe audio with Whisper, all on your machine.',
      'Installer ComfyUI et lire ses nœuds, générer des images avec Stable Diffusion et Flux, les animer avec Wan, et transcrire l\'audio avec Whisper, le tout sur votre machine.'),
  },
]

export const LOCALE_B: CoursePart = {
  modules: MODULES,
  enrich: { ...MEDIA_ENRICH },
  deep: { ...MEDIA_DEEP },
}
