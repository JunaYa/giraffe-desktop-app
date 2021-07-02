import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src/render'),
  base: './',
  build: {
    outDir: resolve(__dirname, 'dist/render'),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/render')
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
  ]
})
