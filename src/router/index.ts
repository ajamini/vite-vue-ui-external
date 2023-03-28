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
    },
    //Group View Route
    {
      path: '/groups',
      name: 'groups',
      component: () => import('../views/GroupsListView.vue'),
      meta: {
        title: 'Groups'
      }
    },
    //Group Edit View Route
    {
      path: '/groups/:id/edit',
      name: 'group-edit',
      component: () => import('../views/GroupEdit.vue'),
      meta: {
        title: 'Edit Group'
      }
    },
    //Create Offer View Route
    {
      path: '/offers/create',
      name: 'offer-create',
      component: () => import('../views/Offers/CreateView.vue'),
      meta: {
        title: 'Create Offer'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Vue 3 Leveling App`
  next()
})

export default router
