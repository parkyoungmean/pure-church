<template>
  <main class="container mx-auto max-w-6xl px-5">
    <div class="mt-4 row-gap-6 py-3 md:py-5 grid gap-12 md:gap-16 md:grid-cols-3">
      <article v-for="post in posts" :key="post.id">
        <a href=""
          ><img
            :src="post.img"
            alt=""
            class="
              mb-2
              w-full
              h-40
              lg:h-52
              object-cover
              rounded-xl
            " /></a
        ><a
          href=""
          class="
            text-cw-blue-300
            hover:text-cw-blue-600 hover:underline
            text-sm
            mb-1
            block
          "
          >{{ post.tag }}</a
        >
        <h2>
          <a
            href=""
            class="
              font-bold font-work-sans
              text-xl text-cw-grey-900
              hover:text-cw-blue-600
            "
          >
            {{ post.title }}
          </a>
        </h2>
        <p class="text-sm leading-loose">
          {{ post.content }}
        </p>
      </article>
    </div>
  </main>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>