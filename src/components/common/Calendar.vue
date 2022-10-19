<template>
    <div class="space-y-5 pt-15">
        <!-- Service Time Header -->
        <div class="flex justify-between items-center">
            <h2 class="text-lg 2xl:text-xl font-bold"> {{`${new Date().getFullYear()}년 순전한 교회 예배`}}</h2>
        </div>
        <!-- Service Time Body -->
        <div class="xl:space-y-7 3xl:space-y-10">
            <div v-for="(worship, index) in latestWorships" :key="index">
                <div class="flex justify-between">
                    <h5 class="xl:text-sm 2xl:text-md font-bold text-gray-600">{{ worship.time }}</h5>
                    <!-- 예배 재생 버튼 -->
                    <button @click="toggleModal(worship)" class="text-lg 2xl:text-xl 4xl:text-2xl">
                        <i class="far fa-play-circle"></i>
                    </button>
                </div>
                <div class="flex justify-between items-center xl:gap-2 2xl:gap-4">
                    <p class="2xl:w-28 xl:text-md 2xl:text-lg 4xl:text-xl">{{ worship.tag }}</p>
                    <div class="w-1 rounded-xl h-10 bg-[#70367c]" :class="`${worship.color}`"></div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800 text-sm xl:text-xs 4xl:text-md 8xl:text-lg">{{ worship.title }}</p>
                        <p class="text-gray-500 text-xs 4xl:text-sm">{{ worship.verse }} | {{ worship.speaker }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import { useWorshipStore } from "../../stores/worships";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export default {
    setup () { 

        const router = useRouter();

        /* Pinia */
        const store = useWorshipStore();
       
        const latestWorships = computed(() => {
            return store.latestWorships;
        });

        onMounted(() => {
            loadVideo();
        })

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const loadVideo = async () => {
            
            /* 최근 예배 플레이리스트 id */
            const pid = 'UU9LuMbo8JtxglIrjRI_wU4A';
            
            const playlistURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?playlist_id=${pid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${playlistURL}`;

            await fetch(reqURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    
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
                            author: '관리자',
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

        const toggleModal = (worship) => {
            store.currentWorship = worship;
            store.toggleModal();
        };

        return {
            latestWorships,
            toggleModal,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>