// UNE COMMUNAUTÉ QUI NE PARAÎT PAS VIDE, SANS RIEN INVENTER.
//
// Demandé : « éviter d'avoir une communauté vide pour rassurer les futurs
// élèves ». Les faux membres et les faux témoignages ont été écartés (ils
// tromperaient les élèves) ; à la place, et choisi par le propriétaire :
//   · L'ÉQUIPE DOJOBURO publie, sous son nom, les fils de départ : l'accueil et
//     les règles, les présentations, le défi de la semaine, les questions, les
//     réussites, les ressources. Ce sont de vraies publications de l'équipe.
//   · LES MAÎTRES IA animent les chats des cours : un maître répond aux
//     questions des élèves, et son nom porte toujours « IA ». Il ne se fait
//     jamais passer pour une personne.
//
// Les fils de départ sont écrits une fois en base, avec des identifiants fixes
// (« on conflict do nothing ») : les relancer ne les duplique pas, et une
// publication supprimée par un administrateur ne revient pas.

export const TEAM_DID = 'team:dojoburo'
export const TEAM_NAME = 'Équipe DojoBuro'

/** le nom de chaque maître, par temple · recopié de src/pixel/masters (une
 *  fonction serveur ne lit pas le paquet du navigateur) et vérifié par
 *  scripts/test-community. */
export const MASTER_NAMES: Record<string, string> = {
  weekend: 'Sora', generaliste: 'Hana', 'metier-growth': 'Kenji', 'metier-comms': 'Aiko',
  'metier-founder': 'Ren', 'metier-product': 'Mei', 'metier-sales': 'Taro', 'metier-assistant': 'Yumi',
  'metier-designer': 'Kai', 'metier-teacher': 'Nori', 'metier-student': 'Riku', 'metier-scientist': 'Emi',
  'metier-developer': 'Haru', 'metier-recruiter': 'Sena', 'metier-lawyer': 'Jun', 'metier-consultant': 'Rio',
  'coder-une-app': 'Akira', 'coder-avec-lovable': 'Momo',
  'ecrire-un-livre': 'Fumi',
  'storyboard': 'Taku',
  'bd-manga': 'Hoshi',
  'flow-ux': 'Nao',
  'architecture-logicielle': 'Ken',
  'comptabilite': 'Ume',
  'images-ia': 'Iro',
  'logo-charte': 'Akane',
  'design-system-figma': 'Rin',
  'ia-locale': 'Tetsu',
  'business-ia': 'Daichi',
  'copywriting': 'Mika',
  'veille-outils': 'Sumi',
}

export const masterDid = (pack: string) => `master:${pack}`
/** « Maître Sora · IA » · le mot IA est dans le nom même, partout où il s'affiche */
export const masterName = (pack: string) => `Maître ${MASTER_NAMES[pack] ?? 'Sora'} · IA`

export interface SeedPost { id: string; category: string; title: string; body: string; pinned: boolean }

export const SEED_POSTS: SeedPost[] = [
  {
    id: '7e0a0001-0000-4000-8000-000000000001',
    category: 'general',
    pinned: true,
    title: 'Bienvenue dans la communauté DojoBuro',
    body: [
      'Bienvenue ! Cette communauté réunit les élèves de DojoBuro : celles et ceux qui apprennent à faire travailler l\'IA pour de vrai, dans leur métier.',
      '',
      'Ce que vous trouverez ici :',
      '· le fil, pour poser vos questions, partager vos prompts et vos réussites ;',
      '· la bibliothèque de prompts et les ressources sélectionnées par l\'équipe ;',
      '· le chat de chaque temple, où les maîtres IA répondent à vos questions de cours ;',
      '· les classements, par points et par grade.',
      '',
      'Trois règles simples : bienveillance, entraide, et jamais de données personnelles ou confidentielles dans un prompt partagé.',
      '',
      'Une précision importante : les maîtres (Sora, Hana, Akira et les autres) sont des IA, et leur nom le dit toujours. Les autres comptes sont de vraies personnes. Les premiers inscrits reçoivent le badge Fondateur, pour toujours.',
    ].join('\n'),
  },
  {
    id: '7e0a0001-0000-4000-8000-000000000002',
    category: 'intro',
    pinned: true,
    title: 'Présentez-vous : qui êtes-vous, et qu\'apprenez-vous ?',
    body: [
      'Pour faire connaissance, répondez en commentaire en quelques lignes :',
      '',
      '1. Votre métier ou vos études.',
      '2. La formation ou le temple dans lequel vous êtes.',
      '3. Une tâche que vous aimeriez confier à l\'IA d\'ici un mois.',
      '',
      'Lisez aussi les présentations des autres : c\'est souvent là que naissent les meilleures idées d\'usage.',
    ].join('\n'),
  },
  {
    id: '7e0a0001-0000-4000-8000-000000000003',
    category: 'general',
    pinned: false,
    title: 'Défi de la semaine : un prompt structuré pour une vraie tâche',
    body: [
      'Le défi : choisissez une tâche réelle de votre semaine (un e-mail délicat, un compte rendu, une analyse) et rédigez un prompt en quatre parties : le contexte, la tâche, les contraintes, le format attendu.',
      '',
      'Publiez en commentaire :',
      '· la version avant (votre première idée de prompt) ;',
      '· la version après, structurée ;',
      '· ce que la différence a changé dans la réponse.',
      '',
      'Pensez à retirer toute information personnelle ou confidentielle avant de partager.',
    ].join('\n'),
  },
  {
    id: '7e0a0001-0000-4000-8000-000000000004',
    category: 'questions',
    pinned: false,
    title: 'Vos questions sur les temples, les cours et les outils',
    body: [
      'Une question sur une leçon, un outil (Claude, ChatGPT, Lovable, Supabase, GitHub...) ou sur la plateforme ? Posez-la en commentaire.',
      '',
      'Pour une réponse utile, précisez : ce que vous cherchez à faire, ce que vous avez essayé, et ce qui s\'est passé. L\'équipe et les autres membres répondent ; dans le chat de chaque temple, le maître IA du cours répond aussi.',
    ].join('\n'),
  },
  {
    id: '7e0a0001-0000-4000-8000-000000000005',
    category: 'wins',
    pinned: false,
    title: 'Partagez votre première réussite avec l\'IA',
    body: [
      'Une heure gagnée, un premier agent qui fonctionne, un projet livré, une app publiée : racontez-le ici, même si cela vous paraît modeste.',
      '',
      'Les récits les plus utiles disent : la situation de départ, ce que vous avez fait, le résultat concret. Vous pouvez aussi déposer un témoignage dans l\'onglet Réussites : il est publié avec votre accord, sous votre nom de membre.',
    ].join('\n'),
  },
  {
    id: '7e0a0001-0000-4000-8000-000000000006',
    category: 'prompts',
    pinned: false,
    title: 'Comment tirer le meilleur de la bibliothèque de prompts',
    body: [
      'La bibliothèque (onglet Prompts) réunit des prompts originaux, écrits pour DojoBuro et classés par thème.',
      '',
      '· Remplacez toujours ce qui est entre [CROCHETS] par votre propre contexte : c\'est ce qui fait la qualité de la réponse.',
      '· Gardez la structure, adaptez le reste : le ton, la longueur, le format.',
      '· Relisez et vérifiez chaque réponse, surtout les chiffres, les noms et les sources.',
      '',
      'Vous avez amélioré un prompt ? Partagez votre version en commentaire.',
    ].join('\n'),
  },
  {
    id: '7e0a0001-0000-4000-8000-000000000007',
    category: 'resources',
    pinned: false,
    title: 'Ressources gratuites : notre sélection pour aller plus loin',
    body: [
      'L\'onglet Ressources rassemble des documentations officielles, des cours gratuits et des sources fiables, en français et en anglais, sélectionnés par l\'équipe. Les liens ont été vérifiés à la date indiquée.',
      '',
      'Vous connaissez une ressource gratuite et sérieuse qui manque ? Proposez-la en commentaire, avec une phrase sur ce qu\'elle vous a apporté.',
    ].join('\n'),
  },
]

/** Le prompt système d'un maître IA · il répond à un élève dans le chat d'un
 *  cours. Il se présente toujours comme une IA et n'invente rien. */
export function masterSystem(pack: string, courseTitle: string): string {
  const name = MASTER_NAMES[pack] ?? 'Sora'
  return [
    `You are Master ${name}, the AI master of the DojoBuro course "${courseTitle}". You are an AI, not a person, and you never claim otherwise.`,
    'You answer students in the course group chat. Reply in the language of the student (French by default, using "vous").',
    'Be brief (at most 5 short sentences), warm and pedagogical. Give one concrete next step. If the question is outside the course, answer briefly and suggest the relevant temple or the community.',
    'Never invent facts, figures, prices, sources or testimonials. If you are not sure, say so and suggest checking the official documentation.',
    'Never ask for or repeat personal data. No markdown headings, no emoji, no em dash.',
  ].join(' ')
}

/** Faut-il que le maître réponde ? · une question, ou un message qui l'appelle */
export const callsMaster = (body: string): boolean =>
  /\?\s*$/.test(body.trim()) || /\bma[iî]tre\b|@ia\b/i.test(body)
