<template>
    <div>
        <!-- Add Gallery Button -->
        <div class="right flex justify-end items-center text-xs md:text-lg">
            <div
            v-show="is_login ? true : false"
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
            <div v-for="b in bulletins" :key="b.id" class="group">
                <div  class="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img v-if="b.imgs.length!==0" :src="`${b.imgs[0].link}`" layout="fill" objcetFit="cover" alt="" class="group-hover:opacity-75">
                    <img v-else src="https://bit.ly/placeholder-img" layout="fill" objcetFit="cover" alt="" class="group-hover:opacity-75">
                </div>
                <!-- <h3 class="mt-2 text-lg font-medium text-gray-700">{{ g.title }}</h3> -->
                <!-- <p class="mt-1 text-sm text-gray-700">{{ g.author }} | {{ g.convertedAt }} </p> -->
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useBulletinStore } from "../../stores/bulletins";

export default {
    setup () {
        const router = useRouter();

        /* Vuex */
        const vuexStore = useStore();

        const store = useBulletinStore();

        const bulletins = computed(() => {            
            return store.bulletins;
        })

        onMounted(() => {
            store.fetchBulletins();
        })


        return {
            bulletins,
            is_login: computed(() => vuexStore.state.is_login),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>