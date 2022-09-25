<template>
    <div class="flex flex-col md:flex-row itmes-center md:items-stretch gap-7">
        <Worship v-for="(worship, index) in worships" :key="index" :worship="worship"  class="w-full md:w-1/3 bg-orange p-4"/>
    </div>
</template>

<script>
import Worship from "./Worship.vue"

export default {
    components: {
        Worship,
    },
    setup () {
        let worships = [
            {
                id: 0,
                date: "09월 18일",
                title: "빛과 빛의 다리",
                img: "https://i.ytimg.com/vi/KFQK4F18Us8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxf_TelUtdmVmn4qqB6Z-_qgCpjA",
                speacker: "",
                tag: "주일 예배",
                content: "요한계시록 1:9-20",
                color: "bg-rose-bud-600",
                link: "#home",
                time: "01:28:20"
            },
            {
                id: 1,
                date: "09월 02일",
                title: "하나님 아버지의 마음",
                img: "https://i.ytimg.com/vi/Qg1bRBQ4qck/hqdefault.jpg?du=3000&sqp=CL36uZkG&rs=AOn4CLA6CbKojo7D_zbt8CXsLHwXBxd20g",
                speacker: "",
                tag: "목요 예배",
                content: "누가복음 15:8-10",
                color: "bg-fuchsia-600",
                link: "#home",
                time: "01:28:19"
            },
            {
                id: 1,
                date: "08월 21일",
                title: "동행",
                img: "https://i.ytimg.com/vi/oVLoIpvBOo4/hqdefault.jpg?du=3000&sqp=CMbGu5kG&rs=AOn4CLAaQYZTDeQXPVBkxhw28q9oj-aqFg",
                speacker: "",
                tag: "프랜드 어린이 예배",
                content: "신명기 15:10-11",
                color: "bg-fuchsia-600",
                link: "#home",
                time: "46:31"
            },
        ];

        return {
            worships,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>