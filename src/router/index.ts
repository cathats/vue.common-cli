import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './modules'

import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

/**
 * 基础路由白名单
 * 将基础路由转为最高二级路由，不允许多级嵌套
 */
const WHITE_NAME_LIST: string[] = []
const getRouteNames = (array: any[]) => {
  array.forEach((element) => {
    WHITE_NAME_LIST.push(element.name)
    getRouteNames(element.children || [])
  })
}
getRouteNames(basicRoutes)

/**
 * 初始化路由实例
 */
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_BASE),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 路由重制方法
 */
export function resetRouter() {
  router.getRoutes().forEach((element) => {
    const { name } = element
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

/**
 * 导出路由初始化配置函数
 */
export function setupRouter(app: App<Element>) {
  app.use(router)
}
