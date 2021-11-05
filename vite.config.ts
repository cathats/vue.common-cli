/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import { createVitePlugins } from './build/vite/plugin/index'
import { resolveEnv } from './build/vite/utils'

export default ({ command, mode }: INPUTMODE) => {
  const env = require('dotenv').config({ path: `./lib/.env.${mode}` })
  const viteEnv = resolveEnv(env)
  const isBuild = command === 'build'
  return defineConfig({
    base: process.env.VITE_BASE,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, './')
      }
    }
  })
}
