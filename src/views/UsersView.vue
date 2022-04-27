<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
      <div class="p-4 sm:p-12 lg:p-20 w-full">
        <div class="max-h-full h-full flex flex-row">
          <!-- LEFT USERS LIST -->
          <aside
            class="w-full lg:w-3/5 bg-white dark:bg-gray-900 rounded-lg lg:mr-5"
          >
            <div class="max-w-full h-full w-full flex flex-col">
              <div class="flex p-10 justify-between">
                <div
                  class="text-4xl font-semibold text-gray-900 dark:text-white"
                >
                  학생 목록
                </div>
              </div>
              <!-- USERS SECTION -->
              <div
                class="
                  flex-1
                  overflow-y-scroll
                  scrollbar-width scrollbar-thumb-color
                  dark:scrollbar-thumb-color-dark
                "
              >
                <div class="w-full space-y-10">
                  <!-- USER -->
                  <div
                    v-for="user in users"
                    :key="user.id"
                    class="cursor-pointer flex px-10"
                  >
                    <!-- AVATAR -->
                    <div class="mr-4 relative w-14">
                      <img
                        :src="user.img"
                        alt=""
                        class="rounded-full w-14 h-14 mr-2"
                      />
                      <!-- AVATAR:green dot -->
                      <!-- <div
                        class="
                          w-3
                          h-3
                          bg-green-500
                          rounded-full
                          absolute
                          bottom-0
                          right-1.5
                        "
                      ></div> -->
                    </div>
                    <div class="flex flex-col flex-1">
                      <div class="flex justify-between items-cener">
                        <div
                          class="
                            text-gray-800 text-base
                            font-semibold
                            dark:text-gray-300
                          "
                        >
                          {{ user.name }}
                        </div>
                        <div class="text-gray-700 dark:text-gray-600 text-xs">
                          등록일: {{ user.createdAt }}
                        </div>
                      </div>
                      <div class="text-gray-400 text-sm dark:text-gray-600">
                        {{ user.extraInfo }}
                      </div>
                    </div>
                  </div>
                  <!-- END OF USER -->
                </div>
              </div>
              <!-- END OF USERS SECTION -->
            </div>
          </aside>
          <!-- END OF LEFT USERS LIST -->
          <!-- RIGHT CONTENT SECTION-->
          <section
            class="
              relative
              max-h-full
              h-full
              bg-white
              rounded-lg
              w-full
              flex flex-col
              dark:bg-gray-900
              lg:flex
              hidden
            "
          >
            <!-- CONTENT -->
            <div id="content" class="flex-1 overflow-y-scroll p-5 scrollbar-thumb-color dark:scrollbar-thumb-color-dark scrollbar-with space-y-5">
              <div>
                <!-- AVARTA -->
                <div class="flex flex-col items-center mb-5">
                  <span
                    class="
                      flex
                      items-center
                      justify-center
                      rotate-45
                      border-8
                      rounded-full
                      shadow
                      w-60
                      h-60
                      border-t-green-600
                    "
                  >
                    <img
                      src="https://i.imgur.com/tJghX0Z.jpg"
                      alt=""
                      class="object-cover -rotate-45 rounded-full w-52 h-52"
                    />
                    <span
                      class="
                        absolute
                        bg-green-500
                        border-4
                        dark:border-gray-900
                        rounded-full
                        bottom-20
                        -right-4
                        w-7
                        h-7
                      "
                    ></span>
                  </span>
                </div>
                <!-- SIMPLE INTRODUCTION  -->
                <div class="flex flex-col items-center gap-3 text-gray-900">
                  <h1 class="text-3xl font-bold">크루엘라</h1>
                  <p class="text-xl tracking-widest text-gray-400">
                    등록일: 2016년 03월 21일
                  </p>
                  <p class="text-sm tracking-widest text-gray-400">
                    안녕 자기? 보여줄게, 내가 누군지 난 원래부터 뛰어나고, 못됐고, 약간 돌았지
                  </p>
                </div>
              </div>
              <div class="mb-5 pt-5 px-10 text-gray-800 dark:text-gray-400">
                <!-- 연락처 -->
                <h1 class="uppercase tracking-widst text-lg font-bold">연락처</h1>
                <hr class="mb-5 w-1/6">
                <h1>010-10000-0001</h1>
                <h1>loremipsu@gmail.com</h1>
                <h1>영국, 런던</h1>
                <hr class="my-10">
                <!-- 관계 -->
                <h1 class="uppercase tracking-widst text-lg font-bold">관계</h1>
                <hr class="mb-5 w-1/6">
                <div class="flex -space-x-6">
                  <img src="http://t1.daumcdn.net/thumb/C210x210.fjpg.q75/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcontentshub%2Fsdb%2F03e1cae25bba9e22ef3cb6935201ccf765c657fab9675eea94d2b79738a60742" alt="호레이스 바둔" class="inline-block w-16 h-16 rounded-full border-4 border-gray-200 transition duration-300 hover:translate-y-2">
                  <img src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fcineplay%2F0004751349384bb0ab3d969203cf870d.jpg" alt="아니타 달링" class="inline-block w-16 h-16 rounded-full border-4 border-gray-200 transition duration-300 hover:translate-y-2">
                  <img src="https://img.khan.co.kr/news/2021/05/26/l_2021052601002985500248376.webp" alt="바로니스" class="inline-block w-16 h-16 rounded-full border-4 border-gray-200 transition duration-300 hover:translate-y-2">
                </div>
                <hr class="my-10">
                <!-- 교육 -->
                <h1 class="uppercase tracking-widst text-lg font-bold">교육</h1>
                <hr class="mb-5 w-1/6">
                <h1 class="text-sm font-semibold tracking-wider uppercase">VOL11기 학교</h1>
                <h1 class="text-sm">
                  <span class="italic">도봉 순전한 교회</span>,
                  <span class="italic text-sm">수료</span> / 2016.4-2016.6
                </h1>
                <br>
                <h1 class="text-sm font-semibold tracking-wider uppercase">강남 치유학교</h1>
                <h1 class="text-sm">
                  <span class="italic">강남 하나님아버지 교회</span>,
                  <span class="italic text-sm">수료</span> / 2020-2020
                </h1>
                <br>
                <h1 class="text-sm font-semibold tracking-wider uppercase">치유학교 5기</h1>
                <h1 class="text-sm">
                  <span class="italic">온라인</span>,
                  <span class="italic text-sm text-green-400">진행중</span> / 2022-2022
                </h1>
                <br>
                <hr class="my-10">
              </div>
            </div>
            <!-- END OF CONTENT -->
          </section>
          <!-- END OF RIGHT CONTENT SECTION -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let users = [
      {
        id: 0,
        name: "크루엘라",
        img: "https://i.imgur.com/tJghX0Z.jpg",
        extraInfo: "try as I might I never was. I'm Cruella,",
        createdAt: "2016.03.21",
        bookmark: "#home",
      },
      {
        id: 1,
        name: "블랙 위도우",
        img: "https://i.imgur.com/kjiTOzB.gif",
        extraInfo: "나는 사람을 실수만으로 판단하지 않아.",
        createdAt: "2022.04.22",
        bookmark: "#prayer",
      },
      {
        id: 2,
        name: "곰돌이 푸",
        img: "https://pbs.twimg.com/profile_images/985648888282411010/BRzwE67S_400x400.jpg",
        extraInfo: "잘 찾아보면 행복한 일은 매일 있어♡",
        createdAt: "2022.04.22",
        bookmark: "#prayer",
      },
      {
        id: 3,
        name: "해리 포터",
        img: "https://cdnweb01.wikitree.co.kr/webdata/editor/202008/24/img_20200824081913_996d6f13.webp",
        extraInfo: "기억해, 네게 친구들이 있어. 혼자가 아니야.",
        createdAt: "2022.04.21",
        bookmark: "#kar",
      },
      {
        id: 4,
        name: "닥터 스트레인저",
        img: "https://pbs.twimg.com/media/Cv6xICqWIAAPHOf?format=jpg&name=small",
        extraInfo:
          "너만의 볼품 없는 모습을 창조하라고, 너만의, 너만의 세상을 만들라고.",
        createdAt: "2022.04.25",
        bookmark: "#kar",
      },
      {
        id: 5,
        name: "피노키오",
        img: "https://pbs.twimg.com/profile_images/1346360049518579712/k_Kl9lnV_400x400.jpg",
        extraInfo:
          "사랑이란, 다른 사람의 행복이 나의 행복을 결정짓는 아름다운 현상이라구!",
        createdAt: "2022.04.26",
        bookmark: "#kar",
      },
      {
        id: 6,
        name: "공유",
        img: "https://i.imgur.com/RbBFZkQ.png",
        extraInfo: "그 아이가 날 죽게 할 수 있는데 그 아이가 날 살게 해",
        createdAt: "2022.04.26",
        bookmark: "#kar",
      },
    ];

    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>