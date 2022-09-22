<template>
  <section id="#" class="px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500">
    <!-- Carousel -->
    <SimpleCarousel :slides="slides" />
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
    <SchoolList />
  </section>
  
  <!-- notices & donation -->
  <section id="notices" class="min-h-screen">
    <div class="w-full min-h-screen font-sans bg-gradient-to-br from-purple-100 bg-indigo-400/80 text-gray-900">
      <main class="md:py-16 px-4 mx-auto max-w-5xl">
        <div>
          <div>
            <h1 class="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
              공지 및 후원
            </h1>
          </div>
        </div>
        <!-- Tabs -->
        <div x-data="{ tab: 'notice' }" class="">
          <!-- Tab Menu -->
          <div class="md:gap-x-10 relative md:w-max mx-auto h-9 md:h-12 grid grid-cols-4 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20">
            <div class="absolute indicator h-8 md:h-11 my-auto top-0 bottom-0 -left-1 w-20 md:w-32 rounded-full bg-white shadow-md"></div>
            <a
              @click="moveTabIndicator(0)"
              href=""
              x-on:click.prevent="tab = 'notice'"
              class="text-xs md:text-lg font-medium relative block px-3 md:px-6 tab rounded-full"
            >
              <span class="text-gray-800">공지사항</span>
            </a>
            <a
              @click="moveTabIndicator(1)"
              href=""
              x-on:click.prevent="tab = 'bbs'"
              class="text-xs md:text-lg font-medium relative block px-3 md:px-6 tab rounded-full"
            >
            <span class="text-gray-800">자유 게시판</span>
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