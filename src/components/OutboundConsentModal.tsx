// One-time confirmation before the first OUTBOUND action (send an email, post,
// broadcast, reply). Shown once; after the user confirms, it never appears again.
import { createPortal } from 'react-dom'
import { useOutboundConsent } from '../agents/outboundConsent'
import { Logo } from './Logo'

export function OutboundConsentModal() {
  const pending = useOutboundConsent((s) => s.pending)
  const decide = useOutboundConsent((s) => s.decide)
  if (!pending) return null

  const verb = pending.action === 'send' ? 'send an email' : pending.action === 'reply' ? 'reply' : 'post'
  return createPortal(
    <div className="oc-scrim" onMouseDown={() => decide(false)}>
      <div className="oc-modal" role="alertdialog" aria-modal="true" aria-label="Confirm outbound action" onMouseDown={(e) => e.stopPropagation()}>
        <div className="oc-icon"><Logo size={30} /></div>
        <h3 className="oc-title">Allow agents to {verb} for real?</h3>
        <p className="oc-body">
          An agent is about to <b>{verb}</b> using your connected <b>{pending.app}</b>. This leaves your organisation and can't be undone.
        </p>
        <p className="oc-note">You'll only be asked <b>once</b> · after you confirm, DojoBuro won't ask again for outbound actions. You can re-enable the prompt anytime in Settings.</p>
        <div className="oc-actions">
          <button className="btn tiny ghost" onClick={() => decide(false)}>Cancel</button>
          <button className="btn primary tiny" onClick={() => decide(true)}>Confirm &amp; don't ask again</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
