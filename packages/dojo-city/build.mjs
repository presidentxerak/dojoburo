// Bundle the kit to ESM, externalising the peer deps, and copy the stylesheet.
// Types are emitted separately by `tsc` (see package.json "build" script).
import { build } from 'esbuild'
import { cpSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))

await build({
  entryPoints: [join(root, 'src/index.ts')],
  outfile: join(root, 'dist/index.js'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2020',
  jsx: 'automatic',
  sourcemap: true,
  logLevel: 'info',
  // the host app provides these — never bundle them
  external: ['react', 'react-dom', 'react/jsx-runtime', 'three', '@react-three/fiber', '@react-three/drei'],
})

cpSync(join(root, 'src/styles.css'), join(root, 'dist/styles.css'))
console.log('✓ dist/index.js + dist/styles.css written')
