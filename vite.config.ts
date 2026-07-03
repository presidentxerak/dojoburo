import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// XRPL's browser bundle needs a few Node globals/polyfills (Buffer, events, crypto).
export default defineConfig({
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
