<template>
    <div class="relative h-56 md:h-96 rounded-2.5xl p-10 w-full xl:w-2/3 bg-center bg-cover bg-no-repeat overflow-hidden" :style="`background-image: url('${worship.img}')`">
        <span class="absolute px-1.5 py-0.5 md:px-2 md:py-2 left-3 top-5 rounded-lg bg-gray-900/80 text-lg text-white font-bold"> {{ worship.date }} {{ worship.tag }} </span>
        <span class="px-2 py-0.5 absolute right-5 bottom-5 rounded-lg bg-gray-900/50 text-xxs text-white"> {{ worship.time }} </span>
    </div>
</template>

<script>
export default {
    props: {
        worship: {
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