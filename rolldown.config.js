import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'

export default defineConfig([
  {
    input: 'all-polyfills.js',
    output: {
      file: 'dist/all-polyfills-bundle.js',
      format: 'esm',
      minify: true,
      sourcemap: false,
    },
  },
  {
    input: 'all-polyfills.js',
    output: {
      file: 'dist/all-polyfills-bundle.d.ts',
      format: 'esm'
    },
    plugins: [dts()],
  }
])
