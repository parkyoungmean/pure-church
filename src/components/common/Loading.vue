<template>
    <div>
        <!-- Spin Loading Animation -->
        <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <div class="flex items-center justify-center w-screen h-screen">
                <button class="flex items-center rounded-lg bg-green-500/90 px-4 py-2 md:px-5 md:py-3 text-white">
                    <svg class="mr-3 h-5 w-5 md:h-8 md:w-8 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span class="font-medium md:font-bold">
                        {{ content }}
                    </span>
                </button>
            </div>
        </div>
        <!-- End Of Spin Loading Animation -->
    </div>
</template>

<script>
import { watch } from "vue-demi";

export default {
    props: {
        active: {
            type: Boolean,
        },
        content: {
            type: String,
        },
    },
    setup (props, context) {
        
        watch(props.active, (newValue, oldValue) => {
            props.active = newValue;
            console.log(newValue);
        })

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>