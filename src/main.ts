import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
import { setupStore } from './store'

async function bootstrap() {
  const app = createApp(App)

  // store 配置项
  setupStore(app)

  // 路由配置项
  app.use(router)

  app.mount('#app')
}
bootstrap()
