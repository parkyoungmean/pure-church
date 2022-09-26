<template>
  <section id="#" class="px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500">
    <!-- Carousel -->
    <SimpleCarousel :slides="slides" />
  </section>

  <section id="worship" class="min-h-screen bg-red-100">
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 xl:col-span-9 bg-[#70367c] rounded-r-[37px] flex gap-2 flex-col lg:flex-row md:divide-x-2">  
        <div class="flex-1 pt-10 md:pt-20 bg-white md:p-5">
          <div>
            <div>
              <h1 class="text-center text-5xl font-bold text-gray-500 pb-2 md:pb-10">
                예배 안내
              </h1>
            </div>
          </div>
          <!-- Main Content -->
          <div class="flex flex-col gap-10 p-7">
            <!-- Worships -->
            <div class="xl:py-5">
              <h3 class="text-3xl pb-2">
                오늘의 예배 영상
              </h3>
              <CurrentWorships />
            </div>
            <!-- End Of Worships -->
            <div class="md:grid md:grid-cols-12 md:grid-rows-2 gap-10 space-y-15 md:space-y-0">
              <!-- Placard -->
              <div class="row-span-2 col-span-12 md:col-span-6">
                <div class="space-y-7 w-full">
                  <h3 class="text-3xl">
                    전체 예배 보기
                  </h3>
                  <div class="flex flex-col space-y-4">
                    <Placard v-for="(card, index) in placards" :key="index" :card="card" />
                  </div>
                  <!-- 아침 예배 -->
                  <p class="text-xl xl:text-2.5xl font-bold xl:py-5"> ※ 아침 예배 : 월~금 AM 6:40 (ZOOM 으로 진행합니다.) </p>
                </div>
              </div>
              <!-- End Of Placard -->
              <!-- Bulletin  -->
              <div class="row-span-2 col-span-12 md:col-span-6">
                <!-- Bulletin Header -->
                <div class="flex justify-between items-center pb-3">
                    <h2 class="text-3xl font-bold">오늘의 주보</h2>
                    <button class="relative p-2 bg-white rounded-xl flex">
                        <p>전체 보기</p>
                        <span class="material-icons-outlined">
                          keyboard_double_arrow_right
                        </span>
                    </button>
                </div>
                <!-- End Of Bulletin Header -->
                <!-- Bulletin Image -->
                <div class="relative h-96 xl:h-[500px] 2xl:h-[600px] w-72 md:w-full rounded-2.5xl p-10 bg-center bg-cover bg-no-repeat" :style="`background-image: url('https://imgur.com/WYzIXZb.jpg')`">
                  <span class="absolute px-1.5 py-0.5 md:px-2 md:py-2 left-5 top-5 rounded-lg bg-gray-900/80 text-lg text-white font-bold">2022.09.25</span>
                </div>
                <!-- End Of Bulletin Image -->
              </div>
              <!-- End Of Bulletin -->
            </div>
          </div>
          <!-- End Of Main Content -->
        </div>
      </div>
      <!-- Service Time -->
      <div class="hidden xl:col-span-3 xl:block">
        <Calendar class="p-10" />
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

  <section id="etc" class="min-h-screen bg-red-100"></section>
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