import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({
    outputDir: 'types'
  })],
  build: {
    lib: {
      name: 'delogger',
      entry: 'src/index.ts',
    },
    rollupOptions: {
      output: {
        exports: 'named',
        entryFileNames: 'index.[format].js',
      }
    }
  }
})
