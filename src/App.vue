<template>
  <!-- LOADING -->
  <Loading v-if="isLoading" :content="loadingContent"/>
  <!-- END OF LOADING -->

  <!-- MODAL -->
  <div
    v-if="open_modal"
    class="
      fixed
      inset-0
      x-10
      overflow-y-auto
      flex
      h-screen
      w-screen
      items-center
      justify-center
      bg-gray-700/60
      px-3
      py-10
      z-30
    "
  >
    <div class="w-full -mb-12 md:max-w-md rounded-md bg-white p-2 shadow-md">
      <!-- Close Button -->
      <div class="flex justify-end">
        <button
          @click="toggleModal()"
          class="
            text-blue-400
            top-5
            right-0
            h-7
            w-7
            text-2xl
            font-semibold
            justify-center
            items-center
            focus:outline-none
          "
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
  <!-- END OF MODAL -->
  <!-- WORSHIP_MODAL -->
  <Modal v-if="open_worship_modal" />
  <!-- END OF WORSHIP_MODAL -->

  <div class="app h-screen">
    <!-- Navbar for Guest -->
    <SimpleNavbar v-show="is_login || hide_nav ? false : true" class="z-20" />
    <!-- Sidebar for User -->
    <Sidebar v-show="is_login ? true : false" :class="show_sidebar ? '' : 'hidden'" />
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import { computed } from "vue";
import router from '@/router';
import { useStore } from "vuex";
import { useUserStore } from "./stores/users";
import { useWorshipStore } from "./stores/worships";
import { useAuthStore } from "./stores/authentications";
import { useImageStore } from "./stores/images";
import SimpleNavbar from "./components/SimpleNavbar.vue";
import SimpleHome from "./components/SimpleHome.vue";
import Sidebar from "./components/Sidebar.vue";
import Loading from "./components/common/Loading.vue";
import Modal from "./components/common/Modal.vue";

export default {
  components: {
    SimpleNavbar,
    SimpleHome,
    Sidebar,
    Loading,
    Modal,
  },
  setup() {
    /* Vuex */
    const vuexStore = useStore();

    /* Pinia */
    const store = useUserStore();
    const imgStore = useImageStore();
    const worshipStore = useWorshipStore();
    const authStore = useAuthStore();

    const toggleModal = () => {
      store.toggleModal();
    };

    /* 인증(Account) */
    const account = computed(() => {

      authStore.account().then(() => {
        console.log('authStore.me:', authStore.me)
        if (authStore.me) {
            router.push("/userhome");
            vuexStore.state.is_login = true;
        }
      });

      return authStore.me;
    })

    if (account.value) {
      console.log('account:', account.value)
      vuexStore.state.is_login = true;
    } else {
      vuexStore.state.is_login = false;
    }

    return {
      is_login: computed(() => vuexStore.state.is_login),
      isLoading: computed(() => imgStore.isLoading),
      loadingContent: computed(() => imgStore.loadingContent),
      isLoading: computed(() => worshipStore.isLoading),
      loadingContent: computed(() => worshipStore.loadingContent),
      isLoading: computed(() => authStore.isLoading),
      loadingContent: computed(() => authStore.loadingContent),
      user_mode: computed(() => store.user_mode),
      open_modal: computed(() => store.open_modal),
      open_worship_modal: computed(() => worshipStore.open_modal),
      show_sidebar: computed(() => store.show_sidebar),
      hide_nav: computed(() => store.hide_nav),
      toggleModal,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
