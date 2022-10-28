<template>
    <div class="min-h-screen items-center justify-center">
        <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] px-3 sm:px-6 md:px-8 md:px-12">
            <!-- Close Button -->
            <div class="flex justify-end p-3 md:p-6">
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
                    items-center
                    focus:outline-none
                "
                >
                <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <section class="header py-10 md:py-15">
                <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                    <h2 class="text-2xl font-semibold md:text-3xl text-center">주보</h2>
                    <BulletinCardList />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import BulletinCardList from "../components/Bulletin/BulletinCardList.vue";

export default {
    components: {
        BulletinCardList,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>