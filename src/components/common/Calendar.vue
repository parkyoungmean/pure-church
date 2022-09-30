<template>
    <div class="space-y-5 pt-15">
        <!-- Service Time Header -->
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold"> {{`${new Date().getFullYear()}년 순전한 교회 예배`}}</h2>
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
            <div v-for="(worship, index) in latestWorships" :key="index">
                <div class="flex justify-between">
                    <h5 class="font-bold text-gray-600">{{ worship.time }}</h5>
                    <span class="material-icons-outlined">
                        more_vert
                    </span>
                </div>
                <div class="flex justify-between items-center gap-4">
                    <p class="w-28 text-lg 4xl:text-xl">{{ worship.tag }}</p>
                    <div class="w-1 rounded-xl h-10 bg-[#70367c]" :class="`${worship.color}`"></div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800 text-sm 4xl:text-md 8xl:text-lg">{{ worship.title }}</p>
                        <p class="text-gray-500 text-xs 4xl:text-sm">{{ worship.verse }} | {{ worship.speaker }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 최근 예배 영상 -->
        <div>
            <iframe v-show="false" class="latestVideoEmbed" vnum='0' pid="UU9LuMbo8JtxglIrjRI_wU4A" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import axios from "axios";
import { useWorshipStore } from "../../stores/worships";


import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

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

        const router = useRouter();

        /* Pinia */
        const store = useWorshipStore();
       
        const latestWorships = computed(() => {
            return store.latestWorships;
        });

        onMounted(() => {
            var iframes = document.getElementsByClassName('latestVideoEmbed');
            
            for (var i = 0, len = iframes.length; i < len; i++) {
                loadVideo(iframes[i]);
            }
        })

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const loadVideo = async (iframe) => {
            
            /* 최근 예배 플레이리스트 id */
            const pid = 'UU9LuMbo8JtxglIrjRI_wU4A';
            
            const playlistURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?playlist_id=${pid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${playlistURL}`;

            await fetch(reqURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
                    console.log(videoNumber);
                    
                    const link = result.items[videoNumber].link;
                    const id = link.substr(link.indexOf("=") + 1);

                    
                    /* iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=1&autoplay=1`); */

                    let worshipArray = [];

                    result.items.forEach((v) => {
                        let worship = v;

                        let titleArr = worship.title.split(/[/]/);
                        /* 주일 - 0:제목, 1:구절, 2:강사, 3:날짜  */
                        /* 목요 - 0:근원 , 1:날짜, 2:구절, 3:강사 */
                        console.log(titleArr);

                        worshipArray.push({
                            id: worship.guid,
                            link: worship.link,
                            videoId: worship.link.substr(worship.link.indexOf("=") + 1),
                            originTitle: worship.title,
                            title: titleArr[0].replace("[Live]","").trim(),
                            tag: worship.title.indexOf('목요') !== -1 ? titleArr[1].substr(-5): titleArr[3].substr(-4),
                            verse: worship.title.indexOf('목요') !== -1 ? titleArr[2]: titleArr[1],
                            speaker: worship.title.indexOf('목요') !== -1 ? titleArr[3]: titleArr[2],
                            color: worship.title.indexOf('목요') !== -1 ? 'bg-[#95E1D3]': 'bg-carnation-pink-400',
                            time: worship.title.indexOf('목요') !== -1 ? dayjs(titleArr[1].replace("목요예배","").trim()).format("MM월 DD일"): dayjs(titleArr[3].replace("주일예배","").trim()).format("MM월 DD일"),
                            createdAt: worship.pubDate,
                            convertedAt: dayjs(worship.pubDate).format("YYYY년 MM월 DD일"),
                            belong: worship.title.indexOf('목요') !== -1 ? '목요예배': '주일예배',
                            author: worship.author || '관리자',
                            width: '640',
                            height: '480',
                            /* updatedAt: worship.UpdatedAt, */
                            status: worship.Status,
                        });
                    });

                    store.latestWorships = worshipArray;

                    console.log('최근 예배 동영상은?', store.latestWorships);

                })
                .catch(error => console.log('error', error));
        }
        return {
            worships,
            latestWorships,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>