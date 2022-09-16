<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header py-10 md:py-15">
            <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                <h2 class="text-2xl font-semibold md:text-3xl text-center">갤러리</h2>
                <!-- Add Gallery Button -->
                <div class="right flex justify-end items-center text-xs md:text-lg">
                    <div
                    @click="galleryFormOpen()"
                    class="
                        button
                        flex
                        text-xs
                        md:text-lg
                        p-1
                        md:p-1
                        5
                        rounded-3xl
                        bg-purple-500
                        space-x-1
                        mr-2
                        md:mr-5
                        cursor-pointer
                        items-center
                    "
                    >
                        <div class="inner-button flex">
                            <i class="fas fa-plus text-purple-700 p-1 md:p-1.5 rounded-full bg-white"></i>
                        </div>
                        <div class="text-white">추가하기</div>
                    </div>
                </div>
                <!-- Image List -->
                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-6">
                    <div v-for="g in gallery" :key="g.id" class="group">
                        <div @click="galleryDetailOpen(g.id)" class="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                            <img v-if="g.imgs.length!==0" :src="`${g.imgs[0].link}`" layout="fill" objcetFit="cover" alt="" class="group-hover:opacity-75">
                            <img v-else src="https://bit.ly/placeholder-img" layout="fill" objcetFit="cover" alt="" class="group-hover:opacity-75">
                        </div>
                        <!-- <h3 class="mt-2 text-lg font-medium text-gray-700">{{ g.title }}</h3> -->
                        <!-- <p class="mt-1 text-sm text-gray-700">{{ g.author }} | {{ g.convertedAt }} </p> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { computed, onMounted } from "vue-demi";
import { useRouter } from "vue-router";
import { useGalleryStore } from "../stores/gallery";
import GalleryRegistration from "../components/gallery/GalleryRegistration.vue";

export default {
    components: {
        GalleryRegistration,
    },
    setup () {
        
        const router = useRouter();
        const store = useGalleryStore();

        const gallery = computed(() => {            
            return store.galleryImages;
        })

        onMounted(() => {
            store.fetchGallery();
        })

        const galleryDetailOpen = (id) => {
            console.log(id);
            store.selectedGallery(id);
            router.push("/gallerydetail");
        };

        /* Create Gallery Infomation */
        const galleryFormOpen = () => {
            router.push("/galleryregistration");
        };

        return {
            gallery,
            galleryFormOpen,
            galleryDetailOpen,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>