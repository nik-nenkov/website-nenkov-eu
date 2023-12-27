import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { notFoundPageTitle, timelinePageTitle, welcomePageTitle } from "./constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: welcomePageTitle,
    component: () => import('./pages/WelcomePage.vue'),
  },
  {
    path: '/timeline',
    name: timelinePageTitle,
    component: () => import('./pages/TimelinePage.vue'),
  },
  {
    path: '/tech-stack',
    name: "Technologies used",
    component: () => import('./common/TechTable.vue'),
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
