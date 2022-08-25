<template>
    <div class="2xl:max-w-[1640px] m-auto md:my-12">
        <div
            class="w-full p-5 h-screen" :class="notice.condition === 'emergency' ? 'bg-red-100' : notice.condition ==='important' ? 'bg-amber-100' : 'bg-green-100'"
            >
            <!-- 비로그인일 경우 -->
            <div class="flex justify-end px-6 pt-3 z-30">
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
            <!-- content -->
            <div
              class="flex space-x-2 pb-5"
              :class="[
                notice.condition === 'emergency'
                  ? 'text-red-500'
                  : notice.condition === 'important'
                  ? 'text-amber-500'
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
              [{{ notice.belong }}] {{ notice.condition === 'emergency' ? '긴급 공지드립니다.' : notice.condition ==='important' ? '중요 안내드립니다.' : notice.condition ==='information' ? '안내드립니다.' : '' }}
            </div>
            <div class="leading-relaxed pt-1 px-3 md:px-5 text-sm md:text-md">
                <h1 class="title font-extrabold pb-5"> {{ notice.title }} </h1>
                <span class="content" > {{ notice.content }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useNoticeStore } from "../../stores/notices";

export default {
    setup () {
        /* Pinia */
        const store = useNoticeStore();

        const notice = computed(() => {
            if (store.notices.length != 0) {
                return store.currentNotice;
            }
        });

        return {
            notice,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>