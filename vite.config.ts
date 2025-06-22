import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from '@crxjs/vite-plugin'
import path from 'path'
// @ts-expect-error no types
import manifest from './manifest.config.js'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({manifest})
  ],
  server: {
    port: 3001,
    strictPort: true,
    hmr: {
      overlay: false
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
