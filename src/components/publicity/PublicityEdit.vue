<template>
  <div class="flex bg-gray-100 fonts-sans text-gray-900">
    <!-- LEFT SIDEBAR -->
    <aside
      class="
        flex
        h-screen
        w-18
        flex-col
        items-center
        border-r border-gray-200
        bg-white
      "
    >
      <!-- Logo -->
      <div
        class="
          flex
          h-18
          w-full
          items-center
          justify-center
          border-b border-gray-200
        "
      >
        <router-link to="/userhome"
          ><img src="../../assets/logo/01.jpeg" alt="" class="w-12"
        /></router-link>
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
        <button
          @click="right = 'text'"
          class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
        >
          <i class="material-icons-outlined text-blue-700 text-3xl"
            >description</i
          >
        </button>
        <button
          @click="right = 'image'"
          class="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
        >
          <i class="material-icons-outlined text-blue-500 text-3xl">image</i>
        </button>
      </nav>
    </aside>
    <!-- END OF LEFT SIDEBAR -->
    <!-- NAV -->
    <div class="flex h-screen flex-1 flex-col">
      <header
        class="
          flex
          h-18
          items-center
          justify-center
          gap-x-6
          border-b border-gray-200
          bg-white
          px-8
        "
      >
        <!-- Left Button -->
        <button
          class="flex items-center justify-center rounded-xl bg-gray-100 p-2"
        >
          <i class="material-icons-outlined text-blue-500 text-3xl"
            >chevron_left</i
          >
        </button>
        <!-- Preview -->
        <button
          class="
            flex
            items-center
            justify-center
            gap-x-2
            rounded-xl
            bg-gray-100
            px-4
            py-2
          "
        >
          <i
            class="
              material-icons-outlined
              stroke-current
              text-gray-400 text-3xl
            "
            >visibility</i
          >
          <span class="text-sm font-semibold leading-6">미리보기</span>
        </button>
        <div class="h-full w-px bg-gray-200"></div>
        <!-- Device Screen -->
        <div class="flex items-center gap-x-3">
          <button
            type="button"
            @click="toggleScreen('desktop')"
            class="
              flex
              items-center
              justify-center
              gap-x-2
              rounded-xl
              bg-gray-100
              p-2
            "
          >
            <i
              class="
                material-icons-outlined
                stroke-current
                text-gray-400
                hover:bg-gray-100
                text-3xl
              "
              >desktop_windows</i
            >
            <span class="text-sm font-semibold leading-6">데스크탑 화면</span>
          </button>
          <button
            type="button"
            @click="toggleScreen('mobile')"
            class="
              flex
              items-center
              justify-center
              gap-x-2
              rounded-xl
              bg-gray-100
              p-2
            "
          >
            <i
              class="
                material-icons-outlined
                stroke-current
                text-gray-400
                hover:bg-gray-100
                text-3xl
              "
              >smartphone</i
            >
            <span class="text-sm font-semibold leading-6">모바일 화면</span>
          </button>
        </div>
        <div class="h-full w-px bg-gray-200"></div>
      </header>
      <!-- WORKSPACE -->
      <main
        v-show="screen === 'desktop'"
        class="flex-1 overflow-y-scroll px-12"
      >
        <div class="relative my-12 bg-white">
          <section
            class="absolute"
            :style="{ top: yPos + 'px', left: xPos + 'px' }"
          >
            <h1
              class="title max-w-3xl font-bold leading-[1.4]"
              :class="`${titleTextSize} ${titleTextColor}`"
            >
              {{ title }}
            </h1>
            <p
              class="subtitle mt-4 font-bold leading-loose"
              :class="`${subtitleTextSize} ${subtitleTextColor}`"
            >
              {{ subtitle }}
            </p>
            <p
              class="description mt-4 leading-7"
              :class="`${descriptionTextSize} ${descriptionTextColor}`"
            >
              {{ description }}
            </p>
            <!-- Button -->
            <div v-show="false" class="flex items-center gap-4 pt-8">
              <button
                class="
                  rounded-full
                  bg-blue-600
                  px-8
                  py-5
                  font-semibold
                  text-white
                "
              >
                기도 참여하기
              </button>
              <button
                class="
                  rounded-full
                  border border-gray-200
                  px-8
                  py-5
                  font-semibold
                  text-blue-600
                "
              >
                자세히 보기
              </button>
            </div>
          </section>
          <!-- Background Image -->
          <img
            v-if="tempImg != ''"
            :src="tempImg"
            alt=""
            class="
              bg-center bg-cover bg-no-repeat
              w-full
              lg:h-full
              min-h-screen
            "
          />
          <div v-else class="min-h-screen"></div>
        </div>
      </main>
      <!-- END OF WORKSPACE -->
      <!-- MOBILE WORKSPACE -->
      <main v-show="screen === 'mobile'" class="flex-1 overflow-y-scroll px-12">
        <!-- 412, 915 galaxy s20 ultra -->
        <div
          class="
            relative
            my-12
            bg-white
            m-auto
            w-[412px]
            h-[912px]
            max-h-[912px]
          "
        >
          <section class="absolute py-16 px-12">
            <h1
              class="title max-w-3xl font-bold leading-[1.4]"
              :class="`${mobile_titleTextSize} ${mobile_titleTextColor}`"
            >
              {{ title }}
            </h1>
            <p
              class="subtitle mt-4 font-bold leading-loose"
              :class="`${mobile_subtitleTextSize} ${mobile_subtitleTextColor}`"
            >
              {{ subtitle }}
            </p>
            <p
              class="description mt-4 leading-7"
              :class="`${mobile_descriptionTextSize} ${mobile_descriptionTextColor}`"
            >
              {{ description }}
            </p>
            <!-- Button -->
            <div v-show="false" class="flex items-center gap-4 pt-8">
              <button
                class="
                  rounded-full
                  bg-blue-600
                  px-8
                  py-5
                  font-semibold
                  text-white
                "
              >
                기도 참여하기
              </button>
              <button
                class="
                  rounded-full
                  border border-gray-200
                  px-8
                  py-5
                  font-semibold
                  text-blue-600
                "
              >
                자세히 보기
              </button>
            </div>
          </section>
          <!-- Background Image -->
          <img
            v-if="mobile_tempImg != ''"
            :src="mobile_tempImg"
            alt=""
            class="bg-center bg-cover bg-no-repeat w-full lg:h-full"
          />
          <div v-else class="min-h-screen"></div>
        </div>
      </main>
      <!-- END OF MOBILE WORKSPACE -->
    </div>
    <!-- END OF NAV -->
    <!-- RIGHT CONTROLLER -->
    <aside
      class="h-screen w-[300px] flex flex-col bg-white border-l border-gray-200"
    >
      <form ref="form" @submit.prevent="onSubmit">
        <div
          class="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6"
        >
          <button
            @click="$router.go(-1)"
            type="button"
            class="
              flex
              items-center
              justify-center
              gap-x-2
              rounded-xl
              bg-red-500
              px-4
              py-2
              text-sm
              leading-6
              text-white
            "
          >
            <i class="material-icons-outlined stroke-current text-white text-xl"
              >cancel</i
            >
            <span class="text-sm font-semibold leading-6">취소</span>
          </button>
          <button
            type="submit"
            class="
              flex
              items-center
              justify-center
              gap-x-2
              rounded-xl
              bg-blue-500
              px-4
              py-2
              text-sm
              leading-6
              text-white
            "
          >
            <i class="material-icons-outlined stroke-current text-white text-xl"
              >publish</i
            >
            <span class="text-sm font-semibold leading-6">확인</span>
          </button>
        </div>
        <div v-show="right === 'text'">
          <!-- Title Input Area -->
          <div>
            <details class="group">
              <summary
                class="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  border-b border-gray-200
                  px-6
                  py-4
                "
              >
                <span
                  class="
                    text-sm
                    font-semibold
                    capitalize
                    group-open:text-red-50
                  "
                  >제 목</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-7
                    w-7
                    text-gray-400
                    cursor-pointer
                    list-none
                    transition-transform
                    group-open:rotate-90
                  "
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
                <textarea
                  type="text"
                  :value="title"
                  @input="title = $event.target.value"
                  class="border border-gray-400 rounded-md h-12 w-full"
                />
              </div>
              <!-- Title Text Size & Color -->
              <div class="border-b border-gray-200 px-6 pb-4">
                <div
                  v-show="screen === 'desktop'"
                  class="flex items-center justify-between"
                >
                  <Dropdown
                    :items="selectFontSizes"
                    :selected="'글자 크기'"
                    @on-change="updateTitleSizeChange"
                  />
                  <Dropdown
                    :items="selectFontColors"
                    :selected="'글자색'"
                    @on-change="updateTitleColorChange"
                  />
                </div>
                <div
                  v-show="screen === 'mobile'"
                  class="flex items-center justify-between"
                >
                  <Dropdown
                    :items="selectFontSizes"
                    :selected="'글자 크기'"
                    @on-change="updateMobileTitleSizeChange"
                  />
                  <Dropdown
                    :items="selectFontColors"
                    :selected="'글자색'"
                    @on-change="updateMobileTitleColorChange"
                  />
                </div>
              </div>
            </details>
          </div>
          <!-- Subtitle Input Area -->
          <div>
            <details class="group">
              <summary
                class="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  border-b border-gray-200
                  px-6
                  py-4
                "
              >
                <span
                  class="
                    text-sm
                    font-semibold
                    capitalize
                    group-open:text-red-50
                  "
                  >소제목</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-7
                    w-7
                    text-gray-400
                    cursor-pointer
                    list-none
                    transition-transform
                    group-open:rotate-90
                  "
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
                <textarea
                  type="text"
                  :value="subtitle"
                  @input="subtitle = $event.target.value"
                  class="border border-gray-400 rounded-md h-32 w-full"
                />
              </div>
              <!-- Subtitle Text Size & Color -->
              <div class="border-b border-gray-200 px-6 pb-4">
                <div
                  v-show="screen === 'desktop'"
                  class="flex items-center justify-between"
                >
                  <Dropdown
                    :items="selectFontSizes"
                    :selected="'글자 크기'"
                    @on-change="updateSubtitleSizeChange"
                  />
                  <Dropdown
                    :items="selectFontColors"
                    :selected="'글자색'"
                    @on-change="updateSubtitleColorChange"
                  />
                </div>
                <div
                  v-show="screen === 'mobile'"
                  class="flex items-center justify-between"
                >
                  <Dropdown
                    :items="selectFontSizes"
                    :selected="'글자 크기'"
                    @on-change="updateMobileSubtitleSizeChange"
                  />
                  <Dropdown
                    :items="selectFontColors"
                    :selected="'글자색'"
                    @on-change="updateMobileSubtitleColorChange"
                  />
                </div>
              </div>
            </details>
          </div>
          <!-- Description Input Area -->
          <div>
            <details class="group">
              <summary
                class="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  border-b border-gray-200
                  px-6
                  py-4
                "
              >
                <span
                  class="
                    text-sm
                    font-semibold
                    capitalize
                    group-open:text-red-50
                  "
                  >내 용</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-7
                    w-7
                    text-gray-400
                    cursor-pointer
                    list-none
                    transition-transform
                    group-open:rotate-90
                  "
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
                <textarea
                  type="text"
                  :value="description"
                  @input="description = $event.target.value"
                  class="border border-gray-400 rounded-md h-32 w-full"
                />
              </div>
              <!-- Description Text Size & Color -->
              <div class="border-b border-gray-200 px-6 pb-4">
                <div
                  v-show="screen === 'desktop'"
                  class="flex items-center justify-between"
                >
                  <Dropdown
                    :items="selectFontSizes"
                    :selected="'글자 크기'"
                    @on-change="updateDescriptionSizeChange"
                  />
                  <Dropdown
                    :items="selectFontColors"
                    :selected="'글자색'"
                    @on-change="updateDescriptionColorChange"
                  />
                </div>
                <div
                  v-show="screen === 'mobile'"
                  class="flex items-center justify-between"
                >
                  <Dropdown
                    :items="selectFontSizes"
                    :selected="'글자 크기'"
                    @on-change="updateMobileDescriptionSizeChange"
                  />
                  <Dropdown
                    :items="selectFontColors"
                    :selected="'글자색'"
                    @on-change="updateMobileDescriptionColorChange"
                  />
                </div>
              </div>
            </details>
          </div>
          <!-- Align Area -->
          <div>
            <details class="group">
              <summary
                class="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  border-b border-gray-200
                  px-6
                  py-4
                "
              >
                <span
                  class="
                    text-sm
                    font-semibold
                    capitalize
                    group-open:text-red-50
                  "
                  >배 치</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-7
                    w-7
                    text-gray-400
                    cursor-pointer
                    list-none
                    transition-transform
                    group-open:rotate-90
                  "
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
              <!-- <div class="border-b border-gray-200 px-6 py-4">
                          <div class="flex items-center justify-between">
                              <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                  <i type="button" class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_vertical_bottom</i>
                              </button>
                              <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                  <i type="button" class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_horizontal_center</i>
                              </button>
                              <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                  <i type="button" class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_horizontal_left</i>
                              </button>
                              <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                  <i type="button" class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_horizontal_right</i>
                              </button>
                              <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                  <i type="button" class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_vertical_top</i>
                              </button>
                              <button class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                                  <i type="button" class="material-icons-outlined stroke-current text-gray-400 hover:bg-gray-100 text-xl">align_vertical_center</i>
                              </button>
                          </div>
                      </div> -->
              <div
                v-show="screen === 'desktop'"
                class="flex justify-between items-center text-gray-400 mt-2 p-4"
              >
                <span>위치: X: {{ xPos }} Y: {{ yPos }} </span>
                <button
                  type="button"
                  @click="
                    xPos = 0;
                    yPos = 0;
                  "
                  class="
                    p-1.5
                    text-xs
                    rounded-sm
                    cursor-pointer
                    bg-blue-400
                    text-white
                  "
                >
                  초기화
                </button>
              </div>
              <div class="move border-b border-gray-200 px-6 py-4">
                <li @click="moveY(-10)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="left: 50px"
                    class="
                      h-8
                      md:h-9
                      w-8
                      md:w-9
                      rounded-full
                      bg-gray-300
                      px-4
                      py-4
                      text-white
                    "
                    fill=""
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7l4-4m0 0l4 4m-4-4v18"
                    />
                  </svg>
                </li>
                <br />
                <li @click="moveX(-10)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      h-8
                      md:h-9
                      w-8
                      md:w-9
                      rounded-full
                      bg-gray-300
                      px-4
                      py-4
                      text-white
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                </li>
                <li @click="moveX(10)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      h-8
                      md:h-9
                      w-8
                      md:w-9
                      rounded-full
                      bg-gray-300
                      px-4
                      py-4
                      text-white
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </li>
                <br />
                <li @click="moveY(10)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="left: 50px"
                    class="
                      h-8
                      md:h-9
                      w-8
                      md:w-9
                      rounded-full
                      bg-gray-300
                      px-4
                      py-4
                      text-white
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </li>
              </div>
            </details>
          </div>
        </div>
        <!-- UPLOAD IMAGE -->
        <div v-show="right === 'image'" class="md:flex">
          <div class="w-full">
            <!-- Header -->
            <div class="p-4 flex justify-between items-end border-b-2">
              <span class="text-sm font-bold lg:text-xl">
                이미지 파일 업로드
              </span>
            </div>
            <!-- Body -->
            <div class="p-3">
              <div class="mb-2">
                <div
                  class="
                    relative
                    h-60
                    rounded-lg
                    border-dashed border-2 border-gray-200
                    bg-white
                    flex
                    justify-center
                    hover:cursor-pointer
                  "
                >
                  <div class="absolute">
                    <div class="flex flex-col items-center justify-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-20 w-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#D1D5DB"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span
                        class="
                          block
                          text-xs
                          md:text-lg
                          text-gray-400
                          font-normal
                        "
                        >이미지 파일을 드래그해주세요.</span
                      >
                      <span
                        class="
                          block
                          text-xs
                          md:text-lg
                          text-gary-400
                          font-normal
                        "
                        >혹은</span
                      >
                      <span
                        class="
                          block
                          text-xs
                          md:text-lg
                          text-gary-400
                          font-normal
                        "
                        >여기를 클릭해서 파일을 선택하세요.</span
                      >
                      <span
                        class="
                          block
                          text-md
                          md:text-xl
                          text-blue-400
                          font-normal
                        "
                        >파일 찾아보기</span
                      >
                    </div>
                  </div>
                  <input
                    v-show="screen === 'desktop'"
                    @change="changeImageFile"
                    name="file"
                    type="file"
                    class="w-full h-full opacity-0"
                  />
                  <input
                    v-show="screen === 'mobile'"
                    @change="changeMobileImageFile"
                    name="file"
                    type="file"
                    class="w-full h-full opacity-0"
                  />
                </div>
                <div
                  v-show="screen === 'desktop'"
                  class="flex justify-between items-center text-gray-400 mt-2"
                >
                  <span
                    >파일 이름:
                    {{
                      tempImgName.length > 14
                        ? tempImgName.substring(0, 15) + "..."
                        : tempImgName
                    }}
                  </span>
                  <button
                    type="button"
                    @click="
                      tempImg = '';
                      tempImgName = '';
                      bgImg = '';
                      changeImage = false;
                    "
                    class="p-1.5 text-xs rounded-sm cursor-pointer"
                    :class="[
                      tempImg.length !== 0
                        ? 'bg-blue-300 text-white'
                        : 'bg-gray-200',
                    ]"
                  >
                    초기화
                  </button>
                </div>
                <div
                  v-show="screen === 'mobile'"
                  class="flex justify-between items-center text-gray-400 mt-2"
                >
                  <span
                    >파일 이름:
                    {{
                      mobile_tempImgName.length > 14
                        ? mobile_tempImgName.substring(0, 15) + "..."
                        : mobile_tempImgName
                    }}
                  </span>
                  <button
                    type="button"
                    @click="
                      mobile_tempImg = '';
                      mobile_tempImgName = '';
                      mobile_bgImg = '';
                      changeMobileImage = false;
                    "
                    class="bg-gray-200 p-1.5 text-xs rounded-sm cursor-pointer"
                    :class="
                      mobile_tempImg.length !== 0
                        ? 'bg-blue-300 text-white'
                        : 'bg-gray-200'
                    "
                  >
                    초기화
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF UPLOAD IMAGE -->
      </form>
    </aside>
    <!-- END OF RIGHT CONTROLLER -->
  </div>
</template>
  
<script>
import { ref, computed } from "vue-demi";
import { usePublicityStore } from "../../stores/publicities";
import { useImageStore } from "../../stores/images";
import { useRouter } from "vue-router";
import Dropdown from "../../components/common/Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  setup() {
    const store = usePublicityStore();
    const imgStore = useImageStore();
    const router = useRouter();

    const currentPublicity = computed(() => {
      return store.currentPublicity;
    });

    const right = ref("text");

    /* 이미지 변경 여부 flag 변수 */
    const changeImage = ref(false);
    const changeMobileImage = ref(false);

    /* Right - Text */
    const tempImg = ref(currentPublicity.value.img.link); // 임시 이미지
    const tempImgName = ref(""); // 임시 이미지 이름
    const bgImg = ref(currentPublicity.value.img.link); // 배경 이미지
    const title = ref(currentPublicity.value.title); // 제목
    const subtitle = ref(currentPublicity.value.subtitle); // 소제목
    const description = ref(currentPublicity.value.description); // 세부 내용
    const titleTextSize = ref(currentPublicity.value.size.titleTextSize); // 제목 글자 크기
    const titleTextColor = ref(currentPublicity.value.color.titleTextColor); // 제목 글자 색상
    const subtitleTextSize = ref(currentPublicity.value.size.subtitleTextSize); // 소제목 글자 크기
    const subtitleTextColor = ref(
      currentPublicity.value.color.subtitleTextColor
    ); // 소제목 글자 색상
    const descriptionTextSize = ref(
      currentPublicity.value.size.descriptionTextSize
    ); // 세부내용 글자 크기
    const descriptionTextColor = ref(
      currentPublicity.value.color.descriptionTextColor
    ); // 세부내용 글자 색상
    /* Mobile */
    const mobile_tempImg = ref(currentPublicity.value.mobileImg.link); // 모바일_임시 이미지
    const mobile_tempImgName = ref(""); // 모바일_임시 이미지 이름
    const mobile_bgImg = ref(currentPublicity.value.mobileImg.link); // 모바일_배경 이미지
    const mobile_titleTextSize = ref(
      currentPublicity.value.size.mobile_titleTextSize
    ); // 모바일_제목 글자 크기
    const mobile_titleTextColor = ref(
      currentPublicity.value.color.mobile_titleTextColor
    ); // 모바일_제목 글자 색상
    const mobile_subtitleTextSize = ref(
      currentPublicity.value.size.mobile_subtitleTextSize
    ); // 모바일_소제목 글자 크기
    const mobile_subtitleTextColor = ref(
      currentPublicity.value.color.mobile_subtitleTextColor
    ); // 모바일_소제목 글자 색상
    const mobile_descriptionTextSize = ref(
      currentPublicity.value.size.mobile_descriptionTextSize
    ); // 모바일_세부내용 글자 크기
    const mobile_descriptionTextColor = ref(
      currentPublicity.value.color.mobile_descriptionTextColor
    ); // 모바일_세부내용 글자 색상

    const xPos = ref(currentPublicity.value.position.x);
    const yPos = ref(currentPublicity.value.position.y);

    /* Screen Size */
    const screen = ref("desktop");

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
    ];

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
    ];

    const updateTitleSizeChange = (param) => {
      titleTextSize.value = param;
    };

    const updateTitleColorChange = (param) => {
      titleTextColor.value = param;
    };

    const updateSubtitleSizeChange = (param) => {
      subtitleTextSize.value = param;
    };

    const updateSubtitleColorChange = (param) => {
      subtitleTextColor.value = param;
    };

    const updateDescriptionSizeChange = (param) => {
      descriptionTextSize.value = param;
    };

    const updateDescriptionColorChange = (param) => {
      descriptionTextColor.value = param;
    };

    /* Mobile */
    const updateMobileTitleSizeChange = (param) => {
      mobile_titleTextSize.value = param;
    };

    const updateMobileTitleColorChange = (param) => {
      mobile_titleTextColor.value = param;
    };

    const updateMobileSubtitleSizeChange = (param) => {
      mobile_subtitleTextSize.value = param;
    };

    const updateMobileSubtitleColorChange = (param) => {
      mobile_subtitleTextColor.value = param;
    };

    const updateMobileDescriptionSizeChange = (param) => {
      mobile_descriptionTextSize.value = param;
    };

    const updateMobileDescriptionColorChange = (param) => {
      mobile_descriptionTextColor.value = param;
    };

    /* Right - Image */
    const changeImageFile = (e) => {
      tempImg.value = URL.createObjectURL(e.target.files[0]);
      tempImgName.value = e.target.files[0].name;
      bgImg.value = e.target.files[0];
      changeImage.value = true;
    };

    /* Right - Mobile Image */
    const changeMobileImageFile = (e) => {
      mobile_tempImg.value = URL.createObjectURL(e.target.files[0]);
      mobile_tempImgName.value = e.target.files[0].name;
      mobile_bgImg.value = e.target.files[0];
      changeMobileImage.value = true;
    };

    const toggleScreen = (flag) => {
      screen.value = flag;
    };

    const currentImage = computed(() => {
      return imgStore.getCurrentImage;
    });

    /* 슬라이드 광고 전송하기(create) */
    const onSubmit = async () => {
      if (bgImg.value === "") {
        alert("배경 이미지가 필수적으로 필요합니다.");
      }

      /* upload Image */
      let img = [];
      let mobileImg = [];

      /* 배경 이미지를 변경했으면 이미지를 업로드합니다. */
<<<<<<< HEAD
<<<<<<< HEAD
      if (changeImage.value !== true) {
=======
      if (changeImage.value === true) {
>>>>>>> 12th
=======
      if (changeImage.value === true) {
>>>>>>> 12th
        await imgStore.uploadImage(bgImg.value).then(() => {
          img = imgStore.currentImage;
        });
      } else {
        img = currentPublicity.value.img;
      }

      /* 모바일 배경 이미지가 존재하는지 검사 */
<<<<<<< HEAD
<<<<<<< HEAD
      if (changeMobileImage.value !== true) {
=======
      if (changeMobileImage.value === true) {
>>>>>>> 12th
=======
      if (changeMobileImage.value === true) {
>>>>>>> 12th
        await imgStore.uploadMobileImage(mobile_bgImg.value).then(() => {
          mobileImg = imgStore.currentMobileImage;
        });
      } else {
        mobileImg = currentPublicity.value.mobileImg;
      }

      const publicity = {
        img: JSON.stringify(img),
        mobileImg: JSON.stringify(mobileImg),
        title: title.value || "",
        subtitle: subtitle.value || "",
        description: description.value || "",
        /* 위치 */
        position: {
          x: xPos.value,
          y: yPos.value,
        },
        /* 글자 크기 */
        size: {
          titleTextSize: titleTextSize.value,
          subtitleTextSize: subtitleTextSize.value,
          descriptionTextSize: descriptionTextSize.value,
          mobile_titleTextSize: mobile_titleTextSize.value,
          mobile_subtitleTextSize: mobile_subtitleTextSize.value,
          mobile_descriptionTextSize: mobile_descriptionTextSize.value,
        },
        /* 글자 색상 */
        color: {
          titleTextColor: titleTextColor.value,
          subtitleTextColor: subtitleTextColor.value,
          descriptionTextColor: descriptionTextColor.value,
          mobile_titleTextColor: mobile_titleTextColor.value,
          mobile_subtitleTextColor: mobile_subtitleTextColor.value,
          mobile_descriptionTextColor: mobile_descriptionTextColor.value,
        },
        id: currentPublicity.value.id,
        condition: currentPublicity.value.condition,
        author: currentPublicity.value.author,
        belong: currentPublicity.value.belong,
        createdAt: currentPublicity.value.createdAt,
      };

      console.log(publicity);

      store.updatePublicity(publicity).then(() => {
        router.go(-1);
      });
    };

    const moveX = (x) => {
      xPos.value = xPos.value + x;
    };

    const moveY = (y) => {
      yPos.value = yPos.value + y;
    };

    return {
      /* TEXT */
      title,
      subtitle,
      description,
      selectFontSizes,
      selectFontColors,
      titleTextSize,
      titleTextColor,
      updateTitleSizeChange,
      updateTitleColorChange,
      subtitleTextSize,
      subtitleTextColor,
      updateSubtitleSizeChange,
      updateSubtitleColorChange,
      descriptionTextSize,
      descriptionTextColor,
      updateDescriptionSizeChange,
      updateDescriptionColorChange,
      /* Mobile */
      mobile_titleTextSize,
      mobile_titleTextColor,
      updateMobileTitleSizeChange,
      updateMobileTitleColorChange,
      mobile_subtitleTextSize,
      mobile_subtitleTextColor,
      updateMobileSubtitleSizeChange,
      updateMobileSubtitleColorChange,
      mobile_descriptionTextSize,
      mobile_descriptionTextColor,
      updateMobileDescriptionSizeChange,
      updateMobileDescriptionColorChange,
      onSubmit,
      right,
      /* IMAGE */
      tempImg,
      tempImgName,
      bgImg,
      changeImageFile,
      mobile_tempImg,
      mobile_tempImgName,
      mobile_bgImg,
      changeMobileImageFile,
      currentImage,
      changeImage,
      changeMobileImage,
      /* Screen Size */
      toggleScreen,
      screen,
      /* move */
      xPos,
      yPos,
      moveX,
      moveY,
    };
  },
};
</script>
  
<style lang="scss" scoped>
.title,
.subtitle,
.description {
  white-space: pre-line;
}

.move {
  padding-left: 20px;
  margin-bottom: 0px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.239);
  height: 64px;
}
li {
  list-style: none;
  height: auto;
  display: inline-block;
  margin-left: 40px;
  margin-top: 6px;
}
.move li svg {
  position: relative;
  display: inline;
  padding: 4px;
  transition-duration: 0.4s;
  margin-left: 26px;
}
.move li svg:active {
  border: 1px solid rgba(255, 255, 255, 0.4);
}
</style>