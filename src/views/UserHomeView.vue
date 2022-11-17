<template>
  <div class="user_home">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="false"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
      }"
      :speed="2000"
      :pagination="{ clickable: true }"
      effect="fade"
    >
      <swiper-slide class="bg_my">
        <section>
          <!-- content -->
          <section
            class="lg:grid lg:grid-cols-2 space-y-8"
            style="height: 36rem;"
          >
            <!-- Main Title -->
            <main class="flex flex-col justify-around">
              <div class="text-5xl font-extrabold -mt-2 hidden lg:block px-3 md:px-7">
                <span
                  class="
                    bg-clip-text
                    text-transparent
                    bg-gradient-to-b
                    from-gray-200
                    capitalize
                    tracking-wider
                    font_
                  "
                >
                  
                </span>
              </div>
              <div class="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-wider">
                <span class="bg-clip-text text-gray-100 capitalize px-3 md:px-7">
                  나의 메뉴
                </span>
                <p class="text-xs text-gray-300 w-96 font-semibold mt-7 px-3 md:px-7">
                  ⌈나의 메뉴⌋에서는 내가 북마크한 '학교'와 나의 '프로필'을 볼 수 있고 나의
                  글이 함께 표시됩니다.
                </p>
              </div>
              <div class="text-5xl font-extrabold hidden lg:block px-3 md:px-7">
                <span
                  class="
                    bg-clip-text
                    text-transparent
                    bg-gradient-to-b
                    from-gray-200
                    capitalize
                    tracking-wider
                    font_
                  "
                >
                  순전한 교회
                </span>
              </div>
            </main>
            <!-- End of Main Title -->
            <!-- Slides -->
            <main class="pr-5 px-3">
              <section class="py-3 md:py-10 mt-10">
                <ul class="flex items-center space-x-2 md:space-x-4">
                  <li class="card">
                    <main class="space-y-3">
                      <div class="space-y-2">
                        <h4
                          class="
                            text-sm
                            capitalize
                            text-gray-200
                            font-extrabold
                            w-full
                          "
                        >
                          나의 프로필
                        </h4>
                        <!-- <div class="">
                          <ul class="flex items-center space-x-1">
                            <li class="w-2 h-2 rounded-full bg-gray-50"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-50"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                          </ul>
                        </div> -->
                      </div>
                      <!-- First Card -->
                      <div class="bg_mycard w-[8.33rem] h-[11.66rem] md:w-[12.5rem] md:h-[17.5rem]
  ">
                        <!-- Bookmark button -->
                        <!-- <div
                          class="
                            m-3
                            float-right
                            bg-gray-100
                            w-7
                            h-7
                            rounded-full
                            flex
                            items-center
                            justify-center
                          "
                        > -->
                          <!-- Bookmark button -->
                          <!-- <button
                            class="
                              focus:outline-none
                              text-gray-400
                              hover:text-gray-500
                            "
                          >
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                              ></path>
                            </svg>
                          </button> -->
                          <!-- End of Bookmark button -->
                        <!-- </div> -->
                      </div>
                      <!-- End of First Card -->
                    </main>
                  </li>
                  <!-- Slide01_image -->
                  <li class="mt-10 card">
                    <main class="space-y-3">
                      <div class="space-y-2">
                        <h4
                          class="
                            text-sm
                            capitalize
                            text-gray-200
                            font-extrabold
                            w-full
                          "
                        >
                          나의 학교
                        </h4>
                        <!-- <div class="">
                          <ul class="flex items-center space-x-1">
                            <li class="w-2 h-2 rounded-full bg-gray-50"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-50"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                          </ul>
                        </div> -->
                      </div>
                      <!-- 나의 학교 -->
                      <div class="">
                        <img
                          src="../assets/bg-3.jpg"
                          alt=""
                          class="bg_common w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]"
                        />
                      </div>
                      <!-- End of 나의 학교 -->
                    </main>
                  </li>
                  <!-- Slide02_image -->
                  <li class="mt-10 card">
                    <main class="space-y-3">
                      <div class="space-y-2">
                        <h4
                          class="
                            text-sm
                            capitalize
                            text-gray-200
                            font-extrabold
                            w-full
                          "
                        >
                          나의 글
                        </h4>
                        <!-- <div class="">
                          <ul class="flex items-center space-x-1">
                            <li class="w-2 h-2 rounded-full bg-gray-50"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-50"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-600"></li>
                          </ul>
                        </div> -->
                      </div>
                      <div class="">
                        <img
                          src="../assets/bg-4.jpg"
                          alt=""
                          class="bg_common w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]"
                        />
                      </div>
                    </main>
                  </li>
                </ul>
              </section>
              <!-- Slider Button -->
              <div class="flex items-center space-x-3">
                <!-- Left Arrow Button -->
                <button
                  class="
                    focus:outline-none
                    w-9
                    h-9
                    bg-transparent
                    rounded-full
                    border border-gray-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    class="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <!-- Right Arrow Button -->
                <button
                  class="
                    focus:outline-none
                    w-9
                    h-9
                    bg-transparent
                    rounded-full
                    border border-gray-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    class="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </main>
            <!-- End of Slider Button -->
          </section>
          <!-- End of content -->
        </section>
      </swiper-slide>
      <swiper-slide class="bg_school">
        <section>
          <!-- content -->
          <section
            class="lg:grid lg:grid-cols-2 space-y-8"
            style="height: 36rem;"
          >
            <!-- Main Title -->
            <main class="flex flex-col justify-around">
              <div class="text-5xl font-extrabold -mt-2 hidden lg:block px-3 md:px-7">
                <span
                  class="
                    bg-clip-text
                    text-transparent
                    bg-gradient-to-b
                    from-gray-200
                    capitalize
                    tracking-wider
                    font_
                  "
                >
                  <!-- My Home -->
                  나의 메뉴
                </span>
              </div>
              <div class="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-wider">
                <span class="bg-clip-text text-gray-100 capitalize px-3 md:px-7">
                  순전한 교회
                </span>
                <p class="text-xs text-gray-300 w-96 font-semibold mt-7 px-3 md:px-7">
                  ⌈순전한 교회⌋는 하나님 아버지를 더욱 깊이 알아 온전한 회복과 치유와 새로운
                  소망 가득한 삶을 누리고 하나님의 부르심에 합당한 삶을 올려
                  드리기 원하시는 모든 분들을 초대합니다.
                </p>
              </div>
              <div class="text-5xl font-extrabold hidden lg:block px-3 md:px-7">
                <span
                  class="
                    bg-clip-text
                    text-transparent
                    bg-gradient-to-b
                    from-gray-200
                    capitalize
                    tracking-wider
                    font_
                  "
                >
                  사역팀
                </span>
              </div>
            </main>
            <!-- End of Main Title -->
            <!-- Slides -->
            <main class="pr-5 px-3">
              <section class="py-3 md:py-10 mt-10">
                <ul class="flex items-center space-x-2 md:space-x-4">
                  <li class="card">
                    <main class="space-y-3">
                      <div class="space-y-2">
                        <h4
                          class="
                            text-sm
                            capitalize
                            text-gray-200
                            font-extrabold
                            w-full
                          "
                        >
                          치유학교
                        </h4>
                        <!-- <div class="">
                          <ul class="flex items-center space-x-1">
                            <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                          </ul>
                        </div> -->
                      </div>
                     <!-- First Card -->
                      <div class="bg_card w-[8.33rem] h-[11.66rem] md:w-[12.5rem] md:h-[17.5rem]">
                         <!-- Bookmark button -->
                        <div
                          class="
                            m-3
                            float-right
                            bg-gray-100
                            w-7
                            h-7
                            rounded-full
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <button
                            class="
                              focus:outline-none
                              text-gray-400
                              hover:text-gray-500
                            "
                          >
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <!-- End of Bookmark button -->
                      </div>
                      <!-- End of First Card -->
                    </main>
                  </li>
                  <!-- Slide01_image -->
                  <li class="mt-10 card">
                    <main class="space-y-3">
                      <div class="space-y-2">
                        <h4
                          class="
                            text-sm
                            capitalize
                            text-gray-200
                            font-extrabold
                            w-full
                          "
                        >
                          카르학교
                        </h4>
                        <!-- <div class="">
                          <ul class="flex items-center space-x-1">
                            <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                          </ul>
                        </div> -->
                      </div>
                      <div class="">
                        <img
                          src="../assets/bg-1.jpg"
                          alt=""
                          class="bg_common w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]"
                        />
                      </div>
                    </main>
                  </li>
                  <!-- End of Slide01_image -->
                  <!-- Slide02_image -->
                  <li class="mt-10 card">
                    <main class="space-y-3">
                      <div class="space-y-2">
                        <h4
                          class="
                            text-sm
                            capitalize
                            text-gray-200
                            font-extrabold
                            w-full
                          "
                        >
                          복음학교
                        </h4>
                        <!-- <div class="">
                          <ul class="flex items-center space-x-1">
                            <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                            <li class="w-2 h-2 rounded-full bg-gray-300"></li>
                          </ul>
                        </div> -->
                      </div>
                      <div class="">
                        <img
                          src="../assets/bg-2.jpg"
                          alt=""
                          class="bg_common w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]"
                        />
                      </div>
                    </main>
                  </li>
                  <!-- End of Slide02_image -->
                </ul>
              </section>
              <!-- Slider Button -->
              <div class="flex items-center space-x-3">
                <!-- Left Arrow Button -->
                <button
                  class="
                    focus:outline-none
                    w-9
                    h-9
                    bg-transparent
                    rounded-full
                    border border-gray-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    class="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <!-- Right Arrow Button -->
                <button
                  class="
                    focus:outline-none
                    w-9
                    h-9
                    bg-transparent
                    rounded-full
                    border border-gray-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    class="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <!-- End of Slider Button -->
            </main>
            <!-- End of Slides -->
          </section>
          <!-- End of content -->
        </section>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectFade, Autoplay } from "swiper";

/* Import Swiper Styles */
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, EffectFade, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  margin: 0;
  /* padding: 0; */
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.user_home {
  position: relative;
  height: 100vh;
}

.bg_school,
.bg_my {
  height: 100vh;
  padding-top: 80px;
}
/* .bg_school::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  filter: brightness(90%);
  background-image: url(https://pbs.twimg.com/media/FNrceFhVkAA-ViT?format=jpg&name=large);
  background-size: cover;
  background-position: center;
} */

.font_ {
  font-family: "lato", sans-serif;
}
h4,
p {
  font-family: "Inter", sans-serif;
}

.bg_card {
  /* height: 17.5rem;
  width: 12.5rem; */
  background-image: url(https://i.imgur.com/dPErD5s.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  z-index: -1;
  border-radius: 10px;
}

.bg_common {
  /* height: 15rem;
  width: 15rem; */
  border-radius: 10px;
}

/* .card {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.card:hover {
  cursor: pointer;
  transition: 0.9s;
  transform: rotateY(180deg);
} */

/* .bg_my::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  filter: brightness(90%);
  background-image: url(https://pbs.twimg.com/media/FC1LPydXsAcM0wh?format=jpg&name=large);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

.bg_mycard {
  /* height: 17.5rem;
  width: 12.5rem; */
  /* background-image: url(https://i.imgur.com/tJghX0Z.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  border-radius: 10px;
}

$bg_school: (
  bg_school,
  "https://pbs.twimg.com/media/FNrceFhVkAA-ViT?format=jpg&name=large"
);
$bg_my: (
  bg_my,
  "https://pbs.twimg.com/media/FC1LPydXsAcM0wh?format=jpg&name=large"
);
/* $banana: (banana, japan); */

@each $name, $img in $bg_school, $bg_my {
  .#{$name}::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(#{$img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>