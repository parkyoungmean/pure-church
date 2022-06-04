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
    <!-- Input Form -->
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
    <form action="#" class="form max-w-md border">
      <!-- One Step -->
      <div class="form-step form-step-active">
        <h1 class="text-center">기본 정보</h1>
        <div class="input-group">
          <label for="schoolname">*학교 이름</label>
          <input
            type="text"
            name="schoolname"
            id="schoolname"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group">
          <label for="schoolintroduce">*학교 소개</label>
          <textarea
            type="text"
            name="schoolintroduce"
            id="schoolintroduce"
            class="w-full p-2 outline-none border border-gray-400 rounded-md"
          />
        </div>
        <div class="flex justify-end">
          <button
            class="
              btn btn-next
              w-6/12
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
      <div class="form-step">
        <h1 class="text-center">쿼리큘럼</h1>
        <div class="input-group02">
          <label for="recture">*제 1강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 2강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 3강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 4강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 5강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 6강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 7강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group02">
          <label for="recture">*제 8강</label>
          <input
            type="text"
            name="recture"
            id="recture"
            class="border border-gray-400"
          />
        </div>
        <div class="btn-group space-x-3 flex justify-between">
          <button
            class="
              btn btn-prev
              w-6/12
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
            class="
              btn btn-next
              w-6/12
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
      <div class="form-step">
        <h1 class="text-center">대표 이미지 업로드</h1>
        <div class="input-group">
          <label for="imgurl">이미지 URL 주소</label>
          <input
            type="text"
            name="imgurl"
            id="imgurl"
            class="border border-gray-400"
          />
        </div>
        <div class="input-group">
          <label for="imgdescription">이미지 설명</label>
          <textarea
            type="text"
            name="imgdescription"
            id="imgscription"
            class="w-full p-2 outline-none border border-gray-400 rounded-md"
          />
        </div>
        <div class="btn-group space-x-3 flex justify-between">
          <button
            class="
              btn btn-prev
              w-6/12
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
            class="
              btn btn-next
              w-6/12
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
export default {};
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

.form {
  margin: 0 auto;
  border-radius: 0.35rem;
  padding: 1.5rem;
}

.input-group {
  margin: 2rem 0;
}
.input-group02 {
  margin: 1rem 0;
}

.form-step {
  display: none;
}

.form-step-active {
  display: block;
}
</style>