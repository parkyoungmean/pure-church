<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
      <div class="p-4 sm:p-12 lg:p-20 w-full">
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
                  @click="schoolDetailOpen(school.id)"
                  v-for="(school, index) in schools"
                  :key="index"
                  class="w-full space-y-2 md:space-y-4"
                >
                  <!-- SCHOOL -->
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
                  <!-- END OF SCHOOL -->
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
              rounde-lg
              w-full
              flex flex-col
              dark:bg-gray-900
              lg:flex lg:w-4/6
              hidden
            "
          >
            <div class="pt-10 pb-12 pl-10">
              <!-- SCHOOL DETAIL -->
              <SchoolDetail />
              <!-- END OF SCHOOL DETAIL -->
              <!-- SCHOOL SERIES -->
              <div class="pt-4">
                <h2 class="text-2xl font-medium">학교 모음</h2>
                <div class="flex justify-between py-6 pr-5 space-x-4">
                  <SchoolSeries
                    v-for="(school, index) in schoolSeries"
                    :key="index"
                    :content="school"
                    :color="currentSchool.color"
                  />
                </div>
              </div>
              <!-- END OF SCHOOL SERIES -->
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
import { computed, onMounted } from "vue-demi";
import { useRouter } from "vue-router";
import SchoolDetail from "../components/school/SchoolDetail.vue";
import SchoolSeries from "../components/school/SchoolSeries.vue";
import { useSchoolStore } from "../stores/schools";
import { getCurrentBreakpoint } from "../common/common";

const schoolSeries = [
  {
    title: "온라인 치유학교 5기",
    background:
      "https://pbs.twimg.com/media/DqRkUGmUcAA9cZT?format=jpg&name=large",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "open",
    term: {
      start: "2022-03-28",
      end: "2022-05-16",
    },
    time: "매주 화요일 저녁6시",
  },
  {
    title: "온라인 치유학교 4기",
    background:
      "https://pbs.twimg.com/media/FRakvHPVUAEFSTa?format=jpg&name=large",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "closed",
    term: {
      start: "2021-11-16",
      end: "2022-01-09",
    },
    time: "매주 화요일 저녁6시",
  },
  {
    title: "온라인 치유학교 3기",
    background:
      "https://pbs.twimg.com/media/D6NJXX6WkAYr8OC?format=jpg&name=medium",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "closed",
    term: {
      start: "2021-03-16",
      end: "2021-05-04",
    },
    time: "매주 화요일 저녁6시",
  },
  {
    title: "강남 치유학교",
    avatar: "",
    background:
      "https://pbs.twimg.com/media/FA4g4w7WEAAdmb4?format=jpg&name=large",
    bgColor: "bg-orange-200",
    createdAt: "2주 전",
    status: "closed",
    term: {
      start: "2021-08-24",
      end: "2021-10-12",
    },
    time: "매주 화요일 저녁6시",
  },
];

export default {
  components: {
    SchoolDetail,
    SchoolSeries,
  },
  setup() {
    /* Pinia */
    const store = useSchoolStore();

    const router = useRouter();

    const schools = computed(() => {
      return store.schools;
    });

    if(store.schools != 'undefined' && store.schools != null) {
      store.currentSchool = store.schools[0];
    }

    const schoolDetailOpen = (id) => {
      console.log(id);
      if(store.schools != 'undefined' && store.schools != null) {
        const index = store.schools.findIndex((element) => element.id === id);
        store.currentSchool = store.schools[index];
        console.log(store.currentSchool);
        /* store.selectedSchool(id); */
      }
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/schooldetail");
        schoolMode("read");
      } else {
        schoolMode("read");
      }
    };

    const schoolMode = (mode) => {
      store.schoolMode(mode);
    };

    const currentSchool = computed(() => {
      console.log(store.getCurrentSchool);
      return store.getCurrentSchool;
    })

    return {
      schools,
      schoolSeries,
      schoolDetailOpen,
      currentSchool,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>