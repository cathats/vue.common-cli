import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
import { store } from './store'

const app = createApp(App)

// 挂载路由
app.use(router)

// 挂载 vuex
app.use(store)

app.mount('#app')
