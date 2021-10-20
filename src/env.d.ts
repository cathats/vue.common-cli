/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface INPUTMODE {
  mode: string
  command: string
}

interface ImportMetaEnv {
  NODE_ENV: string
  VITE_APP_TITLE: string
  VITE_APP_BASE: string
}
