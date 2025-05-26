import type { RouteRecordRaw } from 'vue-router'

const HomeLayout = () => import('@/layouts/HomeLayout.vue')

// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: HomeLayout,
    children: [
      {
        name: 'Home',
        meta: { nav: true },
        path: '',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        name: 'Effect',
        meta: { nav: true },
        path: 'effect',
        component: () => import('@/pages/effect/index.vue'),
      },
    ],
  },
]

export default routes
