<template>
  <div class="min-h-screen items-center justify-center">
    <section class="header py-10 md:py-15 text-center">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <h2 class="text-2xl font-semibold md:text-3xl">공지사항</h2>
        <div class="left flex flex-col justify-center">
          <!-- Filter -->
          <div class="right flex justify-end items-center text-xs md:text-lg">
            <div class="filter">
              <div
                @click="toggleFilterMenu"
                class="filter flex items-center relative mr-10 focus:outline-none"
              >
                <span>{{ filter_name }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rull="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <!-- Filter Menu -->
                <transition name="filter">
                  <ul
                    v-if="filter_menu"
                    class="
                      filter-menu
                      absolute
                      bg-white
                      space-y-2
                      py-1
                      mt-11
                      md:mt-4
                      rounded-md
                      w-20
                      md:w-32
                    "
                  >
                    <li>전체</li>
                    <li>광고</li>
                    <li>필독</li>
                    <li>긴급</li>
                    <li>중요</li>
                    <li>일반</li>
                  </ul>
                </transition>
              </div>
            </div>
            <!-- Add Notice Button -->
            <div
              @click="noticeFormOpen()"
              class="
                button
                flex
                text-xs
                md:text-lg
                p-1
                md:p-1
                5
                rounded-3xl
                bg-purple-500
                space-x-1
                mr-2
                md:mr-5
                cursor-pointer
              "
            >
              <div class="inner-button flex">
                <i
                  class="
                    fas
                    fa-plus
                    text-purple-700
                    p-1
                    md:p-1
                    5
                    rounded-full
                    bg-white
                  "
                ></i>
              </div>
              <div class="text-white">추가하기</div>
            </div>
          </div>
        </div>
        <!-- Primary Notice List -->
        <div class="py-4 md:py-6 space-y-2">
          <div v-for="(pNotice, index) in primaryNotices" :key="index" @click="noticeDetailOpen(pNotice.id)" class="w-full h-10 bg-[#FFBF00] text-white rounded-md flex justify-between items-center p-2">
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
              <h2 class="md:hidden xxs:block xxs:text-sm"><span class="font-bold">[{{ pNotice.belong }}]</span> {{ pNotice.condition === 'emergency' ? '(긴급 공지)' : pNotice.condition ==='important' ? '(중요 공지)' : pNotice.condition ==='standard' ? '(일반 공지)' : pNotice.condition === 'information' ? '(정보 안내)' : '' }} {{ pNotice.title.length > 19 ? pNotice.title.substr(0, 20) + '...' : pNotice.title }}</h2>
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
        </div>
        <!-- Notice List -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(notice, index) in notices" :key="index" @click="noticeDetailOpen(notice.id)" class="grid2-item p-5" :class="notice.condition === 'emergency' ? 'bg-red-100' : notice.condition ==='important' ? 'bg-amber-100' : 'bg-green-100'">
            <div
              class="flex gap-1 pb-5"
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
            <h3 class="title text-xl font-extrabold pb-5"> {{ notice.title }} </h3>
            <p class="content" > {{ notice.content.length > 22 ? notice.content.substr(0, 21) + '...' : notice.content }} </p>
            <div class="flex justify-end px-6 pt-7 space-x-1 gap-1">
              <svg
              v-show="notice.img.length !== 0"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ notice.author }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue-demi";
import { useRouter } from "vue-router";
import { useNoticeStore } from "../stores/notices";
import NoticeRegistration from "../components/notice/NoticeRegistration.vue";

export default {
  components: {
    NoticeRegistration,
  },
  setup() {

    const router = useRouter();
    const store = useNoticeStore();

    const notices = computed(() => {
      console.log('공지사항:', store.notices);
      return store.notices;
    })

    const primaryNotices = computed(() => {
      console.log('메인 공지사항:', store.primaryNotices);
      return store.primaryNotices;
    })

    onMounted(() => {
      store.fetchNotices();
      store.fetchPrimaryNotices();
    })

    const filter_name = ref("선택하세요.");
    const filter_menu = ref(null);

    const toggleFilterMenu = () => {
      filter_menu.value = !filter_menu.value;
    };

    const noticeDetailOpen = (id) => {
      console.log(id);
      store.selectedNotice(id);
      router.push("/noticedetail");
    };

    /* Create Notice Infomation */
    const noticeFormOpen = () => {
      router.push("/noticeregistration");
    };

    return {
      notices,
      primaryNotices,
      noticeDetailOpen,
      noticeFormOpen,
      filter_name,
      filter_menu,
      toggleFilterMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.title, .content {
    white-space: pre-line;
}

.header {
  margin-bottom: 5px;

  .left,
  .right {
    flex: 1;
  }

  .right {
    .button,
    filter {
      align-items: center;
    }

    .filter {
      cursor: pointer;

      .filter-menu {
        top: 25px;
        list-style: none;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 px 4px -1px rgba(0, 0, 0, 0.06);

        li {
          cursor: pointer;
        }
      }
    }
  }
}

/* Transition */
.filter-enter-active,
.filter-leave-active {
  transition: 0.3s ease all;
  opacity: 0.5;
}
.filter-enter,
.filter-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>