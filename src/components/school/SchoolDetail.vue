<template>
  <div class="2xl:max-w-[1640px] m-auto">
    <!-- 비로그인일 경우 -->
    <div v-show="is_login ? false : true" class="flex justify-end px-6 pt-3 z-30">
      <button
        @click="$router.go(-1)"
        class="
          text-blue-400
          top-5
          right-0
          h-7
          w-7
          text-2xl
          font-semibold
          justify-center
          itmes-center
          focus:outline-none
        "
      >
        <i class="fas fa-arrow-left"></i>
      </button>
    </div>
    <!-- 로그인일 경우 -->
    <div v-show="is_login ? true : false" class="flex justify-end px-6 pt-3 md:hidden">
      <button
        @click="$router.go(-1)"
        class="
          text-blue-400
          top-5
          right-0
          h-7
          w-7
          text-2xl
          font-semibold
          justify-center
          itmes-center
          focus:outline-none
        "
      >
        <i class="fas fa-arrow-left"></i>
      </button>
    </div>
    <div class="md:flex sm:px-10">
      <!-- Left -->
      <div class="flex flex-col md:w-1/2 p-5 md:p-0">
        <div class="md:max-w-md text-sm md:text-md">
          <div class="flex items-center text-xs md:text-sm md:pt-9">
            <span class="text-gray-900">순전한 학교&nbsp;</span>
            <span> / {{ currentSchool.name }} </span>
          </div>
          <!-- Title -->
          <div class="pt-5 md:pt-10">
            <h1 class="text-2xl md:text-4xl font-bold tracking-wide">
              {{ currentSchool.name }}
            </h1>
          </div>
          <!-- Simple Statics -->
          <div class="flex items-center justify-between pt-4">
            <div class="pl-2 leading-none">
              {{ currentSchool.graduate }}명 수료 /
              <span class="text-gray-900/40"
                >({{ currentSchool.registration }}명 지원)</span
              >
            </div>
          </div>
          <!-- Description -->
          <p
            v-html="currentSchool.description"
            class="leading-relaxed pt-8"
          ></p>
        </div>
        <div class="flex items-center justify-between pt-6 md:pt-12">
          <!-- Bookmark Button -->
          <button
            class="
              flex
              items-center
              py-2
              md:space-x-2
              text-red-500
              hover:text-red-600
              text-xs
              md:text-md
            "
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
            <span class="">북마크하기</span>
          </button>
          <!-- Share Button -->
          <div class="flex items-center space-x-3 md:space-x-6 pr-0 md:pr-3">
            <button>
              <img
                src="../../assets/icon/kakao-talk-96.png"
                alt=""
                class="w-5 h-5"
              />
            </button>
            <button>
              <img src="../../assets/icon/naver.png" alt="" class="w-5 h-5" />
            </button>
            <button>
              <img
                src="../../assets/icon/facebook-512.png"
                alt=""
                class="w-5 h-5"
              />
            </button>
            <button>
              <img
                src="../../assets/icon/instagram-96.png"
                alt=""
                class="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
      <!-- End of Left -->
      <!-- Right -->
      <div class="flex relative flex-col p-8 md:items-end md:w-1/2">
        <div class="flex items-start pr-20 space-x-2 hidden md:block">
          <span class="text-2xl md:text-3xl font-bold leading-tight">01 </span>
          <span class="text-md md:text-xl">/ 05</span>
        </div>
        <div class="flex pr-8 md:pr-10 space-x-16 hidden md:block">
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
        <!-- <p
          v-html="currentSchool.curriculum"
          class="leading-relaxed pt-8 pr-5 md:pl-10 text-sm md:text-md"
        ></p> -->
        <p
          v-for="(recture, index) in currentSchool.curriculum"
          :key="index"
          class="leading-relaxed pt-1 pr-5 md:pr-10 text-sm md:text-md"
        >
          <span> {{ index + 1 }}강 {{ recture.title }} </span>
        </p>
        <div
          :class="`absolute w-[440px] h-[250px] bg-gradient-to-r from-transparent ${currentSchool.color.textGradientColor} top-5 md:top-24 right-0`"
        ></div>
      </div>
      <!-- End of Right -->
    </div>
    <!-- Update & Delete Button -->
    <div v-show="is_login ? true : false" class="flex justify-end space-x-2 mt-2 mr-5 md:mr-10">
      <!-- Update Button -->
      <button
        @click="schoolEditOpen"
        class="
          inline-flex
          justify-center
          px-4
          py-2
          text-sm
          font-medium
          text-amber-900
          bg-blue-100
          border border-transparent
          rounded-md
          hover:bg-blue-200
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-offset-2
          focus-visible:ring-blue-500
        "
      >
        수정
      </button>
      <!-- Delete Button -->
      <button
        @click="deleteSchool"
        class="
          inline-flex
          justify-center
          px-4
          py-2
          text-sm
          font-medium
          text-red-900
          bg-blue-100
          border border-transparent
          rounded-md
          hover:bg-blue-200
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-offset-2
          focus-visible:ring-blue-500
        "
      >
        삭제
      </button>
    </div>
    <!-- End of Update & Delete Button -->
    <!-- SCHOOL SERIES -->
    <div class="pt-10 md:pt-14 px-7">
      <h2 class="text-2xl font-medium">학교 모음</h2>
      <div
        class="
          md:flex
          justify-between
          xxs:px-10
          xs:px-25
          sm:px-48
          md:px-6 md:py-6 md:pr-5 md:space-x-4
        "
      >
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
</template>

<script>
/* eslint-disable */
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useSchoolStore } from "../../stores/schools";
import SchoolSeries from "../../components/school/SchoolSeries.vue";
import { getCurrentBreakpoint } from "../../common/common";

export default {
  components: {
    SchoolSeries,
  },
  setup() {

    /* Vuex */
    const vuexStore = useStore();

    /* Pinia */
    const store = useSchoolStore();
    const router = useRouter();

    const currentSchool = computed(() => {
      if (store.schools.length != 0) {
        return store.getCurrentSchool;
      }
    });

    /* Update School Infomation */
    const schoolEditOpen = () => {
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/schooledit");
        schoolMode("update");
      } else {
        schoolMode("update");
      }
    };

    /* Delete School information */
    const deleteSchool = () => {
      if (confirm("정말 삭제합니까?")) {
        /* alert("ok"); */

        store.deleteSchool(currentSchool.value).then(() => {
          if (getCurrentBreakpoint().value < 768) {
            router.go(-1);
          } else {
            schoolMode("read");
            router.go(-1);
          }
        });
      } else {
        alert("취소되었습니다.");
      }
    };

    const schoolMode = (mode) => {
      store.schoolMode(mode);
    };

    const schoolSeries = computed(() => {
      return store.getSchoolSeries;
    });

    return {
      is_login: computed(() => vuexStore.state.is_login),
      currentSchool,
      schoolEditOpen,
      deleteSchool,
      schoolSeries,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>