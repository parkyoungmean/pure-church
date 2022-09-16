<template>
    <div class="bg-black min-h-screen flex flex-col items-center justify-center">
        <div class="max-w-sm md:max-w-md 2xl:max-w-[1640px] m-auto">
            <div class="relative w-full p-5 md:p-10 min-h-screen md:h-full">
                <!-- Back Button -->
                <div class="absolute right-8 md:right-10 flex justify-end pt-14 md:pt-13 z-30">
                    <button
                        @click="$router.go(-1)"
                        class="
                        top-5
                        right-0
                        h-7
                        w-7
                        text-lg
                        lg:text-xl
                        2xl:text-4xl
                        text-white
                        font-semibold
                        justify-center
                        itmes-center
                        focus:outline-none
                        "
                    >
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div class="absolute">
                    <h1 class="text-white font-bold text-md md:text-xl pt-20 lg:text-2xl"> {{ gallery.title }} </h1>
                </div>
                
                <div class="lightBoxBody -mt-13 2xl:-mt-20">
                    <ImageSlider :imgs="gallery.imgs" :thumbs="thumbs" :current-slide="slide" />
                </div>
                <div class="lightBoxBody -mt-36 2xl:-mt-32">
                    <Thumbnail :imgs="gallery.imgs" @thumbs="changeThumbs" v-model:current-slide="slide"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useGalleryStore } from "../../stores/gallery";
import ImageSlider from "../common/ImageSlider.vue";
import Thumbnail from "../common/Thumbnail.vue";

    export default {
        components: {
            ImageSlider,
            Thumbnail,
        },
        setup () {
        const router = useRouter();
        
        /* Vuex */
        const vuexStore = useStore();

        /* Pinia */
        const store = useGalleryStore();

        const thumbs = ref(null);

        const gallery = computed(() => {
            if (store.galleryImages.length != 0) {
                console.log('GalleryDetail', store.currentGallery);
                return store.currentGallery;
            }
        });

        const changeThumbs = (param) => {
            thumbs.value = param;
        };

        return {
            gallery,
            thumbs,
            changeThumbs,
            is_login: computed(() => vuexStore.state.is_login),
        }
    }
        
    }
</script>

<style lang="scss" scoped>

</style>