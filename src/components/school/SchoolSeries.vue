<template>
    <div class="w-72 md:w-60 rounded-2.5xl overflow-hidden relative my-8 md:my-0">
        <img class="w-72 md:w-60 h-40" :src="content.background" alt="">
        <!-- <div class="absolute flex items-center justify-center rounded-full right-5 top-34 w-14 h-14">
            <img :src="content.leader.img" class="w-12 h-12 rounded-full" alt="">
            <span class="absolute inset-0 border rounded-full border-white/50" />
        </div> -->
        <!-- <span class="px-2 py-0.5 absolute right-2 top-2 text-white rounded-lg bg-gray-900/50 text-xxs">
            {{ content.status }}
        </span> -->
        <div :class="`px-5 py-5 ${color.bgColor}`">
            <div class="flex items-center">
                <span class="text-xs font-normal tracking-wider text-gray-400">
                    {{ content.status }}
                </span>
                <span class="w-2 h-2 ml-2 rounded-full" :class="content.status === 'open' ? 'bg-green-300' : 'bg-orange-500'"></span>
            </div>
            <h3 class="inline-block pt-1 font-medium leading-relaxed"> {{ content.name }} </h3>
            <span class="inline-block pt-4 text-sm md:text-xs tracking-wider text-gray-500">
                {{ content.term.start.replaceAll('-', '.') }}~{{ content.term.end.replaceAll('-', '.') }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },
        color: {
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