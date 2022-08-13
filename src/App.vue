<template>
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
import { useStore } from "vuex";
import { useUserStore } from "./stores/users";
import SimpleNavbar from "./components/SimpleNavbar.vue";
import SimpleHome from "./components/SimpleHome.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    SimpleNavbar,
    SimpleHome,
    Sidebar,
  },
  setup() {
    /* Vuex */
    const vuexStore = useStore();

    /* Pinia */
    const store = useUserStore();

    const toggleModal = () => {
      store.toggleModal();
    };

    return {
      is_login: computed(() => vuexStore.state.is_login),
      user_mode: computed(() => store.user_mode),
      open_modal: computed(() => store.open_modal),
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
