<template>
  <div class="container py-6 max-w-5xl mx-auto space-y-2.5">
    <!-- Primary Notice List -->
    <div v-for="(pNotice, index) in primaryNotices" :key="index" @click="noticeDetailOpen(pNotice.id)" class="w-full h-10 bg-[#FFBF00] text-white rounded-md shadow-md border border-gray-200 flex justify-between items-center p-2">
      <!-- Condition Icon -->
      <div class="flex space-x-2">
        <svg
          v-show="pNotice.condition === 'emergency'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <svg
          v-show="pNotice.condition === 'important'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          v-show="pNotice.condition === 'standard'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <svg
          v-show="pNotice.condition === 'information'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <!-- title -->
        <!-- 브라우저 화면에서 표시됨 -->
        <h2 class="xxs:hidden md:block text-md"><span class="font-bold">[{{ pNotice.belong }}]</span> {{ pNotice.condition === 'emergency' ? '(긴급 공지)' : pNotice.condition ==='important' ? '(중요 공지)' : pNotice.condition ==='standard' ? '(일반 공지)' : pNotice.condition === 'information' ? '(정보 안내)' : '' }} {{ pNotice.title }}</h2>
        <!-- 모바일 화면에서 표시됨 -->
        <h2 class="md:hidden xxs:block xxs:text-sm"><span class="font-bold">[{{ pNotice.belong }}]</span> {{ pNotice.condition === 'emergency' ? '(긴급 공지)' : pNotice.condition ==='important' ? '(중요 공지)' : pNotice.condition ==='standard' ? '(일반 공지)' : pNotice.condition === 'information' ? '(정보 안내)' : '' }} {{ pNotice.title.length > 13 ? pNotice.title.substr(0, 14) + '...' : pNotice.title }}</h2>
      </div>
      <!-- -> Button -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-5
          md:h-6
          h-5
          md:w-6
          mr-3
          hover:cursor-pointer
          focus:scale-125
          transition
          duration-300
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
    </div>
    <!-- End of Primary Notice List -->
    <!-- Notice List -->
    <div
      v-for="notice in notices"
      :key="notice.id"
      class="
        left-0
        sm:left-auto
        w-full
        justify-center
        sm:justify-end
        md:px-4
        sm:right-0
      "
    >
      <div
        class="
          .min-h-[16]
          w-full
          px-3
          md:px-4
          pt-2
          bg-white
          rounded-md
          shadow-lg
          border border-gray-200
          sm:right-0
        "
      >
        <div
          class="flex space-x-2"
          :class="[
            notice.condition === 'emergency'
              ? 'text-red-500'
              : notice.condition === 'important'
              ? 'text-amber-500'
              : notice.condition === 'standard'
              ? 'text-green-500'
              : 'text-green-500',
          ]"
        >
          <!-- Condition Icon -->
          <svg
            v-show="notice.condition === 'emergency'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <svg
            v-show="notice.condition === 'important'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            v-show="notice.condition === 'standard'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-show="notice.condition === 'information'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="font-bold">[{{ notice.belong }}]</span> {{ notice.condition === 'emergency' ? '긴급 공지드립니다.' : notice.condition ==='important' ? '중요 공지드립니다.' : notice.condition ==='standard' ? '일반 공지드립니다.' : notice.condition === 'information' ? '정보 안내드립니다.' : '' }}
        </div>
        <!-- Title -->
        <div
          class="md:max-w-xl text-md md:text-lg font-semibold md:font-bold p-2 md:p-3"
          :class="[
            notice.condition === 'emergency'
              ? 'text-red-500'
              : notice.condition === 'important'
              ? 'text-amber-500'
              : notice.condition === 'standard'
              ? 'text-green-500'
              : 'text-green-500',
          ]"
        >
          <p class="font-bold text-lg">{{ notice.title.length > 24 ? notice.title.substr(0,23) + '...' : notice.title }} </p>
        </div>
      </div>
    </div>
    <!-- End of Normal Notice -->
  </div>
</template>

<script>
/* eslint-disable */
import { computed, onMounted } from "vue-demi";
import { useRouter } from "vue-router";
import { useNoticeStore } from "../../stores/notices";

export default {
  setup() {
    const router = useRouter();
    const store = useNoticeStore();

    const notices = computed(() => {
      return store.notices;
    })

    const primaryNotices = computed(() => {
      return store.primaryNotices;
    })

    onMounted(() => {
      store.fetchNotices();
      store.fetchPrimaryNotices();
    })

    const noticeDetailOpen = (id) => {
        console.log(id);
        store.selectedNotice(id);
        router.push("/noticedetail");
    };

    return {
      notices,
      primaryNotices,
      noticeDetailOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>