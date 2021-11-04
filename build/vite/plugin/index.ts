import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteComponents } from './components'

export function createVitePlugins(viteEnv: ViteEnv, isDevelopment: boolean) {
  const {
    // 解构需要的变量
    VITE_NODE_ENV
  } = viteEnv
  console.log(VITE_NODE_ENV, isDevelopment)

  const vitePluginList: (Plugin | Plugin[])[] = [vue()]

  vitePluginList.push(viteComponents)

  return vitePluginList
}
