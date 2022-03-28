<template>
  <section id="#" class="pt-19 pb-12 px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500">
    <!-- Carousel -->
    <SimpleCarousel :slides="slides" />
  </section>

  <section id="introduce" class="min-h-screen bg-gray-100">
    <ProfileCard />
    <ServiceTeam />
  </section>
  <!-- pure school section -->
  <section id="school" class="grid place-items-center min-h-screen">
    <!-- Responsive Grid Layout -->
    <div
      class="
        p-4
        py-20
        max-w-5xl
        grid
        gap-4
        xs:grid-cols-2 xs:p-8
        md:grid-cols-4
      "
    >
      <h1
        class="
          text-4xl
          font-extrabold
          xs:pt-16 xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2
          md:col-span-3 md:text-5xl md:grid-cols-3
        "
      >
        <span class="md-span-2">순전한 학교</span>
      </h1>
      <p
        class="
          xs:row-start-2 xs:col-start-2 xs:self-center
          md:col-start-1 md:col-span-2 md:pr-12 md:text-lg
        "
      >
        순전한 학교는 능력있는 중보기도, 치유학교, 복음학교, 사역자 학교, 친밀한
        학교의 커리큘럼으로 구성됩니다.
      </p>
      <PrimaryCard
        v-for="(card, index) in schools"
        :key="index"
        :content="card"
        :index="index"
      />
      <p class="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur
        temporibus nihil perspiciatis iure ducimus repellendus maiores. Beatae
        quia corrupti consequatur modi est, nam, voluptatum natus voluptatibus
        inventore minima sed.
      </p>
    </div>
  </section>
  <!-- notices & donation -->
  <section id="notices" class="min-h-screen bg-green-100">
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
          <!-- Avatar -->
          <!-- <div
            class="inline-flex gap-x-2 items-center pt-2 text-sm text-gray-500"
          >
            <span>Created by pure church</span>
            <img
              src="https://i.imgur.com/8axyuNs.jpg"
              alt=""
              class="object-cover w-7 h-7 rounded-full"
            />
            <a href="#" class="hover:text-indigo-600"> 관리자 </a>
          </div> -->
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
              <p>여기는 공지사항 탭입니다.</p>
              <!-- SimpleList -->
              <SimpleList :primaryNotices="primaryNotices" :notices="notices" />
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

import { reactive, toRefs } from "vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ServiceTeam from "@/components/ServiceTeam.vue";
import SimpleList from "@/components/SimpleList.vue";
import SimplePosts from "@/components/SimplePosts.vue";
import SimpleGallery from "@/components/SimpleGallery.vue";
import PrimaryCard from "@/components/PrimaryCard.vue";
import SimpleCarousel from "@/components/SimpleCarousel.vue";

const schools = [
  { title: "능력의 기도(BAP)학교", img: "https://i.imgur.com/dPErD5s.jpg" },
  { title: "복음학교", img: "https://i.imgur.com/UyimOMY.jpg" },
  { title: "사랑학교", img: "https://i.imgur.com/XTEusLc.jpg" },
  { title: "사역자학교", img: "https://i.imgur.com/LRbjgMF.jpg" },
  { title: "치유(The Day)학교", img: "https://i.imgur.com/xUc8v0t.jpg" },
  { title: "친밀감(Kar)학교", img: "https://i.imgur.com/C52zbsi.jpg" },
];

export default {
  components: {
    ProfileCard,
    ServiceTeam,
    SimpleList,
    SimplePosts,
    SimpleGallery,
    PrimaryCard,
    SimpleCarousel,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    /* slides for Home */
    let slides = [
      {
        id: 0,
        title: "온라인 치유학교 5기를 모집합니다.",
        subtitle: "일시: 2022년 3월 28일 ~ 2022년 5월 9일",
        description: "신청마감: 3월 21일 월요일 오후 10시",
        src: "bg-1",
      },
      {
        id: 1,
        title: "온라인 카르학교 3기를 모집합니다.",
        subtitle: "일시: 2022년 3월 28일 ~ 2022년 5월 9일",
        description: "신청마감: 3월 21일 월요일 오후 10시",
        src: "bg-2",
      },
      {
        id: 2,
        title: "",
        subtitle: "",
        description: "",
        src: "bg-3",
      },
    ];
    /* notices for Notices Section */
    let primaryNotices = [
      {
        id: 4,
        caption: "안내드립니다.",
        title: "2022년 순전한 사역을 안내드립니다.",
        img: "",
        author: "",
        tag: "전체",
        type: "standard",
        isPrimary: true,
        content: "내용 준비중입니다.",
      },
      {
        id: 5,
        caption: "안내드립니다.",
        title: "순전한 교회에 오시는 길을 안내드립니다.",
        img: "",
        author: "",
        tag: "전체",
        type: "standard",
        isPrimary: true,
        content: "내용 준비중입니다.",
      },
    ];
    /* notices for Notices Section */
    let notices = [
      {
        id: 0,
        caption: "안내드립니다.",
        title: "온라인 치유학교 5기를 모집합니다.",
        img: "",
        author: "",
        tag: "치유학교",
        type: "standard",
        isPrimary: false,
        content: "내용 준비중입니다.",
      },
      {
        id: 1,
        caption: "안내드립니다.",
        title: "온라인 카르학교 3기를 모집합니다.",
        img: "",
        author: "",
        tag: "카르학교",
        type: "standard",
        isPrimary: false,
        content: "내용 준비중입니다.",
      },
      {
        id: 2,
        caption: "긴급 공지드립니다.",
        title: "우크라이나 성도들을 위한 기도가 절실히 필요합니다.",
        img: "",
        author: "",
        tag: "기도학교",
        type: "emergency",
        isPrimary: false,
        content: "내용 준비중입니다.",
      },
      {
        id: 3,
        caption: "스텝 교육 일정 안내",
        title: "ZOOM 소그룹 방법에 관한 교육 일정을 안내드립니다.",
        img: "https://i.imgur.com/LRbjgMF.jpg",
        author: "",
        tag: "전체",
        type: "important",
        isPrimary: false,
        content: "예배에 집중하는 학생들입니다.",
        link: "#kar",
      },
      {
        id: 4,
        caption: "안내드립니다.",
        title: "2022년 순전한 사역을 안내드립니다.",
        img: "",
        author: "",
        tag: "전체",
        type: "standard",
        isPrimary: true,
        content: "내용 준비중입니다.",
      },
      {
        id: 5,
        caption: "안내드립니다.",
        title: "순전한 교회에 오시는 길을 안내드립니다.",
        img: "",
        author: "",
        tag: "전체",
        type: "standard",
        isPrimary: false,
        content: "내용 준비중입니다.",
      },
    ];

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
      ...toRefs(state),
      schools,
      slides,
      primaryNotices,
      notices,
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