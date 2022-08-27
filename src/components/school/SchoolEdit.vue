<template>
  <!-- Close Button -->
  <div class="flex justify-end p-6 md:hidden">
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
  <!-- End of Close Button -->
  <!-- SCHOOL EDIT -->
  <div class="container mx-auto">
    <!-- Progressbar -->
    <div class="progress-bar flex text-sm md:text-lg">
      <div class="step" v-for="(step, index) in progress_bar" :key="index">
        <p
          class="text-blue-600 mb-2 md:mb-4"
          :class="{ active: step.isActive }"
        >
          {{ step.name }}
        </p>
        <div
          class="bullet border-2 border-blue-600 rounded-full"
          :class="{ active: step.isActive }"
        >
          <span class="absolute left-2.5 text-center text-blue-600">{{
            index + 1
          }}</span>
        </div>
        <div
          class="check fas fa-check"
          :class="{ active: step.isActive }"
        ></div>
      </div>
    </div>
    <!-- End of Progressbar -->
    <h1
      class="
        w-full
        px-10
        text-xs
        md:text-lg
        font-bold
        upercase
        mt-2
        dark:text-white
      "
    >
      학교의 정보를
      <span class="text-red-500 font-bold">수정</span>
      하는 폼입니다. <br />
      *표시는 필수 입력항목입니다.
    </h1>
    <!-- School Edit Form -->
    <form ref="form" @submit.prevent="onSubmit" class="form">
      <!-- One Step -->
      <div
        class="form-step form-step-active slidepage flex flex-col items-center"
      >
        <h1 class="text-center text-lg md:text-2xl font-extrabold">
          기본 정보
        </h1>
        <div class="field input-group">
          <label for="schoolname">*학교 이름</label>
          <input
            v-model="currentSchool.name"
            type="text"
            name="schoolname"
            id="schoolname"
            class="border border-gray-400 rounded-md w-100"
          />
        </div>
        <div class="field input-group">
          <label for="schoolname">*소제목</label>
          <input
            v-model="currentSchool.subtitle"
            type="text"
            name="schoolname"
            id="schoolname"
            class="border border-gray-400 rounded-md w-100"
          />
        </div>
        <div class="field input-group">
          <label for="schoolcolor">*대표 색상 선택하기</label>
          <div class="grid grid-cols-8 xl:grid-cols-10 gap-8 items-center">
            <label
              v-for="(color, index) in school_colors"
              :key="index"
              for=""
              class="option_item"
            >
              <input
                type="radio"
                :name="color.origin"
                id="color"
                class="radio peer"
                :value="color.origin"
                v-model="currentSchool.color.origin"
              />
              <span
                :class="`
                  option_inner
                  p-1
                  md:p-2
                  rounded-full
                  peer-checked:ring-2 peer-checked:${color.ringColor}
                  ${color.subtitleColor} text-xs
                  transition
                  hover:ring-2
                  ${color.bgColor}
                  hover:${color.hBgColor}`"
              ></span>
              <div
                :class="`absolute
                  -inset-0.5
                  bg-gradient-to-r
                  ${color.fromColor}
                  ${color.toColor}
                  rounded-lg
                  blur
                  opacity-75
                  hidden
                  peer-checked:block`"
              ></div>
            </label>
          </div>
        </div>
        <div class="field input-group">
          <label for="schoolintroduce">*학교 소개</label>
          <textarea
            v-model="currentSchool.description"
            type="text"
            name="schoolintroduce"
            id="schoolintroduce"
            class="
              w-full
              h-32
              p-2
              outline-none
              border border-gray-400
              rounded-md
            "
          />
        </div>
        <div class="field btn-group flex justify-end">
          <button
            @click="nextBtn(-25)"
            type="button"
            class="
              btn btn-next
              w-6/12
              h-10
              md:h-12
              text-md
              md:text-lg
              font-extrabold
              p-2
              bg-blue-500
              rounded-md
              text-white
              hover:shadow-blue-500/50
            "
          >
            다음
          </button>
        </div>
      </div>
      <!-- End of One Step -->
      <!-- Two Step -->
      <div class="form-step slidepage flex flex-col items-center">
        <h1 class="text-center text-lg md:text-2xl font-extrabold">쿼리큘럼</h1>
        <!-- Input Lecture -->
        <div class="flex justify-center field h-14 w-[180%]">
          <input
            @keypress.enter.prevent="addLecture"
            class="px-5 py-2 rounded-l-full bg-blue-100 placeholder-blue-400"
            type="text"
            placeholder="강의제목을 입력하세요."
            v-model="lecture_title"
          />
          <button
            @click="addLecture"
            class="px-5 rounded-r-full bg-blue-500 text-white"
            type="button"
          >
            <svg
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <!-- End of Input Lecture -->
        <!-- Lecture List -->
        <section class="lecture-list field">
          <h4 v-if="currentSchool.curriculum.length !== 0">강의 목록</h4>
          <div v-for="(lecture, index) in currentSchool.curriculum" :key="index" class="">
            <div class="relative mt-4">
              <label
                class="
                  flex flex-col
                  items-center
                  gap-4
                  p-1
                  md:p-1
                  bg-gradient-to-r
                  from-blue-200
                  to-blue-100
                  rounded-xl
                  bg-opacity-90
                  backdrop-blur-2xl
                  shadow-xl
                  hover:bg-opacity-75
                  peer-checked:bg-purple-900 peer-checked:text-white
                  text-xs
                  md:text-lg
                  font-semibold
                  md:font-extrabold
                  cursor-pointer
                  transition
                  delay-100
                "
              >
                <div class="lecture-title flex items-center">
                  <span class="pl-2 md:px-5 w-8 md:w-20">
                    {{ index + 1 }}강
                  </span>
                  <input
                    class=""
                    style="border: none; background: transparent"
                    type="text"
                    v-model="lecture.title"
                  />
                </div>
              </label>
              <!-- Trash -->
              <button
                @click="removeLecture(lecture)"
                type="button"
                class="
                  flex
                  absolute
                  top-2
                  right-4
                  bottom-0
                  w-7
                  h-7
                  my-auto
                  text-red-600
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <!-- End of Lecture List -->

        <div class="field btn-group space-x-3 mt-10 flex justify-between">
          <button
            @click="prevBtn(0)"
            type="button"
            class="
              btn btn-prev
              w-6/12
              h-10
              md:h-12
              text-md
              md:text-lg
              font-extrabold
              p-2
              bg-green-500
              rounded-md
              text-white
              hover:shadow-green-500/50
            "
          >
            이전
          </button>
          <button
            @click="nextBtn(-50)"
            type="button"
            class="
              btn btn-next
              w-6/12
              h-10
              md:h-12
              text-md
              md:text-lg
              font-extrabold
              p-2
              bg-blue-500
              rounded-md
              text-white
              hover:shadow-blue-500/50
            "
          >
            다음
          </button>
        </div>
      </div>
      <!-- End of Two Step -->
      <!-- Three Step -->
      <div class="form-step slidepage flex flex-col items-center">
        <h1 class="text-center text-lg md:text-2xl font-extrabold">
          대표 이미지 업로드
        </h1>
        <div class="field p-3">
          <div class="mb-2">
            <!-- Image Select -->
            <div v-if="!tempImg || tempImg.length===0" class="relative h-60 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center hover:cursor-pointer">
              <div class="absolute">
                <div class="flex flex-col items-center justify-center mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="#D1D5DB" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="block text-xs md:text-lg text-gray-400 font-normal">이미지 파일을 드래그해주세요.</span>
                  <span class="block text-xs md:text-lg text-gary-400 font-normal">혹은</span>
                  <span class="block text-xs md:text-lg text-gary-400 font-normal">여기를 클릭해서 파일을 선택하세요.</span>
                  <span class="block text-md md:text-xl text-blue-400 font-normal">파일 찾아보기</span>
                </div>
              </div>
              <input @change="changeImageFile" type="file" class="w-full h-full opacity-0">
            </div>
            <!-- Image Preview -->
            <img v-else :src="tempImg" alt="" class="block w-auto h-60 lg:h-96 p-5 mx-auto">
            <!-- Image Info & Reset -->
            <div v-if="img.length!==0" class="flex justify-between items-center text-gray-400 mt-2">
              <span>파일 이름: {{ img.name==='' ? `${currentSchool.name}의 대표 이미지` : img.name.length > 19 ? img.name.substring(0, 20) + "..." : img.name }} </span>
              <button @click="tempImg=[]; img=[]; changeImage=false;" type="button" class="p-1.5 text-xs rounded-sm cursor-pointer" :class="img.length!==0 ? 'bg-blue-300 text-white' : 'bg-gray-200'">초기화</button>
            </div>
          </div>
        </div>
        <!-- Prev & Submit Button -->
        <div class="field btn-group space-x-3 flex justify-between">
          <button
            @click="prevBtn(-25)"
            type="button"
            class="
              btn btn-prev
              w-6/12
              h-10
              md:h-12
              text-md
              md:text-lg
              font-extrabold
              p-2
              bg-green-500
              rounded-md
              text-white
              hover:shadow-green-500/50
            "
          >
            이전
          </button>
          <button
            type="submit"
            class="
              btn btn-next
              w-6/12
              h-10
              md:h-12
              text-sm
              md:text-lg
              font-extrabold
              p-2
              bg-red-500
              rounded-md
              text-white
              hover:shadow-red-500/50
            "
          >
            전송
          </button>
        </div>
      </div>
      <!-- End of Three Step -->
    </form>
    <!-- End of Input Form -->
  </div>
  <!-- END OF SCHOOL EDIT -->
</template>

<script>
import { ref, reactive , computed } from "vue-demi";
import { useSchoolStore } from "../../stores/schools";
import { useImageStore } from "../../stores/images";
import { useRouter } from "vue-router";
import { getCurrentBreakpoint } from "../../common/common";

export default {
  setup() {
    const router = useRouter();
    const store = useSchoolStore();
    const imgStore = useImageStore();

    /* Image */
    const tempImg = ref([]); // 임시 이미지
    const img = ref([]); // 배경 이미지

    /* 이미지 변경 여부 flag 변수 */
    const changeImage = ref(false);

    /* curriculum */
    const lecture_title = ref("");
    
    /* Progress-bar */
    let current = 0;

    const progress_bar = reactive([
      {
        id: 0,
        name: "기본정보",
        isActive: false,
      },
      {
        id: 1,
        name: "쿼리큘럼",
        isActive: false,
      },
      {
        id: 2,
        name: "이미지",
        isActive: false,
      },
    ]);

    /* school colors */
    const school_colors = [
      {
        origin: "amber",
        ringColor: "ring-amber-600",
        hBgColor: "bg-amber-600",
        fromColor: "from-amber-600",
        toColor: "to-amber-600",
        bgColor: "bg-amber-200",
        gradientColor: "to-amber-600",
        textGradientColor: "to-amber-600/20",
        nameColor: "text-amber-900",
        subtitleColor: "text-amber-800",
      },
      {
        origin: "orange",
        ringColor: "ring-orange-600",
        hBgColor: "bg-orange-600",
        fromColor: "from-orange-600",
        toColor: "to-orange-600",
        bgColor: "bg-orange-200",
        gradientColor: "to-orange-600",
        textGradientColor: "to-orange-600/20",
        nameColor: "textoranger-900",
        subtitleColor: "text-orange-800",
      },
      {
        origin: "rose",
        ringColor: "ring-rose-600",
        hBgColor: "bg-rose-600",
        fromColor: "from-rose-600",
        toColor: "to-rose-600",
        bgColor: "bg-rose-200",
        gradientColor: "to-rose-600",
        textGradientColor: "to-rose-600/20",
        nameColor: "text-rose-900",
        subtitleColor: "text-rose-800",
      },
      {
        origin: "fuchsia",
        ringColor: "ring-fuchsia-600",
        hBgColor: "bg-fuchsia-600",
        fromColor: "from-fuchsia-600",
        toColor: "to-fuchsia-600",
        bgColor: "bg-fuchsia-200",
        gradientColor: "to-fuchsia-600",
        textGradientColor: "to-fuchsia-600/20",
        nameColor: "text-fuchsia-900",
        subtitleColor: "text-fuchsia-800",
      },
      {
        origin: "pink",
        ringColor: "ring-pink-600",
        hBgColor: "bg-pink-600",
        fromColor: "from-pink-600",
        toColor: "to-pink-600",
        bgColor: "bg-pink-200",
        gradientColor: "to-pink-600",
        textGradientColor: "to-pink-600/20",
        nameColor: "text-pink-900",
        subtitleColor: "text-pink-800",
      },
      {
        origin: "blue",
        ringColor: "ring-blue-600",
        hBgColor: "bg-blue-600",
        fromColor: "from-blue-600",
        toColor: "to-blue-600",
        bgColor: "bg-blue-200",
        gradientColor: "to-blue-600",
        textGradientColor: "to-blue-600/20",
        nameColor: "text-blue-900",
        subtitleColor: "text-blue-800",
      },
      {
        origin: "rose",
        ringColor: "ring-rose-bud-600",
        hBgColor: "bg-rose-bud-600",
        fromColor: "from-rose-bud-600",
        toColor: "to-rose-bud-600",
        bgColor: "bg-rose-bud-200",
        gradientColor: "to-rose-bud-600",
        textGradientColor: "to-rose-bud-600/20",
        nameColor: "text-rose-bud-900",
        subtitleColor: "text-rose-bud-800",
      },
      {
        origin: "rose-bud",
        ringColor: "ring-rose-bud-600",
        hBgColor: "bg-rose-bud-600",
        fromColor: "from-rose-bud-600",
        toColor: "to-rose-bud-600",
        bgColor: "bg-rose-bud-200",
        gradientColor: "to-rose-bud-600",
        textGradientColor: "to-rose-bud-600/20",
        nameColor: "text-rose-bud-900",
        subtitleColor: "text-rose-bud-800",
      },
      {
        origin: "lavender-blue",
        ringColor: "ring-lavender-blue-600",
        hBgColor: "bg-lavender-blue-600",
        fromColor: "from-lavender-blue-600",
        toColor: "to-lavender-blue-600",
        bgColor: "bg-lavender-blue-200",
        gradientColor: "to-lavender-blue-600",
        textGradientColor: "to-lavender-blue-600/20",
        nameColor: "text-lavender-blue-900",
        subtitleColor: "text-lavender-blue-800",
      },
      {
        origin: "mauve",
        ringColor: "ring-mauve-600",
        hBgColor: "bg-mauve-600",
        fromColor: "from-mauve-600",
        toColor: "to-mauve-600",
        bgColor: "bg-mauve-200",
        gradientColor: "to-mauve-600",
        textGradientColor: "to-mauve-600/20",
        nameColor: "text-mauve-900",
        subtitleColor: "text-mauve-800",
      },
      {
        origin: "carnation-pink",
        ringColor: "ring-carnation-pink-600",
        hBgColor: "bg-carnation-pink-600",
        fromColor: "from-carnation-pink-600",
        toColor: "to-carnation-pink-600",
        bgColor: "bg-carnation-pink-200",
        gradientColor: "to-carnation-pink-600",
        textGradientColor: "to-carnation-pink-600/20",
        nameColor: "text-carnation-pink-900",
        subtitleColor: "text-carnation-pink-800",
      },
      {
        origin: "regent-st-blue",
        ringColor: "ring-regent-st-blue-600",
        hBgColor: "bg-regent-st-blue-600",
        fromColor: "from-regent-st-blue-600",
        toColor: "to-regent-st-blue-600",
        bgColor: "bg-regent-st-blue-200",
        gradientColor: "to-regent-st-blue-600",
        textGradientColor: "to-regent-st-blue-600/20",
        nameColor: "text-regent-st-blue-900",
        subtitleColor: "text-regent-st-blue-800",
      },
      {
        origin: "magic-mint",
        ringColor: "ring-magic-mint-600",
        hBgColor: "bg-magic-mint-600",
        fromColor: "from-magic-mint-600",
        toColor: "to-magic-mint-600",
        bgColor: "bg-magic-mint-200",
        gradientColor: "to-magic-mint-600",
        textGradientColor: "to-magic-mint-600/20",
        nameColor: "text-magic-mint-900",
        subtitleColor: "text-magic-mint-800",
      },
    ];

    const currentSchool = computed(() => {
        return store.getCurrentSchool;
    })

    const schoolMode = (mode) => {
      store.schoolMode(mode);
    };

    const nextBtn = (pos) => {
      const slidePage = document.querySelector(".slidepage");
      slidePage.style.marginLeft = `${pos}%`;
      progress_bar[current].isActive = true;
      current += 1;
      if (pos === -50) {
        tempImg.value = currentSchool.value.img.link;
        img.value = currentSchool.value.img;
      }
    };

    const prevBtn = (pos) => {
      const slidePage = document.querySelector(".slidepage");
      slidePage.style.marginLeft = `${pos}%`;

      current -= 1;
      progress_bar[current].isActive = false;
    };

    const addLecture = () => {
      if (
        lecture_title.value.trim() === "" ||
        lecture_title.value.trim() === null
      ) {
        return;
      }
      currentSchool.value.curriculum.push({
        title: lecture_title.value,
        createdAt: new Date().getTime(),
        active: false,
      });

      lecture_title.value = "";
    };

    const removeLecture = (lecture) => {
        currentSchool.value.curriculum = currentSchool.value.curriculum.filter((l) => l !== lecture);
    };

    /* Image */
    const changeImageFile = (e) => {
      tempImg.value = URL.createObjectURL(e.target.files[0]);
      img.value = e.target.files[0];
      changeImage.value = true;
    }

    /* 학교 정보 수정하기(update) */
    const onSubmit = async () => {
      if (
        currentSchool.value.name === "" ||
        currentSchool.value.subtitle === "" ||
        currentSchool.value.color.origin === "" ||
        currentSchool.value.description === ""
      ) {
        alert("필수입력 항목을 입력해주세요!");
        return;
      }

      progress_bar[current].isActive = true;

      /* Upload Image - 대표 이미지에 변경사항이 있으면 */
      if (changeImage.value === true) {
        let rimg = [];

        await imgStore.uploadImage(img.value)
        .then(() => {
          rimg = imgStore.currentImage;
          currentSchool.value.img = JSON.stringify(rimg);
        })
      } else {
        currentSchool.value.img = JSON.stringify(currentSchool.value.img);
      }

      store.updateSchool(currentSchool.value).then(() => {

        if (getCurrentBreakpoint().value < 768) {
          router.go(-1);
        } else {
          schoolMode("read");
        }
      });
    };

    return {
      /* progress-bar */
      current,
      progress_bar,
      /* current school */
      currentSchool,
      /* form */
      school_colors, // 대표 색상
      lecture_title,
      tempImg,
      img,
      changeImage,
      changeImageFile,
      addLecture,
      removeLecture,
      nextBtn,
      prevBtn,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.container .progress-bar .step {
  position: relative;
  text-align: center;
  width: 100%;
}

.progress-bar .step p.active {
  color: #d43f8d;
}
.progress-bar .step .bullet {
  position: relative;
  height: 30px;
  width: 30px;
  display: inline-block;
  transition: 0.2s;
}

.progress-bar .step .bullet.active {
  border-color: #d43f8d;
  background: #d43f8d;
}
.progress-bar .step:last-child .bullet:before,
.progress-bar .step:last-child .bullet:after {
  display: none;
}

.progress-bar .step .bullet:before,
.progress-bar .step .bullet:after {
  position: absolute;
  content: "";
  bottom: 11px;
  right: -270px;
  height: 3px;
  width: 260px;
  background: #3182ce;
}
.progress-bar .step .bullet.active:after {
  background: #d43f8d;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 0.3s linear forwards;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.progress-bar .step .bullet span {
  font-weight: 500;
  line-height: 25px;
  left: 50%;
  transform: translateX(-50%);
}

.progress-bar .step .bullet.active span {
  display: none;
}

.progress-bar .step .check {
  position: absolute;
  left: 50%;
  top: 72%;
  transform: translate(-50%, -50%);
  display: none;
}
.progress-bar .step .check.active {
  display: block;
  color: #fff;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  /* border-radius: 0.5rem; */
}

.container {
  width: 100%;
  overflow: hidden;
}

.form {
  display: flex;
  width: 400%;
  margin: 0 auto;
  /* border-radius: 0.35rem; */
  padding: 1rem;
}

.form .form-step {
  width: 25%;
  margin: 0 0 0 0;
  transition: margin-left 0.3s ease-in-out;
}

.form .form-step .field {
  width: 550px;
  margin: 10px 0;
  position: relative;
}

.form .form-step .field .option_item {
  display: block;
  position: relative;
  margin: 4px;
}

.option_item .option_inner {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: block;
  border: 5px solid transparent;
  position: relative;
}

.option_item .radio {
  position: absolute;
  top: 7px;
  left: 4px;
  z-index: 1;
  opacity: 0;
}

@media (max-width: 1280px) {
  .form .form-step .field {
    /* height: 60px; */
    width: 450px;
    margin: 40px 0;
    position: relative;
  }
  .form .form-step .field .option_item {
    display: block;
    position: relative;
    /* width: 175px;
    height: 20px; */
    margin: 4px;
  }
  .option_item .option_inner {
    width: 100%;
    height: 100%;
    /* padding: 3px 3px; */
    cursor: pointer;
    display: block;
    border: 5px solid transparent;
    position: relative;
  }
  .option_item .radio {
    position: absolute;
    top: 6px;
    left: 3px;
    z-index: 1;
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .progress-bar .step .bullet:before,
  .progress-bar .step .bullet:after {
    position: absolute;
    content: "";
    bottom: 11px;
    right: -220px;
    height: 3px;
    width: 210px;
    background: #3182ce;
  }

  .form .form-step .field {
    width: 450px;
    margin: 15px 0;
    position: relative;
  }
  .form .form-step .field .option_item {
    display: block;
    position: relative;
    /* width: 175px;
    height: 20px; */
    margin: 4px;
  }

  .option_item .option_inner {
    width: 100%;
    height: 100%;
    /* padding: 3px 3px; */
    cursor: pointer;
    display: block;
    border: 5px solid transparent;
    position: relative;
  }

  .option_item .radio {
    position: absolute;
    top: 7px;
    left: 3px;
    z-index: 1;
    opacity: 0;
  }
}

@media (max-width: 540px) {
  .container .progress-bar .step {
    position: relative;
    text-align: center;
    width: 100%;
  }

  .progress-bar .step p.active {
    color: #d43f8d;
  }
  .progress-bar .step .bullet {
    position: relative;
    height: 30px;
    width: 30px;
    display: inline-block;
    transition: 0.2s;
  }

  .progress-bar .step .bullet.active {
    border-color: #d43f8d;
    background: #d43f8d;
  }
  .progress-bar .step:last-child .bullet:before,
  .progress-bar .step:last-child .bullet:after {
    display: none;
  }

  .progress-bar .step .bullet:before,
  .progress-bar .step .bullet:after {
    position: absolute;
    content: "";
    bottom: 11px;
    right: -90px;
    height: 3px;
    width: 85px;
    background: #3182ce;
  }
  .progress-bar .step .bullet.active:after {
    background: #d43f8d;
    transform: scaleX(0);
    transform-origin: left;
    animation: animate 0.3s linear forwards;
  }

  @keyframes animate {
    100% {
      transform: scaleX(1);
    }
  }

  .progress-bar .step .bullet span {
    font-weight: 500;
    line-height: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  .progress-bar .step .bullet.active span {
    display: none;
  }

  .progress-bar .step .check {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    display: none;
  }
  .progress-bar .step .check.active {
    display: block;
    color: #fff;
  }

  .form .form-step {
    width: 22%;
    margin: 0 45px 0 0;
    transition: margin-left 0.3s ease-in-out;
  }
  .form .form-step .field {
    width: 330px;
    margin: 10px 0;
    position: relative;
  }

  .form .form-step .field .option_item {
    display: block;
    position: relative;
    /* width: 175px;
    height: 20px; */
    margin: 4px;
  }

  .option_item .option_inner {
    width: 100%;
    height: 100%;
    /* padding: 3px 3px; */
    cursor: pointer;
    display: block;
    border: 5px solid transparent;
    position: relative;
  }

  .option_item .radio {
    position: absolute;
    width: 50px;
    top: 2px;
    left: -16px;
    z-index: 1;
    opacity: 0;
  }
}
</style>