<template>
  <div class="grid place-items-center h-screen">
    <div class="containter mx-auto md:px-12 lg:px-8">
      <div class="mb-28 space-y-4 text-center">
        <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
          학교장님 소개
        </h1>
      </div>
      <!-- Profile card -->
      <div
        class="
          w-full
          md:w-[400px]
          group
          cursor-pointer
          active:opacity-70
          transition-opacity
          duration-300
        "
      >
        <!-- Title card -->
        <div
          class="
            relative
            group
            bg-black
            rounded-t
            h-[50px]
            group-hover:h-[100px]
            transition-all
            duration-300
          "
        >
          <img
            src="../assets/profile/bg.jpeg"
            class="
              w-full
              h-full
              object-cover
              opacity-40
              group-hover:opacity-60
              transition
              duration-300
            "
            alt=""
          />
          <img
            src="../assets/profile/학교장님.png"
            class="
              object-cover
              absolute
              w-[160px]
              bottom-0
              opacity-0
              group-hover:opacity-100
              transform
              translate-y-3/4
              group-hover:translate-y-0
              transition
              duration-500
            "
            alt=""
          />
          <h1
            class="
              absolute
              top-1/2
              transform
              -translate-y-1/2
              left-5
              group-hover:left-52
              text-white
              font-bold
              text-md
              md:text-2xl
              transition-all
              duration-300
            "
          >
            장원혁 학교장
          </h1>
        </div>

        <!-- Body Card -->
        <div
          class="
            min-h-[120px]
            py-3
            px-4
            bg-white
            rounded-b
            relative
            z-10
            shadow
            text-gray-600
          "
        >
          <div class="font-semibold mb-1">
            <p>순전한 교회 담임목사</p>
            <p>Email: pure@church.kr</p>
          </div>
          <p class="text-left">
            God bless you!~ <br />
            순전한 학교에 방문해주신 여러분을 주님의 이름으로
            <br class="hidden md:inline-block" />환영합니다^^/
          </p>
        </div>
      </div>
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