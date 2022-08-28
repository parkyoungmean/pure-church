<template>
  <div class="min-h-screen items-center justify-center">
    <section class="header py-10 md:py-15 text-center">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <h2 class="text-2xl font-semibold md:text-3xl">공지사항</h2>
        <NoticeCardList />
      </div>
    </section>
  </div>
</template>

<script>
import NoticeRegistration from "../components/notice/NoticeRegistration.vue";
import NoticeCardList from "../components/notice/NoticeCardList.vue";

export default {
  components: {
    NoticeRegistration,
    NoticeCardList,
  },
  setup() {



    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>