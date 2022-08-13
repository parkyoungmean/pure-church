<template>
  <div class="max-w-[1640px] 2xl:max-w-[3280px] m-auto p-4">
    <div class="max-h-[500px] relative">
      <div class="absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center">
        <h1 class="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">순전한 <span class="text-green-400">학교</span></h1>
        <h1 class="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span class="text-green-400">아름다운 </span>예수</h1>
      </div>
      <img :src="require(`../../assets/${bgImg}`)" alt="" class="w-[1640px] 2xl:w-[3280px] h-[200px] md:h-[300px] 2xl:h-[350px] 3xl:h-[400px] bg-cover" />
    </div>
  </div>
  <div class="grid place-items-center">
    <!-- Responsive Grid Layout -->
    <div
      class="
        p-4
        xs:px-12
        max-w-5xl
        3xl:max-w-7xl
        grid
        gap-4
        xs:grid-cols-2 
        md:grid-cols-4
      "
    >
      <h1
        class="
          text-2xl
          2xl:text-2xl
          font-extrabold
          xs:pt-0 xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2
          md:col-span-3 md:text-5xl md:grid-cols-3
        "
      >
        <span class="hidden md-span-4 text-epic-blue">순전한 학교</span>
      </h1>
      <p
        class="
          xs:row-start-2 xs:col-start-2 xs:self-center
          md:col-start-1 md:col-span-2 md:pr-12 md:text-lg
        "
      >
        <span class="text-epic-blue font-bold">순전한 학교</span>는 <span class="text-fuchsia-500 font-semibold"> 능력있는 중보기도</span>, <span class="text-orange-500 font-semibold">치유학교</span>, <span class="text-amber-500 font-semibold">복음학교</span>, <span class="text-blue-500 font-semibold">사역자 학교</span>, <span class="text-rose-500 font-semibold">친밀감
        학교</span>의 커리큘럼으로 구성됩니다.
      </p>
      <PrimaryCard
        v-for="(card, index) in schools"
        :key="index"
        :content="card"
        :index="index"
        @open="schoolDetailOpen(card.id)"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue-demi";
import { useRouter } from "vue-router";
import { useSchoolStore } from "../../stores/schools";
import PrimaryCard from "@/components/PrimaryCard.vue";

export default {
  setup() {
    const bgImg = "arthur-yao-8P_8v-NKDrY-unsplash.jpg";

    const store = useSchoolStore();

    const router = useRouter();

    const schools = computed(() => {
        return store.schools;
    })

    onMounted(() => {
      store.fetchSchools();
    });

    const schoolDetailOpen = (id) => {
      console.log(id);
      
      store.selectedSchool(id);
      router.push("/schooldetail");

    };

    return {
      bgImg,
      schools,
      schoolDetailOpen,
    };
  },
  components: {
    PrimaryCard,
  }
};
</script>

<style lang="scss" scoped>
</style>