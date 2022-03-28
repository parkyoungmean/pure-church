<template>
  <div class="container py-4 max-w-5xl mx-auto space-y-2">
    <!-- Primary Notice -->
    <div
      v-for="pnotice in primaryNotices"
      :key="pnotice.id"
      class="
        w-full
        md:h-10
        xxs:h-8
        p-2
        bg-[#FFBF00]
        text-white
        rounded-md
        shadow-md
        border border-gray-200
        flex
        justify-between
        items-center
      "
    >
      <div class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="md:h-7 md:w-7 xxs:h-6 xxs:w-6"
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
        <!-- title -->
        <!-- 큰 화면에서 표시됨 -->
        <h2 class="xxs:hidden md:block">[필독] {{ pnotice.title }}</h2>
        <!-- 모바일 화면에서 표시됨 -->
        <h2 class="md:hidden xxs:block xxs:text-sm">[필독] {{ pnotice.title.substr(0, 18) + '...' }}</h2>
        <!-- -> button -->
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-6
              w-6
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
        </a>
      </div>
      <!-- Close button -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="md:h-6 md:w-6 xxs:h-5 xxs:w-5 hover:cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <!-- End of Primary Notice -->
    <!-- Normal Notice -->
    <div
      v-for="notice in notices"
      :key="notice.id"
      class="
        space-y-2
        left-0
        sm:left-auto
        w-full
        justify-center
        sm:justify-end
        px-4
        sm:right-0
      "
    >
      <div
        class="
          .min-h-[16]
          w-full
          px-4
          py-2
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
            notice.type === 'emergency'
              ? 'text-red-500'
              : notice.type === 'important'
              ? 'text-amber-500'
              : 'text-green-500',
          ]"
        >
          <svg
            v-show="notice.type === 'emergency'"
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
            v-show="notice.type === 'important'"
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
            v-show="notice.type === 'standard'"
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
          [{{ notice.tag }}] {{ notice.caption }}
        </div>
        <div
          class="max-w-md"
          :class="[
            notice.type === 'emergency'
              ? 'text-red-700'
              : notice.type === 'important'
              ? 'text-amber-700'
              : 'text-green-700',
          ]"
        >
          {{ notice.title }}
        </div>
      </div>
    </div>
    <!-- End of Normal Notice -->
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    notices: {
      type: Object,
      required: true,
    },
    primaryNotices: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>