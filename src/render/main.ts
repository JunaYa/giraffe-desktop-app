import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
