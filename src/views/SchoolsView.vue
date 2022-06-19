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
                        <h4 :class="`text-lg ${school.color.nameColor}`">
                          {{ school.name }}
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
                        :src="`${school.img}.jpg`"
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
              rounded-lg
              w-full
              flex flex-col
              dark:bg-gray-900
              lg:flex lg:w-4/6
              hidden
            "
          >
            <!-- SCHOOL INFO DETAIL -->
            <div v-if="school_mode === 'read'" class="pt-10 pb-12 pl-10">
              <SchoolDetail />
            </div>
            <!-- END OF SCHOOL INFO DETAIL -->
            <!-- SCHOOL REGISTER -->
            <div v-else-if="school_mode === 'create'" class="pt-10 pb-12">
              <SchoolRegistration />
            </div>
            <!-- END OF SCHOOL REGISTER -->
          </section>
          <!-- END OF RIGHT CONTENT SECTION -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { computed, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useSchoolStore } from "../stores/schools";
import SchoolDetail from "../components/school/SchoolDetail.vue";
import SchoolRegistration from "@/components/school/SchoolRegistration.vue";
import { getCurrentBreakpoint } from "../common/common";

export default {
  components: {
    SchoolDetail,
    SchoolRegistration,
  },
  setup() {
    /* Pinia */
    const store = useSchoolStore();

    const router = useRouter();

    const getSchools = computed(() => {
      console.log('위치: SchoolsView/getSchools');
      return store.getSchools;
    });

    const schools = computed(() => {
      return store.schools;
    });

    const currentSchool = computed(() => {
      return store.getCurrentSchool;
    });
    
    onMounted(() => {
      console.log('위치: SchoolsView/fetchSchools');
      store.fetchSchools();
    });

/*     if (store.schools != "undefined" && store.schools != null) {
      store.currentSchool = store.schools[0];
    } */

    const schoolDetailOpen = (id) => {
      console.log(id);
      
      store.selectedSchool(id);

      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/schooldetail");
        schoolMode("read");
      } else {
        schoolMode("read");
      }
    };

    /* Create School Infomation */
    const schoolFormOpen = () => {
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/schoolregistration");
        schoolMode("create");
      } else {
        schoolMode("create");
      }
    };

    const schoolMode = (mode) => {
      store.schoolMode(mode);
    };


    return {
      schools,
      schoolFormOpen,
      schoolDetailOpen,
      school_mode: computed(() => store.school_mode),
      currentSchool,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>