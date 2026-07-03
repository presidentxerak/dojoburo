import { useState } from 'react'
import { useDojo } from '../store'
import { NETWORKS, type NetworkId } from '../xrpl/network'
import { AsciiFace } from './AsciiFace'

export function TopBar() {
  const net = useDojo((s) => s.net)
  const setNetwork = useDojo((s) => s.setNetwork)
  const refresh = useDojo((s) => s.refreshBalances)
  const loading = useDojo((s) => s.balancesLoading)
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const muted = useDojo((s) => s.muted)
  const musicOn = useDojo((s) => s.musicOn)
  const toggleMute = useDojo((s) => s.toggleMute)
  const toggleMusic = useDojo((s) => s.toggleMusic)
  const [confirmMainnet, setConfirmMainnet] = useState(false)

  const pick = (id: NetworkId) => {
    if (id === 'mainnet' && net !== 'mainnet') {
      setConfirmMainnet(true)
      return
    }
    setNetwork(id)
  }

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-logo"><AsciiFace mood="idle" /></span>
        <div>
          <h1>DojoBuro</h1>
          <p className="tagline">Startup pixel · orchestrée sur XRPL</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="net-switch" role="tablist" aria-label="Réseau XRPL">
          {(['testnet', 'devnet', 'mainnet'] as NetworkId[]).map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={net === id}
              className={`net-tab ${net === id ? 'active' : ''} ${id === 'mainnet' ? 'is-live' : ''}`}
              onClick={() => pick(id)}
            >
              {NETWORKS[id].label}
              {id === 'mainnet' && ' ⚠'}
            </button>
          ))}
        </div>
        <button className="btn tiny" onClick={() => void refresh()} disabled={loading}>
          {loading ? '…' : '↻ Soldes'}
        </button>
        <button
          className={`btn tiny theme-btn ${musicOn ? 'on' : ''}`}
          onClick={() => toggleMusic()}
          aria-label="Musique d'ambiance"
          title="Musique d'ambiance"
        >
          {musicOn ? '♪' : '♪̶'}
        </button>
        <button
          className="btn tiny theme-btn"
          onClick={() => toggleMute()}
          aria-label="Couper le son"
          title="Sons"
        >
          {muted ? '🔇' : '🔊'}
        </button>
        <button
          className="btn tiny theme-btn"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Basculer le thème"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {confirmMainnet && (
        <div className="modal-backdrop" onClick={() => setConfirmMainnet(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Passer en Mainnet ?</h3>
            <p>
              Le Mainnet manipule de la <strong>vraie valeur</strong>. Il n'y a pas de faucet : vous devez financer
              les wallets vous-même. Les paiements entre agents seront réels et irréversibles.
            </p>
            <p className="muted small">
              Astuce : gardez de petits montants sur ces wallets « chauds » stockés dans ce navigateur.
            </p>
            <div className="modal-actions">
              <button className="btn ghost" onClick={() => setConfirmMainnet(false)}>Annuler</button>
              <button
                className="btn danger"
                onClick={() => {
                  setNetwork('mainnet')
                  setConfirmMainnet(false)
                }}
              >
                Je comprends, passer en Mainnet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
