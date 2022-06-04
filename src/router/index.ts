import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from "../stores/users";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Simplehome',
    /* component: HomeView */
    component: () => import(/* webpackChunkName: "simplehome" */ '../components/SimpleHome.vue')
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
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = true;
      next();
    }
  },
  {
    path: '/userdetail',
    name: 'userdetail',
    component: () => import(/* webpackChunkName: "users" */ '../components/user/UserDetail.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  {
    path: '/userregistration',
    name: 'userregistration',
    component: () => import(/* webpackChunkName: "users" */ '../components/user/UserRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  {
    path: '/useredit',
    name: 'useredit',
    component: () => import(/* webpackChunkName: "users" */ '../components/user/UserEdit.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* 학교관리 */
  {
    path: '/schools',
    name: 'schools',
    component: () => import(/* webpackChunkName: "schools" */ '../views/SchoolsView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = true;
      next();
    }
  },
  {
    path: '/schooldetail',
    name: 'schooldetail',
    component: () => import(/* webpackChunkName: "schoolDetail" */ '../components/school/SchoolDetail.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  {
    path: '/schoolregistration',
    name: 'schoolregistration',
    component: () => import(/* webpackChunkName: "schoolsRegistration" */ '../components/school/SchoolRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
