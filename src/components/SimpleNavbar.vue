<template>
  <nav
    class="
      fixed
      w-full
      bg-white
      text-gray-100
      py-2
      px-6
      shadow
      md:flex
      justify-between
      items-center
    "
  >
    <!-- Logo -->
    <div class="cursor-pointer">
      <router-link to="/" class=" flex items-center text-green-500 text-md md:text-lg mr-1 z-20">
        <img src="../assets/logo/01.jpeg" class="w-[51px] h-[51px]" alt="" />
        <p class="md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-epic-blue">순전한 교회</p>
      </router-link>
    </div>

    <!-- Hambuger button -->
    <span
      @click="menuOpen()"
      class="absolute md:hidden right-6 top-5 cursor-pointer text-4xl z-10"
    >
      <i class="material-icons text-gray-700">{{ open ? "close" : "menu" }}</i>
    </span>

    <!-- Menu -->
    <ul
      class="
        fixed
        transform
        translate-x-0
        md:flex md:items-center md:px-0
        left-0
        text-left
        px-10
        md:pb-0
        pb-10
        md:static
        bg-white
        md:w-auto
        w-full
        top-14
        duration-700
        ease-in
      "
      :class="[open ? 'top-16.5' : 'top-[-100%]']"
    >
      <li
        v-for="link in links"
        :key="link.id"
        class="left-0 md:mx-4 md:my-0 my-6"
      >
        <a
          :href="link.link"
          class="text-xl text-gray-700 hover:text-green-500"
          >{{ link.name }}</a
        >
      </li>
      <router-link @click="ToggleLogin()" to="/userhome"
        class="
          flex
          bg-green-400
          hover:bg-green-500
          duration-300
          font-sm
          text-white
          rounded
          px-3
          py-2
        "
      >
        <i class="material-icons mr-2 text-muted">login</i>
        로그인하기
      </router-link>
    </ul>
    <!-- End of Menu -->
  </nav>
  <!-- End of Navbar -->
</template>

<script>
/* eslint-disable */
import { ref, computed, } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    let open = ref(false);

    let links = [
      { id: 0, name: "홈", link: "#home" },
      { id: 1, name: "사역 소개", link: "#introduce" },
      { id: 2, name: "순전한 학교", link: "#school" },
      { id: 3, name: "공지 및 후원", link: "#notices" },
      { id: 4, name: "기타", link: "#etc" },
    ];

    function menuOpen() {
      open.value = !open.value;
    }

    const store = useStore();

    const ToggleLogin = () => {
      store.dispatch('ToggleLogin')
      open.value = !open.value;
    }

    return {
      open,
      menuOpen,
      links,
      is_active: computed(() => store.state.is_login),
      ToggleLogin
    };
  },
};
</script>

<style lang="scss" scoped>
</style>