<template>
    <div class="bg-black min-h-screen flex flex-col items-center justify-center">
        <div class="max-w-sm md:max-w-md 2xl:max-w-[1640px] m-auto">
            <div class="relative w-full p-5 md:p-10 min-h-screen md:h-full">
                <!-- Header -->
                <div class="absolute flex pt-12 md:pt-13 space-x-1 md:space-x-10 z-10">
                    <!-- Back Button -->
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
                    <!-- Title -->
                    <h1 class="text-white font-bold md:font-extrabold text-sm md:text-xl pt-1 lg:text-3xl"> {{ gallery.title }} </h1>
                </div>
                <!-- 더 보기 Button -->
                <div @click="dropdownOpen" class="absolute right-10 pt-12 text-2xl grid place-items-center rounded-full cursor-pointer text-white z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:w-10 md:h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>
                <!-- menu -->
                <div v-show="open" class="absolute bg-white right-6 rounded-md shadow-xl mt-18 md:mt-24 text-sm md:text-xl font-semibold md:font-bold z-10">
                    <ul class="md:space-y-2">
                        <li @click="editGalleryForm" type="button" class="block px-2 md:px-4 py-2 text-epic-blue">
                            <router-link :to="{name: 'galleryedit'}"><i class="fas fa-edit pr-1"></i>수정</router-link>
                        </li>
                        <li class="block px-2 md:px-4 py-2 text-red-400">
                            <a href=""><i class="fas fa-trash pr-1"></i>삭제</a>
                        </li>
                    </ul>
                </div>
                <!-- End Of Header -->
                <!-- Image Slider -->
                <div class="lightBoxBody -mt-8 2xl:-mt-20">
                    <ImageSlider :imgs="gallery.imgs" :thumbs="thumbs" :current-slide="slide" />
                </div>
                <div class="lightBoxBody -mt-36 2xl:-mt-32">
                    <Thumbnail :imgs="gallery.imgs" @thumbs="changeThumbs" v-model:current-slide="slide"/>
                </div>
                <!-- End Of Image Slider -->
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

            const open = ref(false);

            const thumbs = ref(null);

            const gallery = computed(() => {
                    return store.currentGallery;
            });
            
            const dropdownOpen = () => {
                open.value = !open.value;
            }

            const changeThumbs = (param) => {
                thumbs.value = param;
            };

            const editGalleryForm = () => {
                router.push("/galleryedit");
            };

            return {
                open,
                dropdownOpen,
                gallery,
                thumbs,
                changeThumbs,
                editGalleryForm,
                is_login: computed(() => vuexStore.state.is_login),
            }
        }   
    }
</script>

<style lang="scss" scoped>

</style>