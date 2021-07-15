import { join } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Pages({
      pagesDir: [
        { dir: join(__dirname, './src/render/pages'), baseRoute: '' },
        // { dir: './src/render/pages/users', baseRoute: 'user' },
      ],
      exclude: ['**/components/*.vue', '**/store/'],
      extensions: ['vue', 'md'],
      syncIndex: true,
      replaceSquareBrackets: true,
      extendRoute(route) {
        console.log('+++++', route)
        if (route.path === '/') {
          // Index is unauthenticated.
          return route
        }
        if (route.name === 'about') {
          route.props = (route) => ({ query: route.query.q })
        }

        if (route.name === 'components') {
          return {
            ...route,
            beforeEnter: (route) => {
              // eslint-disable-next-line no-console
              console.log(route)
            },
          }
        }
        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { auth: true },
        }
      },
    }),
    Markdown(),
  ],
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
  server: {
    host: '127.0.0.1',
    port: 3333,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: true,
    open: '',
    proxy: {},
  },
})
