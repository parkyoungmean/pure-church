<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
      <div class="p-4 sm:p-12 lg:p-20 w-full">
        <div class="max-h-full h-full flex flex-row">
          <!-- LEFT SCHOOLS LIST -->
          <aside
            class="w-full lg:w-2/6 bg-white dark:bg-gray-900 rounded-lg md:mr-5"
          >
            <div class="max-w-full h-full w-full flex flex-col">
              <div class="flex p-7 md:p-10 justify-between">
                <div
                  class="
                    text-3xl
                    md:text-4xl
                    font-semibold
                    text-gray-900
                    dark:text-white
                  "
                >
                  학교 목록
                </div>
                <!-- ADD SCHOOL BUTTON -->
                <div class="flex items-cnenter justify-end mb-10 md:mr-2">
                  <button
                    @click="schoolFormOpen()"
                    id="add-school"
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
                      mr-1
                      md:mr-5
                    "
                  >
                    <i
                      class="
                        fas
                        fa-plus
                        text-epic-blue
                        p-1
                        rounded-full
                        bg-white
                      "
                    ></i>
                    <p class="text-white text-xs md:text-sm font-extrabold">
                      추가하기
                    </p>
                  </button>
                </div>
              </div>
              <!-- SCHOOLS SECTION START -->
              <div
                class="
                  flex-1
                  overflow-y-scroll
                  scrollbar-width scrollbar-thumb-color
                  dark:scrollbar-thumb-color-dark
                "
              >
                <div class="w-full space-y-2 md:space-y-4">
                  <!-- SCHOOL01 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-5
                      md:mx-10
                    "
                  >
                    <div
                      class="
                        group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        bg-amber-200
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:to-amber-600
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100
                      "
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 class="text-lg text-amber-900">복음학교</h4>
                        <div class="relative h-6 text-sm text-amber-800">
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                            >복음으로 하나됨</span
                          >
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
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
                          </a>
                        </div>
                      </div>
                      <img
                        src="../assets/bg-1.jpg"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL01 -->
                  <!-- SCHOOL02 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-5
                      md:mx-10
                    "
                  >
                    <div
                      class="
                        group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        bg-orange-200
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:to-orange-600
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100
                      "
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 class="text-lg text-orange-900">
                          치유(The Day) 학교
                        </h4>
                        <div class="relative h-6 text-sm text-orange-800">
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                            >하나님 나라의 회복의 능력</span
                          >
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
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
                          </a>
                        </div>
                      </div>
                      <img
                        src="../assets/bg-2.jpg"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL02 -->
                  <!-- SCHOOL03 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-5
                      md:mx-10
                    "
                  >
                    <div
                      class="
                        group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        bg-rose-200
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:to-rose-600
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100
                      "
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 class="text-lg text-rose-900">친밀감(Kar) 학교</h4>
                        <div class="relative h-6 text-sm text-rose-800">
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                            >두드리다, 머물다, 회복하다</span
                          >
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
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
                          </a>
                        </div>
                      </div>
                      <img
                        src="../assets/bg-3.jpg"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL03 -->
                  <!-- SCHOOL04 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-5
                      md:mx-10
                    "
                  >
                    <div
                      class="
                        group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        bg-fuchsia-200
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:to-fuchsia-600
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100
                      "
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 class="text-lg text-fuchsia-900">
                          능력의 기도(BAP) 학교
                        </h4>
                        <div class="relative h-6 text-sm text-fuchsia-800">
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                            >참된 영적전쟁과 승리</span
                          >
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
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
                          </a>
                        </div>
                      </div>
                      <img
                        src="../assets/bg-4.jpg"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL04 -->
                  <!-- SCHOOL05 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-5
                      md:mx-10
                    "
                  >
                    <div
                      class="
                        group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        bg-pink-200
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:to-pink-600
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100
                      "
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 class="text-lg text-pink-900">사랑 학교</h4>
                        <div class="relative h-6 text-sm text-pink-800">
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                            >사랑은 오래참고 온유하며</span
                          >
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
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
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://i.imgur.com/XTEusLc.jpg"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL05 -->
                  <!-- SCHOOL06 -->
                  <div
                    class="
                      relative
                      flex flex-col
                      justify-end
                      overflow-hidden
                      rounded-b-xl
                      pt-6
                      mx-5
                      md:mx-10
                    "
                  >
                    <div
                      class="
                        group
                        relative
                        flex
                        justify-between
                        rounded-xl
                        bg-blue-200
                        cursor-pointer
                        before:absolute
                        before:inset-y-0
                        before:right-0
                        before:w-1/2
                        before:rounded-r-xl
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:to-blue-600
                        before:opacity-0
                        before:transition
                        before:duration-500
                        hover:before:opacity-100
                      "
                    >
                      <div class="w-max relative space-y-1 p-4">
                        <h4 class="text-lg text-blue-900">사역자 학교</h4>
                        <div class="relative h-6 text-sm text-blue-800">
                          <span
                            class="
                              teansition
                              duration-300
                              group-hover:invisible group-hover:opacity-0
                            "
                            >사랑은 오래참고 온유하며</span
                          >
                          <a
                            href=""
                            class="
                              w-max
                              invisible
                              absolute
                              inset-0
                              flex
                              items-center
                              gap-3
                              translate-y-3
                              transition
                              duration-300
                              group-hover:visible group-hover:translate-y-0
                            "
                          >
                            <span>상세보기</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="
                                h-4
                                w-4
                                -translate-x-4
                                transition
                                duration-300
                                group-hover:translate-x-0
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
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://i.imgur.com/LRbjgMF.jpg"
                        alt=""
                        class="
                          absolute
                          -bottom-1
                          right-6
                          w-[6rem]
                          transition
                          duration-300
                          group-hover:scale-[1.4]
                          rounded-full
                          w-21
                          h-21
                        "
                      />
                    </div>
                  </div>
                  <!-- END OF SCHOOL06 -->
                </div>
              </div>
              <!-- END OF SCHOOLS SECTION  -->
            </div>
          </aside>
          <!-- END OF LEFT SCHOOLS LIST -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

const schools = [
  {
    title: "복음학교",
    subtitle: "복음으로 하나됨",
    img: "https://i.imgur.com/UyimOMY.jpg",
    color: 'amber',
  },
  {
    title: "치유(The Day)학교",
    subtitle: "하나님 나라의 회복과 능력",
    img: "https://i.imgur.com/xUc8v0t.jpg",
    color: "orange",
  },
  {
    title: "친밀감(Kar)학교",
    subtitle: "두드리다, 머물다, 회복하다",
    img: "https://i.imgur.com/C52zbsi.jpg",
    color: 'rose',
  },
  {
    title: "능력의 기도(BAP)학교",
    subtitle: "참된 영적 전쟁과 승리",
    img: "https://i.imgur.com/dPErD5s.jpg",
    color: 'fuchsia',
  },
  
  {
    title: "사랑학교",
    subtitle: "사랑은 오래참고 온유하며",
    img: "https://i.imgur.com/XTEusLc.jpg",
    color: 'pink',
  },
  {
    title: "사역자학교",
    subtitle: "충성되이 여겨 내게 직분을 맡기심이니",
    img: "https://i.imgur.com/LRbjgMF.jpg",
    color: 'blue',
  },
];
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>