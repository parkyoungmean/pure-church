<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header py-10 md:py-15">
            <div class="m-auto sm:w-full md:max-w-5xl xl:max-w-6xl 2xl:min-w-[1100px] 3xl:max-w-[1250px] 4xl:max-w-[1200px] 5xl:max-w-[1300px] 6xl:max-w-[1500px] 7xl:max-w-[1500px] 8xl:max-w-[1600px]">
                <WorshipIntroduction />
            </div>
            <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                <h2 class="text-2xl font-semibold md:text-3xl text-center">예배</h2>
                <WorshipCardList />
            </div>
        </section>
    </div>
</template>

<script>
import WorshipIntroduction from '@/components/worship/WorshipIntroduction.vue';
import WorshipCardList from "@/components/worship/WorshipCardList.vue"

export default {
    components: {
        WorshipIntroduction,
        WorshipCardList,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>