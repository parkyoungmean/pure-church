<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
      <div class="p-4 sm:p-12 lg:p-10 w-full">
        <!-- Close Button -->
        <div class="flex justify-end p-3 md:p-6">
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
        <div class="max-h-full h-full flex flex-row">
          <!-- LEFT USERS LIST -->
          <aside
            class="w-full lg:w-4/12 bg-white dark:bg-gray-900 rounded-lg md:mr-5"
          >
            <div class="max-w-full h-full w-full flex flex-col">
              <div class="flex p-7 md:pl-12 md:pr-5 md:py-10 justify-between">
                <div
                  class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white"
                >
                  학생 목록
                </div>
                <!-- ADD USER BUTTON -->
                <div class="flex items-cnenter justify-end mb-3 2xl:mb-10 md:mr-0">
                  <button
                    @click="userFormOpen()"
                    id="add-user"
                    type="button"
                    class="
                      flex
                      items-center
                      text-xs
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
              </div>
              <!-- USERS SECTION START-->
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
                          등록일: {{ user.convertedAt }}
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
              lg:w-8/12
              hidden
            "
          >
            <!-- USER DETAIL -->
            <UserDetail v-if="user_mode === 'read'" />
            <!-- END OF USER DETAIL -->
            <!-- USER REGISTRATION FORM -->
            <UserRegistration v-else-if="user_mode === 'create'" />
            <!-- END OF USER REGISTRATION FORM -->
            <!-- USER EDIT FORM -->
            <UserEdit v-else />
            <!-- END OF USER EDIT FORM -->
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useUserStore } from "../stores/users";
import UserDetail from "@/components/user/UserDetail.vue";
import UserRegistration from "@/components/user/UserRegistration.vue";
import UserEdit from "@/components/user/UserEdit.vue";
import { getCurrentBreakpoint } from "../common/common";


export default {
  components: {
    UserDetail,
    UserRegistration,
    UserEdit,
  },
  setup() {
    const { ref } = require("vue");

    /* Vuex */
    const vuexStore = useStore();
    /* Pinia */
    const store = useUserStore();

    const router = useRouter();

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

    /* Read user infomation */
    const userDetailOpen = (id) => {
      store.selectedUser(id);
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/userdetail");
        userMode("read");
      } else {
        userMode("read");
      }
    };

    /* Create user infomation */
    const userFormOpen = () => {
      /* If Mobile screen */
      if (getCurrentBreakpoint().value < 769) {
        router.push("/userregistration");
        userMode("create");
      } else {
        userMode("create");
      }
    };

    function increaseCount(n) {
      console.log(n);
    }

    const toggleModal = () => {
      store.toggleModal();
    };

    const userMode = (mode) => {
      store.userMode(mode);
    };

    return {
      users,
      userFormOpen,
      userDetailOpen,
      increaseCount,
      toggleModal,
      user_mode: computed(() => store.user_mode),
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