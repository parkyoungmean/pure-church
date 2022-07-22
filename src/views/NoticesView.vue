<template>
  <div
    class="bg-gray-200 min-h-screen items-center justify-center md:px-16 pt-20"
  >
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-col justify-center">
        <h1>공지사항</h1>
        <p>여기는 공지사항 페이지입니다.</p>
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import { useRouter } from "vue-router";
import NoticeRegistration from "../components/notice/NoticeRegistration.vue";

export default {
  components: {
    NoticeRegistration,
  },
  setup() {

    const router = useRouter();
    
    const filter_name = ref("선택하세요.");
    const filter_menu = ref(null);
    const open_modal = ref(false);

    const toggleFilterMenu = () => {
      filter_menu.value = !filter_menu.value;
    };

    const toggleModal = () => {
      open_modal.value = !open_modal.value;
    };

    /* Create Notice Infomation */
    const noticeFormOpen = () => {
      router.push("/noticeregistration");
    };

    return {
      filter_name,
      filter_menu,
      toggleFilterMenu,
      noticeFormOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
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