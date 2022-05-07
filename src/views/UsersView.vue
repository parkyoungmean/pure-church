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
                    @click="userDetailOpen(user.id)"
                    v-for="user in users"
                    :key="user.id"
                    class="cursor-pointer flex px-7 md:px-10"
                  >
                    <!-- AVATAR -->
                    <div class="mr-4 relative w-14">
                      <img
                        v-if="user.img === 'user.png'"
                        :src="require(`../assets/avatar/${user.img}`)"
                        alt=""
                        class="rounded-full w-14 h-14 mr-2"
                      />
                      <!-- AVATAR:blue dot -->
                      <img
                        v-else
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
                        {{ user.greetings }}
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
            <!-- USER DETAIL -->
            <UserDetail v-else />
            <!-- END OF USER DETAIL -->
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
import UserDetail from "@/components/user/UserDetail.vue";

export default {
  components: {
    UserRegistration,
    UserDetail,
  },
  setup() {
    const { ref } = require("vue");
    let open = ref(false);

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

    const currentUser = computed(() => {
      return store.getCurrentUser;
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

    /* Create user infomation */
    const userFormOpen = () => {
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        console.log(getCurrentBreakpoint());
        console.log("open dialog!");
        toggleModal();
        userMode('create');
      } else {
        console.log(getCurrentBreakpoint());
        open.value = !open.value;
      }
    };

    const toggleModal = () => {
      store.toggleModal();
    };

    const userMode = (mode) => {
      store.userMode(mode);
    };

    /* Read user infomation */
    const userDetailOpen = (id) => {
      store.selectedUser(id);

      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        console.log(getCurrentBreakpoint());
        console.log("open dialog!");
        toggleModal();
        userMode('read');
      } else {
        console.log(getCurrentBreakpoint());
        open.value = false;
      }
    };

    return {
      users,
      open,
      userFormOpen,
      userDetailOpen,
      toggleModal,
      currentUser,
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