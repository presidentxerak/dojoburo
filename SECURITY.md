# Security

DojoBuro is a **client-side SPA** that talks directly to public XRPL nodes
(and, optionally, the Xaman API) from the browser, plus a set of **optional
serverless functions** (`api/`) that power connectors, the encrypted vault and
the work engine when the operator configures them (`DATABASE_URL`,
`CONNECTOR_ENC_KEY`, …). Without that configuration the app degrades to a
fully client-side experience.

## Threat model & mitigations

### 0. Server identity & the encrypted vault
- **Verified identity.** API calls that read or write account data
  (`/api/secrets`, `/api/connect`, `/api/tool-action`, `/api/tool-data`,
  `/api/agent-run`) verify the caller: a claimed Privy DID must be proven by a
  valid **Privy access token** (ES256 JWT, checked server-side against Privy's
  JWKS — issuer, audience, expiry, signature; see `api/_lib/privyAuth.ts`). An
  unproven claim is rejected. The token travels only in the `Authorization`
  header, never in a URL.
- **Guest accounts** are keyed by a **128-bit CSPRNG id** generated with
  `crypto.getRandomValues` — the id itself is the bearer credential and is not
  guessable/enumerable.
- **Write-only secrets vault.** Company env vars are sealed with
  **AES-256-GCM** (`CONNECTOR_ENC_KEY`) before touching the DB and are never
  returned to any client — not even a partial preview. Only the server
  decrypts them, just-in-time for a run. `/api/secrets` is rate-limited per IP
  and per account (`SECRETS_RATE_MAX` / `SECRETS_RATE_WINDOW_MS`).
- OAuth connector tokens follow the same rules: sealed at rest, never sent to
  the browser, and the OAuth `state` is HMAC-signed with the identity that was
  verified when the flow started.

### 1. XSS (cross-site scripting) — highest-impact web risk
- **React escapes all interpolated text by default.** We never use
  `dangerouslySetInnerHTML`, `eval`, or `new Function`. All rendered strings
  (agent output, banter, logs) are plain text.
- A strict **Content-Security-Policy** (see `public/_headers` / `vercel.json`)
  blocks inline/injected scripts: `script-src 'self'`, `object-src 'none'`,
  `base-uri 'self'`. Even if markup were injected, it could not run scripts or
  exfiltrate to an arbitrary origin (`connect-src` is allow-listed to the XRPL
  and Xaman endpoints only).

### 2. Wallet key theft (the money risk)
- Agent/treasury **seeds live only in this browser's `localStorage`**,
  namespaced per network. They are never sent anywhere.
- For real value, **use Xaman** (`src/xrpl/xaman.ts`): non-custodial signing via
  OAuth2 **PKCE with an API key that has no secret** — the private key never
  touches the app. Recommended flow on Mainnet.
- Guidance shipped in the UI: keep only small amounts on the in-browser hot
  wallets; prefer Xaman for Mainnet.
- **Hardening roadmap:** optional passphrase-encryption of stored seeds
  (WebCrypto AES-GCM) so a stolen `localStorage` dump is useless without the
  passphrase; auto-lock/clear on idle.

### 3. Clickjacking / UI redress
- `X-Frame-Options: DENY` + CSP `frame-ancestors 'none'` — the app cannot be
  embedded in an attacker's iframe to trick users into signing.

### 4. Supply-chain / dependency attacks
- Pinned versions + committed `package-lock.json`.
- Run `npm audit` in CI and enable **Dependabot**/Renovate for automated patch
  PRs. Treat `xrpl`, `xumm`, `vite`, `react` updates as security-relevant.
- Production build ships **no source maps** (Vite default) so internals aren't
  exposed.
- Consider Subresource Integrity for the one external asset (Google Fonts) or
  self-host the font to drop the third-party origin entirely.

### 5. Transport & headers
- `Strict-Transport-Security` (HSTS, preload) forces HTTPS.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`,
  `Permissions-Policy` locking down geolocation/camera/mic/USB/payment,
  `Cross-Origin-Opener-Policy`/`-Resource-Policy: same-origin`.
- All `target="_blank"` links use `rel="noreferrer"` (implies `noopener`),
  preventing reverse-tabnabbing.

### 6. Scraping, bots, DDoS
- There is no private server-side data to scrape — the app only reads the
  **public** XRP Ledger. So "scraping the app" yields nothing sensitive.
- Protect the **deployed site** at the CDN/edge, not in app code:
  - Front it with **Cloudflare / Fastly / CloudFront + WAF**.
  - Enable **rate limiting**, **bot management/turnstile**, and **DDoS
    protection** at the edge.
  - `robots.txt` documents intent but does not stop malicious bots — the WAF
    does.
- The XRPL calls hit **public nodes**; for production traffic run your **own
  rippled / Clio node** (or a paid provider) so a third-party node's rate limits
  or availability can't be used against you, and so you control that dependency.

### 7. Phishing / social engineering (the realistic attack on a wallet app)
- Serve from a **single canonical HTTPS domain**; register look-alike domains.
- The Mainnet switch is gated behind an explicit confirmation.
- Because signing is delegated to Xaman, users approve a **human-readable
  transaction on their own device** — the app can't silently move funds.

## Verifying the headers

After deploying, check:

```bash
curl -sI https://your-domain | grep -iE 'content-security|x-frame|strict-transport|x-content-type|referrer|permissions|cross-origin'
```

or use https://securityheaders.com and https://csp-evaluator.withgoogle.com.

## Reporting

Found a vulnerability? Please open a private security advisory on the repository
rather than a public issue.
