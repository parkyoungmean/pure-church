<template>
    <div class="space-y-5 pt-15">
        <!-- Service Time Header -->
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">2022년 순전한교회 예배</h2>
            <!-- <button class="relative p-2 bg-white rounded-xl">
                <span class="material-icons-outlined">
                    notifications
                </span>
                <span class="absolute bg-red-400 h-2 w-2 rounded-full top-2.5 right-2.5"></span>
            </button> -->
            <!-- <button class="relative p-2 bg-white rounded-xl">
                전체 보기
                <span class="material-icons-outlined">
                    keyboard_double_arrow_right
                </span>
            </button> -->
        </div>
        <!-- Service Time Body -->
        <div class="space-y-10">
            <div v-for="(worship, index) in worships.reverse()" :key="index">
                <div class="flex justify-between">
                    <h5 class="font-bold text-gray-600">{{ worship.time }}</h5>
                    <span class="material-icons-outlined">
                        more_vert
                    </span>
                </div>
                <div class="flex justify-between items-center gap-4">
                    <p class="w-28 text-xl">{{ worship.tag }}</p>
                    <div class="w-1 rounded-xl h-10 bg-[#70367c]" :class="`${worship.color}`"></div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800 text-xl">{{ worship.title }}</p>
                        <p class="text-gray-500">{{ worship.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () { 
        let worships = [
        {
            id: 0,
            time: "08월 28일",
            title: "아도니베섹을 이길 전략",
            img: "https://i.imgur.com/dPErD5s.jpg",
            speacker: "",
            tag: "주일 예배",
            content: "요한계시록 13:1-10",
            color: "bg-rose-600",
            link: "#home",
        },
        {
            id: 1,
            time: "09월 01일",
            title: "하늘의 기쁨",
            img: "https://i.imgur.com/dPErD5s.jpg",
            speacker: "",
            tag: "목요 예배",
            content: "누가복음 15:8-10",
            color: "bg-fuchsia-600",
            link: "#home",
        },
        {
            id: 2,
            time: "09월 04일",
            title: "이마에 새겨진 사랑",
            img: "https://i.imgur.com/dPErD5s.jpg",
            speacker: "",
            tag: "주일 예배",
            content: "요한계시록 13:11-18",
            color: "bg-rose-600",
            link: "#home",
        },
        {
            id: 3,
            time: "09월 08일",
            title: "어느 작은 가지의 고백",
            img: "https://i.imgur.com/UyimOMY.jpg",
            speacker: "",
            tag: "목요 예배",
            content: "요한복음 15:5-7",
            color: "bg-fuchsia-600",
            link: "#prayer",
        },
        {
            id: 4,
            time: "09월 11일",
            title: "마침내 승리의 봉인이 열리다",
            img: "https://i.imgur.com/XTEusLc.jpg",
            speacker: "",
            tag: "주일 예배",
            content: "요한계시록 1:1-6",
            color: "bg-rose-600",
            link: "#kar",
        },
        {
            id: 5,
            time: "09월 15일",
            title: "아름다운 동역, 빛과 동역하다",
            img: "https://i.imgur.com/LRbjgMF.jpg",
            speacker: "",
            tag: "목요 예배",
            content: "요한복음 1:19-28",
            color: "bg-fuchsia-600",
            link: "#kar",
        },
        {
            id: 6,
            time: "09월 18일",
            title: "빛과 빛의 다리",
            img: "https://i.imgur.com/xUc8v0t.jpg",
            speacker: "",
            tag: "주일 예배",
            content: "요한계시록 1:9-20",
            color: "bg-rose-600",
            link: "#kar",
        },
        {
            id: 7,
            time: "09월 22일",
            title: "하나님 아버지 마음",
            img: "https://i.imgur.com/C52zbsi.jpg",
            speacker: "",
            tag: "목요 예배",
            content: "고린도후서 7:6-10",
            color: "bg-fuchsia-600",
            link: "#kar",
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