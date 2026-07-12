import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret, type ServerSecret } from '../../agents/workApi'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import { skinById } from '../../data/skins'
import { SkinAvatar } from '../workshop/SkinAvatar'
import { InfoDot } from '../InfoDot'

// fiat credit packs · ~1 credit per task. Price per credit by currency (XRP
// display falls back to USD — the user never sees the settlement rail).
const CREDIT_UNIT: Record<string, number> = { USD: 1, EUR: 1, JPY: 150 }
const CREDIT_SYM: Record<string, string> = { USD: '$', EUR: '€', JPY: '¥' }
const CREDIT_PACKS = [30, 100, 500]

// category shown above each card title, landing-style
const CARD_CAT: Record<string, string> = {
  'CEO': 'Direction', 'Engine · autonomie': 'Moteur', 'Tâches': 'Travail',
  'Site web': 'Web', 'Publicités': 'Acquisition', 'Email & prospects': 'Outbound',
  'Analytics': 'Mesure', 'Offres & paiements': 'Revenus', 'Crédits': 'Crédits',
  'Réglages & secrets': 'Config',
}

/** A step-by-step explainer for an InfoDot: a short lead, numbered steps, and an
 *  optional tip — so each dashboard feature is spelled out clearly. */
function Guide({ lead, steps, tip }: { lead: string; steps: React.ReactNode[]; tip?: React.ReactNode }) {
  return (
    <>
      <p>{lead}</p>
      <ol className="info-steps">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
      {tip && <p className="info-tip"><b>Astuce :</b> {tip}</p>}
    </>
  )
}

/** A landing-style card: white, a washi-tape strip pinned at the top, a small
 *  coloured category label, a bold title and the body. `tint` is the accent. */
function Card({ title, tint, info, children }: { title: string; tint: string; info?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="dcard" style={{ ['--dc' as string]: tint }}>
      <span className="dcard-tape" />
      <div className="dcard-head">
        <span className="dcard-cat">{CARD_CAT[title] || ''}</span>
        {info && <InfoDot title={title}>{info}</InfoDot>}
      </div>
      <h3 className="dcard-title">{title}</h3>
      <div className="dcard-body">{children}</div>
    </section>
  )
}

/** The nanocorp-style company dashboard in DojoBuro's post-it style. Your CEO +
 *  the growth primitives (tasks, website, ads, email, analytics, products,
 *  credits, engine) as sticky notes; the dojo shows the same crew in 3D. */
export function Dashboard({ onOpenDojo }: { onOpenDojo: () => void }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const dojos = useWorkshop((s) => s.dojos)
  const setActiveDojo = useWorkshop((s) => s.setActiveDojo)
  const account = useWorkshop((s) => s.account)
  const agents = dojo?.agents ?? []
  const cycleDojo = (dir: 1 | -1) => {
    if (dojos.length < 2 || !dojo) return
    const i = dojos.findIndex((d) => d.id === dojo.id)
    setActiveDojo(dojos[(i + dir + dojos.length) % dojos.length].id)
  }
  const ceo = agents.find((a) => a.fn === 'Leadership') ?? agents[0]

  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const usage = useDojo((s) => s.usage)
  const stats = useDojo((s) => s.stats)
  const pushToast = useDojo((s) => s.pushToast)
  const engine = useEngine()

  const [msg, setMsg] = useState('')
  const [budget, setBudget] = useState('20')
  const [buying, setBuying] = useState(false)
  const [payMsg, setPayMsg] = useState('')
  // secrets (env vars) for the active company. Prefer the encrypted server vault
  // (/api/secrets); fall back to the local browser store when it's not deployed.
  const dojoId = dojo?.id ?? ''
  const localSecrets = useSecrets((s) => s.byDojo[dojoId] ?? [])
  const addLocalSecret = useSecrets((s) => s.add)
  const removeLocalSecret = useSecrets((s) => s.remove)
  const [secMode, setSecMode] = useState<'loading' | 'server' | 'local'>('loading')
  const [serverSecrets, setServerSecrets] = useState<ServerSecret[]>([])
  const [secKey, setSecKey] = useState('')
  const [secVal, setSecVal] = useState('')
  const [secDesc, setSecDesc] = useState('')
  const [secBusy, setSecBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!dojoId) { setSecMode('local'); return }
    setSecMode('loading')
    void listSecrets(dojoId).then((r) => {
      if (cancelled) return
      setSecMode(r.backend ? 'server' : 'local')
      setServerSecrets(r.secrets)
    })
    return () => { cancelled = true }
  }, [dojoId])

  const onServer = secMode === 'server'
  const secretList = onServer
    ? serverSecrets.map((s) => ({ id: s.id, key: s.name, mask: s.preview, desc: s.description }))
    : localSecrets.map((s) => ({ id: s.id, key: s.key, mask: '••••' + s.value.slice(-4), desc: s.desc }))

  const saveSecret = async () => {
    if (!secKey.trim() || !secVal.trim() || !dojoId || secBusy) return
    setSecBusy(true)
    try {
      if (onServer) {
        const r = await apiSaveSecret(dojoId, secKey, secVal, secDesc)
        if (r.ok) {
          const l = await listSecrets(dojoId); setServerSecrets(l.secrets)
          pushToast({ kind: 'event', badge: 'OK', color: '#0e9bb5', title: 'Secret chiffré', text: 'Scellé côté serveur (AES-256-GCM) et exposé à tes agents.' })
        } else {
          pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Échec', text: 'Impossible d’enregistrer le secret. Réessaie.' })
        }
      } else {
        addLocalSecret(dojoId, secKey, secVal, secDesc)
        pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Secret enregistré (local)', text: 'Stocké dans ton navigateur — n’y mets pas de vraie clé de production.' })
      }
      setSecKey(''); setSecVal(''); setSecDesc('')
    } finally { setSecBusy(false) }
  }
  const deleteSecret = async (id: string) => {
    if (onServer) { const ok = await apiRemoveSecret(dojoId, id); if (ok) { const l = await listSecrets(dojoId); setServerSecrets(l.secrets) } }
    else removeLocalSecret(dojoId, id)
  }
  const connectedCount = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length
  const fiatCur = account?.currency && account.currency !== 'XRP' ? account.currency : 'USD'

  const buyCredits = async (credits: number) => {
    setBuying(true); setPayMsg('')
    try {
      const amount = credits * (CREDIT_UNIT[fiatCur] ?? 1)
      const res = await fetch('/api/checkout', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ amount, currency: fiatCur, email: '', kind: 'credits', privyDid: account?.privyDid || '' }),
      })
      const j = await res.json().catch(() => ({}))
      if (j?.ok && j.url) { window.open(j.url as string, '_blank', 'noopener,noreferrer'); return }
      setPayMsg(j?.error === 'not_configured'
        ? 'Les paiements par carte ne sont pas encore activés sur ce déploiement.'
        : 'Impossible de démarrer le paiement. Réessaie dans un instant.')
    } catch { setPayMsg('Erreur réseau au démarrage du paiement.') }
    finally { setBuying(false) }
  }
  const tasksDone = Object.values(stats).reduce((n, s) => n + (s?.tasksDone ?? 0), 0)

  const dispatch = (agentName: string, task: string) => {
    if (running) return
    const g = engine.gate(`${agentName}:${task}`)
    if (!g.ok) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Limite atteinte', text: g.reason! }); return }
    engine.record(`${agentName}:${task}`)
    void run({ task, agentName, connectors: [] })
  }

  const sendCeo = () => {
    if (!msg.trim()) return
    pushToast({ kind: 'event', badge: 'CEO', color: '#7b2ff7', title: ceo?.name || 'CEO', text: `Bien reçu — je m’en occupe : « ${msg.trim().slice(0, 80)} »` })
    setMsg('')
  }

  const tint = { ceo: '#7b5cff', engine: '#e07a2a', tasks: '#1fa563', site: '#2f7fd6', ads: '#e0459b', mail: '#d98c17', ana: '#0e9b6a', prod: '#e0483f', credit: '#0e9bb5', cfg: '#5b6472' }

  return (
    <div className="dash-panels">
      {dojos.length > 1 && (
        <div className="dash-hero-switch">
          <button onClick={() => cycleDojo(-1)} aria-label="Dojo précédent">‹</button>
          <select value={dojo?.id} onChange={(e) => setActiveDojo(e.target.value)} aria-label="Changer de dojo">
            {dojos.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          <button onClick={() => cycleDojo(1)} aria-label="Dojo suivant">›</button>
        </div>
      )}
      <div className="dash-hero">
        <div>
          <h2>{account?.name || 'Ton'} · {dojo?.name || 'Dojo'}</h2>
          <p>Ton CEO et ses agents pilotent le growth. Délègue, connecte tes apps, garde la main.</p>
        </div>
        <button className="btn tiny" onClick={onOpenDojo} title="Voir le dojo en plein écran">⤢ Dojo</button>
      </div>

      {/* CEO */}
      <Card title="CEO" tint={tint.ceo} info={<Guide
        lead="Ton CEO est le cerveau de ton entreprise : tu lui parles en langage normal et il décide quoi faire, puis répartit le travail à ses agents."
        steps={[
          <>Écris ton objectif en une phrase dans le champ (ex : « trouve-moi 20 prospects et écris-leur »).</>,
          <>Clique <b>Envoyer</b> : le CEO découpe l’objectif en tâches et les confie aux bons agents (growth, email, site…).</>,
          <>Suis l’avancement dans la carte <b>Tâches</b> et dans le dojo, où tu vois les agents travailler.</>,
          <>Chaque matin, le CEO t’envoie un <b>rapport par email</b> (bientôt aussi WhatsApp / Telegram).</>,
        ]}
        tip="Reste simple et concret : un objectif clair par message donne de meilleurs résultats."
      />}>
        <div className="ceo-row">
          {ceo && <SkinAvatar skin={skinById(ceo.skinId)} size={40} />}
          <div>
            <strong>{ceo?.name || 'CEO'}</strong>
            <span className="muted small">Directeur · {dojo?.name}</span>
          </div>
        </div>
        <div className="composer-row">
          <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Dis à ton CEO quoi prioriser…" />
          <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim()}>Envoyer</button>
        </div>
        <p className="muted small">Rapport quotidien envoyé par email · réponds aussi via WhatsApp / Telegram <em>(bientôt)</em>.</p>
      </Card>

      {/* Engine / autonomy */}
      <Card title="Engine · autonomie" tint={tint.engine} info={<Guide
        lead="L’Engine règle à quel point ton CEO agit tout seul, et l’empêche de dépenser trop ou de tourner en rond."
        steps={[
          <>Choisis un <b>niveau d’autonomie</b> : <b>Auto</b> s’auto-régule pour faire durer tes crédits ; <b>Low / Medium / Hard / Ultra</b> limitent à <b>1 / 5 / 10 / 25</b> tâches autonomes par jour.</>,
          <>Fixe un <b>plafond de crédits par jour</b> : une fois atteint, plus aucune tâche ne part jusqu’au lendemain.</>,
          <>Un <b>garde anti-boucle</b> bloque une tâche qui se répète en boucle (le CEO qui tourne en rond).</>,
          <>Suis en direct le nombre de <b>tâches</b> et de <b>crédits</b> utilisés aujourd’hui.</>,
        ]}
        tip="Commence en Medium : assez actif pour avancer, sans surprise sur tes crédits."
      />}>
        <div className="tb-netseg eng-seg">
          {(['auto', 'low', 'medium', 'hard', 'ultra'] as Autonomy[]).map((a) => (
            <button key={a} className={engine.autonomy === a ? 'on' : ''} onClick={() => engine.setAutonomy(a)}>{AUTONOMY_LABEL[a]}</button>
          ))}
        </div>
        <div className="eng-row">
          <label>Plafond crédits/jour
            <input type="number" min="1" value={engine.dailyCreditCap} onChange={(e) => engine.setDailyCap(Number(e.target.value))} />
          </label>
          <div className="eng-stat">
            <span>{engine.tasksToday}{AUTONOMY_CAP[engine.autonomy] === Infinity ? '' : ` / ${AUTONOMY_CAP[engine.autonomy]}`}</span>
            <em>tâches aujourd’hui</em>
          </div>
          <div className="eng-stat">
            <span>{engine.creditsToday} / {engine.dailyCreditCap}</span>
            <em>crédits aujourd’hui</em>
          </div>
        </div>
      </Card>

      {/* Tasks */}
      <Card title="Tâches" tint={tint.tasks} info={<Guide
        lead="Ce sont les livrables concrets que tes agents savent produire. Tu peux en lancer à la demande, sans attendre le CEO."
        steps={[
          <>Parcours la liste : chaque ligne montre l’<b>agent</b> et la <b>tâche</b> qu’il peut livrer.</>,
          <>Clique <b>Lancer</b> pour l’exécuter tout de suite.</>,
          <>L’agent travaille (tu le vois s’animer dans le dojo) et le <b>résultat s’ouvre</b> dès qu’il est prêt.</>,
          <>L’<b>Engine</b> vérifie tes limites avant chaque lancement pour éviter les excès.</>,
        ]}
        tip="Une tâche consomme environ 1 crédit. Connecte les apps concernées (Studio) pour des résultats plus riches."
      />}>
        {agents.length === 0 && <p className="muted small">Pas encore d’agents — crée ton Dojo dans le Studio.</p>}
        <ul className="dash-tasks">
          {agents.flatMap((a) => (a.tasks || []).slice(0, 2).map((t) => (
            <li key={`${a.id}:${t}`}>
              <span><b>{a.name}</b> · {t}</span>
              <button className="btn tiny" disabled={!!running} onClick={() => dispatch(a.name, t)}>{running ? '…' : 'Lancer'}</button>
            </li>
          )))}
        </ul>
      </Card>

      {/* Website */}
      <Card title="Site web" tint={tint.site} info={<Guide
        lead="Ton CEO génère et déploie un vrai site public pour ton entreprise, que tu peux ensuite personnaliser."
        steps={[
          <>Le CEO crée une <b>première version</b> du site à partir de ta description.</>,
          <>Édite-le dans un <b>éditeur visuel</b> façon Lovable — textes, sections, images. <em>(bientôt)</em></>,
          <>Ou branche <b>Figma / Claude Design</b> pour importer ton propre design. <em>(bientôt)</em></>,
          <>Publie : ton site est en ligne sur ton adresse <b>dojoburo.app</b> (domaine perso possible).</>,
        ]}
        tip="Commence par le contenu (offre, bénéfices, appel à l’action) avant de peaufiner le style."
      />}>
        <p className="muted small">Statut : <b>non déployé</b> · adresse <code>{(dojo?.name || 'dojo').toLowerCase().replace(/\s+/g, '-')}.dojoburo.app</code></p>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#3b82f6', title: 'Éditeur de site', text: 'Éditeur visuel + Figma / Claude Design — bientôt.' })}>Éditer le site</button>
          <button className="btn tiny ghost" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#3b82f6', title: 'Déploiement', text: 'Déploiement du site — bientôt.' })}>Déployer</button>
        </div>
      </Card>

      {/* Ads */}
      <Card title="Publicités" tint={tint.ads} info={<Guide
        lead="Lance des campagnes payantes pour attirer des clients, avec des visuels générés ou les tiens."
        steps={[
          <>Fixe un <b>budget quotidien</b> dans ta monnaie.</>,
          <><b>Génère</b> automatiquement des créas (visuels + textes) pour Meta / Facebook / Instagram. <em>(bientôt)</em></>,
          <>Ou <b>importe tes propres créas</b> faites avec Photoshop, Figma, Capcut, Seedance… <em>(bientôt)</em></>,
          <>Connecte ton compte <b>Meta</b> (Studio) pour diffuser réellement les annonces.</>,
        ]}
        tip="Démarre avec un petit budget pour tester, puis mets plus sur ce qui marche."
      />}>
        <label className="dash-inline">Budget /jour
          <input type="number" min="1" value={budget} onChange={(e) => setBudget(e.target.value)} />
          <span className="muted small">{fiatCur}</span>
        </label>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#ec4899', title: 'Créas', text: 'Génération de créas Meta — bientôt.' })}>Générer des créas</button>
          <button className="btn tiny ghost" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#ec4899', title: 'Import', text: 'Import Photoshop / Figma / Capcut / Seedance — bientôt.' })}>Importer mes créas</button>
        </div>
      </Card>

      {/* Email & prospects */}
      <Card title="Email & prospects" tint={tint.mail} info={<Guide
        lead="Trouve des clients potentiels, vérifie leurs emails et lance des séquences d’approche."
        steps={[
          <>Décris ta <b>cible</b> (secteur, poste, région) et lance une <b>recherche de prospects</b>. <em>(bientôt)</em></>,
          <>Les emails trouvés sont <b>vérifiés</b> pour éviter les rebonds.</>,
          <>Connecte <b>Gmail</b> (bouton « Connecter les apps ») pour envoyer depuis ta boîte.</>,
          <>Ton agent growth <b>rédige et envoie</b> des séquences, puis suit les réponses.</>,
        ]}
        tip="Un message court et personnalisé convertit mieux qu’un long argumentaire."
      />}>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#d97706', title: 'Prospection', text: 'Recherche & vérification d’emails — bientôt.' })}>Rechercher des prospects</button>
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter les apps</button>
        </div>
      </Card>

      {/* Analytics */}
      <Card title="Analytics" tint={tint.ana} info={<Guide
        lead="Le tableau de bord chiffré de ton entreprise : ce que tes agents ont produit et consommé."
        steps={[
          <><b>Tâches livrées</b> : le nombre total de livrables produits par tes agents.</>,
          <><b>Jetons</b> : le volume de calcul (IA) utilisé.</>,
          <><b>Crédits (jour)</b> : ce que tu as dépensé aujourd’hui.</>,
          <><b>Connecteurs</b> : le nombre d’apps branchées à tes agents.</>,
        ]}
        tip="Plus tu connectes d’apps, plus tes agents livrent un travail réel et mesurable."
      />}>
        <div className="dash-metrics">
          <div><span>{tasksDone}</span><em>tâches livrées</em></div>
          <div><span>{Math.round(usage.tokens / 1000)}k</span><em>jetons</em></div>
          <div><span>{engine.creditsToday}</span><em>crédits (jour)</em></div>
          <div><span>{connectedCount}</span><em>connecteurs</em></div>
        </div>
      </Card>

      {/* Products & payments */}
      <Card title="Offres & paiements" tint={tint.prod} info={<Guide
        lead="Crée ce que tu vends et encaisse tes clients pour de vrai."
        steps={[
          <>Ton CEO propose des <b>offres</b> et une <b>page de paiement</b> à partir de ton activité. <em>(bientôt)</em></>,
          <>Connecte <b>Stripe</b> (Studio) pour recevoir les paiements sur ton compte.</>,
          <>Partage le <b>lien de paiement</b> ; les ventes remontent dans ton tableau de bord.</>,
        ]}
        tip="Commence avec une seule offre claire ; tu pourras en ajouter ensuite."
      />}>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#ef4444', title: 'Offres', text: 'Création d’offres + page de paiement — bientôt.' })}>Créer une offre</button>
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter Stripe</button>
        </div>
      </Card>

      {/* Credits */}
      <Card title="Crédits" tint={tint.credit} info={<Guide
        lead="Les crédits alimentent le travail de tes agents. Tu les achètes dans ta monnaie, sans aucune crypto."
        steps={[
          <>Choisis un <b>pack</b> (30 / 100 / 500 crédits) affiché dans ta monnaie ({fiatCur}).</>,
          <>Le paiement s’ouvre dans une <b>nouvelle fenêtre</b> (carte, sécurisé) ; ton solde se met à jour ensuite.</>,
          <>Chaque tâche consomme <b>environ 1 crédit</b> ; le règlement se fait en coulisse — tu ne vois aucune crypto.</>,
          <>Suis ta <b>consommation du jour</b> et le nombre d’apps branchées en bas de la carte.</>,
        ]}
        tip="Le niveau d’autonomie (Engine) et le plafond quotidien t’aident à maîtriser ta consommation."
      />}>
        <div className="cred-packs">
          {CREDIT_PACKS.map((c) => (
            <button key={c} className="cred-pack" disabled={buying} onClick={() => buyCredits(c)}>
              <span>{c} crédits</span>
              <em>{CREDIT_SYM[fiatCur]}{c * (CREDIT_UNIT[fiatCur] ?? 1)}</em>
            </button>
          ))}
        </div>
        {payMsg && <p className="muted small">{payMsg}</p>}
        <p className="muted small">Crédits utilisés aujourd’hui : <b>{engine.creditsToday}</b> · apps branchées : <b>{connectedCount}</b>.</p>
      </Card>

      {/* Settings & secrets (nanocorp's "Settings" panel) */}
      <Card title="Réglages & secrets" tint={tint.cfg} info={<Guide
        lead="Les variables d’environnement (clés API, tokens…) que tes agents utiliseront, plus les interrupteurs de sécurité."
        steps={[
          <>Donne un <b>nom</b> à ta variable (ex : <code>STRIPE_KEY</code>), colle sa <b>valeur</b> et une note facultative.</>,
          <>La valeur est <b>chiffrée côté serveur</b> (AES-256-GCM) — le navigateur ne reçoit qu’un aperçu masqué, jamais la valeur.</>,
          <>Elle est exposée à tes agents comme <b>variable d’environnement</b> au moment d’exécuter une tâche.</>,
          <>Mets l’entreprise <b>en pause</b> pour tout arrêter, ou coupe seulement les <b>emails sortants</b>.</>,
        ]}
        tip="Utilise des clés restreintes (scopées) et fais-les tourner régulièrement."
      />}>
        {secMode === 'server' && <p className="sec-ok">🔒 <b>Coffre chiffré :</b> tes secrets sont scellés côté serveur (AES-256-GCM) — jamais stockés dans le navigateur.</p>}
        {secMode === 'local' && <p className="sec-warn">⚠️ <b>Coffre serveur non configuré</b> ici : les secrets sont gardés <b>dans ton navigateur</b>. N’y colle pas de vraie clé de production.</p>}
        <div className="sec-add">
          <input className="sec-key" placeholder="SERVICE_API_KEY" value={secKey} onChange={(e) => setSecKey(e.target.value.toUpperCase())} maxLength={48} />
          <input className="sec-val" type="password" placeholder="Valeur du secret" value={secVal} onChange={(e) => setSecVal(e.target.value)} />
          <input className="sec-desc" placeholder="Description (facultatif) — aide tes agents à choisir le bon secret" value={secDesc} onChange={(e) => setSecDesc(e.target.value)} maxLength={80} />
          <button className="btn tiny" disabled={!secKey.trim() || !secVal.trim() || secBusy} onClick={() => void saveSecret()}>{secBusy ? 'Enregistrement…' : 'Enregistrer le secret'}</button>
        </div>

        {secretList.length > 0 ? (
          <ul className="sec-list">
            {secretList.map((s) => (
              <li key={s.id}>
                <div className="sec-row-main">
                  <code>{s.key}</code>
                  <span className="sec-mask">{s.mask}</span>
                </div>
                {s.desc && <span className="sec-note">{s.desc}</span>}
                <button className="sec-del" onClick={() => void deleteSecret(s.id)} aria-label={`Supprimer ${s.key}`}>Supprimer</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted small">{secMode === 'loading' ? 'Chargement…' : 'Aucun secret pour l’instant. Ajoute-en un pour l’exposer à tes agents comme variable d’environnement.'}</p>
        )}

        <div className="sec-toggles">
          <label className="sec-toggle">
            <span><b>Couper les emails sortants</b><em>En pause, l’entreprise n’envoie aucun email.</em></span>
            <button role="switch" aria-checked={engine.pauseOutbound} className={`tgl${engine.pauseOutbound ? ' on' : ''}`} onClick={() => engine.setPauseOutbound(!engine.pauseOutbound)}><span /></button>
          </label>
          <label className="sec-toggle">
            <span><b>Mettre l’entreprise en pause</b><em>Aucune tâche ne tourne tant que c’est en pause.</em></span>
            <button role="switch" aria-checked={engine.paused} className={`tgl danger${engine.paused ? ' on' : ''}`} onClick={() => engine.setPaused(!engine.paused)}><span /></button>
          </label>
        </div>
        {engine.paused && <p className="sec-paused">⏸ Entreprise en pause — les tâches sont bloquées.</p>}
      </Card>
    </div>
  )
}
