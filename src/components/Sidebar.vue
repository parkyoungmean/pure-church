<template>
  <div class="hscreen bg-gray-50 pb-14 lg:pb-16">
      <header>
          <div class="fixed w-full border-b bg-white z-20">
              <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
                  <div class="flex items-center justify-between">
                      <!-- Logo -->
                      <div class="flex items-center justify-center relative z-20">
                          <router-link to="/userhome"><img src="../assets/logo/01.jpeg" alt="" class="w-12"></router-link>
                          <p class="md:block text-md md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-epic-blue">순전한 교회</p>
                      </div>
                      <!-- End of Logo -->
                      <!-- Hamburgur Menu -->
                      <div class="flex items-center justify-end border-l lg:border-l-0">
                            <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden>
                            <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                              <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-blue-900 transition duration-300"></div>
                              <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-blue-900 transition duration-300"></div>
                            </label>
                            <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300  lg:border-l-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                <!-- Sidebar Menu -->
                                <div class="flex flex-col h-full justify-between lg:flex-row lg:items-center">
                                    <ul class="px-6 pt-32 text-xl sm:text-md md:text-sm lg:text-sm xl:text-md text-gray-700 space-y-8 md:px-12 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                        <li>
                                            <router-link to="/userhome" class="pt-3 group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-blue-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">home</span>
                                                <span class="relative text-blue-800">홈</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/worships" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">church</span>
                                                <span class="relative group-hover:text-blue-800">예배</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/bulletins" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">chrome_reader_mode</span>
                                                <span class="relative group-hover:text-blue-800">주보</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/schools" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">school</span>
                                                <span class="relative group-hover:text-blue-800">순전한 학교</span>
                                            </router-link>
                                        </li>
                                        <!-- <li>
                                            <router-link  to="/groups" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">groups</span>
                                                <span class="relative group-hover:text-blue-800">사역팀</span>
                                            </router-link>
                                        </li> -->
                                        <li>
                                            <router-link to="/gallery" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">photo_library</span>
                                                <span class="relative group-hover:text-blue-800">갤러리</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/notices" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">notifications</span>
                                                <span class="relative group-hover:text-blue-800">공지사항</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/settings" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2">settings</span>
                                                <span class="relative group-hover:text-blue-800">설정</span>
                                            </router-link>
                                        </li>
                                        <!-- <li>
                                            <router-link to="/users" class="group border-t pt-3 lg:border-t-0 lg:border-l lg:pl-8 relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">manage_accounts</span>
                                                <span class="relative group-hover:text-blue-800">학생관리</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/schools" class="group border-t pt-3 lg:border-t-0 lg:border-l lg:pl-8 relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">account_balance</span>
                                                <span class="relative group-hover:text-blue-800">학교관리</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/publicities" class="group border-t pt-3 lg:border-t-0 lg:border-l lg:pl-8 relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">settings_applications</span>
                                                <span class="relative group-hover:text-blue-800">광고관리</span>
                                            </router-link>
                                        </li> -->
                                    </ul>
                                    <!-- 비로그인 메뉴 버튼 만들기 -->
                                    <div @click="logout()" class="border-t px-6 py-8 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-6 lg:pl-6">
                                        <router-link to="/" class="block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 md:text-sm text-center text-white"><span style="vertical-align: middle;" class="relative material-icons mr-1">logout</span>로그아웃</router-link>
                                    </div>
                                </div>
                            </div>
                      </div>
                      <!-- End of Hamburgur Menu -->
                  </div>
              </div>
          </div>
      </header>
  </div>
</template>

<script>
/* eslint-disable */
import { computed } from "vue";
import router from '@/router';
import { useStore } from "vuex";
import { useAuthStore } from "../stores/authentications";

export default {
  components: {
  },
  setup() {
    const store = useStore();
    const authStore = useAuthStore();

    const logout = () => {
        authStore.logout();
        router.push("/");
        store.dispatch('ToggleLogin')
    }

    return {
      is_login: computed(() => store.state.is_login),
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>