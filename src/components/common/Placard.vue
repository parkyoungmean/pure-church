<template>
    <div class="relative bg-white shadow-orange-50 shadow-2xl p-5 md:p-7 rounded-xl flex w-74 md:w-full">
        <div class="absolute top-0 left-0 w-2 h-full rounded-l-xl" :class="`${card.color}`"></div>
        <div class="flex-1">
            <h6 class="text-xl xl:text-2xl font-bold">{{ card.name }}</h6>
            <p class="text-gray-500">{{ card.description }}</p>
            <p class="text-gray-500">{{ card.time }}</p>
        </div>
        <button class="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 border bg-epic-blue rounded-full">
            <span class="material-icons-outlined text-white font-bold rounded-full">
                arrow_forward_ios
            </span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    setup () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>