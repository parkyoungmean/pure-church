<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
      <div class="p-4 sm:p-12 lg:p-10 2xl:p-20 w-full">
        <div class="max-h-full h-full flex flex-row">
          <!-- LEFT SCHOOLS LIST -->
          <aside
            class="w-full lg:w-2/6 bg-white dark:bg-gray-900 rounded-lg md:mr-5"
          >
            <div class="max-w-full h-full w-full flex flex-col">
              <div class="flex p-7 md:px-3 md:py-10 justify-between">
                <div
                  class="
                    text-3xl
                    md:text-4xl
                    font-semibold
                    text-gray-900
                    dark:text-white
                  "
                >
                  학교 목록
                </div>
                <!-- ADD SCHOOL BUTTON -->
                <div class="flex items-cnenter justify-end md:mr-0">
                  <button
                    @click="schoolFormOpen()"
                    id="add-school"
                    type="button"
                    class="
                      flex
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
                    "
                  >
                    <i
                      class="
                        fas
                        fa-plus
                        text-epic-blue
                        p-1
                        rounded-full
                        bg-white
                      "
                    ></i>
                    <p class="text-white text-xs md:text-sm font-extrabold">
                      추가하기
                    </p>
                  </button>
                </div>
              </div>
              <!-- SCHOOLS SECTION START -->
              <div
                class="
                  flex-1
                  overflow-y-scroll
                  scrollbar-width scrollbar-thumb-color
                  dark:scrollbar-thumb-color-dark
                "
              >
                <div
                  v-for="(school, index) in schools"
                  :key="index"
                  class="w-full space-y-2 md:space-y-4"
                >
                  <!-- SCHOOL01 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-3
                    "
                  >
                    <div
                      :class="`group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        ${school.color.bgColor}
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:${school.color.gradientColor}
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100`"
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 :class="`text-lg ${school.color.titleColor}`">
                          {{ school.title }}
                        </h4>
                        <div
                          :class="`relative h-6 text-sm ${school.color.subtitleColor}`"
                        >
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                          >
                            {{ school.subtitle }}
                          </span>
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
                              "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        :src="school.img"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          md:right-4
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL01 -->
                </div>
              </div>
              <!-- END OF SCHOOLS SECTION  -->
            </div>
          </aside>
          <!-- END OF LEFT SCHOOLS LIST -->
          <!-- RIGHT CONTENT SECTION-->
          <section
            class="
              relative
              max-h-ful
              h-full
              bg-white
              rounded-lg
              w-full
              flex flex-col
              dark:bg-gray-900
              lg:flex
              lg:w-4/6
              hidden
            "
          >
            <div class="pt-10 2xl:pt-10 pb-12 pl-10">
              <!-- Navigation Text -->
              <div class="flex">
                <!-- Left -->
                <div class="flex flex-col w-1/2">
                  <div class="max-w-md">
                    <div class="flex items-center text-sm pt-9">
                      <span class="text-gray-900">순전한 학교&nbsp;</span>
                      <span> / {{ schools[1].title }} </span>
                    </div>
                    <!-- Title -->
                    <div class="pt-10">
                      <h1 class="text-3xl 2xl:text-4xl font-bold tracking-wide">
                        {{ schools[1].title }}
                      </h1>
                    </div>
                    <!-- Simple Statics -->
                    <div class="flex items-center justify-between pt-4">
                      <div class="pl-2 leading-none">
                        40명 수료 /
                        <span class="text-gray-900/40">(50명 지원)</span>
                      </div>
                    </div>
                    <!-- Description -->
                    <p
                      v-html="schools[1].description"
                      class="leading-relaxed text-sm 2xl:text-lg pt-8"
                    ></p>
                  </div>
                  <div class="flex items-center justify-between pt-10">
                    <!-- Bookmark Button -->
                    <button
                      class="
                        flex
                        items-center
                        py-2
                        space-x-2
                        text-red-500
                        hover:text-red-600
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
                      <span class="">북마크하기</span>
                    </button>
                    <!-- Share Button -->
                    <div class="flex items-center space-x-6 pr-3">
                      <button>
                        <img
                          src="../assets/icon/kakao-talk-96.png"
                          alt=""
                          class="w-5 h-5"
                        />
                      </button>
                      <button>
                        <img
                          src="../assets/icon/naver.png"
                          alt=""
                          class="w-5 h-5"
                        />
                      </button>
                      <button>
                        <img
                          src="../assets/icon/facebook-512.png"
                          alt=""
                          class="w-5 h-5"
                        />
                      </button>
                      <button>
                        <img
                          src="../assets/icon/instagram-96.png"
                          alt=""
                          class="w-5 h-5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- End of Left -->
                <!-- Right -->
                <div class="flex relative flex-col items-end w-1/2">
                  <div class="flex items-start pr-20 space-x-2">
                    <span class="text-3xl font-bold leading-tight">01 </span>
                    <span class="text-xl">/ 05</span>
                  </div>
                  <div class="flex pr-10 space-x-16">
                    <!-- Left Arrow Button -->
                    <button class="p-3">
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
                    <button class="p-3">
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
                  <!-- Content -->
                  <!-- <img :src="schools[1].img" alt=""> -->
                  <p
                      v-html="schools[1].curriculum"
                      class="leading-relaxed pt-8 pr-5"
                    ></p>
                  <div :class="`absolute w-[440px] h-[250px] bg-gradient-to-r from-transparent ${schools[1].color.textGradientColor} top-24 right-0`"></div>
                </div>
                <!-- End of Right -->
              </div>
              <!-- School Series -->
              <div class="pt-12">
                  <h2 class="text-xl 2xl:text-2xl font-medium">학교 모음</h2>
                  <div class="flex justify-between py-1 2xl:py-3 pr-5 space-x-4">
                    <SchoolSeries v-for="(school, index) in schoolSeries" :key="index" :content="school" />
                  </div>
              </div>
            </div>
          </section>
          <!-- END OF RIGHT CONTENT SECTION -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import SchoolSeries from "../components/school/SchoolSeries.vue";

const schools = [
  {
    title: "복음 학교",
    subtitle: "복음으로 하나됨",
    img: "https://i.imgur.com/UyimOMY.jpg",
    description: "",
    color: {
      bgColor: "bg-amber-200",
      gradientColor: "to-amber-600",
      textGradientColor: "to-amber-600/20",
      titleColor: "text-amber-900",
      subtitleColor: "text-amber-800",
    },
  },
  {
    title: "치유(The Day) 학교",
    subtitle: "하나님 나라의 회복과 능력",
    img: "https://i.imgur.com/xUc8v0t.jpg",
    description:
      "십자가의 은혜와 구원 받은 그리스도인들이 왜 우울함과 육체적 정신적 마음의 질병을 경험하며 두려워하며 사는가? <br> 이 모든 질문을 무의식, 죄 선악, 생명, 빛 성령 등의 연관 관계를 통해 성경 안에서 밝히며 하나님의 완전한 생명의 빛 안에 머무를 수 있는 길을 제시해드립니다.",
    curriculum: "1강  '선善'의 이동(변질의 서막) <br> 2강  두 보호자_1(그들의 일, 우리의 반응) <br> 3강  두 보호자_2(그들의 일, 우리의 관계) <br> 4강  두 보호자_3(그들의 일, 우리의 몸) <br> 5강  막다른 길에서_1(절대 옳은 자의 몸부림) <br> 6강  막다른 길에서_2(절대 옳은 자의 피난처) <br> 7강 법적 소유권(볕을 쐬다) <br> 8강 모든 것이 끝나버리기 전에(선택의 동반)",
    color: {
      bgColor: "bg-orange-200",
      gradientColor: "to-orange-600",
      textGradientColor: "to-orange-600/20",
      titleColor: "text-orange-900",
      subtitleColor: "text-orange-800",
    },
  },
  {
    title: "친밀감(Kar) 학교",
    subtitle: "두드리다, 머물다, 회복하다",
    img: "https://i.imgur.com/C52zbsi.jpg",
    description:
      "KAR(카르)은 마음이란 뜻의 라틴어로, 다음 세 단어의 약자입니다. <br> 1) konck: 두드리다 2) abide: 머물다 3) recover: 회복하다. <br> 하나님과 우리의 호흡이 느껴질 만큼 가까이에서 얼굴을 마주하여 그 마음을 함께 나눔으로 <br> 하나님 아버지와 더 깊은 친밀감으로 인도되는 시간이 될 것입니다.",
    color: {
      bgColor: "bg-rose-200",
      gradientColor: "to-rose-600",
      textGradientColor: "to-rose-600/20",
      titleColor: "text-rose-900",
      subtitleColor: "text-rose-800",
    },
  },
  {
    title: "능력의 기도(BAP) 학교",
    subtitle: "참된 영적 전쟁과 승리",
    img: "https://i.imgur.com/dPErD5s.jpg",
    color: {
      bgColor: "bg-fuchsia-200",
      gradientColor: "to-fuchsia-600",
      textGradientColor: "to-fuchsia-600/20",
      titleColor: "text-fuchsia-900",
      subtitleColor: "text-fuchsia-800",
    },
  },

  {
    title: "사랑 학교",
    subtitle: "사랑은 오래참고 온유하며",
    img: "https://i.imgur.com/XTEusLc.jpg",
    color: {
      bgColor: "bg-pink-200",
      gradientColor: "to-pink-600",
      textGradientColor: "to-pink-600/20",
      titleColor: "text-pink-900",
      subtitleColor: "text-pink-800",
    },
  },
  {
    title: "사역자 학교",
    subtitle: "충성되이 여겨 내게 직분을 맡기심이니",
    img: "https://i.imgur.com/LRbjgMF.jpg",
    color: {
      bgColor: "bg-blue-200",
      gradientColor: "to-blue-600",
      textGradientColor: "to-blue-600/20",
      titleColor: "text-blue-900",
      subtitleColor: "text-blue-800",
    },
  },
];

const schoolSeries = [
  {
    title: "온라인 치유학교 5기",
    background: "https://pbs.twimg.com/media/DqRkUGmUcAA9cZT?format=jpg&name=large",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "open",
    term: {
      start: "2022.03.28",
      end: "2022.05.16",
    },
    time: "매주 화요일 저녁6시"
  },
  {
    title: "온라인 치유학교 4기",
    background: "https://pbs.twimg.com/media/FRakvHPVUAEFSTa?format=jpg&name=large",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "close",
    term: {
      start: "2021.11.16",
      end: "2022.01.09",
    },
    time: "매주 화요일 저녁6시"
  },
  {
    title: "온라인 치유학교 3기",
    background: "https://pbs.twimg.com/media/D6NJXX6WkAYr8OC?format=jpg&name=medium",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "close",
    term: {
      start: "2021.03.16",
      end: "2021.05.04",
    },
    time: "매주 화요일 저녁6시"
  },
  {
    title: "강남 치유학교",
    avatar: "",
    background: "https://pbs.twimg.com/media/FA4g4w7WEAAdmb4?format=jpg&name=large",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "close",
    term: {
      start: "2021.08.24",
      end: "2021.10.12",
    },
    time: "매주 화요일 저녁6시"
  },
]

export default {
  components: {
    SchoolSeries,
  },
  setup() {
    return {
      schools,
      schoolSeries,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>