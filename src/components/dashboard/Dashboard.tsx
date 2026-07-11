import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { skinById } from '../../data/skins'
import { SkinAvatar } from '../workshop/SkinAvatar'
import { InfoDot } from '../InfoDot'

/** A post-it card. `tint` colours the pinned corner + top edge. */
function Card({ title, tint, info, children }: { title: string; tint: string; info?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="pi" style={{ ['--pi' as string]: tint }}>
      <header className="pi-head">
        <span className="pi-pin" />
        <h3>{title}</h3>
        {info && <InfoDot title={title}>{info}</InfoDot>}
      </header>
      <div className="pi-body">{children}</div>
    </section>
  )
}

/** The nanocorp-style company dashboard in DojoBuro's post-it style. Your CEO +
 *  the growth primitives (tasks, website, ads, email, analytics, products,
 *  credits, engine) as sticky notes; the dojo shows the same crew in 3D. */
export function Dashboard({ onOpenDojo }: { onOpenDojo: () => void }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const account = useWorkshop((s) => s.account)
  const agents = dojo?.agents ?? []
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
  const connectedCount = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length
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

  const tint = { ceo: '#c8b6ff', engine: '#ffd6a5', tasks: '#a7f3d0', site: '#bfdbfe', ads: '#fbcfe8', mail: '#fde68a', ana: '#bbf7d0', prod: '#fecaca', credit: '#c7f9ff' }

  return (
    <div className="dash-panels">
      <div className="dash-hero">
        <div>
          <h2>{account?.name || 'Ton'} · {dojo?.name || 'Dojo'}</h2>
          <p>Ton CEO et ses agents pilotent le growth. Délègue, connecte tes apps, garde la main.</p>
        </div>
        <button className="btn tiny" onClick={onOpenDojo} title="Voir le dojo en plein écran">⤢ Dojo</button>
      </div>

      {/* CEO */}
      <Card title="CEO" tint={tint.ceo} info={<p>Ton CEO décide quoi faire ensuite. Parle-lui en une phrase; il répartit le travail à ses agents et t’envoie un rapport quotidien.</p>}>
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
      <Card title="Engine · autonomie" tint={tint.engine} info={<><p>Règle jusqu’où le CEO agit seul. <b>Auto</b> se rythme pour faire durer tes crédits; Low/Medium/Hard/Ultra plafonnent les tâches autonomes à 1/5/10/25 par jour.</p><p>Un plafond de crédits quotidien et un garde anti-boucle évitent qu’il tourne en rond.</p></>}>
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
      <Card title="Tâches" tint={tint.tasks} info={<p>Les tâches que tes agents savent livrer. Lance-les à la demande; l’Engine limite le rythme.</p>}>
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
      <Card title="Site web" tint={tint.site} info={<p>Ton CEO génère et déploie un site public. Édite-le dans un éditeur visuel, ou branche Figma / Claude Design.</p>}>
        <p className="muted small">Statut : <b>non déployé</b> · adresse <code>{(dojo?.name || 'dojo').toLowerCase().replace(/\s+/g, '-')}.dojoburo.app</code></p>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#3b82f6', title: 'Éditeur de site', text: 'Éditeur visuel + Figma / Claude Design — bientôt.' })}>Éditer le site</button>
          <button className="btn tiny ghost" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#3b82f6', title: 'Déploiement', text: 'Déploiement du site — bientôt.' })}>Déployer</button>
        </div>
      </Card>

      {/* Ads */}
      <Card title="Publicités" tint={tint.ads} info={<p>Génère et lance des campagnes Meta (Facebook / Instagram), ou importe tes propres créas (Photoshop, Figma, Capcut, Seedance).</p>}>
        <label className="dash-inline">Budget /jour
          <input type="number" min="1" value={budget} onChange={(e) => setBudget(e.target.value)} />
          <span className="muted small">{account?.currency || 'USD'}</span>
        </label>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#ec4899', title: 'Créas', text: 'Génération de créas Meta — bientôt.' })}>Générer des créas</button>
          <button className="btn tiny ghost" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#ec4899', title: 'Import', text: 'Import Photoshop / Figma / Capcut / Seedance — bientôt.' })}>Importer mes créas</button>
        </div>
      </Card>

      {/* Email & prospects */}
      <Card title="Email & prospects" tint={tint.mail} info={<p>Recherche des prospects, vérifie leurs emails et lance des séquences. Branche Gmail et Meta dans le Studio.</p>}>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#d97706', title: 'Prospection', text: 'Recherche & vérification d’emails — bientôt.' })}>Rechercher des prospects</button>
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter les apps</button>
        </div>
      </Card>

      {/* Analytics */}
      <Card title="Analytics" tint={tint.ana} info={<p>L’activité réelle de ton conglomérat : tâches livrées, calcul consommé et règlements.</p>}>
        <div className="dash-metrics">
          <div><span>{tasksDone}</span><em>tâches livrées</em></div>
          <div><span>{Math.round(usage.tokens / 1000)}k</span><em>jetons</em></div>
          <div><span>{usage.xrp.toFixed(2)}</span><em>réglé (rail)</em></div>
          <div><span>{usage.tx}</span><em>transactions</em></div>
        </div>
      </Card>

      {/* Products & payments */}
      <Card title="Offres & paiements" tint={tint.prod} info={<p>Ton CEO crée des offres et une page de paiement. Branche Stripe pour encaisser en vrai.</p>}>
        <div className="dash-actions">
          <button className="btn tiny" onClick={() => pushToast({ kind: 'event', badge: 'i', color: '#ef4444', title: 'Offres', text: 'Création d’offres + page de paiement — bientôt.' })}>Créer une offre</button>
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connecter Stripe</button>
        </div>
      </Card>

      {/* Credits */}
      <Card title="Crédits" tint={tint.credit} info={<p>Achète des crédits dans ta monnaie (USD, EUR, JPY…). Pas de crypto à gérer — le règlement se fait sur un rail rapide, en coulisse.</p>}>
        <p className="muted small">Environ 1 crédit par tâche. Connecteurs branchés : <b>{connectedCount}</b>.</p>
        <button className="btn primary tiny" onClick={() => openStudio('billing')}>Acheter des crédits</button>
      </Card>
    </div>
  )
}
