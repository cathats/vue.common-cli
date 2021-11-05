/**
 * 扩展全局类型
 */
export {}
declare global {
  declare type Recordable<T = any> = Record<string, T>
  declare type INPUTMODE = {
    mode: string
    command: string
  }
  declare interface ViteEnv {
    VITE_NODE_ENV: string
    VITE_TITLE: string
    VITE_BASE: string
  }
  declare interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }
}
