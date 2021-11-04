import { DefineComponent } from 'vue'

declare global {
  interface ViteEnv {
    VITE_NODE_ENV: string
    VITE_TITLE: string
    VITE_BASE: string
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }

  interface INPUTMODE {
    mode: string
    command: string
  }
}

declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
