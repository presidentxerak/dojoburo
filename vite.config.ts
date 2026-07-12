import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// A build stamp so we can tell exactly which version is live (printed to the
// console on load and exposed as window.__DOJOBURO_BUILD__).
const BUILD_ID = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC'

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
