import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// A build stamp so we can tell exactly which version is live (printed to the
// console on load, exposed as window.__DOJOBURO_BUILD__, and shown at the
// bottom of the menu). It carries the commit Vercel built from, so what the
// browser is running can be matched against the deployment list at a glance —
// "the right version was not deployed" and "my browser kept the old one" look
// identical from the outside otherwise.
const SHA = (process.env.VERCEL_GIT_COMMIT_SHA ?? '').slice(0, 7)
const BUILD_ID = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC' + (SHA ? ` · ${SHA}` : '')

// Privy's wallet stack (viem / WalletConnect) expects a few Node globals in the
// browser — Buffer above all. The polyfills used to be here for XRPL, which is
// long gone; they stay for Privy, which is lazily loaded and would otherwise
// throw on `Buffer is not defined` the moment someone signs in.
export default defineConfig({
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [
    react(),
    nodePolyfills({
      globals: { Buffer: true, global: true, process: true },
      protocolImports: true,
    }),
  ],
  build: {
    modulePreload: {
      // Do NOT preload the 3D engine from index.html.
      //
      // Vite emits a <link rel="modulepreload"> for every shared chunk, and a
      // modulepreload is a HIGH priority fetch — so an 841 kB engine that
      // nothing on screen is waiting for was competing with the 387 kB of app
      // code that the first paint genuinely needs. On a 1.6 Mbps connection the
      // words waited for the sculpture.
      //
      // The scenes import it themselves when they mount, at normal priority,
      // which is the order a reader actually experiences the page in.
      resolveDependencies: (_from, deps) => deps.filter((d) => !/[/]three-[^/]*\.js$/.test(d)),
    },
    rollupOptions: {
      output: {
        // Three chunks that change on completely different schedules, so a
        // deploy does not invalidate all of them at once.
        //
        // The landing page renders the 3D hero, so three.js is on the critical
        // path whether we like it or not — but it is ~600 kB that changes about
        // once a year, and it was being rebuilt into the same file as the app.
        // Every deploy therefore re-downloaded it. Split out, it is fetched once
        // and then served from cache across releases.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/[\\/]node_modules[\\/](three|@react-three|troika|maath)/.test(id)) return 'three'
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react'
        },
      },
    },
    // the 3D and auth chunks are legitimately large · warn on anything ELSE
    chunkSizeWarningLimit: 900,
  },
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
})
