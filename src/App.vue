<template>
  <div class="h-screen">
    <SimpleNavbar />
    <SimpleHome />
  </div>
</template>

<script>
/* eslint-disable */

import SimpleNavbar from "./components/SimpleNavbar.vue";
import SimpleHome from "./components/SimpleHome.vue";

export default {
  components: {
    SimpleNavbar,
    SimpleHome,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
