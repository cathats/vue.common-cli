/**
 * 创建 Mock 服务
 */
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isDevelopment: boolean) {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    localEnabled: isDevelopment,
    prodEnabled: !isDevelopment,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';
      setupProdMockServer();
    `
  })
}
