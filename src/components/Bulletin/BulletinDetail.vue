<template>
    <div class="main-h-screen itmes-centser jsustify-center">
        <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] px-3 sm:px-6 md:px-8 md:px-12">
            <div class="flex justify-end pt-3">
                <button
                    @click="$router.go(-1)"
                    class="
                    text-blue-400
                    top-5
                    right-0
                    h-7
                    w-7
                    text-2xl
                    font-semibold
                    justify-center
                    itmes-center
                    focus:outline-none
                    "
                >
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <section class="header py-10 md:py-15">
                <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                    <h2 class="text-2xl font-semibold md:text-3xl">{{bulletin.title}}</h2>
                    <div v-for="(img, index) in bulletin.imgs" :key="index">
                        <img :src="`${img.link}`" alt="" class="my-5">
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useBulletinStore } from "../../stores/bulletins";

export default {
    setup () {
        const router = useRouter();

        /* Vuex */
        const vuexStore = useStore();

        /* Pinia */
        const store = useBulletinStore();

        const bulletin = computed(() => {
            return store.currentBulletin;
        })

        return {
            bulletin,
            is_login: computed(() => vuexStore.state.is_login),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>