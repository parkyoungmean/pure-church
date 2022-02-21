<template>
  <div
    class="
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
        md:flex md:items-center md:px-0
        left-0
        px-10
        md:pb-0
        pb-10
        md:static
        absolute
        bg-white
        md:w-auto
        w-full
        top-14
        duration-700
        ease-in
        -z-50
      "
      :class="[open ? 'top-19' : 'top-[-100%]']"
    >
      <li v-for="link in links" :key="link.id" class="md:mx-4 md:my-0 my-6">
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
  </div>
  <!-- End of Navbar -->
  <div
    class="
      cntainer
      mt-0
      flex
      justify-between
      items-center
      mx-auto
      px-2
      md:px-14
      lg:px-24
      w-full
    "
  >
    <div class="flex flex-wrap md:flex-nowrap">
      <div
        class="
          flex flex-wrap
          lg:ml-20
          justify-center
          md:justify-start
          max-w-xl
          mt-2
          md:my-5
        "
      >
        <h1
          class="
            text-white
            font-bold
            text-2xl
            md:text-6xl
            lg:text-7xl
            text-center
            md:text-left
            z-10
          "
        >
          Happy <br />
          New year!!!
        </h1>
        <!-- Button -->
        <!-- <div class="w-full flex justify-center md:justify-start z-10">
          <button
            class="
              text-2xl
              px-8
              py-4
              bg-theme
              text-white
              font-bold
              mt-12
              flex
              items-center
              space-x-3
            "
          >
            <i class="material-icons text-muted">exit_to_app</i>
            <span>들어가기</span>
          </button>
        </div> -->
        <!-- End of Button -->
      </div>
      <img
        src="../assets/02.jpeg"
        alt="logo_package"
        class="w-full -mt-16 md:absolute -mt-6 md:mt-0 right-0 -z-1"
      />
    </div>
  </div>

  <!-- <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 bg-green-400">
      <section class="w-full">
          <h2 id="work" class="secondary-title">로고 아이콘</h2>
          <p class="section-paragraph">이 중에서 마음에 드는 로고 아이콘이 있으신가요?</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <img src="../assets/logo/01.png" alt="">
              <img src="../assets/logo/02.png" alt="">
              <img src="../assets/logo/03.png" alt="">
              <img src="../assets/logo/04.png" alt="">
              <img src="../assets/logo/05.png" alt="">
              <img src="../assets/logo/06.png" alt="">
              <img src="../assets/logo/07.png" alt="">
              <img src="../assets/logo/09.png" alt="">
              <img src="../assets/logo/10.png" alt="">
              <img src="../assets/logo/11.png" alt="">
              <img src="../assets/logo/12.png" alt="">
              <img src="../assets/logo/13.png" alt="">
              <img src="../assets/logo/15.png" alt="">
              <img src="../assets/logo/16.png" alt="">
              <img src="../assets/logo/17.png" alt="">
          </div>
      </section>
  </div> -->
</template>

<script>
/* eslint-disable */
import { ref } from "vue";

export default {
  setup() {
    let open = ref(false);
    let links = [
      { id: 0, name: "홈", link: "#" },
      { id: 1, name: "사역 소개", link: "#" },
      { id: 2, name: "순전한 학교", link: "#" },
      { id: 3, name: "공지 및 후원", link: "#" },
      { id: 4, name: "기타", link: "#" },
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