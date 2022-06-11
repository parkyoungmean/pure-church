<template>
  <div class="containter mx-auto px-6 md:px-12 lg:px-8">
    <div class="mb-12 space-y-4 text-center">
      <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
        섬기시는 분들
      </h1>
    </div>
    <!-- Carousel for Sub pastor Team -->
    <swiper
      :modules="modules"
      :slides-per-view="cnt"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :coverflowEffect="{
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class=""
    >
      <swiper-slide
        v-for="(pastor, index) in pastors"
        :key="index"
      >
        <div class="relative flex flex-col items-center justify-center text-white bg-black w h rounded-3xl" :class="cnt === 1 ? 'shadow-lg' : 'shadow-2xl'">
          <span class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-3xl"></span>
          <h1 class="name absolute font-extrabold" :class="cnt === 1 ? 'bottom-11 text-lg' : 'bottom-26 text-3xl'">{{ pastor.name }} {{ pastor.role }} </h1>
          <h2 v-if="pastor.email" class="description absolute text-base text-center text-gray-200" :class="cnt === 1 ? 'bottom-8 text-xs' : 'bottom-19 text-md'"> {{pastor.email }} </h2>
          <p class="parish absolute text-base text-center text-gray-200" :class="cnt === 1 ? 'bottom-4 text-xs' : 'bottom-13 text-md'"> 담당: {{ pastor.parish }} </p>
          <p class="description absolute text-base text-center text-gray-200" :class="cnt === 1 ? 'bottom-0 text-xs' : 'bottom-7 text-md'"> {{ pastor.description }} </p>
          <img :src="require(`../assets/${pastor.img}`)" alt="" class="h object-cover rounded-3xl" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- End of Sub pastor Team -->
    <div class="py-20 grid gap-28 mt-20 md:gap-12 md:grid-cols-3">
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { getCurrentBreakpoint } from "../common/common";

import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay, EffectFade, Parallax, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let pastors = [
      {
        id: 0,
        name: "장원혁",
        email: "",
        img: "학교장님.png",
        role: "담임목사",
        parish: "전체 총괄",
        description: "아세아연합신학대학교 목회학 석사(MDiv.)"
      },
      {
        id: 1,
        name: "박성민",
        email: "psmyki@naver.com",
        img: "박성민목사님01.png",
        role: "목사",
        parish: "장년부, 어린이부서"
      },
      {
        id: 2,
        name: "박성민",
        email: "psmyki@naver.com",
        img: "박성민목사님02.png",
        role: "목사",
        parish: "장년부, 어린이부서"
      },
      {
        id: 3,
        name: "이영태",
        email: "lael_tai@naver.com",
        img: "이영태목사님.png",
        role: "목사",
        parish: "청년부, 장년부, 예배인도"
      },
      {
        id: 4,
        name: "최윤희",
        email: "acts100@naver.com",
        img: "최윤희목사님.png",
        role: "목사",
        parish: "장년부, 청소년부, 영상팀, 화요BAP중보기도팀"
      },
      {
        id: 5,
        name: "서정매",
        email: "tabitha13@naver.com",
        img: "서정매전도사님01.png",
        role: "전도사",
        parish: "순전한 미니스트리, 장년부, 영어예배, 수요중보기도팀"
      },
      {
        id: 5,
        name: "서정매",
        email: "tabitha13@naver.com",
        img: "서정매전도사님02.png",
        role: "전도사",
        parish: "순전한 미니스트리, 장년부, 영어예배, 수요중보기도팀"
      },
    ];

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
    
    const cnt = ref(3);
    /* Vuex */
    const store = useStore();

    const onSwiper = (swiper) => {
      /* console.log(swiper); */
    };
    
    const onSlideChange = () => {
      /* console.log("slide change"); */
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        /* console.log("모바일 화면 크기입니다."); */
        cnt.value = 1;
        store.dispatch("ToggleScreen");
      } else {
        /* console.log("브라우저 화면 크기입니다."); */
        cnt.value = 3;
      }
    };

    return {
      pastors,
      leaders,
      modules: [Autoplay, EffectFade, EffectCoverflow, Parallax],
      is_mobile: computed(() => store.state.is_mobile),
      onSwiper,
      onSlideChange,
      cnt,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>