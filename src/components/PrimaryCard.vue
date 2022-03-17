<template>
  <div
    class="
      relative
      h-52
      bg-blue-500
      xs:h-auto xs:square
      p-4
      lg:p-6
      rounded-2.5xl
      bg-norepeat bg-cover
      overflow-hidden
    "
    :class="index === 3 ? 'md:col-start-2' : ''"
    :style="`background-image:url('${content.img}');`"
  >
    <h3
      class="text-lg md:text-xl lg:text-3xl font-semibold max-w-xxs text-white"
    >
      {{ content.title }}
    </h3>
    <span
      class="
        px-2
        py-0.5
        absolute
        font-medium
        right-5
        bottom-5
        rounded-lg
        bg-gray-900/50
        text-xxs text-white
      "
      >더 보기>></span
    >
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