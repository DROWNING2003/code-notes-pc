import { test } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router'

import home from '@/pages/home.vue'
import query from '@/pages/query.vue'
import about from '@/pages/about.vue'
import index from '@/pages/index.vue'


const routes = [
  {
    path: '/',
    component: home,
    meta: {
      title: '送ta封信',
    },
  },
  {
    path: '/query',
    component: query,
    meta: {
      title: '写封信',
    },
  },
  {
    path: '/login',
    component: index,
    meta: {
      title: '写封信',
    },
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: '写封信',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
