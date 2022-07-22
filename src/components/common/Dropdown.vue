<template>
  <div class="relative flex justify-center items-center gap-5">
      <button @click="open = !open" class="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
          <p class="px-4 dark:text-white">
              {{ selected.length > 5 ? selected.substring(0, 3) + "..." : selected }}
          </p>
          <span class="border-l p-2 hover:bg-gray-100">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rull="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
            </svg>
          </span>
      </button>
      <div v-show="open" class="absolute group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
          <ul v-for="(item, index) in items" :key="index" class="text-left border rounded">
              <li @click="selectItem(item); selected = item.text;" class="px-4 py-1 hover:bg-gray-100 border-b"> {{ item.text }} </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue-demi";

export default {
  props: {
      items: {
          type: Object,
      },
      selected: {
        type: String,
        required: true,
      },
  },
  setup(props, context) {
    const open = ref(false); // 드롭다운 open, close

    const selectItem = (item) => {
      props.selected = item.text;
      open.value = false;

      context.emit('on-change', item.value);
    };

    return {
      open,
      selectItem,
    };
  },
};
</script>

<style lang="scss" scoped>
    filter {
      align-items: center;
    }

    .filter {
      cursor: pointer;

      .filter-menu {
        top: 25px;
        list-style: none;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 px 4px -1px rgba(0, 0, 0, 0.06);

        li {
          cursor: pointer;
        }
      }
    }


/* Transition */
.filter-enter-active,
.filter-leave-active {
  transition: 0.3s ease all;
  opacity: 0.5;
}
.filter-enter,
.filter-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>