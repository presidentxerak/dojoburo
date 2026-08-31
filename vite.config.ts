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

// XRPL's browser bundle needs a few Node globals/polyfills (Buffer, events, crypto).
export default defineConfig({
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [
    react(),
    nodePolyfills({
      globals: { Buffer: true, global: true, process: true },
      protocolImports: true,
    }),
  ],
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
})
