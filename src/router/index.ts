import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from "../stores/users";
import { useAuthStore } from "../stores/authentications";
import { useStore } from "vuex";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Simplehome',
    /* component: HomeView */
    component: () => import(/* webpackChunkName: "simplehome" */ '../components/SimpleHome.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.hide_nav = false;
      next();
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../components/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.hide_nav = true;
      next();
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../components/auth/Signup.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.hide_nav = true;
      next();
    }
  },
  {
    path: '/userhome',
    name: 'userhome',
    // route level code-splitting
    // this generates a separate chunk (userhome.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UserHomeView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.hide_nav = true;
      store.show_sidebar = true;
      next();
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
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
  /* ?????? */
  {
    path: '/worships',
    name: 'worships',
    component: () => import(/* webpackChunkName: "worships" */ '../views/WorshipsView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = true;
      next();
    }
  },
  {
    path: '/allworships',
    name: 'allworships',
    component: () => import(/* webpackChunkName: "allWorships" */ '../components/worship/AllWorships.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      store.hide_nav = true;
      next();
    }
  },
  {
    path: '/worshipregistration',
    name: 'worshipregistration',
    component: () => import(/* webpackChunkName: "worshipRegistration" */ '../components/worship/WorshipRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? */
  {
    path: '/bulletins',
    name: 'bulletins',
    component: () => import(/* webpackChunkName: "bulletins" */ '../views/BulletinsView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      store.hide_nav = true;
      next();
    }
  },
  {
    path: '/bulletinregistration',
    name: 'bulletinregistration',
    component: () => import(/* webpackChunkName: "bulletinRegistration" */ '../components/Bulletin/BulletinRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? ?????? */
  {
    path: '/bulletindetail',
    name: 'bulletindetail',
    component: () => import(/* webpackChunkName: "bulletinDetail" */ '../components/Bulletin/BulletinDetail.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      store.hide_nav = true;
      next();
    }
  },
  /* ?????? ?????? */
  {
    path: '/bulletinedit',
    name: 'bulletinedit',
    component: () => import(/* webpackChunkName: "bulletinEdit" */ '../components/Bulletin/BulletinEdit.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? ?????? */
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
  /* ???????????? */
  {
    path: '/schooldetail',
    name: 'schooldetail',
    component: () => import(/* webpackChunkName: "schoolDetail" */ '../components/school/SchoolDetail.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      store.hide_nav = true;
      next();
    }
  },
  /* ?????? ?????? */
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
  /* ?????? ?????? */
  {
    path: '/schooledit',
    name: 'schooledit',
    component: () => import(/* webpackChunkName: "users" */ '../components/school/SchoolEdit.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ???????????? */
  {
    path: '/notices',
    name: 'notices',
    component: () => import(/* webpackChunkName: "notices" */ '../views/NoticesView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = true;
      next();
    }
  },
  /* ???????????? ?????? */
  {
    path: '/noticedetail',
    name: 'noticedetail',
    component: () => import(/* webpackChunkName: "noticeDetail" */ '../components/notice/NoticeDetail.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      store.hide_nav = true;
      next();
    }
  },
  {
    path: '/notices/slide',
    name: 'slidenotice',
    component: () => import(/* webpackChunkName: "notices/slide" */ '../components/common/CustomContent.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ???????????? ?????? */
  {
    path: '/noticeregistration',
    name: 'noticeregistration',
    component: () => import(/* webpackChunkName: "noticeRegistration" */ '../components/notice/NoticeRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ???????????? ?????? */
  {
    path: '/noticeedit',
    name: 'noticeedit',
    component: () => import(/* webpackChunkName: "noticeEdit" */ '../components/notice/NoticeEdit.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? */
  {
    path: '/publicities',
    name: 'publicities',
    component: () => import(/* webpackChunkName: "publicities" */ '../views/PublicitiesView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? ?????? */
  {
    path: '/publicityregistration',
    name: 'publicityregistration',
    component: () => import(/* webpackChunkName: "publicityRegistration" */ '../components/publicity/PublicityRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? ?????? */
  {
    path: '/publicityedit',
    name: 'publicityedit',
    component: () => import(/* webpackChunkName: "publicityEdit" */ '../components/publicity/PublicityEdit.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ????????? */
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = true;
      next();
    }
  },
  /* ????????? ?????? */
  {
    path: '/galleryregistration',
    name: 'galleryregistration',
    component: () => import(/* webpackChunkName: "galleryRegistration" */ '../components/gallery/GalleryRegistration.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ????????? ?????? */
  {
    path: '/gallerydetail',
    name: 'gallerydetail',
    component: () => import(/* webpackChunkName: "galleryDetail" */ '../components/gallery/GalleryDetail.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      store.hide_nav = true;
      next();
    }
  },
  /* ????????? ?????? */
  {
    path: '/galleryedit',
    name: 'galleryedit',
    component: () => import(/* webpackChunkName: "galleryEdit" */ '../components/gallery/GalleryEdit.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = false;
      next();
    }
  },
  /* ?????? */
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "publicities" */ '../views/SettingsView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useUserStore();
      store.show_sidebar = true;
      next();
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
