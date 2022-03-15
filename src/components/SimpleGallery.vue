<template>
  <!-- Gallery -->
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 pt-2">
    <figure v-for="image in images" :key="image.id" class="py-4">
      <img class="rounded-md" :src="image.img" alt="" />
      <figcaption class="mt-2">{{ image.name }}</figcaption>
      <p class="text-sm text-gray-500">{{ image.description }}</p>
    </figure>
  </div>
</template>

<script>
/* eslint-disable */
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    let images = [
      {
        id: 0,
        name: "첫번째 사진",
        img: "https://i.imgur.com/dPErD5s.jpg",
        role: "Director Leader",
        description: "예배 준비중입니다.",
        link: "#home",
      },
      {
        id: 1,
        name: "두번째 사진",
        img: "https://i.imgur.com/UyimOMY.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#prayer",
      },
      {
        id: 2,
        name: "세번째 사진",
        img: "https://i.imgur.com/XTEusLc.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 3,
        name: "네번째 사진",
        img: "https://i.imgur.com/LRbjgMF.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 4,
        name: "다섯번째 사진",
        img: "https://i.imgur.com/xUc8v0t.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 5,
        name: "여섯번째 사진",
        img: "https://i.imgur.com/C52zbsi.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 6,
        name: "일곱번째 사진",
        img: "https://i.imgur.com/HNjHFGe.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 7,
        name: "여덟번째 사진",
        img: "https://i.imgur.com/o9JMHBx.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 8,
        name: "아홉번째 사진",
        img: "https://i.imgur.com/UrQcNQz.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 9,
        name: "열번째 사진",
        img: "https://i.imgur.com/QnEcvdk.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 10,
        name: "열한번째 사진",
        img: "https://i.imgur.com/Uwcg0vM.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
      {
        id: 11,
        name: "열둘번째 사진",
        img: "https://i.imgur.com/Rm2p11B.jpg",
        role: "Director Leader",
        description: "예배에 집중하는 학생들",
        link: "#kar",
      },
    ];
    onMounted(() => {});
    return {
      images,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>