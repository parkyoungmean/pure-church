<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    effect="fade"
    navigation
    :parallax="true"
    :speed="1200"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="min-h-screen"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index" style="height: 100vh; padding-top: 67px;" >
      <div class="title" data-swiper-parallax="-200">
        {{ slide.title }} <br /><br />
        <!-- 모든 이름 위에 뛰어난 그 이름 예수 <br /><br /> -->
        <div class="subtitle">
          {{ slide.subtitle }} <br />{{ slide.description }}
        </div>
      </div>
      <img
        v-if="slide.src.includes('bg-')"
        :src="require(`../assets/${slide.src}.jpg`)"
        alt=""
        class="object-center object-cover w-full lg:h-full min-h-screen"
      />
      <img
        v-else
        :src="slide.src"
        alt=""
        class="bg-center bg-cover bg-no-repeat w-full lg:h-full min-h-screen"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
/* eslint-disable */

import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  props: {
    slides: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectFade,
        Parallax,
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 65px;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 20%;
  color: white;
  .subtitle {
    font-size: 30px;
    position: absolute;
    color: white;
  }
}
@media (max-width: 1280px) {
  .title {
    font-size: 55px;
    position: absolute;
    z-index: 1;
    top: 30%;
    left: 20%;
    color: white;
    .subtitle {
      font-size: 25px;
      position: absolute;
      color: white;
    }
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 45px;
    position: absolute;
    z-index: 1;
    /* top: 30%; */
    left: 10%;
    color: white;
    .subtitle {
      font-size: 20px;
      position: absolute;
      color: white;
    }
  }
}
@media (max-width: 540px) {
  .title {
    font-size: 35px;
    position: absolute;
    z-index: 1;
    /* top: 30%; */
    left: 10%;
    color: white;
    .subtitle {
      font-size: 15px;
      position: absolute;
      color: white;
    }
  }
}
</style>