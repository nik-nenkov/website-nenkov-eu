import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Nikolay Nenkov',
    component: () => import('./pages/WelcomePage.vue'),
  },
  {
    path: '/timeline',
    name: 'Chronological Order',
    component: () => import('./pages/TimelinePage.vue'),
  },
  {
    path: '/projects',
    name: 'Participation in Projects',
    component: () => import('./pages/ProjectsPage.vue'),
  },
  {
    path: '/tech-stack',
    name: "Technologies used",
    component: () => import('./pages/TechnologiesPage.vue'),
  },
  {
    path: '/Services',
    name: "Providing Services",
    component: () => import('./pages/ProvidedServicesPage.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'There is nothing on this route',
    component: () => import('./pages/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
