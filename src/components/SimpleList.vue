<template>
  <div class="container py-4 max-w-5xl mx-auto">
    <div
      class="
        w-full
        h-10
        bg-[#FFBF00]
        text-white
        rounded-md
        flex
        justify-between
        items-center
        p-2
      "
    >
      <div class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
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
        <h2>[필독] 순전한 사역 안내</h2>
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
        class="h-6 w-6 hover:cursor-pointer"
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
  </div>
</template>

<script>
/* eslint-disable */

export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>