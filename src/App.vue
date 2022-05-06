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
    <div class="w-full -mb-21 md:max-w-md rounded-md bg-white p-2 shadow-md">
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
      <!-- USER FORM -->
      <UserRegistration />
      <!-- END OF USER FORM -->
      <!-- <h1 class="text-xl font-semibold text-amber-900">안녕하세요?</h1>
      <p class="mt-1 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quis voluptatum modi omnis laudantium hic nesciunt, sequi iusto dignissimos ratione quibusdam explicabo aut nulla, numquam ad molestias debitis asperiores minus.</p> -->
      <!-- <div class="flex space-x-2 mt-2">
        <button class="inline-flex justify-center px-4 py-2 text-sm font-medium text-amber-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">확인</button>
        <button @click="toggleModal()" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">취소</button>
      </div> -->
    </div>
  </div>
  <!-- END OF MODAL -->
  <div class="app h-screen">
    <!-- Navbar for Guest -->
    <SimpleNavbar v-show="is_login ? false : true" class="z-20" />
    <!-- Sidebar for User -->
    <Sidebar v-show="is_login ? true : false" class="" />
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import SimpleNavbar from "./components/SimpleNavbar.vue";
import SimpleHome from "./components/SimpleHome.vue";
import Sidebar from "./components/Sidebar.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useUserStore } from "./stores/users";
import UserRegistration from "./components/user/UserRegistration.vue";

export default {
  components: {
    SimpleNavbar,
    SimpleHome,
    Sidebar,
    UserRegistration,
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
      open_modal: computed(() => store.open_modal),
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
