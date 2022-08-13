<template>
  <div
    class="
      relative
      3xl:h-72
      h-52
      bg-blue-500
      xs:h-auto xs:square
      p-4
      lg:p-5
      rounded-2.5xl
      bg-norepeat bg-cover
      overflow-hidden
    "
    :class="index === 3 ? 'md:col-start-2' : ''"
    :style="`background-image:url('${content.img}.jpg');`"
  >
    <h3
      class="text-lg md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-2.5xl font-semibold max-w-xxs text-white"
    >
      {{ content.name }}
    </h3>
    <!-- Button: 더 보기 -->
    <div
      class="
      px-2.5
      py-0.5
      space-x-1.5
      absolute
      font-bold
      right-5
      bottom-5
      rounded-lg
      bg-gray-900/50
      text-xxs 
      text-white
      "
    >
      <button
        @click="fnEventEmit"
        >더 보기</button
      >
      <i class="fas fa-arrow-right"></i>
    </div>
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
  setup(props, context) {
    
    const fnEventEmit = () => {

      context.emit('open');
    };
    
    return {
      fnEventEmit,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>