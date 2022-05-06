<template>
  <div
    id="content"
    class="
      flex-1
      overflow-y-scroll
      p-5
      scrollbar-thumb-color
      dark:scrollbar-thumb-color-dark
      scrollbar-with
      space-y-5
    "
  >
    <!-- AVARTA -->
    <div class="flex flex-col items-center mb-5">
      <span
        class="
          flex
          items-center
          justify-center
          rotate-45
          border-5
          md:border-8
          rounded-full
          shadow
          w-30
          h-30
          md:w-60 md:h-60
          border-t-epic-blue
        "
      >
        <img
          src="../../assets/avatar/user.png"
          alt=""
          class="object-cover -rotate-45 rounded-full w-26 h-26 md:w-52 md:h-52"
        />
        <span
          class="
            absolute
            bg-epic-blue
            border-2
            md:border-4
            dark:border-gray-900
            rounded-full
            bottom-11
            md:bottom-20
            -right-3
            md:-right-4
            w-4
            h-4
            md:w-7 md:h-7
          "
        ></span>
      </span>
    </div>
    <h1 class="w-full mb-5 text-sm font-bold upercase mt-7 dark:text-white">
      새로운 사용자의 정보를 입력하는 폼입니다.
    </h1>
    <form action="#" class="w-full mb-8">
      <div class="space-y-6">
        <!-- Input Email Address -->
        <div class="relative w-full">
          <input
            type="email"
            id="email"
            autocomplete="off"
            class="floating-input peer h-12 md:h-full"
          />
          <label
            for="email"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            이메일 주소
          </label>
        </div>

        <!-- Input Name -->
        <div class="relative w-full">
          <input
            type="text"
            id="name"
            autocomplete="off"
            class="floating-input peer h-12 md:h-full"
          />
          <label
            for="name"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            이름
          </label>
        </div>

        <!-- Input PhoneNumber -->
        <div class="relative w-full">
          <input
            type="text"
            id="phonenumber"
            autocomplete="off"
            class="floating-input peer h-12 md:h-full"
          />
          <label
            for="phonenumber"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            핸드폰번호
          </label>
        </div>

        <!-- Input ExtraInformation -->
        <div class="relative w-full">
          <textarea
            type="text"
            id="extrainfo"
            autocomplete="off"
            class="floating-input peer"
          />
          <label
            for="extrainfo"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            추가정보
          </label>
        </div>
      </div>

      <!-- Check box && Reset Password -->
      <div
        class="flex items-enter justify-between text-[13px] mt-6 md:mb-10"
      ></div>
      <!-- Confirm Button -->
      <button
        type="submit"
        class="
          w-full
          h-14
          bg-epic-blue
          text-[20px]
          rounded
          uppercase
          font-bold
          text-white
          hover:brightness-110
        "
      >
        확 인
      </button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>