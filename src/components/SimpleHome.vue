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
  {
    title: "복음학교",
    subtitle: "복음으로 하나됨",
    img: "https://i.imgur.com/UyimOMY.jpg",
    color: "amber",
  },
  {
    title: "치유(The Day)학교",
    subtitle: "하나님 나라의 회복과 능력",
    img: "https://i.imgur.com/xUc8v0t.jpg",
    color: "orange",
  },
  {
    title: "친밀감(Kar)학교",
    subtitle: "두드리다, 머물다, 회복하다",
    img: "https://i.imgur.com/C52zbsi.jpg",
    color: "rose",
  },
  {
    title: "능력의 기도(BAP)학교",
    subtitle: "참된 영적 전쟁과 승리",
    img: "https://i.imgur.com/dPErD5s.jpg",
    color: "fuchsia",
  },

  {
    title: "사랑학교",
    subtitle: "사랑은 오래참고 온유하며",
    img: "https://i.imgur.com/XTEusLc.jpg",
    color: "pink",
  },
  {
    title: "사역자학교",
    subtitle: "충성되이 여겨 내게 직분을 맡기심이니",
    img: "https://i.imgur.com/LRbjgMF.jpg",
    color: "blue",
  },
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
        title: "",
        subtitle: "",
        description: "",
        src: "https://imgur.com/2LodOZ7",
        mobile_src: "https://imgur.com/2LodOZ7",
        color: {
          titleColor: "text-rose-300",
          subtitleColor: "text-white",
        },
      },
      {
        id: 1,
        title: "♡ 순전한 교회 미국 단기 선교 ♡",
        subtitle: "선교기간: 2022년 6월 6일(월) ~ 6월 17일(금) <br> 선교지: 미국 샌프란시스코 리버모어 지역",
        description: "선교팀: 장원혁 담임목사님, 박운진, 김철수, 조선영, 임상화",
        src: "https://imgur.com/vjvKkr9",
        mobile_src: "https://imgur.com/lon1xMe",
        color: {
          titleColor: "text-rose-300",
          subtitleColor: "text-white",
        },
      },
      {
        id: 2,
        title: "♡ 순전한 교회 미국 단기 선교 기도편지 ♡",
        subtitle: "1. 장거리 비행과 긴 시간 운전하고 이동하는 모든 미국 여정에서 몸이 상하거나 지치지 않으며 안전하도록 <br><br> 2. 팀원 모두가 성령충만으로 하나되며 거룩한 긴장감으로 하나님이 맡기신 일을 민첩하게 잘 감당하도록 <br><br> 3. 미국에서 선교팀을 가이드하고 사랑학교를 진행할 장소선정 및 학생을 모집하여 섬기는 호유정 자매님의 수고를 하나님께서 위로하고 격려하실 뿐 아니라 선교기간 동안 가정과 사업을 지켜주시도록",
        description: "",
        src: "https://imgur.com/1ZvX7wT",
        mobile_src: "https://imgur.com/8O03G8y",
        color: {
          titleColor: "text-rose-300",
          subtitleColor: "text-white",
        },
      },
      {
        id: 3,
        title: "♡ 순전한 교회 미국 단기 선교 기도편지 ♡",
        subtitle: "4. 사랑학교의 모든 준비와 진행이 순조롭게 하시며 예배와 강의, 기도사역과 조모임을 통해 학생들에게 하나님 아버지의 사랑이 흘러갈 수 있도록 <br><br> 5. 선교기간 동안 팀원들이 교회에서 맡고 있던 영역의 빈자리가 도움의 손길과 주의 은혜로 채워지고 각 가정이 하나님의 품 안에 안전하게 보호되도록 <br><br> 6.장원혁 담임목사님이 영육간의 강건함으로 모든 일정을 넉넉히 감당하며 매 순간 성령님께 민감하여 하나님이 원하시는 첫 미국선교의 그림이 무엇인지 선명하게 볼 수 있도록",
        description: "",
        src: "https://imgur.com/N1UaFAZ",
        mobile_src: "https://imgur.com/9X05rvC",
        color: {
          titleColor: "text-rose-300",
          subtitleColor: "text-gray-200",
        },
      },
      {
        id: 4,
        title: "",
        subtitle: "",
        description: "",
        src: "https://imgur.com/XRcLyuT",
        mobile_src: "https://imgur.com/XRcLyuT",
        color: {
          titleColor: "text-rose-300",
          subtitleColor: "text-white",
        },
      },
      /* {
        id: 4,
        title: "온라인 치유학교 5기를 모집합니다.",
        subtitle: "일시: 2022년 3월 28일 ~ 2022년 5월 9일",
        description: "신청마감: 3월 21일 월요일 오후 10시",
        src: "bg-1",
      }, */
      /* {
        id: 5,
        title: "온라인 카르학교 3기를 모집합니다.",
        subtitle: "일시: 2022년 3월 28일 ~ 2022년 5월 9일",
        description: "신청마감: 3월 21일 월요일 오후 10시",
        src: "bg-2",
      }, */
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