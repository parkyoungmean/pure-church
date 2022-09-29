<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header py-10 md:py-15">
            <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                <h2 class="text-2xl font-semibold md:text-3xl text-center">예배</h2>
                <WorshipCardList />
            </div>
        </section>
    </div>
</template>

<script>
import WorshipCardList from "@/components/worship/WorshipCardList.vue"

export default {
    components: {
        WorshipCardList,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>