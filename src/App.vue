<template>
  <div class="app h-screen">
    <!-- Navbar for Guest -->
    <SimpleNavbar class="z-20" v-show="is_login ? false : true" />
    <!-- Sidebar for User -->
    <Sidebar v-show="is_login ? true : false" class=""/>
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

export default {
  components: {
    SimpleNavbar,
    SimpleHome,
    Sidebar,
  },
  setup () {
    const store = useStore();

    return  {
      is_login: computed(() => store.state.is_login),
    }
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
