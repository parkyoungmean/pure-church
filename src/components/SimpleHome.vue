<template>
  <section id="#" class="pt-19 pb-12 px-8 md:px-12"></section>

  <section id="home" class="min-h-screen bg-blue-500"></section>

  <section id="introduce" class="min-h-screen bg-gray-100">
    <ProfileCard />
    <ServiceTeam />
  </section>

  <section id="school" class="min-h-screen"></section>

  <section id="notices" class="min-h-screen bg-green-100">
    <div class="w-full min-h-screen font-sans text-gray-900">
      <main class="md:py-16 px-4 mx-auto max-w-7xl">
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
          <div class="flex gap-x-8 items-center pt-12">
              <a href="" x-on:click.prevent="tab = 'notice'" class="text-sm md:text-lg font-medium"> 공지사항 </a>
              <a href="" x-on:click.prevent="tab = 'bbs'" class="text-sm md:text-lg font-indigo-500">
                자유 게시판
              </a>
              <a href="" x-on:click.prevent="tab = 'gallery'" class="text-sm md:text-lg font-indigo-500">
                활동 사진
              </a>
              <a href="" x-on:click.prevent="tab = 'donation'" class="text-sm md:text-lg font-indigo-500">
                후원 안내
              </a>
          </div>
          <div class="">
            <div x-show="tab === 'notice'" class="">
              <p>여기는 공지사항 탭입니다.</p>
            </div>
            <div x-show="tab === 'bbs'" class="">
              <p>여기는 자유게시판입니다.</p>
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
import SimpleGallery from "@/components/SimpleGallery.vue";

export default {
  components: {
    ProfileCard,
    ServiceTeam,
    SimpleGallery,
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