/**
 * vite 的按需引入
 */
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

export const viteComponents = ViteComponents({
  globalComponentsDeclaration: true, // TypeScript 支持
  customComponentResolvers: [AntDesignVueResolver()]
})
