<template>
  <section id="#" class="pt-19 pb-12 px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500"></section>

  <section id="introduce" class="min-h-screen bg-gray-100">
    <ProfileCard />
    <ServiceTeam />
  </section>

  <section id="school" class="min-h-screen"></section>

  <section id="notice" class="min-h-screen bg-green-100"></section>

  <section id="etc" class="min-h-screen bg-red-100"></section>
</template>

<script>
/* eslint-disable */

import { reactive, toRefs } from "vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ServiceTeam from "@/components/ServiceTeam.vue";

export default {
  components: {
    ProfileCard,
    ServiceTeam,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>