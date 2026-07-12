import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret, type ServerSecret } from '../../agents/workApi'
import { tasksForFunction } from '../../data/connectors'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import { useDeliverables } from '../../agents/deliverables'
import { launchCeo } from '../../agents/autopilot'
import { ROLE_AGENTS, ROLE_BY_ID } from '../../data/roleAgents'
import { MISSIONS, type Mission } from '../../data/missions'
import { isAdmin } from '../../config/admin'
import { ModuleHost } from '../../modules/ModuleHost'
import { MODULES } from '../../modules/registry'
import { skinById } from '../../data/skins'
import { SkinAvatar } from '../workshop/SkinAvatar'
import { SkinPicker } from '../workshop/WorkshopModal'
import { InfoDot } from '../InfoDot'

// fiat credit packs · ~1 credit per task. Price per credit by currency (XRP
// display falls back to USD — the user never sees the settlement rail).
const CREDIT_UNIT: Record<string, number> = { USD: 1, EUR: 1, JPY: 150 }
const CREDIT_SYM: Record<string, string> = { USD: '$', EUR: '€', JPY: '¥' }
const CREDIT_PACKS = [30, 100, 500]

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

/** The new dojo mechanic: a company is run by 10 functional agents. The right
 *  panel shows the roster; clicking an agent (here or in the 3D dojo) opens that
 *  agent's dedicated management / edition / creation dashboard. */
export function Dashboard({ onOpenDojo }: { onOpenDojo: () => void }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const dojos = useWorkshop((s) => s.dojos)
  const setActiveDojo = useWorkshop((s) => s.setActiveDojo)
  const updateAgent = useWorkshop((s) => s.updateAgent)
  const save = useWorkshop((s) => s.save)
  const account = useWorkshop((s) => s.account)
  const agents = dojo?.agents ?? []
  const cycleDojo = (dir: 1 | -1) => {
    if (dojos.length < 2 || !dojo) return
    const i = dojos.findIndex((d) => d.id === dojo.id)
    setActiveDojo(dojos[(i + dir + dojos.length) % dojos.length].id)
  }
  // the selected agent drives the whole panel (also set by clicking a 3D agent)
  const selectedId = useDojo((s) => s.selectedAgent)
  const selectAgent = useDojo((s) => s.selectAgent)
  const byRole = (roleId: string) => agents.find((a) => a.role === roleId)
  const ceo = byRole('ceo') ?? agents.find((a) => a.fn === 'Leadership') ?? agents[0]
  const selected = agents.find((a) => a.id === selectedId) ?? null
  const selRole = selected?.role ? ROLE_BY_ID[selected.role] : undefined

  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const editAgent = useWork((s) => s.editAgent)
  const autopilot = useWork((s) => s.autopilot)
  const showDeliverable = useWork((s) => s.showDeliverable)
  const delivs = useDeliverables((s) => s.byDojo[dojo?.id ?? ''] ?? [])
  const got = (kind: string) => delivs.find((d) => d.taskId === kind)
  const noModel = delivs.some((d) => d.model === 'brouillon local')
  const usage = useDojo((s) => s.usage)
  const stats = useDojo((s) => s.stats)
  const pushToast = useDojo((s) => s.pushToast)
  const engine = useEngine()

  const [msg, setMsg] = useState('')
  const [budget, setBudget] = useState('20')
  const [buying, setBuying] = useState(false)
  const [payMsg, setPayMsg] = useState('')
  const [picking, setPicking] = useState(false) // skin picker open for the selected agent
  const [moduleId, setModuleId] = useState<string | null>(null) // open studio module

  // A mission leads to a role agent's dashboard or a studio module.
  const pickMission = (m: Mission) => {
    if (m.target.kind === 'module') { setModuleId(m.target.moduleId); selectAgent(null); return }
    const a = agents.find((x) => x.role === (m.target as { role: string }).role)
    if (a) { setModuleId(null); selectAgent(a.id) }
  }
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

  // Run a real Claude-powered deliverable. Explicit user action → only a hard
  // company Pause blocks it (not the daily autonomy cap). On success the
  // deliverable opens automatically; on failure a clear toast explains why.
  const runTask = async (agentName: string, task: string, brief = '') => {
    if (running) return
    if (engine.paused) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Entreprise en pause', text: 'Reprends dans le dashboard de l’agent Config.' }); return }
    engine.record(`${agentName}:${task}`)
    pushToast({ kind: 'event', badge: '▶', color: '#2f7fd6', title: agentName, text: 'Au travail…' })
    await run({ task, agentName, connectors: [], brief })
    const err = useWork.getState().runError
    if (err) {
      const map: Record<string, string> = {
        needs_key: 'Ajoute ta clé Claude (Studio → Facturation) pour ce livrable.',
        quota: 'Quota gratuit du jour atteint — ajoute ta clé Claude pour continuer.',
        not_configured: 'Aucun modèle IA n’est configuré sur ce déploiement (clé Claude ou cascade gratuite).',
        network: 'Erreur réseau — réessaie dans un instant.',
        unknown_task: 'Cette tâche n’est pas reconnue par le serveur.',
      }
      pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Livrable non lancé', text: map[err.code] || `Échec : ${err.detail || err.code}.` })
    }
  }

  const sendCeo = () => {
    const brief = msg.trim()
    if (!brief) return
    setMsg('')
    void runTask(ceo?.name || 'CEO', 'strategy', brief)
  }

  // ---- the guide (InfoDot) for each role dashboard ---------------------------
  const guideFor = (roleId: string): React.ReactNode => {
    switch (roleId) {
      case 'ceo': return <Guide lead="Ton CEO est le cerveau de ton entreprise : tu lui parles en langage normal et il décide quoi faire, puis répartit le travail aux autres agents."
        steps={[
          <>Écris ton objectif en une phrase (ex : « trouve-moi 20 prospects et écris-leur »).</>,
          <>Clique <b>Envoyer</b> : le CEO découpe l’objectif et le confie aux bons agents.</>,
          <>Ou clique <b>Lancer le CEO</b> : il enchaîne stratégie, site, offre, pubs et prospection tout seul.</>,
          <>Chaque matin, il t’envoie un <b>rapport par email</b> (bientôt WhatsApp / Telegram).</>,
        ]} tip="Un objectif clair par message donne de meilleurs résultats." />
      case 'engine': return <Guide lead="L’agent Moteur règle à quel point ton CEO agit tout seul, et l’empêche de trop dépenser ou de tourner en rond."
        steps={[
          <>Choisis un <b>niveau d’autonomie</b> : Auto s’auto-régule ; Low / Medium / Hard / Ultra limitent à 1 / 5 / 10 / 25 tâches autonomes par jour.</>,
          <>Fixe un <b>plafond de crédits par jour</b>.</>,
          <>Un <b>garde anti-boucle</b> bloque une tâche qui se répète en boucle.</>,
          <>Suis en direct les tâches et crédits utilisés aujourd’hui.</>,
        ]} tip="Ces limites ne freinent que l’autonomie de fond : tes lancements manuels passent toujours." />
      case 'work': return <Guide lead="L’agent Travail exécute à la demande les livrables concrets que ta crème d’agents sait produire."
        steps={[
          <>Parcours la liste : chaque ligne montre l’agent et la tâche.</>,
          <>Clique <b>Lancer</b> pour l’exécuter tout de suite.</>,
          <>L’agent s’anime dans le dojo et le <b>résultat s’ouvre</b> dès qu’il est prêt.</>,
        ]} tip="Connecte les apps concernées (Studio) pour des résultats plus riches." />
      case 'web': return <Guide lead="L’agent Web génère et déploie un vrai site public pour ton entreprise, que tu personnalises ensuite."
        steps={[
          <>Il crée une <b>première version</b> du site à partir de ta description.</>,
          <>Édite-le dans un éditeur visuel façon Lovable. <em>(bientôt)</em></>,
          <>Publie : ton site est en ligne sur ton adresse dojoburo.app.</>,
        ]} tip="Commence par le contenu (offre, bénéfices, appel à l’action)." />
      case 'acq': return <Guide lead="L’agent Acquisition lance des campagnes Meta (Facebook & Instagram) — uniquement Meta, pas de Google."
        steps={[
          <>Fixe un <b>budget quotidien</b> dans ta monnaie.</>,
          <>Clique <b>Générer des créas</b> : 5 variantes d’annonces Meta (texte, accroche, visuel, audience).</>,
          <>Connecte ton compte <b>Meta</b> (Studio) pour diffuser réellement.</>,
        ]} tip="Démarre avec un petit budget, puis mets plus sur ce qui marche." />
      case 'outbound': return <Guide lead="L’agent Outbound trouve des prospects, vérifie leurs emails et lance des séquences d’approche."
        steps={[
          <>Décris ta <b>cible</b> et lance une recherche de prospects.</>,
          <>Les emails trouvés sont <b>vérifiés</b> pour éviter les rebonds.</>,
          <>Connecte <b>Gmail</b> pour envoyer depuis ta boîte.</>,
        ]} tip="Un message court et personnalisé convertit mieux qu’un long argumentaire." />
      case 'measure': return <Guide lead="L’agent Mesure est le tableau de bord chiffré de ton entreprise : ce que tes agents produisent et consomment."
        steps={[
          <><b>Tâches livrées</b> : le total de livrables produits.</>,
          <><b>Jetons</b> : le volume de calcul IA utilisé.</>,
          <><b>Crédits (jour)</b> : ta dépense d’aujourd’hui.</>,
          <><b>Connecteurs</b> : le nombre d’apps branchées.</>,
        ]} tip="Plus tu connectes d’apps, plus le travail est réel et mesurable." />
      case 'revenue': return <Guide lead="L’agent Revenu construit ce que tu vends et encaisse tes clients pour de vrai."
        steps={[
          <>Il propose une <b>offre</b>, des <b>tarifs</b> et le texte d’une page de paiement.</>,
          <>Connecte <b>Stripe</b> pour créer les produits et recevoir les paiements.</>,
          <>Partage le <b>lien de paiement</b> ; les ventes remontent dans Mesure.</>,
        ]} tip="Commence avec une seule offre claire." />
      case 'credit': return <Guide lead="L’agent Crédit alimente le travail de tes agents. Tu recharges dans ta monnaie, sans aucune crypto."
        steps={[
          <>Choisis un <b>pack</b> (30 / 100 / 500 crédits) affiché en {fiatCur}.</>,
          <>Le paiement s’ouvre dans une nouvelle fenêtre (carte, sécurisé).</>,
          <>Chaque tâche consomme <b>environ 1 crédit</b> ; le règlement se fait en coulisse.</>,
        ]} tip="Le niveau d’autonomie (Moteur) t’aide à maîtriser ta consommation." />
      case 'config': return <Guide lead="L’agent Config garde tes variables d’environnement chiffrées et les interrupteurs de sécurité."
        steps={[
          <>Donne un <b>nom</b> (ex : STRIPE_KEY), colle la <b>valeur</b> et une note.</>,
          <>La valeur est <b>chiffrée côté serveur</b> (AES-256-GCM).</>,
          <>Elle est exposée à tes agents comme variable d’environnement.</>,
          <>Mets l’entreprise <b>en pause</b> pour tout arrêter.</>,
        ]} tip="Utilise des clés restreintes (scopées) et fais-les tourner régulièrement." />
      default: return null
    }
  }

  // ---- the specialized body for each role dashboard --------------------------
  const bodyFor = (roleId: string, agentName: string): React.ReactNode => {
    switch (roleId) {
      case 'ceo': return (
        <>
          <div className="composer-row">
            <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Dis à ton CEO quoi prioriser…" />
            <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Envoyer</button>
          </div>
          {autopilot.running ? (
            <p className="ceo-autopilot"><span className="ceo-spin" /> Le CEO travaille · <b>{autopilot.step}</b>…</p>
          ) : (
            <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'mon entreprise')}>▶ Lancer le CEO (tout construire)</button>
          )}
          {noModel && (
            <p className="ceo-nomodel">⚠️ <b>Aucun modèle IA connecté</b> — le CEO produit des <b>brouillons</b>. Pour la vraie génération : <button className="linklike" onClick={() => openStudio('billing')}>ajoute ta clé Claude</button> (Studio → Facturation), ou l’opérateur active une clé gratuite (Groq / Gemini).</p>
          )}
          <p className="muted small">Le CEO enchaîne site, offre, pubs et prospection tout seul (dans les limites du Moteur) · rapport quotidien par email.</p>
        </>
      )
      case 'engine': return (
        <>
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
        </>
      )
      case 'work': return (
        <>
          {agents.length === 0 && <p className="muted small">Pas encore d’agents — crée ton Dojo dans le Studio.</p>}
          <ul className="dash-tasks">
            {agents.filter((a) => a.role !== 'ceo').flatMap((a) => tasksForFunction(a.fn).slice(0, 2).map((wt) => (
              <li key={`${a.id}:${wt.id}`}>
                <span><b>{a.name}</b> · {wt.label}</span>
                <button className="btn tiny" disabled={!!running} onClick={() => void runTask(a.name, wt.id)}>{running === wt.id ? '…' : 'Lancer'}</button>
              </li>
            )))}
          </ul>
        </>
      )
      case 'web': return (
        <>
          <p className="muted small">Statut : <b>{got('website') ? 'généré ✓' : 'non déployé'}</b> · adresse <code>{(dojo?.name || 'dojo').toLowerCase().replace(/\s+/g, '-')}.dojoburo.app</code></p>
          <div className="dash-actions">
            <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'website', dojo?.name || '')}>{got('website') ? 'Regénérer' : 'Générer le site'}</button>
            {got('website') && <button className="btn tiny" onClick={() => showDeliverable(got('website')!)}>Voir le site</button>}
            <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Brancher Figma</button>
          </div>
        </>
      )
      case 'acq': return (
        <>
          <label className="dash-inline">Budget /jour
            <input type="number" min="1" value={budget} onChange={(e) => setBudget(e.target.value)} />
            <span className="muted small">{fiatCur}</span>
          </label>
          <div className="dash-actions">
            <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'ads', `Budget ${budget} ${fiatCur}/jour pour ${dojo?.name || 'l’entreprise'}`)}>{got('ads') ? 'Regénérer' : 'Générer des créas'}</button>
            {got('ads') && <button className="btn tiny" onClick={() => showDeliverable(got('ads')!)}>Voir les créas</button>}
            <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter Meta</button>
          </div>
        </>
      )
      case 'outbound': return (
        <div className="dash-actions">
          <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'outreach', dojo?.name || '')}>{got('outreach') ? 'Relancer' : 'Rechercher des prospects'}</button>
          {got('outreach') && <button className="btn tiny" onClick={() => showDeliverable(got('outreach')!)}>Voir la prospection</button>}
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter Gmail</button>
        </div>
      )
      case 'measure': return (
        <div className="dash-metrics">
          <div><span>{tasksDone}</span><em>tâches livrées</em></div>
          <div><span>{Math.round(usage.tokens / 1000)}k</span><em>jetons</em></div>
          <div><span>{engine.creditsToday}</span><em>crédits (jour)</em></div>
          <div><span>{connectedCount}</span><em>connecteurs</em></div>
        </div>
      )
      case 'revenue': return (
        <div className="dash-actions">
          <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'offer', dojo?.name || '')}>{got('offer') ? 'Regénérer' : 'Créer une offre'}</button>
          {got('offer') && <button className="btn tiny" onClick={() => showDeliverable(got('offer')!)}>Voir l’offre</button>}
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter Stripe</button>
        </div>
      )
      case 'credit': return (
        <>
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
        </>
      )
      case 'config': return (
        <>
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
        </>
      )
      default: return null
    }
  }

  // ------------------------------------------------------------------ MODULE --
  if (moduleId) {
    return <ModuleHost moduleId={moduleId} dojoId={dojo?.id ?? ''} onClose={() => setModuleId(null)} />
  }

  // ------------------------------------------------------------------ DETAIL --
  if (selected && selRole) {
    const skin = skinById(selected.skinId)
    return (
      <div className="agentdash" style={{ ['--dc' as string]: selRole.tint }}>
        <div className="ad-topbar">
          <button className="ad-back" onClick={() => selectAgent(null)}>‹ Tous les agents</button>
          <button className="btn tiny ghost" onClick={() => editAgent(selected.id)} title="Édition avancée dans le Studio">Studio ✎</button>
        </div>

        <header className="ad-head">
          <button className="ad-avatar" onClick={() => setPicking(true)} title="Changer le skin de cet agent">
            <SkinAvatar skin={skin} size={64} />
            <span className="ad-avatar-edit">Skin</span>
          </button>
          <div className="ad-meta">
            <input
              className="ad-name"
              value={selected.name}
              onChange={(e) => updateAgent(selected.id, { name: e.target.value.slice(0, 22) })}
              onBlur={() => save()}
              onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur() }}
              aria-label="Nom de l’agent"
            />
            <p className="ad-role">{selRole.role}</p>
            <span className="ad-cat" style={{ background: selRole.tint }}>{selRole.cat}</span>
          </div>
          <InfoDot title={selRole.cat}>{guideFor(selRole.id)}</InfoDot>
        </header>

        <p className="ad-blurb">{selRole.blurb}</p>

        {/* the agent's studios — each agent IS its tools, opened right here */}
        {(() => {
          const roleModules = MODULES.filter((m) => m.agentRole === selRole.id)
          if (!roleModules.length) return null
          return (
            <div className="ad-studios">
              {roleModules.map((m) => (
                <button key={m.id} className="ad-studio" style={{ ['--dc' as string]: m.tint }} onClick={() => setModuleId(m.id)}>
                  <span className="ad-studio-emoji" aria-hidden>{m.emoji}</span>
                  <span className="ad-studio-txt"><b>{m.label}</b><em>{m.blurb}</em></span>
                  <span className="ad-studio-go">Ouvrir →</span>
                </button>
              ))}
            </div>
          )
        })()}

        <div className="ad-body">{bodyFor(selRole.id, selected.name)}</div>

        {picking && (
          <SkinPicker
            current={selected.skinId}
            onPick={(id) => { updateAgent(selected.id, { skinId: id }); save(); setPicking(false) }}
            onClose={() => setPicking(false)}
          />
        )}
      </div>
    )
  }

  // ------------------------------------------------------------------ ROSTER --
  const roster = ROLE_AGENTS.map((r) => byRole(r.id)).filter(Boolean) as typeof agents
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
          <h2>{account?.name || 'Ton'} · {dojo?.name || 'Dojo'} {isAdmin(account ?? null) && <span className="admin-badge" title="Compte admin · tests illimités gratuits">ADMIN · illimité</span>}</h2>
          <p>Clique un agent pour ouvrir son dashboard. Le CEO coordonne toute l’équipe.</p>
        </div>
        <button className="btn tiny" onClick={onOpenDojo} title="Voir le dojo en plein écran">⤢ Dojo</button>
      </div>

      {/* Business overview — the entreprise dashboard at a glance */}
      <div className="biz-overview">
        <div className="biz-tile"><span>{engine.creditsToday}</span><em>crédits (jour)</em></div>
        <div className="biz-tile"><span>{delivs.filter((d) => d.taskId === 'ads').length}</span><em>campagnes</em></div>
        <div className="biz-tile"><span>{delivs.filter((d) => d.taskId === 'outreach').length}</span><em>prospection</em></div>
        <div className="biz-tile"><span>{tasksDone}</span><em>livrables</em></div>
        <div className="biz-tile"><span>{connectedCount}</span><em>apps</em></div>
      </div>

      {/* Missions — the mission-first entry (tools appear after the outcome) */}
      <div className="mission-head">
        <h3>Que veux-tu faire ?</h3>
        <span className="muted small">Choisis une mission — l’outil et l’agent s’ouvrent ensuite.</span>
      </div>
      <div className="mission-grid">
        {MISSIONS.map((m) => (
          <button key={m.id} className="mission-card" style={{ ['--dc' as string]: m.tint }} onClick={() => pickMission(m)}>
            <span className="mission-emoji" aria-hidden>{m.emoji}</span>
            <strong className="mission-label">{m.label}</strong>
            <span className="mission-sub">{m.sub}</span>
          </button>
        ))}
      </div>

      {/* CEO quick action — the orchestrator sits above the roster */}
      <div className="ceo-quick" style={{ ['--dc' as string]: ROLE_BY_ID.ceo.tint }}>
        <div className="composer-row">
          <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Dis à ton CEO quoi prioriser…" />
          <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Envoyer</button>
        </div>
        {autopilot.running
          ? <p className="ceo-autopilot"><span className="ceo-spin" /> Le CEO travaille · <b>{autopilot.step}</b>…</p>
          : <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'mon entreprise')}>▶ Lancer le CEO (tout construire)</button>}
        {noModel && <p className="ceo-nomodel">⚠️ <b>Aucun modèle IA connecté</b> — le CEO produit des <b>brouillons</b>. <button className="linklike" onClick={() => openStudio('billing')}>Ajoute ta clé Claude</button> pour la vraie génération.</p>}
      </div>

      <div className="agent-roster">
        {roster.map((a) => {
          const r = ROLE_BY_ID[a.role as string]
          return (
            <button key={a.id} className="ac-card" style={{ ['--dc' as string]: r.tint }} onClick={() => selectAgent(a.id)}>
              <span className="ac-tape" />
              <span className="ac-avatar"><SkinAvatar skin={skinById(a.skinId)} size={44} /></span>
              <span className="ac-cat">{r.cat}</span>
              <strong className="ac-name">{a.name}</strong>
              <span className="ac-role">{r.role}</span>
              <span className="ac-blurb">{r.blurb}</span>
              <span className="ac-open">Ouvrir le dashboard →</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
