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
      },
    },
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src/render'),
    },
  },
  plugins: [Vue(), VueJsx()],
  server: {
    host: '127.0.0.1',
    port: 3333,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: true,
    open: '',
    proxy: {},
  },
})
