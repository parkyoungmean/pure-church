<template>
  <div class="flex bg-gray-100 fonts-sans text-gray-900">
      <!-- LEFT SIDEBAR -->
      <aside class="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <!-- Logo -->
        <div class="flex h-18 w-full items-center justify-center border-b border-gray-200">
            <router-link to="/userhome"><img src="https://imgur.com/KddmMij.jpg" alt="" class="w-32"></router-link>
        </div>
        <nav class="flex flex-1 flex-col gap-y-4 pt-10">
            <!-- <a href="" class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                <i class="material-icons-outlined text-blue-500 text-3xl">add_box</i>
            </a>
            <a href="" class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                <i class="material-icons-outlined text-blue-500 text-3xl">web</i>
            </a>
            <a href="" class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                <i class="material-icons-outlined text-blue-500 text-3xl">palette</i>
            </a> -->
            <a href="" class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                <i class="material-icons-outlined text-blue-700 text-3xl">description</i>
            </a>
            <a href="" class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                <i class="material-icons-outlined text-blue-500 text-3xl">image</i>
            </a>
        </nav>
      </aside>
      <!-- END OF LEFT SIDEBAR -->
      <!-- NAV -->
      <div class="flex h-screen flex-1 flex-col">
          <header class="flex h-18 items-center justify-center gap-x-6 border-b border-gray-200 bg-white px-8">
              <!-- Left Button -->
              <button class="flex items-center justify-center rounded-xl bg-gray-100 p-2">
                <i class="material-icons-outlined text-blue-500 text-3xl">chevron_left</i>
              </button>
              <!-- Preview -->
              <button class="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
                <i class="material-icons-outlined stroke-current text-gray-400 text-3xl">visibility</i>
                <span class="text-sm font-semibold leading-6">미리보기</span>
              </button>
              <div class="h-full w-px bg-gray-200"></div>
              <!-- Device Screen -->
              <div class="flex items-center gap-x-3">
                <button class="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2">
                    <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-3xl">desktop_windows</i>
                    <span class="text-sm font-semibold leading-6">데스크탑 화면</span>
                </button>
                <button class="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2">
                    <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-3xl">smartphone</i>
                    <span class="text-sm font-semibold leading-6">모바일 화면</span>
                </button>
              </div>
              <div class="h-full w-px bg-gray-200"></div>  
          </header>
          <!-- WORKSPACE -->
          <main class="flex-1 overflow-y-scroll px-12">
              <div class="relative my-12 bg-white">
                <section class="absolute py-16 px-12 ">
                    <h1 class="title max-w-3xl font-bold leading-[1.4]" :class="`${titleTextSize} ${titleTextColor}`">
                        {{ title }}
                    </h1>
                    <p class="subtitle mt-4 font-bold leading-loose" :class="`${subtitleTextSize} ${subtitleTextColor}`">
                        {{ subtitle }}
                    </p>
                    <p class="description mt-4 leading-7" :class="`${descriptionTextSize} ${descriptionTextColor}`">
                        {{ description }}
                    </p>
                    <!-- Button -->
                    <div class="flex items-center gap-4 pt-8">
                        <button class="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
                            기도 참여하기
                        </button>
                        <button class="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">자세히 보기</button>
                    </div>
                </section>
                <!-- Background Image -->
                <img
                    :src="bgImg"
                    alt=""
                    class="bg-center bg-cover bg-no-repeat w-full lg:h-full min-h-screen"
                />
              </div>
          </main>
          <!-- END OF WORKSPACE -->
      </div>
      <!-- END OF NAV -->
      <!-- RIGHT CONTROLLER -->
      <aside class="h-screen w-[300px] flex flex-col bg-white border-l border-gray-200">
        <form ref="form" @submit.prevent="onSubmit">
          <div class="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
              <button  @click="$router.go(-1)" type="button" class="flex items-center justify-center gap-x-2 rounded-xl bg-red-500 px-4 py-2 text-sm leading-6 text-white">
                <i class="material-icons-outlined stroke-current text-white text-xl">cancel</i>
                <span class="text-sm font-semibold leading-6">취소</span>
              </button>
              <button type="submit" class="flex items-center justify-center gap-x-2 rounded-xl bg-blue-500 px-4 py-2 text-sm leading-6 text-white">
                <i class="material-icons-outlined stroke-current text-white text-xl">publish</i>
                <span class="text-sm font-semibold leading-6">확인</span>
              </button>
          </div>
          <!-- Title Input Area -->
          <div>
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 px-6 py-4">
                        <span class="text-sm font-semibold capitalize group-open:text-red-50">제  목</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-gray-400 cursor-pointer list-none transition-transform group-open:rotate-90"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rull="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </summary>
                    <!-- Title Input -->
                    <div class="px-6 pt-4 pb-2">
                        <textarea type="text" :value="title" @input="title = $event.target.value" class="border border-gray-400 rounded-md h-12 w-full"/>
                    </div>
                    <!-- Title Text Size & Color -->
                    <div class="border-b border-gray-200 px-6 pb-4">
                        <div class="flex items-center justify-between">
                            <Dropdown :items="selectFontSizes" :selected="'글자 크기'" @on-change="updateTitleSizeChange" />
                            <Dropdown :items="selectFontColors" :selected="'글자색'" @on-change="updateTitleColorChange" />
                        </div>
                    </div>
                </details>
          </div>
          <!-- Subtitle Input Area -->
          <div>
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 px-6 py-4">
                        <span class="text-sm font-semibold capitalize group-open:text-red-50">소제목</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-gray-400 cursor-pointer list-none transition-transform group-open:rotate-90"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rull="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </summary>
                    <!-- Subtitle Input -->
                    <div class="px-6 pt-4 pb-2">
                        <textarea type="text" :value="subtitle" @input="subtitle = $event.target.value" class="border border-gray-400 rounded-md h-32 w-full"/>
                    </div>
                    <!-- Subtitle Text Size & Color -->
                    <div class="border-b border-gray-200 px-6 pb-4">
                        <div class="flex items-center justify-between">
                            <Dropdown :items="selectFontSizes" :selected="'글자 크기'" @on-change="updateSubtitleSizeChange" />
                            <Dropdown :items="selectFontColors" :selected="'글자색'" @on-change="updateSubtitleColorChange" />
                        </div>
                    </div>
                </details>
          </div>
          <!-- Description Input Area -->
          <div>
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 px-6 py-4">
                        <span class="text-sm font-semibold capitalize group-open:text-red-50">내  용</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-gray-400 cursor-pointer list-none transition-transform group-open:rotate-90"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rull="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </summary>
                    <!-- Description Input -->
                    <div class="px-6 pt-4 pb-2">
                        <textarea type="text" :value="description" @input="description = $event.target.value" class="border border-gray-400 rounded-md h-32 w-full"/>
                    </div>
                    <!-- Description Text Size & Color -->
                    <div class="border-b border-gray-200 px-6 pb-4">
                        <div class="flex items-center justify-between">
                            <Dropdown :items="selectFontSizes" :selected="'글자 크기'" @on-change="updateDescriptionSizeChange" />
                            <Dropdown :items="selectFontColors" :selected="'글자색'" @on-change="updateDescriptionColorChange" />
                        </div>
                    </div>
                </details>
          </div>
          <!-- Align Area -->
          <div>
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 px-6 py-4">
                        <span class="text-sm font-semibold capitalize group-open:text-red-50">배  치</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-gray-400 cursor-pointer list-none transition-transform group-open:rotate-90"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rull="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                    </summary>
                    <!-- Title Align -->
                    <div class="border-b border-gray-200 px-6 py-4">
                        <div class="flex items-center justify-between">
                            <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_vertical_bottom</i>
                            </button>
                            <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_horizontal_center</i>
                            </button>
                            <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_horizontal_left</i>
                            </button>
                            <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_horizontal_right</i>
                            </button>
                            <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_vertical_top</i>
                            </button>
                            <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                <i class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_vertical_center</i>
                            </button>
                        </div>
                    </div>
                </details>
          </div>
        </form>
      </aside>
      <!-- END OF RIGHT CONTROLLER -->
  </div>
</template>

<script>
import { ref, reactive } from "vue-demi";
import { useNoticeStore } from "../../stores/notices";
import { useRouter } from "vue-router";
import Dropdown from "../../components/common/Dropdown.vue";

export default {
  components: {
      Dropdown
  },
  setup() {

    const store = useNoticeStore();
    const router = useRouter();

    const bgImg = ref("https://pbs.twimg.com/media/EJ8BpMMX0AAotgb?format=jpg&name=large");                                // 배경 이미지
    const title = ref("");                                // 제목
    const subtitle = ref("");                             // 소제목
    const description = ref("");                          // 세부 내용
    const titleTextSize = ref("text-sm");                 // 제목 글자 크기
    const titleTextColor = ref("text-black");             // 제목 글자 색상
    const subtitleTextSize = ref("text-sm");              // 소제목 글자 크기
    const subtitleTextColor = ref("text-black");          // 소제목 글자 색상
    const descriptionTextSize = ref("text-sm");           // 세부내용 글자 크기
    const descriptionTextColor = ref("text-black");       // 세부내용 글자 색상

    const selectFontSizes = [
      {
        id: 0,
        text: "매우 작게",
        value: "text-sm",
      },
      {
        id: 1,
        text: "작게",
        value: "text-base",
      },
      {
        id: 2,
        text: "중간",
        value: "text-lg",
      },
      {
        id: 3,
        text: "크게",
        value: "text-2.5xl",
      },
      {
        id: 4,
        text: "매우 크게",
        value: "text-5xl",
      },
    ]
    
    const selectFontColors = [
      {
        id: 0,
        text: "검정",
        value: "text-black",
      },
      {
        id: 1,
        text: "흰색",
        value: "text-white",
      },
      {
        id: 2,
        text: "진회색",
        value: "text-gray-600",
      },
      {
        id: 3,
        text: "회색",
        value: "text-gray-400",
      },
      {
        id: 4,
        text: "연회색",
        value: "text-gray-200",
      },
      {
        id: 5,
        text: "빨강",
        value: "text-red-500",
      },
      {
        id: 6,
        text: "주황",
        value: "text-orange-500",
      },
      {
        id: 7,
        text: "노랑",
        value: "text-yellow-300",
      },
      {
        id: 8,
        text: "초록",
        value: "text-green-600",
      },
      {
        id: 9,
        text: "파랑",
        value: "text-blue-600",
      },
      {
        id: 9,
        text: "남색",
        value: "text-indigo-600",
      },
      {
        id: 10,
        text: "퓨시아",
        value: "text-fuchsia-600",
      },
      {
        id: 11,
        text: "핑크",
        value: "text-pink-500",
      },
      {
        id: 12,
        text: "장미",
        value: "text-rose-300",
      },
    ]
    
    const updateTitleSizeChange = (param) =>  {
        console.log(param) 
        titleTextSize.value = param;
    }

    const updateTitleColorChange = (param) =>  {
        console.log(param) 
        titleTextColor.value = param;
    }

    const updateSubtitleSizeChange = (param) =>  {
        console.log(param) 
        subtitleTextSize.value = param;
    }

    const updateSubtitleColorChange = (param) =>  {
        console.log(param) 
        subtitleTextColor.value = param;
    }

    const updateDescriptionSizeChange = (param) =>  {
        console.log(param) 
        descriptionTextSize.value = param;
    }

    const updateDescriptionColorChange = (param) =>  {
        console.log(param) 
        descriptionTextColor.value = param;
    }

    /* 슬라이드 광고 전송하기(create) */
    const onSubmit = () => {
        if (bgImg === "") {
            alert("배경 이미지가 필수적으로 필요합니다.")
        }

        const publicity = {
            img: bgImg.value,
            title: title.value || '',
            subtitle: subtitle.value || '',
            description: description.value || '',
            /* 글자 크기 */
            size: {
                titleTextSize: titleTextSize.value,
                subtitleTextSize: subtitleTextSize.value,
                descriptionTextSize: descriptionTextSize.value,
            },
            /* 글자 색상 */
            color: {
                titleTextColor: titleTextColor.value,
                subtitleTextColor: subtitleTextColor.value,
                descriptionTextColor: descriptionTextColor.value,
            },
            condition: "publicity",
        }

        console.log(publicity);

        store.createPublicity(publicity).then(() => {
            router.go(-1);
        });
    }

    return {
        bgImg,
        title,
        subtitle,
        description,
        titleTextSize,
        selectFontSizes,
        updateTitleSizeChange,
        titleTextColor,
        selectFontColors,
        updateTitleColorChange,
        subtitleTextSize,
        subtitleTextColor,
        updateSubtitleSizeChange,
        updateSubtitleColorChange,
        descriptionTextSize,
        descriptionTextColor,
        updateDescriptionSizeChange,
        updateDescriptionColorChange,
        onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.title, .subtitle, .description {
    white-space: pre-line;
}
</style>