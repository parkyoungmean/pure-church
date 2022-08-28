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
    <div class="w-full min-h-screen font-sans text-gray-900">
      <main class="md:py-16 px-4 mx-auto max-w-5xl">
        <div>
          <div>
            <h1 class="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
              공지 및 후원
            </h1>
          </div>
          <p clas="pt-3 text-lg text-gray-700">
            공지, 후원, 게시글, 활동 사진을 모아 보여줍니다.
          </p>
        </div>
        <!-- Tabs -->
        <div x-data="{ tab: 'notice' }" class="">
          <!-- Tab Menu -->
          <div class="flex gap-x-8 items-center pt-12">
            <a
              href=""
              x-on:click.prevent="tab = 'notice'"
              class="text-sm md:text-lg font-medium"
            >
              공지사항
            </a>
            <a
              href=""
              x-on:click.prevent="tab = 'bbs'"
              class="text-sm md:text-lg font-indigo-500"
            >
              자유 게시판
            </a>
            <a
              href=""
              x-on:click.prevent="tab = 'gallery'"
              class="text-sm md:text-lg font-indigo-500"
            >
              활동 사진
            </a>
            <a
              href=""
              x-on:click.prevent="tab = 'donation'"
              class="text-sm md:text-lg font-indigo-500"
            >
              후원 안내
            </a>
          </div>
          <!-- End of Tab Menu -->
          <div class="">
            <div x-show="tab === 'notice'" class="">
              <p>여기는 공지사항입니다.</p>
              <!-- SimpleList -->
              <!-- <SimpleList :primaryNotices="primaryNotices" :notices="notices" /> -->
              <NoticeCardList />
            </div>
            <div x-show="tab === 'bbs'" class="">
              <p class="text-cw-grey-900">여기는 자유게시판입니다.</p>
              <!-- Blogs -->
              <SimplePosts :posts="posts" />
              <!-- End of Blogs -->
            </div>
            <div x-show="tab === 'gallery'" class="">
              <p>여기는 활동사진입니다.</p>
              <!-- Gallery -->
              <SimpleGallery />
            </div>
            <div x-show="tab === 'donation'" class="">
              <p>여기는 후원 안내입니다.</p>
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
import SimpleList from "@/components/SimpleList.vue";
import SimplePosts from "@/components/SimplePosts.vue";
import SimpleGallery from "@/components/SimpleGallery.vue";
import SimpleCarousel from "@/components/SimpleCarousel.vue";

import NoticeCardList from "@/components/notice/NoticeCardList.vue";

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
  },
  setup() {
   
    /* Pinia */
    const store = usePublicityStore();

    const slides = computed(() => {
      console.log('슬라이드:', store.publicities);
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

    return {
      slides,
      posts,
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