<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    htmlContent: {
      type: String,
      required: true,
    },
  },
  render(createElement) {
    // https://vuejs.org/v2/guide/render-function.html#createElement-Arguments
    const options = {
      domProps: { innerHTML: this.htmlContent },
    };
    return createElement("div", options);
  },
  mounted() {
    const anchors = this.$el.getElementsByTagName("a"); // Not iterable

    Array.from(anchors).forEach((anchor) => {
      const url = anchor.getAttribute("href");
      // Skip external links
      if (!url.startsWith("https://example.com")) return;
      const path = url.replace("https://example.com", "");
      // https://vuejs.org/v2/api/#propsData
      const propsData = { to: path };
      // https://vuejs.org/v2/api/#parent
      // Without parent context RouterLink will be unable to access this.$router, etc.
      const parent = this;

      const RouterLink = Vue.component("RouterLink");
      const routerLink = new RouterLink({ propsData, parent });
      routerLink.$el.innerHTML = anchor.innerHTML;
      routerLink.$mount(anchor); // Replaces anchor element
    });
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>