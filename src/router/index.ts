import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/homePage'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/homePage'
      },
      {
        path: 'homePage',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'categoriesPage',
        component: () => import('@/views/CategoriesPage.vue')
      },
      {
        path: 'statsPage',
        component: () => import('@/views/StatsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
