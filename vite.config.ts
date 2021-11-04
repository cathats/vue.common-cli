/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import path from 'path'
import { createVitePlugins } from './build/vite/plugin/index'

export default ({ mode }: INPUTMODE) => {
  require('dotenv').config({ path: `./lib/.env.${mode}` })
  return defineConfig({
    base: process.env.VITE_BASE,
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, './')
      }
    }
  })
}
