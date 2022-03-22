<template>
  <section id="#" class="pt-19 pb-12 px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500">
    <!-- Carousel -->
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
      <swiper-slide>
        <div class="title" data-swiper-parallax="-200">
          온라인 치유학교 5기를 모집합니다. <br /><br />
          <!-- 모든 이름 위에 뛰어난 그 이름 예수 <br /><br /> -->
          <div class="subtitle">
            일시: 2022년 3월 28일 ~ 2022년 5월 9일<br />신청마감: 3월 21일
            월요일 오후 10시
          </div>
        </div>

        <img
          src="../assets/bg-1.jpg"
          alt=""
          class="object-center object-cover w-full lg:h-full min-h-screen"
      /></swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-200">
          온라인 카르학교 3기를 모집합니다. <br /><br />
          <!-- 모든 이름 위에 뛰어난 그 이름 예수 <br /><br /> -->
          <div class="subtitle">
            일시: 2022년 3월 28일 ~ 2022년 5월 9일<br />신청마감: 3월 21일
            월요일 오후 10시
          </div>
        </div>

        <img
          src="../assets/bg-2.jpg"
          alt=""
          class="object-center object-cover w-full lg:h-full min-h-screen"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../assets/bg-3.jpg"
          alt=""
          class="object-center object-cover w-full lg:h-full min-h-screen"
      /></swiper-slide>
    </swiper>
  </section>

  <section id="introduce" class="min-h-screen bg-gray-100">
    <ProfileCard />
    <ServiceTeam />
  </section>
  <!-- pure school section -->
  <section id="school" class="grid place-items-center min-h-screen">
    <!-- Responsive Grid Layout -->
    <div
      class="
        p-4
        py-20
        max-w-5xl
        grid
        gap-4
        xs:grid-cols-2 xs:p-8
        md:grid-cols-4
      "
    >
      <h1
        class="
          text-4xl
          font-extrabold
          xs:pt-16 xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2
          md:col-span-3 md:text-5xl md:grid-cols-3
        "
      >
        <span class="md-span-2">순전한 학교</span>
      </h1>
      <p
        class="
          xs:row-start-2 xs:col-start-2 xs:self-center
          md:col-start-1 md:col-span-2 md:pr-12 md:text-lg
        "
      >
        순전한 학교는 능력있는 중보기도, 치유학교, 복음학교, 사역자 학교, 친밀한
        학교의 커리큘럼으로 구성됩니다.
      </p>
      <PrimaryCard
        v-for="(card, index) in schools"
        :key="index"
        :content="card"
        :index="index"
      />
      <!-- <div class="h-16 bg-blue-500 xs:h-auto xs:square"></div>
      <div class="h-16 bg-blue-500 xs:h-auto xs:square"></div>
      <div class="h-16 bg-pink-500 xs:h-auto xs:square"></div>
      <div class="h-16 bg-blue-500 xs:h-auto xs:square col-start-2"></div>
      <div class="h-16 bg-pink-500 xs:h-auto xs:square"></div>
      <div class="h-16 bg-blue-500 xs:h-auto xs:square"></div>
      <div class="h-16 bg-blue-500 xs:h-auto xs:square"></div>
      <div class="h-16 bg-pink-500 xs:h-auto xs:square"></div> -->
      <p class="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur
        temporibus nihil perspiciatis iure ducimus repellendus maiores. Beatae
        quia corrupti consequatur modi est, nam, voluptatum natus voluptatibus
        inventore minima sed.
      </p>
    </div>
  </section>
  <!-- notices & donation -->
  <section id="notices" class="min-h-screen bg-green-100">
    <div class="w-full min-h-screen font-sans text-gray-900">
      <main class="md:py-16 px-4 mx-auto max-w-7xl">
        <div>
          <div>
            <h1 class="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
              공지 및 후원
            </h1>
          </div>
          <p clas="pt-3 text-lg text-gray-700">
            공지, 후원, 게시글, 활동 사진을 모아 보여줍니다.
          </p>
          <!-- Avatar -->
          <!-- <div
            class="inline-flex gap-x-2 items-center pt-2 text-sm text-gray-500"
          >
            <span>Created by pure church</span>
            <img
              src="https://i.imgur.com/8axyuNs.jpg"
              alt=""
              class="object-cover w-7 h-7 rounded-full"
            />
            <a href="#" class="hover:text-indigo-600"> 관리자 </a>
          </div> -->
        </div>
        <!-- Tabs -->
        <div x-data="{ tab: 'notice' }" class="">
          <!-- Tab Menu -->
          <div class="flex gap-x-8 items-center pt-12">
            <a
              href=""
              x-on:click.prevent="tab = 'notice'"
              class="text-sm md:text-lg font-medium"
            >
              공지사항
            </a>
            <a
              href=""
              x-on:click.prevent="tab = 'bbs'"
              class="text-sm md:text-lg font-indigo-500"
            >
              자유 게시판
            </a>
            <a
              href=""
              x-on:click.prevent="tab = 'gallery'"
              class="text-sm md:text-lg font-indigo-500"
            >
              활동 사진
            </a>
            <a
              href=""
              x-on:click.prevent="tab = 'donation'"
              class="text-sm md:text-lg font-indigo-500"
            >
              후원 안내
            </a>
          </div>
          <!-- End of Tab Menu -->
          <div class="">
            <div x-show="tab === 'notice'" class="">
              <p>여기는 공지사항 탭입니다.</p>
              <!-- SimpleList -->
              <SimpleList />
            </div>
            <div x-show="tab === 'bbs'" class="">
              <p>여기는 자유게시판입니다.</p>
            </div>
            <div x-show="tab === 'gallery'" class="">
              <p>여기는 활동사진입니다.</p>
              <!-- Gallery -->
              <SimpleGallery />
            </div>
            <div x-show="tab === 'donation'" class="">
              <p>여기는 후원 안내입니다.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>

  <section id="etc" class="min-h-screen bg-red-100"></section>
</template>

<script>
/* eslint-disable */

import { reactive, toRefs } from "vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ServiceTeam from "@/components/ServiceTeam.vue";
import SimpleList from "@/components/SimpleList.vue";
import SimpleGallery from "@/components/SimpleGallery.vue";
import PrimaryCard from "@/components/PrimaryCard.vue";
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

const schools = [
  { title: "능력의 기도(BAP)학교", img: "https://i.imgur.com/dPErD5s.jpg" },
  { title: "복음학교", img: "https://i.imgur.com/UyimOMY.jpg" },
  { title: "사랑학교", img: "https://i.imgur.com/XTEusLc.jpg" },
  { title: "사역자학교", img: "https://i.imgur.com/LRbjgMF.jpg" },
  { title: "치유(The Day)학교", img: "https://i.imgur.com/xUc8v0t.jpg" },
  { title: "친밀감(Kar)학교", img: "https://i.imgur.com/C52zbsi.jpg" },
];

export default {
  components: {
    ProfileCard,
    ServiceTeam,
    SimpleList,
    SimpleGallery,
    PrimaryCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      ...toRefs(state),
      schools,
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
@import url("https://fonts.googleapis.com/css2?family=Comforter&family=Noto+Sans+KR:wght@700&family=Roboto:wght@700&display=swap");
#home {
  font-family: "Roboto", "Noto Sans KR", sans-serif;
}
.title {
  font-size: 45px;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 10%;
  color: white;
  .subtitle {
    font-size: 25px;
    position: absolute;
    color: white;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 35px;
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
    font-size: 25px;
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