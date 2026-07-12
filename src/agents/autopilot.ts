// The autonomous CEO. After the initial prompt (onboarding), or on demand, the
// CEO runs a whole pipeline by itself — strategy → website → offer → ads →
// outreach — producing real deliverables, exactly like nanocorp's CEO kicking
// off after you describe the company. Each step is gated by the Engine (autonomy
// cap + daily credit cap), so it can't run away, and it stops with a clear reason
// if a model isn't configured yet.
import { useWork } from './workStore'
import { useEngine } from './engineStore'
import { useDeliverables } from './deliverables'
import { useWorkshop } from '../workshop'
import { useDojo } from '../store'

const PIPELINE: Array<{ task: string; label: string }> = [
  { task: 'strategy', label: 'Stratégie & OKRs' },
  { task: 'website', label: 'Site web' },
  { task: 'offer', label: 'Offre & tarifs' },
  { task: 'ads', label: 'Publicités' },
  { task: 'outreach', label: 'Prospection' },
]

const ERR: Record<string, string> = {
  needs_key: 'Ajoute ta clé Claude (Studio → Facturation) pour que le CEO travaille.',
  quota: 'Quota gratuit du jour atteint — ajoute ta clé Claude pour continuer.',
  not_configured: 'Aucun modèle IA n’est configuré sur ce déploiement (clé Claude ou cascade gratuite).',
  network: 'Connexion au serveur impossible — réessaie dans un instant.',
  unknown_task: 'Tâche non reconnue par le serveur.',
}

/** Run the CEO's full build pipeline. `brief` is the company description. */
export async function launchCeo(brief: string): Promise<void> {
  const work = useWork.getState()
  if (work.autopilot.running || work.runningTask) return

  const ws = useWorkshop.getState()
  const dojo = ws.dojos.find((d) => d.id === ws.activeDojoId) ?? ws.dojos[0]
  const ceo = dojo?.agents.find((a) => a.fn === 'Leadership') ?? dojo?.agents[0]
  const ceoName = ceo?.name || 'CEO'
  const toast = useDojo.getState().pushToast

  work.setAutopilot({ running: true, step: PIPELINE[0].label })
  toast({ kind: 'event', badge: 'CEO', color: '#7b2ff7', title: ceoName, text: 'Je me lance — je construis ton entreprise…' })

  const before = useWorkshop.getState().activeDojoId
    ? useDeliverables.getState().list(useWorkshop.getState().activeDojoId!).length : 0

  for (const step of PIPELINE) {
    // The initial build is an EXPLICIT user action, not background autonomy, so
    // it isn't capped by the daily autonomy limit — only a hard company Pause
    // stops it. We still record it so the counters move.
    if (useEngine.getState().paused) { toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'CEO en pause', text: 'Entreprise en pause — reprends dans Réglages.' }); break }
    useEngine.getState().record(`${ceoName}:${step.task}`)
    useWork.getState().setAutopilot({ running: true, step: step.label })
    toast({ kind: 'event', badge: '▶', color: '#2f7fd6', title: `CEO · ${step.label}`, text: 'en cours…' })

    await useWork.getState().run({ task: step.task, agentName: ceoName, connectors: [], brief, silent: true })

    const err = useWork.getState().runError
    if (err) { toast({ kind: 'event', badge: '!', color: '#e0483f', title: 'CEO arrêté', text: ERR[err.code] || `Échec : ${err.detail || err.code}.` }); break }
  }

  useWork.getState().setAutopilot({ running: false, step: null })
  const list = useDeliverables.getState().list(useWorkshop.getState().activeDojoId || '')
  const produced = list.length - before
  const drafts = list.some((d) => d.model === 'brouillon local')
  if (list.length && drafts) {
    toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Brouillons prêts', text: 'Aucun modèle IA connecté : ce sont des brouillons. Ajoute une clé dans Studio → Facturation pour la vraie génération.' })
  } else if (produced > 0) {
    toast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'CEO', text: `${produced} livrable(s) prêts — regarde tes panneaux.` })
  }
}
