type ViteEnv = {
  VITE_NODE_ENV: string
  VITE_TITLE: string
  VITE_BASE: string
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

type INPUTMODE = {
  mode: string
  command: string
}
