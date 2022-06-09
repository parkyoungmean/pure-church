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
  <!-- SCHOOL REGISTER -->
  <div class="container mx-auto">
    <!-- Steper -->
    <div class="relative w-full mb-20 px-5">
      <div class="w-full flex justify-between px-4 py-4">
        <button
          class="
            w-8
            h-8
            bg-amber-500
            rounded-md
            text-white
            transition
            duration-300
            hover:bg-green-500
            disabled:bg-gray-400
          "
        >
          1
        </button>
        <button
          class="
            w-8
            h-8
            bg-amber-500
            rounded-md
            text-white
            transition
            duration-300
            hover:bg-green-500
            disabled:bg-gray-400
          "
        >
          2
        </button>
        <button
          class="
            w-8
            h-8
            bg-amber-500
            rounded-md
            text-white
            transition
            duration-300
            hover:bg-green-500
            disabled:bg-gray-400
          "
        >
          3
        </button>
        <button
          class="
            w-8
            h-8
            bg-amber-500
            rounded-md
            text-white
            transition
            duration-300
            hover:bg-green-500
            disabled:bg-gray-400 disabled
          "
        >
          4
        </button>
      </div>
      <div class="w-full px-8 -mt-8">
        <div class="w-full h-[1px] bg-amber-800"></div>
      </div>
    </div>
    <!-- End of Steper -->
    <h1
      class="
        w-full
        px-10
        mb-5
        text-xs
        md:text-sm
        font-bold
        upercase
        mt-7
        dark:text-white
      "
    >
      새로운 학교의 정보를
      <span class="text-red-500 font-bold">등록</span>
      하는 폼입니다. <br />
      *표시는 필수 입력항목입니다.
    </h1>
    <!-- Input Form -->
    <form ref="form" @submit.prevent="onSubmit" class="form border">
      <!-- One Step -->
      <div class="form-step form-step-active slidepage grid md:justify-center">
        <h1 class="text-center">기본 정보</h1>
        <div class="field input-group">
          <label for="schoolname">*학교 이름</label>
          <input
            type="text"
            name="schoolname"
            id="schoolname"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group">
          <label for="schoolcolor">*대표 색상 선택하기</label>
          <div class="flex flex-row items-center space-x-3">
            <!-- click - ring-2 ring-yellow-800 -->
            <label for="" class="option_item">
              <input type="radio" name="color" id="amber" class="radio peer" value="amber" v-model="input_color">
              <span class="color1 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-amber-600 text-amber-800 text-xs transition hover:ring-2 bg-amber-200 hover:bg-amber-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="orange" class="radio peer" value="orange" v-model="input_color">
              <span class="color2 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-orange-600 text-orange-800 text-xs transition hover:ring-2 bg-orange-200 hover:bg-orange-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="rose" class="radio peer" value="rose" v-model="input_color">
              <span class="color3 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-rose-600 text-rose-800 text-xs transition hover:ring-2 bg-rose-200 hover:bg-rose-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-rose-600 to-rose-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="fuchsia" class="radio peer" value="fuchsia" v-model="input_color">
              <span class="color4 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-fuchsia-600 text-fuchsia-800 text-xs transition hover:ring-2 bg-fuchsia-200 hover:bg-fuchsia-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="pink" class="radio peer" value="pink" v-model="input_color">
              <span class="color5 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-pink-600 text-pink-800 text-xs transition hover:ring-2 bg-pink-200 hover:bg-pink-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-pink-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="blue" class="radio peer" value="blue" v-model="input_color">
              <span class="color6 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-blue-600 peer-checked:ring-2 peer-checked:ring-blue-600 text-blue-800 text-xs transition hover:ring-2 bg-blue-200 hover:bg-blue-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="rose_bud" class="radio peer" value="rose_bud" v-model="input_color">
              <span class="color7 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-rose-bud-600 text-rose-bud-800 text-xs transition hover:ring-2 bg-rose-bud-200 hover:bg-rose-bud-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-rose-bud-600 to-rose-bud-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="lavender_blue" class="radio peer" value="lavender_blue" v-model="input_color">
              <span class="color8 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-lavender-blue-600 text-lavender-blue-800 text-xs transition hover:ring-2 bg-lavender-blue-200 hover:bg-lavender-blue-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-lavender-blue-600 to-lavender-blue-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="mauve" class="radio peer" value="mauve" v-model="input_color">
              <span class="color9 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-mauve-600 text-mauve-800 text-xs transition hover:ring-2 bg-mauve-200 hover:bg-mauve-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-mauve-600 to-mauve-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="carnation_pink" class="radio peer" value="carnation_pink" v-model="input_color">
              <span class="color10 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-carnation-pink-600 text-[carnation-pink-800 text-xs transition hover:ring-2 bg-carnation-pink-200 hover:bg-carnation-pink-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-carnation-pink-600 to-carnation-pink-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="regent_st_blue" class="radio peer" value="regent_st_blue" v-model="input_color">
              <span class="color11 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-regent-st-blue-600 text-regent-st-blue-800 text-xs transition hover:ring-2 bg-regent-st-blue-200 hover:bg-regent-st-blue-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-regent-st-blue-600 to-regent-st-blue-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
            <label for="" class="option_item">
              <input type="radio" name="color" id="magic_mint" class="radio peer" value="magic_mint" v-model="input_color">
              <span class="color12 option_inner p-1 md:p-2 rounded-full peer-checked:ring-2 peer-checked:ring-magic-mint-600 text-magic-mint-800 text-xs transition hover:ring-2 bg-magic-mint-200 hover:bg-magic-mint-600"></span>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-magic-mint-600 to-magic-mint-600 rounded-lg blur opacity-75 hidden peer-checked:block"></div>
            </label>
          </div>
        </div>
        <div class="field input-group">
          <label for="schoolintroduce">*학교 소개</label>
          <textarea
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
              h-12
              text-sm
              md:text-lg
              mt-10
              font-bold
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
      <div class="form-step slidepage grid md:justify-center">
        <h1 class="text-center">쿼리큘럼</h1>
        <div class="field input-group02">
          <label for="recture">*제 1강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400 h-12"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 2강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 3강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 4강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 5강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 6강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 7강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group02 h-12">
          <label for="recture">*제 8강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="field btn-group space-x-3 mt-10 flex justify-between">
          <button
            @click="prevBtn(0)"
            type="button"
            class="
              btn btn-prev
              w-6/12
              h-12
              text-sm
              md:text-lg
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
              h-12
              text-sm
              md:text-lg
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
      <div class="form-step slidepage grid md:justify-center">
        <h1 class="text-center">대표 이미지 업로드</h1>
        <div class="field input-group">
          <label for="imgurl">이미지 URL 주소</label>
          <input
            type="text"
            name="imgurl"
            id="imgurl"
            class="border border-gray-400"
          />
        </div>
        <div class="field input-group">
          <label for="imgdescription">이미지 설명</label>
          <textarea
            type="text"
            name="imgdescription"
            id="imgscription"
            class="w-full p-2 outline-none border border-gray-400 rounded-md"
          />
        </div>
        <div class="field btn-group space-x-3 flex justify-between">
          <button
            @click="prevBtn(-25)"
            type="button"
            class="
              btn btn-prev
              w-6/12
              h-12
              text-sm
              md:text-lg
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
              h-12
              text-sm
              md:text-lg
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
  <!-- END OF SCHOOL REGISTER -->
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input_color = ref(null);

    const nextBtn = (pos) => {
      const slidePage = document.querySelector(".slidepage");
      slidePage.style.marginLeft = `${pos}%`;
    };
    const prevBtn = (pos) => {
      const slidePage = document.querySelector(".slidepage");
      slidePage.style.marginLeft = `${pos}%`;
    };

    const onSubmit = () => {
      if (input_color.value === null) {
        return
      }

      const school = {
        color: input_color,
      }
      alert(input_color.value);
      console.log(input_color.value);
    };
    return {
      input_color,
      nextBtn,
      prevBtn,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
}

.container {
  width: 100%;
  overflow: hidden;
}


.form {
  display: flex;
  width: 400%;
  margin: 0 auto;
  border-radius: 0.35rem;
  padding: 1.5rem;
}

.form .form-step {
  width: 25%;
  transition: margin-left 0.3s ease-in-out;
}

.form .form-step .field {
  height: 60px;
  width: 300px;
  /* margin: 65px 0; */
  /* position: relative; */
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
  z-index: 1;
  opacity: 0;
}

.option_item .radio:checked ~ .option_inner {
  /* border-color: red; */
}


.input-group {
  /* margin: 1rem 0; */
}
.input-group02 {
  margin: 0.5rem 0;
}

/* .form-step {
  display: none;
}

.form-step-active {
  display: block;
} */
</style>