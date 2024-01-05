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
    component: () => import('./pages/ProjectsHistoryPage.vue'),
  },
  {
    path: '/tech-stack',
    name: "Technologies used",
    component: () => import('./pages/TechnologiesPage.vue'),
  },
  {
    path: '/services',
    name: "Providing Services",
    component: () => import('./pages/ProvidedServicesPage.vue'),
  },
  {
    path: '/intro',
    name: "Introduction",
    component: () => import('./pages/IntroductionPage.vue'),
  },
  {
    path: '/contact',
    name: "Contact Details",
    component: () => import('./pages/ContactDetailsPage.vue'),
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
