# Pourquoi tant de connecteurs disent « needs setup »

Réponse courte : **rien n'est cassé**. Deux choses différentes se cachaient
derrière le même mot à l'écran, et l'une des deux ne dépend que de vous.

Ce document est écrit à partir de `npm run check:connectors`, qui lit les trois
registres et dit la vérité du code. Relancez-le après chaque changement plutôt
que de faire confiance à ce fichier : lui peut dater, pas le script.

## Les trois états, et ce qu'ils veulent dire

| État | Ce que c'est | Qui peut y faire quelque chose |
|---|---|---|
| **ready** | Câblé de bout en bout. Une fois les identifiants d'application posés, un clic et ça marche. | Vous, en posant deux variables |
| **needs setup** | Exactement le même que *ready* — mais ce déploiement n'a pas les identifiants OAuth du fournisseur. | Vous, en posant deux variables |
| **no actions yet** | La clé se stocke et se scelle, mais il n'y a **rien à appeler** : ni point d'accès MCP, ni lecture de données, ni action d'écriture. | Personne, pour l'instant — c'est du développement |

Sur l'écran d'un agent, les deux derniers s'affichaient sous un seul libellé,
« not available ». C'est ce qui fait lire « produit cassé » là où il n'y a, pour
la moitié d'entre eux, que deux variables à poser dans Vercel.

## L'état au moment de l'écriture

**44 connecteurs · 22 câblés · 22 sans point d'appel.**

Des 22 câblés, **20 sont en OAuth** : ils resteront « needs setup » tant que
leurs identifiants d'application ne sont pas posés. Les 2 autres — Google
Analytics et Supabase — prennent une clé que vous collez vous-même, sans rien
demander à l'opérateur ; c'est pourquoi Google Analytics propose « Connect »
alors que Stripe dit « needs setup » sur le même écran.

## À poser, par nombre de métiers qui s'en servent

Enregistrez l'application chez le fournisseur, puis posez les deux variables
dans Vercel et redéployez. L'écran **Connect apps** les nomme aussi, carte par
carte, quand vous êtes administrateur.

| Agents | Connecteur | Variables |
|---|---|---|
| 5 | Notion | `NOTION_CLIENT_ID` + `NOTION_CLIENT_SECRET` |
| 4 | Google Drive | `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` |
| 3 | Slack | `SLACK_CLIENT_ID` + `SLACK_CLIENT_SECRET` |
| 2 | GitHub | `GITHUB_CLIENT_ID` + `GITHUB_CLIENT_SECRET` |
| 2 | Gmail | `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` *(le même couple que Drive)* |
| 2 | Stripe | `STRIPE_CONNECT_CLIENT_ID` + `STRIPE_SECRET_KEY` |
| 1 | Discord | `DISCORD_CLIENT_ID` + `DISCORD_CLIENT_SECRET` |
| 1 | Linear | `LINEAR_CLIENT_ID` + `LINEAR_CLIENT_SECRET` |
| 1 | QuickBooks | `QUICKBOOKS_CLIENT_ID` + `QUICKBOOKS_CLIENT_SECRET` |
| 1 | HubSpot | `HUBSPOT_CLIENT_ID` + `HUBSPOT_CLIENT_SECRET` |
| 1 | Calendly | `CALENDLY_CLIENT_ID` + `CALENDLY_CLIENT_SECRET` |
| 1 | Mailchimp | `MAILCHIMP_CLIENT_ID` + `MAILCHIMP_CLIENT_SECRET` |
| 1 | X / Twitter | `TWITTER_CLIENT_ID` + `TWITTER_CLIENT_SECRET` |
| 1 | LinkedIn | `LINKEDIN_CLIENT_ID` + `LINKEDIN_CLIENT_SECRET` |
| 1 | DocuSign | `DOCUSIGN_CLIENT_ID` + `DOCUSIGN_CLIENT_SECRET` |
| 1 | Zendesk | `ZENDESK_CLIENT_ID` + `ZENDESK_CLIENT_SECRET` |
| 1 | Intercom | `INTERCOM_CLIENT_ID` + `INTERCOM_CLIENT_SECRET` |
| 0 | Google Calendar | `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` *(le même couple)* |
| 0 | Xero | `XERO_CLIENT_ID` + `XERO_CLIENT_SECRET` |
| 0 | Buffer | `BUFFER_CLIENT_ID` + `BUFFER_CLIENT_SECRET` |

**Un seul couple Google** ouvre Drive, Gmail et Calendar d'un coup : c'est le
meilleur rapport travail/résultat de la liste, juste après Notion.

Les quatre premières lignes — Notion, Google, Slack, GitHub — couvrent à elles
seules 14 des 18 métiers. Si vous ne faites qu'une chose, faites celles-là.

## Les 22 sans point d'appel

Zoom, Jira, Trello, Asana, Airtable, Shopify, Figma, Canva, Claude Code,
AI Video, ElevenLabs, HeyGen, Apollo, Klaviyo, PostHog, Cloudinary, Wave,
Perplexity, Google Classroom, Salesforce, WhatsApp Business, Meta Ads.

Poser leurs variables n'y changerait **rien** : il manque le chemin d'exécution,
pas la clé. Trois façons de les ouvrir, dans l'ordre de coût :

1. **Un point d'accès MCP** · posez `<ID>_MCP_URL` si le fournisseur en publie un,
   ou pointez-le vers un relais (Composio, Zapier, Pipedream). Aucun code.
2. **Un lecteur de données** dans `api/tool-data.ts` · pour ce qu'un agent doit
   seulement lire.
3. **Une action d'écriture** dans `api/tool-action.ts` · pour ce qu'il doit faire.

`scripts/check-connectors.mjs` tient la liste `CREDENTIAL_ONLY` comme référence :
retirez-en un identifiant le jour où son chemin existe, et la compilation se
mettra à le surveiller. Tout ce qui REGRESSE hors de *ready* échoue tout de suite.

## Ce qui a changé avec ce document

- L'écran d'un agent distingue enfin les deux « non » — « needs setup » mène à
  l'écran qui nomme les variables, « no actions yet » à la documentation.
- `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` ne sont plus demandées : rien ne
  les lisait. Supabase prend le jeton que vous collez, et son point d'accès est
  fixe. Faire poser des variables inutiles coûte une étape et fait douter des
  autres.
- Le contrôle lit maintenant les variables dans **tous** les fichiers serveur,
  pas seulement le registre. `GA4_PROPERTY_ID` était signalée « jamais lue »
  alors que `api/tool-data.ts` la lit — et une fausse alerte répétée finit par
  masquer une vraie.
