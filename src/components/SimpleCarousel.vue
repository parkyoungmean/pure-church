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
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      style="height: 100vh; padding-top: 67px"
    >
      <div class="title" data-swiper-parallax="-200">
        <h1 :class="`${slide.size.titleTextSize} ${slide.color.titleTextColor}`" class="font-bold leading-[1.4]">
          {{ slide.title }}
        </h1>
        <div class="subtitle w-full mt-4">
          <p
            :class="`${slide.size.subtitleTextSize} ${slide.color.subtitleTextColor}`" class="font-bold leading-loose"
          >
          {{ slide.subtitle }}
          </p>
          <p :class="`${slide.size.descriptionTextSize} ${slide.color.descriptionTextColor}`" class="leading-8 mt-4">
            {{ slide.description }}
          </p>
          <div
            v-if="slide.subcontent"
            class="
              flex
              w-28
              md:w-40
              items-center
              text-xs
              md:text-lg
              p-1
              md:p-1.5
              rounded-3xl
              bg-epic-blue
              space-x-1
              mr-1
              md:mr-2
              text-center
            "
          >
            <router-link
              :to="{
                name: 'slidenotice',
                params: { htmlContent: slide.subcontent.htmlContent },
              }"
              >{{ slide.subcontent.title }}</router-link
            >
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <!-- 브라우저 화면 크기일 경우 -->
      <img
        v-if="!isMobile"
        :src="`${slide.img}`"
        alt=""
        class="bg-center bg-cover bg-no-repeat w-full lg:h-full min-h-screen"
        :class="slide.img == '' ? 'hidden' : ''"
      />
      <!-- 모바일 화면 크기일 경우 -->
      <img
        v-else
        :src="`${slide.mobile_img}`"
        alt=""
        class="object-center object-cover w-full lg:h-full min-h-screen"
        :class="slide.mobile_img == '' ? 'hidden' : ''"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
/* eslint-disable */
import { computed, ref } from "vue";
import { getCurrentBreakpoint } from "../common/common";

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
    /* Vuex */

    const isMobile = ref(null);

    const onSwiper = (swiper) => {
      /* console.log(swiper); */
    };

    const onSlideChange = () => {
      /* console.log("slide change"); */
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
       /*  console.log("모바일 화면 크기입니다."); */
        isMobile.value = true;

      } else {
        /* console.log("브라우저 화면 크기입니다."); */
        isMobile.value = false;
      }
    };

    return {
      isMobile,
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
  font-size: 50px;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 20%;
  /* color: white; */
  .subtitle {
    font-size: 27px;
    position: absolute;
    /* color: white; */
  }
}
@media (max-width: 1280px) {
  .title {
    font-size: 40px;
    position: absolute;
    z-index: 1;
    top: 30%;
    left: 20%;
    /* color: white; */
    .subtitle {
      font-size: 22px;
      position: absolute;
      /* color: white; */
    }
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 35px;
    position: absolute;
    z-index: 1;
    /* top: 30%; */
    left: 10%;
    /* color: white; */
    .subtitle {
      font-size: 17px;
      position: absolute;
      /* color: white; */
    }
  }
}
@media (max-width: 540px) {
  .title {
    font-size: 25px;
    position: absolute;
    z-index: 1;
    /* top: 30%; */
    left: 10%;
    /* color: white; */
    .subtitle {
      font-size: 12px;
      position: absolute;
      /* color: white; */
    }
  }
}

.title, .subtitle, .description {
    white-space: pre-line;
}
</style>