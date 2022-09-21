<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header py-10 md:py-15">
            <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                <h2 class="text-2xl font-semibold md:text-3xl text-center">갤러리</h2>
                <ImageCardList />
            </div>
        </section>
    </div>
</template>

<script>
import ImageCardList from "../components/gallery/ImageCardList.vue";

export default {
    components: {
        ImageCardList,
    },
    setup () {

        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>