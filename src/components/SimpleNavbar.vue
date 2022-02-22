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
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-xl mr-1 z-10">
        <img src="../assets/logo/01.png" class="w-[105px] h-[50px]" alt="" />
      </span>
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
        lg:static
        bg-white
        md:w-auto
        w-full
        top-14
        duration-700
        ease-in
        -z-100
      "
      :class="[open ? 'top-19' : 'top-[-100%]']"
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
      <button
        class="
          bg-green-400
          hover:bg-green-500
          duration-300
          font-sm
          text-white
          rounded
          px-4
          py-2
        "
      >
        <!-- <i class="material-icons ml-1 text-muted">login</i> -->
        로그인하기
      </button>
    </ul>
    <!-- End of Menu -->
  </nav>
  <!-- End of Navbar -->
</template>

<script>
/* eslint-disable */
import { ref } from "vue";

export default {
  setup() {
    let open = ref(false);
    let links = [
      { id: 0, name: "홈", link: "#home" },
      { id: 1, name: "사역 소개", link: "#introduce" },
      { id: 2, name: "순전한 학교", link: "#school" },
      { id: 3, name: "공지 및 후원", link: "#notice" },
      { id: 4, name: "기타", link: "#etc" },
    ];

    function menuOpen() {
      open.value = !open.value;
    }
    return {
      open,
      menuOpen,
      links,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>