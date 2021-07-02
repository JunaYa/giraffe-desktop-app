import { join } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  root: join(__dirname, 'src/render'),
  base: './',
  build: {
    outDir: join(__dirname, 'dist/render'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: join(__dirname, 'src/render/index.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src/render')
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
  ]
})
