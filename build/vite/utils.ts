/**
 * 针对 vite 配置文件的工具函数
 */

// export const loadEnv = (mode: string, root: string): any => {
// eslint-disable-next-line @typescript-eslint/no-var-requires
// return require('dotenv').config({ path: `./lib/.env.${mode}` })
// }

/**
 * 解析整理环境变量类型
 * @param {Recordable} envList 环境变量列表
 * @returns {ViteEnv}
 */
export const resolveEnv = (envList: Recordable): ViteEnv => {
  const result: any = {}

  for (const envKey of Object.keys(envList.parsed)) {
    // let realName = envList[envKey].replace(/\\n/g, '\n')
    let realName = envList[envKey]
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    result[envKey] = realName

    if (typeof realName === 'string') {
      process.env[envKey] = realName
    }
    if (typeof realName === 'object') {
      process.env[envKey] = JSON.stringify(realName)
    }
  }

  return result
}
