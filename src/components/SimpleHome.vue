<template>
  <section id="#" class="px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500">
    <!-- Carousel -->
    <SimpleCarousel :slides="slides" />
  </section>

  <section id="worship" class="min-h-screen bg-red-100">
    <div class="grid grid-cols-12 gap-2 3xl:h-screen">
      <div class="col-span-12 xl:col-span-9 bg-[#70367c] rounded-r-[37px] flex gap-2 flex-col lg:flex-row xl:divide-x-2">  
        <div class="flex-1 pt-10 md:pt-20 bg-white md:p-5">
          <div>
            <div>
              <h1 class="text-center text-5xl font-bold text-gray-500 pb-2 md:pb-10">
                예배 안내
              </h1>
            </div>
          </div>
          <div class="m-auto sm:w-full md:max-w-4xl xl:max-w-4xl 2xl:max-w-[1000px] 3xl:max-w-[1000px] 4xl:max-w-[1200px] 5xl:max-w-[1300px] 6xl:max-w-[1400px] 7xl:max-w-[1500px] 8xl:max-w-[1600px]">
          <WorshipIntroduction />
        </div>
          <!-- Main Content -->
          <!-- 
          <div class="flex flex-col gap-10 p-7">
            
            <div class="xl:py-5">
              <h3 class="text-3xl pb-2">
                오늘의 예배 영상
              </h3>
              <CurrentWorships />
            </div>
            
            <div class="md:grid md:grid-cols-12 md:grid-rows-2 gap-10 space-y-15 md:space-y-0">
              
              <div class="row-span-2 col-span-12 md:col-span-6">
                <div class="space-y-7 w-full">
                  <h3 class="text-3xl">
                    전체 예배 보기
                  </h3>
                  <div class="flex flex-col space-y-4">
                    <Placard v-for="(card, index) in placards" :key="index" :card="card" />
                  </div>
                  
                  <p class="text-xl xl:text-2.5xl font-bold xl:py-5"> ※ 아침 예배 : 월~금 AM 6:40 (ZOOM 으로 진행합니다.) </p>
                </div>
              </div>
              
              <div class="row-span-2 col-span-12 md:col-span-6">
               
                <div class="flex justify-between items-center pb-3">
                    <h2 class="text-3xl font-bold">오늘의 주보</h2>
                    <button class="relative p-2 bg-white rounded-xl flex">
                        <p>전체 보기</p>
                        <span class="material-icons-outlined">
                          keyboard_double_arrow_right
                        </span>
                    </button>
                </div>
                
                <div class="relative h-96 xl:h-[500px] 2xl:h-[600px] w-72 md:w-full rounded-2.5xl p-10 bg-center bg-cover bg-no-repeat" :style="`background-image: url('https://imgur.com/WYzIXZb.jpg')`">
                  <span class="absolute px-1.5 py-0.5 md:px-2 md:py-2 left-5 top-5 rounded-lg bg-gray-900/80 text-lg text-white font-bold">2022.09.25</span>
                </div>
               
              </div>
              
            </div>
          </div> 
          -->
          <!-- End Of Main Content -->
        </div>
      </div>
      <!-- Service Time -->
      <div class="hidden xl:col-span-3 xl:block">
        <Calendar class="p-5 2xl:p-10" />
      </div>
      <!-- End Of Service Time -->
    </div>
  </section>
  
  <section id="introduce" class="min-h-screen bg-gray-100">
    <div class="pb-15 md:pb-25">
      <!-- <ProfileCard class="w-1/2" /> -->
      <img
        src="https://imgur.com/50h3qbC.jpg"
        alt=""
        class="bg-cover bg-center bg-no-repeat w-full min-h-screen"
      />
    </div>
    <ServiceTeam />
  </section>

  <!-- pure school section -->
  <section id="school" class="min-h-screen">
    <div class="pt-20">
      <SchoolList />
    </div>
  </section>
  
  <!-- notices & donation -->
  <section id="notices" class="min-h-screen">
    <div class="w-full min-h-screen font-sans bg-gradient-to-br from-purple-100 bg-indigo-400/80 text-gray-900">
      <main class="md:py-16 px-4 mx-auto max-w-5xl">
        <div>
          <div>
            <h1 class="text-center text-5xl font-bold text-gray-500 pt-20 pb-10">
              공지 및 후원
            </h1>
          </div>
        </div>
        <!-- Tabs -->
        <div x-data="{ tab: 'notice' }">
          <!-- Tab Menu -->
          <div class="md:gap-x-10 relative md:w-max mx-auto h-9 md:h-12 grid grid-cols-4 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20">
            <div class="absolute indicator h-8 md:h-11 my-auto top-0 bottom-0 -left-1 w-20 md:w-32 rounded-full bg-white shadow-md"></div>
            <a
              @click="moveTabIndicator(0)"
              href=""
              x-on:click.prevent="tab = 'notice'"
              class="text-xs md:text-lg font-medium relative block px-3 md:px-6 tab rounded-full"
            >
              <span class="text-gray-800 pl-2">공지사항</span>
            </a>
            <a
              @click="moveTabIndicator(1)"
              href=""
              x-on:click.prevent="tab = 'bbs'"
              class="text-xs md:text-lg font-medium relative block px-3 md:px-6 tab rounded-full"
            >
            <span class="text-gray-800 pl-2">자유 게시판</span>
            </a>
            <a
              @click="moveTabIndicator(2)"
              href=""
              x-on:click.prevent="tab = 'gallery'"
              class="text-xs md:text-lg font-medium relative block px-3 md:px-6 tab rounded-full"
            >
            <span class="text-gray-800 pl-2"> 활동사진</span>
            </a>
            <a
              @click="moveTabIndicator(3)"
              href=""
              x-on:click.prevent="tab = 'donation'"
              class="text-xs md:text-lg font-medium relative block px-3 md:px-6 tab rounded-full"
            >
            <span class="text-gray-800 pl-2.5"> 후원 안내</span>
            </a>
          </div>
          <!-- End of Tab Menu -->
          <div class="mt-4 md:mt-6 relative rounded-3xl md:bg-purple-50">
            <div x-show="tab === 'notice'" class="tab-panel px-1 md:p-6 transition duration-300">
              <h2 class="text-md md:text-xl font-semibold text-gray-800">❏ 공지사항</h2>
              <SimpleList class="block md:hidden" />
              <NoticeCardList class="hidden md:block" />
            </div>
            <div x-show="tab === 'bbs'" class="tab-panel px-1 md:p-6 transition duration-300">
              <h2 class="text-md md:text-xl font-semibold text-gray-800">❏ 자유게시판</h2>
              <!-- Blogs -->
              <SimplePosts :posts="posts" />
              <!-- End of Blogs -->
            </div>
            <div x-show="tab === 'gallery'" class="tab-panel px-1 md:p-6 transition duration-300">
              <h2 class="text-md md:text-xl font-semibold text-gray-800">❏ 활동사진</h2>
              <!-- Gallery -->
              <ImageCardList />
              <!-- <SimpleGallery /> -->
            </div>
            <div x-show="tab === 'donation'" class="tab-panel px-1 md:p-6 transition duration-300">
              <h2 class="text-md md:text-xl font-semibold text-gray-800">❏ 후원안내</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>

  <section id="directions" class="min-h-screen">
    <div class="w-full min-h-screen font-sans bg-gradient-to-br from-red-100 bg-red-400/80 text-gray-900">
      <main class="md:py-16 mx-auto">
        <div>
          <div>
            <h1 class="text-center text-5xl font-bold text-gray-500 pt-20 pb-10">
              찾아오시는 길
            </h1>
          </div>
        </div>
        <div
          x-data="{
              openTab: 1,
              activeClasses: 'border-l border-t border-r rounded-t bg-epic-blue text-white',
              inactiveClasses: 'text-blue-500 hover:text-blue-800'
            }"
          class="mx-auto p-2 md:p-6 xl:max-w-3xl 3xl:max-w-[1200px]"
        >
          <ul class="flex border-b">
            <li x-on:click.prevent="openTab = 1" x-bind:class="{ '-mb-px' : openTab === 1 }" class="mr-1">
              <a x-bind:class="openTab===1 ? activeClasses : inactiveClasses" class="bg-white inline-block py-2 px-4 font-semibold">도봉 순전한 교회</a>
            </li>
            <li x-on:click.prevent="openTab = 2" x-bind:class="{ '-mb-px' : openTab === 2 }" class="mr-1">
              <a x-bind:class="openTab===2 ? activeClasses : inactiveClasses" class="bg-white inline-block py-2 px-4 font-semibold">강남 순전한 교회</a>
            </li>
          </ul>
          <div class="w-full bg-white md:p-2">
            <div x-show="openTab === 1" class="flex bg-white p-2 xl:max-w-7xl 3xl:max-w-[1200px]">
              <!-- mobile -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1219.3528879896444!2d127.04852348942906!3d37.68372299385271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb969d04257ff%3A0x920ba337bbb75130!2z7Iic7KCE7ZWc6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1667637251548!5m2!1sko!2skr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="block md:hidden m-auto"></iframe>
              <!-- md -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.3817419820364!2d127.04900592930565!3d37.6838214600812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb969d04257ff%3A0x920ba337bbb75130!2z7Iic7KCE7ZWc6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1667522478237!5m2!1sko!2skr" width="700" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="hidden md:block m-auto xl:max-w-7xl 3xl:w-[1200px]"></iframe>
            </div>
            <div x-show="openTab === 2" class="flex bg-white p-2 xl:max-w-7xl 3xl:max-w-[1200px]">
              <!-- mobile -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.5771403422095!2d127.03882361492438!3d37.470704837369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca6cd473658ed%3A0x3d26a3df7f0c3c2d!2z7J207JWI!5e0!3m2!1sko!2skr!4v1667636990082!5m2!1sko!2skr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="block md:hidden m-auto"></iframe>
              <!-- md -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.288657709213!2d127.03966098954783!3d37.470700704619354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca6cd473658ed%3A0x3d26a3df7f0c3c2d!2z7J207JWI!5e0!3m2!1sko!2skr!4v1667632535554!5m2!1sko!2skr" width="700" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="hidden md:block m-auto xl:max-w-7xl 3xl:w-[1200px]"></iframe>
            </div>
          </div>
          <div x-show="openTab === 1" class="traffic-info">
            <div class="p-3 space-y-4 text-xs md:text-sm">
              <p class="text-[1rem] md:text-[1.5rem] font-bold">지하철역</p>
              <div class="flex gap-1 items-center"><p class="text-blue-500">도봉산역</p><span class="rounded-full bg-[#0052A4] text-white md:px-1.5 w-4 md:w-5 h-4 md:h-5 text-center">1</span><span class="rounded-full bg-[#747F00] text-white md:px-1.5 w-4 h-4 md:w-5 md:h-5 text-center">7</span> | 3번 출구 <p class="text-red-600">도보 12분</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">도봉역</p><span class="rounded-full bg-[#0052A4] text-white md:px-1.5 w-4 md:w-5 h-4 md:h-5 text-center">1</span> | 1번 출구 <p class="text-red-600">도보 12분</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">수락산역</p><span class="rounded-full bg-[#747F00] text-white md:px-1.5 w-4 md:w-5 h-4 md:h-5 text-center">7</span> | 5번 출구 <p class="text-red-600">도보 18분</p></div>
            </div>
            <div class="p-3 space-y-4 text-xs md:text-sm mt-1 md:mt-3">
              <p class="text-[1rem] md:text-[1.5rem] font-bold">버스정류장</p>
              <div class="flex gap-1 items-center"><p class="text-blue-500">한신아파트후문</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">유원극동아파트</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">도봉파크빌2단지앞</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">도봉파크빌2단지</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">극동유원아파트후문</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">도봉스카이돔,삼성서...</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">누원고등학교,한신아...</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">도봉 09</p></div>
            </div>
          </div>
          <div x-show="openTab === 2" class="traffic-info">
            <div class="p-3 space-y-4 text-xs md:text-sm">
              <p class="text-[1rem] md:text-[1.5rem] font-bold">지하철역</p>
              <div class="flex gap-1 items-center"><p class="text-blue-500">양재시민의숲역</p><span class="rounded-full bg-[#D4003B] text-white w-10 h-4 md:w-15 md:h-5 text-center">신분당</span> | 2번 출구 <p class="text-red-600">도보 4분</p></div>
            </div>
            <div class="p-3 space-y-4 text-xs md:text-sm mt-1 md:mt-3">
              <p class="text-[1rem] md:text-[1.5rem] font-bold">버스정류장</p>
              <div class="flex gap-1 items-center"><p class="text-blue-500">매헌초교</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">서초 18</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">소방서앞</p><span class="rounded-md bg-blue-600 text-white px-1 text-center">간선</span><p class="">400 | 405 | 421</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">서초 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">양재119안전센터앞</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">서초 09</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">양재2동주민센터.양재꽃시장</p><span class="rounded-md bg-blue-600 text-white px-1 text-center">간선</span><p class="">140 | 400 | 405 | 421 | 440 | 441 | 452 | 470 </p><span class="rounded-md bg-green-500 text-white px-1 text-center">지선</span><p class="">0411 | 4432</p><span class="rounded-md bg-cyan-500 text-white px-1 text-center">일반</span><p class="">11-3 | 6 | 917</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">시민의숲.양재꽃시장</p><span class="rounded-md bg-red-400 text-white px-1 text-center">광역</span><p class="">9404 | 9408 | 9409 | 9500 | 9501 | 9711 | 9802</p><span class="rounded-md bg-red-400 text-white px-1 text-center">직행</span><p class="">1550 | 1570 | 3002 |3002(예약) | 3007 | 3007(예약) | 3030 | 3800 | 9202 | 9400 | 9800</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">양재근린공원</p><span class="rounded-md bg-green-500 text-white px-1 text-center">마을</span><p class="">서초 18</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">시민의숲.양재꽃시장</p><span class="rounded-md bg-red-400 text-white px-1 text-center">광역</span><p class="">9100 | 9200 | 9201 | 9300 | 9404 | 9408 | 9409</p><span class="rounded-md bg-red-400 text-white px-1 text-center">직행</span><p class="">1005 | 1006 | 1101 | 1101N | 1151 | 1311</p><span class="rounded-md bg-purple-500 text-white px-1 text-center">시외</span><p class="">700 | 700-1</p></div>
              <div class="flex gap-1 items-center"><p class="text-blue-500">AT센터.양재꽃시장(22298)</p><span class="rounded-md bg-blue-600 text-white px-1 text-center">간선</span><p class="">140 | 400 | 405 | 421 | 440 | 441 | 452 | 470 </p><span class="rounded-md bg-green-500 text-white px-1 text-center">지선</span><p class="">0411 | 4432</p><span class="rounded-md bg-cyan-500 text-white px-1 text-center">일반</span><p class="">11-3 | 6 | 917</p></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { computed, onMounted, reactive, toRefs } from "vue";
import { usePublicityStore } from "../stores/publicities";
import ProfileCard from "@/components/ProfileCard.vue";
import ServiceTeam from "@/components/ServiceTeam.vue";
import SchoolList from "@/components/simplehome/SchoolList.vue";
import SimpleList from "@/components/simplehome/SimpleList.vue";
import SimplePosts from "@/components/SimplePosts.vue";
import SimpleGallery from "@/components/SimpleGallery.vue";
import SimpleCarousel from "@/components/SimpleCarousel.vue";
import NoticeCardList from "@/components/notice/NoticeCardList.vue";
import ImageCardList from "./gallery/ImageCardList.vue";
import Calendar from "./common/Calendar.vue";
import CurrentWorships from "./common/CurrentWorships.vue";
import Placard from "./common/Placard.vue";
import WorshipIntroduction from "./worship/WorshipIntroduction.vue";

export default {
  components: {
    ProfileCard,
    ServiceTeam,
    SchoolList,
    SimpleList,
    SimplePosts,
    SimpleGallery,
    SimpleCarousel,
    NoticeCardList,
    ImageCardList,
    Calendar,
    CurrentWorships,
    Placard,
    WorshipIntroduction,
  },
  setup() {
   
    /* Pinia */
    const store = usePublicityStore();

    const slides = computed(() => {
      return store.publicities;
    })

    onMounted(() => {
      store.fetchPublicities();
    })

    /* posts for bbs */
    let posts = [
      {
        id: 0,
        title: "예배 준비중",
        img: "https://i.imgur.com/dPErD5s.jpg",
        author: "",
        tag: "치유학교",
        content: "예배를 준비하고 있습니다.",
        link: "#home",
      },
      {
        id: 1,
        title: "두번째 글",
        img: "https://i.imgur.com/UyimOMY.jpg",
        author: "",
        tag: "복음학교",
        content: "예배에 집중하는 학생들입니다.",
        link: "#prayer",
      },
      {
        id: 2,
        title: "세번째 글",
        img: "https://i.imgur.com/XTEusLc.jpg",
        author: "",
        tag: "사역자학교",
        content: "예배에 집중하는 학생들입니다.",
        link: "#kar",
      },
      {
        id: 3,
        title: "네번째 글",
        img: "https://i.imgur.com/LRbjgMF.jpg",
        author: "",
        tag: "치유학교",
        content: "예배에 집중하는 학생들입니다.",
        link: "#kar",
      },
      {
        id: 4,
        title: "다섯번째 글",
        img: "https://i.imgur.com/xUc8v0t.jpg",
        author: "",
        tag: "능력의 기도학교",
        content: "예배에 집중하는 학생들입니다.",
        link: "#kar",
      },
      {
        id: 5,
        title: "여섯번째 글",
        img: "https://i.imgur.com/C52zbsi.jpg",
        author: "",
        tag: "사랑학교",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 6,
        title: "일곱번째 글",
        img: "https://i.imgur.com/HNjHFGe.jpg",
        author: "",
        tag: "복음학교",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 7,
        title: "여덟번째 글입니다.",
        img: "https://i.imgur.com/o9JMHBx.jpg",
        author: "",
        tag: "예배학교",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 8,
        title: "아홉번째 글입니다.",
        img: "https://i.imgur.com/UrQcNQz.jpg",
        author: "",
        tag: "사역자학교",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 9,
        title: "열번째 글입니다.",
        img: "https://i.imgur.com/QnEcvdk.jpg",
        author: "",
        tag: "기타",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 10,
        title: "열한번째 글입니다.",
        img: "https://i.imgur.com/Uwcg0vM.jpg",
        author: "",
        tag: "능력의 기도학교",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 11,
        title: "열둘번째 글입니다.",
        img: "https://i.imgur.com/Rm2p11B.jpg",
        author: "",
        tag: "카르학교",
        content: "예배에 집중하는 학생들",
        link: "#kar",
      },
    ];

    /* placards */
    const placards = [
      {
        name: "주일 1부 예배",
        location: "강남 성전",
        description: "전교인의 주일 대예배",
        color: "bg-rose-bud-600",
        time: "오전 9:30",
      },
      {
        name: "주일 2부 예배",
        location: "도봉 성전 본당",
        description: "전교인의 주일 대예배",
        color: "bg-rose-bud-600",
        time: "정오 12:00",
      },
      {
        name: "프렌드 어린이 예배",
        location: "도봉 성전 본당",
        description: "다음 세대를 준비하는 주일 어린이 예배",
        color: "bg-regent-st-blue-300",
        time: "오전 9:50",
      },
      {
        name: "청소년부 예배",
        location: "도봉 성전 본당",
        description: "다음 세대를 준비하는 주일 청소년 예배",
        color: "bg-regent-st-blue-300",
        time: "오전 10:00",
      },
      {
        name: "목요예배",
        location: "도봉 성전 본당",
        description: "임재 가운데 드리는 목요예배",
        color: "bg-fuchsia-600",
        time: "저녁 8:00",
      },
      {
        name: "특별행사",
        description: "수련회, 부흥회 etc",
        color: "bg-lavender-blue-300",
        time: "",
      }
    ]

    const moveTabIndicator = (pos) => {

      const tabs = document.querySelectorAll(".tab")
      const indicator = document.querySelector(".indicator")
      const panels = document.querySelectorAll(".tab-panel")

      indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
      indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'


      indicator.style.width = tabs[pos].getBoundingClientRect().width + 'px'
      indicator.style.left = tabs[pos].getBoundingClientRect().left - tabs[pos].parentElement.getBoundingClientRect().left + 'px'
    };
    
    return {
      slides,
      posts,
      placards,
      moveTabIndicator,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comforter&family=Noto+Sans+KR:wght@700&family=Roboto:wght@700&display=swap");
#home {
  font-family: "Roboto", "Noto Sans KR", sans-serif;
}
</style>