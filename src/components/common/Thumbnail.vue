<template>
  <div>
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="10"
      :space-between="50"
      :modules="modules"
      watch-slides-progress
      :breakpoints="{
          '320': {
          slidesPerView: 3,
          spaceBetween: 30,
          },
          '480': {
          slidesPerView: 5,
          spaceBetween: 35,
          },
          '640': {
          slidesPerView: 7,
          spaceBetween: 40,
          },
          '768': {
          slidesPerView: 9,
          spaceBetween: 45,
          },
          '1024': {
          slidesPerView: 10,
          spaceBetween: 50,
          },
      }"
      ref="mySwiper"
    >
        <swiper-slide v-for="(slide, index) in imgs" :key="index" @click.stop="selectItem(index)">
            <img :src="slide.link" alt="" style="height: 100px" />
        </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper";

export default {
  props: {
    imgs: {
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
  setup(props, context) {
    const swiperRef = ref(null);

    const onSwiper = (swiper) => {
        context.emit("thumbs", swiper);
    };
    
    const selectItem = () => {
        alert(this.$refs.mySwiper.$swiper.realIndex);
        context.emit("thumbs", this.$refs.mySwiper.$swiper.realIndex);
    };

    return {
      modules: [Thumbs],
      selectItem,
      onSwiper,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>