import { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '/@/enums/pageEnum'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    // title: t('routes.basic.login')
    title: '主页'
  }
}

export const basicRoutes = [RootRoute]
