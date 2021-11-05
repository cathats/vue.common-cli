import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

async function bootstrap() {
  const app = createApp(App)

  // store 配置项
  setupStore(app)

  // router 配置项
  setupRouter(app)

  app.mount('#app')
}
bootstrap()
