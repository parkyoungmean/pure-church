<template>
    <div class="2xl:max-w-[1640px] m-auto md:my-12">
        <div
            class="w-full p-5 md:p-10 min-h-screen md:h-full" :class="notice.condition === 'emergency' ? 'bg-red-100' : notice.condition ==='important' ? 'bg-amber-100' : 'bg-green-100'"
            >
            <!-- Back Button -->
            <div class="flex justify-end pt-3 z-30">
                <button
                    @click="$router.go(-1)"
                    class="
                    top-5
                    right-0
                    h-7
                    w-7
                    text-2xl
                    font-semibold
                    justify-center
                    itmes-center
                    focus:outline-none
                    "
                    :class="[
                        notice.condition === 'emergency'
                        ? 'text-red-500'
                        : notice.condition === 'important'
                        ? 'text-amber-500'
                        : 'text-green-500',
                    ]"
                >
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <!-- Content -->
            <div
              class="flex gap-1 py-6 md:pb-5 text-lg md:text-2xl"
              :class="[
                notice.condition === 'emergency'
                  ? 'text-red-500'
                  : notice.condition === 'important'
                  ? 'text-amber-500'
                  : 'text-green-500',
              ]"
            >
            <!-- Content: Icon -->
              <svg
                v-show="notice.condition === 'emergency'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 md:h-8 md:w-8"
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
                class="w-7 h-7 md:h-8 md:w-8"
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
                class="w-7 h-7 md:h-8 md:w-8"
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
                class="w-7 h-7 md:h-8 md:w-8"
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
              <!-- Content: Introduce -->
              <span class="font-bold">[{{ notice.belong }}]</span> {{ notice.condition === 'emergency' ? '긴급 공지드립니다.' : notice.condition ==='important' ? '중요 공지드립니다.' : notice.condition ==='standard' ? '일반 공지드립니다.' : notice.condition === 'information' ? '정보 안내드립니다.' : '' }}
            </div>
            <!-- Content: Body -->
            <div class="leading-relaxed pt-1 px-3 md:px-5 text-sm md:text-lg">
                <h1 class="title font-extrabold text-xl lg:text-3xl"> {{ notice.title }} </h1>
                <!-- AVARTA -->
                <div class="flex py-3 md:py-5">
                    <div class="flex flex-col items-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10 md:w-12 md:h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <!-- SIMPLE INTRODUCTION  -->
                    <div class="flex flex-col gap-1 p-1">
                        <h1 class="text-sm font-bold">{{ notice.author }}</h1>
                        <p class="md:text-sm tracking-widest text-gray-400">
                        {{ notice.convertedAt }}
                        </p>
                    </div>
                </div>
                <img
                    v-if="notice.img.length !== 0"
                    :src="`${notice.img.link}`"
                    alt=""
                    class="bg-center bg-cover bg-no-repeat w-full lg:h-full py-5 md:px-10"
                />
                <div class="content font-semibold md:text-xl mt-5 md:mt-12" > {{ notice.content }} </div>
                <!-- Update & Delete Button -->
                <div
                  v-show="is_login ? true : false"
                  class="
                    flex
                    justify-end
                    space-x-2
                    xl:space-x-2.5
                    mt-10
                    xl:mt-20
                  "
                >
                  <button
                    @click="editNoticeForm"
                    class="
                      inline-flex
                      justify-center
                      px-2
                      sm:px-2
                      xl:px-4
                      py-1
                      sm:py-1
                      xl:py-1.5
                      text-sm
                      sm:text-xs
                      xl:text-lg
                      font-bold
                      xl:font-extrabold
                      sm:font-medium
                      text-white
                      bg-epic-blue
                      border border-transparent
                      rounded-md
                      hover:bg-blue-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-offset-2
                      focus-visible:ring-blue-500
                    "
                  >
                    수정
                  </button>
                  <button
                    @click="deleteNotice(notice.id)"
                    class="
                      inline-flex
                      justify-center
                      px-2
                      sm:px-2
                      xl:px-4
                      py-1
                      sm:py-1
                      xl:py-1.5
                      text-sm
                      sm:text-xs
                      xl:text-lg
                      font-bold
                      sm:font-medium
                      xl:font-extrabold
                      text-white
                      bg-red-600
                      border border-transparent
                      rounded-md
                      hover:bg-blue-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-offset-2
                      focus-visible:ring-blue-500
                    "
                  >
                    삭제
                  </button>
                </div>
                <!-- End Of Update & Delete Button -->
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useNoticeStore } from "../../stores/notices";

export default {
    setup () {
        const router = useRouter();
        
        /* Vuex */
        const vuexStore = useStore();

        /* Pinia */
        const store = useNoticeStore();

        const notice = computed(() => {
            if (store.notices.length != 0) {
                return store.currentNotice;
            }
        });

        /* Update Notice Infomation */
        const editNoticeForm = () => {
          router.push("/noticeedit");
        };
        
        /* Delete Notice Infomation */
        const deleteNotice = (id) => {
          if (confirm("정말 삭제합니까?")) {

            store.deleteNotice(id).then(() => {
              router.go(-1);
            });
          } else {
            alert("취소되었습니다.");
          }
        };

        return {
            notice,
            editNoticeForm,
            deleteNotice,
            is_login: computed(() => vuexStore.state.is_login),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>