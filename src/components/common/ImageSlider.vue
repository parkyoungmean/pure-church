<template>
  <div>
    <!-- <div class="sm:flex sm:justify-evenly border-b-2 border-gray-500">
        <div>
            <h1 class="font-bold text-xl pb-3 lg:text-2xl"> 관리자 </h1>
            <p class="text-gray-500 max-w-sm lg:max-w-lg"> 모든 일을 그의 뜻의 결정대로 일하시는 이의 계획을 따라 우리가 예정을 입어 그 안에서 기업이 되었으니(엡1:11) </p>
        </div>
        <img src="../../assets/avatar/user.png" alt="" class="w-24 h-24 rounded-full object-cover mt-5 m-auto lg:m-0"/>
    </div> -->
    <Swiper
        :modules="modules"
        navigation
        grab-cursor
        lazy
        :free-mode="false"
        :preload-images="false"
        :space-between="20"
        :loop="false"
        :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }"
        :thumbs="{ swiper: thumbs }"
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        class="cursor-grab m-auto"
    >
        <Swiper-slide v-for="(slide, index) in imgs" :key="index" class="swiper-slide customSlide">
            <img :data-src="slide.link" alt="" class="swiper-lazy bg-center bg-cover bg-no-repeat w-full lg:h-[1000px]"/>
            <div class="swiper-lazy-preloader"></div>
        </Swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, A11y, Lazy, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


export default {
  props: {
    imgs: {
      type: Object,
    },
    thumbs: {
      type: Object,
    },
    currentSlide: {
        type: Number,
    }
  },
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {

    return {
      modules: [Autoplay, Navigation, A11y, Lazy, Thumbs],
    };
  },
};
</script>

<style lang="scss" scoped>
.customSlide {
    display: grid;
    place-items: center;
    height: 100vh;
}

.swiper-slide {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>