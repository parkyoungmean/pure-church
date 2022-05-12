<template>
  <!-- Close Button -->
  <div class="flex justify-end p-6 md:hidden">
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
        items-center
        focus:outline-none
      "
    >
      <i class="fas fa-arrow-left"></i>
    </button>
  </div>
  <!-- End of Close Button -->
  <!-- USER EDIT FORM -->
  <div
    id="content"
    class="
      flex-1
      overflow-y-scroll
      p-2
      md:p-5
      scrollbar-thumb-color
      dark:scrollbar-thumb-color-dark
      scrollbar-with
      space-y-1
      md:space-y-5
    "
  >
    <!-- AVARTA -->
    <div class="flex flex-col items-center mb-3 md:mb-5">
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
          v-if="currentUser.img === 'user.png'"
          :src="require(`../../assets/avatar/${currentUser.img}`)"
          alt=""
          class="object-cover -rotate-45 rounded-full w-26 h-26 md:w-52 md:h-52"
        />
        <img
          v-else
          :src="currentUser.img"
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
    <h1
      class="
        w-full
        mb-5
        text-xs
        md:text-sm
        font-bold
        upercase
        mt-7
        dark:text-white
      "
    >
      사용자의 정보를
      <span class="text-red-500 font-bold">수정</span>
      하는 폼입니다. <br />
      *표시는 필수 입력항목입니다.
    </h1>
    <form ref="form" @submit.prevent="onSubmit" class="w-full mb-8">
      <div class="space-y-6">
        <!-- Input Email Address -->
        <div class="relative w-full">
          <input
            v-model="currentUser.email"
            type="email"
            id="email"
            autocomplete="off"
            class="floating-input peer h-12 md:h-full"
          />
          <label
            for="email"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            * 이메일 주소
          </label>
        </div>

        <!-- Input Name -->
        <div class="relative w-full">
          <input
            v-model="currentUser.name"
            type="text"
            id="name"
            autocomplete="off"
            class="floating-input peer h-12 md:h-full"
          />
          <label
            for="name"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            * 이름
          </label>
        </div>

        <!-- Input PhoneNumber -->
        <div class="relative w-full">
          <input
            v-model="currentUser.phoneNumber"
            type="text"
            id="phonenumber"
            autocomplete="off"
            class="floating-input peer h-12 md:h-full"
          />
          <label
            for="phonenumber"
            class="floating-label peer-focus:-translate-y-3 peer-focus:scale-90"
          >
            * 핸드폰번호
          </label>
        </div>

        <!-- Input ExtraInformation -->
        <div class="relative w-full">
          <textarea
            v-model="currentUser.extraInfo"
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

      <!-- Blank -->
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
        수정하기
      </button>
    </form>
  </div>
  <!-- END OF USER EDIT FORM -->
</template>
  
  <script>
/* eslint-disable */
import { computed } from "@vue/runtime-core";
import { useUserStore } from "../../stores/users";
import { useRouter } from "vue-router";
import { getCurrentBreakpoint } from "../../common/common";

export default {
  setup() {
    const router = useRouter();
    const store = useUserStore();

    const currentUser = computed(() => {
      return store.getCurrentUser;
    });

    const validationNumber = (str) => {
      let pattern_num = /[0-9]/; // 숫자체크
      let pattern_eng = /[a-zA-Z]/; // 문자체크
      let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 문자체크
      let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

      if (
        pattern_num.test(str) &&
        !pattern_eng.test(str) &&
        !pattern_spc.test(str) &&
        !pattern_kor.test(str)
      ) {
        return true;
      } else {
        alert("숫자만 입력 가능합니다.");
        return false;
      }
    };

    const onSubmit = () => {
      console.log(currentUser.value.phoneNumber);
      if (
        currentUser.value.email === "" ||
        currentUser.value.name === "" ||
        currentUser.value.phoneNumber === null
      ) {
        alert("필수입력 항목을 입력해주세요!");
        return;
      }

      if (validationNumber(currentUser.value.phoneNumber)) {
        store.updateUser(currentUser.value).then(() => {
          alert("학생 정보 수정 성공!");

          if (getCurrentBreakpoint().value < 768) {
            router.go(-1);
          } else {
            userMode("read");
          }
        });
      }
    };

    return {
      currentUser,
      onSubmit,
    };
  },
};
</script>
  
  <style lang="scss" scoped>
</style>