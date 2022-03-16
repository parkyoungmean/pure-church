<template>
  <div
    class="h-16 bg-blue-500 xs:h-auto xs:square p-4 lg:p-6 rounded-2.5xl"
    :class="index === 3 ? 'md:col-start-2' : ''"
  >
  <h3 class="text-xs md:text-xl lg:text-3xl font-semibold max-w-xxs text-white" >{{ content.title }}</h3>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
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