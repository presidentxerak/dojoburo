// Who else is in this company.
//
// A company used to be one browser. It is now an organisation, and this is the
// screen that shows it: who is in it, what they may do, and what is still in
// flight between this browser and the server.
//
// An invitation is a LINK, not an email. The access token proves an identity
// and nothing else, so an address the client typed proves nothing at all —
// matching on it would let anyone claim a colleague's seat. Holding the secret
// is the proof instead, which is also why the link is shown exactly once: it is
// not stored anywhere it could be read back.
import { useCallback, useEffect, useState } from 'react'
import { apiFetch } from '../../lib/apiFetch'
import { refParams } from '../../agents/workApi'
import { onSyncState, pendingConflicts, drain, pullChanges, type SyncState } from '../../lib/sync'

type Role = 'owner' | 'admin' | 'member' | 'viewer'

interface Member { accountId: string; email: string | null; role: Role; joinedAt: string; you: boolean }
interface Invite { id: string; email: string | null; role: Role; createdAt: string; expiresAt: string }
interface OrgView { ok: boolean; error?: string; org?: { id: string; name: string }; role?: Role; members?: Member[]; invites?: Invite[] }

const ROLE_NOTE: Record<Role, string> = {
  owner: 'Owns the company. Billing, and the only one who can delete it.',
  admin: 'Invites people and connects apps.',
  member: 'Runs the teams and edits the work.',
  viewer: 'Reads everything, changes nothing.',
}

const SYNC_NOTE: Record<SyncState, string> = {
  off: 'Not syncing · this company lives in this browser only.',
  idle: 'Everything is saved to your company.',
  syncing: 'Saving…',
  offline: 'Offline · your work is kept here and will send when you are back.',
  'read-only': 'You can read this company but not change it.',
  conflict: 'Someone changed the same thing you did.',
}

export function TeamTab() {
  const [view, setView] = useState<OrgView | null>(null)
  const [busy, setBusy] = useState(false)
  const [link, setLink] = useState<string | null>(null)
  const [inviteRole, setInviteRole] = useState<Exclude<Role, 'owner'>>('member')
  const [inviteEmail, setInviteEmail] = useState('')
  const [name, setName] = useState('')
  const [sync, setSync] = useState<SyncState>('off')
  const [conflicts, setConflicts] = useState(pendingConflicts())

  const load = useCallback(async () => {
    try {
      const r = await apiFetch(`/api/org?action=me&${refParams()}`)
      const j: OrgView = await r.json()
      setView(j)
      if (j.org) setName(j.org.name)
    } catch {
      setView({ ok: false, error: 'offline' })
    }
  }, [])

  useEffect(() => { void load() }, [load])
  useEffect(() => onSyncState(setSync), [])
  useEffect(() => {
    // the conflict list is not reactive · re-read it whenever the state moves
    setConflicts(pendingConflicts())
  }, [sync])

  const post = async (action: string, body: Record<string, unknown> = {}) => {
    setBusy(true)
    try {
      const r = await apiFetch(`/api/org?action=${action}&${refParams()}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      })
      return await r.json()
    } finally {
      setBusy(false)
    }
  }

  if (!view) return <div className="team-wrap"><p className="team-lead">Loading your company…</p></div>

  if (!view.ok) {
    // Three different "no": nothing to fix, something you can fix, and
    // something that will fix itself. Saying "could not reach" to all three is
    // how a person ends up looking for a network problem they do not have.
    const why = view.error === 'no_backend'
      ? 'This install keeps every company in your own browser. Sharing one with a colleague needs the hosted version.'
      : view.error === 'auth'
        ? 'Sign in to share this company. Until you do, everything you build stays in this browser — which is fine on your own, and no use to a colleague.'
        : 'Could not reach your company just now. Your work is safe in this browser and will send when the connection is back.'
    return (
      <div className="team-wrap">
        <p className="team-lead">{why}</p>
      </div>
    )
  }

  const role = view.role ?? 'viewer'
  const canInvite = role === 'owner' || role === 'admin'
  const members = view.members ?? []
  const invites = view.invites ?? []

  return (
    <div className="team-wrap">
      {/* the surface's own header already says "Your company" · not twice */}
      <p className="team-lead">
        Everyone here shares the same companies, the same teammates and the same work. Your browser keeps
        its own copy, so the app stays fast and keeps working offline — it is simply no longer the only one.
      </p>

      {/* ---- the name ---- */}
      <label className="team-field">
        <span>COMPANY NAME</span>
        <div className="team-row">
          <input
            value={name}
            disabled={!canInvite}
            onChange={(e) => setName(e.target.value)}
            aria-label="Company name"
          />
          {canInvite && name.trim() && name !== view.org?.name && (
            <button className="btn tiny" disabled={busy} onClick={async () => { await post('rename', { name }); await load() }}>
              Save
            </button>
          )}
        </div>
      </label>

      {/* ---- sync ---- */}
      <div className={`team-sync s-${sync}`}>
        <b>{SYNC_NOTE[sync]}</b>
        {sync === 'offline' && (
          <button className="btn tiny ghost" onClick={() => { void drain() }}>Try now</button>
        )}
        {sync !== 'off' && sync !== 'offline' && (
          <button className="btn tiny ghost" onClick={() => { void pullChanges().then(() => drain()) }}>Refresh</button>
        )}
      </div>

      {conflicts.length > 0 && (
        <div className="team-conflicts">
          <b>Changed by someone else while you were working</b>
          <p>
            Your company now shows their version, because that is what everyone else sees. Yours is kept
            here so nothing is lost — open the item and put back anything you still want.
          </p>
          <ul>
            {conflicts.map((c) => <li key={c.key}><code>{c.key}</code></li>)}
          </ul>
        </div>
      )}

      {/* ---- people ---- */}
      <h4 className="team-h">People</h4>
      <div className="team-list">
        {members.map((m) => (
          <div className="team-member" key={m.accountId}>
            <div className="team-who">
              <strong>{m.email || 'A teammate'}{m.you ? ' · you' : ''}</strong>
              <span>{ROLE_NOTE[m.role]}</span>
            </div>
            {canInvite && m.role !== 'owner' && !m.you ? (
              <div className="team-acts">
                <select
                  value={m.role}
                  aria-label={`Role for ${m.email || 'this teammate'}`}
                  onChange={async (e) => { await post('role', { accountId: m.accountId, role: e.target.value }); await load() }}
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
                <button
                  className="btn tiny danger"
                  disabled={busy}
                  onClick={async () => { await post('remove', { accountId: m.accountId }); await load() }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <span className="team-role">{m.role}</span>
            )}
          </div>
        ))}
      </div>

      {/* ---- invitations ---- */}
      {canInvite && (
        <>
          <h4 className="team-h">Invite someone</h4>
          <div className="team-invite">
            <input
              placeholder="Their email (a label · we do not send it)"
              value={inviteEmail}
              aria-label="Who this invitation is for"
              onChange={(e) => setInviteEmail(e.target.value)}
            />
            <select value={inviteRole} aria-label="Role" onChange={(e) => setInviteRole(e.target.value as Exclude<Role, 'owner'>)}>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
              <option value="viewer">Viewer</option>
            </select>
            <button
              className="btn primary tiny"
              disabled={busy}
              onClick={async () => {
                const j = await post('invite', { role: inviteRole, inviteEmail })
                if (j?.token) setLink(`${location.origin}/#join=${j.token}`)
                setInviteEmail('')
                await load()
              }}
            >
              Create invitation
            </button>
          </div>

          {link && (
            <div className="team-link">
              <b>Send this link to them. It is shown once.</b>
              <p>Anyone who opens it joins your company, so send it the way you would send a password.</p>
              <div className="team-row">
                <input readOnly value={link} onFocus={(e) => e.currentTarget.select()} aria-label="Invitation link" />
                <button className="btn tiny" onClick={() => { void navigator.clipboard?.writeText(link) }}>Copy</button>
                <button className="btn tiny ghost" onClick={() => setLink(null)}>Done</button>
              </div>
            </div>
          )}

          {invites.length > 0 && (
            <div className="team-list">
              {invites.map((i) => (
                <div className="team-member" key={i.id}>
                  <div className="team-who">
                    <strong>{i.email || 'Anyone with the link'}</strong>
                    <span>Invited as {i.role} · expires {new Date(i.expiresAt).toLocaleDateString()}</span>
                  </div>
                  <button
                    className="btn tiny ghost"
                    disabled={busy}
                    onClick={async () => { await post('revoke', { id: i.id }); await load() }}
                  >
                    Revoke
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
