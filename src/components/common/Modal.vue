<template>
    <div id="modal" class="fixed top-0 left-0 z-40 w-screen h-screen bg-black/70 flex justify-center items-center">
        <!-- Close Button -->
        <button @click="toggleModal" class="fixed z-50 top-6 right-8 text-white text-3xl">
            <i class="fas fa-times"></i>
        </button>
        <iframe :src="`https://youtube.com/embed/${currentWorship.videoId}?controls=1&autoplay=1`" width="100%" height="100%" frameborder="0" allowfullscreen autoplay></iframe>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useWorshipStore } from "../../stores/worships";

export default {
    setup () {
        
        /* Pinia */
        const store = useWorshipStore();

        const toggleModal = () => {
            store.toggleModal();
        };

        const currentWorship = computed(() => {
            return store.currentWorship;
        });

        return {
            toggleModal,
            currentWorship,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>