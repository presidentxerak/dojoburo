// What a teammate can actually do for you, and what they have already done.
//
// This replaces thirteen hand-built "studios" — a website builder, a CRM, a
// finance tab and so on. They were the product before the teammates were: real
// editors you operated yourself, sitting beside an agent that was supposed to
// do the work for you. Only one of their twenty-six files ever called the
// model. They competed with the teammate instead of showing what it produced.
//
// So a teammate's page is now the teammate: the deliverables they can produce,
// one line saying what you want, the apps they will act in, and the work they
// have already handed back — openable, exportable, re-runnable.
import { useEffect, useState } from 'react'
import { useWork } from '../../agents/workStore'
import { useDeliverables } from '../../agents/deliverables'
import { useAgentApps, effectiveApps } from '../../agents/agentApps'
import { tasksForRole } from '../../data/connectors'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { ConnectorLogo } from '../ConnectorLogo'
import { startConnect } from '../../agents/workApi'
import { useSkills, skillsBlock, MAX_LEN, MAX_PER_ROLE } from '../../agents/skills'
import type { RoleAgent } from '../../data/roleAgents'
import type { WAgent } from '../../workshop'

const relTime = (t: number) => {
  const m = Math.round((Date.now() - t) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m} min ago`
  const h = Math.round(m / 60)
  return h < 24 ? `${h} h ago` : `${Math.round(h / 24)} d ago`
}

/**
 * Les secondes écoulées depuis le lancement · rien de plus.
 *
 * Un compteur qui avance est la seule chose qu'on puisse affirmer d'un run en
 * cours : le serveur ne rapporte aucune étape intermédiaire. Inventer
 * « rédaction… » puis « vérification… » sur une minuterie, c'est raconter une
 * progression qu'on n'observe pas — et le jour où le brouillon prend une minute,
 * l'écran ment. Ce qu'il dit est vrai, et cela suffit à ne pas paraître figé.
 */
function useElapsed(active: boolean): number {
  const [s, setS] = useState(0)
  useEffect(() => {
    if (!active) { setS(0); return }
    const t0 = Date.now()
    setS(0)
    const id = window.setInterval(() => setS(Math.round((Date.now() - t0) / 1000)), 1000)
    return () => window.clearInterval(id)
  }, [active])
  return s
}

export function AgentWork({ agent, role, dojoId }: { agent: WAgent; role: RoleAgent; dojoId: string }) {
  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const runError = useWork((s) => s.runError)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const openConnect = useWork((s) => s.openConnect)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const showDeliverable = useWork((s) => s.showDeliverable)
  const byKey = useAgentApps((s) => s.byKey)
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])
  const [brief, setBrief] = useState('')
  const [rule, setRule] = useState('')
  const elapsed = useElapsed(!!running)
  const skills = useSkills((st) => st.forAgent(dojoId, role.id))
  const addSkill = useSkills((st) => st.add)
  const dropSkill = useSkills((st) => st.remove)

  const tasks = tasksForRole(role.id, role.dept)
  const apps = effectiveApps(agent.custom?.apps ?? role.apps ?? [], byKey[`${dojoId}::${role.id}`])
  const live = apps.filter((id) => tools[id]?.connected)
  const taskIds = new Set(tasks.map((t) => t.id))
  const mine = delivs.filter((d) => taskIds.has(d.taskId)).slice(0, 6)

  // Sans cet appel, `tools` est vide et TOUTES les applications se liraient
  // « non disponible » — le contraire exact de ce que cet écran doit dire.
  useEffect(() => { if (!loadedOnce) void useWork.getState().loadTools() }, [loadedOnce])

  if (!tasks.length) return null

  return (
    <section className="agw">
      <header className="agw-head">
        <h3>What {agent.name} can do for you</h3>
        <span className="agw-sub">
          Pick one. {live.length > 0
            ? <>They will act for real in <b>{live.map((id) => CONNECTOR_BY_ID[id]?.label ?? id).join(', ')}</b>.</>
            : <>Connect an app below and they act inside it instead of only writing about it.</>}
        </span>
      </header>

      <input
        className="agw-brief"
        placeholder={`What should ${agent.name} focus on? (optional)`}
        value={brief}
        maxLength={300}
        onChange={(e) => setBrief(e.target.value)}
      />

      <ul className="agw-tasks">
        {tasks.map((t) => {
          const busy = running === t.id
          const usable = (t.usesConnectors ?? []).filter((c) => live.includes(c))
          return (
            <li key={t.id}>
              <button
                className="agw-task"
                disabled={!!running}
                onClick={() => void run({
                  task: t.id, agentName: agent.name, connectors: live, brief, dojoId,
                  // Les règles permanentes de cette entreprise · voir agents/skills.
                  // Elles partent dans le prompt système, par le canal `context`.
                  context: skillsBlock(dojoId, role.id),
                })}
              >
                <span className="agw-task-main">
                  <strong>{busy ? `${t.label} · ${elapsed}s` : t.label}</strong>
                  {/* Ce qui se passe pendant l'attente, dit une fois pour
                      toutes : la séquence est vraie, la position dedans n'est
                      pas observée, donc on ne la prétend pas. Passé 45 s on
                      ajoute la seule chose qu'on sache de plus: que c'est plus
                      long que d'habitude et que rien n'est perdu. */}
                  <em>{busy
                    ? <>{agent.name} is drafting, then checking their own work before handing it back{usable.length > 0 ? <>, acting in {usable.map((id) => CONNECTOR_BY_ID[id]?.label ?? id).join(', ')}</> : ''}.{elapsed > 45 ? ' Longer than usual, still running, nothing is lost.' : ' Usually under a minute.'}</>
                    : t.blurb}</em>
                  {!busy && usable.length > 0 && <span className="agw-acts">acts in {usable.map((id) => CONNECTOR_BY_ID[id]?.label ?? id).join(', ')}</span>}
                </span>
                {busy && <span className="agw-spin" />}
              </button>
            </li>
          )
        })}
      </ul>

      {/* Tout ce que le serveur peut répondre, dit en français d'humain.
          Deux codes réalistes: « rate » quand on relance trop vite, « auth »
          quand la session a expiré, s'affichaient TELS QUELS : « That didn't
          go through: rate ». Un identifiant à l'écran ne dit ni ce qui s'est
          passé, ni quoi faire ; et ce sont précisément les deux qu'un
          utilisateur normal rencontre. Le reste ne vient que d'un client
          cassé, mais un message poli coûte moins cher qu'un code brut.
          scripts/audit-agents vérifie qu'aucun code ne reste sans phrase. */}
      {runError && (
        <p className="agw-err">
          {runError.code === 'quota'
            ? <>Today's free allowance is used up. <button className="linklike" onClick={() => openStudio('billing')}>Add credits or your own key</button>.</>
            : runError.code === 'needs_key'
              ? <>No model is set up on this deployment yet. <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button>.</>
              : runError.code === 'rate'
                ? <>That was a lot of runs in a row. Give it a minute and ask again: nothing was lost.</>
                : runError.code === 'auth'
                  ? <>Your session has expired. Sign in again (Account tab) and this will work.</>
                  : runError.code === 'busy'
                    ? <>{agent.name} is already working on something. Let that one land first.</>
                    : runError.code === 'unknown_task'
                      ? <>This deployment doesn’t know that task yet: it may be running an older version.</>
                      : <>That didn’t go through. {runError.detail || 'Try again; if it keeps happening, the deployment logs will say why.'}</>}
        </p>
      )}

      {/* Les règles permanentes · ce qu'on n'a plus à réexpliquer.
          Sans elles, la même correction est retapée à chaque lancement, et au
          quatrième jour on corrige le texte à la main plutôt que la consigne , 
          c'est le moment où l'agent cesse de faire gagner du temps. */}
      <div className="agw-rules">
        <span className="agw-apps-h">
          Standing rules
          <em className="agw-rules-n">{skills.length}/{MAX_PER_ROLE}</em>
        </span>
        {skills.length > 0 && (
          <ul className="agw-rulelist">
            {skills.map((s) => (
              <li key={s.id} className={s.role === '*' ? 'is-house' : ''}>
                <span>{s.text}</span>
                {s.role === '*'
                  ? <em title="Applies to every teammate in this company">house</em>
                  : (
                    <button onClick={() => dropSkill(dojoId, s.id)} aria-label={`Remove rule: ${s.text}`}>✕</button>
                  )}
              </li>
            ))}
          </ul>
        )}
        <div className="agw-ruleadd">
          <input
            value={rule}
            maxLength={MAX_LEN}
            placeholder={`Something ${agent.name} should always do`}
            onChange={(e) => setRule(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return
              if (addSkill(dojoId, role.id, rule)) setRule('')
            }}
            aria-label="New standing rule"
          />
          <button
            className="docs-btn"
            disabled={rule.trim().length < 4}
            onClick={() => { if (addSkill(dojoId, role.id, rule)) setRule('') }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Les applications de ce coéquipier, et SURTOUT lesquelles sont reliées.
          C'était une rangée d'étiquettes grises où l'état tenait dans une nuance
          de fond et une infobulle : on ne pouvait pas savoir, d'un coup d'œil,
          pourquoi l'agent écrivait au lieu d'agir. Une application reliée porte
          une coche verte ; une autre est un bouton qui dit ce qu'il fait. */}
      {apps.length > 0 && (
        <div className="agw-apps">
          <span className="agw-apps-h">
            Their apps
            <button type="button" className="agw-howto" onClick={() => openConnect()}>
              How to connect apps
            </button>
          </span>
          <div className="agw-applist">
            {apps.map((id) => {
              const c = CONNECTOR_BY_ID[id]
              if (!c) return null
              const st = tools[id]
              // Tant que l'état n'est pas revenu du serveur, on n'affirme rien :
              // annoncer « non connecté » avant de savoir ferait recommencer une
              // autorisation déjà faite.
              if (!loadedOnce) {
                return (
                  <span key={id} className="agw-app wait">
                    <ConnectorLogo id={id} label={c.label} size={16} />{c.label}
                  </span>
                )
              }
              if (st?.connected) {
                return (
                  <span key={id} className="agw-app on" title={st.account ? `${c.label} · ${st.account}` : `${c.label} · connected`}>
                    <ConnectorLogo id={id} label={c.label} size={16} />
                    {c.label}
                    <span className="agw-tick" aria-label="connected">✓</span>
                  </span>
                )
              }
              // DEUX « non » différents, et les confondre est ce qui fait lire
              // « produit cassé » là où il n'y a qu'une application à
              // enregistrer.
              //
              //   · rien à appeler · le fournisseur n'a pas encore de point
              //     d'accès de notre côté · poser des clés n'y changerait rien ;
              //   · pas enregistré · ce déploiement n'a pas les identifiants
              //     d'application du fournisseur · un administrateur pose deux
              //     variables et c'est réglé.
              //
              // L'écran des applications distinguait déjà les quatre états et
              // nomme même les variables à poser ; celui-ci écrasait les deux
              // sous « not available ». Un connecteur sur deux se lisait alors
              // comme une promesse non tenue au lieu d'une étape d'installation.
              if (c.unwired) {
                return (
                  <a
                    key={id}
                    className="agw-app off"
                    href={c.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={`${c.label} · connected, but nothing can act through it yet`}
                  >
                    <ConnectorLogo id={id} label={c.label} size={16} />
                    {c.label}
                    <span className="agw-soon">no actions yet</span>
                  </a>
                )
              }
              if (!st?.available) {
                return (
                  <button
                    key={id}
                    type="button"
                    className="agw-app setup"
                    onClick={() => openConnect()}
                    title={`${c.label} · this deployment has not registered its app yet · see Connect apps`}
                  >
                    <ConnectorLogo id={id} label={c.label} size={16} />
                    {c.label}
                    <span className="agw-soon">needs setup</span>
                  </button>
                )
              }
              return (
                <button
                  key={id}
                  type="button"
                  className="agw-app connect"
                  onClick={() => startConnect(id)}
                  title={`Connect ${c.label} · opens in its own window`}
                >
                  <ConnectorLogo id={id} label={c.label} size={16} />
                  Connect {c.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="agw-out">
        <span className="agw-apps-h">What they have produced</span>
        {mine.length === 0 ? (
          // « Nothing yet » décrivait un vide sans dire ce qui le remplit.
          // Ce qui manque à quelqu'un devant cet écran est la marche suivante :
          // combien de temps cela prend, et ce qu'il en ressort.
          <div className="agw-empty">
            <p>
              <b>{agent.name} hasn’t been asked for anything yet.</b> Pick a task above , 
              {tasks[0] ? <> <em>{tasks[0].label}</em> is where most people start.</> : ' any of them.'}
            </p>
            <p className="agw-empty-how">
              A run takes about half a minute. {agent.name} drafts it, then checks their own work
              against what that deliverable is supposed to contain and fixes it once before handing
              it back. Everything they produce stays here: openable, exportable, re-runnable.
            </p>
          </div>
        ) : (
          <ul className="agw-list">
            {mine.map((d) => (
              <li key={d.id}>
                <button className="agw-deliv" onClick={() => showDeliverable(d)}>
                  <strong>{d.title}</strong>
                  <em>{relTime(d.createdAt)}{d.model ? ` · ${d.model}` : ''}</em>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
