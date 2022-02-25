<template>
  <div class="containter mx-auto px-6 md:px-12 lg:px-8">
    <div class="mb-12 space-y-4 text-center">
      <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
        섬기시는 분들
      </h1>
    </div>
    <div class="py-20 grid gap-28 md:gap-12 md:grid-cols-3">
      <!-- First Director Leader -->
      <div
        v-for="leader in leaders"
        :key="leader.id"
        class="border-t-4 space-y-8 group md:mb-20"
      >
        <div
          class="
            w-32
            h-32
            -mt-16
            mx-auto
            rounded-[2rem]
            rotate-45
            overflow-hidden
          "
        >
          <img
            :src="leader.img"
            alt=""
            loading="lazy"
            class="
              w-full
              h-full
              object-cover
              -rotate-45
              scale-125
              mx-auto
              transition
              duration-300
              group-hover:scale-[1.4]
            "
          />
        </div>
        <div class="text-center">
          <h5 class="text-xl text-gray-800 font-semibold">{{ leader.name }}</h5>
          <span class="text-gray-500"> {{ leader.role }} </span>
        </div>
        <a
          :href="leader.link"
          class="block w-max mx-auto text-center text-blue-500"
          >학교 가기</a
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  setup() {
    let leaders = [
      {
        id: 0,
        name: "크루엘라",
        img: "https://i.imgur.com/tJghX0Z.jpg",
        role: "Director Leader",
        link: "#home",
      },
      {
        id: 1,
        name: "블랙 위도우",
        img: "https://i.imgur.com/kjiTOzB.gif",
        role: "Director Leader",
        link: "#prayer",
      },
      {
        id: 2,
        name: "해리 포터",
        img: "https://cdnweb01.wikitree.co.kr/webdata/editor/202008/24/img_20200824081913_996d6f13.webp",
        role: "Director Leader",
        link: "#kar",
      },
      {
        id: 3,
        name: "닥터 스트레인저",
        img: "https://pbs.twimg.com/media/Cv6xICqWIAAPHOf?format=jpg&name=small",
        role: "Director Leader",
        link: "#kar",
      },
      {
        id: 4,
        name: "헤르미온느 진 그레인저",
        img: "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/18/img_20200618133404_50940b22.webp",
        role: "Director Leader",
        link: "#kar",
      },
    ];
    return {
      leaders,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>