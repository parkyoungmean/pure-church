<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
      <div class="p-4 sm:p-12 lg:p-20 mt-20 md:mt-10 w-full">
        <div class="max-h-full h-full flex flex-row">
          <!-- LEFT USERS LIST -->
          <aside
            class="w-full lg:w-3/5 bg-white dark:bg-gray-900 rounded-lg lg:mr-5"
          >
            <div class="max-w-full h-full w-full flex flex-col">
              <div class="flex p-7 md:p-10 justify-between">
                <div
                  class="text-4xl font-semibold text-gray-900 dark:text-white"
                >
                  학생 목록
                </div>
              </div>
              <!-- ADD USER BUTTON -->
              <div class="flex items-cnenter justify-end mb-10 mr-5">
                <button
                  @click="userFormOpen()"
                  id="add-user"
                  type="button"
                  class="
                    flex
                    items-center
                    text-sm
                    md:text-lg
                    p-1
                    md:p-1.5
                    rounded-3xl
                    bg-epic-blue
                    space-x-1
                    mr-2
                    md:mr-5
                  "
                >
                  <i
                    class="fas fa-plus text-epic-blue p-1 rounded-full bg-white"
                  ></i>
                  <p class="text-white text-sm font-extrabold">추가하기</p>
                </button>
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
                    class="cursor-pointer flex px-7 md:px-10"
                  >
                    <!-- AVATAR -->
                    <div class="mr-4 relative w-14">
                      <img v-if="user.Img === 'user.png'"
                      :src="require(`../assets/avatar/${user.Img}`)" alt=""
                      class="rounded-full w-14 h-14 mr-2" />
                      <!-- AVATAR:blue dot -->
                      <img
                        v-else
                        :src="user.Img"
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
                          {{ user.Name }}
                        </div>
                        <div class="text-gray-700 dark:text-gray-600 text-xs">
                          등록일: {{ user.CreatedAt }}
                        </div>
                      </div>
                      <div class="text-gray-400 text-sm dark:text-gray-600">
                        {{ user.Greetings }}
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
            <!-- USER FORM -->
            <UserRegistration v-if="open" />
            <!-- END OF USER FORM -->
            <!-- USER INFO -->
            <div
              v-else
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
                      border-t-epic-blue
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
                        bg-epic-blue
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
                    안녕 자기? 보여줄게, 내가 누군지 난 원래부터 뛰어나고,
                    못됐고, 약간 돌았지
                  </p>
                </div>
              </div>
              <div class="mb-5 pt-5 px-10 text-gray-800 dark:text-gray-400">
                <!-- 연락처 -->
                <h1 class="uppercase tracking-widst text-lg font-bold">
                  연락처
                </h1>
                <hr class="mb-5 w-1/6" />
                <h1>010-10000-0001</h1>
                <h1>loremipsu@gmail.com</h1>
                <h1>영국, 런던</h1>
                <hr class="my-10" />
                <!-- 관계 -->
                <h1 class="uppercase tracking-widst text-lg font-bold">관계</h1>
                <hr class="mb-5 w-1/6" />
                <div class="flex -space-x-6">
                  <img
                    src="https://t1.daumcdn.net/thumb/C210x210.fjpg.q75/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcontentshub%2Fsdb%2F03e1cae25bba9e22ef3cb6935201ccf765c657fab9675eea94d2b79738a60742"
                    alt="호레이스 바둔"
                    class="
                      inline-block
                      w-16
                      h-16
                      rounded-full
                      border-4 border-gray-200
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
                      w-16
                      h-16
                      rounded-full
                      border-4 border-gray-200
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
                      w-16
                      h-16
                      rounded-full
                      border-4 border-gray-200
                      transition
                      duration-300
                      hover:translate-y-2
                    "
                  />
                </div>
                <hr class="my-10" />
                <!-- 교육 -->
                <h1 class="uppercase tracking-widst text-lg font-bold">교육</h1>
                <hr class="mb-5 w-1/6" />
                <h1 class="text-sm font-semibold tracking-wider uppercase">
                  VOL11기 학교
                </h1>
                <h1 class="text-sm">
                  <span class="italic">도봉 순전한 교회</span>,
                  <span class="italic text-sm">수료</span> / 2016.4-2016.6
                </h1>
                <br />
                <h1 class="text-sm font-semibold tracking-wider uppercase">
                  강남 치유학교
                </h1>
                <h1 class="text-sm">
                  <span class="italic">강남 순전한 교회</span>,
                  <span class="italic text-sm">수료</span> / 2020-2020
                </h1>
                <br />
                <h1 class="text-sm font-semibold tracking-wider uppercase">
                  치유학교 5기
                </h1>
                <h1 class="text-sm">
                  <span class="italic">온라인</span>,
                  <span class="italic text-sm text-green-400">진행중</span> /
                  2022-2022
                </h1>
                <br />
                <hr class="my-10" />
              </div>
            </div>
            <!-- END OF USER INFO -->
          </section>
          <!-- END OF RIGHT CONTENT SECTION -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { onMounted, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useUserStore } from "../stores/users";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import UserRegistration from "@/components/user/UserRegistration.vue";

export default {
  components: {
    UserRegistration,
  },
  setup() {
    const { ref } = require("vue");
    let open = ref(false);

    /* const users = ref([]); */

    const fullConfig = resolveConfig(tailwindConfig);

    /* Vuex */
    const vuexStore = useStore();
    /* Pinia */
    const store = useUserStore();

    const getUsers = computed(() => {
      return store.getUsers;
    });

    const users = computed(() => {
      return store.users;
    });

    onMounted(() => {
      store.fetchUsers();
    });

    /* grab the current breakpoint of the screen  */
    const getCurrentBreakpoint = () => {
      let currentBreakpoint;
      const breakpointsArray = Object.entries(fullConfig.theme.screens);

      breakpointsArray.sort((a, b) => {
        const valA = [a[1].split("px")][0][0];
        const valB = [b[1].split("px")][0][0];
        const valAInt = parseInt(valA, 10);
        const valBInt = parseInt(valB, 10);
        if (valAInt > valBInt) {
          return 1;
        }
        if (valAInt < valBInt) {
          return -1;
        }
        return 0;
      });

      for (let i = 0; i < breakpointsArray.length; i++) {
        const breakpointValue = parseInt(
          [breakpointsArray[i][1].split("px")],
          10
        );

        if (window.innerWidth >= breakpointValue) {
          currentBreakpoint = breakpointsArray[i];
        } else {
          if (!currentBreakpoint) {
            [currentBreakpoint] = breakpointsArray;
          }
          break;
        }
      }
      return {
        key: currentBreakpoint[0],
        valueString: currentBreakpoint[1],
        value: parseInt([currentBreakpoint[1].split("px")], 10),
      };
    };

    const userFormOpen = () => {
      if (getCurrentBreakpoint().value < 769) {
        console.log(getCurrentBreakpoint());
        console.log("open dialog!");
        toggleModal();
        console.log(open.value);
      } else {
        console.log(getCurrentBreakpoint());
        open.value = !open.value;
        console.log(open.value);
      }
    };

    const toggleModal = () => {
      store.toggleModal();
    };

    return {
      users,
      open,
      userFormOpen,
      toggleModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>