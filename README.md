# 🏢 DojoBuro

Une web app **responsive en pixel art 2D** : un bureau de startup où une équipe
d'**agents IA** — chacun avec une vraie fonction dans une startup — travaille,
avec des **visages en ASCII art animés**. C'est un **dashboard-jeu** pour
orchestrer ses agents de façon fun, façon [WorkAdventure](https://workadventu.re/fr/),
et **toutes les transactions se règlent sur le [XRP Ledger](https://xrpl.org)**.

> 100% fonctionnel, **aucun mock**. L'app parle directement aux nœuds publics
> XRPL en WebSocket depuis le navigateur — pas de backend.

---

## ✨ Ce que ça fait

- **Bureau pixel art** en grille : chaque agent est assis à son poste, avec un
  petit écran CRT affichant son **visage ASCII animé** (clignement, frappe,
  parole, cœurs, erreur…).
- **12 agents**, chacun avec une **fonction de startup** et ses **skills**.
- **XRPL intégré** : chaque agent (et la trésorerie) possède un **wallet XRPL**
  réel. Faucet sur Testnet, paiements agentiques **x402** on-ledger, ancrage du
  comportement (**track**) et **audit** via `account_tx`.
- **Testnet → Mainnet** : bascule de réseau dans la barre du haut, avec une
  confirmation explicite avant de manipuler de la valeur réelle.
- **Feed « Track »** : chaque action d'agent et chaque transaction on-ledger
  (avec lien vers l'explorer) apparaissent en temps réel.

---

## 👥 Les agents et leurs fonctions

| Agent | Fonction | Département | Skills clés |
|------|----------|-----------|-------------|
| 👑 **Ava** | CEO — Orchestratrice | Direction | Daily standup, OKR, Allouer le budget (XRPL) |
| 🛠️ **Rex** | CTO — Ingénierie | Tech | Ship une feature, Code review (x402) |
| ⚙️ **Otto** | DevOps — Infrastructure | Ops | Déployer en prod, Scaler |
| 💰 **Fin** | CFO — Trésorerie | Finance | Ouvrir la trésorerie, Payer les agents, Audit on-ledger |
| 📣 **Mia** | CMO — Marketing | Growth | Lancer une campagne, Audit de marque (x402) |
| 🤝 **Sol** | Head of Sales | Growth | Closer un deal, Encaisser (x402) |
| 🧭 **Pia** | Product Manager | Produit | Écrire une spec, Prioriser le backlog |
| 🎨 **Dex** | Lead Designer | Produit | Maquette, Design system (x402) |
| 📊 **Ada** | Data Analyst | Tech | Rapport hebdo, Analyse on-ledger |
| 🌱 **Hana** | People Ops — RH | People | Recruter, Boost de moral |
| 🎧 **Sam** | Customer Support | Ops | Traiter un ticket, Mesurer le CSAT |
| ⚖️ **Lex** | Legal & Compliance | Direction | Rédiger un contrat, Check conformité |

Chaque agent dispose aussi des **3 skills XRPL partagés** :
**Wallet XRPL**, **Paiement agentique (x402)** et **Track behavior**.

---

## ⛓️ Intégration XRPL

L'app suit les guides agents de XRPL :

- **Installation** — la lib officielle [`xrpl`](https://xrpl.org/docs/infrastructure/installation)
  (`npm i xrpl`) tourne dans le navigateur via des polyfills Node.
- **Wallets** ([xrpl-agent-wallet-skill](https://xrpl.org/docs/agents/xrpl-agent-wallet-skill)) —
  `src/xrpl/wallet.ts` : génération de keypairs, financement par **faucet**
  (Testnet/Devnet), lecture de solde (`account_info`).
- **Transactions agentiques** ([getting-started](https://xrpl.org/docs/agents/getting-started-with-agentic-transactions)) —
  `src/xrpl/payments.ts` : `Payment` autofill → sign → `submitAndWait`.
- **Paiements x402** ([agentic-payments-x402](https://xrpl.org/docs/agents/agentic-payments-x402)) —
  chaque règlement porte un **mémo x402** structuré (`{protocol, skill, invoice,
  from, to}`). Les skills « premium » (tarifés) déclenchent un vrai règlement
  on-ledger depuis la trésorerie.
- **Track behavior** ([track-agent-behavior](https://xrpl.org/docs/agents/track-agent-behavior)) —
  ancrage on-ledger d'une empreinte SHA-256 de l'action (self-payment + mémo),
  auditable via `account_tx`.

### Réseaux

| Réseau | Endpoint | Faucet |
|--------|----------|--------|
| Testnet *(défaut)* | `wss://s.altnet.rippletest.net:51233` | ✅ |
| Devnet | `wss://s.devnet.rippletest.net:51233` | ✅ |
| Mainnet | `wss://xrplcluster.com` | ❌ valeur réelle |

**Passage en Mainnet** : cliquez sur l'onglet *Mainnet*, confirmez l'avertissement,
puis financez les wallets vous-même (pas de faucet). Les paiements deviennent
réels et irréversibles.

> 🔐 **Sécurité** : les seeds sont stockées **uniquement dans le localStorage du
> navigateur**, namespacées par réseau. Parfait pour jouer sur Testnet. Sur
> Mainnet, traitez ces wallets comme des *hot wallets* : ne financez que de
> petits montants.

---

## 🚀 Démarrage

```bash
npm install
npm run dev        # http://localhost:5173
```

Puis dans l'app :

1. Ouvrez la fiche de **Fin** (CFO) ou le panneau **Trésorerie**.
2. Cliquez **🚀 Démarrer la startup** : crée tous les wallets et les finance via
   le faucet Testnet.
3. Cliquez un agent → lancez ses **skills**. Les skills XRPL et x402 produisent
   de vraies transactions ; suivez-les dans le feed **Track** (liens explorer).

### Build de production

```bash
npm run build      # tsc + vite build → dist/
npm run preview    # sert le build
```

`dist/` est un site statique : déployable tel quel sur n'importe quel hébergeur
(Netlify, Vercel, Cloudflare Pages, GitHub Pages…).

---

## 🧪 Vérification

- `scripts/xrpl-smoke.mjs` — flux XRPL réel de bout en bout (connexion Testnet,
  faucet ×2, `Payment` avec mémo x402, `account_tx`). *Nécessite un accès réseau
  sortant vers les nœuds XRPL.*
- `scripts/ui-verify.mjs` — pilote l'app avec Playwright (rendu, sélection
  d'agent, exécution de skill, création de wallet, modal Mainnet).

---

## 🗂️ Architecture

```
src/
  data/agents.ts     # roster : fonctions + skills + palettes + postes
  data/faces.ts      # frames ASCII animés par humeur
  xrpl/network.ts    # config réseaux + client WebSocket partagé
  xrpl/wallet.ts     # génération / faucet / soldes
  xrpl/payments.ts   # Payment + mémos x402 + track + account_tx
  store.ts           # état global (zustand) + orchestrateur de skills
  components/        # Office, AgentSprite, AsciiFace, AgentPanel,
                     # TreasuryPanel, ActivityLog, TopBar
```

**Stack** : React 18 · TypeScript · Vite · Zustand · xrpl.js. Aucun backend,
aucun mock.
