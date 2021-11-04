/**
 * 用于生产环境下的 Mock Server
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
const modules = import.meta.globEager('./**/*.ts')

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  // 忽略 '_' 开头的入口文件
  if (key.includes('/_')) return
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
