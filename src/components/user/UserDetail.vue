<template>
  <!-- Close Button -->
  <div class="flex justify-end px-6 pt-3 md:hidden">
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
  <!-- USER DETAIL -->
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
    <div>
      <!-- AVARTA -->
      <div class="flex flex-col items-center mb-2 md:mb-5">
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
            class="
              object-cover
              -rotate-45
              rounded-full
              w-26
              h-26
              md:w-52 md:h-52
            "
          />
          <img
            v-else
            :src="currentUser.img"
            alt=""
            class="
              object-cover
              -rotate-45
              rounded-full
              w-26
              h-26
              md:w-52 md:h-52
            "
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
      <!-- SIMPLE INTRODUCTION  -->
      <div class="flex flex-col items-center gap-1 md:gap-3 text-gray-900">
        <h1 class="text-xl md:text-3xl font-bold">{{ currentUser.name }}</h1>
        <p class="text-xs md:text-sm tracking-widest text-gray-400">
          ?????????: {{ currentUser.convertedAt }}
        </p>
        <p class="text-xs md:text-sm tracking-widest text-gray-400">
          {{ currentUser.greetings }}
        </p>
      </div>
    </div>
    <div
      class="
        mb-5
        pt-2
        md:pt-5
        px-5
        md:px-10
        text-xs text-gray-800
        dark:text-gray-400
        overflow-y-scroll
        scrollbar-width scrollbar-thumb-color
        dark:scrollbar-thumb-color-dark
      "
    >
      <!-- ????????? -->
      <h1 class="uppercase tracking-widst text-sm md:text-lg font-bold">
        ?????????
      </h1>
      <hr class="mb-2.5 md:mb-5 w-1/6" />
      <h1>{{ currentUser.phoneNumber }}</h1>
      <h1>{{ currentUser.email }}</h1>
      <h1>??????, ??????</h1>
      <hr class="my-5 md:my-10" />
      <!-- ?????? -->
      <h1 class="uppercase tracking-widst text-sm md:text-lg font-bold">
        ??????
      </h1>
      <hr class="mb-2.5 md:mb-5 w-1/6" />
      <div class="flex -space-x-6">
        <img
          src="https://t1.daumcdn.net/thumb/C210x210.fjpg.q75/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcontentshub%2Fsdb%2F03e1cae25bba9e22ef3cb6935201ccf765c657fab9675eea94d2b79738a60742"
          alt="???????????? ??????"
          class="
            inline-block
            w-12
            h-12
            md:w-16 md:h-16
            rounded-full
            border-2
            md:border-4
            border-gray-200
            transition
            duration-300
            hover:translate-y-2
          "
        />
        <img
          src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fcineplay%2F0004751349384bb0ab3d969203cf870d.jpg"
          alt="????????? ??????"
          class="
            inline-block
            w-12
            h-12
            md:w-16 md:h-16
            rounded-full
            border-2
            md:border-4
            border-gray-200
            transition
            duration-300
            hover:translate-y-2
          "
        />
        <img
          src="https://img.khan.co.kr/news/2021/05/26/l_2021052601002985500248376.webp"
          alt="????????????"
          class="
            inline-block
            w-12
            h-12
            md:w-16 md:h-16
            rounded-full
            border-2
            md:border-4
            border-gray-200
            transition
            duration-300
            hover:translate-y-2
          "
        />
      </div>
      <hr class="my-5 md:my-10" />
      <!-- ?????? -->
      <h1 class="uppercase tracking-widst text-sm text-lg font-bold">??????</h1>
      <hr class="mb-2.5 md:mb-5 w-1/6" />
      <h1 class="text-xs md:text-sm font-semibold tracking-wider uppercase">
        VOL11??? ??????
      </h1>
      <h1 class="text-xs md:text-sm">
        <span class="italic">?????? ????????? ??????</span>,
        <span class="italic">??????</span> / 2016.4-2016.6
      </h1>
      <br />
      <h1 class="text-xs md:text-sm font-semibold tracking-wider uppercase">
        ?????? ????????????
      </h1>
      <h1 class="text-xs md:text-sm">
        <span class="italic">?????? ????????? ??????</span>,
        <span class="italic">??????</span> / 2020-2020
      </h1>
      <br />
      <h1 class="text-xs md:text-sm font-semibold tracking-wider uppercase">
        ???????????? 5???
      </h1>
      <h1 class="text-xs md:text-sm">
        <span class="italic">?????????</span>,
        <span class="italic text-green-400">?????????</span> / 2022-2022
      </h1>
      <br />
      <hr class="my-3 md:my-5" />
      <div class="flex justify-end space-x-2 mt-2">
        <button
          @click="userEditOpen"
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
          ??????
        </button>
        <button
          @click="deleteUser"
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
          ??????
        </button>
      </div>
    </div>
  </div>
  <!-- END OF USER DETAIL -->
</template>

<script>
/* eslint-disable */
import { computed } from "@vue/runtime-core";
import { useUserStore } from "../../stores/users";
import { useRouter } from "vue-router";
import { getCurrentBreakpoint } from "../../common/common";

export default {
  setup() {
    const store = useUserStore();
    const router = useRouter();

    const currentUser = computed(() => {
      return store.getCurrentUser;
    });

    /* Update user infomation */
    const userEditOpen = () => {
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/useredit");
        userMode("update");
      } else {
        userMode("update");
      }
    };

    /* Delete user information */
    const deleteUser = () => {
      if (confirm("?????? ????????????????")) {
        /* alert("ok"); */

        store.deleteUser(currentUser.value).then(() => {
          alert("?????? ?????? ?????? ??????!");
          if (getCurrentBreakpoint().value < 768) {
            router.go(-1);
          } else {
            userMode("read");
            router.go(-1);
          }
        });
      } else {
        alert("?????????????????????.");
      }
    };

    const userMode = (mode) => {
      store.userMode(mode);
    };

    return {
      currentUser,
      userEditOpen,
      deleteUser,
    };
  },
};
</script>
 
<style lang="scss" scoped>
</style>