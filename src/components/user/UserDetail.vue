<template>
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
          등록일: {{ currentUser.createdAt }}
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
      <!-- 연락처 -->
      <h1 class="uppercase tracking-widst text-sm md:text-lg font-bold">
        연락처
      </h1>
      <hr class="mb-2.5 md:mb-5 w-1/6" />
      <h1>{{ currentUser.phoneNumber }}</h1>
      <h1>{{ currentUser.email }}</h1>
      <h1>영국, 런던</h1>
      <hr class="my-5 md:my-10" />
      <!-- 관계 -->
      <h1 class="uppercase tracking-widst text-sm md:text-lg font-bold">
        관계
      </h1>
      <hr class="mb-2.5 md:mb-5 w-1/6" />
      <div class="flex -space-x-6">
        <img
          src="https://t1.daumcdn.net/thumb/C210x210.fjpg.q75/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcontentshub%2Fsdb%2F03e1cae25bba9e22ef3cb6935201ccf765c657fab9675eea94d2b79738a60742"
          alt="호레이스 바둔"
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
          alt="아니타 달링"
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
          alt="바로니스"
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
      <!-- 교육 -->
      <h1 class="uppercase tracking-widst text-sm text-lg font-bold">교육</h1>
      <hr class="mb-2.5 md:mb-5 w-1/6" />
      <h1 class="text-xs md:text-sm font-semibold tracking-wider uppercase">
        VOL11기 학교
      </h1>
      <h1 class="text-xs md:text-sm">
        <span class="italic">도봉 순전한 교회</span>,
        <span class="italic">수료</span> / 2016.4-2016.6
      </h1>
      <br />
      <h1 class="text-xs md:text-sm font-semibold tracking-wider uppercase">
        강남 치유학교
      </h1>
      <h1 class="text-xs md:text-sm">
        <span class="italic">강남 순전한 교회</span>,
        <span class="italic">수료</span> / 2020-2020
      </h1>
      <br />
      <h1 class="text-xs md:text-sm font-semibold tracking-wider uppercase">
        치유학교 5기
      </h1>
      <h1 class="text-xs md:text-sm">
        <span class="italic">온라인</span>,
        <span class="italic text-green-400">진행중</span> / 2022-2022
      </h1>
      <br />
      <hr class="my-5 md:my-10" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { computed } from "@vue/runtime-core";
import { useUserStore } from "../../stores/users";

export default {
  setup() {
    const store = useUserStore();

    const currentUser = computed(() => {
      return store.getCurrentUser;
    });

    return {
      currentUser,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>