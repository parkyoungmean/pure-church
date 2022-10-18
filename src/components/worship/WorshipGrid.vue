<template>
    <div class="grid grid-cols-1 xl:grid-cols-5 xl:gap-8 ">
        <div v-for="item in worships" :key="item.id" class="group">
            <WorshipCard :item="item" />
        </div>
    </div>
</template>

<script>
import WorshipCard from "./WorshipCard.vue"

export default {
    props: {
        worships: {
            type: Object,
            required: true,
        },
    },
    components: {
        WorshipCard,
    },
    setup () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>