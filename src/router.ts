import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {notFoundPageTitle, welcomePageTitle} from './constants'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: welcomePageTitle,
    component: () => import('./pages/WelcomePage.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: notFoundPageTitle,
    component: () => import('./pages/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
