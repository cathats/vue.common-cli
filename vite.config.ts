/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }: INPUTMODE) => {
  require('dotenv').config({ path: `./lib/.env.${mode}` })
  return defineConfig({
    base: '/',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, './')
      }
    }
  })
}
