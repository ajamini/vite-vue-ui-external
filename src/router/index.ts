import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: {
        title: 'Dahboard'
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactListView.vue'),
      meta: {
        title: 'Contacts'
      }
    },
    //Contact Edit View Route
    {
      path: '/contacts/:id/edit',
      name: 'contact-edit',
      component: () => import('../views/ContactEdit.vue'),
      meta: {
        title: 'Edit Contact'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Vue 3 Leveling App`
  next()
})

export default router
