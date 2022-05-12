import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimpleHome from '../components/SimpleHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Simplehome',
    /* component: HomeView */
    component: SimpleHome
  },
  {
    path: '/userhome',
    name: 'userhome',
    // route level code-splitting
    // this generates a separate chunk (userhome.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UserHomeView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
  },
  {
    path: '/userdetail',
    name: 'userdetail',
    component: () => import(/* webpackChunkName: "users" */ '../components/user/UserDetail.vue')
  },
  {
    path: '/userregistration',
    name: 'userregistration',
    component: () => import(/* webpackChunkName: "users" */ '../components/user/UserRegistration.vue')
  },
  {
    path: '/useredit',
    name: 'useredit',
    component: () => import(/* webpackChunkName: "users" */ '../components/user/UserEdit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
