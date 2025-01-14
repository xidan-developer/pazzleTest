import { createRouter, createWebHistory, type Router } from 'vue-router'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/',
      component: () => import('@/App.vue'),
      children: [
        {
          name: 'appSearch',
          path: '',
          component: () => import('@/views/AppSearch.vue')
        },
        {
          name: 'appObjectView',
          path: '/:nickname',
          component: () => import('@/views/AppObject.vue')
        }
      ]
    }
  ]
})

export default router
